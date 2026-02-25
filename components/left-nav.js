/**
 * Left Navigation Component
 * Reusable sidebar navigation for Org Dashboard prototypes
 * 
 * Usage: Include this script and call renderLeftNav('sidebar-container-id')
 */

var NAV_CONFIG = {
  organization: {
    label: 'My Organization',
    items: [
      { id: 'org-dashboard', label: 'Org dashboard', icon: 'layout-dashboard', href: 'org-dashboard-m0.html' },
      { 
        id: 'accounts', 
        label: 'Accounts', 
        icon: 'building-bank',
        expandable: true,
        expanded: true,
        children: [
          { id: 'my-accounts', label: 'My accounts', href: '#' },
          { id: 'reports', label: 'Reports', href: 'email-engagement-report.html' },
          { id: 'billing-settings', label: 'Billing & settings', href: '#' },
          { id: 'activity-log', label: 'Activity log', href: '#' },
          { id: 'campaign-approval', label: 'Campaign approval', href: '#' }
        ]
      },
      { id: 'templates', label: 'Templates', icon: 'template' },
      { 
        id: 'central-send', 
        label: 'Central send', 
        icon: 'send',
        expandable: true,
        expanded: true,
        children: [
          { id: 'list-management', label: 'List management' },
          { id: 'email-central', label: 'Email' },
          { id: 'sms-central', label: 'SMS' }
        ]
      },
      { id: 'community', label: 'Community', icon: 'info-circle' }
    ]
  },
  marketing: {
    label: 'My Marketing',
    items: [
      { id: 'my-dashboard', label: 'My dashboard', icon: 'layout-dashboard' },
      { id: 'campaigns', label: 'Campaigns', icon: 'target-arrow' },
      { id: 'contacts', label: 'Contacts', icon: 'user' },
      { 
        id: 'channels', 
        label: 'Channels', 
        icon: 'channels',
        expandable: true,
        expanded: true,
        children: [
          { id: 'emails', label: 'Emails' },
          { id: 'social', label: 'Social' },
          { id: 'sms', label: 'SMS' },
          { id: 'events', label: 'Events' },
          { id: 'landing-pages', label: 'Landing pages' },
          { id: 'signup-forms', label: 'Sign-up forms' }
        ]
      },
      { 
        id: 'audience', 
        label: 'Audience', 
        icon: 'users',
        expandable: true,
        expanded: true,
        children: [
          { id: 'growth-center', label: 'Growth center' },
          { id: 'lists-segments', label: 'Lists and segments' },
          { id: 'surveys', label: 'Surveys' },
          { id: 'lead-magnet', label: 'Lead magnet' }
        ]
      },
      { 
        id: 'assets', 
        label: 'Assets', 
        icon: 'palette',
        expandable: true,
        expanded: true,
        children: [
          { id: 'brandkit', label: 'BrandKit' },
          { id: 'library', label: 'Library' }
        ]
      },
      { id: 'reporting', label: 'Reporting', icon: 'chart-area' },
      { id: 'automations', label: 'Automations', icon: 'sitemap' },
      { id: 'integrations', label: 'Integrations', icon: 'tool' }
    ]
  }
};

// SVG Icons mapping - matched to production Rise sidenav
const ICONS = {
  // TbLayoutDashboard - asymmetric dashboard (used for Org dashboard & My dashboard)
  'layout-dashboard': `<path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />`,
  // TbBuildingBank
  'building-bank': `<path d="M3 21l18 0" /><path d="M3 10l18 0" /><path d="M5 6l7 -3l7 3" /><path d="M4 10l0 11" /><path d="M20 10l0 11" /><path d="M8 14l0 3" /><path d="M12 14l0 3" /><path d="M16 14l0 3" />`,
  // TbTemplate
  'template': `<path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" /><path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 12l6 0" /><path d="M14 16l6 0" /><path d="M14 20l6 0" />`,
  // TbSend2 - paper plane with line (Central send)
  'send': `<path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" /><path d="M6.5 12h14.5" />`,
  // Lucide Info circle (Community)
  'info-circle': `<circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />`,
  // TbTargetArrow (Campaigns)
  'target-arrow': `<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 7a5 5 0 1 0 5 5" /><path d="M13 3.055a9 9 0 1 0 7.941 7.945" /><path d="M15 6v3h3l3 -3h-3v-3z" /><path d="M15 9l-3 3" />`,
  // Lucide User (Contacts)
  'user': `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />`,
  // TbSend - simple paper plane (Channels)
  'channels': `<path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />`,
  // Lucide Users (Audience)
  'users': `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />`,
  // Lucide Palette (Assets)
  'palette': `<circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />`,
  // TbChartAreaLine (Reporting)
  'chart-area': `<path d="M3 3v18h18" /><path d="M20 18v3" /><path d="M16 16v5" /><path d="M12 13v8" /><path d="M8 16v5" /><path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />`,
  // TbSitemap (Automations)
  'sitemap': `<rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" /><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" /><path d="M12 12V8" />`,
  // TbTool (Integrations)
  'tool': `<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />`,
  // Chevron
  'chevron-up': `<path d="m6 9 6 6 6-6" />`
};

function createIcon(name, extraClasses = '') {
  return `<svg class="h-5 w-5 shrink-0 ${extraClasses}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">${ICONS[name] || ''}</svg>`;
}

