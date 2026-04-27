var script_state = "Mdm Web Site";
var debugLoadIsOn = false;
// var serverIsOn; // = false;
// var PageBuild; // "RelsNext" "RelCurr"
// var PageMode; // "Pub" "Dev";
////////////////////////////////////////////////
// Position Control
var boxClass;
var boxHeight = 0;
var boxWidth = 0;
var TopLeftWidth = 0;
var TopLeftWidthInner = 0;

// Section Pre Document Load Script
// ...................................... //
// Move these:
// (none)
// ...................................... //
// Do Not Move these:
// Section Framework Parameters

// SectionBlock Columns
// ...................................... //
var layoutBodyColumnType;
var layoutBodyColumnMax; // = 3;
var bodyMainLeftVisible; // = true;
var bodyMainRightVisible; // = true;
var layoutUseAbsolute; // = false;

// SectionBlock Object Postion
// ...................................... //
// The following are here in the event some browsers
// handles these position fields differently.
// By setting both the 'Use' and 'DoNotUse' to
// true or false they can be forced or negated.
var UseScroll; // = true;
var UseBase; // = true;
var UseOffset; // = true;
var DoUseScroll; // = true;
var DoUseBase; // = true;
var DoUseOffset; // = true;
var DoNotUseScroll; // = false;
var DoNotUseBase; // = false;
var DoNotUseOffset; // = false;

// SectionBlock Image Handling
// ...................................... //

// BrowserVsGet();
// ...................................... //

// Type of Image Group Page Generation
var imgLoadEventTest; // = false; // controls clearing of bodyImageContainer for testing
var imgLoadUseDOM; // = true; // Add Elements to DOM
var imgLoadUseInner; // = false; // Use innerHTML for content
var imgLoadUseEventHandler; // = true; // Single Event Listener (dispatcher)

// Mouse Hover activation of image display
// ...................................... //
var eventMouseOverEnabled; // = false;

// Page Loading Optimization
// ...................................... //
// Java Initilization Functions:
var loadDelayJava; // = true;
var loadFirstJava; // = true;
// Body (Content) Images:
var loadDelayBodyImage; // = false;
var loadFirstBodyImage; // = true;
// Menu Thumbnail Images:
var loadDelayMenuImage; // = false;
var loadFirstMenuImage; // = true;
// Testing / Debug State Window
var loadDelayDebugState; // = false;
var loadFirebugState; // = true;


// Section GLOBAL / COMMON Variables
// ...................................... //
// ...................................... //

// SectionBlock STANDARD Variables
// ...................................... //
// Temporary
var bTemp = false;
var iTemp = 0;
var sTemp = '';
// Box Size or Box Rectangle Pointers for arrays
var indexTop = 0;
var indexLeft = 1;
var indexRight = 2;
var indexWidth = 2;
var indexBottom = 3;
var indexHeight = 3;
// Standard functions and characters
var charFSlash = '/';
var charBSlash = '\\';
var charNewLine = charFSlash + 'n';
var charNewLineTag = '<br>';
var charNewLineTagOpen = '<br>';
var charNewLineCrLf = String.fromCharCode(11, 13);
var charTextIndent = '........';
var charLt = String.fromCharCode(60);
var charGt = String.fromCharCode(62);

// SectionBlock Human readable arguments and comparisons todo
// ...................................... //

// State Friendly Names
var IsAtEnd = 1;
var IsNotAtEnd = 0;
var AtEnd = IsAtEnd;
//
var DoUseHide = true;
var DoNotUseHide = false;
//
// UseDebug means differenct things depending on context
// i.e. it may refer to debugging or to content button target selection
var DoUseDebug = true;
var DoNotUseDebug = false;
//
// Indicate actions is on Group (Root) or Item
var DoNotUseRoot = 0; // Item only
var DoUseRoot = 1; // Root only
var DoUseBoth = 2; // Both
var DoNotUseEither = 3; // Both
var UseRoot = DoUseRoot;

// Log usage
// ...................................... //
// Example of naming for corresponding parameters
// (this is not an actual global parameter)
// var UseLog = DoNotUseLog;
// ie UseName (argument / parameter), DoUseName (passed value), DoNotUseName (passed value)...
// var DoUseLog = true;
// var DoNotUseLog = false;

// Find Iteration Options
var elDoFindSet = 1
var elDoFindReturn = 2;

// SectionBlock HTML write variables
// ...................................... //
var lt = String.fromCharCode(60)
var gt = String.fromCharCode(62)

var tagDiv = lt + 'di' + 'v ';
var tagDivEnd = lt + charFSlash + 'di' + 'v' + gt;

var tagP = lt + 'p ';
var tagPEnd = lt + charFSlash + 'p' + gt;

var tagSpan = lt + 'spa' + 'n ';
var tagSpanEnd = lt + charFSlash + 'spa' + 'n' + gt;

var tagH9 = lt + 'h';
var tagH9End = lt + 'h';

var tagA = lt + 'a ';
var tagAEnd = lt + charFSlash + 'a' + gt;

