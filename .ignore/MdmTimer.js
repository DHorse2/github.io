// SectionBlock Timer Control:
// (See function TimerDurationSet for default timer values)

// Initialize Variables
// Timers by Group or Item
// var timerMethodItem; // = 1;// one timer per Menu Group Image
// var timerMethodGroup; // = 2; // one timer per Menu Group
// var timerMethod; // = timerMethodItem;

// Timer Control:
var timerDuration;
var timerInterval;
var timerStepMin;
var timerStepMax;
var timerDelay;

// Timer Types
var timerType = new String();
var timerTypeMove = 'Move';
var timerTypeTransition = 'Transition';

// Id
var timerGroupItem = new String();
var timerGroupItemCurr = new String();
var timerGroupItemPrev = new String();
var timerRootId = 'Group';

// Functions
var timerFunction = null;
var timerGroupFunction = null;

// Function Calls
var timerFunctionFilterItem;
var timerFunctionFilterGroup;
var timerFunctionMoveItem;
var timerFunctionMoveGroup;

// Steps
var TimerStepDoItem;
var TimerItemDoStepFilter;
var TimerGroupDoStepFilter;
var TimerItemDoStepMove;
var TimerGroupDoStepMove;

// var timerFunction = TimerStepDoItem;
// var timerFunctionFilterItem = TimerItemDoStepFilter;
// var timerFunctionFilterGroup = TimerGroupDoStepFilter;
// var timerFunctionMoveItem = TimerItemDoStepMove;
// var timerFunctionMoveGroup = TimerGroupDoStepMove;

// Duration / Temporal
// var timerDuration = elementMoveDuration;
// var timerInterval = elementMoveInterval;
// var timerDelay = elementMoveDelay;

// Steps / Iterations
var timerStep = 0;
var timerStepsPerSecond = 0;

// Timer Object & Indexes
var timerGroupIndex = 0;
var timerGroupIndexMax = bodyMenuGroupMax;
var timerIndex = 0;
var timerGroupItemIndex = 0;

// var timerMethodItem = 1;
// var timerMethodGroup = 2;
// var timerMethod = timerMethodGroup;

var timerGroupItem = "";
var timerGroupItemCurr = "";
var timerGroupItemPrev = "";

var timerFunction = "TimerMoveStepDo";
//
var vtimerGroupItem;
var vTimerStart;
var vTimerStop;

// Started
var timerStarted = false;

// Movement
// var timerDuration = elementMoveDuration;
// var timerInterval = elementMoveInterval;
// var timerStepMax = elMoveStepMax;
// var timerDelay = elementMoveDelay;

// Steps
var timerStep = 0;
// var timerStepMin = 10;
// var timerStepMax = elMoveStepMax;
// var timerStepsPerSecond = 10;

// Timer Object & Indexes
var timerGroupIndex; // = 0;
// var timerGroupIndexMax; // = bodyMenuGroupMax;
var timerIndex = 0;
var timerGroupItemIndex = 0;
//
// var timerMethodItem; // = 1;
// var timerMethodGroup; // = 2;
// var timerMethod; // = timerMethodGroup;
//
var timerObj; // = new Array(timerGroupIndexMax);
var timerGroupIndex; // = 0;

// State Tests
var elementIsDisplayed = 1;
var elementIsNotDisplayed = 0;
//
// Completion Status
var timerDateStart = new Date();
var timerDateCurr = new Date();
var timerDateElps = 0;
var timerCompletion = 0;
var timerTen = 0; // 10% increments
var timerTimeCompletion = 0;
var timerStepCompletion = 0;
//
// Java Interval Timer
var timerBusy = false;
var timerStarted = 0;
var vtimerGroupItem;
var vTimerStart;
var vTimerStop;

