
// SectionBlock Page Initialization
// ...................................... //

// Get browser type
// ...................................... //
BrowserVsGet();

// ...................................... //
var LastId = "";
var LastTochedId = "";

// SectionBlock Timers Primary Commands function (s)
// ...................................... //
// Functions
// SectionBlock Window & Script Exceptions & Error function (s)

// window.onerror = (event) => { WindowError(event); };
// window.onerror = function() { WindowError(); };

// Document Window OnLoad:
// addEventListener("load", (event) => {});
// onload = (event) => {};
// addEventListener("load", (event) => {});
// window.onload = (event) => { WindowOnload(); };
window.onload = function () { WindowOnload(); }

// Timers
// TimerCreate();
// TimerFunctionSet();
// // Intervals and Duration
// TimerDurationSet();

window.onresize = function () { WindowResizeLayout(); }
//
script_state = "Mdm Standard Website Initized. (and displayed?)";
if (debugLoadIsOn) { debugger; }
