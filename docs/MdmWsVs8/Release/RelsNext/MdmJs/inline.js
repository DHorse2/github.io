//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Filter Primary Command  function (s)
// ...................................... //
//
// ..................................................................................... _//
// Filter Enable
// ...................................... //
// Enable Filter prior to Play
//
var filterValid = false;
var filterIndexCn = 0;
var filterSelected = new Array(5);
//
// ..................................................................................... _//
// Sub-Section Timer Management function (s)
// ..................................................................................... _//
// SectionBlock Timers Primary Commands function (s)
// ...................................... //
// Initialize Variables
// Functions
fnTimerFunctionSet();
// Intervals and Duration
fnTimerDurationSet();
//
// ..................................................................................... _//
// Section Body Content Images Html Build function (s)
// ..................................................................................... _//
// Html Variables
var imgHtml = new String();
// var BodyMenuImageContainer = document.documentElement['BodyMenuImageContainer'];
// .getElementById('BodyMenuImageContainer');
//
// Build (inner) HTML for Menu Images
// fnMenuImagesHtmlBuild();
//
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// Recalculate Screen Display
var boxClass;
var columnType;
// ...................................... //
// Layout Block, Callout and Document (BodyMainCenter) Width
//
// This variable is the multiplier that will reflect font-size;
// Using a 1em font is the default (1em = 1.0 EmRation)
// refered to as medium size on most browsers.
// The layoutWidth(s) have to scale up proportionally
// with text size when adjusting the callouts.
// A larger font size will disturb the floating by
// pushing down the content that wont fit beside the
// callout.
var layoutEmRation = 1.0;
//
var layoutMenuDocWidthWide = 900;
//
var layoutBlockCol3Min = 1000;
var layoutBlockCol2Min = 500;
var layoutBlockCol1Min = 'float';
//
var layoutBlockWidthWide = '31%';
var layoutBlockWidthStandard = '47%';
var layoutBlockWidthNarrow = '98%';
//
var calloutBlockLayoutWidthWide = 600;
var calloutBlockLayoutWidthStandard = 350;
var calloutBlockLayoutWidthNarrow = 150;
//
var calloutBlockWidthWide = '33%';
var calloutBlockWidthStandard = '45%';
var calloutBlockWidthNarrow = '82%';
//
var layoutBlockWidth;
var calloutBlockWidth;
//
var elementBlockCn;
//
var elementWidthDefault = 250;
var elBodyBlockWidth;
//
// ..................................................................................... _//
// Document Window
// ..................................................................................... _//
// window.onresize = function() { fnWindowResize(); }
// // ..................................................................................... _//
// Error Message Display
// ..................................................................................... _//
// Error message build
// ...................................... //
var errorMessageFinal = new String();
var errorInnerHTML = new String();
var errorSourceInnerHTML = new String();
//
var errorMessageAllLog = new String();
//
var errorMessageFinalLog = new String();
var errorInnerHTMLLog = new String();
var errorSourceInnerHTMLLog = new String();
//
// ..................................................................................... _//
// Window Error
// ...................................... //
//
window.onerror = fnWindowError;
//
// ..................................................................................... _//
// Layout Height Get
var heightBase = 0;
var heightOffset = 0;
var heightScroll = 0;
var heightClient = 0;
var heightNode = 0;
var heightRects = 0;
var clientRectsIndex = 0;
