// ConsoleStateFormInject

var ConsoleStateFormData;
function MdmPtConsoleFormInit(clearElement, injectElement, passedElement) {
    ConsoleStateFormData = `<!--** MdmPtConsoleForm - Body Console Form Blocks **-->

	<!-- action="DebugFormUpdate();"  -->
	<!-- action="DebugFormUpdate.shtml;"  -->
	<form id="consoleStateForm"
		class="BodyParaLeft layoutBodyColumnType1" 
		method="post"
		action="JavaScript:ConsoleFormElementSync(true);"
		>
		<button type="submit" value="Log" onclick="ConsoleFormElementSync(false)">
			Log
		</button>
		<button type="button" onclick="ConsoleFormElementSync(false)">
			Get
		</button>
		<button type="button" onclick="ConsoleFormElementSync(true)">
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
			<label for="formEventMouseOverEnabled">eventMouseOverEnabled </label>
			<input id="formEventMouseOverEnabled" type="checkbox"
				onchange="DebugParameterSet(this, 'eventMouseOverEnabled', 'Toggle');">
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
				<label for="formDebugTimer">debugTimer </label>
				<input id="formDebugTimer" type="checkbox" onchange="DebugParameterSet(this, 'debugTimer', 'Toggle');">
				<p>
					<!-- * -->
					Trace &amp; Log Move activity: <br>
				</p>
				<label for="formDebugTimerMove">debugTimerMove </label>
				<input id="formDebugTimerMove" type="checkbox"
					onchange="DebugParameterSet(this, 'debugTimerMove', 'Toggle');">
				<p>
					<!-- * -->
					Trace &amp; Log Filters and Transition activity: <br>
				</p>
				<label for="formDebugTimerTransition">debugTimerTransition </label>
				<input id="formDebugTimerTransition" type="checkbox"
					onchange="DebugParameterSet(this, 'debugTimerTransition', 'Toggle');">
				<p>
					<!-- * -->
					Trace &amp; Log Timer activity for individual images: <br>
				</p>
				<label for="formDebugTimerDetail">debugTimerDetail </label>
				<input id="formDebugTimerDetail" type="checkbox"
					onchange="DebugParameterSet(this, 'debugTimerDetail', 'Toggle');">
				<p>
					<!-- * -->
					Trace &amp; Log Mouse Events: <br>
				</p>
				<label for="formDebugLogEvents">debugLogEvents </label>
				<input id="formDebugLogEvents" type="checkbox"
					onchange="DebugParameterSet(this, 'debugLogEvents', 'Toggle');">
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
			<label for="formErrorUseDebugOnError">errorUseDebugOnError </label>
			<input id="formErrorUseDebugOnError" type="checkbox"
				onchange="DebugParameterSet(this, 'errorUseDebugOnError', 'Toggle');">
			<p>
				<!-- * -->
				Enter the debugger after each Log entry: <br>
			</p>
			<label for="formErrorUseDebugOnAll">errorUseDebugOnAll </label>
			<input id="formErrorUseDebugOnAll" type="checkbox" onchange="DebugSetToggleerrorUseDebugOnAll(null, 'Toggle')">
			<p>
				<!-- * -->
				Allow degguger usage: <br>
			</p>
			<label for="formDebugIsOn">debugIsOn </label>
			<input id="formDebugIsOn" type="checkbox" checked onchange="DebugParameterSet(this, 'debugIsOn', 'Toggle');">
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
				<option id="formErrorDebugLevel_errorComment" value="errorComment">errorComment</option>
				<option id="formErrorDebugLevel_errorWarn" value="errorWarn">errorWarn</option>
				<option id="formErrorDebugLevel_errorSevere" value="errorSevere" selected>errorSevere</option>
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
    return ConsoleStateFormData;
}
