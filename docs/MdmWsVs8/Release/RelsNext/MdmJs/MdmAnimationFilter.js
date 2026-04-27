// Filter Management
// ...................................... //
// Enable Filter prior to Play
var filterValid = false;
var filterIndexCn = 0;
var filterSelected = new Array(5);
//
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
// Motion Control
// ...................................... //
var filterMotionIn = new String('in');
var filterMotionOut = new String('out');
var filterMotionDirectionUp = new String('up');
var filterMotionDirectionDown = new String('down');
var filterOrientationVertical = new String('vertical');
var filterOrientationHorizontal = new String('horizontal');
var filterMotionDirectionLeftDown = new String('leftdown');
var filterMotionDirectionLeftUp = new String('leftup');
var filterMotionDirectionRightDown = new String('rightdown');
var filterMotionDirectionRightUp = new String('rightup');
var filterMotionDirectionForward = new String('forward');
var filterMotionDirectionReverse = new String('reverse');
var filterSizingMethodAuto = new String('auto expand');
var filterStretchStylePush = new String('PUSH');
// ...................................... //

var filterMotion = filterMotionIn;
var filterOrientation = filterOrientationVertical;
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
var filterStretchStyle = filterStretchStylePush; // PUSH, HIDE, SPIN
//
var filterSpokes = 20;
//
var filterWipeStyleHorzLeft = 0; // Horz Left to Right
var filterWipeStyleVertTop = 1;
var filterWipeStyle = filterWipeStyleHorzLeft;
//
var filterPixelRadius = 3;
var filterSizingMethod = filterSizingMethodAuto;
var filterStrength = 25;
var filterTransition = 6;
//
var filterMotion = filterMotionOut;
var filterOrientation = filterOrientationVertical;
//
var filterMotionDirection = filterMotionDirectionRightDown;
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

////////////////////////////////////////////////
// Filter Properties
////////////////////////////////////////////////
//
// Filter Pointers (to function library)
var filterIndexPassed = 1;
var filterIndex = 0;
//
var filterBands = 10;
var filterDirection = filterMotionDirectionDown;
var filterDirectionDegrees = 310;
var filterDuration = 1;
var filterEnabled = true;
var filterMotion = filterMotionOut;
var filterMotionDirection
var filterOrientation = filterOrientationVertical;
var filterPixelRadius = 3;
var filterSizingMethod = filterSizingMethodAuto;
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

