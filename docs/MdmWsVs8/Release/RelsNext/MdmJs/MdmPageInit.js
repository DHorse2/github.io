// ...................................... //
// SectionBlock Page Initialization
// ...................................... //
// Get browser type
StdBrowserGetVs();
// ...................................... //
var LastId = "";
var LastTochedId = "";
//
// SectionBlock Timers Primary Commands function (s)
// ...................................... //
// Functions
// SectionBlock Window & Script Exceptions & Error function (s)
window.onerror = function() { StdWindowError(); };
// Document Window OnLoad:
// addEventListener("load", (event) => {});
// onload = (event) => {};
window.onload = function () { StdlayoutWindowOnload(); }
// Timers
StdTimerFunctionSet();
// Intervals and Duration
StdTimerDurationSet();
// WindowResize();
window.onresize = function () { StdlayoutWindowResize(); }
//
script_state = "Mdm Standard Website Initized. (and displayed?)";
if (debugLoadIsOn) { debugger; }
