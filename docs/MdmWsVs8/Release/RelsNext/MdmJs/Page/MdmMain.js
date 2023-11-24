menuImageBorderWidth = 6;
filterMotionDirectionSourceAngle = 292.5;

// Sever SECTION
// ServerIsOn (Page came from local or server)
// ...................................... //
serverIsOn = false;
// Override server settings.
PageBuild = "RelsNext";
PageMode = "Dev";

// ...................................... //
// STANDARD VARIABLES
// ...................................... //
// UseDebug means differenct things depending on context
// i.e. it may refer to debugging or to content button target selection
// Important fields: PageBuild, PageMode
// Load - Steps through loading script files
// Error debug Handling
debugLoadIsOn = false;
script_state = "debugLoadIsOn is" + debugLoadIsOn;

// Page Loading / Optimization SECTION
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
var loadFirstDebugState = true;

// Local Parameter Initialization specified here.
function ConsoleFormElementSyncLocal(fromForm) { ConsoleFormElementSync(fromForm); } // uses defaults.

// SECTION - general SETTINGS (and in Console Form)
// ...................................... //
// Debugging and Console
// ...................................... //
UseDebug = DoUseDebug;
UseLog = DoUseLog;
UseAlert = DoUseAlert;

// ...................................... //
// case 'ConsoleMouseOver':
UseLogAnimation = true;
// consoleMouseOverToggle.style.borderColor = buttonIsOnColor;
// ...................................... //
// case 'FONTS'
// Smaller
// Reset
// Larger
// ...................................... //
// ...................................... //
// case 'ConsoleAll':
consoleBoxButton = false;
// consoleBox.style.display = 'block';
// consoleToggle.style.borderColor = buttonIsOnColor;

// case 'ConsoleError':
consoleErrorBoxButton = true;
// consoleErrorBox.style.display = 'block';
// consoleErrorToggle.style.borderColor = buttonIsOnColor;

// case 'ConsoleEvent':
consoleEventBoxButton = true;
// consoleEventBox.style.display = 'block';
// consoleEventToggle.style.borderColor = buttonIsOnColor;

// case 'ConsoleState':
consoleStateBoxButton = true;
// consoleStateBox.style.display = 'block';
// consoleStateToggle.style.borderColor = buttonIsOnColor;

// ...................................... //
// case 'ConsoleTest':
consoleTestBoxButton = false;
// consoleTestBox.style.display = 'block';
// consoleTestToggle.style.borderColor = buttonIsOnColor;

// case 'ConsoleClear':
consoleClearButton = false;
// consoleClearToggle.style.backgroundColor = '';

// ...................................... //
// case 'ConsoleDebug':
consoleDebugButton = false;
// consoleDebugMainToggle.style.borderColor = buttonIsOnColor;

// case 'ConsoleDebugDetailAll':
UseLogDetailsAll = false;
// consoleDebugAllToggle.style.borderColor = buttonIsOnColor;

// ...................................... //
// case 'ConsoleDebugOnError':
UseDebugOnError = false;
// consoleDebugOnErrorToggle.style.borderColor = buttonIsOnColor;

// case 'ConsoleDebugAll':
UseDebugOnAll = false;
// consoleDebugAllToggle.style.borderColor = buttonIsOnColor;

// Console
UseLogConsole = false;
// Page
UseLogPage = false;
// Window
UseLogWindow = false;

// Animation
// ...................................... //
UseLogAnitmation = true;

// case 'ConsoleDebugMove':
UseLogTimerMove = false;

// consoleDebugMoveToggle.style.borderColor = buttonIsOnColor;

// case 'ConsoleDebugTransition':
UseLogTimerTransition = false;
// consoleDebugTransitionToggle.style.borderColor = buttonIsOnColor;

// case 'ConsoleDebugDetail':
UseLogTimerDetail = false;
// consoleDebugDetailToggle.style.borderColor = buttonIsOnColor;

// Events
// ...................................... //
// case 'ConsoleDebugEvents':
UseLogEvents = false;
// consoleDebugEventsToggle.style.borderColor = buttonIsOffColor;

// ...................................... //
// case 'ConsoleDebugHover':
UseLogHover = false;
// consoleDebugHoverToggle.style.borderColor = buttonIsOnColor;

// ...................................... //
// ...................................... //

