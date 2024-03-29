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
// var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
// var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;

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
// var timerStep = 0;
// var timerStepsPerSecond = 0;

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
    if (timerObj[timerItemKeyPassed].elMoveStepTop > timerObj[timerItemKeyPassed].timerStepMax) {
        tempTimeOrStepsCompleted = true;
    }
    if (timerObj[timerItemKeyPassed].elMoveStepLeft > timerObj[timerItemKeyPassed].timerStepMax) {
        tempTimeOrStepsCompleted = true;
    }
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
                if (timerObj[timerItemKeyPassed].oObj.style.posTop < tempPos) {
                    timerObj[timerItemKeyPassed].oObj.style.posTop = tempPos;
                }
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
                if (timerObj[timerItemKeyPassed].oObj.style.posTop > tempPos) {
                    timerObj[timerItemKeyPassed].oObj.style.posTop = tempPos;
                }
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
                if (timerObj[timerItemKeyPassed].oObj.style.posLeft < tempPos) {
                    timerObj[timerItemKeyPassed].oObj.style.posLeft = tempPos;
                }
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
                if (timerObj[timerItemKeyPassed].oObj.style.posLeft > tempPos) {
                    timerObj[timerItemKeyPassed].oObj.style.posLeft = tempPos;
                }
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
function TimerFunctionStart(timerItemKeyPassed, timerFunctionPassed, timerDelayPassed) {
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

    // timerDelay = timerDelayPassed;
    return vTimerStart;
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
function TimerItemDeactivate(IsImageLarge, timerType, timerGroup, timerGroupItem, UseRoot) {
    script_state = "MdmTimer:TimerItemDeactivate";
    // Turning on UseInterval will deactivate any running timers.
    // This guards against Create of existing running timers.
    TimerItemCreate(IsImageLarge, timerType, timerGroup, timerGroupItem, UseRoot, true);
}
//
function TimerItemCreate(IsImageLarge, timerType, timerGroup, timerGroupItem, UseRoot, UseInterval) {
    script_state = "MdmTimer:TimerItemDeactivate";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    // Timer Type
    var timerLevelKey = new String;
    // Clear Item
    var LevelCnStart = 1;
    // Also clear Root
    if (UseRoot == DoUseRoot || UseRoot == DoUseBoth) { LevelCnStart = 0; } // Timer Group Item
    //
    for (var LevelCn = LevelCnStart; LevelCn < 2; LevelCn++) {
        if (LevelCn == 0) {
            timerLevelKey = timerRootKey;
        } else { timerLevelKey = timerItemKey; }
        //
        if (!timerObj) { timerObj = new Object(); }
        if (!timerObj[timerLevelKey]) {
            timerObj[timerLevelKey] = new Object();
            timerObj[timerLevelKey].timerIntervalId = 0;
            timerObj[timerLevelKey].timerIntervalIdPrev = 0;
            timerObj[timerLevelKey].timerIntervalIdStart = 0;
        }
        if (timerObj) {
            if (timerObj[timerLevelKey]) {
                timerObj[timerLevelKey].elementIsDisplayed = elementIsNotDisplayed;
                timerObj[timerLevelKey].timerBusy = false; // todo?
                timerObj[timerLevelKey].timerDuration = 0;
                timerObj[timerLevelKey].timerInstance = 0;
                // timerObj[timerLevelKey].timerInstanceCn = 0;
                if (UseInterval) {
                    // Create or Deactivate timer and clear.
                    if (timerObj[timerLevelKey].timerIntervalId
                        || timerObj[timerLevelKey].timerIsRunning) {
                        // stop timer
                        TimerStop(IsImageLarge, timerType, timerGroup, timerGroupItem, 0);
                    }
                    // timerObj[timerLevelKey].timerIntervalId = 0;
                    // timerObj[timerLevelKey].timerIntervalIdPrev = 0;
                    // timerObj[timerLevelKey].timerIntervalIdStart = 0;
                }
                timerObj[timerLevelKey].timerIsRunning = false;
                timerObj[timerLevelKey].timerStepCurr = 0;
            }
        }
        // deconstruct
        // delete timerObj [timerLevelKey];
    }
}
function TimerItemAbort(IsImageLarge, timerType, timerGroup, timerGroupItem, UseRoot) {
    script_state = "MdmTimer:TimerItemAbort";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
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
                timerObj[timerGroupCn][timerGroupItemCn] = new Array(2);
                timerObj[timerGroupCn][timerGroupItemCn][IsSmall] = new Object;
                timerObj[timerGroupCn][timerGroupItemCn][IsLarge] = new Object;
            }
        }
    } else { timerObj = new Array(); }
}

