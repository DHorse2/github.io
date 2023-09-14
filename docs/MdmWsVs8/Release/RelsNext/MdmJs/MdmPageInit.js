// ...................................... //
// SectionBlock Page Initialization
// ...................................... //
// Get browser type
fnBrowserGetVs();
// ...................................... //
var LastId = "";
var LastTochedId = "";
//
// SectionBlock Timers Primary Commands function (s)
// ...................................... //
// Functions
// SectionBlock Window & Script Exceptions & Error function (s)
window.onerror = function() { fnWindowError(); };
// Document Window OnLoad:
// addEventListener("load", (event) => {});
// onload = (event) => {};
window.onload = function () { fnlayoutWindowOnload(); }
// Timers
fnTimerFunctionSet();
// Intervals and Duration
fnTimerDurationSet();
// WindowResize();
window.onresize = function () { fnlayoutWindowResize(); }
//
script_state = "Webpage javascript load completed";