// Functions
////////////////////////////////////////////////
var filterObj = null;
// Sub-Section Filter Management function (s)
// ...................................... //
// General (Common) functions & properties:
// ...................................... //
function FilterControlCreate(filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage, oObjGroupIndex, oObjGroupItemIndex, filterObjIdPassed, filterIdPassed) {
    script_state += "MdmAnimationFilter:FilterControlCreate:" + filterObjIdPassed;
    // filterId is this program's index number
    //
    if (!filterObj) { filterObj = new Array(); }
    //
    if (!filterObj[filterObjIdPassed]) {
        filterObj[filterObjIdPassed] = new Object();
        filterObj[filterObjIdPassed].Id = filterIdPassed; // Id
        filterObj[filterObjIdPassed].oObj = oObjNext;
        filterObj[filterObjIdPassed].oObjGroupIndex = oObjGroupIndex;
        filterObj[filterObjIdPassed].oObjIndex = oObjGroupItemIndex;
    }
    //
    if (!filterObj[filterObjIdPassed].filterSet) {
        filterObj[filterObjIdPassed].filterSet = new Array(5);
    }
    //
    if (!filterObj[filterObjIdPassed].filterSet[filterIdPassed]) {
        filterObj[filterObjIdPassed].filterSet[filterIdPassed] = new Object();
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].Id = filterIdPassed; // Id
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterVendor = '';
        filterObj[filterObjIdPassed].filterSet[filterIdPassed].filterName = ''; // Id - short name... i.e. Blinds
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
    script_state += "MdmAnimationFilter:FilterStore:" + filterIndexPassed;
    // this can't be right
    // oldFilter = oObjPassed.onfilterchange;
    // oObjPassed.onfilterchange = null;
    oldFilter = oObjPassed.filters[0].item;
}
// FilterRestore
// ...................................... //
function FilterRestore(oObjPassed, filterIndexPassed) {
    script_state += "MdmAnimationFilter:FilterRestore:" + filterIndexPassed;
    if (oldFilter != null) {
        // ???? oObjPassed.onfilterchange = oldFilter;
        oObjPassed.filters[0].item = oldFilter;
    }
}
// SectionBlock Filter Support function (s):
// ...................................... //
// FilterResetThenAnimate
function FilterResetThenAnimate(oObjPassed, filterIndexPassed) {
    script_state += "MdmAnimationFilter:FilterResetThenAnimate:" + filterIndexPassed;
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
    script_state += "MdmAnimationFilter:FilterAnimate:" + filterIndexPassed;
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
    script_state += "MdmAnimationFilter:FilterBackgroundToggle:" + filterIndexPassed;
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
    script_state += "MdmAnimationFilter:SlideStyleToggle:" + filterIndexPassed;
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
    script_state += "MdmAnimationFilter:FilterSpin:" + filterIndexPassed;
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
    script_state += "MdmAnimationFilter:FilterSetRotation:" + filterIndexPassed;
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
    script_state += "MdmAnimationFilter:FilterResize:" + filterIndexPassed;
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

// SectionBlock Filter Primary Command  function (s)
// ...................................... //
// ..................................................................................... _//
// Filter Enable
// ...................................... //
// // Enable Filter prior to Play
// //
// var filterValid = false;
// var filterIndexCn = 0;
// var filterSelected = new Array(5);
// //
function FilterGet(filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupItemIndex,
    filterObjIdPassed, filterIdPassed) {
    script_state += "MdmAnimationFilter:FilterGet:" + filterIdPassed;
    filterGetExit = false;// Set failure
    var filterIndexCn = 0;// Filter being set
    var filterCommandEval = new String();// Filter Set Command
    var filterMatrix;// Matrix filter
    //
    filterId = new Array();
    filterSelected = new Array();
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
            filterMatrix = FilterGetByIndex(filterClassMatrix, filterClassStatic, filterTypeMatrix, filterDataCommand,
                oObjNext, oObjNextImage,
                oObjGroupIndex, oObjGroupItemIndex,
                filterObjIdPassed, filterIdPassed);
            //
            filterCommandEval += filterMatrix + ';';
            filterId[filterIdIndex] = filterKey;
            filterSelected[filterIdIndex] = filterTypeMatrix;
            filterIdIndex += 1; filterIdPassed = filterIdIndex;
        }
        // Randomly chosen filter
        newFilter = FilterGetByIndex(filterClassSingle, filterClassStatic,
            filterIndex, filterDataCommand,
            oObjNext, oObjNextImage,
            oObjGroupIndex, oObjGroupItemIndex,
            filterObjIdPassed, filterIdPassed);
        //
        filterCommandEval += newFilter + ';';
        filterId[filterIdIndex] = filterKey;
        //
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
            if ((UseLog || UseDebug)
                // && (UseLogTimerDetail || UseLogTimerTransition)
            ) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    'Invalid filter(' + filterIdPassed + ') error! On filter # ' + filterIndex + ' '
                    + charNewLineTag + filterCommandEval,
                    'MdmAnimationFilter:FilterGet', 853, 0, null, null,
                    errorIsWarning, errorDoNotDisplayTag, UseAlert);
            }
            var bob = 'ted';
            filterIndexCn = 0;
            filterGetExit = true;// Exit on Set Error
        } else {
            // Set succeeded
            if ((UseLog || UseDebug)
                && (UseLogTimerDetail || UseLogTimerTransition)
            ) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    'Filter(' + filterIdPassed + ') of ' + filterIndexCn
                    + ' set successfully! Random filter # ' + filterIndex + ' '
                    + charNewLineTag + filterCommandEval,
                    'MdmAnimationFilter:FilterGet', 865, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, UseAlert);
            }
        }
    }
    filterCommand = filterCommandEval;
}
// Filter Set
// ...................................... //
// Enable Filter prior to Play
//
function FilterSet(filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage, filterObjIdPassed, filterIdPassed,
    filterCommand) {
    script_state += "MdmAnimationFilter:FilterSet:" + filterIdPassed;
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
    oObjGroupIndex, oObjGroupItemIndex,
    filterObjIdPassed, filterIdPassed) {
    script_state += "MdmAnimationFilter:FilterEnable:" + filterIdPassed;
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
    oObjGroupIndex, oObjGroupItemIndex,
    filterObjIdPassed, filterIdPassed) {
    script_state += "MdmAnimationFilter:FilterApply:" + filterIdPassed;
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
    oObjGroupIndex, oObjGroupItemIndex,
    filterObjIdPassed, filterIdPassed) {
    script_state += "MdmAnimationFilter:FilterPlay:" + filterIdPassed;
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
        // oObjNext.style.visibility = 'hidden';
        oObjNext.style.visibility = 'visible';
        oObjNext.style.display = 'block';
    }
}
// Filter Stop
// ...................................... //
//
function FilterStop(filterPlayAll, startIndex, endIndex,
    oObjNext, oObjNextImage,
    oObjGroupIndex, oObjGroupItemIndex,
    filterObjIdPassed, filterIdPassed) {
    script_state += "MdmAnimationFilter:FilterStop:" + filterIdPassed;
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
    script_state += "MdmAnimationFilter:FilterTimingGetByIndex";
    return;
}
// Filter Timing Get Random
// ...................................... //
function FilterTimingGetRandom() {
    script_state += "MdmAnimationFilter:FilterTimingGetRandom";
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
    oObjGroupIndex, oObjGroupItemIndex,
    filterObjIdPassed, filterIdPassed) {
    script_state += "MdmAnimationFilter:FilterGetByIndex:" + filterObjIdPassed;
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
            oObjGroupIndex, oObjGroupItemIndex,
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
    script_state += "MdmAnimationFilter:FilterGetByTagName:" + filterTagNamePassed;
    //
    filterTagName = 'div';
    return null;
}
// Filter Get Random
// ...................................... //
function FilterGetRandom(filterClassSingle, filterClassDynamic, filterIndex,
    filterDataCommand, filterCompletion,
    filterObjIdPassed, filterIdPassed) {
    script_state += "MdmAnimationFilter:FilterGetRandom:" + filterObjIdPassed;
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
script_state = "Mdm Standard fun Animation filters loaded.";
if (debugLoadIsOn) { debugger; }
