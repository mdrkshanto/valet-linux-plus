/* Valet Linux+ static docs — Vue application */
(function () {
  'use strict';

  const DATA = window.VLP_DATA;
  const { createApp, nextTick } = Vue;

  /* ----------------------------- Reusable code panel ---------------------------- */
  const CodePanel = {
    props: {
      label: { type: String, default: '' },
      lang: { type: String, default: 'bash' }
    },
    data() {
      return { copied: false, timer: null };
    },
    methods: {
      legacyCopy(text) {
        return new Promise((resolve, reject) => {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          try {
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            ok ? resolve() : reject(new Error('copy failed'));
          } catch (err) {
            document.body.removeChild(ta);
            reject(err);
          }
        });
      },
      copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
          const timeout = new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('clipboard timeout')), 500);
          });
          return Promise.race([navigator.clipboard.writeText(text), timeout])
            .catch(() => this.legacyCopy(text));
        }
        return this.legacyCopy(text);
      },
      async copy() {
        const el = this.$refs.body;
        if (!el) return;
        const text = el.innerText.replace(/\n+$/, '').trim();
        try {
          await this.copyText(text);
          this.copied = true;
          clearTimeout(this.timer);
          this.timer = setTimeout(() => { this.copied = false; }, 1800);
        } catch (err) {
          // Silently ignore clipboard restrictions; the code stays selectable.
        }
      }
    },
    beforeUnmount() { clearTimeout(this.timer); },
    template: `
      <div class="code-block">
        <div class="code-head">
          <div class="flex min-w-0 items-center gap-3">
            <span class="code-dots"><span class="code-dot bg-red-400/70"></span><span class="code-dot bg-amber-400/70"></span><span class="code-dot bg-emerald-400/70"></span></span>
            <span class="font-mono text-[10px] font-bold uppercase tracking-[.16em] text-ink-500">{{ lang }}</span>
            <span v-if="label" class="truncate text-[11px] text-ink-400">· {{ label }}</span>
          </div>
          <button @click="copy" class="code-copy" type="button" :aria-label="'Copy ' + lang + ' code'">
            <svg v-if="!copied" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
            <svg v-else class="h-3.5 w-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m5 12 4 4L19 6"/></svg>
            {{ copied ? 'Copied' : 'Copy' }}
          </button>
        </div>
        <div class="code-body" ref="body"><slot></slot></div>
      </div>`
  };

  /* --------------------------------- App --------------------------------------- */
  const app = createApp({
    components: { CodePanel },

    data() {
      return {
        version: DATA.version,
        legacyVersion: DATA.legacyVersion,
        projects: DATA.projects,
        topLinks: DATA.topLinks,
        navGroups: DATA.navGroups,
        iconPaths: DATA.iconPaths,
        requestFlow: DATA.requestFlow,
        featureCards: DATA.featureCards,
        comparison: DATA.comparison,
        featureGroups: DATA.featureGroups,
        installedServices: DATA.installedServices,
        packageManagers: DATA.packageManagers,
        builtinDrivers: DATA.builtinDrivers,
        serviceTable: DATA.serviceTable,
        commands: DATA.commands,
        commandCategories: DATA.commandCategories,
        releases: DATA.releases,
        faqs: DATA.faqs,
        legacyCommands: DATA.legacyCommands,
        legacyCommandCategories: DATA.legacyCommandCategories,
        legacyRequirements: DATA.legacyRequirements,
        legacyPackageManagers: DATA.legacyPackageManagers,
        legacyDrivers: DATA.legacyDrivers,
        legacyFaqs: DATA.legacyFaqs,
        projectComparison: DATA.projectComparison,
        migrationMap: DATA.migrationMap,

        active: 'projects',
        dark: false,
        mobileNav: false,
        paletteOpen: false,
        paletteQuery: '',
        paletteIndex: 0,
        commandQuery: '',
        commandCategory: 'All',
        legacyCommandQuery: '',
        legacyCommandCategory: 'All',
        openFaq: 0,
        openLegacyFaq: 0,
        progress: 0,
        toc: [],
        activeHeading: ''
      };
    },

    computed: {
      flatNav() {
        return this.navGroups.flatMap(g => g.items.map(item => ({ ...item, group: g.title })));
      },
      filteredCommands() {
        const q = this.commandQuery.trim().toLowerCase();
        return this.commands.filter(c => {
          const inCat = this.commandCategory === 'All' || c.category === this.commandCategory;
          const inQuery = !q || (c.cmd + ' ' + c.syntax + ' ' + c.desc + ' ' + c.category).toLowerCase().includes(q);
          return inCat && inQuery;
        });
      },
      filteredLegacyCommands() {
        const q = this.legacyCommandQuery.trim().toLowerCase();
        return this.legacyCommands.filter(c => {
          const inCat = this.legacyCommandCategory === 'All' || c.category === this.legacyCommandCategory;
          const inQuery = !q || (c.cmd + ' ' + c.syntax + ' ' + c.desc + ' ' + c.category).toLowerCase().includes(q);
          return inCat && inQuery;
        });
      },
      commandTarget() {
        return this.active.startsWith('valet-') || this.active === 'migration' ? 'valet-commands' : 'commands';
      },
      paletteResults() {
        const q = this.paletteQuery.trim().toLowerCase();
        const projectOf = group => {
          if (group.includes('cpriego')) return 'Valet Linux';
          if (group.includes('genesisweb') || group.includes('Linux+')) return 'Valet Linux+';
          return 'Both projects';
        };
        const pages = this.flatNav.map(p => ({
          id: p.id, label: p.label, icon: p.icon, kind: 'Page', project: projectOf(p.group),
          haystack: (p.label + ' ' + p.id + ' ' + p.group).toLowerCase()
        }));
        const plus = this.commands.map(c => ({
          id: 'commands', label: 'valet ' + c.cmd, icon: 'list', kind: 'Command', project: 'Valet Linux+',
          command: c.cmd, commandSet: 'plus',
          haystack: ('valet ' + c.cmd + ' ' + c.desc + ' ' + c.syntax).toLowerCase()
        }));
        const legacy = this.legacyCommands.map(c => ({
          id: 'valet-commands', label: 'valet ' + c.cmd, icon: 'terminal', kind: 'Command', project: 'Valet Linux',
          command: c.cmd, commandSet: 'legacy',
          haystack: ('valet ' + c.cmd + ' ' + c.desc + ' ' + c.syntax).toLowerCase()
        }));
        const all = pages.concat(plus, legacy);
        if (!q) return all.filter(r => r.kind === 'Page').slice(0, 9);
        return all.filter(r => r.haystack.includes(q)).slice(0, 16);
      }
    },

    watch: {
      active(newVal) {
        const section = document.getElementById('section-' + newVal);
        if (section) {
          section.scrollIntoView({ behavior: 'auto', block: 'start' });
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
        nextTick(() => this.buildToc());
      },
      paletteOpen(open) {
        if (open) {
          this.paletteQuery = '';
          this.paletteIndex = 0;
          document.body.style.overflow = 'hidden';
          nextTick(() => { if (this.$refs.paletteInput) this.$refs.paletteInput.focus(); });
        } else {
          document.body.style.overflow = '';
        }
      },
      dark(value) {
        document.documentElement.classList.toggle('dark', value);
        try { localStorage.setItem('vlp-theme', value ? 'dark' : 'light'); } catch (e) { /* ignore */ }
      },
      paletteQuery() { this.paletteIndex = 0; }
    },

    methods: {
      go(id) {
        if (!this.flatNav.some(n => n.id === id)) return;
        this.active = id;
        if (location.hash !== '#' + id) {
          history.replaceState(null, '', '#' + id);
        }
        this.mobileNav = false;
        this.paletteOpen = false;
      },
      toggleTheme() { this.dark = !this.dark; },
      backToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); },
      scrollToId(id) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
          this.activeHeading = id;
        }
      },
      buildToc() {
        const section = document.getElementById('section-' + this.active);
        if (!section) { this.toc = []; return; }
        const headings = Array.from(section.querySelectorAll('h2, h3'));
        this.toc = headings.map(h => {
          if (!h.id) {
            h.id = 'h-' + this.active + '-' + h.textContent.trim().toLowerCase()
              .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          }
          return { id: h.id, text: h.textContent.trim() };
        });
        this.activeHeading = this.toc.length ? this.toc[0].id : '';
      },
      pickPalette(result) {
        const r = result || this.paletteResults[this.paletteIndex];
        if (!r) return;
        if (r.kind === 'Command' && r.commandSet === 'legacy') {
          this.legacyCommandQuery = r.command;
          this.legacyCommandCategory = 'All';
          this.go('valet-commands');
        } else if (r.kind === 'Command') {
          this.commandQuery = r.command;
          this.commandCategory = 'All';
          this.go('commands');
        } else {
          this.go(r.id);
        }
      },
      openCommandReference() { this.go(this.commandTarget); },
      onScroll() {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        this.progress = max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0;
        if (!this.toc.length) return;
        let current = this.toc[0].id;
        for (const h of this.toc) {
          const el = document.getElementById(h.id);
          if (el && el.getBoundingClientRect().top <= 140) current = h.id;
        }
        this.activeHeading = current;
      },
      onHashChange() {
        const id = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
        if (id && this.flatNav.some(n => n.id === id)) {
          this.active = id;
          nextTick(() => this.buildToc());
        }
      },
      onKeydown(e) {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          this.paletteOpen = !this.paletteOpen;
        }
        if (e.key === 'Escape') {
          this.paletteOpen = false;
          this.mobileNav = false;
        }
      }
    },

    mounted() {
      // Theme
      let saved = null;
      try { saved = localStorage.getItem('vlp-theme'); } catch (e) { /* ignore */ }
      this.dark = saved ? saved === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.classList.toggle('dark', this.dark);

      // Route
      const hash = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
      if (hash && this.flatNav.some(n => n.id === hash)) this.active = hash;

      nextTick(() => this.buildToc());
      this.onScroll();

      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
      window.addEventListener('hashchange', this.onHashChange);
      window.addEventListener('keydown', this.onKeydown);
    },

    beforeUnmount() {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
      window.removeEventListener('hashchange', this.onHashChange);
      window.removeEventListener('keydown', this.onKeydown);
      document.body.style.overflow = '';
    }
  });

  app.config.compilerOptions.delimiters = ['{{', '}}'];
  app.mount('#app');
})();