var tagImg = lt + 'im' + 'g ';

var tagScript = lt + 'scrip' + 't ';
var tagScriptEnd = lt + charFSlash + 'scrip' + 't' + gt;
//
var charNoWrapTagStart = lt + 'pr' + 'e' + gt;
var charNoWrapTagEnd = lt + charFSlash + 'pr' + 'e' + gt;
//
var tagEndContentNone = ' ' + gt;
var tagEndContentStart = gt;
//
var quoteOpen = '"';
var quoteClose = '"';
//
var quoteInnerOpen = "'";
var quoteInnerClose = "'";
//
var attributeId = ' i' + 'd=';
var attributeClass = ' cl' + 'ass=';
var attributeName = ' na' + 'me=';
//
var attributeStyle = ' sty' + 'le=';
var attributeStyleDisplay = ' disp' + 'lay:';
var attributeStyleWidth = ' wi' + 'dth:';
var attributeStyleHeight = ' hei' + 'ght:';
var attributeStylePadding = ' padd' + 'ing:';
var attributeStyleMargin = ' mar' + 'gin:';
//
var attributeSrc = ' sr' + 'c=';
var attributeHref = ' h' + 'ref=';
var attributeRel = ' re' + 'l=';
var attributeType = ' t' + 'ype=';
var attributeAlt = ' al' + 't=';
//
var attributeEventMouseOut = ' onmou' + 'seout';
var attributeEventMouseOver = ' onmou' + 'seover';
var attributeEventMouseDown = ' onmou' + 'sedown';

// Section Console for Error, Event and State
// ...................................... //

// SectionBlock Console
// ...................................... //
var consoleErrorLogCn = 0;
var consoleErrorLogScrollCn = 0;
var consoleEventLogCn = 0;
var consoleEventLogScrollCn = 0;
var consoleStateLogCn = 0;
var consoleStateLogScrollCn = 0;
//
// Size at which logs are trimmed
// var consoleLogLengthMax = 40000;
// var consoleLogLengthTrim = 35000;
// Use single or multiple lines
var DoUseSingeLine = true;
var DoNotUseSingeLine = false;
// var UseSingleLine = DoNotUseSingeLine;
//
// var ButtonIsOnColor = 'Lime';
// var ButtonIsOffColor = 'Red';

// Error Message Display
// ...................................... //
// var errorUseDebugOnError = true;
var errorLogFatal = new String;
var errorMessageSevere = new String;
var errorMessageWarn = new String;
var errorMessageComment = new String;
var errorMessageAllLog = new String;
//
var errorDidNotOccur = 0;
var errorComment = 5;
var errorWarn = 10;
var errorSevere = 20;
var errorFatal = 30;
var errorSeverity = errorDidNotOccur;
//
var errorSeverityHighest = errorDidNotOccur;
//
// errorDebugLevel = errorSevere;
//
var errorCn = 0;
//
var eventCurr;
var errorEventCurr;
var errorEventPrev;
//
var errorDoDisplayTag; // = true;
var errorDoNotDisplayTag; // = false;
var errorDoAlert; // = true;
var errorDoNotAlert; // = false;

var errorCaller;
var errorCallerName;
var errorTimeStamp;
var errorInnerHTML;
var errorSourceInnerHTML;

// Events
// ...................................... //
var eventCurr;
var eventCurrId = 0;
var eventObject;
var eventId;
var eventType;
var eventFileName;
var eventFileFunction;
var eventFileLine;
var eventFileColumn;
var eventTarget;
var eventCurrentTarget; // not used
var eventError;
var eventTimeStamp;
var eventIsBrowser;
var eventIsOld;
//
var callerFunc;
var callerFuncName;
//
var eventLast;
var eventLastObject;
var eventLastId;
var eventLastRootId;
//
var eventCurrRootObj;
var eventParentName;

// Message - Errors, Events, Logging, tracing etc
// ...................................... //
var MessageUrl;
var MessageTemp;
var MessageFinal;
var MessageElement;
var MessageElementSource;

var MessageElementDidNotOccur = 0;
var MessageElementComment = 5;
var MessageElementWarn = 10;
var MessageElementSevere = 20;
var MessageElementFatal = 30;
var MessageElementSeverity = errorDidNotOccur;

// SectionBlock Events (Mouse, load, error)
// ...................................... //
var LastId = new String();
var LastTochedId = new String();

// Section Menu Image (Standard) Ojects
// ...................................... //
// Storage Location for Group and Menu Item / Image
// These can be overriden locally (might be)
var oObjGroupIndex = 1;
var oObjRootIndex = 0;
var indexGroup = 0; // location of Group / Roots in arrays

// Menu Image Objects
var oObj = document.createElement('div');
var oObjIndex = 1;
var oObjImage = document.createElement('img');
var oObjIndex = 0;
var oObjGroupIndex = 0;
var oObjValid = false;
var oObjId = new String();
var oObjParentId = new String();

