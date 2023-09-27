// ServerIsOn (Page came from local or server)
// ...................................... //
serverIsOn = false;
// Override server settings.
PageBuild = "RelsNext";
PageMode = "Dev";
// Page Loading Optimization
// ...................................... //
// Include based file loads:
var loadDelayIncludes = false;
var loadIncludes = true;
var loadIncludesDone = false;
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
var loadFirebugState = true;
// Local Parameter Initialization specified here.
function DebugParameterInitLocal() { DebugParameterInit(); } // uses defaults.

// Log usage
// ...................................... //
// Example of naming for corresponding parameters
// (this is not an actual global parameter)
// var UseLog = DoNotUseLog;
// ie UseName (argument / parameter), DoUseName (passed value), DoNotUseName (passed value)...
var DoUseLog = true;
var DoNotUseLog = false;
// Size at which logs are trimmed
var consoleLogLengthMax = 40000;
var consoleLogLengthTrim = 35000;
// compact format
var UseSingleLine = DoNotUseSingeLine;

// Console (debug)
// ...................................... //
// colour
var ButtonIsOnColor = 'Lime';
var ButtonIsOffColor = 'Red';

// Find Iteration Options (note)
// ...................................... //
// var elDoFindSet = 1
// var elDoFindReturn = 2;

// Errors
// ...................................... //
var errorDoDisplayTag = true;
var errorDoNotDisplayTag = false;
var errorDoAlert = true;
var errorDoNotAlert = false;

// Debug
// ...................................... //
var debugIsOn = true; // FLAG ON!!! todo
var debugDoAlert = false;
var debugAlert = true;
var debugConsole = true;
// Log events to console
var debugLogEvents = true;
var debugLogEventDuplicates = false;

// NEW todo
// These are normalized
var debugAnitmation = true;
var debugEvents = true;
var debugImages = true;
var debugMenus = true;
var debugLayout = true;

// Debug Timers
var debugTimer = false;
var debugTimerMove = false;
var debugTimerTransition = false;
var debugTimerDetail = false;

// Error Handling
// ...................................... //
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

// Initial settings:
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

// Section Menu Image (Standard) Objects
// ...................................... //
// Storage Location for Group and Menu Item / Image
var oObjGroupIndex = 1;
var oObjRootIndex = 0;
// location of Group / Roots in arrays
var indexGroup = 0;

// SectionBlock Image Handling
// ...................................... //
// BrowserGetVs();
// Type of Image Group Page Generation
var imgLoadEventTest = false; // controls clearing of bodyMenuImageContainer for testing
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

// Layout
// Current Layout Strategy
var layoutIsWide = false;
var layoutIsStandard = true;

// ...................................... //
// (the content pane)
var layoutDocumentWidthMin = 900; // px

// Columns across page
// ...................................... //
var layoutBodyColumnMax = 4; // todo s/b 4
var layoutBodylayoutBodyColumnType1 = true;
var bodyMainLeftVisible = true;
var bodyMainRightVisible = true;
var layoutUseAbsolute = false;

var layoutStyleUnitsEm = 1;
var layoutStyleUnitsPx = 2;
var layoutSytleUnitsPercent = 3;
// IMPORTANT NOTE: Percent no longer works on firefox todo
// borders and margins. (Possibly) todo
var layoutStyleUnits = layoutStyleUnitsEm;
// Resize
var layoutResizeCn = 0;
var layoutResizeDelay = 0;
var layoutParaWidthMax = 500; // todo Off currently

// Body Menu Groups
// ...................................... //
var bodyMenuLeft = 0;
var bodyMenuRight = 1;
var bodyMenuGroupUsedCn = 4;
var bodyMenuGroupMax = 8;
var bodyMenuGroupIndex = 0;

var bodyMenuContainer = new Array(2);
bodyMenuContainer[bodyMenuLeft] = new Array(bodyMenuGroupMax);
bodyMenuContainer[bodyMenuLeft][1] = NaN;
bodyMenuContainer[bodyMenuRight] = new Array(bodyMenuGroupMax);
bodyMenuContainer[bodyMenuRight][1] = NaN;

var bodyMenuGroup = new Array(bodyMenuGroupMax);
bodyMenuGroup[1] = NaN;
// var bodyMenuGroupSave = new Array(bodyMenuGroupMax);
var bodyMenuGroupTop = new Array(bodyMenuGroupMax);

var bodyMenuGroupHeight = new Array(bodyMenuGroupMax);
bodyMenuGroupHeight[1] = 0; // todo

var bodyMenuGroupColBreak = new Array(bodyMenuGroupMax);
bodyMenuGroupColBreak[1] = 0;

