// ConsoleStateFormInject

ConsoleFormInitDone = false;
var ConsoleStateFormData;
function ConsoleFormInit(clearElement, injectElement, passedElement) {
	script_state = "MdmDebugConsoleForm:ConsoleFormInit";
	// class="BodyParaLeft layoutBodyColumnType1"
	ConsoleStateFormData = `<!--** MdmPtConsoleForm - Body Console Form Blocks **-->

	<!-- action="DebugFormUpdate();"  -->
	<!-- action="DebugFormUpdate.shtml;"  -->
	<form id="consoleStateForm"
		class="BodyPara layoutBodyColumnType1" 
		onchange="ConsoleFormElementChange(false)"
		method="post"
		action="JavaScript:ConsoleFormElementSync(true);"
		>
		<button id="FormApply" type="submit" value="Log" onclick="ConsoleFormElementSync(true)">
			Apply
		</button>
		<button id="FormDataLoad" type="button" onclick="ConsoleFormElementSync(false)">
			Get
		</button>
		<button id="FormDataApply" type="button" onclick="ConsoleFormElementSync(true)">
			Set
		</button>
		<!-- <input type="submit" value="Send Request"> -->
		<!-- * -->
		<fieldset>
			<legend>Browser Type</legend>
			<!-- * -->
			<label for="formBrowser">Browser </label>
			<select id="formBrowser" onchange="DebugParameterSet(this, 'Browser', this.options[this.selectedIndex].value);">
				<option id="formBrowser_MSIE" value="MSIE">Internet Explorer</option>
				<option id="formBrowser_FireFox" value="FireFox" selected>FireFox</option>
				<option id="formBrowser_Chrome" value="Chrome">Chrome</option>
				<option id="formBrowser_Safari" value="Safari">Safari</option>
				<option id="formBrowser_Opera" value="Opera">Opera</option>
				<option id="formBrowser_Netscape" value="Netscape">Netscape</option>
			</select>
		</fieldset>
		<!-- * -->
		<!-- x ------------------------------------------------------------------------------------- -->
		<fieldset>
			<legend>Event Capture and Page Write Methodology</legend>
			<p>
				<!-- * -->
				Add Elements to DOM: <br>
			</p>
			<label for="formImgLoadUseDOM">imgLoadUseDOM </label>
			<input id="formImgLoadUseDOM" type="checkbox" checked
				onchange="DebugParameterSet(this, 'imgLoadUseDOM', 'Toggle');">
			<p>
				<!-- * -->
				Use innerHTML for content: <br>
			</p>
			<label for="formImgLoadUseInner">imgLoadUseInner </label>
			<input id="formImgLoadUseInner" type="checkbox"
				onchange="DebugParameterSet(this, 'imgLoadUseInner', 'Toggle');">
			<p>
				<!-- * -->
				Single Event Listener (dispatcher): <br>
			</p>
			<label for="formImgLoadUseEventHandler">imgLoadUseEventHandler </label>
			<input id="formImgLoadUseEventHandler" type="checkbox" checked
				onchange="DebugParameterSet(this, 'imgLoadUseEventHandler', 'Toggle');">
			<p>
				<!-- * -->
				Controls clearing of <br>
				bodyImageContainer for testing: <br>
			</p>
			<label for="formImgLoadEventTest">imgLoadEventTest </label>
			<input id="formImgLoadEventTest" type="checkbox"
				onchange="DebugParameterSet(this, 'imgLoadEventTest', 'Toggle');">
		</fieldset>
		<!-- * -->
		<!-- x ------------------------------------------------------------------------------------- -->
		<fieldset>
			<legend>User Interface Features</legend>
			<p>
				Mouse Hover activation of image display:<br>
			</p>
			<label for="formEventMouseOverEnabled">UseLogEventMouseOver </label>
			<input id="formEventMouseOverEnabled" type="checkbox"
				onchange="DebugParameterSet(this, 'UseLogEventMouseOver', 'Toggle');">
		</fieldset>
		<!-- * -->
		<!-- x ------------------------------------------------------------------------------------- -->
		<fieldset>
			<legend>Animation Control</legend>
			<p>
				Object Moves From Origin to Destination: <br>
			</p>
			<label for="formMoveIsOn">moveIsOn </label>
			<input id="formMoveIsOn" type="checkbox" checked onchange="DebugParameterSet(this, 'moveIsOn', 'Toggle');">
			<p>
				<!-- * -->
				Transition and Filters are used: <br>
			</p>
			<label for="formFilterIsOn">filterIsOn </label>
			<input id="formFilterIsOn" type="checkbox" checked onchange="DebugParameterSet(this, 'filterIsOn', 'Toggle');">
			<p>
				<!-- * -->
				Growing image during animation: <br>
			</p>
			<label for="formFilterResizeIsOn">filterResizeIsOn </label>
			<input id="formFilterResizeIsOn" type="checkbox" checked
				onchange="DebugParameterSet(this, 'filterResizeIsOn', 'Toggle');">
			<p>
				<!-- * -->
				Timers use elapsed time instead of a step count: <br>
			</p>
			<label for="formTimerUseTime">timerUseTime </label>
			<input id="formTimerUseTime" type="checkbox" checked
				onchange="DebugParameterSet(this, 'timerUseTime', 'Toggle');">
			<p>
				<!-- * -->
				Menu Thumbnail Small Image Size: <br>
			</p>
			<label for="formOObjImageSizeSmall">oObjImageSizeSmall </label>
			<input id="formOObjImageSizeSmall" type="text" size="10" maxlength="10" value="150"
				onchange="DebugParameterSet(this, 'oObjImageSizeSmall', 'Toggle');">
			<p>
				<!-- * -->
				Menu Thumbnail Large Image Size: <br>
			</p>
			<label for="formOObjImageSizeLarge">oObjImageSizeLarge </label>
			<input id="formOObjImageSizeLarge" type="text" size="10" maxlength="10" value="500"
				onchange="DebugParameterSet(this, 'oObjImageSizeLarge', 'Toggle');">
			<p>
				<!-- * -->
				Menu Thumbnail Small Image Ratio<br>
				of Width to Height (decimal value): <br>
			</p>
			<label for="formOObjImageSizeRatio">oObjImageSizeRatio </label>
			<input id="formOObjImageSizeRatio" type="text" size="5" maxlength="5" value="0.7"
				onchange="DebugParameterSet(this, 'oObjImageSizeRatio', this.value);">
		</fieldset>
		<hr>
		<!-- * -->
		<!-- x ------------------------------------------------------------------------------------- -->
		<fieldset>
			<legend>Timer Control</legend>
			<!-- x ------------------------------------------------------------------------------------- -->
			<fieldset>
				<legend>Basic Controls</legend>
				<!-- * -->
				<p>
					Timer control by Item or Menu Group: <br>
				</p>
				<label for="formTimerMethod">timerMethod </label>
				<select id="formTimerMethod"
					onchange="DebugParameterSet(this, 'timerMethod', this.options[this.selectedIndex].value);">
					<option id="formTimerMethod_timerMethodGroup" value="timerMethodGroup" selected>timerMethodGroup
					</option>
					<option id="formTimerMethod_timerMethodItem" value="timerMethodItem">timerMethodItem</option>
				</select>
				<p>
					<!-- * -->
					Transitions started by Method call<br>
					or by altering filter value or visibility: <br>
				</p>
				<label for="formFilterMethod">filterMethod </label>
				<select id="formFilterMethod"
					onchange="DebugParameterSet(this, 'filterMethod', this.options[this.selectedIndex].value);">
					<option id="formFilterMethod_filterMethodPlay" value="filterMethodPlay" selected>filterMethodPlay
					</option>
					<option id="formFilterMethod_filterMethodVisible" value="filterMethodVisible">filterMethodVisible
					</option>
				</select>
				<p>
					<!-- * -->
					Manner by which images move across the screen: <br>
				</p>
				<label for="formelementMoveMethod">elementMoveMethod </label>
				<select id="formelementMoveMethod"
					onchange="DebugParameterSet(this, 'elementMoveMethod', this.options[this.selectedIndex].value);">
					<option id="formelementMoveMethod_elementMoveMethodDirect" value="elementMoveMethodDirect">elementMoveMethodDirect</option>
					<option id="formelementMoveMethod_elementMoveMethodSlideDown" value="elementMoveMethodSlideDown">elementMoveMethodSlideDown
					</option>
					<option id="formelementMoveMethod_elementMoveMethodSlideSide" value="elementMoveMethodSlideSide">elementMoveMethodSlideSide
					</option>
					<option id="formelementMoveMethod_elementMoveMethodRandom" value="elementMoveMethodRandom" selected>elementMoveMethodRandom
					</option>
				</select>
			</fieldset>
			<!-- * end of Basic Controls -->
			<!-- x ------------------------------------------------------------------------------------- -->
			<fieldset>
				<legend>Logging</legend>
				<p>
					Trace &amp; Log Timer activity: <br>
				</p>
				<label for="formDebugTimer">UseLogTimer </label>
				<input id="formDebugTimer" type="checkbox" onchange="DebugParameterSet(this, 'UseLogTimer', 'Toggle');">
				<p>
					<!-- * -->
					Trace &amp; Log Move activity: <br>
				</p>
				<label for="formDebugTimerMove">UseLogTimerMove </label>
				<input id="formDebugTimerMove" type="checkbox"
					onchange="DebugParameterSet(this, 'UseLogTimerMove', 'Toggle');">
				<p>
					<!-- * -->
					Trace &amp; Log Filters and Transition activity: <br>
				</p>
				<label for="formDebugTimerTransition">UseLogTimerTransition </label>
				<input id="formDebugTimerTransition" type="checkbox"
					onchange="DebugParameterSet(this, 'UseLogTimerTransition', 'Toggle');">
				<p>
					<!-- * -->
					Trace &amp; Log Timer activity for individual images: <br>
				</p>
				<label for="formDebugTimerDetail">UseLogTimerDetail </label>
				<input id="formDebugTimerDetail" type="checkbox"
					onchange="DebugParameterSet(this, 'UseLogTimerDetail', 'Toggle');">
				<p>
					<!-- * -->
					Trace &amp; Log Mouse Events: <br>
				</p>
				<label for="formDebugLogEvents">UseLogEvents </label>
				<input id="formDebugLogEvents" type="checkbox"
					onchange="DebugParameterSet(this, 'UseLogEvents', 'Toggle');">
			</fieldset>
			<!-- * end of Logging -->
			<!-- x ------------------------------------------------------------------------------------- -->
			<fieldset>
				<legend>Timer Move and Transition timing</legend>
				<!-- x ------------------------------------------------------------------------------------- -->
				<fieldset>
					<legend>Move timing</legend>
					<p>
						Duration of movement: <br>
					</p>
					<label for="formElementMoveDuration">elementMoveDuration </label>
					<input id="formElementMoveDuration" type="text" size="3" maxlength="3" value="2"
						onchange="DebugParameterSet(this, 'elementMoveDuration', this.value);">
					<p>
						<!-- * -->
						Number of Steps to accomplish movement: <br>
					</p>
					<label for="formelMoveStepMax">elMoveStepMax </label>
					<input id="formelMoveStepMax" type="text" size="5" maxlength="5" value="80"
						onchange="DebugParameterSet(this, 'elMoveStepMax', this.value);">
					<p>
						<!-- * -->
						Frequency Interval that the Timer fires: <br>
					</p>
					<label for="formElementMoveInterval">elementMoveInterval </label>
					<input id="formElementMoveInterval" type="text" size="5" maxlength="5" value="50"
						onchange="DebugParameterSet(this, 'elementMoveInterval', this.value);">
					<p>
						<!-- * -->
						Delay before the Timer Starts: <br>
					</p>
					<label for="formElementMoveDelay">elementMoveDelay </label>
					<input id="formElementMoveDelay" type="text" size="5" maxlength="5" value="0"
						onchange="DebugParameterSet(this, 'elementMoveDelay', this.value);">
				</fieldset>
				<!-- * end of Move timing -->
				<!-- x ------------------------------------------------------------------------------------- -->
				<fieldset>
					<legend>Transition timing</legend>
					<p>
						Duration of transition: <br>
					</p>
					<label for="formFilterDuration">filterDuration </label>
					<input id="formFilterDuration" type="text" size="3" maxlength="3" value="2"
						onchange="DebugParameterSet(this, 'filterDuration', this.value);">
					<p>
						<!-- * -->
						Number of Steps to accomplish transition: <br>
					</p>
					<label for="formFilterStepMax">filterStepMax </label>
					<input id="formFilterStepMax" type="text" size="5" maxlength="5" value="80"
						onchange="DebugParameterSet(this, 'filterStepMax', this.value);">
					<p>
						<!-- * -->
						Frequency Interval that the Timer fires: <br>
					</p>
					<label for="formFilterInterval">filterInterval </label>
					<input id="formFilterInterval" type="text" size="5" maxlength="5" value="200"
						onchange="DebugParameterSet(this, 'filterInterval', this.value);">
					<p>
						<!-- * -->
						Delay before the Timer Starts: <br>
					</p>
					<label for="formFilterDelay">filterDelay </label>
					<input id="formFilterDelay" type="text" size="5" maxlength="5" value="250"
						onchange="DebugParameterSet(this, 'filterDelay', this.value);">
					<p>
						<!-- * -->
						Duration of transition based on Move Duration:<br>
						Note: Usually filterDuration is the same as
						elementDuration plus an adjustment. <br>
						A non-zero value indicates this
						feature is on. Usually this adjustment
						is one additional second.<br>
					</p>
					<label for="formFilterDurationAdjustment">filterDurationAdjustment </label>
					<input id="formFilterDurationAdjustment" type="text" size="3" maxlength="3" value="1"
						onchange="DebugParameterSet(this, 'filterDurationAdjustment', this.value);">
				</fieldset>
				<!-- * end of Transition timing -->
			</fieldset>
			<!-- * end of Timer Move and Transition timing -->
		</fieldset>
		<!-- * end of Timer Control -->
		<!-- x ------------------------------------------------------------------------------------- -->
		<fieldset>
			<legend>Debugger Control</legend>
			<p>
				Enter the debugger when errors occur: <br>
			</p>
			<label for="formErrorUseDebugOnError">UseDebugOnError </label>
			<input id="formErrorUseDebugOnError" type="checkbox"
				onchange="DebugParameterSet(this, 'UseDebugOnError', 'Toggle');">
			<p>
				<!-- * -->
				Enter the debugger after each Log entry: <br>
			</p>
			<label for="formErrorUseDebugOnAll">UseDebugOnAll </label>
			<input id="formErrorUseDebugOnAll" type="checkbox" onchange="DebugSetToggleUseDebugOnAll(null, 'Toggle')">
			<p>
				<!-- * -->
				Allow degguger usage: <br>
			</p>
			<label for="formDebugIsOn">UseDebug </label>
			<input id="formDebugIsOn" type="checkbox" checked onchange="DebugParameterSet(this, 'UseDebug', 'Toggle');">
			<p>
				<!-- * -->
				Display debug messages in an alert box: <br>
			</p>
			<label for="formDebugDoAlert">debugDoAlert </label>
			<input id="formDebugDoAlert" type="checkbox" onchange="DebugParameterSet(this, 'debugDoAlert', 'Toggle');">
			<p>
				<!-- * -->
				Error Severity that causes the debugger to be invoked: <br>
			</p>
			<label for="formErrorDebugLevel">errorDebugLevel </label>
			<select id="formErrorDebugLevel"
				onchange="DebugParameterSet(this, 'errorDebugLevel', this.options[this.selectedIndex].value);">
				<option id="formErrorDebugLevel_errorDidNotOccur" value="errorDidNotOccur">errorDidNotOccur</option>
				<option id="formErrorDebugLevel_errorIsComment" value="errorComment">errorComment</option>
				<option id="formErrorDebugLevel_errorIsWarning" value="errorWarn">errorWarn</option>
				<option id="formErrorDebugLevel_errorIsSevere" value="errorSevere" selected>errorSevere</option>
				<option id="formErrorDebugLevel_errorIsFatal" value="errorIsFatal">errorIsFatal</option>
				</select>
		</fieldset>
		<!-- * end of Debugger Control -->
		<!-- x ------------------------------------------------------------------------------------- -->
		<fieldset>
			<legend>Page Load Optimaization</legend>
			<p>
				Delay Java initialization functions<br>
				until after Page Load: <br>
			</p>
			<label for="formJavaLoadDelay">loadDelayJava </label>
			<input id="formJavaLoadDelay" type="checkbox" checked
				onchange="DebugParameterSet(this, 'loadDelayJava', 'Toggle');">
			<p>
				<!-- * -->
				Delay downloading Body Content images<br>
				until after Page Load: <br>
			</p>
			<label for="formBodyImageLoadDelay">loadDelayBodyImage </label>
			<input id="formBodyImageLoadDelay" type="checkbox" checked
				onchange="DebugParameterSet(this, 'loadDelayBodyImage', 'Toggle');">
			<p>
				<!-- * -->
				Delay loading Menu Thumbnail images<br>
				until after Page Load: <br>
			</p>
			<label for="formMenuImageLoadDelay">loadDelayMenuImage </label>
			<input id="formMenuImageLoadDelay" type="checkbox" checked
				onchange="DebugParameterSet(this, 'loadDelayMenuImage', 'Toggle');">
		</fieldset>
		<!-- * end of Page Load Optimaization -->
		<!-- * -->
		<hr>
	</form>
	<!--** End of Body Console Form Blocks **-->
    `;
	if (!passedElement || clearElement) {
		passedElement = document.createElement("div");
	}
	if (injectElement) {
		passedElement.innerHTML += ConsoleStateFormData;
	}
	ConsoleFormInitDone = true;
	return ConsoleStateFormData;
}

