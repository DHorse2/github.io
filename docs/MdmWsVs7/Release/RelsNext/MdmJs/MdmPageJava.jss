////////////////////////////////////////////////
var moveIsOn = true;
var filterIsOn = true;
var filterResizeIsOn = true;
var timerUseTime = true;
//
elementMoveDuration = 2; // 2 / 90
elementMoveStepMax = 100; // 100 / 200
elementMoveInterval = 5; // 5 / 10
elementMoveDelay = 0;
//
////////////////////////////////////////////////
var debugIsOn = false;
// var debugIsOn = false;
// var debugDoAlert = true;
var debugDoAlert = false;
// note: currently you must search 
//   and decomment code debug-instance-off
// debug-instance-off fnMenuImgShow;
// 
////////////////////////////////////////////////
var browserIsIE = true;
// var browserIsIE = false;
// var browserIsFF = true;
var browserIsFF = false;
//
var javaLoadDelay = true;
var javaLoadFirst = true;
//
var bodyImageLoadDelay = false;
var bodyImageLoadFirst = true;
//
var menuImageLoadDelay = false;
var menuImageLoadFirst = true;
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// GLOBAL / COMMON
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// STANDARD FUNCTIONS 
// Global
// 		 fnDocumentLoadInit
// Elements
// 		fnElementPosGet
// Layout
//		fnLayoutSelectByIndex
// Menu Images
// 		fnMenuImagesHtmlBuild
// Mouse
// 		fnMouseOverImg
//		fnMouseOutImg
//		fnMouseClickImg
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// MENUS
// Menu Image Show / Hide
// Menu Show
// 		fnMenuImgShowRange
//		fnMenuImgShowIndex
//		fnMenuImgShowStack
//		fnMenuImgToggle
//		fnMenuImgShow
// Menu Hide
// 		fnMenuImgToggleRange
//		fnMenuImgHide
// Menu Object Selection
// 		fnMenuObjectSetAll
//		fnMenuObjectTextSet
//		fnMenuObjectNameSet
//		fnMenuIndexSet
//		fnMenuIndexSetByName
////////////////////////////////////////////////
// LAYOUT MANAGEMENT
// 		fnLayoutCheck
//		fnLayoutRefresh
//		fnLayoutNext
////////////////////////////////////////////////
// STANDARD FUNCTIONS
// Math Functions
// 		fnMathNumberRandomGetByRange
// Font Size Control
//		fnFontSizeIncrease
//		fnFontSizeDecrease
////////////////////////////////////////////////
// OBJECT ANIMATION 
// Filter (Transition, Transform) Get by Index or Name 
// 		fnFilterGetByIndex
////////////////////////////////////////////////
// FILTER MANAGEMENT
// General
// 		fnFilterResetThenAnimate
// Filter Store / Restore
// 		fnFilterStore
//		fnFilterRestore
// Animate Object
// 		fnFilterAnimate
// Filter Specific Functions
// 		StyleBackground
//				fnStyleBackgroundToggle
// 		Matrix
//			  	fnFilterSpin
//				fnFilterSetRotation
//				fnFilterResize
//		fnSlideStyleToggle
//				fnSlideStyleToggle
//		Other
//			 	OtherFunction...
// Filter Get / Set
// 		fnFilterGetByIndex
//		fnFilterGetRandom
// Filter Timing Get By Index
// 		fnFilterTimingGetByIndex
//		fFilterTimingGetRandom
////////////////////////////////////////////////
// DOCUMENT EVENTS
// 		window.onload
//				
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Body Layout Objects:
// GLOBAL LAYOUT
////////////////////////////////////////////////
//
// BodyArea
// BodyMainContainer
//
// BodyBanner  (Hide / Show, copy to Bottom)
// BodyBannerBottom  (Hide / Show, copy to Bottom)
//
// BodyMainLeft
// BodyMainLeftSave
    // BodyMainLeftOuter
    // BodyMainLeftInner
        // BodyMenuLayout1
            // MenuLeft1
            // MenuLeft1Save
            // MenuContainerLeft1 (Hide / Show, copy to TopLeft)
            // MenuLeft2
            // MenuLeft2Save
            // MenuContainerLeft2
            // MenuLeft3
            // MenuLeft3Save
            // MenuContainerLeft3
//
// BodyMainCenter
    // BodyMainCenterColumns
    //
    // BodyMainCenterTop (Hide / Show)
        // BodyMainCenterTopLeft
        // BodyMainCenterTopRight
    	// BodyBanner  (Hide / Show, copy to Bottom)
    //
    // BodyMainCenterCenter
    //
    // BodyMainCenterBottom  (Hide / Show)
        // BodyBannerBottom  (Hide / Show, copy to Bottom)
//
// BodyMainRight
// BodyMainRightSave
// BodyMainRightOuter
// BodyMainRightInner
    // BodyMenuLayout2
        // MenuRight1
        // MenuContainerRight1 (Hide / Show, copy to TopRight)
        // MenuRight2
        // MenuContainerRight2
        // MenuRight3
        // MenuContainerRight3
//
// BodyMainRightFar
//
// BodyImageContainer
// BodyMenuImageContainer
//
// ColumnType1 (Standard Paragraph Box for Wide / Standard Screen Size)
// ------------------------------------------------------------------------------------- _//
///////////////////////////////////////////////
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
var layoutStandard = 1;
var layoutReadingMode = 2;
var layoutWindowed = 3;
var layoutReadingModeLeft = 4;
//
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
////////////////////////////////////////////////
// Layout User Interface Toggles:
// Animation Toggles:
// 			  Toggle Step 1 of 2 Step Animations
// 			  Toggle 2 Step Animations
// 			  Toggle Random Animations
// 			  Toggle All Animations
// Layout Toggles:
// 		  	  Full Screen
// 		  	  Font Sizing Ui
//			  Callout Display
// Analyzed Layout Area Links:
// 		  	  Blocks
//			  		Paragraph
//			  		Paragraph
//					   ...
// 		  	  Screen Area (Collapsable)
//			  		 Body Area
//			  		 Body Area
//			  		    ...
// Data Entry Field
//
// Console Messages
//
// Instant Messaging Area
//			   
//
///////////////////////////////////////////////
// Optoin Toggles:
// 	 		 Hidden Banner
//			 Hidden Menu1
//			 Hidden Menu2
//			 Hidden Menu 1 & 2
//			 Hidden All
//
///////////////////////////////////////////////
//
///////////////////////////////////////////////
// Body Layout Selection
// STANDARD FUNCTIONS
// GLOBAL / COMMON
////////////////////////////////////////////////
//
////////////////////////////////////////////////
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
////////////////////////////////////////////////
// Body Layout Objects:
/*--
		createElement()	createElement(eTag)	IHTMLElement
--*/
// Body Container
var elBody;
// Body Container
var elBodyMainContainer; // X97
//
// Banner (Top Menu, Logo and Graphics
var elBodyBanner; // X97
var elBodyBannerTop; // X97
var elBodyBannerBottom; // X97
//
// Body Center Area
var elBodyMainCenter; // X97
//
var elBodyMainCenterTop; // X97
var elBodyMainCenterTopLeft; // X97
var elBodyMainCenterTopRight; // X97
//
var elBodyMainCenterTopColBreak; // X97
//
var elBodyMainCenterCenter; // X97
//
var elBodyMainCenterBottom; // X97
//
// Body Left Area
var elBodyMainLeft; // X97
var elBodyMainLeftCopy; // X97
var elBodyMainLeftCurr; // X97 // Current
var elBodyMainLeftOrig; // X97 // Original
var elBodyMainLeftOuter; // X97
var elBodyMainLeftInner; // X97
var elBodyMenuLayout1; // X97
var elMenuContainerLeft1; // X97
var elMenuLeft1; // X97
// var elMenuLeft1Save; // X97
var elMenuContainerLeft2; // X97
var elMenuLeft2; // X97
// var elMenuLeft2Save; // X97
var elMenuContainerLeft3; // X97
var elMenuLeft3; // X97
// var elMenuLeft3Save; // X97
//
// Body Right Area
var elBodyMainRight; // X97
var elBodyMainRightCopy; // X97
var elBodyMainRightCurr; // X97 // Current
var elBodyMainRightOrig; // X97 // Original
var elBodyMenuLayout2; // X97
var elBodyMainRightOuter; // X97
var elBodyMainRightInner; // X97
var elMenuContainerRight1; // X97
var elMenuRight1; // X97
// var elMenuRight1Save; // X97
var elMenuContainerRight2; // X97
var elMenuRight2; // X97
// var elMenuRight2Save; // X97
var elMenuContainerRight3; // X97
var elMenuRight3; // X97
// var elMenuRight3Save; // X97
//
// Body Far Right Area
var elBodyMainRightFar; // X97
//
// Other...
// elBodyMainCenterTopColBreak
var elBodyMainCenterTopColBreak; // X97
//
var elMenuLeft1ColBreak;
var elMenuLeft2ColBreak;
var elMenuLeft3ColBreak;
var elMenuRight1ColBreak;
var elMenuRight2ColBreak;
var elMenuRight3ColBreak;
//
var elBodyImageContainer;
//
var elBodyMenuImageContainer;
//
var elColumnType1 = true;
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Animated Images
////////////////////////////////////////////////
//
////////////////////////////////////////////////
// Image State
// set the following to the number of images
// then add the correct number of img objects
var imgUsedCn = 5;
var imgCn = 0;
var imgMax=10;
var menuImageCn = 0;
// Name
var imageNameNew = "";
// Image Focus
var imgFocus = 0;
var imgFocusOld = 0;
// Image Selection variables
var imgSelect="img1";
// document.parentWindow.imgSelect="img1";
// Image Layout Adjustables
var frmWidth=75;
var txtLineHeight=30;
var imgHeight=90;
// Animation Timing
var intervalBase = 900;
var intervalSet = 0;
var intervalName = "";
// Animation and Mouse
var imgAniToggle=new Array;
var imgMouseHover=new Array;
// 
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// Animation Management
////////////////////////////////////////////////
//
////////////////////////////////////////////////
// Menu Images
////////////////////////////////////////////////
    var elementLeftOrig = 0;
    var elementTopOrig = 0;
    var elementLeftDest = 0;
    var elementTopDest = 0;
    //
    var elementMoveDuration = 3;
    var elementMoveStepMax = 50;
    var elementMoveInterval = 10;
    var elementMoveDelay = 0;
    //
    var filterBusy = false;
    var timerBusy = false;
//
////////////////////////////////////////////////
// Timers
////////////////////////////////////////////////
     var timerId = "";
     var timerIdCurr = "";
     var timerIdPrev = "";
     //
     var timerObj = new Array();
     //
     ///////////////////////////////////////////////
     var timerFunction = "fnTimerMoveStepDo";
     //
     var vTimerID;
     var vTimerStart;
     var vTimerStop;
     //
     ///////////////////////////////////////////////
     var timerStarted = false;
     //
     var timerDuration = elementMoveDuration;
     var timerInterval = elementMoveInterval;
     var timerStepMax = elementMoveStepMax;
     var timerDelay = elementMoveDelay;
     //
     var timerStep = 0;
     var timerStepMin = 10;
     var timerStepMax = elementMoveStepMax;
     //
     ///////////////////////////////////////////////
     var timerStepsPerSecond = 10;
     //
//
////////////////////////////////////////////////
// Movement Tracking
////////////////////////////////////////////////
     var moveDistance = 0;
     var moveDistanceLeft = 0;      
     var moveDistanceTop = 0;
     //      
     var moveDistancePerSec = 0;
     var moveDistancePerSecLeft = 0;      
     var moveDistancePerSecTop = 0;
     //      
     var moveOffset = 0;
     var moveOffsetLeft = 0;
     var moveOffsetTop = 0;
     //
     var moveOffsetMin = 1;
     var moveOffsetMax = 25;
     //
////////////////////////////////////////////////
// Filter Management
////////////////////////////////////////////////
    // Filter State
    var filterFirst = true;
    var filterRandom = "";
    var filterAurguments = "";
    //
    var filterCommand = "";
    // filterOnChangeStorage
    var oldFilter = null;
    //
    var filterTarget = null;
    var filterTargetIndex = 0;
    var filterTargetGroupIndex = 0
    //
    var filterKey = "";
    var filterKeyPrefix = 'progid:'; 
    var filterKeyPrefix2 = 'filter:progid:'; 
    //
    var filterDelay = elementMoveDelay;
    var filterStepMax = elementMoveStepMax;
    var filterDuration = elementMoveDuration;
    var filterInterval = elementMoveInterval;
    //
    var filterMotion = 'out';
    var filterOrientation = 'vertical';
    //
    var filterMotionDirection='rightdown';
    //
    var filterGridSizeX=25;
    var filterGridSizeY=25;
    //
    var filterRangeLow = 1;
    var filterRangeHigh = 19;
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
    var filterTagName = "";
//
////////////////////////////////////////////////
// Filter Properties
////////////////////////////////////////////////
//
// Filter Pointers (to function library)
    var filterIndexPassed = 1;
    var filterIndex = 0;
    //
    var filterBands = 10;
    var filterDirection = "down";
    var filterDirectionDegrees=310;
    var filterDuration = 1;
    var filterEnabled = true;
    var filterMotion = "out";
    var filterMotionDirection
    var filterOrientation = "vertical";
    var filterPixelRadius = 3;
    var filterSizingMethod = "auto expand";
    var filterStrength = 13;
    var filterTransition = 6;
    //
