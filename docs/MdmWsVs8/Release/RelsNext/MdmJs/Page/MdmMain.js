// ServerIsOn (Page came from local or server)
////////////////////////////////////////////////
serverIsOn = false;
// Errors
// ...................................... //
var errorDoDisplayTag = true;
var errorDoNotDisplayTag = false;
var errorDoAlert = true;
var errorDoNotAlert = false;
// Console
// ...................................... //
// Size at which logs are trimmed
var consoleLogLengthMax = 40000;
var consoleLogLengthTrim = 35000;
//
var UseSingleLine = DoNotUseSingeLine;
//
var ButtonIsOnColor = 'Lime';
var ButtonIsOffColor = 'Red';
// Debugger
// ...................................... //
// var debugIsOn = true;
// var debugDoAlert = true;
var debugIsOn = false;
var debugDoAlert = false;
// This flag not implemented in forms or buttons
var debugAlert = true;
//
var debugTimer = false;
var debugTimerMove = false;
var debugTimerTransition = false;
var debugTimerDetail = false;
// Log events to console
// ...................................... //
var debugLogEvents = false;
var debugLogEventDuplicates = false;
// Error Handling
// ...................................... //
// Use debugger on error:
// this (debug on error) is the only toggle on by default
var errorUseDebugOnError = false; // enter debugger on errors
//
var errorUseDebugOnAll = false; // enter debugger after any message
//
var errorDidNotOccur = 0;
var errorComment = 5;
var errorWarn = 10;
var errorSevere = 20;
var errorFatal = 30;
//
var errorSeverity = errorDidNotOccur;
var errorDebugLevel = errorSevere;
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
// SectionBlock Image Handling
////////////////////////////////////////////////
// fnBrowserGetVs();
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
// Page Loading Optimization
////////////////////////////////////////////////
// Java Initilization Functions:
var javaLoadDelay = true;
var javaLoadFirst = true;
// Body (Content) Images:
var bodyImageLoadDelay = false;
var bodyImageLoadFirst = true;
// Menu Thumbnail Images:
var menuImageLoadDelay = false;
var menuImageLoadFirst = true;
// Testing / Debug State Window
var debugStateLoadDelay = false;
var debugStateLoadFirst = true;
// Local Parameter Initialization specified here.
function fnDebugParameterInitLocal() { fnDebugParameterInit(); }

script_state = "MdmMain Custom Default settings used";