// SectionBlock Animation Control
// ...................................... //
// Basic Options:
var moveIsOn = true; // Objectt Move From Origin to Destination
// Animations and transitions
var filterIsOn = true; // Transition
var filterResizeIsOn = true; // Growing image
var filterDurationOverride = false; // Indicates User has set durations and defaults should not be used.

// Animated Images
// ...................................... //
// Image State
// set the following to the number of images
// then add the correct number of img objects
var imgUsedCn = 5;
var imgMax = 10;
// Image Layout Adjustables
var boxFormWidth = 75;
var boxTextLineHeight = 30;
var imgHeight = 90;
// Animation Timing
var intervalBase = 900;
var intervalSet = 0;
var intervalName = "";

// Menu Images
// ...................................... //
var elLeftOrig = 0;
var elTopOrig = 0;
var elLeftDest = 0;
var elTopDest = 0;

// Transition stepping
var elementMoveDuration = 3;
var elMoveStepMax = 50;
var elementMoveInterval = 10;
var elementMoveDelay = 0;

// Movement Patterns:
// ...................................... //
// Methodology used to move animated objects
// from origin to destination
var elMoveMethodDirect = 1; // Slide diagonally to destination
var elMoveMethodSlideDown = 2; // Slide down, then sideways
var elMoveMethodSlideSide = 3; // Slide sideways, then down
var elMoveMethodRandom = 0; // Use random choice on each Group move
// Setting it to '0' causes a random setting on each display
var elMoveMethod = elMoveMethodRandom; // Use random

// Timer Movement
var timerDuration = elementMoveDuration;
var timerInterval = elementMoveInterval;
var timerStepMax = elMoveStepMax;
var timerDelay = elementMoveDelay;

// Steps
// var timerStep = 0;
var timerStepMin = 10;
var timerStepMax = elMoveStepMax;
var timerStepsPerSecond = 10;

// Animation Transition Control:
// ...................................... //
// Run animation and movement forwards or backwards
var playDirectionForward = 1;
var playDirectionReverse = 2;
// initially Foreward because Reverse would usually
// be useless when revealling objects.
var playDirection = playDirectionForward;

// Control overloading javascript
// var filterBusy = false;
// var timerBusy = false;
// var resizeBusy = false;

// Animation Transition Control:
// ...................................... //
// (See TimerDurationSet for default filter values)
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
// indicates use default:
var filterDurationAdjustment = -0.001;
// Methodology to Invoke Animation:
// execute the play method:
var filterMethodPlay = 1;
// change style visibility (onchange):
var filterMethodVisible = 2;
// Methodology to Invoke Animation:
var filterMethodPlay = 1; // execute the play method
var filterMethodVisible = 2; // change style visibility (onchange)
var filterMethod = filterMethodPlay;

// SectionBlock Human readable arguments and comparisons todo
// ...................................... //
// State Friendly Names
var AtEnd = IsAtEnd;
var UseRoot = DoUseRoot;

// Column Management
// Layout Font, Blocks, Columns and Callouts
// ...................................... //
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
// These are all in pixels unless otherwise stated
// Resize should take this into account.
// Absolute maximums (for reading)
var layoutMenuDocWidthWide = 900; // px
var layoutParaWidthMax = 500; // px
// When will it add more columns in the display
var layoutBlockCol4Min = 1600; // px // todo
var layoutBlockCol3Min = 1000; // px
var layoutBlockCol2Min = 500; // px
var layoutBlockCol1Min = 'float';
// How wide is a column
var layoutBlockWidthBig = 22; // % // 4 cols
var layoutBlockWidthWide = 30; // % // 3 cols
var layoutBlockWidthStandard = 45; // % // 2 cols
var layoutBlockWidthNarrow = 96; // % // 1 cols
var layoutBlockWidthDefault = 250; // px
// Callout Layout
var calloutLayoutBlockWidthPxBig = 800; // px
var calloutLayoutBlockWidthPxWide = 600; // px
var calloutLayoutBlockWidthPxStandard = 350; // px
var calloutLayoutBlockWidthPxNarrow = 150; // px
// Callout width
var calloutLayoutBlockWidthBig = 20; // %
var calloutLayoutBlockWidthWide = 33; // %
var calloutLayoutBlockWidthStandard = 45; // %
var calloutLayoutBlockWidthNarrow = 82; // %

var bodyMainCenterTopClass = "";

// Document Window Resize
// Adjustments:
var layoutWidthMargin = 60; // ??? really?
var layoutHeightMargin = 50;
var layoutMenuHeightMax = 0;

script_state = "MdmMain Custom settings used";
if (debugLoadIsOn) { debugger; }