// Transition
/*--
0 Box in.  
1 Box out.  
2 Circle in.  
3 Circle out.  
4 Wipe up.  
5 Wipe down.  
6 Wipe right.  
7 Wipe left.  
8 Vertical blinds.  
9 Horizontal blinds.  
10 Checkerboard across.  
11 Checkerboard down.  
12 Random dissolve. 
13 Split vertical in. 
14 Split vertical out.  
15 Split horizontal in.  
16 Split horizontal out.  
17 Strips left down.  
18 Strips left up.  
19 Strips right down.  
20 Strips right up.  
21 Random bars horizontal.  
22 Random bars vertical.  
23 Random transition from above possible values. 
--*/
//
////////////////////////////////////////////////
// Filter Selection Management
////////////////////////////////////////////////
// Filter Category Ranges
// First Set - Movement Effects
var filterIndexMovementLow = 3;
var filterIndexMovementHigh = 12;
var filterIndexMovementMax = 19;
// Second Set - Image / Object Show Effects
// filterObjectFinal Effect
var filterIndexImgShowLow = 20;
var filterIndexImgShowHigh = 29;
var filterIndexImgShowMax = 39;
// Third Set - Stationary Object Effects
var filterIndexEffectLow = 40;
var filterIndexEffectHigh = 41;
var filterIndexEffectMax = 59; 
//
////////////////////////////////////////////////
// Filter Enumeration (Type Name to Index)
////////////////////////////////////////////////
// Common Effects
var filterTypeMatrix = 2;
// Movement Effects
var filterTypeSpin = 3;
var filterTypeFade = 4;
var filterTypeIris = 5;
var filterTypePixelate = 6;
var filterTypeRandomDissolve = 7;
var filterTypeSpiral = 8;
var filterTypeStretch = 9;
var filterTypeStrips = 10;
var filterTypeWheel = 11;
var filterTypeFlip = 12; // Matrix?
var filterTypeRotate = 13; // Matrix?
// Final Effects
var filterTypeBlinds = 22;
var filterTypeBarn = 23;
var filterTypeCheckerBoard = 24;
var filterTypeGradientWipe = 25;
var filterTypeInset = 26;
var filterTypeRadialWipe = 27;
var filterTypeRandomBars = 28;
var filterTypeZigZag = 29;
// Static Effects
var filterTypeBlur = 40;
var filterTypeMotionBlur = 41;
//
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Global Objects
// GLOBAL / COMMON
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// 
// ------------------------------------------------------------------------------------- _//
// MENUS
// ------------------------------------------------------------------------------------- _//
// GLOBAL / COMMON
// Menu Image Objects
// 
// Menu Image Pointers
var oObjIndex = 1;
var oObjGroupIndex = 1;
var oObjParentIndex = 1;
var oObjRootIndex = 0;
// Menu Image Objects
var oObj;
var oObjImage;
var oObjParent;
var oObjLarge;
var oObjImageLarge;
var oObjText = "";
// Menu Image Size
var oObjImageSizeSmall = 150;
var oObjImageSizeLarge = 600;
var oObjImageSizeRatio = 0.7;
var oObjImageSize = 0;
// Menu Image Position
var oObjLeft;
var oObjTop;
var oObjWidth;
var oObjHeight;
// Menu Image Z Index
var imgZindex = 120;
//
// ------------------------------------------------------------------------------------- _//
// STANDARD VARIABLES																	 	
////////////////////////////////////////////////
// Temporary
var bTemp=false;
var iTemp=0;
var sTemp="";
//
// Box Size or Box Rectangle Pointers 
var indexTop = 0;
var indexLeft = 1;
var indexRight = 2;
var indexWidth = 2;
var indexBottom = 3;
var indexHeight = 3;
// 
// Storage Location for Group
var indexGroup = 0;
//
// ------------------------------------------------------------------------------------- _//
// BODY IMAGES
// ------------------------------------------------------------------------------------- _//
// GLOBAL / COMMON
////////////////////////////////////////////////
//
////////////////////////////////////////////////
// Image range variables
var oObjIndexStart = 0;
var oObjIndexEnd = 0;
//
////////////////////////////////////////////////
// Image Group
////////////////////////////////////////////////
var imgGroupCount = 5;
var imgGroupArraySize = imgGroupCount;
var imgGroupBoxCount = 20
var imgGroupImageArraySize = imgGroupBoxCount + 1;
// Image Object Array
var menuImage = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// Current Image Position
var oObjNextTop;
var oObjNextLeft;
// Current Image Position Offset
var oObjNextOffsetTop;
var oObjNextOffsetLeft;
// Current Image Index By Group
var imgCnByGroup = new Array(imgGroupArraySize);
// Maximum # of Images By Group
var imgMaxByGroup = new Array(imgGroupArraySize);
// Maximum # of Images Per Cascading Row By Group
var oObjectRowMax = new Array(imgGroupArraySize);
// Image Display (Visible) Locked Array
var menuImageLocked = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
//
// First Image
// First Image Offset By Group, By Top, Left
var menuImageOffsetFirstAll = new Array(imgGroupArraySize); // By Top, Left (2)
// First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
var menuImageRootPosition = new Array(imgGroupArraySize); // By Top, Left, Right/Width, Bottom/Height
// Image Position
// Position of Parent Image (Parent of First only stored at this time)
var menuImagePositionLeft = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImagePositionTop = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImagePositionWidth = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImagePositionHeight = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// Animation Timer by Group by Image
var menuImageTimerCn = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
////////////////////////////////////////////////
// Image Postioning Offsets
// These are layout postion patterns to be applied 
var menuImageOffsetLeftAll = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
var menuImageOffsetTopAll = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
//
////////////////////////////////////////////////
// Add Second Dimention (imgGroupImageArraySize)
for (oObjGroupIndex = 0; oObjGroupIndex <= imgGroupArraySize; oObjGroupIndex++) {
    //
    ////////////////////////////////////////////////
    // First Image Offset By Group, By Top, Left
    menuImageOffsetFirstAll[oObjGroupIndex] = new Array(2); // By Top, Left (2)
    // First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
    menuImageRootPosition[oObjGroupIndex] = new Array(4); // By Top, Left, Right/Width, Bottom/Height
    //
    ////////////////////////////////////////////////
    // Image Object Array
    menuImage[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    // Image Display (Visible) Locked Array
    menuImageLocked[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    // Image Position
    // Position of Parent Image (Parent of First only stored at this time)
    menuImagePositionLeft[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    menuImagePositionTop[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    menuImagePositionWidth[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    menuImagePositionHeight[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    // Animation Timer by Group by Image
    menuImageTimerCn[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    ////////////////////////////////////////////////
    // Image Postioning Offsets
    // These are layout postion patterns to be applied 
    menuImageOffsetLeftAll[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    menuImageOffsetTopAll[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    //
}
oObjGroupIndex = 1;
//
////////////////////////////////////////////////
// Heading Image Group
////////////////////////////////////////////////
var headingGroupPointer = 6;
var headingGroupMax = 1;
var headingGroupCnStart = 6;
var headingGroupCnEnd = 6;
var headingGroupCnCurr = 6;
imgMaxByGroup[headingGroupCnCurr] = imgGroupBoxCount;
//
// ------------------------------------------------------------------------------------- _//
// MENUS										
// ------------------------------------------------------------------------------------- _//
// Menu Groups
////////////////////////////////////////////////
//
////////////////////////////////////////////////
// Menu Groups
// set the number of groups and the images per group
// Menu Current Image Object By Group
var imgGroupMax = 4;
var imgGroupCnStart = 1;
var imgGroupCnEnd = 4;
imgCnByGroup[1] = 1;
imgCnByGroup[2] = 1;
imgCnByGroup[3] = 1;
imgCnByGroup[4] = 1;
// Menu Maximum Images per each Group
imgMaxByGroup[1] = 7;
imgMaxByGroup[2] = 4;
imgMaxByGroup[3] = 3;
imgMaxByGroup[4] = 8;
// Menu Maximum Images per each Group
oObjectRowMax[1] = 4;
oObjectRowMax[2] = 9;
oObjectRowMax[3] = 9;
oObjectRowMax[4] = 6;
// First Image Offset By Group, Top, Left, Right, Bottom
// menuImageRootPosition[1] = 0;
// menuImageRootPosition[2] = 0;
// menuImageRootPosition[3] = 0;
// menuImageRootPosition[4] = 0;
////////////////////////////////////////////////
// Offsets to adjust First Image Top Left
// Default (All)
menuImageOffsetFirstAll[indexGroup] [indexTop] = 0; // Top
menuImageOffsetFirstAll[indexGroup] [indexLeft] = 35; // Left
// Menu Groups
// Menu Group 1
menuImageOffsetFirstAll[1] [indexTop] = 0; // Top
menuImageOffsetFirstAll[1] [indexLeft] = 15; // Left
// Menu Group 2
menuImageOffsetFirstAll[2] [indexTop] = 0; // Top
menuImageOffsetFirstAll[2] [indexLeft] = 15; // Left
// Menu Group 3
menuImageOffsetFirstAll[3] [indexTop] = 0; // Top
menuImageOffsetFirstAll[3] [indexLeft] = 15; // Left
// Menu Group 4
menuImageOffsetFirstAll[4] [indexTop] = 0; // Top
menuImageOffsetFirstAll[4] [indexLeft] = -15; // Left
////////////////////////////////////////////////
// Offsets for cascading diaply
// Default (All) Groups
menuImageOffsetTopAll[indexGroup] [indexGroup] = 25;
menuImageOffsetLeftAll[indexGroup] [indexGroup] = 25;
// Menu Group 1
// Default (All)
menuImageOffsetTopAll[1] [indexGroup] = 25;
menuImageOffsetLeftAll[1] [indexGroup] = 25;
// Boxes
menuImageOffsetTopAll[1] [1] = 0; menuImageOffsetLeftAll[ 1] [1] = 0;
menuImageOffsetTopAll[1] [2] = 0; menuImageOffsetLeftAll[ 1] [2] = 0;
menuImageOffsetTopAll[1] [3] = 0; menuImageOffsetLeftAll[ 1] [3] = 0;
menuImageOffsetTopAll[1] [4] = 0; menuImageOffsetLeftAll[ 1] [4] = 0;
menuImageOffsetTopAll[1] [5] = 0; menuImageOffsetLeftAll[ 1] [5] = 0;
menuImageOffsetTopAll[1] [6] = 0; menuImageOffsetLeftAll[ 1] [6] = 0;
menuImageOffsetTopAll[1] [7] = 0; menuImageOffsetLeftAll[ 1] [7] = 0;
// Menu Group 2
// Default (All)
menuImageOffsetTopAll[2] [indexGroup] = -60;
menuImageOffsetLeftAll[2] [indexGroup] = 50;
// Boxes
menuImageOffsetTopAll[2] [1] = 0; menuImageOffsetLeftAll[ 2] [1] = 0; 
menuImageOffsetTopAll[2] [2] = 0; menuImageOffsetLeftAll[ 2] [2] = 0;
menuImageOffsetTopAll[2] [3] = 0; menuImageOffsetLeftAll[ 2] [3] = 0;
menuImageOffsetTopAll[2] [4] = 0; menuImageOffsetLeftAll[ 2] [4] = 0;
// Menu Group 3
// Default (All)
menuImageOffsetTopAll[3] [indexGroup] = -20;
menuImageOffsetLeftAll[3] [indexGroup] = 75;
// Boxes
menuImageOffsetTopAll[3] [1] = 0; menuImageOffsetLeftAll[ 3] [1] = 0; 
menuImageOffsetTopAll[3] [2] = 0; menuImageOffsetLeftAll[ 3] [2] = 0;
menuImageOffsetTopAll[3] [3] = 0; menuImageOffsetLeftAll[ 3] [3] = 0;
// Menu Group 4
// Default (All)
menuImageOffsetTopAll[4] [indexGroup] = 75;
menuImageOffsetLeftAll[4] [indexGroup] = -15;
// Boxes
menuImageOffsetTopAll[4] [1] = 0; menuImageOffsetLeftAll[ 4] [1] = 0; 
menuImageOffsetTopAll[4] [2] = 0; menuImageOffsetLeftAll[ 4] [2] = 0;
menuImageOffsetTopAll[4] [3] = 0; menuImageOffsetLeftAll[ 4] [3] = 0;
menuImageOffsetTopAll[4] [4] = 0; menuImageOffsetLeftAll[ 4] [4] = 0;
menuImageOffsetTopAll[4] [5] = 0; menuImageOffsetLeftAll[ 4] [5] = 0;
menuImageOffsetTopAll[4] [6] = 0; menuImageOffsetLeftAll[ 4] [6] = 0;
menuImageOffsetTopAll[4] [7] = -250; menuImageOffsetLeftAll[ 4] [7] = 0;
menuImageOffsetTopAll[4] [8] = 0; menuImageOffsetLeftAll[ 4] [8] = 0;
////////////////////////////////////////////////
// Menu and Image Missing Objects
// var img1MenuLine;
var img8MenuLine;
var img12MenuLine;
var MdmNetAppFrame0MenuLine;
var img8;
//
// ------------------------------------------------------------------------------------- _//
// Functions:
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// STANDARD FUNCTIONS
// ------------------------------------------------------------------------------------- _//
// GLOBAL / COMMON
////////////////////////////////////////////////
//
////////////////////////////////////////////////
// Elements
// 		fnElementPosGet
// Layout
//		fnLayoutSelectByIndex
//		fnMouseClickImg
// Mouse
// 		fnMouseOverImg
//		fnMouseOutImg
//		fnMouseClickImg
//
////////////////////////////////////////////////
//
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// Object Animation 
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// fnFilterStore function 
////////////////////////////////////////////////
function fnFilterStore(oObjPassed, filterIndexPassed)
{
    // this can't be right
	// oldFilter = oObjPassed.onfilterchange;
	// oObjPassed.onfilterchange = null;
	oldFilter = oObjPassed.filters[0].item;
}
//
// ------------------------------------------------------------------------------------- _//
// fnFilterRestore
////////////////////////////////////////////////
function fnFilterRestore(oObjPassed, filterIndexPassed)
{
 	if (oldFilter != null) {
 	   // ???? oObjPassed.onfilterchange = oldFilter;
	   oObjPassed.filters[0].item = oldFilter; 
	}
}
//
////////////////////////////////////////////////
// filterSupportFunctions:
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// General (Common) functions & properties:
// fnFilter Management
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// fnFilterResetThenAnimate function 
function fnFilterResetThenAnimate(oObjPassed, filterIndexPassed)
{
    switch(filterIndexPassed) {
      // Non Groups
        case filterTypeMatrix:
    		 filterMatrixCounterDegreeCurrent = 40;
    		 fnFilterRestore(oObjPassed, filterIndexPassed); // s/b , filterIndexPassed
  			 break;
    	default: 
    		 oObjPassed.filters[0].enabled = true;
    		 // if (!filterFirst)  { fnFilterRestore(oObjPassed, filterIndexPassed); }
  			 break;
    }
	// filterObjectMovement Effect
	// fnFilterGetRandom(filterIndexMovementLow, filterIndexMovementHigh);
	filterIndexPassed = filterTypeFlip;
    fnFilterAnimate(oObjPassed, filterIndexPassed);
	//
	// filterObjectFinal Effect
	// fnFilterGetRandom(filterIndexImgShowLow, filterIndexImgShowHigh);
	filterIndexPassed = filterTypeCheckerBoard;
	fnFilterAnimate(oObjPassed, filterIndexPassed);
    filterFirst = false;
}
//
// ------------------------------------------------------------------------------------- _//
// Animate Object
////////////////////////////////////////////////
function fnFilterAnimate(oObjPassed, filterIndexPassed, flMultiplier)
{    
    switch(filterIndexPassed) {
        // Matrix
        case filterTypeMatrix:
    	   // Matrix
    	   fnFilterSpin(oObjPassed, filterIndexPassed);
  			 break;
    	// Default
    	default: 
    	  // Default
  			 break;
    }
}
//
// ------------------------------------------------------------------------------------- _//
// StyleBackground
////////////////////////////////////////////////
var filterStyleBackgroundToggle = 0;
//
function fnStyleBackgroundToggle(oObjPassed, filterIndexPassed) {
    if (filterStyleBackgroundToggle) {                                                        
        filterStyleBackgroundToggle = 0;
        oObjPassed.style.backgroundColor="gold"; 
	} else {
        filterStyleBackgroundToggle = 1;
        oObjPassed.style.backgroundColor="green";    
 	}  
    oObjPassed.filters[0].Apply();                   
    // oObjPassed.filters[0].Play();
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Matrix Control Functions
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// fnFilterSpin
////////////////////////////////////////////////
var filterMatrixCounterDegreeCurrent = 40;
//
function fnFilterSpin(oObjPassed, filterIndexPassed)
{
 	switch(filterIndexPassed) {
        // Non Groups
        case filterTypeMatrix:
            // The function chosen for flMultiple defines size changes in the animation.
        	filterMatrixCounterDegreeCurrent += 16;
            // The number of 360-degree rotations is three.
            fnFilterStore(oObjPassed, filterIndexPassed);
        	if (filterMatrixCounterDegreeCurrent>=360*1) { oObjPassed.onfilterchange = null; }
        	//
        	fnFilterSetRotation(oObjPassed, filterIndexPassed, filterMatrixCounterDegreeCurrent);
        	//
        	if (filterMatrixCounterDegreeCurrent <= 360) {
        	   var flMultiple = filterMatrixCounterDegreeCurrent/360; //* 720; */ 
        	   fnFilterResize(oObjPassed, flMultiple);
        	}
  			 break;
    	//
    	default:
    	// Type of animation triggered by filter change. 
        // The number of 360-degree rotations is three.
        fnFilterStore(oObjPassed, filterIndexPassed); // s/b , filterIndexPassed
    	// oObjPassed.onfilterchange = null;
    	// Type of animation triggered by Play command.
    	// Play the animation **
  			 break;
    }
	 // oObjPassed.filters[0].Play(3);
	 // oObjPassed.filters.item(0) = oObjPassed.style.filter;
	 oObjPassed.filters.item(0).Apply();
	 oObjPassed.filters.item(0).Play(1);

	 // oObjPassed.filters[0] = oObjPassed.style.filter;
	 // oObjPassed.filters[0].Apply();
	 // oObjPassed.filters[0].Play(3);
//
}
//
// ------------------------------------------------------------------------------------- _//
// fnSetRotation function
////////////////////////////////////////////////
//
//oObj input requires that a matrix filter be applied. 
//deg input defines the requested angle of rotation.
var deg2radians = Math.PI * 2 / 360;
function fnFilterSetRotation(oObjPassed, filterIndexPassed, deg)
{   
	 rad = deg * deg2radians ;
    costheta = Math.cos(rad);
    sintheta = Math.sin(rad);
	//
    oObjPassed.filters.item(0).M11 = costheta;
    oObjPassed.filters.item(0).M12 = -sintheta;
    oObjPassed.filters.item(0).M21 = sintheta; 
    oObjPassed.filters.item(0).M22 = costheta; 
}
//
// ------------------------------------------------------------------------------------- _//
// fnResize function 
////////////////////////////////////////////////
//
// oObj input requires that a matrix filter be applied. 
// flMultiplier input defines the amount by which the oObj is resized.
function fnFilterResize(oObjPassed, filterIndexPassed, flMultiplier)
{
    // oObj.filters["DXImageTransform.Microsoft.Matrix"]    
    switch(filterIndexPassed) {
      // Non Groups
        case filterTypeMatrix:
        if (flMultiplier < 0.05) { flMultiplier = 0.05; }
        // flMultiplier = 1 - flMultiplier;
        // oObjPassed.filters[0].SizingMethod = "auto expand";
    	oObjPassed.filters[0].M11 = flMultiplier;
        // oObjPassed.filters[0].M12 *= flMultiplier;
        // oObjPassed.filters[0].M21 *= flMultiplier;
        oObjPassed.filters[0].M22 = flMultiplier;
        /*--
    	oObjPassed.filters["DXImageTransform.Microsoft.Matrix"].M11 *= flMultiplier;
        oObjPassed.filters["DXImageTransform.Microsoft.Matrix"].M12 *= flMultiplier;
        oObjPassed.filters["DXImageTransform.Microsoft.Matrix"].M21 *= flMultiplier;
        oObjPassed.filters["DXImageTransform.Microsoft.Matrix"].M22 *= flMultiplier;
        --*/        
        /*--
    	oObjPassed.filters.item(0).M11 *= flMultiplier;
        oObjPassed.filters.item(0).M12 *= flMultiplier;
        oObjPassed.filters.item(0).M21 *= flMultiplier;
        oObjPassed.filters.item(0).M22 *= flMultiplier;
        --*/        
    	default: 
    	  // dumb
    }
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// SlideStyle:
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// fn Slide Style Toggle
////////////////////////////////////////////////
// Declare an array and index counter to access  slideStyles.
var arrSlideStyles = new Array(3);
arrSlideStyles = ['HIDE', 'PUSH', 'SWAP'];
var filterSlideStyleIndexCount = 0;
//
function fnSlideStyleToggle(oObjPassed, filterIndexPassed) {
    // Use the array index to update and display  the slideStyle used.
    var  iStyleIndex = filterSlideStyleIndexCount % 3 ;  // MOD function avoids resetting the counter.
    oObjPassed.filters[0].slideStyle = arrSlideStyles[filterSlideStyleIndexCount];
    oSpan.innerText = 'SlideStyle = "' + arrSlideStyles[filterSlideStyleIndexCount] + '"';
    
    oObjPassed.filters[0].Apply();                   
	// After setting Apply, changes to the oDiv object 
	//  are not displayed until Play is called.
    // oObjPassed.filters[0].Play();
    filterSlideStyleIndexCount += 1;
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Filter Commands
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// Filter Apply
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// Filter Play
////////////////////////////////////////////////
// Play Animation for this image
//
   var filterMethodPlay = 1;
   var filterMethodVisible = 2;
   var filterMethod = filterMethodPlay;
   //
// Filter Play 
// performs one cycle of animation
// It is structured by Platform Type
// to apply browser solutions.
// This in turn could be structured
// to implement specific players+versions.
////////////////////////////////////////////////
// 
function fnFilterPlay(filterPlayAll, HideImage, HideImageLarge, 
             startIndex, endIndex, 
             IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
             oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{

// // Each form below accesses the alpha filter of the object.
// oObjNextImage.filters.item(0).enabled = 1                                      // Numeric index
// oObjNextImage.filters.item("DXImageTransform.Microsoft.Alpha").enabled = 0     // Named index
    // Play Animation for this image
    // oObjNextImage.filters[filterKey].apply();
    // oObjNextImage.filters[0].apply();
    // oObjNextImage.filters.apply();
    // oObjNextImage.filters.item(0).apply();
    // oObjNextImage.style.filter[0].apply();
    if (filterMethod == filterMethodPlay) {
        if (filterResizeIsOn && filterIsOn) {
            oObjNext.filters[0].Duration = elementMoveDuration;
            // oObjNext.filters[0].Enabled = true;
            // oObjNext.filters[0].play(elementMoveDuration);
            oObjNext.filters[1].Duration = elementMoveDuration;
            oObjNext.filters[1].Enabled = true;
            oObjNext.filters[1].play(elementMoveDuration);
        } else {
            oObjNext.filters[0].Duration = elementMoveDuration;
            // oObjNext.filters[0].Enabled = true;
            // oObjNext.filters[0].play(elementMoveDuration);
        }
    }
    //
    // oObjNextImage.filters[0].play();
    // oObjNextImage.filters.play();
    // oObjNextImage.filters[filterKey].play();
    // oObjNextImage.filters.item(0).play();
    // oObjNextImage.style.filter[0].play();

    ////////////////////////////////////////////////
    // Visibility
    if (oObjNext.style.display != "block") {
        oObjNext.style.display="block";
        // oObjNextImage.style.display="block";
    }
    ////////////////////////////////////////////////
    //
    if (filterMethod == filterMethodVisible) {
        oObjNext.style.visibility = "hidden";
        oObjNext.style.visibility = "visible"; 
    }
}
//
// ------------------------------------------------------------------------------------- _//
// Filter Stop
////////////////////////////////////////////////
//
function fnFilterStop(filterPlayAll,
                    oObjNext,
                    timerIdPassed)
{
    if (filterMethod == filterMethodPlay) {
        if (filterResizeIsOn && filterIsOn) {
            // oObjNext.filters[0].stop();
            // oObjNext.filters[0].Enabled = false;
            // oObjNext.filters[1].stop();
            oObjNext.filters[1].Enabled = false;
        } else {
            // oObjNext.filters[0].stop();
            // oObjNext.filters[0].Enabled = false;
        }
    }
}
// ------------------------------------------------------------------------------------- _//
// Filter Pause
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// Filter Stop
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// Filter Rewind / Forward
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// Filter Get / Set
////////////////////////////////////////////////
//
//
// Get
//
// Set
//
// Get By:
// ------------------------------------------------------------------------------------- _//
// Filter (Transition, Transform) Get by Index or Name 
// Filter Get By Index
function fnFilterGetByIndex(filterIndexPassed)
{
    // get interger
    filterIndexPassed = ( filterIndexPassed - (filterIndexPassed % 1) );
    filterKey = "";
    filterKeyPrefix = 'progid:';
    filterAurguments = "";
    switch(filterIndexPassed) {
// ------------------------------------------------------------------------------------- _//
// Matrix
////////////////////////////////////////////////
        case 99999:
        // case 1: 
    	// case 2:
		    // case filterTypeMatrix:
        // Matrix
        // imgHtml += 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=auto expand, duration=1.5);" ';
        // filterIndexPassed = filterTypeMaxtrix;
        filterKey = 'DXImageTransform.Microsoft.Matrix';
        filterAurguments += '(';
        filterAurguments += 'sizingMethod=' + filterSizingMethod;
        filterAurguments += ', duration=' + filterDuration;
        filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );

    		 return ( filterKeyPrefix + filterKey + filterAurguments );
// ------------------------------------------------------------------------------------- _//
// Movement Friendly Effects
////////////////////////////////////////////////
//
        case 1: 
    	case 2:
		    case filterTypeMatrix:
// Range: 3 - 19
// Current Max: 11
		// Spin
		case 3:
		case filterTypeSpin:
            // needs Matrix handling
			    // filterAurguments += '
    		// return ( filterKeyPrefix + filterKey + filterAurguments );
		// Fade
		case 4:
		case filterTypeFade:
			 filterKey = 'DXImageTransform.Microsoft.Fade'; 
         filterAurguments += '(';
         filterAurguments += 'duration=' + filterDuration;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
		// Iris
		case 5:
		case filterTypeIris:
			 filterKey = 'DXImageTransform.Microsoft.Iris';
         filterAurguments += '(';
         filterAurguments += 'duration=' + filterDuration;
			 filterAurguments += ')';
			     return ( filterKeyPrefix + filterKey + filterAurguments );
		// Pixelate
		case 6:
		case filterTypePixelate:
			 // filterAurguments += '
			 filterKey = 'DXImageTransform.Microsoft.Pixelate';
         filterAurguments += '(';
         filterAurguments += 'duration=' + filterDuration;
			 filterAurguments += ')';
			     return ( filterKeyPrefix + filterKey + filterAurguments );
		// Random Dissolve
		case 7:
		case filterTypeRandomDissolve:
			 filterKey = 'DXImageTransform.Microsoft.RandomDissolve';
         filterAurguments += '(';
         filterAurguments += 'duration=' + filterDuration;
         filterAurguments += ' GridSizeX=' + filterGridSizeX;
         filterAurguments += ' GridSizeY=' + filterGridSizeY;
			 filterAurguments += ')';
			     return ( filterKeyPrefix + filterKey + filterAurguments );		// Spiral
		case 8:
		case filterTypeSpiral:
			 filterKey = 'DXImageTransform.Microsoft.Spiral';
         filterAurguments += '(';
         filterAurguments += 'duration=' + filterDuration;
         filterAurguments += ' GridSizeX=' + filterGridSizeX;
         filterAurguments += ' GridSizeY=' + filterGridSizeY;
			 filterAurguments += ')';
			     return ( filterKeyPrefix + filterKey + filterAurguments );
		// Stretch
		case 9:
		case filterTypeStretch:
         filterKey = 'DXImageTransform.Microsoft.Stretch';
         filterAurguments += '(';
			 filterAurguments += 'duration=' + filterDuration;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
		// Strips
		case 10:
		case filterTypeStrips:
         filterMotionDirection='rightdown';
         filterKey = 'DXImageTransform.Microsoft.Strips';
         filterAurguments += '(';
			 filterAurguments += 'duration=' + filterDuration;
         filterAurguments += 'motion=' + filterMotionDirection;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
    	// Wheel
		case 11:
		case filterTypeWheel:
   			 // imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(Duration=1.0000);" ';
             // filterAurguments += 'progid:DXImageTransform.Microsoft.Wheel(duration=3)';
         filterKey = 'DXImageTransform.Microsoft.Wheel';
         filterAurguments += '(';
			 filterAurguments += 'duration=' + filterDuration;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
		// Flip
		case 12:
		case filterTypeFlip:
		// This is a Matrix Calculation...
    //
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			 filterKey = 'DXImageTransform.Microsoft.Matrix'; 
         filterAurguments += '(';
         filterAurguments += 'duration=' + filterDuration;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
		// Rotate
		case 13:
		case filterTypeRotate:
		// This is a Matrix Calculation...
			 filterKey = 'DXImageTransform.Microsoft.Matrix'; 
         filterAurguments += '(';
         filterAurguments += 'duration=' + filterDuration;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );



// ------------------------------------------------------------------------------------- _//
// Final Display Friendly Effects
////////////////////////////////////////////////
//
// Range: 20 - 39
// Current Max: 29:
		case 20:
		case 21:
		// Blinds
		case 22:
		case filterTypeBlinds:
// imgHtml += 'progid:DXImageTransform.Microsoft.Blinds(Bands=10, Duration=2, Direction=down);" ';
// filterIndexPassed = filterTypeBlinds;
         filterKey = 'DXImageTransform.Microsoft.Blinds';
         filterAurguments += '(';
			 filterAurguments += 'Bands=' + filterBands;
			 filterAurguments += ', duration=' + filterDuration;
			 filterAurguments += ', direction=' + filterDirection;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
		// Barn
		case 23:
		case filterTypeBarn:
          filterKey = 'DXImageTransform.Microsoft.Barn';
          filterAurguments += '(';
          filterAurguments += 'duration=' + filterDuration;
          filterAurguments += ', motion=' + filterMotion;
          filterAurguments += ', orientation=' + filterVertical;
          filterAurguments += ')';
              return ( filterKeyPrefix + filterKey + filterAurguments );
		// CheckerBoard
		case 24:
		case filterTypeCheckerBoard:
// CheckerBoard
// filterTypeCheckerBoard
// imgHtml += 'progid:DXImageTransform.Microsoft.CheckerBoard(Duration=3, Direction=left);';
         filterKey = 'DXImageTransform.Microsoft.CheckerBoard';
         filterAurguments += '(';
			 filterAurguments += 'duration=' + filterDuration;
			 filterAurguments += ', direction=' + filterDirection;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
		// Gradient Wipe
		case 25:
		case filterTypeGradientWipe:
			 filterGradientsize = 0.5;
			 filterKey = 'DXImageTransform.Microsoft.gradientWipe';
         filterAurguments += '(';
         filterAurguments += 'duration=' + filterDuration;
			 filterAurguments += ', gradientsize=' + filterGradientsize;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
		// Inset
		case 26:
		case filterTypeInset:
		     filterKey = 'DXImageTransform.Microsoft.Inset';
         filterAurguments += '(';
         filterAurguments += 'duration=' + filterDuration;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
		// Radial Wipe
		case 27:
		case filterTypeRadialWipe:
			 // filterAurguments += '
    		 // return ( filterKeyPrefix + filterKey + filterAurguments );
		// Random Bars
		case 28:
		case filterTypeRandomBars:
			 // filterAurguments += '
    		 // return ( filterKeyPrefix + filterKey + filterAurguments );
		// ZigZag
		case 29:
		case filterTypeZigZag:
    		 // return ( filterKeyPrefix + filterKey + filterAurguments );
		//////////////////////////////////////////////////
		// End of Primary Animations
		//////////////////////////////////////////////////
		// Blur
		case 30:
		case filterTypeBlur:
			 // imgHtml += 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2) ';
             // filterAurguments += 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2)';
         filterKey = 'DXImageTransform.Microsoft.Blur';
         filterAurguments += '(';
			 filterAurguments += 'pixelradius=' + filterPixelRadius;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
		// MotionBlur
		case 31:
		case filterTypeMotionBlur:
			 // imgHtml += 'progid:DXImageTransform.Microsoft.MotionBlur(strength=13, direction=310) ';
            // filterAurguments += 'progid:DXImageTransform.Microsoft.MotionBlur(strength=13, direction=310)';
			 filterDirectionDegrees=310;
         filterKey = 'DXImageTransform.Microsoft.MotionBlur';
         filterAurguments += '(';
			 filterAurguments += 'strength=' + filterStrength;
			 filterAurguments += ', direction=' + filterDirectionDegrees;
			 filterAurguments += ')';
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
		// Default
    	default:
    		 return ( filterKeyPrefix + filterKey + filterAurguments );
            //
            //
    	//
    }

}
// filterAurguments += 'sizingMethod=auto expand';
// filterAurguments += 'duration=1.5';
// filterAurguments += ', direction=left';
// filterAurguments += ')';
//
// ------------------------------------------------------------------------------------- _//
// Filter Get By Tag
////////////////////////////////////////////////
function fnFilterGetByTagName(filterTagNamePassed)
{
    //
	filterTagName = "div";

    return null;
}
//
////////////////////////////////////////////////
// Filter Get Random
// ------------------------------------------------------------------------------------- _//
// Filter Get Random
////////////////////////////////////////////////
function fnFilterGetRandom(filterRangeLowPassed, filterRangeHighPassed)
{
 	filterRandom = "";
	if (filterRangeLowPassed < filterRangeLow) { filterRangeLowPassed = filterRangeLow; }
	if (filterRangeLowPassed > filterRangeHigh) { filterRangeLowPassed = filterRangeHigh; }
	if (filterRangeHighPassed < filterRangeLow) { filterRangeHighPassed = filterRangeHigh; }
	if (filterRangeHighPassed > filterRangeHigh) { filterRangeHighPassed = filterRangeLow; }
	if (filterRangeLowPassed > filterRangeHighPassed) { filterRangeLowPassed = filterRangeHighPassed; }
	//
 	filterIndex = fnMathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, realFlagOff);
	filterRandom = fnFilterGetByIndex(filterIndex);
	return filterRandom;
}

// ------------------------------------------------------------------------------------- _//
// Filter Timing Get By Index
////////////////////////////////////////////////
function fnFilterTimingGetByIndex()
{ 

  return;
}
//
// ------------------------------------------------------------------------------------- _//
// Filter Timing Get Random
////////////////////////////////////////////////
function fFilterTimingGetRandom()
{ 

  return;
} 
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// Menu Image Filter Play First
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// fnMenuImageFilterPlayFirst
////////////////////////////////////////////////
//
function fnMenuImageFilterPlayFirst(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
    filterPlayIndex = 1;
    HideImage = false; HideImageLarge = false;
    //
    fnMenuImageFilterPlay(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
        oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
//
// ------------------------------------------------------------------------------------- _//
// fnMenuImageFilterPlayNext
////////////////////////////////////////////////
function fnMenuImageFilterPlayNext(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
    filterPlayIndex = 1;
    HideImage = false; HideImageLarge = false;
    //
    fnMenuImageFilterPlay(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
        oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
//
// ------------------------------------------------------------------------------------- _//
// fnMenuImageFilterPlayAgain
////////////////////////////////////////////////
function fnMenuImageFilterPlayAgain(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
    filterPlayIndex = 1;
    HideImage = false; HideImageLarge = false;
    //
    fnMenuImageFilterPlay(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
        oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// fnMenuImageFilterPlay
function fnMenuImageFilterPlay(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
    filterPlayIndex = 1;
    HideImage = false; HideImageLarge = false;
    //
    if (oObjNext.style.display == "block") {
        return;
    }
    //
    timerId = oObjNext.id;
    if (!timerObj[timerId]) { 
        timerObj[timerId] = new Object();
        timerObj[timerId].oObj = oObjNext;
        timerObj[timerId].timerBusy = true;
    } else if (timerObj[timerId].timerBusy) { return; }
    //
    // elementMoveDuration = 2; // 2 / 90
    // elementMoveStepMax = 100; // 100 / 200
    // elementMoveInterval = 5; // 5 / 10
    // elementMoveDelay = 0;
    //
    if (moveIsOn) {
       timerDelay = elementMoveDelay;
       timerStepMax = elementMoveStepMax;
       timerDuration = elementMoveDuration;
       timerInterval = elementMoveInterval;
    }
    // Play Animation for this image
    if (filterIsOn) {
       filterDelay = elementMoveDelay;
       filterStepMax = elementMoveStepMax;
       filterDuration = elementMoveDuration;
       filterInterval = elementMoveInterval;
    }
    //
    filterCommand = "";
    if (filterIsOn || filterResizeIsOn) {
          //
          // FileterPlayRandom
          //          or
          // Select Random Animation
          var temp = 0;
          filterIndex = fnMathNumberRandomGetByRange(filterIndexMovementLow, filterIndexMovementHigh, filterRealFlag);
          // filterIndex = fnMathNumberRandomGetByRange(filterRangeLow, filterRangeHigh, filterRealFlag);
          // fnMathNumberRandomGetByRange(rangeLow, rangeHigh, realFlag)
          //          (filterIndexPassed = fnMathRandom())
          // 
          newFilter = fnFilterGetByIndex(filterIndex);
          //
          var temp1 = "";
          // temp1 = 'progid:DXImageTransform.Microsoft.MotionBlur(strength=13, direction=310)';
          // temp1 = 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2)';
          // elementMoveDuration
          //
          // Play Animation for this image
          //
          // Apply Filter
          // oObjNextImage.filters.apply();
          // oObjNextImage.filters.item(0).Apply();
          // oObjNextImage.filters[0].apply();
          // oObjNextImage.style.filter[0].apply();
          //
          // Set Style Filter
          // oObjNextImage.filters[0] = newFilter;
          // oObjNextImage.filters[filterKey] = newFilter;
          // oObjNextImage.filters[0].play(3);
          // oObjNextImage.filters = newFilter;
          // oObjNextImage.filters[filterKey] = newFilter;
          // oObjNextImage.filters.item(0) = newFilter;
          // oObjNextImage.filters.item(filterKey) = newFilter;
          //
          filterCommand = "oObjNext.style.filter='";
          // cmd = "oObjNextImage.style.filter='";
          //
          // Resize (Matrix)
          if (filterResizeIsOn) { 
                var filterMatrix = 'progid:DXImageTransform.Microsoft.Matrix' 
                  + '(' 
                  + ')';
                filterCommand += filterMatrix + " ";
          }
          // Randomly chosen filter
          if (filterIsOn) { filterCommand += newFilter; }
          filterCommand += "'";
          // oObjNextImage.style.filter = newFilter;
          //
          // Apply Filter
          // oObjNextImage.filters[0].apply();
          // oObjNextImage.style.filter.apply() = newFilter;
          // oObjNextImage.style.filter[0].apply();
          //
          ////////////////////////////////////////////////
          // Run Animation
          ////////////////////////////////////////////////
          //
          ////////////////////////////////////////////////
          //      Begin Movement from Origin to Position
          //
          ////////////////////////////////////////////////
          // Play the Randomly Selected Filter Effect
          startIndex = 18; endIndex = 18; // Indexes = oObjIndex...
          // Objects, Image Size, Group Index, Locks
    }
    //

    ////////////////////////////////////////////////
    // Visibility
    // oObjNext.style.display="block";
    // oObjNextImage.style.display="block";
    ////////////////////////////////////////////////
    //
    // Element Move
    if (moveIsOn) {
        //
        oObjIndex = oObjGroupImageIndex; // fnMenuIndexSet(oObjGroupIndex, oObjNext);
        //
		if (IsImageLarge) {
            // elementLeftOrig, elementTopOrig, elementLeftDest, elementTopDest,
            elementLeftOrig = menuImagePositionLeft[oObjGroupIndex] [oObjIndex];
			// if CascadeRight
			if (oObjGroupIndex >= 3) {
			   elementLeftOrig += menuImagePositionWidth[oObjGroupIndex] [oObjIndex];
			}
            elementTopOrig = menuImagePositionTop[oObjGroupIndex] [oObjIndex];
			// + menuImagePositionHeight[oObjGroupIndex] [oObjIndex];
		} else {
            // elementLeftOrig, elementTopOrig, elementLeftDest, elementTopDest,
            elementLeftOrig = menuImageRootPosition[oObjGroupIndex] [indexLeft];
			// if CascadeRight
			if (oObjGroupIndex <= 3) {
			   elementLeftOrig += menuImagePositionWidth[oObjGroupIndex] [oObjIndex];
			}
            elementTopOrig = menuImageRootPosition[oObjGroupIndex] [indexTop];
		}
        //
        elementLeftDest = menuImagePositionLeft[oObjGroupIndex] [oObjIndex];
        elementTopDest = menuImagePositionTop[oObjGroupIndex] [oObjIndex];
        // elementLeftDest = oObjNext.style.posLeft;
        // elementTopDest = oObjNext.style.posTop;
        //
        oObjNext.style.posLeft = elementLeftOrig;
        oObjNext.style.posTop = elementTopOrig;
        //
        if (filterIsOn || filterResizeIsOn) {
            if (filterCommand.length) { eval(filterCommand); filterCommand = ""; }
            if (filterResizeIsOn) { fnFilterResize(timerObj[timerId].oObj, filterTypeMatrix, 0.05); }
        }    
        ////////////////////////////////////////////////
        // Visibility
        if (oObjNext.style.display != "block") { oObjNext.style.display="block"; }
        //
        fnMenuImageMove(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
                     oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock); 
    }
    //
    if (filterIsOn) {
        if (filterCommand.length) { eval(filterCommand); filterCommand = ""; }
        if (filterResizeIsOn) { fnFilterResize(timerObj[timerId].oObj, filterTypeMatrix, 0.05); }
        if (true == false) {
        fnFilterPlay(filterPlayAll, 
                     HideImage, HideImageLarge, startIndex, endIndex, 
                     IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
                     oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
        }
    }
    //
}
// ------------------------------------------------------------------------------------- _//
//
///////////////////////////////////////////////
// Menu Image Move 
///////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
//
// var BodyMenuImageContainer = document.documentElement["BodyMenuImageContainer"];
// .getElementById("BodyMenuImageContainer");
//
// ------------------------------------------------------------------------------------- _//
// Menu Images Move Action
// fnMenuImageMove();
////////////////////////////////////////////////
function fnMenuImageMove(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, 
                 oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) 
{
    // Speed
    // timerInterval = 100;
    // timerFunction
    // timerFunction .... fixed
    //
    timerId = oObjNext.id;
    if (!timerObj[timerId]) { 
        timerObj[timerId] = new Object();
        timerObj[timerId].oObj = oObjNext;
        timerObj[timerId].timerBusy = true;
    } else if (timerObj[timerId].timerBusy) {
         // return; 
    }
    //
    timerObj[timerId].elementLeftDest = elementLeftDest;
    timerObj[timerId].elementTopDest = elementTopDest;
    timerObj[timerId].elementLeftOrig = elementLeftOrig;
    timerObj[timerId].elementTopOrig = elementTopOrig;
    //
    // timerStep = 25;
   
    // timerStepsPerSecond;    
    // timerStepMin = 10;
    // timerStepMax = 25;
    // timerDuration = 3;
    // timerDelay = 250;
    // timerInterval = 50;
    //
    ////////////////////////////////////////////////
    // Set Style Left for menu image box
    // oObj.style.posLeft = elementLeftOrig;
    ////////////////////////////////////////////////
    // Set Style Top for menu image box
    // oObj.style.posTop = elementTopOrig;
    //
    ////////////////////////////////////////////////
    // fnElementMove
    //
    moveDistanceLeft = Math.abs(elementLeftDest - elementLeftOrig);
    timerObj[timerId].moveDistanceLeft = moveDistanceLeft;
    //
    moveDistanceTop = Math.abs(elementTopDest - elementTopOrig);
    timerObj[timerId].moveDistanceTop = moveDistanceTop;
    //
    moveDistance = Math.sqrt( Math.pow(moveDistanceTop, 2) + Math.pow(moveDistanceLeft, 2) );
    //
    moveDistancePerSec = moveDistance / timerDuration;
    moveDistancePerSecLeft = moveDistanceLeft / timerDuration;
    moveDistancePerSecTop = moveDistanceTop / timerDuration;
    //
    // Q: Is iterStep Total Steps or Total Steps Per Second?
    // A: Steps per second is a better measure probably
    // timerStepsPerSecond = timerStep / timerDuration;
    // timerStepsPerSecond = timerStep;
    // 
    moveOffset = moveDistancePerSec / timerStepsPerSecond;
    moveOffsetLeft = moveDistancePerSecLeft / timerStepsPerSecond;
    if (moveOffsetLeft < moveOffsetMin) { moveOffsetLeft = moveOffsetMin; }
    if (moveOffsetLeft > moveOffsetMax) { moveOffsetLeft = moveOffsetMax; }
    timerObj[timerId].moveOffsetLeft = moveOffsetLeft;
    //
    moveOffsetTop = moveDistancePerSecTop / timerStepsPerSecond;
    if (moveOffsetTop < moveOffsetMin) { moveOffsetTop = moveOffsetMin; }
    if (moveOffsetTop > moveOffsetMax) { moveOffsetTop = moveOffsetMax; }
    timerObj[timerId].moveOffsetTop = moveOffsetTop;
    //
    timerObj[timerId].timerStepMax = timerStepMax;
    timerObj[timerId].timerStepCurr = 0;
    timerObj[timerId].elementMoveStepLeft = 0;
    timerObj[timerId].elementMoveStepTop = 0;
    //
    ////////////////////////////////////////////////
    fnTimerStart(timerId, timerFunction, timerDelay);
    ////////////////////////////////////////////////
    //
}
//
// ------------------------------------------------------------------------------------- _//
// Timer Control
// ------------------------------------------------------------------------------------- _//
// Timer Pause before Start
////////////////////////////////////////////////
// Included a setTimeout in BODY onload to delay start of text movement.
// oObjPassed, elementLeftOrig, elementTopOrig, elementLeftDest, elementTopDest)


var timerDateStart = new Date();
var timerDateCurr = new Date();
var timerDateElps = 0;
var timerCompletion = 0;
var timerTimeCompletion = 0;
var timerStepCompletion = 0;
var timerTen = 0;
//
function fnTimerMoveStepDo(timerIdPassed)
{
// elementMoveStepLeft = elementMoveStep;
// elementMoveStepTop = elementMoveStep
    var tempMoveInProgress = false;
    var tempTimeOrStepsCompleted = false;
    ////////////////////////////////////////////////
    // Set Style Left for menu image box
    timerObj[timerIdPassed].timerStepCurr += 1;
    if (timerObj[timerIdPassed].timerStepCurr == 1) { 
        tempMoveInProgress = false;
    }
    //
    ////////////////////////////////////////////////
    // Set Completion for Step Based or Time Based execution
    if (timerUseTime) {
        /*--            
        var timerCompletion = timerObj[timerIdPassed].timerStart 
                / timerDuration;
        --*/           
        timerDateCurr = new Date();
        // timerDateElps  = timerDateStart - timerDateCurr;
        var timerDateStartMin = timerObj[timerIdPassed].timerDateStart.getMinutes(); 
        var timerDateStartSec = timerObj[timerIdPassed].timerDateStart.getSeconds();
        var timerDateStartMil = timerObj[timerIdPassed].timerDateStart.getMilliseconds(); 
        //
        var timerDateCurrMin = timerDateCurr.getMinutes(); 
        var timerDateCurrSec = timerDateCurr.getSeconds(); 
        var timerDateCurrMil = timerDateCurr.getMilliseconds(); 
        //    
        var timerDateElpsMin  =
            timerDateCurrMin - timerDateStartMin 
            + ( ( timerDateStartMin > timerDateCurrMin ) * 60) 
            - ( timerDateStartSec > timerDateCurrSec );    
        var timerDateElpsSec  = 
            timerDateCurrSec - timerDateStartSec 
            + ( ( timerDateStartSec > timerDateCurrSec ) * 60) 
            - ( timerDateStartMil > timerDateCurrMil );    
        var timerDateElpsMil  = 
            timerDateCurrMil - timerDateStartMil 
            + ( ( timerDateStartMil > timerDateCurrMil ) * 1000);
            //    
        timerDateElps = 
        ( ( ( timerDateElpsMin * 60 ) + timerDateElpsSec ) * 1000 ) + timerDateElpsMil;
        //
        timerCompletion = timerTimeCompletion = timerDateElps / ( timerDuration * 1000 ); 
        //
        if ( timerCompletion > 1 ) {
            tempTimeOrStepsCompleted = true;  
            timerObj[timerIdPassed].oObj.style.posTop = timerObj[ timerIdPassed ].elementTopDest;
            timerObj[timerIdPassed].oObj.style.posLeft = timerObj[timerIdPassed].elementLeftDest;
        }
    } else {
        timerCompletion = timerStepCompletion = timerObj[timerIdPassed].timerStepCurr 
                / timerObj[timerIdPassed].timerStep;
        //
        if ( timerObj[timerIdPassed].timerStepCurr > timerObj[ timerIdPassed ].timerStepMax ) {
            tempTimeOrStepsCompleted = true;  
            timerObj[timerIdPassed].oObj.style.posTop = timerObj[ timerIdPassed ].elementTopDest;
            timerObj[timerIdPassed].oObj.style.posLeft = timerObj[timerIdPassed].elementLeftDest;
        }
    }
    //
    var tempPos;
    if ( timerObj[timerIdPassed].elementMoveStepTop > timerObj[timerIdPassed].timerStepMax) { tempTimeOrStepsCompleted = true; }  
    if ( timerObj[timerIdPassed].elementMoveStepLeft > timerObj[timerIdPassed].timerStepMax) {  tempTimeOrStepsCompleted = true; }
    //
    if (!tempTimeOrStepsCompleted) {
        //
        ////////////////////////////////////////////////
        // Set Style Top for menu image box
        if (timerObj[timerIdPassed].elementTopOrig < timerObj[ timerIdPassed ].elementTopDest) {
            if ( timerObj[timerIdPassed].oObj.style.posTop + timerObj[ timerIdPassed ].moveOffsetTop 
               < timerObj[timerIdPassed].elementTopDest) {
               ////////////////////////////////////////////////
               // Set Style Top for Box that is Droping
               timerObj[timerIdPassed].elementMoveStepTop += 1;
               //
               tempPos = timerObj[timerIdPassed].elementTopOrig 
                    + ( timerCompletion * timerObj[timerIdPassed].moveDistanceTop );
               //
               if (timerObj[timerIdPassed].oObj.style.posTop < tempPos) { timerObj[timerIdPassed].oObj.style.posTop = tempPos; }
               tempMoveInProgress = true;
            }
            //
        } else {
            //
            if ( timerObj[timerIdPassed].oObj.style.posTop - timerObj[timerIdPassed].moveOffsetTop 
                > timerObj[timerIdPassed].elementTopDest) { 
               ////////////////////////////////////////////////
               // Set Style Top for Box that is Rising
               timerObj[timerIdPassed].elementMoveStepTop += 1;
               //
               tempPos = timerObj[timerIdPassed].elementTopOrig 
                    - ( timerCompletion * timerObj[timerIdPassed].moveDistanceTop );
               //
               if (timerObj[timerIdPassed].oObj.style.posTop > tempPos) { timerObj[timerIdPassed].oObj.style.posTop = tempPos; }
               tempMoveInProgress = true;
            }
        }
        //
        ////////////////////////////////////////////////
        // Set Style Left for menu image box
        if (timerObj[timerIdPassed].elementLeftOrig < timerObj[timerIdPassed].elementLeftDest) {
            if ( timerObj[timerIdPassed].oObj.style.posLeft + timerObj[timerIdPassed].moveOffsetLeft 
                < timerObj[timerIdPassed].elementLeftDest) {
               ////////////////////////////////////////////////
               // Set Style Top for Box that is Moving Right
               timerObj[timerIdPassed].elementMoveStepLeft += 1;
               // 
               tempPos = timerObj[timerIdPassed].elementLeftOrig 
                    + ( timerCompletion * timerObj[timerIdPassed].moveDistanceLeft );
               //
               if (timerObj[timerIdPassed].oObj.style.posLeft < tempPos) { timerObj[timerIdPassed].oObj.style.posLeft = tempPos; }
               tempMoveInProgress = true;
            }
            //
        } else {
            //
            if ( timerObj[timerIdPassed].oObj.style.posLeft - timerObj[timerIdPassed].moveOffsetLeft 
                > timerObj[timerIdPassed].elementLeftDest) { 
               ////////////////////////////////////////////////
               // Set Style Top for Box that is Moving Left
               timerObj[timerIdPassed].elementMoveStepLeft += 1;
               // 
               tempPos = timerObj[timerIdPassed].elementLeftOrig 
                    - ( timerCompletion * timerObj[timerIdPassed].moveDistanceLeft );
               //
               if (timerObj[timerIdPassed].oObj.style.posLeft > tempPos) { timerObj[timerIdPassed].oObj.style.posLeft = tempPos; }
               tempMoveInProgress = true;
            }
        }
        //
        // Resize
        // oObj.filters["DXImageTransform.Microsoft.Matrix"]
        if (filterResizeIsOn && tempMoveInProgress) { 
            fnFilterResize(timerObj[timerIdPassed].oObj, filterTypeMatrix, timerCompletion);
        }
        // timerStepCompletion
        //
    }
    if (timerCompletion > timerTen) {
        timerTen + 0.1;
    }
    //
    ////////////////////////////////////////////////
    // End of loop
    if (!tempMoveInProgress || tempTimeOrStepsCompleted) {
        // Arrived at destinatioin
        // Turn Off Timer
        window.clearInterval(timerObj[timerIdPassed].timerInstId);
        timerObj[timerIdPassed].oObj.style.posTop = timerObj[ timerIdPassed ].elementTopDest;
        timerObj[timerIdPassed].oObj.style.posLeft = timerObj[timerIdPassed].elementLeftDest;
        if (filterResizeIsOn) { fnFilterResize(timerObj[timerIdPassed].oObj, filterTypeMatrix, 1); }
        fnFilterStop(filterPlayAll,
                    timerObj[timerIdPassed].oObj,
                    timerIdPassed);
        timerStarted = false;
        timerIdPrev = timerIdPassed;
        timerObj[timerIdPassed].timerBusy = false;
        timerObj[timerIdPassed] = null;
    } 
}
//
// ------------------------------------------------------------------------------------- _//
// Timer Pause then Start
////////////////////////////////////////////////
// Included a setTimeout in BODY onload to delay start of text movement.
function fnTimerStart(timerIdPassed, timerFunctionPassed, timerDelayPassed)
{
    timerTen = 0;
    timerStarted = true;
    timerObj[timerIdPassed].timerBusy = true;
    timerObj[timerIdPassed].timerDateStart = new Date();
    timerIdCurr = timerIdPassed;
    //
    var tempFunc = "";
    tempFunc = function() { fnTimerSet( timerIdPassed ); };
    //
    vTimerStart=window.setTimeout( 
            tempFunc, 
            timerDelayPassed);
    /*--
    tempFunc = function() { fnTimerSet( '"' + timerIdPassed + '"' ); };
    tempFunc = 'function() { fnTimerSet("' + timerIdPassed + '"); }';
    vTimerStart=window.setTimeout( 
            function() { fnTimerSet(timerIdCurr); }, 
            timerDelayPassed);
    vTimerStart=window.setTimeout( 'function() { fnTimerSet("' + timerIdCurr + '"); }', timerDelayPassed);
    vTimerStart=window.setTimeout("fnTimerSet('"+timerIdCurr+"')", timerDelayPassed);
    vTimerStart=window.setTimeout(
          fnTimerSet( timerFunctionPassed, timerInterval, timerIdPassed ), 
          timerDelayPassed);
    //
    fnTimerSet( timerFunctionPassed, timerInterval, timerIdPassed ), 
    'fnTimerSet(timerFunctionPassed, timerInterval, "' + timerIdPassed + '")',
    // 
   vTimerStart=window.setTimeout("fnTimerSet" 
          + "("  + timerFunctionPassed  
          + ", " + timerInterval 
          + ", " + timerIdPassed 
          + ")", 
          timerDelayPassed);
    --*/
   timerDelay = timerDelayPassed;
}
//
// ------------------------------------------------------------------------------------- _//
// Timer Set
////////////////////////////////////////////////
// Set up interval at which the moveDiv function will be called.
function fnTimerSet(timerIdPassed)  
{
    var tempFunc = "";
    tempFunc = function() { fnTimerMoveStepDo( timerIdPassed ); };
    //
    vTimerID=window.setInterval(
        tempFunc,
        timerInterval
        );
    /*--
    tempFunc = 'function() { fnTimerMoveStepDo("' + timerIdPassed + '"); }';
    function() { fnTimerMoveStepDo(timerIdPassed); },
    vTimerID=window.setInterval(
        'function() { '
        + 'fnTimerMoveStepDo'
        + "("  + timerIdPassed 
        + ')'
        + '; }',
        timerIntervalPassed
        );
    vTimerID=window.setInterval(
        fnTimerMoveStepDo(timerIdPassed),
        timerIntervalPassed
        );

    'fnTimerMoveStepDo(' + timerIdPassed+ ')',
    fnTimerMoveStepDo( + timerIdPassed ), 
    fnTimerMoveStepDo(timerIdPassed), 
    timerFunctionPassed + "(" + timerIdPassed + ")", 
    'fnTimerMoveStepDo(timerIdPassed)',
    fnTimerMoveStepDo(timerIdPassed), 
        //
    vTimerID=window.setInterval(
        'fnTimerMoveStepDo'
        + "("  + timerIdPassed 
        + ')',
        timerIntervalPassed
        );
    --*/ 
    //
    timerObj[timerIdPassed].timerInstId = vTimerID;
    //
    // vTimerID=window.setInterval("moveDiv()",40);
    // timerInterval = timerIntervalPassed;
    // timerFunction = timerFunctionPassed;
}  
//
// ------------------------------------------------------------------------------------- _//
// Timer Move Box (Element, i.e. Div)
////////////////////////////////////////////////
// This function incrementally repositions divMove. 
// It loops through a set number of times.
//      Was function moveDiv()
function fnTimerMoveTest()
{
  for(i=0;i<10;i++)
    {
       iHorizontal+= 1;
       iVertical=iHorizontal;
       divMove.style.top=iVertical;
       divMove.style.left=iHorizontal;
    }
	
//  iInterval tracks how many times moveDiv has looped and clears the interval
//  after a set number of loops.

  iInterval++;
 
  if(iInterval>25)	
     {
        window.clearInterval(vTimerID);
        divToggle.style.visibility="visible";
     }
}
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
///////////////////////////////////////////////
// Menu Html Build 
///////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Html Variables
   var imgHtml = "";
// var BodyMenuImageContainer = document.documentElement["BodyMenuImageContainer"];
// .getElementById("BodyMenuImageContainer");
//
// ------------------------------------------------------------------------------------- _//
// Build (inner) HTML for Menu Images
// fnMenuImagesHtmlBuild();
////////////////////////////////////////////////
function fnBodyImagesHtmlBuild()
{
//
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx TO DO xxxxxxxxxxxxxxx
// document.write(imgHtml);
elBodyImageContainer = fnElementGetRef(elBodyImageContainer, "BodyImageContainer", "BodyImageContainer");
elBodyImageContainer.innerHTML = imgHtml;
//
bodyImageLoadFirst = false;
//
return elBodyImageContainer; 
}
//
// ------------------------------------------------------------------------------------- _//
// fnMenuImagesHtmlBuild();
////////////////////////////////////////////////
function fnMenuImagesHtmlBuild()
{
// Filter in use is Type Checkerboard;
filterIndexPassed = filterTypeCheckerBoard;
// + ', ' + filterTypeCheckerBoard + ')
//
elBodyMenuImageContainer = fnElementGetRef(elBodyMenuImageContainer, "BodyMenuImageContainer", "BodyMenuImageContainer");
//
imgHtml = "";
// imgHtml += '<div id="BodyMenuImageContainer">';		 
    for (imgGroupCn = 1; imgGroupCn <= imgGroupMax; imgGroupCn++){
      for (imgCn = 1; imgCn <= imgMaxByGroup[imgGroupCn]; imgCn++){
         oName = fnMenuObjectNameSet(imgGroupCn, imgCn);
// imgHtml += '    // Image ' + imgCn +  _//';
//
// ------------------------------------------------------------------------------------- _//
// Image Small
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Element Div
imgHtml += '	<div id="' + oName + imgGroupCn + imgCn + '"'; // Image Small Id
imgHtml += '		 class="imgThumbSmall MenuImageBox MenuImageBoxBorder"'; // Class
//
// ------------------------------------------------------------------------------------- _//
// Events:
// ------------------------------------------------------------------------------------- _//
// Mouse Over
imgHtml += '   		 onmouseover="';
imgHtml += 			 'fnMenuImgShowStack('; 
imgHtml += 'false, '; // Is Large Image
		// Parent Object
		if (imgCn > 1) {
		   imgHtml += (fnMenuObjectNameSet(imgGroupCn, imgCn-1) + imgGroupCn + imgCn-1); // Previous (Small) Image Id 
		} else {
		   imgHtml += (fnMenuObjectNameSet(imgGroupCn, imgCn-1)); // Menu Container Id
		}   
imgHtml += ', ';
imgHtml += oName + 'Image' + imgGroupCn + imgCn + ', '; // Small Image
imgHtml += oName + imgGroupCn + imgCn + ', '; // Small Id
imgHtml += oObjImageSizeSmall + ', '; // Small Image Size
imgHtml += imgGroupCn + ', '; // Menu Group
imgHtml += imgCn + ', '; // Menu Group
imgHtml += 'false, '; // Current Show Lock
imgHtml += 'true'; // Ignore Show Lock
imgHtml += ');';
imgHtml += '"';
// end of mouseover
//
// ------------------------------------------------------------------------------------- _//
// Mouse Out
imgHtml += '      	 onmouseout="';
imgHtml += 			 'fnMenuImgHide(';
imgHtml += 'false, '; // Is Large Image
		// Parent Object
		if (imgCn > 1) {
		   imgHtml += (fnMenuObjectNameSet(imgGroupCn, imgCn-1) + imgGroupCn + imgCn-1); // Previous (Small) Image Id 
		} else {
		   imgHtml += (fnMenuObjectNameSet(imgGroupCn, imgCn-1)); // Menu Container Id
		}   
imgHtml += ', ';
imgHtml += oName + 'Image' + imgGroupCn + imgCn + ', '; // Small Image
imgHtml += oName + imgGroupCn + imgCn + ', '; // Small Id
imgHtml += imgGroupCn + ', '; // Menu Group
imgHtml += imgCn + ', '; // Menu Group
imgHtml += 'false, '; // Current Show Lock
imgHtml += 'false'; // Ignore Show Lock
imgHtml += ');';
imgHtml += '"';
// end of mouseout
//
// ------------------------------------------------------------------------------------- _//
// On Change
/*--
imgHtml += '      	 onfilterchange="';
imgHtml += 			 'fnMenuImageFilterPlayFirst(';
		// Parent Object
		if (imgCn > 1) {
		   imgHtml += (fnMenuObjectNameSet(imgGroupCn, imgCn-1) + imgGroupCn + imgCn-1); // Previous (Small) Image Id 
		} else {
		   imgHtml += (fnMenuObjectNameSet(imgGroupCn, imgCn-1)); // Menu Container Id
		}   
imgHtml += ', ';
imgHtml += oName + 'Image' + imgGroupCn + imgCn + ', '; // Small Image
imgHtml += oName + imgGroupCn + imgCn + ', '; // Small Id
imgHtml += oObjImageSizeSmall + ', '; // Small Image Size
imgHtml += imgGroupCn + ', '; // Menu Group
imgHtml += 'false, '; // Current Show Lock
imgHtml += 'false'; // Ignore Show Lock
imgHtml += ');';
imgHtml += '"';
--*/
//
// end of mouseover
//
// ------------------------------------------------------------------------------------- _//
// Layout
// Size
// imgHtml += '      	 width=" 0em" '; // Width
// imgHtml += '      	 height=" 0em" '; // Height
imgHtml += '		 style="display:none" '; // Display (visibility)
imgHtml += '		 >';
//
// ------------------------------------------------------------------------------------- _//
// Small Image
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Element: A
// Text Link
imgHtml += '<a id="' + oName + 'LinkUpper' + imgGroupCn + imgCn + '"'; // Link Id
imgHtml += '    		   class="MenuImageBox MenuImageBoxLink"'; // Class
// Source
imgHtml += '    		   href="../MdmWebPages/' + oName + '.shtml"'; // Link
imgHtml += '    		   >';
// ------------------------------------------------------------------------------------- _//
// Element: P
imgHtml += '<span id="' + oName + 'LinkTextUpper' + imgGroupCn + imgCn + '">'; // Link Text
imgHtml += '         	   ' + fnMenuObjectTextSet(imgGroupCn, imgCn);
imgHtml += '		<br clear="all">';
imgHtml += '</span>';
// imgHtml += '<br>';
imgHtml += '</a>';
//
// ------------------------------------------------------------------------------------- _//
// Element: Img
imgHtml += '<img id="' + oName + 'Image' + imgGroupCn + imgCn + '" '; // Image Id
imgHtml += '        	 src="../images/Thumbnails/' + oName + '.jpg" '; // Image Source src 
imgHtml += '        	 class="MenuThumb" '; // Class
// Events:
// Mouse Down
imgHtml += '      	 	 onmousedown="';
/*--
// Filter
// Start Animation Filter
// Filter Reset
// imgHtml += ' fnFilterResetThenAnimate(this + ', ' + filterIndexPassed + ');';  // Reset this Image
imgHtml += 'fnFilterResetThenAnimate(' + oName + 'l' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');'; // Reset Large Image
// imgHtml += ' fnFilterSpin(' + oName + 'l' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');'; // Spin Large Image
--*/
//
// Image Show Toggle
imgHtml += 	  			'fnMenuImgToggle(';
imgHtml += 'true, '; // Is Large Image
imgHtml += oName + imgGroupCn + imgCn + ', '; // Small Id
imgHtml += oName + 'lImage' + imgGroupCn + imgCn + ', '; // Large Image Object
imgHtml += oName + 'l' + imgGroupCn + imgCn + ', '; // Large Id
imgHtml += oObjImageSizeLarge + ', '; // Image Large Size
imgHtml += imgGroupCn + ', '; // Menu Group
imgHtml += imgCn + ', '; // Menu Group
imgHtml += 'false, '; // Current Show Lock
imgHtml += 'false'; // Ignore Show Lock
imgHtml += ');';
imgHtml += '"';
// end of mousedown
//
// Play Filter    
// imgHtml += ' onfilterchange="fnFilterSpin(this + ', ' + filterIndexPassed + ');'; // Spin this Image
// imgHtml += ' onfilterchange="fnFilterSpin(' + oName + 'l' + imgGroupCn + imgCn + ', filterIndexPassed);'; // Spin Large Image
// imgHtml += '" ';
//
// Size
imgHtml += '        	 width="' + oObjImageSizeSmall + 'px"'; // Width
// Set Height using Global height and ratio
imgHtml += '        	 height="' + (oObjImageSizeSmall * oObjImageSizeRatio) + 'px"'; // Height
// Alt
imgHtml += '			 alt="' + fnMenuObjectTextSet(imgGroupCn, imgCn) + '"'; // Alt (Link) Text;
imgHtml += '        	 >';
//
// ------------------------------------------------------------------------------------- _//
// Element: A
// Text Link
imgHtml += '<a id="' + oName + 'LinkLower' + imgGroupCn + imgCn + '"'; // Link Id
imgHtml += '    		   class="MenuImageBox MenuImageBoxLink"'; // Class
// Source
imgHtml += '    		   href="../MdmWebPages/' + oName + '.shtml"'; // Link
imgHtml += '    		   >';
// ------------------------------------------------------------------------------------- _//
// Element: P
imgHtml += '<span id="' + oName + 'LinkTextLower' + imgGroupCn + imgCn + '">'; // Link Text
imgHtml += '        	  ' + fnMenuObjectTextSet(imgGroupCn, imgCn);
imgHtml += '</span>';
imgHtml += '</a>';
//
imgHtml += '</div>';
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// Image Large
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Element: Div
imgHtml += '<div id="' + oName + 'l' + imgGroupCn + imgCn + '"'; // Id
imgHtml += '		 class="imgThumbLarge MenuImageBoxBorder MenuImageBox"'; // Class
// MenuImageContainer
// ------------------------------------------------------------------------------------- _//
// Events:
// ------------------------------------------------------------------------------------- _//
// Mouse Out //
imgHtml += '      	 onmouseout="';
imgHtml += 			 'fnMenuImgHide(';
imgHtml += 'true, '; // Is Large Image
imgHtml += oName + imgGroupCn + imgCn + ', '; // Small Id
imgHtml += oName + 'lImage' + imgGroupCn + imgCn + ', '; // Lare Image
imgHtml += oName + 'l' + imgGroupCn + imgCn + ', '; // Large Id
imgHtml += imgGroupCn + ', '; // Menu Group
imgHtml += imgCn + ', '; // Menu Group Box
imgHtml += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + ']' + ', '; // Current Show Lock
imgHtml += 'false'; // Ignore Show Lock
imgHtml += ');';
imgHtml += '"';
// end of mouseout
//
// ------------------------------------------------------------------------------------- _//
// Mouse Over //
// ------------------------------------------------------------------------------------- _//
// Show Image Small
imgHtml += '      	 onmouseover="';
imgHtml += 			 'fnMenuImgShow(';
imgHtml += 'false, '; // Is Large Image
		// Parent Object Name
		if (imgCn > 1) {
		   imgHtml += (fnMenuObjectNameSet(imgGroupCn, imgCn-1) + imgGroupCn + imgCn-1); // Previous (Small) Image Id 
		} else {
		   imgHtml += (fnMenuObjectNameSet(imgGroupCn, imgCn-1)); // Menu Container Id
		}
imgHtml += ', ';
imgHtml += oName + 'Image' + imgGroupCn + imgCn + ', '; // Small Image Object 
imgHtml += oName + imgGroupCn + imgCn + ', '; // Small Id
imgHtml += oObjImageSizeSmall + ', ';  // Image Small Size 
imgHtml += imgGroupCn + ', '; // Menu Group
imgHtml += imgCn + ', '; // Menu Group Box
imgHtml += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + ']' + ', '; // Current Show Lock
imgHtml += 'false'; // Ignore Show Lock 
imgHtml += ');';
// ------------------------------------------------------------------------------------- _//
// Show Image Large
imgHtml += 	  	   	'fnMenuImgShow(';
imgHtml += 'true, '; // Is Large Image
imgHtml += oName + imgGroupCn + imgCn + ', '; // Small Id
imgHtml += oName + 'lImage' + imgGroupCn + imgCn + ', '; // Large Image
imgHtml += oName + 'l' + imgGroupCn + imgCn + ', ';// Large Id
imgHtml += oObjImageSizeLarge + ', '; // Image Large Size
imgHtml += imgGroupCn + ', '; // Menu Group
imgHtml += imgCn + ', '; // Menu Group Box
imgHtml += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + ']' + ', '; // Current Show Lock
imgHtml += 'false'; // Ignore Show Lock
imgHtml += ');';
// ------------------------------------------------------------------------------------- _//
// Start Animation Filter
// Filter Reset
// imgHtml += ' fnFilterResetThenAnimate(this + ', ' + filterIndexPassed + ');';  // Reset this Image
// imgHtml += ' fnFilterResetThenAnimate(' + oName + 'l' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');'; // Reset Large Image
// imgHtml +=  ' fnFilterSpin(' + oName + 'l' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');'; // Spin Large Image
//
imgHtml += '"';
// end of mouseover
//
// Play Filter    
// imgHtml += '      	onfilterchange="fnFilterSpin(this, filterIndexPassed);'; // Spin this Image
// imgHtml += '      	onfilterchange="fnFilterSpin(' + oName + 'l' + imgGroupCn + imgCn + ', ' + filterIndexPassed + '); '; // Spin Large Image
// imgHtml += '" ';
// 
// Div Size
imgHtml += '      	 width="' + oObjImageSizeLarge + 'px"'; // Image Large Width
imgHtml += '      	 height="' + (oObjImageSizeLarge * oObjImageSizeRatio) + 'px"'; // Image Large Height
// Div Style
imgHtml += '		 style="display:none;';
//
// ------------------------------------------------------------------------------------- _//
/*--
imgHtml += '         filter:';
//
// imgHtml += 'progid:DXImageTransform.Microsoft.MotionBlur(strength=13, direction=310) ';
// filterIndexPassed = filterTypeBlinds;

// imgHtml += 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2) ';
// filterIndexPassed = filterTypeBlinds;

// imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(duration=3);"';
// filterIndexPassed = filterTypeBlinds;
//
// imgHtml += 'progid:DXImageTransform.Microsoft.Blinds(Bands=10, Duration=2, Direction=down);" ';
// filterIndexPassed = filterTypeBlinds;

// CheckerBoard
// filterTypeCheckerBoard
imgHtml += 'progid:DXImageTransform.Microsoft.CheckerBoard(Duration=3, Direction=left);';

// Wheel
// imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(Duration=1.0000);" ';
// filterIndexPassed = filterTypeBlinds;

// Matrix
// imgHtml += 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=auto expand, duration=1.5);" ';
// filterIndexPassed = filterTypeBlinds;
--*/
// ------------------------------------------------------------------------------------- _//
//
imgHtml += '"'; 
// end of style
//
imgHtml += '		>';
//
// ------------------------------------------------------------------------------------- _//
// Image & Text Link
// ------------------------------------------------------------------------------------- _//
// Element: A
imgHtml += '<a id="' + oName + 'lLinkUpper' + imgGroupCn + imgCn + '"';
imgHtml += '		   class="MenuImageBox MenuImageBoxLink"';
imgHtml += '		   href="../MdmWebPages/' + oName + '.shtml"';
imgHtml += '		   >';
//
// ------------------------------------------------------------------------------------- _//
// Element: P
imgHtml += '<span id="' + oName + 'lLinkTextUpper' + imgGroupCn + imgCn + '">'; // Link Text
imgHtml += '         ' + fnMenuObjectTextSet(imgGroupCn, imgCn);
imgHtml += '		<br>';
// imgHtml += '		<br clear="all">';
imgHtml += '</span>';
//
// ------------------------------------------------------------------------------------- _//
// Element: Img
imgHtml += '<img id="' + oName + 'lImage' + imgGroupCn + imgCn + '"';
imgHtml += '    		 src="../images/Thumbnails/' + oName + '.jpg"'; // Image Source src 
imgHtml += '    		 class="MenuThumbLarge"'; 
// Alt
imgHtml += '			 alt="' + fnMenuObjectTextSet(imgGroupCn, imgCn) + '"'; // Alt (Link) Text;
imgHtml += '    		 >';
// ------------------------------------------------------------------------------------- _//
// Link Text
imgHtml += '<span id="' + oName + 'lLinkLower' + imgGroupCn + imgCn + '">'; // Link Text
// imgHtml += '		 <br clear="all">';
imgHtml += '         ' + fnMenuObjectTextSet(imgGroupCn, imgCn);
imgHtml += '</span>';
//
imgHtml += '</a>';
//
imgHtml += '</div>';
// ------------------------------------------------------------------------------------- _//
      }
    }
//
// ------------------------------------------------------------------------------------- _//
imgHtml += '	</div> ';
// document.write(imgHtml);
// elBodyMenuImageContainer = fnElementGetRef(elBodyMenuImageContainer, "BodyMenuImageContainer", "BodyMenuImageContainer");
//
elBodyMenuImageContainer.innerHTML = imgHtml;
//
menuImageLoadFirst = false;
//
return elBodyMenuImageContainer; 
}
// document.write("
// fnResize function 
// fnResize function 
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// Other
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// Window Functions
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// Window Events (Load, Resize)
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Window Load
////////////////////////////////////////////////
// onlayoutcomplete="fnDocumentLoadInit();";
// Document Window OnLoad:
//
window.onload = function() {
	  ////////////////////////////////////////////////
	  // Initialize and Set Global Variables
      fnDocumentLoadInit();
	  //
	  ////////////////////////////////////////////////
	  // Build Body Images Div
	  if (!bodyImageLoadDelay) {
          elBodyImageContainer = fnBodyImagesHtmlBuild();
	  }
	  //
	  ////////////////////////////////////////////////
	  // Build Menu Images Div
	  if (!menuImageLoadDelay) {
          elBodyMenuImageContainer = fnMenuImagesHtmlBuild();
	  }
	  //
	  ////////////////////////////////////////////////
	  // Docuement Element Initialize & Store Original Menu Columns.
	  if (!javaLoadDelay) {
    	  // Initialize and save
    	  fnElementObjectCreate();
    	  //
    	  ////////////////////////////////////////////////
          // Choose Standard Layout
          fnLayoutNext(layoutStandard)
          // fnLayoutSelectByIndex(layoutStandard);
	  }
	  //
// Inactive code:
// window.onload="fnDocumentLoadInit();";
// onlayoutcomplete="fnDocumentLoadInit();";
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Document Window Resize
// Adjustments:
var layoutWidthMargin = 60;
var layoutHeightMargin = 50;
var layoutMenuHeightMax = 0;
// Client Window Size
var layoutWidthPrev = 0;
var layoutHeightPrev = 0;
// Current Layout Strategy
var layoutIsWide = false;
var layoutIsStandard = true;
//
window.onresize = function() { fnlayoutWindowResize(); }
/*--
--*/
function fnlayoutWindowResize() {
      // Recalculate Screen Display
      //
      ////////////////////////////////////////////////
      // Recalculate Globals for Screen
      //
	  fnWindowClientWidth();
      ////////////////////////////////////////////////
      // Load Containers if missing
      //
	  if (!elBodyMainLeft) { fnElementObjectContainerCreate(); }
      ////////////////////////////////////////////////
      // Recalculate Positions for Menu Images
      //
	  // if (BodyMainCenterCenter.offsetWidth > 900) {
  	  if (layoutDocumentWidth > 900) {
     	 	 if (layoutIndex == layoutStandard) {
          	  	 // Left
          		 // elBodyMainLeft.style.top = 0%
          		 // elBodyMainLeft.style.left = "0%";
          		 elBodyMainLeft.style.width = "12%";
      
          		 // elBodyMainLeft.style.width = "10%";
      
          		 // elBodyMainLeft.style.width = "15%";
      			 //
          	  	 // Center
          		 // elBodyMainCenter.style.top = 0%
          		 elBodyMainCenter.style.left = "12%";
          		 elBodyMainCenter.style.width = "76%";
      
          		 // elBodyMainCenter.style.left = "10%";
          		 // elBodyMainCenter.style.width = "80%";
      
          		 // elBodyMainCenter.style.left = "15%";
          		 // elBodyMainCenter.style.width = "70%";
      			 //
          	  	 // Right
          		 // elBodyMainRight.style.top = 0%
          		 elBodyMainRight.style.left = "88%";
          		 elBodyMainRight.style.width = "12%";
      
          		 // elBodyMainRight.style.left = "90%";
          		 // elBodyMainRight.style.width = "10%";
      
          		 // elBodyMainRight.style.left = "85%";
          		 // elBodyMainRight.style.width = "15%";
      			 //
			} else {
        	  	 // Center
        		 // elBodyMainCenter.style.top = 0%
        		 elBodyMainCenter.style.left = "0%";
        		 elBodyMainCenter.style.width = "100%";
			}
    	 var Cn = 0;
    	 var tmp;
    	 while (BodyMainCenterCenter.childNodes[1].childNodes[Cn]) {
    	 	tmp = BodyMainCenterCenter.childNodes[1].childNodes[Cn];
    		if (tmp.id.substr(0,4) == "DivP") {
    			if (BodyMainCenterCenter.offsetWidth > 1000) {
      			 		// tmp.style.maxWidth = "33%";
          				// tmp.style.posWidth = "33%";
          				tmp.style.width = "33%";
          			 	// tmp.style.maxWidth = 350;
    			} else {
      			 		tmp.style.width = "50%";
      			 		// tmp.style.maxWidth = "50%";
          				// tmp.style.width = "50%";
    			}
      				if (tmp.childNodes[0].id.substr(0,4) == "DivC") {
          				tmp.childNodes[0].style.posWidth = "";
          				tmp.childNodes[0].style.width = "82%";
      				}
    		}
    		Cn++;
    	 }
 	 	 //
		 layoutIsWide = true;
    	 layoutIsStandard = false;
	  } else {
	  	 if (layoutIndex == layoutStandard) {
        	  	 // Left
        		 // elBodyMainLeft.style.top = 0%
        		 // elBodyMainLeft.style.left = "0%";
        		 elBodyMainLeft.style.width = "20%";
        	  	 // Center
        		 // elBodyMainCenter.style.top = 0%
        		 elBodyMainCenter.style.left = "20%";
        		 elBodyMainCenter.style.width = "60%";
        	  	 // Right
        		 // elBodyMainRight.style.top = 0%
        		 elBodyMainRight.style.left = "80%";
        		 elBodyMainRight.style.width = "20%";
			} else {
        	  	 // Center
        		 // elBodyMainCenter.style.top = 0%
        		 elBodyMainCenter.style.left = "0%";
        		 elBodyMainCenter.style.width = "100%";
			}
     	 	 //
			 var Cn = 0;
			 var tmp = BodyMainCenterCenter.childNodes[1].childNodes[Cn];
			 while (BodyMainCenterCenter.childNodes[1].childNodes[Cn]) {
			 	tmp = BodyMainCenterCenter.childNodes[1].childNodes[Cn];
				if (tmp.id.substr(0,4) == "DivP") {
    			 	// tmp.style.maxWidth = "";
        			tmp.style.width = "";
        			// tmp.style.posWidth = "";
    				if (tmp.childNodes[0].id.substr(0,4) == "DivC") {
        				tmp.childNodes[0].style.posWidth = "";
        				tmp.childNodes[0].style.width = "45%";
					}
				}
				Cn++;
			 }
     	 	 //
    		 layoutIsWide = false;
			 layoutIsStandard = true;
	  }
	  //
      layoutWidthPrev = layoutWidth;
      layoutHeightPrev = layoutHeight;
      ////////////////////////////////////////////////
      // Recalculate Positions for Menu Images
      //
}
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Document Window Client Width
var layoutWidth = 0;
var layoutHeight = 0;
//
var layoutClientWidth = 0;
var layoutClientHeight = 0;
var layoutAvailWidth = 0;
var layoutAvailHeight = 0;
var layoutDocumentWidth = 0;
var layoutDocumentHeight = 0;
//
function fnWindowClientWidth() {
  // Window Width
  	layoutDocumentWidth = window.document.documentElement.offsetWidth;
  	layoutAvailWidth = window.screen.availWidth;
  	// layoutClientWidth = window.screen.availWidth - layoutWidthMargin;
	layoutClientWidth = window.document.offsetWidth - layoutWidthMargin;
  	// if (layoutClientWidth < 100) { layoutClientWidth = document.body.parentElement.clientWidth - layoutWidthMargin; }
    //
	layoutDocumentHeight = window.document.documentElement.offsetHeight;
	layoutAvailHeight = window.screen.availHeight;
    layoutClientHeightht = window.screen.availHeight - layoutHeightMargin;
    // if (layoutClientHeight < 100) { layoutClientHeight = document.body.parentElement.clientHeight - layoutHeightMargin; }
  //
  layoutWidth = layoutDocumentWidth;
  if (layoutWidth < 100) { layoutWidth = document.body.parentElement.clientWidth; }
  // layoutWidth -= layoutWidthMargin;
  layoutHeight =  layoutDocumentHeight;
  if (layoutHeight < 100) { layoutHeight = document.body.parentElement.clientHeight; }
  // layoutHeight -= layoutHeightMargin;
  // layoutWidth -= 20;
  // layoutHeight -= 20;
  //         
}
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
///////////////////////////////////////////////
// Window Session Functions
///////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Window Session Load
function fnWindowSessionLoad() {
      // Load Layout and Images Displayed
      // Get Cookie
         // Apply Cookie to Window
         // Apply Default to Window
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Window Session Save
function fnWindowSessionSave() {
      // Load Layout and Images Displayed
      // Build Oookie
      // Save Cookie
}
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
///////////////////////////////////////////////
// Window Cookies Functions
///////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Window Cookie Save
function fnWindowCookieSave() {
      // Load Layout and Images Displayed
      //
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Window Cookie Save
function fnWindowCookieSave() {
      // Load Layout and Images Displayed
      //
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Window Cookie Build
function fnWindowCookieBuild() {
      // Build the Cookie
      //
}
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
///////////////////////////////////////////////
// Window Document Functions
///////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// fn Document Load Initinitialize Variablesm, Arrays and Default Data
function fnDocumentLoadInit()
{
    //  for (imgCn = 1; imgCn <= imgUsedCn; imgCn++){
    //    menuImage = oObjIndexSetmenuImage(imgCn);
    //    intervalSet = imgCn * 100;
    //    intervalSet += intervalBase;
    //    intervalName = menuImage.name + "AnimationCycle()";
    //    setInterval (intervalName, intervalSet);
    //  }
    for (imgCn = imgUsedCn + 1; imgCn <= imgMax; imgCn++){
      imgAniToggle[imgCn]=0;
      imgMouseHover[imgCn]=0;
      //    menuImage = oObjIndexSetmenuImage(imgCn);
      //    menuImage.src = "imgnone.gif";
    }
    //
    // imgGroupMax
    // imgMax
    //
    for (imgGroupCn = 0; imgGroupCn <= imgGroupMax; imgGroupCn++){
	  imgMax = imgMaxByGroup[imgGroupCn];
      for (imgCn = 0; imgCn <= imgMax; imgCn++){
        // imgCnByGroup[imgGroupCn];
        // imgMaxByGroup[imgGroupCn];
        menuImage[imgGroupCn] [imgCn] = null;
        menuImageLocked[imgGroupCn] [imgCn] = false;
      }
    }
    // Resize Window 
    fnlayoutWindowResize();
    //
}
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// Standard Functions 
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Random Number Get By Range
function fnMathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, filterRealFlagPassed)
{
 		 return ( ( Math.random()
            * (filterRangeHighPassed - filterRangeLowPassed) )
            + filterRangeLowPassed
            );
}
//
// ------------------------------------------------------------------------------------- _//
// Base Font Size Increase
function fnFontSizeIncrease()
{
 		 return;
}
//
// ------------------------------------------------------------------------------------- _//
// Base Font Size Decrease
function fnFontSizeDecrease()
{

  		 return;
}
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
//
///////////////////////////////////////////////
// Debug
///////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Layout Next
function fnDebugStart(debugOptionPassed, debugMessagePassed)
{
    if (!debugIsOn) { return; }
    if (debugDoAlert) {
        alert("Ready to debug: " + debugMessagePassed + "(" + debugOptionPassed + ")");
    } else {
        if (browserIsIE) {
            debugger;
        }
        if (browserIsFF) {
            // Throw something 
            // throw "Ready to debug: " + debugMessagePassed + "(" + debugOptionPassed + ")";
            // Use degug instance (from VK)
            // debug-instance-off fnMenuImgShow;
        }
    }
}
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
///////////////////////////////////////////////
// MOUSE
///////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// Image Standard Mouse Events
// Mouse
// 		fnMouseOverImg
//		    fnMouseOutImg
//		    fnMouseClickImg
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// Mouse Over
////////////////////////////////////////////////
function fnMouseOverImg(menuImage)
{
  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
  if (menuImageCn > imgUsedCn){
    return;
  }
  imgMouseHover[menuImageCn] = 1;
  if (imgFocus == menuImageCn){
//    menuImage.src = menuImage.name + "/" + menuImage.name + "fh.gif";
  }
  else {
//    menuImage.src = menuImage.name + "/" + menuImage.name + "bh.gif";
  }
  
var tempTop = menuImage.parentNode.top;
var tempLeft =  menuImage.parentNode.left;
  alert("top: " + tempTop);
}
//
// ------------------------------------------------------------------------------------- _//
// Mouse Out
////////////////////////////////////////////////
function fnMouseOutImg(menuImage)
{
  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
  if (menuImageCn > imgUsedCn){
    return;
  }
  imgMouseHover[menuImageCn] = 0;
  if (imgFocus == menuImageCn){
//    menuImage.src = menuImage.name + "/" + menuImage.name + "f.gif";
  } else {
//    menuImage.src = menuImage.name + "/" + menuImage.name + "b.gif";
  }
}
//
// ------------------------------------------------------------------------------------- _//
// Mouse Click
////////////////////////////////////////////////
function fnMouseClickImg(menuImage)
{
  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
  if (menuImageCn > imgUsedCn){
    return;
  }
  if (imgFocus == menuImageCn){
    return;
  }
// old folder
  imgFocusOld = imgFocus;
//  menuImageOld = oObjIndexSetmenuImage(imgFocusOld);
//  menuImageOld.src = menuImageOld.name + "/" + menuImageOld.name + "b.gif";

// new front folder
//  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
  imgFocus = menuImageCn;
//  menuImage.src = menuImage.name + "/" + menuImage.name + "f.gif";

// load new page into frame
//  imgframe.src = menuImage.name + "/" + menuImage.name + ".htm";

//  document.frames.item.
//  img0.src = menuImage.name + "lr.gif";
//  img0text.src = menuImage.name + "text.txt";

  alert("ready to go");
  alert("menuImage.Name: " + menuImage.name);
  imgSelect = menuImageCn;
  alert("imgSelect: " + imgSelect);
  alert("ready to go");
//  document.parentWindow.parent.imgSelect = menuImageCn;
//  alert(document.parentWindow.parent);
//  document.parentWindow.tabframe.imgSelect = menuImageCn;
//  alert(document.parentWindow.tabframe);
//  alert("ready to go");
//  cookies!!!!!

}
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Layout
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Window Browser Gent
//
var browserType = "";
var browserVs = 0;
var browserVsMajor = 0;
var browserVsMinor = 0;
var browserLayoutCompatable = false;
//
// Browser Type Get
function fnBrowserGet()
{

// IE
browserType = window.navigator.appName;
browserVs = window.navigator.appVersion;
browserVsMajor = window.navigator.appVersion;
browserVsMinor = window.navigator.appMinorVersion;

}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Layout Next
function fnLayoutNext(layoutIndexPassed)
{
 	if (layoutIndexPassed > 0) {
	   layoutRefreshCn = layoutIndexPassed;
	} else {
      layoutRefreshCn += 1;
	}
	if (layoutRefreshCn > layoutIndexMax) { layoutRefreshCn = 1; }
    fnLayoutRefresh(layoutRefreshCn);
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Check Layout
function fnLayoutCheck(layoutPrefered)
{

  return;
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Layout Refresh
function fnLayoutRefresh(layoutIndexPassed)
{
 	if (layoutIndexPassed != layoutRefreshCnLast) {
        // Choose Standard Layout
    	layoutIndex = layoutIndexPassed;
        fnLayoutSelectByIndex(layoutIndex);
		layoutRefreshCnLast = layoutRefreshCn;
	}
}
//
// ------------------------------------------------------------------------------------- _//
// Diaglogs and Pop-ups
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Create all Elements used in Layout
function fnWindowPopupOpen() 
{
// Popup Window
var sConfig= 'left=100, top=0, height=500, width=400, menubar=0, scrollbars=0, status=0, toolbar=0, location=0';
var myWindow= window.open("http://myPopupWindow.html", "MyWindowName", sConfig);
}
//
// ------------------------------------------------------------------------------------- _//
// Elements
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// Create all Elements used in Layout
function fnElementObjectContainerCreate()
{
//---------------------------------------------------------------//
// Body Container References
//---------------------------------------------------------------//
elBody = fnElementGetRef(elBody, "BodyBox", "BodyBox");
elBodyMainContainer = fnElementGetRef(elBodyMainContainer, "BodyMainContainer", "BodyMainContainer");
// Body Center Area References
elBodyMainCenter = fnElementGetRef(elBodyMainCenter,"BodyMainCenter","BodyMainCenter");
// Body Left Area Copy
elBodyMainLeft = fnElementGetRef(elBodyMainLeft,"BodyMainLeft","BodyMainLeft");
// Body Right Area Copy
elBodyMainRight = fnElementGetRef(elBodyMainRight,"BodyMainRight","BodyMainRight");
//
elBodyMainCenterCenter = fnElementGetRef(elBodyMainCenterCenter,"BodyMainCenterCenter","BodyMainCenterCenter");
//
// elColumnType1 = fnElementGetRef(elColumnType1,"ColumnType1","ColumnType1"); 
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Create all Elements used in Layout
function fnElementObjectCreate()
{
//---------------------------------------------------------------//
// Body Container References
//---------------------------------------------------------------//
fnElementObjectContainerCreate();
//
//---------------------------------------------------------------//
// Banner References (Top Menu, Logo and Graphics)
//---------------------------------------------------------------//
elBodyBanner = fnElementGetRef(elBodyBanner, "BodyBanner", "BodyBanner");
elBodyBannerTop = fnElementGetRef(elBodyBannerTop, "BodyBannerTop", "BodyBannerTop");
elBodyBannerBottom = fnElementGetRef(elBodyBannerBottom, "BodyBannerBottom", "BodyBannerBottom");
//
//---------------------------------------------------------------//
// Body Center Area References
//---------------------------------------------------------------//
// elBodyMainCenter = fnElementGetRef(elBodyMainCenter,"BodyMainCenter","BodyMainCenter");
//
elBodyMainCenterTop = fnElementGetRef(elBodyMainCenterTop,"BodyMainCenterTop","BodyMainCenterTop");
elBodyMainCenterTopLeft = fnElementGetRef(elBodyMainCenterTopLeft,"BodyMainCenterTopLeft","BodyMainCenterTopLeft");
elBodyMainCenterTopRight = fnElementGetRef(elBodyMainCenterTopRight,"BodyMainCenterTopRight","BodyMainCenterTopRight");
//
elBodyMainCenterTopColBreak = fnElementGetRef(elBodyMainCenterTopColBreak,"BodyMainCenterTopColBreak","BodyMainCenterTopColBreak");
//
// elBodyMainCenterCenter = fnElementGetRef(elBodyMainCenterCenter,"BodyMainCenterCenter","BodyMainCenterCenter");
//
elBodyMainCenterBottom = fnElementGetRef(elBodyMainCenterBottom,"BodyMainCenterBottom","BodyMainCenterBottom");
//
//---------------------------------------------------------------//
// Body Left Area Copy
//---------------------------------------------------------------//
// elBodyMainLeft = fnElementGetRef(elBodyMainLeft,"BodyMainLeft","BodyMainLeft"); // createElement
// elBodyMainLeft = fnElementGetRef(elBodyMainLeft,"BodyMainLeft","BodyMainLeft");
elBodyMainLeftCopy = fnElementCopy(elBodyMainLeftCopy, elBodyMainLeftCopyFirst, elBody, "block");
elBodyMainLeftCurr = fnElementCopy(elBodyMainLeftCurr, elBodyMainLeftCurrFirst, elBodyMainLeft, "block");
elBodyMainLeftOrig = fnElementCopy(elBodyMainLeftOrig, elBodyMainLeftOrigFirst, elBodyMainLeft, "block");
//
if (false == true) {
elBodyMainLeftOuter = fnElementGetRefFromElement(elBodyMainLeftOuter, "BodyMainLeftOuter", "BodyMainLeftOuter", elBodyMainLeftCopy)
// elBodyMainLeftOuter = fnElementGetRef(elBodyMainLeftOuter,"BodyMainLeftOuter","BodyMainLeftOuter");
elBodyMainLeftInner = fnElementGetRefFromElement(elBodyMainLeftInner, "BodyMainLeftInner", "BodyMainLeftInner", elBodyMainLeftCopy)
// elBodyMainLeftInner = fnElementGetRef(elBodyMainLeftInner,"BodyMainLeftInner","BodyMainLeftInner");
//
elBodyMenuLayout1 = fnElementGetRefFromElement(elBodyMenuLayout1, "BodyMenuLayout1", "BodyMenuLayout1", elBodyMainLeftCopy)
// elBodyMenuLayout1 = fnElementGetRef(elBodyMenuLayout1,"BodyMenuLayout1","BodyMenuLayout1");
elMenuContainerLeft1 = fnElementGetRefFromElement(elMenuContainerLeft1, "MenuContainerLeft1", "MenuContainerLeft1", elBodyMainLeftCopy)
// elMenuContainerLeft1 = fnElementGetRef(elMenuContainerLeft1,"MenuContainerLeft1","MenuContainerLeft1");
// Left 1
elMenuLeft1 = fnElementGetRefFromElement(elMenuLeft1, "MenuLeft1", "MenuLeft1", elBodyMainLeftCopy)
// elMenuLeft1 = fnElementGetRef(elMenuLeft1,"MenuLeft1","MenuLeft1");
// elMenuLeft1 = fnElementGetRefFromElement(elMenuLeft1, elMenuLeft1.id, elMenuLeft1.name, elBodyMainLeft)
// var elMenuLeft1Save = fnElementGetRef(elMenuLeft1Save,"MenuLeft1Save","MenuLeft1Save");
// Left 2
elMenuContainerLeft2 = fnElementGetRefFromElement(elMenuContainerLeft2, "MenuContainerLeft2", "MenuContainerLeft2", elBodyMainLeftCopy)
// elMenuContainerLeft2 = fnElementGetRef(elMenuContainerLeft2,"MenuContainerLeft2","MenuContainerLeft2");
elMenuLeft2 = fnElementGetRefFromElement(elMenuLeft2, "MenuLeft2", "MenuLeft2", elBodyMainLeftCopy)
// elMenuLeft2 = fnElementGetRef(elMenuLeft2,"MenuLeft2","MenuLeft2");
// var elMenuLeft2Save = fnElementGetRef(elMenuLeft2Save,"MenuLeft2Save","MenuLeft2Save");
// Left 3
elMenuContainerLeft3 = fnElementGetRefFromElement(elMenuContainerLeft3, "MenuContainerLeft3", "MenuContainerLeft3", elBodyMainLeftCopy)
// elMenuContainerLeft3 = fnElementGetRef(elMenuContainerLeft3,"MenuContainerLeft3","MenuContainerLeft3");
elMenuLeft3 = fnElementGetRefFromElement(elMenuLeft3, "MenuLeft3", "MenuLeft3", elBodyMainLeftCopy)
// elMenuLeft3 = fnElementGetRef(elMenuLeft3,"MenuLeft3","MenuLeft3");
// var elMenuLeft3Save = fnElementGetRef(elMenuLeft3Save,"MenuLeft3Save","MenuLeft3Save");
}
//
//---------------------------------------------------------------//
// Body Right Area Copy
//---------------------------------------------------------------//
// elBodyMainRight = fnElementGetRef(elBodyMainRight,"BodyMainRight","BodyMainRight");
elBodyMainRightCopy = fnElementCopy(elBodyMainRightCopy, elBodyMainRightCopyFirst, elBody, "block");
elBodyMainRightCurr = fnElementCopy(elBodyMainRightCurr, elBodyMainRightCurrFirst, elBodyMainRight, "block");
elBodyMainRightOrig = fnElementCopy(elBodyMainRightOrig, elBodyMainRightOrigFirst, elBodyMainRight, "block");
//
if (false == true) {
elBodyMainRightOuter = fnElementGetRefFromElement(elBodyMainRightOuter, "BodyMainRightOuter", "BodyMainRightOuter", elBodyMainRightCopy)
// elBodyMainRightOuter = fnElementGetRef(elBodyMainRightOuter,"BodyMainRightOuter","BodyMainRightOuter");
elBodyMainRightInner = fnElementGetRefFromElement(elBodyMainRightInner, "BodyMainRightInner", "BodyMainRightInner", elBodyMainRightCopy)
// elBodyMainRightInner = fnElementGetRef(elBodyMainRightInner,"BodyMainRightInner","BodyMainRightInner");
//
elBodyMenuLayout2 = fnElementGetRef(elBodyMenuLayout2,"BodyMenuLayout2","BodyMenuLayout2");
//
elMenuContainerRight1 = fnElementGetRefFromElement(elMenuContainerRight1,"MenuContainerRight1","MenuContainerRight1", elBodyMainRightCopy);
// elMenuContainerRight1 = fnElementGetRef(elMenuContainerRight1,"MenuContainerRight1","MenuContainerRight1");
elMenuRight1 = fnElementGetRefFromElement(elMenuRight1, "elMenuRight1", "elMenuRight1", elBodyMainRightCopy);
// var elMenuRight1Save = fnElementGetRef(elMenuRight1Save,"MenuRight1Save","MenuRight1Save");
elMenuContainerRight2 = fnElementGetRefFromElement(elMenuContainerRight2,"MenuContainerRight2","MenuContainerRight2", elBodyMainRightCopy);
elMenuRight2 = fnElementGetRefFromElement(elMenuRight2,"MenuRight2","MenuRight2", elBodyMainRightCopy);
// var elMenuRight2Save = fnElementGetRef(elMenuRight2Save,"MenuRight2Save","MenuRight2Save");
elMenuContainerRight3 = fnElementGetRefFromElement(elMenuContainerRight3,"MenuContainerRight3","MenuContainerRight3", elBodyMainRightCopy);
elMenuRight3 = fnElementGetRefFromElement(elMenuRight3,"MenuRight3","MenuRight3", elBodyMainRightCopy);
// var elMenuRight3Save = fnElementGetRef(elMenuRight3Save,"MenuRight3Save","MenuRight3Save");
}//
//---------------------------------------------------------------//
// Body Far Right Area
//---------------------------------------------------------------//
elBodyMainRightFar = fnElementGetRef(elBodyMainRightFar,"BodyMainRightFar","BodyMainRightFar");
//
//---------------------------------------------------------------//
// Other...
//---------------------------------------------------------------//
if (false == true) {
// elBodyMainCenterTopColBreak
elBodyMainCenterTopColBreak = fnElementGetRef(elBodyMainCenterTopColBreak,"BodyMainCenterTopColBreak","BodyMainCenterTopColBreak");
//
elMenuLeft1ColBreak = fnElementGetRef(elMenuLeft1ColBreak, "MenuLeft1ColBreak", "MenuLeft1ColBreak");
elMenuLeft2ColBreak = fnElementGetRef(elMenuLeft2ColBreak, "MenuLeft2ColBreak", "MenuLeft2ColBreak");
elMenuLeft3ColBreak = fnElementGetRef(elMenuLeft3ColBreak, "MenuLeft3ColBreak", "MenuLeft3ColBreak");
elMenuRight1ColBreak = fnElementGetRef(elMenuRight1ColBreak, "MenuRight1ColBreak", "MenuRight1ColBreak");
elMenuRight2ColBreak = fnElementGetRef(elMenuRight2ColBreak, "MenuRight2ColBreak", "MenuRight2ColBreak");
elMenuRight3ColBreak = fnElementGetRef(elMenuRight3ColBreak, "MenuRight3ColBreak", "MenuRight3ColBreak");
}//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
	  //
	  javaLoadDelay = false;
	  // elBodyFirst = false;	  
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Element Get Pointer
function fnElementGetRef(elementObject, elementObjectId, elementObjectName) 
{
 			 if (false) {
            // browserIsTEST
            if (!elementObjectName.length) { elementObjectName = elementObjectId; }
            elementObject = window.document.all[elementObjectName];
        } else if (browserIsIE || browserIsFF) {
          	// browserIE or browserIsFF
      	 	elementObject = document.getElementById(elementObjectId);
        }
        return elementObject;
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Layout Menu Area Element Common Fields Set
function fnElementGetRefFromElement(elementObject, elementObjectId, elementObjectName, elementSourcePassed) 
{
// DOES THIS NEED TO BE COPIES.
// As written it results in pointers into the Source Document 
         // Dest = fnElementGetRefFromElement(Dest, "DestId", "DestName", Source); 
 			 if (false) {
            // browserIsTEST
            if (!elementObjectName.length) { elementObjectName = elementObjectId; }
            elementObject = window.document.all[elementObjectName];
        } else if (browserIsIE) {
          	// browserIE
            elementObject = elementSourcePassed.all[elementObjectId];
        } else if (browserIsFF) {
          	// browserIsFF
      	 	elementObject = elementSourcePassed.getElementById(elementObjectId);
        } else if (true) {
          	// browserIE or browserIsFF
      	 	elementObject = document.getElementById(elementObjectId);
        }
        return elementObject;
}
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Layout Menu Area Element Common Fields Set
function fnElementCopy(elementPassed, elementLayoutFirstPassed, elementSourcePassed, elementStyleDisplayPassed) 
{
    var elementIdCurr;
    var elementSourceIdCurr;
    if ("id" in elementSourcePassed) {
    elementSourceIdCurr = elementSourcePassed.id; } else {elementSourceIdCurr = ""; } 
    //
    //---------------------------------------------------------------//
    if (!elementPassed) {
        if ("id" in elementSourcePassed) {
        elementIdCurr = elementSourcePassed.id; } else {elementIdCurr = ""; } 
        //
        if (browserIsIE) { elementPassed = document.createElement(); } // X32 
        if (browserIsFF) { elementPassed = document.createElement(elementIdCurr); } // X32 
        if (false) { elementPassed = null; } // X32 
    } else {
        if ("id" in elementPassed) {
        elementIdCurr = elementPassed.id; } else {elementIdCurr = ""; } 
    }
    //
    //---------------------------------------------------------------//
    // Copy Source to Destination Element (Inner HTML, Events)
    if (elementPassed != null && elementSourcePassed != null) {
        if (elementLayoutFirstPassed) {
            if ("innerHTML" in elementPassed && "innerHTML" in elementSourcePassed) {
                //
                //---------------------------------------------------------------//
                // Copy HTML
                // elementPassed.outerHTML = elementSourcePassed.outerHTML;
                elementPassed.innerHTML = elementSourcePassed.innerHTML;
                // elementPassed = elementSourcePassed;
                // elementPassed = elementSourcePassed.cloneNode(true);
                //
                elementLayoutFirstPassed = false;
                //
                //---------------------------------------------------------------//
                // Element Events
                fnElementEventsCopy(elementPassed, elementSourcePassed, elementPassed.id, elementSourcePassed.id)
            }
        }
        // if (elementPassed.innerHTML == null || elementPassed.innerHTML.length == 0) {
            // elementPassed.innerHTML = elementSourcePassed.innerHTML;
        // }		
        elementPassed.style.display = elementStyleDisplayPassed;
    }
	return elementPassed;
}
//
// ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
////////////////////////////////////////////////
function fnElementFindInElement(elementObject, elementObjectId, elementObjectName, elementSourcePassed) 
{
     // Dest = fnElementGetRefFromElement(Dest, "DestId", "DestName", Source); 
     //
    var elementChildObject;
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    //
    for (elmCn = 1; elmCn <= elementSourcePassed.childNodes.length; elmCn++){
      elementChildObject = elementSourcePassed.childNodes[elmCn];
      if (elementChildObject) {
          if ("id" in elementChildObject) {
              if (elementChildObject.id.length && elementChildObject.id == elementObjectId.id) {
                  //
                  elementObject = elementChildObject;
                  return elementObject;
                  //
                  if (false) {
                       // browserIsTEST
                       // elementObject = window.document.all[elementObjectName];
                  } else if (browserIsIE) {
                       // browserIE
                       // elementObject = elementSourcePassed.all[elementObjectId];
                  } else if (browserIsIE || browserIsFF) {
                      // browserIsFF
                      // elementObject = document.getElementById(elementObjectId);
                  } else if (true) {
                      // browserIE or browserIsFF
                      // elementObject = document.getElementById(elementObjectId);
                  }              
                  //
                  //
              }
          }
      }
   }
   //   
   return elementObject;
}
//
// ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
////////////////////////////////////////////////
function fnElementEventsCopy(elementObject, elementSourceObject, elementObjectId, elementSourceObjectId) 
{
 		var elementChildObject;
		var elementSourceChildObject;
		//
		if (!elementObjectId.length) { elementObjectId = elementSourceObjectId; }
		//
		if (elementObjectId.length && elementSourceObjectId.length) { 
        //
        if (!elementObject) { return; }
        // if (!elementObject) { 
            // elementObject = fnElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        // if (elementObject.id != elementObjectId) {
            // elementObject = fnElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        //
        if (!elementSourceObject) {
            elementSourceObject = fnElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId); }
        if (elementSourceObject.id != elementSourceObjectId) {
            elementSourceObject = fnElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId); }
    } else {
        if (!elementObject) { return; }
        if (!elementSourceObject) { return; }
        //
        if (typeof(elementObject) != "element") { return; }
        if (typeof(elementSourceObject) != "element") {
             elementObject = document.createElement(); // X32 
             // return; 
        }
    }
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    // Copy mouse down, over and out events to elementObject.
    // Currently, SourceObject is not used.
    //
    // if (elementPassed.childNodes.length) 
    for (elmCn = 1; elmCn <= elementObject.childNodes.length; elmCn++){
       elementChildObject = elementObject.childNodes[elmCn];
       if (elementChildObject) {
           if ("id" in elementChildObject) {
               if (elementChildObject.id.length) {
          		elementSourceChildObject = document.getElementById(elementChildObject.id);
                   if (elementSourceChildObject) {
                      if (elementSourceChildObject.onmousedown) {
                                // elementChildObject.setAttribute("onmousedown", elementSourceChildObject.onmousedown , 0)
                           		elementChildObject.onmousedown = elementSourceChildObject.onmousedown; 
                                }
                      if (elementSourceChildObject.onmouseover) {
                                // elementChildObject.setAttribute("onmouseover", elementSourceChildObject.onmouseover , 0)
                           		elementChildObject.onmouseover = elementSourceChildObject.onmouseover; 
                                }
                      if (elementSourceChildObject.onmouseout) {
                                // elementChildObject.setAttribute("onmouseout", elementSourceChildObject.onmouseout , 0)
                           		elementChildObject.onmouseout = elementSourceChildObject.onmouseout; 
                                }
                   }
               }
           }
       }
    }
    /*--
     // if (elementPassed.childNodes.length) 
     for (elmCn = 1; elementSourceObject.childNodes.length; elmCn++){
    var elementSourceChildObject = elementSourceObject.childNodes[elmCn];
    elementChildObject = elementObject.getElementById(elementSourceChildObject.id);
    elementChildObject.Events["onmousedown"] = elementSourceChildObject.Events["onmousedown"];
    }
    // }
    --*/
    // }
		return elementObject;
}
//
// ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
////////////////////////////////////////////////
function fntElementBreakSet(elementPassed, elementIdPassed, elementLayoutFirstPassed, elementStyleDisplayPassed, elementStyleVisibilityPassed, elsementStyleClearPassed) 
{
        if (!elementPassed) {
            elementPassed = fnElementGetRef(elementPassed, elementIdPassed, elementIdPassed);
            // var elementPassed = elementPassed.childNodes[elementIdPassed];
            // var elementPassed = document.getElementById(elementIdPassed);
        }
	     //
        // Get Break Element from Parent
        var elementTarget = document.createElement();
        elementTarget = fnElementGetRefFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed);
        //
        // if (elementPassed.childNodes.length) {
        if (elementTarget) {
           if ("style" in elementTarget) {
                if ("display" in elementTarget.style) {
                    if (elementStyleDisplayPassed.length) { elementTarget.style.display = elementStyleDisplayPassed; } 
                } else { ErrorOccured(elementTarget, elementPassed, "Element Break Set, Style missing", errorElementWarn, true, false); }
                //
                if ("visibility" in elementTarget.style) {
                    if (elementStyleVisibilityPassed.length) { elementTarget.style.visibility = elementStyleVisibilityPassed; } 
                } else { ErrorOccured(elementTarget, elementPassed, "Element Break Set, Visibility missing", errorElementWarn, true, false); }
                //
                if ("clear" in elementTarget.style) {
                    if (elsementStyleClearPassed.length) { elementTarget.style.clear = elsementStyleClearPassed; } 
                } else { ErrorOccured(elementTarget, elementPassed, "Element Break Set, Clear missing", errorElementWarn, true, false); }
            }
        }
        elementLayoutFirstPassed = false;
	     // }
	return elementPassed;
}
//
// ------------------------------------------------------------------------------------- _//
// Element Position Get
////////////////////////////////////////////////
function fnElementPosGet(oObjPassed)
{
   oObjTop = 0;
   oObjLeft = 0;
   oObjWidth = 0;
   oObjHeight = 0;
   var currLeft = currTop = 0;
   //
   if (oObjPassed.offsetParent) {
          var oObjCurr = oObjPassed;
       	  do {
      	  // while (oObjPassed = oObjPassed.offsetParent) {
      	  	    currLeft += oObjCurr.offsetLeft;
      		    currTop += oObjCurr.offsetTop;
      	  // }
    	  } while (oObjCurr = oObjCurr.offsetParent);
    	  oObjTop = currTop;
    	  oObjLeft = currLeft;
          oObjWidth = oObjPassed.offsetWidth;
          oObjHeight = oObjPassed.offsetHeight;
   } 
   return [currTop, currLeft];
}
//
// ------------------------------------------------------------------------------------- _//
// Error Message Display
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Global Error Variables
////////////////////////////////////////////////
// Variables
var errorFatal = 3;
var errorSevere = 2;
var errorWarn = 1;
var errorDidNotOccur = 0;
//
var errorResultOnFail = errorDidNotOccur;
var errorMessage = "initializing";
//
var errorElementFatal;
var errorElementSevere;
var errorElementWarn;
var errorElementComment;
//
var errorLogFatal = "";
var errorLogSevere = "";
var errorLogWarn = "";
var errorLogComment = "";
//
// ------------------------------------------------------------------------------------- _//
// Error message build
////////////////////////////////////////////////
function ErrorOccured(errorElementPassed, errorElementSourcePassed, errorMsgPassed, errorSeverityPassed, errorDisplayTagPassed, errorDoAlert)
{
        var errorMessageFinal = "";
        var errorInnerHTML = "";
        var errorSourceInnerHTML = "";
        //
        if (errorDoAlert == null) { errorDoAlert = false; }
        //
        // Error Type
        switch (errorSeverityPassed) {
            case errorElementFatal:
                errorMessageFinal += "Fatal";
                break;
            case errorElementSevere:
                errorMessageFinal += "Severe";
                break;
            case errorElementWarn:
                errorMessageFinal += "Warning";
                break;
            case errorElementComment:
            default:
                errorMessageFinal += "(Comment) No";
                break;
        }
        //
        errorMessageFinal += " Error" 
        //
        if (!errorDisplayTagPassed) {
            // don't know what to do here...
        } else {
            //
            if (elementPassed) {
               errorMessageFinal += ", Target tag";
               if ("id" in elementPassed) {
                    errorMessageFinal += " (" + elementPassed.id + ")";
               } else if ("name" in elementPassed) {
                    errorMessageFinal += " (" + elementPassed.name + ")";
               }
               if ("nodeName" in elementPassed) {
                    errorMessageFinal += ", for tag type (" + elementPassed.nodeName + ")";
               }
               if ("innerHTML" in elementPassed) {
                    errorInnerHTML += "Target HTML: " + elementPassed.innerHTML;
               }
            } else {
                errorMessageFinal += ". No target tag";
            }
            //
            if (errorElementSourcePassed) {
               errorMessageFinal += ". <br />Source tag";
               if ("id" in errorElementSourcePassed) {
                    errorMessageFinal += " (" + errorElementSourcePassed.id + ")";
               } else if ("name" in errorElementSourcePassed) {
                    errorMessageFinal += " (" + errorElementSourcePassed.name + ")";
               }
               if ("nodeName" in errorElementSourcePassed) {
                    errorMessageFinal += ", for tag type (" + errorElementSourcePassed.nodeName + ")";
               }
               if ("innerHTML" in errorElementSourcePassed) {
                    errorInnerHTML += "Target HTML: " + errorElementSourcePassed.innerHTML;
               }
            } else {
                errorMessageFinal += ". No source tag";
            }
            //
        }
        //
        // Add message to appropriate log
        // Error Type
        switch (errorSeverityPassed) {
            case errorElementFatal:
                errorLogFatal += errorMessageFinal;
                break;
            case errorElementSevere:
                errorMessageSevere += errorMessageFinal;
                break;
            case errorElementWarn:
                errorMessageWarn += errorMessageFinal;
                break;
            case errorElementComment:
            default:
                errorMessageComment += errorMessageFinal;
                break;
        }
        //
}
//
// ------------------------------------------------------------------------------------- _//
// Error Message Display
////////////////////////////////////////////////
function ErrorOccured(errorElementPassed, errorElementSourcePassed, errorMsgPassed, errorSeverityPassed, errorDisplayTagPassed, errorDoAlert)
{
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
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// Body Layout Management (Combinations)
////////////////////////////////////////////////
//
// Body Layout Managment
// STANDARD FUNCTIONS
// GLOBAL / COMMON
//
///////////////////////////////////////////////
// Optoin Toggles: (buttons not implemented)
// 	 		 Hidden Banner
//			 Hidden Menu1
//			 Hidden Menu2
//			 Hidden Menu 1 & 2
//			 Hidden All
//
///////////////////////////////////////////////
//
//
// ------------------------------------------------------------------------------------- _//
// Global Layout Variables
////////////////////////////////////////////////
// Variables
var layoutWidth;
var layoutHeight;
//
var layoutMenuHeightMax = 0;
//
var layoutZindex = 20;
//
var elBodyMainCenterTopClass = "";
//
// ------------------------------------------------------------------------------------- _//
// Body Layout Selection
////////////////////////////////////////////////
function fnLayoutSelectByIndex(layoutIndexPassed) {
//
// Layouts:
// var layoutStandard = 1;
// var layoutReadingMode = 2;
// var layoutWindowed = 3;
// var layoutReadingModeLeft = 4;
//
  // alert("ready to go");
  //
  // Pointers:
  layoutIndex = layoutIndexPassed;
  layoutZindex = 20;
  //
  // Window Width
  fnWindowClientWidth();
  //  
  //
  // layoutWidth -= 20;
  // layoutHeight -= 20;
  //
  //---------------------------------------------------------------//
  // Load Element for first pass
  //---------------------------------------------------------------//
  if (elBodyFirst) {
        //---------------------------------------------------------------//
        //              Body Element Creation
        if (javaLoadFirst) {
            // Initialize and save
            fnElementObjectCreate();
            //
        }
        //---------------------------------------------------------------//
        //              Body Main Container (contains Left Center and Right
        if (!elBodyMainContainer) { elBodyMainContainer = document.getElementById("BodyMainContainer"); }
        // Body Container
        // elBodyMainContainer.style.posWidth = layoutWidth;
        // elBodyMainContainer.style.width = elBodyMainContainer.style.posWidth; 
        // elBodyMainContainer.style.height = " 0em"; 
        //---------------------------------------------------------------//
        //			    Menu at Left
	  	// elBodyMainLeftOrig.innerHTML = elBodyMainLeft.innerHTML; 
        elBodyMainLeftOrig = fnElementCopy(elBodyMainLeftOrig, elBodyMainLeftOrigFirst, elBodyMainLeft, "none");
		    elBodyMainLeftOrigFirst = false;
        //---------------------------------------------------------------//
        //			    Menu at Right
        // elBodyMainLeftOrig.innerHTML = elBodyMainRight.innerHTML; 
        elBodyMainRightOrig = fnElementCopy(elBodyMainRightOrig, elBodyMainRightOrigFirst, elBodyMainRight, "none");
        elBodyMainRightOrigFirst = false;
        //---------------------------------------------------------------//
        // 	 		 Banner at Center Bottom
        elBodyBanner = fnElementGetRefFromElement(elBodyBanner, "BodyBanner", "BodyBanner", elBodyMainCenterTop);
        elBodyBannerTop = fnElementGetRefFromElement(elBodyBannerTop, "BodyBannerTop", "BodyBannerTop", elBodyMainCenterTop);
        elBodyBannerBottom = fnElementGetRefFromElement(elBodyBannerBottom, "BodyBannerBottom", "BodyBannerBottom", elBodyMainCenterBottom);
        elBodyBannerBottom = fnElementCopy(elBodyBannerBottom, elBodyBannerBottomFirst, elBodyBanner, "block");
        elBodyBannerBottomFirst = false;
        //
        //---------------------------------------------------------------//
        //          BodyMain Center Center ColBreak
          elBodyMainCenterTopLeft = fntElementBreakSet(elBodyMainCenterCenter, "BodyMainCenterCenterColBreak", elementLayoutFirstDummy = true, "block", "visible", "both")
        //
  }
  //
  //
//---------------------------------------------------------------//
//---------------------------------------------------------------//
      switch(layoutIndexPassed) {
//---------------------------------------------------------------//
//---------------------------------------------------------------//
///////////////////////////////////////////////
// 1 Standard
///////////////////////////////////////////////
//---------------------------------------------------------------//
//---------------------------------------------------------------//
          case layoutStandard: 
      //---------------------------------------------------------------//
      // Enclose Box
      if (elBodyMainCenterTopClass.length) { 
            elBodyMainCenterTop.className = elBodyMainCenterTopClass; 
      }
      //---------------------------------------------------------------//
      // Final adjustments to Center Top
      var boxHeight = 0;
      //---------------------------------------------------------------//
      // elBodyViewToggle View Toggle and Message Area
      var elBodyViewToggle = fnElementGetRefFromElement(elBodyViewToggle, "BodyViewToggleCenter", "BodyViewToggleCenter", elBodyMainCenterTop); 
      boxHeight += elBodyViewToggle.scrollHeight;
      // Banner Should be zero, don't use..,
        elBodyBannerTop.style.display = "block";
      boxHeight += elBodyBannerTop.scrollHeight;
      //
      elBodyMainCenterTopColBreak = fnElementGetRefFromElement(elBodyMainCenterTopColBreak, "BodyMainCenterTopColBreak", "BodyMainCenterTopColBreak", elBodyMainCenterTop);
      boxHeight += elBodyMainCenterTopColBreak.scrollHeight;
      //
      // BodyViewToggle + Banner + Left/Right
      elBodyMainCenterTop.style.posHeight = boxHeight;
//
//---------------------------------------------------------------//
//			 Menu1 at Left
      // Center Top Left Area Columns
      // elBodyMainLeft.style.position = "absolute"; 
	  // elBodyMainLeft.style.left = "0%";
	  elBodyMainLeft.style.width = "20%";   
      // elBodyMainLeft.style.left = 0 * layoutWidth; 
      // elBodyMainLeft.style.posWidth = 0.20 * layoutWidth; 
//
//---------------------------------------------------------------//
//			 Body Center "BodyMainCenter"
      // Break between center top and center center
      // elBodyMainCenter.style.position = "absolute"; 
      // elBodyMainCenter.style.top = "0%";	  
      elBodyMainCenter.style.left = "20%"; // 0.20 * layoutWidth + 3; 
      elBodyMainCenter.style.width = "60%"; //0.60 * layoutWidth - 6; 
      // elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth; 
      // elBodyMainCenter.style.maxWidth = elBodyMainCenter.style.posWidth; 
      elBodyMainCenter.style.height = "auto"; 
      //
      layoutZindex += 1;
      elBodyMainCenter.style.zIndex = layoutZindex; 
      //
	   elBodyMainCenterCenter.style.top = 0;	  
//
//---------------------------------------------------------------//
//			 Menu2 at Right
        // Center Top Right Area Columns
        // elBodyMainRight.style.position = "absolute"; 
        // elBodyMainRight.style.posLeft = 0.80 * layoutWidth; 
        // elBodyMainRight.style.posWidth = 0.20 * layoutWidth;
		elBodyMainRight.style.left = "80%";
		elBodyMainRight.style.width = "20%";   
		    // 
//
//---------------------------------------------------------------//
// 	 		 Banner at Top "BodyBanner"
      //
//
//---------------------------------------------------------------//
// 	 		 Final adjustments
      elBodyMainContainer.style.posHeight = layoutHeight; 
      if (elBodyMainContainer.style.posHeight < elBodyMainLeft.clientHeight) {
      	 elBodyMainContainer.style.posHeight = elBodyMainLeft.clientHeight;
      }
      if (elBodyMainContainer.style.posHeight < elBodyMainCenter.clientHeight) {
      	 elBodyMainContainer.style.posHeight = elBodyMainCenter.clientHeight;
      }
      if (elBodyMainContainer.style.posHeight < elBodyMainRight.clientHeight) {
      	 elBodyMainContainer.style.posHeight = elBodyMainRight.clientHeight;
      }
      //
      //---------------------------------------------------------------//
      // Area Displays
      elBodyBanner.style.display = "block";
      elBodyBannerBottom.style.display = "none";
      elBodyBannerTop.style.display = "block";
      
      elBodyMainLeft.style.display = "block";
      elBodyMainCenter.style.display = "block";
      elBodyMainRight.style.display = "block";
      // elBodyMainRightFar.style.display = "none";

      elBodyMainCenterTop.style.display = "block";
      elBodyMainCenterTopLeft.style.display = "none";
      elBodyMainCenterTopRight.style.display = "none";
      
	  elBodyMainCenterCenter.style.display = "block";
	  
	  elBodyMainCenterBottom.style.display = "none";
      //---------------------------------------------------------------//
	  //
	  layoutStandardFirst = false;
      //
      break;
//---------------------------------------------------------------//
//---------------------------------------------------------------//
///////////////////////////////////////////////
// 2 Reading Mode Hide
///////////////////////////////////////////////
//---------------------------------------------------------------//
//---------------------------------------------------------------//
          case layoutReadingMode:
// 
//---------------------------------------------------------------//
//			 Body Center
      // Break between center top and center center
	   // elBodyMainCenterTopColBreak.style.display = "none";
      //
      elBodyMainCenter.style.left = "0%";	  
      elBodyMainCenter.style.top = "0%";	  
      elBodyMainCenter.style.width = "100%"; 
	  /*--
      elBodyMainCenter.style.left = layoutWidth; 
      elBodyMainCenter.style.posWidth = layoutWidth;
	  --*/ 
      // elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth; 
      // elBodyMainCenter.style.maxWidth = elBodyMainCenter.style.posWidth; 
      elBodyMainCenter.style.height = "auto"; 
// 
//---------------------------------------------------------------//
//			 Hidden Menu1 at Left
      // Center Top Left Area Columns
// 
//---------------------------------------------------------------//
//			 Hidden Menu2 at Right
      // Center Top Right Area Columns
      //
// 
//---------------------------------------------------------------//
// 	 		 Hidden Banner at Bottom
      if (!layoutReadingModeFirst) { 
         // elBodyBannerBottom.innerHTML = elBodyBanner.innerHTML; 
         elBodyBannerBottom = fnElementCopy(elBodyBannerBottom, elBodyBannerBottomFirst, elBodyBanner, "block");
		     elBodyBannerBottomFirst = false;
      }
      //
      //
      //---------------------------------------------------------------//
      // Area Displays
      elBodyBanner.style.display = "block";
      elBodyBannerBottom.style.display = "block";
      elBodyBannerTop.style.display = "none";
      
      elBodyMainLeft.style.display = "none";
      elBodyMainCenter.style.display = "block";
      elBodyMainRight.style.display = "none";
      // elBodyMainRightFar.style.display = "none";

      elBodyMainCenterTop.style.display = "block";
      elBodyMainCenterTopLeft.style.display = "none";
      elBodyMainCenterTopRight.style.display = "none";
      
	  elBodyMainCenterCenter.style.display = "block";
	  
	  elBodyMainCenterBottom.style.display = "block";
      //---------------------------------------------------------------//
	  //
	  layoutReadingModeFirst = false;
      //
      		 break;
//---------------------------------------------------------------//
//---------------------------------------------------------------//
///////////////////////////////////////////////
// 3 Windowed
///////////////////////////////////////////////
//---------------------------------------------------------------//
//---------------------------------------------------------------//
          case layoutWindowed: 
//
//---------------------------------------------------------------//
//			 Menu1 at Center Top Left
	  if (layoutWindowedFirst) {
    	  //
          var TopLeftWidth = 0;
          var TopLeftWidthInner = 0;
          // BodyMenuLayout
          //---------------------------------------------------------------//
          // elBodyMenuLayout1 BodyMenuLayout
          if (false == true) {
              if (!elelBodyMenuLayout1 && elBodyMainCenterTopLeft) {
                    elBodyMenuLayout1 = fnElementGetRefFromElement(elBodyMenuLayout1, "BodyMenuLayout1", "BodyMenuLayout1", elBodyMainCenterTopLeft);
              }       
              //
              TopLeftWidth = elBodyMenuLayout1.style.posWidth;
              if (TopLeftWidth == 0) { TopLeftWidth = layoutWidth / 2; }
              TopLeftWidthInner = TopLeftWidth;
          }
    	  //
    	  // Process Left Column
    	  //
          // elBodyMainLeft.innerHTML = elBodyMainLeftOrig.innerHTML 
          elBodyMainLeftCopy = fnElementCopy(elBodyMainLeft, elBodyMainLeftFirst, elBodyMainLeftOrig, "block");
		      elBodyMainLeftFirst = false;
		      //
          // elBodyMainRight.innerHTML = elBodyMainLeftOrig.innerHTML 
          elBodyMainRightCopy = fnElementCopy(elBodyMainRight, elBodyMainRightFirst, elBodyMainRightOrig, "block");
		      elBodyMainRightFirst = false;
    	  //	  
	  }
//
//---------------------------------------------------------------//
// Left Menu Column
      // Center Top Left Area Columns
      //
      //---------------------------------------------------------------//
      // Enclose Box
      if (!elBodyMainCenterTopClass.length) { elBodyMainCenterTopClass = elBodyMainCenterTop.className; }
      elBodyMainCenterTop.className = elBodyMainCenterTop.className + " CalloutBox CalloutBorderFull";
      //
	   if (layoutWindowedFirst) {
          //---------------------------------------------------------------//
          // Set Center Top Left Element
          // MainCenterTopLeft is a Reference pointer into the page
          // that has MainLeft HTML copied into it.
          elBodyMainCenterTopLeft = fnElementGetRef(elBodyMainCenterTopLeft,"BodyMainCenterTopLeft","BodyMainCenterTopLeft");
          elBodyMainCenterTopLeft = fnElementCopy(elBodyMainCenterTopLeft, elBodyMainCenterTopLeftFirst, elBodyMainLeftOrig, "block");
		      elBodyMainCenterTopLeftFirst = false;
          //---------------------------------------------------------------//
          // Enclose Box
          elBodyMainCenterTopLeft.className = elBodyMainCenterTopLeft.className + " CalloutBorderFull";
          //---------------------------------------------------------------//
          // Left Menu Container
          // elBodyMainCenterTopLeft.style.posLeft = 0;
          //                     elBodyMainCenterTopLeft.style.posWidth = TopLeftWidth - 10;
          // elBodyMainCenterTopLeft.style.posHeight = "100%";
          // elBodyMainCenterTopLeft.style.posHeight = 450;
          // elBodyMainCenterTopLeft.style.maxHeight = 450;
          //---------------------------------------------------------------//
          // Left Body Column (BodyMainLeft)
          // elMenuMainLeft = fnElementGetRef(elMenuMainLeft,"MenuMainLeft","MenuMainLeft");
          // Do Not Alter... elMenuMainLeft.style.width = "97%";
          //---------------------------------------------------------------//
          // elBodyMenuLayout1 BodyMenuLayout
          elBodyMenuLayout1 = fnElementGetRefFromElement(elBodyMenuLayout1, "BodyMenuLayout1", "BodyMenuLayout1", elBodyMainCenterTopLeft); 
          // elBodyMenuLayout1.style.width = "100%";
          //---------------------------------------------------------------//
          // Width of Layout area (previous?)
          // TopLeftWidth = elBodyMenuLayout1.style.posWidth;
          // if (TopLeftWidth == 0) { TopLeftWidth = layoutWidth / 2; }
          // TopLeftWidthInner = TopLeftWidth;
          //---------------------------------------------------------------//
		      // Left Outer and Inner Decorative Divs
          elBodyMainLeftOuter = fnElementGetRefFromElement(elBodyMainLeftOuter, "BodyMainLeftOuter", "BodyMainLeftOuter", elBodyMainCenterTopLeft); 
          elBodyMainLeftOuter.style.paddingLeft = "3%";
          elBodyMainLeftOuter.style.width = "97%";
          //
          elBodyMainLeftInner = fnElementGetRefFromElement(elBodyMainLeftInner, "BodyMainLeftInner", "BodyMainLeftInner", elBodyMainCenterTopLeft);
          elBodyMainLeftInner.style.paddingRight = "3%";
          elBodyMainLeftInner.style.width = "97%";
          elBodyMainLeftInner.style.paddingTop = 10;
          //---------------------------------------------------------------//
          // Left elMenuLeft1, 2, 3
          elMenuLeft1 = fnElementGetRefFromElement(elMenuLeft1, "MenuLeft1", "MenuLeft1", elBodyMainCenterTopLeft);
          elMenuLeft2 = fnElementGetRefFromElement(elMenuLeft2, "MenuLeft2", "MenuLeft2", elBodyMainCenterTopLeft);
          elMenuLeft3 = fnElementGetRefFromElement(elMenuLeft3, "MenuLeft3", "MenuLeft3", elBodyMainCenterTopLeft);
          //---------------------------------------------------------------//
		      // elMenuLeft1
          elMenuLeft1.style.posLeft = "-7%";
          elMenuLeft1.style.maxWidth = "33%";
          elMenuLeft1.style.styleFloat = "left";
          if (layoutMenuHeightMax < elMenuLeft1.style.height) { layoutMenuHeightMax = elMenuLeft1.style.height; } 
          //---------------------------------------------------------------//
		      // elMenuLeft2
          elMenuLeft2.style.maxWidth = "30%";
          elMenuLeft2.style.marginLeft = "3%";
          elMenuLeft2.style.styleFloat = "left";
          if (layoutMenuHeightMax < elMenuLeft2.style.height) { layoutMenuHeightMax = elMenuLeft2.style.height; } 
          //---------------------------------------------------------------//
		      // elMenuLeft3
          elMenuLeft3.style.maxWidth = "30%";
          elMenuLeft3.style.marginLeft = "3%";
          elMenuLeft3.style.styleFloat = "left";
          if (layoutMenuHeightMax < elMenuLeft3.style.height) { layoutMenuHeightMax = elMenuLeft3.style.height; } 
          //---------------------------------------------------------------//
          // elDivC21 Callout Paragraph Contents
          if (true == false) {
              var elDivC21 = fnElementGetRefFromElement(elDivC21, "DivC21", "DivC21", elBodyMainCenterTopLeft); 
              elDivC21.style.display = "none";
          } 
          //---------------------------------------------------------------//
          // elDivC22 Callout Paragraph Contents
          var elDivC22 = fnElementGetRefFromElement(elDivC22, "DivC22", "DivC22", elBodyMainCenterTopLeft); 
          elDivC22.style.display = "none"; 
          //---------------------------------------------------------------//
          // Left Body Text Alignment Breaks
          var elementLayoutFirstDummy;
          elBodyMainCenterTopLeft = fntElementBreakSet(elBodyMainCenterTopLeft, "MenuLeft1ColBreak", elementLayoutFirstDummy = true, "none", "hidden", "none")
          elBodyMainCenterTopLeft = fntElementBreakSet(elBodyMainCenterTopLeft, "MenuLeft2ColBreak", elementLayoutFirstDummy = true, "none", "hidden", "none")
          elBodyMainCenterTopLeft = fntElementBreakSet(elBodyMainCenterTopLeft, "MenuLeft3ColBreak", elementLayoutFirstDummy = true, "none", "hidden", "none") 
    	  //
	  }
//
//---------------------------------------------------------------//
//			 Menu2 at Center Top Right
      // Right Menu Column
      // Center Top Right Area Columns
      //
	  if (layoutWindowedFirst) {
          // Right Body Text Alignment Breaks
          // Set (Copy To) Top Left Element
          elBodyMainCenterTopRight = fnElementGetRef(elBodyMainCenterTopRight,"BodyMainCenterTopRight","BodyMainCenterTopRight");
          elBodyMainCenterTopRight = fnElementCopy(elBodyMainCenterTopRight, elBodyMainCenterTopRightFirst, elBodyMainRightOrig, "block");
		      // elBodyMainCenterTopRightFirst = false;
		      //
          //---------------------------------------------------------------//
          // Enclose Box
          elBodyMainCenterTopRight.className = elBodyMainCenterTopRight.className + " CalloutBorderFull";
          //---------------------------------------------------------------//
          // elBodyMenuLayout2 BodyMenuLayout
          elBodyMenuLayout2 = fnElementGetRefFromElement(elBodyMenuLayout1, "BodyMenuLayout2", "BodyMenuLayout2", elBodyMainCenterTopRight); 
          //---------------------------------------------------------------//
		      // Right Outer and Inner Decorative Divs
          elBodyMainRightOuter = fnElementGetRefFromElement(elBodyMainLeftOuter, "BodyMainRightOuter", "BodyMainRightOuter", elBodyMainCenterTopRight); 
          elBodyMainLeftOuter.style.paddingLeft = "3%";
          elBodyMainLeftOuter.style.width = "97%";
          //
          elBodyMainRightInner = fnElementGetRefFromElement(elBodyMainRightInner, "BodyMainRightInner", "BodyMainRightInner", elBodyMainCenterTopRight);
          elBodyMainRightInner.style.paddingRight = "3%";
          elBodyMainRightInner.style.width = "97%";
          elBodyMainRightInner.style.paddingTop = 10;
          //---------------------------------------------------------------//
          // Right elMenuRight1, 2, 3
          elMenuRight1 = fnElementGetRefFromElement(elMenuRight1, "MenuRight1", "MenuRight1", elBodyMainCenterTopRight);
          elMenuRight2 = fnElementGetRefFromElement(elMenuRight2, "MenuRight2", "MenuRight2", elBodyMainCenterTopRight);
          elMenuRight3 = fnElementGetRefFromElement(elMenuRight3, "MenuRight3", "MenuRight3", elBodyMainCenterTopRight);
          //---------------------------------------------------------------//
		      // elMenuRight1
          elMenuRight1.style.posLeft = "-7%";
          elMenuRight1.style.maxWidth = "33%";
          elMenuRight1.style.styleFloat = "left";
          if (layoutMenuHeightMax < elMenuRight1.style.height) { layoutMenuHeightMax = elMenuRight1.style.height; } 
          //---------------------------------------------------------------//
		      // elMenuRight2
          elMenuRight2.style.maxWidth = "30%";
          elMenuRight2.style.marginLeft = "3%";
          elMenuRight2.style.styleFloat = "left";
          if (layoutMenuHeightMax < elMenuRight2.style.height) { layoutMenuHeightMax = elMenuRight2.style.height; } 
          //---------------------------------------------------------------//
		      // elMenuLeft3
          elMenuRight3.style.maxWidth = "30%";
          elMenuRight3.style.marginLeft = "3%";
          elMenuRight3.style.styleFloat = "left";
          if (layoutMenuHeightMax < elMenuRight3.style.height) { layoutMenuHeightMax = elMenuRight3.style.height; } 
          //---------------------------------------------------------------//
          // Column and Float Breaks and Clear
          var elementLayoutFirstDummy;
          elBodyMainCenterTopRight = fntElementBreakSet(elBodyMainCenterTopRight, "MenuRight1ColBreak", elementLayoutFirstDummy = true, "none", "hidden", "none")
          elBodyMainCenterTopRight = fntElementBreakSet(elBodyMainCenterTopRight, "MenuRight2ColBreak", elementLayoutFirstDummy = true, "none", "hidden", "none")
          elBodyMainCenterTopRight = fntElementBreakSet(elBodyMainCenterTopRight, "MenuRight3ColBreak", elementLayoutFirstDummy = true, "none", "hidden", "none") 
          //
	  }
    //---------------------------------------------------------------//
    // Final adjustments to Center Top
    var boxHeight = 0;
    //---------------------------------------------------------------//
    // elBodyViewToggle View Toggle and Message Area
    var elBodyViewToggle = fnElementGetRefFromElement(elBodyViewToggle, "BodyViewToggleCenter", "BodyViewToggleCenter", elBodyMainCenterTop); 
    boxHeight += elBodyViewToggle.scrollHeight;
    // Banner Should be zero, don't use..,
    boxHeight += elBodyBannerTop.scrollHeight;
    //
    if (elBodyMenuLayout2.scrollHeight > elBodyMenuLayout1.scrollHeight) { 
          elBodyMenuLayout1.style.posHeight = elBodyMenuLayout2.scrollHeight; 
    } else {
          elBodyMenuLayout2.style.posHeight = elBodyMenuLayout1.scrollHeight; 
    }
    boxHeight += elBodyMenuLayout1.style.posHeight;
    //
    elBodyMainCenterTopColBreak = fnElementGetRefFromElement(elBodyMainCenterTopColBreak, "BodyMainCenterTopColBreak", "BodyMainCenterTopColBreak", elBodyMainCenterTop);
    boxHeight += elBodyMainCenterTopColBreak.scrollHeight;
    //
    // BodyViewToggle + Banner + Left/Right
    elBodyMainCenterTop.style.posHeight = boxHeight + 40;
    elBodyMainCenterTopLeft.style.posHeight = elBodyMenuLayout1.style.posHeight + 10;  
    elBodyMainCenterTopRight.style.posHeight = elBodyMenuLayout1.style.posHeight + 10;  
    //
//
//---------------------------------------------------------------//
//			 Body Center Columns
	  //
	  if (layoutWindowedFirst) {
    	  //
		      // BodyMainCenter
          // elBodyMainCenter.style.top = " 0em";	  
          // elBodyMainCenter.style.left = 0 * layoutWidth; 
          // elBodyMainCenter.style.posWidth = layoutWidth; 
          // elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth; 
          elBodyMainCenter.style.width = "100%"; 
          // elBodyMainCenter.style.maxWidth = elBodyMainCenter.style.posWidth; 
          // elBodyMainCenter.style.height = "auto"; 
          //
		      // Center Center
          // elBodyMainCenterCenter.style.top = elBodyMainCenterTop.scrollHeight + 10;	  
          // elBodyMainCenterCenter.style.top = elBodyMainCenterTop.style.bottom;	  
          // elBodyMainCenter.style.posTop = " 0em";
	  }
//
//---------------------------------------------------------------//
// 	 		 Final adjustments
      /*--
      elBodyMainContainer.style.posHeight = layoutHeight; 
      if (elBodyMainContainer.style.posHeight < elBodyMainLeft.clientHeight) {
      	 elBodyMainContainer.style.posHeight = elBodyMainLeft.clientHeight;
      }
      if (elBodyMainContainer.style.posHeight < elBodyMainCenter.clientHeight) {
      	 elBodyMainContainer.style.posHeight = elBodyMainCenter.clientHeight;
      }
      if (elBodyMainContainer.style.posHeight < elBodyMainRight.clientHeight) {
      	 elBodyMainContainer.style.posHeight = elBodyMainRight.clientHeight;
      }
	  --*/
      //---------------------------------------------------------------//
      // Area Displays
      elBodyBanner.style.display = "block";
      elBodyBannerBottom.style.display = "block";
      elBodyBannerTop.style.display = "none";
      
      elBodyMainLeft.style.display = "none"; // none
      elBodyMainCenter.style.display = "block";
      elBodyMainRight.style.display = "none"; // none
      // elBodyMainRightFar.style.display = "none";

      elBodyMainCenterTop.style.display = "block";
      elBodyMainCenterTopLeft.style.display = "block";
      elBodyMainCenterTopRight.style.display = "block";
      
	   elBodyMainCenterCenter.style.display = "block";
	  
	  elBodyMainCenterBottom.style.display = "block";
      //---------------------------------------------------------------//
      //
	  layoutWindowedFirst = false;
      		 break;
//---------------------------------------------------------------//
//---------------------------------------------------------------//
///////////////////////////////////////////////
// 4 Reading Mode Show
///////////////////////////////////////////////
//---------------------------------------------------------------//
//---------------------------------------------------------------//
          case layoutReadingModeLeft:
//---------------------------------------------------------------//
//			 Body Center (Top Left)
      //
      // elBodyMainCenter.style.position = "absolute"; 
      elBodyMainCenter.style.top = "0%";	  
      elBodyMainCenter.style.left = 3; 
      elBodyMainCenter.style.posWidth = layoutWidth - 6; 
      elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth; 
      // elBodyMainCenter.style.maxWidth = elBodyMainCenter.style.posWidth; 
      elBodyMainCenter.style.height = "auto"; 
	  // elBodyMainCenterCenter.style.top = "auto"
//
//---------------------------------------------------------------//
//			 All Other at Right
// xx
//
//---------------------------------------------------------------//
//			 Menu1 at Top Left
// xx
//
//---------------------------------------------------------------//
//			 	 Menu2 at Top Right
// xx
//
//---------------------------------------------------------------//
// 	 		 	 Banner at Bottom
// xx

	  
      //---------------------------------------------------------------//
      // Area Displays
      elBodyBanner.style.display = "block";
      elBodyBannerBottom.style.display = "none";
      elBodyBannerTop.style.display = "none";
      
      elBodyMainLeft.style.display = "none";
      elBodyMainCenter.style.display = "block";
      elBodyMainRight.style.display = "none";
      // elBodyMainRightFar.style.display = "none";

      elBodyMainCenterTop.style.display = "block";
      elBodyMainCenterTopLeft.style.display = "none";
      elBodyMainCenterTopRight.style.display = "none";
      
	  elBodyMainCenterCenter.style.display = "block";
	  
	  elBodyMainCenterBottom.style.display = "none";
      //---------------------------------------------------------------//
      //
	  layoutReadingModeLeftFirst = false;
      		 break;
//---------------------------------------------------------------//
//---------------------------------------------------------------//
///////////////////////////////////////////////
// case 999:
///////////////////////////////////////////////
//---------------------------------------------------------------//
//---------------------------------------------------------------//
          case 999:
      // Break between center top and center center
	  elBodyMainCenterTopColBreak.style.display = "none";
	  //
//
//---------------------------------------------------------------//
//			 All Other at Right
// xx
//
//---------------------------------------------------------------//
//			 	 Menu1 at Top Left
// xx
      //---------------------------------------------------------------//
      // Left Body Text Alignment Breaks
	  elMenuLeft1ColBreak = fnElementGetRef(elMenuLeft1ColBreak, "MenuLeft1ColBreak", "MenuLeft1ColBreak");
      elMenuLeft1ColBreak.style.display = "none";
	  elMenuLeft2ColBreak = fnElementGetRef(elMenuLeft2ColBreak, "MenuLeft2ColBreak", "MenuLeft2ColBreak");
      elMenuLeft2ColBreak.style.display = "none";
	  elMenuLeft3ColBreak = fnElementGetRef(elMenuLeft3ColBreak, "MenuLeft3ColBreak", "MenuLeft3ColBreak");
      elMenuLeft3ColBreak.style.display = "none";
//
//---------------------------------------------------------------//
//			 	 Menu2 at Top Right
// xx
      //---------------------------------------------------------------//
      // Right Body Text Alignment Breaks
	  elMenuRight1ColBreak = fnElementGetRef(elMenuRight1ColBreak, "MenuRight1ColBreak", "MenuRight1ColBreak");
      elMenuRight1ColBreak.style.display = "none";
	  elMenuRight2ColBreak = fnElementGetRef(elMenuRight2ColBreak, "MenuRight2ColBreak", "MenuRight2ColBreak");
      elMenuRight2ColBreak.style.display = "none";
	  elMenuRight3ColBreak = fnElementGetRef(elMenuRight3ColBreak, "MenuRight3ColBreak", "MenuRight3ColBreak");
      elMenuRight3ColBreak.style.display = "none";
      //
      elBodyMainCenterTopRight = fnElementCopy(elBodyMainCenterTopRight, elBodyMainCenterTopRightFirst, elBodyMainRight, "none");
	  elBodyMainCenterTopRightFirst = false;
//
//---------------------------------------------------------------//
// 	 		 	 Banner at Bottom
	   elBodyBanner = document.getElementById("BodyBanner");
      //---------------------------------------------------------------//
      // Area Displays
      elBodyBanner.style.display = "block";
      elBodyBannerBottom.style.display = "none";
      elBodyBannerTop.style.display = "none";
      
      elBodyMainLeft.style.display = "none";
      elBodyMainCenter.style.display = "block";
      elBodyMainRight.style.display = "none";
      // elBodyMainRightFar.style.display = "block";

      elBodyMainCenterTop.style.display = "none";
      elBodyMainCenterTopLeft.style.display = "none";
      elBodyMainCenterTopRight.style.display = "none";
      
	  elBodyMainCenterCenter.style.display = "block";
	  
	  elBodyMainCenterBottom.style.display = "none";
      //---------------------------------------------------------------//
      //
	  layoutReadingModeLeftFirst = false;
      		 break;
//---------------------------------------------------------------//
//---------------------------------------------------------------//
///////////////////////////////////////////////
// DEFAULT...
///////////////////////////////////////////////
//---------------------------------------------------------------//
//---------------------------------------------------------------//
      	default: 
      		 break;
      }
//	  
//
// document.recalc();
//
fnlayoutWindowResize();
//
elBodyFirst = false;
// return;
//
}
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// end of STANDARD FUNCTIONS (GLOBAL / COMMON)
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
//
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// MENUS
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Function Overview
//
////////////////////////////////////////////////
// Menu Image Show / Hide
////////////////////////////////////////////////
// Menu Show
// 		fnMenuImgShowRange
//		fnMenuImgShowIndex
//		fnMenuImgShowStack
//		fnMenuImgToggle
//		fnMenuImgShow
// Menu Hide
// 		fnMenuImgToggleRange
//		fnMenuImgHide
//
////////////////////////////////////////////////
// Menu Hide
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// fnMenu Mouse Out function 
////////////////////////////////////////////////
function fnMenuImgHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
//  alert(oObj.name);
//	oObj.class="MenuThumbHide";
	//
	if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
	var oObjNextIndex = oObjIndex = oObjGroupImageIndex; // fnMenuIndexSet(oObjNextGroupIndex, oObjNext);
    // oObj = fnMenuObjectSetAll(oObjNextGroupIndex, oObjNextIndex);
	//
	if (!IgnoreLock && menuImageLocked[oObjNextGroupIndex] [oObjNextIndex] == true) { return; }
	//
	oObjNext.style.display="none";
	//
	if (!IgnoreLock) { menuImageLocked[oObjNextGroupIndex] [oObjNextIndex] = oObjLocked; }

	//
	// oObj.width=0;
	// oObj.height=0;
	// oObj.style.display="none";
	// oObjImage.style.display="none";
	// oObjLarge.style.display="none";
	// oObjImageLarge.style.display="none";
}
//
////////////////////////////////////////////////
// Menu Toggle Show
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// fnMenu Mouse Out function 
////////////////////////////////////////////////
function fnMenuImgToggleRange(HideImage, HideImageLarge, startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
    startObjoObjIndex = startIndex;
    endObjoObjIndex = endIndex; 
    oObjIndex = startObjoObjIndex;
    if (oObjNext.style.display == "none") {
	  oObjLocked = true;
	  IgnoreLock = false;
	  fnMenuImgShowStack(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
	} else {
	  oObjLocked = false;
	  IgnoreLock = true;
          while ( oObjIndex <= endObjoObjIndex ) {
          	  //
          	  menuImageLocked[oObjGroupIndex] [oObjIndex] = false;
            	  // Objects
                oObj = fnMenuObjectSetAll(oObjGroupIndex, oObjIndex);
          	  if (HideImage) {
                	  if (oObj.style.display == "block") {
                    	 fnMenuImgHide(IsImageLarge, oObjParent, oObjImage, oObj, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
              	  }
          	  }
                if (HideImageLarge) {
                	 if (oObjImageLarge.style.display == "block") {
                      fnMenuImgHide(IsImageLarge, oObj, oObjImageLarge, oObjLarge, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
                   }
                }
                //
                oObjIndex++;
            }
  	  }
}
//
// ------------------------------------------------------------------------------------- _//
// fnMenu Toggle Menu Show Item (Mouse Down function) 
////////////////////////////////////////////////
function fnMenuImgToggle(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
    oObjIndex = oObjGroupImageIndex; // fnMenuIndexSet(oObjGroupIndex, oObjNext);
    if (oObjNext.style.display == "none") {
       fnMenuImgShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex] [oObjIndex], IgnoreLock);
    } else {
	   if (IsImageLarge) {
          // Is this wrong?
          fnMenuImgHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex] [oObjIndex], true);
	   } else {
          fnMenuImgHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex] [oObjIndex], IgnoreLock);
	   }
    }
}
//
////////////////////////////////////////////////
// Menu Show
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// fnMenu Mouse Over function 
////////////////////////////////////////////////
function fnMenuImgShowRange(startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	  ////////////////////////////////////////////////
	  // Build Menu Images Div
	  if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
	  //
      startObjoObjIndex = startIndex;
      endObjoObjIndex = oObjGroupImageIndex; // fnMenuIndexSet(oObjGroupIndex, oObjNext); 
      var oObjIndex = startObjoObjIndex;
      while ( oObjIndex <= endObjoObjIndex ) {
        //
        oObjIndex++;
      }
}
//
// ------------------------------------------------------------------------------------- _//
// fnMenu Mouse Over function 
////////////////////////////////////////////////
function fnMenuImgShowIndex(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	  if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
	  fnMenuImgShowStack(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
//
// ------------------------------------------------------------------------------------- _//
// fnMenu Menu Show Item and all Previous (Mouse Over function)
////////////////////////////////////////////////
function fnMenuImgShowStack(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
    imgZindex += 1; 
    oObjNext.style.zIndex =  imgZindex;
	//
    startoObjIndex = 1;
    endoObjIndex = fnMenuIndexSet(oObjGroupIndex, oObjNext); 
    oObjIndex = startoObjIndex;
    while ( oObjIndex <= endoObjIndex ) {
	   	// Objects
	     oObj = fnMenuObjectSetAll(oObjGroupIndex, oObjIndex);
    	// Set Lock State
		    // if (oObjLocked == true) { menuImageLocked[oObjGroupIndex] [oObjIndex] = oObjLocked; }
	     if (!IgnoreLock) { menuImageLocked[oObjGroupIndex] [oObjIndex] = oObjLocked; }
        // Reveal Hidden Images
        fnMenuImgShow(IsImageLarge, oObjParent, oObjImage, oObj, iImageSize, oObjGroupIndex, oObjIndex, menuImageLocked[oObjGroupIndex] [oObjIndex], true);
        oObjIndex++;
    }
}

var LastId = "";
var LastTochedId = "";
//
// ------------------------------------------------------------------------------------- _//
// fnMenu Menu Show Item (Mouse Over function) 
////////////////////////////////////////////////
function fnMenuImgShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
        if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
        oObjIndex = oObjGroupImageIndex; // fnMenuIndexSet(oObjGroupIndex, oObjNext);
        LastTochedId = oObjNext.id;
		//
        fnDebugStart(0, "testing image show"); // XXXXXXXX DEBUG XXXXXXXXX
		//
		fnWindowClientWidth();
		//  
        // if (IsImageLarge) {
              // Objects
              // oObj = fnMenuObjectSetAll(oObjGroupIndex, oObjIndex);
              // Style Visibility
              // oObjLarge.style.display="block";
              // oObjImageLarge.style.display="block";
        // }
        if (oObjNext.style.display == "none") {
                //
                // document.recalc();
                //
                ////////////////////////////////////////////////
                // Width and Height
                //	oObj.class="MenuThumbShow";
                //	oObj.position="absolute";
                LastId = oObjNext.id
			        //
                ////////////////////////////////////////////////
                // Image Size
                // oObjNext.style.width = "auto";
                // oObjNext.style.height = "auto";
                // oObjNext.style.width = iImageSize + 10;
                // oObjNext.style.height = iImageSize * oObjImageSizeRatio + 20;
                //			 
        	    // oObjNext.style.width = iImageSize + 50;
        	    // oObjNext.style.height = iImageSize * oObjImageSizeRatio + 50;
        	    oObjNextImage.style.width = iImageSize;
        	    oObjNextImage.style.height = iImageSize * oObjImageSizeRatio;
			        //
                ////////////////////////////////////////////////
                // Filters
    			 var filterCheck = false; 
    			 if (oObjNext.style.filter != "") { filterCheck = true; }
                 filterCheck = true; // XXX TEST XXX
    			 // if (oObjNext.filters.item(0) != "") { filterCheck = true; }
    			 // var filterCheck = oObjNextImage.filters && oObjNextImage.filters.length > 0;
    			 //
                ////////////////////////////////////////////////
                // Mouse Events
    		    // if(true == false) {
    			 // oObjNext.onfilterchange="fnFilterSpin(" + oObjNext.id + ", filterIndexPassed)";
    			 // oObjNext.onmouseover   = "";
    			// if (IsImageLarge) {
    			   // oObjNext.onmouseover += "fnMenuImgShow(true, ";
    			// } else {
    			   // oObjNext.onmouseover += "fnMenuImgShowStack(";
    			// }						
    			// oObjNext.onmouseover 	+= oObjNextParent.id
				    // + ", " 
				  	// + oObjNextImage.id
				  	// + ", "
				  	// + oObjNext.id
				  	// + ", "
    			// if (IsImageLarge) {
    			   // oObjNext.onmouseover += oObjImageSizeLarge;
    			// } else {
    			   // oObjNext.onmouseover += oObjImageSizeSmall;
    			// }						
    			// oObjNext.onmouseover 	+= ", 4, false, false)"
				  	// + "; "
				  	// + "fnFilterResetThenAnimate(" + oObjNext.id + ");";
                // onmouseover="fnMenuImgShowStack(MenuContainerRight1, MdmImportTld4Image, MdmImportTld4, oObjImageSizeSmall, 4, false, false)"
                ////////////////////////////////////////////////
       			// }
            	//
                ////////////////////////////////////////////////
            	// Position
                ////////////////////////////////////////////////
            	//
                ////////////////////////////////////////////////
        	    // Parent Postion
                ////////////////////////////////////////////////
                // Get the offset width of that parent element
        		fnElementPosGet(oObjNextParent);
        	    //
                ////////////////////////////////////////////////
                // Position Control
                // Save the Left position (of the first image in the group)
    		  	if (oObjIndex == 1) { 
                    menuImageRootPosition[oObjGroupIndex] [indexTop] = oObjTop; // oObjNextTop; // Top
                    menuImageRootPosition[oObjGroupIndex] [indexLeft] = oObjLeft; // oObjNextLeft; // Left
                    menuImageRootPosition[oObjGroupIndex] [indexWidth] = oObjWidth; // Right 
                    menuImageRootPosition[oObjGroupIndex] [indexHeight] = oObjHeight; // Bottom
                    //
                    // Store Parent Postion (note only first is stored at this time)
                    menuImagePositionLeft[oObjGroupIndex] [oObjRootIndex] = oObjLeft;
                    menuImagePositionTop[oObjGroupIndex] [oObjRootIndex] = oObjTop;
                    menuImagePositionWidth[oObjGroupIndex] [oObjRootIndex] = oObjWidth;
                    menuImagePositionHeight[oObjGroupIndex] [oObjRootIndex] = oObjHeight;
                    //
                    // Cascase Direction
                    // Adjust the Left position for the image width
                    // Left Column wants Top Right of Parent Div
                    // Right Column wants Top Left of Parent Div
                }
                //
                ////////////////////////////////////////////////
        	    // Cascade Control
                ////////////////////////////////////////////////
                // Cascase Row and Column
                var cascadeRow = 1;
                var cascadeColumn = 1;
                cascadeColumn = oObjIndex % oObjectRowMax[oObjGroupIndex];
                cascadeRow = (oObjIndex - cascadeColumn + oObjectRowMax[oObjGroupIndex]) / oObjectRowMax[oObjGroupIndex];
                //
                ////////////////////////////////////////////////
                // Cascase Direction (Down or Up)
                var layoutCascadeDown = true;
                var layoutCascadeRight = true;
        	    if (menuImageOffsetTopAll[oObjGroupIndex] [indexGroup] > 0) {
                    layoutCascadeDown = true; } else { layoutCascadeDown = false; }
                ////////////////////////////////////////////////
                //
                ////////////////////////////////////////////////
        	    // Top Position
                ////////////////////////////////////////////////
      			// Offset
      			oObjNextOffsetTop = menuImageOffsetTopAll[oObjGroupIndex] [indexGroup];
      			oObjNextOffsetTop += menuImageOffsetTopAll[oObjGroupIndex] [oObjIndex];
                ////////////////////////////////////////////////
          	    // Set Top
        	    // View Option Adjustments
                // Windowed Layout Format
                if (layoutIndex == layoutWindowed) {
                    layoutCascadeDown = true; 
                    oObjNextOffsetTop = 30;
                    // if (oObjIndex == 1) { oObjNextOffsetTop = 50 + menuImageRootPosition[oObjGroupIndex] [indexTop];
                    // } else {  oObjNextOffsetLeft = 50; }
                    // if (layoutIndex == layoutWindowed) { oObjNextOffsetTop = Math.abs(oObjNextOffsetTop); }
          			// Set Top
                    oObjNextOffsetTop += elBodyMainCenterTop.offsetHeight;
                    oObjNextTop = ((oObjIndex - 1) * 50) + oObjNextOffsetTop;
      			    if (IsImageLarge) { oObjNextTop += 100; }
                } else {
                    //  Standard Side Menu Layout Format
          			// Set Top
    		  	    if (oObjIndex == 1) {
                        oObjNextTop = oObjTop;
                        // oObjNextTop = menuImageRootPosition[oObjGroupIndex] [indexTop] = oObjTop; // oObjNextTop; // Top
                    } else {
            			// oObjNextTop = oObjTop;
                        oObjNextTop = menuImagePositionTop[oObjGroupIndex] [oObjIndex - 1];
                    }
                    oObjNextTop += oObjNextOffsetTop;
    			    if (IsImageLarge) {
                        if (oObjNextOffsetTop > 50) {
                            oObjNextTop += oObjNextOffsetTop;
                        } else {  oObjNextTop += 100; }
                    }
                    //
                }
                //
                ////////////////////////////////////////////////
                // Set Style Top for menu image box
    			oObjNext.style.posTop = oObjNextTop;
    			// oObjNext.style.posTop = oObjNext.style.top;
    			//
                ////////////////////////////////////////////////
                // Menu Thumb Link Postioning (Top or Bottom)
                // Large Image Handling
    			if (!IsImageLarge) {
                    // Small Image
    			    // Link Text Position Up or Down
                    //      (determined by Cascade Direction)
        			if (layoutCascadeDown) {
                       // Display Top
        			   oObjNext.childNodes[0].style.display = "block";
        			   oObjNext.childNodes[2].style.display = "none";
        			} else {
                       // Display Bottom
        			   oObjNext.childNodes[0].style.display = "none";
        			   oObjNext.childNodes[2].style.display = "block";
        			}
        		} else {
                    // Large Image
    			    // Link Text Position Up or Down
        			if (layoutCascadeDown) {
                       // Display Top
        			   oObjNext.childNodes[0].childNodes[0].style.display = "block";
        			   oObjNext.childNodes[0].childNodes[2].style.display = "none";
        			} else {
                       // Display Bottom
        			   oObjNext.childNodes[0].childNodes[0].style.display = "none";
        			   oObjNext.childNodes[0].childNodes[2].style.display = "block";
        			}
    			}
    			//
                ////////////////////////////////////////////////
                // Left Position
                ////////////////////////////////////////////////
                //
                ////////////////////////////////////////////////
                // Cascase Direction (Right or Left)
        	    if (menuImageOffsetLeftAll[oObjGroupIndex] [indexGroup] > 0) {
                    layoutCascadeRight = true; } else { layoutCascadeRight = false; }
    			// Offset
    		    oObjNextOffsetLeft = menuImageOffsetLeftAll[oObjGroupIndex] [indexGroup]; // Group Default Offset
    			oObjNextOffsetLeft += menuImageOffsetLeftAll[oObjGroupIndex] [oObjIndex]; // Item specific default
    			// 
                ////////////////////////////////////////////////
        	    // View Option Adjustments
                var menuImageOffsetFirst = menuImageOffsetFirstAll[oObjGroupIndex] [indexLeft]; 
                // Windowed Layout Format
    		  	if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) != 1) { menuImageOffsetFirst = 0; } 
                if (layoutIndex == layoutWindowed) {
                    // oObjNextOffsetLeft = oObjNextOffsetLeft * 25 / Math.abs(oObjNextOffsetLeft); 
                    menuImageOffsetFirst = 20;
                }
                // if (layoutIndex == layoutWindowed) { oObjNextOffsetTop = Math.abs(oObjNextOffsetTop); }
                //
                ////////////////////////////////////////////////
                // Left Position Calculation
                ////////////////////////////////////////////////
                // Adjust Left Position for Page Overflow
                // Cascade Maximum exceeded (Left)
    			// Cascase Direction
        	    if (layoutCascadeRight) {
                      ////////////////////////////////////////////////
                      // Left Column (Left)
                      // One First Column of Row
                      if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) == 1) {
                          if (layoutIndex == layoutWindowed) {
                                oObjNextOffsetLeft = 0;
                                oObjNextLeft = ( (oObjGroupIndex - 1) / 6 * layoutWidth)
                                    + menuImageOffsetFirst
                                    + oObjNextOffsetLeft; // (ie. Right Top)
// XXXXXXXX client width etc (refreshing?)                          
                          } else {
                                // Use Parent Position plus offset
                                oObjNextLeft = ( menuImagePositionLeft[oObjGroupIndex] [oObjRootIndex] 
                                    + menuImagePositionWidth[oObjGroupIndex] [oObjRootIndex]) 
                                    + menuImageOffsetFirst
                                    + oObjNextOffsetLeft; // (ie. Right Top)
                          }
                      } else {
                           // Cascade Next Left Column By Top and Left Offsets
                        if (layoutIndex == layoutWindowed) { menuImageOffsetFirst = 0; }
                         oObjNextLeft = menuImagePositionLeft[oObjGroupIndex] [oObjIndex - 1]
                                + oObjNextOffsetLeft; // Right Edge of Parent
                         // oObjNextLeft = (oObjLeft) 
                      }
                      //
    			} else {
                ////////////////////////////////////////////////
    			    // Right Column
                    // Cascade Maximum exceeded (Right)
    				if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) == 1) {
                          if (layoutIndex == layoutWindowed) {
                                oObjNextLeft = ( (oObjGroupIndex - 1) / 6 * layoutWidth);
                          } else {
                                oObjNextLeft = menuImagePositionLeft[oObjGroupIndex] [oObjRootIndex] 
                                    - (iImageSize + 10) 
                                    + menuImageOffsetFirst
                                    + oObjNextOffsetLeft; // (ie. Left Top)
                         }
                         if (layoutIndex == layoutWindowed && oObjGroupIndex > 2) { oObjNextLeft += 75; }
              		} else {
                        // (oObjLeft)
                        if (layoutIndex == layoutWindowed) { menuImageOffsetFirst = 0; }
                	    oObjNextLeft = menuImagePositionLeft[oObjGroupIndex] [oObjIndex - 1] 
                            + oObjNextOffsetLeft; // Right Edge of Parent
                    }
    			}
                //
			    if (IsImageLarge) {
                    if (oObjNextOffsetLeft > 50) {
                        oObjNextLeft += oObjNextOffsetLeft;
                    } else {  oObjNextLeft += 100; }
                }
                //
                ////////////////////////////////////////////////
                // Set Left for menu image box
                oObjNext.style.posLeft = oObjNextLeft;         
                //
                ////////////////////////////////////////////////
                // Column Overflow
                ////////////////////////////////////////////////
    			if (layoutCascadeRight) {
                    ////////////////////////////////////////////////
        			// Left Column (Left)
                    // Maximum Screen Width Exceeded (Left)
                    // note this should be an adjustable value
                    var bodyRightEdge = oObjNext.ownerDocument.body.clientWidth 
                        - oObjNext.style.posLeft  
                        + oObjNext.style.posWidth; // Right Edge
                    //
    				if ((oObjNext.style.posLeft + (iImageSize + 10)) > bodyRightEdge) {
        				while ((oObjNext.style.posLeft + (iImageSize + 10)) > bodyRightEdge) {
        				   oObjNext.style.posLeft -= 100;  
        				}
    					    // oObjNext.style.posLeft += oObjIndex * 10;
    				}
                    //
                    var bodyLeftEdge = (oObjNext.style.posLeft 
                        + oObjNext.style.posWidth); // Right Edge
                    //
    				if ((oObjNext.style.posLeft - 10) < bodyLeftEdge) {
        				while ((oObjNext.style.posLeft - 10) < bodyLeftEdge) {
        				   oObjNext.style.posLeft += 100;  
        				}
    					    // oObjNext.style.posLeft += oObjIndex * 10;
    				}
    			} else {
                    ////////////////////////////////////////////////
    			    // Right Column
                    // Maximum Screen Width Exceeded (Left)
                    // note this should be an adjustable value
    				if ((oObjNext.style.posLeft + (iImageSize + 10)) > (oObjNext.ownerDocument.body.clientWidth - 10)) {
        				while ((oObjNext.style.posLeft + (iImageSize + 10)) > (oObjNext.ownerDocument.body.clientWidth - 10)) {
        				   oObjNext.style.posLeft -= 100;  
        				}
    					    // oObjNext.style.posLeft += oObjIndex * 10;
    				}
    				if ((oObjNext.style.posLeft + 10) < 100) {
        				while ((oObjNext.style.posLeft + 10) < 100) {
        				   oObjNext.style.posLeft += 100;  
        				}
    					    // oObjNext.style.posLeft += oObjIndex * 10;
    				}
    			} 
                //
                ////////////////////////////////////////////////
                // Set Object Style Left
              	oObjNext.style.left = oObjNext.style.posLeft;
                //
                ////////////////////////////////////////////////
                // Store Postion
                menuImagePositionLeft[oObjGroupIndex] [oObjIndex] = oObjNext.style.posLeft;
                menuImagePositionTop[oObjGroupIndex] [oObjIndex] = oObjNext.style.posTop;
                menuImagePositionWidth[oObjGroupIndex] [oObjIndex] = oObjNext.offsetWidth;
                menuImagePositionHeight[oObjGroupIndex] [oObjIndex] = oObjNext.offsetHeight;
                //
                ////////////////////////////////////////////////
              	// Filters
                ////////////////////////////////////////////////
                //
                ////////////////////////////////////////////////
            	// Z Index
                imgZindex += 1; 
                oObjNext.style.zIndex  =  imgZindex + oObjIndex;
                ////////////////////////////////////////////////
                // Filter Apply Command
    			if (filterCheck && (moveIsOn || filterIsOn)) {
                    fnMenuImageFilterPlayAgain(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjIndex, false, true);  
        			// oObjNextImage.filters[0].apply();
        			// oObjNextImage.filters[1].apply();
        			// oObjNextImage.filters.item("DXImageTransform.Microsoft.Wheel").apply();
        			// oObjNextImage.filters.item("DXImageTransform.Microsoft.Spin").apply();
        			// oObjNextImage.filters.item[1].apply();
        			// oObjNextImage.filters.item(1).Apply();
                } else {
                    ////////////////////////////////////////////////
                  	// Visibility
                  	oObjNext.style.display="block";
                    //
    			}
    			//
                ////////////////////////////////////////////////
                // Filter Item Creation
    			// oObjNext.filters.item = new Array(1);
                //
                // Filter Item Set
    			// oObjNext.filters.item(0) = "-ms-filter:progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', duration='1.5')";
    			//
                ////////////////////////////////////////////////
                // Set Object Style Filter
                // oObjNext.style.filter = 
                // "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', duration='1.5')";
                // "progid:DXImageTransform.Microsoft.
                //
                ////////////////////////////////////////////////
                // Sample / Test Filters
                // Filter Test Microsoft
    			 if (filterCheck) {  
        			 // oObjNextImage.style.filter = "filter:progid:DXImageTransform.Microsoft.Wheel(duration=3); filter:progid:DXImageTransform.Microsoft.Slide(slideStyle='HIDE', duration=3, bands=1);";
        			 // oObjNextImage.filters[0] = "filter:progid:DXImageTransform.Microsoft.Wheel(duration=3);";
        			 // oObjNextImage.filters[1] = "filter:progid:DXImageTransform.Microsoft.Slide(slideStyle='HIDE', duration=3, bands=1);";
    			 } else {
        			 // oObjNextImage.style.filter = "filter:progid:DXImageTransform.Microsoft.Wheel(duration=3); filter:progid:DXImageTransform.Microsoft.Slide(slideStyle='HIDE', duration=3, bands=1);";
    			 }						
       			//
                ////////////////////////////////////////////////
                // Filter Play Command
    			if (filterCheck) {  
        			// oObjNextImage.filters[0].play();
        			// oObjNextImage.filters.item(0).Play();
        			// oObjNextImage.filters[1].play();
        			// fnFilterResetThenAnimate(oObjNext);
        			// fnFilterSpin(oObjNext);
    			}
                //
        ////////////////////////////////////////////////
        // end of display "none"
        } else {
            ////////////////////////////////////////////////
        	// Z Index
            imgZindex += 1; 
            oObjNext.style.zIndex  =  imgZindex + oObjIndex;
        }
		//
    ////////////////////////////////////////////////
    // Dispaly Lock vs MouseOut Disappear
		// if (oObjLocked == true) { menuImageLocked[oObjGroupIndex] [oObjIndex] = oObjLocked; }
		if (!IgnoreLock) { menuImageLocked[oObjGroupIndex] [oObjIndex] = oObjLocked; }
}
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// fnResize function 

// ------------------------------------------------------------------------------------- _//
// fnResize function 
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// Object Set: Object, Image, Parent, Index
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// fnMenuObjectSetAll
////////////////////////////////////////////////
function fnMenuObjectSetAll(oObjGroupCn, oObjCn)
{
oObjIndex = oObjCn;
oObjGroupIndex = oObjGroupCn;
////////////////////////////////////////////////
switch(oObjGroupIndex) {
      // Non Groups
        case 101: return MenuContainerLeft1;
        case 102: return MenuContainerLeft2;
        case 103: return MenuContainerLeft3;
        case 104: return MenuContainerRight1;
////////////////////////////////////////////////
      // Group 1
      case 1: 
	  //
	  switch(oObjCn) {
        case 0: 
    	return MenuContainerLeft1;
        case 1: 
        	oObj = MdmImportTld11;
            oObjImage = MdmImportTldImage11;
            oObjParent = MenuContainerLeft1;
            oObjLarge = MdmImportTldl11;
            oObjImageLarge = MdmImportTldlImage11;
        	oObjText = "Database Schema";
            return MdmImportTld11;
        case 2: 
        	oObj = MdmNetAppFrame12;
            oObjImage = MdmNetAppFrameImage12;
            oObjParent = MdmImportTld11;
            oObjLarge = MdmNetAppFramel12;
            oObjImageLarge = MdmNetAppFramelImage12;
        	oObjText = "Application Framework";
        	return MdmNetAppFrame12;
        case 3: 
        	oObj = MdmNetVirList13;
            oObjImage = MdmNetVirListImage13;
            oObjParent = MdmNetAppFrame12;
            oObjLarge = MdmNetVirListl13;
            oObjImageLarge = MdmNetVirListlImage13;
        	oObjText = "Virtualized List";
        	return MdmNetVirList13;
        case 4: 
        	oObj = MdmDbUtilClass14; // MdmDbUtilClass
            oObjImage = MdmDbUtilClassImage14;
            oObjParent = MdmNetVirList13;
            oObjLarge = MdmDbUtilClassl14;
            oObjImageLarge = MdmDbUtilClasslImage14;
        	oObjText = "File System";
        	return MdmDbUtilClass14;
        case 5: 
        	oObj = MdmOutlookSync15;
            oObjImage = MdmOutlookSyncImage15;
            oObjParent = MdmDbUtilClass14;
            oObjLarge = MdmOutlookSyncl15;
            oObjImageLarge = MdmOutlookSynclImage15;
        	oObjText = "Outlook Folder Integration";
        	return MdmOutlookSync15;
        case 6: 
        	oObj = MdmSystemMgnt16;
            oObjImage = MdmSystemMgntImage16;
            oObjParent = MdmOutlookSync15;
            oObjLarge = MdmSystemMgntl16;
            oObjImageLarge = MdmSystemMgntlImage16;
        	oObjText = "Windows Best Practices";
        	return MdmSystemMgnt16;
        case 7: 
        	oObj = MdmWebDev17;
            oObjImage = MdmWebDevImage17;
            oObjParent = MdmSystemMgnt16;
            oObjLarge = MdmWebDevl17;
            oObjImageLarge = MdmWebDevlImage17;
        	oObjText = "Web Development";
    	return MdmWebDev17;
        default: 
        	oObj = MdmImportTld11;
            oObjImage = MdmImportTldImage11;
            oObjParent = MenuContainerLeft1;
            oObjLarge = MdmImportTldl11;
            oObjImageLarge = MdmImportTldlImage11;
        	oObjText = "Database Schema";
    	return MdmImportTld11;
  }
  return;
////////////////////////////////////////////////
  // Group 2
  case 2: 
      switch(oObjCn){
        case 0: return MenuContainerLeft2;
        case 1: 
        	oObj = MdmResume21;
            oObjImage = MdmResumeImage21;
            oObjParent = MenuContainerLeft2;
            oObjLarge = MdmResumel21;
            oObjImageLarge = MdmResumelImage21;
        	oObjText = "Career Home";
        	return MdmResume21;
        case 2: 
    	oObj = MdmRsmIt22;
        oObjImage = MdmRsmItImage22;
        oObjParent = MdmResume21;
        oObjLarge = MdmRsmItl22;
        oObjImageLarge = MdmRsmItlImage22;
    	oObjText = "Resume";
    	return MdmRsmIt22;
        case 3: 
    	oObj = MdmDghCarBio23;
        oObjImage = MdmDghCarBioImage23;
        oObjParent = MdmRsmIt22;
        oObjLarge = MdmDghCarBiol23;
        oObjImageLarge = MdmDghCarBiolImage23;
    	oObjText = "Personal Bio";
    	return MdmDghCarBio23;
        case 4: 
    	oObj = MdmDghAccom24;
        oObjImage = MdmDghAccomImage24;
        oObjParent = MdmDghCarBio23;
        oObjLarge = MdmDghAccoml24;
        oObjImageLarge = MdmDghAccomlImage24;
    	oObjText = "Major Accomplishments";
    	return MdmDghAccom24;
        default: 
    	oObj = MdmResume21;
        oObjImage = MdmResumeImage21;
        oObjParent = MenuContainerLeft2;
        oObjLarge = MdmResumel21;
        oObjImageLarge = MdmResumelImage21;
    	oObjText = "Career Home";
    	return MdmResume21;
	} 
////////////////////////////////////////////////
  return;
  // Group 3
  case 3: switch(oObjCn){
    case 0: return MenuContainerLeft3;
    case 1: 
	oObj = MdmTechRsrch31;
    oObjImage = MdmTechRsrchImage31;
    oObjParent = MenuContainerLeft3;
    oObjLarge = MdmTechRsrchl31;
    oObjImageLarge = MdmTechRsrchlImage31;
	oObjText = "Applied Technology Research";
	return MdmTechRsrch31;
    case 2: 
	oObj = MdmCogSciProj32;
    oObjImage = MdmCogSciProjImage32;
    oObjParent = MdmTechRsrch31;
    oObjLarge = MdmCogSciProjl32;
    oObjImageLarge = MdmCogSciProjlImage32;
	oObjText = "Cognitive Science Project";
	return MdmCogSciProj32;
    case 3: 
	oObj = MdmMvvmProj33;
    oObjImage = MdmMvvmProjImage33;
    oObjParent = MdmCogSciProj32;
    oObjLarge = MdmMvvmProjl33;
    oObjImageLarge = MdmMvvmProjlImage33;
	oObjText = "C# MVVM / OSS Project";
	return MdmMvvmProj33;
    default: 
	oObj = MdmTechRsrch31;
    oObjImage = MdmTechRsrchImage31;
    oObjParent = MenuContainerLeft3;
    oObjLarge = MdmTechRsrchl31;
    oObjImageLarge = MdmTechRsrchlImage31;
	oObjText = "Applied Technology Research";
	return MdmTechRsrch31;
  }  
  return;
////////////////////////////////////////////////
  // Group 4
  case 4: 
  default:
      switch(oObjCn){ 
        case 0: return MenuContainerRight1;
        case 1: 
    	oObj = MdmImportTld41;
        oObjImage = MdmImportTldImage41;
        oObjParent = MenuContainerRight1;
        oObjLarge = MdmImportTldl41;
        oObjImageLarge = MdmImportTldlImage41;
    	oObjText = "C# Schema Converter";
    	return MdmImportTld41;
        case 2: 
    	oObj = MdmKBil42;
        oObjImage = MdmKBilImage42;
        oObjParent = MdmImportTld41;
        oObjLarge = MdmKBill42;
        oObjImageLarge = MdmKBillImage42;
    	oObjText = "K-Bil<br>Subscriber Billing<br>System";
    	return MdmKBil42;
        case 3: 
    	oObj = MdmNetAppFrame43;
        oObjImage = MdmNetAppFrameImage43;
        oObjParent = MdmKBil42;
        oObjLarge = MdmNetAppFramel43;
        oObjImageLarge = MdmNetAppFramelImage43;
    	oObjText = "C# Application Framework";
    	return MdmNetAppFrame43;
        case 4: 
    	oObj = MdmSrt44;
        oObjImage = MdmSrtImage44;
        oObjParent = MdmNetAppFrame43;
        oObjLarge = MdmSrtl44;
        oObjImageLarge = MdmSrtlImage44;
    	oObjText = "SRT Code Conversion Tool";
    	return MdmSrt44;
        case 5: 
    	oObj = MdmPickTr45;
        oObjImage = MdmPickTrImage45;
        oObjParent = MdmSrt44;
        oObjLarge = MdmPickTrl45;
        oObjImageLarge = MdmPickTrlImage45;
    	oObjText = "PickTR Adaptive Protocol";
    	return MdmPickTr45;
        case 6: 
    	oObj = MdmOutlookSync46;
        oObjImage = MdmOutlookSyncImage46;
        oObjParent = MdmPickTr45;
        oObjLarge = MdmOutlookSyncl46;
        oObjImageLarge = MdmOutlookSynclImage46;
    	oObjText = "Outlook Disk Sync";
    	return MdmOutlookSync46;
        case 7: 
    	oObj = MdmPickOss47;
        oObjImage = MdmPickOssImage47;
        oObjParent = MdmOutlookSync46;
        oObjLarge = MdmPickOssl47;
        oObjImageLarge = MdmPickOsslImage47;
    	oObjText = "Pick Application Framework";
    	return MdmPickOss47;
        case 8:  
    	oObj = MdmBlank48;
        oObjImage = MdmBlankImage48;
        oObjParent = MdmPickOss47;
        oObjLarge = MdmBlankl48;
        oObjImageLarge = MdmBlanklImage48;
    	oObjText = "Mdm Blank";
    	return MdmBlank48;
        default: 
    	oObj = MdmImportTld41;
        oObjImage = MdmImportTldImage41;
        oObjParent = MenuContainerRight1;
        oObjLarge = MdmImportTldl41;
        oObjImageLarge = MdmImportTldlImage41;
    	oObjText = "C# Schema Converter";
    	return MdmImportTld41;
      } 
  return;
  }
//
}
//
// ------------------------------------------------------------------------------------- _//
// function fnMenuObjectTextSet(oObjGroupCn, oObjCn)
////////////////////////////////////////////////
function fnMenuObjectTextSet(oObjGroupCn, oObjCn)
{
oObjIndex = oObjCn;
oObjGroupIndex = oObjGroupCn;
switch(oObjGroupIndex) {
////////////////////////////////////////////////
  // Non Groups
    case 101: return "MenuContainerLeft1";
    case 102: return "MenuContainerLeft2";
    case 103: return "MenuContainerLeft3";
    case 104: return "MenuContainerRight1";
////////////////////////////////////////////////
  // Group 1
  case 1: switch(oObjCn){
    case 0: return "MenuContainerLeft1";
    case 1: return "C# Schema Converter";
    case 2: return "C# Application<br>Framework";
    case 3: return "Virtualized List";
    case 4: return "File System";
    case 5: return "Outlook Disk Sync";
    case 6: return "Windows Best<br>Practices";
    case 7: return "Web Development";
    default: return "C# Schema Converter";
  }
  return;
////////////////////////////////////////////////
  // Group 2
  case 2: switch(oObjCn){
    case 0: return "MenuContainerLeft2";
    case 1: return "Career Home";
    case 2: return "Resume";
    case 3: return "Personal Bio";
    case 4: return "Major Accomplishments";
    default: return "Career Home";
  } 
  return;
////////////////////////////////////////////////
  // Group 3
  case 3: switch(oObjCn){
    case 0: return "MenuContainerLeft3";
    case 1: return "Applied Technology<br>Research";
    case 2: return "Cognitive Science<br>Project";
    case 3: return "C# MVVM / OSS Project";
    default: return "Applied Technology<br>Research";
  }  
  return;
////////////////////////////////////////////////
  // Group 4
  case 4: 
  default: 
  switch(oObjCn){ 
    case 0: return "MenuContainerRight1";
    case 1: return "C# Schema Converter";
    case 2: return "K-Bil<br>Subscriber Billing<br>System";
    case 3: return "C# Application<br>Framework";
    case 4: return "SRT Code<br>Conversion Tool";
    case 5: return "PickTR Adaptive<br>Protocol";
    case 6: return "Outlook Disk Sync";
    case 7: return "Pick Application<br>Framework";
    case 8: return "Mdm Blank"; 
    default: return "C# Schema Converter";
  } 
  return;
}
//
}
//
// ------------------------------------------------------------------------------------- _//
// function fnMenuObjectNameSet(oObjGroupCn, oObjCn)
////////////////////////////////////////////////
function fnMenuObjectNameSet(oObjGroupCn, oObjCn)
{
oObjIndex = oObjCn;
oObjGroupIndex = oObjGroupCn;
////////////////////////////////////////////////
switch(oObjGroupIndex) {
////////////////////////////////////////////////
  // Non Groups
    case 101: return "MenuContainerLeft1";
    case 102: return "MenuContainerLeft2";
    case 103: return "MenuContainerLeft3";
    case 104: return "MenuContainerRight1";
////////////////////////////////////////////////
  // Group 1
  case 1: switch(oObjCn){
    case 0: return "MenuContainerLeft1";
    case 1: return "MdmImportTld";
    case 2: return "MdmNetAppFrame";
    case 3: return "MdmNetVirList";
    case 4: return "MdmDbUtilClass";
    case 5: return "MdmOutlookSync";
    case 6: return "MdmSystemMgnt";
    case 7: return "MdmWebDev";
    default: return "MdmImportTld";
  }
  return;
////////////////////////////////////////////////
  // Group 2
  case 2: switch(oObjCn){
    case 0: return "MenuContainerLeft2";
    case 1: return "MdmResume";
    case 2: return "MdmRsmIt";
    case 3: return "MdmDghCarBio";
    case 4: return "MdmDghAccom";
    default: return "MdmResume";
  } 
  return;
////////////////////////////////////////////////
  // Group 3
  case 3: switch(oObjCn){
    case 0: return "MenuContainerLeft3";
    case 1: return "MdmTechRsrch";
    case 2: return "MdmCogSciProj";
    case 3: return "MdmMvvmProj";
    default: return "MdmTechRsrch";
  }  
  return;
////////////////////////////////////////////////
  // Group 4
  case 4: 
  default: 
  switch(oObjCn){ 
    case 0: return "MenuContainerRight1";
    case 1: return "MdmImportTld";
    case 2: return "MdmKBil";
    case 3: return "MdmNetAppFrame";
    case 4: return "MdmSrt";
    case 5: return "MdmPickTr";
    case 6: return "MdmOutlookSync";
    case 7: return "MdmPickOss";
    case 8: return "MdmBlank";
    default: return "MdmImportTld";
  } 
  return;
  }
  //
}
//
// ------------------------------------------------------------------------------------- _//
// fnMenuIndexSet
////////////////////////////////////////////////
function fnMenuIndexSet(oObjGroupIndex, oObjPassed)
{
switch(oObjGroupIndex) {
////////////////////////////////////////////////
  // Non Groups
    case 101: return 101;
    case 102: return 102;
    case 103: return 103;
    case 104: return 104;
////////////////////////////////////////////////
  // Group 1
  case 1: switch(oObjPassed){
    case MenuContainerLeft1: return 0;
    case MdmImportTld11: return 1;
    case MdmNetAppFrame12: return 2;
    case MdmNetVirList13: return 3;
    case MdmDbUtilClass14: return 4;
    case MdmOutlookSync15: return 5;
    case MdmSystemMgnt16: return 6;
    case MdmWebDev17: return 7;
	//
    case MdmImportTldl11: return 1;
    case MdmNetAppFramel12: return 2;
    case MdmNetVirListl13: return 3;
    case MdmDbUtilClassl14: return 4;
    case MdmOutlookSyncl15: return 5;
    case MdmSystemMgntl16: return 6;
    case MdmWebDevl17: return 7;
    default: return 1;
  }  
  return;
////////////////////////////////////////////////
  // Group 2
  case 2: switch(oObjPassed){
    case MenuContainerLeft2: return 0;
    case MdmResume21: return 1;
    case MdmRsmIt22: return 2;
    case MdmDghCarBio23: return 3;
    case MdmDghAccom24: return 4;
	//
    case MdmResumel21: return 1;
    case MdmRsmItl22: return 2;
    case MdmDghCarBiol23: return 3;
    case MdmDghAccoml24: return 4;
    default: return 1;
  }  
  return;
////////////////////////////////////////////////
  // Group 3
  case 3: switch(oObjPassed){
    case MenuContainerLeft3: return 0;
    case MdmTechRsrch31: return 1;
    case MdmCogSciProj32: return 2;
    case MdmMvvmProj33: return 3;
	//
    case MdmTechRsrchl31: return 1;
    case MdmCogSciProjl32: return 2;
    case MdmMvvmProjl33: return 3;
    default: return 1;
  }  
  return;
////////////////////////////////////////////////
  // Group 4
  case 4: 
  default:
  switch(oObjPassed){ 
    case MenuContainerRight1: return 0;
    case MdmImportTld41: return 1;
    case MdmKBil42: return 2;
    case MdmNetAppFrame43: return 3;
    case MdmSrt44: return 4;
    case MdmPickTr45: return 5;
    case MdmOutlookSync46: return 6;
    case MdmPickOss47: return 7;
    case MdmBlank48: return 8;
	//
    case MdmImportTldl41: return 1;
    case MdmKBill42: return 2;
    case MdmNetAppFramel43: return 3;
    case MdmSrtl44: return 4;
    case MdmPickTrl45: return 5;
    case MdmOutlookSyncl46: return 6;
    case MdmPickOssl47: return 7;
    case MdmBlankl48: return 8;
    default: return 1;
  }  
  return;
  }
  //
}
//
// ------------------------------------------------------------------------------------- _//
// fnMenuIndexSetByName
////////////////////////////////////////////////
function fnMenuIndexSetByName(oObjPassed)
{
  for (imgCn = 0; imgCn <= imgMax; imgCn++){
//    alert(imgCn + "--" + imgUsedCn + "--" + imgMax);
//    alert(oObjPassed.name);
    if (oObjPassed.name == "img" + imgCn){
//    alert("Object No: " + imgCn);
      return imgCn;
    }
  }
//alert("Object No: " + 0);
  return 0;
}
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