//
var oObjParent = document.createElement('div');
var oObjParentIndex = 1;
//
var oObjLarge = document.createElement('div');
var oObjImageLarge = document.createElement('img');
//
var oObjText = new String();
//
var IsSmall = 0;
var IsLarge = 1;
var IsImageLarge = IsSmall;

// Current Menu Image Object
var oObjNext;
var oObjNextImage;
var oObjNextParent;
var oObjNextLarge;
//
// Menu Image Size
// var oObjImageSizeSmall = 150;
// var oObjImageSizeLarge = 500;
// var oObjImageSizeRatio = 0.7;
// var oObjImageSize = 0;
//

// Menu Image Position
var oObjLeft;
var oObjTop;
var oObjWidth;
var oObjHeight;

// Menu Image Z Index
var imgZindex = 120;
//
// Image range variables
var oObjIndexStart = 0;
var oObjIndexEnd = 0;
//
var oObjNotFound = false;
//
var layoutBlockWidth;
var layoutBlockWidthDefault = 0; // = iImageSize + (menuImageBorderWidth * 2);
var elHeightDefault = 0; // = (iImageSize * oObjImageSizeRatio) + (menuImageBorderWidth * 2);

// SectionBlock Layout Management Variables
///////////////////////////////////////////////

// Display Layouts:
// (Named Switch Enumerations are used...)
var layoutStandard = 1;
var layoutReadingMode = 2;
var layoutWindowed = 3;
var layoutReadingModeLeft = 4; // not implemented

// Initialization controls
var layoutStandardFirst = true;
var layoutReadingModeFirst = true;
var layoutWindowedFirst = true;
var layoutReadingModeLeftFirst = true;
//
var layoutIndex = layoutStandard;
var layoutIndexMax = 4;
var layoutRefreshCn = layoutStandard;
var layoutRefreshCnLast = layoutStandard;
//
var layoutSectionCn = 0;
var layoutBlockCn = 0;
//
var layoutSection; // not used
var layoutBlock; // not used
var layoutCallout; // not used
//
var layoutWidth;
var layoutHeight;
//
var layoutZindex = 20;

// SectionBlock Document Layout (Window) Resize
// ...................................... //
// window.onerror = function() { WindowError() };
var layoutResizeCn = 0;
var layoutResizeDelay = 0;
var layoutResizeDo = true;
// window.onresize = function() { WindowResizeLayout(); }

layoutWidth = 0;
layoutHeight = 0;

// Client Width & Height
// ...................................... //
//
var layoutClientWidth = 0;
var layoutClientHeight = 0;
var layoutAvailWidth = 0;
var layoutAvailHeight = 0;
var layoutDocumentWidth = 0;
var layoutDocumentHeight = 0;
//
var bodyLayoutMenu1Height = 0;
var bodyMainCenterHeight = 0;
var bodyLayoutMenu2Height = 0;

// Adjustments:
// ...................................... //
var layoutWidthMargin = 60;
var layoutHeightMargin = 50;
//
var layoutBodyHeightHorzMax = 0;
var layoutBodyHeightVertMax = 0;

// Client Window Size
var layoutWidthPrev = 0;
var layoutHeightPrev = 0;

// Current Layout Strategy
var layoutIsWide = false;
var layoutIsStandard = true;

// SectionBlock Layout Elements State
// ...................................... //

// Body Layout Objects First Flags:
// ...................................... //
var bodyFirst = true;
//
var bodyMainContainerFirst = true;
//
var bodyBannerFirst = true;
var bodyBannerTopFirst = true;
var bodyBannerBottomFirst = true;
//
var bodyMainCenterTopFirst = true;
var bodyMainCenterTopLeftFirst = true;
var bodyMainCenterTopRightFirst = true;
//
var bodyMainCenterFirst = true;
//
var bodyMainLeftFirst = true;
var bodyMainRightFirst = true;
//
var bodyMainLeftOrigFirst = true;
var bodyMainRightOrigFirst = true;
//
var bodyMainLeftCurrFirst = true;
var bodyMainRightCurrFirst = true;
//
var bodyMainLeftCopyFirst = true;
var bodyMainRightCopyFirst = true;
//
var bodyMainRightFarFirst = true;
//
var layoutBodylayoutBodyColumnType1First = true;

// SectionBlock Body Layout Element Objects:
// ...................................... //
// Body Container
// ...................................... //
var body;
// Body Container
var bodyMainContainer;

var bodyBlockCn;
var bodyBlockWidth;

// Banner (Top Menu, Logo and Graphics
// ...................................... //
var bodyBanner;
var bodyBannerTop;
var bodyBannerBottom;

// Body View Toggle, Console and Debug Message Areas
// ...................................... //
// Body Console and Message Area
var consoleContainer;
var consoleContainerLeft;
var consoleContainerCenter;
// Page Content Boxes
var consoleBox;
var consoleErrorBox;
var consoleErrorTextBox;
var consoleEventBox;
var consoleEventTextBox;
var consoleStateBox;
var consoleStateTextBox;
var consoleTestBox;
var consoleTestTextBox;
//
var BodyConsoleBoxButtons = false;
var BodyConsoleDebugButtons = false;

