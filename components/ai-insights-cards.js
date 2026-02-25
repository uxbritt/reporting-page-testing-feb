/**
 * Reusable "Here are today's insights" section with 4 insight cards (Alert, Trend, Usage, Outlier).
 * Usage: <div id="ai-insights-cards-root"></div>
 *        <script src="components/ai-insights-cards.js"></script>
 *        <script>renderAiInsightsCards('ai-insights-cards-root', { enableChatClick: false });</script>
 * Options:
 *   - enableChatClick: boolean — if true (M5 only), clicking a card opens AI chat; if false (M3, M4), no click-through
 * Thumbs: hover tooltips "Good suggestion" / "Bad suggestion" (not title); on click thumbs disappear and toast "Thank you for your feedback."
 */
function renderAiInsightsCards(containerId, options) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var opts = options || {};
  var enableChatClick = !!opts.enableChatClick;

  var thumbBlock = '<div class="ai-insights-thumbs flex items-center gap-1">' +
    '<div class="relative group/thumb inline-block">' +
    '<span class="insight-thumb-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-1 text-xs font-medium text-neutral-800 bg-neutral-200 rounded shadow-sm opacity-0 pointer-events-none transition-opacity duration-150 group-hover/thumb:opacity-100 z-50 whitespace-nowrap">Good suggestion</span>' +
    '<button type="button" aria-label="Good suggestion" class="thumb-btn thumb-up p-1.5 rounded-lg hover:bg-success-50 text-neutral-400 hover:text-success-600 transition-colors">' +
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>' +
    '</button></div>' +
    '<div class="relative group/thumb inline-block">' +
    '<span class="insight-thumb-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-1 text-xs font-medium text-neutral-800 bg-neutral-200 rounded shadow-sm opacity-0 pointer-events-none transition-opacity duration-150 group-hover/thumb:opacity-100 z-50 whitespace-nowrap">Bad suggestion</span>' +
    '<button type="button" aria-label="Bad suggestion" class="thumb-btn thumb-down p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-400 hover:text-neutral-600 transition-colors">' +
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>' +
    '</button></div></div>';

  var card1Onclick = enableChatClick ? ' onclick=\'openInsightChat("approval", "2 campaigns awaiting approval from Greenway Market RI and PureField Produce VT")\'' : '';
  var card2Onclick = enableChatClick ? ' onclick=\'openInsightChat("performance", "Greenway Market MA is performing +20% above its 30-day average")\'' : '';
  var card3Onclick = enableChatClick ? ' onclick=\'openInsightChat("inactive", "PureField Produce VT hasn&apos;t sent a campaign in 18 days")\'' : '';
  var card4Onclick = enableChatClick ? ' onclick=\'openInsightChat("outlier", "Living Root Kitchen NY&apos;s click rate is 2.1x the group median this month")\'' : '';

  var card1 = '<div' + card1Onclick + ' class="insight-card bg-white border-l-4 border-warning-400 border-t border-r border-b border-t-neutral-200 border-r-neutral-200 border-b-neutral-200 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer group">' +
    '<div class="flex items-center justify-between mb-3"><span class="px-2 py-0.5 bg-warning-100 text-warning-700 text-xs font-medium rounded">Alert</span></div>' +
    '<p class="text-sm text-neutral-700 mb-3"><span class="font-medium">2 campaigns</span> awaiting approval: <span class="font-medium underline decoration-neutral-400">Greenway Market RI</span> and <span class="font-medium underline decoration-neutral-400">PureField Produce VT</span>.</p>' + thumbBlock + '</div>';

  var card2 = '<div' + card2Onclick + ' class="insight-card bg-white border border-neutral-200 rounded-xl p-4 hover:border-main-300 hover:shadow-md transition-all cursor-pointer group">' +
    '<div class="flex items-center justify-between mb-3"><span class="px-2 py-0.5 bg-accent-100 text-accent-700 text-xs font-medium rounded">Trend</span></div>' +
    '<p class="text-sm text-neutral-700 mb-3"><span class="font-medium underline decoration-neutral-400">Greenway Market MA</span> is performing <span class="font-medium">+20%</span> above its 30-day average.</p>' + thumbBlock + '</div>';

  var card3 = '<div' + card3Onclick + ' class="insight-card bg-white border border-neutral-200 rounded-xl p-4 hover:border-main-300 hover:shadow-md transition-all cursor-pointer group">' +
    '<div class="flex items-center justify-between mb-3"><span class="px-2 py-0.5 bg-accent-100 text-accent-700 text-xs font-medium rounded">Usage</span></div>' +
    '<p class="text-sm text-neutral-700 mb-3"><span class="font-medium underline decoration-neutral-400">PureField Produce VT</span> hasn\'t sent a campaign in <span class="font-medium">18 days</span>.</p>' + thumbBlock + '</div>';

  var card4 = '<div' + card4Onclick + ' class="insight-card bg-white border border-neutral-200 rounded-xl p-4 hover:border-main-300 hover:shadow-md transition-all cursor-pointer group">' +
    '<div class="flex items-center justify-between mb-3"><span class="px-2 py-0.5 bg-accent-100 text-accent-700 text-xs font-medium rounded">Outlier</span></div>' +
    '<p class="text-sm text-neutral-700 mb-3"><span class="font-medium underline decoration-neutral-400">Living Root Kitchen NY</span>\'s click rate is <span class="font-medium">2.1x</span> the group median this month.</p>' + thumbBlock + '</div>';

  var sectionHtml =
    '<h2 class="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-4">' +
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-accent-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>' +
    'Here are today\'s insights</h2>' +
    '<div class="grid grid-cols-4 gap-4">' + card1 + card2 + card3 + card4 + '</div>';

  container.innerHTML = sectionHtml;

  // Tooltips on hover (ensure they work even if Tailwind group/thumb isn't generated)
  container.querySelectorAll('.group\\/thumb').forEach(function(wrap) {
    var tooltip = wrap.querySelector('.insight-thumb-tooltip');
    var btn = wrap.querySelector('.thumb-btn');
    if (!tooltip || !btn) return;
    wrap.addEventListener('mouseenter', function() { tooltip.style.opacity = '1'; });
    wrap.addEventListener('mouseleave', function() { tooltip.style.opacity = ''; });
  });

  // Ensure toast container exists (reuse page toast or create for insights)
  var toastContainer = document.getElementById('toast-container') || document.getElementById('ai-insights-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'ai-insights-toast-container';
    toastContainer.className = 'fixed top-20 right-6 z-[9999] flex flex-col gap-2';
    document.body.appendChild(toastContainer);
  }
  function showInsightsToast(message) {
    if (typeof showToast === 'function') {
      showToast(message);
      return;
    }
    var el = document.createElement('div');
    el.className = 'bg-neutral-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.textContent = message;
    toastContainer.appendChild(el);
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    setTimeout(function() {
      el.style.opacity = '0';
      el.style.transform = 'translateX(100%)';
      setTimeout(function() { el.remove(); }, 300);
    }, 2800);
  }

  container.addEventListener('click', function(e) {
    var btn = e.target.closest('.thumb-btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    var wrap = btn.closest('.ai-insights-thumbs');
    if (wrap) {
      wrap.style.display = 'none';
    }
    showInsightsToast('Thank you for your feedback.');
  });
}