function createNavItem(item, isChild = false, activeId) {
  const isActive = activeId ? item.id === activeId : item.active;
  const href = item.href || '#';
  const baseClasses = isChild 
    ? 'sidenav-child-item flex items-center w-full text-left rounded-lg transition-colors p-2 pl-12 text-neutral-700 hover:bg-[#D6EAFE]/50 text-sm'
    : 'flex items-center w-full text-left rounded-lg transition-colors p-2 text-neutral-900 hover:bg-[#D6EAFE]/50';
  
  const activeClasses = isActive ? 'bg-main-200 font-semibold' : '';
  const iconClasses = isActive ? 'text-main-600' : 'text-neutral-600';
  
  if (item.expandable) {
    return `
      <li>
        <button onclick="toggleNavSection('${item.id}')" class="group justify-between flex w-full items-center rounded-lg p-2 transition-colors text-neutral-900 hover:bg-[#D6EAFE]/50">
          <div class="flex items-center gap-2">
            ${createIcon(item.icon, 'ml-1 ' + iconClasses)}
            <span class="sidenav-label truncate text-sm">${item.label}</span>
          </div>
          <span id="${item.id}-chevron" class="sidenav-chevron transition-transform duration-200 ${item.expanded ? '' : 'rotate-180'}">
            ${createIcon('chevron-up', 'w-4 h-4 text-neutral-500')}
          </span>
        </button>
        <ul id="${item.id}-children" class="sidenav-children ${item.expanded ? '' : 'hidden'} mt-1 space-y-0.5">
          ${item.children.map(child => createNavItem(child, true, activeId)).join('')}
        </ul>
      </li>
    `;
  }
  
  if (isChild) {
    return `
      <li>
        <a href="${href}" class="${baseClasses} ${activeClasses}">
          <span class="sidenav-label truncate">${item.label}</span>
        </a>
      </li>
    `;
  }
  
  return `
    <li>
      <a href="${href}" class="${baseClasses} ${activeClasses}">
        <div class="flex items-center gap-2">
          ${createIcon(item.icon, 'ml-1 ' + iconClasses)}
          <span class="sidenav-label truncate text-sm">${item.label}</span>
        </div>
      </a>
    </li>
  `;
}

function createSection(section, activeId) {
  return `
    <p class="sidenav-section-header whitespace-nowrap uppercase tracking-wider text-xs text-neutral-500 font-medium p-2 pl-4 mb-0">${section.label}</p>
    <ul class="space-y-0.5 mb-4">
      ${section.items.map(item => createNavItem(item, false, activeId)).join('')}
    </ul>
  `;
}

function renderLeftNav(containerId, options) {
  const container = document.getElementById(containerId);
  if (!container) return;
  // activeId: which nav item is active (e.g. 'org-dashboard', 'reports'). Default 'org-dashboard'.
  const activeId = (options && options.activeId) || 'org-dashboard';
  
  // Get the sidebar element to add collapse functionality
  const sidebar = container.closest('aside');
  if (sidebar) {
    // Start collapsed by default
    sidebar.classList.add('group', 'sidenav-collapsed');
    sidebar.classList.remove('sidenav-expanded', 'w-64');
    sidebar.classList.add('w-16');
  }
  
  container.innerHTML = `
    <!-- Collapse Toggle Button -->
    <button 
      onclick="toggleSidenavCollapse()"
      class="sidenav-toggle-btn absolute -right-3.5 top-[22px] flex h-7 w-7 items-center justify-center rounded-full border border-main-300 bg-main-50 text-main-600 shadow opacity-0 group-hover:opacity-100 hover:bg-main-100 focus:opacity-100 focus:outline-none transition-opacity z-[9999]"
      aria-label="Toggle side nav"
    >
      <svg class="sidenav-collapse-icon h-5 w-5 transition-transform" style="transform: rotate(180deg)" stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </button>
    
    <div class="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
      <!-- Create Button -->
      <div class="mx-2 mt-3 mb-3">
        <button class="sidenav-create-btn w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-main-600 text-white rounded-lg font-semibold hover:bg-main-900 transition-all text-sm min-h-[40px]">
          <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
          </svg>
          <span class="sidenav-label">Create</span>
        </button>
      </div>
      <hr class="border-neutral-200 mx-2" />
      
      <!-- Navigation Sections -->
      <nav class="px-2 pt-3">
        ${createSection(NAV_CONFIG.organization, activeId)}
        ${createSection(NAV_CONFIG.marketing, activeId)}
      </nav>
    </div>
  `;
}

// Sidenav collapse toggle - start collapsed
let sidenavCollapsed = true;

function toggleSidenavCollapse() {
  sidenavCollapsed = !sidenavCollapsed;
  const sidebar = document.getElementById('sidebar');
  const icon = document.querySelector('.sidenav-collapse-icon');
  
  if (sidebar) {
    if (sidenavCollapsed) {
      sidebar.classList.remove('sidenav-expanded', 'w-64');
      sidebar.classList.add('sidenav-collapsed', 'w-16');
    } else {
      sidebar.classList.remove('sidenav-collapsed', 'w-16');
      sidebar.classList.add('sidenav-expanded', 'w-64');
    }
  }
  
  if (icon) {
    icon.style.transform = sidenavCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

// Toggle function for expandable sections
function toggleNavSection(sectionId) {
  const children = document.getElementById(`${sectionId}-children`);
  const chevron = document.getElementById(`${sectionId}-chevron`);
  
  if (children && chevron) {
    children.classList.toggle('hidden');
    chevron.classList.toggle('rotate-180');
  }
}

// Auto-initialize if sidebar-content element exists
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('sidebar-content')) {
    renderLeftNav('sidebar-content');
  }
});