// Block Animation Control AREA
// ...................................... //
// Basic Options:
var moveIsOn = true; // Object Move From Origin to Destination
// Animations and transitions
var filterIsOn = true; // Transition
var filterResizeIsOn = true; // Growing image
var filterDurationOverride = false; // Indicates User has set durations and defaults should not be used.

// Mouse Hover activation of image display
// var UseLogAnimation = true;
// Type of Image Group Page Generation
var imgLoadEventTest = false; // controls clearing of bodyImageContainer for testing
var imgLoadUseDOM = true; // Add Elements to DOM
var imgLoadUseInner = false; // Use innerHTML for content
var imgLoadUseEventHandler = true; // Single Event Listener (dispatcher)

// AREA Log usage
// ...................................... //
// UseLog = DoUseLog;
// Size at which logs are trimmed - memory management
consoleErrorLogCnMax = 2000; // total Messages
UseLogLengthMax = 100000; // total bytes
UseLogLengthTrim = 85000;
consoleEventLogCnMax = 5000; // total events

// Detailed logging flag (verbose)
var UseLogDetails = false;

// Formatting
UseLogOrder = DoUseAscendingDate;
UseLogScroll = true;

// Format messages on a SingleLine
UseSingleLine = DoNotUseSingleLine;
UseScroll = DoUseScroll;
// Ignores duplicate events. (resize, mouse)
UseLogEventDuplicates = false;

errorMessage = "Page settings initializing";
errorResultOnFail = errorDidNotOccur;

// AREA Debug.
// This AREA is for controlling javascript debugging.
// AREA Debug Areas
// ...................................... //
//      These are normalized Areas
//      main features and components.

// Images
UseLogImages = true;
// Menus
UseLogMenus = true;
// Elements
UseLogElements = true;
// Layout
UseLogLayout = true;

// AREA Error Severity
// ...................................... //
errorDidNotOccur = 0;
errorIsComment = 5;
errorIsWarning = 10;
errorIsSevere = 20;
erroIsFatal = 30;

// Severity that triggers debugger. Usually severe or warning.
errorDebugLevel = errorIsSevere;

// Initial settings:
errorSeverity = errorDidNotOccur;
errorSeverityLevel = errorDidNotOccur;

// Potentially these can be overridden.
// Find Iteration Options (note)
// ...................................... //
// DoFindSet = 1
// DoFindReturn = 2;
// Error Options
// ...................................... //
// errorDoDisplayTag = true; // or override
// errorDoNotDisplayTag = false; // same...
// DoUseAlert = true;
// DoNotUseAlert = false;

// Console (debug) SECTION
// ...................................... //
// colour
// Button colors
consoleViewToggleBackgroud = '#036';
consoleViewToggleColor = 'White';
// button borders
buttonIsOnColor = 'Lime';
buttonIsOffColor = 'Red';
buttonIsNormalColor = 'White';
// Message Colors
errorSeverityColorFatal = 'Black';
errorSeverityColorFatalBg = 'Red';

errorSeverityColorSevere = 'Black';
errorSeverityColorSevereBg = 'Pink';

errorSeverityColorWarn = 'Black';
errorSeverityColorWarnBg = 'Yellow';

errorSeverityColorComment = 'Gray';
errorSeverityColorCommentBg = 'White';

errorSeverityColor = errorSeverityColorComment;
errorSeverityColorBg = errorSeverityColorCommentBg;
errorSeverityColorHighestBg = consoleViewToggleBackgroud;

// SectionBlock Object Postion
// ...................................... //
// The following are here in the event some browsers
// handles these position fields differently.
// By setting both the 'Use' and 'DoNotUse' to
// true or false they can be forced or negated.
// ...................................... //
UseOffset = DoUseOffset;
UseBase = DoUseBase;
UseScroll = DoUseScroll;

// Section Menu Image (Standard) Objects
// ...................................... //
// Storage Location for Group and Menu Item / Image
var oObjGroupIndex = 1;
// location of Group / Roots in arrays
var oObjRootIndex = 0;
var indexGroup = 0;

// Menu Image Size
var oObjImageSizeSmall = 150;
var oObjImageSizeLarge = 500;
var oObjImageSizeRatio = 0.7;
var oObjImageSize = 0;

// Body Menu Groups
// ...................................... //
var bodyMenuLeft = 0;
var bodyMenuRight = 1;
var bodyMenuGroupUsedLeftCn = 3;
var bodyMenuGroupUsedRightCn = 3;
var bodyMenuGroupUsedCn = bodyMenuGroupUsedLeftCn + bodyMenuGroupUsedRightCn;
var bodyMenuGroupMax = bodyMenuGroupUsedCn;
var bodyMenuGroupIndex = 0;

