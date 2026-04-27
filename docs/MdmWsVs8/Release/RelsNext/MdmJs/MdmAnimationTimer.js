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
// menuImage = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
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
// Current Image and Position
// // Maximum # of Images By Group
// var imgMaxByGroup = new Array(imgGroupArraySize);
// // Maximum # of Images Per Cascading Row By Group
// var oObjectRowMax = new Array(imgGroupArraySize);
// // Image Display (Visible) Locked Array
// var menuImageLocked = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// // First Image
// ...................................... //
// // First Image Offset By Group, By Top, Left
// var menuImageOffsetFirst = new Array(imgGroupArraySize); // By Top, Left (2)
// // These are layout postion patterns to be applied
// menuImageOffsetLeft = new Array(imgGroupImageArraySize);
// menuImageOffsetTop = new Array(imgGroupImageArraySize);
// // Image Position
// ...................................... //
// // Position of Parent Image (Parent of First only stored at this time)
// var menuImagePositionLeft = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// var menuImagePositionTop = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// var menuImagePositionWidth = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// var menuImagePositionHeight = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// Animation Timer by Group by Image
// Not currently in use
// var menuImageTimerCn = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// Image Postioning Offsets - Large
// ...................................... //
// var menuImageOffsetLeftLarge = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// var menuImageOffsetTopLarge = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// Image Postioning Offsets - Small
// ...................................... //
// These are layout postion patterns to be applied
// var menuImageOffsetLeft = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// var menuImageOffsetTop = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// // SectionBlock Heading Image Group
// // ...................................... //
// oObjGroupIndex = 1;
// var headingGroupPointer = imgGroupArraySize;
// var headingGroupMax = 1;
// var headingGroupCnStart = imgGroupArraySize;
// var headingGroupCnEnd = imgGroupArraySize;
// var headingGroupCnCurr = imgGroupArraySize;
// imgMaxByGroup[headingGroupCnCurr] = imgGroupBoxCount;

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
// var filterIsOn = true; // Transition
// var filterResizeIsOn = true; // Growing image
// var filterDurationOverride = false; // Indicates User has set durations and defaults should not be used.
// Animated Images
// ...................................... //
// Image State
// set the following to the number of images
// then add the correct number of img objects
// var imgUsedCn = 5;
var imgCn = 0;
// var imgMax = 10;
var menuImageCn = 0; // depreciated
var menuImageGroup = 0;
var menuImageItem = 0;
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


