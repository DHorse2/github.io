// ..................................................................................... _//
// Section Mouse Events function (s)
// ..................................................................................... _//
// Section Body Content Mouse Events function (s)
// ..................................................................................... _//
// ...................................... //
// Image Standard Mouse Events
// Mouse
// 		StdElementEventMouseOver
//		    StdElementEventMouseOut
//		    StdElementEventClick
// ...................................... //

// Mouse Over
// ...................................... //
function StdElementEventMouseOver(menuImage)
{
  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
  if (menuImageCn > imgUsedCn){
    return;
  }
  imgMouseHover[menuImageCn] = 1;
  if (imgFocus == menuImageCn){
//    menuImage.src = menuImage.name + '/' + menuImage.name + 'fh.gif';
  }
  else {
//    menuImage.src = menuImage.name + '/' + menuImage.name + 'bh.gif';
  }
var tempTop = menuImage.parentNode.top;
var tempLeft = menuImage.parentNode.left;
    if (debugLogEvents)  {
        ConsoleMessageLog(eventCurr, DoNotUseDebug, DoNotUseSingeLine,
		    'Move.. Over occured on content image'
		    + ' set successfully! Random filter # ' + filterIndex + ' '
		    + charNewLineTag + 'top: ' + tempTop
		    + charNewLineTag + 'Left: ' + tempLeft,
            'StdElementEventMouseOver', 7140, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        //
    }
}
// Mouse Out
// ...................................... //
function StdElementEventMouseOut(menuImage)
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
// Mouse Click
// ...................................... //
function StdElementEventClick(menuImage)
{
  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
  if (menuImageCn > imgUsedCn){
    return;
  }
  if (imgFocus == menuImageCn){
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
    if (debugLogEvents)  {
        ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
			'Move.. Over occured on content image'
		    + charNewLineTag + 'Menu Image Name: ' + menuImage.name
		    + charNewLineTag + 'Image number selected: ' + menuImageCn,
            'StdElementEventClick', 7196, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
        //
    }
//  document.parentWindow.parent.imgSelect = menuImageCn;
//  document.parentWindow.tabframe.imgSelect = menuImageCn;
}
// Mouse Element Event Mouse
// ...................................... //
function StdElementEventMouse(e)
{
	if (!imgLoadUseEventHandler && !imgLoadEventTest)  {
        ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
            'You have conflicting event handling options...',
            'StdElementEventMouse', 9555, null, null,
            errorSevere, errorDoNotDisplayTag, errorDoAlert);
	}
	if (loadFirstJava) { StdElementObjectCreate(); }
	if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
	//
	StdElementEventCurrSet(e);
	StdElementEventCurrRootObjSet();
	//
	oObjIndex = StdElementItemIndexSetFromObj(eventCurrRootObj);
    // Objects
    StdElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	//
	if (debugLogEvents) {
		ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
			'Mouse Event', 'StdElementEventMouse', 7993); }
	//
	// ...................................... //
	if (!oObjNotFound) {
    	//
		// ...................................... //
    	var HideImage = false;
    	var HideImageLarge = false;
		var NextIsImageLarge = IsImageLarge;
    	//
    	if (eventType == 'mousedown') { NextIsImageLarge = IsLarge; }
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
    			// StdElementItemToggle(  true true true (IsImagelarge LockValue IgnoreLock)
    			NextIsImageLarge = IsLarge;oObjLocked = true;IgnoreLock = true;
            	//
        		StdElementItemToggle(
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
			if (StdTimerStartMoveBusy(oObj.id + 'Move', oObjGroupIndex, oObjIndex, debugLogEvents)) { return; }
    		if (StdElementEventCheckDuplicate(debugLogEvents)) { return; }
			// ...................................... //
    		switch(IsImageLarge) {
			// ...................................... //
            case IsSmall:
    			// Small
    			// StdElementItemHide
    			NextIsImageLarge = IsSmall;oObjLocked = false;IgnoreLock  = false;
    			StdElementItemHide(
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
    			// StdElementItemHide
    			NextIsImageLarge = IsLarge;oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge];IgnoreLock  = false;
    			StdElementItemHide(
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
			if (StdTimerStartMoveBusy(oObj.id + 'Move', oObjGroupIndex, oObjIndex, debugLogEvents)) { return; }
    		if (StdElementEventCheckDuplicate(debugLogEvents)) { return; }
			// ...................................... //
			if (eventMouseOverEnabled) { return; }
    		switch(IsImageLarge) {
			// ...................................... //
            case IsSmall:
    			// Small
        	   	startIndex = 1;
            	endIndex = oObjIndex;
            	//
    			// StdElementGroupShowStack(';false false true
    			NextIsImageLarge = IsSmall;oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge];IgnoreLock = true;
            	//
				StdElementGroupShowStack(
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
    			// StdElementItemShow(';Small false Curr false
    			NextIsImageLarge = IsSmall;oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];IgnoreLock = false;
            	//
				StdElementItemShow(
        				NextIsImageLarge,
        				oObjParent, oObjImage, oObj, oObjLarge,
        				oObjImageSizeSmall,
        				oObjGroupIndex, oObjIndex,
        				oObjLocked, IgnoreLock);
						//
    			*/
				// if the small is locked then the large is locked...
				// StdElementItemShow(';Large true Curr false (IsImagelarge LockValue IgnoreLock)
    			NextIsImageLarge = IsLarge;oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];IgnoreLock = false;
            	//
				StdElementItemShow(
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
// StdElementEventCurrRootObjSet
// ...................................... //
function StdElementEventCurrRootObjSet()
{

	eventCurrRootObj = eventObject;
	// currently the parent is limited to navigate upward three nodes.
	// and must be below the Body container level
	// todo you should be able to specify the tag or id to stop at (ie Div vs Div29)
	tmpMax = 3;loopContinue = true;
	while (loopContinue) {
		if (eventCurrRootObj) {
		if (eventCurrRootObj.parentNode) {
		if (eventCurrRootObj.parentNode.id) {
			// i.e. 'BodyMenuImageContainer'
			// 'Body*' images behave differently
			//  or  'BodyImageContainer'
			if ((eventCurrRootObj.parentNode.id).substr(0,4) = 'Body') {
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
// StdElementEventLastSet
// ...................................... //
function StdElementEventLastSet(e)
{
	eventLast 			= eventCurr;
	eventLastObject 	= (eventCurr.srcElement || eventCurr.target);
	eventLastId 		= eventLastObject.id;
	eventLastRootId 	= eventCurrRootObj.id;
	//
}
// StdElementEventCurrSet
// ...................................... //
function StdElementEventCurrSet(e)
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
// StdElementEventCheckDuplicate
// ...................................... //
function StdElementEventCheckDuplicate(UseLog)
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
               	eventCurrId == eventCurrRootObj.id
              	&& eventLastRootId == eventCurrRootObj.id
               	&& eventLastId != eventCurrId
              	)) { IsDuplicate = false; } else { IsDuplicate = true; }
              	// && eventLast.type = eventType
            } else {
                if ((
                eventCurrId == eventCurrRootObj.id
                && eventLastRootId == eventCurrRootObj.id
              	)) { IsDuplicate = false; } else { IsDuplicate = true; }
            }
			break;
		default:
		IsDuplicate = false;break;
	}
	//
	if (UseLog && IsDuplicate && debugLogEventDuplicates) {
		ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
			'Duplicate Event', 'StdElementEventCheckDuplicate', 0); }
	//
	if (DoStoreLast) { StdElementEventLastSet(eventCurr); }
	return IsDuplicate;
}
// StdElementItemHideId
// ...................................... //
function StdElementEventFromHtmlCheck(e, UseLog)
{
	// load and validate event and objects
	// if (!imgLoadUseEventHandler) {
		eventCurr = e || window.event;
		StdElementEventCurrSet(eventCurr);
		StdElementEventCurrRootObjSet();
		// look for duplicate mouse over events (bubbling)
		if (StdElementEventCheckDuplicate(UseLog)) { return false; } else { return true; }
	// } else { return true; }
}
// StdElementItemHideId
// ...................................... //
function StdElementEventGet(e)
{
	// load and validate event and objects
		eventCurr = e || window.event;
}
// Section Other function (s) (empty)
// Section Window function (s)
// SectionBlock Window Events and Methods function (s)
// Event Add
function StdElementEventAdd(eventNamePassed, eventFunctionPassed, eventFunctionNamePassed, eventFunctionArgsPassed, oObjPassed)
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
    				(eval( 'tempfunc = function() { ' + temp + ';tempfunc; }' )),
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
