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
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
    // // Each form below accesses the alpha filter of the object.
    // oObjNextImage.filters.item(0).enabled = 1                                      // Numeric index
    // oObjNextImage.filters.item("DXImageTransform.Microsoft.Alpha").enabled = 0     // Named index
    // Play Animation for this image
    // oObjNextImage.filters[filterKey].apply();
    // oObjNextImage.filters[0].apply();
    // oObjNextImage.filters.apply();
    // oObjNextImage.filters.item(0).apply();
    // oObjNextImage.style.filter[0].apply();
    if (filterMethod = filterMethodPlay) {
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
        oObjNext.style.display = "block";
        // oObjNextImage.style.display= "block";
    }
    ////////////////////////////////////////////////
    //
    if (filterMethod = filterMethodVisible) {
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
    timerIdPassed) {
    if (filterMethod = filterMethodPlay) {
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
function fnFilterGetByIndex(filterIndexPassed) {
    // get interger
    filterIndexPassed = (filterIndexPassed - (filterIndexPassed % 1));
    filterKey = "";
    filterKeyPrefix = 'progid:';
    filterAurguments = "";
    switch (filterIndexPassed) {
        // ------------------------------------------------------------------------------------- _//
        // Matrix
        ////////////////////////////////////////////////
        case 99999:
            // case 1:
            // case 2:
            // case filterTypeMatrix:
            // Matrix
            // imgHtml += 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod= auto expand, duration= 1.5);" ';
            // filterIndexPassed = filterTypeMaxtrix;
            filterKey = 'DXImageTransform.Microsoft.Matrix';
            filterAurguments += '(';
            filterAurguments += 'sizingMethod= ' + filterSizingMethod;
            filterAurguments += ', duration= ' + filterDuration;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
            return (filterKeyPrefix + filterKey + filterAurguments);
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
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Iris
        case 5:
        case filterTypeIris:
            filterKey = 'DXImageTransform.Microsoft.Iris';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Pixelate
        case 6:
        case filterTypePixelate:
            // filterAurguments += '
            filterKey = 'DXImageTransform.Microsoft.Pixelate';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Random Dissolve
        case 7:
        case filterTypeRandomDissolve:
            filterKey = 'DXImageTransform.Microsoft.RandomDissolve';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ' GridSizeX= ' + filterGridSizeX;
            filterAurguments += ' GridSizeY= ' + filterGridSizeY;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);		// Spiral
        case 8:
        case filterTypeSpiral:
            filterKey = 'DXImageTransform.Microsoft.Spiral';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ' GridSizeX= ' + filterGridSizeX;
            filterAurguments += ' GridSizeY= ' + filterGridSizeY;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Stretch
        case 9:
        case filterTypeStretch:
            filterKey = 'DXImageTransform.Microsoft.Stretch';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Strips
        case 10:
        case filterTypeStrips:
            filterMotionDirection = 'rightdown';
            filterKey = 'DXImageTransform.Microsoft.Strips';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += 'motion= ' + filterMotionDirection;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Wheel
        case 11:
        case filterTypeWheel:
            // imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(Duration= 1.0000);" ';
            // filterAurguments += 'progid:DXImageTransform.Microsoft.Wheel(duration= 3)';
            filterKey = 'DXImageTransform.Microsoft.Wheel';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
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
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Rotate
        case 13:
        case filterTypeRotate:
            // This is a Matrix Calculation...
            filterKey = 'DXImageTransform.Microsoft.Matrix';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
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
            // imgHtml += 'progid:DXImageTransform.Microsoft.Blinds(Bands= 10, Duration= 2, Direction= down);" ';
            // filterIndexPassed = filterTypeBlinds;
            filterKey = 'DXImageTransform.Microsoft.Blinds';
            filterAurguments += '(';
            filterAurguments += 'Bands= ' + filterBands;
            filterAurguments += ', duration= ' + filterDuration;
            filterAurguments += ', direction= ' + filterDirection;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Barn
        case 23:
        case filterTypeBarn:
            filterKey = 'DXImageTransform.Microsoft.Barn';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ', motion= ' + filterMotion;
            filterAurguments += ', orientation= ' + filterVertical;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // CheckerBoard
        case 24:
        case filterTypeCheckerBoard:
            // CheckerBoard
            // filterTypeCheckerBoard
            // imgHtml += 'progid:DXImageTransform.Microsoft.CheckerBoard(Duration= 3, Direction= left);';
            filterKey = 'DXImageTransform.Microsoft.CheckerBoard';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ', direction= ' + filterDirection;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Gradient Wipe
        case 25:
        case filterTypeGradientWipe:
            filterGradientsize = 0.5;
            filterKey = 'DXImageTransform.Microsoft.gradientWipe';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ', gradientsize= ' + filterGradientsize;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Inset
        case 26:
        case filterTypeInset:
            filterKey = 'DXImageTransform.Microsoft.Inset';
            filterAurguments += '(';
            filterAurguments += 'duration= ' + filterDuration;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
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
            // imgHtml += 'progid:DXImageTransform.Microsoft.Blur(pixelradius= 2) ';
            // filterAurguments += 'progid:DXImageTransform.Microsoft.Blur(pixelradius= 2)';
            filterKey = 'DXImageTransform.Microsoft.Blur';
            filterAurguments += '(';
            filterAurguments += 'pixelradius= ' + filterPixelRadius;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // MotionBlur
        case 31:
        case filterTypeMotionBlur:
            // imgHtml += 'progid:DXImageTransform.Microsoft.MotionBlur(strength= 13, direction= 310) ';
            // filterAurguments += 'progid:DXImageTransform.Microsoft.MotionBlur(strength= 13, direction= 310)';
            filterDirectionDegrees = 310;
            filterKey = 'DXImageTransform.Microsoft.MotionBlur';
            filterAurguments += '(';
            filterAurguments += 'strength= ' + filterStrength;
            filterAurguments += ', direction= ' + filterDirectionDegrees;
            filterAurguments += ')';
            return (filterKeyPrefix + filterKey + filterAurguments);
        // Default
        default:
            return (filterKeyPrefix + filterKey + filterAurguments);
        //
        //
        //
    }
}
// filterAurguments += 'sizingMethod= auto expand';
// filterAurguments += 'duration= 1.5';
// filterAurguments += ', direction= left';
// filterAurguments += ')';
//
// ------------------------------------------------------------------------------------- _//
// Filter Get By Tag
////////////////////////////////////////////////
function fnFilterGetByTagName(filterTagNamePassed) {
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
function fnFilterGetRandom(filterRangeLowPassed, filterRangeHighPassed) {
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
function fnFilterTimingGetByIndex() {
    return;
}
//
// ------------------------------------------------------------------------------------- _//
// Filter Timing Get Random
////////////////////////////////////////////////
function fFilterTimingGetRandom() {
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
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
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
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
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
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
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
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
    filterPlayIndex = 1;
    HideImage = false; HideImageLarge = false;
    //
    if (oObjNext.style.display = "block") {
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
    // elementMoveDuration = 2;// 2 / 90
    // elementMoveStepMax = 100;// 100 / 200
    // elementMoveInterval = 5;// 5 / 10
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
        //  or
        // Select Random Animation
        var temp = 0;
        filterIndex = fnMathNumberRandomGetByRange(filterIndexMovementLow, filterIndexMovementHigh, filterRealFlag);
        // filterIndex = fnMathNumberRandomGetByRange(filterRangeLow, filterRangeHigh, filterRealFlag);
        // fnMathNumberRandomGetByRange(rangeLow, rangeHigh, realFlag)
        //  (filterIndexPassed = fnMathRandom())
        //
        newFilter = fnFilterGetByIndex(filterIndex);
        //
        var temp1 = "";
        // temp1 = 'progid:DXImageTransform.Microsoft.MotionBlur(strength= 13, direction= 310)';
        // temp1 = 'progid:DXImageTransform.Microsoft.Blur(pixelradius= 2)';
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
        filterCommand = "oObjNext.style.filter= '";
        // cmd = "oObjNextImage.style.filter= '";
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
        startIndex = 18; endIndex = 18;// Indexes = oObjIndex...
        // Objects, Image Size, Group Index, Locks
    }
    //
    ////////////////////////////////////////////////
    // Visibility
    // oObjNext.style.display= "block";
    // oObjNextImage.style.display= "block";
    ////////////////////////////////////////////////
    //
    // Element Move
    if (moveIsOn) {
        //
        oObjIndex = oObjGroupImageIndex;// fnMenuIndexSet(oObjGroupIndex, oObjNext);
        //
        if (IsImageLarge) {
            // elementLeftOrig, elementTopOrig, elementLeftDest, elementTopDest,
            elementLeftOrig = menuImagePositionLeft[oObjGroupIndex][oObjIndex];
            // if CascadeRight
            if (oObjGroupIndex >= 3) {
                elementLeftOrig += menuImagePositionWidth[oObjGroupIndex][oObjIndex];
            }
            elementTopOrig = menuImagePositionTop[oObjGroupIndex][oObjIndex];
            // + menuImagePositionHeight[oObjGroupIndex] [oObjIndex];
        } else {
            // elementLeftOrig, elementTopOrig, elementLeftDest, elementTopDest,
            elementLeftOrig = menuImageRootPosition[oObjGroupIndex][indexLeft];
            // if CascadeRight
            if (oObjGroupIndex < 1 + 3) {
                elementLeftOrig += menuImagePositionWidth[oObjGroupIndex][oObjIndex];
            }
            elementTopOrig = menuImageRootPosition[oObjGroupIndex][indexTop];
        }
        //
        elementLeftDest = menuImagePositionLeft[oObjGroupIndex][oObjIndex];
        elementTopDest = menuImagePositionTop[oObjGroupIndex][oObjIndex];
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
        if (oObjNext.style.display != "block") { oObjNext.style.display = "block"; }
        //
        fnMenuImageMove(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext,
            oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
    }
    //
    if (filterIsOn) {
        if (filterCommand.length) { eval(filterCommand); filterCommand = ""; }
        if (filterResizeIsOn) { fnFilterResize(timerObj[timerId].oObj, filterTypeMatrix, 0.05); }
        if (true = false) {
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
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
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
    moveDistance = Math.sqrt(Math.pow(moveDistanceTop, 2) + Math.pow(moveDistanceLeft, 2));
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
    if (moveOffsetLeft < m
        oveOffsetMin) { moveOffsetLeft = moveOffsetMin; }
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
// Object Animation
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// fnFilterStore function
////////////////////////////////////////////////
function fnFilterStore(oObjPassed, filterIndexPassed) {
    // this can't be right
    // oldFilter = oObjPassed.onfilterchange;
    // oObjPassed.onfilterchange = null;
    oldFilter = oObjPassed.filters[0].item;
}
//
// ------------------------------------------------------------------------------------- _//
// fnFilterRestore
////////////////////////////////////////////////
function fnFilterRestore(oObjPassed, filterIndexPassed) {
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
function fnFilterResetThenAnimate(oObjPassed, filterIndexPassed) {
    switch (filterIndexPassed) {
        // Non Groups
        case filterTypeMatrix:
            filterMatrixCounterDegreeCurrent = 40;
            fnFilterRestore(oObjPassed, filterIndexPassed);// s/b , filterIndexPassed
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
function fnFilterAnimate(oObjPassed, filterIndexPassed, flMultiplier) {
    switch (filterIndexPassed) {
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
        oObjPassed.style.backgroundColor = "gold";
    } else {
        filterStyleBackgroundToggle = 1;
        oObjPassed.style.backgroundColor = "green";
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
function fnFilterSpin(oObjPassed, filterIndexPassed) {
    switch (filterIndexPassed) {
        // Non Groups
        case filterTypeMatrix:
            // The function chosen for flMultiple defines size changes in the animation.
            filterMatrixCounterDegreeCurrent += 16;
            // The number of 360-degree rotations is three.
            fnFilterStore(oObjPassed, filterIndexPassed);
            if (filterMatrixCounterDegreeCurrent >= 360 * 1) { oObjPassed.onfilterchange = null; }
            //
            fnFilterSetRotation(oObjPassed, filterIndexPassed, filterMatrixCounterDegreeCurrent);
            //
            if (filterMatrixCounterDegreeCurrent < 1 + 360) {
                var flMultiple = filterMatrixCounterDegreeCurrent / 360;//* 720;*/
                fnFilterResize(oObjPassed, flMultiple);
            }
            break;
        //
        default:
            // Type of animation triggered by filter change.
            // The number of 360-degree rotations is three.
            fnFilterStore(oObjPassed, filterIndexPassed);// s/b , filterIndexPassed
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
function fnFilterSetRotation(oObjPassed, filterIndexPassed, deg) {
    rad = deg * deg2radians;
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
function fnFilterResize(oObjPassed, filterIndexPassed, flMultiplier) {
    // oObj.filters["DXImageTransform.Microsoft.Matrix"]
    switch (filterIndexPassed) {
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
    var iStyleIndex = filterSlideStyleIndexCount % 3; // MOD function avoids resetting the counter.
    oObjPassed.filters[0].slideStyle = arrSlideStyles[filterSlideStyleIndexCount];
    oSpan.innerText = 'SlideStyle = "' + arrSlideStyles[filterSlideStyleIndexCount] + '"';
    oObjPassed.filters[0].Apply();
    // After setting Apply, changes to the oDiv object
    //  are not displayed until Play is called.
    // oObjPassed.filters[0].Play();
    filterSlideStyleIndexCount += 1;
}
//