var bodyMenuContainer; // = new Array(2);
var bodyMenuContainerGroupIndex; // = new Array(2);
var bodyMenuGroup; // = new Array(bodyMenuGroupUsedCn);
// var bodyMenuGroupSave; // = new Array(bodyMenuGroupUsedCn);
var bodyMenuGroupTop; // = new Array(bodyMenuGroupUsedCn);
var bodyMenuGroupHeight; // = new Array(bodyMenuGroupUsedCn);
var bodyMenuGroupColBreak; // = new Array(bodyMenuGroupUsedCn);

// Menu Image Groups
////////////////////////////////////////////////
// Menu Current Image Object By Group (Image Group)
// set the number of groups and the images per group
// // Image Group
var imgGroupBoxCount = 20; // depreciated
var imgGroupCount = bodyMenuGroupMax + 1;
var imgGroupArraySize = bodyMenuGroupMax + 1;
var imgGroupImageArraySize = bodyMenuGroupMax + 1;

// Animated Images
// ...................................... //
// Image State
// set the following to the number of images
// then add the correct number of img objects
var imgUsedCn = 5; // ? 6 ?
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
var elementMoveMethodDirect = 1; // Slide diagonally to destination
var elementMoveMethodSlideDown = 2; // Slide down, then sideways
var elementMoveMethodSlideSide = 3; // Slide sideways, then down
var elementMoveMethodRandom = 0; // Use random choice on each Group move
// Setting it to '0' causes a random setting on each display
var elementMoveMethod = elementMoveMethodRandom; // Use random

// SectionBlock Timers
// ...................................... //
// Timers by Group or Item
timerMethod = timerMethodItem;
//
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

// Timer Object & Indexes
var timerGroupIndexMax = bodyMenuGroupMax;

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
filterDurationOverride = false;
filterDuration = 0;
filterStepMin = 0;
filterStepMax = 0;
filterInterval = 0;
filterDelay = 0;

// Filter Settings for Animation
// ...................................... //
filterDurationAdjustment = -0.001;
// Methodology to Invoke Animation:
filterMethod = filterMethodPlay;
// Indicate actions is on Group (Root) or Item
UseRoot = DoUseRoot;

// State Friendly Names
AtEnd = IsAtEnd;

// Column Management
// Layout Font, Blocks, Columns and Callouts
// ...................................... //
// Body Layout Management (Combinations)
//
// Optoin Toggles:
// 	 		 Hidden Banner
//			 Hidden Menu1
//			 Hidden Menu2
//			 Hidden Menu 1 & 2
//			 Hidden All
//
// 1 Standard
// 	 		 Banner at Top
//			 Body Center
//			 Menu1 at Left
//			 Menu2 at Right
// 2 Reading Mode Hide
//			 Body Center
//			 Hidden Menu1 at Left
//			 Hidden Menu2 at Right
// 	 		 Hidden Banner at Bottom
// 3 Windowed
//			 Body Center
//			 Menu1 at Center Top Left
//			 Menu2 at Center Top Right
// 	 		 Banner at Center Bottom
// 4 Reading Mode Show
//			 Body Center (Top Left)
//			 All Other at Right
//			 	 Menu1 at Top Left
//			 	 Menu2 at Top Right
// 	 		 	 Banner at Bottom
//
// Named Switch Enumerations are used...
var layoutIndexMax = 4;
var layoutStandard = 1;
var layoutReadingMode = 2;
var layoutWindowed = 3;
var layoutReadingModeLeft = 4;
//
var layoutStandardFirst = true;
var layoutReadingModeFirst = true;
var layoutWindowedFirst = true;
var layoutReadingModeLeftFirst = true;
var layoutTopFirst = true;
//
var layoutIndex = layoutStandard;
var layoutIndexCurr = layoutStandard;
var layoutIndexCurrLast = layoutStandard;

// Current Layout Strategy
var layoutIsWide = false;
var layoutIsStandard = true;

// (the content pane)

// Browser viewport
// ...................................... //
var layoutWindowViewportDoInit = true;
// The initial and minimum sizes for the Window (Viewport)
var layoutWindowViewportWidth = 600;
var layoutWindowViewportWidthMin = 100;
var layoutWindowViewportHeight = 800;
var layoutWindowViewportHeightMin = 100;