// Sycn form element with page internal settings or vice versa (fromForm)
function ConsoleFormElementSync(fromForm) {
	script_state = "MdmDebugConsoleForm:ConsoleFormInit";

	var tempSelected = false;
	// if (!consoleStateFormValid) { return; } // It's off or omitted
	var elementObject = document.createElement('input');

	try {
		// Toggled Variables
		// ...................................... //
		script_state += ": Check form exists";
		consoleStateFormValid = true;
		elementObject = document.getElementById('FormApply');
		// Is the form accessible?
		if (elementObject) {
			elementObject.style.backgroundColor = 'yellow';
		} else {
			ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, elementObject, consoleStateForm,
				"Console Form cannot be accessed or synced", errorIsWarning, false, false);
			consoleStateFormValid = false; // turn it off
			return;
		}
		// ** Javascript Parameter Init Blocks **
		// Browser
		// browserIsFF = false;
		script_state += ", Javascript Parameter Init Blocks";
		elementObject = document.getElementById('formBrowser');
		if (fromForm) {
			if (elementObject.value) { imgLoadUseEventHandler = true; } else { imgLoadUseEventHandler = false; }
		} else {
			if (imgLoadUseEventHandler) { elementObject.value = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formImgLoadUseInner');
		if (fromForm) {
			if (elementObject.checked) { imgLoadUseInner = true; } else { imgLoadUseInner = false; }
		} else {
			if (imgLoadUseInner) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formImgLoadEventTest');
		if (fromForm) {
			if (elementObject.checked) { imgLoadEventTest = true; } else { imgLoadEventTest = false; }
		} else {
			if (imgLoadEventTest) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formImgLoadUseDOM');
		if (fromForm) {
			if (elementObject.checked) { imgLoadUseDOM = true; } else { imgLoadUseDOM = false; }
		} else {
			if (imgLoadUseDOM) { elementObject.checked = true; } else { elementObject.checked = false; }
		}

		// User Interface Features
		// ...................................... //

		// Control image display using mouse hover
		script_state += ", Using mouse hover";
		elementObject = document.getElementById('formEventMouseOverEnabled');
		if (fromForm) {
			if (elementObject.checked) { UseLogEventMouseOver = true; } else { UseLogEventMouseOver = false; }
		} else {
			if (UseLogEventMouseOver) { elementObject.checked = true; } else { elementObject.checked = false; }
		}

		// Animation Control
		// ...................................... //
		script_state += ", Animation Control";
		elementObject = document.getElementById('formMoveIsOn');
		if (fromForm) {
			if (elementObject.checked) { moveIsOn = true; } else { moveIsOn = false; }
		} else {
			if (moveIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formFilterIsOn');
		if (fromForm) {
			if (elementObject.checked) { filterIsOn = true; } else { filterIsOn = false; }
		} else {
			if (filterIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formFilterResizeIsOn');
		if (fromForm) {
			if (elementObject.checked) { filterResizeIsOn = true; } else { filterResizeIsOn = false; }
		} else {
			if (filterResizeIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formTimerUseTime');
		if (fromForm) {
			if (elementObject.checked) { timerUseTime = true; } else { timerUseTime = false; }
		} else {
			if (timerUseTime) { elementObject.checked = true; } else { elementObject.checked = false; }
		}

		// Timer and Event Logging
		// ...................................... //
		script_state += ", Timer and Event Logging";
		elementObject = document.getElementById('formDebugTimer');
		if (fromForm) {
			if (elementObject.checked) { UseLogTimer = true; } else { UseLogTimer = false; }
		} else {
			if (UseLogTimer) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formDebugTimerMove');
		if (fromForm) {
			if (elementObject.checked) { UseLogTimerMove = true; } else { UseLogTimerMove = false; }
		} else {
			if (UseLogTimerMove) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formDebugTimerTransition');
		if (fromForm) {
			if (elementObject.checked) { UseLogTimerTransition = true; } else { UseLogTimerTransition = false; }
		} else {
			if (UseLogTimerTransition) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formDebugTimerDetail');
		if (fromForm) {
			if (elementObject.checked) { UseLogTimerDetail = true; } else { UseLogTimerDetail = false; }
		} else {
			if (UseLogTimerDetail) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formDebugLogEvents');
		if (fromForm) {
			if (elementObject.checked) { UseLogEvents = true; } else { UseLogEvents = false; }
		} else {
			if (UseLogEvents) { elementObject.checked = true; } else { elementObject.checked = false; }
		}

		// Debugger Control
		// ...................................... //
		script_state += ", Debugger Control";
		elementObject = document.getElementById('formErrorUseDebugOnError');// enter debugger on errors
		if (fromForm) {
			if (elementObject.checked) { UseDebugOnError = true; } else { UseDebugOnError = false; }
		} else {
			if (UseDebugOnError) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formErrorUseDebugOnAll');// enter debugger after any message
		if (fromForm) {
			if (elementObject.checked) { UseDebugOnAll = true; } else { UseDebugOnAll = false; }
		} else {
			if (UseDebugOnAll) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formDebugIsOn');
		if (fromForm) {
			if (elementObject.checked) { UseDebug = true; } else { UseDebug = false; }
		} else {
			if (UseDebug) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formDebugDoAlert');
		if (fromForm) {
			if (elementObject.checked) { debugDoAlert = true; } else { debugDoAlert = false; }
		} else {
			if (debugDoAlert) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//

		// Page Load Optimaization
		// ...................................... //
		script_state += ", Page Load Optimaization";
		elementObject = document.getElementById('formJavaLoadDelay');
		if (fromForm) {
			if (elementObject.checked) { loadDelayJava = true; } else { loadDelayJava = false; }
		} else {
			if (loadDelayJava) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formBodyImageLoadDelay');
		if (fromForm) {
			if (elementObject.checked) { loadDelayBodyImage = true; } else { loadDelayBodyImage = false; }
		} else {
			if (loadDelayBodyImage) { elementObject.checked = true; } else { elementObject.checked = false; }
		}
		//
		elementObject = document.getElementById('formMenuImageLoadDelay');
		if (fromForm) {
			if (elementObject.checked) { loadDelayMenuImage = true; } else { loadDelayMenuImage = false; }
		} else {
			if (loadDelayMenuImage) { elementObject.checked = true; } else { elementObject.checked = false; }
		}

		// Fields with values
		// ...................................... //
		tempSelected = false;
		elementObject = document.createElement('option');

		// Browser
		// ...................................... //
		script_state += ", Browser";
		if (fromForm) { BrowserVsReset(); }
		//
		elementObject = document.getElementById('formBrowser_MSIE');
		if (fromForm) {
			if (elementObject.selected) { browserType = "MSIE"; browserIsIE = true; tempSelected = true; }
		} else {
			if (browserIsIE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formBrowser_Chrome');
		if (fromForm) {
			if (elementObject.selected) { browserType = "Chrome"; browserIsIE = true; tempSelected = true; }
		} else {
			if (browserIsCH) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formBrowser_FireFox');
		if (fromForm) {
			if (elementObject.selected) { browserType = "Firefox"; browserIsFF = true; tempSelected = true; }
		} else {
			if (browserIsFF) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formBrowser_Safari');
		if (fromForm) {
			if (elementObject.selected) { browserType = "Safari"; browserIsSA = true; tempSelected = true; }
		} else {
			if (browserIsSA) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formBrowser_Opera');
		if (fromForm) {
			if (elementObject.selected) { browserType = "Opera"; browserIsOP = true; tempSelected = true; }
		} else {
			if (browserIsOP) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formBrowser_Netscape');
		if (fromForm) {
			if (elementObject.selected) { browserType = "Netscape"; browserIsIE = true; tempSelected = true; }
		} else {
			if (browserIsNE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		// default
		if (!tempSelected) { browserType = "Firefox"; browserIsFF = true; document.getElementById('formBrowser_FireFox').selected = true; }
		//
		tempSelected = false;

		// Debug Control
		// ...................................... //
		script_state += ", Debug Control";
		tempSelected = false;
		elementObject = document.getElementById('formErrorDebugLevel_errorDidNotOccur');
		if (fromForm) {
			if (elementObject.selected) { errorDebugLevel = errorDidNotOccur; tempSelected = true; }
		} else {
			if (errorDebugLevel == errorDidNotOccur) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formErrorDebugLevel_errorIsComment');
		if (fromForm) {
			if (elementObject.selected) { errorDebugLevel = errorIsComment; tempSelected = true; }
		} else {
			if (errorDebugLevel == errorIsComment) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formErrorDebugLevel_errorIsWarning');
		if (fromForm) {
			if (elementObject.selected) { errorDebugLevel = errorIsWarning; tempSelected = true; }
		} else {
			if (errorDebugLevel == errorIsWarning) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formErrorDebugLevel_errorIsSevere');
		if (fromForm) {
			if (elementObject.selected) { errorDebugLevel = errorIsSevere; tempSelected = true; }
		} else {
			if (errorDebugLevel == errorIsSevere) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formErrorDebugLevel_errorIsFatal');
		if (fromForm) {
			if (elementObject.selected) { errorDebugLevel = errorIsFatal; tempSelected = true; }
		} else {
			if (errorDebugLevel == errorIsFatal) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		// default when not selected/set
		// ...................................... //
		if (!tempSelected) {
			document.getElementById('formErrorDebugLevel_errorIsSevere').selected = true;
			errorDebugLevel = errorIsSevere;
		}
		//
		elementObject = document.createElement('input');

		// Menu Image Size
		// ...................................... //
		script_state += ", Image Size";
		elementObject = document.getElementById('formOObjImageSizeSmall');
		if (fromForm) {
			tmp = parseInt(elementObject.value);
			if (tmp) { oObjImageSizeSmall = tmp; }
		} else {
			elementObject.value = oObjImageSizeSmall;
		}
		//
		elementObject = document.getElementById('formOObjImageSizeLarge');
		if (fromForm) {
			tmp = parseInt(elementObject.value);
			if (tmp) { oObjImageSizeLarge = tmp; }
		} else {
			elementObject.value = oObjImageSizeLarge;
		}
		//
		elementObject = document.getElementById('formOObjImageSizeRatio');
		if (fromForm) {
			tmp = parseInt(elementObject.value);
			if (tmp) { oObjImageSizeRatio = tmp; }
		} else {
			elementObject.value = oObjImageSizeRatio;
		}

		// Animation Control
		// ...................................... //
		// Movement Duration
		script_state += ", Animation: Movement Duration";
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

		// Filter / Transition Duration
		// ...................................... //
		script_state += ", Animation: Filter Transition Duration";
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

		// Timer control by Item or Menu Group
		// ...................................... //
		script_state += ", Animation: Timers by Item or Group";
		tempSelected = false;
		elementObject = document.getElementById('formTimerMethod_timerMethodGroup');
		if (fromForm) {
			if (elementObject.selected) { timerMethod = timerMethodGroup; tempSelected = true; }
		} else {
			if (timerMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formTimerMethod_timerMethodItem');
		if (fromForm) {
			if (elementObject.selected) { timerMethod = timerMethodItem; tempSelected = true; }
		} else {
			if (timerMethod == timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		// default
		if (!tempSelected) { document.getElementById('formTimerMethod_timerMethodGroup').selected = true; }

		// Transitions started by Method call or by altering filter value or visibility
		// ...................................... //
		script_state += ", Animation: Filter Start method";
		tempSelected = false;
		elementObject = document.getElementById('formFilterMethod_filterMethodPlay');
		if (fromForm) {
			if (elementObject.selected) { filterMethod = timerMethodGroup; tempSelected = true; }
		} else {
			if (filterMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formFilterMethod_filterMethodVisible');
		if (fromForm) {
			if (elementObject.selected) { filterMethod = filterMethodVisible; tempSelected = true; }
		} else {
			if (filterMethod == filterMethodVisible) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		// default
		if (!tempSelected) { document.getElementById('formFilterMethod_filterMethodPlay').selected = true; }

		// Manner by which images move across the screen
		// ...................................... //
		script_state += ", Element movement";
		tempSelected = false;
		elementObject = document.getElementById('formelementMoveMethod_elementMoveMethodDirect');
		if (fromForm) {
			if (elementObject.selected) { elementMoveMethod = elementMoveMethodDirect; tempSelected = true; }
		} else {
			if (elementMoveMethod == elementMoveMethodDirect) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formelementMoveMethod_elementMoveMethodSlideDown');
		if (fromForm) {
			if (elementObject.selected) { elementMoveMethod = elementMoveMethodSlideDown; tempSelected = true; }
		} else {
			if (elementMoveMethod == elementMoveMethodSlideDown) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formelementMoveMethod_elementMoveMethodSlideSide');
		if (fromForm) {
			if (elementObject.selected) { elementMoveMethod = elementMoveMethodSlideSide; tempSelected = true; }
		} else {
			if (elementMoveMethod == elementMoveMethodSlideSide) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		//
		elementObject = document.getElementById('formelementMoveMethod_elementMoveMethodRandom');
		if (fromForm) {
			if (elementObject.selected) { elementMoveMethod = elementMoveMethodRandom; tempSelected = true; }
		} else {
			if (elementMoveMethod == elementMoveMethodRandom) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
		}
		// default
		if (!tempSelected) { document.getElementById('formelementMoveMethod_elementMoveMethodRandom').selected = true; }

		// Reset FormApply button state
		// ...................................... //
		script_state += ", Reset FormApply button state";
		elementObject = document.getElementById('FormApply');
		if (elementObject) {
			elementObject.style.backgroundColor = 'white';
		}

		consoleFormChanged = false;
		script_state = "Completed without error";

	} catch (consoleStateFormErr) {
		// Errors:
		// ...................................... //
		ErrorCaught(consoleStateFormErr, script_state, errorIsSevere);
		// script_state = "Form sync: aborted wit an error";
	} finally {
		// ...................................... //
		// try {
		if (UseLogAlert) {
			MessageLog(null, DoNotUseDebug, DoUseSingleLine,
				script_state + ' Console Form synchonized.',
				'MdmDebugConsole: ConsoleFormElementSync', 1211, 0, null, null,
				errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		// } catch (consoleStateFormErr) {
		// 	script_state = "Form sync: Can't access FormApply button";
		// 	ErrorCaught(consoleStateFormErr, script_state, errorIsSevere);
		// 	// script_state = "Form sync: aborted wit an error";

		// }
	}
}