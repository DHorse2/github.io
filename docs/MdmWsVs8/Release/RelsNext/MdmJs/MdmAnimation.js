// ..................................................................................... _//
// SectionBlock Column
var layoutBodyColumnType1 = true;
// var layoutBodyColumnMax = 1;
//
// ..................................................................................... _//
// Section Menu Image Group and Item Variables
// ..................................................................................... _//
// SectionBlock Group
//
// var imgGroupCount = 5;
// var imgGroupArraySize = imgGroupCount;
// var imgGroupBoxCount = 20;
// var imgGroupImageArraySize = imgGroupBoxCount + 1;
// // Image Object Array
menuImage = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// //
// SectionBlock Current Image and Position
//
// var oObjNextTop;
// var oObjNextLeft;
// Current Image Position Offset
// var oObjNextOffsetTop;
// var oObjNextOffsetLeft;
//
// ...................................... //
// SectionBlock Appearance
var menuImageBorderWidth = 6;
//
// ...................................... //
// SectionBlock Group and Item Image Array Initialization
// ...................................... //
//
// Current Image and Position
// Current Image Index By Group
// var imgCnByGroup = new Array(imgGroupArraySize);
// // Maximum # of Images By Group
// var imgMaxByGroup = new Array(imgGroupArraySize);
// // Maximum # of Images Per Cascading Row By Group
// var oObjectRowMax = new Array(imgGroupArraySize);
// // Image Display (Visible) Locked Array
// var menuImageLocked = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// //
// // First Image
// // First Image Offset By Group, By Top, Left
// var menuImageOffsetFirstAll = new Array(imgGroupArraySize); // By Top, Left (2)
// // These are layout postion patterns to be applied
// menuImageOffsetLeftAll = new Array(imgGroupImageArraySize);
// menuImageOffsetTopAll = new Array(imgGroupImageArraySize);
// //
// // Image Position
// // Position of Parent Image (Parent of First only stored at this time)
// var menuImagePositionLeft = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// var menuImagePositionTop = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// var menuImagePositionWidth = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// var menuImagePositionHeight = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
//
// Animation Timer by Group by Image
// Not currently in use
// var menuImageTimerCn = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// ...................................... //
// Image Postioning Offsets - Large
// var menuImageOffsetLeftLarge = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// var menuImageOffsetTopLarge = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
//
// ...................................... //
// Image Postioning Offsets - Small
// These are layout postion patterns to be applied
// var menuImageOffsetLeftAll = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// var menuImageOffsetTopAll = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
//
// ...................................... //
// Add Second Dimention (imgGroupImageArraySize)
// for (oObjGroupIndex = 0; oObjGroupIndex < 1 + imgGroupArraySize; oObjGroupIndex++) {
//     //
//     // ...................................... //
//     // First Image Offset By Group, By Top, Left
//     menuImageOffsetFirstAll[oObjGroupIndex] = new Array(2); // By Top, Left (2)
//     //
//     // ...................................... //
//     // Image Object Array
//     menuImage[oObjGroupIndex] = new Array(imgGroupImageArraySize);
//     // Image Display (Visible) Locked Array
//     menuImageLocked[oObjGroupIndex] = new Array(imgGroupImageArraySize);
//     // Image Position
//     // Position of Parent Image (Parent of First only stored at this time)
//     menuImagePositionLeft[oObjGroupIndex] = new Array(imgGroupImageArraySize);
//     menuImagePositionTop[oObjGroupIndex] = new Array(imgGroupImageArraySize);
//     menuImagePositionWidth[oObjGroupIndex] = new Array(imgGroupImageArraySize);
//     menuImagePositionHeight[oObjGroupIndex] = new Array(imgGroupImageArraySize);
//     // Animation Timer by Group by Image
//     menuImageTimerCn[oObjGroupIndex] = new Array(imgGroupImageArraySize);
//     // Small and Large Images
//     for (imgGroupImageIndex = 0; imgGroupImageIndex < 1 + imgGroupImageArraySize; imgGroupImageIndex++) {
//         // Image Display (Visible) Locked Array
//         menuImageLocked[oObjGroupIndex][imgGroupImageIndex] = new Array(2);
//         // Image Position
//         // Position of Parent Image (Parent of First only stored at this time)
//         menuImagePositionLeft[oObjGroupIndex][imgGroupImageIndex] = new Array(2);
//         menuImagePositionTop[oObjGroupIndex][imgGroupImageIndex] = new Array(2);
//         menuImagePositionWidth[oObjGroupIndex][imgGroupImageIndex] = new Array(2);
//         menuImagePositionHeight[oObjGroupIndex][imgGroupImageIndex] = new Array(2);
//         // Animation Timer by Group by Image
//         menuImageTimerCn[oObjGroupIndex][imgGroupImageIndex] = new Array(2);
//     }
//     // ...................................... //
//     // Image Postioning Offsets
//     // These are layout postion patterns to be applied
//     menuImageOffsetLeftAll[oObjGroupIndex] = new Array(imgGroupImageArraySize);
//     menuImageOffsetTopAll[oObjGroupIndex] = new Array(imgGroupImageArraySize);
//     //
// }
// oObjGroupIndex = 1;
//
// // ...................................... //
// // SectionBlock Heading Image Group
// // ...................................... //
// var headingGroupPointer = imgGroupArraySize;
// var headingGroupMax = 1;
// var headingGroupCnStart = imgGroupArraySize;
// var headingGroupCnEnd = imgGroupArraySize;
// var headingGroupCnCurr = imgGroupArraySize;
// imgMaxByGroup[headingGroupCnCurr] = imgGroupBoxCount;
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Element Movement
// ...................................... //
//
// Timing
// var elementMoveDuration;
// var elMoveStepMin;
// var elMoveStepMax;
// var elementMoveInterval;
// var elementMoveDelay;
//
// Movement Patterns:
// Method used to move animated objects
// from origin to destination
// var elementMoveMethodDirect = 1;
// var elementMoveMethodSlideDown = 2;
// var elementMoveMethodSlideSide = 3;
// var elementMoveMethod = 0;
var elementMoveMethodPrev = 0;
//
// Steps / Iterations
var elMoveStep = 0;
var elMoveStepsPerSecond = 0;
var elMoveBusy = false;
//
// Origin and Destination
var elLeftOrig = 0;
var elTopOrig = 0;
var elLeftDest = 0;
var elTopDest = 0;
//
var elementIsRoot = false;
//
// Movement Tracking
var moveDistance = 0;
var moveDistanceLeft = 0;
var moveDistanceTop = 0;
//
var moveDistancePerSec = 0;
var moveDistancePerSecLeft = 0;
var moveDistancePerSecTop = 0;
//
var moveDistancePerStep = 0;
var moveDistancePerStepLeft = 0;
var moveDistancePerStepTop = 0;
//
var moveOffset = 0;
var moveOffsetLeft = 0;
var moveOffsetTop = 0;
//
var moveOffsetMin = 1;
var moveOffsetMax = 25;
// SectionBlock Animation Control - See Default or page settings
// ...................................... //
// Basic Options:
// var moveIsOn = true; // Object Move From Origin to Destination
// //
// var filterIsOn = true; // Transition
// var filterResizeIsOn = true; // Growing image
// var filterDurationOverride = false; // Indicates User has set durations and defaults should not be used.
// Animated Images
////////////////////////////////////////////////
// Image State
// set the following to the number of images
// then add the correct number of img objects
// var imgUsedCn = 5;
var imgCn = 0;
// var imgMax = 10;
var menuImageCn = 0;
// Name
var imageNameNew = "";
// Image Focus
var imgFocus = 0;
var imgFocusOld = 0;
// Image Selection variables
var imgSelect = "img1";
// document.parentWindow.imgSelect= "img1";
// Image Layout Adjustables
// var boxFormWidth = 75;
// var boxTextLineHeight = 30;
// var imgHeight = 90;
// Animation Timing
// var intervalBase = 900;
// var intervalSet = 0;
// var intervalName = "";
// Animation and Mouse
// var imgAniToggle = new Array;
// var imgMouseHover = new Array;
// Menu Image Size
// set by Page/Defaults
// var oObjImageSizeSmall = 150;
// var oObjImageSizeLarge = 500;
// var oObjImageSizeRatio = 0.7;
// var oObjImageSize = 0;
// Animation Management
////////////////////////////////////////////////
// Menu Images
////////////////////////////////////////////////
// Movement Control:
////////////////////////////////////////////////
// var elLeftOrig = 0;
// var elTopOrig = 0;
// var elLeftDest = 0;
// var elTopDest = 0;
// Timer Control (Move)
////////////////////////////////////////////////
// (See function TimerDurationSet for default elementMove values)
// Transition stepping
// var elementMoveDuration = 3;
// var elMoveStepMax = 50;
// var elementMoveInterval = 10;
// var elementMoveDelay = 0;
// Control overloading javascript
////////////////////////////////////////////////
var filterBusy = false;
var timerBusy = false;
var resizeBusy = false;
// // Movement Patterns:
// ////////////////////////////////////////////////
// // Methodology used to move animated objects
// // from origin to destination
// var elementMoveMethodDirect = 1; // Slide diagonally to destination
// var elementMoveMethodSlideDown = 2; // Slide down, then sideways
// var elementMoveMethodSlideSide = 3; // Slide sideways, then down
// var elementMoveMethodRandom = 0; // Use random choice on each Group move
// Master Movement Setting:
// Setting it to '0' causes a random setting on each display
// var elementMoveMethod = elementMoveMethodRandom; // Use random
// Animation Transition Control:
////////////////////////////////////////////////
// (See function TimerDurationSet for default filter values)
// var filterDurationOverride = false;
// var filterDuration = 0;
// var filterStepMin = 0;
// var filterStepMax = 0;
// var filterInterval = 0;
// var filterDelay = 0;
// Usually filterDuration is the same as
// elementDuration plus an adjustment.
// a non-zero value indicates this
// feature is on. Usually this adjustment
// is one additional second.
// var filterDurationAdjustment = -0.001; // indicates use default
//
// Methodology to Invoke Animation:
// var filterMethodPlay = 1; // execute the play method
// var filterMethodVisible = 2; // change style visibility (onchange)
// var filterMethod = filterMethodPlay;
// ...................................... //
// Run animation and movement forwards or backwards
var playDirectionForward = 1;
var playDirectionReverse = 2;
// initially Foreward because Reverse would usually
// be useless when revealling objects.
var playDirection = playDirectionForward;
var playDirectionNotPassed = null;

// Section Object Animation function (s)
// ...................................... //