// View, Console and Debug Toggle Buttons
// ...................................... //
var bodyViewToggleContainer;
var bodyViewToggleContainerCenter;
var bodyViewToggleContainerLeft;
//
var consoleMouseOverToggle;

// Containers for Console Buttons
// ...................................... //
var consoleBoxButtons;
var consoleBoxToggles;
var consoleLogToggles;
var consoleAuxillaryToggles;

// Console Buttons
// ...................................... //
var consoleToggle;
//
var consoleErrorToggle;
var consoleEventToggle;
var consoleStateToggle;
var consoleTestToggle;
var consoleClearToggle;

// Containers for Debug Buttons
// ...................................... //
var consoleDebugButtons;
var consoleDebugToggles;
var consoleDebugMainToggles;
var consoleDebugTypesToggles;

// Debug Buttons
// ...................................... //
var consoleDebugToggle;
//
var consoleDebugMoveToggle;
var consoleDebugTransitionToggle;
var consoleDebugDetailToggle;
var consoleDebugAllToggle;
var consoleDebugOnErrorToggle;
var consoleDebugEventsToggle;

var bodyTitleTopLeft;

// Body Center Area
// ...................................... //
var bodyMainCenter;
var bodyMainCenterTop;
var bodyMainCenterTopLeft;
var bodyMainCenterTopRight;
var BodyMainCenterTopClass = '';
var bodyMainCenterTopColBreak;
var bodyMainCenterCenter;
var bodyMainCenterBottom;


var layoutMenuHeightHorzMax = 0;
var layoutMenuHeightVertMax = 0;
//
// Body Left Area
// ...................................... //
// var bodyMainLeftVisible = true;
var bodyMainLeft;
var bodyMainLeftCopy;
var bodyMainLeftCurr; // Current
var bodyMainLeftOrig; // Original

var bodyMainLeftOuter;
var bodyMainLeftInner;
var bodyLayoutMenu1;

// Body Right Area
// ...................................... //
// var bodyMainRightVisible = true;
var bodyMainRight;
var bodyMainRightCopy;
var bodyMainRightCurr; // Current
var bodyMainRightOrig; // Original

var bodyMainRightOuter;
var bodyMainRightInner;
var bodyLayoutMenu2;

// Body Far Right Area
// ...................................... //
var bodyMainRightFar;

// Other...
// ...................................... //
var bodyImageContainer;
var bodyImageContainer;

// SectionBlock Column
// ...................................... //
var layoutBodylayoutBodyColumnType1; // = true;
var layoutBodyColumnMax; // = 1;

// Body Menu Groups
// ...................................... //
var bodyMenuLeft; //  = 0;
var bodyMenuRight; //  = 1;
var bodyMenuGroupMax; //  = 4;
var bodyMenuGroupIndex; //  = 0;

var bodyMenuContainer; //  = new Array(2);

var bodyMenuGroup; //  = new Array(bodyMenuGroupUsedCn);
// var bodyMenuGroupSave = new Array(bodyMenuGroupUsedCn);
var bodyMenuGroupTop; //  = new Array(bodyMenuGroupUsedCn);
var bodyMenuGroupHeight; //  = new Array(bodyMenuGroupUsedCn);
var bodyMenuGroupColBreak; //  = new Array(bodyMenuGroupUsedCn);

// Section Menu Image Group and Item Variables
// ...................................... //
// SectionBlock Group
// ...................................... //

var imgGroupCount; // = 5;
var imgGroupArraySize; // = imgGroupCount;
var imgGroupBoxCount; // = 20;
var imgGroupImageArraySize = imgGroupBoxCount + 1;

// Image Object Array
// ...................................... //
var menuImage; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);

// SectionBlock Current Image and Position
// ...................................... //
var oObjNextTop;
var oObjNextLeft;

// Current Image Position Offset
// ...................................... //
var oObjNextOffsetTop;
var oObjNextOffsetLeft;

// SectionBlock Appearance
// ...................................... //
// var menuImageBorderWidth; // = 6;

// SectionBlock Group and Item Image Array Initialization
// ...................................... //

// Current Image and Position
// ...................................... //
// Current Image Index By Group
var imgCnByGroup; // = new Array(imgGroupArraySize);
// Maximum # of Images By Group
var imgMaxByGroup; // = new Array(imgGroupArraySize);
// Maximum # of Images Per Cascading Row By Group
var oObjectRowMax; // = new Array(imgGroupArraySize);
// Image Display (Visible) Locked Array
var menuImageLocked; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
//
// First Image
// First Image Offset By Group, By Top, Left
var menuImageOffsetFirstAll; // = new Array(imgGroupArraySize); // By Top, Left (2)

// Image Position
// ...................................... //
// Position of Parent Image (Parent of First only stored at this time)
var menuImagePositionLeft; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImagePositionTop; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImagePositionWidth; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImagePositionHeight; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);

// Animation Timer by Group by Image
// Not currently in use
var menuImageTimerCn; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);

