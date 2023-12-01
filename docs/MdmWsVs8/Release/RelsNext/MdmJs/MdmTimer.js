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
// Note: All timer keys are scoped as local functions variables

// Types
// var timerType = new String();
var timerTypeMove = 'Move';
var timerTypeTransition = 'Transition';

// Groups and Item Ids
// var timerGroup = new String();
// var timerGroupItem = new String();

// Root key prefix
var timerRootId = 'Root';

// Timer Keys
// var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
// var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;

// Current and previous processing
var timerGroupItemCurr = new String();
var timerGroupItemPrev = new String();

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
// var vTimerStart;
// var vTimerStop;

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
// var vtimerGroupItem;
// var vTimerStart;
// var vTimerStop;

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
// var timerMethodGroup = 1; // One timer per each group
// var timerMethodItem = 2; // One timer per each item in a group
// var timerMethod = timerMethodGroup;
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
function TimerMoveStepDo(timerItemKeyPassed) {
    script_state = "MdmTimer:TimerMoveStepDo";
    // elMoveStepLeft = elMoveStep;
    // elMoveStepTop = elMoveStep
    var tempMoveInProgress = false;
    var tempTimeOrStepsCompleted = false;
    ////////////////////////////////////////////////
    // Set Style Left for menu image box
    timerObj[timerItemKeyPassed].timerStepCurr += 1;
    if (timerObj[timerItemKeyPassed].timerStepCurr == 1) {
        tempMoveInProgress = false;
    }
    //
    ////////////////////////////////////////////////
    // Set Completion for Step Based or Time Based execution
    if (timerUseTime) {
        /*--
        var timerCompletion = timerObj[timerItemKeyPassed].timerStart
                / timerDuration;
        --*/
        timerDateCurr = new Date();
        // timerDateElps  = timerDateStart - timerDateCurr;
        var timerDateStartMin = timerObj[timerItemKeyPassed].timerDateStart.getMinutes();
        var timerDateStartSec = timerObj[timerItemKeyPassed].timerDateStart.getSeconds();
        var timerDateStartMil = timerObj[timerItemKeyPassed].timerDateStart.getMilliseconds();
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
            timerObj[timerItemKeyPassed].oObj.style.posTop = timerObj[timerItemKeyPassed].elTopDest;
            timerObj[timerItemKeyPassed].oObj.style.posLeft = timerObj[timerItemKeyPassed].elLeftDest;
        }
    } else {
        timerCompletion = timerStepCompletion = timerObj[timerItemKeyPassed].timerStepCurr
            / timerObj[timerItemKeyPassed].timerStep;
        //
        if (timerObj[timerItemKeyPassed].timerStepCurr > timerObj[timerItemKeyPassed].timerStepMax) {
            tempTimeOrStepsCompleted = true;
            timerObj[timerItemKeyPassed].oObj.style.posTop = timerObj[timerItemKeyPassed].elTopDest;
            timerObj[timerItemKeyPassed].oObj.style.posLeft = timerObj[timerItemKeyPassed].elLeftDest;
        }
    }
    //
    var tempPos;
    if (timerObj[timerItemKeyPassed].elMoveStepTop > timerObj[timerItemKeyPassed].timerStepMax) { tempTimeOrStepsCompleted = true; }
    if (timerObj[timerItemKeyPassed].elMoveStepLeft > timerObj[timerItemKeyPassed].timerStepMax) { tempTimeOrStepsCompleted = true; }
    //
    if (!tempTimeOrStepsCompleted) {
        //
        ////////////////////////////////////////////////
        // Set Style Top for menu image box
        if (timerObj[timerItemKeyPassed].elTopOrig < timerObj[timerItemKeyPassed].elTopDest) {
            if (timerObj[timerItemKeyPassed].oObj.style.posTop + timerObj[timerItemKeyPassed].moveOffsetTop
                < timerObj[timerItemKeyPassed].elTopDest) {
                ////////////////////////////////////////////////
                // Set Style Top for Box that is Droping
                timerObj[timerItemKeyPassed].elMoveStepTop += 1;
                //
                tempPos = timerObj[timerItemKeyPassed].elTopOrig
                    + (timerCompletion * timerObj[timerItemKeyPassed].moveDistanceTop);
                //
                if (timerObj[timerItemKeyPassed].oObj.style.posTop < tempPos) { timerObj[timerItemKeyPassed].oObj.style.posTop = tempPos; }
                tempMoveInProgress = true;
            }
            //
        } else {
            //
            if (timerObj[timerItemKeyPassed].oObj.style.posTop - timerObj[timerItemKeyPassed].moveOffsetTop
                > timerObj[timerItemKeyPassed].elTopDest) {
                ////////////////////////////////////////////////
                // Set Style Top for Box that is Rising
                timerObj[timerItemKeyPassed].elMoveStepTop += 1;
                //
                tempPos = timerObj[timerItemKeyPassed].elTopOrig
                    - (timerCompletion * timerObj[timerItemKeyPassed].moveDistanceTop);
                //
                if (timerObj[timerItemKeyPassed].oObj.style.posTop > tempPos) { timerObj[timerItemKeyPassed].oObj.style.posTop = tempPos; }
                tempMoveInProgress = true;
            }
        }
        //
        ////////////////////////////////////////////////
        // Set Style Left for menu image box
        if (timerObj[timerItemKeyPassed].elLeftOrig < timerObj[timerItemKeyPassed].elLeftDest) {
            if (timerObj[timerItemKeyPassed].oObj.style.posLeft + timerObj[timerItemKeyPassed].moveOffsetLeft
                < timerObj[timerItemKeyPassed].elLeftDest) {
                ////////////////////////////////////////////////
                // Set Style Top for Box that is Moving Right
                timerObj[timerItemKeyPassed].elMoveStepLeft += 1;
                //
                tempPos = timerObj[timerItemKeyPassed].elLeftOrig
                    + (timerCompletion * timerObj[timerItemKeyPassed].moveDistanceLeft);
                //
                if (timerObj[timerItemKeyPassed].oObj.style.posLeft < tempPos) { timerObj[timerItemKeyPassed].oObj.style.posLeft = tempPos; }
                tempMoveInProgress = true;
            }
            //
        } else {
            //
            if (timerObj[timerItemKeyPassed].oObj.style.posLeft - timerObj[timerItemKeyPassed].moveOffsetLeft
                > timerObj[timerItemKeyPassed].elLeftDest) {
                ////////////////////////////////////////////////
                // Set Style Top for Box that is Moving Left
                timerObj[timerItemKeyPassed].elMoveStepLeft += 1;
                //
                tempPos = timerObj[timerItemKeyPassed].elLeftOrig
                    - (timerCompletion * timerObj[timerItemKeyPassed].moveDistanceLeft);
                //
                if (timerObj[timerItemKeyPassed].oObj.style.posLeft > tempPos) { timerObj[timerItemKeyPassed].oObj.style.posLeft = tempPos; }
                tempMoveInProgress = true;
            }
        }
        //
        // Resize
        // oObj.filters["DXImageTransform.Microsoft.Matrix"]
        if (filterResizeIsOn && tempMoveInProgress) {
            FilterResize(timerObj[timerItemKeyPassed].oObj, filterTypeMatrix, timerCompletion);
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
        window.clearInterval(timerObj[timerItemKeyPassed].timerIntervalId);
        timerObj[timerItemKeyPassed].oObj.style.posTop = timerObj[timerItemKeyPassed].elTopDest;
        timerObj[timerItemKeyPassed].oObj.style.posLeft = timerObj[timerItemKeyPassed].elLeftDest;
        if (filterResizeIsOn) { FilterResize(timerObj[timerItemKeyPassed].oObj, filterTypeMatrix, 1); }
        FilterStop(filterPlayAll,
            timerObj[timerItemKeyPassed].oObj,
            timerItemKeyPassed);
        timerStarted = false;
        timerGroupItemPrev = timerItemKeyPassed;
        timerObj[timerItemKeyPassed].timerBusy = false;
        timerObj[timerItemKeyPassed] = null;
    }
}
// Timer Pause then Start
////////////////////////////////////////////////
// Included a setTimeout in BODY onload to delay start of text movement.
function TimerStartFunc(timerItemKeyPassed, timerFunctionPassed, timerDelayPassed) {
    // Execute Function after Delay
    script_state = "MdmTimer:TimerStart";
    timerTen = 0;
    var vTimerStart;
    var vtimerGroupItem;

    timerStarted = true;
    timerObj[timerItemKeyPassed].timerBusy = true;
    timerObj[timerItemKeyPassed].timerDateStart = new Date();
    timerGroupItemCurr = timerItemKeyPassed;
    //
    var tempFunc = timerFunctionPassed;
    // tempFunc = function () { TimerSet(timerItemKeyPassed); };
    //
    vTimerStart = window.setTimeout(
        tempFunc,
        timerDelayPassed);

    timerDelay = timerDelayPassed;
}
// Timer Set
////////////////////////////////////////////////
// Set up interval at which the moveDiv function will be called.
// function TimerSet(timerItemKeyPassed) {
//     script_state = "MdmTimer:TimerSet";
//     var tempFunc = "";
//     tempFunc = function () { TimerMoveStepDo(timerItemKeyPassed); };
//     //
//     vtimerGroupItem = window.setInterval(
//         tempFunc,
//         timerInterval
//     );
//     timerObj[timerItemKeyPassed].timerIntervalId = vtimerGroupItem;
// }
// Timer Move Box (Element, i.e. Div)
////////////////////////////////////////////////
// This function incrementally repositions divMove.
// It loops through a set number of times.
//      Was function moveDiv()
function TimerMoveTest() {
    script_state = "MdmTimer:TimerMoveTest";
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
    script_state = "MdmTimer:TimerFunctionSet";
    timerFunctionFilterItem = TimerItemDoStepFilter;
    timerFunctionFilterGroup = TimerGroupDoStepFilter;
    timerFunctionMoveItem = TimerItemDoStepMove;
    timerFunctionMoveGroup = TimerGroupDoStepMove;
}
function TimerDurationSet() {
    script_state = "MdmTimer:TimerDurationSet";
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
    script_state = "MdmTimer:TimerItemDeactivate";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
    // Timer Type
    var timerLevelKey = new String;
    var LevelCnStart = 1;// Timer Element Item
    if (UseRoot == DoUseRoot || UseRoot == DoUseBoth) { LevelCnStart = 0; } // Timer Group Item
    //
    for (var LevelCn = LevelCnStart; LevelCn < 2; LevelCn += 1) {
        timerStarted -= 1;
        if (LevelCn == 0) {
            timerLevelKey = timerRootKey;
        } else { timerLevelKey = timerItemKey; }
        //
        if (timerObj) {
            if (timerObj[timerLevelKey]) {
                timerObj[timerLevelKey].timerInstance = 0;
                timerObj[timerLevelKey].timerIsRunning = false;
                timerObj[timerLevelKey].timerIntervalId = 0;
                timerObj[timerLevelKey].timerIntervalIdPrev = 0;
                timerObj[timerLevelKey].elementIsDisplayed = elementIsNotDisplayed;
            }
        }
        // deconstruct
        // delete timerObj [timerLevelKey];
    }
}
function TimerItemAbort(timerType, timerGroup, timerGroupItem, UseRoot) {
    script_state = "MdmTimer:TimerItemAbort";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
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
        if (timerObj) {
            if (timerObj[timerLevelKey]) {
                timerObj[timerLevelKey].timerDuration = 0;
            }
        }
    }
    // deconstruct
    // delete timerObj [timerLevelKey];
}
var timerUseArray = false;
function TimerCreateAll() {
    script_state = "MdmTimer:TimerCreateAll";
    if (timerUseArray) {
        // depreciated
        timerObj = new Array(bodyMenuGroupUsedCn);
        for (timerGroupCn = 0; timerGroupCn < 1 + bodyMenuGroupUsedCn; timerGroupCn++) {
            timerObj[timerGroupCn] = new Array(imgMaxByGroup[timerGroupCn]);
            for (timerGroupItemCn = 0; timerGroupItemCn < 1 + imgMaxByGroup[timerGroupCn]; timerGroupItemCn++) {
                timerObj[timerGroupCn][timerGroupItemCn] = new Object;
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
    oObjGroupIndex, oObjGroupItemIndex,
    filterObjIdPassed, filterIdPassed
) {
    script_state = "MdmTimer:TimerInitialize";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
    // Timer Group and Image Box
    if (!timerObj) { TimerCreateAll(); }
    // Group Level
    // Timer Group Creation
    var timerGroupNew = false;
    var timerItemNew = false;
    // if (!timerObj) { TimerCreateAll(); }
    // if (!timerObj) { timerObj = new Array(imgGroupImageArraySize); }
    // if (!timerObj) { timerObj = new Array(imgMaxByGroup); }
    // Timer Group Creation
    if (!timerObj[timerRootKey]) {
        timerGroupNew = true;
        timerObj[timerRootKey] = new Object;
        TimerItemDeactivate(timerType, timerGroup, timerGroupItem, true);
    }
    //
    // Timer Item Creation
    if (!timerObj[timerItemKey]) {
        timerItemNew = true;
        timerObj[timerItemKey] = new Object;
        TimerItemDeactivate(timerType, timerGroup, timerGroupItem, false);
        //
        timerObj[timerItemKey].elementMoveMethod =
            timerObj[timerRootKey].elementMoveMethod;
    }
    //
    if (timerObj[timerRootKey].timerInstance < 1) {
        //
        timerGroupNew = true;
        if (timerType == timerTypeMove) {
            if (elementMoveMethod != 0) {
                timerObj[timerRootKey].elementMoveMethod = elementMoveMethod;
            } else {
                if (playDirection == playDirectionForward) {
                    var elementMoveMethodTemp = MathNumberRandomGetByRange(1, 3, filterRealFlag);
                    if (elementMoveMethodTemp == elementMoveMethodPrev) {
                        elementMoveMethodTemp += 1 - ((elementMoveMethodTemp > 2) * 3);
                    }
                    timerObj[timerRootKey].elementMoveMethod = elementMoveMethodTemp;
                    elementMoveMethodPrev = elementMoveMethodTemp;
                }
            }
        } else { timerObj[timerRootKey].elementMoveMethod = 0; }
    }
    // Timer Type
    var timerLevelKey = new String;
    //
    var LevelCnStart = 1;// Timer Element Item
    // Timer Group Item
    if (timerGroupNew) {
        LevelCnStart = 0;
    } else {
        timerObj[timerRootKey].timerInstance += 1;
        // Date is reset any time item is added
        // Maximum time is measured from the time the last item was added.
        // This will not slow down Items in motion as the have their own
        // time and steps independent of the Group.
        timerObj[timerRootKey].timerDateStart = new Date();
    }
    //
    for (var LevelCn = LevelCnStart; LevelCn < 2; LevelCn += 1) {
        if (LevelCn == 0) {
            timerLevelKey = timerRootKey;
        } else { timerLevelKey = timerItemKey; }
        timerObj[timerLevelKey].timerInstance = 0;

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
                timerObj[timerLevelKey].timerDuration = filterDuration;
                timerObj[timerLevelKey].timerInterval = filterInterval;
                timerObj[timerLevelKey].timerDelay = filterDelay;
                // Step
                timerObj[timerLevelKey].timerStep = 0;
                timerObj[timerLevelKey].timerStepsPerSecond = filterStepsPerSecond;
                timerObj[timerLevelKey].timerStepMin = filterStepMin;
                if (LevelCn == 0) {
                    timerObj[timerLevelKey].timerStepMin =
                        timerObj[timerLevelKey].timerStepMin * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerLevelKey].timerStepMax = filterStepMax;
                if (LevelCn == 0) {
                    timerObj[timerLevelKey].timerStepMax =
                        timerObj[timerLevelKey].timerStepMax * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerLevelKey].timerStepCurr = 0;
                timerObj[timerLevelKey].timerIntervalStep = 0;
                //
                timerObj[timerLevelKey].elMoveStepLeft = 0;
                timerObj[timerLevelKey].elMoveStepTop = 0;
                break;
            //
            case timerTypeMove:
                // Filter Effects and Transitions applied to the element (Box)
                // for a period of time.  This is usually sychronized with
                // a concurrent Move & Resize.
                // Timing Moving the object from Origin to Destination (Position)
                // Duration
                timerObj[timerLevelKey].timerDuration = elementMoveDuration;
                timerObj[timerLevelKey].timerInterval = elementMoveInterval;
                timerObj[timerLevelKey].timerDelay = elementMoveDelay;
                // Step
                timerObj[timerLevelKey].timerStep = 0;
                timerObj[timerLevelKey].timerStepsPerSecond = elMoveStepsPerSecond;
                timerObj[timerLevelKey].timerStepMin = elMoveStepMin;
                if (LevelCn == 0) {
                    timerObj[timerLevelKey].timerStepMin =
                        timerObj[timerLevelKey].elMoveStepMin * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerLevelKey].timerStepMax = elMoveStepMax;
                if (LevelCn == 0) {
                    timerObj[timerLevelKey].timerStepMax =
                        timerObj[timerLevelKey].elMoveStepMax * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerLevelKey].timerStepCurr = 0;
                //
                timerObj[timerLevelKey].elMoveStepLeft = 0;
                timerObj[timerLevelKey].elMoveStepTop = 0;
                break;
            default:
                // Filter Effects and Transitions applied to the element (Box)
                // for a period of time.  This is usually sychronized with
                // a concurrent Move & Resize.
                // Timing Moving the object from Origin to Destination (Position)
                // Duration
                timerObj[timerLevelKey].timerDuration = timerDuration;
                timerObj[timerLevelKey].timerInterval = timerInterval;
                timerObj[timerLevelKey].timerDelay = timerDelay;
                // Step
                timerObj[timerLevelKey].timerStep = 0;
                timerObj[timerLevelKey].timerStepsPerSecond = timerStepsPerSecond;
                timerObj[timerLevelKey].timerStepMin = timerStepMin;
                if (LevelCn == 0) {
                    timerObj[timerLevelKey].timerStepMin =
                        timerObj[timerLevelKey].timerStepMin * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerLevelKey].timerStepMax = timerStepMax;
                if (LevelCn == 0) {
                    timerObj[timerLevelKey].timerStepMax =
                        timerObj[timerLevelKey].timerStepMax * imgMaxByGroup[timerGroupItem];
                }
                timerObj[timerLevelKey].timerStepCurr = 0;
                //
                timerObj[timerLevelKey].elMoveStepLeft = 0;
                timerObj[timerLevelKey].elMoveStepTop = 0;
                //
                break;
        }
        // Element Level Functions
        timerObj[timerLevelKey].timerType = timerType;
        timerObj[timerLevelKey].timerGroup = timerGroup;
        timerObj[timerLevelKey].timerGroupItem = timerGroupItem;
        timerObj[timerLevelKey].timerRootKey = timerRootKey;
        // For Root objects, the object that started the chain of events.
        timerObj[timerLevelKey].oObj = oObjNext;
        timerObj[timerLevelKey].id = oObjNext.id;
        //
        timerObj[timerLevelKey].timerStepCurr = 0;
        // Image
        timerObj[timerLevelKey].oObjImage = oObjNextImage;
        timerObj[timerLevelKey].timerDateStart = new Date();
        timerObj[timerLevelKey].timerDateEnd = null;
        timerObj[timerLevelKey].timerElapsed = 0;
        timerObj[timerLevelKey].timerMethod = timerMethodPassed;
        //
        timerObj[timerLevelKey].FunctionGroup = timerFunctionGroupPassed;
        timerObj[timerLevelKey].FunctionItm = timerFunctionItemPassed;
        // Origin and Postion of Element
        timerObj[timerLevelKey].elLeftDest = elLeftDest;
        timerObj[timerLevelKey].elTopDest = elTopDest;
        timerObj[timerLevelKey].elLeftOrig = elLeftOrig;
        timerObj[timerLevelKey].elTopOrig = elTopOrig;
        // Methos, Behaviors, etc...
        timerObj[timerLevelKey].filterPlayAll = filterPlayAll;
        timerObj[timerLevelKey].filterObjId = filterObjIdPassed;
        timerObj[timerLevelKey].filterId = filterIdPassed;
        // Range of objects in group, original command scope
        timerObj[timerLevelKey].startIndex = startIndex;
        timerObj[timerLevelKey].endIndex = endIndex;
        //
        timerObj[timerLevelKey].timerInstance += 1;
        //
        if (LevelCn == 1) {
            if (timerMethod == timerMethodGroup) {
                timerObj[timerLevelKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
                timerObj[timerLevelKey].elementMoveMethod = timerObj[timerRootKey].elementMoveMethod;
                timerObj[timerLevelKey].playDirection = timerObj[timerRootKey].playDirection;
            } else {
                timerObj[timerLevelKey].playDirection = playDirection;
            }
            // Display / visibility (& Filter triggering)
            timerObj[timerLevelKey].elementIsDisplayed = elementIsNotDisplayed;
        } else {
            timerObj[timerRootKey].playDirection = playDirection;
        }
    }
}
// Timer Pause then Start
// Included a setTimeout in BODY onload to delay start of text movement.
function TimerStart(timerType, timerGroup, timerGroupItem,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
    timerDelayPassed
) {
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
    timerTen = 0;
    var vTimerStart;
    timerStarted += 1;
    timerObj[timerItemKey].timerElapsed = 0;
    timerObj[timerItemKey].timerCompletion = 0;
    timerGroupItemCurr = timerGroupItem;
    script_state = "MdmTimer:TimerStart:" + timerItemKey;

    var timerIsRunning = false;
    var debugFunctionIsOn = false;
    if (
        (timerMethod == timerMethodItem && UseLogTimerDetail)
        || (timerMethod == timerMethodGroup)
    ) {
        if (UseLogTimerTransition && timerType == timerTypeTransition) { debugFunctionIsOn = true; }
        if (UseLogTimerMove && timerType == timerTypeMove) { debugFunctionIsOn = true; }
    }
    //
    if (timerObj[timerItemKey].timerIsRunning) { timerIsRunning = true; } else {
        if ((timerMethod == timerMethodItem && !timerObj[timerItemKey].timerIsRunning)
            || !timerObj[timerRootKey].timerIsRunning
        ) {
            // One timer per Item or Element (per Timer Type)
            // Start this Item's Group Timer if it is not already running
            //
            var tempMethodFunc;
            if (timerMethod == timerMethodGroup) {
                tempMethodFunc = timerFunctionGroupPassed;
            } else {
                tempMethodFunc = timerFunctionItemPassed;
            }
            //
            if ((timerMethod == timerMethodItem
                && !timerObj[timerItemKey].timerIsRunning)
                || (timerMethod == timerMethodGroup
                    && !timerObj[timerRootKey].timerIsRunning)
            ) {
                if (!timerObj[timerRootKey].timerIntervalId) {
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
                        timerObj[timerItemKey].timerIntervalId = -1;
                        if (timerMethod == timerMethodGroup) { timerObj[timerRootKey].timerIntervalId = -1; }
                    }
                    if (debugFunctionIsOn) {
                        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                            TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem,
                                (timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
                                timerObj[timerItemKey].playDirection, 'Timer Pending')
                            + ', Timer Delayed Start '
                            + (vTimerStart ? 'Ok' : 'Failed')
                            + (vTimerStart ? '.' : '!!!'),
                            'MdmTimer:TimerStart', 850, 0, null, null,
                            errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
                    }
                }
            } else { timerIsRunning = true; }
            //
            if (!timerObj[timerRootKey].timerIsRunning) {
                // date is reset on any call here,
                // allows items to be added late in the cycle...
                timerObj[timerRootKey].timerIsRunning = true;
                timerObj[timerRootKey].timerDateStart = new Date();
            }
        } else { timerIsRunning = true; }
        //
        timerObj[timerItemKey].timerIsRunning = true;
        timerObj[timerItemKey].timerDateStart = new Date();
    }

    if (timerIsRunning) {
        if (timerMethod == timerMethodGroup) {
            timerObj[timerItemKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
        }
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                    timerObj[timerItemKey].playDirection, 'Timer Running')
                + ', Already running'
                + '.',
                'MdmTimer:TimerStart', 879, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
            //
        }
    }
}
// Timer Pause then Start
// Included a setTimeout in BODY onload to delay start of text movement.
function TimerStop(timerType, timerGroup, timerGroupItem, timerDelayPassed) {
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
    timerTen = 0;
    var vTimerStart;
    var timerStopKey;
    timerStarted -= 1;
    if (timerMethod == timerMethodItem) {
        timerStopKey = timerRootKey;
    } else if (timerMethod == timerMethodItem) {
        timerStopKey = timerItemKey;
    }
    timerObj[timerStopKey].timerElapsed = 0;
    timerObj[timerStopKey].timerCompletion = 0;
    timerGroupItemCurr = timerGroupItem;
    script_state = "MdmTimer:TimerStop:" + timerStopKey;
    var timerIsRunning = false;
    // console debugging
    var debugFunctionIsOn = false;
    if (
        (timerMethod == timerMethodItem && UseLogTimerDetail)
        || (timerMethod == timerMethodGroup)
    ) {
        if (UseLogTimerTransition && timerType == timerTypeTransition) { debugFunctionIsOn = true; }
        if (UseLogTimerMove && timerType == timerTypeMove) { debugFunctionIsOn = true; }
    }
    // Verify Timer
    if (!timerObj[timerStopKey].timerIsRunning) {
        // Call shouldn't have occurred. Warning.
        timerIsRunning = false;
    } else {
        if (timerObj[timerStopKey].timerIntervalId) {
            // Timer to Stop
            timerIntervalId = timerObj[timerStopKey].timerIntervalId;
            // Clear system timer
            if (timerIntervalId) {
                window.clearInterval(timerIntervalId);
            } else if (timerObj[timerStopKey].timerIntervalIdPrev) {
                // error.
                window.clearInterval(timerObj[timerStopKey].timerIntervalIdPrev);
            }
            if (debugFunctionIsOn) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem,
                        (timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
                        timerObj[timerStopKey].playDirection, 'Timer Pending')
                    + ', Timer Stop '
                    + (vTimerStart ? 'Ok' + vTimerStart : 'Failed')
                    + (vTimerStart ? '.' : '!!!'),
                    'MdmTimer:TimerStart', 850, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
            }
        } else {
            // Error, running with no timer set.
        }
        //
        timerObj[timerStopKey].timerIsRunning = false;
        timerObj[timerStopKey].timerDateStop = new Date();

        // Root update
        if (!timerObj[timerRootKey].timerIsRunning) {
            // date is reset on any call here,
            // allows items to be added late in the cycle...
            // timerObj[timerRootKey].timerIsRunning = true;
            timerObj[timerRootKey].timerDateStart = new Date();
        }
    }

    if (timerIsRunning) {
        if (timerMethod == timerMethodGroup) {
            timerObj[timerItemKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
        }
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                    timerObj[timerItemKey].playDirection, 'Timer Running')
                + ', Already running'
                + '.',
                'MdmTimer:TimerStart', 879, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
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
    script_state = "MdmTimer:TimerSet";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;

    var vTimerStart;
    var vtimerGroupItem;

    var tempFunc; // = new String();
    tempFunc = function () {
        script_state = 'Timer:Step:' + timerFunctionPassed.toString() + ':' + timerGroup + ':' + timerGroupItem + ':' + timerType + ':';
        timerFunctionPassed(timerType, timerGroup, timerGroupItem);
    };// TimerMoveStepDo
    var debugFunctionIsOn = false;
    if (
        (timerMethod == timerMethodItem && UseLogTimerDetail)
        || (timerMethod == timerMethodGroup)
    ) {
        if ((UseLogTimerTransition && timerType == timerTypeTransition)
            || (UseLogTimerMove && timerType == timerTypeMove)) {
            debugFunctionIsOn = true;
        }
    }
    //
    if ((timerMethod == timerMethodItem && !timerObj[timerItemKey].timerIntervalId > 0)
        || !timerObj[timerRootKey].timerIntervalId > 0
    ) {
        vtimerGroupItem = window.setInterval(
            tempFunc,
            timerInterval
        );
        timerObj[timerItemKey].timerIntervalId = vtimerGroupItem;
        if (timerMethod == timerMethodGroup) { timerObj[timerRootKey].timerIntervalId = vtimerGroupItem; }
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, timerObj[timerItemKey].playDirection, 'Interval Started')
                + ', Timer set delayed start done'
                + '.',
                'MdmTimer:TimerSet', 921, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
            //
        }
    } else {
        if (timerMethod == timerMethodGroup) {
            timerObj[timerItemKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
        }
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                    timerObj[timerItemKey].playDirection, 'Interval Running')
                + ', Items:' + timerObj[timerRootKey].timerInstance
                + ', Already running, delayed start not done'
                + '.',
                'MdmTimer:TimerSet', 938, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
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
function TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, UseRootKey, playDirection, timerAction) {
    script_state = "MdmTimer:TimerTextLog";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
    var DoUseWord = true;
    var LogText = '';
    LogText += TimerTextType(oObjNext, timerType, DoUseWord);
    LogText += ', ' + TimerTextInterval(oObjNext, timerType, timerGroup, timerGroupItem, UseRootKey, DoUseWord);
    LogText += ', ' + TimerTextAction(oObjNext, timerAction, DoUseWord);
    LogText += ', ' + TimerTextKey(oObjNext, timerType, timerGroup, timerGroupItem);
    LogText += ', ' + TimerTextDirection(oObjNext, timerType, timerGroup, timerGroupItem, UseRootKey, playDirection, timerAction);
    return LogText;
}
function TimerTextDirection(oObjNext, timerType, timerGroup, timerGroupItem, UseRootKey, playDirection, timerAction) {
    script_state = "MdmTimer:TimerTextDirection";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
    var LogText = '';
    if (playDirection) {
        // Use passed value if not null
        LogText += 'Direction (' + ((playDirection - playDirectionForward) ? 'Reverse' : 'Forward') + ')'
    } else if (UseRootKey == DoUseRoot) {
        if (timerObj[timerRootKey]) {
            LogText += 'Direction (' + ((timerObj[timerRootKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward') + ')'
        } else { LogText += 'Group Direction undefined'; }
    } else if (UseRootKey == DoNotUseRoot || UseRootKey == DoUseBoth) {
        if (timerObj[timerItemKey]) {
            // LogText += (timerObj [timerItemKey].playDirection - playDirectionForward);
            // LogText += ((timerObj [timerItemKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward');
            LogText += 'Direction (' + ((timerObj[timerItemKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward') + ')'
        } else { LogText += 'Item Direction undefined'; }
    } else { LogText += 'Item Direction undefined'; }
    return LogText;
}
function TimerTextAction(oObjNext, timerAction, UseWord) { return ((UseWord ? 'Action: ' : '') + timerAction); }
function TimerTextType(oObjNext, timerType, UseWord) { return ((UseWord ? 'Type: ' : '') + timerType); }
function TimerTextKey(oObjNext, timerType, timerGroup, timerGroupItem) {
    var tmp = 'Object: (';
    if (oObjNext && oObjNext.id && oObjNext.id.length) {
        tmp += oObjNext.id + ', ';
    }
    tmp += (TimerTextType(oObjNext, timerType, false));
    tmp += ', ' + timerGroup + ', ' + timerGroupItem + ')';
    return tmp;
}
function TimerTextInterval(oObjNext, timerType, timerGroup, timerGroupItem, UseRootKey, UseWord) {
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
    var tempString = new String();
    // var tempString;
    var tempInterval;
    if (UseRootKey) {
        if (timerObj[timerRootKey]) {
            if (timerObj[timerRootKey].timerIntervalId >= 0) {
                tempInterval = timerObj[timerRootKey].timerIntervalId;
            } else { tempInterval = 0; }
        } else { tempInterval = 0; }
    } else {
        if (timerObj[timerItemKey]) {
            if (timerObj[timerItemKey].timerIntervalId >= 0) {
                tempInterval = timerObj[timerItemKey].timerIntervalId;
            } else { tempInterval = 0; }
        } else { tempInterval = 0; }
    }
    tempInterval = 100000 + tempInterval;
    tempString = (tempInterval).toString();
    tempString = (tempString).substring(1, 5);
    // tempString = 'Timer (' + tempString + ')';
    // return 'Timer (' + ((tempInterval).toString()).substring(1, 5) + ')';
    tempString = (UseWord ? 'TimerInterval: ' : '') + tempString;
    return tempString;
}

function TimerTextRootKey(oObjNext, timerType, timerGroup, timerGroupItem) {
    script_state = "MdmTimer:TimerTextRootKey";
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
    var timerGroupItemCurr;
    var timerGroupItemCnMax = timerObj.length;
    var timerRootText = 'Root ';
    var timerIsRunningText = 'IsRunning: ';
    var timerIsDisplayedText = 'IsDisplayed: ';
    //
    // Process elements
    // for (timerGroupItemCurr = 1; timerGroupItemCurr < imgMaxByGroup + 1; timerGroupItemCurr++) {
    timerGroupItemCurr = 0;
    for (let timerItemKey in timerObj) {
        timerGroupItemCurr++;
        if (timerObj[timerItemKey]) {
            if (!timerObj[timerItemKey].timerIsRunning) {
                timerIsRunningText += '0';
            } else { timerIsRunningText += '1'; }
            timerIsDisplayedText += timerObj[timerItemKey].elementIsDisplayed;
        } else {
            timerIsRunningText += 'x';
            timerIsDisplayedText += 'x';
        }
    }
    timerRootText += timerIsRunningText + ' ' + timerIsDisplayedText;
    timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' Instance: ' + timerObj[timerRootKey].timerInstance;
    timerRootText += ' Step: ' + timerObj[timerRootKey].timerStep;
    timerRootText += ' StartIndex: ' + timerObj[timerRootKey].startIndex;
    timerRootText += ' EndIndex: ' + timerObj[timerRootKey].endIndex;
    timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' DateStart: ' + timerObj[timerRootKey].timerDateStart;
    timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' ..DateEnd: ' + timerObj[timerRootKey].timerDateEnd;
    timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' Elapsed: ' + timerObj[timerRootKey].timerElapsed
    // timerRootText += ' x: ' + timerObj [timerRootKey].
    // timerRootText += ' x: ' + timerObj [timerRootKey].
    return timerRootText;
}
//
script_state = "MdmTimer:ScriptLoad"
    + ": Mdm Standard Timers loaded."
    + " (Action, Interval, Move, Set, Start, ?Stop todo?)";
if (debugLoadIsOn) { debugger; }
