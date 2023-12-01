
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
	if ((UseLog || UseDebug)
		&& UseLogEvents) {
		MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
			'Move.. Over occured on content image'
			+ ' set successfully! Random filter # ' + filterIndex + ' '
			+ charNewLineTag + 'top: ' + tempTop
			+ charNewLineTag + 'Left: ' + tempLeft,
			'MdmElementEvent:ElementEventMouseOver', 65, 0, null, null,
			errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
		//
	}
}
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
	if ((UseLog || UseDebug)
		&& UseLogEvents) {
		MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
			'Move.. Over occured on content image'
			+ charNewLineTag + 'Menu Image Name: ' + menuImage.name
			+ charNewLineTag + 'Image number selected: ' + menuImageCn,
			'MdmElementEvent:ElementEventClick', 113, 0, null, null,
			errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
		//
	}
	//  document.parentWindow.parent.imgSelect = menuImageCn;
	//  document.parentWindow.tabframe.imgSelect = menuImageCn;
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
			errorIsSevere, errorDoNotDisplayTag, DoUseAlert);
	}
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	ElementEventCurrSet(e);
	ElementEventCurrRootObjSet();
	//
	ElementItemIndexSetFromObj(eventCurrRootObj);
	//
	script_state += ":" + eventType + ' (' + oObjGroupIndex + ', ' + oObjIndex + ')';
	//
	if (!oObjNotFound) {
		// Object found
		ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
		//
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
		var oObjLocked;// menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge]
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
							oObj.id, oObjImageLarge.id, oObjLarge.id,
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
				if (TimerStartMoveBusy(oObj.id + 'Move', oObjGroupIndex, oObjIndex, UseLogEvents)) { return; }
				if (ElementEventCheckDuplicate(UseLogEvents)) { return; }
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
				}
				break;
			// ...................................... //
			case 'mouseover':
				if (TimerStartMoveBusy(oObj.id + 'Move', oObjGroupIndex, oObjIndex, UseLogEvents)) { return; }
				if (ElementEventCheckDuplicate(UseLogEvents)) { return; }
				if (UseAnimation) { return; }
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
					// ...................................... //
					case IsLarge:
					default:
						// Large
						/*
						// ElementItemShow(';Small false Curr false
						NextIsImageLarge = IsSmall; oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];IgnoreLock = false;
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
						// Bring to front or show
						ElementItemShow(
							NextIsImageLarge,
							oObj, oObjImageLarge, oObjLarge, oObjLarge,
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
// ElementEventCurrRootObjSet todo
// ...................................... //
function ElementEventCurrRootObjSet() {
	eventCurrRootObj = eventObject;
	// currently the parent is limited to navigate upward three nodes. todo
	// and must be below the Body container level
	// todo you should be able to specify the tag or id to stop at (ie Div vs Div29)
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
// Section Other function (s) (empty)
// Section Window function (s)
// SectionBlock Window Events and Methods function (s)
// Event Add
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
