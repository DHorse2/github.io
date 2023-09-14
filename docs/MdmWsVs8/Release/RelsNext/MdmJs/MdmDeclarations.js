// Section Pre Document Load Script
// ...................................... //
// Move these:
// (none)
// ...................................... //
// Do Not Move these:
// ..................................................................................... _//
// Section Framework Parameters
// ..................................................................................... _//
// ...................................... //
// SectionBlock Columns
// ...................................... //
var columnMax; // = 3;
var elBodyMainLeftVisible; // = true;
var elBodyMainRightVisible; // = true;
var layoutUseAbsolute; // = false;
// ...................................... //
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
// ...................................... //
// SectionBlock Image Handling
// ...................................... //
//
// fnBrowserGetVs();
// ...................................... //
// Type of Image Group Page Generation
var imgLoadEventTest; // = false; // controls clearing of elBodyMenuImageContainer for testing
var imgLoadUseDOM; // = true; // Add Elements to DOM
var imgLoadUseInner; // = false; // Use innerHTML for content
var imgLoadUseEventHandler; // = true; // Single Event Listener (dispatcher)
//
// ...................................... //
// Mouse Hover activation of image display
var eventMouseOverEnabled; // = false;
//
// ..................................................................................... _//
// ...................................... //
// Page Loading Optimization
// Java Initilization Functions:
var javaLoadDelay; // = true;
var javaLoadFirst; // = true;
// Body (Content) Images:
var bodyImageLoadDelay; // = false;
var bodyImageLoadFirst; // = true;
// Menu Thumbnail Images:
var menuImageLoadDelay; // = false;
var menuImageLoadFirst; // = true;
// Testing / Debug State Window
var debugStateLoadDelay; // = false;
var debugStateLoadFirst; // = true;
// ..................................................................................... _//
// Section GLOBAL / COMMON Variables
// ..................................................................................... _//
// SectionBlock STANDARD Variables
// ..................................................................................... _//
// Temporary
var bTemp = false;
var iTemp = 0;
var sTemp = '';
//
// Box Size or Box Rectangle Pointers for arrays
var indexTop = 0;
var indexLeft = 1;
var indexRight = 2;
var indexWidth = 2;
var indexBottom = 3;
var indexHeight = 3;
//
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
// todo
//
// ...................................... //
// SectionBlock Human readable arguments and comparisons
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
//
// Log usage
// Example of naming for corresponding parameters
// (this is not an actual global parameter)
// var UseLog = DoNotUseLog;
// ie UseName (argument / parameter), DoUseName (passed value), DoNotUseName (passed value)...
var DoUseLog = true;
var DoNotUseLog = false;
//
// Find Iteration Options
var elementFindDoSet = 1
var elementFindDoReturn = 2;
//
// ...................................... //
// SectionBlock HTML write variables
// ...................................... //
//
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
//
// ..................................................................................... _//
// Section Console for Error, Event and State
// ..................................................................................... _//
//
// ...................................... //
// SectionBlock Console
// ...................................... //
//
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
//
// ...................................... //
// SectionBlock Error Message Display
// ...................................... //
//
// var errorUseDebugOnError = true;
//
var errorLogFatal = new String;
var errorMessageSevere = new String;
var errorMessageWarn = new String;
var errorMessageComment = new String;
var errorMessageAllLog = new String;
//
// var errorDidNotOccur = 0;
// var errorComment = 5;
// var errorWarn = 10;
// var errorSevere = 20;
// var errorFatal = 30;
// var errorSeverity = errorDidNotOccur;
//
var errorElementDidNotOccur = 0;
var errorElementComment = 5;
var errorElementWarn = 10;
var errorElementSevere = 20;
var errorElementFatal = 30;
var errorElementSeverity = errorDidNotOccur;
//
var errorSeverityHighest = errorDidNotOccur;
//
// errorDebugLevel = errorSevere;
//
var windowErrorCn = 0;
//
var eventCurr;
var errorEventCurr;
var errorEventPrev;
//
var errorDoDisplayTag; // = true;
var errorDoNotDisplayTag; // = false;
var errorDoAlert; // = true;
var errorDoNotAlert; // = false;
//
// ..................................................................................... _//
// SectionBlock Events (Mouse, load, error)
// ..................................................................................... _//
var LastId = new String();
var LastTochedId = new String();
//
var eventParentName = new String();
//
var eventEventType;
var eventEventObject;
//
var errorElement;
var errorElementSource;
//
// ...................................... //
// SectionBlock Menu Mouse Events
// ...................................... //
var eventCurr;
var eventObject;
var eventCurrId = '';
var eventType = '';
//
var eventLast;
var eventLastObject;
var eventLastId = '';
var eventLastRootId = '';
//
var eventCurrRootObj;
// ..................................................................................... _//
// Section Menu Image (Standard) Objects
// ..................................................................................... _//
// Storage Location for Group and Menu Item / Image
var oObjGroupIndex = 1;
var oObjRootIndex = 0;
//
var indexGroup = 0; // location of Group / Roots in arrays
//
// Menu Image Objects
var oObj = document.createElement('div');
var oObjIndex = 1;
var oObjImage = document.createElement('img');
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
//
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
var elementWidthDefault = 0; // = iImageSize + (menuImageBorderWidth * 2);
var elementHeightDefault = 0; // = (iImageSize * oObjImageSizeRatio) + (menuImageBorderWidth * 2);
//
///////////////////////////////////////////////
// SectionBlock Layout Management Variables
///////////////////////////////////////////////
//
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
// window.onerror = function() { fnWindowError() };
var layoutResizeCn = 0;
var layoutResizeDelay = 0;
// window.onresize = function() { fnWindowResize(); }

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
var elBodyMenuLayout1Height = 0;
var elBodyMainCenterHeight = 0;
var elBodyMenuLayout2Height = 0;
//
// ...................................... //
// Adjustments:
var layoutWidthMargin = 60;
var layoutHeightMargin = 50;
//
var layoutBodyHeightHorzMax = 0;
var layoutBodyHeightVertMax = 0;
//
var layoutMenuHeightHorzMax = 0;
var layoutMenuHeightVertMax = 0;
//
var elMenuGroup1Height = 0;
var elMenuGroup2Height = 0;
var elMenuGroup3Height = 0;
var elMenuGroup4Height = 0;
var elMenuGroup5Height = 0;
var elMenuGroup6Height = 0;
//
var elMenuGroupTop1Height = 0;
var elMenuGroupTop2Height = 0;
var elMenuGroupTop3Height = 0;
var elMenuGroupTop4Height = 0;
var elMenuGroupTop5Height = 0;
var elMenuGroupTop6Height = 0;
//
// Client Window Size
var layoutWidthPrev = 0;
var layoutHeightPrev = 0;
// Current Layout Strategy
var layoutIsWide = false;
var layoutIsStandard = true;
//
///////////////////////////////////////////////
// SectionBlock Layout Elements State
// ...................................... //
//
// Body Layout Objects First Flags:
var elBodyFirst = true;
//
var elBodyMainContainerFirst = true;
//
var elBodyBannerFirst = true;
var elBodyBannerTopFirst = true;
var elBodyBannerBottomFirst = true;
//
var elBodyMainCenterTopFirst = true;
var elBodyMainCenterTopLeftFirst = true;
var elBodyMainCenterTopRightFirst = true;
//
var elBodyMainCenterFirst = true;
//
var elBodyMainLeftFirst = true;
var elBodyMainRightFirst = true;
//
var elBodyMainLeftOrigFirst = true;
var elBodyMainRightOrigFirst = true;
//
var elBodyMainLeftCurrFirst = true;
var elBodyMainRightCurrFirst = true;
//
var elBodyMainLeftCopyFirst = true;
var elBodyMainRightCopyFirst = true;
//
var elBodyMainRightFarFirst = true;
//
var elColumnType1First = true;
//
// ...................................... //
// SectionBlock Body Layout Element Objects:
// ...................................... //
//
// Body Container
var elBody;
// Body Container
var elBodyMainContainer;
//
// ...................................... //
// Banner (Top Menu, Logo and Graphics
var elBodyBanner;
var elBodyBannerTop;
var elBodyBannerBottom;
//
// ...................................... //
// Body View Toggle, Console and Debug Message Areas
//
// Body Console and Message Area
var elBodyConsoleContainer;
var elBodyConsoleContainerLeft;
var elBodyConsoleContainerCenter;
//
// Page Content Boxes
var elBodyConsoleBox;
var elBodyConsoleErrorBox;
var elBodyConsoleErrorTextBox;
var elBodyConsoleEventBox;
var elBodyConsoleEventTextBox;
var elBodyConsoleStateBox;
var elBodyConsoleStateTextBox;
var elBodyConsoleTestBox;
var elBodyConsoleTestTextBox;
//
var fnBodyConsoleBoxButtons = false;
var fnBodyConsoleDebugButtons = false;
//
// ...................................... //
// View, Console and Debug Toggle Buttons
var elBodyViewToggleContainer;
var elBodyViewToggleContainerCenter;
var elBodyViewToggleContainerLeft;
//
var elBodyConsoleMouseOverToggle;
//
// Containers for Console Buttons
var elBodyConsoleBoxButtons;
var elBodyConsoleBoxToggles;
var elBodyConsoleLogToggles;
var elBodyConsoleAuxillaryToggles;
//
// Console Buttons
var elBodyConsoleToggle;
//
var elBodyConsoleErrorToggle;
var elBodyConsoleEventToggle;
var elBodyConsoleStateToggle;
var elBodyConsoleTestToggle;
var elBodyConsoleClearToggle;
//
// Containers for Debug Buttons
var elBodyConsoleDebugButtons;
var elBodyConsoleDebugToggles;
var elBodyConsoleDebugMainToggles;
var elBodyConsoleDebugTypesToggles;
//
// Debug Buttons
var elBodyConsoleDebugToggle;
//
var elBodyConsoleDebugMoveToggle;
var elBodyConsoleDebugTransitionToggle;
var elBodyConsoleDebugDetailToggle;
var elBodyConsoleDebugAllToggle;
var elBodyConsoleDebugOnErrorToggle;
var elBodyConsoleDebugEventsToggle;
//
// ...................................... //
// Body Center Area
var elBodyMainCenter;
//
var elBodyMainCenterTop;
var elBodyMainCenterTopLeft;
var elBodyMainCenterTopRight;
//
var BodyMainCenterTopClass = '';
//
var elTitleTopLeft;
//
var elBodyMainCenterTopColBreak;
//
var elBodyMainCenterCenter;
//
var elBodyMainCenterBottom;
//
// ...................................... //
// Body Left Area
// var elBodyMainLeftVisible = true;
var elBodyMainLeft;
var elBodyMainLeftCopy;
var elBodyMainLeftCurr; // Current
var elBodyMainLeftOrig; // Original
var elBodyMainLeftOuter;
var elBodyMainLeftInner;
var elBodyMenuLayout1;
var elMenuContainerLeft1;
var elMenuGroup1;
var elMenuGroupTop1;
// var elMenuGroup1Save;
var elMenuContainerLeft2;
var elMenuGroup2;
var elMenuGroupTop2;
// var elMenuGroup2Save;
var elMenuContainerLeft3;
var elMenuGroup3;
var elMenuGroupTop3;
// var elMenuGroup3Save;
//
// ...................................... //
// Body Right Area
// var elBodyMainRightVisible = true;
var elBodyMainRight;
var elBodyMainRightCopy;
var elBodyMainRightCurr; // Current
var elBodyMainRightOrig; // Original
var elBodyMenuLayout2;
var elBodyMainRightOuter;
var elBodyMainRightInner;
var elMenuContainerRight1;
var elMenuGroup4;
// var elMenuGroup4Save;
var elMenuContainerRight2;
var elMenuGroup5;
// var elMenuGroup5Save;
var elMenuContainerRight3;
var elMenuGroup6;
// var elMenuGroup6Save;
//
// ...................................... //
// Body Far Right Area
var elBodyMainRightFar;
//
// ...................................... //
// Other...
//
var elMenuGroup1ColBreak;
var elMenuGroup2ColBreak;
var elMenuGroup3ColBreak;
var elMenuGroup4ColBreak;
var elMenuGroup5ColBreak;
var elMenuGroup6ColBreak;
//
var elBodyImageContainer;
//
var elBodyMenuImageContainer;
//
// ..................................................................................... _//
// SectionBlock Column
var elColumnType1; // = true;
var columnMax; // = 1;
//
// ..................................................................................... _//
// Section Menu Image Group and Item Variables
// ..................................................................................... _//
// SectionBlock Group
//
var imgGroupCount; // = 5;
var imgGroupArraySize; // = imgGroupCount;
var imgGroupBoxCount; // = 20;
var imgGroupImageArraySize = imgGroupBoxCount + 1;
// Image Object Array
var menuImage; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
//
// SectionBlock Current Image and Position
//
var oObjNextTop;
var oObjNextLeft;
// Current Image Position Offset
var oObjNextOffsetTop;
var oObjNextOffsetLeft;
//
// ...................................... //
// SectionBlock Appearance
// var menuImageBorderWidth; // = 6;
//
// ...................................... //
// SectionBlock Group and Item Image Array Initialization
// ...................................... //
//
// Current Image and Position
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
//
// Image Position
// Position of Parent Image (Parent of First only stored at this time)
var menuImagePositionLeft; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImagePositionTop; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImagePositionWidth; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImagePositionHeight; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
//
// Animation Timer by Group by Image
// Not currently in use
var menuImageTimerCn; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// ...................................... //
// Image Postioning Offsets - Large
var menuImageOffsetLeftLarge; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImageOffsetTopLarge; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
//
// ...................................... //
// Image Postioning Offsets - Small
// These are layout postion patterns to be applied
var menuImageOffsetLeftAll; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImageOffsetTopAll; // = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
//
// ...................................... //
// Add Second Dimention (imgGroupImageArraySize)
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
//
// ...................................... //
// SectionBlock Heading Image Group
// ...................................... //
var headingGroupPointer; // = 6;
var headingGroupMax; // = 1;
var headingGroupCnStart; // = 6;
var headingGroupCnEnd; // = 6;
var headingGroupCnCurr; // = 6;
var imgMaxByGroup;[headingGroupCnCurr]; // = imgGroupBoxCount;
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Menu Groups and Items - Variables - Values
// ...................................... //
//
// set the number of groups and the images per group
// Menu Current Image Object By Group
var imgGroupMax; // = 4;
var imgGroupCnStart; // = 1;
var imgGroupCnEnd; // = 4;
script_state = "MdmMain Custom Default settings used";
// imgCnByGroup[2]; // = 1;
// imgCnByGroup[3]; // = 1;
// imgCnByGroup[4]; // = 1;
// Menu Maximum Images per each Group
// imgMaxByGroup[1]; // = 8;
// imgMaxByGroup[2]; // = 4;
// imgMaxByGroup[3]; // = 3;
// imgMaxByGroup[4]; // = 8;
// Menu Maximum Images per each Row in a Group
// oObjectRowMax[1]; // = 4;
// oObjectRowMax[2]; // = 4;
// oObjectRowMax[3]; // = 4;
// oObjectRowMax[4]; // = 6;
//
// ...................................... //
// Offsets to adjust Large Image Top Left
// menuImageOffsetLeftLarge[indexGroup]; // = 75;
// menuImageOffsetTopLarge[indexGroup]; // = 75;
// menuImageOffsetLeftLarge[1]; // = 0;
// menuImageOffsetTopLarge[1]; // = 0;
// menuImageOffsetLeftLarge[2]; // = 0;
// menuImageOffsetTopLarge[2]; // = 0;
// menuImageOffsetLeftLarge[3]; // = 0;
// menuImageOffsetTopLarge[3]; // = 0;
// menuImageOffsetLeftLarge[4]; // = 0;
// menuImageOffsetTopLarge[4]; // = 0;
// ...................................... //
// Offsets to adjust First Small Image Top Left
// Default (All)
// menuImageOffsetFirstAll[indexGroup][indexTop]; // = 0; // Top
// menuImageOffsetFirstAll[indexGroup][indexLeft]; // = 35; // Left
// Menu Groups
// Menu Group 1
// menuImageOffsetFirstAll[1][indexTop]; // = 0; // Top
// menuImageOffsetFirstAll[1][indexLeft]; // = 15; // Left
// Menu Group 2
// menuImageOffsetFirstAll[2][indexTop]; // = 0; // Top
// menuImageOffsetFirstAll[2][indexLeft]; // = 15; // Left
// Menu Group 3
// menuImageOffsetFirstAll[3][indexTop]; // = 0; // Top
// menuImageOffsetFirstAll[3][indexLeft]; // = 15; // Left
// Menu Group 4
// menuImageOffsetFirstAll[4][indexTop]; // = 0; // Top
// menuImageOffsetFirstAll[4][indexLeft]; // = -15; // Left
// ...................................... //
// Offsets for cascading diaply
// Default (All) Groups
// menuImageOffsetTopAll[indexGroup][indexGroup]; // = 0;
// menuImageOffsetLeftAll[indexGroup][indexGroup]; // = 0;
// Menu Group 1
// Default (All)
// menuImageOffsetTopAll[1][indexGroup]; // = 25;
// menuImageOffsetLeftAll[1][indexGroup]; // = 25;
// Boxes
// menuImageOffsetTopAll[1][1]; // = 0; menuImageOffsetLeftAll[1][1]; // = 0;
// menuImageOffsetTopAll[1][2]; // = 0; menuImageOffsetLeftAll[1][2]; // = 0;
// menuImageOffsetTopAll[1][3]; // = 0; menuImageOffsetLeftAll[1][3]; // = 0;
// menuImageOffsetTopAll[1][4]; // = 0; menuImageOffsetLeftAll[1][4]; // = 0;
// menuImageOffsetTopAll[1][5]; // = 0; menuImageOffsetLeftAll[1][5]; // = 0;
// menuImageOffsetTopAll[1][6]; // = 0; menuImageOffsetLeftAll[1][6]; // = 0;
// menuImageOffsetTopAll[1][7]; // = 0; menuImageOffsetLeftAll[1][7]; // = 0;
// menuImageOffsetTopAll[1][8]; // = 0; menuImageOffsetLeftAll[1][8]; // = 0;
// Menu Group 2
// Default (All)
// menuImageOffsetTopAll[2][indexGroup]; // = -60;
// menuImageOffsetLeftAll[2][indexGroup]; // = 50;
// Boxes
// menuImageOffsetTopAll[2][1]; // = 0; menuImageOffsetLeftAll[2][1]; // = 0;
// menuImageOffsetTopAll[2][2]; // = 0; menuImageOffsetLeftAll[2][2]; // = 0;
// menuImageOffsetTopAll[2][3]; // = 0; menuImageOffsetLeftAll[2][3]; // = 0;
// menuImageOffsetTopAll[2][4]; // = 0; menuImageOffsetLeftAll[2][4]; // = 0;
// Menu Group 3
// Default (All)
// menuImageOffsetTopAll[3][indexGroup]; // = -20;
// menuImageOffsetLeftAll[3][indexGroup]; // = 75;
// Boxes
// menuImageOffsetTopAll[3][1]; // = 0; menuImageOffsetLeftAll[3][1]; // = 0;
// menuImageOffsetTopAll[3][2]; // = 0; menuImageOffsetLeftAll[3][2]; // = 0;
// menuImageOffsetTopAll[3][3]; // = 0; menuImageOffsetLeftAll[3][3]; // = 0;
// Menu Group 4
// Default (All)
// menuImageOffsetTopAll[4][indexGroup]; // = 75;
// menuImageOffsetLeftAll[4][indexGroup]; // = -15;
// Boxes
// menuImageOffsetTopAll[4][1]; // = 0; menuImageOffsetLeftAll[4][1]; // = 0;
// menuImageOffsetTopAll[4][2]; // = 0; menuImageOffsetLeftAll[4][2]; // = 0;
// menuImageOffsetTopAll[4][3]; // = 0; menuImageOffsetLeftAll[4][3]; // = 0;
// menuImageOffsetTopAll[4][4]; // = 0; menuImageOffsetLeftAll[4][4]; // = 0;
// menuImageOffsetTopAll[4][5]; // = 0; menuImageOffsetLeftAll[4][5]; // = 0;
// menuImageOffsetTopAll[4][6]; // = 0; menuImageOffsetLeftAll[4][6]; // = 0;
// menuImageOffsetTopAll[4][7]; // = -250; menuImageOffsetLeftAll[4][7]; // = 0;
// menuImageOffsetTopAll[4][8]; // = 0; menuImageOffsetLeftAll[4][8]; // = 0;
// ...................................... //
// Menu and Image Missing Objects
// var img1MenuLine;
var img8MenuLine;
var img12MenuLine;
var MdmNetAppFrame0MenuLine;
var img8;
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Animation Management
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Animated Independent (content) Images
// ...................................... //
//
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
var frmWidth; // = 75;
var txtLineHeight; // = 30;
var imgHeight; // = 90;
// Animation Timing
var intervalBase; // = 900;
var intervalSet; // = 0;
var intervalName; // = new String;
// Animation and Mouse
var imgAniToggle; // = new Array;
var imgMouseHover; // = new Array;
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Element Movement
// ...................................... //
//
// Timing
// var elementMoveDuration;
// var elementMoveStepMin;
// var elementMoveStepMax;
// var elementMoveInterval;
// var elementMoveDelay;
//
// Movement Patterns:
// Method used to move animated objects
// from origin to destination
var elementMoveMethodDirect; // = 1;
var elementMoveMethodSlideDown; // = 2;
var elementMoveMethodSlideSide; // = 3;
var elementMoveMethod; // = 0;
var elementMoveMethodPrev; // = 0;
//
// Steps / Iterations
var elementMoveStep; // = 0;
var elementMoveStepsPerSecond; // = 0;
var elementMoveBusy; // = false;
//
// Origin and Destination
var elementLeftOrig; // = 0;
var elementTopOrig; // = 0;
var elementLeftDest; // = 0;
var elementTopDest; // = 0;
//
var elementIsRoot; // = false;
//
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
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Timers
// ...................................... //
//
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
//
// Timer Types
var timerType; // = new String();
var timerTypeMove; // = 'Move';
var timerTypeTransition; // = 'Transition';
//
// Id
var timerId; // = new String();
var timerIdCurr; // = new String();
var timerIdPrev; // = new String();
var timerRootId; // = 'Group';
//
// Functions
var timerFunction; // = null;
var timerGroupFunction; // = null;
//
// Function Calls
var timerFunctionFilterItem;
var timerFunctionFilterGroup;
var timerFunctionMoveItem;
var timerFunctionMoveGroup;
//
var fnTimerStepDoItem;
var fnTimerItemDoStepFilter;
var fnTimerGroupDoStepFilter;
var fnTimerItemDoStepMove;
var fnTimerGroupDoStepMove;
//
// var timerFunction; // = fnTimerStepDoItem;
// var timerFunctionFilterItem; // = fnTimerItemDoStepFilter;
// var timerFunctionFilterGroup; // = fnTimerGroupDoStepFilter;
// var timerFunctionMoveItem; // = fnTimerItemDoStepMove;
// var timerFunctionMoveGroup; // = fnTimerGroupDoStepMove;
//
// Duration / Temporal
// var timerDuration; // = elementMoveDuration;
// var timerInterval; // = elementMoveInterval;
// var timerDelay; // = elementMoveDelay;
//
// Steps / Iterations
var timerStep; // = 0;
var timerStepsPerSecond; // = 0;
//
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
var elementIsDisplayed; // = 1;
var elementIsNotDisplayed; // = 0;
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
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Filter Management
// ...................................... //
//
// ...................................... //
//
// Animation Transition Control:
// var filterDuration;
// var filterStepMin;
// var filterStepMax;
// var filterInterval;
// var filterDelay;
//
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
//
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
//
// ..................................................................................... _//
// ...................................... //
// Play Animation method for image
//
// var filterMethodPlay = 1;
// var filterMethodVisible = 2;
// var filterMethod = filterMethodPlay;
//
// Filter Play
// performs one cycle of animation
// It is structured by Platform Type
// to apply browser solutions.
// This in turn could be structured
// to implement specific players+versions.
// ..................................................................................... _//
// filter Slide Style Toggle
// ...................................... //
// Declare an array and index counter to access  slideStyles.
var arrSlideStyles = new Array(3);
arrSlideStyles = ['HIDE', 'PUSH', 'SWAP'];
var filterSlideStyleIndexCount = 0;
// ..................................................................................... _//
// filter fnSetRotation function
// ...................................... //
//oObj input requires that a matrix filter be applied.
//deg input defines the requested angle of rotation.
var deg2radians = Math.PI * 2 / 360;
// ..................................................................................... _//
// fnFilterSpin
// ...................................... //
var filterMatrixCounterDegreeCurrent = 40;
// ..................................................................................... _//
// fnFilterCompletion
// ...................................... //
filterCompletionIsZero = 0;
// ..................................................................................... _//
// StyleBackground
// ...................................... //
var filterStyleBackgroundToggle = 0;
//
// ...................................... //
// Animation Instance Variables
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
//
// ...................................... //
// Filter Test
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
// var filterStepMax = elementMoveStepMax;
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
//
//
// ...................................... //
// Filter Selection Management
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
//
// ...................................... //
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
//
// Movement Effects
//
// Matrix Effects
var filterTypeMatrix = 1;
var filterTypeFlip = 2; // Matrix
var filterTypeRotate = 3; // Matrix
var filterTypeSpin = 4;
var filterClassMatrixMax = 4;
//
// filterClassSingle
// 		filterClassStatic
var filterTypeBlur = 1;
var filterTypeEmboss = 2;
var filterTypeShadow = 3;
var filterTypeWave = 4;
var filterTypeUnknown = 5;
var filterTypeInset = 6;
var filterClassSingleStaticMax = 6;
//
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
//
// ..................................................................................... _//
// Section GLOBAL / COMMON
// ..................................................................................... _//
//

//
// ...................................... //
// ..................................................................................... _//
// SectionBlock Filter Primary Command  function (s)
// ..................................................................................... _//
filterMatrixCounterDegreeCurrent = 0;
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
// // ..................................................................................... _//
// // Sub-Section Timer Management function (s)
// // ..................................................................................... _//
// // SectionBlock Timers Primary Commands function (s)
// // ...................................... //
// // Initialize Variables
// // Functions
// fnTimerFunctionSet();
// // Intervals and Duration
// fnTimerDurationSet();
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
var script_state = "MdmDeclarations completed";
