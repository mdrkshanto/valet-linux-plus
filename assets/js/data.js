/* Valet Linux & Valet Linux+ documentation data — all content is local, no network requests. */
window.VLP_DATA = {
  version: '2.0.3',
  legacyVersion: 'v2.4.5',

  projects: [
    { id: 'valet', name: 'Valet Linux', repo: 'cpriego/valet-linux', version: 'v2.4.5', home: '~/.valet', package: 'cpriego/valet-linux', docs: 'cpriego.github.io/valet-linux', accent: 'sky' },
    { id: 'plus', name: 'Valet Linux+', repo: 'genesisweb/valet-linux-plus', version: '2.0.3', home: '~/.config/valet', package: 'genesisweb/valet-linux-plus', docs: 'valetlinux.plus', accent: 'brand' }
  ],

  topLinks: [
    { id: 'projects', label: 'Projects' },
    { id: 'overview', label: 'Linux+' },
    { id: 'valet-overview', label: 'Original' },
    { id: 'commands', label: 'Commands' },
    { id: 'valet-commands', label: 'Legacy CLI' },
    { id: 'project-comparison', label: 'Compare' }
  ],

  navGroups: [
    { title: 'Both projects', items: [
      { id: 'projects', label: 'Choose a project', icon: 'home' },
      { id: 'project-comparison', label: 'Side-by-side', icon: 'scale' },
      { id: 'migration', label: 'Migrating v1 → v2', icon: 'history' }
    ]},
    { title: 'Valet Linux (cpriego)', items: [
      { id: 'valet-overview', label: 'Overview', icon: 'book' },
      { id: 'valet-requirements', label: 'Requirements', icon: 'check' },
      { id: 'valet-installation', label: 'Installation', icon: 'download' },
      { id: 'valet-serving', label: 'Serving sites', icon: 'folder' },
      { id: 'valet-sharing', label: 'Sharing sites', icon: 'share' },
      { id: 'valet-drivers', label: 'Drivers', icon: 'puzzle' },
      { id: 'valet-config', label: 'Config & logs', icon: 'sliders' },
      { id: 'valet-commands', label: 'Command reference', icon: 'list', badge: '29' },
      { id: 'valet-faq', label: 'Original FAQ', icon: 'wrench' }
    ]},
    { title: 'Valet Linux+ (genesisweb) — start here', items: [
      { id: 'overview', label: 'Overview', icon: 'home' },
      { id: 'features', label: 'Features', icon: 'sparkles' },
      { id: 'requirements', label: 'Requirements', icon: 'check' },
      { id: 'installation', label: 'Installation', icon: 'download' }
    ]},
    { title: 'Valet Linux+ — core guides', items: [
      { id: 'serving-sites', label: 'Serving sites', icon: 'folder' },
      { id: 'securing-sites', label: 'Securing with TLS', icon: 'lock' },
      { id: 'proxy', label: 'Proxying ports', icon: 'route' },
      { id: 'sharing', label: 'Sharing sites', icon: 'share' }
    ]},
    { title: 'Valet Linux+ — PHP', items: [
      { id: 'php-versions', label: 'Switching PHP versions', icon: 'code' },
      { id: 'isolation', label: 'PHP isolation', icon: 'layers' }
    ]},
    { title: 'Valet Linux+ — data & services', items: [
      { id: 'database', label: 'Databases', icon: 'database' },
      { id: 'mailpit', label: 'Mailpit', icon: 'mail' },
      { id: 'redis', label: 'Redis', icon: 'zap' }
    ]},
    { title: 'Valet Linux+ — development', items: [
      { id: 'ide-support', label: 'IDE support', icon: 'terminal' },
      { id: 'drivers', label: 'Valet drivers', icon: 'compass' },
      { id: 'custom-drivers', label: 'Custom drivers', icon: 'puzzle' }
    ]},
    { title: 'Valet Linux+ — reference', items: [
      { id: 'services', label: 'Service management', icon: 'settings' },
      { id: 'configuration', label: 'Configuration & files', icon: 'sliders' },
      { id: 'commands', label: 'Command reference', icon: 'list', badge: '45' },
      { id: 'upgrade', label: 'Upgrade guide', icon: 'history' },
      { id: 'changelog', label: 'Release notes', icon: 'clock' },
      { id: 'troubleshooting', label: 'Troubleshooting', icon: 'wrench' },
      { id: 'license', label: 'License & credits', icon: 'scale' }
    ]}
  ],

  iconPaths: {
    home: 'm3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z',
    sparkles: 'M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z',
    check: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-3 9 2 2 4-4',
    download: 'M12 3v12m-5-5 5 5 5-5M4 17v3h16v-3',
    folder: 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z',
    lock: 'M5 11h14v10H5V11Zm3 0V7a4 4 0 0 1 8 0v4',
    route: 'M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM9 16h3a3 3 0 0 0 3-3v-1',
    share: 'M12 16V4m-4 4 4-4 4 4M5 14v5h14v-5',
    code: 'm8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 12',
    layers: 'm12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5',
    database: 'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3ZM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    mail: 'M3 6h18v12H3V6Zm0 1 9 7 9-7',
    zap: 'm13 2-9 11h7l-1 9 9-11h-7l1-9Z',
    settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9 7 7m10 10 2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1',
    sliders: 'M4 6h10m4 0h2M4 12h2m4 0h10M4 18h10m4 0h2M16 4v4M6 10v4m12 2v4',
    list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
    history: 'M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 7v5l3 2',
    clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 7v5l4 2',
    wrench: 'M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-3 3-3-3 3-3Z',
    scale: 'M12 3v18M5 7h14M5 7l-3 7h6L5 7Zm14 0-3 7h6l-3-7ZM7 21h10',
    terminal: 'm4 17 5-5-5-5M12 19h8',
    compass: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 5.5-2 5-5 2 2-5 5-2Z',
    puzzle: 'M9 3h6v3a2 2 0 1 0 4 0V6h3v6h-3a2 2 0 1 0 0 4h3v5h-6v-3a2 2 0 1 0-4 0v3H6v-6h3a2 2 0 1 0 0-4H6V6h3V3Z',
    book: 'M4 4h7a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4V4Zm16 0h-3a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h3V4Z',
    server: 'M4 4h16v6H4V4Zm0 10h16v6H4v-6ZM8 7h.01M8 17h.01',
    globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
    shield: 'M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z',
    link: 'M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1'
  },

  requestFlow: [
    { title: 'Browser asks for project.test', text: 'Dnsmasq resolves every *.test hostname to 127.0.0.1 — no /etc/hosts entry needed.' },
    { title: 'Nginx receives the request', text: 'A generated per-site config in ~/.config/valet/Nginx matches the hostname and secure state.' },
    { title: 'Driver inspects the project', text: 'Valet picks a driver (Laravel, WordPress, static HTML, …) that knows the front controller.' },
    { title: 'PHP-FPM returns the response', text: 'The request is handed to the correct PHP socket, optionally isolated for that site.' }
  ],

  featureCards: [
    { title: 'Zero-config .test sites', text: 'Park one directory and every project inside it gets an instant local domain.', icon: 'folder', page: 'serving-sites' },
    { title: 'Trusted HTTPS', text: 'One command issues a local TLS certificate with HTTP/2 for any site.', icon: 'lock', page: 'securing-sites' },
    { title: 'PHP version switching', text: 'Switch global PHP in seconds or isolate legacy sites on 7.0–8.1.', icon: 'code', page: 'php-versions' },
    { title: 'MySQL & MariaDB', text: 'A tuned database is installed for you, with create/drop/import/export commands.', icon: 'database', page: 'database' },
    { title: 'Redis out of the box', text: 'TCP 6379 and a Unix socket, ready for caches, queues and sessions.', icon: 'zap', page: 'redis' },
    { title: 'Mailpit inbox', text: 'Catch development emails at mails.test without sending a single byte outside.', icon: 'mail', page: 'mailpit' },
    { title: 'Public tunnels', text: 'Share any local site over ngrok with a single valet share command.', icon: 'share', page: 'sharing' },
    { title: 'Port proxies', text: 'Give Node, Vite or Docker containers a friendly secured .test hostname.', icon: 'route', page: 'proxy' },
    { title: 'Framework drivers', text: 'Laravel, WordPress, Drupal, Symfony, Craft and many more — plus your own.', icon: 'puzzle', page: 'drivers' },
    { title: 'Editor shortcuts', text: 'Open the current project in PhpStorm, VS Code, Atom or Sublime instantly.', icon: 'terminal', page: 'ide-support' },
    { title: '45 CLI commands', text: 'A small, consistent command set covering the entire local workflow.', icon: 'list', page: 'commands' },
    { title: 'Linux-native installers', text: 'apt, dnf, yum, pacman, eopkg and PackageKit support with service management.', icon: 'settings', page: 'requirements' }
  ],

  comparison: [
    ['Startup footprint', '~7 MB RAM', 'Hundreds of MB', 'Overhead per container'],
    ['Setup time', 'Composer + valet install', 'Box download + provision', 'Write and build compose files'],
    ['Local domains', 'Automatic *.test via Dnsmasq', 'Usually hosts entries', 'Often ports or reverse proxy'],
    ['HTTPS', 'valet secure', 'Manual / provisioned', 'Manual certificates'],
    ['Per-site PHP', 'valet isolate (7.0–8.5)', 'One box per version', 'One image per version'],
    ['Database + mail + cache', 'Included', 'Included in box', 'Extra containers']
  ],

  featureGroups: [
    { title: 'Core environment', icon: 'server', items: ['Automatic Nginx background service', 'Dnsmasq *.test resolution with custom TLD support', 'Parked directories and symbolic-link domains', 'HTTP/2 trusted TLS certificates', 'Custom HTTP and HTTPS ports', 'Per-site driver detection'] },
    { title: 'PHP tooling', icon: 'code', items: ['Global PHP 8.2–8.5 switching', 'CLI PHP update with --update-cli', 'Per-site isolation from PHP 7.0', '.valetphprc per-project pinning', 'valet php and valet composer proxying', 'Version-aware /usr/local/bin/php helper'] },
    { title: 'Data & services', icon: 'database', items: ['MySQL 5.7 (5.6 compatible) or MariaDB', 'Tuned my.cnf for local speed', 'Database create/drop/reset/import/export', 'Mailpit development inbox', 'Redis with TCP and socket access', 'Individual service start/stop/restart'] },
    { title: 'Workflow extras', icon: 'zap', items: ['Ngrok public sharing with auth token', 'Nginx proxies for Node/Docker ports', 'Secured proxies', 'IDE shortcuts for four editors', 'LAN access notes (legacy v1)', 'Self-update and cleanup command'] },
    { title: 'Extensibility', icon: 'puzzle', items: ['20+ built-in framework drivers', 'Global custom drivers', 'Project-local LocalValetDriver', 'Driver extension loading on every command', ' six package managers supported', 'systemd / service manager abstraction'] },
    { title: 'Developer experience', icon: 'sparkles', items: ['Beautiful termwind console output', 'Pruning of stale links and paths', 'Automatic config migration', 'Unit-tested command surface', 'MIT licensed and community driven', 'Standalone offline documentation'] }
  ],

  installedServices: [
    { name: 'Nginx', detail: 'Main config plus per-site configs, including secure, proxy and isolated variants.' },
    { name: 'PHP-FPM', detail: 'Pool config and sockets for each installed PHP version.' },
    { name: 'Dnsmasq', detail: 'Routes the configured TLD (default .test) to localhost.' },
    { name: 'MySQL / MariaDB', detail: 'Tuned server and a dedicated valet database user.' },
    { name: 'Redis', detail: 'Listens on 6379 and /tmp/redis.sock.' },
    { name: 'Mailpit', detail: 'SMTP catcher with a web inbox at mails.test.' },
    { name: 'ngrok', detail: 'Downloaded v3 binary used by valet share.' },
    { name: 'CLI symlink', detail: 'valet in ~/.config/composer/vendor/bin and optional php helper.' }
  ],

  packageManagers: ['apt', 'dnf', 'yum', 'pacman', 'eopkg', 'PackageKit'],

  builtinDrivers: [
    'Laravel', 'Basic', 'Basic with public/', 'Bedrock', 'CakePHP', 'Concrete5',
    'Contao', 'Craft CMS', 'Drupal', 'Jigsaw', 'Joomla', 'Katana', 'Kirby',
    'Magento 2', 'Neos', 'Radicle', 'Sculpin', 'Statamic v1', 'Statamic v2',
    'Statamic', 'Symfony', 'TYPO3', 'WordPress'
  ],

  serviceTable: [
    ['nginx', 'Web server', 'yes', 'yes'],
    ['php', 'PHP-FPM', 'yes', 'yes'],
    ['dnsmasq', 'Local DNS', 'yes', 'no (use restart)'],
    ['mysql', 'MySQL / MariaDB', 'yes', 'yes'],
    ['mailpit', 'Mail catcher', 'yes', 'yes'],
    ['redis', 'Cache / queue store', 'yes', 'yes']
  ],

  commandCategories: ['All', 'Lifecycle', 'Sites & domains', 'Proxy', 'PHP & isolation', 'Database', 'Editors', 'Sharing'],

  commands: [
    { cmd: 'install', category: 'Lifecycle', syntax: '[--ignore-selinux] [--mariadb]', desc: 'Install and configure all Valet services and dependencies.' },
    { cmd: 'start', category: 'Lifecycle', syntax: '[services]*', desc: 'Start all services, or only the named ones (nginx, php, mailpit, dnsmasq, mysql, redis).' },
    { cmd: 'restart', category: 'Lifecycle', syntax: '[services]*', desc: 'Restart all services, or only the named ones.' },
    { cmd: 'stop', category: 'Lifecycle', syntax: '[services]*', desc: 'Stop all services, or only the named ones.' },
    { cmd: 'status', category: 'Lifecycle', syntax: '', desc: 'Show PHP-FPM and Nginx service status.' },
    { cmd: 'update', category: 'Lifecycle', syntax: '', desc: 'Update Valet Linux+ to the latest release and clean up cruft.' },
    { cmd: 'is-latest', category: 'Lifecycle', syntax: '', desc: 'Print YES or NO depending on whether this is the latest release.' },
    { cmd: 'uninstall', category: 'Lifecycle', syntax: '', desc: 'Uninstall Valet services, configuration and symlinks.' },

    { cmd: 'park', category: 'Sites & domains', syntax: '[path]', desc: 'Register the current (or given) directory as a projects root.' },
    { cmd: 'paths', category: 'Sites & domains', syntax: '', desc: 'List all directories registered with Valet.' },
    { cmd: 'forget', category: 'Sites & domains', syntax: '[path]', desc: 'Remove the current (or given) directory from Valet paths.' },
    { cmd: 'which', category: 'Sites & domains', syntax: '', desc: 'Show which Valet driver serves the current directory.' },
    { cmd: 'link', category: 'Sites & domains', syntax: '[name]', desc: 'Create a symbolic link for the current directory (a domain alias).' },
    { cmd: 'unlink', category: 'Sites & domains', syntax: '[name]', desc: 'Remove a symbolic link from the Sites directory.' },
    { cmd: 'links', category: 'Sites & domains', syntax: '', desc: 'List all links with URL, SSL state and target path.' },
    { cmd: 'secure', category: 'Sites & domains', syntax: '[domain]', desc: 'Secure a site with a trusted local TLS certificate.' },
    { cmd: 'unsecure', category: 'Sites & domains', syntax: '[domain]', desc: 'Stop serving HTTPS and remove the trusted certificate.' },
    { cmd: 'secured', category: 'Sites & domains', syntax: '[site]', desc: 'Report whether a site is secured.' },
    { cmd: 'domain', category: 'Sites & domains', syntax: '[domain]', desc: 'Get or set the TLD used for Valet sites (default: test).' },
    { cmd: 'port', category: 'Sites & domains', syntax: '[port] [--https]', desc: 'Get or set the HTTP or HTTPS port used by Nginx.' },
    { cmd: 'open', category: 'Sites & domains', syntax: '[domain]', desc: 'Open the current (or given) site in the default browser via xdg-open.' },

    { cmd: 'proxy', category: 'Proxy', syntax: '[domain] [host] [--secure]', desc: 'Proxy a .test domain to an HTTP host — ideal for Docker or Node apps.' },
    { cmd: 'unproxy', category: 'Proxy', syntax: '[domain]', desc: 'Delete an Nginx proxy config and its certificate.' },
    { cmd: 'proxies', category: 'Proxy', syntax: '', desc: 'List all proxy sites with URL, SSL and target host.' },

    { cmd: 'use', category: 'PHP & isolation', syntax: '[version] [--update-cli] [--ignore-ext]', desc: 'Set the global PHP version (8.2–8.5); empty resets to the system default.' },
    { cmd: 'isolate', category: 'PHP & isolation', syntax: '[phpVersion] [--site=] [--secure]', desc: 'Run one site on a specific PHP version (7.0–8.5).' },
    { cmd: 'unisolate', category: 'PHP & isolation', syntax: '[--site=]', desc: 'Return a site to the default global PHP version.' },
    { cmd: 'isolated', category: 'PHP & isolation', syntax: '', desc: 'List isolated sites with URL, SSL state and PHP version.' },
    { cmd: 'which-php', category: 'PHP & isolation', syntax: '[site]', desc: 'Print the PHP executable path resolved for a site.' },
    { cmd: 'php', category: 'PHP & isolation', syntax: '[--site=] [command]', desc: 'Run a PHP command using the site’s isolated PHP executable.' },
    { cmd: 'composer', category: 'PHP & isolation', syntax: '[--site=] [command]', desc: 'Run Composer using the site’s isolated PHP executable.' },

    { cmd: 'db:list', category: 'Database', syntax: '', desc: 'List all databases in MySQL/MariaDB.' },
    { cmd: 'db:create', category: 'Database', syntax: '[databaseName]', desc: 'Create a database; defaults to the project/Git directory name.' },
    { cmd: 'db:drop', category: 'Database', syntax: '[databaseName] [-y|--yes]', desc: 'Drop a database after confirmation (or immediately with -y).' },
    { cmd: 'db:reset', category: 'Database', syntax: '[databaseName] [-y|--yes]', desc: 'Drop and recreate a database.' },
    { cmd: 'db:import', category: 'Database', syntax: '[databaseName] [dumpFile]', desc: 'Import a .sql or .sql.gz dump with a progress bar.' },
    { cmd: 'db:export', category: 'Database', syntax: '[databaseName] [--sql]', desc: 'Export a gzipped dump, or plain SQL with --sql.' },
    { cmd: 'db:configure', category: 'Database', syntax: '[--force]', desc: 'Configure the dedicated valet database user and credentials.' },

    { cmd: 'code', category: 'Editors', syntax: '[folder]', desc: 'Open the project in Visual Studio Code.' },
    { cmd: 'ps', category: 'Editors', syntax: '[folder]', desc: 'Open the project in PhpStorm.' },
    { cmd: 'atom', category: 'Editors', syntax: '[folder]', desc: 'Open the project in Atom.' },
    { cmd: 'subl', category: 'Editors', syntax: '[folder]', desc: 'Open the project in Sublime Text.' },

    { cmd: 'share', category: 'Sharing', syntax: '', desc: 'Create a public ngrok tunnel for the current site.' },
    { cmd: 'fetch-share-url', category: 'Sharing', syntax: '', desc: 'Print the URL of the currently active ngrok tunnel.' },
    { cmd: 'ngrok-auth', category: 'Sharing', syntax: '[authtoken]', desc: 'Store the ngrok authentication token.' }
  ],

  /* ------------------------- cpriego/valet-linux ------------------------- */
  legacyCommandCategories: ['All', 'Lifecycle', 'Sites & domains', 'Proxy', 'PHP & isolation', 'Sharing'],

  legacyCommands: [
    { cmd: 'install', category: 'Lifecycle', syntax: '[--ignore-selinux]', desc: 'Install Nginx, PHP-FPM, DnsMasq and the Valet configuration.' },
    { cmd: 'start', category: 'Lifecycle', syntax: '', desc: 'Start the PHP-FPM, Nginx and Dnsmasq services.' },
    { cmd: 'restart', category: 'Lifecycle', syntax: '', desc: 'Restart all Valet services.' },
    { cmd: 'stop', category: 'Lifecycle', syntax: '', desc: 'Stop all Valet services.' },
    { cmd: 'status', category: 'Lifecycle', syntax: '', desc: 'Show PHP-FPM, Nginx and Dnsmasq status.' },
    { cmd: 'update', category: 'Lifecycle', syntax: '', desc: 'Check GitHub and run the self-update/cleanup script.' },
    { cmd: 'uninstall', category: 'Lifecycle', syntax: '', desc: 'Remove Valet services, configs and the CLI symlink.' },

    { cmd: 'park', category: 'Sites & domains', syntax: '[path]', desc: 'Register the current (or given) directory as a projects root.' },
    { cmd: 'forget', category: 'Sites & domains', syntax: '[path]', desc: 'Remove the current (or given) directory from Valet paths.' },
    { cmd: 'paths', category: 'Sites & domains', syntax: '', desc: 'List all parked paths.' },
    { cmd: 'link', category: 'Sites & domains', syntax: '[name] [--secure]', desc: 'Create a symbolic link for the current directory.' },
    { cmd: 'links', category: 'Sites & domains', syntax: '', desc: 'List linked sites with SSL, URL, path and PHP version.' },
    { cmd: 'unlink', category: 'Sites & domains', syntax: '[name]', desc: 'Remove a symbolic link from ~/.valet/Sites.' },
    { cmd: 'secure', category: 'Sites & domains', syntax: '[domain]', desc: 'Issue a trusted local TLS certificate for a site.' },
    { cmd: 'unsecure', category: 'Sites & domains', syntax: '[domain]', desc: 'Remove HTTPS and the trusted certificate from a site.' },
    { cmd: 'secured', category: 'Sites & domains', syntax: '[site]', desc: 'Report whether the given site is secured.' },
    { cmd: 'domain', category: 'Sites & domains', syntax: '[domain]', desc: 'Get or set the TLD used for Valet sites (default: test).' },
    { cmd: 'port', category: 'Sites & domains', syntax: '[port] [--https]', desc: 'Get or set the Nginx HTTP or HTTPS port.' },
    { cmd: 'which', category: 'Sites & domains', syntax: '', desc: 'Show which driver serves the current directory.' },
    { cmd: 'open', category: 'Sites & domains', syntax: '[domain]', desc: 'Open the current (or given) site with xdg-open.' },

    { cmd: 'proxy', category: 'Proxy', syntax: '[domain] [host] [--secure]', desc: 'Create an Nginx proxy for Docker, Node, MailHog, etc.' },
    { cmd: 'unproxy', category: 'Proxy', syntax: '[domain]', desc: 'Delete an Nginx proxy configuration.' },
    { cmd: 'proxies', category: 'Proxy', syntax: '', desc: 'List all proxy sites and their target hosts.' },

    { cmd: 'use', category: 'PHP & isolation', syntax: '[version]', desc: 'Switch the global php-fpm version; omit or pass default to reset.' },
    { cmd: 'isolate', category: 'PHP & isolation', syntax: '[phpVersion] [--site=]', desc: 'Serve one site with a different PHP-FPM version.' },
    { cmd: 'unisolate', category: 'PHP & isolation', syntax: '[--site=]', desc: 'Return a site to the global PHP version.' },
    { cmd: 'isolated', category: 'PHP & isolation', syntax: '', desc: 'List sites with a PHP version isolation rule.' },

    { cmd: 'share', category: 'Sharing', syntax: '', desc: 'Expose the current site through an ngrok tunnel.' },
    { cmd: 'fetch-share-url', category: 'Sharing', syntax: '', desc: 'Print the URL of the active ngrok tunnel.' }
  ],

  legacyRequirements: [
    { distro: 'Ubuntu & derivatives', versions: '14.04+', packages: 'network-manager libnss3-tools jq xsel', php: '5.6+', extensions: 'cli, curl, mbstring, mcrypt, xml, zip', optional: 'sqlite3, mysql, pgsql' },
    { distro: 'Fedora & derivatives', versions: '24+', packages: 'nss-tools jq xsel', php: '5.6+', extensions: 'cli, process, mbstring, mcrypt, xml', optional: 'sqlite3, mysql, pgsql' },
    { distro: 'Arch & derivatives', versions: 'rolling', packages: 'nss jq xsel networkmanager', php: '5.6+', extensions: 'cli, curl, mbstring, xml, zip (in php package)', optional: 'php-sqlite, mysql/mariadb, php-pgsql' }
  ],

  legacyPackageManagers: ['Homebrew', 'apt', 'dnf', 'pacman', 'yum', 'PackageKit', 'eopkg'],

  legacyDrivers: [
    'Laravel', 'Basic', 'Basic with public/', 'Bedrock', 'CakePHP 2', 'CakePHP 3',
    'Concrete5', 'Contao', 'Craft CMS', 'Drupal', 'Jigsaw', 'Joomla', 'Katana',
    'Kirby', 'Magento 2', 'Neos', 'Sculpin', 'Statamic v1', 'Statamic v2',
    'Symfony', 'TYPO3', 'WordPress'
  ],

  legacyFaqs: [
    { q: 'Why can’t I run valet install?', a: 'Add <code>~/.composer/vendor/bin</code> or <code>~/.config/composer/vendor/bin</code> to your <code>PATH</code> in <code>~/.bashrc</code> or <code>~/.zshrc</code>. Without that, run <code>bash ~/.composer/vendor/bin/valet install</code> (or the <code>.config</code> equivalent) directly.' },
    { q: 'Where are the logs and configuration files?', a: 'Everything lives under <code>~/.valet</code>. Logs are in <code>~/.valet/Log</code>, certificates in <code>~/.valet/Certificates</code>, and the main settings in <code>~/.valet/config.json</code>.' },
    { q: 'Why did Valet create a home directory inside /root?', a: 'You ran Valet as root. Valet expects a normal user with sudo rights and a valid <code>$HOME</code>. Fix the environment, then reinstall as your regular user.' },
    { q: 'What about the database?', a: 'Original Valet does not install or manage a database. Choose SQLite, MariaDB/MySQL or PostgreSQL yourself and install the matching PHP extension.' },
    { q: 'Why do I get certificate errors after securing a site?', a: 'Restart your browser after <code>valet secure</code> or <code>valet unsecure</code> so it trusts the local CA. Chrome/Chromium users can import <code>LaravelValetCASelfSigned</code> from <code>~/.valet/CA</code>; Firefox has its own certificate store.' },
    { q: 'Can I share a secured site?', a: 'No. The original <code>valet share</code> cannot tunnel sites configured with <code>valet secure</code>. Remove HTTPS with <code>valet unsecure</code> first.' },
    { q: 'Why did my network drop after install or changing the TLD?', a: 'Valet configures Dnsmasq through NetworkManager. Your connection may drop while DNS restarts; simply reconnect to the network.' },
    { q: 'What files does Valet Linux change?', a: 'Version 2.x overwrites Nginx and PHP-FPM configuration files. Back up existing configs before upgrading or installing on a machine with a custom web server.' },
    { q: 'Which PHP versions are supported?', a: 'The original project accepts PHP 5.6+ and derives the FPM service name from the installed PHP packages. Use <code>valet use php8.1</code> or <code>valet isolate php@7.4</code> where the distribution provides that package.' },
    { q: 'How do I uninstall Valet Linux?', a: 'Run <code>valet uninstall</code>, remove <code>/opt/valet</code>, clean Valet entries from <code>/etc/NetworkManager/conf.d</code> and <code>/etc/dnsmasq.d</code>, ensure <code>systemd-resolved</code> is enabled, and restart NetworkManager.' }
  ],

  projectComparison: [
    ['Composer package', 'cpriego/valet-linux', 'genesisweb/valet-linux-plus'],
    ['Maintainers', 'Carlos Priego and contributors', 'Uttam Rabadiya, Divyank Munjapara'],
    ['Source version', 'v2.4.5', '2.0.3'],
    ['PHP requirement', '5.6+ (composer constraint >=7.0)', '8.2+'],
    ['Config home', '~/.valet', '~/.config/valet'],
    ['CLI commands', '29', '45'],
    ['Database commands', 'Not included — bring your own DB', 'db:list / create / drop / reset / import / export / configure'],
    ['Mail & cache', 'Bring your own', 'Mailpit and Redis included'],
    ['Per-site PHP', 'isolate / unisolate / isolated', 'isolate / unisolate / isolated with --secure and .valetphprc'],
    ['Secure port proxies', 'proxy domain host --secure', 'proxy [domain] [host] --secure'],
    ['Editor shortcuts', 'Not included', 'code / ps / atom / subl'],
    ['Documentation', 'cpriego.github.io/valet-linux', 'valetlinux.plus (archived copy used here)']
  ],

  migrationMap: [
    ['valet park / link / unlink / forget', 'Same command', 'No change'],
    ['valet secure / unsecure / secured', 'Same command', 'No change'],
    ['valet domain test', 'Same command', 'No change'],
    ['valet port 8080', 'Same command', 'Add <code>--https</code> for the TLS port'],
    ['valet proxy app http://localhost:3000 --secure', 'Same command', 'No change'],
    ['valet use php8.1', 'valet use 8.3', 'Plus only supports 8.2–8.5 globally'],
    ['valet isolate php@7.4', 'valet isolate php@7.4 --secure', 'Same idea, extra TLS option'],
    ['~/.valet/config.json', '~/.config/valet/config.json', 'Migration runs automatically on first run'],
    ['~/.valet/Log', '~/.config/valet/Log', 'Logs moved with the config home'],
    ['Bring your own MySQL/Redis/mail', 'valet db:* / valet start redis / mails.test', 'Plus manages these services for you']
  ],

  releases: [
    { version: '2.0.3', date: 'March 10, 2025', title: 'HTTP/2 config fix and Laravel 12 support', points: ['Fixed deprecated Valet HTTP/2 configs', 'Support for both Laravel 11 and 12', 'Dependency and compatibility refresh'] },
    { version: '2.0.2', date: 'March 3, 2025', title: 'PHP 8.4, MariaDB and security fix', points: ['Added PHP 8.4 support', 'Fixed a security vulnerability', 'Re-enabled MariaDB support'] },
    { version: '2.0.1', date: 'June 29, 2024', title: 'Migration and update fixes', points: ['Fixed the configuration migration process', 'Rewrote SampleValetDriver.php', 'Avoided updating PHP versions that are not installed', 'Fixed valet update for major releases'] },
    { version: '2.0.0', date: 'June 12, 2024', title: 'Major release — isolation & refactor', points: ['New isolate / isolated / unisolate commands', 'Home directory moved to ~/.config/valet', 'PHP 8.2+ required; valet use limited to newer versions', 'PHP helper script for isolated directories', 'ngrok binary removed from source; installed on demand', 'Full codebase refactor with tests and code style tooling'] },
    { version: '1.6.9', date: 'April 7, 2024', title: 'Version support refresh', points: ['Updated supported PHP versions', 'Updated bundled ngrok binary'] },
    { version: '1.6.8', date: 'February 28, 2024', title: 'Housekeeping', points: ['Removed an extra function', 'Renamed the images directory to art'] },
    { version: '1.6.7', date: 'July 8, 2023', title: 'Mailpit and certificate fixes', points: ['Fixed Mailpit service installation', 'Fixed Firefox SSL certificate issue'] },
    { version: '1.6.6', date: 'April 24, 2023', title: 'Minor fixes', points: ['General minor fixes and maintenance'] },
    { version: '1.6.5', date: 'April 23, 2023', title: 'Nginx fixes and MailHog replacement', points: ['Nginx configuration improvements', 'Mailpit replaced MailHog'] },
    { version: '1.6.4', date: 'April 9, 2023', title: 'Arch Linux & isolation fixes', points: ['Fixed PHP support for Arch Linux', 'Fixed isolate command to work with links'] },
    { version: '1.6.3', date: 'March 21, 2023', title: 'Database and FPM fixes', points: ['Fixed database commands', 'Fixed Arch Linux support for FPM commands'] },
    { version: '1.6.1', date: 'March 18, 2023', title: 'Isolation era begins', points: ['Added PHP version isolation support', 'Added valet php and valet composer commands', 'Fixed Nginx proxy integration and custom TLD support', 'Fixed Dnsmasq and PHP-FPM on Fedora and Arch'] },
    { version: '1.5.8', date: 'September 7, 2022', title: 'VS Code and PHP 8.1', points: ['Added VS Code IDE support', 'Added PHP 8.1 support'] },
    { version: '1.5.6', date: 'September 7, 2022', title: 'Integrations', points: ['Added IDE shorthand commands', 'Added MariaDB support', 'Added proxy support', 'Added ngrok authentication and verification'] },
    { version: '1.5.3', date: 'May 9, 2020', title: 'Documentation moved', points: ['Moved documentation to a dedicated website', 'Fixed self-update command'] },
    { version: '1.5', date: 'April 3, 2020', title: 'Dependency refresh', points: ['Removed PHP 7.0 support', 'Pinned a specific symfony/console version'] }
  ],

  faqs: [
    { q: 'Any *.test domain will not resolve. What should I check?', a: 'Confirm Dnsmasq is running with <code>valet status</code> and <code>valet restart dnsmasq</code>. Verify with <code>ping -c1 foobar.test</code> — it should answer from <code>127.0.0.1</code>. A reboot after installation resolves most remaining cases. If you changed the TLD, run <code>valet domain test</code> to restore the default.' },
    { q: 'Do I need to edit /etc/hosts or run Valet as root?', a: 'No. Dnsmasq handles name resolution and the <code>valet</code> wrapper asks for sudo only for commands that need it. Never install the Composer package as root — run Composer as your normal user.' },
    { q: 'valet secure fails on Ubuntu 20.04', a: 'The nginx version in the older repositories lacks HTTP/2. Add the nginx PPA (<code>sudo add-apt-repository -y ppa:nginx/stable &amp;&amp; sudo apt-get update</code>) and try again.' },
    { q: 'Fedora blocks changes with SELinux errors', a: 'Put SELinux in permissive mode: <code>sudo setenforce 0</code> temporarily, or set <code>SELINUX=permissive</code> in <code>/etc/selinux/config</code> and reboot. <code>valet install --ignore-selinux</code> skips the pre-flight check.' },
    { q: 'valet use says my version is invalid', a: 'Current Valet supports 8.2, 8.3, 8.4 and 8.5 globally. For 7.0–8.1 use <code>valet isolate php@7.4</code> inside the project directory. Make sure the ondrej/php PPA (Ubuntu) or the Arch PHP repository is configured first.' },
    { q: 'The valet command is not found after installation', a: 'Add <code>export PATH="$PATH:$HOME/.config/composer/vendor/bin"</code> to your shell profile, then reload it with <code>source ~/.bashrc</code> (or <code>source ~/.zshrc</code>). Verify with <code>which valet</code>.' },
    { q: 'Port 80 or 443 is already in use', a: 'Use <code>valet port 8080</code> and <code>valet port 8443 --https</code>. All site configs and certificates are regenerated automatically, and Nginx/PHP-FPM are restarted.' },
    { q: 'Where did my ~/.valet directory go?', a: 'Valet 2.0 moved configuration to <code>~/.config/valet</code>. The migration runs automatically when you invoke <code>valet</code> after upgrading. Logs now live in <code>~/.config/valet/Log</code>.' },
    { q: 'Can I still use subdomains or /valet-sites?', a: 'No. Subdomain commands were removed in v2 — use <code>valet link &lt;name&gt;</code> for aliases. The LAN directory listing at <code>/valet-sites</code> was also removed; use <code>valet share</code> for remote access.' },
    { q: 'How do I completely remove Valet?', a: 'Run <code>valet uninstall</code>. It removes the Nginx, PHP-FPM, Dnsmasq, Mailpit and configuration pieces, then cleans up the Valet symlinks. You may also remove the Composer package with <code>composer global remove genesisweb/valet-linux-plus</code>.' },
    { q: 'Which config file is authoritative?', a: '<code>~/.config/valet/config.json</code> stores domain, paths and ports. Prefer <code>valet domain</code>, <code>valet port</code>, <code>valet park</code> and <code>valet forget</code> over editing it directly.' },
    { q: 'Does this site need internet access?', a: 'No. Tailwind CSS output, Vue.js and all other assets are stored in this folder. External links in the documentation open only when you click them.' }
  ]
};