// Filter Management
// ...................................... //
// Filter State
var filterFirst = true;
var filterRandom = "";
var filterAurguments = "";
// Command
var filterCommand = "";
//
var filterDataCommand = 1;
var filterDataStepValue = 2;
var filterDataRequested = filterDataCommand;
var filterCompletionIsZero = 0; // todo unused
// filterOnChangeStorage
var oldFilter = null;
// Target
var filterTarget = null;
var filterTargetIndex = 0;
var filterTargetGroupIndex = 0
// Key
var filterKey = "";
var filterKeyPrefix = 'progid:';
var filterKeyPrefix2 = 'filter:progid:';

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
// var filterType1 = 1;
// var filterTypeIris = 2;
// var filterTypePixelate = 3;
// var filterTypeRandomDissolve = 4;
// var filterTypeSpiral = 5;
// var filterTypeStretch = 6;
// var filterTypeStrips = 7;
// var filterTypeWheel = 8;
// var filterTypeMotionBlur = 9;
// var filterTypeBlinds = 10;
// var filterTypeBarn = 11;
// var filterTypeCheckerBoard = 12;
// var filterTypeGradientWipe = 13;
// var filterTypeRadialWipe = 14;
// var filterTypeRandomBars = 15;
// var filterTypeZigZag = 16;
// var filterTypeUnknown1 = 17;
// var filterClassSingleDynamicMax = 17;
//
// filterClassPaired
// 		filterClassStatic
var filterTypeFade = 1;
var filterClassPairedStaticMax = 1;
// 		filterClassDynamic
var filterClassPairedDynamicMax = 0;

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
var filterTypeFlip = 12;// Matrix?
var filterTypeRotate = 13;// Matrix?
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
var filterClassSingleDynamicMax = filterTypeMatrix;

// Stepping
// ...................................... //
var filterDelay = elementMoveDelay;
var filterStepMax = elMoveStepMax;
var filterDuration = elementMoveDuration;
var filterInterval = elementMoveInterval;
//
var filterMotion = 'out';
var filterOrientation = 'vertical';
//
var filterMotionDirection = 'rightdown';
//
var filterGridSizeX = 25;
var filterGridSizeY = 25;
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
var filterDirectionDegrees = 310;
var filterDuration = 1;
var filterEnabled = true;
var filterMotion = "out";
var filterMotionDirection
var filterOrientation = "vertical";
var filterPixelRadius = 3;
var filterSizingMethod = "auto expand";
var filterStrength = 13;
var filterTransition = 6;
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
var filterIndexEffectHigh = 49;
var filterIndexEffectMax = 59;


