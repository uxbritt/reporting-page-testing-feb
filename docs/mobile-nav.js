/* ============================================
   Mobile Navigation & Interactions JavaScript
   Add this to all CTCT Teams pages
   ============================================ */

(function() {
  'use strict';
  
  // Only initialize on mobile
  function isMobile() {
    return window.innerWidth < 672;
  }
  
  // Initialize mobile UI when DOM is ready
  function initMobileUI() {
    if (!isMobile()) return;
    
    createMobileBottomNav();
    createMobileTopBarElements();
    createMobileSearchOverlay();
    createMobileNotificationsOverlay();
    createMobileDrawer();
    createMobileCreateButton();
  }
  
  // Create bottom navigation bar
  function createMobileBottomNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'workspaces-list.html';
    
    const nav = document.createElement('nav');
    nav.className = 'mobile-bottom-nav';
    nav.innerHTML = `
      <button class="mobile-bottom-nav-item ${currentPage.includes('dashboard') || currentPage.includes('option-b') ? 'active' : ''}" onclick="window.location.href='option-b-northstar-empty.html'">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
        <span>Dashboard</span>
      </button>
      
      <button class="mobile-bottom-nav-item ${currentPage.includes('workspace') || currentPage.includes('folder') ? 'active' : ''}" onclick="window.location.href='workspaces-list.html'">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
        <span>Workspaces</span>
      </button>
      
      <button class="mobile-bottom-nav-item ${currentPage.includes('campaign') || currentPage.includes('contacts') ? 'active' : ''}" onclick="window.location.href='campaigns-list.html'">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
        <span>Content</span>
      </button>
      
      <button class="mobile-bottom-nav-item ${currentPage.includes('settings') ? 'active' : ''}" onclick="window.location.href='settings.html'">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        <span>Settings</span>
      </button>
    `;
    
    document.body.appendChild(nav);
  }
  
  // Create mobile top bar search and notification buttons
  function createMobileTopBarElements() {
    const header = document.querySelector('header');
    if (!header) return;
    
    // Create search button
    const searchBtn = document.createElement('button');
    searchBtn.className = 'mobile-search-btn';
    searchBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
    `;
    searchBtn.onclick = () => document.getElementById('mobile-search-overlay').classList.add('active');
    
    // Create notifications button
    const notifBtn = document.createElement('button');
    notifBtn.className = 'mobile-notifications-btn';
    notifBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
    `;
    notifBtn.onclick = () => document.getElementById('mobile-notifications-overlay').classList.add('active');
    
    // Insert before user avatar
    const userAvatar = header.querySelector('#user-avatar-btn');
    if (userAvatar && userAvatar.parentElement) {
      userAvatar.parentElement.insertBefore(notifBtn, userAvatar);
      userAvatar.parentElement.insertBefore(searchBtn, notifBtn);
    }
  }
  
  // Create mobile search overlay
  function createMobileSearchOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'mobile-search-overlay';
    overlay.className = 'mobile-search-overlay';
    overlay.innerHTML = `
      <div class="mobile-search-header">
        <button class="mobile-search-back" onclick="document.getElementById('mobile-search-overlay').classList.remove('active')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
        </button>
        <input type="text" class="mobile-search-input" placeholder="Search workspaces, campaigns..." autofocus>
      </div>
      <div style="padding: 48px 16px; text-align: center; color: #8d9bb6;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 16px; opacity: 0.5;"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
        <p>Start typing to search</p>
      </div>
    `;
    
    document.body.appendChild(overlay);
  }
  
  // Create mobile notifications overlay
  function createMobileNotificationsOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'mobile-notifications-overlay';
    overlay.className = 'mobile-notifications-overlay';
    overlay.innerHTML = `
      <div class="mobile-notifications-header">
        <button class="mobile-search-back" onclick="document.getElementById('mobile-notifications-overlay').classList.remove('active')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
        </button>
        <h2 class="mobile-notifications-title">Notifications</h2>
        <button style="width: 40px; height: 40px; background: transparent; border: none; cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
        </button>
      </div>
      <div style="padding: 16px;">
        <!-- Recent notifications -->
        <div style="background: #f0f4fa; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
            <div style="width: 40px; height: 40px; background: #e6f8ff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#186ded" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div style="flex: 1;">
              <p style="font-weight: 600; font-size: 14px; margin: 0;">New team member</p>
              <p style="font-size: 13px; color: #6b7492; margin: 4px 0 0;">Sarah joined "Marketing Team"</p>
            </div>
          </div>
          <p style="font-size: 12px; color: #8d9bb6; margin: 0;">2 hours ago</p>
        </div>
        
        <div style="background: #f0f4fa; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
            <div style="width: 40px; height: 40px; background: #ecfdf3; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#17b26a" stroke-width="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path></svg>
            </div>
            <div style="flex: 1;">
              <p style="font-weight: 600; font-size: 14px; margin: 0;">Campaign updated</p>
              <p style="font-size: 13px; color: #6b7492; margin: 4px 0 0;">"Summer Sale" was updated by John</p>
            </div>
          </div>
          <p style="font-size: 12px; color: #8d9bb6; margin: 0;">5 hours ago</p>
        </div>
        
        <div style="background: #f0f4fa; border-radius: 12px; padding: 16px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
            <div style="width: 40px; height: 40px; background: #fff8eb; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f79009" stroke-width="2"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
            </div>
            <div style="flex: 1;">
              <p style="font-weight: 600; font-size: 14px; margin: 0;">New comment</p>
              <p style="font-size: 13px; color: #6b7492; margin: 4px 0 0;">Anna commented on your report</p>
            </div>
          </div>
          <p style="font-size: 12px; color: #8d9bb6; margin: 0;">Yesterday</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(overlay);
  }
  
  // Create mobile drawer (hamburger menu)
  function createMobileDrawer() {
    const drawer = document.createElement('div');
    drawer.className = 'mobile-drawer';
    drawer.id = 'mobile-drawer';
    drawer.innerHTML = `
      <div style="padding: 24px 16px; border-bottom: 1px solid #e5e7eb;">
        <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 16px;">Navigation</h3>
      </div>
      <div style="padding: 16px;">
        <a href="option-b-northstar-empty.html" style="display: flex; align-items: center; gap: 12px; padding: 12px; text-decoration: none; color: #111; border-radius: 8px; transition: background 0.2s;" onmouseover="this.style.background='#f0f4fa'" onmouseout="this.style.background='transparent'">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
          <span>Dashboard</span>
        </a>
        <a href="workspaces-list.html" style="display: flex; align-items: center; gap: 12px; padding: 12px; text-decoration: none; color: #111; border-radius: 8px; transition: background 0.2s;" onmouseover="this.style.background='#f0f4fa'" onmouseout="this.style.background='transparent'">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
          <span>Workspaces</span>
        </a>
        <a href="campaigns-list.html" style="display: flex; align-items: center; gap: 12px; padding: 12px; text-decoration: none; color: #111; border-radius: 8px; transition: background 0.2s;" onmouseover="this.style.background='#f0f4fa'" onmouseout="this.style.background='transparent'">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
          <span>Campaigns</span>
        </a>
        <a href="contacts-list.html" style="display: flex; align-items: center; gap: 12px; padding: 12px; text-decoration: none; color: #111; border-radius: 8px; transition: background 0.2s;" onmouseover="this.style.background='#f0f4fa'" onmouseout="this.style.background='transparent'">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span>Contacts</span>
        </a>
        <a href="settings.html" style="display: flex; align-items: center; gap: 12px; padding: 12px; text-decoration: none; color: #111; border-radius: 8px; transition: background 0.2s;" onmouseover="this.style.background='#f0f4fa'" onmouseout="this.style.background='transparent'">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          <span>Settings</span>
        </a>
      </div>
    `;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-drawer-overlay';
    overlay.id = 'mobile-drawer-overlay';
    overlay.onclick = closeMobileDrawer;
    
    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
    
    // Add hamburger click handler
    const header = document.querySelector('header');
    if (header) {
      header.addEventListener('click', (e) => {
        const rect = header.getBoundingClientRect();
        if (e.clientX < 60 && e.clientY < rect.bottom) {
          openMobileDrawer();
        }
      });
    }
  }
  
  function openMobileDrawer() {
    document.getElementById('mobile-drawer').classList.add('open');
    document.getElementById('mobile-drawer-overlay').classList.add('visible');
  }
  
  function closeMobileDrawer() {
    document.getElementById('mobile-drawer').classList.remove('open');
    document.getElementById('mobile-drawer-overlay').classList.remove('visible');
  }
  
  // Create floating create button
  function createMobileCreateButton() {
    const createBtn = document.createElement('button');
    createBtn.className = 'mobile-create-btn';
    createBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
    `;
    createBtn.onclick = () => {
      // Trigger existing create modal if it exists
      if (typeof openCreateWorkspaceModal === 'function') {
        openCreateWorkspaceModal();
      } else {
        alert('Create new workspace');
      }
    };
    
    document.body.appendChild(createBtn);
  }
  
  // Reinitialize on resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Remove mobile elements if resized to desktop
      if (!isMobile()) {
        const mobileElements = document.querySelectorAll('.mobile-bottom-nav, .mobile-create-btn, .mobile-drawer, .mobile-drawer-overlay, .mobile-search-overlay, .mobile-notifications-overlay, .mobile-search-btn, .mobile-notifications-btn');
        mobileElements.forEach(el => el && el.remove());
      } else {
        // Reinitialize if resized to mobile
        const existingNav = document.querySelector('.mobile-bottom-nav');
        if (!existingNav) {
          initMobileUI();
        }
      }
    }, 250);
  });
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileUI);
  } else {
    initMobileUI();
  }
  
})();

