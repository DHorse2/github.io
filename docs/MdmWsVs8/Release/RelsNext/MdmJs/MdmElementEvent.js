
// // Section Mouse Events function (s)
// // ...................................... //
// // Section Body Content Mouse Events function (s)
// // ...................................... //
// // Image Standard Mouse Events
// // Mouse
// // 		ElementEventMouseOver
// //		    ElementEventMouseOut
// //		    ElementEventClick

// // SectionBlock Events (Mouse, load, error)
// // ...................................... //
// var LastId = '';
// var LastTouchedId = '';
// //
// var eventParentName = new String();
// //
// var eventType;
// var eventEventObject;
// //
// var errorElement;
// var errorElementSource;

// // SectionBlock Menu Mouse Events
// // ...................................... //
// var eventCn = 0;
// var eventCurr = null;
// var eventObject = null;
// var eventCurrId = '';
// var eventType = '';
// //
// var eventLast;
// var eventLastObject;
// var eventLastId = '';
// var eventLastRootId = '';
// //
// var eventCurrRootObj;

// Mouse Over
// ...................................... //
function ElementEventMouseOver(elementCurr) {
	ElementItemIndexSetFromObj(elementCurr);
	if (oObjNotFound) {
		return;
	}
	// if (eventMenuImageCn > imgUsedCn) { return; }
	imgMouseHover[eventMenuImageCn] = 1;
	if (imgFocus == eventMenuImageCn) {
		//    eventMenuImage.src = eventMenuImage.name + '/' + eventMenuImage.name + 'fh.gif';
	}
	else {
		//    eventMenuImage.src = eventMenuImage.name + '/' + eventMenuImage.name + 'bh.gif';
	}
	var tempTop = eventMenuImage.parentNode.top;
	var tempLeft = eventMenuImage.parentNode.left;
	if ((UseLog || UseDebug)
		&& UseLogEvents) {
		MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
			'Move.. Over occured on content image'
			+ ' set successfully! Random filter # ' + filterIndex + ' '
			+ charNewLineTag + 'top: ' + tempTop
			+ charNewLineTag + 'Left: ' + tempLeft,
			'MdmElementEvent:ElementEventMouseOver', 65, 0, null, null,
			errorIsComment, errorDoNotDisplayTag, UseAlert);
		//
	}
}
// Mouse Out
// ...................................... //
function ElementEventMouseOut(eventMenuImage) {
	eventMenuImageCn = oObjIndexSetMenuImageCn(eventMenuImage);
	// if (eventMenuImageCn > imgUsedCn) { return; }
	imgMouseHover[eventMenuImageCn] = 0;
	if (imgFocus == eventMenuImageCn) {
		//    eventMenuImage.src = eventMenuImage.name + '/' + eventMenuImage.name + 'f.gif';
	} else {
		//    eventMenuImage.src = eventMenuImage.name + '/' + eventMenuImage.name + 'b.gif';
	}
}
// Mouse Click
// ...................................... //
function ElementEventClick(eventMenuImage) {
	eventMenuImageCn = oObjIndexSetMenuImageCn(eventMenuImage);
	// if (eventMenuImageCn > imgUsedCn) { return; }
	if (imgFocus == eventMenuImageCn) { return; }
	// old folder
	imgFocusOld = imgFocus;
	//  eventMenuImageOld = oObjIndexSeteventMenuImage(imgFocusOld);
	//  eventMenuImageOld.src = eventMenuImageOld.name + '/' + eventMenuImageOld.name + 'b.gif';
	// new front folder
	//  eventMenuImageCn = oObjIndexSetMenuImageCn(eventMenuImage);
	imgFocus = eventMenuImageCn;
	//  eventMenuImage.src = eventMenuImage.name + '/' + eventMenuImage.name + 'f.gif';
	// load new page into frame
	//  imgframe.src = eventMenuImage.name + '/' + eventMenuImage.name + '.htm';
	//  document.frames.item.
	//  img0.src = eventMenuImage.name + 'Larger.gif';
	//  img0text.src = eventMenuImage.name + 'text.txt';
	imgSelect = eventMenuImageCn;
	if ((UseLog || UseDebug)
		&& UseLogEvents) {
		MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
			'Move.. Over occured on content image'
			+ charNewLineTag + 'Menu Image Name: ' + eventMenuImage.name
			+ charNewLineTag + 'Image number selected: ' + eventMenuImageCn,
			'MdmElementEvent:ElementEventClick', 113, 0, null, null,
			errorIsComment, errorDoNotDisplayTag, UseAlert);
		//
	}
	//  document.parentWindow.parent.imgSelect = eventMenuImageCn;
	//  document.parentWindow.tabframe.imgSelect = eventMenuImageCn;
}
// Mouse Element Event Mouse
// ...................................... //
var eventTextColor;
var eventTextColorBg;
function ElementEventMouse(e) {
	script_state += ":Mouse";

	if (!imgLoadUseEventHandler && !imgLoadEventTest) {
		MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
			'You have conflicting event handling options...',
			'MdmElementEvent:ElementEventMouse', 126, 0, null, null,
			errorIsSevere, errorDoNotDisplayTag, UseAlert);
	}
	if (loadJavaFirst) { ElementObjectCreate(); }
	if (loadFirsteventMenuImage) { eventmenuImageGroupInitAll(); }
	//
	ElementEventCurrSet(e);
	ElementEventCurrRootObjSet();
	//
	ElementItemIndexSetFromObj(eventCurrRootObj);
	//
	script_state += ":" + eventType + ' (' + oObjGroupIndex + ', ' + oObjIndex + ')';
	//
	if (!oObjNotFound) {
		var oObject =
			ElementItemGetAllFromIndex(IsImageLarge, "", 0, oObjGroupIndex, oObjIndex);
		// if (oObject.oObjValid) {
		if (IsImageLarge) {
			oObjNext = oObject.oObjLarge;
			oObjNextImage = oObject.oObjImageLarge;
			oObjNextParent = oObject.oObj;
			oObjNextLarge = oObject.oObjLarge;
			oObjLockedPassed = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
		} else {
			oObjNext = oObject.oObj;
			oObjNextImage = oObject.oObjImage;
			oObjNextParent = oObject.oObjParent;
			oObjNextLarge = oObject.oObjLarge;
		}
		//
		// }
		// ...................................... //
		var HideImage = false;
		var HideImageLarge = false;
		var NextIsImageLarge = IsImageLarge;
		if (eventType == 'mousedown') { NextIsImageLarge = IsLarge; }
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
		var oObjLocked; // MenuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge]
		var IgnoreLock;
		//
		// ...................................... //
		switch (eventType) {
			// ...................................... //
			case 'mousedown':
				switch (IsImageLarge) {
					// ...................................... //
					case IsSmall:
						// Small
						startIndex = oObjIndex;
						endIndex = oObjIndex;
						//
						// ElementItemToggleId(  true true true (IsImagelarge LockValue IgnoreLock)
						NextIsImageLarge = IsLarge; oObjLocked = true; IgnoreLock = true;
						//
						ElementItemToggleId(
							NextIsImageLarge,
							oObject.oObj.id, oObject.oObjImageLarge.id, oObject.oObjLarge.id,
							oObjImageSizeLarge,
							oObjGroupIndex, oObjIndex,
							oObjLocked, IgnoreLock);
						break;
					// ...................................... //
					case IsLarge:
					default:
						break;
				}
				break;
			// ...................................... //
			case 'mouseout':
				if (TimerStartMoveBusy(IsImageLarge, oObject.oObj.id + 'Move', oObjGroupIndex, oObjIndex, UseLogEvents)) { return; }
				if (ElementEventCheckDuplicate(UseLogEvents)) { return; }
				switch (IsImageLarge) {
					// ...................................... //
					case IsSmall:
						// Small
						// ElementItemHide
						NextIsImageLarge = IsSmall; oObjLocked = false; IgnoreLock = false;
						ElementItemHide(
							NextIsImageLarge,
							oObject.oObjParent, oObject.oObjImage, oObject.oObj, oObject.oObjLarge,
							oObjGroupIndex, oObjIndex,
							oObjLocked, oObjLocked);
						break;
					// ...................................... //
					case IsLarge:
					default:
						// Large
						// ElementItemHide
						NextIsImageLarge = IsLarge; oObjLocked = MenuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge]; IgnoreLock = false;
						ElementItemHide(
							NextIsImageLarge,
							oObject.oObj, oObject.oObjImageLarge, oObject.oObjLarge, oObject.oObjLarge,
							oObjGroupIndex, oObjIndex,
							oObjLocked, IgnoreLock);
						break;
				}
				break;
			// ...................................... //
			case 'mouseover':
				if (TimerStartMoveBusy(IsImageLarge, oObj.id + 'Move', oObjGroupIndex, oObjIndex, UseLogEvents)) { return; }
				if (ElementEventCheckDuplicate(UseLogEvents)) { return; }
				if (UseAnimation) { return; }
				switch (IsImageLarge) {
					// ...................................... //
					case IsSmall:
						// Small
						startIndex = 1;
						endIndex = oObjIndex;
						//
						// ElementGroupShow(';false false true
						NextIsImageLarge = IsSmall; oObjLocked = MenuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge]; IgnoreLock = true;
						//
						ElementGroupShow(
							NextIsImageLarge,
							oObject.oObjParent.id, oObject.oObjImage.id, oObject.oObj.id,
							oObjImageSizeLarge,
							oObjGroupIndex, oObjIndex, 1,
							oObjLocked, IgnoreLock);
						break;
					// ...................................... //
					case IsLarge:
					default:
						// Large
						/*
						// ElementItemShow(';Small false Curr false
						NextIsImageLarge = IsSmall; oObjLocked = MenuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];IgnoreLock = false;
						//
						ElementItemShow(
								NextIsImageLarge,
								oObject.oObjParent, oObject.oObjImage, oObject.oObj, oObject.oObjLarge,
								oObjImageSizeSmall,
								oObjGroupIndex, oObjIndex,
								oObjLocked, IgnoreLock);
								//
						*/
						// if the small is locked then the large is locked...
						// ElementItemShow(';Large true Curr false (IsImagelarge LockValue IgnoreLock)
						NextIsImageLarge = IsLarge; oObjLocked = MenuImageLocked[oObjGroupIndex][oObjIndex][IsSmall]; IgnoreLock = false;
						// Bring to front or show
						ElementItemShow(
							NextIsImageLarge,
							oObject.oObj, oObject.oObjImageLarge, oObject.oObjLarge, oObject.oObjLarge,
							oObjImageSizeLarge,
							oObjGroupIndex, oObjIndex,
							oObjLocked, IgnoreLock);
						break;
				}
				break;
			default:
				break;
		}
	}
	if ((UseLog || UseDebug)
		&& UseLogEvents) {
		ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
			'Mouse Event', '', '',
			'ElementEventMouse', 141);
	}
}
// ElementEventCurrRootObjSet
// ...................................... //
function ElementEventCurrRootObjSet() {
	eventCurrRootObj = eventObject;
	// 8) todo currently the parent is limited to navigate upward three nodes.
	// 8) todo and must be below the Body container level
	// 8) todo you should be able to specify the tag or id to stop at (ie Div vs Div29)
	tmpMax = 3; loopContinue = true;
	while (loopContinue) {
		if (eventCurrRootObj) {
			if (eventCurrRootObj.parentNode) {
				if (eventCurrRootObj.parentNode.id) {
					// i.e. 'BodyImageContainer'
					// 'Body*' images behave differently
					//  or  'BodyImageContainer', 'BodyMenuLayout1'.
					if (eventCurrRootObj.parentNode.id.substring(0, 4) == 'Body') {
						// if ((eventCurrRootObj.parentNode.id).substring(0, 4) = 'Body') {
						loopContinue = false;
					} else {
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
// ElementEventLastSet
// ...................................... //
function ElementEventLastSet(e) {
	eventLast = eventCurr;
	eventLastObject = (eventCurr.srcElement || eventCurr.target);
	eventLastId = eventLastObject.id;
	eventLastRootId = eventCurrRootObj.id;
	//
}
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
// ElementEventCheckDuplicate
// ...................................... //
function ElementEventCheckDuplicate(UseLog) {
	if (!eventCurrRootObj) { return false; }
	if (!eventCurrRootObj.id) { return false; }
	var IsDuplicate = false;
	var DoStoreLast = true;
	switch (eventType) {
		// ...................................... //
		case 'mousedown':
			break;
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
		default:
			IsDuplicate = false; break;
	}
	//
	if (UseLog && (UseLogEvents || timerMoveBusy)
		&& IsDuplicate && UseLogEventDuplicates) {
		ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
			'Duplicate Event', '', '',
			'ElementEventCheckDuplicate', 0);
	}
	//
	if (DoStoreLast) { ElementEventLastSet(eventCurr); }
	return IsDuplicate;
}
// ElementItemHideId
// ...................................... //
function ElementEventFromHtmlCheck(e, UseLog) {
	// load and validate event and objects
	// if (!imgLoadUseEventHandler) {
	eventCurr = null;
	ElementEventCurrSet(eventCurr);
	// set eventCurrRootObj
	ElementEventCurrRootObjSet();
	// look for duplicate mouse over events (bubbling)
	if (ElementEventCheckDuplicate(UseLog)) { return false; } else { return true; }
	// } else { return true; }
}
// ElementItemHideId
// ...................................... //
function ElementEventGet(e) {
	// load and validate event and objects
	eventCurr = e || window.event;
}
// Clone (copy) events from source to target element
// ...................................... //
// You can maybe use getEventListeners on nodes? Don't know how the support is, or if it's only supported in the console?
function ElementEventClone(nodeSource, nodeTarget) {
	try {
		// Clone the node, don't clone the childNodes right now...
		var events = getEventListeners(nodeSource);

		for (var p in events) {
			// All events is in an array so iterate that array:
			events[p].forEach(function (ev) {
				// {listener: Function, useCapture: Boolean}
				nodeTarget.addEventListener(p, ev.listener, ev.useCapture);
			});
		}
		// Also do the same to all childNodes and append them.
		if (nodeSource.childNodes.length) {
			[].slice.call(nodeSource.childNodes).forEach(function (nodeSource) {
				nodeTarget.appendChild(cloneMassive(nodeSource));
			});
		}
	} catch (error) {

	}
	return nodeTarget;
}

// Section Other function (s) (empty)
// Section Window function (s)
// SectionBlock Window Events and Methods function (s)
// Event Add
// ...................................... //
function ElementEventAdd(eventNamePassed, eventFunctionPassed, eventFunctionNamePassed, eventFunctionArgsPassed, oObjPassed) {
	var eventAddSuccess;
	var eventArgumentsArr = new Array();
	var tempfunc;
	var temp;
	// todo - this is OLD variant. I think.
	if (!browserEventsIsFf) {
		temp = eventFunctionNamePassed + eventFunctionArgsPassed;
		eval('tempfunc = function() { ' + temp + '; }');
		eventAddSuccess = oObjPassed.attachEvent(eventNamePassed, tempfunc);
	} else {
		// see note a few lines below.
		// if (true == false) {
		// 	oObjPassed.addEventListener(
		// 			eventNamePassed,
		//     		eventFunctionPassed.apply( {
		//     	        oObjNextId: 'Tricia'
		//             } ),
		// 			false );
		// 	//
		// } else if (true == false) {
		// 	// (eval( 'tempfunc = function() { ' + temp + ';tempfunc; }' )),
		// 	//
		// } else {
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
		// }
	}
	//
	return oObjPassed;
}
script_state = "Mdm Standard Element Event functions loaded.";
if (debugLoadIsOn) { debugger; }