// Timers
////////////////////////////////////////////////
// var timerGroupItem = "";
// var timerGroupItemCurr = "";
// var timerGroupItemPrev = "";
// //
// var timerObj = new Array(timerGroupIndexMax);
//
///////////////////////////////////////////////
// var timerFunction = "TimerMoveStepDo";
//
// var vtimerGroupItem;
// var vTimerStart;
// var vTimerStop;
//
///////////////////////////////////////////////
var timerStarted = 0;
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
// SectionBlock Timer Task Related (Filter / Move) Commands function (s)
// ...................................... //
// TimerStartFilter
// ...................................... //
function TimerStartFilter(playDirection,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
    filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupItemIndex,
    filterObjIdPassed, filterIdPassed) {
    script_state += "MdmAnimation:TimerStartFilter:" + filterObjIdPassed;
    //
    try {
        var timerType = timerTypeTransition;
        var timerGroup = oObjGroupIndex;
        var timerGroupItem = oObjGroupItemIndex;
        var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        // numeric index used as id, not using a collections
        // new String(oObjNext.id + timerType);
        var timerReset = false;
        // Get
        if (!timerObj) { timerReset = true; } else {
            if (!timerObj[timerItemKey]) { timerReset = true; } else {
                //
                if (playDirection == playDirectionForward) {
                    if (timerObj[timerItemKey].elementIsDisplayed != elementIsDisplayed) { timerReset = true; }
                } else {
                    if (timerObj[timerItemKey].elementIsDisplayed != elementIsNotDisplayed) { timerReset = true; }
                }
                if (timerObj[timerItemKey].timerIsRunning) { timerReset = false; }
            }
        }
        // Constructor
        if (timerReset) {
            TimerInitialize(IsImageLarge, timerType, timerGroup, timerGroupItem,
                playDirection,
                timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
                filterPlayAll, startIndex, endIndex,
                oObjNext, oObjNextImage,
                oObjGroupIndex, oObjGroupItemIndex,
                filterObjIdPassed, filterIdPassed);
            if ((UseLog || UseDebug)
                && (UseLogTimerDetail || UseLogTimerTransition)
            ) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                        timerObj[timerItemKey].playDirection, 'Item Add')
                    + ', Items:' + timerObj[timerRootKey].timerInstance
                    + ', Item initialized and added to group'
                    + ' at ' + Date()
                    + '.',
                    'MdmAnimation:TimerStartFilter', 1490, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, UseAlert);
            }
            //
            // timerObj [timerItemKey].elementIsDisplayed = elementIsDisplayed;
            //
        } else if (timerObj[timerItemKey].timerIsRunning) {
            // Timer exists and is currently busy.
            if ((UseLog || UseDebug)
                && (UseLogTimerDetail || UseLogTimerTransition)
            ) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                        timerObj[timerRootKey].playDirection, 'Timing DoStep')
                    + ', Items:' + timerObj[timerRootKey].timerInstance
                    + ', Already running, perform single step'
                    + '.',
                    'MdmAnimation:TimerStartFilter', 1506, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, UseAlert);
            }
            //
            // if (!timerObj[timerItemKey].timerIntervalId) {
            //     if (timerMethod == timerMethodGroup) {
            //         timerObj[timerItemKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
            //     } else {
            //         timerObj[timerItemKey].timerIntervalId = timerItemKey;
            //     }
            // } else {
            //     // error
            // }
            //
            TimerItemDoStepFilter(IsImageLarge, timerType, timerGroup, timerGroupItem);
            return;
        }
        // Create new timers
        timerObj[timerItemKey].elMoveStepLeft = 0;
        timerObj[timerItemKey].elMoveStepTop = 0;
        //
        // ...................................... //
        if ((UseLog || UseDebug)
            && (UseLogTimerDetail || UseLogTimerTransition)
        ) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                    timerObj[timerItemKey].playDirection, 'Timer Start')
                + ', Timer Start command being issued now'
                + '.',
                'MdmAnimation:TimerStartFilter', 1528, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, UseAlert);
        }
        //
        TimerStart(IsImageLarge, timerType, timerGroup, timerGroupItem,
            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
            timerDelay);
        //
        // ...................................... //
        //
    } catch (bodyLayoutErr) {
        // Errors:
        // ...................................... //
        script_state = "Timer Start Filter error in " + script_state + "::MdmAnimationTimer:TimerStartFilter";
        ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
    }
    //
}
// Start the Move (animation)
// ...................................... //
function TimerStartMove(playDirection,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
    filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupItemIndex,
    filterObjIdPassed, filterIdPassed) {
    script_state += "MdmAnimation:TimerStartMove:" + filterObjIdPassed;
    //
    try {
        var timerType = timerTypeMove;
        var timerGroup = oObjGroupIndex;
        var timerGroupItem = oObjGroupItemIndex;
        var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        var timerReset = false;
        //
        if (!timerObj[timerItemKey]) { timerReset = true; } else {
            timerReset = false;
            //
            if (playDirection == playDirectionForward) {
                if (timerObj[timerItemKey].elementIsDisplayed != elementIsDisplayed) { timerReset = true; }
            } else {
                if (timerObj[timerItemKey].elementIsDisplayed == elementIsDisplayed) { timerReset = true; }
            }
            if (timerObj[timerItemKey].timerIsRunning) { timerReset = false; }
        }
        //
        if (timerReset) {
            //
            TimerInitialize(IsImageLarge, timerType, timerGroup, timerGroupItem,
                playDirection,
                timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
                filterPlayAll, startIndex, endIndex,
                oObjNext, oObjNextImage,
                oObjGroupIndex, oObjGroupItemIndex,
                filterObjIdPassed, filterIdPassed);
            //
            if ((UseLog || UseDebug)
                && (UseLogTimerDetail || UseLogTimerMove)
            ) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                        timerObj[timerItemKey].playDirection, 'Item Add')
                    + ', Items:' + timerObj[timerRootKey].timerInstance
                    + ', Move Item Timer initialized and added to group'
                    + ' at ' + Date()
                    + '.',
                    'MdmAnimation:TimerStartMove', 1588, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, UseAlert);
            }
            //
            // timerObj [timerItemKey].elementIsDisplayed = elementIsDisplayed;
            //
        } else if (timerObj[timerItemKey].timerIsRunning) {
            // Timer Already Exists...
            if ((UseLog || UseDebug)
                && (UseLogTimerDetail || UseLogTimerMove)
            ) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                        timerObj[timerItemKey].playDirection, 'Timing DoStep')
                    + ', Items:' + timerObj[timerRootKey].timerInstance
                    + ', Already running, perform single step'
                    + '.',
                    'MdmAnimation:TimerStartMove', 1604, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, UseAlert);
            }
            TimerItemDoStepMove(IsImageLarge, timerType, timerGroup, timerGroupItem);
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
        // todo is this correct?
        var elTopOrig = menuImagePositionOrgin[timerGroup][timerGroupItem][IsImageLarge][indexTop];
        var elLeftOrig = menuImagePositionOrgin[timerGroup][timerGroupItem][IsImageLarge][indexLeft];
        //
        var elTopDest = menuImagePositionDest[timerGroup][timerGroupItem][IsImageLarge][indexTop];
        var elLeftDest = menuImagePositionDest[timerGroup][timerGroupItem][IsImageLarge][indexLeft];
        //
        // Distance
        // moveDistanceLeft = parseInt(elLeftDest - elLeftOrig);
        moveDistanceLeft = Math.abs(elLeftDest - elLeftOrig);
        timerObj[timerItemKey].moveDistanceLeft = moveDistanceLeft;
        //
        // moveDistanceTop = parseInt(elTopDest - elTopOrig);
        moveDistanceTop = Math.abs(elTopDest - elTopOrig);
        timerObj[timerItemKey].moveDistanceTop = moveDistanceTop;
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
        timerObj[timerItemKey].moveOffsetLeft = moveOffsetLeft;
        timerObj[timerItemKey].moveOffsetTop = moveOffsetTop;
        //
        // ...................................... //
        if ((UseLog || UseDebug)
            && (UseLogTimerDetail || UseLogTimerMove)
        ) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, null, 'Timer Start')
                + ', Items:' + timerObj[timerRootKey].timerInstance
                + ', Orig: ( ' + elTopOrig + ', ' + elLeftOrig + ' )'
                + ', Dest: ( ' + elTopDest + ', ' + elLeftDest + ' )'
                + ', Offset: ( ' + moveOffsetTop + ', ' + moveOffsetLeft + ' )'
                + ', Move Top:' + moveDistanceTop
                + ', Move Left:' + moveDistanceLeft
                + '.',
                'MdmAnimation:TimerStartMove', 1676, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, UseAlert);
        }
        //
        // Visibility
        if (oObjNext.style.display != 'block') {
            oObjNext.style.display = 'block';
            oObjNextImage.style.display = 'block';
        }
        // Z Index
        ////////////////////////////////////////////////
        imgZindex += 1;
        oObjNext.style.zIndex = imgZindex + oObjIndex;

        // ...................................... //
        //
        TimerStart(IsImageLarge, timerType, timerGroup, timerGroupItem,
            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
            timerDelay);
        //
        // ...................................... //
        //
    } catch (bodyLayoutErr) {
        // Errors:
        // ...................................... //
        script_state = "Timer Start Move error in " + script_state + "::MdmAnimationTimer:TimerStartMove";
        ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
    }
    //
}
//
// ..................................................................................... _//
// ...................................... //
function TimerGroupDoStepFilter(IsImageLarge, timerTypePassed, timerGroupPassed, timerGroupItemPassed) {
    try {
        var timerType = timerTypePassed;
        var timerGroup = timerGroupPassed;
        var timerGroupItem = timerGroupItemPassed;
        var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        script_state += "MdmAnimation:TimerGroupDoStepFilter:" + timerItemKey;
        //
        var timerIsRunning = false;

        var debugFunctionIsOn = false;
        if ((UseLog || UseDebug)
            && (UseLogTimerDetail
                || (UseLogTimerTransition && timerType == timerTypeTransition)
                || (UseLogTimerMove && timerType == timerTypeMove))
        ) {
            debugFunctionIsOn = true;
        }
        //
        var timerFilterKey;
        if (timerMethod == timerMethodGroup) {
            timerFilterKey = timerRootKey;
        } else if (timerMethod == timerMethodItem) {
            // todo Warning!!! Group function used for Item Filters
            timerFilterKey = timerItemKey;
            timerObj[timerRootKey].timerIntervalStep += 1;
        }
        timerObj[timerFilterKey].timerIntervalStep += 1;
        //
        var timerGroupItemCurr;
        var timerGroupItemCnMax = timerObj.length;

        var timerIsActive = false;
        var timerDoAbort = false;
        var timerInstanceIsDone = false;
        //
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(timerObj[timerRootKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot, null, 'Group In')
                + ', Items:' + timerObj[timerRootKey].timerInstance
                + ', Step:' + timerObj[timerRootKey].timerStepCurr
                + ', Time:' + Date()
                + ', Timer Group Do Step Filter'
                + '.',
                'MdmAnimation:TimerGroupDoStepMove', 1709, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, UseAlert);
        }
        //
        // Process elements
        timerGroupItemCurr = 0;
        for (let timerItemKey in timerObj) {
            timerGroupItemCurr++;
            if (timerObj[timerItemKey]) {
                if (timerItemKey.substring(0, 5) == 'Group'
                    && timerObj[timerItemKey].timerGroup == timerGroup
                    // && timerObj[timerItemKey].timerGroupItem == timerGroupItem
                    && timerObj[timerItemKey].timerIsRunning
                ) {
                    timerInstanceIsDone = TimerItemDoStepFilterIsImageLarge, (timerObj[timerItemKey].timerType, timerObj[timerItemKey].timerGroup, timerObj[timerItemKey].timerGroupItem);
                    if (!timerInstanceIsDone) { timerIsActive = true; }
                }
            }
        }
        //
        if (timerObj[timerFilterKey].timerStepCurr > timerObj[timerFilterKey].timerStepMax) {
            if (debugFunctionIsOn) {
                MessageLog(null, DoNotUseDebug, DoNotUseSingleLine,
                    TimerTextLog(timerObj[timerFilterKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot, null, 'Group Step Max')
                    + ', Transition Group Timer Maximum (' + timerObj[timerFilterKey].timerStepMax
                    + ') number of interval steps (' + timerObj[timerFilterKey].timerStepCurr
                    + ') exceeded'
                    + '!!!',
                    'MdmAnimation:TimerGroupDoStepFilter', 1732, 0, null, null,
                    errorIsSevere, errorDoNotDisplayTag, UseAlert);
            }
            timerDoAbort = true;
        }
        //
        if (timerDoAbort
            || (!timerIsActive
                && (timerObj[timerFilterKey].timerIsRunning || timerObj[timerFilterKey].timerInstance < 1))
        ) {
            // Turn Off or Abort Timer
            TimerStop(IsImageLarge, timerObj[timerFilterKey].timerType, timerObj[timerFilterKey].timerGroup, timerObj[timerFilterKey].timerGroupItem, 0);

            // Displayed
            if (timerObj[timerFilterKey].playDirection = playDirectionForward) {
                timerObj[timerFilterKey].elementIsDisplayed = elementIsDisplayed;
            } else { timerObj[timerFilterKey].elementIsDisplayed = elementIsNotDisplayed; }
            //
            //
            if (debugFunctionIsOn) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    TimerTextLog(timerObj[timerFilterKey].oObj, timerType, timerGroup, timerGroupItem, DoUseRoot,
                        timerObj[timerFilterKey].playDirection, 'Group Stop Timer')
                    + ', Interval Stopped'
                    + ', Stopping Group Filter Timer'
                    + '.',
                    'MdmAnimation:TimerGroupDoStepFilter', 1763, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, UseAlert);
            }
        }
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(timerObj[timerFilterKey].oObj, timerType, timerGroup, timerGroupItem, DoUseRoot,
                    timerObj[timerFilterKey].playDirection, 'Group Out')
                + ', Items:' + timerObj[timerFilterKey].timerInstance
                + ', Step:' + timerObj[timerFilterKey].timerStepCurr
                + ', Time:' + Date()
                + ', Leaving process Group'
                + '.',
                'MdmAnimation:TimerGroupDoStepFilter', 1777, 0, null, null,
                errorIsComment, true, false);
            //
        }
        if (debugFunctionIsOn
            && (!timerIsActive && (!timerObj[timerItemKey].timerIsRunning || timerObj[timerRootKey].timerInstance < 1))) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(timerObj[timerFilterKey].oObj, timerType, timerGroup, timerGroupItem, DoUseRoot,
                    timerObj[timerFilterKey].playDirection, 'Group End')
                + ', Finished Group'
                + '.',
                'MdmAnimation:TimerGroupDoStepFilter', 1786, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, UseAlert);
        }
        //
    } catch (bodyLayoutErr) {
        // Errors:
        // ...................................... //
        script_state = "Do Step Filter error in " + script_state + "::MdmAnimationTimer:TimerGroupDoStepFilter";
        ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
    }
    //
}
//
// ..................................................................................... _//
// ...................................... //
function TimerItemDoStepFilter(IsImageLarge, timerTypePassed, timerGroupPassed, timerGroupItemPassed) {
    try {
        var timerType = timerTypePassed;
        var timerGroup = timerGroupPassed;
        var timerGroupItem = timerGroupItemPassed;
        var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        script_state += "MdmAnimation:TimerItemDoStepFilter:" + timerItemKey;

        var debugFunctionIsOn = false;
        if ((UseLog || UseDebug)
            && (UseLogTimerDetail
                || (UseLogTimerTransition && timerType == timerTypeTransition)
                || (UseLogTimerMove && timerType == timerTypeMove))
        ) {
            debugFunctionIsOn = true;
        }
        //
        var timerFilterKey = null;
        if (timerMethod == timerMethodGroup) {
            timerFilterKey = timerRootKey;
        } else if (timerMethod == timerMethodItem) {
            timerFilterKey = timerItemKey;
        }
        var tempFilterInProgress = true;
        var tempTimeOrStepsCompleted = false;
        var timerInstanceIsDone = false;
        var timerInstanceIsSkip = false;
        //
        var timerDateElps;
        var timerCompletion;
        //
        var errorLogLine;
        //
        if (!timerObj[timerRootKey]) {
            errorLogLine = 'Invalid Timer Root (Group) Object Error: ' + timerRootKey;
            errorLogLine += charNewLineTag + charTextIndent;
            errorLogLine += TimerTextKey(null, timerType, timerGroup, timerGroupItem);
            // errorLogLine += charNewLineTag + charTextIndent;
            // errorLogLine += TimerTextRootKey(IsImageLarge, timerType, timerGroup, timerGroupItem);
            ErrorOccured("MdmAnimation:TimerItemDoStepFilter", 1815, 0, null, oObjNext, oObj, errorLogLine, errorIsSevere, errorDoDisplayTag, UseAlert);
            timerCompletion = 100;
            timerInstanceIsSkip = true;
        } else {
            timerObj[timerRootKey].timerStepCurr += 1;
            // Redundant check when timerMethodGroup
            if (!timerObj[timerFilterKey]) {
                errorLogLine = 'Invalid Timer Object Error:' + timerFilterKey;
                errorLogLine += charNewLineTag + charTextIndent;
                errorLogLine += TimerTextKey(null, timerType, timerGroup, timerGroupItem);
                errorLogLine += charNewLineTag + charTextIndent;
                errorLogLine += TimerTextRootKey(IsImageLarge, timerType, timerGroup, timerGroupItem);
                ErrorOccured("MdmAnimation:TimerItemDoStepFilter", 1815, 0, null, oObjNext, oObj, errorLogLine, errorIsSevere, errorDoDisplayTag, UseAlert);
                timerCompletion = 101;
                timerInstanceIsSkip = true;
            } else {
                //
                timerObj[timerFilterKey].timerStepCurr += 1;
                timerObj[timerFilterKey].timerIntervalStep += 1;
                //
                if (timerObj[timerFilterKey].timerStepCurr == 1) {
                    tempMoveInProgress = false;// ******* what? *******
                }
                //
                // if (timerObj[timerFilterKey].timerIntervalId == -1) {
                //     timerObj[timerFilterKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
                // }
                //
                // ...................................... //
                // Set Completion for Step Based or Time Based execution
                if (timerUseTime) {
                    // Use Time
                    timerDateElps = TimerGetElapsed(IsImageLarge, timerType, timerGroup, timerGroupItem);
                    timerCompletion = timerTimeCompletion = timerDateElps / (timerObj[timerFilterKey].timerDuration * 1000);
                    //
                    if (timerCompletion > 1) { tempTimeOrStepsCompleted = true; }
                    //
                } else {
                    // Use Steps
                    timerCompletion = timerStepCompletion = timerObj[timerFilterKey].timerStepCurr
                        / timerObj[timerFilterKey].timerStepMin;
                    //
                    if (timerObj[timerFilterKey].timerStepCurr > timerObj[timerFilterKey].timerStepMin) {
                        tempTimeOrStepsCompleted = true;
                    }
                }
                //
                var tempPosTop;
                var tempPosLeft;
                //
                // Stop if maximum # of steps exceeded
                if (timerObj[timerFilterKey].timerStepCurr > timerObj[timerFilterKey].timerStepMax) {
                    if (debugFunctionIsOn) {
                        MessageLog(null, DoNotUseDebug, DoNotUseSingleLine,
                            TimerTextLog(timerObj[timerFilterKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                                timerObj[timerFilterKey].playDirection, 'StepStopItem')
                            + ', At: ( t' + timerObj[timerFilterKey].oObj.style.top
                            + ', l' + timerObj[timerFilterKey].oObj.style.left
                            + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5343 ' + ')'
                            + ', Transition Maximum (' + timerObj[timerFilterKey].timerStepMax
                            + ') number of interval steps (' + timerObj[timerFilterKey].timerStepCurr
                            + ') exceeded' + '!!!',
                            'MdmAnimation:TimerItemDoStepFilter', 1860, 0, null, null,
                            errorIsWarning, errorDoNotDisplayTag, UseAlert);
                    }
                    tempTimeOrStepsCompleted = true;
                }
                // Mid play adjustments to filters
                // ...................................... //
                // End of loop
                timerInstanceIsDone = false;
                if (!tempFilterInProgress || tempTimeOrStepsCompleted) {
                    // Arrived at destination - Stop timer
                    timerInstanceIsDone = true;
                    //
                    // Stop Filter Timer
                    if (debugFunctionIsOn) {
                        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                            TimerTextLog(timerObj[timerFilterKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                                timerObj[timerFilterKey].playDirection,
                                'Stop' + ((timerMethod == timerMethodGroup) ? 'Group' : 'Item') + ' Filter Timer')
                            + ', At: ( t' + timerObj[timerFilterKey].oObj.style.top
                            + ', l' + timerObj[timerFilterKey].oObj.style.left
                            + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5344 ' + ')'
                            + ', Interval ' + timerObj[timerFilterKey].timerIntervalId + ' ' + ((timerMethod == timerMethodGroup) ? 'Group' : 'Item') + ' Stopping Timer'
                            + '.',
                            'MdmAnimation:TimerItemDoStepFilter', 1893, 0, null, null,
                            errorIsComment, errorDoNotDisplayTag, UseAlert);
                    }
                    //
                    TimerStop(IsImageLarge, timerObj[timerFilterKey].timerType, timerObj[timerFilterKey].timerGroup, timerObj[timerFilterKey].timerGroupItem, 0);
                    //
                    // Filter Timer Stopped
                    if (debugFunctionIsOn) {
                        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                            TimerTextLog(timerObj[timerFilterKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                                timerObj[timerFilterKey].playDirection, 'Stop Group Timer')
                            + ', At: ( t' + timerObj[timerFilterKey].oObj.style.top
                            + ', l' + timerObj[timerFilterKey].oObj.style.left
                            + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5344 ' + ')'
                            + ', Interval ' + timerIntervalId + ' Stopped'
                            + '.',
                            'MdmAnimation:TimerItemDoStepFilter', 1893, 0, null, null,
                            errorIsComment, errorDoNotDisplayTag, UseAlert);
                    }
                    // Resize
                    if (filterResizeIsOn && !timerObj[timerFilterKey].elementIsDisplayed) {
                        var temp;
                        if (playDirection == playDirectionForward) { temp = 1; } else { temp = 0.05; }
                        FilterResize(timerObj[timerFilterKey].oObj, filterClassMatrix, temp);
                    }
                    // Stop Filter Animation
                    // if (filterObj[filterObjIdPassed].filterSet[0].filterDoStop) {
                    // (filterPlayAll, startIndex, endIndex,
                    // oObjNext, oObjNextImage, filterObjIdPassed, filterIdPassed);
                    FilterStop(
                        timerObj[timerFilterKey].filterPlayAll,
                        timerObj[timerFilterKey].startIndex,
                        timerObj[timerFilterKey].endIndex,
                        timerObj[timerFilterKey].oObj,
                        timerObj[timerFilterKey].oObjImage,
                        timerGroup,
                        timerGroupItem,
                        timerObj[timerFilterKey].filterObjId,
                        timerObj[timerFilterKey].filterId
                    );
                    // }
                    //
                    if (timerObj[timerFilterKey].playDirection == playDirectionForward) {
                        timerObj[timerFilterKey].elementIsDisplayed = elementIsDisplayed;
                    } else {
                        // if (elementMoveDuration < filterDuration) {
                        //     timerObj[timerFilterKey].oObj.style.display = 'none';
                        // }
                        timerObj[timerFilterKey].elementIsDisplayed = elementIsNotDisplayed;
                    }
                    tempFilterInProgress || tempTimeOrStepsCompleted
                    //
                    if (debugFunctionIsOn) {
                        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                            TimerTextLog(timerObj[timerFilterKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                                timerObj[timerFilterKey].playDirection, 'Stop')
                            + ', At: ( t' + timerObj[timerFilterKey].oObj.style.top
                            + ', l' + timerObj[timerFilterKey].oObj.style.left
                            + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5331 ' + ').',
                            + ', Stopping Item Timer'
                            + '.',
                            'MdmAnimation:TimerItemDoStepFilter', 1945, 0, null, null,
                            errorIsComment, errorDoNotDisplayTag, UseAlert);
                    }
                } else {
                    timerInstanceIsSkip = true;
                }
            }
        }
        if (timerInstanceIsSkip) {
            if (debugFunctionIsOn) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    TimerTextLog(timerObj[timerFilterKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                        timerObj[timerFilterKey].playDirection, 'SkipItem')
                    + ', At: ( t' + timerObj[timerFilterKey].oObj.style.top
                    + ', l' + timerObj[timerFilterKey].oObj.style.left
                    + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5345 ' + ')'
                    + ', Elapsed:' + timerObj[timerFilterKey].timerElapsed / 1000
                    + ', Step:' + timerObj[timerFilterKey].timerStepCurr
                    + ', Time:' + Date()
                    + ', Exiting Item but no action'
                    + '.',
                    'MdmAnimation:TimerItemDoStepFilter', 1961, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, UseAlert);
            }
        }
        //
    } catch (bodyLayoutErr) {
        // Errors:
        // ...................................... //
        script_state = "Do Step Filter error in " + script_state + "::MdmAnimationTimer:TimerItemDoStepFilter";
        ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
    }
    //
    return timerInstanceIsDone;
}