// Image Postioning Offsets - Large
// ...................................... //
var menuImageOffsetLeftLarge; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImageOffsetTopLarge; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);

// Image Postioning Offsets - Small
// ...................................... //
// These are layout postion patterns to be applied
var menuImageOffsetLeftAll; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImageOffsetTopAll; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);

// Add Second Dimention (imgGroupImageArraySize)
// ...................................... //
// for (oObjGroupIndex = 0; oObjGroupIndex < imgGroupArraySize + 1; oObjGroupIndex++) {
    //
    // ...................................... //
    // First Image Offset By Group, By Top, Left
    // menuImageOffsetFirstAll[oObjGroupIndex]; // = new Array(2); // By Top, Left (2)
    //
    // ...................................... //
    // Image Object Array
    // menuImage[oObjGroupIndex]; // = new Array(imgGroupImageArraySize);
    // Image Display (Visible) Locked Array
    // menuImageLocked[oObjGroupIndex]; // = new Array(imgGroupImageArraySize);
    // Image Position
    // Position of Parent Image (Parent of First only stored at this time)
    // menuImagePositionLeft[oObjGroupIndex]; // = new Array(imgGroupImageArraySize);
    // menuImagePositionTop[oObjGroupIndex]; // = new Array(imgGroupImageArraySize);
    // menuImagePositionWidth[oObjGroupIndex]; // = new Array(imgGroupImageArraySize);
    // menuImagePositionHeight[oObjGroupIndex]; // = new Array(imgGroupImageArraySize);
    // Animation Timer by Group by Image
    // menuImageTimerCn[oObjGroupIndex]; // = new Array(imgGroupImageArraySize);
    // Small and Large Images
    // for (imgGroupImageIndex; // = 0; imgGroupImageIndex < imgGroupImageArraySize + 1; imgGroupImageIndex++) {
        // Image Display (Visible) Locked Array
        // menuImageLocked[oObjGroupIndex][imgGroupImageIndex]; // = new Array(2);
        // Image Position
        // Position of Parent Image (Parent of First only stored at this time)
        // menuImagePositionLeft[oObjGroupIndex][imgGroupImageIndex]; // = new Array(2);
        // menuImagePositionTop[oObjGroupIndex][imgGroupImageIndex]; // = new Array(2);
        // menuImagePositionWidth[oObjGroupIndex][imgGroupImageIndex]; // = new Array(2);
        // menuImagePositionHeight[oObjGroupIndex][imgGroupImageIndex]; // = new Array(2);
        // Animation Timer by Group by Image
        // menuImageTimerCn[oObjGroupIndex][imgGroupImageIndex]; // = new Array(2);
    // }
    // ...................................... //
    // Image Postioning Offsets
    // These are layout postion patterns to be applied
    // menuImageOffsetLeftAll[oObjGroupIndex]; // = new Array(imgGroupImageArraySize);
    // menuImageOffsetTopAll[oObjGroupIndex]; // = new Array(imgGroupImageArraySize);
    //
// }
oObjGroupIndex; // = 1;


// SectionBlock Heading Image Group
// ...................................... //
var headingGroupPointer; // = 6;
var headingGroupMax; // = 1;
var headingGroupCnStart; // = 6;
var headingGroupCnEnd; // = 6;
var headingGroupCnCurr; // = 6;
var imgMaxByGroup;[headingGroupCnCurr]; // = imgGroupBoxCount;


// SectionBlock Menu Groups and Items - Variables - Values
// ...................................... //
// ...................................... //
// set the number of groups and the images per group
// Menu Current Image Object By Group
var imgGroupMax; // = 4;
var imgGroupCnStart; // = 1;
var imgGroupCnEnd; // = 4;

// SectionBlock Animated Independent (content) Images
// ...................................... //
// Image Test - Stock Images and Scrollable
// set the following to the number of images
// then add the correct number of img objects
var imgUsedCn; // = 5;
var imgCn; // = 0;
var imgMax; // = 10;
var menuImageCn; // = 0;
// Name
var imageNameNew; // = new String();
// Image Focus
var imgFocus; // = 0;
var imgFocusOld; // = 0;
// Image Selection variables
var imgSelect; // = 'img1';
// document.parentWindow.imgSelect='img1';

// Image Layout Adjustables
var boxFormWidth; // = 75;
var boxTextLineHeight; // = 30;
var imgHeight; // = 90;

// Animation Timing
var intervalBase; // = 900;
var intervalSet; // = 0;
var intervalName; // = new String;

// Animation and Mouse
var imgAniToggle; // = new Array;
var imgMouseHover; // = new Array;


// SectionBlock Element Movement
// ...................................... //
// ...................................... //
// Timing
// var elementMoveDuration;
// var elMoveStepMin;
// var elMoveStepMax;
// var elementMoveInterval;
// var elementMoveDelay;

// Movement Patterns:
// Method used to move animated objects
// from origin to destination
var elementMoveMethodDirect; // = 1;
var elementMoveMethodSlideDown; // = 2;
var elementMoveMethodSlideSide; // = 3;
var elementMoveMethod; // = 0;
var elementMoveMethodPrev; // = 0;

