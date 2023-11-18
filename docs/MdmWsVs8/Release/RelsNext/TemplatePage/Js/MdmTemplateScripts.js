
// ** Javascript Parameter Init Blocks **
// Form
FormElementSync()
{
	FormElementSyncLocal();
}
function FormElementSyncLocal(fromForm) {
	var tempSelected = false;
	var elementObject = document.createElement('input');
	//
	// ...................................... //
	// Toggled Variables
	// ...................................... //
	elementObject = document.getElementById('formImgLoadUseEventHandler');
	if (!elementObject) { return; }
	// ** Javascript Parameter Init Blocks **
	if (imgLoadUseEventHandler) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formImgLoadUseInner');
	if (imgLoadUseInner) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formImgLoadEventTest');
	if (imgLoadEventTest) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formImgLoadUseDOM');
	if (imgLoadUseDOM) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	// ...................................... //
	// User Interface Features
	// Control image display using mouse hover
	elementObject = document.getElementById('formEventMouseOverEnabled');
	if (UseLogAnimation) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	// ...................................... //
	// Animation Control
	elementObject = document.getElementById('formMoveIsOn');
	if (moveIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formFilterIsOn');
	if (filterIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formFilterResizeIsOn');
	if (filterResizeIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formTimerUseTime');
	if (timerUseTime) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	// ...................................... //
	// Timer and Event Logging
	elementObject = document.getElementById('formDebugTimer');
	if (UseLogTimer) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugTimerMove');
	if (UseLogTimerMove) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugTimerTransition');
	if (UseLogTimerTransition) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugTimerDetail');
	if (UseLogTimerDetail) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugLogEvents');
	if (UseLogEvents) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	// ...................................... //
	// Debugger Control
	elementObject = document.getElementById('formErrorUseDebugOnError');// enter debugger on errors
	if (UseDebugOnError) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formErrorUseDebugOnAll');// enter debugger after any message
	if (UseDebugOnAll) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugIsOn');
	if (debugIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugDoAlert');
	if (debugDoAlert) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	// ...................................... //
	// Page Load Optimaization
	elementObject = document.getElementById('formJavaLoadDelay');
	if (loadDelayJava) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formBodyImageLoadDelay');
	if (loadDelayBodyImage) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formMenuImageLoadDelay');
	if (loadDelayMenuImage) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	// ...................................... //
	// Fields with values
	// ...................................... //
	tempSelected = false;
	elementObject = document.createElement('option');
	// ...................................... //
	// Browser
	elementObject = document.getElementById('formBrowser_MSIE');
	if (browserIsIE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formBrowser_Chrome');
	if (browserIsCH) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formBrowser_FireFox');
	if (browserIsFF) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formBrowser_Safari');
	if (browserIsSA) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formBrowser_Opera');
	if (browserIsOP) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formBrowser_Netscape');
	if (browserIsNE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formBrowser_FireFox').selected = true; }
	//
	tempSelected = false;
	// ...................................... //
	// Debug Control
	elementObject = document.getElementById('formErrorDebugLevel_errorDidNotOccur');
	if (errorDebugLevel == errorDidNotOccur) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorComment');
	if (errorDebugLevel == errorComment) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorWarn');
	if (errorDebugLevel == errorWarn) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorSevere');
	if (errorDebugLevel == errorSevere) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorIsFatal');
	if (errorDebugLevel == errorIsFatal) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formErrorDebugLevel_errorSevere').selected = true; }
	//
	elementObject = document.createElement('input');
	// ...................................... //
	// Menu Image Size
	elementObject = document.getElementById('formOObjImageSizeSmall');
	elementObject.value = oObjImageSizeSmall;
	//
	ementObject = document.getElementById('formOObjImageSizeLarge');
	elementObject.value = oObjImageSizeLarge;
	//
	elementObject = document.getElementById('formOObjImageSizeRatio');
	elementObject.value = oObjImageSizeRatio;
	//
	// ...................................... //
	// Animation Control
	// ...................................... //
	// Movement Duration
	elementObject = document.getElementById('formElementMoveDuration');
	elementObject.value = elementMoveDuration;
	//
	elementObject = document.getElementById('formelMoveStepMax');
	elementObject.value = elMoveStepMax;
	//
	elementObject = document.getElementById('formElementMoveInterval');
	elementObject.value = elementMoveInterval;
	//
	elementObject = document.getElementById('formElementMoveDelay');
	elementObject.value = elementMoveDelay;
	//
	// ...................................... //
	// Filter / Transition Duration
	elementObject = document.getElementById('formFilterDuration');
	elementObject.value = filterDuration;
	//
	elementObject = document.getElementById('formFilterStepMax');
	elementObject.value = filterStepMax;
	//
	elementObject = document.getElementById('formFilterInterval');
	elementObject.value = filterInterval;
	//
	elementObject = document.getElementById('formFilterDelay');
	elementObject.value = filterDelay;
	//
	elementObject = document.getElementById('formFilterDurationAdjustment');
	elementObject.value = filterDurationAdjustment;
	//
	elementObject = document.createElement('option');
	tempSelected = false;
	// ...................................... //
	// Timer control by Item or Menu Group
	elementObject = document.getElementById('formTimerMethod_timerMethodGroup');
	if (timerMethod = timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formTimerMethod_timerMethodItem');
	if (timerMethod = timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formTimerMethod_timerMethodGroup').selected = true; }
	//
	tempSelected = false;
	// ...................................... //
	// Transitions started by Method call or by altering filter value or visibility
	elementObject = document.getElementById('formFilterMethod_filterMethodPlay');
	if (timerMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formFilterMethod_filterMethodVisible');
	if (timerMethod == timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formFilterMethod_filterMethodPlay').selected = true; }
	//
	tempSelected = false;
	// ...................................... //
	// Manner by which images move across the screen
	elementObject = document.getElementById('formelementMoveMethod_elementMoveMethodDirect');
	if (elementMoveMethod == elementMoveMethodDirect) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formelementMoveMethod_elementMoveMethodSlideDown');
	if (elementMoveMethod == elementMoveMethodSlideDown) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formelementMoveMethod_elementMoveMethodSlideSide');
	if (elementMoveMethod == elementMoveMethodSlideSide) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formelementMoveMethod_elementMoveMethodRandom');
	if (elementMoveMethod == elementMoveMethodRandom) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formelementMoveMethod_elementMoveMethodRandom').selected = true; }
	//
	loadFirstDebugState = false;
	//
}
//
// ..................................................................................... _//
// Section Object Animation function (s)
// ..................................................................................... _//
//
// ...................................... //
// Sub-Section Filter Management function (s)
// General (Common) functions & properties:
// ...................................... //
//
//
function FilterControlCreate(filterPlayAll, startIndex, endIndex,
	oObjNext, oObjNextImage, oObjGroupIndex, oObjGroupItemIndex, filterObjIdPassed, filterIdPassed) {
	// filterId is this program's index number
	//
	if (!filterObj) { filterObj = new Array(30); }
	//
	if (!filterObj[filterObjIdPassed]) {
		filterObj[filterObjIdPassed] = new Object();
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
// ..................................................................................... _//
// FilterStore Filter Store / Restore
// ...................................... //
function FilterStore(oObjPassed, filterIndexPassed) {
	// this can't be right
	// oldFilter = oObjPassed.onfilterchange;
	// oObjPassed.onfilterchange = null;
	oldFilter = oObjPassed.filters[0].item;
}
//
// ..................................................................................... _//
// FilterRestore
// ...................................... //
function FilterRestore(oObjPassed, filterIndexPassed) {
	if (oldFilter != null) {
		// ???? oObjPassed.onfilterchange = oldFilter;
		oObjPassed.filters[0].item = oldFilter;
	}
}
//
// ...................................... //
// SectionBlock Filter Support function (s):
// ...................................... //
//
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
//
// ..................................................................................... _//
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
//
// ..................................................................................... _//
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
//
// ...................................... //
// SlideStyle:
// ...................................... //
//
// ..................................................................................... _//
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
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Filter Matrix Control function (s)
// ...................................... //
//
// ..................................................................................... _//
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
			if (filterMatrixCounterDegreeCurrent < 1 + 360) {
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
//
// ..................................................................................... _//
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
//
// ..................................................................................... _//
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
// ..................................................................................... _//
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
function FilterGet(filterPlayAll, startIndex, endIndex,
	oObjNext, oObjNextImage,
	oObjGroupIndex, oObjGroupItemIndex,
	filterObjIdPassed, filterIdPassed) {
	filterGetExit = false;// Set failure
	var filterIndexCn = 0;// Filter being set
	var filterCommandEval = new String();// Filter Set Command
	var filterMatrix;// Matrix filter
	//
	filterId = new Array(30);
	filterSelected = new Array(5);
	//
	while (!filterIndexCn && !filterGetExit) {
		//
		filterIdIndex = 0; filterIdPassed = filterIdIndex;
		//
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
		//
		// Resize (Matrix)
		if (filterResizeIsOn) {
			// Matrix always takes first spot (0)
			var filterClassMatrix = 3;
			filterMatrix = FilterGetByIndex(filterClassMatrix, filterClassStatic,
				filterTypeMatrix, filterDataCommand, filterCompletionIsZero,
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
			filterIndex, filterDataCommand, filterCompletionIsZero,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupItemIndex,
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
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				'Invalid filter(' + filterIdPassed + ') error! On filter # ' + filterIndex + ' '
				+ charNewLineTag + filterCommandEval,
				'FilterGet', 3128, null, null,
				errorWarn, errorDoNotDisplayTag, DoNotUseAlert);
			var bob = 'ted';
			filterIndexCn = 0;
			filterGetExit = true;// Exit on Set Error
		} else {
			// Set succeeded
			if (UseLogTimer && UseLogTimerDetail && UseLogTimerTransition) {
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Filter(' + filterIdPassed + ') of ' + filterIndexCn
					+ ' set successfully! Random filter # ' + filterIndex + ' '
					+ charNewLineTag + filterCommandEval,
					'FilterGet', 3139, null, null,
					errorComment, errorDoNotDisplayTag, DoNotUseAlert);
				//
			}
		}
	}
	filterCommand = filterCommandEval;
}
//
// ..................................................................................... _//
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
//
// ..................................................................................... _//
// Filter Enable
// ...................................... //
// Enable Filter prior to Play
//
function FilterEnable(filterPlayAll, startIndex, endIndex,
	oObjNext, oObjNextImage,
	oObjGroupIndex, oObjGroupItemIndex,
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
//
// ..................................................................................... _//
// Filter Apply
// ...................................... //
// Capture Rendered Content prior to Play
//
function FilterApply(filterPlayAll, startIndex, endIndex,
	oObjNext, oObjNextImage,
	oObjGroupIndex, oObjGroupItemIndex,
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
//
// ..................................................................................... _//
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
	//
	if (!filterDuration) { filterDuration = elementMoveDuration; }
	//
	if (filterMethod = filterMethodPlay) {
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
	// ...................................... //
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
//
// ..................................................................................... _//
// Filter Stop
// ...................................... //
//
function FilterStop(filterPlayAll, startIndex, endIndex,
	oObjNext, oObjNextImage,
	oObjGroupIndex, oObjGroupItemIndex,
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
// ..................................................................................... _//
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
//
// ..................................................................................... _//
// Filter Timing Get Random
// ...................................... //
function FilterTimingGetRandom() {
	return;
}
//
// ..................................................................................... _//
// ...................................... //
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
	// get interger
	filterKey = '';
	filterKeyPrefix = 'progid:';
	filterArguments = '';
	var filterCompletionSet = false;
	var filterCompletionRatio = 1;
	var UsePlay = false;
	var UseEnabled = false;
	if (!filterObj[filterIdPassed]) {
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
				// ..................................................................................... _//
				// ...................................... //
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
		// ..................................................................................... _//
		// ..................................................................................... _//
		// ...................................... //
		// Transition from prior content
		case filterClassPaired:
			// Transition is Motion Oriented (Paired)
			switch (filterClassFixityPassed) {
				// ..................................................................................... _//
				// ...................................... //
				// Transition suited to moveable content
				case filterClassDynamic:
					//
					switch (filterIndexPassed) {
						// Not Used
						case 9999:
							break;
						default:
							break;
					}
					break;
				// ..................................................................................... _//
				// ...................................... //
				// Transition suited to stationary content (Paired)
				case filterClassStatic:
				default:
					//
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
// ..................................................................................... _//
// Filter Get By Tag
// ...................................... //
function FilterGetByTagName(filterTagNamePassed) {
	//
	filterTagName = 'div';
	return null;
}
//
// ...................................... //
// Filter Get Random
// ..................................................................................... _//
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
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Sub-Section Timer Management function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Timers Primary Commands function (s)
// ...................................... //
//
// Initialize Variables
// Functions
TimerFunctionSet();
// Intervals and Duration
TimerDurationSet();
//
// ..................................................................................... _//
// ...................................... //
// Set Filter & Move function (s) for Timers
function TimerFunctionSet() {
	timerFunctionFilterItem = TimerItemDoStepFilter;
	timerFunctionFilterGroup = TimerGroupDoStepFilter;
	timerFunctionMoveItem = TimerItemDoStepMove;
	timerFunctionMoveGroup = TimerGroupDoStepMove;
}
//
// ..................................................................................... _//
// ...................................... //
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
//
// ..................................................................................... _//
// ...................................... //
function TimerItemDeactivate(timerType, timerGroup, timerGroupItem, UseRoot) {
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
		if (timerObj[timerGroup]) {
			if (timerObj[timerGroup][timerLevelKey]) {
				timerObj[timerGroup][timerLevelKey].timerInstance = 0;
				timerObj[timerGroup][timerLevelKey].timerIsRunning = false;
				timerObj[timerGroup][timerLevelKey].timerIntervalId = 0;
				timerObj[timerGroup][timerLevelKey].timerIntervalIdPrev = 0;
				timerObj[timerGroup][timerLevelKey].elIsDisplayed = elIsNotDisplayed;
			}
		}
		// deconstruct
		// delete timerObj[timerGroup] [timerLevelKey];
	}
}
//
// ..................................................................................... _//
// ...................................... //
function TimerItemAbort(timerType, timerGroup, timerGroupItem, UseRoot) {
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
		if (timerObj[timerGroup]) {
			if (timerObj[timerGroup][timerLevelKey]) {
				timerObj[timerGroup][timerLevelKey].timerDuration = 0;
			}
		}
	}
	// deconstruct
	// delete timerObj[timerGroup] [timerLevelKey];
}
//
// ..................................................................................... _//
// Menu Images Move Action
// TimerStartMove();
// ...................................... //
function TimerInitialize(timerTypePassed, timerGroupPassed, timerItemKeyPassed,
	playDirection,
	timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
	filterPlayAll, startIndex, endIndex,
	oObjNext, oObjNextImage,
	oObjGroupIndex, oObjGroupItemIndex,
	filterObjIdPassed, filterIdPassed) {
    //
    var timerType = timerTypePassed;
    var timerGroup = timerGroupPassed;
    var timerGroupItem = timerItemKeyPassed;
    var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
    var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	//
	// Timer Group and Image Box
	if (!timerObj) { timerObj = new Array; }
	// Group Level
	// Timer Group Creation
	var timerGroupNew = false;
	var timerItemNew = false;
	if (!timerObj[timerGroup]) { TimerCreate(); }
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
				if (playDirection = playDirectionForward) {
					var elementMoveMethodTemp = MathNumberRandomGetByRange(1, 3, filterRealFlag);
					if (elementMoveMethodTemp = elementMoveMethodPrev) {
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
				//
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
				//
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
		//
		// Element Level Functions
		timerObj[timerGroup][timerLevelKey].timerType = timerType;
		timerObj[timerGroup][timerLevelKey].timerGroup = timerGroup;
		timerObj[timerGroup][timerLevelKey].timerGroupItem = timerGroupItem;
		timerObj[timerGroup][timerLevelKey].timerRootKey = timerRootKey;
		//
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
		//
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
					= timerObj[timerRootKey].timerIntervalId;
				//
				timerObj[timerGroup][timerLevelKey].elementMoveMethod =
					timerObj[timerRootKey].elementMoveMethod;
				//
				timerObj[timerGroup][timerLevelKey].playDirection =
					timerObj[timerRootKey].playDirection;
			} else {
				timerObj[timerGroup][timerLevelKey].playDirection = playDirection;
			}
			// Display / visibility (& Filter triggering)
			timerObj[timerGroup][timerLevelKey].elIsDisplayed = elIsNotDisplayed;
		} else {
			timerObj[timerRootKey].playDirection = playDirection;
		}
		//
	}
	//
}
//
// ..................................................................................... _//
// Timer Pause then Start
// ...................................... //
// Included a setTimeout in BODY onload to delay start of text movement.
function TimerStart(timerType, timerGroup, timerGroupItem,
	timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
	timerDelayPassed) {
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	timerTen = 0;
	timerStarted += 1;
	timerObj[timerItemKey].timerElapsed = 0;
	timerObj[timerItemKey].timerCompletion = 0;
	timerGroupItemCurr = timerGroupItem;
	var timerIsRunning = false;
	var debugFunctionIsOn = false;
	if (UseLogTimer && (
		(timerMethod = timerMethodItem && UseLogTimerDetail)
		|| (timerMethod = timerMethodGroup)
	)) {
		if ((UseLogTimerTransition && timerType == timerTypeTransition)
			|| (UseLogTimerMove && timerType == timerTypeMove)) {
			debugFunctionIsOn = true;
		}
	}
	//
	if (timerObj[timerItemKey].timerIsRunning) { timerIsRunning = true; } else {
		if ((timerMethod == timerMethodItem && !timerObj[timerItemKey].timerIsRunning)
			|| !timerObj[timerRootKey].timerIsRunning
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
				&& !timerObj[timerItemKey].timerIsRunning)
				|| (timerMethod = timerMethodGroup
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
					//
					if (vTimerStart) {
						timerObj[timerItemKey].timerIntervalId = -1;
						if (timerMethod == timerMethodGroup) { timerObj[timerRootKey].timerIntervalId = -1; }
					}
					//
					if (debugFunctionIsOn) {
						MessageLog(DoNotUseDebug, DoUseSingleLine,
							TimerLogText(null, timerType, timerGroup, timerGroupItem,
								(timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
								timerObj[timerItemKey].playDirection, 'Timer Pending')
							+ ', Timer Delayed Start '
							+ (vTimerStart ? 'Ok' : 'Failed')
							+ (vTimerStart ? '.' : '!!!'),
							'TimerStart', 4557, null, null,
							errorComment, errorDoNotDisplayTag, DoNotUseAlert);
						//
					}
					//
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
	//
	if (timerIsRunning) {
		if (timerMethod == timerMethodGroup) {
			timerObj[timerItemKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
		}
		//
		if (debugFunctionIsOn) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
					timerObj[timerItemKey].playDirection, 'Timer Running')
				+ ', Already running'
				+ '.',
				'TimerStart', 4587, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
			//
		}
	}
}
//
// ..................................................................................... _//
// Timer Set
// ...................................... //
// Set up interval at which the timer will fire.
function TimerSet(timerType, timerGroup, timerGroupItem,
	timerFunctionPassed, timerDelayPassed,
	timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed
) {
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	var tempFunc = new String();
	tempFunc = function () { timerFunctionPassed(timerType, timerGroup, timerGroupItem); };// TimerMoveStepDo
	//
	var debugFunctionIsOn = false;
	if (UseLogTimer && (
		(timerMethod = timerMethodItem && UseLogTimerDetail)
		|| (timerMethod = timerMethodGroup)
	)) {
		if ((UseLogTimerTransition && timerType == timerTypeTransition)
			|| (UseLogTimerMove && timerType == timerTypeMove)) {
			debugFunctionIsOn = true;
		}
	}
	//
	if ((timerMethod == timerMethodItem && !(timerObj[timerItemKey].timerIntervalId > 0))
		|| !(timerObj[timerRootKey].timerIntervalId > 0)
	) {
		vtimerGroupItem = window.setInterval(
			tempFunc,
			timerInterval
		);
		//
		timerObj[timerItemKey].timerIntervalId = vtimerGroupItem;
		if (timerMethod == timerMethodGroup) { timerObj[timerRootKey].timerIntervalId = vtimerGroupItem; }
		//
		if (debugFunctionIsOn) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, timerObj[timerItemKey].playDirection, 'Interval Started')
				+ '.',
				'TimerSet', 4633, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
			//
		}
	} else {
		//
		if (timerMethod == timerMethodGroup) {
			timerObj[timerItemKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
		}
		//
		if (debugFunctionIsOn) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
					timerObj[timerItemKey].playDirection, 'Interval Running')
				+ ', Items:' + timerObj[timerRootKey].timerInstance
				+ ', Already running, delayed start not done'
				+ '.',
				'TimerSet', 4649, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
			//
		}
	}
	//
}
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Timer Task Related (Filter / Move) Commands function (s)
// ...................................... //
//
// ..................................................................................... _//
// TimerStartFilter
// ...................................... //
function TimerStartFilter(playDirection,
	timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
	filterPlayAll, startIndex, endIndex,
	oObjNext, oObjNextImage,
	oObjGroupIndex, oObjGroupItemIndex,
	filterObjIdPassed, filterIdPassed) {
	//
	var timerType = timerTypeTransition;
	var timerGroup = oObjGroupIndex;
	var timerGroupItem = oObjGroupItemIndex;
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	// numeric index used as id, not using a collections
	// new String(oObjNext.id + timerType);
	var timerReset = false;
	// Get
	if (!timerObj[timerGroup]) { timerReset = true; } else {
		if (!timerObj[timerItemKey]) { timerReset = true; } else {
			//
			if (playDirection == playDirectionForward) {
				if (timerObj[timerItemKey].elIsDisplayed != elIsDisplayed) { timerReset = true; }
			} else {
				if (timerObj[timerItemKey].elIsDisplayed != elIsNotDisplayed) { timerReset = true; }
			}
			if (timerObj[timerItemKey].timerIsRunning) { timerReset = false; }
		}
	}
	// Constructor
	if (timerReset) {
		TimerCreate();
		TimerInitialize(timerType, timerGroup, timerGroupItem,
			playDirection,
			timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
			filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupItemIndex,
			filterObjIdPassed, filterIdPassed)
		if (UseLogTimer && UseLogTimerTransition) {
			// && UseLogTimerDetail
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
					timerObj[timerItemKey].playDirection, 'Item Add')
				+ ', Items:' + timerObj[timerRootKey].timerInstance
				+ ', Item added to group'
				+ ' at ' + Date()
				+ '.',
				'TimerStartFilter', 4708, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		//
		// timerObj[timerGroup] [timerItemKey].elIsDisplayed = elIsDisplayed;
		//
	} else if (timerObj[timerItemKey].timerIsRunning) {
		// Timer exists and is currently busy.
		if (UseLogTimer && UseLogTimerTransition) {
			// && UseLogTimerDetail
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
					timerObj[timerRootKey].playDirection, 'Timing DoStep')
				+ ', Items:' + timerObj[timerRootKey].timerInstance
				+ ', Already running, perform single step'
				+ '.',
				'TimerStartFilter', 4723, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		//
		if (timerMethod == timerMethodGroup) {
			timerObj[timerItemKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
		}
		//
		TimerItemDoStepFilter(timerType, timerGroup, timerGroupItem);
		return;
	}
	// Create new timers
	timerObj[timerItemKey].elMoveStepLeft = 0;
	timerObj[timerItemKey].elMoveStepTop = 0;
	//
	// ...................................... //
	if (UseLogTimer && UseLogTimerTransition) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
				timerObj[timerItemKey].playDirection, 'Timer Start')
			+ ', Timer Start command being issued now'
			+ '.',
			'TimerStartFilter', 4744, null, null,
			errorComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	TimerStart(timerType, timerGroup, timerGroupItem,
		timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
		timerDelay);
	//
	// ...................................... //
	//
}
//
// ..................................................................................... _//
// ...................................... //
function TimerStartMove(playDirection,
	timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
	filterPlayAll, startIndex, endIndex,
	oObjNext, oObjNextImage,
	oObjGroupIndex, oObjGroupItemIndex,
	filterObjIdPassed, filterIdPassed) {
	//
	var timerType = timerTypeMove;// Type
	var timerGroup = oObjGroupIndex;// Group
	var timerGroupItem = oObjGroupItemIndex;// Id (numeric index used as id, not using a collections)
	// Element Id and Type Key
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	var timerReset = false;
	//
	if (!timerObj[timerGroup]) { timerReset = true; } else {
		if (!timerObj[timerItemKey]) { timerReset = true; } else {
			timerReset = false;
			//
			if (playDirection == playDirectionForward) {
				if (timerObj[timerItemKey].elIsDisplayed != elIsDisplayed) { timerReset = true; }
			} else {
				if (timerObj[timerItemKey].elIsDisplayed != elIsNotDisplayed) { timerReset = true; }
			}
			if (timerObj[timerItemKey].timerIsRunning) { timerReset = false; }
		}
	}
	//
	if (timerReset) {
		//
		TimerInitialize(timerType, timerGroup, timerGroupItem,
			playDirection,
			timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
			filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupItemIndex,
			filterObjIdPassed, filterIdPassed);
		//
		if (UseLogTimer && UseLogTimerMove) {
			// && UseLogTimerDetail
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
					timerObj[timerItemKey].playDirection, 'Item Add')
				+ ', Items:' + timerObj[timerRootKey].timerInstance
				+ ', Item added to group'
				+ ' at ' + Date()
				+ '.',
				'TimerStartMove', 4807, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		//
		// timerObj[timerGroup] [timerItemKey].elIsDisplayed = elIsDisplayed;
		//
	} else if (timerObj[timerItemKey].timerIsRunning) {
		// Timer Already Exists...
		if (UseLogTimer && UseLogTimerMove) {
			// && UseLogTimerDetail
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
					timerObj[timerItemKey].playDirection, 'Timing DoStep')
				+ ', Items:' + timerObj[timerRootKey].timerInstance
				+ ', Already running, perform single step'
				+ '.',
				'TimerStartMove', 4822, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		TimerItemDoStepMove(timerType, timerGroup, timerGroupItem);
		return;
	}
	//
	// ...................................... //
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
	timerObj[timerItemKey].moveDistanceLeft = moveDistanceLeft;
	//
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
	if (UseLogTimer && UseLogTimerMove) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, null, 'Timer Start')
			+ ', Items:' + timerObj[timerRootKey].timerInstance
			+ ', Orig: ( ' + elTopOrig + ', ' + elLeftOrig + ' )'
			+ ', Dest: ( ' + elTopDest + ', ' + elLeftDest + ' )'
			+ ', Offset: ( ' + moveOffsetTop + ', ' + moveOffsetLeft + ' )'
			+ ', Move Top:' + moveDistanceTop
			+ ', Move Left:' + moveDistanceLeft
			+ '.',
			'TimerStartMove', 4873, null, null,
			errorComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	TimerStart(timerType, timerGroup, timerGroupItem,
		timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
		timerDelay);
	//
	// ...................................... //
	//
}
//
// ..................................................................................... _//
// ...................................... //
function TimerGroupDoStepFilter(timerType, timerGroup, timerGroupItem) {
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	var timerGroupItemCurr;
	var timerGroupItemCnMax = timerObj[timerGroup].length;
	var timerIsActive = false;
	var timerDoAbort = false;
	var timerInstanceIsDone = false;
	//
	timerObj[timerRootKey].timerIntervalStep += 1;
	//
	if (UseLogTimer && UseLogTimerTransition) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, null, 'Group In')
			+ ', Items:' + timerObj[timerRootKey].timerInstance
			+ ', Step:' + timerObj[timerRootKey].timerStepCurr
			+ ', Time:' + Date()
			+ ', Starting Group'
			+ '.',
			'TimerGroupDoStepMove', 5111, null, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	// Process elements
	for (timerGroupItemCurr = 1; timerGroupItemCurr < 1 + imgMaxByGroup[timerGroup]; timerGroupItemCurr++) {
		//
		timerItemKey = timerGroupItemCurr + timerType;
		if (timerObj[timerItemKey]) {
			if (timerObj[timerItemKey].timerIsRunning) {
				timerInstanceIsDone = TimerItemDoStepFilter(timerType, timerGroup, timerGroupItemCurr);
				if (!timerInstanceIsDone) { timerIsActive = true; }
			}
		}
	}
	//
	if (timerObj[timerRootKey].timerStepCurr > timerObj[timerRootKey].timerStepMax) {
		MessageLog(DoNotUseDebug, DoNotUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, null, 'Group Step Max')
			+ ', Transition Group Timer Maximum (' + timerObj[timerRootKey].timerStepMax
			+ ') number of interval steps (' + timerObj[timerRootKey].timerStepCurr
			+ ') exceeded'
			+ '!!!',
			'TimerGroupDoStepFilter', 5134, null, null,
			errorSevere, errorDoNotDisplayTag, DoNotUseAlert);
		timerDoAbort = true;
	}
	//
	if (timerDoAbort || (!timerIsActive && timerObj[timerRootKey].timerInstance < 1)) {
		// Turn Off Timer
		var timerIntervalId;
		timerIntervalId = timerObj[timerRootKey].timerIntervalId;
		//
		window.clearInterval(timerIntervalId);
		//
		timerStarted -= 1;
		timerObj[timerRootKey].timerIntervalIdPrev = timerIntervalId;
		timerObj[timerRootKey].timerIntervalId = 0;
		//
		timerObj[timerRootKey].timerDateEnd = new Date();
		timerObj[timerRootKey].timerIsRunning = false;
		//
		if (timerObj[timerRootKey].playDirection = playDirectionForward) {
			timerObj[timerRootKey].elIsDisplayed = elIsDisplayed;
		} else { timerObj[timerRootKey].elIsDisplayed = elIsNotDisplayed; }
		//
		//
		if (UseLogTimer && UseLogTimerTransition) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoUseRoot,
					timerObj[timerRootKey].playDirection, 'Group Stop Timer')
				+ ', Interval Stopped'
				+ ', Stopping Group Timer'
				+ '.',
				'TimerGroupDoStepFilter', 5164, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
	}
	//
	if (UseLogTimer && UseLogTimerTransition) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoUseRoot,
				timerObj[timerRootKey].playDirection, 'Group Out')
			+ ', Items:' + timerObj[timerRootKey].timerInstance
			+ ', Step:' + timerObj[timerRootKey].timerStepCurr
			+ ', Time:' + Date()
			+ ', Leaving process Group'
			+ '.',
			'TimerGroupDoStepFilter', 5177, null, null,
			messageElementComment, true, false);
		//
		if (!timerIsActive && timerObj[timerRootKey].timerInstance < 1) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoUseRoot,
					timerObj[timerRootKey].playDirection, 'Group End')
				+ ', Finished Group'
				+ '.',
				'TimerGroupDoStepFilter', 5185, null, null,
				messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
	}
}
//
// ..................................................................................... _//
// ...................................... //
function TimerItemDoStepFilter(timerType, timerGroup, timerGroupItem) {
	var timerItemKey = timerGroupItem + timerType
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	//
	var tempFilterInProgress = true;
	var tempTimeOrStepsCompleted = false;
	//
	var timerDateElps;
	var timerCompletion;
	//
	var errorLogLine;
	//
	timerObj[timerRootKey].timerStepCurr += 1;
	//
	if (!timerObj[timerItemKey]) {
		errorLogLine = 'Invalid Timer Object Error!';
		errorLogLine += charNewLineTag + charTextIndex;
		errorLogLine += TimerKeyText(timerType, timerGroup, timerGroupItem);
		errorLogLine += charNewLineTag + charTextIndex;
		errorLogLine += TimerRootKeyText(timerType, timerGroup, timerGroupItem);
		WindowErrorDisplay(errorSeverityPassed, errorLogLine, 'TimerItemDoStepFilter', 4257);
	}
	//
	timerObj[timerItemKey].timerStepCurr += 1;
	timerObj[timerItemKey].timerIntervalStep += 1;
	//
	if (timerObj[timerItemKey].timerStepCurr = 1) {
		tempMoveInProgress = false;// ******* what? *******
	}
	//
	if (timerObj[timerItemKey].timerIntervalId = -1) {
		timerObj[timerItemKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
	}
	//
	// ...................................... //
	// Set Completion for Step Based or Time Based execution
	if (timerUseTime) {
		//
		timerDateElps = TimerGetElapsed(timerType, timerGroup, timerGroupItem);
		timerCompletion = timerTimeCompletion = timerDateElps / (timerObj[timerItemKey].timerDuration * 1000);
		if (timerCompletion > 1) { tempTimeOrStepsCompleted = true; }
		//
	} else {
		timerCompletion = timerStepCompletion = timerObj[timerItemKey].timerStepCurr
			/ timerObj[timerItemKey].timerStepMin;
		//
		if (timerObj[timerItemKey].timerStepCurr > timerObj[timerItemKey].timerStepMin) {
			tempTimeOrStepsCompleted = true;
		}
	}
	//
	var tempPosTop;
	var tempPosLeft;
	//
	// Stop if maximum # of steps exceeded
	if (timerObj[timerItemKey].timerStepCurr > timerObj[timerItemKey].timerStepMax) {
		MessageLog(DoNotUseDebug, DoNotUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
				timerObj[timerItemKey].playDirection, 'StepStopItem')
			+ ', At: ( t' + timerObj[timerItemKey].oObj.style.top
			+ ', l' + timerObj[timerItemKey].oObj.style.left
			+ ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5343 ' + ')'
			+ ', Transition Maximum (' + timerObj[timerItemKey].timerStepMax
			+ ') number of interval steps (' + timerObj[timerItemKey].timerStepCurr
			+ ') exceeded' + '!!!',
			'TimerItemDoStepFilter', 5251, null, null,
			errorWarn, errorDoNotDisplayTag, DoNotUseAlert);
		tempTimeOrStepsCompleted = true;
	}
	//
	//
	// ...................................... //
	// Mid play adjustments to filters
	// ...................................... //
	//
	// ...................................... //
	// End of loop
	var timerInstanceIsDone = false;
	if (!tempFilterInProgress || tempTimeOrStepsCompleted) {
		// Arrived at destinatioin
		timerInstanceIsDone = true;
		// One timer per Item or Element (per Timer Type)
		timerObj[timerRootKey].timerInstance -= 1;
		if (timerMethod == timerMethodGroup) {
			// Group Timer
			timerIntervalId = timerObj[timerRootKey].timerIntervalId;
		} else if (timerMethod == timerMethodItem) {
			// Item Timer
			// Turn Off Timer
			timerIntervalId = timerObj[timerItemKey].timerIntervalId;
			//
			window.clearInterval(timerIntervalId);
			//
			if (UseLogTimer && UseLogTimerDetail && UseLogTimerTransition) {
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
						timerObj[timerItemKey].playDirection, 'Stop')
					+ ', At: ( t' + timerObj[timerItemKey].oObj.style.top
					+ ', l' + timerObj[timerItemKey].oObj.style.left
					+ ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5343 ' + ')'
					+ ', Interval Stopped'
					+ '.',
					'TimerItemDoStepFilter', 5284, null, null,
					errorComment, errorDoNotDisplayTag, DoNotUseAlert);
			}
			//
			timerStarted -= 1;
			timerObj[timerItemKey].timerIntervalIdPrev = timerIntervalId;
			timerObj[timerItemKey].timerIntervalId = 0;
			//
		}
		if (filterResizeIsOn && !timerObj[timerItemKey].elIsDisplayed) {
			var temp;
			if (playDirection == playDirectionForward) { temp = 1; } else { temp = 0.05; }
			FilterResize(timerObj[timerItemKey].oObj, filterClassMatrix, temp);
		}
		// if (filterObj[filterObjIdPassed].filterSet[0].filterDoStop) {
		// (filterPlayAll, startIndex, endIndex,
		// oObjNext, oObjNextImage, filterObjIdPassed, filterIdPassed);
		FilterStop(
			timerObj[timerItemKey].filterPlayAll,
			timerObj[timerItemKey].startIndex,
			timerObj[timerItemKey].endIndex,
			timerObj[timerItemKey].oObj,
			timerObj[timerItemKey].oObjImage,
			timerGroup,
			timerGroupItem,
			timerObj[timerItemKey].filterObjId,
			timerObj[timerItemKey].filterId
		);
		// }
		//
		timerObj[timerItemKey].timerDateEnd = new Date();
		timerObj[timerItemKey].timerIsRunning = false;
		//
		if (timerObj[timerItemKey].playDirection == playDirectionForward) {
			timerObj[timerItemKey].elIsDisplayed = elIsDisplayed;
		} else {
			if (elementMoveDuration < filterDuration) {
				timerObj[timerItemKey].oObj.style.display = 'none';
			}
			timerObj[timerItemKey].elIsDisplayed = elIsNotDisplayed;
		}
		tempFilterInProgress || tempTimeOrStepsCompleted
		//
		if (UseLogTimer && UseLogTimerDetail && UseLogTimerTransition) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
					timerObj[timerItemKey].playDirection, 'Stop')
				+ ', At: ( t' + timerObj[timerItemKey].oObj.style.top
				+ ', l' + timerObj[timerItemKey].oObj.style.left
				+ ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5331 ' + ').',
				+ ', Stopping Item Timer'
				+ '.',
				'TimerItemDoStepFilter', 5331, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
	} else {
		if (UseLogTimer && UseLogTimerDetail && UseLogTimerTransition) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
					timerObj[timerItemKey].playDirection, 'SkipItem')
				+ ', At: ( t' + timerObj[timerItemKey].oObj.style.top
				+ ', l' + timerObj[timerItemKey].oObj.style.left
				+ ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5343 ' + ')'
				+ ', Elapsed:' + timerObj[timerItemKey].timerElapsed / 1000
				+ ', Step:' + timerObj[timerItemKey].timerStepCurr
				+ ', Time:' + Date()
				+ ', Exiting Item but no action'
				+ '.',
				'TimerItemDoStepFilter', 5343, null, null,
				messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
	}
	return timerInstanceIsDone;
}
//
// ..................................................................................... _//
// ...................................... //
function TimerGroupDoStepMove(timerType, timerGroup, timerGroupItem) {
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	var timerGroupItemCurr;
	var timerGroupItemCnMax = timerObj[timerGroup].length;
	var timerIsActive = false; timerDoAbort = false;
	var timerInstanceIsDone = false;
	//
	timerObj[timerRootKey].timerIntervalStep += 1;
	//
	if (UseLogTimer && UseLogTimerMove) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoUseRoot,
				timerObj[timerItemKey].playDirection, 'Group In')
			+ ', Items:' + timerObj[timerRootKey].timerInstance
			+ ', Step:' + timerObj[timerRootKey].timerStepCurr
			+ ', Time:' + Date()
			+ ', Starting Group'
			+ '.',
			'TimerGroupDoStepMove', 5371, null, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	// Process elements
	for (timerGroupItemCurr = 1; timerGroupItemCurr < 1 + imgMaxByGroup[timerGroup]; timerGroupItemCurr++) {
		//
		timerIsActive = false;
		timerItemKey = timerGroupItemCurr + timerType;
		if (timerObj[timerItemKey]) {
			if (timerObj[timerItemKey].timerIsRunning) {
				timerInstanceIsDone = TimerItemDoStepMove(timerType, timerGroup, timerGroupItemCurr);
				if (!timerInstanceIsDone) { timerIsActive = true; }
			}
		}
	}
	//
	if (timerObj[timerRootKey].timerStepCurr > timerObj[timerRootKey].timerStepMax) {
		MessageLog(DoNotUseDebug, DoNotUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoUseRoot,
				timerObj[timerRootKey].playDirection, 'Group Step Max')
			+ 'Move.. Group Timer Maximum (' + timerObj[timerRootKey].timerStepMax
			+ ') number of interval steps (' + timerObj[timerRootKey].timerStepCurr
			+ ') exceeded'
			+ '!!!',
			'TimerGroupDoStepMove', 5393, null, null,
			errorSevere, errorDoNotDisplayTag, DoNotUseAlert);
		timerDoAbort = true;
	}
	//
	if (timerDoAbort || (!timerIsActive && timerObj[timerRootKey].timerInstance < 1)) {
		// Turn Off Timer
		var timerIntervalId;
		timerIntervalId = timerObj[timerRootKey].timerIntervalId;
		window.clearInterval(timerIntervalId);
		timerStarted -= 1;
		timerObj[timerRootKey].timerIntervalIdPrev = timerIntervalId;
		timerObj[timerRootKey].timerIntervalId = 0;
		//
		timerObj[timerRootKey].timerDateEnd = new Date();
		timerObj[timerRootKey].timerIsRunning = false;
		//
		if (timerObj[timerRootKey].playDirection = playDirectionForward) {
			timerObj[timerRootKey].elIsDisplayed = elIsDisplayed;
		} else { timerObj[timerRootKey].elIsDisplayed = elIsNotDisplayed; }
		//
		if (UseLogTimer && UseLogTimerMove) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoUseRoot,
					timerObj[timerRootKey].playDirection, 'Group Stop Timer')
				+ ', Stopping Group Timer'
				+ '.',
				'TimerGroupDoStepMove', 5419, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
	}
	//
	if (UseLogTimer && UseLogTimerMove) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoUseRoot,
				timerObj[timerRootKey].playDirection, 'Group Out')
			+ ', Items:' + timerObj[timerRootKey].timerInstance
			+ ', Step:' + timerObj[timerRootKey].timerStepCurr
			+ ', Time:' + Date()
			+ ', Leaving process Group'
			+ '.',
			'TimerGroupDoStepMove', 54, null, null,
			messageElementComment, true, false);
		//
		if (!timerIsActive && timerObj[timerRootKey].timerInstance < 1) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoUseRoot,
					timerObj[timerRootKey].playDirection, 'End')
				+ ', Finished Group'
				+ '.',
				'TimerGroupDoStepMove', 5440, null, null,
				messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
			//
		}
	}
}
//
// ..................................................................................... _//
// ...................................... //
function TimerItemDoStepMove(timerType, timerGroup, timerGroupItem) {
	// ...................................... //
	// Set Id's
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	// ...................................... //
	// initialize completion variables
	var tempMoveInProgress = false;
	var tempTimeOrStepsCompleted = 0;
	var timerCompletionCurr = 0;
	var timerCompletionTemp = 0;
	// ...................................... //
	// initialize positions, direction and methodology variables
	var tempPosTop = -1; var tempPosLeft = -1;
	var playDirection = timerObj[timerItemKey].playDirection;
	var elementMoveMethod = timerObj[timerItemKey].elementMoveMethod;
	var DoMove = false;
	var IsRising = false; var IsRisingFactor = 1;
	var isRightward = false; var isRightwardFactor = -1;
	// ...................................... //
	// Set Timer for new menu image box
	if (timerObj[timerItemKey].timerIntervalId = -1) {
		timerObj[timerItemKey].timerIntervalId = timerObj[timerRootKey].timerIntervalId;
	}
	// ...................................... //
	// Validate Object
	if (!timerObj[timerItemKey]) {
		var errorLogLine = 'Invalid Timer Object Error!';
		errorLogLine += charNewLineTag + charTextIndex;
		errorLogLine += TimerKeyText(timerType, timerGroup, timerGroupItem);
		errorLogLine += charNewLineTag + charTextIndex;
		errorLogLine += TimerRootKeyText(timerType, timerGroup, timerGroupItem);
		WindowErrorDisplay(errorSeverityPassed, errorLogLine, 'TimerItemDoStepFilter', 4258);
	}
	// ...................................... //
	// Increment Current Step
	timerObj[timerRootKey].timerStepCurr += 1;
	timerObj[timerItemKey].timerStepCurr += 1;
	//
	timerObj[timerItemKey].timerIntervalStep += 1;
	//
	timerObj[timerItemKey].elMoveStepTop += 1;
	// ...................................... //
	// Set Style and Position for new menu image box
	if (timerObj[timerItemKey].timerStepCurr = 1) {
		// Start box in initial position
		if (playDirection == playDirectionReverse) {
			timerCompletionTemp = 1.0;
			// leave the object at its current position (the destination)
			// timerObj[timerGroup] [timerItemKey].oObj.style.top = timerObj[timerGroup] [timerItemKey].elTopDest + 'px';
			// timerObj[timerGroup] [timerItemKey].oObj.style.left = timerObj[timerGroup] [timerItemKey].elLeftDest + 'px';
		} else {
			timerCompletionTemp = 0.05;
			timerObj[timerItemKey].oObj.style.top = timerObj[timerItemKey].elTopOrig + 'px';
			timerObj[timerItemKey].oObj.style.left = timerObj[timerItemKey].elLeftOrig + 'px';
		}
		// Resize new object
		if (filterResizeIsOn && !timerObj[timerItemKey].elIsDisplayed) {
			FilterResize(
				timerObj[timerItemKey].oObj,
				filterClassMatrix,
				timerCompletionTemp);
		}
	}
	//
	// ...................................... //
	// Set Completion based on methodology (Step based or Time Duration based execution)
	if (timerUseTime) {
		// (Elapsed) Time based
		timerObj[timerItemKey].timerDateElps = TimerGetElapsed(timerType, timerGroup, timerGroupItem);
		timerCompletionTemp = timerObj[timerItemKey].timerDateElps / (timerObj[timerItemKey].timerDuration * 1000);
	} else {
		// Step based
		timerCompletionTemp = timerObj[timerItemKey].timerStepCurr / timerObj[timerItemKey].timerStepMin;
		if (timerObj[timerItemKey].timerStepCurr > timerObj[timerItemKey].timerStepMin) {
			tempTimeOrStepsCompleted = 5497; timerCompletionTemp = 1;
		}
	}
	//
	if (timerCompletionTemp >= 1) { tempTimeOrStepsCompleted = 5492; timerCompletionTemp = 1; }
	// ...................................... //
	// Set Completion values
	timerCompletionCurr =
		timerObj[timerItemKey].timerCompletion = timerCompletionTemp;
	if (timerUseTime) { timerObj[timerItemKey].timerTimeCompletion = timerCompletionTemp; }
	if (!timerUseTime) { timerObj[timerItemKey].timerStepCompletion = timerCompletionTemp; }
	//
	if (playDirection == playDirectionReverse) { timerCompletionCurr = 1 - timerCompletionTemp; }
	//
	// ...................................... //
	// StepStopItem
	// Stop if maximum # of steps exceeded
	// increment vertical step
	if (timerObj[timerItemKey].elMoveStepTop > timerObj[timerItemKey].timerStepMax) {
		MessageLog(DoNotUseDebug, DoNotUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
				timerObj[timerItemKey].playDirection, 'StepStopItem')
			+ ' At: ( t' + tempPosTop + ', l' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempMoveInProgress + ' : l5515 ' + ').'
			+ '.  Move.. Maximum (' + timerObj[timerItemKey].timerStepMax
			+ ') number of interval vertical steps (' + timerObj[timerItemKey].timerStepCurr
			+ ') exceeded'
			+ '!!!',
			'TimerItemDoStepMove', 5515, null, null,
			errorSevere, errorDoNotDisplayTag, DoNotUseAlert);
		tempTimeOrStepsCompleted = 5515;
	}
	//
	// increment horizontal step
	timerObj[timerItemKey].elMoveStepLeft += 1;
	//
	/*
	if ( timerObj[timerGroup] [timerItemKey].elMoveStepLeft > timerObj[timerGroup] [timerItemKey].timerStepMax) {
		MessageLog(DoNotUseDebug, DoNotUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
				timerObj[timerGroup] [timerItemKey].playDirection, 'StepStopItem')
				+ ' At: ( t' + tempPosTop + ', l' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempMoveInProgress + ' : l5525 ' + ')'
				+ '.  Move.. Maximum (' + timerObj[timerGroup] [timerItemKey].timerStepMax
				+ ') number of interval horizontal steps (' + timerObj[timerGroup] [timerItemKey].timerStepCurr
				+ ') exceeded'
				+ '!!!',
				'TimerItemDoStepMove', 5525, null, null,
				errorSevere, errorDoNotDisplayTag, DoNotUseAlert);
		tempTimeOrStepsCompleted = 5525;
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
				tempPosTop = parseInt(timerObj[timerItemKey].oObj.style.top);
				// don't change top during second half of SlideDown
			} else if (elementMoveMethod == elementMoveMethodSlideSide && timerCompletionCurr < 0.5) {
				// Slide Side
				tempPosTop = parseInt(timerObj[timerItemKey].oObj.style.top);
				// don't change top during first half of SlideSide
			} else {
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
				// tempPosLeft = timerObj[timerGroup] [timerItemKey].elLeftOrig;
				// tempPosLeft = parseInt(timerObj[timerGroup] [timerItemKey].oObj.style.left);
				// Slide Side
			} else if (timerObj[timerItemKey].elementMoveMethod = elementMoveMethodSlideSide
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
				if (timerObj[timerItemKey].elementMoveMethod = elementMoveMethodSlideDown) {
					timerCompletionTemp = 2 * (timerCompletionCurr - 0.5);
				}
				// Slide Side
				// horizontal movement is at doubled speed.
				if (timerObj[timerItemKey].elementMoveMethod = elementMoveMethodSlideSide) {
					timerCompletionTemp = 2 * timerCompletionCurr;
				}
				//
				tempPosLeft = timerObj[timerItemKey].elLeftOrig
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
			&& !timerObj[timerItemKey].elIsDisplayed) {
			//
			timerCompletionTemp = timerObj[timerItemKey].timerCompletion;
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
		timerTen + 0.1;
	}
	//
	if (UseLogTimer && UseLogTimerDetail && UseLogTimerMove) {
		var tempDetails = ', At: ( step ' + timerObj[timerItemKey].timerStepCurr + ' : top ' + tempPosTop + ', left ' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ': ' + (timerCompletionCurr * 100) + '%' + ' : m' + tempMoveInProgress + ' : l5747 ' + ')'
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
			timerIntervalId = timerObj[timerItemKey].timerIntervalId;
			//
			window.clearInterval(timerIntervalId);
			//
			if (UseLogTimer && UseLogTimerDetail && UseLogTimerMove) {
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
						timerObj[timerItemKey].playDirection, 'Stop')
					+ tempDetails
					+ ', Stopping Item Timer'
					+ '.',
					'TimerItemDoStepMove', 5711, null, null,
					errorComment, errorDoNotDisplayTag, DoNotUseAlert);
			}
			//
			timerStarted -= 1;
			timerObj[timerItemKey].timerIntervalIdPrev = timerIntervalId;
			timerObj[timerItemKey].timerIntervalId = 0;
			//
		}
		// Leave box in final position
		if (playDirection == playDirectionForward) {
			timerObj[timerItemKey].oObj.style.top = timerObj[timerItemKey].elTopDest + 'px';
			timerObj[timerItemKey].oObj.style.left = timerObj[timerItemKey].elLeftDest + 'px';
		} else {
			timerObj[timerItemKey].oObj.style.top = timerObj[timerItemKey].elTopOrig + 'px';
			timerObj[timerItemKey].oObj.style.left = timerObj[timerItemKey].elLeftOrig + 'px';
		}
		//
		timerObj[timerItemKey].timerDateEnd = new Date();
		timerObj[timerItemKey].timerIsRunning = false;
		//
		if (playDirection == playDirectionForward) {
			timerObj[timerItemKey].elIsDisplayed = elIsDisplayed;
		} else {
			if (elementMoveDuration >= filterDuration) {
				timerObj[timerItemKey].oObj.style.display = 'none';
			}
			timerObj[timerItemKey].elIsDisplayed = elIsNotDisplayed;
		}
		//
		if (UseLogTimer && UseLogTimerDetail && UseLogTimerMove) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
					timerObj[timerItemKey].playDirection, 'Stop')
				+ tempDetails
				+ ', Item Interval Timer Stopped'
				+ '.',
				'TimerItemDoStepMove', 5747, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
	} else {
		if (UseLogTimer && UseLogTimerDetail && UseLogTimerMove) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot,
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
				'TimerItemDoStepMove', 5754, null, null,
				messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
	}
	return timerInstanceIsDone;
}
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Timer Control function (s)
// ...................................... //
//
// ..................................................................................... _//
// Timer Calculate current running time
// ...................................... //
// Included a setTimeout in BODY onload to delay start of text movement.
// oObjPassed, elLeftOrig, elTopOrig, elLeftDest, elTopDest)
function TimerGetElapsed(timerType, timerGroup, timerGroupItem) {
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
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
// ..................................................................................... _//
// ...................................... //
function TimerStartMoveBusy(timerType, timerGroup, timerGroupItem, UseLog) {
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerMoveBusy = false;
	if (timerObj[timerGroup]) {
		if (timerObj[timerItemKey]) {
			if (timerObj[timerItemKey].timerIsRunning) { timerMoveBusy = true; }
		}
	}
	//
	if (UseLog && timerMoveBusy) {
		ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
			'Busy Timer', 'ElementEventCheckDuplicate', 0);
	}
	//
}
//
// ..................................................................................... _//
// Timer Move Box (Element, i.e. Div)
// ...................................... //
// This test incrementally repositions an element.
// It loops through a set number of times.
function TimerMoveTest(timerType, timerGroup, timerGroupItem) {
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
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
		window.clearInterval(vtimerGroupItem);
		divToggle.style.visibility = 'visible';
	}
}
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Timer User Interface function (s)
// ...................................... //
//
// ..................................................................................... _//
// ...................................... //
function TimerLogText(oObjNextPassed, timerType, timerGroup, timerGroupItem, UseRootKey, playDirection, timerAction) {
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	var DoUseWord = true;
	var LogText = '';
	LogText += TimerTypeText(timerType, DoUseWord);
	LogText += ', ' + TimerIntervalText(timerType, timerGroup, timerGroupItem, UseRootKey);
	LogText += ', ' + TimerActionText(timerAction);
	LogText += ', ' + TimerKeyText(timerType, timerGroup, timerGroupItem);
	LogText += ', ' + TimerDirectionText(timerType, timerGroup, timerGroupItem, UseRootKey, playDirection, timerAction);
	return LogText;
}
//
// ..................................................................................... _//
// ...................................... //
function TimerDirectionText(timerType, timerGroup, timerGroupItem, UseRootKey, playDirection, timerAction) {
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
			// LogText += (timerObj[timerGroup] [timerItemKey].playDirection - playDirectionForward);
			// LogText += ((timerObj[timerGroup] [timerItemKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward');
			LogText += 'Direction (' + ((timerObj[timerItemKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward') + ')'
		} else { LogText += 'Item Direction undefined'; }
	} else { LogText += 'Item Direction undefined'; }
	return LogText;
}
//
// ..................................................................................... _//
// ...................................... //
function TimerActionText(timerAction) { return ('Action: ' + (timerAction + ':' + '.........................')).substring(0, 25); }
//
// ..................................................................................... _//
// ...................................... //
function TimerTypeText(timerType, UseWord) { return ((UseWord ? 'Type: ' : '') + (timerType + '...............').substring(0, 10)); }
//
// ..................................................................................... _//
// ...................................... //
function TimerKeyText(timerType, timerGroup, timerGroupItem) { return 'Object: (' + (TimerTypeText(timerType, false)) + ', ' + timerGroup + ', ' + timerGroupItem + ')'; }
//
// ..................................................................................... _//
// ...................................... //
function TimerIntervalText(timerType, timerGroup, timerGroupItem, UseRootKey) {
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	// var tempString = new String();
	var tempString;
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
	tempString = 'Timer (' + tempString + ')';
	return 'Timer (' + ((tempInterval).toString()).substring(1, 5) + ')';
}
function TimerIntervalTextOld(timerType, timerGroup, timerGroupItem, UseRootKey) {
	if (UseRootKey) {
		if (timerObj[timerRootKey]) {
			// Note: Syntax difference between native string "(target).substring(1, 5);"
			// as compared to:
			// tempString = 100000 + timerObj[timerGroup] [timerRootKey].timerIntervalId;
			// tempString = 'Timer (' + tempString.substring(1, 5) + ')';;
			// return 'Timer (' + tempString.substring(1, 5) + ')';
			// String does not work!
			//
			// That is, the MS String Object's "target.substring(1, 5);" is unsupported.
			// Use Javascript's:
			// var tempString = (100000 + timerObj[timerGroup] [timerRootKey].timerIntervalId).toString().substring(1, 5);
			// typically:
			return 'Timer (' + ((100000 + timerObj[timerRootKey].timerIntervalId).toString()).substring(1, 5) + ')';
		} else { return 'Timer (None.)'; }
	} else {
		if (timerObj[timerItemKey]) {
			// tempString = 100000 + timerObj[timerGroup] [timerItemKey].timerIntervalId;
			return 'Timer (' + ((100000 + timerObj[timerItemKey].timerIntervalId).toString()).substring(1, 5) + ')';
		} else { return 'Timer (None.)'; }
	}
}
//
// ..................................................................................... _//
// ...................................... //
function TimerRootKeyText(timerType, timerGroup, timerGroupItem) {
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	var timerGroupItemCurr;
	var timerGroupItemCnMax = timerObj[timerGroup].length;
	var timerRootText = 'Root ';
	var timerIsRunningText = 'IsRunning: ';
	var timerIsDisplayedText = 'IsDisplayed: ';
	//
	// Process elements
	for (timerGroupItemCurr = 1; timerGroupItemCurr < 1 + imgMaxByGroup[timerGroup]; timerGroupItemCurr++) {
		//
		var timerItemKey = timerGroupItemCurr + timerType;
		if (timerObj[timerItemKey]) {
			if (!timerObj[timerItemKey].timerIsRunning) {
				timerIsRunningText += '0';
			} else { timerIsRunningText += '1'; }
			timerIsDisplayedText += timerObj[timerItemKey].elIsDisplayed;
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
	// timerRootText += ' x: ' + timerObj[timerGroup] [timerRootKey].
	// timerRootText += ' x: ' + timerObj[timerGroup] [timerRootKey].
	return timerRootText;
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Body Content Images Html Build function (s)
// ..................................................................................... _//
//
// ...................................... //
// Html Variables
var imgHtml = new String();
// var BodyImageContainer = document.documentElement['BodyImageContainer'];
// .getElementById('BodyImageContainer');
//
// Build (inner) HTML for Menu Images
// MenuImagesHtmlBuild();
//
// ..................................................................................... _//
// ...................................... //
function BodyImagesHtmlBuild() {
	//
	// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx TO DO xxxxxxxxxxxxxxx
	// document.write(imgHtml);
	bodyImageContainer = ElementGetRef(bodyImageContainer, 'BodyImageContainer', 'BodyImageContainer');
	bodyImageContainer.innerHTML = imgHtml;
	//
	// This page has no stock of body images
	// just text captions.
	loadFirstBodyImage = false;
	//
	return bodyImageContainer;
}
//
//
// ..................................................................................... _//
// Section Menu Images Html Build function (s) (Groups / Items)
// ..................................................................................... _//
//
// ...................................... //
//
// MenuImagesHtmlBuild();
//
// ...................................... //
function MenuImagesHtmlBuild() {
	//
	// There are three allowed strategies for event handling:
	// the following two options are mutally exclusive:
	// imgLoadUseDOM
	// imgLoadUseInner
	// use of the event handler removes event code from both of the above
	// imgLoadUseEventHandler
	//
	// Filter in use is Type Checkerboard;
	filterIndexPassed = filterTypeCheckerBoard;
	// + ', ' + filterTypeCheckerBoard + ')
	//
	bodyImageContainer = ElementGetRef(bodyImageContainer, 'BodyImageContainer', 'BodyImageContainer');
	//
	tempFirst = true;
	var imgHtmlDivBoth = document.createElement('div');
	var imgHtmlDivBothInner = new String();
	var imgHtmlDivSmall = document.createElement('div');
	var imgHtmlDivSmallInner = new String();
	var imgHtmlDivLarge = document.createElement('div');
	var imgHtmlDivLargeInner = new String();
	//
	var imgHtmlDiv = document.createElement('div');
	var imgHtmlDivInner = new String();
	var imgHtmlA = document.createElement('a');
	var imgHtmlAInner = new String();
	var imgHtmlSpan = document.createElement('span');
	var imgHtmlSpanInner = new String();
	var imgHtmlBr = document.createElement('br');
	var imgHtmlBrInner = new String();
	var imgHtmlImg = document.createElement('img');
	var imgHtmlImgInner = new String();
	//
	var DivSmallOnmouseoverText = new String();
	var DivSmallOnmouseoverFunction;
	var DivSmallOnmouseoverFunctionName = new String();
	var DivSmallOnmouseoutText = new String();
	var DivSmallOnmouseoutFunction;
	var DivSmallOnmouseoutFunctionName = new String();
	var DivSmallOnmousedownText = new String();
	var DivSmallOnmousedownFunction;
	var DivSmallOnmousedownFunctionName = new String();
	//
	var DivLargeOnmouseoverText = new String();
	var DivLargeOnmouseoverFunction;
	var DivLargeOnmouseoverFunctionName = new String();
	var DivLargeOnmouseoutText = new String();
	var DivLargeOnmouseoutFunction;
	var DivLargeOnmouseoutFunctionName = new String();
	var DivLargeOnmousedownText = new String();
	var DivLargeOnmousedownFunction;
	var DivLargeOnmousedownFunctionName = new String();
	//
	// imgHtml += 'div id='BodyImageContainer'>';
	for (imgGroupCn = 1; imgGroupCn < 1 + bodyMenuGroupMax; imgGroupCn++) {
		for (imgCn = 1; imgCn < 1 + imgMaxByGroup[imgGroupCn]; imgCn++) {
			oName = ElementItemGetName(imgGroupCn, imgCn);
			// ..................................................................................... _//
			// Image Small
			// ..................................................................................... _//
			// Element Div
			imgHtmlDivInner = '';
			imgHtmlDivSmallInner = '';
			imgHtmlDivSmall = document.createElement('div');
			imgHtmlDivInner += tagDiv;
			// Id
			imgHtmlDivSmall.id = (oName + imgGroupCn) + imgCn;// Image Small Id
			imgHtmlDivSmall.name = (oName + imgGroupCn) + imgCn;// Image Small Id
			imgHtmlDivInner += attributeId + quoteOpen + + oName + imgGroupCn + imgCn + quoteClose;// Image Small Id
			// Class
			imgHtmlDivSmall.className = 'imgThumbSmall MenuImageBox MenuImageBoxBorder';// Class
			imgHtmlDivInner += attributeClass + quoteOpen + 'imgThumbSmall MenuImageBox MenuImageBoxBorder' + quoteClose;// Class
			// ..................................................................................... _//
			// Events:
			// ..................................................................................... _//
			// Mouse Over
			// DivSmallOnmouseover
			DivSmallOnmouseoverText = '';
			DivSmallOnmouseoverFunction = ElementGroupShowStack;
			DivSmallOnmouseoverFunctionName = 'ElementGroupShowStack';
			DivSmallOnmouseoverText += '(';
			DivSmallOnmouseoverText += IsSmall + ', ';// Is Small Image
			// Parent Object
			if (imgCn > 1) {
				eventParentName = (ElementItemGetName(imgGroupCn, imgCn - 1) + imgGroupCn + (imgCn - 1));// Previous (Small) Image Id
			} else {
				eventParentName = (ElementItemGetName(imgGroupCn, imgCn - 1));// Menu Container Id
			}
			DivSmallOnmouseoverText += quoteInnerOpen + eventParentName + quoteInnerClose + ', ';// Parent Id
			DivSmallOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Image' + quoteInnerClose + ', ';// Small Image Id
			DivSmallOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
			DivSmallOnmouseoverText += oObjImageSizeSmall + ', ';// Small Image Size
			DivSmallOnmouseoverText += imgGroupCn + ', ';// Menu Group
			DivSmallOnmouseoverText += imgCn + ', ';// Menu Group
			DivSmallOnmouseoverText += '0, ';// Current Show Lock
			DivSmallOnmouseoverText += '1';// Ignore Show Lock
			DivSmallOnmouseoverText += ');';
			//
			if (!imgLoadUseEventHandler) {
				if (imgLoadUseDOM) {
					imgHtmlDivSmall = ElementEventAdd('onmouseover',
						DivSmallOnmouseoverFunction, DivSmallOnmouseoverFunctionName,
						DivSmallOnmouseoverText, imgHtmlDivSmall);
				} else if (imgLoadUseInner) {
					imgHtmlDivInner += attributeEventMouseOver + quoteOpen;
					DivSmallOnmouseoverText = ' ' + DivSmallOnmouseoverFunctionName + DivSmallOnmouseoverText;
					imgHtmlDivInner += DivSmallOnmouseoverText;
					imgHtmlDivInner += quoteClose;// onmouseover end quote
				}
			}
			// end of mouseover
			//
			// ..................................................................................... _//
			// Mouse Out
			// DivSmallOnmouseout
			DivSmallOnmouseoutText = '';
			DivSmallOnmouseoutFunction = ElementItemHideId;
			DivSmallOnmouseoutFunctionName = 'ElementItemHideId';
			DivSmallOnmouseoutText += '(';
			DivSmallOnmouseoutText += 'event' + ', ';// Event Object
			DivSmallOnmouseoutText += IsSmall + ', ';// Is Small Image
			DivSmallOnmouseoutText += quoteInnerOpen + eventParentName + quoteInnerClose + ', ';// Parent Id
			DivSmallOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Image' + quoteInnerClose + ', ';// Small Image
			DivSmallOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
			DivSmallOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
			DivSmallOnmouseoutText += imgGroupCn + ', ';// Menu Group
			DivSmallOnmouseoutText += imgCn + ', ';// Menu Group
			DivSmallOnmouseoutText += '0,';// 'false, ';// Current Show Lock
			DivSmallOnmouseoutText += '0';// 'false';// Ignore Show Lock
			DivSmallOnmouseoutText += ');';
			//
			if (!imgLoadUseEventHandler) {
				if (imgLoadUseDOM) {
					imgHtmlDivSmall = ElementEventAdd('onmouseout',
						DivSmallOnmouseoutFunction, DivSmallOnmouseoutFunctionName,
						DivSmallOnmouseoutText, imgHtmlDivSmall);
				} else if (imgLoadUseInner) {
					imgHtmlDivInner += attributeEventMouseOut + quoteOpen;
					DivSmallOnmouseoutText = ' ' + DivSmallOnmouseoutFunctionName + DivSmallOnmouseoutText;
					imgHtmlDivInner += ' ' + DivSmallOnmouseoutText;
					imgHtmlDivInner += quoteClose;// onmouseout end quote
				}
			}
			// end of mouseout
			//
			// ..................................................................................... _//
			// Style
			//
			imgHtmlDivInner += attributeStyle + quoteOpen;// Style
			// Layout
			// Size
			imgHtmlDivSmall.style.padding = '0%';// Padding Bottom
			imgHtmlDivInner += attributeStylePadding + '0em;';// Display (visibility)
			//
			// imgHtmlDivSmall.style.width = (oObjImageSizeSmall + 0) + 'px';// Width
			// imgHtmlDivInner += ' width: 0em;';// Width
			//
			// imgHtmlDivSmall.style.height = 'auto';// Image Large Height
			// imgHtmlDivSmall.style.height = (oObjImageSizeSmall * oObjImageSizeRatio + 20) + 'px';// Image Large Height
			// imgHtmlDivInner += ' height:auto;';// Height
			//
			imgHtmlDivSmall.style.display = 'none';
			imgHtmlDivInner += attributeStyleDisplay + 'none;';// Display (visibility)
			//
			imgHtmlDivInner += quoteClose; // style end quote
			//
			imgHtmlDivInner += tagEndContentStart; // Div (small) closing brace
			imgHtmlDivSmallInner += imgHtmlDivInner;
			//
			// ..................................................................................... _//
			// Small Image
			// ..................................................................................... _//
			//
			// ..................................................................................... _//
			// Element: A
			// Text Link
			imgHtmlAInner = '';
			imgHtmlA = document.createElement('a');
			imgHtmlAInner += tagA;
			//
			imgHtmlA.id = oName + imgGroupCn + imgCn + 'LinkUpper';// Image Small Id
			imgHtmlA.name = oName + imgGroupCn + imgCn + 'LinkUpper';// Image Small Id
			imgHtmlAInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'LinkUpper' + quoteClose;// Link Id
			//
			imgHtmlA.className = 'MenuImageBox MenuImageBoxLink';// Class
			imgHtmlAInner += attributeClass + quoteOpen + 'MenuImageBox MenuImageBoxLink' + quoteClose;// Class
			//
			// Source
			imgHtmlA.href = '../MdmWebPages/' + oName + '.shtml';// Link
			imgHtmlAInner += attributeHref + quoteOpen + '../MdmWebPages/' + oName + '.shtml' + quoteClose;// Link
			//
			imgHtmlAInner += attributeStyle + quoteOpen;// Style
			//
			// imgHtmlA.style.padding = '0%';// Padding
			// imgHtmlAInner += ' padding:0em;';// Display (visibility)
			//
			// imgHtmlA.style.margin = '0%';// Margin
			// imgHtmlAInner += ' margin:0em;';// Display (visibility)
			//
			imgHtmlAInner += quoteClose;// style end quote
			//
			imgHtmlAInner += tagEndContentStart;// A closing brace
			//
			// ..................................................................................... _//
			// Element: Span
			imgHtmlSpanInner = '';
			imgHtmlSpan = document.createElement('span');
			imgHtmlSpanInner += tagSpan;
			//
			imgHtmlSpan.id = oName + imgGroupCn + imgCn + 'LinkTextUpper';// Link Text
			imgHtmlSpan.name = oName + imgGroupCn + imgCn + 'LinkTextUpper';// Link Text
			imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'LinkTextUpper' + quoteClose + tagEndContentStart;// Link Text
			//
			imgHtmlSpan.innerHTML = ElementItemGetDescription(imgGroupCn, imgCn);
			imgHtmlSpanInner += ElementItemGetDescription(imgGroupCn, imgCn);
			//
			// Element: Br
			// imgHtmlBr = document.createElement('br');
			// imgHtmlBr.id= oName + 'LinkTextUpper' + imgGroupCn + imgCn;
			// imgHtmlBr.clear = 'both';
			// imgHtml += charNewLineTagOpen + 'id= ' + quoteOpen + oName + 'LinkTextUpper' + imgGroupCn + imgCn + quoteClose + ' clear= ' + quoteOpen + 'both'  + quoteClose + tagEnd;
			//
			// end of elements Span
			imgHtmlSpanInner += tagSpanEnd;
			//
			if (imgLoadUseDOM) { imgHtmlA.appendChild(imgHtmlSpan); }
			imgHtmlAInner += imgHtmlSpanInner;
			//
			// ..................................................................................... _//
			// Element: Br
			// imgHtmlBr = document.createElement("br");
			// imgHtml += charNewLineTag;
			// imgHtmlA.appendChild(imgHtmlBr);
			//
			// end of elements A
			imgHtmlAInner += tagAEnd;
			imgHtmlDivSmallInner += imgHtmlAInner;
			if (imgLoadUseDOM) { imgHtmlDivSmall.appendChild(imgHtmlA); }
			//
			// ..................................................................................... _//
			// Element: Img
			imgHtmlImgInner = '';
			//
			imgHtmlImg = document.createElement('img');
			imgHtmlImgInner += tagImg;
			//
			imgHtmlImg.id = oName + imgGroupCn + imgCn + 'Image';
			imgHtmlImg.name = oName + imgGroupCn + imgCn + 'Image';
			imgHtmlImgInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Image' + quoteClose + ' ';// Image Id
			//
			imgHtmlImg.src = '../Images/Thumbnails/' + oName + '.jpg';// Image Source src
			imgHtmlImgInner += attributeSrc + quoteOpen + '../Images/Thumbnails/' + oName + '.jpg' + quoteClose + ' ';// Image Source src
			//
			imgHtmlImg.className = "MenuThumb";
			imgHtmlImgInner += attributeClass + quoteOpen + 'MenuThumb"';// Class
			//
			// Alt
			imgHtmlImg.alt = StringTextReplace(ElementItemGetDescription(imgGroupCn, imgCn), charNewLineTag, ' ');// Alt (Link) Text;
			imgHtmlImgInner += attributeAlt + quoteOpen + ElementItemGetDescription(imgGroupCn, imgCn) + quoteClose;// Alt (Link) Text;
			//
			// Events:
			// Mouse Down
			/* --
			// Filter
			// Start Animation Filter
			// Filter Reset
			// imgHtml += ' FilterResetThenAnimate(this + ', ' + filterIndexPassed + ');'; // Reset this Image
			imgHtml += 'FilterResetThenAnimate(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Reset Large Image
			// imgHtml += ' FilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Spin Large Image
			-- */
			//
			// ..................................................................................... _//
			// Image Show Toggle
			// Mouse Down
			DivSmallOnmousedownText = '';
			DivSmallOnmousedownFunction = ElementItemToggle;
			DivSmallOnmousedownFunctionName = 'ElementItemToggle';
			DivSmallOnmousedownText += '(';
			DivSmallOnmousedownText += IsLarge + ', ';// Is Large Image
			DivSmallOnmousedownText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
			DivSmallOnmousedownText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + 'Image' + quoteInnerClose + ', ';// Large Image Object
			DivSmallOnmousedownText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
			DivSmallOnmousedownText += oObjImageSizeLarge + ', ';// Image Large Size
			DivSmallOnmousedownText += imgGroupCn + ', ';// Menu Group
			DivSmallOnmousedownText += imgCn + ', ';// Menu Group
			DivSmallOnmousedownText += '0, ';// Current Show Lock
			DivSmallOnmousedownText += '0';// Ignore Show Lock
			DivSmallOnmousedownText += ');';
			//
			if (!imgLoadUseEventHandler) {
				if (imgLoadUseDOM) {
					imgHtmlDivSmall = ElementEventAdd('onmousedown',
						DivSmallOnmousedownFunction, DivSmallOnmousedownFunctionName,
						DivSmallOnmousedownText, imgHtmlDivSmall);
				} else if (imgLoadUseInner) {
					imgHtmlImgInner += attributeEventMouseDown + quoteOpen;
					DivSmallOnmousedownText = ' ' + DivSmallOnmousedownFunctionName + DivSmallOnmousedownText;
					imgHtmlImgInner += DivSmallOnmousedownText;
					// imgHtmlImgInner += ' ' + DivSmallOnmousedownFilterText;
					imgHtmlImgInner += quoteClose;// onmousedown end quote
				}
			}
			// imgHtmlImg.onmousedown = DivSmallOnmousedownText;
			//
			// end of mousedown
			//
			// ..................................................................................... _//
			// Play Filter
			// imgHtml += ' onfilterchange= ' + quoteOpen + 'FilterSpin(this + ', ' + filterIndexPassed + ');';// Spin this Image
			// imgHtml += ' onfilterchange= ' + quoteOpen + 'FilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', filterIndexPassed);';// Spin Large Image
			// imgHtml += quoteClose ' ';
			//
			// ..................................................................................... _//
			// Style
			imgHtmlImgInner += attributeStyle + quoteOpen;// Style
			// Padding
			imgHtmlImg.style.padding = '0%';// Padding
			imgHtmlImgInner += attributeStylePadding + '0em;';// Display (visibility)
			// Margin
			imgHtmlImg.style.margin = '0%';// Margin
			imgHtmlImgInner += attributeStyleMargin + '0em;';// Display (visibility)
			// Size
			// Width
			imgHtmlImg.style.width = oObjImageSizeSmall + 'px';// Width
			imgHtmlImgInner += attributeStyleWidth + oObjImageSizeSmall + 'px;';// Width
			// Height (using Global height and ratio)
			imgHtmlImg.style.height = (oObjImageSizeSmall * oObjImageSizeRatio) + 'px';// Height
			imgHtmlImgInner += attributeStyleHeight + (oObjImageSizeSmall * oObjImageSizeRatio) + 'px;';// Height
			//
			imgHtmlImgInner += quoteClose;// style end quote
			//
			imgHtmlImgInner += tagEndContentNone;// img closing brace
			//
			if (imgLoadUseDOM) { imgHtmlDivSmall.appendChild(imgHtmlImg); }
			imgHtmlDivSmallInner += imgHtmlImgInner;
			//
			// ..................................................................................... _//
			// Element: A
			// Text Link
			imgHtmlAInner = '';
			imgHtmlA = document.createElement('a');
			imgHtmlAInner += tagA;
			// Id
			imgHtmlA.id = oName + imgGroupCn + imgCn + 'LinkLower';// Link Id
			imgHtmlA.name = oName + imgGroupCn + imgCn + 'LinkLower';// Link Id
			imgHtmlAInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'LinkLower' + quoteClose;// Link Id
			//
			imgHtmlA.className = 'MenuImageBox MenuImageBoxLink';// Class
			imgHtmlAInner += attributeClass + quoteOpen + 'MenuImageBox MenuImageBoxLink' + quoteClose;// Class
			// Source
			imgHtmlA.href = '../MdmWebPages/' + oName + '.shtml';// Link
			imgHtmlAInner += attributeHref + quoteOpen + '../MdmWebPages/' + oName + '.shtml' + quoteClose;// Link
			//
			imgHtmlAInner += tagEndContentStart;// A closing brace
			// ..................................................................................... _//
			// Element: Span
			imgHtmlSpanInner = '';
			imgHtmlSpan = document.createElement('span');
			imgHtmlSpanInner += tagSpan;
			//
			imgHtmlSpan.id = oName + imgGroupCn + imgCn + 'LinkTextLower';// Link Text
			imgHtmlSpan.name = oName + imgGroupCn + imgCn + 'LinkTextLower';// Link Text
			imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'LinkTextLower' + quoteClose + tagEndContentNone;// Link Text
			//
			imgHtmlSpan.innerHTML = ElementItemGetDescription(imgGroupCn, imgCn);
			imgHtmlSpanInner += ElementItemGetDescription(imgGroupCn, imgCn);
			//
			// ..................................................................................... _//
			imgHtmlSpanInner += tagSpanEnd;
			//
			imgHtmlAInner += imgHtmlSpanInner;
			if (imgLoadUseDOM) { imgHtmlA.appendChild(imgHtmlSpan); }
			//
			imgHtmlAInner += tagAEnd;
			//
			imgHtmlDivSmallInner += imgHtmlAInner;
			if (imgLoadUseDOM) { imgHtmlDivSmall.appendChild(imgHtmlA); }
			//
			imgHtmlDivSmallInner += tagDivEnd;
			//
			// ..................................................................................... _//
			// ..................................................................................... _//
			// Image Large
			// ..................................................................................... _//
			// ..................................................................................... _//
			//
			// ..................................................................................... _//
			// Element: Div
			imgHtmlDivLarge = document.createElement('div');
			imgHtmlDivLargeInner = '';
			//
			imgHtmlDivLarge.id = oName + imgGroupCn + imgCn + 'Large';// Id
			imgHtmlDivLarge.name = oName + imgGroupCn + imgCn + 'Large';// Id
			imgHtmlDivLargeInner += tagDiv;
			imgHtmlDivLargeInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Large' + quoteClose;// Id
			//
			imgHtmlDivLarge.className = quoteOpen + 'imgThumbLarge MenuImageBox MenuImageBoxBorder ' + quoteClose;// Class
			imgHtmlDivLargeInner += attributeClass + quoteOpen + 'imgThumbLarge MenuImageBox MenuImageBoxBorder ' + quoteClose;// Class
			// MenuImageContainer
			// ..................................................................................... _//
			// Events:
			// ..................................................................................... _//
			// Mouse Out //
			DivLargeOnmouseoutText = '';
			DivLargeOnmouseoutFunction = ElementItemHideId;
			DivLargeOnmouseoutFunctionName = 'ElementItemHideId';
			DivLargeOnmouseoutText += '(';
			DivLargeOnmouseoutText += 'event' + ', ';// Event Object
			DivLargeOnmouseoutText += IsLarge + ', ';// Is Large Image
			DivLargeOnmouseoutText += quoteInnerOpen + oName + (imgGroupCn) + (imgCn) + quoteInnerClose + ', ';// Small Id
			DivLargeOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + 'Image' + quoteInnerClose + ', ';// Large Image Id
			DivLargeOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
			DivLargeOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
			DivLargeOnmouseoutText += imgGroupCn + ', ';// Menu Group
			DivLargeOnmouseoutText += imgCn + ', ';// Menu Group Box
			DivLargeOnmouseoutText += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + '] [' + IsLarge + ']' + ', ';// Current Show Lock
			DivLargeOnmouseoutText += '0';// Ignore Show Lock
			DivLargeOnmouseoutText += ');';
			//
			if (!imgLoadUseEventHandler) {
				if (imgLoadUseDOM) {
					imgHtmlDivLarge = ElementEventAdd('onmouseout',
						DivLargeOnmouseoutFunction, DivLargeOnmouseoutFunctionName,
						DivLargeOnmouseoutText, imgHtmlDivLarge);
				} else if (imgLoadUseInner) {
					imgHtmlDivLargeInner += attributeEventMouseOut + quoteOpen;
					DivLargeOnmouseoutText = DivLargeOnmouseoutFunctionName + DivLargeOnmouseoutText;
					imgHtmlDivLargeInner += DivLargeOnmouseoutText;
					imgHtmlDivLargeInner += quoteClose;// onmmouseout end quote
				}
			}
			// end of mouseout
			//
			// ..................................................................................... _//
			// Mouse Over //
			// ..................................................................................... _//
			// Show Image Large
			// DivLargeOnmouseover
			DivLargeOnmouseoverText = '';
			DivLargeOnmouseoverFunction = ElementItemShowId;
			DivLargeOnmouseoverFunctionName = 'ElementItemShowId';
			DivLargeOnmouseoverText += '(';
			DivLargeOnmouseoverText += 'event' + ', ';// Event Object
			DivLargeOnmouseoverText += IsLarge + ', ';// Is Large Image
			DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
			DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + 'Image' + quoteInnerClose + ', ';// Large Image
			DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
			DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
			DivLargeOnmouseoverText += oObjImageSizeLarge + ', ';// Image Large Size
			DivLargeOnmouseoverText += imgGroupCn + ', ';// Menu Group
			DivLargeOnmouseoverText += imgCn + ', ';// Menu Group Box
			DivLargeOnmouseoverText += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + '] [' + IsLarge + ']' + ', ';// Current Show Lock
			DivLargeOnmouseoverText += '0';// Ignore Show Lock
			DivLargeOnmouseoverText += ');';
			//
			if (!imgLoadUseEventHandler) {
				if (imgLoadUseDOM) {
					imgHtmlDivLarge = ElementEventAdd('onmouseover',
						DivLargeOnmouseoverFunction, DivLargeOnmouseoverFunctionName,
						DivLargeOnmouseoverText, imgHtmlDivLarge);
				} else if (imgLoadUseInner) {
					imgHtmlDivLargeInner += attributeEventMouseOver + quoteOpen;
					DivLargeOnmouseoverText = DivLargeOnmouseoverFunctionName + DivLargeOnmouseoverText;
					imgHtmlDivLargeInner += DivLargeOnmouseoverText;
					imgHtmlDivLargeInner += quoteClose;// onmmouseover end quote
				}
			}
			//
			// ..................................................................................... _//
			// Start Animation Filter
			// Filter Reset
			// imgHtml += ' FilterResetThenAnimate(this + ', ' + filterIndexPassed + ');'; // Reset this Image
			// imgHtml += ' FilterResetThenAnimate(' + oName + imgGroupCn + imgCn + 'Large' + ', ' + filterIndexPassed + ');';// Reset Large Image
			// imgHtml += ' FilterSpin(' + oName + imgGroupCn + imgCn + 'Large' + ', ' + filterIndexPassed + ');';// Spin Large Image
			//
			// imgHtml += quoteClose;
			// end of mouseover
			//
			// ..................................................................................... _//
			// Play Filter
			// imgHtml += '      	onfilterchange= ' + quoteOpen + 'FilterSpin(this, filterIndexPassed);';// Spin this Image
			// imgHtml += '      	onfilterchange= ' + quoteOpen + 'FilterSpin(' + oName + imgGroupCn + imgCn + 'Large' + ', ' + filterIndexPassed + ');';// Spin Large Image
			// imgHtml += quoteClose + ' ';
			// imgHtmlDivLarge.onfilterchange = imgHtml;
			//
			// ..................................................................................... _//
			// Div Style
			imgHtmlDivLargeInner += attributeStyle + quoteOpen
			// Div Size
			// Width
			imgHtmlDivLarge.style.width = 'auto';// Image Large Width
			imgHtmlDivLargeInner += attributeStyleWidth + 'auto;';// Image Large Width
			// imgHtmlDivLarge.style.width = oObjImageSizeLarge + 'px';// Image Large Width
			// imgHtmlDivLargeInner += ' width:' + oObjImageSizeLarge + 'px;';// Image Large Width
			// Height
			imgHtmlDivLarge.style.height = 'auto';// Image Large Height
			imgHtmlDivLargeInner += attributeStyleHeight + 'auto;';// Image Large // imgHtmlDivLarge.style.height = (oObjImageSizeLarge * oObjImageSizeRatio) + 'px';// Image Large Height
			// imgHtmlDivLargeInner += ' height:' + (oObjImageSizeLarge * oObjImageSizeRatio) + 'px;';// Image Large Height
			// Display
			imgHtmlDivLargeInner += attributeStyleDisplay + 'none;';
			imgHtmlDivLarge.style.display = 'none';
			//
			imgHtmlDivLargeInner += quoteClose;// style end quote
			//
			// ..................................................................................... _//
			/* --
			imgHtml += '         filter:';
			//
			// imgHtml += 'progid:DXImageTransform.Microsoft.MotionBlur(strength= 13, direction= 310) ';
			// filterIndexPassed = filterTypeBlinds;
			// imgHtml += 'progid:DXImageTransform.Microsoft.Blur(pixelradius= 2) ';
			// filterIndexPassed = filterTypeBlinds;
			// imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(duration= 3);' + quoteClose;
			// filterIndexPassed = filterTypeBlinds;
			//
			// imgHtml += 'progid:DXImageTransform.Microsoft.Blinds(Bands= 10, Duration= 2, Direction= down);' + quoteClose;
			// filterIndexPassed = filterTypeBlinds;
			// CheckerBoard
			// filterTypeCheckerBoard
			imgHtml += 'progid:DXImageTransform.Microsoft.CheckerBoard(Duration= 3, Direction= left);';
			// Wheel
			// imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(Duration= 1.0000);' + quoteClose;
			// filterIndexPassed = filterTypeBlinds;
			// Matrix
			// imgHtml += 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod= auto expand, duration= 1.5);' + quoteClose;
			// filterIndexPassed = filterTypeBlinds;
			-- */
			// ..................................................................................... _//
			//
			imgHtmlDivLargeInner += tagEndContentStart;// Div (large) closing brace
			//
			// ..................................................................................... _//
			// Image & Text Link
			// ..................................................................................... _//
			// Element: A
			imgHtmlAInner = '';
			imgHtmlA = document.createElement('a');
			imgHtmlAInner += tagA;
			//
			imgHtmlA.id = oName + imgGroupCn + imgCn + 'Large' + 'LinkUpper';
			imgHtmlA.name = oName + imgGroupCn + imgCn + 'Large' + 'LinkUpper';
			imgHtmlAInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Large' + 'LinkUpper' + quoteClose;
			//
			imgHtmlA.className = 'MenuImageBox MenuImageBoxLink';
			imgHtmlAInner += attributeClass + quoteOpen + 'MenuImageBox MenuImageBoxLink' + quoteClose;
			//
			imgHtmlA.href = '../MdmWebPages/' + oName + '.shtml';
			imgHtmlAInner += attributeHref + quoteOpen + '../MdmWebPages/' + oName + '.shtml' + quoteClose;
			//
			imgHtmlAInner += tagEndContentStart;// A closing brace
			//
			// ..................................................................................... _//
			// Element: Span
			imgHtmlSpanInner = '';
			imgHtmlSpan = document.createElement('span');
			imgHtmlSpanInner += tagSpan;
			//
			imgHtmlSpan.id = oName + 'Large' + 'LinkTextUpper';// Link Text
			imgHtmlSpan.name = oName + imgGroupCn + imgCn + 'Large' + 'LinkTextUpper';// Link Text
			imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Large' + 'LinkTextUpper' + quoteClose + tagEndContentStart;// Link Text
			//
			imgHtmlSpan.innerHTML = ElementItemGetDescription(imgGroupCn, imgCn);
			imgHtmlSpanInner += ElementItemGetDescription(imgGroupCn, imgCn);
			//
			// ..................................................................................... _//
			// Element: Br
			// imgHtmlBr = document.createElement("br");
			// if (imgLoadUseDOM) { imgHtmlSpan.appendChild(imgHtmlBr); }
			// imgHtmlSpanInner += charNewLineTag;
			//
			// imgHtmlBr = document.createElement("br");
			// if (imgLoadUseDOM) { imgHtmlSpan.appendChild(imgHtmlBr); }
			// imgHtmlSpanInner += charNewLineTagOpen + 'class= "aClearBoth" >';
			//
			// ..................................................................................... _//
			imgHtmlSpanInner += tagSpanEnd;// Span closing Tag
			//
			if (imgLoadUseDOM) { imgHtmlA.appendChild(imgHtmlSpan); }
			imgHtmlAInner += imgHtmlSpanInner;
			//
			// ..................................................................................... _//
			// Element: Img
			imgHtmlImgInner = '';
			imgHtmlImg = document.createElement('img');
			imgHtmlImgInner += tagImg;
			//
			imgHtmlImg.id = oName + imgGroupCn + imgCn + 'Large' + 'Image';
			imgHtmlImg.name = oName + imgGroupCn + imgCn + 'Large' + 'Image';
			imgHtmlImgInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Large' + 'Image' + quoteClose;
			//
			imgHtmlImg.src = '../Images/Thumbnails/' + oName + '.jpg';// Image Source src
			imgHtmlImgInner += attributeSrc + quoteOpen + '../Images/Thumbnails/' + oName + '.jpg' + quoteClose;// Image Source src
			//
			imgHtmlImg.className = 'MenuThumbLarge';
			imgHtmlImgInner += attributeClass + quoteOpen + 'MenuThumbLarge' + quoteClose;
			//
			// Alt
			imgHtmlImg.alt = StringTextReplace(ElementItemGetDescription(imgGroupCn, imgCn), charNewLineTag, ' ');// Alt (Link) Text;
			imgHtmlImgInner += attributeAlt + quoteOpen + ElementItemGetDescription(imgGroupCn, imgCn) + quoteClose;// Alt (Link) Text;
			//
			// ..................................................................................... _//
			// Div Style
			imgHtmlImgInner += attributeStyle + quoteOpen
			// Div Size
			// Width
			imgHtmlImg.style.width = oObjImageSizeLarge + 'px';// Image Large Width
			imgHtmlImgInner += attributeStyleWidth + oObjImageSizeLarge + 'px;';// Image Large Width
			// Height
			imgHtmlImg.style.height = (oObjImageSizeLarge * oObjImageSizeRatio) + 'px';// Image Large Height
			imgHtmlImgInner += attributeStyleHeight + (oObjImageSizeLarge * oObjImageSizeRatio) + 'px;';// Image Large Height
			//
			imgHtmlImgInner += quoteClose;// style end quote
			//
			imgHtmlImgInner += tagEndContentNone;
			//
			if (imgLoadUseDOM) { imgHtmlA.appendChild(imgHtmlImg); }
			imgHtmlAInner += imgHtmlImgInner;
			// ..................................................................................... _//
			// Link Text
			imgHtmlSpanInner = '';
			imgHtmlSpan = document.createElement('span');
			imgHtmlSpanInner += tagSpan;
			//
			imgHtmlSpan.id = oName + imgGroupCn + imgCn + 'Large' + 'LinkLower';// Link Text
			imgHtmlSpan.name = oName + imgGroupCn + imgCn + 'Large' + 'LinkLower';// Link Text
			imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Large' + 'LinkLower' + quoteClose + tagEndContentNone;// Link Text
			//
			// imgHtmlBr = document.createElement('br');
			// if (imgLoadUseDOM) { imgHtmlSpan.appendChild(imgHtmlBr); }
			// imgHtmlSpanInner += charNewLineTagOpen + 'class= ' + quoteOpen + 'aClearBoth' + quoteClose + tagEndContentNone;
			//
			imgHtmlSpan.innerHTML = ElementItemGetDescription(imgGroupCn, imgCn);
			imgHtmlSpanInner += ElementItemGetDescription(imgGroupCn, imgCn);
			//
			// ..................................................................................... _//
			imgHtmlSpanInner += tagSpanEnd;
			if (imgLoadUseDOM) { imgHtmlA.appendChild(imgHtmlSpan); }
			imgHtmlAInner += imgHtmlSpanInner;
			//
			imgHtmlAInner += tagAEnd;
			if (imgLoadUseDOM) { imgHtmlDivLarge.appendChild(imgHtmlA); }
			//
			imgHtmlDivLargeInner += imgHtmlAInner;
			imgHtmlDivLargeInner += tagDivEnd;
			//
			if (!imgLoadUseInner) {
				bodyImageContainer.appendChild(imgHtmlDivSmall);
				bodyImageContainer.appendChild(imgHtmlDivLarge);
			} else {
				imgHtmlDivBothInner += imgHtmlDivSmallInner + imgHtmlDivLargeInner;
			}
			//
			// ..................................................................................... _//
		}
	}
	//
	if (imgLoadUseInner) {
		bodyImageContainer.innerHTML = imgHtmlDivBothInner;
	}
	if (!imgLoadUseEventHandler && !imgLoadEventTest) {
		bodyImageContainer.onmouseover = null;
		bodyImageContainer.onmouseout = null;
		bodyImageContainer.onmousedown = null;
	} else {
		bodyImageContainer.onmousedown = ElementEventMouse;
		bodyImageContainer.onmouseover = ElementEventMouse;
		bodyImageContainer.onmouseout = ElementEventMouse;
	}
	//
	// bodyImageContainer.style.display = 'none';
	// if (browserIsIE) { document.recalc(); }
	//
	// ..................................................................................... _//
	// imgHtml += tagDivEnd;
	// imgHtmlDiv.innerHTML = imgHtml;
	// document.write(imgHtml);
	// bodyImageContainer = ElementGetRef(bodyImageContainer, 'BodyImageContainer', 'BodyImageContainer');
	//
	// bodyImageContainer.innerHTML = imgHtml;
	// bodyImageContainer.appendChild(imgHtmlDivSmall);
	// bodyImageContainer.appendChild(imgHtmlDivLarge);
	//
	loadFirstMenuImage = false;
	//
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Other function (s) (empty)
// ..................................................................................... _//
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Window function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Window Events and Methods function (s)
// ...................................... //
//
// ..................................................................................... _//
// Event Add
// ...................................... //
function ElementEventAdd(eventNamePassed, eventFunctionPassed, eventFunctionNamePassed, eventFunctionArgsPassed, oObjPassed) {
	var eventAddSuccess;
	var eventArgumentsArr = new Array();
	var tempfunc;
	var temp;
	//
	if (!browserEventsIsFf) {
		temp = eventFunctionNamePassed + eventFunctionArgsPassed;
		eval('tempfunc = function() { ' + temp + '; }');
		eventAddSuccess = oObjPassed.attachEvent(eventNamePassed, tempfunc);
	} else {
		if (true == false) {
			oObjPassed.addEventListener(
				eventNamePassed,
				eventFunctionPassed.apply({
					oObjNextId: 'Tricia'
				}),
				false);
			//
		} else if (true == false) {
			// (eval( 'tempfunc = function() { ' + temp + ';tempfunc; }' )),
			//
		} else {
			temp = eventFunctionNamePassed + eventFunctionArgsPassed;
			oObjPassed.addEventListener(
				eventNamePassed,
				(eval('tempfunc = function() { ' + temp + ';tempfunc; }')),
				false);
			// what didn't work:
			// var temp1 = document.createEvent('MouseEvents');
			// eval( 'tempfunc = function() { ' + temp + '; }' );
			// oObjPassed.addEventListener(eventNamePassed,  tempfunc, false);
			// tempfunc = eval( 'function() { ' + temp + '; }' );
			// oObjPassed.onmouseover = tempfunc;
		}
	}
	//
	return oObjPassed;
}
//
// ..................................................................................... _//
// Execute Function
// ...................................... //
// Stack Overflow
// http://stackoverflow.com/questions/359788/javascript-function-name-as-a-string
// (c) 2011 stack exchange inc;user contributions licensed under cc-wiki with attribution required
//
function FunctionDoExecuteByName(functionName, context /*, args */) {
	// ['My']['Namespace']['functionName'](arguments);// succeeds
	// FunctionDoExecuteByName('My.Namespace.functionName', window, arguments);
	// FunctionDoExecuteByName('Namespace.functionName', My, arguments);
	//
	var args = Array.prototype.slice.call(arguments).splice(2);
	var namespaces = functionName.split('.');
	var func = namespaces.pop();
	//
	// Navigate Hieararchy Object Methods
	for (var i = 0; i < namespaces.length; i++) {
		context = context[namespaces[i]];
	}
	return context[func].apply(this, args);
}
//
// ..................................................................................... _//
function FunctionDoExecuteJsNode(node) {
	if (!node) return;
	/* IE Upper Case */
	var elementScriptSourceInNode = node.getElementByTagName('SCRIPT');
	var elementScriptBlock;
	//
	for (var elementScriptLn = 0; elementScriptLn < elementScriptSourceInNode.length; elementScriptLn++) {
		if (browserIsSA) {
			elementScriptBlock = elementScriptSourceInNode[elementScriptLn].InnerHTML;
		} else if (browserIsOP) {
			elementScriptBlock = elementScriptSourceInNode[elementScriptLn].text;
		} else if (browserIsNE) {
			elementScriptBlock = elementScriptSourceInNode[elementScriptLn].tectContent;
		} else {
			elementScriptBlock = elementScriptSourceInNode[elementScriptLn].text;
			elementScriptSourceInNode[elementScriptLn].text = '';
		}
		//
		try {
			var elementScriptTargetInHead = document.createElement('script');
			elementScriptTargetInHead.type = 'text/Javascript';
			/* IE use text */
			if ((browserIsSA) || (browserIsOP) || (browserIsNE)) {
				elementScriptTargetInHead.innerHTML = elementScriptBlock;
			} else { elementScriptTargetInHead.text = elementScriptBlock; }
			//
			document.getElementsByTagName('head')[0].appendChild(elementScriptTargetInHead);
		} catch (e) {
			alert(e);
		}
		//
	} // next i
}
//
// ..................................................................................... _//
// SectionBlock Window Events (Load, Resize) function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// Window Load
// ...................................... //
// onlayoutcomplete= 'WindowLoadInit();';
//
window.onload = function () { // function Document Window OnLoad
	// ...................................... //
	// Initialize and Set Global Variables
	WindowLoadInit();
	//
	// ...................................... //
	// Build Body Images Div
	if (!loadDelayBodyImage) { BodyImagesHtmlBuild(); }
	//
	// ...................................... //
	// Build Menu Images Div
	if (!loadDelayMenuImage) { MenuImagesHtmlBuild(); }
	//
	// ...................................... //
	// Docuement Element Initialize & Store Original Menu Columns.
	if (!loadDelayJava) {
		// ...................................... //
		// Body Element Creation
		if (loadFirstJava) { ElementObjectCreate(); }
		//
		// ...................................... //
		// Choose Standard Layout
		LayoutNext(layoutStandard)
		// LayoutSelectByIndex(layoutStandard);
	}
	//
	if (!loadDelayDebugState) {
		if (serverIsOn) {
			FormElementSync();
		} else {
			FormElementSyncLocal();
		}
	}
	//
	// Inactive code:
	// window.onload= 'WindowLoadInit();';
	// onlayoutcomplete= 'WindowLoadInit();';
}
//
// ..................................................................................... _//
// SectionBlock Window and Container Layout function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// Document Layout Size of Core Layout Boxes
function WindowContainerSizeGetAll() {
	//
	if (UseLog) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			' Height of left and right menu containers vs the center menu container'
			+ ': ',
			'WindowContainerSizeGetAll', 6769, null, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	// Height of left and right menu containers vs the center menu container
	var tempLayoutBodyHeightHorzMax = 0;
	var tempLayoutBodyHeightVertMax = 0;
	layoutBodyHeightHorzMax = 0;
	layoutBodyHeightVertMax = 0;
	layoutMenuWidthMax = 0;
	//
	bodyMainCenterHeight = ElementHeightMaxGet(UseScroll, UseBase, bodyMainCenter);
	//
	if (UseLog) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			' Height of BodyMainCenterHeight: ' + bodyMainCenterHeight
			+ '.',
			'WindowContainerSizeGetAll', 6769, null, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	tempLayoutBodyHeightVertMax += bodyMainCenterHeight;
	if (tempLayoutBodyHeightHorzMax < bodyMainCenterHeight) { tempLayoutBodyHeightHorzMax = bodyMainCenterHeight; }
	//
	// Left
	bodyLayoutMenu1Height = ElementHeightMaxGet(UseScroll, UseBase, bodyMainLeft);
	// if (layoutResizeCn == 0) { bodyLayoutMenu1Height = ElementHeightMaxGet(UseScroll, UseBase, bodyMainLeft); }
	//
	if (UseLog) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			' Height of bodyLayoutMenu1Height: ' + bodyLayoutMenu1Height
			+ '.',
			'WindowContainerSizeGetAll', 6769, null, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	// Check the accumaltion of Left1, Left2, Left3
	if (layoutIndex = layoutStandard) {
		WindowContainerSizeGetMenu(bodyMainLeft);
	} else { WindowContainerSizeGetMenu(bodyMainCenterTopLeft); }
	//
	if (UseLog) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			' Height of bodyLayoutMenu1Height: ' + bodyLayoutMenu1Height
			+ '.',
			'WindowContainerSizeGetAll', 6769, null, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	tempLayoutBodyHeightVertMax += bodyLayoutMenu1Height;
	if (layoutIndex == layoutStandard) {
		if (tempLayoutBodyHeightHorzMax < bodyLayoutMenu1Height) { tempLayoutBodyHeightHorzMax = bodyLayoutMenu1Height; }
	}
	// Right
	bodyLayoutMenu2Height = ElementHeightMaxGet(UseScroll, UseBase, bodyMainRight);
	// if (layoutResizeCn = 0) { bodyLayoutMenu2Height = ElementHeightMaxGet(UseScroll, UseBase, bodyMainRight); }
	//
	if (UseLog) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			' Height of BodyMenuLayout2Height: ' + bodyLayoutMenu2Height
			+ '.',
			'WindowContainerSizeGetAll', 6769, null, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	// Check the accumaltion of Right1, Right2, Right3
	if (layoutIndex == layoutStandard) {
		WindowContainerSizeGetMenu(bodyMainRight);
	} else { WindowContainerSizeGetMenu(bodyMainCenterTopRight); }
	//
	if (UseLog) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			' Height of BodyMenuLayout2Height: ' + bodyLayoutMenu2Height
			+ '.',
			'WindowContainerSizeGetAll', 6769, null, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	tempLayoutBodyHeightVertMax += bodyLayoutMenu2Height;
	if (layoutIndex == layoutStandard) {
		// if (bodyLayoutMenu1Height < layoutMenuSizeVertMax) { bodyLayoutMenu1Height = layoutMenuSizeVertMax; }
		if (tempLayoutBodyHeightHorzMax < bodyLayoutMenu2Height) { tempLayoutBodyHeightHorzMax = bodyLayoutMenu2Height; }
	} else if (layoutIndex == layoutWindowed) {
		tempLayoutBodyHeightHorzMax = bodyMainCenterHeight;
		if (bodyLayoutMenu1Height > bodyLayoutMenu2Height) {
			tempLayoutBodyHeightHorzMax += bodyLayoutMenu1Height;
		} else {
			tempLayoutBodyHeightHorzMax += bodyLayoutMenu2Height;
		}
	}
	//
	// tempLayoutBodyHeightHorzMax += 100;
	//
	layoutBodyHeightHorzMax = tempLayoutBodyHeightHorzMax;
	layoutBodyHeightVertMax = tempLayoutBodyHeightVertMax;
	//
	// TODO	Here is the location for a flag that indicates vertical stacking of left and right menus  Much more...
	// *** This flag is not implemented in this phase (Vert is not used yet.) ***
	// It could be a just a conditional check of Window width in the same manner that
	// callout boxes become stacked instead floated.
	// When the containers are being stacked your screen height would use Vert(ical) Maximum.
	// Though confusing, horizontal applies when (3) menu boxes are layed out besides each other.
	// Vertical refers to extremely narrow Windows where 3 menus are stacked on 3 menus plus the
	// center height where the order of stacking is machted to the current Layout View (layoutIndex.)
	//
	layoutHeight = layoutBodySizeHorzMax;
}
//
// ..................................................................................... _//
// ...................................... //
// Document Layout Size of Core Layout Boxes
function WindowContainerSizeGetMenu(elementPassed) {
	// Height of left and right menu containers:
	// Greatest height when layed out side by side
	layoutBodyHeightHorzMax = 0;
	// Greatest height when layed out vertically
	layoutBodyHeightVertMax = 0;
	// Note: that HorzMax indicates the maximum height
	// of the menu groups layed out horizontally side by side.
	// It is not the width nor the accumulated height (VertMax)
	//
	// Note: The implies assumption that the left menu is taller than the right menu
	// or that the first Left menu group (menuGroup1) is the tallest of the three
	// Left groups is temporary and is not reliable.
	//
	// The Left menu elements are extracted from one of:
	// 		bodyMainCenterTopLeft
	//		bodyLayoutMenu1
	//............................................................---//
	var menuGroup1;
	var menuGroup2;
	var menuGroup3;
	// Left menuGroup1, 2, 3
	if (!menuGroup1) {
		if (elementPassed) {
			menuGroup1 = ElementGetRefFromElement(menuGroup1, 'bodyMenuLeft1', 'bodyMenuLeft1', elementPassed);
			menuGroup2 = ElementGetRefFromElement(menuGroup2, 'bodyMenuLeft2', 'bodyMenuLeft2', elementPassed);
			menuGroup3 = ElementGetRefFromElement(menuGroup3, 'bodyMenuLeft3', 'bodyMenuLeft3', elementPassed);
		}
	}
	//
	bodybodyMenuLeft1Height = ElementHeightMaxGet(true, true, menuGroup1);
	bodybodyMenuLeft2Height = ElementHeightMaxGet(true, true, menuGroup2);
	bodybodyMenuLeft3Height = ElementHeightMaxGet(true, true, menuGroup3);
	//
	layoutMenuSizeVertMax = bodybodyMenuLeft1Height + bodybodyMenuLeft2Height + bodybodyMenuLeft3Height;
	//
	layoutMenuSizeHorzMax = 0;
	if (layoutMenuSizeHorzMax < bodybodyMenuLeft1Height) { layoutMenuSizeHorzMax = bodybodyMenuLeft1Height; }
	if (layoutMenuSizeHorzMax < bodybodyMenuLeft2Height) { layoutMenuSizeHorzMax = bodybodyMenuLeft2Height; }
	if (layoutMenuSizeHorzMax < bodybodyMenuLeft3Height) { layoutMenuSizeHorzMax = bodybodyMenuLeft3Height; }
	//
}
//
// ..................................................................................... _//
// ...................................... //
// Recalculate Screen Display
var boxClass;
var layoutBodyColumnType;
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
var layoutFontRatio = 1.0;
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
var calloutLayoutBlockWidthPxWide = 600;
var calloutLayoutBlockWidthPxStandard = 350;
var calloutLayoutBlockWidthPxNarrow = 150;
//
var calloutLayoutBlockWidthWide = '33%';
var calloutLayoutBlockWidthStandard = '45%';
var calloutLayoutBlockWidthNarrow = '82%';
//
var layoutBlockWidth;
var calloutLayoutBlockWidth;
//
var bodyBlockCn;
//
var layoutBlockWidthDefault = 250;
var bodyBlockWidth;
//
function WindowResizeLayout() {
	// Recalculate Screen Display
	//
	if (loadFirstJava) { ElementObjectCreate(); }
	//
	// ...................................... //
	// Recalculate Globals for Screen
	//
	WindowClientWidth();
	// ...................................... //
	// Load Containers if missing
	//
	if (!bodyMainLeft) { ElementObjectContainerCreate(); }
	// ...................................... //
	// Recalculate Positions for Menu Images
	if (layoutResizeCn = 0) { WindowContainerSizeGetAll(); }
	//
	var bodyMainCenterLeftAdj = 0;
	var bodyMainCenterWidthAdj = 0;
	//
	// ...................................... //
	// Process DivBox and Callout layout
	//
	// Count Display Blocks (s/b DivBox containers)
	bodyBlockCn = ElementObjectBlockCount();
	//
	// Determine DivBox (Body Content) column and callout sizes
	if (bodyMainCenterCenter.offsetWidth > (layoutBlockCol3Min * layoutFontRatio) && bodyBlockCn > 4 && layoutBodyColumnMax > 2) {
		layoutBlockWidth = layoutBlockWidthWide;
	} else if (bodyMainCenterCenter.offsetWidth > (layoutBlockCol2Min * layoutFontRatio) && layoutBodyColumnMax > 1) {
		layoutBlockWidth = layoutBlockWidthStandard;
	} else {
		layoutBlockWidth = layoutBlockWidthNarrow;
	}
	// ...................................... //
	// Width over layoutMenuDocWidthWide
	// ...................................... //
	// if (BodyMainCenterCenter.offsetWidth > layoutMenuDocWidthWide) {
	if (layoutDocumentWidth > layoutMenuDocWidthWide) {
		// ...................................... //
		// Standard Layout
		if (layoutIndex = layoutStandard && (bodyMainLeftVisible || bodyMainRightVisible)) {
			// Left
			// bodyMainLeft.style.width = '10%';
			// bodyMainLeft.style.width = '15%';
			if (bodyMainLeftVisible) {
				bodyMainLeft.style.width = '12%';
			} else {
				bodyMainLeft.style.width = '0%';
				bodyMainCenterLeftAdj = 12;
				bodyMainCenterWidthAdj += 10;
			}
			// Right
			// bodyMainRight.style.top = 0%
			if (bodyMainRightVisible) {
				if (layoutUseAbsolute) { bodyMainRight.style.left = '88%'; }
				bodyMainRight.style.width = '12%';
			} else {
				if (layoutUseAbsolute) { bodyMainRight.style.left = '100%'; }
				bodyMainRight.style.width = '0%';
				bodyMainCenterWidthAdj += 9;
			}
			//
			// Center
			// bodyMainCenter.style.top = 0%
			if (layoutUseAbsolute) { bodyMainCenter.style.left = (12 - bodyMainCenterLeftAdj) + '%'; }
			bodyMainCenter.style.width = (76 + bodyMainCenterWidthAdj) + '%';
			//
		} else {
			// ...................................... //
			// Wide Layout Options (no side menus)
			// Center
			// bodyMainCenter.style.top = 0%
			if (layoutUseAbsolute) { bodyMainCenter.style.left = '0%'; }
			bodyMainCenter.style.width = '100%';
		}
		//
		layoutIsWide = true;
		layoutIsStandard = false;
		//
	} else {
		// ...................................... //
		// Width under layoutMenuDocWidthWide
		// ...................................... //
		//
		// ...................................... //
		if (layoutIndex = layoutStandard && (bodyMainLeftVisible || bodyMainRightVisible)) {
			// Left
			// bodyMainLeft.style.top = 0%
			// if (layoutUseAbsolute) { bodyMainLeft.style.left = '0%'; }
			if (bodyMainLeftVisible) {
				bodyMainLeft.style.width = '20%';
			} else {
				if (layoutUseAbsolute) { bodyMainLeft.style.width = '0%'; }
				bodyMainCenterLeftAdj = 20;
				bodyMainCenterWidthAdj += 20;
			}
			//
			// Right
			// bodyMainRight.style.top = 0%
			if (bodyMainRightVisible) {
				if (layoutUseAbsolute) { bodyMainRight.style.left = '80%'; }
				bodyMainRight.style.width = '20%';
			} else {
				if (layoutUseAbsolute) { bodyMainRight.style.left = '100%'; }
				bodyMainRight.style.width = '0%';
				bodyMainCenterWidthAdj += 20;
			}
			//
			// Center
			// bodyMainCenter.style.top = 0%
			if (layoutUseAbsolute) { bodyMainCenter.style.left = '20%'; }
			bodyMainCenter.style.width = '60%';
		} else {
			// Center
			// bodyMainCenter.style.top = 0%
			if (layoutUseAbsolute) { bodyMainCenter.style.left = '0%'; }
			bodyMainCenter.style.width = '100%';
		}
		//
		layoutIsWide = false;
		layoutIsStandard = true;
		//
	}
	// ...................................... //
	// Search Sections for Callouts
	layoutSectionCn = 0;
	while (bodyMainCenterCenter.childNodes[layoutSectionCn]) {
		// ...................................... //
		// Section
		layoutSection = bodyMainCenterCenter.childNodes[layoutSectionCn];
		if (layoutSection.id) {
			if ((layoutSection.id).substring(0, 4) = 'DivS') {
				layoutBlockCn = 0;
				while (layoutSection.childNodes[layoutBlockCn]) {
					// ...................................... //
					// Block
					layoutBlock = layoutSection.childNodes[layoutBlockCn];
					if (layoutBlock.id) {
						if ((layoutBlock.id).substring(0, 4) = 'DivB') {
							boxClass = layoutBlock.className;
							layoutBodyColumnType = StringGetTokenByPrefix(boxClass, 'layoutBodyColumnType');
							if (layoutBodyColumnType != 'layoutBodyColumnTypeFixed') { layoutBlock.style.width = layoutBlockWidth; }
							// bodyBlockWidth = parseInt(layoutBlock.style.width);
							bodyBlockWidth = ElementWidthMaxGet(DoNotUseScroll, DoUseBase, layoutBlock, layoutBlockWidthDefault);
							//
							// ...................................... //
							// Callout
							calloutBlockCn = 0;
							while (layoutBlock.childNodes[calloutBlockCn]) {
								calloutBlock = layoutBlock.childNodes[calloutBlockCn];
								if (calloutBlock) {
									if (calloutBlock.id) {
										if ((calloutBlock.id).substring(0, 4) = 'DivC') {
											// Get Column Type from Box class
											boxClass = calloutBlock.className;
											layoutBodyColumnType = StringGetTokenByPrefix(boxClass, 'layoutBodyColumnType');
											// Set Callout Width and Layout
											if (layoutBodyColumnType != 'layoutBodyColumnTypeFixed') {
												if (bodyBlockWidth > calloutLayoutBlockWidthPxWide) {
													calloutBlock.style.width = calloutLayoutBlockWidthWide;
												} else if (bodyBlockWidth < calloutLayoutBlockWidthPxStandard) {
													calloutBlock.style.width = calloutLayoutBlockWidthNarrow;
												} else {
													calloutBlock.style.width = calloutLayoutBlockWidthStandard;
												}
											}
										} // DivC
									} // DivC Id
								} // DivC
								calloutBlockCn++;
							} // while Block
						} // DivB
					} // DivB Id
					layoutBlockCn++;
				} // while Block
			} // end of DivS
		} // end of Section Id
		layoutSectionCn++;
	} // while sections
	//
	//
	layoutResizeCn += 1;
	if (layoutResizeCn > 500) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			'Window Resize Excessive Usage (Possible Error)',
			'WindowResizeLayout', 0, null, null,
			errorSevere, errorDoNotDisplayTag, DoUseAlert);
		layoutResizeCn = 0;
		// layoutMenuSizeHorzMax = 2000;
	}
	//
	// if (layoutResizeCn = 1) {
	//
	// bodyMainContainer.style.height = '100%';
	// Height of left and right menu containers
	/* -- */
	//
	WindowContainerSizeGetAll();
	/* -- */
	//
	//
	if (UseLog) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			' Main Container layoutHeight (body +5em): ' + layoutHeight
			+ '.',
			'WindowResizeLayout', 7189, null, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	body.style.height = (layoutHeight + 50) + 'px';
	bodyMainContainer.style.height = (layoutHeight) + 'px';
	//
	// Experiments:
	// // bodyMainCenterCenter.style.height = '0' + 'px';;// '';// 'auto';// '100%';// '50.0em';// (layoutMenuSizeHorzMax) + 'px';
	// // bodyMainCenter.style.height = 'auto';// '100%';// layoutMenuSizeHorzMax + 'px';
	// // bodyMainContainer.style.height = '100%';// (layoutMenuSizeHorzMax) + 'px';// 'auto';// (layoutMenuSizeHorzMax + 100) + 'px';
	// body.style.height = '';// (layoutMenuSizeHorzMax + 100) + 'px';
	//
	//
	// bodyMainLeft.style.height = layoutHeight + 'px';;
	// bodyMainRight.style.height = layoutHeight + 'px';;
	// bodyLayoutMenu1.style.height = layoutHeight + 'px';;
	// bodyLayoutMenu2.style.height = layoutHeight + 'px';;
	//
	// bodyLayoutMenu1.style.height = '100%';
	// bodyLayoutMenu2.style.height = '100%';
	// // BodyMainLeft.style.height = 'auto;
	// // BodyMainRight.style.height = 'auto';
	// }
	//
	layoutWidthPrev = layoutWidth;
	layoutHeightPrev = layoutHeight;
	// ...................................... //
	// Recalculate Positions for Menu Images
	//
}
//
// ..................................................................................... _//
window.onresize = function () { WindowResizeLayout(); }
// ..................................................................................... _//
//
// ..................................................................................... _//
// ..................................................................................... _//
// Document Window
// ..................................................................................... _//
//
// ...................................... //
// Diaglogs and Pop-ups
// ...................................... //
//
// ..................................................................................... _//
// ...................................... //
// Create all Elements used in Layout
function WindowPopupOpen() {
	// Popup Window
	var sConfig = 'left= 100, top= 0, height= 500, width= 400, menubar= 0, scrollbars= 0, status= 0, toolbar= 0, location= 0';
	var myWindow = window.open('http://myPopupWindow.html', 'MyWindowName', sConfig);
}
//
// ...................................... //
// Client Window
// ...................................... //
//
// ..................................................................................... _//
// ...................................... //
// Document Window Client Width
function WindowClientWidth() {
	// Window Width
	layoutDocumentWidth = window.document.documentElement.offsetWidth;
	layoutAvailWidth = window.screen.availWidth;
	// layoutClientWidth = window.screen.availWidth - layoutWidthMargin;
	layoutClientWidth = window.document.offsetWidth - layoutWidthMargin;
	// if (layoutClientWidth < 100) { layoutClientWidth = document.body.parentNode.clientWidth - layoutWidthMargin; }
	//
	layoutDocumentHeight = window.document.documentElement.offsetHeight;
	layoutAvailHeight = window.screen.availHeight;
	layoutClientHeighth = window.screen.availHeight - layoutHeightMargin;
	// if (layoutClientHeight < 100) { layoutClientHeight = document.body.parentNode.clientHeight - layoutHeightMargin; }
	//
	layoutWidth = layoutDocumentWidth;
	if (layoutWidth < 100) {
		if (browserIsIE) { layoutWidth = document.body.parentNode.clientWidth; }
	}
	// layoutWidth -= layoutWidthMargin;
	layoutHeight = layoutDocumentHeight;
	if (layoutHeight < 100) {
		if (browserIsIE) { layoutHeight = document.body.parentNode.clientHeight; }
	}
	// layoutHeight -= layoutHeightMargin;
	// layoutWidth -= 20;
	// layoutHeight -= 20;
	//
}
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// SectionBlock Window Session function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// Window Session Load
function WindowSessionLoad() {
	// Load Layout and Images Displayed
	// Get Cookie
	// Apply Cookie to Window
	// Apply Default to Window
}
//
// ..................................................................................... _//
// ...................................... //
// Window Session Save
function WindowSessionSave() {
	// Load Layout and Images Displayed
	// Build Oookie
	// Save Cookie
}
// ..................................................................................... _//
// ..................................................................................... _//
//
///////////////////////////////////////////////
// SectionBlock Window Cookies function (s)
///////////////////////////////////////////////
//
// ..................................................................................... _//
// ...................................... //
// Window Cookie Save
function WindowCookieLoad() {
	// Load Layout and Images Displayed
	//
}
//
// ..................................................................................... _//
// ...................................... //
// Window Cookie Save
function WindowCookieSave() {
	// Load Layout and Images Displayed
	//
}
//
// ..................................................................................... _//
// ...................................... //
// Window Cookie Build
function WindowCookieBuild() {
	// Build the Cookie
	//
}
// ..................................................................................... _//
// ..................................................................................... _//
//
///////////////////////////////////////////////
// SectionBlock Window Document function (s)
///////////////////////////////////////////////
//
// ..................................................................................... _//
// ...................................... //
//  Document Load Initinitialize Variablesm, Arrays and Default Data
function WindowLoadInit() {
	//
	//  for (imgCn = 1;imgCn < 1+imgUsedCn;imgCn++){
	//    menuImage = oObjIndexSetmenuImage(imgCn);
	//    intervalSet = imgCn * 100;
	//    intervalSet += intervalBase;
	//    intervalName = menuImage.name + 'AnimationCycle()';
	//    setInterval (intervalName, intervalSet);
	//  }
	for (imgCn = imgUsedCn + 1; imgCn < 1 + imgMax; imgCn++) {
		imgAniToggle[imgCn] = 0;
		imgMouseHover[imgCn] = 0;
		//    menuImage = oObjIndexSetmenuImage(imgCn);
		//    menuImage.src = 'imgnone.gif';
	}
	//
	// bodyMenuGroupMax
	// imgMax
	//
	for (imgGroupCn = 0; imgGroupCn < 1 + bodyMenuGroupMax; imgGroupCn++) {
		imgMax = imgMaxByGroup[imgGroupCn];
		for (imgCn = 0; imgCn < 1 + imgMax; imgCn++) {
			// imgCnByGroup[imgGroupCn];
			// imgMaxByGroup[imgGroupCn];
			menuImage[imgGroupCn][imgCn] = null;
			menuImageLocked[imgGroupCn][imgCn][IsSmall] = false;
			menuImageLocked[imgGroupCn][imgCn][IsLarge] = false;
		}
	}
	//
	// Left and Right Areas
	if (!bodyMainLeftVisible) { bodyMainLeft.style.display = 'none'; }
	if (!bodyMainRightVisible) { bodyMainRight.style.display = 'none'; }
	//
	// Resize Window
	WindowResizeLayout();
	//
}
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Standard and Utility function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// Standard function (s) - String
// ..................................................................................... _//
// Get Token By Prefix
function StringGetTokenByPrefix(stringPassed, stringPrefix) {
	var itemCn = 0
	var item = stringPassed.split(' ');
	while (itemCn + 1 < 1 + item.length) {
		if (item[itemCn].substring(0, stringPrefix.length) = stringPrefix) {
			return item[itemCn];
		}
		itemCn++;
	}
	return '';
}
// ..................................................................................... _//
// Standard function (s) - Math
// ..................................................................................... _//
// Random Number Get By Range
function MathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, filterRealFlagPassed) {
	var temp = ((Math.random()
		* (filterRangeHighPassed - filterRangeLowPassed + 1))
		+ filterRangeLowPassed
	);
	return (temp - (temp % 1));
}
//
// ..................................................................................... _//
// Standard function (s) - Font Size
// Base Font Size Increase
function FontSizeIncrease() {
	return;
}
//
// ..................................................................................... _//
// Base Font Size Decrease
function FontSizeDecrease() {
	return;
}
//
// ..................................................................................... _//
function StringTextReplace(textPassed, stringFind, stringReplace) {
	// return textPassed.replace(stringFind, stringReplace);
	var TextNew = '';
	var TextPos = 0;
	do {
		TextPos = textPassed.indexOf(stringFind);
		if (TextPos >= 0) {
			TextNew += textPassed.substring(0, TextPos) + stringReplace;
			textPassed = textPassed.substring(TextPos + stringFind.length);
		}
	} while (TextPos >= 0)
	TextNew += textPassed;
	return TextNew;
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Debug and Error Management function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Application Debug & Error function (s)
// ...................................... //
//
// ..................................................................................... _//
// Layout Next
function DebugStart(debugOptionPassed, debugMessagePassed) {
	if (!debugIsOn) { return; }
	if (debugDoAlert) {
		alert('Ready to debug: ' + debugMessagePassed + '(' + debugOptionPassed + ')');
	} else {
		if (browserIsIE) {
			debugger;
		} else if (browserIsFF) {
			// Throw something
			// throw 'Ready to debug: ' + debugMessagePassed + '(' + debugOptionPassed + ')';
			// Use degug instance (from VK)
			// debug-instance-off ElementItemShow;
		} else {
			debugger;
		}
	}
}
//
// ..................................................................................... _//
// Error Message Display
// ..................................................................................... _//
//
// ..................................................................................... _//
// Error message build
// ...................................... //
var messageFinal = new String();
var errorInnerHTML = new String();
var errorSourceInnerHTML = new String();
//
var errorMessageLogAll = new String();
//
var errorMessageLogFinal = new String();
var errorInnerHTMLLog = new String();
var errorSourceInnerHTMLLog = new String();
//
// ..................................................................................... _//
function ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
	eventText, eventUrl, eventLine) {
	consoleEventLogCn += 1;
	var eventMessage =
		charNoWrapTagStart
		+ '(' + (consoleEventLogCn).toString() + ')'
		+ ' ' + eventType
		+ ' ' + eventObject.id
		+ ' ' + eventCurrRootObj.id
		+ ' ' + eventText
		+ charNoWrapTagEnd + charNewLineTag
		+ consoleEventTextBox.innerHTML;
	//
	consoleEventTextBox.innerHTML = eventMessage + consoleEventTextBox.innerHTML;
	//
	if ((consoleEventTextBox.innerHTML).length > UseLogLengthMax) {
		consoleEventTextBox.innerHTML = (consoleEventTextBox.innerHTML).substring(0, UseLogLengthTrim);
	}
	//
	if (UseDebugOnAll) {
		WindowErrorDebug(eventMessage, eventUrl, eventLine);
	}
	//
}
//
// ..................................................................................... _//
function MessageLog(UseDebug, UseSingleLinePassed, MessagePassed,
	messageUrlPassed, MessageLineNumPassed, elementPassed, elementSourcePassed,
	errorSeverityPassed, errorDoDisplayTagPassed, DoUseAlertPassed) {
	if (!elementPassed) { elementPassed = null; }
	if (!elementSourcePassed) { elementSourcePassed = null; }
	//
	messageFinal = '';
	// Error Type
	switch (errorSeverityPassed) {
		case errorIsFatal:
			messageFinal += 'Fatal';
			break;
		case messageElementSevere:
			messageFinal += 'Severe';
			break;
		case errorWarn:
			messageFinal += 'Warning';
			break;
		case messageElementComment:
		default:
			messageFinal += '(Comment) No';
			break;
	}
	//
	messageFinal += ' Error: ' + MessagePassed;
	if ((messageUrlPassed).length) {
		messageFinal += ' in ' + messageUrlPassed;
		if (!UseSingleLinePassed
			&& (messageFinal.length > 30
				&& messageUrlPassed.length > 30)
		) {
			messageFinal += charNewLineTag + charTextIndent;
		}
	}
	//
	// note: the use of " PropertyX in elementPasssed" did not work for validating properties of elementPasssed.
	//
	if (!errorDoDisplayTagPassed) {
		// don't know what to do here...
	} else {
		//
		var tempMessage = new String;
		if (elementPassed && elementPassed != null) {
			if (elementPassed.id) {
				if ((elementPassed.id).length) { tempMessage += 'id (' + elementPassed.id + ')'; }
			} else if (elementPassed.name) {
				if ((elementPassed.name).length) { tempMessage += 'name (' + elementPassed.name + ')'; }
			}
			if (elementPassed.nodeName) {
				if ((elementPassed.nodeName).length) { tempMessage += ', for tag type (' + elementPassed.nodeName + ')'; }
			}
			if (tempMessage.length > 0) {
				if (!UseSingleLinePassed
					&& (messageFinal.length > 30
						&& tempMessage.length > 30)
				) {
					messageFinal += charNewLineTag + charTextIndent;
				}
				//
				messageFinal += 'Target tag ' + tempMessage;
			} else {
				messageFinal += '. No target tag';
			}
			//
			if (elementPassed.innerHTML) {
				if ((elementPassed.innerHTML).length) {
					errorInnerHTML = '';
					errorInnerHTML += 'Target HTML: ';
					if ((elementPassed.innerHTML).length < 256) {
						errorInnerHTML += elementPassed.innerHTML;
					} else {
						errorInnerHTML += elementPassed.innerHTML;
					}
				}
				if (!UseSingleLinePassed
					&& (messageFinal.length > 30
						&& tempMessage.length > 30)
				) {
					messageFinal += charNewLineTag + charTextIndent;
				}
				//
				messageFinal += 'Inner HTML ' + errorInnerHTML;
			}
		}
		//
		if (elementSourcePassed && elementSourcePassed != null) {
			tempMessage = '';
			if (elementSourcePassed.id) {
				if ((elementSourcePassed.id).length) { tempMessage += ' (' + elementSourcePassed.id + ')'; }
			} else if (elementSourcePassed.name) {
				if ((elementSourcePassed.name).length) { tempMessage += ' (' + elementSourcePassed.name + ')'; }
			}
			if (elementSourcePassed.nodeName) {
				if ((elementSourcePassed.nodeName).length) { tempMessage += ', for tag type (' + elementSourcePassed.nodeName + ')'; }
			}
			if (elementSourcePassed.innerHTML) {
				if ((elementSourcePassed.innerHTML).length) {
					errorInnerHTML += 'Source HTML: ';
					if ((elementSourcePassed.innerHTML).length < 256) {
						errorInnerHTML += elementSourcePassed.innerHTML;
					} else { errorInnerHTML += (elementSourcePassed.innerHTML).substring(0, 50); }
				}
			}
			if (tempMessage.length > 0) {
				if (!UseSingleLinePassed
					&& (messageFinal.length > 30
						&& tempMessage.length > 30)
				) {
					messageFinal += charNewLineTag + charTextIndent;
				}
				//
				messageFinal += 'Source tag ' + tempMessage;
			} else {
				messageFinal += '. No source tag';
			}
		}
		messageFinal += '.';
		//
	}
	//
	var DoNotUseDebug;
	var errorSeverityColor = 'White';
	// Add message to appropriate log
	// Error Type
	switch (errorSeverityPassed) {
		case errorIsFatal:
		case errorIsFatal:
			if (errorDebugLevel < 1 + errorSeverityPassed) {DoUseDebug; }
			// errorMessageLogFatal += messageFinal;
			errorSeverityColor = 'Red';
			break;
		case errorSevere:
		case messageElementSevere:
			if (errorDebugLevel < 1 + errorSeverityPassed) {DoUseDebug; }
			// errorMessageLogSevere += messageFinal;
			errorSeverityColor = 'Yellow';
			break;
		case errorWarn:
		case errorWarn:
			if (errorDebugLevel < 1 + errorSeverityPassed) {DoUseDebug; }
			// errorMessageLogWarn += messageFinal;
			errorSeverityColor = 'Orange';
			break;
		case errorComment:
		case messageElementComment:
		default:
			if (errorDebugLevel < 1 + errorSeverityPassed) {DoUseDebug; }
			// errorMessageLogComment += messageFinal;
			errorSeverityColor = 'Lime';
			break;
	}
	//
	if (UseDebugOnAll) {UseDebug = DoUseDebug; } else {
		// if (UseDebugOnError) {UseDebug = DoUseDebug; } else {
		if (UseDebug) {UseDebug = DoUseDebug; }
		// }
	}
	//
	if (errorSeverityHighest < errorSeverityPassed) {
		// Coloured button to inform user
		if (errorSeverityColor != 'White') {
			if (errorSeverityPassed >= errorSevere || errorSeverityPassed >= errorDebugLevel) {
				consoleClearToggle.style.backgroundColor = errorSeverityColor;
				consoleClearToggle.style.color = 'Black';
				consoleClearToggle.style.borderColor = 'White';
			} else {
				consoleClearToggle.style.borderColor = errorSeverityColor;
			}
		} else {
			consoleClearToggle.style.borderColor = ButtonIsOnColor;
		}
		//
		errorSeverityHighest = errorSeverityPassed;
	}
	//
	// errorMessageLogAll += messageFinal;
	//
	MessageLogAction(MessagePassed,
		messageUrlPassed, MessageLineNumPassed, elementPassed, elementSourcePassed,
		errorSeverityPassed, errorDoDisplayTagPassed, DoUseAlertPassed);
	//
	// REFRESH browser display
	//
	// Current Message / Error Counter
	consoleErrorLogCn += 1;
	consoleErrorLogScrollCn += 1;
	var tempCount;
	if (consoleErrorLogCn < 1000) {
		tempCount = (1000 + consoleErrorLogCn).toString().substring(1, 3);
	} else { tempCount = (100000 + consoleErrorLogCn).toString().substring(1, 5); }
	//
	// Text display
	// New line
	// consoleErrorTextBox.innerHTML = charNewLineTag + consoleErrorTextBox.innerHTML;
	// Message
	var tempInnerHTML = charNoWrapTagStart + '(#' + tempCount
		+ ', &#64;' + MessageLineNumPassed + ')' + ' ' + messageFinal
		+ charNoWrapTagEnd + consoleErrorTextBox.innerHTML;
	consoleErrorTextBox.innerHTML = tempInnerHTML;
	//
	if ((consoleErrorTextBox.innerHTML).length > UseLogLengthMax) {
		consoleErrorTextBox.innerHTML = (consoleErrorTextBox.innerHTML).substring(0, UseLogLengthTrim);
	}
	//
	// Scroll to top when not in focus
	if (browserIsIE) {
		// while (consoleErrorLogScrollCn > 20 && !consoleErrorTextBox.hasFocus()) {
		while (consoleErrorLogScrollCn > 20) {
			consoleErrorTextBox.doScroll('scrollbarPageUp');
			consoleErrorLogScrollCn -= 20;
		}
	} else {
		// TODO scrolling for other browsers
	}
	//
	// Alert
	if (DoUseAlertPassed) {
		alert('(' + tempCount + ')' + ' ' + TextReplace(messageFinal, charNewLineTag, charNewLine));
	}
	//
	// Abort & Debug
	if (errorDoDebug) {
		var errorDoDebugAbort = WindowErrorDebug(MessagePassed, messageUrlPassed, MessageLineNumPassed);
		if (errorDoDebugAbort) {
			// ABORT
		}
	}
	//
}
//
// ..................................................................................... _//
// Error Message Display
// ...................................... //
function MessageLogAction(MessagePassed,
	messageUrlPassed, MessageLineNumPassed, messageElementPassed, messageElementSourcePassed,
	errorSeverityPassed, errorDisplayTagPassed, DoUseAlert) {
	if (errorSeverityPassed == errorIsFatal) {
		// display alert
		// dipslay in HTML Critial Message Area
	} else if (errorSeverityPassed == errorSevere) {
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
// ..................................................................................... _//
// ...................................... //
// SectionBlock Window & Script Exceptions & Error function (s)
// ...................................... //
//
// ..................................................................................... _//
// Window Error
// ...................................... //
//
window.onerror = WindowError;
// function() { WindowError(); }
//
function WindowErrorDisplay(errorSeverityPassed, MessagePassed, messageUrlPassed, MessageLineNumPassed) {
	// this may set an event or message... dunno
	var errorCaller = WindowError.caller;
	if (errorCaller == null) { errorCaller = 'Unknown'; }
	//
	// error Object: description Property | message Property | name Property | number Property
	// event Object: returnValue srcElement type
	//
	messageElement = null;
	messageElementSource = null;
	if (!MessageLineNumPassed) { MessageLineNumPassed = -1; }
	if (!messageUrlPassed) { messageUrlPassed = 'no url available'; }
	if (!MessagePassed) { MessagePassed = 'NO ERROR MESSAGE AVAILABLE!!!'; }
	eventCurr = (messageElementSource || messageElement || Event);
	if (e && !eventCurr) { eventCurr = e; } else {
		e = eventCurr;
	}
	if (!eventCurr) { return; }
	// not window.event
	e = null;
	eventCurr = (messageElementSource || messageElement || Event);
	//
	messageElement = eventCurr.target;
	messageElementSource = eventCurr.srcElement;
	eventObject = (messageElementSource || messageElement || Event);
	//
	eventType = eventCurr.type;
	if (eventObject.id) {
		if (eventObject.id != null) {
			eventCurrId = eventObject.id;
		} else { eventCurrId = ''; }
	} else { eventCurrId = ''; }
	//
	// display error in log
	MessageLog(DoUseDebug, DoUseSingleLine,
		'(' + MessageLineNumPassed + ') ' + MessagePassed,
		messageUrlPassed, MessageLineNumPassed, messageElement, messageElementSource,
		errorSevere, errorDoDisplayTag, DoUseAlert);
	//
	if (browserIsIE) {
		// set returnValue to suppress error display in browser
		// e.returnValue = true;
		return true;
	}
	//
}
//
// ..................................................................................... _//
// Window Error
// ...................................... //
function WindowErrorDebug(MessagePassed, messageUrlPassed, MessageLineNumPassed) {
	//
	// if (errorDebugLevel < 1+errorSeverityPassed) { // ignore this when called to allow override...
	//
	if (UseDebugOnError || UseDebugOnAll) {
		if (consoleBox.style.display != 'block') {
			ConsoleToggle(true, 'ConsoleAll');
			ConsoleToggle(true, 'ConsoleEvent');
			ConsoleToggle(true, 'ConsoleState');
		} else if (consoleErrorBox.style.display != 'block') { ConsoleToggle(true, 'ConsoleError'); }
		//
		if (browserIsIE) {
			debugger;
		} else {
			debugger;
		}
	}
	// }
	// return true to indicate an abort...
	return false;
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Body Content Mouse Events function (s)
// ..................................................................................... _//
//
// ...................................... //
// Image Standard Mouse Events
// Mouse
// 		ElementEventMouseOver
//		    ElementEventMouseOut
//		    ElementEventClick
// ...................................... //
//
// ..................................................................................... _//
// Mouse Over
// ...................................... //
function ElementEventMouseOver(menuImage) {
	menuImageCn = oObjIndexSetmenuImageCn(menuImage);
	if (menuImageCn > imgUsedCn) {
		return;
	}
	imgMouseHover[menuImageCn] = 1;
	if (imgFocus == menuImageCn) {
		//    menuImage.src = menuImage.name + '/' + menuImage.name + 'fh.gif';
	}
	else {
		//    menuImage.src = menuImage.name + '/' + menuImage.name + 'bh.gif';
	}
	var tempTop = menuImage.parentNode.top;
	var tempLeft = menuImage.parentNode.left;
	if (UseLogEvents) {
		MessageLog(DoNotUseDebug, DoNotUseSingleLine,
			'Move.. Over occured on content image'
			+ ' set successfully! Random filter # ' + filterIndex + ' '
			+ charNewLineTag + 'top: ' + tempTop
			+ charNewLineTag + 'Left: ' + tempLeft,
			'ElementEventMouseOver', 7140, null, null,
			errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		//
	}
}
//
// ..................................................................................... _//
// Mouse Out
// ...................................... //
function ElementEventMouseOut(menuImage) {
	menuImageCn = oObjIndexSetmenuImageCn(menuImage);
	if (menuImageCn > imgUsedCn) {
		return;
	}
	imgMouseHover[menuImageCn] = 0;
	if (imgFocus == menuImageCn) {
		//    menuImage.src = menuImage.name + '/' + menuImage.name + 'f.gif';
	} else {
		//    menuImage.src = menuImage.name + '/' + menuImage.name + 'b.gif';
	}
}
//
// ..................................................................................... _//
// Mouse Click
// ...................................... //
function ElementEventClick(menuImage) {
	menuImageCn = oObjIndexSetmenuImageCn(menuImage);
	if (menuImageCn > imgUsedCn) {
		return;
	}
	if (imgFocus == menuImageCn) {
		return;
	}
	// old folder
	imgFocusOld = imgFocus;
	//  menuImageOld = oObjIndexSetmenuImage(imgFocusOld);
	//  menuImageOld.src = menuImageOld.name + '/' + menuImageOld.name + 'b.gif';
	// new front folder
	//  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
	imgFocus = menuImageCn;
	//  menuImage.src = menuImage.name + '/' + menuImage.name + 'f.gif';
	// load new page into frame
	//  imgframe.src = menuImage.name + '/' + menuImage.name + '.htm';
	//  document.frames.item.
	//  img0.src = menuImage.name + 'Larger.gif';
	//  img0text.src = menuImage.name + 'text.txt';
	imgSelect = menuImageCn;
	if (UseLogEvents) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			'Move.. Over occured on content image'
			+ charNewLineTag + 'Menu Image Name: ' + menuImage.name
			+ charNewLineTag + 'Image number selected: ' + menuImageCn,
			'ElementEventClick', 7196, null, null,
			errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		//
	}
	//  document.parentWindow.parent.imgSelect = menuImageCn;
	//  document.parentWindow.tabframe.imgSelect = menuImageCn;
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Element function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Element support function (s)
// ...................................... //
//
//............................................................---//
// ...................................... //
// Count all Blocks in the Center Center Area
function ElementObjectBlockCount() {
	var bodyBlockCn = 0;
	// Search Sections for Callouts
	layoutSectionCn = 0;
	while (bodyMainCenterCenter.childNodes[layoutSectionCn]) {
		layoutSection = bodyMainCenterCenter.childNodes[layoutSectionCn];
		// Section
		layoutBlockCn = 0;
		if (layoutSection.id) {
			if ((layoutSection.id).substring(0, 4) == 'DivS') {
				while (bodyMainCenterCenter.childNodes[layoutSectionCn].childNodes[layoutBlockCn]) {
					if (layoutSection.childNodes[layoutBlockCn].id) {
						if ((layoutSection.childNodes[layoutBlockCn].id).substring(0, 4) == 'DivB') {
							bodyBlockCn += 1;
						} // DivB
					}
					//
					layoutBlockCn++;
				} // while Block
			} // end of DivS
		} // of SectionId
		layoutSectionCn++;
	} // while sections
	//
	return bodyBlockCn;
}
//
//............................................................---//
// ...................................... //
// Create all Elements used in Layout
function ElementObjectContainerCreate() {
	//............................................................---//
	// Body Container References
	//............................................................---//
	body = ElementGetRef(body, 'BodyBox', 'BodyBox');
	bodyMainContainer = ElementGetRef(bodyMainContainer, 'BodyMainContainer', 'BodyMainContainer');
	// Body Center Area References
	bodyMainCenter = ElementGetRef(bodyMainCenter, 'BodyMainCenter', 'BodyMainCenter');
	// Body Left Area Copy
	bodyMainLeft = ElementGetRef(bodyMainLeft, 'BodyMainLeft', 'BodyMainLeft');
	// Body Right Area Copy
	bodyMainRight = ElementGetRef(bodyMainRight, 'BodyMainRight', 'BodyMainRight');
	//
	bodyMainCenterCenter = ElementGetRef(bodyMainCenterCenter, 'BodyMainCenterCenter', 'BodyMainCenterCenter');
	//
	// layoutBodyColumnType1 = ElementGetRef(layoutBodyColumnType1,'layoutBodyColumnType1','layoutBodyColumnType1');
}
//
// ..................................................................................... _//
// ...................................... //
// Create all Elements used in Layout
function ElementObjectCreate() {
	// State change at top to avoid duplicate calls.
	loadFirstJava = false;
	// bodyFirst = false;
	//............................................................---//
	// Body Container References
	//............................................................---//
	ElementObjectContainerCreate();
	//
	//............................................................---//
	// Banner References (Top Menu, Logo and Graphics)
	//............................................................---//
	bodyBanner = ElementGetRef(bodyBanner, 'BodyBanner', 'BodyBanner');
	bodyBannerTop = ElementGetRef(bodyBannerTop, 'BodyBannerTop', 'BodyBannerTop');
	bodyBannerBottom = ElementGetRef(bodyBannerBottom, 'BodyBannerBottom', 'BodyBannerBottom');
	//
	//............................................................---//
	// Body View Toggle and Message Area Containers
	//............................................................---//
	// bodyViewToggle View Toggle and Message Area
	bodyViewToggleContainer = ElementGetRef(bodyViewToggleContainer, 'BodyViewToggleContainerLeft', 'BodyViewToggleContainerLeft');
	bodyViewToggleContainerCenter = ElementGetRef(bodyViewToggleContainerCenter, 'BodyViewToggleContainerCenter', 'BodyViewToggleContainerCenter');
	bodyViewToggleContainerLeft = ElementGetRef(bodyViewToggleContainerLeft, 'BodyViewToggleContainerLeft', 'BodyViewToggleContainerLeft');
	//
	consoleMouseOverToggle = ElementGetRef(consoleMouseOverToggle, 'BodyConsoleMouseOverToggle', 'BodyConsoleMouseOverToggle');
	//
	//............................................................---//
	// Body Console Toggle and Message Area
	//............................................................---//
	// Toggle Buttons
	consoleBoxButtons = ElementGetRef(consoleBoxButtons, 'BodyConsoleBoxButtons', 'BodyConsoleBoxButtons');
	consoleToggles = ElementGetRef(consoleToggles, 'BodyConsoleBoxToggles', 'BodyConsoleBoxToggles');
	UseLogToggles = ElementGetRef(UseLogToggles, 'BodyUseLogToggles', 'BodyUseLogToggles');
	consoleAuxillaryToggles = ElementGetRef(consoleAuxillaryToggles, 'BodyConsoleAuxillaryToggles', 'BodyConsoleAuxillaryToggles');
	//
	consoleToggle = ElementGetRef(consoleToggle, 'ConsoleToggle', 'ConsoleToggle');
	//
	consoleErrorToggle = ElementGetRef(consoleErrorToggle, 'BodyConsoleErrorToggle', 'BodyConsoleErrorToggle');
	consoleEventToggle = ElementGetRef(consoleEventToggle, 'BodyConsoleEventToggle', 'BodyConsoleEventToggle');
	consoleStateToggle = ElementGetRef(consoleStateToggle, 'BodyConsoleStateToggle', 'BodyConsoleStateToggle');
	consoleTestToggle = ElementGetRef(consoleTestToggle, 'BodyConsoleTestToggle', 'BodyConsoleTestToggle');
	consoleClearToggle = ElementGetRef(consoleClearToggle, 'BodyConsoleClearToggle', 'BodyConsoleClearToggle');
	//
	consoleDebugButtons = ElementGetRef(consoleDebugButtons, 'BodyConsoleDebugButtons', 'BodyConsoleDebugButtons');
	consoleDebugToggles = ElementGetRef(consoleDebugToggles, 'BodyConsoleDebugToggles', 'BodyConsoleDebugToggles');
	consoleDebugMainToggles = ElementGetRef(consoleDebugMainToggles, 'BodyConsoleDebugMainToggles', 'BodyConsoleDebugMainToggles');
	consoleDebugTypesToggles = ElementGetRef(consoleDebugTypesToggles, 'BodyConsoleDebugTypesToggles', 'BodyConsoleDebugTypesToggles');
	//
	consoleDebugToggle = ElementGetRef(consoleDebugToggle, 'BodyConsoleDebugToggle', 'BodyConsoleDebugToggle');
	//
	consoleDebugMoveToggle = ElementGetRef(consoleDebugMoveToggle, 'BodyConsoleDebugMoveToggle', 'BodyConsoleDebugMoveToggle');
	consoleDebugTransitionToggle = ElementGetRef(consoleDebugTransitionToggle, 'BodyConsoleDebugTransitionToggle', 'BodyConsoleDebugTransitionToggle');
	consoleDebugDetailToggle = ElementGetRef(consoleDebugDetailToggle, 'BodyConsoleDebugDetailToggle', 'BodyConsoleDebugDetailToggle');
	consoleDebugAllToggle = ElementGetRef(consoleDebugAllToggle, 'BodyConsoleDebugAllToggle', 'BodyConsoleDebugAllToggle');
	consoleDebugOnErrorToggle = ElementGetRef(consoleDebugOnErrorToggle, 'BodyConsoleDebugOnErrorToggle', 'BodyConsoleDebugOnErrorToggle');
	consoleDebugEventsToggle = ElementGetRef(consoleDebugEventsToggle, 'BodyConsoleDebugEventsToggle', 'BodyConsoleDebugEventsToggle');
	//
	// Body Console Toggle and Message Area
	consoleContainer = ElementGetRef(consoleContainer, 'BodyConsoleContainer', 'BodyConsoleContainer');
	consoleBox = ElementGetRef(consoleBox, 'BodyConsoleBox', 'BodyConsoleBox');
	consoleErrorBox = ElementGetRef(consoleErrorBox, 'BodyConsoleErrorBox', 'BodyConsoleErrorBox');
	consoleErrorTextBox = ElementGetRef(consoleErrorTextBox, 'BodyConsoleErrorTextBox', 'BodyConsoleErrorTextBox');
	consoleEventBox = ElementGetRef(consoleEventBox, 'BodyConsoleEventBox', 'BodyConsoleEventBox');
	consoleEventTextBox = ElementGetRef(consoleEventTextBox, 'BodyConsoleEventTextBox', 'BodyConsoleEventTextBox');
	consoleStateBox = ElementGetRef(consoleStateBox, 'BodyConsoleStateBox', 'BodyConsoleStateBox');
	consoleStateTextBox = ElementGetRef(consoleStateTextBox, 'BodyConsoleStateTextBox', 'BodyConsoleStateTextBox');
	consoleTestBox = ElementGetRef(consoleTestBox, 'BodyConsoleTestBox', 'BodyConsoleTestBox');
	consoleTestTextBox = ElementGetRef(consoleTestTextBox, 'BodyConsoleTestTextBox', 'BodyConsoleTestTextBox');
	//
	if (consoleBox.style.display == '') { consoleBox.style.display = 'none' }
	if (consoleErrorBox.style.display == '') { consoleErrorBox.style.display = 'block'; }
	if (consoleEventBox.style.display == '') { consoleEventBox.style.display = 'block'; }
	if (consoleStateBox.style.display == '') { consoleStateBox.style.display = 'block'; }
	if (consoleTestBox.style.display == '') { consoleTestBox.style.display = 'block'; }
	//
	ConsoleShow(DoNotUseHide, DoNotUseDebug);
	// if (consoleToggles.style.display == '') { consoleToggles.style.display = 'block'; }
	ConsoleShow(DoNotUseHide, DoUseDebug);
	// if (consoleDebugToggles.style.display == '') { consoleDebugToggles.style.display = 'block'; }
	//
	//............................................................---//
	// Body Center Area References
	//............................................................---//
	// bodyMainCenter = ElementGetRef(bodyMainCenter,'BodyMainCenter','BodyMainCenter');
	//
	bodyMainCenterTop = ElementGetRef(bodyMainCenterTop, 'BodyMainCenterTop', 'BodyMainCenterTop');
	bodyMainCenterTopLeft = ElementGetRef(bodyMainCenterTopLeft, 'BodyMainCenterTopLeft', 'BodyMainCenterTopLeft');
	bodyMainCenterTopRight = ElementGetRef(bodyMainCenterTopRight, 'BodyMainCenterTopRight', 'BodyMainCenterTopRight');
	//
	bodyMainCenterTopColBreak = ElementGetRef(bodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak');
	//
	// bodyMainCenterCenter = ElementGetRef(bodyMainCenterCenter,'BodyMainCenterCenter','BodyMainCenterCenter');
	//
	bodyMainCenterBottom = ElementGetRef(bodyMainCenterBottom, 'BodyMainCenterBottom', 'BodyMainCenterBottom');
	//
	//............................................................---//
	// Body Left Area Copy
	//............................................................---//
	// bodyMainLeft = ElementGetRef(bodyMainLeft,'BodyMainLeft','BodyMainLeft');// createElement
	// bodyMainLeft = ElementGetRef(bodyMainLeft,'BodyMainLeft','BodyMainLeft');
	bodyMainLeftCopy = ElementCopy(bodyMainLeftCopy, bodyMainLeftCopyFirst, bodyMainLeft, 'block');
	bodyMainLeftCurr = ElementCopy(bodyMainLeftCurr, bodyMainLeftCurrFirst, bodyMainLeft, 'block');
	bodyMainLeftOrig = ElementCopy(bodyMainLeftOrig, bodyMainLeftOrigFirst, bodyMainLeft, 'block');
	//
	// if (false = true) {
	bodyMainLeftOuter = ElementGetRefFromElement(bodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', bodyMainLeftCopy)
	// bodyMainLeftOuter = ElementGetRef(bodyMainLeftOuter,'BodyMainLeftOuter','BodyMainLeftOuter');
	bodyMainLeftInner = ElementGetRefFromElement(bodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', bodyMainLeftCopy)
	// bodyMainLeftInner = ElementGetRef(bodyMainLeftInner,'BodyMainLeftInner','BodyMainLeftInner');
	//
	bodyLayoutMenu1 = ElementGetRefFromElement(bodyLayoutMenu1, 'BodyMenuLayout1', 'BodyMenuLayout1', bodyMainLeftCopy)
	// bodyLayoutMenu1 = ElementGetRef(bodyLayoutMenu1,'BodyMenuLayout1','BodyMenuLayout1');
	bodyMenuContainer[bodyMenuLeft][1] = ElementGetRefFromElement(bodyMenuContainer[bodyMenuLeft][1], 'MenuContainerLeft1', 'MenuContainerLeft1', bodyMainLeftCopy)
	// bodyMenuContainer[bodyMenuLeft][1] = ElementGetRef(bodyMenuContainer[bodyMenuLeft][1],'MenuContainerLeft1','MenuContainerLeft1');
	// Left 1
	bodybodyMenuLeft1 = ElementGetRefFromElement(bodybodyMenuLeft1, 'bodyMenuLeft1', 'bodyMenuLeft1', bodyMainLeftCopy)
	// bodybodyMenuLeft1 = ElementGetRef(bodybodyMenuLeft1,'bodyMenuLeft1','bodyMenuLeft1');
	// bodybodyMenuLeft1 = ElementGetRefFromElement(bodybodyMenuLeft1, bodybodyMenuLeft1.id, bodybodyMenuLeft1.name, bodyMainLeft)
	// var bodybodyMenuLeft1Save = ElementGetRef(bodybodyMenuLeft1Save,'bodyMenuLeft1Save','bodyMenuLeft1Save');
	// Left 2
	bodyMenuContainer[bodyMenuLeft][2] = ElementGetRefFromElement(bodyMenuContainer[bodyMenuLeft][2], 'MenuContainerLeft2', 'MenuContainerLeft2', bodyMainLeftCopy)
	// bodyMenuContainer[bodyMenuLeft][2] = ElementGetRef(bodyMenuContainer[bodyMenuLeft][2],'MenuContainerLeft2','MenuContainerLeft2');
	bodybodyMenuLeft2 = ElementGetRefFromElement(bodybodyMenuLeft2, 'bodyMenuLeft2', 'bodyMenuLeft2', bodyMainLeftCopy)
	// bodybodyMenuLeft2 = ElementGetRef(bodybodyMenuLeft2,'bodyMenuLeft2','bodyMenuLeft2');
	// var bodybodyMenuLeft2Save = ElementGetRef(bodybodyMenuLeft2Save,'bodyMenuLeft2Save','bodyMenuLeft2Save');
	// Left 3
	bodyMenuContainer[bodyMenuLeft][3] = ElementGetRefFromElement(bodyMenuContainer[bodyMenuLeft][3], 'MenuContainerLeft3', 'MenuContainerLeft3', bodyMainLeftCopy)
	// bodyMenuContainer[bodyMenuLeft][3] = ElementGetRef(bodyMenuContainer[bodyMenuLeft][3],'MenuContainerLeft3','MenuContainerLeft3');
	bodybodyMenuLeft3 = ElementGetRefFromElement(bodybodyMenuLeft3, 'bodyMenuLeft3', 'bodyMenuLeft3', bodyMainLeftCopy)
	// bodybodyMenuLeft3 = ElementGetRef(bodybodyMenuLeft3,'bodyMenuLeft3','bodyMenuLeft3');
	// var bodybodyMenuLeft3Save = ElementGetRef(bodybodyMenuLeft3Save,'bodyMenuLeft3Save','bodyMenuLeft3Save');
	// }
	//
	//............................................................---//
	// Body Right Area Copy
	//............................................................---//
	// bodyMainRight = ElementGetRef(bodyMainRight,'BodyMainRight','BodyMainRight');
	bodyMainRightCopy = ElementCopy(bodyMainRightCopy, bodyMainRightCopyFirst, body, 'block');
	bodyMainRightCurr = ElementCopy(bodyMainRightCurr, bodyMainRightCurrFirst, bodyMainRight, 'block');
	bodyMainRightOrig = ElementCopy(bodyMainRightOrig, bodyMainRightOrigFirst, bodyMainRight, 'block');
	//
	bodyMainRightOuter = ElementGetRefFromElement(bodyMainRightOuter, 'BodyMainRightOuter', 'BodyMainRightOuter', bodyMainRightCopy)
	// bodyMainRightOuter = ElementGetRef(bodyMainRightOuter,'BodyMainRightOuter','BodyMainRightOuter');
	bodyMainRightInner = ElementGetRefFromElement(bodyMainRightInner, 'BodyMainRightInner', 'BodyMainRightInner', bodyMainRightCopy)
	// bodyMainRightInner = ElementGetRef(bodyMainRightInner,'BodyMainRightInner','BodyMainRightInner');
	//
	bodyLayoutMenu2 = ElementGetRef(bodyLayoutMenu2, 'BodyMenuLayout2', 'BodyMenuLayout2');
	//
	bodyMenuContainerRight1 = ElementGetRefFromElement(bodyMenuContainerRight1, 'MenuContainerRight1', 'MenuContainerRight1', bodyMainRightCopy);
	// bodyMenuContainerRight1 = ElementGetRef(bodyMenuContainerRight1,'MenuContainerRight1','MenuContainerRight1');
	bodybodyMenuRight1 = ElementGetRefFromElement(bodybodyMenuRight1, 'bodybodyMenuRight1', 'bodybodyMenuRight1', bodyMainRightCopy);
	// var bodybodyMenuRight1Save = ElementGetRef(bodybodyMenuRight1Save,'bodyMenuRight1Save','bodyMenuRight1Save');
	bodyMenuContainerRight2 = ElementGetRefFromElement(bodyMenuContainerRight2, 'MenuContainerRight2', 'MenuContainerRight2', bodyMainRightCopy);
	bodybodyMenuRight2 = ElementGetRefFromElement(bodybodyMenuRight2, 'bodyMenuRight2', 'bodyMenuRight2', bodyMainRightCopy);
	// var bodybodyMenuRight2Save = ElementGetRef(bodybodyMenuRight2Save,'bodyMenuRight2Save','bodyMenuRight2Save');
	bodyMenuContainerRight3 = ElementGetRefFromElement(bodyMenuContainerRight3, 'MenuContainerRight3', 'MenuContainerRight3', bodyMainRightCopy);
	bodybodyMenuRight3 = ElementGetRefFromElement(bodybodyMenuRight3, 'bodyMenuRight3', 'bodyMenuRight3', bodyMainRightCopy);
	// var bodybodyMenuRight3Save = ElementGetRef(bodybodyMenuRight3Save,'bodyMenuRight3Save','bodyMenuRight3Save');
	//
	//............................................................---//
	// Body Far Right Area
	//............................................................---//
	bodyMainRightFar = ElementGetRef(bodyMainRightFar, 'BodyMainRightFar', 'BodyMainRightFar');
	//
	//............................................................---//
	// Other...
	//............................................................---//
	// bodyMainCenterTopColBreak
	bodyMainCenterTopColBreak = ElementGetRef(bodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak');
	//
	bodybodyMenuLeft1ColBreak = ElementGetRef(bodybodyMenuLeft1ColBreak, 'bodyMenuLeft1ColBreak', 'bodyMenuLeft1ColBreak');
	bodybodyMenuLeft2ColBreak = ElementGetRef(bodybodyMenuLeft2ColBreak, 'bodyMenuLeft2ColBreak', 'bodyMenuLeft2ColBreak');
	bodybodyMenuLeft3ColBreak = ElementGetRef(bodybodyMenuLeft3ColBreak, 'bodyMenuLeft3ColBreak', 'bodyMenuLeft3ColBreak');
	bodybodyMenuRight1ColBreak = ElementGetRef(bodybodyMenuRight1ColBreak, 'bodyMenuRight1ColBreak', 'bodyMenuRight1ColBreak');
	bodybodyMenuRight2ColBreak = ElementGetRef(bodybodyMenuRight2ColBreak, 'bodyMenuRight2ColBreak', 'bodyMenuRight2ColBreak');
	bodybodyMenuRight3ColBreak = ElementGetRef(bodybodyMenuRight3ColBreak, 'bodyMenuRight3ColBreak', 'bodyMenuRight3ColBreak');
	//
	//............................................................---//
	//............................................................---//
	//
	// document.recalc();
	//
	loadFirstJava = false;
	// bodyFirst = false;
}
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Element Get function (s)
// ...................................... //
//
// ..................................................................................... _//
//
function ElementGetFromId(IdPassed) { return document.getElementById(IdPassed); }
//
// ..................................................................................... _//
// ...................................... //
// Element Get Pointer
function ElementGetRef(elementObject, elementObjectId, elementNamePassed) {
	if (browserIsTEST) {
		// browserIsTEST
		if (!elementNamePassed.length) { elementNamePassed = elementObjectId; }
		elementObject = window.document.querySelector(elementNamePassed);
	} else if (browserIsIE || browserIsFF) {
		// browserIE or browserIsFF
		elementObject = document.getElementById(elementObjectId);
	} else {
		elementObject = document.getElementById(elementObjectId);
	}
	return elementObject;
}
//
// ..................................................................................... _//
// ...................................... //
// Layout Menu Area Element Common Fields Set
function ElementGetRefFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed) {
	// DOES THIS NEED TO BE COPIES.
	// As written it results in pointers into the Source Document
	// Dest = ElementGetRefFromElement(Dest, 'DestId', 'DestName', Source);
	if (browserIsTEST) {
		// browserIsTEST
		if (!elementNamePassed.length) { elementNamePassed = elementIdPassed; }
		elementPassed = window.document.querySelector(elementNamePassed);
	} else if (browserIsIE && elementSourcePassed.all) {
		// browserIE
		elementPassed = elementSourcePassed.querySelector(elementIdPassed);
	} else if (browserIsFF) {
		// browserIsFF
		// ElementGetFromElement(
		//		elementPassed, elementIdPassed, elementNamePassed,
		//		elementSourcePassed,
		//		DoFindSetPassed, elementValuePassed
		elementPassed = ElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed, DoFindReturn, null)
		// elementPassed = elementSourcePassed.getElementsByName(elementIdPassed);
		// elementPassed = elementSourcePassed.childNodes.item(elementIdPassed);
		// elementPassed = elementSourcePassed.childNodes[elementIdPassed];
		// elementPassed = elementSourcePassed.getElementById(elementIdPassed);
	} else if (true) {
		// NOT browserIE or browserIsFF
		var DoSet = false;
		elementPassed = ElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed,
			elementSourcePassed,
			DoSet, null);
		//
		// elementPassed = elementSourcePassed.getElementById(elementIdPassed);
		// elementPassed = ElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed, DoFindReturn, null)
		// elementPassed = document.getElementById(elementIdPassed);
	}
	return elementPassed;
}
//
// ..................................................................................... _//
// ...................................... //
// Layout Menu Area Element Common Fields Set
function ElementCreate(elementPassed, elementLayoutFirstPassed) {
	var elementCreate = false;
	if (!elementPassed) {
		elementCreate = true;
	} else if (!elementPassed.style) { elementCreate = true; }
	//
	if (elementCreate) {
		if (browserIsIE) {
			elementPassed = document.createElement('div');
		} else if (browserIsFF) {
			elementPassed = document.createElement('div');
		} else {
			elementPassed = document.createElement('div');
		}
	}
	return elementPassed;
}
//
// ..................................................................................... _//
// ...................................... //
// Layout Menu Area Element Common Fields Set
function ElementCopy(elementPassed, elementLayoutFirstPassed, elementSourcePassed, elementStyleDisplayPassed) {
	var elementIdCurr;
	var elementSourceIdCurr;
	if (elementSourcePassed.id) {
		elementSourceIdCurr = elementSourcePassed.id;
	} else { elementSourceIdCurr = ''; }
	//
	elementPassed = ElementCreate(elementPassed, elementLayoutFirstPassed);
	//
	//............................................................---//
	if (elementPassed.id) { elementIdCurr = elementSourcePassed.id; } else { elementIdCurr = ''; }
	//............................................................---//
	// Copy Source to Destination Element (Inner HTML, Events)
	if (elementSourcePassed != null) {
		if (elementLayoutFirstPassed) {
			if (elementSourcePassed.innerHTML) {
				//
				//............................................................---//
				// Copy HTML
				// elementPassed.outerHTML = elementSourcePassed.outerHTML;
				elementPassed.innerHTML = elementSourcePassed.innerHTML;
				// elementPassed = elementSourcePassed;
				// elementPassed = elementSourcePassed.cloneNode(true);
				//
				elementLayoutFirstPassed = false;
				//
				//............................................................---//
				// Element Events
				// ElementEventsCopy(elementPassed, elementSourcePassed, elementPassed.id, elementSourcePassed.id)
			}
		}
		// if (elementPassed.innerHTML == null || elementPassed.innerHTML.length = 0) {
		// elementPassed.innerHTML = elementSourcePassed.innerHTML;
		// }
		if (!elementPassed.style) {
			elementPassed.setAttribute('style', '');
		}
		elementPassed.style.display = elementStyleDisplayPassed;
	}
	return elementPassed;
}
//
// ..................................................................................... _//
// Layout Menu Area Element Common Fields Set
// ...................................... //
function ElementGetFromElement(
	elementPassed, elementIdPassed, elementNamePassed,
	elementSourcePassed,
	DoFindSetPassed, elementValuePassed
) {
	// Dest = ElementGetRefFromElement(Dest, 'DestId', 'DestName', Source);
	//
	var elementChildObject;
	var elementTempFirst = true;
	elementFound = false;
	//
	elementPassed = ElementCreate(elementPassed, elementTempFirst);
	//
	// Loop through each child node of elementObject
	// and retrieve the original element from the document.
	//
	for (var elmCn = 0; elmCn < 1 + elementSourcePassed.childNodes.length; elmCn++) {
		elementChildObject = elementSourcePassed.childNodes[elmCn];
		if (elementChildObject) {
			if (elementChildObject.id) {
				if (elementChildObject.id != null) {
					if (elementChildObject.id != '' && elementChildObject.id == elementIdPassed) {
						//
						if (DoFindSetPassed == DoFindSet) {
							if (elementFound) {
								elementSourcePassed.childNodes[elmCn] = elementPassed;
							} else {
								elementSourcePassed.childNodes[elmCn] = elementValuePassed;
								elementFound = true;
							}
							return elementSourcePassed.childNodes[elmCn];
						}
						if (!elementFound) {
							elementPassed = elementChildObject;
							elementFound = true;
						}
						//
						//   if (browserIsTEST) {
						//        // browserIsTEST
						//        // elementObject = window.document.querySelector(elementNamePassed);
						//   } else if (browserIsIE) {
						//        // browserIE
						//        // elementObject = elementSourcePassed.querySelector(elementObjectId);
						//   } else if (browserIsFF) {
						//       // browserIsFF
						//       // elementObject = document.getElementById(elementObjectId);
						//   } else if (true) {
						//       // NOT browserIE or browserIsFF
						//       // elementObject = document.getElementById(elementObjectId);
						//   }
						//
						return elementPassed;
					}
				} // end of length and id match
				//
				if (elementChildObject.childNodes) {
					if (elementChildObject.childNodes.length) {
						elementPassed = ElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementChildObject, DoFindSetPassed, elementValuePassed);
						if (elementFound) { return elementPassed; }
					}
				}
			} // end of id exists
		} // end of element exists
	} // end of for
	//
	elementFound = false;
	return;
}
//
// ..................................................................................... _//
// Layout Menu Area Element Common Fields Set
// ...................................... //
function ElementEventsCopy(elementObject, elementSourceObject, elementObjectId, elementSourceObjectId) {
	var elementChildObject;
	var elementSourceChildObject;
	//
	if (!elementObjectId.length) { elementObjectId = elementSourceObjectId; }
	//
	if (elementObjectId.length && elementSourceObjectId.length) {
		//
		if (!elementObject) { return; }
		// if (!elementObject)  {
		// elementObject = ElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
		// if (elementObject.id != elementObjectId) {
		// elementObject = ElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
		//
		if (!elementSourceObject) {
			elementSourceObject = ElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
		}
		if (elementSourceObject.id != elementSourceObjectId) {
			elementSourceObject = ElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
		}
	} else {
		if (!elementObject) { return; }
		if (!elementSourceObject) { return; }
		//
		if (typeof (elementObject) != 'element') { return; }
		if (typeof (elementSourceObject) != 'element') {
			elementObject = document.createElement();// X
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
	for (elmCn = 1; elmCn < 1 + elementObject.childNodes.length; elmCn++) {
		elementChildObject = elementObject.childNodes[elmCn];
		if (elementChildObject) {
			if (elementChildObject.id) {
				if (elementChildObject.id.length) {
					elementSourceChildObject = document.getElementById(elementChildObject.id);
					if (elementSourceChildObject) {
						if (elementSourceChildObject.onmousedown) {
							// elementChildObject.setAttribute('onmousedown', elementSourceChildObject.onmousedown , 0)
							elementChildObject.onmousedown = elementSourceChildObject.onmousedown;
						}
						if (elementSourceChildObject.onmouseover) {
							// elementChildObject.setAttribute('onmouseover', elementSourceChildObject.onmouseover , 0)
							elementChildObject.onmouseover = elementSourceChildObject.onmouseover;
						}
						if (elementSourceChildObject.onmouseout) {
							// elementChildObject.setAttribute('onmouseout', elementSourceChildObject.onmouseout , 0)
							elementChildObject.onmouseout = elementSourceChildObject.onmouseout;
						}
					}
				}
			}
		}
	}
	/* --
	 // if (elementPassed.childNodes.length)
	 for (elmCn = 1;elementSourceObject.childNodes.length;elmCn++){
	var elementSourceChildObject = elementSourceObject.childNodes[elmCn];
	elementChildObject = elementObject.getElementById(elementSourceChildObject.id);
	elementChildObject.Events['onmousedown'] = elementSourceChildObject.Events['onmousedown'];
	}
	// }
	-- */
	// }
	return elementObject;
}
//
// ..................................................................................... _//
// Layout Menu Area Element Common Fields Set
// ...................................... //
function ElementBreakSet(elementPassed, elementIdPassed, elementLayoutFirstPassed, elementStyleDisplayPassed, elementStyleVisibilityPassed, elsementStyleClearPassed) {
	if (!elementPassed) {
		elementPassed = ElementGetRef(elementPassed, elementIdPassed, elementIdPassed);
		// var elementPassed = elementPassed.childNodes[elementIdPassed];
		// var elementPassed = document.getElementById(elementIdPassed);
	}
	//
	var elementTarget;
	// Get Break Element from Parent
	if (browserIsIE) {
		elementTarget = document.createElement('br');
	} else {
		elementTarget = document.createElement('br');
	}
	elementTarget = ElementGetFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed, DoFindReturn, null);
	// elementTarget = ElementGetRefFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed);
	//
	// note: Switched from 'in' element operator to If(element.property)
	// It is more standard and less error prone.
	// TODO using the 'in' operator here, change to null:
	//
	// if (elementPassed.childNodes.length) {
	if (elementTarget) {
		if (elementTarget.style) {
			// set Display property.
			if ('display' in elementTarget.style) {
				if (elementStyleDisplayPassed.length) { elementTarget.style.display = elementStyleDisplayPassed; }
			} else if (UseLogTimerDetail) {
				MessageLog(DoNotUseDebug, DoNotUseSingleLine,
					'Element Break Set, Style missing',
					'ElementBreakSet', 7742, elementTarget, elementPassed,
					errorWarn, errorDoDisplayTag, DoNotUseAlert);
			}
			// set Visibilty.
			if (elementStyleVisibilityPassed.length) {
				if (elementTarget.style.visibility) {
					elementTarget.style.visibility = elementStyleVisibilityPassed;
				} else if (UseLogTimerDetail) {
					MessageLog(DoNotUseDebug, DoNotUseSingleLine,
						'Element Break Set, Visibility missing',
						'ElementBreakSet', 7751, elementTarget, elementPassed,
						errorWarn, errorDoDisplayTag, DoNotUseAlert);
					elementTarget.style.visibility = elementStyleVisibilityPassed;
				}
			}
			// set the Clear attribute.
			if (elsementStyleClearPassed.length) {
				// note: the redundant syntax, different logic than above
				if (elementTarget.style.clear) {
					if (elsementStyleClearPassed.length) { elementTarget.style.clear = elsementStyleClearPassed; }
				} else if (UseLogTimerDetail) {
					MessageLog(DoNotUseDebug, DoNotUseSingleLine,
						'Element Break Set, Clear missing',
						'ElementBreakSet', 7760, elementTarget, elementPassed,
						errorWarn, errorDoDisplayTag, DoNotUseAlert);
					elementTarget.style.clear = elsementStyleClearPassed;
				}
			}
		}
	}
	elementLayoutFirstPassed = false;
	// }
	return elementPassed;
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Element Position & Dimension function (s)
// ...................................... //
//
// ..................................................................................... _//
// Element Position Get
// ...................................... //
function ElementPosGet(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault, elHeightDefault) {
	oObjTop = ElementTopMaxGet(DoScroll, DoBase, elementPassed);
	oObjLeft = ElementLeftMaxGet(DoScroll, DoBase, elementPassed);
	if (!oObjTop || !oObjLeft) { ElementPosCalculate(elementPassed) } else {
		oObjWidth = ElementWidthMaxGet(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault);
		oObjHeight = ElementHeightMaxGet(DoScroll, DoBase, elementPassed, elHeightDefault);
	}
	//
	return [oObjTop, oObjLeft, oObjWidth, oObjHeight];
}
//
// ..................................................................................... _//
// Element Position Calculate
// ...................................... //
function ElementPosCalculate(elementPassed) {
	oObjTop = 0;
	oObjLeft = 0;
	oObjWidth = 0;
	oObjHeight = 0;
	var currLeft = currTop = 0;
	//
	if (elementPassed.offsetParent) {
		var oObjCurr = elementPassed;
		do {
			// while (oObjPassed = oObjPassed.offsetParent) {
			currLeft += oObjCurr.offsetLeft;
			currTop += oObjCurr.offsetTop;
			// }
		} while ((oObjCurr = oObjCurr.offsetParent));
		oObjTop = currTop;
		oObjLeft = currLeft;
		oObjWidth = elementPassed.offsetWidth;
		oObjHeight = elementPassed.offsetHeight;
	}
	return [oObjTop, oObjLeft, oObjWidth, oObjHeight];
}
//
// ..................................................................................... _//
// ...................................... //
// Layout Top Get
function ElementTopMaxGet(DoScroll, DoBase, elementPassed) {
	var DoOffset = true;
	if (!elementPassed) { return 0; }
	if (!elementPassed.style) { return 0; }
	var thisTop = 0;
	var topBase = parseInt(elementPassed.style.top);
	var topOffset = parseInt(elementPassed.offsetTop);
	var topScroll = parseInt(elementPassed.scrollTop);
	//
	if (DoBase) {
		if (topBase > thisTop) { thisTop = topBase; }
	}
	if (DoOffset) {
		if (topOffset > thisTop) { thisTop = topOffset; }
	}
	if (DoScroll) {
		if (topScroll > thisTop) { thisTop = topScroll; }
	}
	if (thisTop > 3000) {
		// ERROR
		thisTop = 3000;
	}
	return thisTop;
}
//
// ..................................................................................... _//
// ...................................... //
// Layout Left Get
function ElementLeftMaxGet(DoScroll, DoBase, elementPassed) {
	var DoOffset = true;
	if (!elementPassed) { return 0; }
	if (!elementPassed.style) { return 0; }
	var thisLeft = 0;
	var leftBase = parseInt(elementPassed.style.left);
	var leftOffset = parseInt(elementPassed.offsetLeft);
	var leftScroll = parseInt(elementPassed.scrollLeft);
	//
	if (DoBase) {
		if (leftBase > thisLeft) { thisLeft = leftBase; }
	}
	if (DoOffset) {
		if (leftOffset > thisLeft) { thisLeft = leftOffset; }
	}
	if (DoScroll) {
		if (leftScroll > thisLeft) { thisLeft = leftScroll; }
	}
	if (thisLeft > 3000) {
		// ERROR
		thisLeft = 3000;
	}
	return thisLeft;
}
//
// ..................................................................................... _//
// ...................................... //
// Layout Width Get
function ElementWidthMaxGet(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault) {
	var DoOffset = true;
	if (!elementPassed) { return 0; }
	if (!elementPassed.style) { return 0; }
	var thisWidth = 0;
	var widthBase = parseInt(elementPassed.style.width);
	var widthOffset = parseInt(elementPassed.offsetWidth);
	var widthScroll = parseInt(elementPassed.scrollWidth);
	//
	if (DoBase) {
		if (widthBase > thisWidth) { thisWidth = widthBase; }
	}
	if (DoOffset) {
		if (widthOffset > thisWidth) { thisWidth = widthOffset; }
	}
	if (DoScroll) {
		if (widthScroll > thisWidth) { thisWidth = widthScroll; }
	}
	if (thisWidth == 0) { thisWidth = layoutBlockWidthDefault; }
	if (thisWidth > 3000) {
		// ERROR
		thisWidth = 3000;
	}
	return thisWidth;
}
//
// ..................................................................................... _//
// ...................................... //
// Layout Height Get
var heightBase = 0;
var heightOffset = 0;
var heightScroll = 0;
var heightClient = 0;
var heightNode = 0;
var heightRects = 0;
var clientRectsIndex = 0;
function ElementHeightMaxGet(DoScroll, DoBase, elementPassed, elHeightDefault) {
	var DoOffset = true;
	if (!elementPassed) { return 0; }
	if (!elementPassed.style) { return 0; }
	var thisHeight = 0;
	heightBase = parseInt(elementPassed.style.height);
	heightOffset = parseInt(elementPassed.offsetHeight);
	heightScroll = parseInt(elementPassed.scrollHeight);
	heightClient = parseInt(elementPassed.clientHeight);
	heightNode = 0;
	heightRects = 0;
	clientRectsIndex = 0;
	//
	if (DoBase) {
		if (heightBase > thisHeight) { thisHeight = heightBase; }
	}
	if (DoOffset) {
		if (heightOffset > thisHeight) { thisHeight = heightOffset; }
	}
	if (DoScroll) {
		if (heightScroll > thisHeight) { thisHeight = heightScroll; }
	}
	//
	if (thisHeight == 0) { thisHeight = heightClient; }
	//
	if (thisHeight == 0) {
		// Dom Add:
		// all else failed so use the protype approach...
		var bodyTempContainer = document.getElementById('BodyTempContainer');
		bodyTempContainer.appendChild(elementPassed.cloneNode(true));
		heightNode = bodyTempContainer.childNodes[0].offsetHeight;
		bodyTempContainer.removeChild(bodyTempContainer.childNodes[0]);
		if (heightNode > thisHeight) { thisHeight = heightNode; }
		//
		// Bounding Rect:
		// Or this approach...
		if (!browserIsIE) {
			// if (elementPassed.getClientRects) {
			var clientRects = elementPassed.getClientRects();
			if (clientRects != null) {
				while (clientRectsIndex < clientRects.length) {
					heightRects = clientRects[clientRectsIndex].top - clientRects[clientRectsIndex].bottom;
					clientRectsIndex++;
				}
				if (heightRects > thisHeight) { thisHeight = heightRects; }
			}
			// }
		}
	}
	//
	// Minimum or default
	// Default height not appropriate here
	// if (thisHeight = 0) { thisHeight = elHeightDefault; }
	// Maximum
	if (thisHeight > 10000) {
		// ERROR
		thisHeight = 10000;
	}
	return thisHeight;
}
//
// ..................................................................................... _//
// ...................................... //
// Layout Height Note
function ElementLayoutHeightNote(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault) {
	// From: http://stackoverflow.com/questions/526347/css-javascript-how-do-you-get-the-rendered-height-of-an-element
	//
	// If you need to calculate something but not show it, set the element to visibility:hidden and position:absolute,
	// 		add it to the DOM tree, get the offsetHeight, and remove it.
	// 		(That's what the prototype library does behind the lines last time I checked).
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Console function (s)
// ..................................................................................... _//
// ...................................... //
// Body ViewToggle - Console
function ConsoleToggle(true, ConsoleBlockPassed) {
	var checkBoxSize = false;
	var checkNoVisibleDebug = false;
	var checkNoVisibleConsole = false;
	var checkLogMode = false;
	var checkLogModeSeeEvents = false;
	var checkLogModeSeeErrors = false;
	var boxStyleSaved = '';
	//
	switch (ConsoleBlockPassed) {
		//
		case 'ConsoleMouseOver':
			if (UseLogAnimation) {
				UseLogAnimation = false;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Mouse Over Menus is OFF',
					'ConsoleToggle', 8307, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleMouseOverToggle.style.borderColor = ButtonIsOffColor;
			} else {
				UseLogAnimation = true;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Mouse Over Menus is ON',
					'ConsoleToggle', 8314, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleMouseOverToggle.style.borderColor = ButtonIsOnColor;
			}
			//
			break;
		//
		case 'ConsoleError':
			if (consoleBox.style.display != 'block') {
				boxStyleSaved = consoleErrorBox.style.display;
				ConsoleToggle(true, 'ConsoleAll');
				consoleErrorBox.style.display = boxStyleSaved;
			} else {
				if (consoleErrorBox.style.display != 'block') {
					consoleErrorBox.style.display = 'block';
					consoleErrorToggle.style.borderColor = ButtonIsOnColor;
				} else {
					consoleErrorBox.style.display = 'none';
					consoleErrorToggle.style.borderColor = ButtonIsOffColor;
				}
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleEvent':
			if (consoleBox.style.display != 'block') {
				boxStyleSaved = consoleEventBox.style.display;
				ConsoleToggle(true, 'ConsoleAll');
				consoleEventBox.style.display = boxStyleSaved;
			} else {
				if (consoleEventBox.style.display != 'block') {
					consoleEventBox.style.display = 'block';
					consoleEventToggle.style.borderColor = ButtonIsOnColor;
					consoleErrorBox.style.width = '31%';
				} else {
					consoleEventBox.style.display = 'none';
					consoleEventToggle.style.borderColor = ButtonIsOffColor;
					consoleErrorBox.style.width = '66%';
				}
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleState':
			if (consoleBox.style.display != 'block') {
				if (loadFirstDebugState) { FormElementSync(); }
				boxStyleSaved = consoleStateBox.style.display;
				ConsoleToggle(true, 'ConsoleAll');
				consoleStateBox.style.display = boxStyleSaved;
			} else {
				if (consoleStateBox.style.display != 'block') {
					consoleStateBox.style.display = 'block';
					consoleStateTextBox.style.display = 'block';
					consoleStateToggle.style.borderColor = ButtonIsOnColor;
				} else {
					consoleStateBox.style.display = 'none';
					consoleStateTextBox.style.display = 'none';
					consoleStateToggle.style.borderColor = ButtonIsOffColor;
				}
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleTest':
			if (consoleBox.style.display != 'block') {
				boxStyleSaved = consoleTestBox.style.display;
				ConsoleToggle(true, 'ConsoleAll');
				consoleTestBox.style.display = boxStyleSaved;
			}
			//
			if (consoleTestBox.style.display != 'block') {
				consoleTestBox.style.display = 'block';
				consoleTestTextBox.style.display = 'block';
				consoleTestToggle.style.borderColor = ButtonIsOnColor;
			}
			// execute test
			MessageLog(DoNotUseDebug, DoNotUseSingleLine,
				'This is a test message for checking the console display...',
				'ConsoleToggle', 8225, consoleTestBox, consoleTestBox,
				errorSevere, errorDoDisplayTag, DoUseAlert);
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleClear':
			consoleErrorTextBox.innerHTML = '';
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				'Error and Log Console has been cleared...',
				'ConsoleToggle', 8235, null, null,
				messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
			//
			consoleClearToggle.style.backgroundColor = '';
			consoleClearToggle.style.color = '';
			consoleClearToggle.style.borderColor = '';
			errorSeverityHighest = 0;
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		// ..................................................................................... _//
		//
		case 'ConsoleDebug':
			if (consoleDebugMainToggles.style.display != 'block') {
				UseLogTimerMove = true;
				consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
				UseLogTimerTransition = true;
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
				UseLogTimerDetail = true;
				consoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
				UseDebugOnAll = true;
				consoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
				UseDebugOnError = true;
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
				// UseDebugOnError = true;
				// consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
				UseLogEvents = true;
				consoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
				//
				ConsoleShow(DoNotUseHide, DoUseDebug);
				//
				if (consoleBox.style.display != 'block') {
					ConsoleToggle(true, 'ConsoleAll');
				}
				//
				if (UseDebugOnAll || UseDebugOnError) { UseDebugOnError = true; } else { UseDebugOnError = false; }
				if (UseLogTimerMove || UseLogTimerTransition) { UseLogTimer = true; } else { UseLogTimer = false; }
				//
				checkLogMode = true;
				checkLogModeSeeErrors = true;
				checkLogModeSeeEvents = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				checkNoVisibleDebug = true;
				//
			} else {
				//
				UseLogTimerMove = false;
				consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				UseLogTimerTransition = false;
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
				UseLogTimerDetail = false;
				consoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
				UseDebugOnAll = false;
				consoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
				UseDebugOnError = false;
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
				// UseDebugOnError = false;
				// consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				UseLogEvents = false;
				consoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
				//
				ConsoleShow(DoUseHide, DoUseDebug);
				// consoleDebugToggles.style.display = 'none';
				consoleDebugToggle.style.borderColor = ButtonIsOffColor;
				BodyConsoleDebugButtons = false;
			}
			break;
		//
		case 'ConsoleDebugMove':
			if (UseLogTimerMove) {
				UseLogTimerMove = false;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug Move is OFF',
					'ConsoleToggle', 8307, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
			} else {
				UseLogTimerMove = true;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug Move is ON',
					'ConsoleToggle', 8314, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			if (UseLogTimerMove || UseLogTimerTransition) { UseLogTimer = true; } else { UseLogTimer = false; }
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugTransition':
			if (UseLogTimerTransition) {
				UseLogTimerTransition = false;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug Transition is OFF',
					'ConsoleToggle', 8331, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
			} else {
				UseLogTimerTransition = true;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug Transition is ON',
					'ConsoleToggle', 8338, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			if (UseLogTimerMove || UseLogTimerTransition) { UseLogTimer = true; } else { UseLogTimer = false; }
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugDetail':
			if (UseLogTimerDetail) {
				UseLogTimerDetail = false;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug Detail is OFF',
					'ConsoleToggle', 8355, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
			} else {
				UseLogTimerDetail = true;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug Detail is ON',
					'ConsoleToggle', 8362, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugOnError':
			if (UseDebugOnError) {
				UseDebugOnError = false;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug On Error in debugger is OFF',
					'ConsoleToggle', 8377, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
			} else {
				UseDebugOnError = true;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug On Error in debugger is ON',
					'ConsoleToggle', 8384, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			checkLogModeSeeEvents = false;
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugAll':
			if (UseDebugOnAll) {
				UseDebugOnAll = false;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug All messages in debugger is OFF',
					'ConsoleToggle', 8399, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
			} else {
				UseDebugOnAll = true;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug All messages in debugger is ON',
					'ConsoleToggle', 8406, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				if (!UseDebugOnError) { ConsoleToggle(true, 'ConsoleDebugOnError'); }
				consoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			checkLogModeSeeEvents = false;
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugEvents':
			if (UseLogEvents) {
				UseLogEvents = false;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug (Mouse) Events is OFF',
					'ConsoleToggle', 8423, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
			} else {
				UseLogEvents = true;
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					'Debug (Mouse) Events is ON',
					'ConsoleToggle', 8430, null, null,
					messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
				consoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			checkLogModeSeeEvents = true;
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		default:
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
	}
	// ..................................................................................... _//
	//
	if (checkLogMode) {
		if (checkLogModeSeeErrors) {
			if (consoleErrorBox.style.display != 'block') { ConsoleToggle(true, 'ConsoleError'); }
		} else {
			// if (consoleErrorBox.style.display == 'block') { ConsoleToggle(true, 'ConsoleError'); }
		}
		if (checkLogModeSeeEvents) {
			if (consoleEventBox.style.display != 'block') { ConsoleToggle(true, 'ConsoleEvent'); }
		} else {
			// if (consoleEventBox.style.display == 'block') { ConsoleToggle(true, 'ConsoleEvent'); }
		}
		if (consoleStateBox.style.display == 'block') { ConsoleToggle(true, 'ConsoleState'); }
	}
	//
	// Check if any Console Box settings are on or content is visible
	if (checkNoVisibleConsole) {
		if (consoleErrorBox.style.display != 'block'
			&& consoleEventBox.style.display != 'block'
			&& consoleStateBox.style.display != 'block'
		) {
			consoleBox.style.display = 'none';
			ConsoleShow(DoUseHide, DoNotUseDebug);
			checkBoxSize = false;
		} else {
			ConsoleShow(DoNotUseHide, DoNotUseDebug);
		}
		//
	}
	// Check if any Debugs settings are on or content is visible
	if (checkNoVisibleDebug) {
		if (consoleDebugToggles.style.display != 'block'
			&& !UseLogTimerMove
			&& !UseLogTimerTransition
			&& !UseLogTimerDetail
			&& !UseDebugOnError
			&& !UseDebugOnAll
			&& !UseLogEvents
		) {
			// 			&& !UseDebugOnError
			ConsoleShow(DoUseHide,DoUseDebug);
			checkBoxSize = false;
		} else {
			ConsoleShow(DoNotUseHide,DoUseDebug);
		}
	}
	//
	switch (ConsoleBlockPassed) {
		case 'ConsoleAll':
			checkBoxSize = true;
			// Toggle Test 1 - Buttons Visible
			if (BodyConsoleBoxButtons) {
				if (consoleBox.style.display != 'block') {
					//
					if (loadFirstDebugState) { FormElementSync(); }
					//
					// consoleTop.style.display = 'block';
					//
					consoleBox.style.display = 'block';
					//
					ConsoleShow(DoNotUseHide, DoNotUseDebug);
					//
					if (consoleErrorBox.style.display != 'block'
						&& consoleEventBox.style.display != 'block'
						&& consoleStateBox.style.display != 'block') {
						consoleErrorBox.style.display = 'block';
						consoleEventBox.style.display = 'block';
						consoleStateBox.style.display = 'block';
						consoleStateTextBox.style.display = 'block';
						consoleStateTextBox.style.display = 'block';
						consoleTestBox.style.display = 'block';
						consoleTestTextBox.style.display = 'block';
						consoleTestToggle.style.display = 'block';
						consoleClearToggle.style.display = 'block';
					}
					//
					if (consoleErrorBox.style.display == 'block') {
						consoleErrorToggle.style.borderColor = ButtonIsOnColor;
					} else { consoleErrorToggle.style.borderColor = ButtonIsOffColor; }
					//
					if (consoleEventBox.style.display == 'block') {
						consoleEventToggle.style.borderColor = ButtonIsOnColor;
					} else { consoleEventToggle.style.borderColor = ButtonIsOffColor; }
					//
					if (consoleStateBox.style.display == 'block') {
						consoleStateToggle.style.borderColor = ButtonIsOnColor;
					} else { consoleStateToggle.style.borderColor = ButtonIsOffColor; }
					//
					// Toggle Test 2 - Display Not Window Visible
				} else if (consoleBox.style.display == 'block') {
					// consoleTop.style.display = 'none';
					//
					consoleBox.style.display = 'none';
					//
					ConsoleShow(DoUseHide, DoNotUseDebug);
					//
				}
				//
				// Toggle Test 2 - Display Window Visible
			} else {
				//
				consoleBox.style.display = 'block';
				//
				ConsoleShow(DoNotUseHide, DoNotUseDebug);
			}
		default:
			break;
	}
	//
	// if (consoleStateBox.style.display == 'block') {
	// 	// State visible
	// 	if (consoleErrorBox.style.display != 'block') {
	// 		// State visible, no Error visible
	// 		if (consoleEventBox.style.display != 'block') {
	// 			// State visible, no Error & Event visible
	// 			consoleStateBox.style.left = '2%';
	// 			consoleStateBox.style.width = '97%';
	// 		} else {
	// 			// State & Event, no Error visible
	// 			consoleEventBox.style.left = '2%';
	// 			consoleEventBox.style.width = '31%';
	// 			//
	// 			consoleStateBox.style.left = '35%';
	// 			consoleStateBox.style.width = '66%';
	// 		}
	// 	} else {
	// 		// State & Error visible
	// 		if (consoleEventBox.style.display != 'block') {
	// 			// State & Error visible, no Event visible
	// 			consoleErrorBox.style.left = '2%';
	// 			consoleErrorBox.style.width = '66%';
	// 			//
	// 			consoleStateBox.style.left = '68%';
	// 			consoleStateBox.style.width = '31%';
	// 			//
	// 		} else {
	// 			// State, Error & Event visible
	// 			consoleErrorBox.style.left = '2%';
	// 			consoleErrorBox.style.width = '31%';
	// 			//
	// 			consoleEventBox.style.left = '35%';
	// 			consoleEventBox.style.width = '31%';
	// 			//
	// 			consoleStateBox.style.left = '68%';
	// 			consoleStateBox.style.width = '31%';
	// 		}
	// 	}
	// } else {
	// 	// State not visible
	// 	if (consoleErrorBox.style.display != 'block') {
	// 		// no State & Error visible
	// 		if (consoleEventBox.style.display != 'block') {
	// 			// nothing visible, no State, Error & Event visible
	// 		} else {
	// 			// Event visible, no State & Error visible
	// 			consoleEventBox.style.left = '2%';
	// 			consoleEventBox.style.width = '97%';
	// 		}
	// 	} else {
	// 		// Error visible, no State visible
	// 		if (consoleEventBox.style.display != 'block') {
	// 			// Error visible, no State & Event visible
	// 			consoleErrorBox.style.left = '2%';
	// 			consoleErrorBox.style.width = '97%';
	// 		} else {
	// 			// Error & Event visible, no State visible
	// 			consoleErrorBox.style.left = '2%';
	// 			consoleErrorBox.style.width = '46%';
	// 			//
	// 			consoleEventBox.style.left = '52%';
	// 			consoleEventBox.style.width = '46%';
	// 			//
	// 		}
	// 	}
	// }
}
//
// ..................................................................................... _//
// ...................................... //
// Body ViewToggle - Console
function ConsoleShow(DoHide, errorDoDebug) {
	//............................................................---//
	// Body Element Creation
	if (loadFirstJava) { ElementObjectCreate(); }
	//............................................................---//
	//
	if (errorDoDebug) {
		// Process Console Box Action
		if (DoHide) {
			BodyConsoleDebugButtons = false;
			// BodyConsoleDebugToggles.style.display = 'none';
			consoleDebugMainToggles.style.display = 'none';
			consoleDebugTypesToggles.style.display = 'none';
		} else {
			BodyConsoleDebugButtons = true;
			// BodyConsoleDebugToggles.style.display = 'block';
			consoleDebugMainToggles.style.display = 'block';
			consoleDebugTypesToggles.style.display = 'block';
		}
		if (consoleDebugToggles.style.display != 'block'
			&& !UseLogTimerMove
			&& !UseLogTimerTransition
			&& !UseLogTimerDetail
			&& !UseDebugOnError
			&& !UseDebugOnAll
			&& !UseLogEvents
		) {
			// 			&& !UseDebugOnError
			consoleDebugToggle.style.borderColor = ButtonIsOffColor;
		} else {
			consoleDebugToggle.style.borderColor = ButtonIsOnColor;
		}
	} else {
		//
		// Process Console Box Action
		if (DoHide) {
			BodyConsoleBoxButtons = false;
			UseLogToggles.style.display = 'none';
			consoleAuxillaryToggles.style.display = 'none';
		} else {
			BodyConsoleBoxButtons = true;
			UseLogToggles.style.display = 'block';
			consoleAuxillaryToggles.style.display = 'block';
		}
		if (consoleBox.style.display != 'block'
		) {
			/*
			&& consoleErrorBox.style.display != 'block'
			&& consoleEventBox.style.display != 'block'
			&& consoleStateBox.style.display != 'block'
		*/
			consoleToggle.style.borderColor = ButtonIsOffColor;
		} else {
			consoleToggle.style.borderColor = ButtonIsOnColor;
		}
		//
	}
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Layout Management function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// Body ViewToggle - Layout Next
function LayoutFontSize(zoomCommandPassed) {
	switch (zoomCommandPassed) {
		case 'BodyFontZoomIn':
			break;
		case 'BodyFontZoomIn':
			break;
		case 'Toggle':
		default:
			break;
	}
}
//
// ..................................................................................... _//
// ...................................... //
// Body ViewToggle - Layout Next
function LayoutNext(layoutIndexPassed) {
	if (layoutIndexPassed > 0) {
		layoutRefreshCn = layoutIndexPassed;
	} else {
		layoutRefreshCn += 1;
	}
	if (layoutRefreshCn > layoutIndexMax) { layoutRefreshCn = 1; }
	LayoutRefresh(layoutRefreshCn);
}
//
// ..................................................................................... _//
// ...................................... //
// Check Layout
function LayoutCheck(layoutPrefered) {
	return;
}
//
// ..................................................................................... _//
// ...................................... //
// Layout Refresh
function LayoutRefresh(layoutIndexPassed) {
	if (layoutIndexPassed != layoutRefreshCnLast) {
		// Choose Standard Layout
		layoutIndex = layoutIndexPassed;
		LayoutSelectByIndex(layoutIndex);
		layoutRefreshCnLast = layoutRefreshCn;
	}
}
//
// ..................................................................................... _//
// Body Layout Selection
// ...................................... //
function LayoutSelectByIndex(layoutIndexPassed) {
	//
	// Layouts:
	// var layoutStandard = 1;
	// var layoutReadingMode = 2;
	// var layoutWindowed = 3;
	// var layoutReadingModeLeft = 4;
	//
	// Pointers:
	layoutIndex = layoutIndexPassed;
	layoutZindex = 20;
	//
	// Window Width
	WindowClientWidth();
	// layoutMenuSizeHorzMax = 0;
	if (browserIsFF) {
		// debug-instance-off LayoutSelectByIndex;
	}
	//
	var elementLayoutFirstPhatomData;
	var boxHeight;
	//
	// layoutWidth -= 20;
	// layoutHeight -= 20;
	//
	//............................................................---//
	// Load Element for first pass
	//............................................................---//
	if (bodyFirst) {
		//............................................................---//
		//      Body Element Creation
		if (loadFirstJava) { ElementObjectCreate(); }
		//............................................................---//
		//      Body Main Container (contains Left Center and Right
		if (!bodyMainContainer) { bodyMainContainer = document.getElementById('BodyMainContainer'); }
		// Body Container
		//............................................................---//
		//			    Menu at Left
		// bodyMainLeftOrig.innerHTML = bodyMainLeft.innerHTML;
		bodyMainLeftOrig = ElementCopy(bodyMainLeftOrig, bodyMainLeftOrigFirst, bodyMainLeft, 'none');
		bodyMainLeftOrigFirst = false;
		//............................................................---//
		//			    Menu at Right
		// bodyMainLeftOrig.innerHTML = bodyMainRight.innerHTML;
		bodyMainRightOrig = ElementCopy(bodyMainRightOrig, bodyMainRightOrigFirst, bodyMainRight, 'none');
		bodyMainRightOrigFirst = false;
		//............................................................---//
		// 	 		 Banner at Center Bottom
		bodyBanner = ElementGetRefFromElement(bodyBanner, 'BodyBanner', 'BodyBanner', bodyMainCenterTop);
		bodyBannerTop = ElementGetRefFromElement(bodyBannerTop, 'BodyBannerTop', 'BodyBannerTop', bodyMainCenterTop);
		bodyBannerBottom = ElementGetRefFromElement(bodyBannerBottom, 'BodyBannerBottom', 'BodyBannerBottom', bodyMainCenterBottom);
		bodyBannerBottom = ElementCopy(bodyBannerBottom, bodyBannerBottomFirst, bodyBanner, 'block');
		bodyBannerBottomFirst = false;
		//
		//............................................................---//
		//  BodyMain Center Center ColBreak
		bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterCenter, 'BodyMainCenterCenterColBreak', elementLayoutFirstPhatomData = true, 'block', 'visible', 'both')
		//
	}
	//
	//
	//............................................................---//
	//............................................................---//
	switch (layoutIndexPassed) {
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// 1 Standard
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		case layoutStandard:
			//............................................................---//
			// Enclose Box
			if (BodyMainCenterTopClass.length) {
				bodyMainCenterTop.className = BodyMainCenterTopClass;
			}
			//............................................................---//
			// Final adjustments to Center Top
			boxHeight = 0;
			//............................................................---//
			// bodyViewToggle View Toggle and Message Area
			//
			// Box
			boxHeight += bodyViewToggleContainer.scrollHeight;
			// Banner Should be zero, don't use..,
			bodyBannerTop.style.display = 'block';
			boxHeight += bodyBannerTop.scrollHeight;
			//
			bodyTitleTopLeft = ElementGetRefFromElement(bodyTitleTopLeft, 'TitleTopLeft', 'TitleTopLeft', bodyMainCenterTop);
			boxHeight += bodyTitleTopLeft.scrollHeight;
			//
			bodyMainCenterTopColBreak = ElementGetRefFromElement(bodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak', bodyMainCenterTop);
			boxHeight += bodyMainCenterTopColBreak.scrollHeight;
			//
			// BodyViewToggle + Banner + Left/Right
			// bodyMainCenterTop.style.height = boxHeight;
			bodyMainCenterTop.style.height = 'auto';
			//............................................................---//
			//			 Menu1 at Left
			bodyMainLeft.style.width = '20%';
			// bodyMainLeft.style.height = 'auto';
			//............................................................---//
			//			 Body Center 'BodyMainCenter'
			if (layoutUseAbsolute) { bodyMainCenter.style.left = '20%'; } // 0.20 * layoutWidth + 3;
			bodyMainCenter.style.width = '60%';//0.60 * layoutWidth - 6;
			// bodyMainCenter.style.height = '100%';
			// bodyMainCenter.style.height = '100%';
			//
			layoutZindex += 1;
			bodyMainCenter.style.zIndex = layoutZindex;
			//
			bodyMainCenterCenter.style.top = 0;
			//............................................................---//
			//			 Menu2 at Right
			if (layoutUseAbsolute) { bodyMainRight.style.left = '80%'; }
			bodyMainRight.style.width = '20%';
			// bodyMainRight.style.height = 'auto';
			//............................................................---//
			// 	 		 Banner at Top 'BodyBanner'
			//............................................................---//
			// 	 		 Final adjustments
			// this code should also adjust oversided views
			/* --
			bodyMainContainer.style.height = layoutHeight;
			if (bodyMainContainer.style.height < ElementHeightMaxGet(true, true, bodyMainLeft)) {
				 bodyMainContainer.style.height = ElementHeightMaxGet(true, true, bodyMainLeft);
		  }
		  if (bodyMainContainer.style.height < ElementHeightMaxGet(true, true, bodyMainCenter)) {
				 bodyMainContainer.style.height = ElementHeightMaxGet(true, true, bodyMainCenter);
		  }
		  if (bodyMainContainer.style.height < ElementHeightMaxGet(true, true, bodyMainRight)) {
				 bodyMainContainer.style.height = ElementHeightMaxGet(true, true, bodyMainRight);
		  }
		  -- */
			// bodyMainContainer.style.height = 'auto';
			//............................................................---//
			// Area Displays
			bodyBanner.style.display = 'block';
			bodyBannerBottom.style.display = 'none';
			bodyBannerTop.style.display = 'block';
			// bodyViewToggle View Toggle and Message Area
			// bodyViewToggleContainer.style.display = 'none';
			bodyViewToggleContainerLeft.style.display = 'block';
			bodyViewToggleContainerCenter.style.display = 'none';
			//
			// Console
			//
			bodyMainLeft.style.display = 'block';
			bodyMainCenter.style.display = 'block';
			bodyMainRight.style.display = 'block';
			// bodyMainRightFar.style.display = 'none';
			bodyMainCenterTop.style.display = 'block';
			bodyMainCenterTopLeft.style.display = 'none';
			bodyMainCenterTopRight.style.display = 'none';
			bodyMainCenterCenter.style.display = 'block';
			bodyMainCenterBottom.style.display = 'none';
			//............................................................---//
			//
			layoutStandardFirst = false;
			//
			break;
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// 2 Reading Mode Hide
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		case layoutReadingMode:
			//............................................................---//
			//			 Body Center
			// Break between center top and center center
			// if (layoutUseAbsolute) { bodyMainCenter.style.left = '0%'; }
			// bodyMainCenter.style.top = '0%';
			// bodyMainCenter.style.width = '100%';
			// bodyMainCenter.style.height = '100%';
			//............................................................---//
			//			 Hidden Menu1 at Left
			// Center Top Left Area Columns
			//............................................................---//
			//			 Hidden Menu2 at Right
			// Center Top Right Area Columns
			//............................................................---//
			// Area Displays
			//............................................................---//
			// Hidden Banner at Bottom
			if (!layoutReadingModeFirst) {
				bodyBannerBottom = ElementCopy(bodyBannerBottom, bodyBannerBottomFirst, bodyBanner, 'block');
				bodyBannerBottomFirst = false;
			}
			//
			bodyBanner.style.display = 'block';
			bodyBannerBottom.style.display = 'block';
			bodyBannerTop.style.display = 'none';
			//
			//............................................................---//
			// bodyViewToggle View Toggle and Message Area
			// bodyViewToggleContainer.style.display = 'none';
			bodyViewToggleContainerLeft.style.display = 'none';
			bodyViewToggleContainerCenter.style.display = 'block';
			//
			// Console
			//
			// Left, Center, and Right
			bodyMainLeft.style.display = 'none';
			bodyMainCenter.style.display = 'block';
			bodyMainRight.style.display = 'none';
			// bodyMainRightFar.style.display = 'none';
			//
			// Center Top
			bodyMainCenterTop.style.display = 'block';
			bodyMainCenterTopLeft.style.display = 'none';
			bodyMainCenterTopRight.style.display = 'none';
			// Center Center
			bodyMainCenterCenter.style.display = 'block';
			// Center Bottom
			bodyMainCenterBottom.style.display = 'block';
			//............................................................---//
			//
			layoutReadingModeFirst = false;
			//
			break;
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// 3 Windowed
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		case layoutWindowed:
			//
			//............................................................---//
			//			 Menu1 at Center Top Left
			if (layoutWindowedFirst) {
				//
				var TopLeftWidth = 0;
				var TopLeftWidthInner = 0;
				// BodyMenuLayout
				//............................................................---//
				// bodyLayoutMenu1 BodyMenuLayout
				if (false == true) {
					if (!elbodyLayoutMenu1 && bodyMainCenterTopLeft) {
						bodyLayoutMenu1 = ElementGetRefFromElement(bodyLayoutMenu1, 'BodyMenuLayout1', 'BodyMenuLayout1', bodyMainCenterTopLeft);
					}
					//
					TopLeftWidth = bodyLayoutMenu1.style.posWidth;
					if (TopLeftWidth == 0) { TopLeftWidth = layoutWidth / 2; }
					TopLeftWidthInner = TopLeftWidth;
				}
				//
				// Process Left Column
				//
				// bodyMainLeft.innerHTML = bodyMainLeftOrig.innerHTML
				bodyMainLeftCopy = ElementCopy(bodyMainLeft, bodyMainLeftFirst, bodyMainLeftOrig, 'block');
				bodyMainLeftFirst = false;
				//
				// bodyMainRight.innerHTML = bodyMainLeftOrig.innerHTML
				bodyMainRightCopy = ElementCopy(bodyMainRight, bodyMainRightFirst, bodyMainRightOrig, 'block');
				bodyMainRightFirst = false;
				// end of layoutWindowFirst
			}
			//
			//............................................................---//
			// Left Menu Column
			// Center Top Left Area Columns
			//
			//............................................................---//
			// Enclose Box
			if (!BodyMainCenterTopClass.length) { BodyMainCenterTopClass = bodyMainCenterTop.className; }
			bodyMainCenterTop.className = bodyMainCenterTop.className + ' CalloutBoxBg CalloutBorderFull';
			bodyMainCenterTop.width = '100%';
			//
			// if (true = true) {
			if (layoutWindowedFirst) {
				//............................................................---//
				// Set Center Top Left Element
				// MainCenterTopLeft is a Reference pointer into the page
				// that has MainLeft HTML copied into it.
				bodyMainCenterTopLeft = ElementGetRef(bodyMainCenterTopLeft, 'BodyMainCenterTopLeft', 'BodyMainCenterTopLeft');
				bodyMainCenterTopLeft = ElementCopy(bodyMainCenterTopLeft, bodyMainCenterTopLeftFirst, bodyMainLeftOrig, 'block');
				bodyMainCenterTopLeftFirst = false;
				//............................................................---//
				// Enclose Box
				bodyMainCenterTopLeft.className = bodyMainCenterTopLeft.className + ' CalloutBorderFull';
				//............................................................---//
				// Left Menu Container
				//............................................................---//
				// Left Body Column (BodyMainLeft)
				//............................................................---//
				// bodyLayoutMenu1 BodyMenuLayout
				bodyLayoutMenu1 = ElementGetRefFromElement(bodyLayoutMenu1, 'BodyMenuLayout1', 'BodyMenuLayout1', bodyMainCenterTopLeft);
				//............................................................---//
				// Width of Layout area (previous?)
				//............................................................---//
				// Left Outer and Inner Decorative Divs
				bodyMainLeftOuter = ElementGetRefFromElement(bodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', bodyMainCenterTopLeft);
				bodyMainLeftOuter.style.paddingLeft = '3%';
				bodyMainLeftOuter.style.width = '97%';
				//
				bodyMainLeftInner = ElementGetRefFromElement(bodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', bodyMainCenterTopLeft);
				bodyMainLeftInner.style.paddingRight = '3%';
				bodyMainLeftInner.style.width = '97%';
				bodyMainLeftInner.style.paddingTop = '1.0em';
				//............................................................---//
				//
				// ElementGetFromElement(bodybodyMenuLeft1, 'bodyMenuLeft1', 'bodyMenuLeft1',
				// 		bodyMainCenterTopLeft, DoFindSet, bodybodyMenuLeft1)
				// ElementGetFromElement(bodybodyMenuLeft2, 'bodyMenuLeft2', 'bodyMenuLeft2',
				// 		bodyMainCenterTopLeft, DoFindSet, bodybodyMenuLeft2)
				// ElementGetFromElement(bodybodyMenuLeft3, 'bodyMenuLeft3', 'bodyMenuLeft3',
				// 		bodyMainCenterTopLeft, DoFindSet, bodybodyMenuLeft3)
				//
				//............................................................---//
				// Left bodybodyMenuLeft1, 2, 3
				bodybodyMenuLeft1 = ElementGetRefFromElement(bodybodyMenuLeft1, 'bodyMenuLeft1', 'bodyMenuLeft1', bodyMainCenterTopLeft);
				bodybodyMenuLeft2 = ElementGetRefFromElement(bodybodyMenuLeft2, 'bodyMenuLeft2', 'bodyMenuLeft2', bodyMainCenterTopLeft);
				bodybodyMenuLeft3 = ElementGetRefFromElement(bodybodyMenuLeft3, 'bodyMenuLeft3', 'bodyMenuLeft3', bodyMainCenterTopLeft);
				//
				WindowContainerSizeGetMenu(bodyMainCenterTopLeft);
				//
				//............................................................---//
				// bodybodyMenuLeft1
				bodybodyMenuLeft1.style.position = 'absolute';
				bodybodyMenuLeft1.style.top = ' 0em';
				bodybodyMenuLeft1.style.left = '3%';
				bodybodyMenuLeft1.style.maxWidth = '30%';
				// bodybodyMenuLeft1.style.styleFloat = 'left';
				//
				//............................................................---//
				// bodybodyMenuLeft2
				bodybodyMenuLeft2.style.position = 'absolute';
				bodybodyMenuLeft2.style.top = '1.0em';
				bodybodyMenuLeft2.style.left = '35%';
				bodybodyMenuLeft2.style.maxWidth = '30%';
				// bodybodyMenuLeft2.style.marginLeft = '3%';
				// bodybodyMenuLeft2.style.styleFloat = 'left';
				//............................................................---//
				// bodybodyMenuLeft3
				bodybodyMenuLeft3.style.position = 'absolute';
				bodybodyMenuLeft3.style.top = '1.0em';
				bodybodyMenuLeft3.style.left = '67%';
				bodybodyMenuLeft3.style.maxWidth = '30%';
				// bodybodyMenuLeft3.style.marginLeft = '3%';
				// bodybodyMenuLeft3.style.styleFloat = 'left';
				//............................................................---//
				//
				// ElementGetFromElement(bodybodyMenuLeft1, 'bodyMenuLeft1', 'bodyMenuLeft1',
				// 		bodyMainCenterTopLeft, DoFindSet, bodybodyMenuLeft1)
				// ElementGetFromElement(bodybodyMenuLeft2, 'bodyMenuLeft2', 'bodyMenuLeft2',
				// 		bodyMainCenterTopLeft, DoFindSet, bodybodyMenuLeft2)
				// ElementGetFromElement(bodybodyMenuLeft3, 'bodyMenuLeft3', 'bodyMenuLeft3',
				// 		bodyMainCenterTopLeft, DoFindSet, bodybodyMenuLeft3)
				//
				//............................................................---//
				// elDivC21 Callout Paragraph Contents
				if (true == false) {
					var elDivC21 = ElementGetRefFromElement(elDivC21, 'DivC21', 'DivC21', bodyMainCenterTopLeft);
					if (elDivC21) { elDivC21.style.display = 'none'; }
				}
				//............................................................---//
				// elDivC22 Callout Paragraph Contents
				var elDivC22 = ElementGetRefFromElement(elDivC22, 'DivC22', 'DivC22', bodyMainCenterTopLeft);
				if (elDivC22) { elDivC22.style.display = 'none'; }
				//............................................................---//
				// Left Body Text Alignment Breaks
				bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterTopLeft, 'bodyMenuLeft1ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterTopLeft, 'bodyMenuLeft2ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterTopLeft, 'bodyMenuLeft3ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				// end of layoutWindowFirst
			}
			//
			//............................................................---//
			//			 Menu2 at Center Top Right
			// Right Menu Column
			// Center Top Right Area Columns
			// if (true == true) {
			if (layoutWindowedFirst) {
				// Right Body Text Alignment Breaks
				// Set (Copy To) Top Left Element
				bodyMainCenterTopRight = ElementGetRef(bodyMainCenterTopRight, 'BodyMainCenterTopRight', 'BodyMainCenterTopRight');
				bodyMainCenterTopRight = ElementCopy(bodyMainCenterTopRight, bodyMainCenterTopRightFirst, bodyMainRightOrig, 'block');
				//............................................................---//
				// Enclose Box
				bodyMainCenterTopRight.className = bodyMainCenterTopRight.className + ' CalloutBorderFull';
				//............................................................---//
				// bodyLayoutMenu2 BodyMenuLayout
				bodyLayoutMenu2 = ElementGetRefFromElement(bodyLayoutMenu1, 'BodyMenuLayout2', 'BodyMenuLayout2', bodyMainCenterTopRight);
				//............................................................---//
				// Right Outer and Inner Decorative Divs
				bodyMainRightOuter = ElementGetRefFromElement(bodyMainLeftOuter, 'BodyMainRightOuter', 'BodyMainRightOuter', bodyMainCenterTopRight);
				bodyMainLeftOuter.style.paddingLeft = '3%';
				bodyMainLeftOuter.style.width = '97%';
				//
				bodyMainRightInner = ElementGetRefFromElement(bodyMainRightInner, 'BodyMainRightInner', 'BodyMainRightInner', bodyMainCenterTopRight);
				bodyMainRightInner.style.paddingRight = '3%';
				bodyMainRightInner.style.width = '97%';
				bodyMainRightInner.style.paddingTop = '1.0em';
				//............................................................---//
				var elementHeight = 0;
				layoutMenuSizeHorzMax = 0;
				// Right bodybodyMenuRight1, 2, 3
				bodybodyMenuRight1 = ElementGetRefFromElement(bodybodyMenuRight1, 'bodyMenuRight1', 'bodyMenuRight1', bodyMainCenterTopRight);
				bodybodyMenuRight2 = ElementGetRefFromElement(bodybodyMenuRight2, 'bodyMenuRight2', 'bodyMenuRight2', bodyMainCenterTopRight);
				bodybodyMenuRight3 = ElementGetRefFromElement(bodybodyMenuRight3, 'bodyMenuRight3', 'bodyMenuRight3', bodyMainCenterTopRight);
				//............................................................---//
				// bodybodyMenuRight1
				bodybodyMenuRight1.style.position = 'absolute';
				bodybodyMenuRight1.style.top = '1.0em';
				bodybodyMenuRight1.style.left = '3%';
				bodybodyMenuRight1.style.maxWidth = '30%';
				// bodybodyMenuRight1.style.styleFloat = 'left';
				elementHeight = ElementHeightMaxGet(true, true, bodybodyMenuRight1);
				if (layoutMenuSizeHorzMax < elementHeight) { layoutMenuSizeHorzMax = elementHeight; }
				//............................................................---//
				// bodybodyMenuRight2
				bodybodyMenuRight2.style.position = 'absolute';
				bodybodyMenuRight2.style.top = '1.0em';
				bodybodyMenuRight2.style.left = '35%';
				bodybodyMenuRight2.style.maxWidth = '30%';
				// bodybodyMenuRight2.style.marginLeft = '3%';
				// bodybodyMenuRight2.style.styleFloat = 'left';
				elementHeight = ElementHeightMaxGet(true, true, bodybodyMenuRight2);
				if (layoutMenuSizeHorzMax < elementHeight) { layoutMenuSizeHorzMax = elementHeight; }
				//............................................................---//
				// bodybodyMenuLeft3
				bodybodyMenuRight3.style.position = 'absolute';
				bodybodyMenuRight3.style.top = '1.0em';
				bodybodyMenuRight3.style.left = '67%';
				bodybodyMenuRight3.style.maxWidth = '30%';
				// bodybodyMenuRight3.style.marginLeft = '3%';
				// bodybodyMenuRight3.style.styleFloat = 'left';
				elementHeight = ElementHeightMaxGet(true, true, bodybodyMenuRight3);
				if (layoutMenuSizeHorzMax < elementHeight) { layoutMenuSizeHorzMax = elementHeight; }
				//............................................................---//
				// Column and Float Breaks and Clear
				bodyMainCenterTopRight = ElementBreakSet(bodyMainCenterTopRight, 'bodyMenuRight1ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				bodyMainCenterTopRight = ElementBreakSet(bodyMainCenterTopRight, 'bodyMenuRight2ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				bodyMainCenterTopRight = ElementBreakSet(bodyMainCenterTopRight, 'bodyMenuRight3ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				// end of layoutWindowFirst
			}
			//............................................................---//
			// Final adjustments to Center Top
			// BodyViewToggle + Banner + Left/Right
			boxHeight = 0;
			//
			// bodyViewToggle View Toggle and Message Area
			bodyViewToggleContainerCenter.style.display = 'none';
			//
			boxHeight += ElementHeightMaxGet(true, true, bodyViewToggleContainer);
			// Banner Should be zero, don't use..,
			boxHeight += ElementHeightMaxGet(true, true, bodyBannerTop);
			//
			// Height of left and right menu containers
			// WindowContainerSizeGetAll();
			//
			// if (bodyLayoutMenu2Height > bodyLayoutMenu1Height)  {
			// bodyLayoutMenu1.style.height = bodyLayoutMenu2Height + 'px';
			// } else {
			// bodyLayoutMenu2.style.height = bodyLayoutMenu1Height + 'px';
			// }
			// Set Left and Right Container Heights
			// bodyMainCenterTopLeft.style.height = (ElementHeightMaxGet(true, true, bodyLayoutMenu1) + 20) + 'px';
			// bodyMainCenterTopRight.style.height = (ElementHeightMaxGet(true, true, bodyLayoutMenu2) + 20) + 'px';
			//
			if (layoutMenuSizeHorzMax < 50) {
				// ERROR HERE //
				//
				var X; var Y;
				X = ElementHeightMaxGet(true, true, bodybodyMenuLeft1);
				X += boxHeight;
				Y = ElementHeightMaxGet(true, true, bodybodyMenuRight1);
				if (X > Y) { layoutMenuSizeHorzMax = X; } else { layoutMenuSizeHorzMax = Y; }
				//
				X = ElementHeightMaxGet(true, true, bodyMainCenterTopLeft);
				Y = ElementHeightMaxGet(true, true, bodyMainCenterTopRight);
				if (X > Y) { boxHeight = X; } else { boxHeight = Y; }
				// boxHeight += ElementHeightMaxGet(true, true, BodyViewToggleContainerCenter);
				// boxHeight += ElementHeightMaxGet(true, true, bodyMainCenterTopColBreak);
			}
			// Set Left and Right Container Heights
			bodyMainCenterTopLeft.style.height = (layoutMenuSizeHorzMax + 50) + 'px';
			// bodyMainCenterTopLeft.style.height = '100%';
			// bodyMainCenterTopLeft.style.height = 'auto';
			bodyMainCenterTopRight.style.height = (layoutMenuSizeHorzMax + 50) + 'px';
			// bodyMainCenterTopRight.style.height = '100%';
			//
			bodyMainCenterTopColBreak = ElementGetRefFromElement(bodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak', bodyMainCenterTop);
			//
			bodyMainCenterTop.style.height = (layoutMenuSizeHorzMax + 75) + 'px';// boxHeight
			// bodyMainCenterTop.style.height = '100%';
			//
			//............................................................---//
			bodyMainCenterCenter.style.top = (layoutMenuSizeHorzMax + 100) + 'px';// adjust by boxHeight
			//
			//
			//............................................................---//
			//			 Body Center Columns
			if (layoutWindowedFirst) {
				// BodyMainCenter
				bodyMainCenter.style.width = '100%';
				// Center Center
			}
			//
			//............................................................---//
			// 	 		 Final adjustments
			//............................................................---//
			// Area Displays
			bodyBanner.style.display = 'block';
			bodyBannerBottom.style.display = 'block';
			bodyBannerTop.style.display = 'none';
			bodyMainLeft.style.display = 'none';// none
			bodyMainCenter.style.display = 'block';
			bodyMainRight.style.display = 'none';// none
			// bodyMainRightFar.style.display = 'none';
			bodyMainCenterTop.style.display = 'block';
			bodyMainCenterTopLeft.style.display = 'block';
			bodyMainCenterTopRight.style.display = 'block';
			bodyMainCenterCenter.style.display = 'block';
			bodyMainCenterBottom.style.display = 'block';
			//............................................................---//
			//
			layoutWindowedFirst = false;
			break;
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// 4 Reading Mode Show
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		case layoutReadingModeLeft:
			//............................................................---//
			//			 Body Center (Top Left)
			//
			bodyMainCenter.style.top = '0%';
			if (layoutUseAbsolute) { bodyMainCenter.style.left = 3; }
			bodyMainCenter.style.posWidth = layoutWidth - 6;
			bodyMainCenter.style.width = bodyMainCenter.style.posWidth;
			// bodyMainCenter.style.height = 'auto';
			//
			//............................................................---//
			//			 All Other at Right
			// xx
			//
			//............................................................---//
			//			 Menu1 at Top Left
			// xx
			//
			//............................................................---//
			//			 	 Menu2 at Top Right
			// xx
			//
			//............................................................---//
			// 	 		 	 Banner at Bottom
			// xx
			// bodyViewToggle View Toggle and Message Area
			bodyViewToggleContainerCenter.style.display = 'block';
			//
			//............................................................---//
			// Area Displays
			bodyBanner.style.display = 'block';
			bodyBannerBottom.style.display = 'none';
			bodyBannerTop.style.display = 'none';
			bodyMainLeft.style.display = 'none';
			bodyMainCenter.style.display = 'block';
			bodyMainRight.style.display = 'none';
			// bodyMainRightFar.style.display = 'none';
			bodyMainCenterTop.style.display = 'block';
			bodyMainCenterTopLeft.style.display = 'none';
			bodyMainCenterTopRight.style.display = 'none';
			bodyMainCenterCenter.style.display = 'block';
			bodyMainCenterBottom.style.display = 'none';
			//............................................................---//
			//
			layoutReadingModeLeftFirst = false;
			break;
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// case 999:
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		case 999:
			// Break between center top and center center
			bodyMainCenterTopColBreak.style.display = 'none';
			//
			//
			//............................................................---//
			//			 All Other at Right
			// xx
			//
			//............................................................---//
			//			 	 Menu1 at Top Left
			// xx
			//............................................................---//
			// Left Body Text Alignment Breaks
			bodybodyMenuLeft1ColBreak = ElementGetRef(bodybodyMenuLeft1ColBreak, 'bodyMenuLeft1ColBreak', 'bodyMenuLeft1ColBreak');
			bodybodyMenuLeft1ColBreak.style.display = 'none';
			bodybodyMenuLeft2ColBreak = ElementGetRef(bodybodyMenuLeft2ColBreak, 'bodyMenuLeft2ColBreak', 'bodyMenuLeft2ColBreak');
			bodybodyMenuLeft2ColBreak.style.display = 'none';
			bodybodyMenuLeft3ColBreak = ElementGetRef(bodybodyMenuLeft3ColBreak, 'bodyMenuLeft3ColBreak', 'bodyMenuLeft3ColBreak');
			bodybodyMenuLeft3ColBreak.style.display = 'none';
			//
			//............................................................---//
			//			 	 Menu2 at Top Right
			// xx
			//............................................................---//
			// Right Body Text Alignment Breaks
			bodybodyMenuRight1ColBreak = ElementGetRef(bodybodyMenuRight1ColBreak, 'bodyMenuRight1ColBreak', 'bodyMenuRight1ColBreak');
			bodybodyMenuRight1ColBreak.style.display = 'none';
			bodybodyMenuRight2ColBreak = ElementGetRef(bodybodyMenuRight2ColBreak, 'bodyMenuRight2ColBreak', 'bodyMenuRight2ColBreak');
			bodybodyMenuRight2ColBreak.style.display = 'none';
			bodybodyMenuRight3ColBreak = ElementGetRef(bodybodyMenuRight3ColBreak, 'bodyMenuRight3ColBreak', 'bodyMenuRight3ColBreak');
			bodybodyMenuRight3ColBreak.style.display = 'none';
			//
			bodyMainCenterTopRight = ElementCopy(bodyMainCenterTopRight, bodyMainCenterTopRightFirst, bodyMainRight, 'none');
			bodyMainCenterTopRightFirst = false;
			//
			//............................................................---//
			// 	 		 	 Banner at Bottom
			bodyBanner = document.getElementById('BodyBanner');
			//............................................................---//
			// Area Displays
			bodyBanner.style.display = 'block';
			bodyBannerBottom.style.display = 'none';
			bodyBannerTop.style.display = 'none';
			bodyMainLeft.style.display = 'none';
			bodyMainCenter.style.display = 'block';
			bodyMainRight.style.display = 'none';
			// bodyMainRightFar.style.display = 'block';
			bodyMainCenterTop.style.display = 'none';
			bodyMainCenterTopLeft.style.display = 'none';
			bodyMainCenterTopRight.style.display = 'none';
			bodyMainCenterCenter.style.display = 'block';
			bodyMainCenterBottom.style.display = 'none';
			//............................................................---//
			//
			layoutReadingModeLeftFirst = false;
			break;
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// DEFAULT...
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		default:
			break;
	}
	//
	//
	// document.recalc();
	//
	WindowResizeLayout();
	//
	bodyFirst = false;
	// return;
	//
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section Mouse Events function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// Mouse Element Event Mouse
// ...................................... //
function ElementEventMouse(e) {
	if (!imgLoadUseEventHandler && !imgLoadEventTest) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			'You have conflicting event handling options...',
			'ElementEventMouse', 9555, null, null,
			errorSevere, errorDoNotDisplayTag, DoUseAlert);
	}
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	ElementEventCurrSet(e);
	//
	ElementEventCurrRootObjSet();
	//
	oObjIndex = ElementItemIndexSetFromObj(eventCurrRootObj);
	// Objects
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	//
	if (UseLogEvents) {
		ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
			'Mouse Event', 'ElementEventMouse', 7993);
	}
	//
	// ...................................... //
	if (!oObjNotFound) {
		//
		// ...................................... //
		var HideImage = false;
		var HideImageLarge = false;
		var NextIsImageLarge = IsImageLarge;
		//
		if (eventType = 'mousedown') { NextIsImageLarge = IsLarge; }
		if (IsImageLarge) {
			HideImageLarge = true;
			iImageSize = oObjImageSizeLarge;
		} else {
			HideImage = true;
			iImageSize = oObjImageSizeSmall;
		}
		//
		var startIndex;
		var endIndex;
		//
		// ...................................... //
		var oObjLocked;// menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge]
		var IgnoreLock;
		//
		// ...................................... //
		switch (eventType) {
			// ...................................... //
			case 'mousedown':
				//
				// ...................................... //
				switch (IsImageLarge) {
					// ...................................... //
					case IsSmall:
						// Small
						startIndex = oObjIndex;
						endIndex = oObjIndex;
						//
						// ElementItemToggle(  true true true (IsImagelarge LockValue IgnoreLock)
						NextIsImageLarge = IsLarge; oObjLocked = true; IgnoreLock = true;
						//
						ElementItemToggle(
							NextIsImageLarge,
							oObj.id, oObjImageLarge.id, oObjLarge.id,
							oObjImageSizeLarge,
							oObjGroupIndex, oObjIndex,
							oObjLocked, IgnoreLock);
						break;
					//
					// ...................................... //
					case IsLarge:
					default:
						break;
					//
				}
				break;
			//
			case 'mouseout':
				//
				if (TimerStartMoveBusy(oObj.id + 'Move', oObjGroupIndex, oObjIndex, UseLogEvents)) { return; }
				if (ElementEventCheckDuplicate(UseLogEvents)) { return; }
				// ...................................... //
				switch (IsImageLarge) {
					// ...................................... //
					case IsSmall:
						// Small
						// ElementItemHide
						NextIsImageLarge = IsSmall; oObjLocked = false; IgnoreLock = false;
						ElementItemHide(
							NextIsImageLarge,
							oObjParent, oObjImage, oObj, oObjLarge,
							oObjGroupIndex, oObjIndex,
							oObjLocked, oObjLocked);
						break;
					//
					// ...................................... //
					case IsLarge:
					default:
						// Large
						// ElementItemHide
						NextIsImageLarge = IsLarge; oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge]; IgnoreLock = false;
						ElementItemHide(
							NextIsImageLarge,
							oObj, oObjImageLarge, oObjLarge, oObjLarge,
							oObjGroupIndex, oObjIndex,
							oObjLocked, IgnoreLock);
						break;
					//
				}
				//
				break;
			//
			// ...................................... //
			case 'mouseover':
				//
				if (TimerStartMoveBusy(oObj.id + 'Move', oObjGroupIndex, oObjIndex, UseLogEvents)) { return; }
				if (ElementEventCheckDuplicate(UseLogEvents)) { return; }
				// ...................................... //
				if (UseLogAnimation) { return; }
				switch (IsImageLarge) {
					// ...................................... //
					case IsSmall:
						// Small
						startIndex = 1;
						endIndex = oObjIndex;
						//
						// ElementGroupShowStack(';false false true
						NextIsImageLarge = IsSmall; oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge]; IgnoreLock = true;
						//
						ElementGroupShowStack(
							NextIsImageLarge,
							oObjParent.id, oObjImage.id, oObj.id,
							oObjImageSizeLarge,
							oObjGroupIndex, oObjIndex,
							oObjLocked, IgnoreLock);
						break;
					//
					// ...................................... //
					case IsLarge:
					default:
						// Large
						/*
						// ElementItemShow(';Small false Curr false
						NextIsImageLarge = IsSmall;oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];IgnoreLock = false;
						//
						ElementItemShow(
								NextIsImageLarge,
								oObjParent, oObjImage, oObj, oObjLarge,
								oObjImageSizeSmall,
								oObjGroupIndex, oObjIndex,
								oObjLocked, IgnoreLock);
								//
						*/
						// if the small is locked then the large is locked...
						// ElementItemShow(';Large true Curr false (IsImagelarge LockValue IgnoreLock)
						NextIsImageLarge = IsLarge; oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall]; IgnoreLock = false;
						//
						ElementItemShow(
							NextIsImageLarge,
							oObj, oObjImageLarge, oObjLarge, oObjLarge,
							oObjImageSizeLarge,
							oObjGroupIndex, oObjIndex,
							oObjLocked, IgnoreLock);
						//
						break;
					//
				}
				break;
			//
			default:
				break;
			//
		}
	}
	//
}
//
// ..................................................................................... _//
// ElementEventCurrRootObjSet
// ...................................... //
function ElementEventCurrRootObjSet() {
	eventCurrRootObj = eventObject;
	// currently the parent is limited to navigate upward three nodes.
	// and must be below the Body container level
	tmpMax = 3; loopContinue = true;
	while (loopContinue) {
		if (eventCurrRootObj) {
			if (eventCurrRootObj.parentNode) {
				if (eventCurrRootObj.parentNode.id) {
					// i.e. 'BodyImageContainer'
					//  or  'BodyImageContainer'
					if ((eventCurrRootObj.parentNode.id).substring(0, 4) = 'Body') { loopContinue = false; } else {
						eventCurrRootObj = eventCurrRootObj.parentNode;
						tmpMax--;
						if (!tmpMax) { loopContinue = false; }
					}
				} else { loopContinue = false; }
			} else { loopContinue = false; }
		} else { loopContinue = false; }
	}
	//
}
//
//
// ..................................................................................... _//
// ElementEventLastSet
// ...................................... //
function ElementEventLastSet(e) {
	eventLast = eventCurr;
	eventLastObject = (eventCurr.srcElement || eventCurr.target);
	eventLastId = eventLastObject.id;
	eventLastRootId = eventCurrRootObj.id;
	//
}
//
// ..................................................................................... _//
// ElementEventCurrSet
// ...................................... //
function ElementEventCurrSet(e) {
	// if (browserIsFF) {
	// eventCurr = document.event;
	// } else { eventCurr = e || window.event; }
	eventCurr = e || window.event;
	//
	if (eventCurr) {
		eventObject = (eventCurr.srcElement || eventCurr.target);
		eventType = eventCurr.type;
		eventCurrId = eventObject.id;
	} else {
		eventObject = null;
		eventType = 'EventEmpty';
		eventCurrId = '';
	}
	//
}
//
// ..................................................................................... _//
// ElementEventCheckDuplicate
// ...................................... //
function ElementEventCheckDuplicate(UseLog) {
	if (!eventCurrRootObj) { return false; }
	if (!eventCurrRootObj.id) { return false; }
	var IsDuplicate = false;
	var DoStoreLast = true;
	switch (eventType) {
		// ...................................... //
		case 'mouseover':
			// ignoring mouseover events on the containing box
			// allows the capture of two successive mouseout events,
			// one on a child element and then one on the container
			if (eventCurrId == eventCurrRootObj.id) {
				IsDuplicate = true;
				DoStoreLast = false;// do not store last mouseover on box
			}
			break;
		// ...................................... //
		case 'mouseout':
			// this code catches the two successive mouseout events
			if (!browserIsFF) {
				if ((
					eventCurrId == eventCurrRootObj.id
					&& eventLastRootId == eventCurrRootObj.id
					&& eventLastId != eventCurrId
				)) { IsDuplicate = false; } else { IsDuplicate = true; }
				// && eventLast.type == eventType
			} else {
				if ((
					eventCurrId == eventCurrRootObj.id
					&& eventLastRootId == eventCurrRootObj.id
				)) { IsDuplicate = false; } else { IsDuplicate = true; }
			}
			break;
		default: IsDuplicate = false; break;
	}
	//
	if (UseLog && IsDuplicate && UseLogEventDuplicates) {
		ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
			'Duplicate Event', 'ElementEventCheckDuplicate', 0);
	}
	//
	if (DoStoreLast) { ElementEventLastSet(eventCurr); }
	return IsDuplicate;
}
//
// ..................................................................................... _//
// ElementItemHideId
// ...................................... //
function ElementEventFromHtmlCheck(e, UseLog) {
	// load and validate event and objects
	// if (!imgLoadUseEventHandler) {
	eventCurr = e || window.event;
	ElementEventCurrSet(eventCurr);
	ElementEventCurrRootObjSet();
	// look for duplicate mouse over events (bubbling)
	if (ElementEventCheckDuplicate(UseLog)) { return false; } else { return true; }
	// } else { return true; }
}
//
// ..................................................................................... _//
// ElementItemHideId
// ...................................... //
function ElementEventGet(e) {
	// load and validate event and objects
	eventCurr = e || window.event;
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// Section (Menu Image) Element Item function (s)
// ..................................................................................... _//
//
// ...................................... //
// SectionBlock Element Item Play function (s)
// ...................................... //
//
// ..................................................................................... _//
// Menu Image Play First
// ...................................... //
//
function ElementPlayFirst(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	ElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		oObjImageSizePassed, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock);
}
//
// ..................................................................................... _//
// ElementPlayNext
// ...................................... //
function ElementPlayNext(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	ElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		oObjImageSizePassed, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock);
}
//
// ..................................................................................... _//
// ElementPlayAgain
// ...................................... //
function ElementPlayAgain(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	ElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		oObjImageSizePassed, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock);
}
//
// ..................................................................................... _//
// ...................................... //
// ElementPlay
function ElementPlay(playDirection, IsImageLarge,
	oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	//
	var timerType = timerTypeMove;
	var timerGroup = oObjGroupIndex;
	var timerGroupItem = oObjGroupItemIndex;
	var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + 'Type' + timerType;
	var timerItemMoveKey = timerGroupItem + timerTypeMove;
	var timerItemTransitionKey = timerGroupItem + timerTypeTransition;
	var timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerType;
	//
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	if (UseLogTimer && UseLogTimerDetail && (UseLogTimerMove || UseLogTimerTransition)) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseEither, playDirection, 'Request')
			+ ', Play command requested'
			+ '.',
			'ElementPlay', 3819, null, null,
			errorComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	var PlayAbort = false;
	//
	// Bug for testing: var timerGroupItem = oObjNext.id;
	// Checking Transition
	if (timerObj[timerGroup][timerItemTransitionKey]) {
		if (timerObj[timerGroup][timerItemTransitionKey].timerIsRunning) {
			timerRootKey = timerRootId + timerTypeTransition;
			if (playDirection != timerObj[timerGroup][timerItemTransitionKey].playDirection) {
				// playDirection is different (while running)
				if (UseLogTimer && UseLogTimerDetail && UseLogTimerTransition) {
					MessageLog(DoNotUseDebug, DoUseSingleLine,
						TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Deactivate')
						+ ', Items:' + timerObj[timerRootKey].timerInstance
						+ ', Already running, deactivating'
						+ '.',
						'ElementPlay', 3837, null, null,
						errorComment, errorDoNotDisplayTag, DoNotUseAlert);
				}
				// Item will be deactivate and the play command issued
				TimerItemDeactivate(timerTypeTransition, timerGroup, timerGroupItem, DoNotUseRoot);
			} else {
				// playDirection the same (while running)
				if (UseLogTimer && UseLogTimerDetail && UseLogTimerTransition) {
					MessageLog(DoNotUseDebug, DoUseSingleLine,
						TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate DoStep')
						+ ', Items:' + timerObj[timerRootKey].timerInstance
						+ ', Already running, performing a Transition step instead'
						+ '.',
						'ElementPlay', 3850, null, null,
						errorComment, errorDoNotDisplayTag, DoNotUseAlert);
				}
				// the next step will be performed and the new play command skipped
				if (timerMethod == timerMethodGroup) {
					TimerGroupDoStepFilter(timerTypeTransition, timerGroup, timerGroupItem);
				} else {
					TimerItemDoStepFilter(timerTypeTransition, timerGroup, timerGroupItem);
				}
				//
				PlayAbort = true;// skip issuing play command
				//
			} // end of playDirection match
		} else {
			// Transition is NOT running
			// Check if displayed or not...
			if (playDirection == playDirectionForward) {
				// Forward
				if (timerObj[timerGroup][timerItemTransitionKey].elIsDisplayed = elIsDisplayed) {
					if (UseLogTimer && UseLogTimerDetail && UseLogTimerTransition) {
						MessageLog(DoNotUseDebug, DoUseSingleLine,
							TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Forward command NOT issued'
							+ ', Item is already displayed'
							+ '.',
							'ElementPlay', 3875, null, null,
							errorComment, errorDoNotDisplayTag, DoNotUseAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				}
			} else {
				// Reverse
				if (timerObj[timerGroup][timerItemTransitionKey].elIsDisplayed = elIsNotDisplayed) {
					if (UseLogTimer && UseLogTimerDetail && UseLogTimerTransition) {
						MessageLog(DoNotUseDebug, DoUseSingleLine,
							TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Reverse command NOT issued'
							+ ', Item is already hidden'
							+ '.',
							'ElementPlay', 3891, null, null,
							errorComment, errorDoNotDisplayTag, DoNotUseAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				} // end of not displayed
			} // end of playDirection is Forward or Reverse
		} // end of Transition is running or not
	} // end of Transition exists
	//
	// Transition now:
	//		reset (direction change),
	//		continued (via a step),
	//		or no action.
	//
	// Checking Move
	if (timerObj[timerGroup][timerItemMoveKey]) {
		if (timerObj[timerGroup][timerItemMoveKey].timerIsRunning) {
			timerRootKey = timerRootId + 'Group' + timerGroup + 'Type' + timerTypeMove;
			if (playDirection != timerObj[timerGroup][timerItemMoveKey].playDirection) {
				// playDirection is different (while running)
				if (UseLogTimer && UseLogTimerDetail && UseLogTimerMove) {
					MessageLog(DoNotUseDebug, DoUseSingleLine,
						TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Deactivate')
						+ ', Items:' + timerObj[timerRootKey].timerInstance
						+ ', Already running, deactivating'
						+ '.',
						'ElementPlay', 3919, null, null,
						errorComment, errorDoNotDisplayTag, DoNotUseAlert);
				}
				// Item will be deactivate and the play command issued
				TimerItemDeactivate(timerTypeTransition, timerGroup, timerGroupItem, DoNotUseRoot);
			} else {
				// playDirection the same (while running)
				if (UseLogTimer && UseLogTimerDetail && UseLogTimerMove) {
					MessageLog(DoNotUseDebug, DoUseSingleLine,
						TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate DoStep')
						+ ', Items:' + timerObj[timerRootKey].timerInstance
						+ ', Already running, performing a Move step instead'
						+ '.',
						'ElementPlay', 39, null, null,
						errorComment, errorDoNotDisplayTag, DoNotUseAlert);
				}
				//
				if (timerMethod == timerMethodGroup) {
					TimerGroupDoStepMove(timerTypeMove, timerGroup, timerGroupItem);
				} else {
					TimerItemDoStepMove(timerTypeMove, timerGroup, timerGroupItem);
				}
				//
				PlayAbort = true;// skip issuing play command
				//
			} // end of playDirection match
		} else {
			// Move is NOT running
			// Check if displayed or not...
			if (playDirection == playDirectionForward) {
				// Forward
				if (timerObj[timerGroup][timerItemMoveKey].elIsDisplayed = elIsDisplayed) {
					if (UseLogTimer && UseLogTimerDetail && UseLogTimerMove) {
						MessageLog(DoNotUseDebug, DoUseSingleLine,
							TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Forward command NOT issued'
							+ ', Item is already displayed...',
							'ElementPlay', 3956, null, null,
							errorComment, errorDoNotDisplayTag, DoNotUseAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				}
			} else {
				// Reverse
				if (timerObj[timerGroup][timerItemMoveKey].elIsDisplayed = elIsNotDisplayed) {
					if (UseLogTimer && UseLogTimerDetail && UseLogTimerMove) {
						MessageLog(DoNotUseDebug, DoUseSingleLine,
							TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Reverse command NOT issued'
							+ ', Item is already hidden...',
							'ElementPlay', 3971, null, null,
							errorComment, errorDoNotDisplayTag, DoNotUseAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				} // end of not displayed
			} // end of playDirection is Forward or Reverse
		} // end of Move is running or not
	} // end of Move Item exists
	//
	// Move or Transition now:
	//		reset (direction change),
	//		continued (via a step),
	//		or no action.
	//
	// Check if new play aborted
	if (PlayAbort) {
		return;
	} // skip issuing play command
	//
	// ...................................... //
	// Cascase Direction (Down or Up)
	var layoutCascadeDown = true;
	var layoutCascadeRight = true;
	if (menuImageOffsetTopAll[oObjGroupIndex][indexGroup] > 0) {
		layoutCascadeDown = true;
	} else { layoutCascadeDown = false; }
	//
	oObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNext);
	//
	// POSITION
	// elLeftOrig, elTopOrig, elLeftDest, elTopDest,
	var oObjIndexTemp = oObjIndex;
	if (!IsImageLarge) { oObjIndexTemp = oObjRootIndex; }
	elLeftOrig = menuImagePositionLeft[oObjGroupIndex][oObjIndexTemp][IsSmall];
	// if CascadeRight
	if (!IsImageLarge) {
		if (oObjGroupIndex < 3) {
			elLeftOrig += menuImagePositionWidth[oObjGroupIndex][oObjIndexTemp][IsSmall];
		}
	}
	if (IsImageLarge) {
		if (oObjGroupIndex >= 3) {
			elLeftOrig += menuImagePositionWidth[oObjGroupIndex][oObjIndexTemp][IsSmall];
		}
	}
	elTopOrig = menuImagePositionTop[oObjGroupIndex][oObjIndexTemp][IsSmall];
	// if (layoutCascadeDown && IsImageLarge) {
	// 		elTopOrig += menuImagePositionHeight[oObjGroupIndex] [oObjIndexTemp] [IsSmall];
	// }
	//
	elLeftDest = menuImagePositionLeft[oObjGroupIndex][oObjIndex][IsImageLarge];
	elTopDest = menuImagePositionTop[oObjGroupIndex][oObjIndex][IsImageLarge];
	// elLeftDest = oObjNext.style.posLeft;
	// elTopDest = oObjNext.style.posTop;
	//
	//
	if (UseLogTimer && UseLogTimerMove) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Item Position')
			+ ', Item orgin and destination set'
			+ ', Orig: ( ' + elTopOrig + ', ' + elLeftOrig + ' )'
			+ ', Dest: ( ' + elTopDest + ', ' + elLeftDest + ' )',
			'ElementPlay', 10341, null, null,
			errorComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	// DURATION
	// elementMoveDuration = 2;// 2 / 90
	// elMoveStepMax = 100;// 100 / 200
	// elementMoveInterval = 5;// 5 / 10
	// elementMoveDelay = 0;
	//
	// Play Animation for this image
	var filterObjId = oObjNext.id;
	var filterId = 1;
	//
	// FILTER
	filterCommand = '';
	// These are filter indexes not object
	startIndex = 1; endIndex = 18;
	if (filterIsOn || filterResizeIsOn) {
		//
		if (UseLogTimer && UseLogTimerDetail && (UseLogTimerMove || UseLogTimerTransition)) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Get')
				+ ', Filter Get command issued'
				+ '.',
				'ElementPlay', 4055, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		//
		FilterGet(filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjIndex,
			filterObjId, filterId);
	}
	//
	// ...................................... //
	// Visibility
	// oObjNext.style.display= 'block';
	// oObjNextImage.style.display= 'block';
	// ...................................... //
	//
	// ...................................... //
	// Run Animation
	// ...................................... //
	//
	// ...................................... //
	// Play the Randomly Selected Filter Effect
	if (filterIsOn) {
		//
		// if (filterObj[filterIdPassed].filterDoEnable) {
		if (UseLogTimer && UseLogTimerDetail && (UseLogTimerMove || UseLogTimerTransition)) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Enable')
				+ ', Filter Enable command issued'
				+ '.',
				'ElementPlay', 4085, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		//
		FilterEnable(filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupItemIndex,
			filterObjId, filterId);
		// }
		//
		// // Each form below accesses the alpha filter of the object.
		// oObjNext.filters.item('DXImageTransform.Microsoft.Alpha').enabled = 0     // Named index
		//
		// if (filterObj[filterIdPassed].filterDoApply) {
		if (UseLogTimer && UseLogTimerDetail && (UseLogTimerMove || UseLogTimerTransition)) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Apply')
				+ ', Filter Apply command issued'
				+ '.',
				'ElementPlay', 4104, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		//
		FilterApply(filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupItemIndex,
			filterObjId, filterId);
		// }
		//
		if (UseLogTimer && UseLogTimerDetail && (UseLogTimerMove || UseLogTimerTransition)) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Start')
				+ ', Filter Start command issued'
				+ '.',
				'ElementPlay', 4119, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		//
		TimerStartFilter(playDirection, timerMethod, TimerGroupDoStepFilter, TimerItemDoStepFilter,
			filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupItemIndex,
			filterObjId, filterId);
		//
		// if (filterObj[filterIdPassed].filterDoPlay) {
		if (UseLogTimer && UseLogTimerDetail && (UseLogTimerMove || UseLogTimerTransition)) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Play')
				+ ', Filter Vendor Play command issued'
				+ '.',
				'ElementPlay', 4135, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		//
		FilterPlay(playDirection, filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupItemIndex,
			filterObjId, filterId);
		// }
	}
	//
	// ...................................... //
	// Begin Movement from Origin to Position
	// Element Move
	if (moveIsOn) {
		//
		var tempSize;
		if (playDirection = playDirectionReverse) {
			tempSize = 1.0;
			oObjNext.style.left = elLeftDest + 'px';
			oObjNext.style.top = elTopDest + 'px';
		} else {
			tempSize = 0.05;
			oObjNext.style.left = elLeftOrig + 'px';
			oObjNext.style.top = elTopOrig + 'px';
		}
		//
		if (filterIsOn || filterResizeIsOn) {
			if (filterResizeIsOn) { FilterResize(oObjNext, filterClassMatrix, tempSize); }
		}
		// ...................................... //
		// Visibility
		if (oObjNext.style.display != 'block') { oObjNext.style.display = 'block'; }
		//
		if (UseLogTimer && UseLogTimerDetail && (UseLogTimerMove || UseLogTimerTransition)) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Start')
				+ ', Move Start command issued'
				+ '.',
				'ElementPlay', 4174, null, null,
				errorComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		//
		TimerStartMove(playDirection, timerMethod, TimerGroupDoStepMove, TimerItemDoStepMove,
			filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupItemIndex,
			filterObjId, filterId);
		//
	} else if (filterIsOn || filterResizeIsOn) {
		//
		// **if (browserAnimationIsIe && filterCommand.length) { eval(filterCommand);filterCommand = ''; }
		if (filterResizeIsOn && !elIsDisplayed) {
			//
			if (UseLogTimer && UseLogTimerDetail && (UseLogTimerMove || UseLogTimerTransition)) {
				MessageLog(DoNotUseDebug, DoUseSingleLine,
					TimerLogText(null, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Resize')
					+ ', Resize command issued'
					+ '.',
					'ElementPlay', 4194, null, null,
					errorComment, errorDoNotDisplayTag, DoNotUseAlert);
			}
			//
			FilterResize(oObjNext, filterClassMatrix, 0.05);
		}
		// ...................................... //
		// Visibility
		if (oObjNext.style.display != 'block') { oObjNext.style.display = 'block'; }
		//
	}
	//
}
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Element (Menu Image) Show / Hide function (s)
// ...................................... //
//
// ..................................................................................... _//
// Menu Show
// 		ElementGroupShowRange
//		ElementItemShowIndex
//		ElementGroupShowStack
//		ElementItemToggle
//		ElementItemShow
// Menu Hide
// 		ElementGroupToggleRange
//		ElementItemHide
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Show Toggle function (s)
// ...................................... //
//
// ..................................................................................... _//
// ElementGroupToggleRange
// ...................................... //
function ElementGroupToggleRange(HideImage, HideImageLarge, startIndex, endIndex, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	// Objects
	oObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNext);
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
	}
	//
	var startObjoObjIndex = startIndex;
	var endObjoObjIndex = endIndex;
	var oObjIndexCurr = startObjoObjIndex;
	//
	if (oObjNext.style.display == 'none') {
		oObjLocked = true;
		IgnoreLock = false;
		ElementGroupShowStack(IsImageLarge, oObjNextParent.id, oObjNextImage.id, oObjNext.id, iImageSize, oObjGroupIndex, endIndex, oObjLocked, IgnoreLock);
		//
	} else {
		oObjLocked = false;
		IgnoreLock = true;
		while (oObjIndexCurr < 1 + endObjoObjIndex) {
			//
			menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge] = false;
			// Objects
			ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndexCurr);
			//
			if (HideImage) {
				ElementItemHide(IsImageLarge,
					oObjParent, oObjImage, oObj, oObjLarge,
					oObjGroupIndex, oObjIndexCurr,
					oObjLocked, IgnoreLock);
			}
			if (HideImageLarge) {
				if (oObjLarge.style.display == 'block') {
					ElementItemHide(true,
						oObj, oObjImageLarge, oObjLarge, oObjLarge,
						oObjGroupIndex, oObjIndexCurr,
						oObjLocked, IgnoreLock);
				}
			}
			//
			oObjIndexCurr++;
		}
	}
}
//
// ..................................................................................... _//
// Menu Toggle Menu Show Item (Mouse Down function)
// ...................................... //
function ElementItemToggle(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	// Objects
	oObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNext);
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
		// oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];
	}
	//
	if (oObjNext.style.display == 'none') {
		ElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupItemIndex, menuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge], IgnoreLock);
		oObjNext.style.display = 'block';
	} else {
		if (IsImageLarge) {
			// Is this wrong?
			ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupItemIndex, menuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge], true);
		} else {
			ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupItemIndex, true, IgnoreLock);
			// ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupItemIndex, menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge], IgnoreLock);
			oObjNext.style.display = 'none';
		}
	}
	//
}
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock (Menu) Groups and Ranges Show / Hide function (s)
// ...................................... //
//
// ..................................................................................... _//
// Menu Menu Show Item and all Previous (Mouse Over function)
// ...................................... //
function ElementGroupShowStack(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	// load and validate event and objects
	ElementEventFromHtmlCheck(null, UseLogEvents);
	if (eventCurrId == oObjNextParentId
		&& !UseLogAnimation
		&& eventType == 'mouseover'
	) {
		return;
	}
	//
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	// Objects
	oObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNext);
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	//
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
	}
	//
	if (eventType != 'mouseover' || UseLogAnimation
		|| (oObjNext.style.display = 'block' && !UseLogAnimation)
	) {
		//
		imgZindex += 1;
		oObjNext.style.zIndex = imgZindex;
		// process images in group above and including this location
		var startoObjIndex = 1;
		var endoObjIndex = ElementItemIndexSetFromObj(oObjNext);
		var oObjIndexCurr = startoObjIndex;
		while (oObjIndexCurr < 1 + endoObjIndex) {
			// Objects
			ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndexCurr);
			// Set Lock Test
			// if (oObjLocked == true) { menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjLocked; }
			if (!IgnoreLock) { menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge] = oObjLocked; }
			// Reveal Hidden Images
			ElementItemShow(IsImageLarge, oObjParent, oObjImage, oObj, oObjLarge, iImageSize, oObjGroupIndex, oObjIndexCurr, menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge], true);
			oObjIndexCurr++;
		}
		// done
	} else {
		// skipped due to mouse event settings
	}
	//
}
//
// ..................................................................................... _//
// ElementGroupShowRange
// ...................................... //
function ElementGroupShowRange(startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	// ...................................... //
	// Build Menu Images Div
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	var startObjoObjIndex = startIndex;
	var endObjoObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNext);
	var oObjIndexCurr = startObjoObjIndex;
	while (oObjIndexCurr < 1 + endObjoObjIndex) {
		//
		oObjIndexCurr++;
	}
}
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock (Menu) Show function (s)
// ...................................... //
//
// ..................................................................................... _//
// Show using index #
// ...................................... //
function ElementItemShowIndex(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	ElementGroupShowStack(IsImageLarge, oObjNextParent.id, oObjNextImage.id, oObjNext.id, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock);
}
//
// ..................................................................................... _//
// Menu Menu Show Item (Mouse Over function)
// ...................................... //
function ElementItemShowId(e, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, oObjNextLargeId, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	// look for duplicate mouse over events (bubbling)
	if (!ElementEventFromHtmlCheck(e, UseLogEvents)) { return; }
	//
	// Objects
	oObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNext);
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
	}
	//
	ElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock);
	//
}
//
// ..................................................................................... _//
// Menu Menu Show Item (Mouse Over function)
// ...................................... //
function ElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	if (TimerStartMoveBusy(timerTypeMove, oObjGroupIndex, oObjGroupItemIndex, UseLogEvents)) { return; }
	//
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	oObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNext);
	LastTouchedId = oObjNext.id;
	//
	if (UseLogTimer && UseLogTimerTransition) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			TimerKeyText('Show', oObjGroupIndex, oObjIndex)
			+ ', ' + oObjNext.id
			+ ', ' + ((moveIsOn || filterIsOn) ? 'Animated' : 'Unanimated')
			+ ', Time:' + Date()
			+ '.',
			'ElementItemShow', 10141, oObjNext, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	WindowClientWidth();
	//
	// if (IsImageLarge) {
	// Objects
	// ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	// Style Visibility
	// oObjLarge.style.display= 'block';
	// oObjImageLarge.style.display= 'block';
	// }
	if (oObjNext.style.display != 'block') {
		//
		// Width and Height
		LastId = oObjNext.id
		//
		// ...................................... //
		// Image Size
		var layoutBlockWidthDefault = iImageSize + (menuImageBorderWidth * 2);
		var elHeightDefault = (iImageSize * oObjImageSizeRatio) + (menuImageBorderWidth * 2);
		//
		////////////////////////////////////////////
		// Position
		// ...................................... //
		//
		// ...................................... //
		// Parent Postion
		// ...................................... //
		// Get the offset width of that parent element
		ElementPosCalculate(oObjNextParent);
		//
		// ...................................... //
		// Position Control
		// Save the Left position (of the first image in the group)
		if (oObjIndex == 1) {
			// Store Parent Postion (note only first is stored at this time)
			menuImagePositionLeft[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjLeft;
			menuImagePositionTop[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjTop;
			menuImagePositionWidth[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjWidth;
			menuImagePositionHeight[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjHeight;
			//
			// Cascase Direction
			// Adjust the Left position for the image width
			// Left Column wants Top Right of Parent Div
			// Right Column wants Top Left of Parent Div
		}
		//
		// ...................................... //
		// Cascade Control
		// ...................................... //
		// Cascase Row and Column
		var cascadeRow = 1;
		var cascadeColumn = 1;
		cascadeColumn = (oObjIndex - 1) % oObjectRowMax[oObjGroupIndex] + 1;
		cascadeRow = Math.floor((oObjIndex - 1) / oObjectRowMax[oObjGroupIndex]) + 1;
		// (oObjIndex - cascadeColumn + oObjectRowMax[oObjGroupIndex]) / oObjectRowMax[oObjGroupIndex];
		//
		// ...................................... //
		// Cascase Direction (Down or Up)
		var layoutCascadeDown = true;
		var layoutCascadeRight = true;
		if (menuImageOffsetTopAll[oObjGroupIndex][indexGroup] > 0) {
			layoutCascadeDown = true;
		} else { layoutCascadeDown = false; }
		// ...................................... //
		// Animation
		if (layoutIndex == layoutWindowed) {
			layoutCascadeDown = true;
			filterMotionDirectionSourceAngle = 292.5;
			filterMotionDirection = 'rightdown';
		}
		// ...................................... //
		// Top Position
		// ...................................... //
		// Offset
		if (IsImageLarge) {
			oObjNextOffsetTop = menuImageOffsetTopLarge[oObjGroupIndex];
			oObjNextOffsetTop += menuImageOffsetTopLarge[indexGroup];
			if (!layoutCascadeDown) { oObjNextOffsetTop = -oObjNextOffsetTop; }
			oObjNextTop = menuImagePositionTop[oObjGroupIndex][oObjIndex][IsSmall];
			//
			// oObjNextTop += menuImagePositionHeight[oObjGroupIndex] [oObjIndex] [IsSmall];
			//
			oObjNextTop += oObjNextOffsetTop;
		} else {
			oObjNextOffsetTop = menuImageOffsetTopAll[oObjGroupIndex][indexGroup];
			oObjNextOffsetTop += menuImageOffsetTopAll[oObjGroupIndex][oObjIndex];
			// ...................................... //
			// Set Top
			// View Option Adjustments
			// Windowed Layout Format
			if (layoutIndex == layoutWindowed) {
				oObjNextOffsetTop = 30;
				// Set Top
				oObjNextOffsetTop += bodyMainCenterTop.offsetHeight;
				oObjNextTop = ((oObjIndex - 1) * 50) + oObjNextOffsetTop;
				if (IsImageLarge) { oObjNextTop += 100; }
			} else {
				//  Standard Side Menu Layout Format
				// Set Top
				if (oObjIndex == 1) {
					oObjNextTop = oObjTop;
				} else {
					// oObjNextTop = oObjTop;
					oObjNextTop = menuImagePositionTop[oObjGroupIndex][oObjIndex - 1][IsImageLarge];
				}
				oObjNextTop += oObjNextOffsetTop;
				if (IsImageLarge) {
					if (oObjNextOffsetTop > 50) {
						oObjNextTop += oObjNextOffsetTop;
					} else { oObjNextTop += 100; }
				}
				//
			}
		}
		//
		// ...................................... //
		// Set Style Top for menu image box
		oObjNext.style.top = oObjNextTop + 'px';
		//
		// ...................................... //
		// Menu Thumb Link Postioning (Top or Bottom)
		// Large Image Handling
		if (!IsImageLarge) {
			// Small Image
			// Link Text Position Up or Down
			//      (determined by Cascade Direction)
			if (layoutCascadeDown) {
				// Display Top
				oObjNext.childNodes[0].style.display = 'block';
				oObjNext.childNodes[2].style.display = 'none';
			} else {
				// Display Bottom
				oObjNext.childNodes[0].style.display = 'none';
				oObjNext.childNodes[2].style.display = 'block';
			}
		} else {
			// Large Image
			// Link Text Position Up or Down
			if (layoutCascadeDown) {
				// Display Top
				oObjNext.childNodes[0].childNodes[0].style.display = 'block';
				oObjNext.childNodes[0].childNodes[2].style.display = 'none';
			} else {
				// Display Bottom
				oObjNext.childNodes[0].childNodes[0].style.display = 'none';
				oObjNext.childNodes[0].childNodes[2].style.display = 'block';
			}
		}
		//
		// ...................................... //
		// Cascase Direction (Right or Left)
		// ...................................... //
		if (menuImageOffsetLeftAll[oObjGroupIndex][indexGroup] > 0) {
			layoutCascadeRight = true;
		} else { layoutCascadeRight = false; }
		//
		if (layoutCascadeRight) {
			// ...................................... //
			// Left Column (Left)
			if (layoutCascadeDown) {
				filterMotionDirectionSourceAngle = 315;
				filterMotionDirectionSourceAngle = (oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 270;
				filterMotionDirection = 'rightdown';
			} else {
				filterMotionDirectionSourceAngle = 225;
				filterMotionDirectionSourceAngle = Math.abs(oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 180;
				filterMotionDirection = 'rightup';
			}
		} else {
			// ...................................... //
			// Right Column
			if (layoutCascadeDown) {
				filterMotionDirectionSourceAngle = 45;
				filterMotionDirectionSourceAngle = (oObjNextOffsetTop / oObjNextOffsetLeft * 45);
				filterMotionDirection = 'leftdown';
			} else {
				filterMotionDirectionSourceAngle = 135;
				filterMotionDirectionSourceAngle = Math.abs(oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 90;
				filterMotionDirection = 'leftup';
			}
		}
		// ...................................... //
		// Left Position
		// ...................................... //
		//
		// Offset
		if (IsImageLarge) {
			oObjNextOffsetLeft = menuImageOffsetLeftLarge[oObjGroupIndex];
			oObjNextOffsetLeft += menuImageOffsetLeftLarge[indexGroup];
			if (!layoutCascadeRight) { oObjNextOffsetLeft = -oObjNextOffsetLeft; }
			//
			oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjIndex][IsSmall];
			//
			if (layoutCascadeRight) {
				oObjNextLeft += menuImagePositionWidth[oObjGroupIndex][oObjIndex][IsSmall];
			} else {
				oObjNextLeft -= layoutBlockWidthDefault;
				// menuImagePositionWidth[oObjGroupIndex] [oObjIndex] [IsImageLarge];
			}
			//
			oObjNextLeft += oObjNextOffsetLeft;
		} else {
			oObjNextOffsetLeft = menuImageOffsetLeftAll[oObjGroupIndex][indexGroup];// Group Default Offset
			oObjNextOffsetLeft += menuImageOffsetLeftAll[oObjGroupIndex][oObjIndex];// Item specific default
			//
			// ...................................... //
			// View First Image Adjustments
			var menuImageOffsetFirst = menuImageOffsetFirstAll[oObjGroupIndex][indexLeft];
			// Windowed Layout Format
			if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) != 1) { menuImageOffsetFirst = 0; }
			if (layoutIndex == layoutWindowed) {
				// oObjNextOffsetLeft = oObjNextOffsetLeft * 25 / Math.abs(oObjNextOffsetLeft);
				menuImageOffsetFirst = 0;
				// oObjNextOffsetLeft = 0;// some hard coded setting?
			}
			// if (layoutIndex == layoutWindowed) { oObjNextOffsetTop = Math.abs(oObjNextOffsetTop); }
			//
			// ...................................... //
			// Left Position Calculation
			// ...................................... //
			// Adjust Left Position for Page Overflow
			// Cascade Maximum exceeded (Left)
			// Cascase Direction
			if (layoutCascadeRight) {
				// ...................................... //
				// Left Column (Left)
				// One First Column of Row
				if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) == 1) {
					// indicates both First and First of Next Row
					if (layoutIndex == layoutWindowed) {
						oObjNextOffsetLeft = 0;
						oObjNextLeft = ((oObjGroupIndex - 1) / 6 * layoutWidth)
							+ menuImageOffsetFirst
							+ oObjNextOffsetLeft;// (ie. Right Top)
						// XXXXXXXX client width etc (refreshing?)                              } else {
						// Use Parent Position plus offset
						oObjNextLeft = (menuImagePositionLeft[oObjGroupIndex][oObjRootIndex][IsImageLarge]
							+ menuImagePositionWidth[oObjGroupIndex][oObjRootIndex][IsImageLarge])
							+ menuImageOffsetFirst
							+ oObjNextOffsetLeft;// (ie. Right Top)
					}
				} else {
					// Cascade Next Left Column By Top and Left Offsets
					oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjIndex - 1][IsImageLarge]
						+ oObjNextOffsetLeft;// Right Edge of Parent
					// oObjNextLeft = (oObjLeft)
				}
				//
			} else {
				// ...................................... //
				// Right Column
				// Cascade Maximum exceeded (Right)
				if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) == 1) {
					if (layoutIndex == layoutWindowed) {
						oObjNextLeft = ((oObjGroupIndex - 1) / 6 * layoutWidth);
					} else {
						oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjRootIndex][IsImageLarge]
							- (iImageSize + 10)
							+ menuImageOffsetFirst
							+ oObjNextOffsetLeft;// (ie. Left Top)
					}
					// if (layoutIndex == layoutWindowed && oObjGroupIndex > 2) { oObjNextLeft += 75; }
				} else {
					// (oObjLeft)
					if (layoutIndex == layoutWindowed) { menuImageOffsetFirst = 0; }
					oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjIndex - 1][IsImageLarge]
						+ oObjNextOffsetLeft;// Right Edge of Parent
				}
			} // end of Cascade Right or Left
		} // end of Large or Small
		//
		// ...................................... //
		// Set Left for menu image box
		oObjNext.style.left = oObjNextLeft + 'px';
		//
		// ...................................... //
		// Column Overflow
		// ...................................... //
		// Left Column (Left)
		// Maximum Screen Width Exceeded (Left)
		// note this should be an adjustable value
		var oObjNextLeft; var imageLeftEdge; var imageRightEdge; var bodyLeftEdge; var bodyRightEdge;
		//
		ElementPosGet(UseScroll, UseBase, bodyMainCenterCenter, 0, 0);
		bodyLeftEdge = oObjLeft;
		bodyRightEdge = oObjLeft + oObjWidth;
		// bodyLeftEdge = ElementLeftMaxGet(DoNotUseScroll, UseBase, bodyMainCenterCenter);
		// bodyRightEdge = bodyLeftEdge + ElementWidthMaxGet(DoNotUseScroll, UseBase, bodyMainCenterCenter);
		oObjNextLeft = ElementLeftMaxGet(UseScroll, UseBase, oObjNext);
		//
		var oObjNextLeftChanged = false;
		do {
			imageRightEdge = oObjNextLeft
				+ layoutBlockWidthDefault;
			//
			if (imageRightEdge + 10 > bodyRightEdge) {
				oObjNextLeft -= 50; oObjNextLeftChanged = true;
			}
		} while (imageRightEdge + 10 > bodyRightEdge);
		//
		do {
			imageLeftEdge = oObjNextLeft;
			//
			if (imageLeftEdge - 10 < bodyLeftEdge) {
				oObjNextLeft += 50; oObjNextLeftChanged = true;
			}
		} while (imageLeftEdge - 10 < bodyLeftEdge);
		//
		if (oObjNextLeftChanged) { oObjNext.style.left = oObjNextLeft + 'px'; }
		//
		// ...................................... //
		// Set Object Style Left
		// oObjNext.style.left = oObjNext.style.posLeft;
		//
		// ...................................... //
		// Store Postion
		ElementPosGet(UseScroll, UseBase, oObjNext, layoutBlockWidthDefault, elHeightDefault);
		menuImagePositionLeft[oObjGroupIndex][oObjIndex][IsImageLarge] = oObjLeft;// parseInt(oObjNext.style.left);
		menuImagePositionTop[oObjGroupIndex][oObjIndex][IsImageLarge] = oObjTop;// parseInt(oObjNext.style.top);
		menuImagePositionWidth[oObjGroupIndex][oObjIndex][IsImageLarge] = oObjWidth;// oObjNext.offsetWidth;
		menuImagePositionHeight[oObjGroupIndex][oObjIndex][IsImageLarge] = oObjHeight;// oObjNext.offsetHeight;
		//
		// ...................................... //
		// Filters
		// ...................................... //
		//
		// ...................................... //
		// Z Index
		imgZindex += 1;
		oObjNext.style.zIndex = imgZindex + oObjIndex;
		// ...................................... //
		// Filter Apply Command
		if (moveIsOn || filterIsOn) {
			//
			playDirection = playDirectionForward;
			// playDirection = playDirectionReverse;
			ElementPlayAgain(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjIndex, false, true);
			// oObjNext.filters[0].apply();
			// oObjNext.filters[1].apply();
			// oObjNext.filters.item('DXImageTransform.Microsoft.Wheel').apply();
			// oObjNext.filters.item('DXImageTransform.Microsoft.Spin').apply();
			// oObjNext.filters.item[1].apply();
			// oObjNext.filters.item(1).Apply();
			// Visibility
			oObjNext.style.display = 'block';
		} else {
			// ...................................... //
			// Visibility
			oObjNext.style.display = 'block';
			//
		}
		//
		// ...................................... //
		// Filter Item Creation
		// oObjNext.filters.item = new Array(1);
		//
		// Filter Item Set
		// oObjNext.filters.item(0) = '-ms-filter:progid:DXImageTransform.Microsoft.Matrix(sizingMethod= ' + quoteOpen + 'auto expand' + quoteClose + ', duration= ' + quoteOpen + '1.5' + quoteClose + ')';
		//
		// ...................................... //
		// Set Object Style Filter
		// oObjNext.style.filter =
		// 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod= ' + quoteOpen + 'auto expand' + quoteClose + ', duration= ' + quoteOpen + '1.5' + quoteClose + ')';
		// 'progid:DXImageTransform.Microsoft.
		//
		// ...................................... //
		// Sample / Test Filters
		// Filter Test Microsoft
		// oObjNextImage.style.filter = 'filter:progid:DXImageTransform.Microsoft.Wheel(duration= 3);filter:progid:DXImageTransform.Microsoft.Slide(slideStyle= ' + quoteOpen + 'HIDE' + quoteClose + ', duration= 3, bands= 1);';
		// oObjNext.filters[0] = 'filter:progid:DXImageTransform.Microsoft.Wheel(duration= 3);';
		// oObjNext.filters[1] = 'filter:progid:DXImageTransform.Microsoft.Slide(slideStyle= ' + quoteOpen + 'HIDE' + quoteClose + ', duration= 3, bands= 1);';
		//
		// ...................................... //
		// Filter Play Command
		// oObjNext.filters[0].play();
		// oObjNext.filters.item(0).Play();
		// oObjNext.filters[1].play();
		// FilterResetThenAnimate(oObjNext);
		// FilterSpin(oObjNext);
		// ...................................... //
		// Z Index
		imgZindex += 1;
		oObjNext.style.zIndex = imgZindex + oObjIndex;
		//
		// ...................................... //
		// end of display 'none'
	} else {
		// ...................................... //
		// Z Index
		imgZindex += 1;
		if (IsImageLarge) {
			oObjNext.style.zIndex = imgZindex + oObjIndex;
			oObjNextParent.style.zIndex = imgZindex + oObjIndex;
			if (oObjNextParent.style.display != 'block') {
				oObjNextParent.style.display = 'block';
			}
		} else {
			oObjNext.style.zIndex = imgZindex + oObjIndex;
			if (oObjNextLarge.style.display = 'block') { oObjNextLarge.style.zIndex = imgZindex + oObjIndex; }
		}
	}
	//
	// ...................................... //
	// Dispaly Lock vs MouseOut Disappear
	// if (oObjLocked == true) { menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjLocked; }
	if (!IgnoreLock) { menuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge] = oObjLocked; }
}
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock (Menu) Hide function (s)
// ...................................... //
//
// ..................................................................................... _//
// ElementItemHideId
// ...................................... //
function ElementItemHideId(e, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, oObjNextLargeId, oObjNextGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	// load and validate event and objects
	if (!ElementEventFromHtmlCheck(e, UseLogEvents)) { return; }
	//
	// Objects
	oObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNext);
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
	}
	//
	ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjNextGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock);
	//
}
//
// ..................................................................................... _//
// Menu ElementItemHide
// ...................................... //
function ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjNextGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
	if (TimerStartMoveBusy(oObjNext.id + 'Move', oObjGroupIndex, oObjIndex, UseLogEvents)) { return; }
	//
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	var oObjNextIndex = oObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNextGroupIndex, oObjNext);
	// ElementItemGetAllFromIndex(oObjNextGroupIndex, oObjNextIndex);
	//
	if (!IgnoreLock && menuImageLocked[oObjNextGroupIndex][oObjNextIndex][IsImageLarge] == true) {
		if (UseLogTimer && UseLogTimerTransition) {
			MessageLog(DoNotUseDebug, DoUseSingleLine,
				TimerKeyText('Hide', oObjGroupIndex, oObjIndex)
				+ ', ' + oObjNext.id
				+ ', Do not hide locked item'
				+ ', Time:' + Date()
				+ '.',
				'ElementItemHide', 9876, oObjNext, null,
				messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
		}
		return;
	}
	//
	if (UseLogTimer && UseLogTimerTransition) {
		MessageLog(DoNotUseDebug, DoUseSingleLine,
			TimerKeyText('Hide', oObjGroupIndex, oObjIndex)
			+ ', ' + oObjNext.id
			+ ', ' + ((moveIsOn || filterIsOn) ? 'Animated' : 'Unanimated')
			+ ', Time:' + Date()
			+ '.',
			'ElementItemHide', 9889, oObjNext, null,
			messageElementComment, errorDoNotDisplayTag, DoNotUseAlert);
	}
	//
	if (moveIsOn || filterIsOn) {
		//
		// playDirection = playDirectionForward;
		var playDirection = playDirectionReverse;
		var iImageSize;
		if (IsImageLarge) { iImageSize = oObjImageSizeLarge; } else { iImageSize = oObjImageSizeSmall; }
		ElementPlayAgain(playDirection, IsImageLarge,
			oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
			iImageSize, oObjNextGroupIndex, oObjNextIndex, false, true);
		// oObjNext.filters[0].apply();
		// oObjNext.filters[1].apply();
		// oObjNext.filters.item('DXImageTransform.Microsoft.Wheel').apply();
		// oObjNext.filters.item('DXImageTransform.Microsoft.Spin').apply();
		// oObjNext.filters.item[1].apply();
		// oObjNext.filters.item(1).Apply();
		//
		// Visibility
		// oObjNext.style.display= 'block';
	} else {
		// ...................................... //
		// Visibility
		oObjNext.style.display = 'none';
		// will become a filter play...
		TimerItemDeactivate(timerTypeMove, oObjNextGroupIndex, oObjNextIndex);
		TimerItemDeactivate(timerTypeTransition, oObjNextGroupIndex, oObjNextIndex);
	}
	//
	//
	if (!IgnoreLock) { menuImageLocked[oObjNextGroupIndex][oObjNextIndex][IsImageLarge] = oObjLocked; }
	//
	// oObj.width= 0;
	// oObj.height= 0;
	// oObj.style.display= 'none';
	// oObjImage.style.display= 'none';
	// oObjLarge.style.display= 'none';
	// oObjImageLarge.style.display= 'none';
}
//
// ..................................................................................... _//
// ..................................................................................... _//
//
// ..................................................................................... _//
// SectionBlock Element Item Objects (Menu Images) Get & Index function (s)
// ..................................................................................... _//
//
// Object Set: Object, Image, Parent, Index (Image Large & Small)
//
// ..................................................................................... _//
// ElementItemGetAllFromIndex
// ...................................... //
function ElementItemGetAllFromIndex(oObjGroupCn, oObjCn) {
	oObjIndex = oObjCn;
	oObjGroupIndex = oObjGroupCn;
	var oObjValid = true;
	var oObjId = new String();
	var oObjParentId = new String();
	//
	if (loadFirstJava) { ElementObjectCreate(); }
	// ...................................... //
	switch (oObjGroupIndex) {
		// Non Groups
		case 101: oObjValid = false; break;
		case 102: oObjValid = false; break;
		case 103: oObjValid = false; break;
		case 104: oObjValid = false; break;
		// ...................................... //
		// Group 1
		case 1:
			//
			switch (oObjCn) {
				case 0: break;
				case 1:
					oObjId = 'Image11'; oObjParentId = 'MenuContainerLeft1'; break;
				case 2:
					oObjId = 'Image12'; oObjParentId = 'Image11'; break;
				case 3:
					oObjId = 'Image13'; oObjParentId = 'Image12'; break;
				case 4:
					oObjId = 'Image14'; oObjParentId = 'Image13'; break;
				case 6:
					oObjId = 'Image15'; oObjParentId = 'Image14'; break;
				case 5:
					oObjId = 'Image16'; oObjParentId = 'Image15'; break;
				case 7:
					oObjId = 'Image17'; oObjParentId = 'Image16'; break;
				case 8:
					oObjId = 'Image18'; oObjParentId = 'Image17'; break;
				default:
					oObjValid = false;
					oObjId = 'Image11'; oObjParentId = 'MenuContainerLeft1'; break;
			}
			break;
		// ...................................... //
		// Group 2
		case 2:
			switch (oObjCn) {
				case 0: break;
				case 1:
					oObjId = 'Image21'; oObjParentId = 'MenuContainerLeft2'; break;
				case 2:
					oObjId = 'Image22'; oObjParentId = 'Image21'; break;
				case 3:
					oObjId = 'Image23'; oObjParentId = 'Image22'; break;
				case 4:
					oObjId = 'Image24'; oObjParentId = 'Image23'; break;
				default:
					oObjValid = false;
					oObjId = 'Image21'; oObjParentId = 'MenuContainerLeft2'; break;
			}
			// ...................................... //
			break;
		// Group 3
		case 3: switch (oObjCn) {
			case 0: break;
			case 1:
				oObjId = 'Image31'; oObjParentId = 'MenuContainerLeft3'; break;
			case 2:
				oObjId = 'Image32'; oObjParentId = 'Image31'; break;
			case 3:
				oObjId = 'Image33'; oObjParentId = 'Image32'; break;
			default:
				oObjValid = false;
				oObjId = 'Image31'; oObjParentId = 'MenuContainerLeft3'; break;
		}
			break;
		// ...................................... //
		// Group 4
		case 4:
			switch (oObjCn) {
				case 0: break;
				case 1:
					oObjId = 'Image41'; oObjParentId = 'MenuContainerRight1'; break;
				case 2:
					oObjId = 'Image42'; oObjParentId = 'Image41'; break;
				case 3:
					oObjId = 'Image43'; oObjParentId = 'Image42'; break;
				case 4:
					oObjId = 'Image44'; oObjParentId = 'Image43'; break;
				case 5:
					oObjId = 'Image45'; oObjParentId = 'Image44'; break;
				case 6:
					oObjId = 'Image46'; oObjParentId = 'Image45'; break;
				case 7:
					oObjId = 'Image47'; oObjParentId = 'Image46'; break;
				case 8:
					oObjId = 'Image48'; oObjParentId = 'Image47'; break;
				default:
					oObjValid = false;
					oObjId = 'Image41'; oObjParentId = 'MenuContainerRight1'; break;
			}
			break;
		default:
			oObjValid = false;
			oObjId = 'Image11'; oObjParentId = 'MenuContainerLeft1'; break;
	}
	if (oObjValid) {
		oObj = ElementGetRef(oObj, oObjId, oObjId);
		//
		oObjImage = ElementGetRef(oObjImage, oObjId + 'Image', oObjId + 'Image');
		//
		oObjParent = ElementGetRef(oObjParent, oObjParentId, oObjParentId);
		//
		oObjLarge = ElementGetRef(oObjLarge, oObjId + 'Large', oObjId + 'Large');
		//
		oObjImageLarge = ElementGetRef(oObjImageLarge, oObjId + 'Large' + 'Image', oObjId + 'Large' + 'Image');
		//
		oObjText = ElementItemGetDescription(oObjGroupCn, oObjCn);
	} else {
		// oObj = null;
		// oObjImage = null;
		// oObjParent = null;
		// oObjLarge = null;
		// oObjImageLarge = null;
		oObjText = 'Object Not Found!';
	}
	//
}
//
// ..................................................................................... _//
// ElementItemGetDescription
// ...................................... //
function ElementItemGetDescription(oObjGroupCn, oObjCn) {
	oObjIndex = oObjCn;
	oObjGroupIndex = oObjGroupCn;
	switch (oObjGroupIndex) {
		// ...................................... //
		// Non Groups
		case 101: return 'MenuContainerLeft1';
		case 102: return 'MenuContainerLeft2';
		case 103: return 'MenuContainerLeft3';
		case 104: return 'MenuContainerRight1';
		// ...................................... //
		// Group 1
		case 1: switch (oObjCn) {
			case 0: return 'MenuContainerLeft1';
			case 1: return 'Image11';
			case 2: return 'Image12';
			case 3: return 'Image13';
			case 4: return 'File Image14';
			case 5: return 'Image15';
			case 6: return 'Image16';
			case 7: return 'Image17' + charNewLineTag + 'Image17';
			case 8: return 'Image18';
			default: return 'Image11';
		}
			return;
		// ...................................... //
		// Group 2
		case 2: switch (oObjCn) {
			case 0: return 'MenuContainerLeft2';
			case 1: return 'Image21';
			case 2: return 'Image22';
			case 3: return 'Image23';
			case 4: return 'Image24';
			default: return 'Image21';
		}
			return;
		// ...................................... //
		// Group 3
		case 3: switch (oObjCn) {
			case 0: return 'MenuContainerLeft3';
			case 1: return 'Image31';
			case 2: return 'Image32';
			case 3: return 'Image33';
			default: return 'Image31';
		}
			return;
		// ...................................... //
		// Group 4
		case 4:
		default:
			switch (oObjCn) {
				case 0: return 'MenuContainerRight1';
				case 1: return 'Image41';
				case 2: return 'Image42';
				case 3: return 'Image43';
				case 4: return 'Image44';
				case 5: return 'Image45';
				case 6: return 'Image46';
				case 7: return 'Image47';
				case 8: return 'Image48';
				default: return 'Image41';
			}
			return;
	}
	//
}
//
// ..................................................................................... _//
// ElementItemGetName
// ...................................... //
function ElementItemGetName(oObjGroupCn, oObjCn) {
	oObjIndex = oObjCn;
	oObjGroupIndex = oObjGroupCn;
	// ...................................... //
	switch (oObjGroupIndex) {
		// ...................................... //
		// Non Groups
		case 101: return 'MenuContainerLeft1';
		case 102: return 'MenuContainerLeft2';
		case 103: return 'MenuContainerLeft3';
		case 104: return 'MenuContainerRight1';
		// ...................................... //
		// Group 1
		case 1: switch (oObjCn) {
			case 0: return 'MenuContainerLeft1';
			case 1: return 'Image11';
			case 2: return 'Image12';
			case 3: return 'Image13';
			case 4: return 'Image14';
			case 5: return 'Image15';
			case 6: return 'Image16';
			case 7: return 'Image17';
			case 8: return 'Image18';
			default: return 'Image11';
		}
			return;
		// ...................................... //
		// Group 2
		case 2: switch (oObjCn) {
			case 0: return 'MenuContainerLeft2';
			case 1: return 'Image21';
			case 2: return 'Image22';
			case 3: return 'Image23';
			case 4: return 'Image24';
			default: return 'Image21';
		}
			return;
		// ...................................... //
		// Group 3
		case 3: switch (oObjCn) {
			case 0: return 'MenuContainerLeft3';
			case 1: return 'Image31';
			case 2: return 'Image32';
			case 3: return 'Image33';
			default: return 'Image31';
		}
			return;
		// ...................................... //
		// Group 4
		case 4:
		default:
			switch (oObjCn) {
				case 0: return 'MenuContainerRight1';
				case 1: return 'Image41';
				case 2: return 'Image42';
				case 3: return 'Image43';
				case 4: return 'Image44';
				case 5: return 'Image45';
				case 6: return 'Image46';
				case 7: return 'Image47';
				case 8: return 'Image49';
				default: return 'Image41';
			}
			return;
	}
	//
}
//
// ..................................................................................... _//
// ElementItemIndexSetFromObj
// ...................................... //
function ElementItemIndexSetFromObj(oObjPassed) {
	IsImageLarge = IsSmall;
	oObjNotFound = false;
	// switch(oObjGroupIndex) {
	// ...................................... //
	// Non Groups
	// case 101:  elIsRoot = true;return 101;
	// case 102:  elIsRoot = true;return 102;
	// case 103:  elIsRoot = true;return 103;
	// case 104:  elIsRoot = true;return 104;
	// ...................................... //
	// Group 1
	// case 1:
	// Object Id
	if (!oObjPassed) {
		oObjNotFound = false;
		oObjGroupIndex = 4; oObjIndex = 1;
		return oObjIndex;
	}
	//
	switch (oObjPassed.id) {
		case 'MenuContainerLeft1': oObjGroupIndex = 1; oObjIndex = 0; elIsRoot = true; break;
		case 'Image11': oObjGroupIndex = 1; oObjIndex = 1; break;
		case 'Image12': oObjGroupIndex = 1; oObjIndex = 2; break;
		case 'Image13': oObjGroupIndex = 1; oObjIndex = 3; break;
		case 'Image14': oObjGroupIndex = 1; oObjIndex = 4; break;
		case 'Image15': oObjGroupIndex = 1; oObjIndex = 5; break;
		case 'Image16': oObjGroupIndex = 1; oObjIndex = 6; break;
		case 'Image17': oObjGroupIndex = 1; oObjIndex = 7; break;
		case 'Image18': oObjGroupIndex = 1; oObjIndex = 8; break;
		//
		case 'Image11L': oObjGroupIndex = 1; oObjIndex = 1; IsImageLarge = IsLarge; break;
		case 'Image12L': oObjGroupIndex = 1; oObjIndex = 2; IsImageLarge = IsLarge; break;
		case 'Image13L': oObjGroupIndex = 1; oObjIndex = 3; break;
		case 'Image14L': oObjGroupIndex = 1; oObjIndex = 4; IsImageLarge = IsLarge; break;
		case 'Image15L': oObjGroupIndex = 1; oObjIndex = 5; IsImageLarge = IsLarge; break;
		case 'Image16L': oObjGroupIndex = 1; oObjIndex = 6; IsImageLarge = IsLarge; break;
		case 'Image17L': oObjGroupIndex = 1; oObjIndex = 7; IsImageLarge = IsLarge; break;
		case 'Image18L': oObjGroupIndex = 1; oObjIndex = 8; IsImageLarge = IsLarge; break;
		// default:oObjGroupIndex = 1;oObject = 1;break;
		// }
		// return;
		// ...................................... //
		// Group 2
		// case 2: switch(oObjPassed.id){
		case 'MenuContainerLeft2': oObjGroupIndex = 2; oObjIndex = 0; elIsRoot = true; break;
		case 'Image21': oObjGroupIndex = 2; oObjIndex = 1; break;
		case 'Image22': oObjGroupIndex = 2; oObjIndex = 2; break;
		case 'Image23': oObjGroupIndex = 2; oObjIndex = 3; break;
		case 'Image24': oObjGroupIndex = 2; oObjIndex = 4; break;
		//
		case 'Image21L': oObjGroupIndex = 2; oObjIndex = 1; IsImageLarge = IsLarge; break;
		case 'Image21L': oObjGroupIndex = 2; oObjIndex = 2; IsImageLarge = IsLarge; break;
		case 'Image21L': oObjGroupIndex = 2; oObjIndex = 3; IsImageLarge = IsLarge; break;
		case 'Image24L': oObjGroupIndex = 2; oObjIndex = 4; IsImageLarge = IsLarge; break;
		// default:oObjGroupIndex = 2;oObjIndex = 1;break;
		// }
		// return;
		// ...................................... //
		// Group 3
		// case 3: switch(oObjPassed.id){
		case 'MenuContainerLeft3': oObjGroupIndex = 3; oObjIndex = 0; elIsRoot = true; break;
		case 'Image31': oObjGroupIndex = 3; oObjIndex = 1; break;
		case 'Image32': oObjGroupIndex = 3; oObjIndex = 2; break;
		case 'Image33': oObjGroupIndex = 3; oObjIndex = 3; break;
		// break;
		case 'Image31L': oObjGroupIndex = 3; oObjIndex = 1; IsImageLarge = IsLarge; break;
		case 'Image32L': oObjGroupIndex = 3; oObjIndex = 2; IsImageLarge = IsLarge; break;
		case 'Image33L': oObjGroupIndex = 3; oObjIndex = 3; IsImageLarge = IsLarge; break;
		// default:oObjGroupIndex = 3;oObjIndex = 1;break;
		// }
		// return;
		// ...................................... //
		// Group 4
		// case 4:
		// default:
		// switch(oObjPassed.id) {
		case 'MenuContainerRight1': oObjGroupIndex = 4; oObjIndex = 0; elIsRoot = true; break;
		case 'Image41': oObjGroupIndex = 4; oObjIndex = 1; break;
		case 'Image42': oObjGroupIndex = 4; oObjIndex = 2; break;
		case 'Image43': oObjGroupIndex = 4; oObjIndex = 3; break;
		case 'Image44': oObjGroupIndex = 4; oObjIndex = 4; break;
		case 'Image45': oObjGroupIndex = 4; oObjIndex = 5; break;
		case 'Image46': oObjGroupIndex = 4; oObjIndex = 6; break;
		case 'Image47': oObjGroupIndex = 4; oObjIndex = 7; break;
		case 'Image48': oObjGroupIndex = 4; oObjIndex = 8; break;
		//
		case 'Image41L': oObjGroupIndex = 4; oObjIndex = 1; IsImageLarge = IsLarge; break;
		case 'Image42L': oObjGroupIndex = 4; oObjIndex = 2; IsImageLarge = IsLarge; break;
		case 'Image43L': oObjGroupIndex = 4; oObjIndex = 3; IsImageLarge = IsLarge; break;
		case 'Image44L': oObjGroupIndex = 4; oObjIndex = 4; IsImageLarge = IsLarge; break;
		case 'Image45L': oObjGroupIndex = 4; oObjIndex = 5; IsImageLarge = IsLarge; break;
		case 'Image46L': oObjGroupIndex = 4; oObjIndex = 6; IsImageLarge = IsLarge; break;
		case 'Image47L': oObjGroupIndex = 4; oObjIndex = 7; IsImageLarge = IsLarge; break;
		case 'Image48L': oObjGroupIndex = 4; oObjIndex = 8; IsImageLarge = IsLarge; break;
		//
		default: oObjNotFound = true; oObjGroupIndex = 4; oObjIndex = 1; break;
	}
	return oObjIndex;
	// }
	//
}
//
// ..................................................................................... _//
// ElementItemIndexSetFromName
// ...................................... //
function ElementItemIndexSetFromName(oObjPassed) {
	if (!oObjPassed) {
		oObjNotFound = false;
		oObjGroupIndex = 4; oObjIndex = 1;
		return oObjIndex;
	}
	//
	for (imgCn = 0; imgCn < 1 + imgMax; imgCn++) {
		if (oObjPassed.name == 'img' + imgCn) { return imgCn; }
	}
	return 0;
}
//
script_state = "MdmTemplateScripts loaded";