// var timerItemKey;
// var timerRootKey;
// var timerLevelKey;
//
// var timerDurationOverride = false;
var timerDuration = 0;
var timerStepMin = 0;
var timerStepMax = 0;
var timerInterval = 0;
var timerDelay = 0;
// Timer Usage:
var timerMethodGroup = 1; // One timer per each group
var timerMethodItem = 2; // One timer per each item in a group
var timerMethod = timerMethodGroup;
// Timer Pause before Start
// Included a setTimeout in BODY onload to delay start of text movement.
// oObjPassed, elLeftOrig, elTopOrig, elLeftDest, elTopDest)
var timerDateStart = new Date();
var timerDateCurr = new Date();
var timerDateElps = 0;
var timerCompletion = 0;
var timerTimeCompletion = 0;
var timerStepCompletion = 0;
var timerTen = 0;
//
var timerUseTime = false; // Timers enabled use elapsed time not step count
var timerDurationOverride = false; // Indicates User has set durations and defaults should not be used.
// Sub-Section Timer Management function (s)
// // SectionBlock Timers Primary Commands function (s)
// // ...................................... //
// // Functions
// TimerFunctionSet();
// // Intervals and Duration
// TimerDurationSet();
// ..................................................................................... _//
//
function TimerMoveStepDo(timerGroupItemPassed) {
    // elMoveStepLeft = elMoveStep;
    // elMoveStepTop = elMoveStep
    var tempMoveInProgress = false;
    var tempTimeOrStepsCompleted = false;
    ////////////////////////////////////////////////
    // Set Style Left for menu image box
    timerObj[timerGroupItemPassed].timerStepCurr += 1;
    if (timerObj[timerGroupItemPassed].timerStepCurr = 1) {
        tempMoveInProgress = false;
    }
    //
    ////////////////////////////////////////////////
    // Set Completion for Step Based or Time Based execution
    if (timerUseTime) {
        /*--
        var timerCompletion = timerObj[timerGroupItemPassed].timerStart
                / timerDuration;
        --*/
        timerDateCurr = new Date();
        // timerDateElps  = timerDateStart - timerDateCurr;
        var timerDateStartMin = timerObj[timerGroupItemPassed].timerDateStart.getMinutes();
        var timerDateStartSec = timerObj[timerGroupItemPassed].timerDateStart.getSeconds();
        var timerDateStartMil = timerObj[timerGroupItemPassed].timerDateStart.getMilliseconds();
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
        timerDateElps =
            (((timerDateElpsMin * 60) + timerDateElpsSec) * 1000) + timerDateElpsMil;
        //
        timerCompletion = timerTimeCompletion = timerDateElps / (timerDuration * 1000);
        //
        if (timerCompletion > 1) {
            tempTimeOrStepsCompleted = true;
            timerObj[timerGroupItemPassed].oObj.style.posTop = timerObj[timerGroupItemPassed].elTopDest;
            timerObj[timerGroupItemPassed].oObj.style.posLeft = timerObj[timerGroupItemPassed].elLeftDest;
        }
    } else {
        timerCompletion = timerStepCompletion = timerObj[timerGroupItemPassed].timerStepCurr
            / timerObj[timerGroupItemPassed].timerStep;
        //
        if (timerObj[timerGroupItemPassed].timerStepCurr > timerObj[timerGroupItemPassed].timerStepMax) {
            tempTimeOrStepsCompleted = true;
            timerObj[timerGroupItemPassed].oObj.style.posTop = timerObj[timerGroupItemPassed].elTopDest;
            timerObj[timerGroupItemPassed].oObj.style.posLeft = timerObj[timerGroupItemPassed].elLeftDest;
        }
    }
    //
    var tempPos;
    if (timerObj[timerGroupItemPassed].elMoveStepTop > timerObj[timerGroupItemPassed].timerStepMax) { tempTimeOrStepsCompleted = true; }
    if (timerObj[timerGroupItemPassed].elMoveStepLeft > timerObj[timerGroupItemPassed].timerStepMax) { tempTimeOrStepsCompleted = true; }
    //
    if (!tempTimeOrStepsCompleted) {
        //
        ////////////////////////////////////////////////
        // Set Style Top for menu image box
        if (timerObj[timerGroupItemPassed].elTopOrig < timerObj[timerGroupItemPassed].elTopDest) {
            if (timerObj[timerGroupItemPassed].oObj.style.posTop + timerObj[timerGroupItemPassed].moveOffsetTop
                < timerObj[timerGroupItemPassed].elTopDest) {
                ////////////////////////////////////////////////
                // Set Style Top for Box that is Droping
                timerObj[timerGroupItemPassed].elMoveStepTop += 1;
                //
                tempPos = timerObj[timerGroupItemPassed].elTopOrig
                    + (timerCompletion * timerObj[timerGroupItemPassed].moveDistanceTop);
                //
                if (timerObj[timerGroupItemPassed].oObj.style.posTop < tempPos) { timerObj[timerGroupItemPassed].oObj.style.posTop = tempPos; }
                tempMoveInProgress = true;
            }
            //
        } else {
            //
            if (timerObj[timerGroupItemPassed].oObj.style.posTop - timerObj[timerGroupItemPassed].moveOffsetTop
                > timerObj[timerGroupItemPassed].elTopDest) {
                ////////////////////////////////////////////////
                // Set Style Top for Box that is Rising
                timerObj[timerGroupItemPassed].elMoveStepTop += 1;
                //
                tempPos = timerObj[timerGroupItemPassed].elTopOrig
                    - (timerCompletion * timerObj[timerGroupItemPassed].moveDistanceTop);
                //
                if (timerObj[timerGroupItemPassed].oObj.style.posTop > tempPos) { timerObj[timerGroupItemPassed].oObj.style.posTop = tempPos; }
                tempMoveInProgress = true;
            }
        }
        //
        ////////////////////////////////////////////////
        // Set Style Left for menu image box
        if (timerObj[timerGroupItemPassed].elLeftOrig < timerObj[timerGroupItemPassed].elLeftDest) {
            if (timerObj[timerGroupItemPassed].oObj.style.posLeft + timerObj[timerGroupItemPassed].moveOffsetLeft
                < timerObj[timerGroupItemPassed].elLeftDest) {
                ////////////////////////////////////////////////
                // Set Style Top for Box that is Moving Right
                timerObj[timerGroupItemPassed].elMoveStepLeft += 1;
                //
                tempPos = timerObj[timerGroupItemPassed].elLeftOrig
                    + (timerCompletion * timerObj[timerGroupItemPassed].moveDistanceLeft);
                //
                if (timerObj[timerGroupItemPassed].oObj.style.posLeft < tempPos) { timerObj[timerGroupItemPassed].oObj.style.posLeft = tempPos; }
                tempMoveInProgress = true;
            }
            //
        } else {
            //
            if (timerObj[timerGroupItemPassed].oObj.style.posLeft - timerObj[timerGroupItemPassed].moveOffsetLeft
                > timerObj[timerGroupItemPassed].elLeftDest) {
                ////////////////////////////////////////////////
                // Set Style Top for Box that is Moving Left
                timerObj[timerGroupItemPassed].elMoveStepLeft += 1;
                //
                tempPos = timerObj[timerGroupItemPassed].elLeftOrig
                    - (timerCompletion * timerObj[timerGroupItemPassed].moveDistanceLeft);
                //
                if (timerObj[timerGroupItemPassed].oObj.style.posLeft > tempPos) { timerObj[timerGroupItemPassed].oObj.style.posLeft = tempPos; }
                tempMoveInProgress = true;
            }
        }
        //
        // Resize
        // oObj.filters["DXImageTransform.Microsoft.Matrix"]
        if (filterResizeIsOn && tempMoveInProgress) {
            FilterResize(timerObj[timerGroupItemPassed].oObj, filterTypeMatrix, timerCompletion);
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
        window.clearInterval(timerObj[timerGroupItemPassed].timerInstId);
        timerObj[timerGroupItemPassed].oObj.style.posTop = timerObj[timerGroupItemPassed].elTopDest;
        timerObj[timerGroupItemPassed].oObj.style.posLeft = timerObj[timerGroupItemPassed].elLeftDest;
        if (filterResizeIsOn) { FilterResize(timerObj[timerGroupItemPassed].oObj, filterTypeMatrix, 1); }
        FilterStop(filterPlayAll,
            timerObj[timerGroupItemPassed].oObj,
            timerGroupItemPassed);
        timerStarted = false;
        timerGroupItemPrev = timerGroupItemPassed;
        timerObj[timerGroupItemPassed].timerBusy = false;
        timerObj[timerGroupItemPassed] = null;
    }
}
// Timer Pause then Start
////////////////////////////////////////////////
// Included a setTimeout in BODY onload to delay start of text movement.
function TimerStart(timerGroupItemPassed, timerFunctionPassed, timerDelayPassed) {
    timerTen = 0;
    timerStarted = true;
    timerObj[timerGroupItemPassed].timerBusy = true;
    timerObj[timerGroupItemPassed].timerDateStart = new Date();
    timerGroupItemCurr = timerGroupItemPassed;
    //
    var tempFunc = "";
    tempFunc = function () { TimerSet(timerGroupItemPassed); };
    //
    vTimerStart = window.setTimeout(
        tempFunc,
        timerDelayPassed);
    /*--
    tempFunc = function() { TimerSet( '"' + timerGroupItemPassed + '"' ); };
    tempFunc = 'function() { TimerSet("' + timerGroupItemPassed + '"); }';
    vTimerStart= window.setTimeout(
            function() { TimerSet(timerGroupItemCurr); },
            timerDelayPassed);
    vTimerStart= window.setTimeout( 'function() { TimerSet("' + timerGroupItemCurr + '"); }', timerDelayPassed);
    vTimerStart= window.setTimeout("TimerSet('"+timerGroupItemCurr+"')", timerDelayPassed);
    vTimerStart= window.setTimeout(
          TimerSet( timerFunctionPassed, timerInterval, timerGroupItemPassed ),
          timerDelayPassed);
    //
    TimerSet( timerFunctionPassed, timerInterval, timerGroupItemPassed ),
    'TimerSet(timerFunctionPassed, timerInterval, "' + timerGroupItemPassed + '")',
    //
   vTimerStart= window.setTimeout("TimerSet"
          + "("  + timerFunctionPassed
          + ", " + timerInterval
          + ", " + timerGroupItemPassed
          + ")",
          timerDelayPassed);
    --*/
    timerDelay = timerDelayPassed;
}
// Timer Set
////////////////////////////////////////////////
// Set up interval at which the moveDiv function will be called.
function TimerSet(timerGroupItemPassed) {
    var tempFunc = "";
    tempFunc = function () { TimerMoveStepDo(timerGroupItemPassed); };
    //
    vtimerGroupItem = window.setInterval(
        tempFunc,
        timerInterval
    );
    /*--
    tempFunc = 'function() { TimerMoveStepDo("' + timerGroupItemPassed + '"); }';
    function() { TimerMoveStepDo(timerGroupItemPassed); },
    vtimerGroupItem= window.setInterval(
        'function() { '
        + 'TimerMoveStepDo'
        + "("  + timerGroupItemPassed
        + ')'
        + '; }',
        timerIntervalPassed
        );
    vtimerGroupItem= window.setInterval(
        TimerMoveStepDo(timerGroupItemPassed),
        timerIntervalPassed
        );
    'TimerMoveStepDo(' + timerGroupItemPassed+ ')',
    TimerMoveStepDo( + timerGroupItemPassed ),
    TimerMoveStepDo(timerGroupItemPassed),
    timerFunctionPassed + "(" + timerGroupItemPassed + ")",
    'TimerMoveStepDo(timerGroupItemPassed)',
    TimerMoveStepDo(timerGroupItemPassed),
        //
    vtimerGroupItem= window.setInterval(
        'TimerMoveStepDo'
        + "("  + timerGroupItemPassed
        + ')',
        timerIntervalPassed
        );
    --*/
    //
    timerObj[timerGroupItemPassed].timerInstId = vtimerGroupItem;
    //
    // vtimerGroupItem= window.setInterval("moveDiv()",40);
    // timerInterval = timerIntervalPassed;
    // timerFunction = timerFunctionPassed;
}
// Timer Move Box (Element, i.e. Div)
////////////////////////////////////////////////
// This function incrementally repositions divMove.
// It loops through a set number of times.
//      Was function moveDiv()
function TimerMoveTest() {
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
        window.clearInterval(vtimerGroupItem);
        divToggle.style.visibility = "visible";
    }
}
// Sub-Section Timer Management function (s)
// ..................................................................................... _//
// SectionBlock Timers Primary Commands function (s)
// ...................................... //
// Initialize Variables
// Functions
// TimerFunctionSet();
// Intervals and Duration
// TimerDurationSet();
// ..................................................................................... _//
// Set Filter & Move function (s) for Timers
function TimerFunctionSet() {
    timerFunctionFilterItem = TimerItemDoStepFilter;
    timerFunctionFilterGroup = TimerGroupDoStepFilter;
    timerFunctionMoveItem = TimerItemDoStepMove;
    timerFunctionMoveGroup = TimerGroupDoStepMove;
}
function TimerDurationSet() {
    // timerUseTime = true;
    // Timer Control (Move)
    if (timerUseTime) {
        // Animation based on elapsed time
        // elementMoveDuration = 2;// default value
        elementMoveDuration = 3;// default value
        // if (browserIsIE) { elementMoveDuration = elementMoveDuration / 4; } // browser specific default value
        // if (browserIsFF) { elementMoveDuration = 3; } // browser specific default value
        elMoveStepMin = 10;// default value
        // Max should based on the formula 1000 ms / X ms Interval * Y sec Duration
        elMoveStepMax = 400;// default value for exceptions and race conditions
        elementMoveInterval = 25;// default value
        elementMoveDelay = 0;// default value
    } else {
        // Animation based on a number of steps
        elementMoveDuration = 2;// default value
        // if (browserIsFF) { elementMoveDuration = 3; } // browser specific default value
        //
        elMoveStepMin = 25;// default value
        // if (browserIsCH) { elMoveStepMin = 2 * elMoveStepMin; } // browser specific default value
        if (browserIsIE) { elMoveStepMin = elMoveStepMin / 2; } // browser specific default value
        //
        // Max should not be more than 80 ( 1000ms / 25ms * 2sec)
        elMoveStepMax = 400;// default value for exceptions and race conditions
        elementMoveInterval = 25;// default value
        elementMoveDelay = 0;// default value
    }
    elMoveStepsPerSecond = elMoveStepMin / elementMoveDuration;
    //
    // Timer Control:
    if (!timerDurationOverride) {
        if (!timerDuration) { timerDuration = elementMoveDuration; }
        if (!timerInterval) { timerInterval = elementMoveInterval; }
        if (!timerStepMin) { timerStepMin = elMoveStepMin; }
        if (!timerStepMax) { timerStepMax = elMoveStepMax; }
        if (!timerDelay) { timerDelay = elementMoveDelay; }
    }
    timerStepsPerSecond = timerStepMax / timerDuration;
    //
    // Animation Transition Control:
    if (!filterDurationOverride) {
        if (!filterDuration) { filterDuration = elementMoveDuration; }
        if (!filterStepMin) { filterStepMin = elMoveStepMin; }
        if (!filterStepMax) { filterStepMax = elMoveStepMax; }
        if (!filterInterval) { filterInterval = 200; } // default value
        if (!filterDelay) { filterDelay = 250; } // default value
        //
        // Usually filterDuration is the same as
        // elementDuration plus an adjustment.
        // a non-zero value indicates this
        // feature is on. Usually this adjustment
        // is one additional second.
        if (filterDurationAdjustment = -0.001) { filterDurationAdjustment = 1; }
        if (filterDurationAdjustment) { filterDuration = filterDuration + filterDurationAdjustment; }
    }
    filterStepsPerSecond = filterStepMax / filterDuration;
    //
}
function TimerItemDeactivate(timerType, timerGroup, timerGroupItem, UseRoot) {
    var timerItemKey = timerGroupItem + timerType;
    var timerRootKey = timerRootId + timerType;
    // Timer Type
    var timerLevelKey = new String;
    var LevelCnStart = 1;// Timer Element Item
    if (UseRoot == DoUseRoot || UseRoot == DoUseBoth) { LevelCnStart = 0; } // Timer Group Item
    //
    for (var LevelCn = LevelCnStart; LevelCn < 2; LevelCn += 1) {
        if (LevelCn == 0) {
            timerLevelKey = timerRootKey;
        } else { timerLevelKey = timerItemKey; }
        //
        if (timerObj[timerGroup]) {
            if (timerObj[timerGroup][timerLevelKey]) {
                timerObj[timerGroup][timerLevelKey].timerInstance = 0;
                timerObj[timerGroup][timerLevelKey].timerIsRunning = false;
                timerObj[timerGroup][timerLevelKey].timerIntervalId = 0;
                timerObj[timerGroup][timerLevelKey].timerIntervalIdPrev = 0;
                timerObj[timerGroup][timerLevelKey].elementIsDisplayed = elementIsNotDisplayed;
            }
        }
        // deconstruct
        // delete timerObj[timerGroup] [timerLevelKey];
    }
}
function TimerItemAbort(timerType, timerGroup, timerGroupItem, UseRoot) {
    var timerItemKey = timerGroupItem + timerType;
    var timerRootKey = timerRootId + timerType;
    // Timer Type
    var timerLevelKey = new String;
    var LevelCnStart = 1;// Timer Element Item
    if (UseRoot == DoUseRoot || UseRoot == DoUseBoth) { LevelCnStart = 0; } // Timer Group Item
    //
    for (var LevelCn = LevelCnStart; LevelCn < 2; LevelCn += 1) {
        if (LevelCn == 0) {
            timerLevelKey = timerRootKey;
        } else { timerLevelKey = timerItemKey; }
        //
        if (timerObj[timerGroup]) {
            if (timerObj[timerGroup][timerLevelKey]) {
                timerObj[timerGroup][timerLevelKey].timerDuration = 0;
            }
        }
    }
    // deconstruct
    // delete timerObj[timerGroup] [timerLevelKey];
}
var timerUseArray = false;
function TimerCreate() {
    if (timerUseArray) {
        timerObj = new Array(bodyMenuGroupUsedCn);
        for (timerGroupCn = 0; timerGroupCn < 1 + bodyMenuGroupUsedCn; timerGroupCn++) {
            timerObj[timerGroupCn] = new Array(imgMaxByGroup[timerGroupCn]);
            for (timerGroupObjectCn = 0; timerGroupObjectCn < 1 + imgMaxByGroup[timerGroupCn]; timerGroupObjectCn++) {
                timerObj[timerGroupCn][timerGroupObjectCn] = new Object;
            }
        }
    } else { timerObj = new Array(); }
}

