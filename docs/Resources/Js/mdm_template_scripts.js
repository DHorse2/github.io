
// ** Javascript Parameter Init Blocks **
fnDebugParameterInit()
{
    fnDebugParameterInitLocal();
}
function fnDebugParameterInitLocal()
{
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
	if (eventMouseOverEnabled) { elementObject.checked = true; } else { elementObject.checked = false; }
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
	if (debugTimer) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugTimerMove');
	if (debugTimerMove) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugTimerTransition');
	if (debugTimerTransition) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugTimerDetail');
	if (debugTimerDetail) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugLogEvents');
	if (debugLogEvents) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	// ...................................... //
	// Debugger Control
	elementObject = document.getElementById('formErrorUseDebugOnError');// enter debugger on errors
	if (errorUseDebugOnError) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formErrorUseDebugOnAll');// enter debugger after any message
	if (errorUseDebugOnAll) { elementObject.checked = true; } else { elementObject.checked = false; }
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
	if (javaLoadDelay) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formBodyImageLoadDelay');
	if (bodyImageLoadDelay) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formMenuImageLoadDelay');
	if (menuImageLoadDelay) { elementObject.checked = true; } else { elementObject.checked = false; }
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
	if (errorDebugLevel = errorDidNotOccur) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorComment');
	if (errorDebugLevel = errorComment) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorWarn');
	if (errorDebugLevel = errorWarn) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorSevere');
	if (errorDebugLevel = errorSevere) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorFatal');
	if (errorDebugLevel = errorFatal) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
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
	elementObject = document.getElementById('formElementMoveStepMax');
	elementObject.value = elementMoveStepMax;
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
	if (timerMethod = timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formFilterMethod_filterMethodVisible');
	if (timerMethod = timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formFilterMethod_filterMethodPlay').selected = true; }
	//
	tempSelected = false;
	// ...................................... //
	// Manner by which images move across the screen
	elementObject = document.getElementById('formElementMoveMethod_elementMoveMethodDirect');
	if (elementMoveMethod = elementMoveMethodDirect) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formElementMoveMethod_elementMoveMethodSlideDown');
	if (elementMoveMethod = elementMoveMethodSlideDown) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formElementMoveMethod_elementMoveMethodSlideSide');
	if (elementMoveMethod = elementMoveMethodSlideSide) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formElementMoveMethod_elementMoveMethodRandom');
	if (elementMoveMethod = elementMoveMethodRandom) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formElementMoveMethod_elementMoveMethodRandom').selected = true; }
    //
    debugStateLoadFirst = false;
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
function fnFilterControlCreate(filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage, oObjGroupIndex, oObjGroupImageIndex, filterObjIdPassed, filterIdPassed)
{
	// filterId is this program's index number
	//
	if (!filterObj) { filterObj = new Array(30); }
	//
    if (!filterObj[filterObjIdPassed]){
		filterObj[filterObjIdPassed] = new Object();
		filterObj[filterObjIdPassed].oObj = oObjNext;
        filterObj[filterObjIdPassed].oObjGroupIndex = oObjGroupIndex;
        filterObj[filterObjIdPassed].oObjIndex = oObjGroupImageIndex;
	}
	//
    if (!filterObj[filterObjIdPassed].filterSet){
		filterObj[filterObjIdPassed].filterSet = new Array(5); }
	//
    if (!filterObj[filterObjIdPassed].filterSet[filterIdPassed]){
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
// fnFilterStore Filter Store / Restore
// ...................................... //
function fnFilterStore(oObjPassed, filterIndexPassed)
{
    // this can't be right
	// oldFilter = oObjPassed.onfilterchange;
	// oObjPassed.onfilterchange = null;
	oldFilter = oObjPassed.filters[0].item;
}
//
// ..................................................................................... _//
// fnFilterRestore
// ...................................... //
function fnFilterRestore(oObjPassed, filterIndexPassed)
{
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
// fnFilterResetThenAnimate
function fnFilterResetThenAnimate(oObjPassed, filterIndexPassed)
{
    switch(filterIndexPassed) {
      // Non Groups
        case filterClassMatrix:
    		 filterMatrixCounterDegreeCurrent = 40;
    		 fnFilterRestore(oObjPassed, filterIndexPassed);// s/b , filterIndexPassed
  			 break;
    	default:
    		 oObjPassed.filters[0].enabled = true;
    		 // if (!filterFirst)  { fnFilterRestore(oObjPassed, filterIndexPassed); }
  			 break;
    }
	// filterObjectMovement Effect
	// fnFilterGetRandom(filterIndexDynamicLow, filterIndexDynamicHigh);
	filterIndexPassed = filterTypeFlip;
    fnFilterAnimate(oObjPassed, filterIndexPassed);
	//
	// filterObjectFinal Effect
	// fnFilterGetRandom(filterIndexMatrixLow, filterIndexMatrixHigh);
	filterIndexPassed = filterTypeCheckerBoard;
	fnFilterAnimate(oObjPassed, filterIndexPassed);
    filterFirst = false;
}
//
// ..................................................................................... _//
// Animate Object
// ...................................... //
function fnFilterAnimate(oObjPassed, filterIndexPassed, flMultiplier)
 {
    switch(filterIndexPassed) {
        // Matrix
        case filterClassMatrix:
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
// ..................................................................................... _//
// StyleBackground
// ...................................... //
function fnFilterBackgroundToggle(oObjPassed, filterIndexPassed) {
    if (filterStyleBackgroundToggle) {     filterStyleBackgroundToggle = 0;
        oObjPassed.style.backgroundColor= 'gold';
	} else {
        filterStyleBackgroundToggle = 1;
        oObjPassed.style.backgroundColor= 'green';
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
// fn Slide Style Toggle
// ...................................... //
function fnSlideStyleToggle(oObjPassed, filterIndexPassed) {
    // Use the array index to update and display  the slideStyle used.
    var  iStyleIndex = filterSlideStyleIndexCount % 3 ; // MOD function avoids resetting the counter.
    oObjPassed.filters[0].slideStyle = arrSlideStyles[filterSlideStyleIndexCount];
    oSpan.innerText = 'SlideStyle= ' + quoteOpen + arrSlideStyles[filterSlideStyleIndexCount]  + quoteClose;
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
// fnFilterSpin
// ...................................... //
function fnFilterSpin(oObjPassed, filterIndexPassed)
{
 	switch(filterIndexPassed) {
        // Non Groups
        case filterClassMatrix:
            // The function chosen for flMultiple defines size changes in the animation.
        	filterMatrixCounterDegreeCurrent += 16;
            // The number of 360-degree rotations is three.
            fnFilterStore(oObjPassed, filterIndexPassed);
        	if (filterMatrixCounterDegreeCurrent>= 360*1) { oObjPassed.onfilterchange = null; }
        	//
        	fnFilterSetRotation(oObjPassed, filterIndexPassed, filterMatrixCounterDegreeCurrent);
        	//
        	if (filterMatrixCounterDegreeCurrent < 1+360) {
        	   var flMultiple = filterMatrixCounterDegreeCurrent/360;//* 720;*/
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
// ..................................................................................... _//
// fnSetRotation function
// ...................................... //
//oObj input requires that a matrix filter be applied.
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
// ..................................................................................... _//
// Resize
// ...................................... //
//
// oObj input requires that a matrix filter be applied.
// flMultiplier input defines the amount by which the oObj is resized.
function fnFilterResize(oObjPassed, filterIndexPassed, flMultiplier)
{
	if (!browserAnimationIsIe) { return; }
    // oObj.filters['DXImageTransform.Microsoft.Matrix']
    switch(filterIndexPassed) {
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
function fnFilterGet(filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjIdPassed, filterIdPassed)
{
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
		filterIdIndex = 0;filterIdPassed = filterIdIndex;
		//
        // FileterPlayRandom
        //  or
        // Select Random Animation
        filterIndex = fnMathNumberRandomGetByRange(filterIndexDynamicLow, filterIndexDynamicHigh, filterRealFlag);
        // filterIndex = fnMathNumberRandomGetByRange(filterRangeLow, filterRangeHigh, filterRealFlag);
        // fnMathNumberRandomGetByRange(rangeLow, rangeHigh, realFlag)
        //  (filterIndexPassed = fnMathRandom())
        //
		if (browserAnimationIsIe)  {
        // filterCommandEval = 'oObjNextImage.style.filter= ' + quoteOpen;
        filterCommandEval = 'oObjNext.style.filter= ' + quoteInnerOpen;
		} else { filterCommandEval = ''; }
        //
        // Resize (Matrix)
        if (filterResizeIsOn) {
            // Matrix always takes first spot (0)
			var filterClassMatrix = 3;
        	filterMatrix = fnFilterGetByIndex(filterClassMatrix, filterClassStatic,
        	            filterTypeMatrix, filterDataCommand, filterCompletionIsZero,
						oObjNext, oObjNextImage,
						oObjGroupIndex, oObjGroupImageIndex,
						filterObjIdPassed, filterIdPassed);
        	//
            filterCommandEval += filterMatrix + ';';
    		filterId[filterIdIndex] = filterKey;
    		filterSelected[filterIdIndex] = filterTypeMatrix;
            filterIdIndex += 1;filterIdPassed = filterIdIndex;
        }
        // Randomly chosen filter
        newFilter = fnFilterGetByIndex(filterClassSingle, filterClassStatic,
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
		filterIndexCn = fnFilterSet(filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage, filterObjIdPassed, filterIdPassed,
					filterCommandEval);
		//
		if (filterIndexCn < 1) {
		    // Error - Set failed
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
    			'Invalid filter(' + filterIdPassed + ') error! On filter # ' + filterIndex + ' '
				+ charNewLineTag + filterCommandEval,
                'fnFilterGet', 3128, null, null,
                errorWarn, errorDoNotDisplayTag, errorDoNotAlert);
			var bob = 'ted';
			filterIndexCn = 0;
			filterGetExit = true;// Exit on Set Error
		} else {
		    // Set succeeded
            if (debugTimer && debugTimerDetail && debugTimerTransition) {
                fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
		            'Filter(' + filterIdPassed + ') of ' + filterIndexCn
		            + ' set successfully! Random filter # ' + filterIndex + ' '
		            + charNewLineTag + filterCommandEval,
                    'fnFilterGet', 3139, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
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
function fnFilterSet(filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage, filterObjIdPassed, filterIdPassed,
					filterCommand)
{
		// Evaluate the filter commands and apply elements.
        if (browserAnimationIsIe) {
			if (filterCommand.length)  {
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
function fnFilterEnable(filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjIdPassed, filterIdPassed)
{
        if (browserAnimationIsIe) {
            if (filterResizeIsOn && filterIsOn) {
    			// 0
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoEnabled)  {
    				oObjNext.filters.item(filterId[0]).Enabled = true; }
    			// 1
    			if (oObjNext.filters[1]) {
                    if (filterObj[filterObjIdPassed].filterSet[1].filterDoEnabled)  {
    				    oObjNext.filters.item(filterId[1]).Enabled = true; }
                }
                //
            } else {
    			// 0
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoEnabled)  {
    				oObjNext.filters.item(filterId[0]).Enabled = true; }
    		}
		}
}
//
// ..................................................................................... _//
// Filter Apply
// ...................................... //
// Capture Rendered Content prior to Play
//
function fnFilterApply(filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjIdPassed, filterIdPassed)
{
    if (browserAnimationIsIe) {
        if (filterResizeIsOn && filterIsOn) {
            // 0
            if (filterObj[filterObjIdPassed].filterSet[0].filterDoApply)  {
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
function fnFilterPlay(playDirection, filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjIdPassed, filterIdPassed)
{
	//
	if (!filterDuration) { filterDuration = elementMoveDuration; }
	//
    if (filterMethod = filterMethodPlay) {
        if (filterResizeIsOn && filterIsOn) {
			if (browserAnimationIsIe) {
    			// 0
                oObjNext.filters[0].duration = filterDuration;
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoPlay)  {
                	oObjNext.filters[0].play(filterDuration); }
    			// 1
    			if (oObjNext.filters[1]) {
    			    if (oObjNext.filters[1].duration) { oObjNext.filters[1].duration = filterDuration; }
                    if (filterObj[filterObjIdPassed].filterSet[1].filterDoPlay)  {
                	    oObjNext.filters[1].play(filterDuration); }
                }
			}
        } else {
			if (browserAnimationIsIe) {
    			// 0
                if (oObjNext.filters[0].duration) { oObjNext.filters[0].duration = filterDuration; }
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoPlay)  {
                	oObjNext.filters[0].play(filterDuration); }
			}
        }
    }
    //
    // ...................................... //
    // Visibility
    if (oObjNext.style.display != 'block') {
        oObjNext.style.display= 'block';
        // oObjNextImage.style.display= 'block';
    }
    // ...................................... //
    //
    if (filterMethod = filterMethodVisible) {
        oObjNext.style.visibility = 'hidden';
        oObjNext.style.visibility = 'visible';
    }
}
//
// ..................................................................................... _//
// Filter Stop
// ...................................... //
//
function fnFilterStop(filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjIdPassed, filterIdPassed)
{
    if (filterMethod = filterMethodPlay) {
        if (filterResizeIsOn && filterIsOn) {
			if (browserAnimationIsIe) {
    			// 0
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoStop)  {
					oObjNext.filters[0].stop(); }
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoEnable)  {
    			 	oObjNext.filters[0].Enabled = false; }
    			// 1
    			if (oObjNext.filters[1]) {
                    if (filterObj[filterObjIdPassed].filterSet[1].filterDoStop)  {
                 	    oObjNext.filters[1].stop(); }
                    if (filterObj[filterObjIdPassed].filterSet[1].filterDoEnable)  {
    			 	    oObjNext.filters[1].Enabled = false; }
    			}
			}
        } else {
			if (browserAnimationIsIe) {
    			// 0
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoStop)  {
                	oObjNext.filters[0].stop(); }
                if (filterObj[filterObjIdPassed].filterSet[0].filterDoEnable)  {
    			 	oObjNext.filters[0].Enabled = false; }
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
function fnFilterTimingGetByIndex()
 {
  return;
}
//
// ..................................................................................... _//
// Filter Timing Get Random
// ...................................... //
function fnFilterTimingGetRandom()
 {
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
function fnFilterGetByIndex(
		filterClassCardinalityPassed, filterClassFixityPassed,
		filterIndexPassed, filterDataRequested, filterCompletionPassed,
		oObjNext, oObjNextImage,
		oObjGroupIndex, oObjGroupImageIndex,
		filterObjIdPassed, filterIdPassed)
{
    // get interger
    filterKey = '';
    filterKeyPrefix = 'progid:';
    filterArguments = '';
	var filterCompletionSet = false;
	var filterCompletionRatio = 1;
	var UsePlay = false;
	var UseEnabled = false;
	if (!filterObj[filterIdPassed]) {
			fnFilterControlCreate(
			        true, 0, 30,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjIdPassed, filterIdPassed); }
	if (filterDataRequested != filterDataCommand) { filterCompletionRatio = filterCompletionPassed; }
	//
	//
	switch(filterClassCardinalityPassed) {
		// ...................................... //
		// Transition from self
        case filterClassSingle:
			// Transition is Motion Oriented (Single)
        	switch(filterClassFixityPassed) {
// ..................................................................................... _//
				// ...................................... //
        		// Transition suited to moveable content (Single)
                case filterClassDynamic:
				    switch(filterIndexPassed) {
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
				    switch(filterIndexPassed) {
                   		case 1:
							// filterKey = '';
                   			// filterArguments += '';
                       		// break;
                		// MotionBlur
                		case filterTypeMotionBlur:
                			// imgHtml += 'progid:DXImageTransform.Microsoft.MotionBlur(strength= 13, direction= 310) ';
                            // filterArguments += 'progid:DXImageTransform.Microsoft.MotionBlur(strength= 13, direction= 310)';
							if (!filterDirectionDegrees) { filterDirectionDegrees= 310; }
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
							UsePlay = true;UseEnabled = true;
                			break;
                		// Pixelate
                		case filterTypePixelate:
                			// filterArguments += '
                			filterKey = 'DXImageTransform.Microsoft.Pixelate';
                         	filterArguments += '(';
                         	filterArguments += '  duration= ' + filterDuration;
							filterArguments += ', maxSquare= ' + filterMaxSquare;
                			filterArguments += ')';
							UsePlay = true;UseEnabled = true;
                			break;
                		// Random Dissolve
                		case filterTypeRandomDissolve:
                			filterKey = 'DXImageTransform.Microsoft.RandomDissolve';
                         	filterArguments += '(';
                         	filterArguments += '  duration= ' + filterDuration;
                         	filterArguments += ', GridSizeX= ' + filterGridSizeX;
                         	filterArguments += ', GridSizeY= ' + filterGridSizeY;
                			filterArguments += ')';
							UsePlay = true;UseEnabled = true;
                			break;		// Spiral
                		case filterTypeSpiral:
                			filterKey = 'DXImageTransform.Microsoft.Spiral';
                         	filterArguments += '(';
                         	filterArguments += '  duration= ' + filterDuration;
                         	filterArguments += ', GridSizeX= ' + filterGridSizeX;
                         	filterArguments += ', GridSizeY= ' + filterGridSizeY;
                			filterArguments += ')';
							UsePlay = true;UseEnabled = true;
                			break;
                		// Stretch
                		case filterTypeStretch:
                         	filterKey = 'DXImageTransform.Microsoft.Stretch';
                         	filterArguments += '(';
                			filterArguments += '  duration= ' + filterDuration;
							filterArguments += ', stretchStyle= ' + filterStretchStyle;
                			filterArguments += ')';
							UsePlay = true;UseEnabled = true;
                    		break;
                		// Strips
                		case filterTypeStrips:
                         	filterKey = 'DXImageTransform.Microsoft.Strips';
                         	filterArguments += '(';
                			filterArguments += '  duration= ' + filterDuration;
                         	filterArguments += ', motion= ' + filterMotionDirectionRightDown;
                			filterArguments += ')';
							UsePlay = true;UseEnabled = true;
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
							UsePlay = true;UseEnabled = true;
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
							UsePlay = true;UseEnabled = true;
                    		break;
                		// Barn
                		case filterTypeBarn:
                            filterKey = 'DXImageTransform.Microsoft.Barn';
                            filterArguments += '(';
                            filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', motion= ' + filterMotionOut;
                            filterArguments += ', orientation= ' + filterOrientationVertical;
                            filterArguments += ')';
							UsePlay = true;UseEnabled = true;
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
							UsePlay = true;UseEnabled = true;
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
							UsePlay = true;UseEnabled = true;
                    		break;
                		// Random Bars
                		case filterTypeRandomBars:
                			filterKey = 'DXImageTransform.Microsoft.RandomBars';
                         	filterArguments += '(';
                         	filterArguments += '  duration= ' + filterDuration;
                            filterArguments += ', orientation= ' + filterOrientationVertical;
                			filterArguments += ')';
							UsePlay = true;UseEnabled = true;
                    		break;
                		// ZigZag
                		case filterTypeZigZag:
                			filterKey = 'DXImageTransform.Microsoft.ZigZag';
                         	filterArguments += '(';
                         	filterArguments += '  duration= ' + filterDuration;
                         	filterArguments += ', GridSizeX= ' + filterGridSizeX;
                         	filterArguments += ', GridSizeY= ' + filterGridSizeY;
                			filterArguments += ')';
							UsePlay = true;UseEnabled = true;
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
							UsePlay = true;UseEnabled = true;
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
        	switch(filterClassFixityPassed) {
// ..................................................................................... _//
				// ...................................... //
        		// Transition suited to moveable content
                case filterClassDynamic:
					//
				    switch(filterIndexPassed) {
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
				    switch(filterIndexPassed) {
                		// Fade
                		case filterTypeFade:
                			 filterKey = 'DXImageTransform.Microsoft.Fade';
                             filterArguments += '(';
                             filterArguments += '  duration= ' + filterDuration;
                			 filterArguments += ')';
							UsePlay = true;UseEnabled = true;
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
		    switch(filterIndexPassed) {
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
    if (filterDataRequested = filterDataCommand) {
		filterCommand = ( filterKeyPrefix + filterKey + filterArguments );
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
    } else  {
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
function fnFilterGetByTagName(filterTagNamePassed)
{
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
function fnFilterGetRandom(filterClassSingle, filterClassDynamic, filterIndex,
				filterDataCommand, filterCompletion,
				filterObjIdPassed, filterIdPassed)
{
 	filterRandom = '';
	if (filterRangeLowPassed < filterRangeLow) { filterRangeLowPassed = filterRangeLow; }
	if (filterRangeLowPassed > filterRangeHigh) { filterRangeLowPassed = filterRangeHigh; }
	if (filterRangeHighPassed < filterRangeLow) { filterRangeHighPassed = filterRangeHigh; }
	if (filterRangeHighPassed > filterRangeHigh) { filterRangeHighPassed = filterRangeLow; }
	if (filterRangeLowPassed > filterRangeHighPassed) { filterRangeLowPassed = filterRangeHighPassed; }
	//
 	filterIndex = fnMathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, realFlagOff);
	//
	filterRandom = fnFilterGetByIndex(filterClassSingle, filterClassDynamic, filterIndex,
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
fnTimerFunctionSet();
// Intervals and Duration
fnTimerDurationSet();
//
// ..................................................................................... _//
// ...................................... //
// Set Filter & Move function (s) for Timers
function fnTimerFunctionSet()
{
    timerFunctionFilterItem  = fnTimerItemDoStepFilter;
    timerFunctionFilterGroup = fnTimerGroupDoStepFilter;
    timerFunctionMoveItem    = fnTimerItemDoStepMove;
    timerFunctionMoveGroup   = fnTimerGroupDoStepMove;
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerDurationSet()
{
	// timerUseTime = true;
    // Timer Control (Move)
	if (timerUseTime) {
		// Animation based on elapsed time
		// elementMoveDuration = 2;// default value
		elementMoveDuration = 3;// default value
		// if (browserIsIE) { elementMoveDuration = elementMoveDuration / 4; } // browser specific default value
		// if (browserIsFF) { elementMoveDuration = 3; } // browser specific default value
		elementMoveStepMin = 10;// default value
		// Max should based on the formula 1000 ms / X ms Interval * Y sec Duration
		elementMoveStepMax = 400;// default value for exceptions and race conditions
		elementMoveInterval = 25;// default value
		elementMoveDelay = 0;// default value
	} else {
		// Animation based on a number of steps
		elementMoveDuration = 2;// default value
		// if (browserIsFF) { elementMoveDuration = 3; } // browser specific default value
		//
		elementMoveStepMin = 25;// default value
		// if (browserIsCH) { elementMoveStepMin = 2 * elementMoveStepMin; } // browser specific default value
		if (browserIsIE) { elementMoveStepMin = elementMoveStepMin / 2; } // browser specific default value
		//
		// Max should not be more than 80 ( 1000ms / 25ms * 2sec)
		elementMoveStepMax = 400;// default value for exceptions and race conditions
		elementMoveInterval = 25;// default value
		elementMoveDelay = 0;// default value
	}
    elementMoveStepsPerSecond = elementMoveStepMin / elementMoveDuration;
    //
    // Timer Control:
    if (!timerDurationOverride) {
        if (!timerDuration) { timerDuration = elementMoveDuration; }
        if (!timerInterval) { timerInterval = elementMoveInterval; }
        if (!timerStepMin) { timerStepMin = elementMoveStepMin; }
        if (!timerStepMax) { timerStepMax = elementMoveStepMax; }
        if (!timerDelay) { timerDelay = elementMoveDelay; }
    }
    timerStepsPerSecond = timerStepMax / timerDuration;
    //
    // Animation Transition Control:
    if (!filterDurationOverride) {
        if (!filterDuration) { filterDuration = elementMoveDuration; }
        if (!filterStepMin) { filterStepMin = elementMoveStepMin; }
        if (!filterStepMax) { filterStepMax = elementMoveStepMax; }
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
function fnTimerItemDeactivate(timerType, timerGroup, timerId, UseRoot)
{
	var timerItemKey = timerId + timerType;
	var timerRootKey = timerRootId + timerType;
	// Timer Type
	var timerLevelKey = new String;
	var LevelCnStart = 1;// Timer Element Item
	if (UseRoot = DoUseRoot || UseRoot == DoUseBoth) {  LevelCnStart = 0; } // Timer Group Item
	//
	for (var LevelCn = LevelCnStart;LevelCn < 2;LevelCn += 1) {
    	if (LevelCn = 0) {
    		timerLevelKey = timerRootKey;
    	} else { timerLevelKey = timerItemKey; }
    	//
		if (timerObj[timerGroup]) {
			if (timerObj[timerGroup] [timerLevelKey]) {
				timerObj[timerGroup] [timerLevelKey].timerInstance = 0;
				timerObj[timerGroup] [timerLevelKey].timerIsRunning = false;
				timerObj[timerGroup] [timerLevelKey].timerIntervalId = 0;
				timerObj[timerGroup] [timerLevelKey].timerIntervalIdPrev = 0;
				timerObj[timerGroup] [timerLevelKey].elementIsDisplayed = elementIsNotDisplayed;
			}
		}
		// deconstruct
		// delete timerObj[timerGroup] [timerLevelKey];
	}
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerItemAbort(timerType, timerGroup, timerId, UseRoot)
{
	var timerItemKey = timerId + timerType;
	var timerRootKey = timerRootId + timerType;
	// Timer Type
	var timerLevelKey = new String;
	var LevelCnStart = 1;// Timer Element Item
	if (UseRoot = DoUseRoot || UseRoot == DoUseBoth) {  LevelCnStart = 0; } // Timer Group Item
	//
	for (var LevelCn = LevelCnStart;LevelCn < 2;LevelCn += 1) {
			if (LevelCn = 0) {
				timerLevelKey = timerRootKey;
			} else { timerLevelKey = timerItemKey; }
			//
			if (timerObj[timerGroup]) {
			if (timerObj[timerGroup] [timerLevelKey]) {
				timerObj[timerGroup] [timerLevelKey].timerDuration= 0;
			}
		}
	}
    // deconstruct
    // delete timerObj[timerGroup] [timerLevelKey];
}
//
// ..................................................................................... _//
// Menu Images Move Action
// fnTimerStartMove();
// ...................................... //
function fnTimerInitialize(timerType, timerGroup, timerId,
		            playDirection,
		            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
		            filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjIdPassed, filterIdPassed)
{
	var timerItemKey = timerId + timerType;
	var timerRootKey = timerRootId + timerType;
	// Timer Group and Image Box
    if(!timerObj) { timerObj = new Array; }
	// Group Level
	// Timer Group Creation
	var timerGroupNew = false;
	var timerItemNew = false;
	if(!timerObj[timerGroup]) { timerObj[timerGroup] = new Array; }
	// Timer Group Creation
	if(!timerObj[timerGroup] [timerRootKey]) {
		timerGroupNew = true;
		timerObj[timerGroup] [timerRootKey] = new Object;
        fnTimerItemDeactivate(timerType, timerGroup, timerId, true);
    }
	//
	// Timer Item Creation
	if(!timerObj[timerGroup] [timerItemKey]) {
	    timerItemNew = true;
    	timerObj[timerGroup] [timerItemKey] = new Object;
        fnTimerItemDeactivate(timerType, timerGroup, timerId, false);
		//
		timerObj[timerGroup] [timerItemKey].elementMoveMethod =
		        timerObj[timerGroup] [timerRootKey].elementMoveMethod;
	}
	//
	if (timerObj[timerGroup] [timerRootKey].timerInstance < 1) {
        //
		timerGroupNew = true;
        if (timerType = timerTypeMove) {
            if (elementMoveMethod != 0) {
                timerObj[timerGroup] [timerRootKey].elementMoveMethod = elementMoveMethod;
            } else {
				if ( playDirection = playDirectionForward) {
					var elementMoveMethodTemp = fnMathNumberRandomGetByRange(1, 3, filterRealFlag);
					if (elementMoveMethodTemp = elementMoveMethodPrev)  {
						elementMoveMethodTemp += 1 - ((elementMoveMethodTemp > 2) * 3); }
					timerObj[timerGroup] [timerRootKey].elementMoveMethod = elementMoveMethodTemp;
					elementMoveMethodPrev = elementMoveMethodTemp;
				}
            }
        } else { timerObj[timerGroup] [timerRootKey].elementMoveMethod = 0; }
	}
	// Timer Type
	var timerLevelKey = new String;
	//
	var LevelCnStart = 1;// Timer Element Item
	// Timer Group Item
	if (timerGroupNew)  {
	    LevelCnStart = 0;
	} else {
        timerObj[timerGroup] [timerRootKey].timerInstance += 1;
        // Date is reset any time item is added
        // Maximum time is measured from the time the last item was added.
        // This will not slow down Items in motion as the have their own
        // time and steps independent of the Group.
    	timerObj[timerGroup] [timerRootKey].timerDateStart = new Date();
	}
	//
	for (var LevelCn = LevelCnStart;LevelCn < 2;LevelCn += 1) {
    	if (LevelCn = 0) {
    		timerLevelKey = timerRootKey;
    	} else { timerLevelKey = timerItemKey; }
    	//
    	switch(timerType) {
        //
    	case timerTypeTransition:
    		// Filter Effects and Transitions applied to the element (Box)
    		// for a period of time.  This is usually sychronized with
    		// a concurrent Move & Resize.
    		// Duration
    		// Timing Moving the object from Origin to Destination (Position)
    		//
        	timerObj[timerGroup] [timerLevelKey].timerDuration = filterDuration;
        	timerObj[timerGroup] [timerLevelKey].timerInterval = filterInterval;
            timerObj[timerGroup] [timerLevelKey].timerDelay = filterDelay;
        	// Step
            timerObj[timerGroup] [timerLevelKey].timerStep = 0;
            timerObj[timerGroup] [timerLevelKey].timerStepsPerSecond = filterStepsPerSecond;
            timerObj[timerGroup] [timerLevelKey].timerStepMin = filterStepMin;
    	    if (LevelCn = 0) {
    	        timerObj[timerGroup] [timerLevelKey].timerStepMin =
    	            timerObj[timerGroup] [timerLevelKey].timerStepMin * imgMaxByGroup[timerId]; }
            timerObj[timerGroup] [timerLevelKey].timerStepMax = filterStepMax;
    	    if (LevelCn = 0) {
    	        timerObj[timerGroup] [timerLevelKey].timerStepMax =
    	            timerObj[timerGroup] [timerLevelKey].timerStepMax * imgMaxByGroup[timerId]; }
            timerObj[timerGroup] [timerLevelKey].timerStepCurr = 0;
            timerObj[timerGroup] [timerLevelKey].timerIntervalStep = 0;
        	//
            timerObj[timerGroup] [timerLevelKey].elementMoveStepLeft = 0;
            timerObj[timerGroup] [timerLevelKey].elementMoveStepTop = 0;
    		//
    		break;
            //
    	case timerTypeMove:
    		// Filter Effects and Transitions applied to the element (Box)
    		// for a period of time.  This is usually sychronized with
    		// a concurrent Move & Resize.
    		// Timing Moving the object from Origin to Destination (Position)
    		// Duration
        	timerObj[timerGroup] [timerLevelKey].timerDuration = elementMoveDuration;
        	timerObj[timerGroup] [timerLevelKey].timerInterval = elementMoveInterval;
            timerObj[timerGroup] [timerLevelKey].timerDelay = elementMoveDelay;
        	// Step
            timerObj[timerGroup] [timerLevelKey].timerStep = 0;
            timerObj[timerGroup] [timerLevelKey].timerStepsPerSecond = elementMoveStepsPerSecond;
            timerObj[timerGroup] [timerLevelKey].timerStepMin = elementMoveStepMin;
    	    if (LevelCn = 0) {
    	        timerObj[timerGroup] [timerLevelKey].timerStepMin =
    	            timerObj[timerGroup] [timerLevelKey].elementMoveStepMin * imgMaxByGroup[timerId]; }
            timerObj[timerGroup] [timerLevelKey].timerStepMax = elementMoveStepMax;
    	    if (LevelCn = 0) {
    	        timerObj[timerGroup] [timerLevelKey].timerStepMax =
    	            timerObj[timerGroup] [timerLevelKey].elementMoveStepMax * imgMaxByGroup[timerId]; }
            timerObj[timerGroup] [timerLevelKey].timerStepCurr = 0;
        	//
            timerObj[timerGroup] [timerLevelKey].elementMoveStepLeft = 0;
            timerObj[timerGroup] [timerLevelKey].elementMoveStepTop = 0;
    		//
    		break;
    	default:
    		// Filter Effects and Transitions applied to the element (Box)
    		// for a period of time.  This is usually sychronized with
    		// a concurrent Move & Resize.
    		// Timing Moving the object from Origin to Destination (Position)
    		// Duration
        	timerObj[timerGroup] [timerLevelKey].timerDuration = timerDuration;
        	timerObj[timerGroup] [timerLevelKey].timerInterval = timerInterval;
            timerObj[timerGroup] [timerLevelKey].timerDelay = timerDelay;
        	// Step
            timerObj[timerGroup] [timerLevelKey].timerStep = 0;
            timerObj[timerGroup] [timerLevelKey].timerStepsPerSecond = timerStepsPerSecond;
            timerObj[timerGroup] [timerLevelKey].timerStepMin = timerStepMin;
    	    if (LevelCn = 0) {
    	        timerObj[timerGroup] [timerLevelKey].timerStepMin =
    	            timerObj[timerGroup] [timerLevelKey].timerStepMin * imgMaxByGroup[timerId]; }
            timerObj[timerGroup] [timerLevelKey].timerStepMax = timerStepMax;
    	    if (LevelCn = 0) {
    	        timerObj[timerGroup] [timerLevelKey].timerStepMax =
    	            timerObj[timerGroup] [timerLevelKey].timerStepMax * imgMaxByGroup[timerId]; }
            timerObj[timerGroup] [timerLevelKey].timerStepCurr = 0;
        	//
            timerObj[timerGroup] [timerLevelKey].elementMoveStepLeft = 0;
            timerObj[timerGroup] [timerLevelKey].elementMoveStepTop = 0;
    		//
    		break;
    	}
    	//
    	// Element Level Functions
        timerObj[timerGroup] [timerLevelKey].timerType = timerType;
        timerObj[timerGroup] [timerLevelKey].timerGroup = timerGroup;
        timerObj[timerGroup] [timerLevelKey].timerId = timerId;
		timerObj[timerGroup] [timerLevelKey].timerRootKey = timerRootKey;
		//
        // For Root objects, the object that started the chain of events.
        timerObj[timerGroup] [timerLevelKey].oObj = oObjNext;
        timerObj[timerGroup] [timerLevelKey].id = oObjNext.id;
        //
        timerObj[timerGroup] [timerLevelKey].timerStepCurr = 0;
    	// Image
        timerObj[timerGroup] [timerLevelKey].oObjImage = oObjNextImage;
    	timerObj[timerGroup] [timerLevelKey].timerDateStart = new Date();
    	timerObj[timerGroup] [timerLevelKey].timerDateEnd = null;
    	timerObj[timerGroup] [timerLevelKey].timerElapsed = 0;
    	timerObj[timerGroup] [timerLevelKey].timerMethod = timerMethodPassed;
    	//
        timerObj[timerGroup] [timerLevelKey].FunctionGroup = timerFunctionGroupPassed;
        timerObj[timerGroup] [timerLevelKey].FunctionItm = timerFunctionItemPassed;
        // Origin and Postion of Element
        timerObj[timerGroup] [timerLevelKey].elementLeftDest = elementLeftDest;
        timerObj[timerGroup] [timerLevelKey].elementTopDest = elementTopDest;
        timerObj[timerGroup] [timerLevelKey].elementLeftOrig = elementLeftOrig;
        timerObj[timerGroup] [timerLevelKey].elementTopOrig = elementTopOrig;
        //
    	// Methos, Behaviors, etc...
        timerObj[timerGroup] [timerLevelKey].filterPlayAll = filterPlayAll;
        timerObj[timerGroup] [timerLevelKey].filterObjId = filterObjIdPassed;
        timerObj[timerGroup] [timerLevelKey].filterId = filterIdPassed;
    	// Range of objects in group, original command scope
        timerObj[timerGroup] [timerLevelKey].startIndex = startIndex;
        timerObj[timerGroup] [timerLevelKey].endIndex = endIndex;
        //
        timerObj[timerGroup] [timerLevelKey].timerInstance += 1;
        //
        if (LevelCn = 1) {
	        if (timerMethod = timerMethodGroup) {
	            timerObj[timerGroup] [timerLevelKey].timerIntervalId
	                    = timerObj[timerGroup] [timerRootKey].timerIntervalId;
		        //
		        timerObj[timerGroup] [timerLevelKey].elementMoveMethod =
		                timerObj[timerGroup] [timerRootKey].elementMoveMethod;
				//
				timerObj[timerGroup] [timerLevelKey].playDirection =
							timerObj[timerGroup] [timerRootKey].playDirection;
	        } else {
				timerObj[timerGroup] [timerLevelKey].playDirection = playDirection;
			}
            // Display / visibility (& Filter triggering)
    	    timerObj[timerGroup] [timerLevelKey].elementIsDisplayed = elementIsNotDisplayed;
		} else {
			timerObj[timerGroup] [timerRootKey].playDirection = playDirection;
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
function fnTimerStart(timerType, timerGroup, timerId,
                timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
                timerDelayPassed)
{
	var timerItemKey = timerId + timerType;
	var timerRootKey = timerRootId + timerType;
    timerTen = 0;
    timerStarted += 1;
    timerObj[timerGroup] [timerItemKey].timerElapsed = 0;
	timerObj[timerGroup] [timerItemKey].timerCompletion = 0;
    timerIdCurr = timerId;
    var timerIsRunning = false;
	var debugFunctionIsOn = false;
	if (debugTimer && (
		(timerMethod = timerMethodItem && debugTimerDetail)
		|| (timerMethod = timerMethodGroup)
	) ) {
		if ( (debugTimerTransition && timerType == timerTypeTransition)
			|| (debugTimerMove && timerType == timerTypeMove) ) {
			debugFunctionIsOn = true;
		}
	}
    //
	if (timerObj[timerGroup] [timerItemKey].timerIsRunning) { timerIsRunning = true; } else {
		if ((timerMethod = timerMethodItem && !timerObj[timerGroup] [timerItemKey].timerIsRunning)
		    || !timerObj[timerGroup] [timerRootKey].timerIsRunning
		    ) {
			// One timer per Item or Element (per Timer Type)
			// Start this Item's Group Timer is it is not already running
			//
			var tempMethodFunc;
			if (timerMethod = timerMethodGroup) {
			    tempMethodFunc = timerFunctionGroupPassed;
			} else {
			    tempMethodFunc = timerFunctionItemPassed;
			}
			//
		    if ((timerMethod = timerMethodItem
		            && !timerObj[timerGroup] [timerItemKey].timerIsRunning)
		        || (timerMethod = timerMethodGroup
		            && !timerObj[timerGroup] [timerRootKey].timerIsRunning)
		     ) {
                if (!timerObj[timerGroup] [timerRootKey].timerIntervalId) {
	                var tempFunc = function() { fnTimerSet(
					        timerType, timerGroup, timerId,
					        tempMethodFunc, timerDelayPassed,
                            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed); };
			        //
                    vTimerStart= window.setTimeout(
                            tempFunc,
                            timerDelayPassed);
                    //
                    if (vTimerStart) {
                        timerObj[timerGroup] [timerItemKey].timerIntervalId = -1;
	                    if (timerMethod = timerMethodGroup) { timerObj[timerGroup] [timerRootKey].timerIntervalId = -1; }
                    }
                    //
                    if (debugFunctionIsOn) {
						fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
								fnTimerLogText(timerType, timerGroup, timerId,
									(timerMethod - timerMethodGroup) ? DoNotUseRoot : DoUseRoot,
									timerObj[timerGroup] [timerItemKey].playDirection, 'Timer Pending')
                                + ', Timer Delayed Start '
								+ ( vTimerStart ? 'Ok' : 'Failed')
								+ ( vTimerStart ? '.' : '!!!'),
								'fnTimerStart', 4557, null, null,
								errorComment, errorDoNotDisplayTag, errorDoNotAlert);
                        //
                    }
                    //
                }
			} else { timerIsRunning = true; }
			//
			if (!timerObj[timerGroup] [timerRootKey].timerIsRunning) {
			    // date is reset on any call here,
			    // allows items to be added late in the cycle...
                timerObj[timerGroup] [timerRootKey].timerIsRunning = true;
                timerObj[timerGroup] [timerRootKey].timerDateStart = new Date();
			}
		} else { timerIsRunning = true; }
		//
        timerObj[timerGroup] [timerItemKey].timerIsRunning = true;
        timerObj[timerGroup] [timerItemKey].timerDateStart = new Date();
	}
   	//
   	if (timerIsRunning) {
	    if (timerMethod = timerMethodGroup)  {
	        timerObj[timerGroup] [timerItemKey].timerIntervalId = timerObj[timerGroup] [timerRootKey].timerIntervalId;
	    }
	    //
		if (debugFunctionIsOn) {
			fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
					timerObj[timerGroup] [timerItemKey].playDirection, 'Timer Running')
					+ ', Already running'
					+ '.',
					'fnTimerStart', 4587, null, null,
					errorComment, errorDoNotDisplayTag, errorDoNotAlert);
			//
        }
    }
}
//
// ..................................................................................... _//
// Timer Set
// ...................................... //
// Set up interval at which the timer will fire.
function fnTimerSet(timerType, timerGroup, timerId,
                timerFunctionPassed, timerDelayPassed,
                timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed
    			) {
	var timerItemKey = timerId + timerType;
	var timerRootKey = timerRootId + timerType;
    var tempFunc = new String();
    tempFunc = function() { timerFunctionPassed(timerType, timerGroup, timerId); };// fnTimerMoveStepDo
    //
	var debugFunctionIsOn = false;
	if (debugTimer && (
		(timerMethod = timerMethodItem && debugTimerDetail)
		|| (timerMethod = timerMethodGroup)
	) ) {
		if ( (debugTimerTransition && timerType == timerTypeTransition)
			|| (debugTimerMove && timerType == timerTypeMove) ) {
			debugFunctionIsOn = true;
		}
	}
    //
	if ( (timerMethod = timerMethodItem && !(timerObj[timerGroup] [timerItemKey].timerIntervalId > 0) )
	    || !(timerObj[timerGroup] [timerRootKey].timerIntervalId > 0)
	    ) {
        vTimerID= window.setInterval(
            tempFunc,
            timerInterval
            );
        //
        timerObj[timerGroup] [timerItemKey].timerIntervalId = vTimerID;
	    if (timerMethod = timerMethodGroup) { timerObj[timerGroup] [timerRootKey].timerIntervalId = vTimerID; }
        //
        if (debugFunctionIsOn) {
			fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, timerObj[timerGroup] [timerItemKey].playDirection, 'Interval Started')
					+ '.',
					'fnTimerSet', 4633, null, null,
					errorComment, errorDoNotDisplayTag, errorDoNotAlert);
			//
        }
    } else {
        //
	    if (timerMethod = timerMethodGroup)  {
	        timerObj[timerGroup] [timerItemKey].timerIntervalId = timerObj[timerGroup] [timerRootKey].timerIntervalId;
	    }
	    //
        if (debugFunctionIsOn) {
			fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
					timerObj[timerGroup] [timerItemKey].playDirection, 'Interval Running')
					+ ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
					+ ', Already running, delayed start not done'
					+ '.',
					'fnTimerSet', 4649, null, null,
					errorComment, errorDoNotDisplayTag, errorDoNotAlert);
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
// fnTimerStartFilter
// ...................................... //
function fnTimerStartFilter(playDirection,
                    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
                    filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjIdPassed, filterIdPassed)
{
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
	    if (!timerObj[timerGroup] [timerItemKey]) { timerReset = true; } else {
		    //
		    if ( playDirection = playDirectionForward) {
		        if (timerObj[timerGroup] [timerItemKey].elementIsDisplayed != elementIsDisplayed) { timerReset = true; }
		    } else {
		        if (timerObj[timerGroup] [timerItemKey].elementIsDisplayed != elementIsNotDisplayed) { timerReset = true; }
		    }
		    if (timerObj[timerGroup] [timerItemKey].timerIsRunning) { timerReset = false; }
	    }
	}
	// Constructor
    if (timerReset)  {
    	fnTimerInitialize(timerType, timerGroup, timerId,
		            playDirection,
		            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
		            filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjIdPassed, filterIdPassed)
        if (debugTimer && debugTimerTransition) {
			// && debugTimerDetail
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
					timerObj[timerGroup] [timerItemKey].playDirection, 'Item Add')
                    + ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
                    + ', Item added to group'
                    + ' at ' + Date()
					+ '.',
                    'fnTimerStartFilter', 4708, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
		//
    	// timerObj[timerGroup] [timerItemKey].elementIsDisplayed = elementIsDisplayed;
		//
    } else if (timerObj[timerGroup] [timerItemKey].timerIsRunning) {
		// Timer exists and is currently busy.
        if (debugTimer && debugTimerTransition) {
			// && debugTimerDetail
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
					timerObj[timerGroup] [timerRootKey].playDirection, 'Timing DoStep')
                    + ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
                    + ', Already running, perform single step'
					+ '.',
                    'fnTimerStartFilter', 4723, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
        //
	    if (timerMethod = timerMethodGroup)  {
	        timerObj[timerGroup] [timerItemKey].timerIntervalId = timerObj[timerGroup] [timerRootKey].timerIntervalId;
	    }
	    //
		fnTimerItemDoStepFilter(timerType, timerGroup, timerId);
        return;
    }
	// Create new timers
    timerObj[timerGroup] [timerItemKey].elementMoveStepLeft = 0;
    timerObj[timerGroup] [timerItemKey].elementMoveStepTop = 0;
    //
    // ...................................... //
    if (debugTimer && debugTimerTransition) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
					timerObj[timerGroup] [timerItemKey].playDirection, 'Timer Start')
					+ ', Timer Start command being issued now'
					+ '.',
                'fnTimerStartFilter', 4744, null, null,
                errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    fnTimerStart(timerType, timerGroup, timerId,
            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
            timerDelay);
    //
    // ...................................... //
    //
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerStartMove(playDirection,
                    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
                    filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjIdPassed, filterIdPassed)
{
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
	    if (!timerObj[timerGroup] [timerItemKey]) { timerReset = true; } else {
	        timerReset = false;
		    //
		    if (playDirection = playDirectionForward) {
		        if (timerObj[timerGroup] [timerItemKey].elementIsDisplayed != elementIsDisplayed) { timerReset = true; }
		    } else {
		        if (timerObj[timerGroup] [timerItemKey].elementIsDisplayed != elementIsNotDisplayed) { timerReset = true; }
		    }
		    if (timerObj[timerGroup] [timerItemKey].timerIsRunning) { timerReset = false; }
	    }
	}
	//
	if (timerReset)  {
        //
    	fnTimerInitialize(timerType, timerGroup, timerId,
		    playDirection,
		    timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
            filterPlayAll, startIndex, endIndex,
            oObjNext, oObjNextImage,
            oObjGroupIndex, oObjGroupImageIndex,
            filterObjIdPassed, filterIdPassed);
        //
        if (debugTimer && debugTimerMove) {
			// && debugTimerDetail
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
					timerObj[timerGroup] [timerItemKey].playDirection, 'Item Add')
                    + ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
                    + ', Item added to group'
                    + ' at ' + Date()
					+ '.',
                    'fnTimerStartMove', 4807, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
		//
    	// timerObj[timerGroup] [timerItemKey].elementIsDisplayed = elementIsDisplayed;
		//
    } else if (timerObj[timerGroup] [timerItemKey].timerIsRunning) {
		// Timer Already Exists...
        if (debugTimer && debugTimerMove) {
			// && debugTimerDetail
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
					timerObj[timerGroup] [timerItemKey].playDirection, 'Timing DoStep')
                    + ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
                    + ', Already running, perform single step'
					+ '.',
                    'fnTimerStartMove', 4822, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
		fnTimerItemDoStepMove(timerType, timerGroup, timerId);
        return;
    }
    //
    // ...................................... //
    // Set Style Left for menu image box
    // oObj.style.left = elementLeftOrig;
    // ...................................... //
    // Set Style Top for menu image box
    // oObj.style.top = elementTopOrig;
    //
    // ...................................... //
    // fnElementMove
    //
	// Distance
    moveDistanceLeft = Math.abs(elementLeftDest - elementLeftOrig);
    timerObj[timerGroup] [timerItemKey].moveDistanceLeft = moveDistanceLeft;
    //
    moveDistanceTop = Math.abs(elementTopDest - elementTopOrig);
    timerObj[timerGroup] [timerItemKey].moveDistanceTop = moveDistanceTop;
    //
    moveDistance = Math.sqrt( Math.pow(moveDistanceTop, 2) + Math.pow(moveDistanceLeft, 2) );
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
	timerObj[timerGroup] [timerItemKey].moveOffsetLeft = moveOffsetLeft;
	timerObj[timerGroup] [timerItemKey].moveOffsetTop = moveOffsetTop;
    //
    // ...................................... //
    if (debugTimer && debugTimerMove) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, null, 'Timer Start')
                + ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
                + ', Orig: ( ' + elementTopOrig + ', ' + elementLeftOrig + ' )'
                + ', Dest: ( ' + elementTopDest + ', ' + elementLeftDest + ' )'
				+ ', Offset: ( ' + moveOffsetTop + ', ' + moveOffsetLeft + ' )'
				+ ', Move Top:' + moveDistanceTop
				+ ', Move Left:' + moveDistanceLeft
				+ '.',
                'fnTimerStartMove', 4873, null, null,
                errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    fnTimerStart(timerType, timerGroup, timerId,
            timerMethodPassed, timerFunctionGroupPassed, timerFunctionItemPassed,
            timerDelay);
    //
    // ...................................... //
    //
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerGroupDoStepFilter(timerType, timerGroup, timerId)
{
	var timerItemKey = timerId + timerType;
	var timerRootKey = timerRootId + timerType;
	var timerIdCurr;
	var timerIdCnMax = timerObj[timerGroup].length;
	var timerIsActive = false;
	var timerDoAbort = false;
    var timerInstanceIsDone = false;
    //
	timerObj[timerGroup] [timerRootKey].timerIntervalStep += 1;
	//
    if (debugTimer && debugTimerTransition) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, null, 'Group In')
            + ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
            + ', Step:' + timerObj[timerGroup] [timerRootKey].timerStepCurr
            + ', Time:' + Date()
			+ ', Starting Group'
			+ '.',
            'fnTimerGroupDoStepMove', 5111, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	// Process elements
	for (timerIdCurr = 1;timerIdCurr < 1+imgMaxByGroup[timerGroup];timerIdCurr++)  {
		//
		timerItemKey = timerIdCurr + timerType;
		if (timerObj[timerGroup] [timerItemKey]) {
		    if (timerObj[timerGroup] [timerItemKey].timerIsRunning) {
		        timerInstanceIsDone = fnTimerItemDoStepFilter(timerType, timerGroup, timerIdCurr);
		        if (!timerInstanceIsDone) { timerIsActive = true; }
		    }
		}
	}
	//
    if ( timerObj[timerGroup] [timerRootKey].timerStepCurr > timerObj[timerGroup] [timerRootKey].timerStepMax)  {
        fnErrorOccured(DoNotUseDebug, DoNotUseSingeLine,
			fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, null, 'Group Step Max')
            + ', Transition Group Timer Maximum (' + timerObj[timerGroup] [timerRootKey].timerStepMax
            + ') number of interval steps (' + timerObj[timerGroup] [timerRootKey].timerStepCurr
            + ') exceeded'
			+ '!!!',
            'fnTimerGroupDoStepFilter', 5134, null, null,
            errorSevere, errorDoNotDisplayTag, errorDoNotAlert);
        timerDoAbort = true;
    }
	//
	if (timerDoAbort || (!timerIsActive && timerObj[timerGroup] [timerRootKey].timerInstance < 1) ) {
	    // Turn Off Timer
      	var timerIntervalId;
      	timerIntervalId = timerObj[timerGroup] [timerRootKey].timerIntervalId;
      	//
      	window.clearInterval(timerIntervalId);
      	//
        timerStarted -= 1;
        timerObj[timerGroup] [timerRootKey].timerIntervalIdPrev = timerIntervalId;
        timerObj[timerGroup] [timerRootKey].timerIntervalId = 0;
        //
        timerObj[timerGroup] [timerRootKey].timerDateEnd = new Date();
		timerObj[timerGroup] [timerRootKey].timerIsRunning = false;
		//
		if ( timerObj[timerGroup] [timerRootKey].playDirection = playDirectionForward ) {
		    timerObj[timerGroup] [timerRootKey].elementIsDisplayed = elementIsDisplayed;
		} else { timerObj[timerGroup] [timerRootKey].elementIsDisplayed = elementIsNotDisplayed; }
        //
        //
        if (debugTimer && debugTimerTransition) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoUseRoot,
					timerObj[timerGroup] [timerRootKey].playDirection, 'Group Stop Timer')
                    + ', Interval Stopped'
					+ ', Stopping Group Timer'
					+ '.',
                    'fnTimerGroupDoStepFilter', 5164, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
	}
	//
    if (debugTimer && debugTimerTransition) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			fnTimerLogText(timerType, timerGroup, timerId, DoUseRoot,
			timerObj[timerGroup] [timerRootKey].playDirection, 'Group Out')
            + ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
            + ', Step:' + timerObj[timerGroup] [timerRootKey].timerStepCurr
            + ', Time:' + Date()
			+ ', Leaving process Group'
			+ '.',
            'fnTimerGroupDoStepFilter', 5177, null, null,
            errorElementComment, true, false);
        //
        if (!timerIsActive && timerObj[timerGroup] [timerRootKey].timerInstance < 1) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoUseRoot,
				timerObj[timerGroup] [timerRootKey].playDirection, 'Group End')
                + ', Finished Group'
				+ '.',
                'fnTimerGroupDoStepFilter', 5185, null, null,
                errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
    }
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerItemDoStepFilter(timerType, timerGroup, timerId)
{
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
    timerObj[timerGroup] [timerRootKey].timerStepCurr += 1;
    //
    if (!timerObj[timerGroup] [timerItemKey]) {
        errorLogLine = 'Invalid Timer Object Error!';
	    errorLogLine += charNewLineTag + charTextIndex;
        errorLogLine += fnTimerKeyText(timerType, timerGroup, timerId);
	    errorLogLine += charNewLineTag + charTextIndex;
        errorLogLine += fnTimerRootKeyText(timerType, timerGroup, timerId);
        fnWindowError(errorLogLine, 'fnTimerItemDoStepFilter', 4257);
    }
    //
    timerObj[timerGroup] [timerItemKey].timerStepCurr += 1;
	timerObj[timerGroup] [timerItemKey].timerIntervalStep += 1;
	//
    if (timerObj[timerGroup] [timerItemKey].timerStepCurr = 1)  {
        tempMoveInProgress = false;// ******* what? *******
    }
    //
    if (timerObj[timerGroup] [timerItemKey].timerIntervalId = -1) {
    	timerObj[timerGroup] [timerItemKey].timerIntervalId = timerObj[timerGroup] [timerRootKey].timerIntervalId;
    }
    //
    // ...................................... //
    // Set Completion for Step Based or Time Based execution
    if (timerUseTime) {
		//
		timerDateElps = fnTimerGetElapsed(timerType, timerGroup, timerId);
        timerCompletion = timerTimeCompletion = timerDateElps / ( timerObj[timerGroup] [timerItemKey].timerDuration * 1000 );
        if ( timerCompletion > 1 ) { tempTimeOrStepsCompleted = true; }
        //
    } else {
        timerCompletion = timerStepCompletion = timerObj[timerGroup] [timerItemKey].timerStepCurr
                / timerObj[timerGroup] [timerItemKey].timerStepMin;
        //
        if ( timerObj[timerGroup] [timerItemKey].timerStepCurr > timerObj[timerGroup] [timerItemKey].timerStepMin ) {
            tempTimeOrStepsCompleted = true; }
    }
    //
    var tempPosTop;
    var tempPosLeft;
    //
    // Stop if maximum # of steps exceeded
    if ( timerObj[timerGroup] [timerItemKey].timerStepCurr > timerObj[timerGroup] [timerItemKey].timerStepMax)  {
        fnErrorOccured(DoNotUseDebug, DoNotUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
				timerObj[timerGroup] [timerItemKey].playDirection, 'StepStopItem')
				+ ', At: ( t' + timerObj[timerGroup] [timerItemKey].oObj.style.top
				+ ', l' + timerObj[timerGroup] [timerItemKey].oObj.style.left
				+ ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5343 ' + ')'
                + ', Transition Maximum (' + timerObj[timerGroup] [timerItemKey].timerStepMax
                + ') number of interval steps (' + timerObj[timerGroup] [timerItemKey].timerStepCurr
                + ') exceeded' + '!!!',
                'fnTimerItemDoStepFilter', 5251, null, null,
                errorElementWarn, errorDoNotDisplayTag, errorDoNotAlert);
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
		timerObj[timerGroup] [timerRootKey].timerInstance -= 1;
		if (timerMethod = timerMethodGroup) {
		    // Group Timer
      		timerIntervalId = timerObj[timerGroup] [timerRootKey].timerIntervalId;
		} else if (timerMethod = timerMethodItem) {
		    // Item Timer
  			// Turn Off Timer
      		timerIntervalId = timerObj[timerGroup] [timerItemKey].timerIntervalId;
      		//
          	window.clearInterval(timerIntervalId);
          	//
            if (debugTimer && debugTimerDetail && debugTimerTransition) {
                fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
					timerObj[timerGroup] [timerItemKey].playDirection, 'Stop')
					+ ', At: ( t' + timerObj[timerGroup] [timerItemKey].oObj.style.top
					+ ', l' + timerObj[timerGroup] [timerItemKey].oObj.style.left
					+ ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5343 ' + ')'
                    + ', Interval Stopped'
					+ '.',
                    'fnTimerItemDoStepFilter', 5284, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
            }
            //
            timerStarted -= 1;
            timerObj[timerGroup] [timerItemKey].timerIntervalIdPrev = timerIntervalId;
            timerObj[timerGroup] [timerItemKey].timerIntervalId = 0;
            //
		}
        if (filterResizeIsOn && !timerObj[timerGroup] [timerItemKey].elementIsDisplayed) {
            var temp;
            if (playDirection = playDirectionForward) { temp = 1; } else { temp = 0.05; }
			fnFilterResize(timerObj[timerGroup] [timerItemKey].oObj, filterClassMatrix, temp);
		}
        // if (filterObj[filterObjIdPassed].filterSet[0].filterDoStop) {
    	// (filterPlayAll, startIndex, endIndex,
    	// oObjNext, oObjNextImage, filterObjIdPassed, filterIdPassed);
        fnFilterStop(
    			timerObj[timerGroup] [timerItemKey].filterPlayAll,
    			timerObj[timerGroup] [timerItemKey].startIndex,
    			timerObj[timerGroup] [timerItemKey].endIndex,
				timerObj[timerGroup] [timerItemKey].oObj,
    			timerObj[timerGroup] [timerItemKey].oObjImage,
    			timerGroup,
    			timerId,
    			timerObj[timerGroup] [timerItemKey].filterObjId,
    			timerObj[timerGroup] [timerItemKey].filterId
    			);
		// }
		//
        timerObj[timerGroup] [timerItemKey].timerDateEnd = new Date();
		timerObj[timerGroup] [timerItemKey].timerIsRunning = false;
		//
		if ( timerObj[timerGroup] [timerItemKey].playDirection = playDirectionForward ) {
		    timerObj[timerGroup] [timerItemKey].elementIsDisplayed = elementIsDisplayed;
		} else  {
		    if (elementMoveDuration < filterDuration) {
		        timerObj[timerGroup] [timerItemKey].oObj.style.display = 'none';
		    }
		    timerObj[timerGroup] [timerItemKey].elementIsDisplayed = elementIsNotDisplayed;
		}
		tempFilterInProgress || tempTimeOrStepsCompleted
        //
        if (debugTimer && debugTimerDetail && debugTimerTransition) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
				timerObj[timerGroup] [timerItemKey].playDirection, 'Stop')
				+ ', At: ( t' + timerObj[timerGroup] [timerItemKey].oObj.style.top
				+ ', l' + timerObj[timerGroup] [timerItemKey].oObj.style.left
				+ ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5331 ' + ').',
				+ ', Stopping Item Timer'
				+ '.',
                'fnTimerItemDoStepFilter', 5331, null, null,
                errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
	} else {
        if (debugTimer && debugTimerDetail && debugTimerTransition) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
				timerObj[timerGroup] [timerItemKey].playDirection, 'SkipItem')
				+ ', At: ( t' + timerObj[timerGroup] [timerItemKey].oObj.style.top
				+ ', l' + timerObj[timerGroup] [timerItemKey].oObj.style.left
				+ ' : c' + tempTimeOrStepsCompleted + ' : m' + tempFilterInProgress + ' : l5343 ' + ')'
                + ', Elapsed:' + timerObj[timerGroup] [timerItemKey].timerElapsed / 1000
                + ', Step:' + timerObj[timerGroup] [timerItemKey].timerStepCurr
                + ', Time:' + Date()
				+ ', Exiting Item but no action'
				+ '.',
                'fnTimerItemDoStepFilter', 5343, null, null,
                errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	    }
	}
    return timerInstanceIsDone;
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerGroupDoStepMove(timerType, timerGroup, timerId)
{
	var timerItemKey = timerId + timerType;
	var timerRootKey = timerRootId + timerType;
	var timerIdCurr;
	var timerIdCnMax = timerObj[timerGroup].length;
	var timerIsActive = false;timerDoAbort = false;
    var timerInstanceIsDone = false;
	//
    timerObj[timerGroup] [timerRootKey].timerIntervalStep += 1;
    //
    if (debugTimer && debugTimerMove) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			fnTimerLogText(timerType, timerGroup, timerId, DoUseRoot,
			timerObj[timerGroup] [timerItemKey].playDirection, 'Group In')
            + ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
            + ', Step:' + timerObj[timerGroup] [timerRootKey].timerStepCurr
            + ', Time:' + Date()
			+ ', Starting Group'
			+ '.',
            'fnTimerGroupDoStepMove', 5371, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	// Process elements
	for (timerIdCurr = 1;timerIdCurr < 1+imgMaxByGroup[timerGroup];timerIdCurr++)  {
		//
		timerIsActive = false;
		timerItemKey = timerIdCurr + timerType;
		if (timerObj[timerGroup] [timerItemKey]) {
		    if (timerObj[timerGroup] [timerItemKey].timerIsRunning) {
		        timerInstanceIsDone = fnTimerItemDoStepMove(timerType, timerGroup, timerIdCurr);
		        if (!timerInstanceIsDone) { timerIsActive = true; }
		    }
		}
	}
	//
    if ( timerObj[timerGroup] [timerRootKey].timerStepCurr > timerObj[timerGroup] [timerRootKey].timerStepMax)  {
        fnErrorOccured(DoNotUseDebug, DoNotUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoUseRoot,
				timerObj[timerGroup] [timerRootKey].playDirection, 'Group Step Max')
                + 'Move.. Group Timer Maximum (' + timerObj[timerGroup] [timerRootKey].timerStepMax
                + ') number of interval steps (' + timerObj[timerGroup] [timerRootKey].timerStepCurr
                + ') exceeded'
				+ '!!!',
                'fnTimerGroupDoStepMove', 5393, null, null,
                errorSevere, errorDoNotDisplayTag, errorDoNotAlert);
        timerDoAbort = true;
    }
	//
	if (timerDoAbort || (!timerIsActive && timerObj[timerGroup] [timerRootKey].timerInstance < 1) ) {
	    // Turn Off Timer
      	var timerIntervalId;
      	timerIntervalId = timerObj[timerGroup] [timerRootKey].timerIntervalId;
      	window.clearInterval(timerIntervalId);
        timerStarted -= 1;
        timerObj[timerGroup] [timerRootKey].timerIntervalIdPrev = timerIntervalId;
        timerObj[timerGroup] [timerRootKey].timerIntervalId = 0;
        //
        timerObj[timerGroup] [timerRootKey].timerDateEnd = new Date();
		timerObj[timerGroup] [timerRootKey].timerIsRunning = false;
		//
		if ( timerObj[timerGroup] [timerRootKey].playDirection = playDirectionForward ) {
		    timerObj[timerGroup] [timerRootKey].elementIsDisplayed = elementIsDisplayed;
		} else { timerObj[timerGroup] [timerRootKey].elementIsDisplayed = elementIsNotDisplayed; }
        //
        if (debugTimer && debugTimerMove) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoUseRoot,
				timerObj[timerGroup] [timerRootKey].playDirection, 'Group Stop Timer')
				+ ', Stopping Group Timer'
				+ '.',
                'fnTimerGroupDoStepMove', 5419, null, null,
                errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
	}
	//
    if (debugTimer && debugTimerMove) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			fnTimerLogText(timerType, timerGroup, timerId, DoUseRoot,
			timerObj[timerGroup] [timerRootKey].playDirection, 'Group Out')
            + ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
            + ', Step:' + timerObj[timerGroup] [timerRootKey].timerStepCurr
            + ', Time:' + Date()
			+ ', Leaving process Group'
			+ '.',
            'fnTimerGroupDoStepMove', 54, null, null,
            errorElementComment, true, false);
        //
	    if (!timerIsActive && timerObj[timerGroup] [timerRootKey].timerInstance < 1) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoUseRoot,
				timerObj[timerGroup] [timerRootKey].playDirection, 'End')
                + ', Finished Group'
				+ '.',
                'fnTimerGroupDoStepMove', 5440, null, null,
                errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            //
	    }
	}
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerItemDoStepMove(timerType, timerGroup, timerId)
{
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
    var tempPosTop = -1;var tempPosLeft = -1;
	var playDirection = timerObj[timerGroup] [timerItemKey].playDirection;
	var elementMoveMethod = timerObj[timerGroup] [timerItemKey].elementMoveMethod;
	var DoMove = false;
	var IsRising = false;var IsRisingFactor = 1;
	var isRightward = false;var isRightwardFactor = -1;
	// ...................................... //
	// Set Timer for new menu image box
    if (timerObj[timerGroup] [timerItemKey].timerIntervalId = -1) {
    	timerObj[timerGroup] [timerItemKey].timerIntervalId = timerObj[timerGroup] [timerRootKey].timerIntervalId;
    }
	// ...................................... //
    // Validate Object
    if (!timerObj[timerGroup] [timerItemKey]) {
        var errorLogLine = 'Invalid Timer Object Error!';
	    errorLogLine += charNewLineTag + charTextIndex;
        errorLogLine += fnTimerKeyText(timerType, timerGroup, timerId);
	    errorLogLine += charNewLineTag + charTextIndex;
        errorLogLine += fnTimerRootKeyText(timerType, timerGroup, timerId);
        fnWindowError(errorLogLine, 'fnTimerItemDoStepFilter', 4258);
    }
	// ...................................... //
	// Increment Current Step
    timerObj[timerGroup] [timerRootKey].timerStepCurr += 1;
    timerObj[timerGroup] [timerItemKey].timerStepCurr += 1;
	//
	timerObj[timerGroup] [timerItemKey].timerIntervalStep += 1;
	//
	timerObj[timerGroup] [timerItemKey].elementMoveStepTop += 1;
	// ...................................... //
	// Set Style and Position for new menu image box
    if (timerObj[timerGroup] [timerItemKey].timerStepCurr = 1)  {
	    // Start box in initial position
        if (playDirection = playDirectionReverse) {
            timerCompletionTemp = 1.0;
			// leave the object at its current position (the destination)
            // timerObj[timerGroup] [timerItemKey].oObj.style.top = timerObj[timerGroup] [timerItemKey].elementTopDest + 'px';
            // timerObj[timerGroup] [timerItemKey].oObj.style.left = timerObj[timerGroup] [timerItemKey].elementLeftDest + 'px';
        } else {
            timerCompletionTemp = 0.05;
            timerObj[timerGroup] [timerItemKey].oObj.style.top = timerObj[timerGroup] [timerItemKey].elementTopOrig + 'px';
            timerObj[timerGroup] [timerItemKey].oObj.style.left = timerObj[timerGroup] [timerItemKey].elementLeftOrig + 'px';
        }
        // Resize new object
        if (filterResizeIsOn && !timerObj[timerGroup] [timerItemKey].elementIsDisplayed)  {
            fnFilterResize(
					timerObj[timerGroup] [timerItemKey].oObj,
					filterClassMatrix,
					timerCompletionTemp);
        }
    }
	//
	// ...................................... //
	// Set Completion based on methodology (Step based or Time Duration based execution)
    if (timerUseTime) {
        // (Elapsed) Time based
		timerObj[timerGroup] [timerItemKey].timerDateElps = fnTimerGetElapsed(timerType, timerGroup, timerId);
        timerCompletionTemp = timerObj[timerGroup] [timerItemKey].timerDateElps / ( timerObj[timerGroup] [timerItemKey].timerDuration * 1000 );
    } else {
        // Step based
        timerCompletionTemp = timerObj[timerGroup] [timerItemKey].timerStepCurr / timerObj[timerGroup] [timerItemKey].timerStepMin;
        if ( timerObj[timerGroup] [timerItemKey].timerStepCurr > timerObj[timerGroup] [timerItemKey].timerStepMin )  {
                tempTimeOrStepsCompleted = 5497;timerCompletionTemp = 1; }
    }
	//
	if ( timerCompletionTemp >= 1 ) { tempTimeOrStepsCompleted = 5492;timerCompletionTemp = 1; }
	// ...................................... //
    // Set Completion values
    timerCompletionCurr =
        timerObj[timerGroup] [timerItemKey].timerCompletion = timerCompletionTemp;
		if (timerUseTime) { timerObj[timerGroup] [timerItemKey].timerTimeCompletion = timerCompletionTemp; }
		if (!timerUseTime) { timerObj[timerGroup] [timerItemKey].timerStepCompletion = timerCompletionTemp; }
	//
    if (playDirection = playDirectionReverse) { timerCompletionCurr = 1 - timerCompletionTemp; }
	//
	// ...................................... //
	// StepStopItem
	// Stop if maximum # of steps exceeded
	// increment vertical step
    if ( timerObj[timerGroup] [timerItemKey].elementMoveStepTop > timerObj[timerGroup] [timerItemKey].timerStepMax)  {
        fnErrorOccured(DoNotUseDebug, DoNotUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
				timerObj[timerGroup] [timerItemKey].playDirection, 'StepStopItem')
				+ ' At: ( t' + tempPosTop + ', l' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempMoveInProgress + ' : l5515 ' + ').'
                + '.  Move.. Maximum (' + timerObj[timerGroup] [timerItemKey].timerStepMax
                + ') number of interval vertical steps (' + timerObj[timerGroup] [timerItemKey].timerStepCurr
                + ') exceeded'
				+ '!!!',
                'fnTimerItemDoStepMove', 5515, null, null,
                errorSevere, errorDoNotDisplayTag, errorDoNotAlert);
        tempTimeOrStepsCompleted = 5515;
    }
	//
	// increment horizontal step
	timerObj[timerGroup] [timerItemKey].elementMoveStepLeft += 1;
	//
	/*
    if ( timerObj[timerGroup] [timerItemKey].elementMoveStepLeft > timerObj[timerGroup] [timerItemKey].timerStepMax) {
        fnErrorOccured(DoNotUseDebug, DoNotUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
				timerObj[timerGroup] [timerItemKey].playDirection, 'StepStopItem')
				+ ' At: ( t' + tempPosTop + ', l' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ' : m' + tempMoveInProgress + ' : l5525 ' + ')'
                + '.  Move.. Maximum (' + timerObj[timerGroup] [timerItemKey].timerStepMax
                + ') number of interval horizontal steps (' + timerObj[timerGroup] [timerItemKey].timerStepCurr
                + ') exceeded'
				+ '!!!',
                'fnTimerItemDoStepMove', 5525, null, null,
                errorSevere, errorDoNotDisplayTag, errorDoNotAlert);
        tempTimeOrStepsCompleted = 5525;
    }
	*/
	//
    if (!tempTimeOrStepsCompleted) {
		// Ok to continue
		DoMove = true;
		// ...................................... //
		// Determine if Box is Rising or Dropping
        if (timerObj[timerGroup] [timerItemKey].elementTopOrig
                > timerObj[timerGroup] [timerItemKey].elementTopDest) { IsRising = true;IsRisingFactor = -1; }
        //
		/*
		// ...................................... //
		// Decide if move needed
		// Rising
		// was timerObj[timerGroup] [timerItemKey].oObj.style.top
		if (parseInt(timerObj[timerGroup] [timerItemKey].elementTopOrig ) < timerObj[timerGroup] [timerItemKey].elementTopDest) {
			if (IsRising)  {
				// if ( playDirection = playDirectionForward) { DoMove = true; }
				// if ( playDirection = playDirectionReverse) { DoMove = true; }
			// } else {
			}
		}
		//
		// Dropping
		// was timerObj[timerGroup] [timerItemKey].oObj.style.top
		if (parseInt(timerObj[timerGroup] [timerItemKey].elementTopOrig ) > timerObj[timerGroup] [timerItemKey].elementTopDest) {
			if (!IsRising)  {
				// if ( playDirection = playDirectionForward) { DoMove = true; }
				// if ( playDirection = playDirectionReverse) { DoMove = true; }
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
            if (elementMoveMethod = elementMoveMethodSlideDown && timerCompletionCurr > 0.5)  {
				// SlideDown
				tempPosTop = parseInt(timerObj[timerGroup] [timerItemKey].oObj.style.top);
				// don't change top during second half of SlideDown
            } else if (elementMoveMethod = elementMoveMethodSlideSide && timerCompletionCurr < 0.5)  {
				// Slide Side
				tempPosTop = parseInt(timerObj[timerGroup] [timerItemKey].oObj.style.top);
				// don't change top during first half of SlideSide
            } else {
				// Slide Diagonally
                // always change top during Direct (diagonal) move
                timerCompletionTemp = timerCompletionCurr;
                //
				// SlideDown
                if (elementMoveMethod = elementMoveMethodSlideDown) {
                    timerCompletionTemp = 2 * timerCompletionCurr;
				// Slide Side
				// Double speed during slide methods
                } else if (elementMoveMethod = elementMoveMethodSlideSide) {
                    timerCompletionTemp = 2 * (timerCompletionCurr - 0.5);
				}
                // calculate top position for Forward and Reverse
				tempPosTop = timerObj[timerGroup] [timerItemKey].elementTopOrig
					+ ( IsRisingFactor * timerCompletionTemp * timerObj[timerGroup] [timerItemKey].moveDistanceTop );
			   //
				// tempPosTop = parseInt(tempPosTop);
				timerObj[timerGroup] [timerItemKey].oObj.style.top = tempPosTop + 'px';
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
			if (timerObj[timerGroup] [timerItemKey].elementLeftOrig
					< timerObj[timerGroup] [timerItemKey].elementLeftDest) { isRightward = true;isRightwardFactor = 1; }
			//
			// Slide Down
			if (!timerObj[timerGroup] [timerItemKey].elementMoveMethod == elementMoveMethodSlideDown
				&& timerCompletionCurr < 0.5) {
				// horizontal movement does not start until half way
				// tempPosLeft = timerObj[timerGroup] [timerItemKey].elementLeftOrig;
				// tempPosLeft = parseInt(timerObj[timerGroup] [timerItemKey].oObj.style.left);
			// Slide Side
			} else if (timerObj[timerGroup] [timerItemKey].elementMoveMethod = elementMoveMethodSlideSide
				&& timerCompletionCurr > 0.5) {
				// horizontal movement stops after half way
				// tempPosLeft = timerObj[timerGroup] [timerItemKey].elementLeftOrig;
				// tempPosLeft = parseInt(timerObj[timerGroup] [timerItemKey].oObj.style.left);
			} else {
				// Slide Diagonally
                // always change left during Direct (diagonal) move
                timerCompletionTemp = timerCompletionCurr;
				// Slide Down
				// horizontal movement is at doubled speed.
				if (timerObj[timerGroup] [timerItemKey].elementMoveMethod = elementMoveMethodSlideDown) {
					timerCompletionTemp = 2 * (timerCompletionCurr - 0.5); }
				// Slide Side
				// horizontal movement is at doubled speed.
				if (timerObj[timerGroup] [timerItemKey].elementMoveMethod = elementMoveMethodSlideSide) {
					timerCompletionTemp = 2 * timerCompletionCurr; }
				//
				tempPosLeft = timerObj[timerGroup] [timerItemKey].elementLeftOrig
					+ ( isRightwardFactor * timerCompletionTemp * timerObj[timerGroup] [timerItemKey].moveDistanceLeft );
				//
				// tempPosLeft = parseInt(tempPosLeft);
				timerObj[timerGroup] [timerItemKey].oObj.style.left = tempPosLeft + 'px';
				//
			} // end of Down, Side, or Diagonal movement
			//
			tempMoveInProgress = true;
			//
		}
		//
        // Resize
        if (filterResizeIsOn && tempMoveInProgress
            && !timerObj[timerGroup] [timerItemKey].elementIsDisplayed)  {
            //
            timerCompletionTemp = timerObj[timerGroup] [timerItemKey].timerCompletion;
            //
            if (playDirection = playDirectionReverse) {
                timerCompletionTemp = 1 - timerCompletionTemp; }
            //
            fnFilterResize(
					timerObj[timerGroup] [timerItemKey].oObj,
					filterClassMatrix,
					timerCompletionTemp);
        }
        // timerStepCompletion
        //
    }
	//
    if (timerObj[timerGroup] [timerItemKey].timerCompletion > timerTen) {
        timerTen + 0.1;
    }
    //
	if (debugTimer && debugTimerDetail && debugTimerMove) {
		var tempDetails = ', At: ( step ' + timerObj[timerGroup] [timerItemKey].timerStepCurr + ' : top ' + tempPosTop + ', left ' + tempPosLeft + ' : c' + tempTimeOrStepsCompleted + ': ' + (timerCompletionCurr * 100) + '%' + ' : m' + tempMoveInProgress + ' : l5747 ' + ')'
	}
    //
    // ...................................... //
    // End of loop
    var timerInstanceIsDone = false;
    if (!tempMoveInProgress || tempTimeOrStepsCompleted) {
        // Arrived at destinatioin
        timerInstanceIsDone = true;
		timerObj[timerGroup] [timerRootKey].timerInstance -= 1;
		if (timerMethod = timerMethodGroup) {
		    // Group Timer
      		timerIntervalId = timerObj[timerGroup] [timerRootKey].timerIntervalId;
		} else if (timerMethod = timerMethodItem) {
		    // Item Timer
  			// Turn Off Timer
      		timerIntervalId = timerObj[timerGroup] [timerItemKey].timerIntervalId;
      		//
          	window.clearInterval(timerIntervalId);
          	//
            if (debugTimer && debugTimerDetail && debugTimerMove) {
                fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
					timerObj[timerGroup] [timerItemKey].playDirection, 'Stop')
					+ tempDetails
					+ ', Stopping Item Timer'
					+ '.',
                    'fnTimerItemDoStepMove', 5711, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
            }
            //
            timerStarted -= 1;
            timerObj[timerGroup] [timerItemKey].timerIntervalIdPrev = timerIntervalId;
            timerObj[timerGroup] [timerItemKey].timerIntervalId = 0;
            //
		}
		// Leave box in final position
		if (playDirection = playDirectionForward) {
            timerObj[timerGroup] [timerItemKey].oObj.style.top = timerObj[timerGroup] [timerItemKey].elementTopDest + 'px';
            timerObj[timerGroup] [timerItemKey].oObj.style.left = timerObj[timerGroup] [timerItemKey].elementLeftDest + 'px';
        } else {
            timerObj[timerGroup] [timerItemKey].oObj.style.top = timerObj[timerGroup] [timerItemKey].elementTopOrig + 'px';
            timerObj[timerGroup] [timerItemKey].oObj.style.left = timerObj[timerGroup] [timerItemKey].elementLeftOrig + 'px';
        }
		//
        timerObj[timerGroup] [timerItemKey].timerDateEnd = new Date();
		timerObj[timerGroup] [timerItemKey].timerIsRunning = false;
		//
		if ( playDirection = playDirectionForward ) {
		    timerObj[timerGroup] [timerItemKey].elementIsDisplayed = elementIsDisplayed;
		} else {
		    if (elementMoveDuration >= filterDuration) {
		        timerObj[timerGroup] [timerItemKey].oObj.style.display = 'none';
		    }
		    timerObj[timerGroup] [timerItemKey].elementIsDisplayed = elementIsNotDisplayed;
		}
		//
        if (debugTimer && debugTimerDetail && debugTimerMove) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
				timerObj[timerGroup] [timerItemKey].playDirection, 'Stop')
				+ tempDetails
                + ', Item Interval Timer Stopped'
				+ '.',
                'fnTimerItemDoStepMove', 5747, null, null,
                errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
	} else {
        if (debugTimer && debugTimerDetail && debugTimerMove) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot,
				timerObj[timerGroup] [timerItemKey].playDirection, 'Item')
				+ tempDetails
				+ ', Elapsed:' + timerObj[timerGroup] [timerItemKey].timerElapsed / 1000
                + ', Step:' + timerObj[timerGroup] [timerItemKey].timerStepCurr
                + ', Time:' + Date()
				+ ', Move:' + moveDistanceLeft
				+ ', Rising:' + IsRisingFactor
				+ ', Compl:' + timerCompletionTemp
				+ ', Move Top:' + timerObj[timerGroup] [timerItemKey].moveDistanceTop
				+ ', Move Left:' + timerObj[timerGroup] [timerItemKey].moveDistanceLeft
				+ ', Exiting Item'
				+ '.',
                'fnTimerItemDoStepMove', 5754, null, null,
                errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
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
// oObjPassed, elementLeftOrig, elementTopOrig, elementLeftDest, elementTopDest)
function fnTimerGetElapsed(timerType, timerGroup, timerId) {
		var timerItemKey = timerId + timerType;
        timerDateCurr = new Date();
        // timerDateElps  = timerDateStart - timerDateCurr;
        var timerDateStartMin = timerObj[timerGroup] [timerItemKey].timerDateStart.getMinutes();
        var timerDateStartSec = timerObj[timerGroup] [timerItemKey].timerDateStart.getSeconds();
        var timerDateStartMil = timerObj[timerGroup] [timerItemKey].timerDateStart.getMilliseconds();
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
    	timerObj[timerGroup] [timerItemKey].timerElapsed =
        ( ( ( timerDateElpsMin * 60 ) + timerDateElpsSec ) * 1000 ) + timerDateElpsMil;
		//
		return timerObj[timerGroup] [timerItemKey].timerElapsed;
//
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerStartMoveBusy(timerType, timerGroup, timerId, UseLog)
{
	var timerItemKey = timerId + timerType;
	var timerMoveBusy = false;
	if (timerObj[timerGroup])  {
		if (timerObj[timerGroup] [timerItemKey])  {
			if (timerObj[timerGroup] [timerItemKey].timerIsRunning) { timerMoveBusy = true; }
		}
	}
	//
	if (UseLog && timerMoveBusy) {
		fnConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
			'Busy Timer', 'fnElementEventCheckDuplicate', 0); }
	//
}
//
// ..................................................................................... _//
// Timer Move Box (Element, i.e. Div)
// ...................................... //
// This test incrementally repositions an element.
// It loops through a set number of times.
function fnTimerMoveTest(timerType, timerGroup, timerId)
{
    var timerItemKey = timerId + timerType;
    var timerRootKey = timerRootId + timerType;
    //
    for(i= 0; i < 10; i++)
    {
       iHorizontal+= 1;
       iVertical= iHorizontal;
       divMove.style.top= iVertical;
       divMove.style.left= iHorizontal;
    }
//  iInterval tracks how many times moveDiv has looped and clears the interval
//  after a set number of loops.
    iInterval++;
    if(iInterval>25) {
        window.clearInterval(vTimerID);
        divToggle.style.visibility= 'visible';
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
function fnTimerLogText(timerType, timerGroup, timerId, UseRootKey, playDirection, timerAction)
 {
	var timerItemKey = timerId + timerType;
    var timerRootKey = timerRootId + timerType;
	var DoUseWord = true;
	var LogText = '';
	LogText += 		fnTimerTypeText(timerType, DoUseWord);
	LogText += ', ' + fnTimerIntervalText(timerType, timerGroup, timerId, UseRootKey);
	LogText += ', ' + fnTimerActionText(timerAction);
	LogText += ', ' + fnTimerKeyText(timerType, timerGroup, timerId);
	LogText += ', ' + fnTimerDirectionText(timerType, timerGroup, timerId, UseRootKey, playDirection, timerAction);
	return LogText;
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerDirectionText(timerType, timerGroup, timerId, UseRootKey, playDirection, timerAction)
{
	var timerItemKey = timerId + timerType;
    var timerRootKey = timerRootId + timerType;
	var LogText = '';
	if (playDirection) {
		// Use passed value if not null
		LogText += 'Direction (' + ((playDirection - playDirectionForward) ? 'Reverse' : 'Forward') + ')'
 	} else if (UseRootKey = DoUseRoot) {
		if (timerObj[timerGroup] [timerRootKey]) {
			LogText += 'Direction (' + ((timerObj[timerGroup] [timerRootKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward') + ')'
		} else { LogText += 'Group Direction undefined'; }
	} else if (UseRootKey == DoNotUseRoot || UseRootKey == DoUseBoth ) {
		if (timerObj[timerGroup] [timerItemKey]) {
            // LogText += (timerObj[timerGroup] [timerItemKey].playDirection - playDirectionForward);
            // LogText += ((timerObj[timerGroup] [timerItemKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward');
			LogText += 'Direction (' + ((timerObj[timerGroup] [timerItemKey].playDirection - playDirectionForward) ? 'Reverse' : 'Forward') + ')'
		} else { LogText += 'Item Direction undefined'; }
 	} else { LogText += 'Item Direction undefined'; }
	return LogText;
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerActionText(timerAction)
{ return ('Action: ' + (timerAction + ':' + '.........................')).substr(0, 25); }
//
// ..................................................................................... _//
// ...................................... //
function fnTimerTypeText(timerType, UseWord)
{ return ((UseWord ? 'Type: ' : '') + (timerType + '...............').substr(0, 10)); }
//
// ..................................................................................... _//
// ...................................... //
function fnTimerKeyText(timerType, timerGroup, timerId)
{ return 'Object: (' + (fnTimerTypeText(timerType, false)) + ', ' + timerGroup + ', ' + timerId + ')'; }
//
// ..................................................................................... _//
// ...................................... //
function fnTimerIntervalText(timerType, timerGroup, timerId, UseRootKey)
 {
	var timerItemKey = timerId + timerType;
    var timerRootKey = timerRootId + timerType;
	// var tempString = new String();
	var tempString;
	var tempInterval;
    if (UseRootKey) {
		if (timerObj[timerGroup] [timerRootKey]) {
			if (timerObj[timerGroup] [timerRootKey].timerIntervalId >= 0) {
				tempInterval = timerObj[timerGroup] [timerRootKey].timerIntervalId;
			} else { tempInterval = 0; }
		} else { tempInterval = 0; }
    } else {
		if (timerObj[timerGroup] [timerItemKey]) {
			if (timerObj[timerGroup] [timerItemKey].timerIntervalId >= 0) {
				tempInterval = timerObj[timerGroup] [timerItemKey].timerIntervalId;
			} else { tempInterval = 0; }
		} else { tempInterval = 0; }
    }
	tempInterval = 100000 + tempInterval;
	tempString = (tempInterval).toString();
	tempString = (tempString).substr(1, 5);
	tempString = 'Timer (' + tempString + ')';
	return 'Timer (' + ((tempInterval).toString()).substr(1, 5) + ')';
}
function fnTimerIntervalTextOld(timerType, timerGroup, timerId, UseRootKey)
 {
    if (UseRootKey) {
		if (timerObj[timerGroup] [timerRootKey]) {
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
			return 'Timer (' + ((100000 + timerObj[timerGroup] [timerRootKey].timerIntervalId).toString()).substr(1, 5) + ')';
		} else { return 'Timer (None.)'; }
    } else {
		if (timerObj[timerGroup] [timerItemKey]) {
			// tempString = 100000 + timerObj[timerGroup] [timerItemKey].timerIntervalId;
			return 'Timer (' + ((100000 + timerObj[timerGroup] [timerItemKey].timerIntervalId).toString()).substr(1, 5) + ')';
		} else { return 'Timer (None.)'; }
    }
}
//
// ..................................................................................... _//
// ...................................... //
function fnTimerRootKeyText(timerType, timerGroup, timerId)
{
    var timerRootKey = timerRootId + timerType;
	var timerIdCurr;
	var timerIdCnMax = timerObj[timerGroup].length;
	var timerRootText = 'Root ';
	var timerIsRunningText = 'IsRunning: ';
	var timerIsDisplayedText = 'IsDisplayed: ';
	//
	// Process elements
	for (timerIdCurr = 1;timerIdCurr < 1+imgMaxByGroup[timerGroup];timerIdCurr++)  {
		//
		var timerItemKey = timerIdCurr + timerType;
		if (timerObj[timerGroup] [timerItemKey]) {
		    if (!timerObj[timerGroup] [timerItemKey].timerIsRunning) {
		    timerIsRunningText += '0';
		    } else { timerIsRunningText += '1'; }
		    timerIsDisplayedText += timerObj[timerGroup] [timerItemKey].elementIsDisplayed;
		} else  {
		    timerIsRunningText += 'x';
		    timerIsDisplayedText += 'x';
		}
	}
	timerRootText += timerIsRunningText + ' ' + timerIsDisplayedText;
	timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' Instance: ' + timerObj[timerGroup] [timerRootKey].timerInstance;
    timerRootText += ' Step: ' + timerObj[timerGroup] [timerRootKey].timerStep;
    timerRootText += ' StartIndex: ' + timerObj[timerGroup] [timerRootKey].startIndex;
    timerRootText += ' EndIndex: ' + timerObj[timerGroup] [timerRootKey].endIndex;
	timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' DateStart: ' + timerObj[timerGroup] [timerRootKey].timerDateStart;
	timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' ..DateEnd: ' + timerObj[timerGroup] [timerRootKey].timerDateEnd;
	timerRootText += charNewLineTag + charTextIndex;
    timerRootText += ' Elapsed: ' + timerObj[timerGroup] [timerRootKey].timerElapsed
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
// var BodyMenuImageContainer = document.documentElement['BodyMenuImageContainer'];
// .getElementById('BodyMenuImageContainer');
//
// Build (inner) HTML for Menu Images
// fnMenuImagesHtmlBuild();
//
// ..................................................................................... _//
// ...................................... //
function fnBodyImagesHtmlBuild()
{
//
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx TO DO xxxxxxxxxxxxxxx
// document.write(imgHtml);
elBodyImageContainer = fnElementGetRef(elBodyImageContainer, 'BodyImageContainer', 'BodyImageContainer');
elBodyImageContainer.innerHTML = imgHtml;
//
// This page has no stock of body images
// just text captions.
bodyImageLoadFirst = false;
//
return elBodyImageContainer;
}
//
//
// ..................................................................................... _//
// Section Menu Images Html Build function (s) (Groups / Items)
// ..................................................................................... _//
//
// ...................................... //
//
// fnMenuImagesHtmlBuild();
//
// ...................................... //
function fnMenuImagesHtmlBuild()
{
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
elBodyMenuImageContainer = fnElementGetRef(elBodyMenuImageContainer, 'BodyMenuImageContainer', 'BodyMenuImageContainer');
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
// imgHtml += 'div id='BodyMenuImageContainer'>';
    for (imgGroupCn = 1;imgGroupCn < 1+imgGroupMax; imgGroupCn++){
      for (imgCn = 1;imgCn < 1+imgMaxByGroup[imgGroupCn];imgCn++){
         oName = fnElementItemGetName(imgGroupCn, imgCn);
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
DivSmallOnmouseoverFunction = fnElementGroupShowStack;
DivSmallOnmouseoverFunctionName = 'fnElementGroupShowStack';
DivSmallOnmouseoverText += '(';
DivSmallOnmouseoverText += IsSmall + ', ';// Is Small Image
// Parent Object
if (imgCn > 1) {
   eventParentName = (fnElementItemGetName(imgGroupCn, imgCn-1) + imgGroupCn + (imgCn-1));// Previous (Small) Image Id
} else {
   eventParentName = (fnElementItemGetName(imgGroupCn, imgCn-1));// Menu Container Id
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
		imgHtmlDivSmall = fnElementEventAdd('onmouseover',
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
DivSmallOnmouseoutFunction = fnElementItemHideId;
DivSmallOnmouseoutFunctionName = 'fnElementItemHideId';
DivSmallOnmouseoutText += '(';
DivSmallOnmouseoutText += 'event' + ', ';// Event Object
DivSmallOnmouseoutText += IsSmall + ', ';// Is Small Image
DivSmallOnmouseoutText += quoteInnerOpen + eventParentName + quoteInnerClose + ', ';// Parent Id
DivSmallOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Image' + quoteInnerClose + ', ';// Small Image
DivSmallOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
DivSmallOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'L' + quoteInnerClose + ', ';// Large Id
DivSmallOnmouseoutText += imgGroupCn + ', ';// Menu Group
DivSmallOnmouseoutText += imgCn + ', ';// Menu Group
DivSmallOnmouseoutText += '0,';// 'false, ';// Current Show Lock
DivSmallOnmouseoutText += '0';// 'false';// Ignore Show Lock
DivSmallOnmouseoutText += ');';
//
if (!imgLoadUseEventHandler) {
    if (imgLoadUseDOM)  {
		imgHtmlDivSmall = fnElementEventAdd('onmouseout',
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
imgHtmlDivInner += attributeStylePadding + '0%;';// Display (visibility)
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
imgHtmlA.href= '../MdmWebPages/' + oName + '.shtml';// Link
imgHtmlAInner += attributeHref + quoteOpen + '../MdmWebPages/' + oName + '.shtml' + quoteClose;// Link
//
imgHtmlAInner += attributeStyle + quoteOpen;// Style
//
// imgHtmlA.style.padding = '0%';// Padding
// imgHtmlAInner += ' padding:0%;';// Display (visibility)
//
// imgHtmlA.style.margin = '0%';// Margin
// imgHtmlAInner += ' margin:0%;';// Display (visibility)
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
imgHtmlSpan.innerHTML = fnElementItemGetDescription(imgGroupCn, imgCn);
imgHtmlSpanInner += fnElementItemGetDescription(imgGroupCn, imgCn);
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
imgHtmlImg.alt = fnTextReplace(fnElementItemGetDescription(imgGroupCn, imgCn), charNewLineTag, ' ');// Alt (Link) Text;
imgHtmlImgInner += attributeAlt + quoteOpen + fnElementItemGetDescription(imgGroupCn, imgCn) + quoteClose;// Alt (Link) Text;
//
// Events:
// Mouse Down
/* --
// Filter
// Start Animation Filter
// Filter Reset
// imgHtml += ' fnFilterResetThenAnimate(this + ', ' + filterIndexPassed + ');'; // Reset this Image
imgHtml += 'fnFilterResetThenAnimate(' + oName + 'L' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Reset Large Image
// imgHtml += ' fnFilterSpin(' + oName + 'L' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Spin Large Image
-- */
//
// ..................................................................................... _//
// Image Show Toggle
// Mouse Down
DivSmallOnmousedownText = '';
DivSmallOnmousedownFunction = fnElementItemToggle;
DivSmallOnmousedownFunctionName = 'fnElementItemToggle';
DivSmallOnmousedownText += '(';
DivSmallOnmousedownText += IsLarge + ', ';// Is Large Image
DivSmallOnmousedownText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
DivSmallOnmousedownText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'L' + 'Image' + quoteInnerClose + ', ';// Large Image Object
DivSmallOnmousedownText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'L' + quoteInnerClose + ', ';// Large Id
DivSmallOnmousedownText += oObjImageSizeLarge + ', ';// Image Large Size
DivSmallOnmousedownText += imgGroupCn + ', ';// Menu Group
DivSmallOnmousedownText += imgCn + ', ';// Menu Group
DivSmallOnmousedownText += '0, ';// Current Show Lock
DivSmallOnmousedownText += '0';// Ignore Show Lock
DivSmallOnmousedownText += ');';
//
if (!imgLoadUseEventHandler) {
    if (imgLoadUseDOM)  {
		imgHtmlDivSmall = fnElementEventAdd('onmousedown',
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
// imgHtml += ' onfilterchange= ' + quoteOpen + 'fnFilterSpin(this + ', ' + filterIndexPassed + ');';// Spin this Image
// imgHtml += ' onfilterchange= ' + quoteOpen + 'fnFilterSpin(' + oName + 'L' + imgGroupCn + imgCn + ', filterIndexPassed);';// Spin Large Image
// imgHtml += quoteClose ' ';
//
// ..................................................................................... _//
// Style
imgHtmlImgInner += attributeStyle + quoteOpen;// Style
// Padding
imgHtmlImg.style.padding = '0%';// Padding
imgHtmlImgInner += attributeStylePadding + '0%;';// Display (visibility)
// Margin
imgHtmlImg.style.margin = '0%';// Margin
imgHtmlImgInner += attributeStyleMargin + '0%;';// Display (visibility)
// Size
// Width
imgHtmlImg.style.width = oObjImageSizeSmall + 'px';// Width
imgHtmlImgInner += attributeStyleWidth  + oObjImageSizeSmall + 'px;';// Width
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
imgHtmlAInner += attributeClass + quoteOpen + 'MenuImageBox MenuImageBoxLink'  + quoteClose;// Class
// Source
imgHtmlA.href= '../MdmWebPages/' + oName + '.shtml';// Link
imgHtmlAInner += attributeHref + quoteOpen + '../MdmWebPages/' + oName + '.shtml'  + quoteClose;// Link
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
imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'LinkTextLower'  + quoteClose + tagEndContentNone;// Link Text
//
imgHtmlSpan.innerHTML = fnElementItemGetDescription(imgGroupCn, imgCn);
imgHtmlSpanInner += fnElementItemGetDescription(imgGroupCn, imgCn);
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
imgHtmlDivLarge.id = oName + imgGroupCn + imgCn + 'L';// Id
imgHtmlDivLarge.name = oName + imgGroupCn + imgCn + 'L';// Id
imgHtmlDivLargeInner += tagDiv;
imgHtmlDivLargeInner += attributeId + quoteOpen + oName +imgGroupCn + imgCn + 'L' + quoteClose;// Id
//
imgHtmlDivLarge.className= quoteOpen + 'imgThumbLarge MenuImageBox MenuImageBoxBorder '  + quoteClose;// Class
imgHtmlDivLargeInner += attributeClass + quoteOpen + 'imgThumbLarge MenuImageBox MenuImageBoxBorder ' + quoteClose;// Class
// MenuImageContainer
// ..................................................................................... _//
// Events:
// ..................................................................................... _//
// Mouse Out //
DivLargeOnmouseoutText = '';
DivLargeOnmouseoutFunction = fnElementItemHideId;
DivLargeOnmouseoutFunctionName = 'fnElementItemHideId';
DivLargeOnmouseoutText += '(';
DivLargeOnmouseoutText += 'event' + ', ';// Event Object
DivLargeOnmouseoutText += IsLarge + ', ';// Is Large Image
DivLargeOnmouseoutText += quoteInnerOpen + oName + (imgGroupCn) + (imgCn) + quoteInnerClose + ', ';// Small Id
DivLargeOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'L' + 'Image' + quoteInnerClose + ', ';// Large Image Id
DivLargeOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'L' + quoteInnerClose + ', ';// Large Id
DivLargeOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'L' + quoteInnerClose + ', ';// Large Id
DivLargeOnmouseoutText += imgGroupCn + ', ';// Menu Group
DivLargeOnmouseoutText += imgCn + ', ';// Menu Group Box
DivLargeOnmouseoutText += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + '] [' + IsLarge + ']' + ', ';// Current Show Lock
DivLargeOnmouseoutText += '0';// Ignore Show Lock
DivLargeOnmouseoutText += ');';
//
if (!imgLoadUseEventHandler) {
    if (imgLoadUseDOM)  {
		imgHtmlDivLarge = fnElementEventAdd('onmouseout',
				DivLargeOnmouseoutFunction, DivLargeOnmouseoutFunctionName,
				DivLargeOnmouseoutText, imgHtmlDivLarge);
    } else if (imgLoadUseInner) {
        imgHtmlDivLargeInner += attributeEventMouseOut + quoteOpen;
		DivLargeOnmouseoutText = 	DivLargeOnmouseoutFunctionName + DivLargeOnmouseoutText;
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
DivLargeOnmouseoverFunction = fnElementItemShowId;
DivLargeOnmouseoverFunctionName = 'fnElementItemShowId';
DivLargeOnmouseoverText += '(';
DivLargeOnmouseoverText += 'event' + ', ';// Event Object
DivLargeOnmouseoverText += IsLarge + ', ';// Is Large Image
DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'L' + 'Image' + quoteInnerClose + ', ';// Large Image
DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'L' + quoteInnerClose + ', ';// Large Id
DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'L' + quoteInnerClose + ', ';// Large Id
DivLargeOnmouseoverText += oObjImageSizeLarge + ', ';// Image Large Size
DivLargeOnmouseoverText += imgGroupCn + ', ';// Menu Group
DivLargeOnmouseoverText += imgCn + ', ';// Menu Group Box
DivLargeOnmouseoverText += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + '] [' + IsLarge + ']' + ', ';// Current Show Lock
DivLargeOnmouseoverText += '0';// Ignore Show Lock
DivLargeOnmouseoverText += ');';
//
if (!imgLoadUseEventHandler) {
    if (imgLoadUseDOM)  {
		imgHtmlDivLarge = fnElementEventAdd('onmouseover',
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
// imgHtml += ' fnFilterResetThenAnimate(this + ', ' + filterIndexPassed + ');'; // Reset this Image
// imgHtml += ' fnFilterResetThenAnimate(' + oName + imgGroupCn + imgCn + 'L' + ', ' + filterIndexPassed + ');';// Reset Large Image
// imgHtml += ' fnFilterSpin(' + oName + imgGroupCn + imgCn + 'L' + ', ' + filterIndexPassed + ');';// Spin Large Image
//
// imgHtml += quoteClose;
// end of mouseover
//
// ..................................................................................... _//
// Play Filter
// imgHtml += '      	onfilterchange= ' + quoteOpen + 'fnFilterSpin(this, filterIndexPassed);';// Spin this Image
// imgHtml += '      	onfilterchange= ' + quoteOpen + 'fnFilterSpin(' + oName + imgGroupCn + imgCn + 'L' + ', ' + filterIndexPassed + ');';// Spin Large Image
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
imgHtmlA.id = oName + imgGroupCn + imgCn + 'L' + 'LinkUpper';
imgHtmlA.name = oName + imgGroupCn + imgCn + 'L' + 'LinkUpper';
imgHtmlAInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'L' + 'LinkUpper' + quoteClose;
//
imgHtmlA.className= 'MenuImageBox MenuImageBoxLink';
imgHtmlAInner += attributeClass + quoteOpen + 'MenuImageBox MenuImageBoxLink' + quoteClose;
//
imgHtmlA.href= '../MdmWebPages/' + oName + '.shtml';
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
imgHtmlSpan.id = oName + 'L' + 'LinkTextUpper';// Link Text
imgHtmlSpan.name = oName + imgGroupCn + imgCn + 'L' + 'LinkTextUpper';// Link Text
imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'L' + 'LinkTextUpper'  + quoteClose + tagEndContentStart;// Link Text
//
imgHtmlSpan.innerHTML = fnElementItemGetDescription(imgGroupCn, imgCn);
imgHtmlSpanInner += fnElementItemGetDescription(imgGroupCn, imgCn);
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
imgHtmlImg.id = oName + imgGroupCn + imgCn + 'L' + 'Image';
imgHtmlImg.name = oName + imgGroupCn + imgCn + 'L' + 'Image';
imgHtmlImgInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'L' + 'Image' + quoteClose;
//
imgHtmlImg.src= '../Images/Thumbnails/' + oName + '.jpg';// Image Source src
imgHtmlImgInner += attributeSrc + quoteOpen + '../Images/Thumbnails/' + oName + '.jpg' + quoteClose;// Image Source src
//
imgHtmlImg.className = 'MenuThumbLarge';
imgHtmlImgInner += attributeClass + quoteOpen + 'MenuThumbLarge' + quoteClose;
//
// Alt
imgHtmlImg.alt = fnTextReplace(fnElementItemGetDescription(imgGroupCn, imgCn), charNewLineTag, ' ');// Alt (Link) Text;
imgHtmlImgInner += attributeAlt + quoteOpen + fnElementItemGetDescription(imgGroupCn, imgCn) + quoteClose;// Alt (Link) Text;
//
// ..................................................................................... _//
// Div Style
imgHtmlImgInner += attributeStyle + quoteOpen
// Div Size
// Width
imgHtmlImg.style.width = oObjImageSizeLarge + 'px';// Image Large Width
imgHtmlImgInner += attributeStyleWidth + oObjImageSizeLarge + 'px;';// Image Large Width
// Height
imgHtmlImg.style.height= (oObjImageSizeLarge * oObjImageSizeRatio) + 'px';// Image Large Height
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
imgHtmlSpan.id = oName + imgGroupCn + imgCn + 'L' + 'LinkLower';// Link Text
imgHtmlSpan.name = oName + imgGroupCn + imgCn + 'L' + 'LinkLower';// Link Text
imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'L' + 'LinkLower' + quoteClose + tagEndContentNone;// Link Text
//
// imgHtmlBr = document.createElement('br');
// if (imgLoadUseDOM) { imgHtmlSpan.appendChild(imgHtmlBr); }
// imgHtmlSpanInner += charNewLineTagOpen + 'class= ' + quoteOpen + 'aClearBoth' + quoteClose + tagEndContentNone;
//
imgHtmlSpan.innerHTML = fnElementItemGetDescription(imgGroupCn, imgCn);
imgHtmlSpanInner += fnElementItemGetDescription(imgGroupCn, imgCn);
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
    elBodyMenuImageContainer.appendChild(imgHtmlDivSmall);
    elBodyMenuImageContainer.appendChild(imgHtmlDivLarge);
} else {
	imgHtmlDivBothInner += imgHtmlDivSmallInner + imgHtmlDivLargeInner;
}
//
// ..................................................................................... _//
      }
    }
//
if (imgLoadUseInner)  {
	elBodyMenuImageContainer.innerHTML = imgHtmlDivBothInner;
}
if (!imgLoadUseEventHandler && !imgLoadEventTest) {
	elBodyMenuImageContainer.onmouseover = null;
	elBodyMenuImageContainer.onmouseout = null;
	elBodyMenuImageContainer.onmousedown = null;
 } else {
     elBodyMenuImageContainer.onmousedown = fnElementEventMouse;
     elBodyMenuImageContainer.onmouseover = fnElementEventMouse;
     elBodyMenuImageContainer.onmouseout = fnElementEventMouse;
}
//
// elBodyMenuImageContainer.style.display = 'none';
// if (browserIsIE) { document.recalc(); }
//
// ..................................................................................... _//
// imgHtml += tagDivEnd;
// imgHtmlDiv.innerHTML = imgHtml;
// document.write(imgHtml);
// elBodyMenuImageContainer = fnElementGetRef(elBodyMenuImageContainer, 'BodyMenuImageContainer', 'BodyMenuImageContainer');
//
// elBodyMenuImageContainer.innerHTML = imgHtml;
// elBodyMenuImageContainer.appendChild(imgHtmlDivSmall);
// elBodyMenuImageContainer.appendChild(imgHtmlDivLarge);
//
menuImageLoadFirst = false;
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
function fnElementEventAdd(eventNamePassed, eventFunctionPassed, eventFunctionNamePassed, eventFunctionArgsPassed, oObjPassed)
{
	var eventAddSuccess;
	var eventArgumentsArr = new Array();
    var tempfunc;
    var temp;
	//
	if (!browserEventsIsFf) {
    	temp = eventFunctionNamePassed + eventFunctionArgsPassed;
    	eval( 'tempfunc = function() { ' + temp + '; }' );
    	eventAddSuccess = oObjPassed.attachEvent(eventNamePassed, tempfunc);
	} else {
		if (true = false) {
    		oObjPassed.addEventListener(
    				eventNamePassed,
            		eventFunctionPassed.apply( {
            	        oObjNextId: 'Tricia'
                    } ),
    				false );
    		//
		} else if (true = false) {
    		// (eval( 'tempfunc = function() { ' + temp + ';tempfunc; }' )),
    		//
		} else {
        	temp = eventFunctionNamePassed + eventFunctionArgsPassed;
    		oObjPassed.addEventListener(
    				eventNamePassed,
    				(eval( 'tempfunc = function() { ' + temp + ';tempfunc; }' )),
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
function fnFunctionDoExecuteByName(functionName, context /*, args */) {
    // ['My']['Namespace']['functionName'](arguments);// succeeds
    // fnFunctionDoExecuteByName('My.Namespace.functionName', window, arguments);
    // fnFunctionDoExecuteByName('Namespace.functionName', My, arguments);
    //
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split('.');
    var func = namespaces.pop();
    //
    // Navigate Hieararchy Object Methods
    for(var i = 0;i < namespaces.length;i++) {
	    context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
}
//
// ..................................................................................... _//
function fnFunctionDoExecuteJsNode(node) {
    if (!node) return;
    /* IE Upper Case */
    var elementScriptSourceInNode = node.getElementByTagName('SCRIPT');
    var elementScriptBlock;
    //
    for (var elementScriptLn = 0;elementScriptLn < elementScriptSourceInNode.length;elementScriptLn++) {
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
      } catch(e) {
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
// onlayoutcomplete= 'fnDocumentLoadInit();';
//
window.onload = function() { // function Document Window OnLoad
    // ...................................... //
    // Initialize and Set Global Variables
    fnDocumentLoadInit();
    //
    // ...................................... //
    // Build Body Images Div
    if (!bodyImageLoadDelay) { fnBodyImagesHtmlBuild(); }
    //
    // ...................................... //
    // Build Menu Images Div
    if (!menuImageLoadDelay) { fnMenuImagesHtmlBuild(); }
    //
    // ...................................... //
    // Docuement Element Initialize & Store Original Menu Columns.
    if (!javaLoadDelay) {
        // ...................................... //
        // Body Element Creation
        if (javaLoadFirst) { fnElementObjectCreate(); }
        //
        // ...................................... //
        // Choose Standard Layout
        fnLayoutNext(layoutStandard)
        // fnLayoutSelectByIndex(layoutStandard);
    }
    //
    if (!debugStateLoadDelay) {
        if (serverIsOn) {
            fnDebugParameterInit();
        } else {
            fnDebugParameterInitLocal();
        }
    }
    //
    // Inactive code:
    // window.onload= 'fnDocumentLoadInit();';
    // onlayoutcomplete= 'fnDocumentLoadInit();';
}
//
// ..................................................................................... _//
// SectionBlock Window and Container Layout function (s)
// ..................................................................................... _//
//
// ..................................................................................... _//
// ...................................... //
// Document Layout Size of Core Layout Boxes
function fnWindowContainerHeightGetAll()
{
	//
    if (debugAlert) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			' Height of left and right menu containers vs the center menu container'
			+ ': ',
            'fnWindowContainerHeightGetAll', 6769, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
    // Height of left and right menu containers vs the center menu container
	var tempLayoutBodyHeightHorzMax = 0;
	var tempLayoutBodyHeightVertMax = 0;
    layoutBodyHeightHorzMax = 0;
    layoutBodyHeightVertMax = 0;
    layoutMenuWidthMax = 0;
    //
    elBodyMainCenterHeight = fnElementHeightMaxGet(UseScroll, UseBase, elBodyMainCenter);
	//
    if (debugAlert) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			' Height of BodyMainCenterHeight: ' + elBodyMainCenterHeight
			+ '.',
            'fnWindowContainerHeightGetAll', 6769, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	tempLayoutBodyHeightVertMax += elBodyMainCenterHeight;
    if (tempLayoutBodyHeightHorzMax < elBodyMainCenterHeight) { tempLayoutBodyHeightHorzMax = elBodyMainCenterHeight; }
    //
	// Left
	elBodyMenuLayout1Height = fnElementHeightMaxGet(UseScroll, UseBase, elBodyMainLeft);
    // if (layoutResizeCn = 0) { elBodyMenuLayout1Height = fnElementHeightMaxGet(UseScroll, UseBase, elBodyMainLeft); }
	//
    if (debugAlert) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			' Height of elBodyMenuLayout1Height: ' + elBodyMenuLayout1Height
			+ '.',
            'fnWindowContainerHeightGetAll', 6769, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	// Check the accumaltion of Left1, Left2, Left3
	if (layoutIndex = layoutStandard) {
		fnWindowContainerHeightGetMenu(elBodyMainLeft);
	} else { fnWindowContainerHeightGetMenu(elBodyMainCenterTopLeft); }
	//
    if (debugAlert) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			' Height of elBodyMenuLayout1Height: ' + elBodyMenuLayout1Height
			+ '.',
            'fnWindowContainerHeightGetAll', 6769, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	tempLayoutBodyHeightVertMax += elBodyMenuLayout1Height;
	if (layoutIndex = layoutStandard) {
		if (tempLayoutBodyHeightHorzMax < elBodyMenuLayout1Height) { tempLayoutBodyHeightHorzMax = elBodyMenuLayout1Height; }
	}
    // Right
	elBodyMenuLayout2Height = fnElementHeightMaxGet(UseScroll, UseBase, elBodyMainRight);
    // if (layoutResizeCn = 0) { elBodyMenuLayout2Height = fnElementHeightMaxGet(UseScroll, UseBase, elBodyMainRight); }
	//
    if (debugAlert) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			' Height of BodyMenuLayout2Height: ' + elBodyMenuLayout2Height
			+ '.',
            'fnWindowContainerHeightGetAll', 6769, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	// Check the accumaltion of Right1, Right2, Right3
	if (layoutIndex = layoutStandard) {
		fnWindowContainerHeightGetMenu(elBodyMainRight);
	} else { fnWindowContainerHeightGetMenu(elBodyMainCenterTopRight); }
	//
    if (debugAlert) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			' Height of BodyMenuLayout2Height: ' + elBodyMenuLayout2Height
			+ '.',
            'fnWindowContainerHeightGetAll', 6769, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	tempLayoutBodyHeightVertMax += elBodyMenuLayout2Height;
	if (layoutIndex = layoutStandard) {
		// if (elBodyMenuLayout1Height < layoutMenuHeightVertMax) { elBodyMenuLayout1Height = layoutMenuHeightVertMax; }
		if (tempLayoutBodyHeightHorzMax < elBodyMenuLayout2Height) { tempLayoutBodyHeightHorzMax = elBodyMenuLayout2Height; }
	} else if (layoutIndex = layoutWindowed) {
		tempLayoutBodyHeightHorzMax = elBodyMainCenterHeight;
		if (elBodyMenuLayout1Height > elBodyMenuLayout2Height) {
			tempLayoutBodyHeightHorzMax += elBodyMenuLayout1Height;
		} else {
			tempLayoutBodyHeightHorzMax += elBodyMenuLayout2Height;
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
    layoutHeight = layoutBodyHeightHorzMax;
}
//
// ..................................................................................... _//
// ...................................... //
// Document Layout Size of Core Layout Boxes
function fnWindowContainerHeightGetMenu(elementPassed)
{
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
	// 		elBodyMainCenterTopLeft
	//		elBodyMenuLayout1
	//............................................................---//
	var menuGroup1;
	var menuGroup2;
	var menuGroup3;
	// Left menuGroup1, 2, 3
	if (!menuGroup1) {
		if(elementPassed) {
			menuGroup1 = fnElementGetRefFromElement(menuGroup1, 'MenuLeft1', 'MenuLeft1', elementPassed);
			menuGroup2 = fnElementGetRefFromElement(menuGroup2, 'MenuLeft2', 'MenuLeft2', elementPassed);
			menuGroup3 = fnElementGetRefFromElement(menuGroup3, 'MenuLeft3', 'MenuLeft3', elementPassed);
		}
	}
	//
	elMenuLeft1Height = fnElementHeightMaxGet(true, true, menuGroup1);
	elMenuLeft2Height = fnElementHeightMaxGet(true, true, menuGroup2);
	elMenuLeft3Height = fnElementHeightMaxGet(true, true, menuGroup3);
	//
	layoutMenuHeightVertMax = elMenuLeft1Height + elMenuLeft2Height + elMenuLeft3Height;
	//
	layoutMenuHeightHorzMax = 0;
	if (layoutMenuHeightHorzMax < elMenuLeft1Height) { layoutMenuHeightHorzMax = elMenuLeft1Height; }
	if (layoutMenuHeightHorzMax < elMenuLeft2Height) { layoutMenuHeightHorzMax = elMenuLeft2Height; }
	if (layoutMenuHeightHorzMax < elMenuLeft3Height) { layoutMenuHeightHorzMax = elMenuLeft3Height; }
	//
}
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
function fnWindowResize() {
      // Recalculate Screen Display
      //
	  if (javaLoadFirst) { fnElementObjectCreate(); }
	  //
      // ...................................... //
      // Recalculate Globals for Screen
      //
	  fnWindowClientWidth();
      // ...................................... //
      // Load Containers if missing
      //
	  if (!elBodyMainLeft) { fnElementObjectContainerCreate(); }
      // ...................................... //
      // Recalculate Positions for Menu Images
	  if (layoutResizeCn = 0) { fnWindowContainerHeightGetAll(); }
      //
	  var elBodyMainCenterLeftAdj = 0;
	  var elBodyMainCenterWidthAdj = 0;
	  //
	// ...................................... //
	// Process DivBox and Callout layout
	//
	// Count Display Blocks (s/b DivBox containers)
	elementBlockCn = fnElementObjectBlockCount();
	//
	// Determine DivBox (Body Content) column and callout sizes
	if (elBodyMainCenterCenter.offsetWidth > (layoutBlockCol3Min * layoutEmRation) && elementBlockCn > 4 && columnMax > 2) {
			layoutBlockWidth = layoutBlockWidthWide;
	} else if (elBodyMainCenterCenter.offsetWidth > (layoutBlockCol2Min * layoutEmRation)   && columnMax > 1) {
			layoutBlockWidth = layoutBlockWidthStandard;
	} else {
			layoutBlockWidth  = layoutBlockWidthNarrow;
	}
	// ...................................... //
	// Width over layoutMenuDocWidthWide
	// ...................................... //
	// if (BodyMainCenterCenter.offsetWidth > layoutMenuDocWidthWide) {
	if (layoutDocumentWidth > layoutMenuDocWidthWide) {
		// ...................................... //
		// Standard Layout
		if (layoutIndex = layoutStandard && (elBodyMainLeftVisible || elBodyMainRightVisible) ) {
			// Left
			// elBodyMainLeft.style.width = '10%';
			// elBodyMainLeft.style.width = '15%';
			if (elBodyMainLeftVisible)  {
				elBodyMainLeft.style.width = '12%';
			} else {
				elBodyMainLeft.style.width = '0%';
				elBodyMainCenterLeftAdj = 12;
				elBodyMainCenterWidthAdj += 10;
			}
			// Right
			// elBodyMainRight.style.top = 0%
			if (elBodyMainRightVisible)  {
				if (layoutUseAbsolute) { elBodyMainRight.style.left = '88%'; }
				elBodyMainRight.style.width = '12%';
			} else {
				if (layoutUseAbsolute) { elBodyMainRight.style.left = '100%'; }
				elBodyMainRight.style.width = '0%';
				elBodyMainCenterWidthAdj += 9;
			}
			//
			// Center
			// elBodyMainCenter.style.top = 0%
			if (layoutUseAbsolute) { elBodyMainCenter.style.left = (12 - elBodyMainCenterLeftAdj) + '%'; }
			elBodyMainCenter.style.width = (76 + elBodyMainCenterWidthAdj) + '%';
			 //
		} else {
			 // ...................................... //
			 // Wide Layout Options (no side menus)
			 // Center
			 // elBodyMainCenter.style.top = 0%
			 if (layoutUseAbsolute) { elBodyMainCenter.style.left = '0%'; }
			 elBodyMainCenter.style.width = '100%';
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
	  	 if (layoutIndex = layoutStandard && (elBodyMainLeftVisible || elBodyMainRightVisible) ) {
        	  	 // Left
        		 // elBodyMainLeft.style.top = 0%
        		 // if (layoutUseAbsolute) { elBodyMainLeft.style.left = '0%'; }
				if (elBodyMainLeftVisible)  {
					elBodyMainLeft.style.width = '20%';
				} else {
					if (layoutUseAbsolute) { elBodyMainLeft.style.width = '0%'; }
					elBodyMainCenterLeftAdj = 20;
					elBodyMainCenterWidthAdj += 20;
				}
				 //
        	  	 // Right
        		 // elBodyMainRight.style.top = 0%
				if (elBodyMainRightVisible)  {
					if (layoutUseAbsolute) { elBodyMainRight.style.left = '80%'; }
					elBodyMainRight.style.width = '20%';
				} else {
					if (layoutUseAbsolute) { elBodyMainRight.style.left = '100%'; }
					elBodyMainRight.style.width = '0%';
					elBodyMainCenterWidthAdj += 20;
				}
				 //
        	  	 // Center
        		 // elBodyMainCenter.style.top = 0%
        		 if (layoutUseAbsolute) { elBodyMainCenter.style.left = '20%'; }
        		 elBodyMainCenter.style.width = '60%';
			} else {
        	  	 // Center
        		 // elBodyMainCenter.style.top = 0%
        		 if (layoutUseAbsolute) { elBodyMainCenter.style.left = '0%'; }
        		 elBodyMainCenter.style.width = '100%';
			}
		//
		layoutIsWide = false;
		layoutIsStandard = true;
		//
	  }
		// ...................................... //
		// Search Sections for Callouts
		layoutSectionCn = 0;
		while (elBodyMainCenterCenter.childNodes[layoutSectionCn]) {
			// ...................................... //
			// Section
			layoutSection = elBodyMainCenterCenter.childNodes[layoutSectionCn];
			if (layoutSection.id) {
			  if ((layoutSection.id).substr(0,4) = 'DivS') {
				  layoutBlockCn = 0;
				  while (layoutSection.childNodes[layoutBlockCn]) {
					// ...................................... //
					// Block
					layoutBlock = layoutSection.childNodes[layoutBlockCn];
					if (layoutBlock.id) {
						if ((layoutBlock.id).substr(0,4) = 'DivB') {
							boxClass = layoutBlock.className;
							columnType = fnStringGetTokenByPrefix(boxClass, 'ColumnType');
							if (columnType != 'ColumnTypeFixed') { layoutBlock.style.width = layoutBlockWidth; }
							// elBodyBlockWidth = parseInt(layoutBlock.style.width);
							elBodyBlockWidth = fnElementWidthMaxGet(DoNotUseScroll, DoUseBase, layoutBlock, elementWidthDefault);
							//
							// ...................................... //
							// Callout
							calloutBlockCn = 0;
							while (layoutBlock.childNodes[calloutBlockCn]) {
								calloutBlock= layoutBlock.childNodes[calloutBlockCn];
								if (calloutBlock) {
								if (calloutBlock.id) {
									if ((calloutBlock.id).substr(0,4) = 'DivC') {
										// Get Column Type from Box class
										boxClass = calloutBlock.className;
										columnType = fnStringGetTokenByPrefix(boxClass, 'ColumnType');
										// Set Callout Width and Layout
										if (columnType != 'ColumnTypeFixed') {
											if (elBodyBlockWidth > calloutBlockLayoutWidthWide)  {
												calloutBlock.style.width = calloutBlockWidthWide;
											} else if (elBodyBlockWidth < calloutBlockLayoutWidthStandard) {
												calloutBlock.style.width = calloutBlockWidthNarrow;
											} else {
												calloutBlock.style.width = calloutBlockWidthStandard;
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
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
    	  	    'Window Resize Excessive Usage (Possible Error)',
                'fnWindowResize', 0, null, null,
                errorSevere, errorDoNotDisplayTag, errorDoAlert);
            layoutResizeCn = 0;
    	  	// layoutMenuHeightHorzMax = 2000;
	  }
	  //
	  // if (layoutResizeCn = 1) {
		//
		// elBodyMainContainer.style.height = '100%';
		// Height of left and right menu containers
		/* -- */
		//
		fnWindowContainerHeightGetAll();
		/* -- */
		//
		//
		if (debugAlert) {
			fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				' Main Container layoutHeight (body +5em): ' + layoutHeight
				+ '.',
				'fnWindowResize', 7189, null, null,
				errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		elBody.style.height = (layoutHeight + 50) + 'px';
		elBodyMainContainer.style.height = (layoutHeight) + 'px';
		  //
		  // Experiments:
          // // elBodyMainCenterCenter.style.height = '0' + 'px';;// '';// 'auto';// '100%';// '50.0em';// (layoutMenuHeightHorzMax) + 'px';
          // // elBodyMainCenter.style.height = 'auto';// '100%';// layoutMenuHeightHorzMax + 'px';
          // // elBodyMainContainer.style.height = '100%';// (layoutMenuHeightHorzMax) + 'px';// 'auto';// (layoutMenuHeightHorzMax + 100) + 'px';
          // elBody.style.height = '';// (layoutMenuHeightHorzMax + 100) + 'px';
    	  //
		  //
          // elBodyMainLeft.style.height = layoutHeight + 'px';;
          // elBodyMainRight.style.height = layoutHeight + 'px';;
          // elBodyMenuLayout1.style.height = layoutHeight + 'px';;
          // elBodyMenuLayout2.style.height = layoutHeight + 'px';;
		  //
          // elBodyMenuLayout1.style.height = '100%';
          // elBodyMenuLayout2.style.height = '100%';
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
window.onresize = function() { fnWindowResize(); }
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
function fnWindowPopupOpen()
{
// Popup Window
var sConfig= 'left= 100, top= 0, height= 500, width= 400, menubar= 0, scrollbars= 0, status= 0, toolbar= 0, location= 0';
var myWindow= window.open('http://myPopupWindow.html', 'MyWindowName', sConfig);
}
//
// ...................................... //
// Client Window
// ...................................... //
//
// ..................................................................................... _//
// ...................................... //
// Document Window Client Width
function fnWindowClientWidth() {
  // Window Width
  	layoutDocumentWidth = window.document.documentElement.offsetWidth;
  	layoutAvailWidth = window.screen.availWidth;
  	// layoutClientWidth = window.screen.availWidth - layoutWidthMargin;
	layoutClientWidth = window.document.offsetWidth - layoutWidthMargin;
  	// if (layoutClientWidth < 100) { layoutClientWidth = document.body.parentNode.clientWidth - layoutWidthMargin; }
    //
	layoutDocumentHeight = window.document.documentElement.offsetHeight;
	layoutAvailHeight = window.screen.availHeight;
    layoutClientHeightht = window.screen.availHeight - layoutHeightMargin;
    // if (layoutClientHeight < 100) { layoutClientHeight = document.body.parentNode.clientHeight - layoutHeightMargin; }
  //
  layoutWidth = layoutDocumentWidth;
  if (layoutWidth < 100)  {
        if (browserIsIE) { layoutWidth = document.body.parentNode.clientWidth; }
  }
  // layoutWidth -= layoutWidthMargin;
  layoutHeight = layoutDocumentHeight;
  if (layoutHeight < 100)  {
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
function fnWindowSessionLoad() {
      // Load Layout and Images Displayed
      // Get Cookie
         // Apply Cookie to Window
         // Apply Default to Window
}
//
// ..................................................................................... _//
// ...................................... //
// Window Session Save
function fnWindowSessionSave() {
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
function fnWindowCookieLoad() {
      // Load Layout and Images Displayed
      //
}
//
// ..................................................................................... _//
// ...................................... //
// Window Cookie Save
function fnWindowCookieSave() {
      // Load Layout and Images Displayed
      //
}
//
// ..................................................................................... _//
// ...................................... //
// Window Cookie Build
function fnWindowCookieBuild() {
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
// fn Document Load Initinitialize Variablesm, Arrays and Default Data
function fnDocumentLoadInit()
{
	//
    //  for (imgCn = 1;imgCn < 1+imgUsedCn;imgCn++){
    //    menuImage = oObjIndexSetmenuImage(imgCn);
    //    intervalSet = imgCn * 100;
    //    intervalSet += intervalBase;
    //    intervalName = menuImage.name + 'AnimationCycle()';
    //    setInterval (intervalName, intervalSet);
    //  }
    for (imgCn = imgUsedCn + 1;imgCn < 1+imgMax;imgCn++){
      imgAniToggle[imgCn]= 0;
      imgMouseHover[imgCn]= 0;
      //    menuImage = oObjIndexSetmenuImage(imgCn);
      //    menuImage.src = 'imgnone.gif';
    }
    //
    // imgGroupMax
    // imgMax
    //
    for (imgGroupCn = 0;imgGroupCn < 1+imgGroupMax;imgGroupCn++){
	  imgMax = imgMaxByGroup[imgGroupCn];
      for (imgCn = 0;imgCn < 1+imgMax;imgCn++){
        // imgCnByGroup[imgGroupCn];
        // imgMaxByGroup[imgGroupCn];
        menuImage[imgGroupCn] [imgCn] = null;
        menuImageLocked[imgGroupCn] [imgCn] [IsSmall] = false;
        menuImageLocked[imgGroupCn] [imgCn] [IsLarge] = false;
      }
    }
	//
	// Left and Right Areas
	if (!elBodyMainLeftVisible) { elBodyMainLeft.style.display = 'none'; }
	if (!elBodyMainRightVisible) { elBodyMainRight.style.display = 'none'; }
	//
    // Resize Window
    fnWindowResize();
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
function fnStringGetTokenByPrefix(stringPassed, stringPrefix) {
	var itemCn = 0
	var item = stringPassed.split(' ');
	while (itemCn+1 < 1+item.length) {
		if ( item[itemCn].substr(0,stringPrefix.length) = stringPrefix) {
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
function fnMathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, filterRealFlagPassed)
{
	var temp = ( ( Math.random()
            * (filterRangeHighPassed - filterRangeLowPassed + 1) )
            + filterRangeLowPassed
            );
	return ( temp - (temp % 1) );
}
//
// ..................................................................................... _//
// Standard function (s) - Font Size
// Base Font Size Increase
function fnFontSizeIncrease()
{
 		 return;
}
//
// ..................................................................................... _//
// Base Font Size Decrease
function fnFontSizeDecrease()
{
  		 return;
}
//
// ..................................................................................... _//
function fnTextReplace(textPassed, stringFind, stringReplace)
{
	// return textPassed.replace(stringFind, stringReplace);
	var TextNew = '';
	var TextPos = 0;
	do {
		TextPos = textPassed.indexOf(stringFind);
		if (TextPos >= 0) {
			TextNew += textPassed.substr(0, TextPos) + stringReplace;
			textPassed = textPassed.substr(TextPos + stringFind.length);
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
function fnDebugStart(debugOptionPassed, debugMessagePassed)
{
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
            // debug-instance-off fnElementItemShow;
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
var errorMessageFinal = new String();
var errorInnerHTML = new String();
var errorSourceInnerHTML = new String();
//
var errorMessageAllLog = new String();
//
var errorMessageFinalLog = new String();
var errorInnerHTMLLog = new String();
var errorSourceInnerHTMLLog = new String();
//
// ..................................................................................... _//
function fnConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
        eventText, eventUrl, eventLine)
{
	consoleEventLogCn += 1;
    var eventMessage =
        charNoWrapTagStart
        + '(' + (consoleEventLogCn).toString() + ')'
		+ ' ' + eventType
		+ ' ' + eventObject.id
		+ ' ' + eventCurrRootObj.id
		+ ' ' + eventText
		+ charNoWrapTagEnd + charNewLineTag
		+ elBodyConsoleEventTextBox.innerHTML;
//
	elBodyConsoleEventTextBox.innerHTML = eventMessage + elBodyConsoleEventTextBox.innerHTML;
//
	if ((elBodyConsoleEventTextBox.innerHTML).length > consoleLogLengthMax) {
	    elBodyConsoleEventTextBox.innerHTML = (elBodyConsoleEventTextBox.innerHTML).substr(0, consoleLogLengthTrim); }
//
	if (errorUseDebugOnAll) {
		fnWindowErrorDebug(eventMessage, eventUrl, eventLine); }
//
}
//
// ..................................................................................... _//
function fnErrorOccured(UseDebug, UseSingeLinePassed, errorMsgPassed,
        errorUrlPassed, errorLineNumPassed, elementPassed, elementSourcePassed,
        errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed)
{
    if (!elementPassed) { elementPassed = null; }
    if (!elementSourcePassed) { elementSourcePassed = null; }
    //
    errorMessageFinal = '';
    // Error Type
    switch (errorSeverityPassed) {
        case errorElementFatal:
            errorMessageFinal += 'Fatal';
            break;
        case errorElementSevere:
            errorMessageFinal += 'Severe';
            break;
        case errorElementWarn:
            errorMessageFinal += 'Warning';
            break;
        case errorElementComment:
        default:
            errorMessageFinal += '(Comment) No';
            break;
    }
    //
    errorMessageFinal += ' Error: ' + errorMsgPassed;
    if ((errorUrlPassed).length)  {
		errorMessageFinal += ' in ' + errorUrlPassed;
		if (!UseSingeLinePassed
			&& (errorMessageFinal.length > 30
			&& errorUrlPassed.length > 30)
		)  {
			errorMessageFinal += charNewLineTag + charTextIndent;
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
                if((elementPassed.id).length) { tempMessage += 'id (' + elementPassed.id + ')'; }
           } else if (elementPassed.name) {
                if((elementPassed.name).length) { tempMessage += 'name (' + elementPassed.name + ')'; }
           }
           if (elementPassed.nodeName) {
                if((elementPassed.nodeName).length) { tempMessage += ', for tag type (' + elementPassed.nodeName + ')'; }
           }
           if (tempMessage.length > 0) {
				if (!UseSingeLinePassed
					&& (errorMessageFinal.length > 30
					&& tempMessage.length > 30)
				)  {
					errorMessageFinal += charNewLineTag + charTextIndent;
				}
				//
               errorMessageFinal += 'Target tag ' + tempMessage;
           } else {
               errorMessageFinal += '. No target tag';
           }
		   //
           if (elementPassed.innerHTML) {
               if((elementPassed.innerHTML).length)  {
					errorInnerHTML = '';
                    errorInnerHTML += 'Target HTML: ';
                    if((elementPassed.innerHTML).length < 256)  {
                        errorInnerHTML += elementPassed.innerHTML;
					} else {
                        errorInnerHTML += elementPassed.innerHTML;
					}
               }
				if (!UseSingeLinePassed
					&& (errorMessageFinal.length > 30
					&& tempMessage.length > 30)
				)  {
					errorMessageFinal += charNewLineTag + charTextIndent;
				}
				//
					errorMessageFinal += 'Inner HTML ' + errorInnerHTML;
           }
        }
        //
        if (elementSourcePassed && elementSourcePassed != null) {
           tempMessage = '';
           if (elementSourcePassed.id) {
                if((elementSourcePassed.id).length) { tempMessage += ' (' + elementSourcePassed.id + ')'; }
           } else if (elementSourcePassed.name) {
                if((elementSourcePassed.name).length) { tempMessage += ' (' + elementSourcePassed.name + ')'; }
           }
           if (elementSourcePassed.nodeName) {
                if((elementSourcePassed.nodeName).length) { tempMessage += ', for tag type (' + elementSourcePassed.nodeName + ')'; }
           }
           if (elementSourcePassed.innerHTML) {
                if((elementSourcePassed.innerHTML).length)  {
                    errorInnerHTML += 'Source HTML: ';
                    if((elementSourcePassed.innerHTML).length < 256)  {
                        errorInnerHTML += elementSourcePassed.innerHTML;
					} else { errorInnerHTML += (elementSourcePassed.innerHTML).substr(0,50); }
                }
           }
           if (tempMessage.length > 0) {
				if (!UseSingeLinePassed
					&& (errorMessageFinal.length > 30
					&& tempMessage.length > 30)
				)  {
					errorMessageFinal += charNewLineTag + charTextIndent;
				}
				//
               errorMessageFinal += 'Source tag ' + tempMessage;
           } else {
               errorMessageFinal += '. No source tag';
           }
        }
        errorMessageFinal += '.';
        //
    }
    //
    var DoDebug = false;
	var errorSeverityColor = 'White';
    // Add message to appropriate log
    // Error Type
    switch (errorSeverityPassed) {
        case errorFatal:
        case errorElementFatal:
            if (errorDebugLevel < 1+errorSeverityPassed) { DoDebug = true; }
            // errorLogFatal += errorMessageFinal;
			errorSeverityColor = 'Red';
            break;
        case errorSevere:
        case errorElementSevere:
            if (errorDebugLevel < 1+errorSeverityPassed) { DoDebug = true; }
            // errorMessageSevere += errorMessageFinal;
			errorSeverityColor = 'Yellow';
            break;
        case errorWarn:
        case errorElementWarn:
            if (errorDebugLevel < 1+errorSeverityPassed) { DoDebug = true; }
            // errorMessageWarn += errorMessageFinal;
			errorSeverityColor = 'Orange';
            break;
        case errorComment:
        case errorElementComment:
        default:
            if (errorDebugLevel < 1+errorSeverityPassed) { DoDebug = true; }
            // errorMessageComment += errorMessageFinal;
			errorSeverityColor = 'Lime';
            break;
    }
	//
	if (errorUseDebugOnAll) { DoDebug = true; } else {
		// if (errorUseDebugOnError) { DoDebug = true; } else {
			if (UseDebug) { DoDebug = true; }
		// }
	}
	//
	if (errorSeverityHighest < errorSeverityPassed) {
		// Coloured button to inform user
		if (errorSeverityColor != 'White') {
			if (errorSeverityPassed >= errorSevere || errorSeverityPassed >= errorDebugLevel) {
				elBodyConsoleClearToggle.style.backgroundColor = errorSeverityColor;
				elBodyConsoleClearToggle.style.color = 'Black';
				elBodyConsoleClearToggle.style.borderColor = 'White';
			} else {
				elBodyConsoleClearToggle.style.borderColor = errorSeverityColor;
			}
		} else {
			elBodyConsoleClearToggle.style.borderColor = ButtonIsOnColor;
		}
		//
		errorSeverityHighest = errorSeverityPassed;
	}
    //
    // errorMessageAllLog += errorMessageFinal;
    //
    fnErrorOccuredAction(errorMsgPassed,
            errorUrlPassed, errorLineNumPassed, elementPassed, elementSourcePassed,
            errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed);
    //
    // REFRESH browser display
	//
	// Current Message / Error Counter
    consoleErrorLogCn += 1;
	consoleErrorLogScrollCn += 1;
	var tempCount;
	if (consoleErrorLogCn < 1000) {
		tempCount = (1000 + consoleErrorLogCn).toString().substr(1, 3);
	} else { tempCount = (100000 + consoleErrorLogCn).toString().substr(1, 5); }
	//
	// Text display
	// New line
    // elBodyConsoleErrorTextBox.innerHTML = charNewLineTag + elBodyConsoleErrorTextBox.innerHTML;
	// Message
    var tempInnerHTML = charNoWrapTagStart + '(#' + tempCount
			+ ', &#64;' + errorLineNumPassed + ')' + ' ' + errorMessageFinal
			+ charNoWrapTagEnd + elBodyConsoleErrorTextBox.innerHTML;
    elBodyConsoleErrorTextBox.innerHTML = tempInnerHTML;
	//
	if ((elBodyConsoleErrorTextBox.innerHTML).length > consoleLogLengthMax) {
        elBodyConsoleErrorTextBox.innerHTML = (elBodyConsoleErrorTextBox.innerHTML).substr(0, consoleLogLengthTrim); }
	//
	// Scroll to top when not in focus
	if (browserIsIE)  {
		// while (consoleErrorLogScrollCn > 20 && !elBodyConsoleErrorTextBox.hasFocus()) {
        while (consoleErrorLogScrollCn > 20) {
			elBodyConsoleErrorTextBox.doScroll('scrollbarPageUp');
			consoleErrorLogScrollCn -= 20;
		}
	} else {
		// TODO scrolling for other browsers
	}
	//
    // Alert
    if (errorDoAlertPassed) {
        alert('(' + tempCount + ')' + ' ' + fnTextReplace(errorMessageFinal, charNewLineTag, charNewLine) );
    }
	//
    // Abort & Debug
    if (DoDebug) {
        var DoDebugAbort = fnWindowErrorDebug(errorMsgPassed, errorUrlPassed, errorLineNumPassed);
        if (DoDebugAbort) {
            // ABORT
        }
    }
	//
}
//
// ..................................................................................... _//
// Error Message Display
// ...................................... //
function fnErrorOccuredAction(errorMsgPassed,
        errorUrlPassed, errorLineNumPassed, errorElementPassed, errorElementSourcePassed,
        errorSeverityPassed, errorDisplayTagPassed, errorDoAlert)
{
    if (errorSeverityPassed = errorFatal) {
        // display alert
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed = errorSevere) {
        // display alert
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed = errorWarn) {
        // dipslay in HTML Warnging Message Area
    } else if (errorSeverityPassed = errorDidNotOccur) {
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
window.onerror = fnWindowError;
// function() { fnWindowError(); }
//
function fnWindowError(errorMsgPassed, errorUrlPassed, errorLineNumPassed)
{
    // this may set an event or message... dunno
    var errorCaller = fnWindowError.caller;
    if (errorCaller = null) { errorCaller = 'Unknown'; }
    //
    // error Object: description Property | message Property | name Property | number Property
    // event Object: returnValue srcElement type
    //
    errorElement = null;
    errorElementSource = null;
    if (!errorLineNumPassed) { errorLineNumPassed = -1; }
    if (!errorUrlPassed) { errorUrlPassed = 'no url available'; }
    if (!errorMsgPassed) { errorMsgPassed = 'NO ERROR MESSAGE AVAILABLE!!!'; }
    //
    if (window.event) {
        e = null;
	    eventEventCurr = e || window.event;
	    //
        errorElement = eventEventCurr.target;
        errorElementSource = eventEventCurr.srcElement;
	    eventEventObject = (errorElementSource || errorElement);
	    //
	    eventEventType = eventEventCurr.type;
	    if (eventEventObject.id) {
	    if (eventEventObject.id != null) {
	        eventEventCurrId = eventEventObject.id;
	    } else { eventEventCurrId = ''; }
	    } else { eventEventCurrId = ''; }
	}
	//
    // display error in log
    fnErrorOccured(DoUseDebug, DoUseSingeLine,
			'(' + errorLineNumPassed + ') ' + errorMsgPassed,
            errorUrlPassed, errorLineNumPassed, errorElement, errorElementSource,
            errorSevere, errorDoDisplayTag, errorDoAlert);
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
function fnWindowErrorDebug(errorMsgPassed, errorUrlPassed, errorLineNumPassed)
{
    //
    // if (errorDebugLevel < 1+errorSeverityPassed) { // ignore this when called to allow override...
	//
    if (errorUseDebugOnError || errorUseDebugOnAll) {
        if (elBodyConsoleBox.style.display != 'block')  {
            fnBodyConsoleToggle('ConsoleAll');
            fnBodyConsoleToggle('ConsoleEvent');
            fnBodyConsoleToggle('ConsoleState');
        } else if (elBodyConsoleErrorBox.style.display != 'block') { fnBodyConsoleToggle('ConsoleError'); }
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
// 		fnElementEventMouseOver
//		    fnElementEventMouseOut
//		    fnElementEventClick
// ...................................... //
//
// ..................................................................................... _//
// Mouse Over
// ...................................... //
function fnElementEventMouseOver(menuImage)
{
  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
  if (menuImageCn > imgUsedCn){
    return;
  }
  imgMouseHover[menuImageCn] = 1;
  if (imgFocus = menuImageCn){
//    menuImage.src = menuImage.name + '/' + menuImage.name + 'fh.gif';
  }
  else {
//    menuImage.src = menuImage.name + '/' + menuImage.name + 'bh.gif';
  }
var tempTop = menuImage.parentNode.top;
var tempLeft = menuImage.parentNode.left;
    if (debugLogEvents)  {
        fnErrorOccured(DoNotUseDebug, DoNotUseSingeLine,
		    'Move.. Over occured on content image'
		    + ' set successfully! Random filter # ' + filterIndex + ' '
		    + charNewLineTag + 'top: ' + tempTop
		    + charNewLineTag + 'Left: ' + tempLeft,
            'fnElementEventMouseOver', 7140, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        //
    }
}
//
// ..................................................................................... _//
// Mouse Out
// ...................................... //
function fnElementEventMouseOut(menuImage)
{
  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
  if (menuImageCn > imgUsedCn){
    return;
  }
  imgMouseHover[menuImageCn] = 0;
  if (imgFocus = menuImageCn){
//    menuImage.src = menuImage.name + '/' + menuImage.name + 'f.gif';
  } else {
//    menuImage.src = menuImage.name + '/' + menuImage.name + 'b.gif';
  }
}
//
// ..................................................................................... _//
// Mouse Click
// ...................................... //
function fnElementEventClick(menuImage)
{
  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
  if (menuImageCn > imgUsedCn){
    return;
  }
  if (imgFocus = menuImageCn){
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
//  img0.src = menuImage.name + 'lr.gif';
//  img0text.src = menuImage.name + 'text.txt';
    imgSelect = menuImageCn;
    if (debugLogEvents)  {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			'Move.. Over occured on content image'
		    + charNewLineTag + 'Menu Image Name: ' + menuImage.name
		    + charNewLineTag + 'Image number selected: ' + menuImageCn,
            'fnElementEventClick', 7196, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
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
function fnElementObjectBlockCount()
{
	var elementBlockCn = 0;
	// Search Sections for Callouts
	layoutSectionCn = 0;
	while (elBodyMainCenterCenter.childNodes[layoutSectionCn]) {
	layoutSection = elBodyMainCenterCenter.childNodes[layoutSectionCn];
	// Section
	layoutBlockCn = 0;
	if (layoutSection.id) {
		if ((layoutSection.id).substr(0,4) = 'DivS') {
		  while (elBodyMainCenterCenter.childNodes[layoutSectionCn].childNodes[layoutBlockCn]) {
		  if (layoutSection.childNodes[layoutBlockCn].id) {
				if ((layoutSection.childNodes[layoutBlockCn].id).substr(0,4) = 'DivB')  {
					elementBlockCn += 1;
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
	return elementBlockCn;
}
//
//............................................................---//
// ...................................... //
// Create all Elements used in Layout
function fnElementObjectContainerCreate()
{
//............................................................---//
// Body Container References
//............................................................---//
elBody = fnElementGetRef(elBody, 'BodyBox', 'BodyBox');
elBodyMainContainer = fnElementGetRef(elBodyMainContainer, 'BodyMainContainer', 'BodyMainContainer');
// Body Center Area References
elBodyMainCenter = fnElementGetRef(elBodyMainCenter,'BodyMainCenter','BodyMainCenter');
// Body Left Area Copy
elBodyMainLeft = fnElementGetRef(elBodyMainLeft,'BodyMainLeft','BodyMainLeft');
// Body Right Area Copy
elBodyMainRight = fnElementGetRef(elBodyMainRight,'BodyMainRight','BodyMainRight');
//
elBodyMainCenterCenter = fnElementGetRef(elBodyMainCenterCenter,'BodyMainCenterCenter','BodyMainCenterCenter');
//
// elColumnType1 = fnElementGetRef(elColumnType1,'ColumnType1','ColumnType1');
}
//
// ..................................................................................... _//
// ...................................... //
// Create all Elements used in Layout
function fnElementObjectCreate()
{
	  // State change at top to avoid duplicate calls.
	  javaLoadFirst = false;
	  // elBodyFirst = false;
//............................................................---//
// Body Container References
//............................................................---//
fnElementObjectContainerCreate();
//
//............................................................---//
// Banner References (Top Menu, Logo and Graphics)
//............................................................---//
elBodyBanner = fnElementGetRef(elBodyBanner, 'BodyBanner', 'BodyBanner');
elBodyBannerTop = fnElementGetRef(elBodyBannerTop, 'BodyBannerTop', 'BodyBannerTop');
elBodyBannerBottom = fnElementGetRef(elBodyBannerBottom, 'BodyBannerBottom', 'BodyBannerBottom');
//
//............................................................---//
// Body View Toggle and Message Area Containers
//............................................................---//
// elBodyViewToggle View Toggle and Message Area
elBodyViewToggleContainer = fnElementGetRef(elBodyViewToggleContainer, 'BodyViewToggleContainerLeft', 'BodyViewToggleContainerLeft');
elBodyViewToggleContainerCenter = fnElementGetRef(elBodyViewToggleContainerCenter, 'BodyViewToggleContainerCenter', 'BodyViewToggleContainerCenter');
elBodyViewToggleContainerLeft = fnElementGetRef(elBodyViewToggleContainerLeft, 'BodyViewToggleContainerLeft', 'BodyViewToggleContainerLeft');
//
elBodyConsoleMouseOverToggle = fnElementGetRef(elBodyConsoleMouseOverToggle, 'BodyConsoleMouseOverToggle', 'BodyConsoleMouseOverToggle');
//
//............................................................---//
// Body Console Toggle and Message Area
//............................................................---//
// Toggle Buttons
elBodyConsoleBoxButtons = fnElementGetRef(elBodyConsoleBoxButtons, 'BodyConsoleBoxButtons', 'BodyConsoleBoxButtons');
elBodyConsoleBoxToggles = fnElementGetRef(elBodyConsoleBoxToggles, 'BodyConsoleBoxToggles', 'BodyConsoleBoxToggles');
elBodyConsoleLogToggles = fnElementGetRef(elBodyConsoleLogToggles, 'BodyConsoleLogToggles', 'BodyConsoleLogToggles');
elBodyConsoleAuxillaryToggles = fnElementGetRef(elBodyConsoleAuxillaryToggles, 'BodyConsoleAuxillaryToggles', 'BodyConsoleAuxillaryToggles');
//
elBodyConsoleToggle = fnElementGetRef(elBodyConsoleToggle, 'BodyConsoleToggle', 'BodyConsoleToggle');
//
elBodyConsoleErrorToggle = fnElementGetRef(elBodyConsoleErrorToggle, 'BodyConsoleErrorToggle', 'BodyConsoleErrorToggle');
elBodyConsoleEventToggle = fnElementGetRef(elBodyConsoleEventToggle, 'BodyConsoleEventToggle', 'BodyConsoleEventToggle');
elBodyConsoleStateToggle = fnElementGetRef(elBodyConsoleStateToggle, 'BodyConsoleStateToggle', 'BodyConsoleStateToggle');
elBodyConsoleTestToggle = fnElementGetRef(elBodyConsoleTestToggle, 'BodyConsoleTestToggle', 'BodyConsoleTestToggle');
elBodyConsoleClearToggle = fnElementGetRef(elBodyConsoleClearToggle, 'BodyConsoleClearToggle', 'BodyConsoleClearToggle');
//
elBodyConsoleDebugButtons = fnElementGetRef(elBodyConsoleDebugButtons, 'BodyConsoleDebugButtons', 'BodyConsoleDebugButtons');
elBodyConsoleDebugToggles = fnElementGetRef(elBodyConsoleDebugToggles, 'BodyConsoleDebugToggles', 'BodyConsoleDebugToggles');
elBodyConsoleDebugMainToggles = fnElementGetRef(elBodyConsoleDebugMainToggles, 'BodyConsoleDebugMainToggles', 'BodyConsoleDebugMainToggles');
elBodyConsoleDebugTypesToggles = fnElementGetRef(elBodyConsoleDebugTypesToggles, 'BodyConsoleDebugTypesToggles', 'BodyConsoleDebugTypesToggles');
//
elBodyConsoleDebugToggle = fnElementGetRef(elBodyConsoleDebugToggle, 'BodyConsoleDebugToggle', 'BodyConsoleDebugToggle');
//
elBodyConsoleDebugMoveToggle = fnElementGetRef(elBodyConsoleDebugMoveToggle, 'BodyConsoleDebugMoveToggle', 'BodyConsoleDebugMoveToggle');
elBodyConsoleDebugTransitionToggle = fnElementGetRef(elBodyConsoleDebugTransitionToggle, 'BodyConsoleDebugTransitionToggle', 'BodyConsoleDebugTransitionToggle');
elBodyConsoleDebugDetailToggle = fnElementGetRef(elBodyConsoleDebugDetailToggle, 'BodyConsoleDebugDetailToggle', 'BodyConsoleDebugDetailToggle');
elBodyConsoleDebugAllToggle = fnElementGetRef(elBodyConsoleDebugAllToggle, 'BodyConsoleDebugAllToggle', 'BodyConsoleDebugAllToggle');
elBodyConsoleDebugOnErrorToggle = fnElementGetRef(elBodyConsoleDebugOnErrorToggle, 'BodyConsoleDebugOnErrorToggle', 'BodyConsoleDebugOnErrorToggle');
elBodyConsoleDebugEventsToggle = fnElementGetRef(elBodyConsoleDebugEventsToggle, 'BodyConsoleDebugEventsToggle', 'BodyConsoleDebugEventsToggle');
//
// Body Console Toggle and Message Area
elBodyConsoleContainer = fnElementGetRef(elBodyConsoleContainer, 'BodyConsoleContainer', 'BodyConsoleContainer');
elBodyConsoleBox = fnElementGetRef(elBodyConsoleBox, 'BodyConsoleBox', 'BodyConsoleBox');
elBodyConsoleErrorBox = fnElementGetRef(elBodyConsoleErrorBox, 'BodyConsoleErrorBox', 'BodyConsoleErrorBox');
elBodyConsoleErrorTextBox = fnElementGetRef(elBodyConsoleErrorTextBox, 'BodyConsoleErrorTextBox', 'BodyConsoleErrorTextBox');
elBodyConsoleEventBox = fnElementGetRef(elBodyConsoleEventBox, 'BodyConsoleEventBox', 'BodyConsoleEventBox');
elBodyConsoleEventTextBox = fnElementGetRef(elBodyConsoleEventTextBox, 'BodyConsoleEventTextBox', 'BodyConsoleEventTextBox');
elBodyConsoleStateBox = fnElementGetRef(elBodyConsoleStateBox, 'BodyConsoleStateBox', 'BodyConsoleStateBox');
elBodyConsoleStateTextBox = fnElementGetRef(elBodyConsoleStateTextBox, 'BodyConsoleStateTextBox', 'BodyConsoleStateTextBox');
elBodyConsoleTestBox = fnElementGetRef(elBodyConsoleTestBox, 'BodyConsoleTestBox', 'BodyConsoleTestBox');
elBodyConsoleTestTextBox = fnElementGetRef(elBodyConsoleTestTextBox, 'BodyConsoleTestTextBox', 'BodyConsoleTestTextBox');
//
if (elBodyConsoleBox.style.display = '') { elBodyConsoleBox.style.display = 'none' }
if (elBodyConsoleErrorBox.style.display = '') { elBodyConsoleErrorBox.style.display = 'block'; }
if (elBodyConsoleEventBox.style.display = '') { elBodyConsoleEventBox.style.display = 'block'; }
if (elBodyConsoleStateBox.style.display = '') { elBodyConsoleStateBox.style.display = 'block'; }
if (elBodyConsoleTestBox.style.display = '') { elBodyConsoleTestBox.style.display = 'block'; }
//
fnBodyConsoleShow(DoNotUseHide, DoNotUseDebug );
// if (elBodyConsoleBoxToggles.style.display = '') { elBodyConsoleBoxToggles.style.display = 'block'; }
fnBodyConsoleShow(DoNotUseHide, DoUseDebug );
// if (elBodyConsoleDebugToggles.style.display = '') { elBodyConsoleDebugToggles.style.display = 'block'; }
//
//............................................................---//
// Body Center Area References
//............................................................---//
// elBodyMainCenter = fnElementGetRef(elBodyMainCenter,'BodyMainCenter','BodyMainCenter');
//
elBodyMainCenterTop = fnElementGetRef(elBodyMainCenterTop,'BodyMainCenterTop','BodyMainCenterTop');
elBodyMainCenterTopLeft = fnElementGetRef(elBodyMainCenterTopLeft,'BodyMainCenterTopLeft','BodyMainCenterTopLeft');
elBodyMainCenterTopRight = fnElementGetRef(elBodyMainCenterTopRight,'BodyMainCenterTopRight','BodyMainCenterTopRight');
//
elBodyMainCenterTopColBreak = fnElementGetRef(elBodyMainCenterTopColBreak,'BodyMainCenterTopColBreak','BodyMainCenterTopColBreak');
//
// elBodyMainCenterCenter = fnElementGetRef(elBodyMainCenterCenter,'BodyMainCenterCenter','BodyMainCenterCenter');
//
elBodyMainCenterBottom = fnElementGetRef(elBodyMainCenterBottom,'BodyMainCenterBottom','BodyMainCenterBottom');
//
//............................................................---//
// Body Left Area Copy
//............................................................---//
// elBodyMainLeft = fnElementGetRef(elBodyMainLeft,'BodyMainLeft','BodyMainLeft');// createElement
// elBodyMainLeft = fnElementGetRef(elBodyMainLeft,'BodyMainLeft','BodyMainLeft');
elBodyMainLeftCopy = fnElementCopy(elBodyMainLeftCopy, elBodyMainLeftCopyFirst, elBodyMainLeft, 'block');
elBodyMainLeftCurr = fnElementCopy(elBodyMainLeftCurr, elBodyMainLeftCurrFirst, elBodyMainLeft, 'block');
elBodyMainLeftOrig = fnElementCopy(elBodyMainLeftOrig, elBodyMainLeftOrigFirst, elBodyMainLeft, 'block');
//
// if (false = true) {
elBodyMainLeftOuter = fnElementGetRefFromElement(elBodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', elBodyMainLeftCopy)
// elBodyMainLeftOuter = fnElementGetRef(elBodyMainLeftOuter,'BodyMainLeftOuter','BodyMainLeftOuter');
elBodyMainLeftInner = fnElementGetRefFromElement(elBodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', elBodyMainLeftCopy)
// elBodyMainLeftInner = fnElementGetRef(elBodyMainLeftInner,'BodyMainLeftInner','BodyMainLeftInner');
//
elBodyMenuLayout1 = fnElementGetRefFromElement(elBodyMenuLayout1, 'BodyMenuLayout1', 'BodyMenuLayout1', elBodyMainLeftCopy)
// elBodyMenuLayout1 = fnElementGetRef(elBodyMenuLayout1,'BodyMenuLayout1','BodyMenuLayout1');
elMenuContainerLeft1 = fnElementGetRefFromElement(elMenuContainerLeft1, 'MenuContainerLeft1', 'MenuContainerLeft1', elBodyMainLeftCopy)
// elMenuContainerLeft1 = fnElementGetRef(elMenuContainerLeft1,'MenuContainerLeft1','MenuContainerLeft1');
// Left 1
elMenuLeft1 = fnElementGetRefFromElement(elMenuLeft1, 'MenuLeft1', 'MenuLeft1', elBodyMainLeftCopy)
// elMenuLeft1 = fnElementGetRef(elMenuLeft1,'MenuLeft1','MenuLeft1');
// elMenuLeft1 = fnElementGetRefFromElement(elMenuLeft1, elMenuLeft1.id, elMenuLeft1.name, elBodyMainLeft)
// var elMenuLeft1Save = fnElementGetRef(elMenuLeft1Save,'MenuLeft1Save','MenuLeft1Save');
// Left 2
elMenuContainerLeft2 = fnElementGetRefFromElement(elMenuContainerLeft2, 'MenuContainerLeft2', 'MenuContainerLeft2', elBodyMainLeftCopy)
// elMenuContainerLeft2 = fnElementGetRef(elMenuContainerLeft2,'MenuContainerLeft2','MenuContainerLeft2');
elMenuLeft2 = fnElementGetRefFromElement(elMenuLeft2, 'MenuLeft2', 'MenuLeft2', elBodyMainLeftCopy)
// elMenuLeft2 = fnElementGetRef(elMenuLeft2,'MenuLeft2','MenuLeft2');
// var elMenuLeft2Save = fnElementGetRef(elMenuLeft2Save,'MenuLeft2Save','MenuLeft2Save');
// Left 3
elMenuContainerLeft3 = fnElementGetRefFromElement(elMenuContainerLeft3, 'MenuContainerLeft3', 'MenuContainerLeft3', elBodyMainLeftCopy)
// elMenuContainerLeft3 = fnElementGetRef(elMenuContainerLeft3,'MenuContainerLeft3','MenuContainerLeft3');
elMenuLeft3 = fnElementGetRefFromElement(elMenuLeft3, 'MenuLeft3', 'MenuLeft3', elBodyMainLeftCopy)
// elMenuLeft3 = fnElementGetRef(elMenuLeft3,'MenuLeft3','MenuLeft3');
// var elMenuLeft3Save = fnElementGetRef(elMenuLeft3Save,'MenuLeft3Save','MenuLeft3Save');
// }
//
//............................................................---//
// Body Right Area Copy
//............................................................---//
// elBodyMainRight = fnElementGetRef(elBodyMainRight,'BodyMainRight','BodyMainRight');
elBodyMainRightCopy = fnElementCopy(elBodyMainRightCopy, elBodyMainRightCopyFirst, elBody, 'block');
elBodyMainRightCurr = fnElementCopy(elBodyMainRightCurr, elBodyMainRightCurrFirst, elBodyMainRight, 'block');
elBodyMainRightOrig = fnElementCopy(elBodyMainRightOrig, elBodyMainRightOrigFirst, elBodyMainRight, 'block');
//
elBodyMainRightOuter = fnElementGetRefFromElement(elBodyMainRightOuter, 'BodyMainRightOuter', 'BodyMainRightOuter', elBodyMainRightCopy)
// elBodyMainRightOuter = fnElementGetRef(elBodyMainRightOuter,'BodyMainRightOuter','BodyMainRightOuter');
elBodyMainRightInner = fnElementGetRefFromElement(elBodyMainRightInner, 'BodyMainRightInner', 'BodyMainRightInner', elBodyMainRightCopy)
// elBodyMainRightInner = fnElementGetRef(elBodyMainRightInner,'BodyMainRightInner','BodyMainRightInner');
//
elBodyMenuLayout2 = fnElementGetRef(elBodyMenuLayout2,'BodyMenuLayout2','BodyMenuLayout2');
//
elMenuContainerRight1 = fnElementGetRefFromElement(elMenuContainerRight1,'MenuContainerRight1','MenuContainerRight1', elBodyMainRightCopy);
// elMenuContainerRight1 = fnElementGetRef(elMenuContainerRight1,'MenuContainerRight1','MenuContainerRight1');
elMenuRight1 = fnElementGetRefFromElement(elMenuRight1, 'elMenuRight1', 'elMenuRight1', elBodyMainRightCopy);
// var elMenuRight1Save = fnElementGetRef(elMenuRight1Save,'MenuRight1Save','MenuRight1Save');
elMenuContainerRight2 = fnElementGetRefFromElement(elMenuContainerRight2,'MenuContainerRight2','MenuContainerRight2', elBodyMainRightCopy);
elMenuRight2 = fnElementGetRefFromElement(elMenuRight2,'MenuRight2','MenuRight2', elBodyMainRightCopy);
// var elMenuRight2Save = fnElementGetRef(elMenuRight2Save,'MenuRight2Save','MenuRight2Save');
elMenuContainerRight3 = fnElementGetRefFromElement(elMenuContainerRight3,'MenuContainerRight3','MenuContainerRight3', elBodyMainRightCopy);
elMenuRight3 = fnElementGetRefFromElement(elMenuRight3,'MenuRight3','MenuRight3', elBodyMainRightCopy);
// var elMenuRight3Save = fnElementGetRef(elMenuRight3Save,'MenuRight3Save','MenuRight3Save');
//
//............................................................---//
// Body Far Right Area
//............................................................---//
elBodyMainRightFar = fnElementGetRef(elBodyMainRightFar,'BodyMainRightFar','BodyMainRightFar');
//
//............................................................---//
// Other...
//............................................................---//
// elBodyMainCenterTopColBreak
elBodyMainCenterTopColBreak = fnElementGetRef(elBodyMainCenterTopColBreak,'BodyMainCenterTopColBreak','BodyMainCenterTopColBreak');
//
elMenuLeft1ColBreak = fnElementGetRef(elMenuLeft1ColBreak, 'MenuLeft1ColBreak', 'MenuLeft1ColBreak');
elMenuLeft2ColBreak = fnElementGetRef(elMenuLeft2ColBreak, 'MenuLeft2ColBreak', 'MenuLeft2ColBreak');
elMenuLeft3ColBreak = fnElementGetRef(elMenuLeft3ColBreak, 'MenuLeft3ColBreak', 'MenuLeft3ColBreak');
elMenuRight1ColBreak = fnElementGetRef(elMenuRight1ColBreak, 'MenuRight1ColBreak', 'MenuRight1ColBreak');
elMenuRight2ColBreak = fnElementGetRef(elMenuRight2ColBreak, 'MenuRight2ColBreak', 'MenuRight2ColBreak');
elMenuRight3ColBreak = fnElementGetRef(elMenuRight3ColBreak, 'MenuRight3ColBreak', 'MenuRight3ColBreak');
//
//............................................................---//
//............................................................---//
	  //
	  // document.recalc();
	  //
	  javaLoadFirst = false;
	  // elBodyFirst = false;
}
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Element Get function (s)
// ...................................... //
//
// ..................................................................................... _//
//
function fnElementGetFromId(IdPassed) { return document.getElementById(IdPassed); }
//
// ..................................................................................... _//
// ...................................... //
// Element Get Pointer
function fnElementGetRef(elementObject, elementObjectId, elementNamePassed)
{
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
function fnElementGetRefFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed)
{
// DOES THIS NEED TO BE COPIES.
// As written it results in pointers into the Source Document
         // Dest = fnElementGetRefFromElement(Dest, 'DestId', 'DestName', Source);
 		if (browserIsTEST) {
            // browserIsTEST
            if (!elementNamePassed.length) { elementNamePassed = elementIdPassed; }
            elementPassed = window.document.querySelector(elementNamePassed);
        } else if (browserIsIE && elementSourcePassed.all) {
          	// browserIE
            elementPassed = elementSourcePassed.querySelector(elementIdPassed);
        } else if (browserIsFF) {
          	// browserIsFF
		// fnElementGetFromElement(
		//		elementPassed, elementIdPassed, elementNamePassed,
		//		elementSourcePassed,
		//		elementFindDoSetPassed, elementValuePassed
			elementPassed = fnElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed, elementFindDoReturn, null)
			// elementPassed = elementSourcePassed.getElementsByName(elementIdPassed);
			// elementPassed = elementSourcePassed.childNodes.item(elementIdPassed);
      	 	// elementPassed = elementSourcePassed.childNodes[elementIdPassed];
      	 	// elementPassed = elementSourcePassed.getElementById(elementIdPassed);
        } else if (true) {
          	// NOT browserIE or browserIsFF
			var DoSet = false;
			elementPassed = fnElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed,
					elementSourcePassed,
					DoSet, null);
			//
			// elementPassed = elementSourcePassed.getElementById(elementIdPassed);
			// elementPassed = fnElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed, elementFindDoReturn, null)
      	 	// elementPassed = document.getElementById(elementIdPassed);
        }
        return elementPassed;
}
//
// ..................................................................................... _//
// ...................................... //
// Layout Menu Area Element Common Fields Set
function fnElementCreate(elementPassed, elementLayoutFirstPassed)
{
	var elementCreate = false;
    if (!elementPassed) { elementCreate = true;
	} else if (!elementPassed.style) { elementCreate = true; }
	//
	if (elementCreate) {
        if (browserIsIE)  {
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
function fnElementCopy(elementPassed, elementLayoutFirstPassed, elementSourcePassed, elementStyleDisplayPassed)
{
    var elementIdCurr;
    var elementSourceIdCurr;
    if (elementSourcePassed.id) {
    elementSourceIdCurr = elementSourcePassed.id; } else {elementSourceIdCurr = ''; }
    //
	elementPassed = fnElementCreate(elementPassed, elementLayoutFirstPassed);
	//
    //............................................................---//
    if (elementPassed.id) { elementIdCurr = elementSourcePassed.id; } else {elementIdCurr = ''; }
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
                // fnElementEventsCopy(elementPassed, elementSourcePassed, elementPassed.id, elementSourcePassed.id)
            }
        }
        // if (elementPassed.innerHTML = null || elementPassed.innerHTML.length = 0) {
            // elementPassed.innerHTML = elementSourcePassed.innerHTML;
        // }
		if (!elementPassed.style) {
		elementPassed.setAttribute('style', ''); }
        elementPassed.style.display = elementStyleDisplayPassed;
    }
	return elementPassed;
}
//
// ..................................................................................... _//
// Layout Menu Area Element Common Fields Set
// ...................................... //
function fnElementGetFromElement(
		elementPassed, elementIdPassed, elementNamePassed,
		elementSourcePassed,
		elementFindDoSetPassed, elementValuePassed
		)
{
    // Dest = fnElementGetRefFromElement(Dest, 'DestId', 'DestName', Source);
    //
    var elementChildObject;
    var elementTempFirst = true;
	elementFound = false;
	//
	elementPassed = fnElementCreate(elementPassed, elementTempFirst);
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    //
    for (var elmCn = 0;elmCn < 1+elementSourcePassed.childNodes.length;elmCn++){
      elementChildObject = elementSourcePassed.childNodes[elmCn];
      if (elementChildObject) {
          if (elementChildObject.id) {
              if (elementChildObject.id != null) {
			  if (elementChildObject.id != '' && elementChildObject.id == elementIdPassed) {
                  //
                  if (elementFindDoSetPassed = elementFindDoSet) {
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
    		  		elementPassed = fnElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementChildObject, elementFindDoSetPassed, elementValuePassed);
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
function fnElementEventsCopy(elementObject, elementSourceObject, elementObjectId, elementSourceObjectId)
{
 		var elementChildObject;
		var elementSourceChildObject;
		//
		if (!elementObjectId.length) { elementObjectId = elementSourceObjectId; }
		//
		if (elementObjectId.length && elementSourceObjectId.length)  {
        //
        if (!elementObject) { return; }
        // if (!elementObject)  {
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
        if (typeof(elementObject) != 'element') { return; }
        if (typeof(elementSourceObject) != 'element') {
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
    for (elmCn = 1;elmCn < 1+elementObject.childNodes.length;elmCn++){
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
function fnElementBreakSet(elementPassed, elementIdPassed, elementLayoutFirstPassed, elementStyleDisplayPassed, elementStyleVisibilityPassed, elsementStyleClearPassed)
{
        if (!elementPassed) {
            elementPassed = fnElementGetRef(elementPassed, elementIdPassed, elementIdPassed);
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
		elementTarget = fnElementGetFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed, elementFindDoReturn, null);
        // elementTarget = fnElementGetRefFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed);
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
				} else if (debugTimerDetail) {
                    fnErrorOccured(DoNotUseDebug, DoNotUseSingeLine,
							'Element Break Set, Style missing',
                            'fnElementBreakSet', 7742, elementTarget, elementPassed,
                            errorElementWarn, errorDoDisplayTag, errorDoNotAlert);
                }
                // set Visibilty.
				if (elementStyleVisibilityPassed.length)  {
					if (elementTarget.style.visibility) {
						elementTarget.style.visibility = elementStyleVisibilityPassed;
					} else if (debugTimerDetail) {
						fnErrorOccured(DoNotUseDebug, DoNotUseSingeLine,
								'Element Break Set, Visibility missing',
								'fnElementBreakSet', 7751, elementTarget, elementPassed,
								errorElementWarn, errorDoDisplayTag, errorDoNotAlert);
						elementTarget.style.visibility = elementStyleVisibilityPassed;
					}
				}
                // set the Clear attribute.
				if (elsementStyleClearPassed.length)  {
					// note: the redundant syntax, different logic than above
					if (elementTarget.style.clear) {
						if (elsementStyleClearPassed.length) { elementTarget.style.clear = elsementStyleClearPassed; }
					} else if (debugTimerDetail) {
						fnErrorOccured(DoNotUseDebug, DoNotUseSingeLine,
								'Element Break Set, Clear missing',
								'fnElementBreakSet', 7760, elementTarget, elementPassed,
								errorElementWarn, errorDoDisplayTag, errorDoNotAlert);
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
function fnElementPosGet(DoScroll, DoBase, elementPassed, elementWidthDefault, elementHeightDefault)
{
   oObjTop = fnElementTopMaxGet(DoScroll, DoBase, elementPassed);
   oObjLeft = fnElementLeftMaxGet(DoScroll, DoBase, elementPassed);
   if (!oObjTop || !oObjLeft) { fnElementPosCalculate(elementPassed) } else  {
       oObjWidth = fnElementWidthMaxGet(DoScroll, DoBase, elementPassed, elementWidthDefault);
       oObjHeight = fnElementHeightMaxGet(DoScroll, DoBase, elementPassed, elementHeightDefault);
   }
   //
   return [oObjTop, oObjLeft, oObjWidth, oObjHeight];
}
//
// ..................................................................................... _//
// Element Position Calculate
// ...................................... //
function fnElementPosCalculate(elementPassed)
{
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
function fnElementTopMaxGet(DoScroll, DoBase, elementPassed)
{
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
function fnElementLeftMaxGet(DoScroll, DoBase, elementPassed)
{
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
function fnElementWidthMaxGet(DoScroll, DoBase, elementPassed, elementWidthDefault)
{
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
	if (thisWidth = 0) { thisWidth = elementWidthDefault; }
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
function fnElementHeightMaxGet(DoScroll, DoBase, elementPassed, elementHeightDefault)
{
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
	if (thisHeight = 0) { thisHeight = heightClient; }
	//
	if (thisHeight = 0)  {
		// Dom Add:
		// all else failed so use the protype approach...
		var elBodyTempContainer = document.getElementById('BodyTempContainer');
		elBodyTempContainer.appendChild(elementPassed.cloneNode(true));
		heightNode = elBodyTempContainer.childNodes[0].offsetHeight;
		elBodyTempContainer.removeChild(elBodyTempContainer.childNodes[0]);
		if (heightNode > thisHeight) { thisHeight = heightNode; }
		//
		// Bounding Rect:
		// Or this approach...
		if (!browserIsIE) {
			// if (elementPassed.getClientRects) {
				var clientRects = elementPassed.getClientRects();
				if (clientRects != null) {
					while ( clientRectsIndex < clientRects.length) {
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
	// if (thisHeight = 0) { thisHeight = elementHeightDefault; }
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
function fnElementLayoutHeightNote(DoScroll, DoBase, elementPassed, elementWidthDefault)
{
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
function fnBodyConsoleToggle(ConsoleBlockPassed)
{
    var checkBoxSize = false;
    var checkNoVisibleDebug = false;
    var checkNoVisibleConsole = false;
	var checkLogMode = false;
	var checkLogModeSeeEvents = false;
	var checkLogModeSeeErrors = false;
    var boxStyleSaved = '';
		//
    switch(ConsoleBlockPassed) {
		//
    case 'ConsoleMouseOver':
        if (eventMouseOverEnabled) {
            eventMouseOverEnabled = false;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Mouse Over Menus is OFF',
                    'fnBodyConsoleToggle', 8307, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleMouseOverToggle.style.borderColor = ButtonIsOffColor;
        } else {
            eventMouseOverEnabled = true;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Mouse Over Menus is ON',
                    'fnBodyConsoleToggle', 8314, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleMouseOverToggle.style.borderColor = ButtonIsOnColor;
        }
		//
        break;
		//
    case 'ConsoleError':
        if (elBodyConsoleBox.style.display != 'block')  {
            boxStyleSaved = elBodyConsoleErrorBox.style.display;
            fnBodyConsoleToggle('ConsoleAll');
            elBodyConsoleErrorBox.style.display = boxStyleSaved;
        } else {
			if (elBodyConsoleErrorBox.style.display != 'block') {
				elBodyConsoleErrorBox.style.display = 'block';
				elBodyConsoleErrorToggle.style.borderColor = ButtonIsOnColor;
			} else {
				elBodyConsoleErrorBox.style.display = 'none';
				elBodyConsoleErrorToggle.style.borderColor = ButtonIsOffColor;
			}
		}
		//
        checkNoVisibleConsole = true;
        checkBoxSize = true;
        break;
		//
    case 'ConsoleEvent':
        if (elBodyConsoleBox.style.display != 'block') {
            boxStyleSaved = elBodyConsoleEventBox.style.display;
            fnBodyConsoleToggle('ConsoleAll');
            elBodyConsoleEventBox.style.display = boxStyleSaved;
        } else {
			if (elBodyConsoleEventBox.style.display != 'block') {
				elBodyConsoleEventBox.style.display = 'block';
				elBodyConsoleEventToggle.style.borderColor = ButtonIsOnColor;
				elBodyConsoleErrorBox.style.width = '31%';
			} else {
				elBodyConsoleEventBox.style.display = 'none';
				elBodyConsoleEventToggle.style.borderColor = ButtonIsOffColor;
				elBodyConsoleErrorBox.style.width = '64%';
			}
		}
		//
        checkNoVisibleConsole = true;
        checkBoxSize = true;
        break;
		//
    case 'ConsoleState':
        if (elBodyConsoleBox.style.display != 'block') {
			if (debugStateLoadFirst) { fnDebugParameterInit(); }
            boxStyleSaved = elBodyConsoleStateBox.style.display;
            fnBodyConsoleToggle('ConsoleAll');
            elBodyConsoleStateBox.style.display = boxStyleSaved;
        } else {
			if (elBodyConsoleStateBox.style.display != 'block') {
				elBodyConsoleStateBox.style.display = 'block';
				elBodyConsoleStateTextBox.style.display = 'block';
				elBodyConsoleStateToggle.style.borderColor = ButtonIsOnColor;
			} else {
				elBodyConsoleStateBox.style.display = 'none';
				elBodyConsoleStateTextBox.style.display = 'none';
				elBodyConsoleStateToggle.style.borderColor = ButtonIsOffColor;
			}
		}
		//
        checkNoVisibleConsole = true;
        checkBoxSize = true;
        break;
		//
    case 'ConsoleTest':
        if (elBodyConsoleBox.style.display != 'block') {
            boxStyleSaved = elBodyConsoleTestBox.style.display;
            fnBodyConsoleToggle('ConsoleAll');
            elBodyConsoleTestBox.style.display = boxStyleSaved;
        }
		//
        if (elBodyConsoleTestBox.style.display != 'block') {
            elBodyConsoleTestBox.style.display = 'block';
            elBodyConsoleTestTextBox.style.display = 'block';
            elBodyConsoleTestToggle.style.borderColor = ButtonIsOnColor;
        }
        // execute test
        fnErrorOccured(DoNotUseDebug, DoNotUseSingeLine,
				'This is a test message for checking the console display...',
                'fnBodyConsoleToggle', 8225, elBodyConsoleTestBox, elBodyConsoleTestBox,
                errorSevere, errorDoDisplayTag, errorDoAlert);
		//
        checkNoVisibleConsole = true;
        checkBoxSize = true;
        break;
		//
    case 'ConsoleClear':
		elBodyConsoleErrorTextBox.innerHTML = '';
		fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			'Error and Log Console has been cleared...',
			'fnBodyConsoleToggle', 8235, null, null,
			errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
		//
		elBodyConsoleClearToggle.style.backgroundColor = '';
		elBodyConsoleClearToggle.style.color = '';
		elBodyConsoleClearToggle.style.borderColor = '';
		errorSeverityHighest = 0;
        checkNoVisibleConsole = true;
        checkBoxSize = true;
        break;
// ..................................................................................... _//
//
    case 'ConsoleDebug':
        if (elBodyConsoleDebugMainToggles.style.display != 'block') {
			debugTimerMove = true;
			elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
			debugTimerTransition = true;
			elBodyConsoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
			debugTimerDetail = true;
			elBodyConsoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
			errorUseDebugOnAll = true;
			elBodyConsoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
			errorUseDebugOnError = true;
			elBodyConsoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
			// errorUseDebugOnError = true;
			// elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
			debugLogEvents = true;
			elBodyConsoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
			//
			fnBodyConsoleShow(DoNotUseHide, DoUseDebug);
            //
			if (elBodyConsoleBox.style.display != 'block')  {
				fnBodyConsoleToggle('ConsoleAll');
			}
			//
			if (errorUseDebugOnAll || errorUseDebugOnError) { errorUseDebugOnError = true; } else { errorUseDebugOnError = false; }
			if (debugTimerMove || debugTimerTransition) { debugTimer = true; } else { debugTimer = false; }
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
			debugTimerMove = false;
			elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
			debugTimerTransition = false;
			elBodyConsoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
			debugTimerDetail = false;
			elBodyConsoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
			errorUseDebugOnAll = false;
			elBodyConsoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
			errorUseDebugOnError = false;
			elBodyConsoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
			// errorUseDebugOnError = false;
			// elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
			debugLogEvents = false;
			elBodyConsoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
			//
			fnBodyConsoleShow(DoUseHide, DoUseDebug);
            // elBodyConsoleDebugToggles.style.display = 'none';
            elBodyConsoleDebugToggle.style.borderColor = ButtonIsOffColor;
			fnBodyConsoleDebugButtons = false;
        }
        break;
		//
    case 'ConsoleDebugMove':
        if (debugTimerMove) {
            debugTimerMove = false;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug Move is OFF',
                    'fnBodyConsoleToggle', 8307, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
        } else {
            debugTimerMove = true;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug Move is ON',
                    'fnBodyConsoleToggle', 8314, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
			checkLogMode = true;
        }
		//
        if (debugTimerMove || debugTimerTransition) { debugTimer = true; } else { debugTimer = false; }
		//
        checkNoVisibleConsole = true;
        checkBoxSize = true;
        break;
		//
    case 'ConsoleDebugTransition':
        if (debugTimerTransition) {
            debugTimerTransition = false;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug Transition is OFF',
                    'fnBodyConsoleToggle', 8331, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
        } else {
            debugTimerTransition = true;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug Transition is ON',
                    'fnBodyConsoleToggle', 8338, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
			checkLogMode = true;
        }
		//
        if (debugTimerMove || debugTimerTransition) { debugTimer = true; } else { debugTimer = false; }
		//
        checkNoVisibleConsole = true;
        checkBoxSize = true;
        break;
		//
    case 'ConsoleDebugDetail':
        if (debugTimerDetail) {
            debugTimerDetail = false;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug Detail is OFF',
                    'fnBodyConsoleToggle', 8355, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
        } else {
            debugTimerDetail = true;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug Detail is ON',
                    'fnBodyConsoleToggle', 8362, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
			checkLogMode = true;
        }
		//
        checkNoVisibleConsole = true;
        checkBoxSize = true;
        break;
		//
    case 'ConsoleDebugOnError':
        if (errorUseDebugOnError) {
            errorUseDebugOnError = false;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug On Error in debugger is OFF',
                    'fnBodyConsoleToggle', 8377, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
        } else {
			errorUseDebugOnError = true;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug On Error in debugger is ON',
                    'fnBodyConsoleToggle', 8384, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
			checkLogMode = true;
        }
		checkLogModeSeeEvents = false;
        checkNoVisibleConsole = true;
        checkBoxSize = true;
        break;
		//
    case 'ConsoleDebugAll':
        if (errorUseDebugOnAll) {
            errorUseDebugOnAll = false;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug All messages in debugger is OFF',
                    'fnBodyConsoleToggle', 8399, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
        } else {
            errorUseDebugOnAll = true;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug All messages in debugger is ON',
                    'fnBodyConsoleToggle', 8406, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
			if (!errorUseDebugOnError) { fnBodyConsoleToggle('ConsoleDebugOnError'); }
            elBodyConsoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
			checkLogMode = true;
        }
		//
		checkLogModeSeeEvents = false;
        checkNoVisibleConsole = true;
        checkBoxSize = true;
        break;
		//
    case 'ConsoleDebugEvents':
        if (debugLogEvents) {
            debugLogEvents = false;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug (Mouse) Events is OFF',
                    'fnBodyConsoleToggle', 8423, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
        } else {
            debugLogEvents = true;
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					'Debug (Mouse) Events is ON',
                    'fnBodyConsoleToggle', 8430, null, null,
                    errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
            elBodyConsoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
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
			if (elBodyConsoleErrorBox.style.display != 'block') { fnBodyConsoleToggle('ConsoleError'); }
		} else {
			// if (elBodyConsoleErrorBox.style.display = 'block') { fnBodyConsoleToggle('ConsoleError'); }
		}
		if (checkLogModeSeeEvents) {
			if (elBodyConsoleEventBox.style.display != 'block') { fnBodyConsoleToggle('ConsoleEvent'); }
		} else {
			// if (elBodyConsoleEventBox.style.display = 'block') { fnBodyConsoleToggle('ConsoleEvent'); }
		}
        if (elBodyConsoleStateBox.style.display = 'block') { fnBodyConsoleToggle('ConsoleState'); }
	}
    //
    // Check if any Console Box settings are on or content is visible
    if (checkNoVisibleConsole) {
        if (elBodyConsoleErrorBox.style.display != 'block'
			&& elBodyConsoleEventBox.style.display != 'block'
			&& elBodyConsoleStateBox.style.display != 'block'
		) {
			elBodyConsoleBox.style.display = 'none';
			fnBodyConsoleShow(DoHide = true, DoDebug = false);
			checkBoxSize = false;
        } else {
			fnBodyConsoleShow(DoHide = false, DoDebug = false);
		}
        //
    }
    // Check if any Debugs settings are on or content is visible
    if (checkNoVisibleDebug) {
        if (elBodyConsoleDebugToggles.style.display != 'block'
			&& !debugTimerMove
			&& !debugTimerTransition
			&& !debugTimerDetail
			&& !errorUseDebugOnError
			&& !errorUseDebugOnAll
			&& !debugLogEvents
		) {
			// 			&& !errorUseDebugOnError
			fnBodyConsoleShow(DoHide = true, DoDebug = true);
			checkBoxSize = false;
        } else {
			fnBodyConsoleShow(DoHide = false, DoDebug = true);
		}
    }
    //
    switch(ConsoleBlockPassed) {
    case 'ConsoleAll':
        checkBoxSize = true;
        // Toggle Test 1 - Buttons Visible
        if (fnBodyConsoleBoxButtons) {
            if (elBodyConsoleBox.style.display != 'block') {
				//
				if (debugStateLoadFirst) { fnDebugParameterInit(); }
				//
				// elBodyConsoleTop.style.display = 'block';
				//
                elBodyConsoleBox.style.display = 'block';
                //
				fnBodyConsoleShow(DoNotUseHide, DoNotUseDebug);
                //
                if (elBodyConsoleErrorBox.style.display != 'block'
                 && elBodyConsoleEventBox.style.display != 'block'
                 && elBodyConsoleStateBox.style.display != 'block') {
                        elBodyConsoleErrorBox.style.display = 'block';
                        elBodyConsoleEventBox.style.display = 'block';
                        elBodyConsoleStateBox.style.display = 'block';
                        elBodyConsoleStateTextBox.style.display = 'block';
                        elBodyConsoleStateTextBox.style.display = 'block';
                        elBodyConsoleTestBox.style.display = 'block';
                        elBodyConsoleTestTextBox.style.display = 'block';
                        elBodyConsoleTestToggle.style.display = 'block';
                        elBodyConsoleClearToggle.style.display = 'block';
                }
            //
			if (elBodyConsoleErrorBox.style.display = 'block')  {
				elBodyConsoleErrorToggle.style.borderColor = ButtonIsOnColor;
			} else { elBodyConsoleErrorToggle.style.borderColor = ButtonIsOffColor; }
			//
			if (elBodyConsoleEventBox.style.display = 'block') {
				elBodyConsoleEventToggle.style.borderColor = ButtonIsOnColor;
			} else { elBodyConsoleEventToggle.style.borderColor = ButtonIsOffColor; }
			//
			if (elBodyConsoleStateBox.style.display = 'block') {
				elBodyConsoleStateToggle.style.borderColor = ButtonIsOnColor;
			} else { elBodyConsoleStateToggle.style.borderColor = ButtonIsOffColor; }
			//
            // Toggle Test 2 - Display Not Window Visible
            } else if (elBodyConsoleBox.style.display = 'block') {
                // elBodyConsoleTop.style.display = 'none';
				//
                elBodyConsoleBox.style.display = 'none';
                //
				fnBodyConsoleShow(DoUseHide, DoNotUseDebug);
                //
            }
        //
        // Toggle Test 2 - Display Window Visible
        } else {
			//
            elBodyConsoleBox.style.display = 'block';
			//
			fnBodyConsoleShow(DoNotUseHide, DoNotUseDebug);
        }
    default:
        break;
    }
    //
    if (elBodyConsoleStateBox.style.display = 'block') {
        // State visible
        if (elBodyConsoleErrorBox.style.display != 'block') {
            // State visible, no Error visible
            if (elBodyConsoleEventBox.style.display != 'block') {
                // State visible, no Error & Event visible
                elBodyConsoleStateBox.style.left = '2%';
                elBodyConsoleStateBox.style.width = '97%';
            } else {
                // State & Event, no Error visible
                elBodyConsoleEventBox.style.left = '2%';
                elBodyConsoleEventBox.style.width = '31%';
                //
                elBodyConsoleStateBox.style.left = '35%';
                elBodyConsoleStateBox.style.width = '64%';
            }
        } else {
            // State & Error visible
            if (elBodyConsoleEventBox.style.display != 'block') {
                // State & Error visible, no Event visible
                elBodyConsoleErrorBox.style.left = '2%';
                elBodyConsoleErrorBox.style.width = '64%';
                //
                elBodyConsoleStateBox.style.left = '68%';
                elBodyConsoleStateBox.style.width = '31%';
                //
            } else {
                // State, Error & Event visible
                elBodyConsoleErrorBox.style.left = '2%';
                elBodyConsoleErrorBox.style.width = '31%';
                //
                elBodyConsoleEventBox.style.left = '35%';
                elBodyConsoleEventBox.style.width = '31%';
                //
                elBodyConsoleStateBox.style.left = '68%';
                elBodyConsoleStateBox.style.width = '31%';
            }
        }
    } else {
        // State not visible
        if (elBodyConsoleErrorBox.style.display != 'block') {
            // no State & Error visible
            if (elBodyConsoleEventBox.style.display != 'block') {
                // nothing visible, no State, Error & Event visible
            } else {
                // Event visible, no State & Error visible
                elBodyConsoleEventBox.style.left = '2%';
                elBodyConsoleEventBox.style.width = '97%';
            }
        } else {
            // Error visible, no State visible
            if (elBodyConsoleEventBox.style.display != 'block') {
                // Error visible, no State & Event visible
                elBodyConsoleErrorBox.style.left = '2%';
                elBodyConsoleErrorBox.style.width = '97%';
            } else {
                // Error & Event visible, no State visible
                elBodyConsoleErrorBox.style.left = '2%';
                elBodyConsoleErrorBox.style.width = '46%';
                //
                elBodyConsoleEventBox.style.left = '52%';
                elBodyConsoleEventBox.style.width = '46%';
                //
            }
        }
    }
}
//
// ..................................................................................... _//
// ...................................... //
// Body ViewToggle - Console
function fnBodyConsoleShow(DoHide, DoDebug)
{
        //............................................................---//
        // Body Element Creation
	  	if (javaLoadFirst) { fnElementObjectCreate(); }
        //............................................................---//
	//
	if (DoDebug) {
		// Process Console Box Action
		if (DoHide) {
			fnBodyConsoleDebugButtons = false;
			// BodyConsoleDebugToggles.style.display = 'none';
			elBodyConsoleDebugMainToggles.style.display = 'none';
			elBodyConsoleDebugTypesToggles.style.display = 'none';
		} else {
			fnBodyConsoleDebugButtons = true;
			// BodyConsoleDebugToggles.style.display = 'block';
			elBodyConsoleDebugMainToggles.style.display = 'block';
			elBodyConsoleDebugTypesToggles.style.display = 'block';
		}
        if (elBodyConsoleDebugToggles.style.display != 'block'
			&& !debugTimerMove
			&& !debugTimerTransition
			&& !debugTimerDetail
			&& !errorUseDebugOnError
			&& !errorUseDebugOnAll
			&& !debugLogEvents
		) {
			// 			&& !errorUseDebugOnError
			elBodyConsoleDebugToggle.style.borderColor = ButtonIsOffColor;
        } else {
			elBodyConsoleDebugToggle.style.borderColor = ButtonIsOnColor;
		}
	} else {
		//
		// Process Console Box Action
		if (DoHide) {
            fnBodyConsoleBoxButtons = false;
			elBodyConsoleLogToggles.style.display = 'none';
			elBodyConsoleAuxillaryToggles.style.display = 'none';
		} else {
            fnBodyConsoleBoxButtons = true;
			elBodyConsoleLogToggles.style.display = 'block';
			elBodyConsoleAuxillaryToggles.style.display = 'block';
		}
        if (elBodyConsoleBox.style.display != 'block'
		) {
			/*
			&& elBodyConsoleErrorBox.style.display != 'block'
			&& elBodyConsoleEventBox.style.display != 'block'
			&& elBodyConsoleStateBox.style.display != 'block'
        */
        elBodyConsoleToggle.style.borderColor = ButtonIsOffColor;
        } else {
        elBodyConsoleToggle.style.borderColor = ButtonIsOnColor;
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
function fnLayoutFontSize(zoomCommandPassed)
{
        switch(zoomCommandPassed) {
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
        // ..................................................................................... _//
        // ...................................... //
        // Check Layout
function fnLayoutCheck(layoutPrefered)
{
        return;
        }
        //
        // ..................................................................................... _//
        // ...................................... //
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
        // ..................................................................................... _//
        // Body Layout Selection
        // ...................................... //
function fnLayoutSelectByIndex(layoutIndexPassed) {
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
        fnWindowClientWidth();
        // layoutMenuHeightHorzMax = 0;
        if (browserIsFF) {
        // debug-instance-off fnLayoutSelectByIndex;
        }
        //
        var elementLayoutFirstDummy;
        var boxHeight;
        //
        // layoutWidth -= 20;
        // layoutHeight -= 20;
        //
        //............................................................---//
        // Load Element for first pass
        //............................................................---//
        if (elBodyFirst) {
        //............................................................---//
        //      Body Element Creation
        if (javaLoadFirst) { fnElementObjectCreate(); }
        //............................................................---//
        //      Body Main Container (contains Left Center and Right
        if (!elBodyMainContainer) { elBodyMainContainer = document.getElementById('BodyMainContainer'); }
        // Body Container
        //............................................................---//
        //			    Menu at Left
        // elBodyMainLeftOrig.innerHTML = elBodyMainLeft.innerHTML;
        elBodyMainLeftOrig = fnElementCopy(elBodyMainLeftOrig, elBodyMainLeftOrigFirst, elBodyMainLeft, 'none');
        elBodyMainLeftOrigFirst = false;
        //............................................................---//
        //			    Menu at Right
        // elBodyMainLeftOrig.innerHTML = elBodyMainRight.innerHTML;
        elBodyMainRightOrig = fnElementCopy(elBodyMainRightOrig, elBodyMainRightOrigFirst, elBodyMainRight, 'none');
        elBodyMainRightOrigFirst = false;
        //............................................................---//
        // 	 		 Banner at Center Bottom
        elBodyBanner = fnElementGetRefFromElement(elBodyBanner, 'BodyBanner', 'BodyBanner', elBodyMainCenterTop);
        elBodyBannerTop = fnElementGetRefFromElement(elBodyBannerTop, 'BodyBannerTop', 'BodyBannerTop', elBodyMainCenterTop);
        elBodyBannerBottom = fnElementGetRefFromElement(elBodyBannerBottom, 'BodyBannerBottom', 'BodyBannerBottom', elBodyMainCenterBottom);
        elBodyBannerBottom = fnElementCopy(elBodyBannerBottom, elBodyBannerBottomFirst, elBodyBanner, 'block');
        elBodyBannerBottomFirst = false;
        //
        //............................................................---//
        //  BodyMain Center Center ColBreak
        elBodyMainCenterTopLeft = fnElementBreakSet(elBodyMainCenterCenter, 'BodyMainCenterCenterColBreak', elementLayoutFirstDummy = true, 'block', 'visible', 'both')
        //
        }
        //
        //
        //............................................................---//
        //............................................................---//
        switch(layoutIndexPassed) {
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
        elBodyMainCenterTop.className = BodyMainCenterTopClass;
        }
        //............................................................---//
        // Final adjustments to Center Top
        boxHeight = 0;
        //............................................................---//
        // elBodyViewToggle View Toggle and Message Area
        //
        // Box
        boxHeight += elBodyViewToggleContainer.scrollHeight;
        // Banner Should be zero, don't use..,
        elBodyBannerTop.style.display = 'block';
        boxHeight += elBodyBannerTop.scrollHeight;
        //
        elTitleTopLeft = fnElementGetRefFromElement(elTitleTopLeft, 'TitleTopLeft', 'TitleTopLeft', elBodyMainCenterTop);
        boxHeight += elTitleTopLeft.scrollHeight;
        //
        elBodyMainCenterTopColBreak = fnElementGetRefFromElement(elBodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak', elBodyMainCenterTop);
        boxHeight += elBodyMainCenterTopColBreak.scrollHeight;
        //
        // BodyViewToggle + Banner + Left/Right
        // elBodyMainCenterTop.style.height = boxHeight;
        elBodyMainCenterTop.style.height = 'auto';
        //............................................................---//
        //			 Menu1 at Left
        elBodyMainLeft.style.width = '20%';
        // elBodyMainLeft.style.height = 'auto';
        //............................................................---//
        //			 Body Center 'BodyMainCenter'
        if (layoutUseAbsolute) { elBodyMainCenter.style.left = '20%'; } // 0.20 * layoutWidth + 3;
        elBodyMainCenter.style.width = '60%';//0.60 * layoutWidth - 6;
        // elBodyMainCenter.style.height = '100%';
        // elBodyMainCenter.style.height = '100%';
        //
        layoutZindex += 1;
        elBodyMainCenter.style.zIndex = layoutZindex;
        //
        elBodyMainCenterCenter.style.top = 0;
        //............................................................---//
        //			 Menu2 at Right
        if (layoutUseAbsolute) { elBodyMainRight.style.left = '80%'; }
        elBodyMainRight.style.width = '20%';
        // elBodyMainRight.style.height = 'auto';
        //............................................................---//
        // 	 		 Banner at Top 'BodyBanner'
        //............................................................---//
        // 	 		 Final adjustments
        // this code should also adjust oversided views
        /* --
        elBodyMainContainer.style.height = layoutHeight;
        if (elBodyMainContainer.style.height < fnElementHeightMaxGet(true, true, elBodyMainLeft)) {
      	 elBodyMainContainer.style.height = fnElementHeightMaxGet(true, true, elBodyMainLeft);
      }
      if (elBodyMainContainer.style.height < fnElementHeightMaxGet(true, true, elBodyMainCenter)) {
      	 elBodyMainContainer.style.height = fnElementHeightMaxGet(true, true, elBodyMainCenter);
      }
      if (elBodyMainContainer.style.height < fnElementHeightMaxGet(true, true, elBodyMainRight)) {
      	 elBodyMainContainer.style.height = fnElementHeightMaxGet(true, true, elBodyMainRight);
      }
	  -- */
	  // elBodyMainContainer.style.height = 'auto';
      //............................................................---//
      // Area Displays
      elBodyBanner.style.display = 'block';
      elBodyBannerBottom.style.display = 'none';
      elBodyBannerTop.style.display = 'block';
    // elBodyViewToggle View Toggle and Message Area
	// elBodyViewToggleContainer.style.display = 'none';
	elBodyViewToggleContainerLeft.style.display = 'block';
	elBodyViewToggleContainerCenter.style.display = 'none';
	//
	// Console
	//
      elBodyMainLeft.style.display = 'block';
      elBodyMainCenter.style.display = 'block';
      elBodyMainRight.style.display = 'block';
      // elBodyMainRightFar.style.display = 'none';
      elBodyMainCenterTop.style.display = 'block';
      elBodyMainCenterTopLeft.style.display = 'none';
      elBodyMainCenterTopRight.style.display = 'none';
	  elBodyMainCenterCenter.style.display = 'block';
	  elBodyMainCenterBottom.style.display = 'none';
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
      // if (layoutUseAbsolute) { elBodyMainCenter.style.left = '0%'; }
      // elBodyMainCenter.style.top = '0%';
      // elBodyMainCenter.style.width = '100%';
      // elBodyMainCenter.style.height = '100%';
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
      if (!layoutReadingModeFirst)  {
         elBodyBannerBottom = fnElementCopy(elBodyBannerBottom, elBodyBannerBottomFirst, elBodyBanner, 'block');
		 elBodyBannerBottomFirst = false;
      }
	  //
      elBodyBanner.style.display = 'block';
      elBodyBannerBottom.style.display = 'block';
      elBodyBannerTop.style.display = 'none';
      //
      //............................................................---//
      // elBodyViewToggle View Toggle and Message Area
      // elBodyViewToggleContainer.style.display = 'none';
      elBodyViewToggleContainerLeft.style.display = 'none';
      elBodyViewToggleContainerCenter.style.display = 'block';
      //
      // Console
      //
      // Left, Center, and Right
      elBodyMainLeft.style.display = 'none';
      elBodyMainCenter.style.display = 'block';
      elBodyMainRight.style.display = 'none';
      // elBodyMainRightFar.style.display = 'none';
		//
		// Center Top
      elBodyMainCenterTop.style.display = 'block';
      elBodyMainCenterTopLeft.style.display = 'none';
      elBodyMainCenterTopRight.style.display = 'none';
      // Center Center
	  elBodyMainCenterCenter.style.display = 'block';
	  // Center Bottom
	  elBodyMainCenterBottom.style.display = 'block';
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
		// elBodyMenuLayout1 BodyMenuLayout
		if (false = true) {
			if (!elelBodyMenuLayout1 && elBodyMainCenterTopLeft) {
				elBodyMenuLayout1 = fnElementGetRefFromElement(elBodyMenuLayout1, 'BodyMenuLayout1', 'BodyMenuLayout1', elBodyMainCenterTopLeft);
			}
			//
			TopLeftWidth = elBodyMenuLayout1.style.posWidth;
			if (TopLeftWidth = 0) { TopLeftWidth = layoutWidth / 2; }
			TopLeftWidthInner = TopLeftWidth;
		}
		//
		// Process Left Column
		//
		// elBodyMainLeft.innerHTML = elBodyMainLeftOrig.innerHTML
		elBodyMainLeftCopy = fnElementCopy(elBodyMainLeft, elBodyMainLeftFirst, elBodyMainLeftOrig, 'block');
		elBodyMainLeftFirst = false;
		//
		// elBodyMainRight.innerHTML = elBodyMainLeftOrig.innerHTML
		elBodyMainRightCopy = fnElementCopy(elBodyMainRight, elBodyMainRightFirst, elBodyMainRightOrig, 'block');
		elBodyMainRightFirst = false;
		// end of layoutWindowFirst
	}
          //
          //............................................................---//
          // Left Menu Column
          // Center Top Left Area Columns
          //
          //............................................................---//
          // Enclose Box
          if (!BodyMainCenterTopClass.length) { BodyMainCenterTopClass = elBodyMainCenterTop.className; }
          elBodyMainCenterTop.className = elBodyMainCenterTop.className + ' CalloutBoxBg CalloutBorderFull';
          elBodyMainCenterTop.width = '100%';
          //
          // if (true = true) {
          if (layoutWindowedFirst) {
			  //............................................................---//
			  // Set Center Top Left Element
			  // MainCenterTopLeft is a Reference pointer into the page
			  // that has MainLeft HTML copied into it.
			  elBodyMainCenterTopLeft = fnElementGetRef(elBodyMainCenterTopLeft,'BodyMainCenterTopLeft','BodyMainCenterTopLeft');
			  elBodyMainCenterTopLeft = fnElementCopy(elBodyMainCenterTopLeft, elBodyMainCenterTopLeftFirst, elBodyMainLeftOrig, 'block');
			  elBodyMainCenterTopLeftFirst = false;
			  //............................................................---//
			  // Enclose Box
			  elBodyMainCenterTopLeft.className = elBodyMainCenterTopLeft.className + ' CalloutBorderFull';
			  //............................................................---//
			  // Left Menu Container
			  //............................................................---//
			  // Left Body Column (BodyMainLeft)
			  //............................................................---//
			  // elBodyMenuLayout1 BodyMenuLayout
			  elBodyMenuLayout1 = fnElementGetRefFromElement(elBodyMenuLayout1, 'BodyMenuLayout1', 'BodyMenuLayout1', elBodyMainCenterTopLeft);
			  //............................................................---//
			  // Width of Layout area (previous?)
			  //............................................................---//
			  // Left Outer and Inner Decorative Divs
			  elBodyMainLeftOuter = fnElementGetRefFromElement(elBodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', elBodyMainCenterTopLeft);
			  elBodyMainLeftOuter.style.paddingLeft = '3%';
			  elBodyMainLeftOuter.style.width = '97%';
			  //
			  elBodyMainLeftInner = fnElementGetRefFromElement(elBodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', elBodyMainCenterTopLeft);
			  elBodyMainLeftInner.style.paddingRight = '3%';
			  elBodyMainLeftInner.style.width = '97%';
			  elBodyMainLeftInner.style.paddingTop = '1.0em';
			  //............................................................---//
			  //
			  // fnElementGetFromElement(elMenuLeft1, 'MenuLeft1', 'MenuLeft1',
			  // 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuLeft1)
			  // fnElementGetFromElement(elMenuLeft2, 'MenuLeft2', 'MenuLeft2',
			  // 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuLeft2)
			  // fnElementGetFromElement(elMenuLeft3, 'MenuLeft3', 'MenuLeft3',
			  // 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuLeft3)
			  //
			  //............................................................---//
			  // Left elMenuLeft1, 2, 3
			  elMenuLeft1 = fnElementGetRefFromElement(elMenuLeft1, 'MenuLeft1', 'MenuLeft1', elBodyMainCenterTopLeft);
			  elMenuLeft2 = fnElementGetRefFromElement(elMenuLeft2, 'MenuLeft2', 'MenuLeft2', elBodyMainCenterTopLeft);
			  elMenuLeft3 = fnElementGetRefFromElement(elMenuLeft3, 'MenuLeft3', 'MenuLeft3', elBodyMainCenterTopLeft);
			  //
			  fnWindowContainerHeightGetMenu(elBodyMainCenterTopLeft);
			  //
			  //............................................................---//
			  // elMenuLeft1
			  elMenuLeft1.style.position = 'absolute';
			  elMenuLeft1.style.top = ' 0em';
			  elMenuLeft1.style.left = '3%';
			  elMenuLeft1.style.maxWidth = '30%';
			  // elMenuLeft1.style.styleFloat = 'left';
			  //
			  //............................................................---//
			  // elMenuLeft2
			  elMenuLeft2.style.position = 'absolute';
			  elMenuLeft2.style.top = '1.0em';
			  elMenuLeft2.style.left = '35%';
			  elMenuLeft2.style.maxWidth = '30%';
			  // elMenuLeft2.style.marginLeft = '3%';
			  // elMenuLeft2.style.styleFloat = 'left';
			  //............................................................---//
			  // elMenuLeft3
			  elMenuLeft3.style.position = 'absolute';
			  elMenuLeft3.style.top = '1.0em';
			  elMenuLeft3.style.left = '67%';
			  elMenuLeft3.style.maxWidth = '30%';
			  // elMenuLeft3.style.marginLeft = '3%';
			  // elMenuLeft3.style.styleFloat = 'left';
			//............................................................---//
			//
			// fnElementGetFromElement(elMenuLeft1, 'MenuLeft1', 'MenuLeft1',
			// 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuLeft1)
			// fnElementGetFromElement(elMenuLeft2, 'MenuLeft2', 'MenuLeft2',
			// 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuLeft2)
			// fnElementGetFromElement(elMenuLeft3, 'MenuLeft3', 'MenuLeft3',
			// 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuLeft3)
			//
			  //............................................................---//
			  // elDivC21 Callout Paragraph Contents
			  if (true = false) {
				  var elDivC21 = fnElementGetRefFromElement(elDivC21, 'DivC21', 'DivC21', elBodyMainCenterTopLeft);
				  if (elDivC21) { elDivC21.style.display = 'none'; }
			  }
			  //............................................................---//
			  // elDivC22 Callout Paragraph Contents
			  var elDivC22 = fnElementGetRefFromElement(elDivC22, 'DivC22', 'DivC22', elBodyMainCenterTopLeft);
			  if (elDivC22) { elDivC22.style.display = 'none'; }
			  //............................................................---//
			  // Left Body Text Alignment Breaks
			  elBodyMainCenterTopLeft = fnElementBreakSet(elBodyMainCenterTopLeft, 'MenuLeft1ColBreak', elementLayoutFirstDummy = true, 'none', 'hidden', 'none')
			  elBodyMainCenterTopLeft = fnElementBreakSet(elBodyMainCenterTopLeft, 'MenuLeft2ColBreak', elementLayoutFirstDummy = true, 'none', 'hidden', 'none')
			  elBodyMainCenterTopLeft = fnElementBreakSet(elBodyMainCenterTopLeft, 'MenuLeft3ColBreak', elementLayoutFirstDummy = true, 'none', 'hidden', 'none')
			  // end of layoutWindowFirst
		}
//
//............................................................---//
//			 Menu2 at Center Top Right
      // Right Menu Column
      // Center Top Right Area Columns
	  // if (true = true) {
	  if (layoutWindowedFirst) {
          // Right Body Text Alignment Breaks
          // Set (Copy To) Top Left Element
          elBodyMainCenterTopRight = fnElementGetRef(elBodyMainCenterTopRight,'BodyMainCenterTopRight','BodyMainCenterTopRight');
          elBodyMainCenterTopRight = fnElementCopy(elBodyMainCenterTopRight, elBodyMainCenterTopRightFirst, elBodyMainRightOrig, 'block');
          //............................................................---//
          // Enclose Box
          elBodyMainCenterTopRight.className = elBodyMainCenterTopRight.className + ' CalloutBorderFull';
          //............................................................---//
          // elBodyMenuLayout2 BodyMenuLayout
          elBodyMenuLayout2 = fnElementGetRefFromElement(elBodyMenuLayout1, 'BodyMenuLayout2', 'BodyMenuLayout2', elBodyMainCenterTopRight);
          //............................................................---//
		  // Right Outer and Inner Decorative Divs
          elBodyMainRightOuter = fnElementGetRefFromElement(elBodyMainLeftOuter, 'BodyMainRightOuter', 'BodyMainRightOuter', elBodyMainCenterTopRight);
          elBodyMainLeftOuter.style.paddingLeft = '3%';
          elBodyMainLeftOuter.style.width = '97%';
          //
          elBodyMainRightInner = fnElementGetRefFromElement(elBodyMainRightInner, 'BodyMainRightInner', 'BodyMainRightInner', elBodyMainCenterTopRight);
          elBodyMainRightInner.style.paddingRight = '3%';
          elBodyMainRightInner.style.width = '97%';
          elBodyMainRightInner.style.paddingTop = '1.0em';
          //............................................................---//
		  var elementHeight = 0;
		  layoutMenuHeightHorzMax = 0;
          // Right elMenuRight1, 2, 3
          elMenuRight1 = fnElementGetRefFromElement(elMenuRight1, 'MenuRight1', 'MenuRight1', elBodyMainCenterTopRight);
          elMenuRight2 = fnElementGetRefFromElement(elMenuRight2, 'MenuRight2', 'MenuRight2', elBodyMainCenterTopRight);
          elMenuRight3 = fnElementGetRefFromElement(elMenuRight3, 'MenuRight3', 'MenuRight3', elBodyMainCenterTopRight);
          //............................................................---//
		      // elMenuRight1
		  elMenuRight1.style.position = 'absolute';
          elMenuRight1.style.top = '1.0em';
          elMenuRight1.style.left = '3%';
          elMenuRight1.style.maxWidth = '30%';
          // elMenuRight1.style.styleFloat = 'left';
		  elementHeight = fnElementHeightMaxGet(true, true, elMenuRight1);
          if (layoutMenuHeightHorzMax < elementHeight) { layoutMenuHeightHorzMax = elementHeight; }
          //............................................................---//
		      // elMenuRight2
		  elMenuRight2.style.position = 'absolute';
          elMenuRight2.style.top = '1.0em';
          elMenuRight2.style.left = '35%';
          elMenuRight2.style.maxWidth = '30%';
          // elMenuRight2.style.marginLeft = '3%';
          // elMenuRight2.style.styleFloat = 'left';
		  elementHeight = fnElementHeightMaxGet(true, true, elMenuRight2);
          if (layoutMenuHeightHorzMax < elementHeight) { layoutMenuHeightHorzMax = elementHeight; }
          //............................................................---//
		      // elMenuLeft3
		  elMenuRight3.style.position = 'absolute';
          elMenuRight3.style.top = '1.0em';
          elMenuRight3.style.left = '67%';
          elMenuRight3.style.maxWidth = '30%';
          // elMenuRight3.style.marginLeft = '3%';
          // elMenuRight3.style.styleFloat = 'left';
		  elementHeight = fnElementHeightMaxGet(true, true, elMenuRight3);
          if (layoutMenuHeightHorzMax < elementHeight) { layoutMenuHeightHorzMax = elementHeight; }
          //............................................................---//
          // Column and Float Breaks and Clear
          elBodyMainCenterTopRight = fnElementBreakSet(elBodyMainCenterTopRight, 'MenuRight1ColBreak', elementLayoutFirstDummy = true, 'none', 'hidden', 'none')
          elBodyMainCenterTopRight = fnElementBreakSet(elBodyMainCenterTopRight, 'MenuRight2ColBreak', elementLayoutFirstDummy = true, 'none', 'hidden', 'none')
          elBodyMainCenterTopRight = fnElementBreakSet(elBodyMainCenterTopRight, 'MenuRight3ColBreak', elementLayoutFirstDummy = true, 'none', 'hidden', 'none')
			  // end of layoutWindowFirst
	  }
    //............................................................---//
    // Final adjustments to Center Top
    // BodyViewToggle + Banner + Left/Right
    boxHeight = 0;
	//
    // elBodyViewToggle View Toggle and Message Area
	elBodyViewToggleContainerCenter.style.display = 'none';
	//
    boxHeight += fnElementHeightMaxGet(true, true, elBodyViewToggleContainer);
    // Banner Should be zero, don't use..,
    boxHeight += fnElementHeightMaxGet(true, true, elBodyBannerTop);
    //
    // Height of left and right menu containers
	// fnWindowContainerHeightGetAll();
    //
    // if (elBodyMenuLayout2Height > elBodyMenuLayout1Height)  {
        // elBodyMenuLayout1.style.height = elBodyMenuLayout2Height + 'px';
    // } else {
        // elBodyMenuLayout2.style.height = elBodyMenuLayout1Height + 'px';
    // }
    // Set Left and Right Container Heights
    // elBodyMainCenterTopLeft.style.height = (fnElementHeightMaxGet(true, true, elBodyMenuLayout1) + 20) + 'px';
    // elBodyMainCenterTopRight.style.height = (fnElementHeightMaxGet(true, true, elBodyMenuLayout2) + 20) + 'px';
    //
    if (layoutMenuHeightHorzMax < 50) {
		// ERROR HERE //
		//
		var X;var Y;
		X = fnElementHeightMaxGet(true, true, elMenuLeft1);
		X += boxHeight;
		Y = fnElementHeightMaxGet(true, true, elMenuRight1);
		if ( X > Y ) { layoutMenuHeightHorzMax = X; } else { layoutMenuHeightHorzMax = Y; }
		//
		X = fnElementHeightMaxGet(true, true, elBodyMainCenterTopLeft);
		Y = fnElementHeightMaxGet(true, true, elBodyMainCenterTopRight);
		if ( X > Y ) { boxHeight = X; } else { boxHeight = Y; }
		// boxHeight += fnElementHeightMaxGet(true, true, BodyViewToggleContainerCenter);
		// boxHeight += fnElementHeightMaxGet(true, true, elBodyMainCenterTopColBreak);
    }
    // Set Left and Right Container Heights
    elBodyMainCenterTopLeft.style.height = (layoutMenuHeightHorzMax + 50 ) + 'px';
    // elBodyMainCenterTopLeft.style.height = '100%';
    // elBodyMainCenterTopLeft.style.height = 'auto';
    elBodyMainCenterTopRight.style.height = (layoutMenuHeightHorzMax + 50) + 'px';
    // elBodyMainCenterTopRight.style.height = '100%';
    //
    elBodyMainCenterTopColBreak = fnElementGetRefFromElement(elBodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak', elBodyMainCenterTop);
    //
    elBodyMainCenterTop.style.height = (layoutMenuHeightHorzMax + 75) + 'px';// boxHeight
	// elBodyMainCenterTop.style.height = '100%';
    //
	//............................................................---//
    elBodyMainCenterCenter.style.top = (layoutMenuHeightHorzMax + 100) + 'px';// adjust by boxHeight
    //
//
//............................................................---//
//			 Body Center Columns
	  if (layoutWindowedFirst) {
		  // BodyMainCenter
          elBodyMainCenter.style.width = '100%';
		  // Center Center
	  }
//
//............................................................---//
// 	 		 Final adjustments
      //............................................................---//
      // Area Displays
      elBodyBanner.style.display = 'block';
      elBodyBannerBottom.style.display = 'block';
      elBodyBannerTop.style.display = 'none';
      elBodyMainLeft.style.display = 'none';// none
      elBodyMainCenter.style.display = 'block';
      elBodyMainRight.style.display = 'none';// none
      // elBodyMainRightFar.style.display = 'none';
      elBodyMainCenterTop.style.display = 'block';
      elBodyMainCenterTopLeft.style.display = 'block';
      elBodyMainCenterTopRight.style.display = 'block';
	   elBodyMainCenterCenter.style.display = 'block';
	  elBodyMainCenterBottom.style.display = 'block';
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
      elBodyMainCenter.style.top = '0%';
      if (layoutUseAbsolute) { elBodyMainCenter.style.left = 3; }
      elBodyMainCenter.style.posWidth = layoutWidth - 6;
      elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth;
      // elBodyMainCenter.style.height = 'auto';
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
    // elBodyViewToggle View Toggle and Message Area
	elBodyViewToggleContainerCenter.style.display = 'block';
	//
      //............................................................---//
      // Area Displays
      elBodyBanner.style.display = 'block';
      elBodyBannerBottom.style.display = 'none';
      elBodyBannerTop.style.display = 'none';
      elBodyMainLeft.style.display = 'none';
      elBodyMainCenter.style.display = 'block';
      elBodyMainRight.style.display = 'none';
      // elBodyMainRightFar.style.display = 'none';
      elBodyMainCenterTop.style.display = 'block';
      elBodyMainCenterTopLeft.style.display = 'none';
      elBodyMainCenterTopRight.style.display = 'none';
	  elBodyMainCenterCenter.style.display = 'block';
	  elBodyMainCenterBottom.style.display = 'none';
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
	  elBodyMainCenterTopColBreak.style.display = 'none';
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
	  elMenuLeft1ColBreak = fnElementGetRef(elMenuLeft1ColBreak, 'MenuLeft1ColBreak', 'MenuLeft1ColBreak');
      elMenuLeft1ColBreak.style.display = 'none';
	  elMenuLeft2ColBreak = fnElementGetRef(elMenuLeft2ColBreak, 'MenuLeft2ColBreak', 'MenuLeft2ColBreak');
      elMenuLeft2ColBreak.style.display = 'none';
	  elMenuLeft3ColBreak = fnElementGetRef(elMenuLeft3ColBreak, 'MenuLeft3ColBreak', 'MenuLeft3ColBreak');
      elMenuLeft3ColBreak.style.display = 'none';
//
//............................................................---//
//			 	 Menu2 at Top Right
// xx
      //............................................................---//
      // Right Body Text Alignment Breaks
	  elMenuRight1ColBreak = fnElementGetRef(elMenuRight1ColBreak, 'MenuRight1ColBreak', 'MenuRight1ColBreak');
      elMenuRight1ColBreak.style.display = 'none';
	  elMenuRight2ColBreak = fnElementGetRef(elMenuRight2ColBreak, 'MenuRight2ColBreak', 'MenuRight2ColBreak');
      elMenuRight2ColBreak.style.display = 'none';
	  elMenuRight3ColBreak = fnElementGetRef(elMenuRight3ColBreak, 'MenuRight3ColBreak', 'MenuRight3ColBreak');
      elMenuRight3ColBreak.style.display = 'none';
      //
      elBodyMainCenterTopRight = fnElementCopy(elBodyMainCenterTopRight, elBodyMainCenterTopRightFirst, elBodyMainRight, 'none');
	  elBodyMainCenterTopRightFirst = false;
//
//............................................................---//
// 	 		 	 Banner at Bottom
	   elBodyBanner = document.getElementById('BodyBanner');
      //............................................................---//
      // Area Displays
      elBodyBanner.style.display = 'block';
      elBodyBannerBottom.style.display = 'none';
      elBodyBannerTop.style.display = 'none';
      elBodyMainLeft.style.display = 'none';
      elBodyMainCenter.style.display = 'block';
      elBodyMainRight.style.display = 'none';
      // elBodyMainRightFar.style.display = 'block';
      elBodyMainCenterTop.style.display = 'none';
      elBodyMainCenterTopLeft.style.display = 'none';
      elBodyMainCenterTopRight.style.display = 'none';
	  elBodyMainCenterCenter.style.display = 'block';
	  elBodyMainCenterBottom.style.display = 'none';
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
    fnWindowResize();
    //
    elBodyFirst = false;
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
function fnElementEventMouse(e)
{
	if (!imgLoadUseEventHandler && !imgLoadEventTest)  {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
            'You have conflicting event handling options...',
            'fnElementEventMouse', 9555, null, null,
            errorSevere, errorDoNotDisplayTag, errorDoAlert);
	}
	if (javaLoadFirst) { fnElementObjectCreate(); }
	if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
	//
	fnElementEventCurrSet(e);
	//
	fnElementEventCurrRootObjSet();
	//
	oObjIndex = fnElementItemIndexSetFromObj(eventCurrRootObj);
    // Objects
    fnElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	//
	if (debugLogEvents) {
		fnConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
			'Mouse Event', 'fnElementEventMouse', 7993); }
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
    	if (IsImageLarge)  {
    		HideImageLarge = true;
    		iImageSize = oObjImageSizeLarge;
    	} else  {
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
		switch(eventType) {
		// ...................................... //
    	case 'mousedown':
			//
			// ...................................... //
    		switch(IsImageLarge) {
			// ...................................... //
            case IsSmall:
    			// Small
        	   	startIndex = oObjIndex;
            	endIndex = oObjIndex;
            	//
    			// fnElementItemToggle(  true true true (IsImagelarge LockValue IgnoreLock)
    			NextIsImageLarge = IsLarge;oObjLocked = true;IgnoreLock = true;
            	//
        		fnElementItemToggle(
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
			if (fnTimerStartMoveBusy(oObj.id + 'Move', oObjGroupIndex, oObjIndex, debugLogEvents)) { return; }
    		if (fnElementEventCheckDuplicate(debugLogEvents)) { return; }
			// ...................................... //
    		switch(IsImageLarge) {
			// ...................................... //
            case IsSmall:
    			// Small
    			// fnElementItemHide
    			NextIsImageLarge = IsSmall;oObjLocked = false;IgnoreLock  = false;
    			fnElementItemHide(
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
    			// fnElementItemHide
    			NextIsImageLarge = IsLarge;oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge];IgnoreLock  = false;
    			fnElementItemHide(
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
			if (fnTimerStartMoveBusy(oObj.id + 'Move', oObjGroupIndex, oObjIndex, debugLogEvents)) { return; }
    		if (fnElementEventCheckDuplicate(debugLogEvents)) { return; }
			// ...................................... //
			if (eventMouseOverEnabled) { return; }
    		switch(IsImageLarge) {
			// ...................................... //
            case IsSmall:
    			// Small
        	   	startIndex = 1;
            	endIndex = oObjIndex;
            	//
    			// fnElementGroupShowStack(';false false true
    			NextIsImageLarge = IsSmall;oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge];IgnoreLock = true;
            	//
				fnElementGroupShowStack(
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
    			// fnElementItemShow(';Small false Curr false
    			NextIsImageLarge = IsSmall;oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];IgnoreLock = false;
            	//
				fnElementItemShow(
        				NextIsImageLarge,
        				oObjParent, oObjImage, oObj, oObjLarge,
        				oObjImageSizeSmall,
        				oObjGroupIndex, oObjIndex,
        				oObjLocked, IgnoreLock);
						//
    			*/
				// if the small is locked then the large is locked...
				// fnElementItemShow(';Large true Curr false (IsImagelarge LockValue IgnoreLock)
    			NextIsImageLarge = IsLarge;oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];IgnoreLock = false;
            	//
				fnElementItemShow(
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
// fnElementEventCurrRootObjSet
// ...................................... //
function fnElementEventCurrRootObjSet()
{
	eventCurrRootObj = eventObject;
	// currently the parent is limited to navigate upward three nodes.
	// and must be below the Body container level
	tmpMax = 3;loopContinue = true;
	while (loopContinue) {
		if (eventCurrRootObj) {
		if (eventCurrRootObj.parentNode) {
		if (eventCurrRootObj.parentNode.id) {
			// i.e. 'BodyMenuImageContainer'
			//  or  'BodyImageContainer'
			if ((eventCurrRootObj.parentNode.id).substr(0,4) = 'Body') { loopContinue = false; } else {
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
// fnElementEventLastSet
// ...................................... //
function fnElementEventLastSet(e)
{
	eventLast 			= eventCurr;
	eventLastObject 	= (eventCurr.srcElement || eventCurr.target);
	eventLastId 		= eventLastObject.id;
	eventLastRootId 	= eventCurrRootObj.id;
	//
}
//
// ..................................................................................... _//
// fnElementEventCurrSet
// ...................................... //
function fnElementEventCurrSet(e)
{
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
// fnElementEventCheckDuplicate
// ...................................... //
function fnElementEventCheckDuplicate(UseLog)
{
  	if (!eventCurrRootObj) { return false; }
  	if (!eventCurrRootObj.id) { return false; }
	var IsDuplicate = false;
	var DoStoreLast = true;
    switch(eventType) {
    // ...................................... //
      	case 'mouseover':
			// ignoring mouseover events on the containing box
			// allows the capture of two successive mouseout events,
			// one on a child element and then one on the container
			if (eventCurrId = eventCurrRootObj.id)  {
				IsDuplicate = true;
				DoStoreLast = false;// do not store last mouseover on box
			}
			break;
    // ...................................... //
      	case 'mouseout':
			// this code catches the two successive mouseout events
            if (!browserIsFF) {
               if ((
               	eventCurrId = eventCurrRootObj.id
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
		default:IsDuplicate = false;break;
	}
	//
	if (UseLog && IsDuplicate && debugLogEventDuplicates) {
		fnConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
			'Duplicate Event', 'fnElementEventCheckDuplicate', 0); }
	//
	if (DoStoreLast) { fnElementEventLastSet(eventCurr); }
	return IsDuplicate;
}
//
// ..................................................................................... _//
// fnElementItemHideId
// ...................................... //
function fnElementEventFromHtmlCheck(e, UseLog)
{
	// load and validate event and objects
	// if (!imgLoadUseEventHandler) {
		eventCurr = e || window.event;
		fnElementEventCurrSet(eventCurr);
		fnElementEventCurrRootObjSet();
		// look for duplicate mouse over events (bubbling)
		if (fnElementEventCheckDuplicate(UseLog)) { return false; } else { return true; }
	// } else { return true; }
}
//
// ..................................................................................... _//
// fnElementItemHideId
// ...................................... //
function fnElementEventGet(e)
{
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
function fnElementPlayFirst(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
    filterPlayIndex = 1;
    HideImage = false;HideImageLarge = false;
    //
    fnElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
        oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
//
// ..................................................................................... _//
// fnElementPlayNext
// ...................................... //
function fnElementPlayNext(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
    filterPlayIndex = 1;
    HideImage = false;HideImageLarge = false;
    //
    fnElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
        oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
//
// ..................................................................................... _//
// fnElementPlayAgain
// ...................................... //
function fnElementPlayAgain(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
    filterPlayIndex = 1;
    HideImage = false;HideImageLarge = false;
    //
    fnElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
        oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
//
// ..................................................................................... _//
// ...................................... //
// fnElementPlay
function fnElementPlay(playDirection, IsImageLarge,
	oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
    oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
    //
    var timerType = timerTypeMove;
    var timerGroup = oObjGroupIndex;
    var timerId = oObjGroupImageIndex;
	var timerItemKey = timerId + timerType;
	var timerItemMoveKey = timerId + timerTypeMove;
	var timerItemTransitionKey = timerId + timerTypeTransition;
    var timerRootKey = timerRootId + timerType;
    //
    filterPlayIndex = 1;
    HideImage = false;HideImageLarge = false;
    //
    if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoNotUseEither, playDirection, 'Request')
                + ', Play command requested'
				+ '.',
                'fnElementPlay', 3819, null, null,
                errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
	var PlayAbort = false;
    //
    // Bug for testing: var timerId = oObjNext.id;
	// Checking Transition
	if (timerObj[timerGroup] [timerItemTransitionKey]) {
	    if (timerObj[timerGroup] [timerItemTransitionKey].timerIsRunning) {
			timerRootKey = timerRootId + timerTypeTransition;
			if (playDirection != timerObj[timerGroup] [timerItemTransitionKey].playDirection) {
				// playDirection is different (while running)
				if (debugTimer && debugTimerDetail && debugTimerTransition) {
					fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
							fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Deactivate')
							+ ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
							+ ', Already running, deactivating'
							+ '.',
							'fnElementPlay', 3837, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				// Item will be deactivate and the play command issued
				fnTimerItemDeactivate(timerTypeTransition, timerGroup, timerId, DoNotUseRoot);
			} else {
				// playDirection the same (while running)
				if (debugTimer && debugTimerDetail && debugTimerTransition) {
					fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
							fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate DoStep')
							+ ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
							+ ', Already running, performing a Transition step instead'
							+ '.',
							'fnElementPlay', 3850, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				// the next step will be performed and the new play command skipped
				if (timerMethod = timerMethodGroup) {
					fnTimerGroupDoStepFilter(timerTypeTransition, timerGroup, timerId);
				} else {
					fnTimerItemDoStepFilter(timerTypeTransition, timerGroup, timerId);
				}
				//
				PlayAbort = true;// skip issuing play command
				//
			} // end of playDirection match
		} else {
			// Transition is NOT running
			// Check if displayed or not...
			if ( playDirection = playDirectionForward) {
				// Forward
				if (timerObj[timerGroup] [timerItemTransitionKey].elementIsDisplayed = elementIsDisplayed)  {
					if (debugTimer && debugTimerDetail && debugTimerTransition) {
						fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
							fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Forward command NOT issued'
							+ ', Item is already displayed'
							+ '.',
							'fnElementPlay', 3875, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				}
			} else {
				// Reverse
				if (timerObj[timerGroup] [timerItemTransitionKey].elementIsDisplayed = elementIsNotDisplayed)  {
					if (debugTimer && debugTimerDetail && debugTimerTransition) {
						fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
								fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
								+ ', Play Reverse command NOT issued'
								+ ', Item is already hidden'
								+ '.',
								'fnElementPlay', 3891, null, null,
								errorComment, errorDoNotDisplayTag, errorDoNotAlert);
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
	if (timerObj[timerGroup] [timerItemMoveKey]) {
		if (timerObj[timerGroup] [timerItemMoveKey].timerIsRunning) {
			timerRootKey = timerRootId + timerTypeMove;
			if (playDirection != timerObj[timerGroup] [timerItemMoveKey].playDirection) {
				// playDirection is different (while running)
				if (debugTimer && debugTimerDetail && debugTimerMove) {
					fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
							fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Deactivate')
							+ ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
							+ ', Already running, deactivating'
							+ '.',
							'fnElementPlay', 3919, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				// Item will be deactivate and the play command issued
				fnTimerItemDeactivate(timerTypeTransition, timerGroup, timerId, DoNotUseRoot);
			} else {
				// playDirection the same (while running)
				if (debugTimer && debugTimerDetail && debugTimerMove) {
					fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
							fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate DoStep')
							+ ', Items:' + timerObj[timerGroup] [timerRootKey].timerInstance
							+ ', Already running, performing a Move step instead'
							+ '.',
							'fnElementPlay', 39, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				//
				if (timerMethod = timerMethodGroup) {
					fnTimerGroupDoStepMove(timerTypeMove, timerGroup, timerId);
				} else {
					fnTimerItemDoStepMove(timerTypeMove, timerGroup, timerId);
				}
				//
				PlayAbort = true;// skip issuing play command
				//
			} // end of playDirection match
		} else {
			// Move is NOT running
			// Check if displayed or not...
			if ( playDirection = playDirectionForward) {
				// Forward
				if (timerObj[timerGroup] [timerItemMoveKey].elementIsDisplayed = elementIsDisplayed)  {
					if (debugTimer && debugTimerDetail && debugTimerMove) {
						fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
								fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
								+ ', Play Forward command NOT issued'
								+ ', Item is already displayed...',
								'fnElementPlay', 3956, null, null,
								errorComment, errorDoNotDisplayTag, errorDoNotAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				}
			} else {
				// Reverse
				if (timerObj[timerGroup] [timerItemMoveKey].elementIsDisplayed = elementIsNotDisplayed)  {
					if (debugTimer && debugTimerDetail && debugTimerMove) {
						fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
								fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
								+ ', Play Reverse command NOT issued'
								+ ', Item is already hidden...',
								'fnElementPlay', 3971, null, null,
								errorComment, errorDoNotDisplayTag, errorDoNotAlert);
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
	if (PlayAbort)  {
        return;
    } // skip issuing play command
	//
    // ...................................... //
    // Cascase Direction (Down or Up)
    var layoutCascadeDown = true;
    var layoutCascadeRight = true;
    if (menuImageOffsetTopAll[oObjGroupIndex] [indexGroup] > 0) {
    	layoutCascadeDown = true; } else { layoutCascadeDown = false; }
    //
    oObjIndex = oObjGroupImageIndex;// fnElementItemIndexSetFromObj(oObjNext);
    //
	// POSITION
    // elementLeftOrig, elementTopOrig, elementLeftDest, elementTopDest,
	var oObjIndexTemp = oObjIndex;
	if (!IsImageLarge) { oObjIndexTemp = oObjRootIndex; }
    elementLeftOrig = menuImagePositionLeft[oObjGroupIndex] [oObjIndexTemp] [IsSmall];
    // if CascadeRight
    if (!IsImageLarge) {
		if (oObjGroupIndex < 3) {
      		elementLeftOrig += menuImagePositionWidth[oObjGroupIndex] [oObjIndexTemp] [IsSmall];
		}
    }
    if (IsImageLarge) {
		if (oObjGroupIndex >= 3) {
      		elementLeftOrig += menuImagePositionWidth[oObjGroupIndex] [oObjIndexTemp] [IsSmall];
		}
    }
    elementTopOrig = menuImagePositionTop[oObjGroupIndex] [oObjIndexTemp] [IsSmall];
	// if (layoutCascadeDown && IsImageLarge) {
    // 		elementTopOrig += menuImagePositionHeight[oObjGroupIndex] [oObjIndexTemp] [IsSmall];
	// }
    //
    elementLeftDest = menuImagePositionLeft[oObjGroupIndex] [oObjIndex] [IsImageLarge];
    elementTopDest = menuImagePositionTop[oObjGroupIndex] [oObjIndex] [IsImageLarge];
    // elementLeftDest = oObjNext.style.posLeft;
    // elementTopDest = oObjNext.style.posTop;
	//
	//
	if (debugTimer && debugTimerMove) {
		fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Item Position')
				+ ', Item orgin and destination set'
                + ', Orig: ( ' + elementTopOrig + ', ' + elementLeftOrig + ' )'
                + ', Dest: ( ' + elementTopDest + ', ' + elementLeftDest + ' )',
				'fnElementPlay', 10341, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	// DURATION
    // elementMoveDuration = 2;// 2 / 90
    // elementMoveStepMax = 100;// 100 / 200
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
    startIndex = 1;endIndex = 18;
    if (filterIsOn || filterResizeIsOn) {
        //
        if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Get')
                    + ', Filter Get command issued'
					+ '.',
                    'fnElementPlay', 4055, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
        //
    	fnFilterGet(filterPlayAll, startIndex, endIndex,
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
            if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
                fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
						fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Enable')
						+ ', Filter Enable command issued'
						+ '.',
                        'fnElementPlay', 4085, null, null,
                        errorComment, errorDoNotDisplayTag, errorDoNotAlert);
            }
            //
        	fnFilterEnable(filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjId, filterId);
		// }
    	//
        // // Each form below accesses the alpha filter of the object.
        // oObjNext.filters.item('DXImageTransform.Microsoft.Alpha').enabled = 0     // Named index
    	//
		// if (filterObj[filterIdPassed].filterDoApply) {
            if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
                fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
						fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Apply')
						+ ', Filter Apply command issued'
						+ '.',
                        'fnElementPlay', 4104, null, null,
                        errorComment, errorDoNotDisplayTag, errorDoNotAlert);
            }
            //
        	fnFilterApply(filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjId, filterId);
		// }
    	//
        if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Start')
					+ ', Filter Start command issued'
					+ '.',
                    'fnElementPlay', 4119, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
        //
        fnTimerStartFilter(playDirection, timerMethod, fnTimerGroupDoStepFilter, fnTimerItemDoStepFilter,
                    filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
					filterObjId, filterId);
        //
		// if (filterObj[filterIdPassed].filterDoPlay) {
            if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
                fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
						fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Play')
                        + ', Filter Vendor Play command issued'
						+ '.',
                        'fnElementPlay', 4135, null, null,
                        errorComment, errorDoNotDisplayTag, errorDoNotAlert);
            }
            //
    	    fnFilterPlay(playDirection, filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
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
        if (playDirection = playDirectionReverse)  {
            tempSize = 1.0;
            oObjNext.style.left = elementLeftDest + 'px';
            oObjNext.style.top = elementTopDest + 'px';
        } else {
            tempSize = 0.05;
            oObjNext.style.left = elementLeftOrig + 'px';
            oObjNext.style.top = elementTopOrig + 'px';
        }
        //
        if (filterIsOn || filterResizeIsOn) {
            if (filterResizeIsOn) { fnFilterResize(oObjNext, filterClassMatrix, tempSize); }
        }
        // ...................................... //
        // Visibility
        if (oObjNext.style.display != 'block') { oObjNext.style.display= 'block'; }
        //
        if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
            fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
					fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Start')
                    + ', Move Start command issued'
					+ '.',
                    'fnElementPlay', 4174, null, null,
                    errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        }
        //
        fnTimerStartMove(playDirection, timerMethod, fnTimerGroupDoStepMove, fnTimerItemDoStepMove,
                    filterPlayAll, startIndex, endIndex,
                    oObjNext, oObjNextImage,
					oObjGroupIndex, oObjGroupImageIndex,
                    filterObjId, filterId);
					 //
    } else if (filterIsOn || filterResizeIsOn) {
        //
        // **if (browserAnimationIsIe && filterCommand.length) { eval(filterCommand);filterCommand = ''; }
        if (filterResizeIsOn && !elementIsDisplayed)  {
            //
            if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
                fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
						fnTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Resize')
                        + ', Resize command issued'
						+ '.',
                        'fnElementPlay', 4194, null, null,
                        errorComment, errorDoNotDisplayTag, errorDoNotAlert);
            }
            //
            fnFilterResize(oObjNext, filterClassMatrix, 0.05);
        }
        // ...................................... //
        // Visibility
        if (oObjNext.style.display != 'block') { oObjNext.style.display= 'block'; }
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
// 		fnElementGroupShowRange
//		fnElementItemShowIndex
//		fnElementGroupShowStack
//		fnElementItemToggle
//		fnElementItemShow
// Menu Hide
// 		fnElementGroupToggleRange
//		fnElementItemHide
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock Show Toggle function (s)
// ...................................... //
//
// ..................................................................................... _//
// fnElementGroupToggleRange
// ...................................... //
function fnElementGroupToggleRange(HideImage, HideImageLarge, startIndex, endIndex, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	if (javaLoadFirst) { fnElementObjectCreate(); }
	if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
	//
  	// Objects
    oObjIndex = oObjGroupImageIndex;// fnElementItemIndexSetFromObj(oObjNext);
    fnElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge;oObjNextImage = oObjImageLarge;oObjNextParent = oObj;oObjNextLarge = oObjLarge;
	} else {
		oObjNext = oObj;oObjNextImage = oObjImage;oObjNextParent = oObjParent;oObjNextLarge = oObjLarge;
	}
	//
    var startObjoObjIndex = startIndex;
    var endObjoObjIndex = endIndex;
    var oObjIndexCurr = startObjoObjIndex;
	//
    if (oObjNext.style.display = 'none') {
	  	oObjLocked = true;
	  	IgnoreLock = false;
	  	fnElementGroupShowStack(IsImageLarge, oObjNextParent.id, oObjNextImage.id, oObjNext.id, iImageSize, oObjGroupIndex, endIndex, oObjLocked, IgnoreLock);
		//
	} else {
	  	oObjLocked = false;
	  	IgnoreLock = true;
        while ( oObjIndexCurr < 1+endObjoObjIndex ) {
            //
            menuImageLocked[oObjGroupIndex] [oObjIndexCurr] [IsImageLarge] = false;
            // Objects
            fnElementItemGetAllFromIndex(oObjGroupIndex, oObjIndexCurr);
			//
            if (HideImage) {
                fnElementItemHide(IsImageLarge,
						oObjParent, oObjImage, oObj, oObjLarge,
						oObjGroupIndex, oObjIndexCurr,
						oObjLocked, IgnoreLock);
            }
        	if (HideImageLarge) {
				if (oObjLarge.style.display = 'block') {
					fnElementItemHide(true,
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
// fnMenu Toggle Menu Show Item (Mouse Down function)
// ...................................... //
function fnElementItemToggle(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	if (javaLoadFirst) { fnElementObjectCreate(); }
	if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
	//
  	// Objects
    oObjIndex = oObjGroupImageIndex;// fnElementItemIndexSetFromObj(oObjNext);
    fnElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge;oObjNextImage = oObjImageLarge;oObjNextParent = oObj;oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];
	} else {
		oObjNext = oObj;oObjNextImage = oObjImage;oObjNextParent = oObjParent;oObjNextLarge = oObjLarge;
		// oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];
	}
	//
    if (oObjNext.style.display = 'none') {
       fnElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge], IgnoreLock);
	   oObjNext.style.display = 'block';
    } else {
	   if (IsImageLarge) {
          // Is this wrong?
          fnElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge], true);
	   } else {
          fnElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupImageIndex, true, IgnoreLock);
          // fnElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge], IgnoreLock);
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
// fnMenu Menu Show Item and all Previous (Mouse Over function)
// ...................................... //
function fnElementGroupShowStack(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	// load and validate event and objects
	fnElementEventFromHtmlCheck(null, debugLogEvents);
	if (eventCurrId == oObjNextParentId
		&& !eventMouseOverEnabled
		&& eventType == 'mouseover'
		)  {
			return;
		}
	//
	if (javaLoadFirst) { fnElementObjectCreate(); }
	if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
	//
  	// Objects
    oObjIndex = oObjGroupImageIndex;// fnElementItemIndexSetFromObj(oObjNext);
    fnElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	//
	if (IsImageLarge) {
		oObjNext = oObjLarge;oObjNextImage = oObjImageLarge;oObjNextParent = oObj;oObjNextLarge = oObjLarge;
	} else {
		oObjNext = oObj;oObjNextImage = oObjImage;oObjNextParent = oObjParent;oObjNextLarge = oObjLarge;
	}
	//
	if ( eventType != 'mouseover' || eventMouseOverEnabled
		|| ( oObjNext.style.display = 'block' && !eventMouseOverEnabled )
		) {
		//
		imgZindex += 1;
		oObjNext.style.zIndex = imgZindex;
		// process images in group above and including this location
		var startoObjIndex = 1;
		var endoObjIndex = fnElementItemIndexSetFromObj(oObjNext);
		var oObjIndexCurr = startoObjIndex;
		while ( oObjIndexCurr < 1+endoObjIndex ) {
			// Objects
			 fnElementItemGetAllFromIndex(oObjGroupIndex, oObjIndexCurr);
			// Set Lock Test
				// if (oObjLocked = true) { menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjLocked; }
			 if (!IgnoreLock) { menuImageLocked[oObjGroupIndex] [oObjIndexCurr] [IsImageLarge] = oObjLocked; }
			// Reveal Hidden Images
			fnElementItemShow(IsImageLarge, oObjParent, oObjImage, oObj, oObjLarge, iImageSize, oObjGroupIndex, oObjIndexCurr, menuImageLocked[oObjGroupIndex] [oObjIndexCurr] [IsImageLarge], true);
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
// fnElementGroupShowRange
// ...................................... //
function fnElementGroupShowRange(startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	  // ...................................... //
	  // Build Menu Images Div
	  if (javaLoadFirst) { fnElementObjectCreate(); }
	  if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
	  //
      var startObjoObjIndex = startIndex;
      var endObjoObjIndex = oObjGroupImageIndex;// fnElementItemIndexSetFromObj(oObjNext);
      var oObjIndexCurr = startObjoObjIndex;
      while ( oObjIndexCurr < 1+endObjoObjIndex ) {
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
function fnElementItemShowIndex(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	  if (javaLoadFirst) { fnElementObjectCreate(); }
	  if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
	  fnElementGroupShowStack(IsImageLarge, oObjNextParent.id, oObjNextImage.id, oObjNext.id, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
//
// ..................................................................................... _//
// fnMenu Menu Show Item (Mouse Over function)
// ...................................... //
function fnElementItemShowId(e, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, oObjNextLargeId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	// look for duplicate mouse over events (bubbling)
	if (!fnElementEventFromHtmlCheck(e, debugLogEvents)) { return; }
	//
  	// Objects
    oObjIndex = oObjGroupImageIndex;// fnElementItemIndexSetFromObj(oObjNext);
    fnElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge;oObjNextImage = oObjImageLarge;oObjNextParent = oObj;oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];
	} else {
		oObjNext = oObj;oObjNextImage = oObjImage;oObjNextParent = oObjParent;oObjNextLarge = oObjLarge;
	}
	//
    fnElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
    //
}
//
// ..................................................................................... _//
// fnMenu Menu Show Item (Mouse Over function)
// ...................................... //
function fnElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
		if (fnTimerStartMoveBusy(timerTypeMove, oObjGroupIndex, oObjGroupImageIndex, debugLogEvents)) { return; }
		//
		if (javaLoadFirst) { fnElementObjectCreate(); }
        if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
		//
        oObjIndex = oObjGroupImageIndex;// fnElementItemIndexSetFromObj(oObjNext);
        LastTochedId = oObjNext.id;
		//
		if (debugTimer && debugTimerTransition) {
			fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerKeyText('Show', oObjGroupIndex, oObjIndex)
				+ ', ' + oObjNext.id
				+ ', ' + ((moveIsOn || filterIsOn) ? 'Animated' : 'Unanimated')
				+ ', Time:' + Date()
				+ '.',
				'fnElementItemShow', 10141, oObjNext, null,
				errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		fnWindowClientWidth();
		//
        // if (IsImageLarge) {
              // Objects
              // fnElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
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
				var elementWidthDefault = iImageSize + (menuImageBorderWidth * 2);
				var elementHeightDefault = (iImageSize * oObjImageSizeRatio) + (menuImageBorderWidth * 2);
			    //
				////////////////////////////////////////////
            	// Position
                // ...................................... //
            	//
                // ...................................... //
        	    // Parent Postion
                // ...................................... //
                // Get the offset width of that parent element
        		fnElementPosCalculate(oObjNextParent);
        	    //
                // ...................................... //
                // Position Control
                // Save the Left position (of the first image in the group)
    		  	if (oObjIndex = 1)  {
                    // Store Parent Postion (note only first is stored at this time)
                    menuImagePositionLeft[oObjGroupIndex] [oObjRootIndex] [IsImageLarge] = oObjLeft;
                    menuImagePositionTop[oObjGroupIndex] [oObjRootIndex] [IsImageLarge] = oObjTop;
                    menuImagePositionWidth[oObjGroupIndex] [oObjRootIndex] [IsImageLarge] = oObjWidth;
                    menuImagePositionHeight[oObjGroupIndex] [oObjRootIndex] [IsImageLarge] = oObjHeight;
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
                cascadeRow = Math.floor( (oObjIndex - 1) / oObjectRowMax[oObjGroupIndex]) + 1;
				// (oObjIndex - cascadeColumn + oObjectRowMax[oObjGroupIndex]) / oObjectRowMax[oObjGroupIndex];
                //
                // ...................................... //
                // Cascase Direction (Down or Up)
                var layoutCascadeDown = true;
                var layoutCascadeRight = true;
        	    if (menuImageOffsetTopAll[oObjGroupIndex] [indexGroup] > 0) {
                    layoutCascadeDown = true; } else { layoutCascadeDown = false; }
                // ...................................... //
                // Animation
                if (layoutIndex = layoutWindowed) {
                    layoutCascadeDown = true;
					filterMotionDirectionSourceAngle = 292.5;
					filterMotionDirection= 'rightdown';
				}
                // ...................................... //
        	    // Top Position
                // ...................................... //
      			// Offset
				if (IsImageLarge) {
        			oObjNextOffsetTop = menuImageOffsetTopLarge [oObjGroupIndex];
        			oObjNextOffsetTop += menuImageOffsetTopLarge [indexGroup];
					if (!layoutCascadeDown) { oObjNextOffsetTop = -oObjNextOffsetTop; }
                    oObjNextTop = menuImagePositionTop[oObjGroupIndex] [oObjIndex] [IsSmall];
					//
                    // oObjNextTop += menuImagePositionHeight[oObjGroupIndex] [oObjIndex] [IsSmall];
					//
                    oObjNextTop += oObjNextOffsetTop;
				} else {
          			oObjNextOffsetTop = menuImageOffsetTopAll[oObjGroupIndex] [indexGroup];
          			oObjNextOffsetTop += menuImageOffsetTopAll[oObjGroupIndex] [oObjIndex];
                    // ...................................... //
              	    // Set Top
            	    // View Option Adjustments
                    // Windowed Layout Format
                    if (layoutIndex = layoutWindowed) {
                        oObjNextOffsetTop = 30;
              			// Set Top
                        oObjNextOffsetTop += elBodyMainCenterTop.offsetHeight;
                        oObjNextTop = ((oObjIndex - 1) * 50) + oObjNextOffsetTop;
          			    if (IsImageLarge) { oObjNextTop += 100; }
                    } else {
                        //  Standard Side Menu Layout Format
              			// Set Top
        		  	    if (oObjIndex = 1) {
                            oObjNextTop = oObjTop;
                        } else {
                			// oObjNextTop = oObjTop;
                            oObjNextTop = menuImagePositionTop[oObjGroupIndex] [oObjIndex - 1] [IsImageLarge];
                        }
                        oObjNextTop += oObjNextOffsetTop;
        			    if (IsImageLarge) {
                            if (oObjNextOffsetTop > 50) {
                                oObjNextTop += oObjNextOffsetTop;
                            } else {  oObjNextTop += 100; }
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
        	    if (menuImageOffsetLeftAll[oObjGroupIndex] [indexGroup] > 0) {
                    layoutCascadeRight = true; } else { layoutCascadeRight = false; }
				//
        	    if (layoutCascadeRight) {
                      // ...................................... //
                      // Left Column (Left)
        			  if (layoutCascadeDown) {
                          filterMotionDirectionSourceAngle = 315;
						  filterMotionDirectionSourceAngle = (oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 270;
                          filterMotionDirection= 'rightdown';
                      } else {
                          filterMotionDirectionSourceAngle = 225;
						  filterMotionDirectionSourceAngle = Math.abs(oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 180;
                          filterMotionDirection= 'rightup';
					  }
    			} else {
                // ...................................... //
    			    // Right Column
        			  if (layoutCascadeDown) {
                          filterMotionDirectionSourceAngle = 45;
						  filterMotionDirectionSourceAngle = (oObjNextOffsetTop / oObjNextOffsetLeft * 45);
                          filterMotionDirection= 'leftdown';
                      } else {
                          filterMotionDirectionSourceAngle = 135;
						  filterMotionDirectionSourceAngle = Math.abs(oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 90;
                          filterMotionDirection= 'leftup';
					  }
				}
                // ...................................... //
                // Left Position
                // ...................................... //
                //
    			// Offset
				if (IsImageLarge) {
        			oObjNextOffsetLeft = menuImageOffsetLeftLarge [oObjGroupIndex];
        			oObjNextOffsetLeft += menuImageOffsetLeftLarge [indexGroup];
					if (!layoutCascadeRight) { oObjNextOffsetLeft = -oObjNextOffsetLeft; }
					//
                    oObjNextLeft = menuImagePositionLeft[oObjGroupIndex] [oObjIndex] [IsSmall];
					//
					if (layoutCascadeRight)  {
                    	oObjNextLeft += menuImagePositionWidth[oObjGroupIndex] [oObjIndex] [IsSmall];
					} else {
                    	oObjNextLeft -= elementWidthDefault;
						// menuImagePositionWidth[oObjGroupIndex] [oObjIndex] [IsImageLarge];
					}
					//
                    oObjNextLeft += oObjNextOffsetLeft;
				} else {
        		    oObjNextOffsetLeft = menuImageOffsetLeftAll[oObjGroupIndex] [indexGroup];// Group Default Offset
        			oObjNextOffsetLeft += menuImageOffsetLeftAll[oObjGroupIndex] [oObjIndex];// Item specific default
					//
                    // ...................................... //
            	    // View First Image Adjustments
                    var menuImageOffsetFirst = menuImageOffsetFirstAll[oObjGroupIndex] [indexLeft];
                    // Windowed Layout Format
        		  	if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) != 1) { menuImageOffsetFirst = 0; }
                    if (layoutIndex = layoutWindowed) {
                        // oObjNextOffsetLeft = oObjNextOffsetLeft * 25 / Math.abs(oObjNextOffsetLeft);
                        menuImageOffsetFirst = 0;
        		    	// oObjNextOffsetLeft = 0;// some hard coded setting?
                    }
                    // if (layoutIndex = layoutWindowed) { oObjNextOffsetTop = Math.abs(oObjNextOffsetTop); }
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
                              if (layoutIndex = layoutWindowed) {
                                    oObjNextOffsetLeft = 0;
                                    oObjNextLeft = ( (oObjGroupIndex - 1) / 6 * layoutWidth)
                                        + menuImageOffsetFirst
                                        + oObjNextOffsetLeft;// (ie. Right Top)
    // XXXXXXXX client width etc (refreshing?)                              } else {
                                    // Use Parent Position plus offset
                                    oObjNextLeft = ( menuImagePositionLeft[oObjGroupIndex] [oObjRootIndex] [IsImageLarge]
                                        + menuImagePositionWidth[oObjGroupIndex] [oObjRootIndex] [IsImageLarge])
                                        + menuImageOffsetFirst
                                        + oObjNextOffsetLeft;// (ie. Right Top)
                              }
                          } else {
                             // Cascade Next Left Column By Top and Left Offsets
                             oObjNextLeft = menuImagePositionLeft[oObjGroupIndex] [oObjIndex - 1] [IsImageLarge]
                                    + oObjNextOffsetLeft;// Right Edge of Parent
                             // oObjNextLeft = (oObjLeft)
                          }
                          //
        			} else {
                    // ...................................... //
        			    // Right Column
                        // Cascade Maximum exceeded (Right)
        				if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) == 1) {
                              if (layoutIndex = layoutWindowed) {
                                    oObjNextLeft = ( (oObjGroupIndex - 1) / 6 * layoutWidth);
                              } else {
                                    oObjNextLeft = menuImagePositionLeft[oObjGroupIndex] [oObjRootIndex] [IsImageLarge]
                                        - (iImageSize + 10)
                                        + menuImageOffsetFirst
                                        + oObjNextOffsetLeft;// (ie. Left Top)
                             }
                             // if (layoutIndex = layoutWindowed && oObjGroupIndex > 2) { oObjNextLeft += 75; }
                  		} else {
                            // (oObjLeft)
                            if (layoutIndex = layoutWindowed) { menuImageOffsetFirst = 0; }
                    	    oObjNextLeft = menuImagePositionLeft[oObjGroupIndex] [oObjIndex - 1] [IsImageLarge]
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
				var oObjNextLeft;var imageLeftEdge;var imageRightEdge;var bodyLeftEdge;var bodyRightEdge;
				//
				fnElementPosGet(UseScroll, UseBase, elBodyMainCenterCenter, 0, 0);
				bodyLeftEdge = oObjLeft;
                bodyRightEdge = oObjLeft + oObjWidth;
				// bodyLeftEdge = fnElementLeftMaxGet(DoNotUseScroll, UseBase, elBodyMainCenterCenter);
                // bodyRightEdge = bodyLeftEdge + fnElementWidthMaxGet(DoNotUseScroll, UseBase, elBodyMainCenterCenter);
  				oObjNextLeft = fnElementLeftMaxGet(UseScroll, UseBase, oObjNext);
				//
				var oObjNextLeftChanged = false;
				do {
  					imageRightEdge = oObjNextLeft
  							+ elementWidthDefault;
  					//
      				if (imageRightEdge + 10 > bodyRightEdge) {
          				   oObjNextLeft -= 50;oObjNextLeftChanged = true;
  					}
      			} while (imageRightEdge + 10 > bodyRightEdge);
                //
				do {
  					imageLeftEdge = oObjNextLeft;
  					//
      				if (imageLeftEdge - 10 < bodyLeftEdge) {
          				   oObjNextLeft += 50;oObjNextLeftChanged = true;
  					}
      			} while (imageLeftEdge - 10 < bodyLeftEdge);
				//
          		if (oObjNextLeftChanged) { oObjNext.style.left = oObjNextLeft +'px'; }
                //
                // ...................................... //
                // Set Object Style Left
              	// oObjNext.style.left = oObjNext.style.posLeft;
                //
                // ...................................... //
                // Store Postion
        		fnElementPosGet(UseScroll, UseBase, oObjNext, elementWidthDefault, elementHeightDefault);
menuImagePositionLeft[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjLeft;// parseInt(oObjNext.style.left);
menuImagePositionTop[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjTop;// parseInt(oObjNext.style.top);
menuImagePositionWidth[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjWidth;// oObjNext.offsetWidth;
menuImagePositionHeight[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjHeight;// oObjNext.offsetHeight;
                //
                // ...................................... //
              	// Filters
                // ...................................... //
                //
                // ...................................... //
            	// Z Index
                imgZindex += 1;
                oObjNext.style.zIndex  = imgZindex + oObjIndex;
                // ...................................... //
                // Filter Apply Command
    			if (moveIsOn || filterIsOn) {
        			//
        			playDirection = playDirectionForward;
        			// playDirection = playDirectionReverse;
					fnElementPlayAgain(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjIndex, false, true);
        			// oObjNext.filters[0].apply();
        			// oObjNext.filters[1].apply();
        			// oObjNext.filters.item('DXImageTransform.Microsoft.Wheel').apply();
        			// oObjNext.filters.item('DXImageTransform.Microsoft.Spin').apply();
        			// oObjNext.filters.item[1].apply();
        			// oObjNext.filters.item(1).Apply();
                  	// Visibility
                  	oObjNext.style.display= 'block';
                } else {
                    // ...................................... //
                  	// Visibility
                  	oObjNext.style.display= 'block';
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
    			// fnFilterResetThenAnimate(oObjNext);
    			// fnFilterSpin(oObjNext);
    			// ...................................... //
            	// Z Index
                imgZindex += 1;
                oObjNext.style.zIndex  = imgZindex + oObjIndex;
                //
        // ...................................... //
        // end of display 'none'
        } else {
            // ...................................... //
        	// Z Index
                imgZindex += 1;
			if (IsImageLarge) {
                oObjNext.style.zIndex  = imgZindex + oObjIndex;
                oObjNextParent.style.zIndex  = imgZindex + oObjIndex;
				if (oObjNextParent.style.display != 'block')  {
						oObjNextParent.style.display = 'block';
					}
			} else {
                oObjNext.style.zIndex  = imgZindex + oObjIndex;
				if (oObjNextLarge.style.display = 'block') { oObjNextLarge.style.zIndex  = imgZindex + oObjIndex; }
			}
        }
		//
    // ...................................... //
    // Dispaly Lock vs MouseOut Disappear
		// if (oObjLocked = true) { menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjLocked; }
		if (!IgnoreLock) { menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjLocked; }
}
//
// ..................................................................................... _//
// ...................................... //
// SectionBlock (Menu) Hide function (s)
// ...................................... //
//
// ..................................................................................... _//
// fnElementItemHideId
// ...................................... //
function fnElementItemHideId(e, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, oObjNextLargeId, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	// load and validate event and objects
	if (!fnElementEventFromHtmlCheck(e, debugLogEvents)) { return; }
	//
  	// Objects
    oObjIndex = oObjGroupImageIndex;// fnElementItemIndexSetFromObj(oObjNext);
    fnElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge;oObjNextImage = oObjImageLarge;oObjNextParent = oObj;oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];
	} else {
		oObjNext = oObj;oObjNextImage = oObjImage;oObjNextParent = oObjParent;oObjNextLarge = oObjLarge;
	}
	//
    fnElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
    //
}
//
// ..................................................................................... _//
// fnMenu fnElementItemHide
// ...................................... //
function fnElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
{
	if (fnTimerStartMoveBusy(oObjNext.id + 'Move', oObjGroupIndex, oObjIndex, debugLogEvents)) { return; }
	//
	if (javaLoadFirst) { fnElementObjectCreate(); }
	if (menuImageLoadFirst) { fnMenuImagesHtmlBuild(); }
	var oObjNextIndex = oObjIndex = oObjGroupImageIndex;// fnElementItemIndexSetFromObj(oObjNextGroupIndex, oObjNext);
    // fnElementItemGetAllFromIndex(oObjNextGroupIndex, oObjNextIndex);
	//
	if (!IgnoreLock && menuImageLocked[oObjNextGroupIndex] [oObjNextIndex] [IsImageLarge] == true)  {
		if (debugTimer && debugTimerTransition) {
			fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
				fnTimerKeyText('Hide', oObjGroupIndex, oObjIndex)
				+ ', ' + oObjNext.id
				+ ', Do not hide locked item'
				+ ', Time:' + Date()
				+ '.',
				'fnElementItemHide', 9876, oObjNext, null,
				errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		return;
	}
	//
    if (debugTimer && debugTimerTransition) {
        fnErrorOccured(DoNotUseDebug, DoUseSingeLine,
			fnTimerKeyText('Hide', oObjGroupIndex, oObjIndex)
			+ ', ' + oObjNext.id
			+ ', ' + ((moveIsOn || filterIsOn) ? 'Animated' : 'Unanimated')
            + ', Time:' + Date()
			+ '.',
            'fnElementItemHide', 9889, oObjNext, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
    if (moveIsOn || filterIsOn) {
	    //
	    // playDirection = playDirectionForward;
	    var playDirection = playDirectionReverse;
	    var iImageSize;
	    if (IsImageLarge) { iImageSize = oObjImageSizeLarge; } else { iImageSize = oObjImageSizeSmall; }
	    fnElementPlayAgain(playDirection, IsImageLarge,
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
	    oObjNext.style.display= 'none';
	    // will become a filter play...
        fnTimerItemDeactivate(timerTypeMove, oObjNextGroupIndex, oObjNextIndex);
        fnTimerItemDeactivate(timerTypeTransition, oObjNextGroupIndex, oObjNextIndex);
	}
	//
	//
	if (!IgnoreLock) { menuImageLocked[oObjNextGroupIndex] [oObjNextIndex] [IsImageLarge] = oObjLocked; }
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
// fnElementItemGetAllFromIndex
// ...................................... //
function fnElementItemGetAllFromIndex(oObjGroupCn, oObjCn)
{
    oObjIndex = oObjCn;
    oObjGroupIndex = oObjGroupCn;
    var oObjValid = true;
    var oObjId = new String();
	var oObjParentId = new String();
	//
	if (javaLoadFirst) { fnElementObjectCreate(); }
// ...................................... //
switch(oObjGroupIndex) {
      // Non Groups
        case 101: oObjValid = false;break;
        case 102: oObjValid = false;break;
        case 103: oObjValid = false;break;
        case 104: oObjValid = false;break;
// ...................................... //
      // Group 1
      case 1:
	  //
	  switch(oObjCn) {
        case 0: break;
        case 1:
			oObjId = 'MdmImportTld11';oObjParentId = 'MenuContainerLeft1';break;
        case 2:
			oObjId = 'MdmNetAppFrame12';oObjParentId = 'MdmImportTld11'; break;
        case 3:
			oObjId = 'MdmWebUi13';oObjParentId = 'MdmNetAppFrame12';break;
        case 4:
			oObjId = 'MdmDbUtilClass';oObjParentId = 'MdmWebUi13';break;
        case 6:
			oObjId = 'MdmOutlookSync15';oObjParentId = 'MdmDbUtilClass';break;
        case 5:
			oObjId = 'MdmNetVirList16';oObjParentId = 'MdmOutlookSync15';break;
        case 7:
			oObjId = 'MdmSystemMgnt17';oObjParentId = 'MdmNetVirList16';break;
        case 8:
			oObjId = 'MdmWebDev18';oObjParentId = 'MdmSystemMgnt17';break;
        default:
			oObjValid = false;
			oObjId = 'MdmImportTld11';oObjParentId = 'MenuContainerLeft1';break;
  }
  break;
// ...................................... //
  // Group 2
  case 2:
      switch(oObjCn){
        case 0: break;
        case 1:
			oObjId = 'MdmResume21';oObjParentId = 'MenuContainerLeft2';break;
        case 2:
			oObjId = 'MdmRsmIt22';oObjParentId = 'MdmResume21';break;
        case 3:
			oObjId = 'MdmDghCarBio';oObjParentId = 'MdmRsmIt22';break;
        case 4:
			oObjId = 'MdmDghAccom24';oObjParentId = 'MdmDghCarBio';break;
        default:
			oObjValid = false;
			oObjId = 'MdmResume21';oObjParentId = 'MenuContainerLeft2';break;
	}
// ...................................... //
	break;
	  // Group 3
	  case 3: switch(oObjCn){
		case 0: break;
		case 1:
			oObjId = 'MdmTechRsrch31';oObjParentId = 'MenuContainerLeft3';break;
		case 2:
			oObjId = 'MdmCogSciProj';oObjParentId = 'MdmTechRsrch31';break;
		case 3:
			oObjId = 'MdmMvvmProj33';oObjParentId = 'MdmCogSciProj';break;
		default:
			oObjValid = false;
			oObjId = 'MdmTechRsrch31';oObjParentId = 'MenuContainerLeft3';break;
	  }
	  break;
// ...................................... //
  // Group 4
  case 4:
      switch(oObjCn) {
        case 0: break;
        case 1:
			oObjId = 'MdmImportTld41';oObjParentId = 'MenuContainerRight1';break;
        case 2:
			oObjId = 'MdmKBil42';oObjParentId = 'MdmImportTld41';break;
        case 3:
			oObjId = 'MdmNetAppFrame43';oObjParentId = 'MdmKBil42';break;
        case 4:
			oObjId = 'MdmSrt44';oObjParentId = 'MdmNetAppFrame43';break;
        case 5:
			oObjId = 'MdmPickTr45';oObjParentId = 'MdmSrt44';break;
        case 6:
			oObjId = 'MdmOutlookSync46';oObjParentId = 'MdmPickTr45';break;
        case 7:
			oObjId = 'MdmPickOss47';oObjParentId = 'MdmOutlookSync46';break;
        case 8:
			oObjId = 'MdmBlank48';oObjParentId = 'MdmPickOss47';break;
        default:
			oObjValid = false;
			oObjId = 'MdmImportTld41';oObjParentId = 'MenuContainerRight1';break;
      }
	break;
	default:
		oObjValid = false;
		oObjId = 'MdmImportTld11';oObjParentId = 'MenuContainerLeft1';break;
	}
	if (oObjValid) {
    	oObj = fnElementGetRef(oObj, oObjId, oObjId);
		//
    	oObjImage = fnElementGetRef(oObjImage, oObjId + 'Image', oObjId + 'Image');
		//
    	oObjParent = fnElementGetRef(oObjParent, oObjParentId, oObjParentId);
		//
    	oObjLarge = fnElementGetRef(oObjLarge, oObjId + 'L', oObjId + 'L');
		//
    	oObjImageLarge = fnElementGetRef(oObjImageLarge, oObjId + 'L' + 'Image', oObjId + 'L' + 'Image');
		//
		oObjText = fnElementItemGetDescription(oObjGroupCn, oObjCn);
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
// fnElementItemGetDescription
// ...................................... //
function fnElementItemGetDescription(oObjGroupCn, oObjCn)
{
oObjIndex = oObjCn;
oObjGroupIndex = oObjGroupCn;
switch(oObjGroupIndex) {
// ...................................... //
  // Non Groups
    case 101: return 'MenuContainerLeft1';
    case 102: return 'MenuContainerLeft2';
    case 103: return 'MenuContainerLeft3';
    case 104: return 'MenuContainerRight1';
// ...................................... //
  // Group 1
  case 1: switch(oObjCn){
    case 0: return 'MenuContainerLeft1';
    case 1: return 'C# Schema Converter';
    case 2: return 'C# Application' + charNewLineTag + 'Framework';
    case 3: return 'Web Templates';
    case 4: return 'File System';
    case 5: return 'Outlook Disk Sync';
    case 6: return 'Virtualized List';
    case 7: return 'Windows Best' + charNewLineTag + 'Practices';
    case 8: return 'Web Development';
    default: return 'C# Schema Converter';
  }
  return;
// ...................................... //
  // Group 2
  case 2: switch(oObjCn){
    case 0: return 'MenuContainerLeft2';
    case 1: return 'Career Home';
    case 2: return 'Resume';
    case 3: return 'Personal Bio';
    case 4: return 'Major Accomplishments';
    default: return 'Career Home';
  }
  return;
// ...................................... //
  // Group 3
  case 3: switch(oObjCn){
    case 0: return 'MenuContainerLeft3';
    case 1: return 'Applied Technology' + charNewLineTag + 'Research';
    case 2: return 'Cognitive Science' + charNewLineTag + 'Project';
    case 3: return 'C# MVVM / OSS Project';
    default: return 'Applied Technology' + charNewLineTag + 'Research';
  }
  return;
// ...................................... //
  // Group 4
  case 4:
  default:
  switch(oObjCn) {
    case 0: return 'MenuContainerRight1';
    case 1: return 'C# Schema Converter';
    case 2: return 'K-Bil' + charNewLineTag + 'Subscriber Billing' + charNewLineTag + 'System';
    case 3: return 'C# Application' + charNewLineTag + 'Framework';
    case 4: return 'SRT Code' + charNewLineTag + 'Conversion Tool';
    case 5: return 'PickTR Adaptive' + charNewLineTag + 'Protocol';
    case 6: return 'Outlook Disk Sync';
    case 7: return 'Pick Application' + charNewLineTag + 'Framework';
    case 8: return 'Mdm Blank';
    default: return 'C# Schema Converter';
  }
  return;
}
//
}
//
// ..................................................................................... _//
// fnElementItemGetName
// ...................................... //
function fnElementItemGetName(oObjGroupCn, oObjCn)
{
oObjIndex = oObjCn;
oObjGroupIndex = oObjGroupCn;
// ...................................... //
switch(oObjGroupIndex) {
// ...................................... //
  // Non Groups
    case 101: return 'MenuContainerLeft1';
    case 102: return 'MenuContainerLeft2';
    case 103: return 'MenuContainerLeft3';
    case 104: return 'MenuContainerRight1';
// ...................................... //
  // Group 1
  case 1: switch(oObjCn){
    case 0: return 'MenuContainerLeft1';
    case 1: return 'MdmImportTld';
    case 2: return 'MdmNetAppFrame';
    case 3: return 'MdmWebUi';
    case 4: return 'MdmDbUtilClass';
    case 5: return 'MdmOutlookSync';
    case 6: return 'MdmNetVirList';
    case 7: return 'MdmSystemMgnt';
    case 8: return 'MdmWebDev';
    default: return 'MdmImportTld';
  }
  return;
// ...................................... //
  // Group 2
  case 2: switch(oObjCn){
    case 0: return 'MenuContainerLeft2';
    case 1: return 'MdmResume';
    case 2: return 'MdmRsmIt';
    case 3: return 'MdmDghCarBio';
    case 4: return 'MdmDghAccom';
    default: return 'MdmResume';
  }
  return;
// ...................................... //
  // Group 3
  case 3: switch(oObjCn){
    case 0: return 'MenuContainerLeft3';
    case 1: return 'MdmTechRsrch';
    case 2: return 'MdmCogSciProj';
    case 3: return 'MdmMvvmProj';
    default: return 'MdmTechRsrch';
  }
  return;
// ...................................... //
  // Group 4
  case 4:
  default:
  switch(oObjCn) {
    case 0: return 'MenuContainerRight1';
    case 1: return 'MdmImportTld';
    case 2: return 'MdmKBil';
    case 3: return 'MdmNetAppFrame';
    case 4: return 'MdmSrt';
    case 5: return 'MdmPickTr';
    case 6: return 'MdmOutlookSync';
    case 7: return 'MdmPickOss';
    case 8: return 'MdmBlank';
    default: return 'MdmImportTld';
  }
  return;
  }
  //
}
//
// ..................................................................................... _//
// fnElementItemIndexSetFromObj
// ...................................... //
function fnElementItemIndexSetFromObj(oObjPassed)
{
IsImageLarge = IsSmall;
oObjNotFound = false;
// switch(oObjGroupIndex) {
// ...................................... //
  // Non Groups
    // case 101:  elementIsRoot = true;return 101;
    // case 102:  elementIsRoot = true;return 102;
    // case 103:  elementIsRoot = true;return 103;
    // case 104:  elementIsRoot = true;return 104;
	// ...................................... //
	// Group 1
	// case 1:
	// Object Id
	if (!oObjPassed) {
		oObjNotFound = false;
		oObjGroupIndex = 4;oObjIndex = 1;
		return oObjIndex;
	}
	//
  switch(oObjPassed.id){
    case 'MenuContainerLeft1': 	oObjGroupIndex = 1;oObjIndex = 0;elementIsRoot = true;break;
    case 'MdmImportTld11': 		oObjGroupIndex = 1;oObjIndex = 1;break;
    case 'MdmNetAppFrame12': 	oObjGroupIndex = 1;oObjIndex = 2;break;
    case 'MdmWebUi13': 	oObjGroupIndex = 1;oObjIndex = 3;break;
    case 'MdmDbUtilClass': 	oObjGroupIndex = 1;oObjIndex = 4;break;
    case 'MdmOutlookSync15': 	oObjGroupIndex = 1;oObjIndex = 5;break;
    case 'MdmNetVirList16': 	oObjGroupIndex = 1;oObjIndex = 6;break;
    case 'MdmSystemMgnt17': 	oObjGroupIndex = 1;oObjIndex = 7;break;
    case 'MdmWebDev18': 		oObjGroupIndex = 1;oObjIndex = 8;break;
	//
    case 'MdmImportTld11L': 	oObjGroupIndex = 1;oObjIndex = 1;IsImageLarge = IsLarge;break;
    case 'MdmNetAppFrame12L': 	oObjGroupIndex = 1;oObjIndex = 2;IsImageLarge = IsLarge;break;
    case 'MdmWebUi13': 	oObjGroupIndex = 1;oObjIndex = 3;break;
    case 'MdmDbUtilClassL': 	oObjGroupIndex = 1;oObjIndex = 4;IsImageLarge = IsLarge;break;
    case 'MdmOutlookSync15L': 	oObjGroupIndex = 1;oObjIndex = 5;IsImageLarge = IsLarge;break;
    case 'MdmNetVirList16L': 	oObjGroupIndex = 1;oObjIndex = 6;IsImageLarge = IsLarge;break;
    case 'MdmSystemMgnt17L': 	oObjGroupIndex = 1;oObjIndex = 7;IsImageLarge = IsLarge;break;
    case 'MdmWebDev18L': 		oObjGroupIndex = 1;oObjIndex = 8;IsImageLarge = IsLarge;break;
    // default:oObjGroupIndex = 1;oObject = 1;break;
  // }
  // return;
	// ...................................... //
	// Group 2
  // case 2: switch(oObjPassed.id){
    case 'MenuContainerLeft2': 	oObjGroupIndex = 2;oObjIndex = 0;elementIsRoot = true;break;
    case 'MdmResume21': 		oObjGroupIndex = 2;oObjIndex = 1;break;
    case 'MdmRsmIt22': 			oObjGroupIndex = 2;oObjIndex = 2;break;
    case 'MdmDghCarBio': 		oObjGroupIndex = 2;oObjIndex = 3;break;
    case 'MdmDghAccom24': 		oObjGroupIndex = 2;oObjIndex = 4;break;
	//
    case 'MdmResume21L': 		oObjGroupIndex = 2;oObjIndex = 1;IsImageLarge = IsLarge;break;
    case 'MdmRsmIt22L': 		oObjGroupIndex = 2;oObjIndex = 2;IsImageLarge = IsLarge;break;
    case 'MdmDghCarBioL': 	oObjGroupIndex = 2;oObjIndex = 3;IsImageLarge = IsLarge;break;
    case 'MdmDghAccom24L': 		oObjGroupIndex = 2;oObjIndex = 4;IsImageLarge = IsLarge;break;
    // default:oObjGroupIndex = 2;oObjIndex = 1;break;
  // }
  // return;
  	// ...................................... //
  	// Group 3
  // case 3: switch(oObjPassed.id){
    case 'MenuContainerLeft3': 	oObjGroupIndex = 3;oObjIndex = 0;elementIsRoot = true;break;
    case 'MdmTechRsrch31': 		oObjGroupIndex = 3;oObjIndex = 1;break;
    case 'MdmCogSciProj': 	oObjGroupIndex = 3;oObjIndex = 2;break;
    case 'MdmMvvmProj33': 		oObjGroupIndex = 3;oObjIndex = 3;break;
	// break;
    case 'MdmTechRsrch31L': 	oObjGroupIndex = 3;oObjIndex = 1;IsImageLarge = IsLarge;break;
    case 'MdmCogSciProjL': 	oObjGroupIndex = 3;oObjIndex = 2;IsImageLarge = IsLarge;break;
    case 'MdmMvvmProj33L': 		oObjGroupIndex = 3;oObjIndex = 3;IsImageLarge = IsLarge;break;
    // default:oObjGroupIndex = 3;oObjIndex = 1;break;
  // }
  // return;
	// ...................................... //
  	// Group 4
  // case 4:
  // default:
  // switch(oObjPassed.id) {
    case 'MenuContainerRight1': 	oObjGroupIndex = 4;oObjIndex = 0;elementIsRoot = true;break;
    case 'MdmImportTld41': 			oObjGroupIndex = 4;oObjIndex = 1;break;
    case 'MdmKBil42': 				oObjGroupIndex = 4;oObjIndex = 2;break;
    case 'MdmNetAppFrame43': 		oObjGroupIndex = 4;oObjIndex = 3;break;
    case 'MdmSrt44': 				oObjGroupIndex = 4;oObjIndex = 4;break;
    case 'MdmPickTr45': 			oObjGroupIndex = 4;oObjIndex = 5;break;
    case 'MdmOutlookSync46': 		oObjGroupIndex = 4;oObjIndex = 6;break;
    case 'MdmPickOss47': 			oObjGroupIndex = 4;oObjIndex = 7;break;
    case 'MdmBlank48': 				oObjGroupIndex = 4;oObjIndex = 8;break;
	//
    case 'MdmImportTld41L': 		oObjGroupIndex = 4;oObjIndex = 1;IsImageLarge = IsLarge;break;
    case 'MdmKBil42L': 				oObjGroupIndex = 4;oObjIndex = 2;IsImageLarge = IsLarge;break;
    case 'MdmNetAppFrame43L': 		oObjGroupIndex = 4;oObjIndex = 3;IsImageLarge = IsLarge;break;
    case 'MdmSrt44L': 				oObjGroupIndex = 4;oObjIndex = 4;IsImageLarge = IsLarge;break;
    case 'MdmPickTr45L': 			oObjGroupIndex = 4;oObjIndex = 5;IsImageLarge = IsLarge;break;
    case 'MdmOutlookSync46L': 		oObjGroupIndex = 4;oObjIndex = 6;IsImageLarge = IsLarge;break;
    case 'MdmPickOss47L': 			oObjGroupIndex = 4;oObjIndex = 7;IsImageLarge = IsLarge;break;
    case 'MdmBlank48L': 			oObjGroupIndex = 4;oObjIndex = 8;IsImageLarge = IsLarge;break;
	//
    default:oObjNotFound = true;oObjGroupIndex = 4;oObjIndex = 1;break;
  }
  return oObjIndex;
  // }
  //
}
//
// ..................................................................................... _//
// fnElementItemIndexSetFromName
// ...................................... //
function fnElementItemIndexSetFromName(oObjPassed)
{
  	if (!oObjPassed) {
		oObjNotFound = false;
		oObjGroupIndex = 4;oObjIndex = 1;
		return oObjIndex;
	}
	//
  for (imgCn = 0;imgCn < 1+imgMax;imgCn++){
    if (oObjPassed.name = 'img' + imgCn){ return imgCn; }
  }
  return 0;
}
//
script_state = "MdmTemplateScripts loaded";