// Steps / Iterations
var elMoveStep; // = 0;
var elMoveStepsPerSecond; // = 0;
var elMoveBusy; // = false;

// Origin and Destination
var elLeftOrig; // = 0;
var elTopOrig; // = 0;
var elLeftDest; // = 0;
var elTopDest; // = 0;
//
var elIsRoot; // = false;

// Movement Tracking
var moveDistance; // = 0;
var moveDistanceLeft; // = 0;
var moveDistanceTop; // = 0;
//
var moveDistancePerSec; // = 0;
var moveDistancePerSecLeft; // = 0;
var moveDistancePerSecTop; // = 0;
//
var moveDistancePerStep; // = 0;
var moveDistancePerStepLeft; // = 0;
var moveDistancePerStepTop; // = 0;
//
var moveOffset; // = 0;
var moveOffsetLeft; // = 0;
var moveOffsetTop; // = 0;
//
var moveOffsetMin; // = 1;
var moveOffsetMax; // = 25;


// SectionBlock Timers
// ...................................... //
// ...................................... //
// Timers by Group or Item
// var timerMethodItem; // = 1;// one timer per Menu Group Image
// var timerMethodGroup; // = 2; // one timer per Menu Group
// var timerMethod; // = timerMethodItem;
//
// Timer Control:
var timerDuration;
var timerInterval;
var timerStepMin;
var timerStepMax;
var timerDelay;

// Timer Types
// ...................................... //
var timerType; // = new String();
var timerTypeMove; // = 'Move';
var timerTypeTransition; // = 'Transition';
//
// Id
var timerId; // = new String();
var timerIdCurr; // = new String();
var timerIdPrev; // = new String();
var timerRootId; // = 'Group';

// Functions
// ...................................... //
var timerFunction; // = null;
var timerGroupFunction; // = null;

// Function Calls
var timerFunctionFilterItem;
var timerFunctionFilterGroup;
var timerFunctionMoveItem;
var timerFunctionMoveGroup;
//
var TimerStepDoItem;
var TimerItemDoStepFilter;
var TimerGroupDoStepFilter;
var TimerItemDoStepMove;
var TimerGroupDoStepMove;
//
// var timerFunction; // = TimerStepDoItem;
// var timerFunctionFilterItem; // = TimerItemDoStepFilter;
// var timerFunctionFilterGroup; // = TimerGroupDoStepFilter;
// var timerFunctionMoveItem; // = TimerItemDoStepMove;
// var timerFunctionMoveGroup; // = TimerGroupDoStepMove;

// Duration / Temporal
// var timerDuration; // = elementMoveDuration;
// var timerInterval; // = elementMoveInterval;
// var timerDelay; // = elementMoveDelay;

// Steps / Iterations
var timerStep; // = 0;
var timerStepsPerSecond; // = 0;

// Timer Object & Indexes
var timerGroupIndex; // = 0;
var timerGroupIndexMax; // = imgGroupMax;
var timerIndex; // = 0;
var timerIdIndex; // = 0;
//
// var timerMethodItem; // = 1;
// var timerMethodGroup; // = 2;
// var timerMethod; // = timerMethodGroup;
//
var timerObj; // = new Array(timerGroupIndexMax);
var timerGroupIndex; // = 0; timerGroupIndex < timerGroupIndexMax + 1; timerGroupIndex++) {
    // timerObj[timerGroupIndex]; // = new Array(imgMaxByGroup[timerGroupIndex]); // Menu Image Items
// }
//
// State Tests
var elIsDisplayed; // = 1;
var elIsNotDisplayed; // = 0;
//
// Completion Status
var timerDateStart; // = new Date();
var timerDateCurr; // = new Date();
var timerDateElps; // = 0;
var timerCompletion; // = 0;
var timerTen; // = 0; // 10% increments
var timerTimeCompletion; // = 0;
var timerStepCompletion; // = 0;
//
// Java Interval Timer
var timerBusy; // = false;
var timerStarted; // = 0;
var vTimerID;
var vTimerStart;
var vTimerStop;

// SectionBlock Filter Management
// ...................................... //

// Animation Transition Control:
// var filterDuration;
// var filterStepMin;
// var filterStepMax;
// var filterInterval;
// var filterDelay;

// Filter Pointers (to function library)
var filterGroupIndex = 0;
var filterGroupIndexMax = imgGroupMax;
var filterIndex = 0;
var filterIdIndex = 0;
//
var filterObj = new Array(30);
//
var filterStep = 0;
var filterStepsPerSecond = 0;
var filterBusy = false;
//
var filterIndexPassed = 1;

// Notes:
// ...................................... //
// Id - short name... i.e. Blinds
// Object
// timerBusy
// Key
// Command
// Ms Id
// MS Index
// DoApply
// DoStop
// DoPlay
// DoEnable

// Play Animation method for image
// ...................................... //
//
// var filterMethodPlay = 1;
// var filterMethodVisible = 2;
// var filterMethod = filterMethodPlay;

