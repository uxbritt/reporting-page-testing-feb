/**
 * Reusable Organization performance metric cards (Email engagement, Contact growth)
 * Usage: <div id="org-performance-cards-root"></div>
 *        <script src="components/org-performance-cards.js"></script>
 *        <script>renderOrgPerformanceCards('org-performance-cards-root', { linkEmailCard: false, showDatePicker: false });</script>
 * Options:
 *   - linkEmailCard: boolean — if true, Email engagement card links to report (default false)
 *   - showDatePicker: boolean — if true, show date range button in header (default false)
 *   - stacked: boolean — if false, cards in one row on md+ (default true = stacked)
 *   - reportHref: string — URL for email report (default 'email-engagement-report.html')
 *   - milestone: string — if set (e.g. 'm2','m3','m4'), appended to report link so report page can keep bar on same milestone
 */
function renderOrgPerformanceCards(containerId, options) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var opts = options || {};
  var linkEmailCard = !!opts.linkEmailCard;
  var showDatePicker = !!opts.showDatePicker;
  var stacked = opts.stacked !== false;
  var reportHref = opts.reportHref || 'email-engagement-report.html';
  if (opts.milestone) {
    var m = String(opts.milestone).toLowerCase();
    if (/^m[1-5]$/.test(m)) reportHref = reportHref + (reportHref.indexOf('?') >= 0 ? '&' : '?') + 'milestone=' + m;
  }

  var datePickerHtml = showDatePicker
    ? '<div class="self-start sm:self-auto">' +
      '<button type="button" onclick="typeof openCustomDatePicker === \'function\' && openCustomDatePicker(\'global\')" class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-lg transition-colors shadow-sm" aria-haspopup="dialog" aria-expanded="false" aria-label="Change dates">' +
      '<svg class="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' +
      '<span id="global-date-btn-label">Last 30 days</span>' +
      '<svg class="w-4 h-4 text-neutral-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>' +
      '</button></div>'
    : '';

  var m = (opts.milestone && /^m[1-5]$/.test(String(opts.milestone).toLowerCase())) ? String(opts.milestone).toLowerCase() : '';
  var milestoneData = m ? ' data-milestone="' + m + '"' : '';
  var milestoneOnclick = m ? ' onclick="try{sessionStorage.setItem(\'emailReportMilestone\',\'' + m + '\');}catch(e){}"' : '';
  var emailCardHtml = linkEmailCard
    ? '<a href="' + reportHref + '"' + milestoneData + milestoneOnclick + ' class="metrics-card relative block bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm flex flex-col h-full no-underline text-inherit group hover:shadow-md transition-shadow">' +
      '<div class="flex items-start justify-between gap-2 mb-2">' +
      '<p class="text-sm font-medium text-neutral-900">Email engagement</p>' +
      '<span class="flex-shrink-0 p-1.5 rounded-lg bg-main-50 text-main-600 group-hover:bg-main-100 transition-colors" title="View report" aria-label="View report">' +
      '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>' +
      '</span></div>' +
      '<div class="flex items-center gap-2 mb-1">' +
      '<span class="text-3xl font-bold text-neutral-900">37%</span>' +
      '<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-700">↑ 4%</span>' +
      '</div>' +
      '<p class="text-sm text-neutral-500 mb-3">Open rate · vs prior 30 days</p>' +
      '<div class="flex items-center gap-2 mt-auto flex-wrap">' +
      '<span class="px-2 py-1 text-xs border border-neutral-300 rounded-full text-neutral-600">34.3% click rate</span>' +
      '<span class="px-2 py-1 text-xs border border-neutral-300 rounded-full text-neutral-600">1.3k sends</span>' +
      '</div>' +
      '<svg class="hidden xl:block absolute bottom-3 right-4 w-20 h-9 pointer-events-none" viewBox="0 0 100 40" fill="none" aria-hidden="true">' +
      '<path d="M0 32 Q12 30 25 28 T50 24 T75 18 T100 12" stroke="#17b26a" stroke-width="2" stroke-linecap="round" fill="none"/>' +
      '</svg></a>'
    : '<div class="metrics-card relative bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm flex flex-col h-full">' +
      '<p class="text-sm font-medium text-neutral-900 mb-2">Email engagement</p>' +
      '<div class="flex items-center gap-2 mb-1">' +
      '<span class="text-3xl font-bold text-neutral-900">37%</span>' +
      '<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-700">↑ 4%</span>' +
      '</div>' +
      '<p class="text-sm text-neutral-500 mb-3">Open rate · vs prior 30 days</p>' +
      '<div class="flex items-center gap-2 mt-auto flex-wrap">' +
      '<span class="px-2 py-1 text-xs border border-neutral-300 rounded-full text-neutral-600">34.3% click rate</span>' +
      '<span class="px-2 py-1 text-xs border border-neutral-300 rounded-full text-neutral-600">1.3k sends</span>' +
      '</div>' +
      '<svg class="hidden xl:block absolute bottom-3 right-4 w-20 h-9 pointer-events-none" viewBox="0 0 100 40" fill="none" aria-hidden="true">' +
      '<path d="M0 32 Q12 30 25 28 T50 24 T75 18 T100 12" stroke="#17b26a" stroke-width="2" stroke-linecap="round" fill="none"/>' +
      '</svg></div>';

  var contactCardHtml = '<div class="metrics-card relative bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm flex flex-col h-full">' +
    '<p class="text-sm font-medium text-neutral-900 mb-2">Contact growth</p>' +
    '<div class="flex items-center gap-2 mb-1">' +
    '<span class="text-3xl font-bold text-neutral-900">3%</span>' +
    '<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-700">↑ 13%</span>' +
    '</div>' +
    '<p class="text-sm text-neutral-500 mb-3">Growth rate · vs prior 30 days</p>' +
    '<div class="flex items-center gap-2 mt-auto flex-wrap">' +
    '<span class="px-2 py-1 text-xs border border-neutral-300 rounded-full text-neutral-600">38.4k active</span>' +
    '<span class="px-2 py-1 text-xs border border-neutral-300 rounded-full text-neutral-600">4.2k unsubscribed</span>' +
    '</div>' +
    '<svg class="hidden xl:block absolute bottom-3 right-4 w-20 h-9 pointer-events-none" viewBox="0 0 100 40" fill="none" aria-hidden="true">' +
    '<path d="M0 35 Q15 32 30 28 T60 22 T100 10" stroke="#186ded" stroke-width="2" stroke-linecap="round" fill="none"/>' +
    '</svg></div>';

  var headerClass = showDatePicker
    ? 'flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4'
    : 'mb-4';
  var gridClass = stacked ? 'grid grid-cols-1 gap-4 sm:gap-5' : 'grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5';
  var cardsHtml = emailCardHtml + contactCardHtml;
  var sectionHtml =
    '<div class="mb-8">' +
    '<div class="' + headerClass + '">' +
    '<div><h2 class="text-lg font-semibold text-neutral-900">Organization performance</h2>' +
    '<p class="text-sm text-neutral-500 mt-0.5">Overall performance across all accounts</p></div>' +
    datePickerHtml +
    '</div>' +
    '<div class="' + gridClass + '">' +
    cardsHtml +
    '</div></div>';

  container.innerHTML = sectionHtml;
}