// Timers
////////////////////////////////////////////////
// var timerId = "";
// var timerIdCurr = "";
// var timerIdPrev = "";
// //
// var timerObj = new Array(timerGroupIndexMax);
//
///////////////////////////////////////////////
// var timerFunction = "TimerMoveStepDo";
//
// var vTimerID;
// var vTimerStart;
// var vTimerStop;
//
///////////////////////////////////////////////
// var timerStarted = false;
// //
// var timerDuration = elementMoveDuration;
// var timerInterval = elementMoveInterval;
// var timerStepMax = elMoveStepMax;
// var timerDelay = elementMoveDelay;
// //
// var timerStep = 0;
// var timerStepMin = 10;
// var timerStepMax = elMoveStepMax;
//
// var timerStepsPerSecond = 10;
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
//
var filterObj = null;
// Sub-Section Filter Management function (s)
// ...................................... //
// General (Common) functions & properties:
// ...................................... //
function FilterControlCreate(filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage, oObjGroupIndex, oObjGroupImageIndex, filterObjIdPassed, filterIdPassed) {
    // filterId is this program's index number
    //
    if (!filterObj) { filterObj = new Array(30); } // todo
    //
    if (!filterObj[filterObjIdPassed]) {
        filterObj[filterObjIdPassed] = new Object();
        filterObj[filterObjIdPassed].oObj = oObjNext;
        filterObj[filterObjIdPassed].oObjGroupIndex = oObjGroupIndex;
        filterObj[filterObjIdPassed].oObjIndex = oObjGroupImageIndex;
    }
    //
    if (!filterObj[filterObjIdPassed].filterSet) {
        filterObj[filterObjIdPassed].filterSet = new Array(5);
    }
    //
    if (!filterObj[filterObjIdPassed].filterSet[filterIdPassed]) {
        filterObj[filterObjIdPassed].filterSet[filterIdPassed] = new Object();
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterVendor = '';
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterName = '';// Id - short name... i.e. Blinds
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterKey = filterKey;// Key
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterCommand = filterCommand;
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterArguments = '';
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterMSIndex = -1;
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterDoApply = false;
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterDoStop = false;
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterDoPlay = false;
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterDoEnable = false;
    }
}
// FilterStore Filter Store / Restore
// ...................................... //
function FilterStore(oObjPassed, filterIndexPassed) {
    // this can't be right
    // oldFilter = oObjPassed.onfilterchange;
    // oObjPassed.onfilterchange = null;
    oldFilter = oObjPassed.filters[0].item;
}
// FilterRestore
// ...................................... //
function FilterRestore(oObjPassed, filterIndexPassed) {
    if (oldFilter != null) {
        // ???? oObjPassed.onfilterchange = oldFilter;
        oObjPassed.filters[0].item = oldFilter;
    }
}
// SectionBlock Filter Support function (s):
// ...................................... //
// ..................................................................................... _//
// FilterResetThenAnimate
function FilterResetThenAnimate(oObjPassed, filterIndexPassed) {
    switch (filterIndexPassed) {
        // Non Groups
        case filterClassMatrix:
            filterMatrixCounterDegreeCurrent = 40;
            FilterRestore(oObjPassed, filterIndexPassed);// s/b , filterIndexPassed
            break;
        default:
            oObjPassed.filters[0].enabled = true;
            // if (!filterFirst)  { FilterRestore(oObjPassed, filterIndexPassed); }
            break;
    }
    // filterObjectMovement Effect
    // FilterGetRandom(filterIndexDynamicLow, filterIndexDynamicHigh);
    filterIndexPassed = filterTypeFlip;
    FilterAnimate(oObjPassed, filterIndexPassed);
    //
    // filterObjectFinal Effect
    // FilterGetRandom(filterIndexMatrixLow, filterIndexMatrixHigh);
    filterIndexPassed = filterTypeCheckerBoard;
    FilterAnimate(oObjPassed, filterIndexPassed);
    filterFirst = false;
}
// Animate Object
// ...................................... //
function FilterAnimate(oObjPassed, filterIndexPassed, flMultiplier) {
    switch (filterIndexPassed) {
        // Matrix
        case filterClassMatrix:
            // Matrix
            FilterSpin(oObjPassed, filterIndexPassed);
            break;
        // Default
        default:
            // Default
            break;
    }
}
// StyleBackground
// ...................................... //
function FilterBackgroundToggle(oObjPassed, filterIndexPassed) {
    if (filterStyleBackgroundToggle) {
        filterStyleBackgroundToggle = 0;
        oObjPassed.style.backgroundColor = 'gold';
    } else {
        filterStyleBackgroundToggle = 1;
        oObjPassed.style.backgroundColor = 'green';
    }
    oObjPassed.filters[0].Apply();
    // oObjPassed.filters[0].Play();
}
// SlideStyle:
// ...................................... //
//  Slide Style Toggle
// ...................................... //
function SlideStyleToggle(oObjPassed, filterIndexPassed) {
    // Use the array index to update and display  the slideStyle used.
    var iStyleIndex = filterSlideStyleIndexCount % 3; // MOD function avoids resetting the counter.
    oObjPassed.filters[0].slideStyle = arrSlideStyles[filterSlideStyleIndexCount];
    oSpan.innerText = 'SlideStyle= ' + quoteOpen + arrSlideStyles[filterSlideStyleIndexCount] + quoteClose;
    oObjPassed.filters[0].Apply();
    // After setting Apply, changes to the oDiv object
    //  are not displayed until Play is called.
    // oObjPassed.filters[0].Play();
    filterSlideStyleIndexCount += 1;
}
// SectionBlock Filter Matrix Control function (s)
// ...................................... //
// FilterSpin
// ...................................... //
function FilterSpin(oObjPassed, filterIndexPassed) {
    switch (filterIndexPassed) {
        // Non Groups
        case filterClassMatrix:
            // The function chosen for flMultiple defines size changes in the animation.
            filterMatrixCounterDegreeCurrent += 16;
            // The number of 360-degree rotations is three.
            FilterStore(oObjPassed, filterIndexPassed);
            if (filterMatrixCounterDegreeCurrent >= 360 * 1) { oObjPassed.onfilterchange = null; }
            //
            FilterSetRotation(oObjPassed, filterIndexPassed, filterMatrixCounterDegreeCurrent);
            //
            if (filterMatrixCounterDegreeCurrent < 360 + 1) {
                var flMultiple = filterMatrixCounterDegreeCurrent / 360;//* 720;*/
                FilterResize(oObjPassed, flMultiple);
            }
            break;
        //
        default:
            // Type of animation triggered by filter change.
            // The number of 360-degree rotations is three.
            FilterStore(oObjPassed, filterIndexPassed);// s/b , filterIndexPassed
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
// SetRotation function
// ...................................... //
//oObj input requires that a matrix filter be applied.
function FilterSetRotation(oObjPassed, filterIndexPassed, deg) {
    rad = deg * deg2radians;
    costheta = Math.cos(rad);
    sintheta = Math.sin(rad);
    //
    oObjPassed.filters.item(0).M11 = costheta;
    oObjPassed.filters.item(0).M12 = -sintheta;
    oObjPassed.filters.item(0).M21 = sintheta;
    oObjPassed.filters.item(0).M22 = costheta;
}
// Resize
// ...................................... //
//
// oObj input requires that a matrix filter be applied.
// flMultiplier input defines the amount by which the oObj is resized.
function FilterResize(oObjPassed, filterIndexPassed, flMultiplier) {
    if (!browserAnimationIsIe) { return; }
    // oObj.filters['DXImageTransform.Microsoft.Matrix']
    switch (filterIndexPassed) {
        // Non Groups
        case filterClassMatrix:
            if (flMultiplier < 0.05) { flMultiplier = 0.05; }
            // flMultiplier = 1 - flMultiplier;
            // oObjPassed.filters[0].SizingMethod = 'auto expand';
            oObjPassed.filters[0].M11 = flMultiplier;
            // oObjPassed.filters[0].M12 *= flMultiplier;
            // oObjPassed.filters[0].M21 *= flMultiplier;
            oObjPassed.filters[0].M22 = flMultiplier;
        /* --
        oObjPassed.filters['DXImageTransform.Microsoft.Matrix'].M11 *= flMultiplier;
        oObjPassed.filters['DXImageTransform.Microsoft.Matrix'].M12 *= flMultiplier;
        oObjPassed.filters['DXImageTransform.Microsoft.Matrix'].M21 *= flMultiplier;
        oObjPassed.filters['DXImageTransform.Microsoft.Matrix'].M22 *= flMultiplier;
        -- */
        /* --
        oObjPassed.filters.item(0).M11 *= flMultiplier;
        oObjPassed.filters.item(0).M12 *= flMultiplier;
        oObjPassed.filters.item(0).M21 *= flMultiplier;
        oObjPassed.filters.item(0).M22 *= flMultiplier;
        -- */
        default:
        // dumb
    }
}
//
// SectionBlock Filter Primary Command  function (s)
// ...................................... //
// ..................................................................................... _//
// Filter Enable
// ...................................... //
// Enable Filter prior to Play
//
var filterValid = false;
var filterIndexCn = 0;
var filterSelected = new Array(5);
//
function FilterGet(filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupImageIndex,
    filterObjIdPassed, filterIdPassed) {
    filterGetExit = false;// Set failure
    var filterIndexCn = 0;// Filter being set
    var filterCommandEval = new String();// Filter Set Command
    var filterMatrix;// Matrix filter
    //
    filterId = new Array(30); // todo review
    filterSelected = new Array(5); // todo review
    //
    while (!filterIndexCn && !filterGetExit) {
        //
        filterIdIndex = 0; filterIdPassed = filterIdIndex;
        // FileterPlayRandom
        //  or
        // Select Random Animation
        filterIndex = MathNumberRandomGetByRange(filterIndexDynamicLow, filterIndexDynamicHigh, filterRealFlag);
        // filterIndex = MathNumberRandomGetByRange(filterRangeLow, filterRangeHigh, filterRealFlag);
        // MathNumberRandomGetByRange(rangeLow, rangeHigh, realFlag)
        //  (filterIndexPassed = MathRandom())
        //
        if (browserAnimationIsIe) {
            // filterCommandEval = 'oObjNextImage.style.filter= ' + quoteOpen;
            filterCommandEval = 'oObjNext.style.filter= ' + quoteInnerOpen;
        } else { filterCommandEval = ''; }
        // Resize (Matrix)
        if (filterResizeIsOn) {
            // Matrix always takes first spot (0)
            var filterClassMatrix = 3;
            filterMatrix = FilterGetByIndex(filterClassMatrix, filterClassStatic, filterTypeMatrix, filterDataCommand, filterCompletionIsZero,
                oObjNext, oObjNextImage,
                oObjGroupIndex, oObjGroupImageIndex,
                filterObjIdPassed, filterIdPassed);
            //
            filterCommandEval += filterMatrix + ';';
            filterId[filterIdIndex] = filterKey;
            filterSelected[filterIdIndex] = filterTypeMatrix;
            filterIdIndex += 1; filterIdPassed = filterIdIndex;
        }
        // Randomly chosen filter
        newFilter = FilterGetByIndex(filterClassSingle, filterClassStatic,
            filterIndex, filterDataCommand, filterCompletionIsZero,
            oObjNext, oObjNextImage,
            oObjGroupIndex, oObjGroupImageIndex,
            filterObjIdPassed, filterIdPassed);
        //
        filterCommandEval += newFilter + ';';
        filterId[filterIdIndex] = filterKey;
        filterSelected[filterIdIndex] = filterIndex;
        //
        if (browserAnimationIsIe) { filterCommandEval += quoteInnerClose; }
        // oObjNextImage.style.filter = newFilter;
        //
        // Set & Verify Filter Count
        filterIndexCn = FilterSet(filterPlayAll, startIndex, endIndex,
            oObjNext, oObjNextImage, filterObjIdPassed, filterIdPassed,
            filterCommandEval);
        //
        if (filterIndexCn < 1) {
            // Error - Set failed
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                'Invalid filter(' + filterIdPassed + ') error! On filter # ' + filterIndex + ' '
                + charNewLineTag + filterCommandEval,
                'FilterGet', 3128, null, null,
                errorIsWarning, errorDoNotDisplayTag, errorDoNotAlert);
            var bob = 'ted';
            filterIndexCn = 0;
            filterGetExit = true;// Exit on Set Error
        } else {
            // Set succeeded
            if (debugTimer && debugTimerDetail && debugTimerTransition) {
                MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                    'Filter(' + filterIdPassed + ') of ' + filterIndexCn
                    + ' set successfully! Random filter # ' + filterIndex + ' '
                    + charNewLineTag + filterCommandEval,
                    'FilterGet', 3139, null, null,
                    errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
                //
            }
        }
    }
    filterCommand = filterCommandEval;
}
// Filter Enable
// ...................................... //
// Enable Filter prior to Play
//
function FilterSet(filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage, filterObjIdPassed, filterIdPassed,
    filterCommand) {
    // Evaluate the filter commands and apply elements.
    if (browserAnimationIsIe) {
        if (filterCommand.length) {
            eval(filterCommand);
            filterCommand = '';
        } else { return -99; }
        return oObjNext.filters.length;
    } else { return 1; }
}
// Filter Enable
// ...................................... //
// Enable Filter prior to Play
//
function FilterEnable(filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupImageIndex,
    filterObjIdPassed, filterIdPassed) {
    if (browserAnimationIsIe) {
        if (filterResizeIsOn && filterIsOn) {
            // 0
            if (filterObj[filterObjIdPassed].filterSet[0].filterDoEnabled) {
                oObjNext.filters.item(filterId[0]).Enabled = true;
            }
            // 1
            if (oObjNext.filters[1]) {
                if (filterObj[filterObjIdPassed].filterSet[1].filterDoEnabled) {
                    oObjNext.filters.item(filterId[1]).Enabled = true;
                }
            }
            //
        } else {
            // 0
            if (filterObj[filterObjIdPassed].filterSet[0].filterDoEnabled) {
                oObjNext.filters.item(filterId[0]).Enabled = true;
            }
        }
    }
}
// Filter Apply
// ...................................... //
// Capture Rendered Content prior to Play
//
function FilterApply(filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupImageIndex,
    filterObjIdPassed, filterIdPassed) {
    if (browserAnimationIsIe) {
        if (filterResizeIsOn && filterIsOn) {
            // 0
            if (filterObj[filterObjIdPassed].filterSet[0].filterDoApply) {
                // oObjNext.filters[0].apply();
                oObjNext.filters.item(filterObj[filterObjIdPassed].filterSet[0].filterKey).apply();
            }
            // 1
            if (oObjNext.filters[1]) {
                if (filterObj[filterObjIdPassed].filterSet[1].filterDoApply) { oObjNext.filters[1].apply(); }
            }
            //
        } else {
            if (filterObj[filterObjIdPassed].filterSet[0].filterDoApply) { oObjNext.filters[0].apply(); }
        }
    }
}
// Filter Play
// ...................................... //
// Play Animation for this image
//
// Filter Play
// performs one cycle of animation
// It is structured by Platform Type
// to apply browser solutions.
// This in turn could be structured
// to implement specific players+versions.
// ...................................... //
function FilterPlay(playDirection, filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupImageIndex,
    filterObjIdPassed, filterIdPassed) {
    //
    if (!filterDuration) { filterDuration = elementMoveDuration; }
    //
    if (filterMethod == filterMethodPlay) {
        if (filterResizeIsOn && filterIsOn) {
            if (browserAnimationIsIe) {
                // 0
                oObjNext.filters[0].duration = filterDuration;
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoPlay) {
                    oObjNext.filters[0].play(filterDuration);
                }
                // 1
                if (oObjNext.filters[1]) {
                    if (oObjNext.filters[1].duration) { oObjNext.filters[1].duration = filterDuration; }
                    if (filterObj[filterObjIdPassed].filterSet[1].filterDoPlay) {
                        oObjNext.filters[1].play(filterDuration);
                    }
                }
            }
        } else {
            if (browserAnimationIsIe) {
                // 0
                if (oObjNext.filters[0].duration) { oObjNext.filters[0].duration = filterDuration; }
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoPlay) {
                    oObjNext.filters[0].play(filterDuration);
                }
            }
        }
    }
    //
    // Visibility
    if (oObjNext.style.display != 'block') {
        oObjNext.style.display = 'block';
        // oObjNextImage.style.display= 'block';
    }
    // ...................................... //
    //
    if (filterMethod == filterMethodVisible) {
        oObjNext.style.visibility = 'hidden';
        oObjNext.style.visibility = 'visible';
    }
}
// Filter Stop
// ...................................... //
//
function FilterStop(filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupImageIndex,
    filterObjIdPassed, filterIdPassed) {
    if (filterMethod == filterMethodPlay) {
        if (filterResizeIsOn && filterIsOn) {
            if (browserAnimationIsIe) {
                // 0
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoStop) {
                    oObjNext.filters[0].stop();
                }
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoEnable) {
                    oObjNext.filters[0].Enabled = false;
                }
                // 1
                if (oObjNext.filters[1]) {
                    if (filterObj[filterObjIdPassed].filterSet[1].filterDoStop) {
                        oObjNext.filters[1].stop();
                    }
                    if (filterObj[filterObjIdPassed].filterSet[1].filterDoEnable) {
                        oObjNext.filters[1].Enabled = false;
                    }
                }
            }
        } else {
            if (browserAnimationIsIe) {
                // 0
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoStop) {
                    oObjNext.filters[0].stop();
                }
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoEnable) {
                    oObjNext.filters[0].Enabled = false;
                }
            }
        }
    }
}
// function Filter Pause
// ...................................... //
//
// ..................................................................................... _//
// function Filter Rewind / Forward
// ...................................... //
//
// ..................................................................................... _//
// Filter Timing Get By Index
// ...................................... //
function FilterTimingGetByIndex() {
    return;
}
// Filter Timing Get Random
// ...................................... //
function FilterTimingGetRandom() {
    return;
}
// SectionBlock Filter Get / Set function (s)
// ...................................... //
//
// function Get
// function Set
// function GetBy:
// ..................................................................................... _//
// Filter (Transition, Transform) Get by Index or Name
// Filter Get By Index
function FilterGetByIndex(
    filterClassCardinalityPassed, filterClassFixityPassed,
    filterIndexPassed, filterDataRequested, filterCompletionPassed,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupImageIndex,
    filterObjIdPassed, filterIdPassed) {
    // get interger
    filterKey = '';
    filterKeyPrefix = 'progid:';
    filterArguments = '';
    var filterCompletionSet = false;
    var filterCompletionRatio = 1;
    var UsePlay = false;
    var UseEnabled = false;
    if (!filterObj || !filterObj[filterIdPassed]) {
        FilterControlCreate(
            true, 0, 30,
            oObjNext, oObjNextImage,
            oObjGroupIndex, oObjGroupImageIndex,
            filterObjIdPassed, filterIdPassed);
    }
    if (filterDataRequested != filterDataCommand) { filterCompletionRatio = filterCompletionPassed; }
    //
    //
    switch (filterClassCardinalityPassed) {
        // ...................................... //
        // Transition from self
        case filterClassSingle:
            // Transition is Motion Oriented (Single)
            switch (filterClassFixityPassed) {
                // ..................................................................................... _//
                // ...................................... //
                // Transition suited to moveable content (Single)
                case filterClassDynamic:
                    switch (filterIndexPassed) {
                        // Not Used
                        case 9999:
                            break;
                        default:
                            break;
                    }
                    break;
                // Transition suited to stationary content (Single)
                case filterClassStatic:
                default:
                    switch (filterIndexPassed) {
                        case 1:
                        // filterKey = '';
                        // filterArguments += '';
                        // break;
                        // MotionBlur
                        case filterTypeMotionBlur:
                            // imgHtml += 'progid:DXImageTransform.Microsoft.MotionBlur(strength= 13, direction= 310) ';
                            // filterArguments += 'progid:DXImageTransform.Microsoft.MotionBlur(strength= 13, direction= 310)';
                            if (!filterDirectionDegrees) { filterDirectionDegrees = 310; }
                            filterKey = 'DXImageTransform.Microsoft.MotionBlur';
                            filterArguments += '(';
                            filterArguments += '  strength= ' + filterStrength;
                            filterArguments += ', direction= ' + filterDirectionDegrees;
                            filterArguments += ', add= "true"';
                            filterArguments += ')';
                            UseEnabled = true;
                            break;
                        // Iris
                        case filterTypeIris:
                            filterKey = 'DXImageTransform.Microsoft.Iris';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', irisStyle= ' + 'DIAMOND';
                            filterArguments += ', motion= ' + filterMotionOut;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // Pixelate
                        case filterTypePixelate:
                            // filterArguments += '
                            filterKey = 'DXImageTransform.Microsoft.Pixelate';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', maxSquare= ' + filterMaxSquare;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // Random Dissolve
                        case filterTypeRandomDissolve:
                            filterKey = 'DXImageTransform.Microsoft.RandomDissolve';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', GridSizeX= ' + filterGridSizeX;
                            filterArguments += ', GridSizeY= ' + filterGridSizeY;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;		// Spiral
                        case filterTypeSpiral:
                            filterKey = 'DXImageTransform.Microsoft.Spiral';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', GridSizeX= ' + filterGridSizeX;
                            filterArguments += ', GridSizeY= ' + filterGridSizeY;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // Stretch
                        case filterTypeStretch:
                            filterKey = 'DXImageTransform.Microsoft.Stretch';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', stretchStyle= ' + filterStretchStyle;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // Strips
                        case filterTypeStrips:
                            filterKey = 'DXImageTransform.Microsoft.Strips';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', motion= ' + filterMotionDirectionRightDown;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // Wheel
                        case filterTypeWheel:
                            // imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(Duration= 1.0000);' + quoteClose;
                            // filterArguments += 'progid:DXImageTransform.Microsoft.Wheel(duration= 3)';
                            filterKey = 'DXImageTransform.Microsoft.Wheel';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', spokes= ' + filterSpokes;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // Blinds
                        case filterTypeBlinds:
                            // imgHtml += 'progid:DXImageTransform.Microsoft.Blinds(Bands= 10, Duration= 2, Direction= down);' + quoteClose;
                            // filterIndexPassed = filterTypeBlinds;
                            filterKey = 'DXImageTransform.Microsoft.Blinds';
                            filterArguments += '(';
                            filterArguments += '  bands= ' + filterBands;
                            filterArguments += ', duration= ' + filterDuration;
                            filterArguments += ', direction= ' + filterDirection;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // Barn
                        case filterTypeBarn:
                            filterKey = 'DXImageTransform.Microsoft.Barn';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', motion= ' + filterMotionOut;
                            filterArguments += ', orientation= ' + filterOrientationVertical;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // CheckerBoard
                        case filterTypeCheckerBoard:
                            // CheckerBoard
                            // filterTypeCheckerBoard
                            // imgHtml += 'progid:DXImageTransform.Microsoft.CheckerBoard(Duration= 3, Direction= left);';
                            filterKey = 'DXImageTransform.Microsoft.CheckerBoard';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', direction= ' + filterDirection;
                            filterArguments += ', squaresX= ' + filterSquaresX;
                            filterArguments += ', squaresY= ' + filterSquaresY;
                            filterArguments += ')';
                            break;
                        // Gradient Wipe
                        case filterTypeGradientWipe:
                            filterGradientsize = 0.5;
                            filterKey = 'DXImageTransform.Microsoft.gradientWipe';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', gradientsize= ' + filterGradientsize;
                            filterArguments += ', motion= ' + filterMotionDirectionForward;
                            filterArguments += ', WipeStyle= ' + filterWipeStyle;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // Radial Wipe
                        case filterTypeRadialWipe:
                            var filterWipeStyleClock = 'CLOCK';
                            var filterWipeStyleWedge = 'WEDGE';
                            var filterWipeStyleRadial = 'RADIAL';
                            filterKey = 'DXImageTransform.Microsoft.RadialWipe';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', WipeStyle= ' + filterWipeStyleRadial;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // Random Bars
                        case filterTypeRandomBars:
                            filterKey = 'DXImageTransform.Microsoft.RandomBars';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', orientation= ' + filterOrientationVertical;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // ZigZag
                        case filterTypeZigZag:
                            filterKey = 'DXImageTransform.Microsoft.ZigZag';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', GridSizeX= ' + filterGridSizeX;
                            filterArguments += ', GridSizeY= ' + filterGridSizeY;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // Wave
                        case filterTypeWave:
                            filterKey = 'DXImageTransform.Microsoft.Wave';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', Add= "false", LightStrength= 20, Phase= 20, Strength= 5,  Freq= 5';
                            filterArguments += ')';
                            UseEnabled = true;
                            break;
                        // ..................................................................................... _//
                        // Blur
                        case filterTypeBlur:
                            // imgHtml += 'progid:DXImageTransform.Microsoft.Blur(pixelradius= 2) ';
                            // filterArguments += 'progid:DXImageTransform.Microsoft.Blur(pixelradius= 2)';
                            filterKey = 'DXImageTransform.Microsoft.Blur';
                            filterArguments += '(';
                            filterArguments += '  pixelradius= ' + filterPixelRadius;
                            filterArguments += ')';
                            UseEnabled = true;
                            break;
                        // Inset
                        case filterTypeInset:
                            filterKey = 'DXImageTransform.Microsoft.Inset';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        // ..................................................................................... _//
                        default:
                        // break;
                    }
                    break;
            }
            break;
        // Transition from prior content
        case filterClassPaired:
            // Transition is Motion Oriented (Paired)
            switch (filterClassFixityPassed) {
                // Transition suited to moveable content
                case filterClassDynamic:
                    switch (filterIndexPassed) {
                        // Not Used
                        case 9999:
                            break;
                        default:
                            break;
                    }
                    break;
                // Transition suited to stationary content (Paired)
                case filterClassStatic:
                default:
                    switch (filterIndexPassed) {
                        // Fade
                        case filterTypeFade:
                            filterKey = 'DXImageTransform.Microsoft.Fade';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ')';
                            UsePlay = true; UseEnabled = true;
                            break;
                        default:
                            break;
                    }
                    break;
            }
            break;
        // ..................................................................................... _//
        //
        case filterClassMatrix:
        default:
            //
            switch (filterIndexPassed) {
                // Matrix
                case filterTypeMatrix:
                    // imgHtml += 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod= auto expand, duration= 1.5);' + quoteClose;
                    // filterIndexPassed = filterTypeMaxtrix;
                    filterKey = 'DXImageTransform.Microsoft.Matrix';
                    filterArguments += '(';
                    // filterArguments += 'sizingMethod= ' + filterSizingMethod;
                    filterArguments += '  duration= ' + filterDuration;
                    filterArguments += ')';
                    UseEnabled = true;
                    break;
                // Flip
                case filterTypeFlip:
                    // This is a Matrix Calculation...
                    UseEnabled = true;
                    break;
                // Rotate
                case filterTypeRotate:
                    // This is a Matrix Calculation...
                    filterKey = 'DXImageTransform.Microsoft.Matrix';
                    filterArguments += '(';
                    filterArguments += '  duration= ' + filterDuration;
                    filterArguments += ')';
                    UseEnabled = true;
                    break;
                // Spin
                case filterTypeSpin:
                    // needs Matrix handling
                    UseEnabled = true;
                    break;
                // Default
                default:
                    break;
            }
            break;
    }
    // ..................................................................................... _//
    if (filterDataRequested == filterDataCommand) {
        filterCommand = (filterKeyPrefix + filterKey + filterArguments);
        var temp = ((filterKey).split('.'));// Id - short name... i.e. Blinds
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterVendor = temp[1];
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterName = temp[2];
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterKey = filterKey;// Key
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterArguments = filterArguments;
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterCommand = filterCommand;
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterMsId = '';
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterMSIndex = -1;
        if (UsePlay) {
            filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterDoApply = true;
            filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterDoStop = true;
            filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterDoPlay = true;
        }
        if (UseEnabled) {
            filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterDoEnable = true;
        }
        return filterCommand;
    } else {
        return filterCompletionSet;
    }
}
// filterArguments += 'sizingMethod= auto expand';
// filterArguments += 'duration= 1.5';
// filterArguments += ', direction= left';
// filterArguments += ')';
//
// Filter Get By Tag
// ...................................... //
function FilterGetByTagName(filterTagNamePassed) {
    //
    filterTagName = 'div';
    return null;
}
// Filter Get Random
// ...................................... //
function FilterGetRandom(filterClassSingle, filterClassDynamic, filterIndex,
    filterDataCommand, filterCompletion,
    filterObjIdPassed, filterIdPassed) {
    filterRandom = '';
    if (filterRangeLowPassed < filterRangeLow) { filterRangeLowPassed = filterRangeLow; }
    if (filterRangeLowPassed > filterRangeHigh) { filterRangeLowPassed = filterRangeHigh; }
    if (filterRangeHighPassed < filterRangeLow) { filterRangeHighPassed = filterRangeHigh; }
    if (filterRangeHighPassed > filterRangeHigh) { filterRangeHighPassed = filterRangeLow; }
    if (filterRangeLowPassed > filterRangeHighPassed) { filterRangeLowPassed = filterRangeHighPassed; }
    //
    filterIndex = MathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, realFlagOff);
    //
    filterRandom = FilterGetByIndex(filterClassSingle, filterClassDynamic, filterIndex,
        filterDataCommand, 0,
        filterObjIdPassed, filterIdPassed);
    return filterRandom;
}
//
// SectionBlock Timer Task Related (Filter / Move) Commands function (s)
// ...................................... //
// TimerStartFilter
// ...................................... //
function TimerStartFilter(playDirection,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
    filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupImageIndex,
    filterObjIdPassed, filterIdPassed) {
    //
    var timerType = timerTypeTransition;
    var timerGroup = oObjGroupIndex;
    var timerId = oObjGroupImageIndex;
    var timerItemKey = timerId + timerType;
    var timerRootKey = timerRootId + timerType;
    // numeric index used as id, not using a collections
    // new String(oObjNext.id + timerType);
    var timerReset = false;
    // Get
    if (!timerObj[timerGroup]) { timerReset = true; } else {
        if (!timerObj[timerGroup][timerItemKey]) { timerReset = true; } else {
            //
            if (playDirection == playDirectionForward) {
                if (timerObj[timerGroup][timerItemKey].elementIsDisplayed != elementIsDisplayed) { timerReset = true; }
            } else {
                if (timerObj[timerGroup][timerItemKey].elementIsDisplayed != elementIsNotDisplayed) { timerReset = true; }
            }
            if (timerObj[timerGroup][timerItemKey].timerIsRunning) { timerReset = false; }
        }
    }
    // Constructor
    if (timerReset) {
        TimerInitialize(timerType, timerGroup, timerId,
            playDirection,
            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
            filterPlayAll, startIndex, endIndex,
            oObjNext, oObjNextImage,
            oObjGroupIndex, oObjGroupImageIndex,
            filterObjIdPassed, filterIdPassed)
        if (debugTimer && debugTimerTransition) {
            // && debugTimerDetail
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                    timerObj[timerGroup][timerItemKey].playDirection, 'Item Add')
                + ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
                + ', Item added to group'
                + ' at ' + Date()
                + '.',
                'TimerStartFilter', 4708, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
        //
        // timerObj[timerGroup] [timerItemKey].elementIsDisplayed = elementIsDisplayed;
        //
    } else if (timerObj[timerGroup][timerItemKey].timerIsRunning) {
        // Timer exists and is currently busy.
        if (debugTimer && debugTimerTransition) {
            // && debugTimerDetail
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                    timerObj[timerGroup][timerRootKey].playDirection, 'Timing DoStep')
                + ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
                + ', Already running, perform single step'
                + '.',
                'TimerStartFilter', 4723, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
        //
        if (timerMethod == timerMethodGroup) {
            timerObj[timerGroup][timerItemKey].timerIntervalId = timerObj[timerGroup][timerRootKey].timerIntervalId;
        }
        //
        TimerItemDoStepFilter(timerType, timerGroup, timerId);
        return;
    }
    // Create new timers
    timerObj[timerGroup][timerItemKey].elMoveStepLeft = 0;
    timerObj[timerGroup][timerItemKey].elMoveStepTop = 0;
    //
    // ...................................... //
    if (debugTimer && debugTimerTransition) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                timerObj[timerGroup][timerItemKey].playDirection, 'Timer Start')
            + ', Timer Start command being issued now'
            + '.',
            'TimerStartFilter', 4744, null, null,
            errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    TimerStart(timerType, timerGroup, timerId,
        timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
        timerDelay);
    //
    // ...................................... //
    //
}
// Start the Move (animation)
// ...................................... //
function TimerStartMove(playDirection,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
    filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupImageIndex,
    filterObjIdPassed, filterIdPassed) {
    //
    var timerType = timerTypeMove;// Type
    var timerGroup = oObjGroupIndex;// Group
    var timerId = oObjGroupImageIndex;// Id (numeric index used as id, not using a collections)
    // Element Id and Type Key
    var timerItemKey = timerId + timerType;
    var timerRootKey = timerRootId + timerType;
    var timerReset = false;
    //
    if (!timerObj[timerGroup]) { timerReset = true; } else {
        if (!timerObj[timerGroup][timerItemKey]) { timerReset = true; } else {
            timerReset = false;
            //
            if (playDirection == playDirectionForward) {
                if (timerObj[timerGroup][timerItemKey].elementIsDisplayed != elementIsDisplayed) { timerReset = true; }
            } else {
                if (timerObj[timerGroup][timerItemKey].elementIsDisplayed != elementIsNotDisplayed) { timerReset = true; }
            }
            if (timerObj[timerGroup][timerItemKey].timerIsRunning) { timerReset = false; }
        }
    }
    //
    if (timerReset) {
        //
        TimerInitialize(timerType, timerGroup, timerId,
            playDirection,
            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
            filterPlayAll, startIndex, endIndex,
            oObjNext, oObjNextImage,
            oObjGroupIndex, oObjGroupImageIndex,
            filterObjIdPassed, filterIdPassed);
        //
        if (debugTimer && debugTimerMove) {
            // && debugTimerDetail
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                    timerObj[timerGroup][timerItemKey].playDirection, 'Item Add')
                + ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
                + ', Item added to group'
                + ' at ' + Date()
                + '.',
                'TimerStartMove', 4807, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
        //
        // timerObj[timerGroup] [timerItemKey].elementIsDisplayed = elementIsDisplayed;
        //
    } else if (timerObj[timerGroup][timerItemKey].timerIsRunning) {
        // Timer Already Exists...
        if (debugTimer && debugTimerMove) {
            // && debugTimerDetail
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                    timerObj[timerGroup][timerItemKey].playDirection, 'Timing DoStep')
                + ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
                + ', Already running, perform single step'
                + '.',
                'TimerStartMove', 4822, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
        TimerItemDoStepMove(timerType, timerGroup, timerId);
        return;
    }
    // Set Style Left for menu image box
    // oObj.style.left = elLeftOrig;
    // ...................................... //
    // Set Style Top for menu image box
    // oObj.style.top = elTopOrig;
    //
    // ...................................... //
    // ElementMove
    //
    // Distance
    moveDistanceLeft = Math.abs(elLeftDest - elLeftOrig);
    timerObj[timerGroup][timerItemKey].moveDistanceLeft = moveDistanceLeft;
    //
    moveDistanceTop = Math.abs(elTopDest - elTopOrig);
    timerObj[timerGroup][timerItemKey].moveDistanceTop = moveDistanceTop;
    //
    moveDistance = Math.sqrt(Math.pow(moveDistanceTop, 2) + Math.pow(moveDistanceLeft, 2));
    //
    if (timerUseTime) {
        // time based movement
        moveDistancePerSec = moveDistance / timerDuration;
        moveDistancePerSecLeft = moveDistanceLeft / timerDuration;
        moveDistancePerSecTop = moveDistanceTop / timerDuration;
        // Q: Is iterStep Total Steps or Total Steps Per Second?
        // A: Steps per second is a better measure probably
        // timerStepsPerSecond = timerStep / timerDuration;
        // timerStepsPerSecond = timerStep;
        //
        moveOffset = moveDistancePerSec / timerStepsPerSecond;
        moveOffsetLeft = moveDistancePerSecLeft / timerStepsPerSecond;
        if (moveOffsetLeft < moveOffsetMin) { moveOffsetLeft = moveOffsetMin; }
        if (moveOffsetLeft > moveOffsetMax) { moveOffsetLeft = moveOffsetMax; }
        //
        moveOffsetTop = moveDistancePerSecTop / timerStepsPerSecond;
        if (moveOffsetTop < moveOffsetMin) { moveOffsetTop = moveOffsetMin; }
        if (moveOffsetTop > moveOffsetMax) { moveOffsetTop = moveOffsetMax; }
        //
    } else {
        // Step based movement
        moveDistancePerStep = moveDistance / timerStepMin;
        moveDistancePerStepLeft = moveDistanceLeft / timerStepMin;
        moveDistancePerStepTop = moveDistanceTop / timerStepMin;
        //
        moveOffset = moveDistancePerStep;
        moveOffsetLeft = moveDistancePerStepLeft;
        // if (moveOffsetLeft < moveOffsetMin) { moveOffsetLeft = moveOffsetMin; }
        // if (moveOffsetLeft > moveOffsetMax) { moveOffsetLeft = moveOffsetMax; }
        //
        moveOffsetTop = moveDistancePerStepTop;
        // if (moveOffsetTop < moveOffsetMin) { moveOffsetTop = moveOffsetMin; }
        // if (moveOffsetTop > moveOffsetMax) { moveOffsetTop = moveOffsetMax; }
    }
    timerObj[timerGroup][timerItemKey].moveOffsetLeft = moveOffsetLeft;
    timerObj[timerGroup][timerItemKey].moveOffsetTop = moveOffsetTop;
    //
    // ...................................... //
    if (debugTimer && debugTimerMove) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, null, 'Timer Start')
            + ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
            + ', Orig: ( ' + elTopOrig + ', ' + elLeftOrig + ' )'
            + ', Dest: ( ' + elTopDest + ', ' + elLeftDest + ' )'
            + ', Offset: ( ' + moveOffsetTop + ', ' + moveOffsetLeft + ' )'
            + ', Move Top:' + moveDistanceTop
            + ', Move Left:' + moveDistanceLeft
            + '.',
            'TimerStartMove', 4873, null, null,
            errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    TimerStart(timerType, timerGroup, timerId,
        timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
        timerDelay);
    //
    // ...................................... //
    //
}
//
// ..................................................................................... _//
// ...................................... //
function TimerGroupDoStepFilter(timerType, timerGroup, timerId) {
    var timerItemKey = timerId + timerType;
    var timerRootKey = timerRootId + timerType;
    var timerIdCurr;
    var timerIdCnMax = timerObj[timerGroup].length;
    var timerIsActive = false;
    var timerDoAbort = false;
    var timerInstanceIsDone = false;
    //
    timerObj[timerGroup][timerRootKey].timerIntervalStep += 1;
    //
    if (debugTimer && debugTimerTransition) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, null, 'Group In')
            + ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
            + ', Step:' + timerObj[timerGroup][timerRootKey].timerStepCurr
            + ', Time:' + Date()
            + ', Starting Group'
            + '.',
            'TimerGroupDoStepMove', 5111, null, null,
            errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    // Process elements
    for (timerIdCurr = 1; timerIdCurr < (1 + imgMaxByGroup[timerGroup]); timerIdCurr++) {
        //
        timerItemKey = timerIdCurr + timerType;
        if (timerObj[timerGroup][timerItemKey]) {
            if (timerObj[timerGroup][timerItemKey].timerIsRunning) {
                timerInstanceIsDone = TimerItemDoStepFilter(timerType, timerGroup, timerIdCurr);
                if (!timerInstanceIsDone) { timerIsActive = true; }
            }
        }
    }
    //
    if (timerObj[timerGroup][timerRootKey].timerStepCurr > timerObj[timerGroup][timerRootKey].timerStepMax) {
        MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
            TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, null, 'Group Step Max')
            + ', Transition Group Timer Maximum (' + timerObj[timerGroup][timerRootKey].timerStepMax
            + ') number of interval steps (' + timerObj[timerGroup][timerRootKey].timerStepCurr
            + ') exceeded'
            + '!!!',
            'TimerGroupDoStepFilter', 5134, null, null,
            errorIsSevere, errorDoNotDisplayTag, errorDoNotAlert);
        timerDoAbort = true;
    }
    //
    if (timerDoAbort || (!timerIsActive && timerObj[timerGroup][timerRootKey].timerInstance < 1)) {
        // Turn Off Timer
        var timerIntervalId;
        timerIntervalId = timerObj[timerGroup][timerRootKey].timerIntervalId;
        //
        window.clearInterval(timerIntervalId);
        //
        timerStarted -= 1;
        timerObj[timerGroup][timerRootKey].timerIntervalIdPrev = timerIntervalId;
        timerObj[timerGroup][timerRootKey].timerIntervalId = 0;
        //
        timerObj[timerGroup][timerRootKey].timerDateEnd = new Date();
        timerObj[timerGroup][timerRootKey].timerIsRunning = false;
        //
        if (timerObj[timerGroup][timerRootKey].playDirection = playDirectionForward) {
            timerObj[timerGroup][timerRootKey].elementIsDisplayed = elementIsDisplayed;
        } else { timerObj[timerGroup][timerRootKey].elementIsDisplayed = elementIsNotDisplayed; }
        //
        //
        if (debugTimer && debugTimerTransition) {
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoUseRoot,
                    timerObj[timerGroup][timerRootKey].playDirection, 'Group Stop Timer')
                + ', Interval Stopped'
                + ', Stopping Group Timer'
                + '.',
                'TimerGroupDoStepFilter', 5164, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
    }
    //
    if (debugTimer && debugTimerTransition) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            TimerLogText(timerType, timerGroup, timerId, DoUseRoot,
                timerObj[timerGroup][timerRootKey].playDirection, 'Group Out')
            + ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
            + ', Step:' + timerObj[timerGroup][timerRootKey].timerStepCurr
            + ', Time:' + Date()
            + ', Leaving process Group'
            + '.',
            'TimerGroupDoStepFilter', 5177, null, null,
            errorIsComment, true, false);
        //
        if (!timerIsActive && timerObj[timerGroup][timerRootKey].timerInstance < 1) {
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoUseRoot,
                    timerObj[timerGroup][timerRootKey].playDirection, 'Group End')
                + ', Finished Group'
                + '.',
                'TimerGroupDoStepFilter', 5185, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
    }
}
//
// ..................................................................................... _//
// ...................................... //
function TimerItemDoStepFilter(timerType, timerGroup, timerId) {
    var timerItemKey = timerId + timerType
    var timerRootKey = timerRootId + timerType;
    //
    var tempFilterInProgress = true;
    var tempTimeOrStepsCompleted = false;
    //
    var timerDateElps;
    var timerCompletion;
    //
    var errorLogLine;
    //
    timerObj[timerGroup][timerRootKey].timerStepCurr += 1;
    //
    if (!timerObj[timerGroup][timerItemKey]) {
        errorLogLine = 'Invalid Timer Object Error!';
        errorLogLine += charNewLineTag + charTextIndex;
        errorLogLine += TimerKeyText(timerType, timerGroup, timerId);
        errorLogLine += charNewLineTag + charTextIndex;
        errorLogLine += TimerRootKeyText(timerType, timerGroup, timerId);
        eventCurr = Event;
        WindowErrorDisplay(errorSeverityPassed, eventCurr, errorLogLine, 'TimerItemDoStepFilter', 4257);
    }
    //
    timerObj[timerGroup][timerItemKey].timerStepCurr += 1;
    timerObj[timerGroup][timerItemKey].timerIntervalStep += 1;
    //
    if (timerObj[timerGroup][timerItemKey].timerStepCurr = 1) {
        tempMoveInProgress = false;// ******* what? *******
    }
    //
    if (timerObj[timerGroup][timerItemKey].timerIntervalId = -1) {
        timerObj[timerGroup][timerItemKey].timerIntervalId = timerObj[timerGroup][timerRootKey].timerIntervalId;
    }
    //
    // ...................................... //
    // Set Completion for Step Based or Time Based execution
    if (timerUseTime) {
        //
        timerDateElps = TimerGetElapsed(timerType, timerGroup, timerId);
        timerCompletion = timerTimeCompletion = timerDateElps / (timerObj[timerGroup][timerItemKey].timerDuration * 1000);
        if (timerCompletion > 1) { tempTimeOrStepsCompleted = true; }
        //
    } else {
        timerCompletion = timerStepCompletion = timerObj[timerGroup][timerItemKey].timerStepCurr
            / timerObj[timerGroup][timerItemKey].timerStepMin;
        //
        if (timerObj[timerGroup][timerItemKey].timerStepCurr > timerObj[timerGroup][timerItemKey].timerStepMin) {
            tempTimeOrStepsCompleted = true;
        }
    }
    //
    var tempPosTop;
    var tempPosLeft;
    //
    // Stop if maximum # of steps exceeded
    if (timerObj[timerGroup][timerItemKey].timerStepCurr > timerObj[timerGroup][timerItemKey].timerStepMax) {
        MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,

            TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                timerObj[timerGroup][timerItemKey].playDirection, 'StepStopItem')
            + ', At: ( t' + timerObj[timerGroup][timerItemKey].oObj.style.top
            + ', l' + timerObj[timerGroup][timerItemKey].oObj.style.left
            + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5343 ' + ')'
            + ', Transition Maximum (' + timerObj[timerGroup][timerItemKey].timerStepMax
            + ') number of interval steps (' + timerObj[timerGroup][timerItemKey].timerStepCurr
            + ') exceeded' + '!!!',
            'TimerItemDoStepFilter', 5251, null, null,
            errorIsWarning, errorDoNotDisplayTag, errorDoNotAlert);

        tempTimeOrStepsCompleted = true;
    }
    // Mid play adjustments to filters
    // ...................................... //
    // End of loop
    var timerInstanceIsDone = false;
    if (!tempFilterInProgress || tempTimeOrStepsCompleted) {
        // Arrived at destinatioin
        timerInstanceIsDone = true;
        // One timer per Item or Element (per Timer Type)
        timerObj[timerGroup][timerRootKey].timerInstance -= 1;
        if (timerMethod == timerMethodGroup) {
            // Group Timer
            timerIntervalId = timerObj[timerGroup][timerRootKey].timerIntervalId;
        } else if (timerMethod == timerMethodItem) {
            // Item Timer
            // Turn Off Timer
            timerIntervalId = timerObj[timerGroup][timerItemKey].timerIntervalId;
            //
            window.clearInterval(timerIntervalId);
            //
            if (debugTimer && debugTimerDetail && debugTimerTransition) {
                MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                    TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                        timerObj[timerGroup][timerItemKey].playDirection, 'Stop')
                    + ', At: ( t' + timerObj[timerGroup][timerItemKey].oObj.style.top
                    + ', l' + timerObj[timerGroup][timerItemKey].oObj.style.left
                    + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5344 ' + ')'
                    + ', Interval Stopped'
                    + '.',
                    'TimerItemDoStepFilter', 5284, null, null,
                    errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
            }
            //
            timerStarted -= 1;
            timerObj[timerGroup][timerItemKey].timerIntervalIdPrev = timerIntervalId;
            timerObj[timerGroup][timerItemKey].timerIntervalId = 0;
            //
        }
        if (filterResizeIsOn && !timerObj[timerGroup][timerItemKey].elementIsDisplayed) {
            var temp;
            if (playDirection == playDirectionForward) { temp = 1; } else { temp = 0.05; }
            FilterResize(timerObj[timerGroup][timerItemKey].oObj, filterClassMatrix, temp);
        }
        // if (filterObj[filterObjIdPassed].filterSet[0].filterDoStop) {
        // (filterPlayAll, startIndex, endIndex,
        // oObjNext, oObjNextImage, filterObjIdPassed, filterIdPassed);
        FilterStop(
            timerObj[timerGroup][timerItemKey].filterPlayAll,
            timerObj[timerGroup][timerItemKey].startIndex,
            timerObj[timerGroup][timerItemKey].endIndex,
            timerObj[timerGroup][timerItemKey].oObj,
            timerObj[timerGroup][timerItemKey].oObjImage,
            timerGroup,
            timerId,
            timerObj[timerGroup][timerItemKey].filterObjId,
            timerObj[timerGroup][timerItemKey].filterId
        );
        // }
        //
        timerObj[timerGroup][timerItemKey].timerDateEnd = new Date();
        timerObj[timerGroup][timerItemKey].timerIsRunning = false;
        //
        if (timerObj[timerGroup][timerItemKey].playDirection = playDirectionForward) {
            timerObj[timerGroup][timerItemKey].elementIsDisplayed = elementIsDisplayed;
        } else {
            if (elementMoveDuration < filterDuration) {
                timerObj[timerGroup][timerItemKey].oObj.style.display = 'none';
            }
            timerObj[timerGroup][timerItemKey].elementIsDisplayed = elementIsNotDisplayed;
        }
        tempFilterInProgress || tempTimeOrStepsCompleted
        //
        if (debugTimer && debugTimerDetail && debugTimerTransition) {
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                    timerObj[timerGroup][timerItemKey].playDirection, 'Stop')
                + ', At: ( t' + timerObj[timerGroup][timerItemKey].oObj.style.top
                + ', l' + timerObj[timerGroup][timerItemKey].oObj.style.left
                + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5331 ' + ').',
                + ', Stopping Item Timer'
                + '.',
                'TimerItemDoStepFilter', 5331, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
    } else {
        if (debugTimer && debugTimerDetail && debugTimerTransition) {
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                    timerObj[timerGroup][timerItemKey].playDirection, 'SkipItem')
                + ', At: ( t' + timerObj[timerGroup][timerItemKey].oObj.style.top
                + ', l' + timerObj[timerGroup][timerItemKey].oObj.style.left
                + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5345 ' + ')'
                + ', Elapsed:' + timerObj[timerGroup][timerItemKey].timerElapsed / 1000
                + ', Step:' + timerObj[timerGroup][timerItemKey].timerStepCurr
                + ', Time:' + Date()
                + ', Exiting Item but no action'
                + '.',
                'TimerItemDoStepFilter', 5343, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
    }
    return timerInstanceIsDone;
}
//
// ..................................................................................... _//
// ...................................... //
function TimerGroupDoStepMove(timerType, timerGroup, timerId) {
    var timerItemKey = timerId + timerType;
    var timerRootKey = timerRootId + timerType;
    var timerIdCurr;
    var timerIdCnMax = timerObj[timerGroup].length;
    var timerIsActive = false; timerDoAbort = false;
    var timerInstanceIsDone = false;
    //
    timerObj[timerGroup][timerRootKey].timerIntervalStep += 1;
    //
    if (debugTimer && debugTimerMove) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            TimerLogText(timerType, timerGroup, timerId, DoUseRoot,
                timerObj[timerGroup][timerItemKey].playDirection, 'Group In')
            + ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
            + ', Step:' + timerObj[timerGroup][timerRootKey].timerStepCurr
            + ', Time:' + Date()
            + ', Starting Group'
            + '.',
            'TimerGroupDoStepMove', 5371, null, null,
            errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    // Process elements
    for (timerIdCurr = 1; timerIdCurr < imgMaxByGroup[timerGroup] + 1; timerIdCurr++) {
        //
        timerIsActive = false;
        timerItemKey = timerIdCurr + timerType;
        if (timerObj[timerGroup][timerItemKey]) {
            if (timerObj[timerGroup][timerItemKey].timerIsRunning) {
                timerInstanceIsDone = TimerItemDoStepMove(timerType, timerGroup, timerIdCurr);
                if (!timerInstanceIsDone) { timerIsActive = true; }
            }
        }
    }
    //
    if (timerObj[timerGroup][timerRootKey].timerStepCurr > timerObj[timerGroup][timerRootKey].timerStepMax) {
        MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
            TimerLogText(timerType, timerGroup, timerId, DoUseRoot,
                timerObj[timerGroup][timerRootKey].playDirection, 'Group Step Max')
            + 'Move.. Group Timer Maximum (' + timerObj[timerGroup][timerRootKey].timerStepMax
            + ') number of interval steps (' + timerObj[timerGroup][timerRootKey].timerStepCurr
            + ') exceeded'
            + '!!!',
            'TimerGroupDoStepMove', 5393, null, null,
            errorIsSevere, errorDoNotDisplayTag, errorDoNotAlert);
        timerDoAbort = true;
    }
    //
    if (timerDoAbort || (!timerIsActive && timerObj[timerGroup][timerRootKey].timerInstance < 1)) {
        // Turn Off Timer
        var timerIntervalId;
        timerIntervalId = timerObj[timerGroup][timerRootKey].timerIntervalId;
        window.clearInterval(timerIntervalId);
        timerStarted -= 1;
        timerObj[timerGroup][timerRootKey].timerIntervalIdPrev = timerIntervalId;
        timerObj[timerGroup][timerRootKey].timerIntervalId = 0;
        //
        timerObj[timerGroup][timerRootKey].timerDateEnd = new Date();
        timerObj[timerGroup][timerRootKey].timerIsRunning = false;
        //
        if (timerObj[timerGroup][timerRootKey].playDirection = playDirectionForward) {
            timerObj[timerGroup][timerRootKey].elementIsDisplayed = elementIsDisplayed;
        } else { timerObj[timerGroup][timerRootKey].elementIsDisplayed = elementIsNotDisplayed; }
        //
        if (debugTimer && debugTimerMove) {
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoUseRoot,
                    timerObj[timerGroup][timerRootKey].playDirection, 'Group Stop Timer')
                + ', Stopping Group Timer'
                + '.',
                'TimerGroupDoStepMove', 5419, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
    }
    //
    if (debugTimer && debugTimerMove) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            TimerLogText(timerType, timerGroup, timerId, DoUseRoot,
                timerObj[timerGroup][timerRootKey].playDirection, 'Group Out')
            + ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
            + ', Step:' + timerObj[timerGroup][timerRootKey].timerStepCurr
            + ', Time:' + Date()
            + ', Leaving process Group'
            + '.',
            'TimerGroupDoStepMove', 5432, null, null,
            errorIsComment, true, false);
        //
        if (!timerIsActive && timerObj[timerGroup][timerRootKey].timerInstance < 1) {
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoUseRoot,
                    timerObj[timerGroup][timerRootKey].playDirection, 'End')
                + ', Finished Group'
                + '.',
                'TimerGroupDoStepMove', 5440, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
            //
        }
    }
}
//
// ..................................................................................... _//
// ...................................... //
function TimerItemDoStepMove(timerType, timerGroup, timerId) {
    // ...................................... //
    // Set Id's
    var timerItemKey = timerId + timerType;
    var timerRootKey = timerRootId + timerType;
    // ...................................... //
    // initialize completion variables
    var tempMoveInProgress = false;
    var tempTimeOrStepsCompleted = 0;
    var timerCompletionCurr = 0;
    var timerCompletionTemp = 0;
    // ...................................... //
    // initialize positions, direction and methodology variables
    var tempPosTop = -1; var tempPosLeft = -1;
    var playDirection = timerObj[timerGroup][timerItemKey].playDirection;
    var elementMoveMethod = timerObj[timerGroup][timerItemKey].elementMoveMethod;
    var DoMove = false;
    var IsRising = false; var IsRisingFactor = 1;
    var isRightward = false; var isRightwardFactor = -1;
    // ...................................... //
    // Set Timer for new menu image box
    if (timerObj[timerGroup][timerItemKey].timerIntervalId = -1) {
        timerObj[timerGroup][timerItemKey].timerIntervalId = timerObj[timerGroup][timerRootKey].timerIntervalId;
    }
    // ...................................... //
    // Validate Object
    if (!timerObj[timerGroup][timerItemKey]) {
        var errorLogLine = 'Invalid Timer Object Error!';
        errorLogLine += charNewLineTag + charTextIndex;
        errorLogLine += TimerKeyText(timerType, timerGroup, timerId);
        errorLogLine += charNewLineTag + charTextIndex;
        errorLogLine += TimerRootKeyText(timerType, timerGroup, timerId);
        eventCurr = Event;
        WindowErrorDisplay(errorSeverityPassed, eventCurr, errorLogLine, 'TimerItemDoStepFilter', 4258);
    }
    // ...................................... //
    // Increment Current Step
    timerObj[timerGroup][timerRootKey].timerStepCurr += 1;
    timerObj[timerGroup][timerItemKey].timerStepCurr += 1;
    //
    timerObj[timerGroup][timerItemKey].timerIntervalStep += 1;
    //
    timerObj[timerGroup][timerItemKey].elMoveStepTop += 1;
    // ...................................... //
    // Set Style and Position for new menu image box
    if (timerObj[timerGroup][timerItemKey].timerStepCurr == 1) {
        // Start box in initial position
        if (playDirection == playDirectionReverse) {
            timerCompletionTemp = 1.0;
            // leave the object at its current position (the destination)
            // timerObj[timerGroup] [timerItemKey].oObj.style.top = timerObj[timerGroup] [timerItemKey].elTopDest + 'px';
            // timerObj[timerGroup] [timerItemKey].oObj.style.left = timerObj[timerGroup] [timerItemKey].elLeftDest + 'px';
        } else {
            timerCompletionTemp = 0.05;
            timerObj[timerGroup][timerItemKey].oObj.style.top = timerObj[timerGroup][timerItemKey].elTopOrig + 'px';
            timerObj[timerGroup][timerItemKey].oObj.style.left = timerObj[timerGroup][timerItemKey].elLeftOrig + 'px';
        }
        // Resize new object
        if (filterResizeIsOn && !timerObj[timerGroup][timerItemKey].elementIsDisplayed) {
            FilterResize(
                timerObj[timerGroup][timerItemKey].oObj,
                filterClassMatrix,
                timerCompletionTemp);
        }
    }
    //
    // ...................................... //
    // Set Completion based on methodology (Step based or Time Duration based execution)
    if (timerUseTime) {
        // (Elapsed) Time based
        timerObj[timerGroup][timerItemKey].timerDateElps = TimerGetElapsed(timerType, timerGroup, timerId);
        timerCompletionTemp = timerObj[timerGroup][timerItemKey].timerDateElps / (timerObj[timerGroup][timerItemKey].timerDuration * 1000);
    } else {
        // Step based
        timerCompletionTemp = timerObj[timerGroup][timerItemKey].timerStepCurr / timerObj[timerGroup][timerItemKey].timerStepMin;
        if (timerObj[timerGroup][timerItemKey].timerStepCurr > timerObj[timerGroup][timerItemKey].timerStepMin) {
            tempTimeOrStepsCompleted = 5497; timerCompletionTemp = 1;
        }
    }
    //
    if (timerCompletionTemp >= 1) { tempTimeOrStepsCompleted = 5492; timerCompletionTemp = 1; }
    // ...................................... //
    // Set Completion values
    timerCompletionCurr =
        timerObj[timerGroup][timerItemKey].timerCompletion = timerCompletionTemp;
    if (timerUseTime) { timerObj[timerGroup][timerItemKey].timerTimeCompletion = timerCompletionTemp; }
    if (!timerUseTime) { timerObj[timerGroup][timerItemKey].timerStepCompletion = timerCompletionTemp; }
    //
    if (playDirection == playDirectionReverse) { timerCompletionCurr = 1 - timerCompletionTemp; }
    //
    // ...................................... //
    // StepStopItem
    // Stop if maximum # of steps exceeded
    // increment vertical step
    if (timerObj[timerGroup][timerItemKey].elMoveStepTop > timerObj[timerGroup][timerItemKey].timerStepMax) {
        MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
            TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                timerObj[timerGroup][timerItemKey].playDirection, 'StepStopItem')
            + ' At: ( t' + tempPosTop + ', l' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempMoveInProgress + ' : l5515 ' + ').'
            + '.  Move.. Maximum (' + timerObj[timerGroup][timerItemKey].timerStepMax
            + ') number of interval vertical steps (' + timerObj[timerGroup][timerItemKey].timerStepCurr
            + ') exceeded'
            + '!!!',
            'TimerItemDoStepMove', 5515, null, null,
            errorIsSevere, errorDoNotDisplayTag, errorDoNotAlert);
        tempTimeOrStepsCompleted = 5515;
    }
    //
    // increment horizontal step
    timerObj[timerGroup][timerItemKey].elMoveStepLeft += 1;
    //
    /*
    if ( timerObj[timerGroup] [timerItemKey].elMoveStepLeft > timerObj[timerGroup] [timerItemKey].timerStepMax) {
    MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
    TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
    timerObj[timerGroup] [timerItemKey].playDirection, 'StepStopItem')
    + ' At: ( t' + tempPosTop + ', l' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempMoveInProgress + ' : l5525 ' + ')'
    + '.  Move.. Maximum (' + timerObj[timerGroup] [timerItemKey].timerStepMax
    + ') number of interval horizontal steps (' + timerObj[timerGroup] [timerItemKey].timerStepCurr
    + ') exceeded'
    + '!!!',
    'TimerItemDoStepMove', 5525, null, null,
    errorIsSevere, errorDoNotDisplayTag, errorDoNotAlert);
    tempTimeOrStepsCompleted = 5525;
    }
    */
    //
    if (!tempTimeOrStepsCompleted) {
        // Ok to continue
        DoMove = true;
        // ...................................... //
        // Determine if Box is Rising or Dropping
        if (timerObj[timerGroup][timerItemKey].elTopOrig
            > timerObj[timerGroup][timerItemKey].elTopDest) { IsRising = true; IsRisingFactor = -1; }
        //
        /*
        // ...................................... //
        // Decide if move needed
        // Rising
        // was timerObj[timerGroup] [timerItemKey].oObj.style.top
        if (parseInt(timerObj[timerGroup] [timerItemKey].elTopOrig ) < timerObj[timerGroup] [timerItemKey].elTopDest) {
        if (IsRising)  {
        // if ( playDirection == playDirectionForward) { DoMove = true; }
        // if ( playDirection == playDirectionReverse) { DoMove = true; }
        // } else {
        }
        }
        //
        // Dropping
        // was timerObj[timerGroup] [timerItemKey].oObj.style.top
        if (parseInt(timerObj[timerGroup] [timerItemKey].elTopOrig ) > timerObj[timerGroup] [timerItemKey].elTopDest) {
        if (!IsRising)  {
        // if ( playDirection == playDirectionForward) { DoMove = true; }
        // if ( playDirection == playDirectionReverse) { DoMove = true; }
        // } else {
        }
        }
        */
        // Move needed
        if (DoMove) {
            //
            // ...................................... //
            // Set Style Top for Box
            //
            if (elementMoveMethod == elementMoveMethodSlideDown && timerCompletionCurr > 0.5) {
                // SlideDown
                tempPosTop = parseInt(timerObj[timerGroup][timerItemKey].oObj.style.top);
                // don't change top during second half of SlideDown
            } else if (elementMoveMethod == elementMoveMethodSlideSide && timerCompletionCurr < 0.5) {
                // Slide Side
                tempPosTop = parseInt(timerObj[timerGroup][timerItemKey].oObj.style.top);
                // don't change top during first half of SlideSide
            } else {
                //
                // Slide Diagonally
                // always change top during Direct (diagonal) move
                timerCompletionTemp = timerCompletionCurr;
                //
                // SlideDown
                if (elementMoveMethod == elementMoveMethodSlideDown) {
                    timerCompletionTemp = 2 * timerCompletionCurr;
                    // Slide Side
                    // Double speed during slide methods
                } else if (elementMoveMethod == elementMoveMethodSlideSide) {
                    timerCompletionTemp = 2 * (timerCompletionCurr - 0.5);
                }
                // calculate top position for Forward and Reverse
                tempPosTop = timerObj[timerGroup][timerItemKey].elTopOrig
                    + (IsRisingFactor * timerCompletionTemp * timerObj[timerGroup][timerItemKey].moveDistanceTop);
                //
                // tempPosTop = parseInt(tempPosTop);
                timerObj[timerGroup][timerItemKey].oObj.style.top = tempPosTop + 'px';
                //
            } // end of Down, Side, or Diagonal movement
            //
            tempMoveInProgress = true;
        }
        //
        // ...................................... //
        // ...................................... //
        // Set Style Left for menu image box
        tempPosLeft = -1;
        //
        if (DoMove) {
            // ...................................... //
            // Determine if Box is moving Leftward
            if (timerObj[timerGroup][timerItemKey].elLeftOrig
                < timerObj[timerGroup][timerItemKey].elLeftDest) { isRightward = true; isRightwardFactor = 1; }
            //
            // Slide Down
            if (!timerObj[timerGroup][timerItemKey].elementMoveMethod == elementMoveMethodSlideDown
                && timerCompletionCurr < 0.5) {
                // horizontal movement does not start until half way
                // tempPosLeft = timerObj[timerGroup] [timerItemKey].elLeftOrig;
                // tempPosLeft = parseInt(timerObj[timerGroup] [timerItemKey].oObj.style.left);
                // Slide Side
            } else if (timerObj[timerGroup][timerItemKey].elementMoveMethod = elementMoveMethodSlideSide
                && timerCompletionCurr > 0.5) {
                // horizontal movement stops after half way
                // tempPosLeft = timerObj[timerGroup] [timerItemKey].elLeftOrig;
                // tempPosLeft = parseInt(timerObj[timerGroup] [timerItemKey].oObj.style.left);
            } else {
                // Slide Diagonally
                // always change left during Direct (diagonal) move
                timerCompletionTemp = timerCompletionCurr;
                // Slide Down
                // horizontal movement is at doubled speed.
                if (timerObj[timerGroup][timerItemKey].elementMoveMethod = elementMoveMethodSlideDown) {
                    timerCompletionTemp = 2 * (timerCompletionCurr - 0.5);
                }
                // Slide Side
                // horizontal movement is at doubled speed.
                if (timerObj[timerGroup][timerItemKey].elementMoveMethod = elementMoveMethodSlideSide) {
                    timerCompletionTemp = 2 * timerCompletionCurr;
                }
                //
                tempPosLeft = timerObj[timerGroup][timerItemKey].elLeftOrig
                    + (isRightwardFactor * timerCompletionTemp * timerObj[timerGroup][timerItemKey].moveDistanceLeft);
                //
                // tempPosLeft = parseInt(tempPosLeft);
                timerObj[timerGroup][timerItemKey].oObj.style.left = tempPosLeft + 'px';
                //
            } // end of Down, Side, or Diagonal movement
            //
            tempMoveInProgress = true;
            //
        }
        //
        // Resize
        if (filterResizeIsOn && tempMoveInProgress
            && !timerObj[timerGroup][timerItemKey].elementIsDisplayed) {
            //
            timerCompletionTemp = timerObj[timerGroup][timerItemKey].timerCompletion;
            //
            if (playDirection == playDirectionReverse) {
                timerCompletionTemp = 1 - timerCompletionTemp;
            }
            //
            FilterResize(
                timerObj[timerGroup][timerItemKey].oObj,
                filterClassMatrix,
                timerCompletionTemp);
        }
        // timerStepCompletion
        //
    }
    //
    if (timerObj[timerGroup][timerItemKey].timerCompletion > timerTen) {
        timerTen + 0.1;
    }
    //
    if (debugTimer && debugTimerDetail && debugTimerMove) {
        var tempDetails = ', At: ( step ' + timerObj[timerGroup][timerItemKey].timerStepCurr + ' : top ' + tempPosTop + ', left ' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ': ' + (timerCompletionCurr * 100) + '%' + ' : m' + tempMoveInProgress + ' : l5747 ' + ')'
    }
    //
    // ...................................... //
    // End of loop
    var timerInstanceIsDone = false;
    if (!tempMoveInProgress || tempTimeOrStepsCompleted) {
        // Arrived at destinatioin
        timerInstanceIsDone = true;
        timerObj[timerGroup][timerRootKey].timerInstance -= 1;
        if (timerMethod == timerMethodGroup) {
            // Group Timer
            timerIntervalId = timerObj[timerGroup][timerRootKey].timerIntervalId;
        } else if (timerMethod == timerMethodItem) {
            // Item Timer
            // Turn Off Timer
            timerIntervalId = timerObj[timerGroup][timerItemKey].timerIntervalId;
            //
            window.clearInterval(timerIntervalId);
            //
            if (debugTimer && debugTimerDetail && debugTimerMove) {
                MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                    TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                        timerObj[timerGroup][timerItemKey].playDirection, 'Stop')
                    + tempDetails
                    + ', Stopping Item Timer'
                    + '.',
                    'TimerItemDoStepMove', 5711, null, null,
                    errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
            }
            //
            timerStarted -= 1;
            timerObj[timerGroup][timerItemKey].timerIntervalIdPrev = timerIntervalId;
            timerObj[timerGroup][timerItemKey].timerIntervalId = 0;
            //
        }
        // Leave box in final position
        if (playDirection == playDirectionForward) {
            timerObj[timerGroup][timerItemKey].oObj.style.top = timerObj[timerGroup][timerItemKey].elTopDest + 'px';
            timerObj[timerGroup][timerItemKey].oObj.style.left = timerObj[timerGroup][timerItemKey].elLeftDest + 'px';
        } else {
            timerObj[timerGroup][timerItemKey].oObj.style.top = timerObj[timerGroup][timerItemKey].elTopOrig + 'px';
            timerObj[timerGroup][timerItemKey].oObj.style.left = timerObj[timerGroup][timerItemKey].elLeftOrig + 'px';
        }
        //
        timerObj[timerGroup][timerItemKey].timerDateEnd = new Date();
        timerObj[timerGroup][timerItemKey].timerIsRunning = false;
        //
        if (playDirection == playDirectionForward) {
            timerObj[timerGroup][timerItemKey].elementIsDisplayed = elementIsDisplayed;
        } else {
            if (elementMoveDuration >= filterDuration) {
                timerObj[timerGroup][timerItemKey].oObj.style.display = 'none';
            }
            timerObj[timerGroup][timerItemKey].elementIsDisplayed = elementIsNotDisplayed;
        }
        //
        if (debugTimer && debugTimerDetail && debugTimerMove) {
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                    timerObj[timerGroup][timerItemKey].playDirection, 'Stop')
                + tempDetails
                + ', Item Interval Timer Stopped'
                + '.',
                'TimerItemDoStepMove', 5747, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
    } else {
        if (debugTimer && debugTimerDetail && debugTimerMove) {
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
                    timerObj[timerGroup][timerItemKey].playDirection, 'Item')
                + tempDetails
                + ', Elapsed:' + timerObj[timerGroup][timerItemKey].timerElapsed / 1000
                + ', Step:' + timerObj[timerGroup][timerItemKey].timerStepCurr
                + ', Time:' + Date()
                + ', Move:' + moveDistanceLeft
                + ', Rising:' + IsRisingFactor
                + ', Compl:' + timerCompletionTemp
                + ', Move Top:' + timerObj[timerGroup][timerItemKey].moveDistanceTop
                + ', Move Left:' + timerObj[timerGroup][timerItemKey].moveDistanceLeft
                + ', Exiting Item'
                + '.',
                'TimerItemDoStepMove', 5754, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
    }
    return timerInstanceIsDone;
}
// SectionBlock Timer Control function (s)
// ...................................... //
//
// ..................................................................................... _//
// Timer Calculate current running time
// ...................................... //
// Included a setTimeout in BODY onload to delay start of text movement.
// oObjPassed, elLeftOrig, elTopOrig, elLeftDest, elTopDest)
function TimerGetElapsed(timerType, timerGroup, timerId) {
    var timerItemKey = timerId + timerType;
    timerDateCurr = new Date();
    // timerDateElps  = timerDateStart - timerDateCurr;
    var timerDateStartMin = timerObj[timerGroup][timerItemKey].timerDateStart.getMinutes();
    var timerDateStartSec = timerObj[timerGroup][timerItemKey].timerDateStart.getSeconds();
    var timerDateStartMil = timerObj[timerGroup][timerItemKey].timerDateStart.getMilliseconds();
    //
    var timerDateCurrMin = timerDateCurr.getMinutes();
    var timerDateCurrSec = timerDateCurr.getSeconds();
    var timerDateCurrMil = timerDateCurr.getMilliseconds();
    //
    var timerDateElpsMin =
        timerDateCurrMin - timerDateStartMin
        + ((timerDateStartMin > timerDateCurrMin) * 60)
        - (timerDateStartSec > timerDateCurrSec);
    var timerDateElpsSec =
        timerDateCurrSec - timerDateStartSec
        + ((timerDateStartSec > timerDateCurrSec) * 60)
        - (timerDateStartMil > timerDateCurrMil);
    var timerDateElpsMil =
        timerDateCurrMil - timerDateStartMil
        + ((timerDateStartMil > timerDateCurrMil) * 1000);
    //
    timerObj[timerGroup][timerItemKey].timerElapsed =
        (((timerDateElpsMin * 60) + timerDateElpsSec) * 1000) + timerDateElpsMil;
    //
    return timerObj[timerGroup][timerItemKey].timerElapsed;
    //
}
//
// ...................................... //
function TimerStartMoveBusy(timerType, timerGroup, timerId, UseLog) {
    var timerItemKey = timerId + timerType;
    var timerMoveBusy = false;
    if (timerObj[timerGroup]) {
        if (timerObj[timerGroup][timerItemKey]) {
            if (timerObj[timerGroup][timerItemKey].timerIsRunning) {
                timerMoveBusy = true;
            }
        }
    }
    //
    if (UseLog && timerMoveBusy) {
        ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
            'Timer Busy: ' + timerItemKey, 'ElementEventCheckDuplicate', 0);
    }
    //
}
// Timer Move Box (Element, i.e. Div)
// ...................................... //
// This test incrementally repositions an element.
// It loops through a set number of times.
function TimerMoveTest(timerType, timerGroup, timerId) {
    var timerItemKey = timerId + timerType;
    var timerRootKey = timerRootId + timerType;
    //
    for (i = 0; i < 10; i++) {
        iHorizontal += 1;
        iVertical = iHorizontal;
        divMove.style.top = iVertical;
        divMove.style.left = iHorizontal;
    }
    //  iInterval tracks how many times moveDiv has looped and clears the interval
    //  after a set number of loops.
    iInterval++;
    if (iInterval > 25) {
        window.clearInterval(vTimerID);
        divToggle.style.visibility = 'visible';
    }
}
script_state = "Mdm Standard fun Animation functions loaded.";
if (debugLoadIsOn) { debugger; }