// Menu Images Move Action
// TimerStartMove();
// ...................................... //
function TimerInitialize(IsImageLarge, timerType, timerGroup, timerGroupItem,
    playDirection,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
    filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupItemIndex,
    filterObjIdPassed, filterIdPassed
) {
    script_state = "MdmTimer:TimerInitialize";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
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
        // Create missing root object (new)
        timerObj[timerRootKey] = new Object;
        TimerItemDeactivate(IsImageLarge, timerType, timerGroup, timerGroupItem, true);
    }
    //
    // Timer Item Creation
    if (!timerObj[timerItemKey]) {
        timerItemNew = true;
        // Create missing item object (new)
        timerObj[timerItemKey] = new Object;
        TimerItemDeactivate(IsImageLarge, timerType, timerGroup, timerGroupItem, false);
        //
        timerObj[timerItemKey].elementMoveMethod =
            timerObj[timerRootKey].elementMoveMethod;
    }
    //
    if (timerObj[timerRootKey].timerInstance < 1) {
        timerGroupNew = true;
        if (timerType == timerTypeMove) {
            if (elementMoveMethod) {
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
    for (var LevelCn = 0; LevelCn < 2; LevelCn += 1) {
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
                // Duration                // Timing Moving the object from Origin to Destination (Position)
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
        // Steps
        timerObj[timerLevelKey].timerStepCurr = 0;
        timerObj[timerLevelKey].timerIntervalStep = 0;
        timerObj[timerLevelKey].timerIntervalStepFilter = 0;
        //
        timerObj[timerLevelKey].elMoveStepLeft = 0;
        timerObj[timerLevelKey].elMoveStepTop = 0;
        //
        timerObj[timerLevelKey].timerStepCurr = 0;
        // Image
        timerObj[timerLevelKey].oObjImage = oObjNextImage;
        // Control
        timerObj[timerLevelKey].timerInstance += 1;
        timerObj[timerLevelKey].timerInstanceCn += 1;
        timerObj[timerLevelKey].timerDateStart = new Date();
        timerObj[timerLevelKey].timerDateEnd = null;
        timerObj[timerLevelKey].timerElapsed = 0;
        timerObj[timerLevelKey].timerMethod = timerMethodPassed;
        //
        timerObj[timerLevelKey].FunctionGroup = timerFunctionGroupPassed;
        timerObj[timerLevelKey].FunctionItm = timerFunctionItemPassed;

        // Origin and Postion of Element
        timerObj[timerLevelKey].elTopOrig = menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexTop];
        timerObj[timerLevelKey].elLeftOrig = menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexLeft];
        timerObj[timerLevelKey].elTopDest = menuImagePositionDest[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexTop];
        timerObj[timerLevelKey].elLeftDest = menuImagePositionDest[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexLeft];
        // These aren't global!
        // timerObj[timerLevelKey].elLeftDest = elLeftDest;
        // timerObj[timerLevelKey].elTopDest = elTopDest;
        // timerObj[timerLevelKey].elLeftOrig = elLeftOrig;
        // timerObj[timerLevelKey].elTopOrig = elTopOrig;

        // Methos, Behaviors, etc...
        timerObj[timerLevelKey].filterPlayAll = filterPlayAll;
        timerObj[timerLevelKey].filterObjId = filterObjIdPassed;
        timerObj[timerLevelKey].filterId = filterIdPassed;
        // Range of objects in group, original command scope
        timerObj[timerLevelKey].startIndex = startIndex;
        timerObj[timerLevelKey].endIndex = endIndex;
        //
        if (LevelCn == 1) {
            if (timerMethod == timerMethodGroup) {
                // timerObj[timerLevelKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
                timerObj[timerLevelKey].elementMoveMethod = timerObj[timerRootKey].elementMoveMethod;
                timerObj[timerLevelKey].playDirection = timerObj[timerRootKey].playDirection;
            } else {
                timerObj[timerLevelKey].playDirection = playDirection;
            }
            // Display / visibility (& Filter triggering)
            timerObj[timerLevelKey].elementIsDisplayed = elementIsNotDisplayed;
        } else {
            // Root Key
            timerObj[timerLevelKey].playDirection = playDirection;
            // timerObj[timerLevelKey].elementIsDisplayed = elementIsNotDisplayed;
        }
    }
}
// Timer Pause then Start
// Included a setTimeout in BODY onload to delay start of text movement.
function TimerStart(IsImageLarge, timerType, timerGroup, timerGroupItem,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
    timerDelayPassed
) {
    try {
        var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
        timerTen = 0;
        var vTimerStart = 0;
        var timerFunctionTemp;

        timerGroupItemCurr = timerGroupItem;
        script_state = "MdmTimer:TimerStart:" + timerItemKey;

        var timerIsRunningAlready = false;
        var debugFunctionIsOn = false;
        if (UseLogTimerDetail
            || (UseLogTimerTransition && timerType == timerTypeTransition)
            || (UseLogTimerMove && timerType == timerTypeMove)) {
            debugFunctionIsOn = true;
        }
        //
        var timerStartKey;
        if (timerMethod == timerMethodGroup) {
            timerStartKey = timerRootKey;
            timerFunctionTemp = timerFunctionGroupPassed;
        } else if (timerMethod == timerMethodItem) {
            timerStartKey = timerItemKey;
            timerFunctionTemp = timerFunctionItemPassed;
        }
        //
        timerStarted += 1;
        //
        timerObj[timerStartKey].timerInstance += 1;
        timerObj[timerStartKey].timerInstanceCn += 1;
        timerObj[timerStartKey].timerElapsed = 0;
        timerObj[timerStartKey].timerCompletion = 0;
        timerObj[timerStartKey].timerDelay = timerDelayPassed;
        //
        if (timerObj[timerStartKey].timerIsRunning) {
            timerIsRunningAlready = true;
        } else {
            if (!timerObj[timerStartKey].timerIsRunning) {
                // date is reset on any call here,
                // allows items to be added late in the cycle...
                timerObj[timerStartKey].timerIsRunning = true;
                timerObj[timerStartKey].timerDateStart = new Date();
                // One timer per Item or Element (per Timer Type)
                // Start this Item's Group Timer if it is not already running
                vTimerStart = timerObj[timerStartKey].timerIntervalId;
                if (!vTimerStart) {
                    // No existing timer
                    // Run with delay
                    var tempFunc = function () {
                        TimerSet(IsImageLarge, timerType, timerGroup, timerGroupItem,
                            timerFunctionTemp, timerDelayPassed,
                            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed);
                    };
                    vTimerStart = window.setTimeout(
                        tempFunc,
                        timerDelayPassed);
                    if (vTimerStart) { timerObj[timerStartKey].timerIntervalIdStart = vTimerStart; }
                    if (debugFunctionIsOn) {
                        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                            TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem,
                                (timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
                                timerObj[timerStartKey].playDirection, 'Timer Pending')
                            + ', Timer ' + vTimerStart + ' Delayed (' + timerDelayPassed + ') Start '
                            + (vTimerStart ? 'Ok' : 'Failed')
                            + (vTimerStart ? '.' : '!!!'),
                            'MdmTimer:TimerStart', 850, 0, null, null,
                            errorIsComment, errorDoNotDisplayTag, UseAlert);
                    }
                } else {
                    // not running but timer present!
                    MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                        TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem,
                            (timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
                            timerObj[timerStartKey].playDirection, 'Timer Pending')
                        + ', Timer ' + vTimerStart + ' Delayed (' + timerDelayPassed + ')'
                        + " isn't" + ' running but was not terminated correctly, '
                        + 'timer ' + (vTimerStart ? 'already exists' : 'ready')
                        + (!vTimerStart ? '.' : '!!!'),
                        'MdmTimer:TimerStart', 833, 0, null, null,
                        errorIsSevere, errorDoNotDisplayTag, UseAlert);
                }
            } else { timerIsRunningAlready = true; }
        }

        if (timerIsRunningAlready) {
            if (debugFunctionIsOn) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                        timerObj[timerItemKey].playDirection, 'Timer Running')
                    + ', Already running'
                    + '.',
                    'MdmTimer:TimerStart', 879, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, UseAlert);
                //
            }
        }
        //
    } catch (bodyLayoutErr) {
        // Errors:
        // ...................................... //
        script_state = "Timer Start error in " + script_state + "::MdmTimer:TimerStart";
        ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
    }
    //
}
// Timer Pause then Start
// Included a setTimeout in BODY onload to delay start of text movement.
function TimerStop(IsImageLarge, timerType, timerGroup, timerGroupItem, timerDelayPassed) {
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    timerTen = 0;
    var vTimerStart;
    var timerStopKey;

    timerStarted -= 1;

    if (timerMethod == timerMethodGroup) {
        timerStopKey = timerRootKey;
    } else if (timerMethod == timerMethodItem) {
        timerStopKey = timerItemKey;
        timerObj[timerRootKey].timerInstance -= 1;
    }

    timerGroupItemCurr = timerGroupItem;
    script_state = "MdmTimer:TimerStop:" + timerStopKey;
    var timerIsRunning = false;
    // console debugging
    var debugFunctionIsOn = false;
    if ((UseLog || UseDebug)
        && (UseLogTimerDetail
            || (UseLogTimerTransition && timerType == timerTypeTransition)
            || (UseLogTimerMove && timerType == timerTypeMove))
    ) {
        debugFunctionIsOn = true;
    }
    // Verify Timer
    if (!timerObj[timerStopKey].timerIsRunning) {
        // Call shouldn't have occurred. Warning.
        timerIsRunning = false;
        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
            TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem,
                (timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
                timerObj[timerStopKey].playDirection, 'Timer Stop')
            + ' Ignoring Timer ' + "isn't" + ' running'
            + '!',
            'MdmTimer:TimerStop', 908, 0, null, null,
            errorIsWarning, errorDoNotDisplayTag, UseAlert);
    }
    // Check timerIntervalId
    if (timerObj[timerStopKey].timerIntervalId) {
        var clearDone = false;
        // Prevent delayed start
        timerIntervalId = timerObj[timerStopKey].timerIntervalIdStart;
        if (timerIntervalId) {
            window.clearInterval(timerIntervalId);
            clearDone = true;
        }
        // Timer to Stop
        timerIntervalId = timerObj[timerStopKey].timerIntervalId;
        // Clear system timer
        if (timerIntervalId) {
            window.clearInterval(timerIntervalId);
            clearDone = true;
        }
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem,
                    (timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
                    timerObj[timerStopKey].playDirection, 'Timer Stop')
                + (clearDone ? ', Timer Stopped' : ', Timers are missing')
                + (clearDone ? '.' : '!!!'),
                'MdmTimer:TimerStop', 850, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, UseAlert);
        }
        timerObj[timerStopKey].timerInstance -= 1;
        timerObj[timerStopKey].timerDateEnd = new Date();
        timerObj[timerStopKey].timerIsRunning = false;
        // timerObj[timerStopKey].timerElapsed = 0;
        // timerObj[timerStopKey].timerCompletion = 0;
    } else {
        // No timer
        if (timerObj[timerStopKey].timerIntervalIdPrev) {
            // Error, running with no timer set.
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem,
                    (timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
                    timerObj[timerStopKey].playDirection, 'Timer Stop')
                + ' Timer appears to be already stopped. Stopping previous timer'
                + '!',
                'MdmTimer:TimerStop', 908, 0, null, null,
                errorIsWarning, errorDoNotDisplayTag, UseAlert);
            timerIntervalId = timerObj[timerStopKey].timerIntervalIdPrev;
            window.clearInterval(timerIntervalId);
            clearDone = true;
            timerObj[timerStopKey].timerIsRunning = false;
            //
        } else {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem,
                    (timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
                    timerObj[timerStopKey].playDirection, 'Timer Stop')
                + ' No Timer Id is available to stop for this item'
                + '!',
                'MdmTimer:TimerStop', 908, 0, null, null,
                errorIsWarning, errorDoNotDisplayTag, UseAlert);
        }
    }
    //
    if (clearDone) {
        timerObj[timerStopKey].timerIntervalIdPrev = timerIntervalId;
        timerObj[timerStopKey].timerIntervalId = 0;
    }
    timerObj[timerStopKey].timerIsRunning = false;
    timerObj[timerStopKey].timerDateStop = new Date();

    // Root update
    if (!timerObj[timerRootKey].timerIsRunning) {
        // date is reset on any call here,
        // allows items to be added late in the cycle...
        // timerObj[timerRootKey].timerIsRunning = true;
        timerObj[timerRootKey].timerDateStart = new Date();
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
                'MdmTimer:TimerStop', 879, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, UseAlert);
            //
        }
    }
}
// Timer Set
// Set up interval at which the timer will fire.
function TimerSet(IsImageLarge, timerType, timerGroup, timerGroupItem,
    timerFunctionPassed, timerDelayPassed,
    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed
) {
    script_state = "MdmTimer:TimerSet";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;

    var vTimerStart;
    var vtimerGroupItem;
    var timerSetKey;
    var timerIntervalId;

    var tempFunc; // = new String();
    tempFunc = function () {
        script_state = 'Timer:Step:' + timerFunctionPassed.toString() + ':' + timerGroup + ':' + timerGroupItem + ':' + timerType + ':';
        timerFunctionPassed(IsImageLarge, timerType, timerGroup, timerGroupItem);
    };// TimerMoveStepDo
    var debugFunctionIsOn = false;
    if (UseLogTimerDetail
        || (UseLogTimerTransition && timerType == timerTypeTransition)
        || (UseLogTimerMove && timerType == timerTypeMove)) {
        debugFunctionIsOn = true;
    }
    //
    timerSetKey = timerItemKey;
    if (timerMethod == timerMethodGroup) { timerSetKey = timerRootKey; }
    timerIntervalId = timerObj[timerSetKey].timerIntervalId;
    //
    if (!timerIntervalId) {
        vTimerStart = window.setInterval(
            tempFunc,
            timerInterval
        );
        if (vTimerStart) {
            timerObj[timerSetKey].timerIntervalId = vTimerStart;
        }
        //
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, timerObj[timerItemKey].playDirection, 'Interval Started')
                + ', Timer ' + vTimerStart + 'delayed start completed'
                + '.',
                'MdmTimer:TimerSet', 921, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, UseAlert);
            //
        }
    } else {
        if (debugFunctionIsOn) {
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
                    timerObj[timerSetKey].playDirection, 'Interval Running')
                + ', Items:' + timerObj[timerRootKey].timerInstance
                + ', Already running, delayed start not done'
                + '.',
                'MdmTimer:TimerSet', 938, 0, null, null,
                errorIsComment, errorDoNotDisplayTag, UseAlert);
            //
        }
    }
    //
}
// ...................................... //
// Timer Calculate current running time
// ...................................... //
// Included a setTimeout in BODY onload to delay start of text movement.
// oObjPassed, elLeftOrig, elTopOrig, elLeftDest, elTopDest)
function TimerGetElapsed(IsImageLarge, timerType, timerGroup, timerGroupItem) {
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    script_state += "MdmTimer:TimerGetElapsed:" + timerItemKey;
    timerDateCurr = new Date();
    // timerDateElps  = timerDateStart - timerDateCurr;
    var timerDateStartMin = timerObj[timerItemKey].timerDateStart.getMinutes();
    var timerDateStartSec = timerObj[timerItemKey].timerDateStart.getSeconds();
    var timerDateStartMil = timerObj[timerItemKey].timerDateStart.getMilliseconds();
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
    timerObj[timerItemKey].timerElapsed =
        (((timerDateElpsMin * 60) + timerDateElpsSec) * 1000) + timerDateElpsMil;
    //
    return timerObj[timerItemKey].timerElapsed;
    //
}
//
// ...................................... //
// SectionBlock Timer User Interface function (s)
// ...................................... //
//
// ..................................................................................... _//
// ...................................... //
function TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, UseRootKey, playDirection, timerAction) {
    script_state += "MdmTimer:TimerTextLog";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
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
    script_state += "MdmTimer:TimerTextDirection";
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var LogText = '';
    if (playDirection) {
        // Use passed value if not null
        LogText += 'Direction (' + ((playDirection != playDirectionForward) ? 'Reverse' : 'Forward') + ')'
    } else if (UseRootKey == DoUseRoot) {
        if (timerObj[timerRootKey]) {
            LogText += 'Direction (' + ((timerObj[timerRootKey].playDirection != playDirectionForward) ? 'Reverse' : 'Forward') + ')'
        } else { LogText += 'Group Direction undefined'; }
    } else if (UseRootKey == DoNotUseRoot || UseRootKey == DoUseBoth) {
        if (timerObj[timerItemKey]) {
            // LogText += (timerObj [timerItemKey].playDirection - playDirectionForward);
            // LogText += ((timerObj [timerItemKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward');
            LogText += 'Direction (' + ((timerObj[timerItemKey].playDirection != playDirectionForward) ? 'Reverse' : 'Forward') + ')'
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
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
    var tempString = new String();
    // var tempString;
    var tempInterval;
    if (UseRootKey) {
        if (timerObj[timerRootKey]) {
            if (timerObj[timerRootKey].timerIntervalId) {
                tempInterval = timerObj[timerRootKey].timerIntervalId;
            } else if (timerObj[timerRootKey].timerIntervalIdPrev) {
                tempInterval = timerObj[timerRootKey].timerIntervalIdPrev;
            } else { tempInterval = 0; }
        } else { tempInterval = 0; }
    } else {
        if (timerObj[timerItemKey]) {
            if (timerObj[timerItemKey].timerIntervalId) {
                tempInterval = timerObj[timerItemKey].timerIntervalId;
            } else if (timerObj[timerItemKey].timerIntervalIdPrev) {
                tempInterval = timerObj[timerItemKey].timerIntervalIdPrev;
            } else { tempInterval = 0; }
        } else { tempInterval = 0; }
    }
    tempInterval = 100000 + tempInterval;
    tempString = (tempInterval).toString();
    tempString = (tempString).substring(1, 6);
    // tempString = 'Timer (' + tempString + ')';
    // return 'Timer (' + ((tempInterval).toString()).substring(1, 5) + ')';
    tempString = (UseWord ? 'TimerInterval: ' : '') + tempString;
    return tempString;
}

function TimerTextRootKey(IsImageLarge, timerType, timerGroup, timerGroupItem) {
    script_state = "MdmTimer:TimerTextRootKey";
    var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
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
            } else {
                timerIsRunningText += '1';
            }
            timerIsDisplayedText += timerObj[timerItemKey].elementIsDisplayed;
        } else {
            timerIsRunningText += 'x';
            timerIsDisplayedText += 'x';
        }
    }
    timerRootText += timerIsRunningText + ' ' + timerIsDisplayedText;
    timerRootText += charNewLineTag + charTextIndent;
    timerRootText += ' Instance: ' + timerObj[timerRootKey].timerInstance;
    timerRootText += ' Total run: ' + timerObj[timerRootKey].timerInstanceCn;
    timerRootText += ' Step: ' + timerObj[timerRootKey].timerStep;
    timerRootText += ' StartIndex: ' + timerObj[timerRootKey].startIndex;
    timerRootText += ' EndIndex: ' + timerObj[timerRootKey].endIndex;
    timerRootText += charNewLineTag + charTextIndent;
    timerRootText += ' DateStart: ' + timerObj[timerRootKey].timerDateStart;
    timerRootText += charNewLineTag + charTextIndent;
    timerRootText += ' ..DateEnd: ' + timerObj[timerRootKey].timerDateEnd;
    timerRootText += charNewLineTag + charTextIndent;
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