var layoutDocumentWidthMin = 900; // px (only for documents)
var layoutDocumentWidthMax = 10000; // px (when landscape mode kicks in)

// Document and Paragraph min/max
// ...................................... //
// These are all in pixels unless otherwise stated
// Resize should take this into account.
// Absolute maximums (for reading)
var layoutMenuDocWidthWide = 1000; // px
// The maximum width for paragraphs
var layoutParaWidthMax = 600; // todo Off currently
// The point at which callout boxes are put in-line
// (instead of floating) (px)
var layoutParaWidthMin = 200;

// Columns across page
// ...................................... //
var layoutBodyColumnMax = 4; // (the curr maximum)
var layoutBodyColumnType1 = true; // what is this?

// Left and Right (Menu usage) are optional
var bodyMainLeftVisible = true;
var bodyMainRightVisible = true;
var layoutUseAbsolute = false;

// Resize
var layoutResizeCn = 0;
var layoutResizeDelay = 0;

var layoutStyleUnitsEm = 1;
var layoutStyleUnitsPx = 2;
var layoutSytleUnitsPercent = 3;

// IMPORTANT NOTE: Percent no longer works on firefox todo
// borders and margins. (Possibly) todo
var layoutStyleUnits = layoutStyleUnitsEm;
// This variable is the multiplier that will reflect font-size;
// Using a 1em font is the default (1em = 1.0 EmRation)
// refered to as medium size on most browsers.
// The layoutWidth(s) have to scale up proportionally
// with text size when adjusting the callouts.
// A larger font size will disturb the floating by
// pushing down the content that wont fit beside the
// callout.
var layoutFontRatio = 1.0;
var layoutFontH1 = 2.0;
var layoutFontH2 = 1.6;
var layoutFontH3 = 1.4;
var layoutFontH4 = 1.2;
var layoutFontH5 = 1.1;
var layoutFontH6 = 1.1;
// Fancy
var layoutFontPromo = 1.2;
var layoutFontBlurb = 1.2;
var layoutFontTiny = 0.8;
var layoutFontMicro = 0.6;
// Specialized
var layoutFontCode = 1.0;
var layoutFontPre = 1.0;
// Fonts Sized
var layoutFontP = 1.0;
var layoutFontUl = 1.0;
// span and li inherit.
// Caption & Title
var layoutFontCaption = 1.4;
var layoutFontTitle = 2.0;
// Layout Classes
var MenuList = 1.1;
var MenuListItem = 1.0;
// Just to keep the math simple f10 = 1.0em;

// Columns in pixels
// When will it add more columns in the display
var layoutBlockCol4Min = 1800; // px // todo
var layoutBlockCol3Min = 1200; // px
var layoutBlockCol2Min = 600; // px
var layoutBlockCol1Min = 0; // float
//
// var layoutBlockCol4Min = 1400; // px // todo
// var layoutBlockCol3Min = 1000; // px
// var layoutBlockCol2Min = 500; // px
// var layoutBlockCol1Min = 0; // float

// Layout Percentage (used by columns)
var layoutBlockWidthBig = 25; // % // 4 cols
var layoutBlockWidthWide = 33; // % // 3 cols
var layoutBlockWidthStandard = 50; // % // 2 cols
var layoutBlockWidthNarrow = 100; // % // 1 cols
var layoutBlockWidthDefault = 250; // px

// Callout Pixels
var calloutLayoutBlockWidthPxBig = 800; // px
var calloutLayoutBlockWidthPxWide = 600; // px
var calloutLayoutBlockWidthPxStandard = 350; // px
var calloutLayoutBlockWidthPxNarrow = 150; // px

// Callout width Percentage (in use)
var calloutLayoutBlockWidthBig = 20; // %
var calloutLayoutBlockWidthWide = 33; // %
var calloutLayoutBlockWidthStandard = 45; // %
var calloutLayoutBlockWidthNarrow = 65; // %

// var calloutBoxWidthStandard = 82;
// var calloutBoxWidthNarrow = 45;
var calloutBoxWidth = 0;
var bodyMainCenterTopClass = "";

// Document Window Resize
// Adjustments: todo is this used?
var layoutWidthMargin = 60; // ??? really?
var layoutHeightMargin = 50;
var layoutMenuSizeMax = 0;

script_state = "MdmMain Custom settings used";
if (debugLoadIsOn) { debugger; }