// Menu Images Move Action
// TimerStartMove();
// ...................................... //
function TimerInitialize(timerType, timerGroup, timerGroupItem,
    playDirection,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
    filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupImageIndex,
    filterObjIdPassed, filterIdPassed) {
    var timerItemKey = timerGroupItem + timerType;
    var timerRootKey = timerRootId + timerType;
    // Timer Group and Image Box
    if (!timerObj) { TimerCreate(); }
    // Group Level
    // Timer Group Creation
    var timerGroupNew = false;
    var timerItemNew = false;
    // if (!timerObj) { TimerCreate(); }
    // if (!timerObj) { timerObj = new Array(imgGroupImageArraySize); }
    // if (!timerObj[timerGroup]) { timerObj[timerGroup] = new Array(imgMaxByGroup[timerGroup]); }
    // Timer Group Creation
    if (!timerObj[timerGroup][timerRootKey]) {
        timerGroupNew = true;
        timerObj[timerGroup][timerRootKey] = new Object;
        TimerItemDeactivate(timerType, timerGroup, timerGroupItem, true);
    }
    //
    // Timer Item Creation
    if (!timerObj[timerGroup][timerItemKey]) {
        timerItemNew = true;
        timerObj[timerGroup][timerItemKey] = new Object;
        TimerItemDeactivate(timerType, timerGroup, timerGroupItem, false);
        //
        timerObj[timerGroup][timerItemKey].elementMoveMethod =
            timerObj[timerGroup][timerRootKey].elementMoveMethod;
    }
    //
    if (timerObj[timerGroup][timerRootKey].timerInstance < 1) {
        //
        timerGroupNew = true;
        if (timerType == timerTypeMove) {
            if (elementMoveMethod != 0) {
                timerObj[timerGroup][timerRootKey].elementMoveMethod = elementMoveMethod;
            } else {
                if (playDirection == playDirectionForward) {
                    var elementMoveMethodTemp = MathNumberRandomGetByRange(1, 3, filterRealFlag);
                    if (elementMoveMethodTemp == elementMoveMethodPrev) {
                        elementMoveMethodTemp += 1 - ((elementMoveMethodTemp > 2) * 3);
                    }
                    timerObj[timerGroup][timerRootKey].elementMoveMethod = elementMoveMethodTemp;
                    elementMoveMethodPrev = elementMoveMethodTemp;
                }
            }
        } else { timerObj[timerGroup][timerRootKey].elementMoveMethod = 0; }
    }
    // Timer Type
    var timerLevelKey = new String;
    //
    var LevelCnStart = 1;// Timer Element Item
    // Timer Group Item
    if (timerGroupNew) {
        LevelCnStart = 0;
    } else {
        timerObj[timerGroup][timerRootKey].timerInstance += 1;
        // Date is reset any time item is added
        // Maximum time is measured from the time the last item was added.
        // This will not slow down Items in motion as the have their own
        // time and steps independent of the Group.
        timerObj[timerGroup][timerRootKey].timerDateStart = new Date();
    }
    //
    for (var LevelCn = LevelCnStart; LevelCn < 2; LevelCn += 1) {
        if (LevelCn == 0) {
            timerLevelKey = timerRootKey;
        } else { timerLevelKey = timerItemKey; }
        //
        switch (timerType) {
            //
            case timerTypeTransition:
                // Filter Effects and Transitions applied to the element (Box)
                // for a period of time.  This is usually sychronized with
                // a concurrent Move & Resize.
                // Duration
                // Timing Moving the object from Origin to Destination (Position)
                //
                timerObj[timerGroup][timerLevelKey].timerDuration = filterDuration;
                timerObj[timerGroup][timerLevelKey].timerInterval = filterInterval;
                timerObj[timerGroup][timerLevelKey].timerDelay = filterDelay;
                // Step
                timerObj[timerGroup][timerLevelKey].timerStep = 0;
                timerObj[timerGroup][timerLevelKey].timerStepsPerSecond = filterStepsPerSecond;
                timerObj[timerGroup][timerLevelKey].timerStepMin = filterStepMin;
                if (LevelCn == 0) {
                    timerObj[timerGroup][timerLevelKey].timerStepMin =
                        timerObj[timerGroup][timerLevelKey].timerStepMin * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerGroup][timerLevelKey].timerStepMax = filterStepMax;
                if (LevelCn == 0) {
                    timerObj[timerGroup][timerLevelKey].timerStepMax =
                        timerObj[timerGroup][timerLevelKey].timerStepMax * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerGroup][timerLevelKey].timerStepCurr = 0;
                timerObj[timerGroup][timerLevelKey].timerIntervalStep = 0;
                //
                timerObj[timerGroup][timerLevelKey].elMoveStepLeft = 0;
                timerObj[timerGroup][timerLevelKey].elMoveStepTop = 0;
                break;
            //
            case timerTypeMove:
                // Filter Effects and Transitions applied to the element (Box)
                // for a period of time.  This is usually sychronized with
                // a concurrent Move & Resize.
                // Timing Moving the object from Origin to Destination (Position)
                // Duration
                timerObj[timerGroup][timerLevelKey].timerDuration = elementMoveDuration;
                timerObj[timerGroup][timerLevelKey].timerInterval = elementMoveInterval;
                timerObj[timerGroup][timerLevelKey].timerDelay = elementMoveDelay;
                // Step
                timerObj[timerGroup][timerLevelKey].timerStep = 0;
                timerObj[timerGroup][timerLevelKey].timerStepsPerSecond = elMoveStepsPerSecond;
                timerObj[timerGroup][timerLevelKey].timerStepMin = elMoveStepMin;
                if (LevelCn == 0) {
                    timerObj[timerGroup][timerLevelKey].timerStepMin =
                        timerObj[timerGroup][timerLevelKey].elMoveStepMin * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerGroup][timerLevelKey].timerStepMax = elMoveStepMax;
                if (LevelCn == 0) {
                    timerObj[timerGroup][timerLevelKey].timerStepMax =
                        timerObj[timerGroup][timerLevelKey].elMoveStepMax * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerGroup][timerLevelKey].timerStepCurr = 0;
                //
                timerObj[timerGroup][timerLevelKey].elMoveStepLeft = 0;
                timerObj[timerGroup][timerLevelKey].elMoveStepTop = 0;
                break;
            default:
                // Filter Effects and Transitions applied to the element (Box)
                // for a period of time.  This is usually sychronized with
                // a concurrent Move & Resize.
                // Timing Moving the object from Origin to Destination (Position)
                // Duration
                timerObj[timerGroup][timerLevelKey].timerDuration = timerDuration;
                timerObj[timerGroup][timerLevelKey].timerInterval = timerInterval;
                timerObj[timerGroup][timerLevelKey].timerDelay = timerDelay;
                // Step
                timerObj[timerGroup][timerLevelKey].timerStep = 0;
                timerObj[timerGroup][timerLevelKey].timerStepsPerSecond = timerStepsPerSecond;
                timerObj[timerGroup][timerLevelKey].timerStepMin = timerStepMin;
                if (LevelCn == 0) {
                    timerObj[timerGroup][timerLevelKey].timerStepMin =
                        timerObj[timerGroup][timerLevelKey].timerStepMin * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerGroup][timerLevelKey].timerStepMax = timerStepMax;
                if (LevelCn == 0) {
                    timerObj[timerGroup][timerLevelKey].timerStepMax =
                        timerObj[timerGroup][timerLevelKey].timerStepMax * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerGroup][timerLevelKey].timerStepCurr = 0;
                //
                timerObj[timerGroup][timerLevelKey].elMoveStepLeft = 0;
                timerObj[timerGroup][timerLevelKey].elMoveStepTop = 0;
                //
                break;
        }
        // Element Level Functions
        timerObj[timerGroup][timerLevelKey].timerType = timerType;
        timerObj[timerGroup][timerLevelKey].timerGroup = timerGroup;
        timerObj[timerGroup][timerLevelKey].timerGroupItem = timerGroupItem;
        timerObj[timerGroup][timerLevelKey].timerRootKey = timerRootKey;
        // For Root objects, the object that started the chain of events.
        timerObj[timerGroup][timerLevelKey].oObj = oObjNext;
        timerObj[timerGroup][timerLevelKey].id = oObjNext.id;
        //
        timerObj[timerGroup][timerLevelKey].timerStepCurr = 0;
        // Image
        timerObj[timerGroup][timerLevelKey].oObjImage = oObjNextImage;
        timerObj[timerGroup][timerLevelKey].timerDateStart = new Date();
        timerObj[timerGroup][timerLevelKey].timerDateEnd = null;
        timerObj[timerGroup][timerLevelKey].timerElapsed = 0;
        timerObj[timerGroup][timerLevelKey].timerMethod = timerMethodPassed;
        //
        timerObj[timerGroup][timerLevelKey].FunctionGroup = timerFunctionGroupPassed;
        timerObj[timerGroup][timerLevelKey].FunctionItm = timerFunctionItemPassed;
        // Origin and Postion of Element
        timerObj[timerGroup][timerLevelKey].elLeftDest = elLeftDest;
        timerObj[timerGroup][timerLevelKey].elTopDest = elTopDest;
        timerObj[timerGroup][timerLevelKey].elLeftOrig = elLeftOrig;
        timerObj[timerGroup][timerLevelKey].elTopOrig = elTopOrig;
        // Methos, Behaviors, etc...
        timerObj[timerGroup][timerLevelKey].filterPlayAll = filterPlayAll;
        timerObj[timerGroup][timerLevelKey].filterObjId = filterObjIdPassed;
        timerObj[timerGroup][timerLevelKey].filterId = filterIdPassed;
        // Range of objects in group, original command scope
        timerObj[timerGroup][timerLevelKey].startIndex = startIndex;
        timerObj[timerGroup][timerLevelKey].endIndex = endIndex;
        //
        timerObj[timerGroup][timerLevelKey].timerInstance += 1;
        //
        if (LevelCn == 1) {
            if (timerMethod == timerMethodGroup) {
                timerObj[timerGroup][timerLevelKey].timerIntervalId
                    = timerObj[timerGroup][timerRootKey].timerIntervalId;
                timerObj[timerGroup][timerLevelKey].elementMoveMethod =
                    timerObj[timerGroup][timerRootKey].elementMoveMethod;
                timerObj[timerGroup][timerLevelKey].playDirection =
                    timerObj[timerGroup][timerRootKey].playDirection;
            } else {
                timerObj[timerGroup][timerLevelKey].playDirection = playDirection;
            }
            // Display / visibility (& Filter triggering)
            timerObj[timerGroup][timerLevelKey].elementIsDisplayed = elementIsNotDisplayed;
        } else {
            timerObj[timerGroup][timerRootKey].playDirection = playDirection;
        }
    }
}
// Timer Pause then Start
// Included a setTimeout in BODY onload to delay start of text movement.
function TimerStart(timerType, timerGroup, timerGroupItem,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
    timerDelayPassed) {
    var timerItemKey = timerGroupItem + timerType;
    var timerRootKey = timerRootId + timerType;
    timerTen = 0;
    timerStarted += 1;
    timerObj[timerGroup][timerItemKey].timerElapsed = 0;
    timerObj[timerGroup][timerItemKey].timerCompletion = 0;
    timerGroupItemCurr = timerGroupItem;
    var timerIsRunning = false;
    var debugFunctionIsOn = false;
    if (ConsoleLogTimer && (
        (timerMethod == timerMethodItem && ConsoleLogTimerDetail)
        || (timerMethod == timerMethodGroup)
    )) {
        if ((ConsoleLogTimerTransition && timerType == timerTypeTransition)
            || (ConsoleLogTimerMove && timerType == timerTypeMove)) {
            debugFunctionIsOn = true;
        }
    }
    //
    if (timerObj[timerGroup][timerItemKey].timerIsRunning) { timerIsRunning = true; } else {
        if ((timerMethod == timerMethodItem && !timerObj[timerGroup][timerItemKey].timerIsRunning)
            || !timerObj[timerGroup][timerRootKey].timerIsRunning
        ) {
            // One timer per Item or Element (per Timer Type)
            // Start this Item's Group Timer is it is not already running
            //
            var tempMethodFunc;
            if (timerMethod == timerMethodGroup) {
                tempMethodFunc = timerFunctionGroupPassed;
            } else {
                tempMethodFunc = timerFunctionItemPassed;
            }
            //
            if ((timerMethod == timerMethodItem
                && !timerObj[timerGroup][timerItemKey].timerIsRunning)
                || (timerMethod == timerMethodGroup
                    && !timerObj[timerGroup][timerRootKey].timerIsRunning)
            ) {
                if (!timerObj[timerGroup][timerRootKey].timerIntervalId) {
                    var tempFunc = function () {
                        TimerSet(
                            timerType, timerGroup, timerGroupItem,
                            tempMethodFunc, timerDelayPassed,
                            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed);
                    };
                    //
                    vTimerStart = window.setTimeout(
                        tempFunc,
                        timerDelayPassed);
                    if (vTimerStart) {
                        timerObj[timerGroup][timerItemKey].timerIntervalId = -1;
                        if (timerMethod == timerMethodGroup) { timerObj[timerGroup][timerRootKey].timerIntervalId = -1; }
                    }
                    if (debugFunctionIsOn) {
                        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                            TimerLogText(timerType, timerGroup, timerGroupItem,
                                (timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
                                timerObj[timerGroup][timerItemKey].playDirection, 'Timer Pending')
                            + ', Timer Delayed Start '
                            + (vTimerStart ? 'Ok' : 'Failed')
                            + (vTimerStart ? '.' : '!!!'),
                            'MdmTimer:TimerStart', 850, 0, null, null,
                            errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
                    }
                }
            } else { timerIsRunning = true; }
            //
            if (!timerObj[timerGroup][timerRootKey].timerIsRunning) {
                // date is reset on any call here,
                // allows items to be added late in the cycle...
                timerObj[timerGroup][timerRootKey].timerIsRunning = true;
                timerObj[timerGroup][timerRootKey].timerDateStart = new Date();
            }
        } else { timerIsRunning = true; }
        //
        timerObj[timerGroup][timerItemKey].timerIsRunning = true;
        timerObj[timerGroup][timerItemKey].timerDateStart = new Date();
    }

    if (timerIsRunning) {
        if (timerMethod == timerMethodGroup) {
            timerObj[timerGroup][timerItemKey].timerIntervalId = timerObj[timerGroup][timerRootKey].timerIntervalId;
        }
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                    timerObj[timerGroup][timerItemKey].playDirection, 'Timer Running')
                + ', Already running'
                + '.',
                'MdmTimer:TimerStart', 879, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
            //
        }
    }
}
// Timer Set
// Set up interval at which the timer will fire.
function TimerSet(timerType, timerGroup, timerGroupItem,
    timerFunctionPassed, timerDelayPassed,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed
) {
    var timerItemKey = timerGroupItem + timerType;
    var timerRootKey = timerRootId + timerType;
    var tempFunc = new String();
    tempFunc = function () { timerFunctionPassed(timerType, timerGroup, timerGroupItem); };// TimerMoveStepDo
    var debugFunctionIsOn = false;
    if (ConsoleLogTimer && (
        (timerMethod = timerMethodItem && ConsoleLogTimerDetail)
        || (timerMethod == timerMethodGroup)
    )) {
        if ((ConsoleLogTimerTransition && timerType == timerTypeTransition)
            || (ConsoleLogTimerMove && timerType == timerTypeMove)) {
            debugFunctionIsOn = true;
        }
    }
    //
    if ((timerMethod == timerMethodItem && !(timerObj[timerGroup][timerItemKey].timerIntervalId > 0))
        || !(timerObj[timerGroup][timerRootKey].timerIntervalId > 0)
    ) {
        vtimerGroupItem = window.setInterval(
            tempFunc,
            timerInterval
        );
        //
        timerObj[timerGroup][timerItemKey].timerIntervalId = vtimerGroupItem;
        if (timerMethod == timerMethodGroup) { timerObj[timerGroup][timerRootKey].timerIntervalId = vtimerGroupItem; }
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerGroupItem, DoNotUseRoot, timerObj[timerGroup][timerItemKey].playDirection, 'Interval Started')
                + '.',
                'MdmTimer:TimerSet', 921, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
            //
        }
    } else {
        //
        if (timerMethod == timerMethodGroup) {
            timerObj[timerGroup][timerItemKey].timerIntervalId = timerObj[timerGroup][timerRootKey].timerIntervalId;
        }
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerLogText(timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                    timerObj[timerGroup][timerItemKey].playDirection, 'Interval Running')
                + ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
                + ', Already running, delayed start not done'
                + '.',
                'MdmTimer:TimerSet', 938, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
            //
        }
    }
    //
}
// SectionBlock Timer User Interface function (s)
// ...................................... //
//
// ..................................................................................... _//
// ...................................... //
function TimerLogText(timerType, timerGroup, timerGroupItem, UseRootKey, playDirection, timerAction) {
    var timerItemKey = timerGroupItem + timerType;
    var timerRootKey = timerRootId + timerType;
    var DoUseWord = true;
    var LogText = '';
    LogText += TimerTypeText(timerType, DoUseWord);
    LogText += ', ' + TimerIntervalText(timerType, timerGroup, timerGroupItem, UseRootKey);
    LogText += ', ' + TimerActionText(timerAction);
    LogText += ', ' + TimerKeyText(timerType, timerGroup, timerGroupItem);
    LogText += ', ' + TimerDirectionText(timerType, timerGroup, timerGroupItem, UseRootKey, playDirection, timerAction);
    return LogText;
}
function TimerDirectionText(timerType, timerGroup, timerGroupItem, UseRootKey, playDirection, timerAction) {
    var timerItemKey = timerGroupItem + timerType;
    var timerRootKey = timerRootId + timerType;
    var LogText = '';
    if (playDirection) {
        // Use passed value if not null
        LogText += 'Direction (' + ((playDirection - playDirectionForward) ? 'Reverse' : 'Forward') + ')'
    } else if (UseRootKey == DoUseRoot) {
        if (timerObj[timerGroup][timerRootKey]) {
            LogText += 'Direction (' + ((timerObj[timerGroup][timerRootKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward') + ')'
        } else { LogText += 'Group Direction undefined'; }
    } else if (UseRootKey == DoNotUseRoot || UseRootKey == DoUseBoth) {
        if (timerObj[timerGroup][timerItemKey]) {
            // LogText += (timerObj[timerGroup] [timerItemKey].playDirection - playDirectionForward);
            // LogText += ((timerObj[timerGroup] [timerItemKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward');
            LogText += 'Direction (' + ((timerObj[timerGroup][timerItemKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward') + ')'
        } else { LogText += 'Item Direction undefined'; }
    } else { LogText += 'Item Direction undefined'; }
    return LogText;
}
function TimerActionText(timerAction) { return ('Action: ' + (timerAction + ':' + '.........................')).substr(0, 25); }
function TimerTypeText(timerType, UseWord) { return ((UseWord ? 'Type: ' : '') + (timerType + '...............').substr(0, 10)); }
function TimerKeyText(timerType, timerGroup, timerGroupItem) { return 'Object: (' + (TimerTypeText(timerType, false)) + ', ' + timerGroup + ', ' + timerGroupItem + ')'; }
function TimerIntervalText(timerType, timerGroup, timerGroupItem, UseRootKey) {
    var timerItemKey = timerGroupItem + timerType;
    var timerRootKey = timerRootId + timerType;
    // var tempString = new String();
    var tempString;
    var tempInterval;
    if (UseRootKey) {
        if (timerObj[timerGroup][timerRootKey]) {
            if (timerObj[timerGroup][timerRootKey].timerIntervalId >= 0) {
                tempInterval = timerObj[timerGroup][timerRootKey].timerIntervalId;
            } else { tempInterval = 0; }
        } else { tempInterval = 0; }
    } else {
        if (timerObj[timerGroup][timerItemKey]) {
            if (timerObj[timerGroup][timerItemKey].timerIntervalId >= 0) {
                tempInterval = timerObj[timerGroup][timerItemKey].timerIntervalId;
            } else { tempInterval = 0; }
        } else { tempInterval = 0; }
    }
    tempInterval = 100000 + tempInterval;
    tempString = (tempInterval).toString();
    tempString = (tempString).substr(1, 5);
    tempString = 'Timer (' + tempString + ')';
    return 'Timer (' + ((tempInterval).toString()).substr(1, 5) + ')';
}
function TimerIntervalTextOld(timerType, timerGroup, timerGroupItem, UseRootKey) {
    if (UseRootKey) {
        if (timerObj[timerGroup][timerRootKey]) {
            // Note: Syntax difference between native string "(target).substr(1, 5);"
            // as compared to:
            // tempString = 100000 + timerObj[timerGroup] [timerRootKey].timerIntervalId;
            // tempString = 'Timer (' + tempString.substring(1, 5) + ')';;
            // return 'Timer (' + tempString.substring(1, 5) + ')';
            // String does not work!
            //
            // That is, the MS String Object's "target.substring(1, 5);" is unsupported.
            // Use Javascript's:
            // var tempString = (100000 + timerObj[timerGroup] [timerRootKey].timerIntervalId).toString().substr(1, 5);
            // typically:
            return 'Timer (' + ((100000 + timerObj[timerGroup][timerRootKey].timerIntervalId).toString()).substr(1, 5) + ')';
        } else { return 'Timer (None.)'; }
    } else {
        if (timerObj[timerGroup][timerItemKey]) {
            // tempString = 100000 + timerObj[timerGroup] [timerItemKey].timerIntervalId;
            return 'Timer (' + ((100000 + timerObj[timerGroup][timerItemKey].timerIntervalId).toString()).substr(1, 5) + ')';
        } else { return 'Timer (None.)'; }
    }
}
function TimerRootKeyText(timerType, timerGroup, timerGroupItem) {
    var timerRootKey = timerRootId + timerType;
    var timerGroupItemCurr;
    var timerGroupItemCnMax = timerObj[timerGroup].length;
    var timerRootText = 'Root ';
    var timerIsRunningText = 'IsRunning: ';
    var timerIsDisplayedText = 'IsDisplayed: ';
    //
    // Process elements
    for (timerGroupItemCurr = 1; timerGroupItemCurr < imgMaxByGroup[timerGroup] + 1; timerGroupItemCurr++) {
        //
        var timerItemKey = timerGroupItemCurr + timerType;
        if (timerObj[timerGroup][timerItemKey]) {
            if (!timerObj[timerGroup][timerItemKey].timerIsRunning) {
                timerIsRunningText += '0';
            } else { timerIsRunningText += '1'; }
            timerIsDisplayedText += timerObj[timerGroup][timerItemKey].elementIsDisplayed;
        } else {
            timerIsRunningText += 'x';
            timerIsDisplayedText += 'x';
        }
    }
    timerRootText += timerIsRunningText + ' ' + timerIsDisplayedText;
    timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' Instance: ' + timerObj[timerGroup][timerRootKey].timerInstance;
    timerRootText += ' Step: ' + timerObj[timerGroup][timerRootKey].timerStep;
    timerRootText += ' StartIndex: ' + timerObj[timerGroup][timerRootKey].startIndex;
    timerRootText += ' EndIndex: ' + timerObj[timerGroup][timerRootKey].endIndex;
    timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' DateStart: ' + timerObj[timerGroup][timerRootKey].timerDateStart;
    timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' ..DateEnd: ' + timerObj[timerGroup][timerRootKey].timerDateEnd;
    timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' Elapsed: ' + timerObj[timerGroup][timerRootKey].timerElapsed
    // timerRootText += ' x: ' + timerObj[timerGroup] [timerRootKey].
    // timerRootText += ' x: ' + timerObj[timerGroup] [timerRootKey].
    return timerRootText;
}
//
script_state = "Mdm Standard Timers loaded. (Action, Interval, Move, Set, Start, ?Stop todo?)";
if (debugLoadIsOn) { debugger; }