// Filter Play
// ...................................... //
// performs one cycle of animation
// It is structured by Platform Type
// to apply browser solutions.
// This in turn could be structured
// to implement specific players+versions.

// filter Slide Style Toggle
// ...................................... //
// Declare an array and index counter to access  slideStyles.
var arrSlideStyles = new Array(3);
arrSlideStyles = ['HIDE', 'PUSH', 'SWAP'];
var filterSlideStyleIndexCount = 0;

// filter SetRotation function
// ...................................... //
//oObj input requires that a matrix filter be applied.
//deg input defines the requested angle of rotation.
var deg2radians = Math.PI * 2 / 360;
// FilterSpin
var filterMatrixCounterDegreeCurrent = 40;
// FilterCompletion
filterCompletionIsZero = 0;
// StyleBackground
var filterStyleBackgroundToggle = 0;

// Animation Instance Variables
// ...................................... //
var filterBands = 10;
//
var filterDirectionDown = new String('down');
var filterDirectionUp = new String('up');
var filterDirectionLeft = new String('left');
var filterDirectionRight = new String('right');
//
var filterDirection = filterDirectionDown;
//
var filterDirectionDegrees = 310;
//
var filterEnabled = true;

// Filter Test
// ...................................... //
var filterFirst = true;
var filterRandom = new String();
var filterArguments = new String();
//
var filterCommand = new String();
// filterOnChangeStorage
var oldFilter = null;
//
var filterTarget = null;
var filterTargetIndex = 0;
var filterTargetGroupIndex = 0
//
var filterKey = new String();
var filterKeyPrefix = new String('progid:');
var filterKeyPrefix2 = new String('filter:progid:');
//
var filterDataCommand = 1;
var filterDataStepValue = 2;
var filterDataRequested = filterDataCommand;
//
// var filterDelay = elementMoveDelay;
// var filterStepMax = elMoveStepMax;
// var filterDuration = elementMoveDuration;
// var filterInterval = elementMoveInterval;
//
// ...................................... //
var realFlagOff = false;
var realFlagOn = true;
//
var filterPlayFirst = true;
var filterPlayAll = 0;
var filterPlayIndex = 1;
//
var HideImage = false;
var HideImageLarge = false;
//
var filterStartIndex = 1;
var filterEndIndex = 18;
//
var filterRangeLow = 1;
var filterRangeHigh = 18;
var filterRealFlag = false;
//
var newFilter = null;
//
var filterTagName = new String();
//
// ...................................... //
var filterMotionIn = new String('in');
var filterMotionOut = new String('out');
var filterMotion = filterMotionIn;
//
var filterOrientationVertical = new String('vertical');
var filterOrientationHorizontal = new String('horizontal');
var filterOrientation = filterOrientationVertical;
//
var filterMotionDirectionLeftDown = new String('leftdown');
var filterMotionDirectionLeftUp = new String('leftup');
var filterMotionDirectionRightDown = new String('rightdown');
var filterMotionDirectionRightUp = new String('rightup');
//
var filterMotionDirectionForward = new String('forward');
var filterMotionDirectionReverse = new String('reverse');
//
var filterMotionDirection = filterMotionDirectionRightDown;
//
var filterMotionDirectionSourceAngle = 0;
//
var filterGridSizeX = 25;
var filterGridSizeY = 25;
//
var filterSquaresX = 25;
var filterSquaresY = 25;
//
var filterMaxSquare = 25; // pixels
//
var filterStretchStyle = 'PUSH'; // PUSH, HIDE, SPIN
//
var filterSpokes = 20;
//
var filterWipeStyleHorzLeft = 0; // Horz Left to Right
var filterWipeStyleVertTop = 1;
var filterWipeStyle = filterWipeStyleHorzLeft;
//
var filterPixelRadius = 3;
var filterSizingMethod = 'auto expand';
var filterStrength = 25;
var filterTransition = 6;


// Filter Selection Management
// ...................................... //
// ...................................... //
// Filter Category Ranges
// First Set - Movement Effects
var filterIndexDynamicLow = 1;
var filterIndexDynamicHigh = 17;
var filterIndexDynamicMax = 17;
// Second Set - General Effects
var filterIndexMatrixLow = 1;
var filterIndexMatrixHigh = 1;
var filterIndexMatrixMax = 4;
// Third Set - Stationary Object Effects
var filterIndexStaticLow = 1;
var filterIndexStaticHigh = 1;
var filterIndexStaticMax = 1;

// Filter Enumeration (Type Name to Index)
// ...................................... //

// Filter Types
var filterClassMatrix = 3;
//
var filterClassSingle = 1;
var filterClassPaired = 2;
var filterClassCardinality = filterClassPaired;
//
var filterClassStatic = 1;
var filterClassDynamic = 2;
var filterClassFixity = filterClassDynamic;

// Movement Effects
//
// Matrix Effects
var filterTypeMatrix = 1;
var filterTypeFlip = 2; // Matrix
var filterTypeRotate = 3; // Matrix
var filterTypeSpin = 4;
var filterClassMatrixMax = 4;

