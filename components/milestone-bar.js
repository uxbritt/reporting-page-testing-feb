/**
 * Reusable Milestone Bar (M0–M4) for Org Dashboard prototypes
 * Usage: <div id="milestone-bar-root"></div>
 *        <script src="components/milestone-bar.js"></script>
 *        <script>renderMilestoneBar('milestone-bar-root', { active: 'm0' });</script>
 * Options: active = 'm0' | 'm1' | 'm2' | 'm3' | 'm4'
 */
function renderMilestoneBar(containerId, options) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var active = (options && options.active) ? options.active.toLowerCase() : 'm0';
  var base = 'org-dashboard-m';
  var links = [
    { id: 'm0', label: 'M0', title: 'M0: current production', href: base + '0.html' },
    { id: 'm1', label: 'M1', title: 'M1: org performance metrics', href: base + '1.html' },
    { id: 'm2', label: 'M2', title: 'M2: performance leaderboard', href: base + '2.html' },
    { id: 'm3', label: 'M3', title: 'M3: actionable insights', href: base + '3.html' },
    { id: 'm4', label: 'M4', title: 'M4: conversational agentic-AI insights', href: base + '4.html' }
  ];
  var parts = links.map(function (l) {
    if (l.id === active) {
      return '<span class="px-3 py-1.5 text-sm font-medium rounded-md bg-success-600 text-white" title="' + l.title + '">' + l.label + '</span>';
    }
    return '<a href="' + l.href + '" class="px-3 py-1.5 text-sm font-medium rounded-md bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors" title="' + l.title + '">' + l.label + '</a>';
  });
  container.innerHTML =
    '<!-- Toggle Dot (shows when bar is hidden) -->' +
    '<button onclick="toggleAuthorBar()" class="fixed bottom-2 left-2 w-3 h-3 rounded-full z-[10001] transition-opacity bg-accent-600 opacity-30 hover:opacity-60" id="author-bar-dot" style="display: none;"></button>' +
    '<!-- Milestones Bar -->' +
    '<div id="author-bar" class="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-700 px-6 py-3 z-[100]">' +
    '  <div class="max-w-7xl mx-auto flex items-center justify-between">' +
    '    <span class="text-zinc-500 text-sm">Org Dashboard prototypes</span>' +
    '    <div class="flex items-center gap-2">' +
    '      <span class="text-zinc-500 text-sm mr-2">Milestone:</span>' +
    parts.join('\n      ') +
    '      <button onclick="toggleAuthorBar()" class="text-zinc-500 hover:text-white ml-2 p-1" aria-label="Hide bar">' +
    '        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>' +
    '      </button>' +
    '    </div>' +
    '  </div>' +
    '</div>';
}

function toggleAuthorBar() {
  var bar = document.getElementById('author-bar');
  var dot = document.getElementById('author-bar-dot');
  if (!bar) return;
  if (bar.style.display === 'none') {
    bar.style.display = '';
    if (dot) dot.style.display = 'none';
  } else {
    bar.style.display = 'none';
    if (dot) dot.style.display = 'block';
  }
}
