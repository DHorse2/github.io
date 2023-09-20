// ServerIsOn (Page came from local or server)
////////////////////////////////////////////////
serverIsOn = false;
// Errors
// ...................................... //
var errorDoDisplayTag = true;
var errorDoNotDisplayTag = false;
var errorDoAlert = true;
var errorDoNotAlert = false;
// ...................................... //
var debugIsOn = true; // FLAG ON!!! todo
var debugDoAlert = false;
// This flag not implemented in forms or buttons
var debugAlert = true;
// Log events to console
var debugLogEvents = false;
var debugLogEventDuplicates = false;
// Error Handling
// Use debugger on error:
// this (debug on error) is the only toggle possibly on by default
var errorUseDebugOnError = true; // FLAG ON!!! todo // enter debugger on errors
var errorUseDebugOnAll = false; // FLAG OFF!!! todo // enter debugger after any message
// Steps through loading script files
 debugLoadIsOn = false;

// Error Severity
var errorDidNotOccur = 0;
var errorComment = 5;
var errorWarn = 10;
var errorSevere = 20;
var errorFatal = 30;
//
var errorSeverity = errorDidNotOccur;
var errorDebugLevel = errorSevere;
// Debug Timers
var debugTimer = false;
var debugTimerMove = false;
var debugTimerTransition = false;
var debugTimerDetail = false;
// SectionBlock Object Postion
// ...................................... //
// The following are here in the event some browsers
// handles these position fields differently.
// By setting both the 'Use' and 'DoNotUse' to
// true or false they can be forced or negated.
// ...................................... //
var UseScroll = true;
var UseBase = true;
var UseOffset = true;
var DoUseScroll = true;
var DoUseBase = true;
var DoUseOffset = true;
var DoNotUseScroll = false;
var DoNotUseBase = false;
var DoNotUseOffset = false;
// Console
// ...................................... //
// Size at which logs are trimmed
var consoleLogLengthMax = 40000;
var consoleLogLengthTrim = 35000;
// compact format
var UseSingleLine = DoNotUseSingeLine;
// colour
var ButtonIsOnColor = 'Lime';
var ButtonIsOffColor = 'Red';
// Debugger
// Section Menu Image (Standard) Objects
////////////////////////////////////////////////
// Storage Location for Group and Menu Item / Image
var oObjGroupIndex = 1;
var oObjRootIndex = 0;
// location of Group / Roots in arrays
var indexGroup = 0;
// SectionBlock Image Handling
////////////////////////////////////////////////
// StdBrowserGetVs();
// Type of Image Group Page Generation
var imgLoadEventTest = false; // controls clearing of elBodyMenuImageContainer for testing
var imgLoadUseDOM = true; // Add Elements to DOM
var imgLoadUseInner = false; // Use innerHTML for content
var imgLoadUseEventHandler = true; // Single Event Listener (dispatcher)
// Mouse Hover activation of image display
var eventMouseOverEnabled = false;
// Menu Image Size
var oObjImageSizeSmall = 150;
var oObjImageSizeLarge = 500;
var oObjImageSizeRatio = 0.7;
var oObjImageSize = 0;
// Columns across page
////////////////////////////////////////////////
var columnMax = 3;
var elColumnType1 = true;
var elBodyMainLeftVisible = true;
var elBodyMainRightVisible = true;
var layoutUseAbsolute = false;
// Layout
////////////////////////////////////////////////
// (the content pane)
var layoutDocumentWidthMin = 900;
// Resize
var layoutResizeCn = 0;
var layoutResizeDelay = 0;
var layoutParaWidthMax = 500; // todo Off currently
// Page Loading Optimization
////////////////////////////////////////////////
// Java Initilization Functions:
var loadDelayJava = true;
var loadFirstJava = true;
// Body (Content) Images:
var loadDelayBodyImage = false;
var loadFirstBodyImage = true;
// Menu Thumbnail Images:
var loadDelayMenuImage = false;
var loadFirstMenuImage = true;
// Testing / Debug State Window
var loadDelayDebugState = false;
var loadFirstDebugState = true;
// Local Parameter Initialization specified here.
function DebugParameterInitLocal() { DebugParameterInit(); } // uses defaults.
// SectionBlock Animation Control
////////////////////////////////////////////////
// Basic Options:
var moveIsOn = true; // Objectt Move From Origin to Destination
// Animations and transitions
var filterIsOn = true; // Transition
var filterResizeIsOn = true; // Growing image
var filterDurationOverride = false; // Indicates User has set durations and defaults should not be used.
////////////////////////////////////////////////
// Animated Images
////////////////////////////////////////////////
// Image State
// set the following to the number of images
// then add the correct number of img objects
var imgUsedCn = 5;
var imgMax = 10;
// Image Layout Adjustables
var frmWidth = 75;
var txtLineHeight = 30;
var imgHeight = 90;
// Animation Timing
var intervalBase = 900;
var intervalSet = 0;
var intervalName = "";
// Menu Images
////////////////////////////////////////////////
var elementLeftOrig = 0;
var elementTopOrig = 0;
var elementLeftDest = 0;
var elementTopDest = 0;
// Transition stepping
var elementMoveDuration = 3;
var elementMoveStepMax = 50;
var elementMoveInterval = 10;
var elementMoveDelay = 0;
// Control overloading javascript
// var filterBusy = false;
// var timerBusy = false;
// var resizeBusy = false;

// Animation Transition Control:
////////////////////////////////////////////////
// (See function StdTimerDurationSet for default filter values)
// var filterDurationOverride = false;
var filterDuration = 0;
var filterStepMin = 0;
var filterStepMax = 0;
var filterInterval = 0;
var filterDelay = 0;
// Usually filterDuration is the same as
// elementDuration plus an adjustment.
// a non-zero value indicates this
// feature is on. Usually this adjustment
// is one additional second.
var filterDurationAdjustment = -0.001; // indicates use default
// Methodology to Invoke Animation:
var filterMethodPlay = 1; // execute the play method
var filterMethodVisible = 2; // change style visibility (onchange)
var filterMethod = filterMethodPlay;

script_state = "MdmMain Custom settings used";
if (debugLoadIsOn) { debugger; }
// SectionBlock Human readable arguments and comparisons todo
// ...................................... //
// State Friendly Names
var AtEnd = IsAtEnd;
var UseRoot = DoUseRoot;

// Layout Font, Blocks, Columns and Callouts
// ...................................... //
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
var layoutParaWidthMax = 500;
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
var elementWidthDefault = 250;