// filterClassSingle
// 		filterClassStatic
var filterTypeBlur = 1;
var filterTypeEmboss = 2;
var filterTypeShadow = 3;
var filterTypeWave = 4;
var filterTypeUnknown = 5;
var filterTypeInset = 6;
var filterClassSingleStaticMax = 6;

// 		filterClassDynamic
var filterType1 = 1;
var filterTypeIris = 2;
var filterTypePixelate = 3;
var filterTypeRandomDissolve = 4;
var filterTypeSpiral = 5;
var filterTypeStretch = 6;
var filterTypeStrips = 7;
var filterTypeWheel = 8;
var filterTypeMotionBlur = 9;
var filterTypeBlinds = 10;
var filterTypeBarn = 11;
var filterTypeCheckerBoard = 12;
var filterTypeGradientWipe = 13;
var filterTypeRadialWipe = 14;
var filterTypeRandomBars = 15;
var filterTypeZigZag = 16;
var filterTypeUnknown1 = 17;
var filterClassSingleDynamicMax = 17;
//
// filterClassPaired
// 		filterClassStatic
var filterTypeFade = 1;
var filterClassPairedStaticMax = 1;
// 		filterClassDynamic
var filterClassPairedDynamicMax = 0;

// Section GLOBAL / COMMON
// ...................................... //
// SectionBlock Filter Primary Command  function (s)
// ...................................... //
filterMatrixCounterDegreeCurrent = 0;

// SectionBlock Filter Primary Command  function (s)
// ...................................... //
// Filter Enable
// Enable Filter prior to Play
var filterValid = false;
var filterIndexCn = 0;
var filterSelected = new Array(5);

// // Sub-Section Timer Management function (s)
// ...................................... //

// // SectionBlock Timers Primary Commands function (s)
// // ...................................... //
// // Initialize Variables
// // Functions
// TimerFunctionSet();
// // Intervals and Duration
// TimerDurationSet();

// Section Body Content Images Html Build function (s)
// ...................................... //
// Html Variables
var imgHtml = new String();
// var BodyImageContainer; // = document.documentElement['BodyImageContainer'];
// .getElementById('BodyImageContainer');
//

// Build (inner) HTML for Menu Images
// MenuImagesHtmlBuild();
// ...................................... //
// Recalculate Screen Display
// Layout Block, Callout and Document (BodyMainCenter) Width
// ...................................... //
// This variable is the multiplier that will reflect font-size;
// Using a 1em font is the default (1em = 1.0 EmRation)
// refered to as medium size on most browsers.
// The layoutWidth(s) have to scale up proportionally
// with text size when adjusting the callouts.
// A larger font size will disturb the floating by
// pushing down the content that wont fit beside the
// callout.
var layoutEmRation; // = 1.0;
//
var layoutMenuDocWidthWide; // = 900;
var layoutParaWidthMax; // = 500;
//
var layoutBlockCol4Min; // = 1600; // todo
var layoutBlockCol3Min; // = 1000;
var layoutBlockCol2Min; // = 500;
var layoutBlockCol1Min; // = 'float';
//
var layoutBlockWidthBig; // = '22%'; // 4 cols
var layoutBlockWidthWide; // = '31%';
var layoutBlockWidthStandard; // = '47%';
var layoutBlockWidthNarrow; // = '98%';
//
var calloutLayoutBlockWidth;
//
var calloutLayoutBlockWidthPxBig; // = 800;
var calloutLayoutBlockWidthPxWide; // = 600;
var calloutLayoutBlockWidthPxStandard; // = 350;
var calloutLayoutBlockWidthPxNarrow; // = 150;
//
var calloutLayoutBlockWidthBig; // = '20%';
var calloutLayoutBlockWidthWide; // = '33%';
var calloutLayoutBlockWidthStandard; // = '45%';
var calloutLayoutBlockWidthNarrow; // = '82%';

// Document Window
// ..................................................................................... _//
// Layout Height Get
var heightBase = 0;
var heightOffset = 0;
var heightScroll = 0;
var heightClient = 0;
var heightNode = 0;
var heightRects = 0;
var clientRectsIndex = 0;

// ..................................................................................... _//
script_state = "Mdm Websit Declarations loaded.";
if (debugLoadIsOn) {
    script_state = "MdmDeclarations completed. debugLoadIsOn is " + debugLoadIsOn + ", see top of script.";
    debugger;
}
// ..................................................................................... _//
// Error Message Display
////////////////////////////////////////////////
function ErrorOccuredDepreciated(eventCurr, MessageElementPassed, MessageElementSourcePassed, MessagePassed, errorSeverityPassed, errorDisplayTagPassed, errorDoAlert) {
    if (errorSeverityPassed == errorFatal) {
        // display alert
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed == errrorSevere) {
        // display alert
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed == errorWarn) {
        // dipslay in HTML Warnging Message Area
    } else if (errorSeverityPassed == errorDidNotOccur) {
        // dipslay in HTML Message Area
    } else {
        // dipslay in HTML Message Area
    }
}