// ...................................... //
function TimerGroupDoStepMove(IsImageLarge, timerTypePassed, timerGroupPassed, timerGroupItemPassed) {
    var timerType = timerTypePassed;
    var timerGroup = timerGroupPassed;
    var timerGroupItem = timerGroupItemPassed;
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    script_state += "MdmAnimation:TimerGroupDoStepMove:" + timerItemKey;
    try {

        var timerGroupItemCurr;
        var timerGroupItemCnMax = timerObj.length;
        var timerIsActive = false; timerDoAbort = false;
        var timerInstanceIsDone = false;
        //
        var debugFunctionIsOn = false;
        if ((UseLog || UseDebug)
            && (UseLogTimerDetail
                || (UseLogTimerTransition && timerType == timerTypeTransition)
                || (UseLogTimerMove && timerType == timerTypeMove))
        ) {
            debugFunctionIsOn = true;
        }
        //
        var timerMoveKey;
        if (timerMethod == timerMethodGroup) {
            timerMoveKey = timerRootKey;
        } else if (timerMethod == timerMethodItem) {
            // todo Warning!!! Group funciton used with Item methodology
            timerMoveKey = timerItemKey;
            timerObj[timerRootKey].timerIntervalStep += 1;
        }

        timerObj[timerMoveKey].timerIntervalStep += 1;
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(timerObj[timerRootKey].oObj, timerType, timerGroup, timerGroupItem, DoUseRoot,
                    timerObj[timerRootKey].playDirection, 'Group In')
                + ', Items:' + timerObj[timerRootKey].timerInstance
                + ', Step:' + timerObj[timerRootKey].timerStepCurr
                + ', Time:' + Date()
                + ', Starting Group Steps'
                + '.',
                'MdmAnimation:TimerGroupDoStepMove', 1989, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, UseAlert);
        }
        // Process elements
        timerIsActive = false;
        timerGroupItemCurr = 0;
        for (let timerItemKey in timerObj) {
            timerGroupItemCurr++;
            if (timerObj[timerItemKey]) {
                if (timerItemKey.substring(0, 5) == 'Group'
                    && timerObj[timerItemKey].timerGroup == timerGroup
                    // && timerObj[timerItemKey].timerGroupItem == timerGroupItem
                    // todo grab the cleaner form of this:
                    && (timerObj[timerItemKey].timerIsRunning || timerMethod == timerMethodGroup)
                ) {

                    timerInstanceIsDone = TimerItemDoStepMove(IsImageLarge, timerObj[timerItemKey].timerType, timerObj[timerItemKey].timerGroup, timerObj[timerItemKey].timerGroupItem);
                    if (!timerInstanceIsDone) { timerIsActive = true; }
                }
            }
        }
        //
        if (timerObj[timerRootKey].timerStepCurr > timerObj[timerRootKey].timerStepMax) {
            if (debugFunctionIsOn) {
                MessageLog(null, DoNotUseDebug, DoNotUseSingleLine,
                    TimerTextLog(timerObj[timerRootKey].oObj, timerType, timerGroup, timerGroupItem, DoUseRoot,
                        timerObj[timerRootKey].playDirection, 'Group Step Max')
                    + 'Move.. Group Timer Maximum (' + timerObj[timerRootKey].timerStepMax
                    + ') number of interval steps (' + timerObj[timerRootKey].timerStepCurr
                    + ') exceeded'
                    + '!!!',
                    'MdmAnimation:TimerGroupDoStepMove', 2013, 0, null, null,
                    errorIsSevere, errorDoNotDisplayTag, UseAlert);
            }
            timerDoAbort = true;
        }
        //
        if (timerDoAbort
            || (!timerIsActive &&
                (timerObj[timerRootKey].timerIsRunning
                    || timerObj[timerRootKey].timerInstance < 1
                )
            )
        ) {
            // Turn Off Timer
            var timerIntervalId = timerObj[timerRootKey].timerIntervalId;
            if (timerIntervalId) { window.clearInterval(timerIntervalId); }
            timerStarted -= 1;
            timerObj[timerRootKey].timerIntervalIdPrev = timerIntervalId;
            timerObj[timerRootKey].timerIntervalId = 0;
            timerObj[timerRootKey].timerIntervalIdStart = 0;
            timerObj[timerRootKey].timerInstance = 0;
            timerObj[timerRootKey].timerDateEnd = new Date();
            timerObj[timerRootKey].timerIsRunning = false;
            //
            if (timerObj[timerRootKey].playDirection == playDirectionForward) {
                timerObj[timerRootKey].elementIsDisplayed = elementIsDisplayed;
            } else { timerObj[timerRootKey].elementIsDisplayed = elementIsNotDisplayed; }
            //
            if (debugFunctionIsOn) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    TimerTextLog(timerObj[timerRootKey].oObj, timerType, timerGroup, timerGroupItem, DoUseRoot,
                        timerObj[timerRootKey].playDirection, 'Group Stop Timer')
                    + ', Stopping Group Move Timer'
                    + '.',
                    'MdmAnimation:TimerGroupDoStepMove', 2040, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, UseAlert);
            }
        }
        //
        if (debugFunctionIsOn) {
            MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(timerObj[timerRootKey].oObj, timerType, timerGroup, timerGroupItem, DoUseRoot,
                    timerObj[timerRootKey].playDirection, 'Group Out')
                + ', Items:' + timerObj[timerRootKey].timerInstance
                + ', Step:' + timerObj[timerRootKey].timerStepCurr
                + ', Time:' + Date()
                + ', Leaving process Group'
                + '.',
                'MdmAnimation:TimerGroupDoStepMove', 2054, 0, null, null,
                errorIsComment, true, false);
            //
            if (!timerIsActive && timerObj[timerRootKey].timerInstance < 1) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    TimerTextLog(timerObj[timerRootKey].oObj, timerType, timerGroup, timerGroupItem, DoUseRoot,
                        timerObj[timerRootKey].playDirection, 'End')
                    + ', Finished Group'
                    + '.',
                    'MdmAnimation:TimerGroupDoStepMove', 2063, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, UseAlert);
            }
        }
        //
    } catch (bodyLayoutErr) {
        // Errors:
        // ...................................... //
        script_state = "Do Step Move error in " + script_state + "::MdmAnimationTimer:TimerGroupDoStepMove";
        ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
    }
    //
}
// ...................................... //
function TimerItemDoStepMove(IsImageLarge, timerType, timerGroup, timerGroupItem) {
    try {
        // Set Id's
        var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        script_state += "MdmAnimation:TimerItemDoStepMove:" + timerItemKey;

        var debugFunctionIsOn = false;
        if ((UseLog || UseDebug)
            && (UseLogTimerDetail
                || (UseLogTimerTransition && timerType == timerTypeTransition)
                || (UseLogTimerMove && timerType == timerTypeMove))
        ) {
            debugFunctionIsOn = true;
        }
        var timerMoveKey;
        if (timerMethod == timerMethodGroup) {
            timerMoveKey = timerRootKey;
        } else if (timerMethod == timerMethodItem) {
            // todo Warning!!! Group funciton used with Item methodology
            timerMoveKey = timerItemKey;
        }
        // ...................................... //
        // Validate Object
        if (!timerObj[timerItemKey]) {
            var errorLogLine = 'Invalid Timer Object Error:' + timerItemKey;
            errorLogLine += charNewLineTag + charTextIndent;
            errorLogLine += TimerTextKey(null, timerType, timerGroup, timerGroupItem);
            // errorLogLine += charNewLineTag + charTextIndent;
            // errorLogLine += TimerTextRootKey(IsImageLarge, timerType, timerGroup, timerGroupItem);
            ErrorOccured("MdmAnimation:TimerItemDoStepMove", 1815, 0, null, oObjNext, oObj, errorLogLine, errorIsSevere, errorDoDisplayTag, UseAlert);
        } else {
            // Valid timer
            // ...................................... //
            // initialize completion variables
            var tempMoveInProgress = false;
            var tempTimeOrStepsCompleted = 0;
            var timerCompletionCurr = 0;
            var timerCompletionTemp = 0;
            // ...................................... //
            // initialize positions, direction and methodology variables
            var tempPosTop = -1; var tempPosLeft = -1;
            var playDirection = timerObj[timerMoveKey].playDirection;
            var elementMoveMethod = timerObj[timerMoveKey].elementMoveMethod;
            var DoMove = false;
            var IsRising = false; var IsRisingFactor = 1;
            var isRightward = false; var isRightwardFactor = -1;
            // ...................................... //
            // Increment Current Step
            timerObj[timerItemKey].timerStepCurr += 1;
            timerObj[timerRootKey].timerIntervalStep += 1;
            timerObj[timerRootKey].timerStepCurr += 1;
            // ...................................... //
            // Set Timer for new menu image box
            // if (timerObj[timerItemKey].timerIntervalId = -1) {
            //     timerObj[timerItemKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
            // }
            timerObj[timerItemKey].elMoveStepTop += 1;
            // ...................................... //
            // Set Style and Position for new menu image box
            if (timerObj[timerItemKey].timerStepCurr == 1) {
                // Start box in initial position
                if (playDirection == playDirectionReverse) {
                    timerCompletionTemp = 1.0;
                    // leave the object at its current position (the destination)
                    // timerObj [timerItemKey].oObj.style.top = timerObj [timerItemKey].elTopDest + 'px';
                    // timerObj [timerItemKey].oObj.style.left = timerObj [timerItemKey].elLeftDest + 'px';
                } else {
                    timerCompletionTemp = 0.05;
                    timerObj[timerItemKey].oObj.style.top = timerObj[timerItemKey].elTopOrig + 'px';
                    timerObj[timerItemKey].oObj.style.left = timerObj[timerItemKey].elLeftOrig + 'px';
                }
                // Resize new object
                if (filterResizeIsOn && !timerObj[timerItemKey].elementIsDisplayed) {
                    FilterResize(
                        timerObj[timerItemKey].oObj,
                        filterClassMatrix,
                        timerCompletionTemp);
                }
            }
            // ...................................... //
            // Set Completion based on methodology (Step based or Time Duration based execution)
            if (timerUseTime) {
                // (Elapsed) Time based
                timerObj[timerItemKey].timerDateElps = TimerGetElapsed(IsImageLarge, timerType, timerGroup, timerGroupItem);
                timerCompletionTemp = timerObj[timerItemKey].timerDateElps / (timerObj[timerItemKey].timerDuration * 1000);
            } else {
                // Step based
                timerCompletionTemp = timerObj[timerItemKey].timerStepCurr / timerObj[timerItemKey].timerStepMin;
                if (timerObj[timerItemKey].timerStepCurr > timerObj[timerItemKey].timerStepMin) {
                    tempTimeOrStepsCompleted = 5497;
                    timerCompletionTemp = timerObj[timerItemKey].timerStepCurr;
                }
            }
            if (timerCompletionTemp >= 1) {
                tempTimeOrStepsCompleted = 5492;
                // timerCompletionTemp = 1;
            }
            // ...................................... //
            // Set Completion values
            timerCompletionCurr = timerObj[timerItemKey].timerCompletion = timerCompletionTemp;
            if (timerUseTime) { timerObj[timerItemKey].timerTimeCompletion = timerCompletionTemp; }
            if (!timerUseTime) { timerObj[timerItemKey].timerStepCompletion = timerCompletionTemp; }
            //
            if (playDirection == playDirectionReverse) { timerCompletionCurr = 1 - timerCompletionTemp; }
            //
            // ...................................... //
            // StepStopItem
            // Stop if maximum # of steps exceeded
            // increment vertical step
            if (timerObj[timerItemKey].timerStepCurr > timerObj[timerItemKey].timerStepMax) {
                MessageLog(null, DoNotUseDebug, DoNotUseSingleLine,
                    TimerTextLog(timerObj[timerItemKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                        timerObj[timerItemKey].playDirection, 'StepStopItem')
                    + ' At: ( t' + tempPosTop + ', l' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempMoveInProgress + ' : l5515 ' + ').'
                    + '.  Move.. Maximum (' + timerObj[timerItemKey].timerStepMax
                    + ') number of interval vertical steps (' + timerObj[timerItemKey].timerStepCurr
                    + ') exceeded'
                    + '!!!',
                    'MdmAnimation:TimerItemDoStepMove', 2175, 0, null, null,
                    errorIsSevere, errorDoNotDisplayTag, UseAlert);
                tempTimeOrStepsCompleted = 2175;
            }
            // increment horizontal step
            timerObj[timerItemKey].elMoveStepLeft += 1;
            /*
            if ( timerObj [timerItemKey].elMoveStepLeft > timerObj [timerItemKey].timerStepMax) {
            MessageLog(null, DoNotUseDebug, DoNotUseSingleLine,
            TimerTextLog(timerObj[timerItemKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
            timerObj [timerItemKey].playDirection, 'StepStopItem')
            + ' At: ( t' + tempPosTop + ', l' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempMoveInProgress + ' : l5525 ' + ')'
            + '.  Move.. Maximum (' + timerObj [timerItemKey].timerStepMax
            + ') number of interval horizontal steps (' + timerObj [timerItemKey].timerStepCurr
            + ') exceeded'
            + '!!!',
            'MdmAnimation:TimerItemDoStepMove', 2193, 0, null, null,
            errorIsSevere, errorDoNotDisplayTag, UseAlert);
            tempTimeOrStepsCompleted = 2193;
            }
            */
            //
            if (!tempTimeOrStepsCompleted) {
                // Ok to continue
                DoMove = true;
                // ...................................... //
                // Determine if Box is Rising or Dropping
                if (timerObj[timerItemKey].elTopOrig
                    > timerObj[timerItemKey].elTopDest) { IsRising = true; IsRisingFactor = -1; }
                //
                /*
                // ...................................... //
                // Decide if move needed
                // Rising
                // was timerObj [timerItemKey].oObj.style.top
                if (parseInt(timerObj [timerItemKey].elTopOrig ) < timerObj [timerItemKey].elTopDest) {
                if (IsRising)  {
                // if ( playDirection == playDirectionForward) { DoMove = true; }
                // if ( playDirection == playDirectionReverse) { DoMove = true; }
                // } else {
                }
                }
                //
                // Dropping
                // was timerObj [timerItemKey].oObj.style.top
                if (parseInt(timerObj [timerItemKey].elTopOrig ) > timerObj [timerItemKey].elTopDest) {
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
                        tempPosTop = parseInt(timerObj[timerItemKey].oObj.style.top);
                        // don't change top during second half of SlideDown
                    } else if (elementMoveMethod == elementMoveMethodSlideSide && timerCompletionCurr < 0.5) {
                        // Slide Side
                        tempPosTop = parseInt(timerObj[timerItemKey].oObj.style.top);
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
                        tempPosTop = timerObj[timerItemKey].elTopOrig
                            + (IsRisingFactor * timerCompletionTemp * timerObj[timerItemKey].moveDistanceTop);
                        //
                        // tempPosTop = parseInt(tempPosTop);
                        timerObj[timerItemKey].oObj.style.top = tempPosTop + 'px';
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
                    if (timerObj[timerItemKey].elLeftOrig
                        < timerObj[timerItemKey].elLeftDest) { isRightward = true; isRightwardFactor = 1; }
                    //
                    // Slide Down
                    if (!timerObj[timerItemKey].elementMoveMethod == elementMoveMethodSlideDown
                        && timerCompletionCurr < 0.5) {
                        // horizontal movement does not start until half way
                        // tempPosLeft = timerObj [timerItemKey].elLeftOrig;
                        // tempPosLeft = parseInt(timerObj [timerItemKey].oObj.style.left);

                    } else if (timerObj[timerItemKey].elementMoveMethod == elementMoveMethodSlideSide
                        && timerCompletionCurr > 0.5) {
                        // Slide Side
                        // horizontal movement stops after half way
                        // tempPosLeft = timerObj [timerItemKey].elLeftOrig;
                        // tempPosLeft = parseInt(timerObj [timerItemKey].oObj.style.left);
                    } else {
                        // Slide Diagonally
                        // always change left during Direct (diagonal) move
                        timerCompletionTemp = timerCompletionCurr;
                        //
                        if (timerObj[timerItemKey].elementMoveMethod == elementMoveMethodSlideDown) {
                            // Slide Down
                            // horizontal movement is at doubled speed.
                            timerCompletionTemp = 2 * (timerCompletionCurr - 0.5);
                        }
                        if (timerObj[timerItemKey].elementMoveMethod == elementMoveMethodSlideSide) {
                            // Slide Side
                            // horizontal movement is at doubled speed.
                            timerCompletionTemp = 2 * timerCompletionCurr;
                        }
                        // Calculate Left
                        tempPosLeft = parseInt(timerObj[timerItemKey].elLeftOrig)
                            + (isRightwardFactor * timerCompletionTemp * timerObj[timerItemKey].moveDistanceLeft);
                        //
                        // tempPosLeft = parseInt(tempPosLeft);
                        timerObj[timerItemKey].oObj.style.left = tempPosLeft + 'px';
                        //
                    } // end of Down, Side, or Diagonal movement
                    //
                    tempMoveInProgress = true;
                    //
                }
                //
                // Resize
                if (filterResizeIsOn && tempMoveInProgress
                    && !timerObj[timerItemKey].elementIsDisplayed) {
                    //
                    timerCompletionTemp = parseInt(timerObj[timerItemKey].timerCompletion);
                    //
                    if (playDirection == playDirectionReverse) {
                        timerCompletionTemp = 1 - timerCompletionTemp;
                    }
                    //
                    FilterResize(
                        timerObj[timerItemKey].oObj,
                        filterClassMatrix,
                        timerCompletionTemp);
                }
                // timerStepCompletion
                //
            }
            //
            if (timerObj[timerItemKey].timerCompletion > timerTen) {
                // Step by 10% complete (UI?)
                timerTen + 0.1;
            }
            //
            if (UseLogTimerDetail && UseLogTimerMove) {
                var tempDetails = ', At: ( step ' + timerObj[timerItemKey].timerStepCurr + ' : top ' + tempPosTop + ', left ' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ': ' + (timerCompletionCurr * 100) + '%' + ' : find' + tempMoveInProgress + ' : l5747 ' + ')'
            }
            //
            // ...................................... //
            // End of loop
            var timerInstanceIsDone = false;
            if (!tempMoveInProgress || tempTimeOrStepsCompleted) {
                // Arrived at destinatioin
                timerInstanceIsDone = true;
                timerObj[timerRootKey].timerInstance -= 1;
                if (timerMethod == timerMethodGroup) {
                    // Group Timer
                    timerIntervalId = timerObj[timerRootKey].timerIntervalId;
                } else if (timerMethod == timerMethodItem) {
                    // Item Timer
                    // Turn Off Timer
                    if (debugFunctionIsOn) {
                        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                            TimerTextLog(timerObj[timerItemKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                                timerObj[timerItemKey].playDirection, 'Stop')
                            + tempDetails
                            + ', Stopping Item Timer'
                            + '.',
                            'MdmAnimation:TimerItemDoStepMove', 2371, 0, null, null,
                            errorIsComment, errorDoNotDisplayTag, UseAlert);
                    }
                    //
                    TimerStop(IsImageLarge, timerType, timerGroup, timerGroupItem, 0);
                    //
                }
                //
                // Leave box in final position
                if (playDirection == playDirectionForward) {
                    timerObj[timerItemKey].oObj.style.top = timerObj[timerItemKey].elTopDest + 'px';
                    timerObj[timerItemKey].oObj.style.left = timerObj[timerItemKey].elLeftDest + 'px';
                } else {
                    timerObj[timerItemKey].oObj.style.top = timerObj[timerItemKey].elTopOrig + 'px';
                    timerObj[timerItemKey].oObj.style.left = timerObj[timerItemKey].elLeftOrig + 'px';
                }
                //
                if (playDirection == playDirectionForward) {
                    timerObj[timerItemKey].elementIsDisplayed = elementIsDisplayed;
                    timerObj[timerItemKey].oObj.style.display = 'block';
                } else {
                    // Reverse
                    if (elementMoveDuration >= filterDuration) {
                        timerObj[timerItemKey].oObj.style.display = 'none';
                    }
                    timerObj[timerItemKey].elementIsDisplayed = elementIsNotDisplayed;
                }
                //
                if (debugFunctionIsOn) {
                    MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                        TimerTextLog(timerObj[timerItemKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                            timerObj[timerItemKey].playDirection, 'Stop')
                        + tempDetails
                        + ', Item Interval Timer Stopped'
                        + '.',
                        'MdmAnimation:TimerItemDoStepMove', 2408, 0, null, null,
                        errorIsComment, errorDoNotDisplayTag, UseAlert);
                }
            } else {
                if (debugFunctionIsOn) {
                    MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                        TimerTextLog(timerObj[timerItemKey].oObj, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                            timerObj[timerItemKey].playDirection, 'Item')
                        + tempDetails
                        + ', Elapsed:' + timerObj[timerItemKey].timerElapsed / 1000
                        + ', Step:' + timerObj[timerItemKey].timerStepCurr
                        + ', Time:' + Date()
                        + ', Move:' + moveDistanceLeft
                        + ', Rising:' + IsRisingFactor
                        + ', Compl:' + timerCompletionTemp
                        + ', Move Top:' + timerObj[timerItemKey].moveDistanceTop
                        + ', Move Left:' + timerObj[timerItemKey].moveDistanceLeft
                        + ', Exiting Item'
                        + '.',
                        'MdmAnimation:TimerItemDoStepMove', 2427, 0, null, null,
                        errorIsComment, errorDoNotDisplayTag, UseAlert);
                }
            }
        }
        //
    } catch (bodyLayoutErr) {
        // Errors:
        // ...................................... //
        script_state = "Do Step Move error in " + script_state + "::MdmAnimationTimer:TimerItemDoStepMove";
        ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
    }
    //
    return timerInstanceIsDone;
}
// SectionBlock Timer Control function (s)
// ...................................... //
//
// ..................................................................................... _//

function TimerStartMoveBusy(IsImageLarge, timerTypePassed, timerGroupPassed, timerGroupItemPassed, UseLog) {
    try {
        var timerType = timerTypePassed;
        var timerGroup = timerGroupPassed;
        var timerGroupItem = timerGroupItemPassed;
        var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        // script_state = "MdmAnimation:TimerStartMoveBusy:" + timerItemKey;
        var timerMoveBusy = false;
        if (timerObj) {
            if (timerObj[timerItemKey]) {
                if (timerObj[timerItemKey].timerIsRunning) {
                    timerMoveBusy = true;
                }
            }
        }
        script_state += ":Busy(" + timerMoveBusy + ")";
        //
        if ((UseLog || UseDebug)
            && ((UseLogEvents || timerMoveBusy)
                || (UseLogTimerDetail
                    || (UseLogTimerTransition && timerType == timerTypeTransition)
                    || (UseLogTimerMove && timerType == timerTypeMove)))
        ) {
            ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
                'Timer Busy: ' + timerItemKey, 'black', 'light yellow',
                'ElementEventCheckDuplicate', 2529);
        }
        //
    } catch (bodyLayoutErr) {
        // Errors:
        // ...................................... //
        script_state = "Item Show error in " + script_state + "::MdmAnimationTimer:TimerStartMoveBusy";
        ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
    }
    //
    return timerMoveBusy;
}
// Timer Move Box (Element, i.e. Div)
// ...................................... //
// This test incrementally repositions an element.
// It loops through a set number of times.
function TimerMoveTest(IsImageLarge, timerTypePassed, timerGroupPassed, timerGroupItemPassed) {
    try {
        script_state += "MdmAnimation:TimerMoveTest";
        var timerType = timerTypePassed;
        var timerGroup = timerGroupPassed;
        var timerGroupItem = timerGroupItemPassed;
        var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        //
        var divMove;
        var divToggle;
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
            vtimerGroupItem = timerObj[timerItemKey].timerIntervalId;
            if (vtimerGroupItem) { window.clearInterval(vtimerGroupItem); }
            divToggle.style.visibility = 'visible';
        }
        //
    } catch (bodyLayoutErr) {
        // Errors:
        // ...................................... //
        script_state = "Timer Move Test error in " + script_state + "::MdmAnimationTimer:TimerMoveTest";
        ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
    }
    //
}
script_state = "Mdm Standard fun Animation functions loaded.";
if (debugLoadIsOn) { debugger; }
