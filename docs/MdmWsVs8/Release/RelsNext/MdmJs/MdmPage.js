//
// Body Layout Objects First Flags:
var bodyFirst = true;
//
var bodyMainContainerFirst = true;
//
var bodyBannerFirst = true;
var bodyBannerTopFirst = true;
var bodyBannerBottomFirst = true;
//
var bodyMainCenterTopFirst = true;
var bodyMainCenterTopLeftFirst = true;
var bodyMainCenterTopRightFirst = true;
//
var bodyMainCenterFirst = true;
//
var bodyMainLeftFirst = true;
var bodyMainRightFirst = true;
//
var bodyMainLeftOrigFirst = true;
var bodyMainRightOrigFirst = true;
//
var bodyMainLeftCurrFirst = true;
var bodyMainRightCurrFirst = true;
//
var bodyMainLeftCopyFirst = true;
var bodyMainRightCopyFirst = true;
//
var bodyMainRightFarFirst = true;
//
var layoutBodylayoutBodyColumnType1First = true;
//
////////////////////////////////////////////////
// Body Layout Objects:
/*--
		createElement()	createElement(eTag)	IHTMLElement
--*/
// Body Container
var body;
// Body Container
var bodyMainContainer;
//
// Banner (Top Menu, Logo and Graphics
var bodyBanner;
var bodyBannerTop;
var bodyBannerBottom;
//
// Body Center Area
var bodyMainCenter;
//
var bodyMainCenterTop;
var bodyMainCenterTopLeft;
var bodyMainCenterTopRight;
//
var bodyMainCenterTopColBreak;
var bodyMainCenterCenter;
var bodyMainCenterBottom;
//
// Body Left Area
var bodyMainLeft;
var bodyMainLeftCopy;
var bodyMainLeftCurr; // Current
var bodyMainLeftOrig; // Original
var bodyMainLeftOuter;
var bodyMainLeftInner;

var bodyLayoutMenu1;
var bodyMenuContainer;
// var bodyMenuGroupSave;
var bodyMenuContainer;
var bodyMenuGroup;
// var bodyMenuGroupSave;


// Body Right Area
var bodyMainRight;
var bodyMainRightCopy;
var bodyMainRightCurr; // Current
var bodyMainRightOrig; // Original
var bodyLayoutMenu2;
var bodyMainRightOuter;
var bodyMainRightInner;

var bodyMenuContainerRight1;
// var bodyMenuGroup6Save;
//
// Body Far Right Area
var bodyMainRightFar;
//
// Other...
// bodyMainCenterTopColBreak
var bodyMainCenterTopColBreak;
//
//
var bodyImageContainer;
var bodyMenuImageContainer;
//
var layoutBodylayoutBodyColumnType1 = true;
// Global Objects - GLOBAL / COMMON
// ------------------------------------------------------------------------------------- _//
// MENUS - Menu Image Objects, Menu Image Pointers
var oObjIndex = 1;
var oObjGroupIndex = 1;
var oObjParentIndex = 1;
var oObjRootIndex = 0;
// Menu Image Objects
var oObj;
var oObjImage;
var oObjParent;
var oObjLarge;
var oObjImageLarge;
var oObjText = "";
// Menu Image Size
var oObjImageSizeSmall = 150;
var oObjImageSizeLarge = 600;
var oObjImageSizeRatio = 0.7;
var oObjImageSize = 0;
// Menu Image Position
var oObjLeft;
var oObjTop;
var oObjWidth;
var oObjHeight;
// Menu Image Z Index
var imgZindex = 120;
// Standard Functions
// ------------------------------------------------------------------------------------- _//
// // Base Font Size Increase
// function FontSizeIncrease() {
//     return;
// }
// // Base Font Size Decrease
// function FontSizeDecrease() {
//     return;
// }
// MOUSE
///////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Image Standard Mouse Events
// Mouse
// 		MouseOverImg
//		    MouseOutImg
//		    MouseClickImg
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Mouse Over
////////////////////////////////////////////////
function MouseOverImg(menuImage) {
	menuImageCn = oObjIndexSetmenuImageCn(menuImage);
	if (menuImageCn > imgUsedCn) {
		return;
	}
	imgMouseHover[menuImageCn] = 1;
	if (imgFocus = menuImageCn) {
		//    menuImage.src = menuImage.name + "/" + menuImage.name + "fh.gif";
	}
	else {
		//    menuImage.src = menuImage.name + "/" + menuImage.name + "bh.gif";
	}
	var tempTop = menuImage.parentNode.top;
	var tempLeft = menuImage.parentNode.left;
	if (debugDoAlert) { alert("top: " + tempTop); }
}
// Mouse Out
////////////////////////////////////////////////
function MouseOutImg(menuImage) {
	menuImageCn = oObjIndexSetmenuImageCn(menuImage);
	if (menuImageCn > imgUsedCn) {
		return;
	}
	imgMouseHover[menuImageCn] = 0;
	if (imgFocus = menuImageCn) {
		//    menuImage.src = menuImage.name + "/" + menuImage.name + "f.gif";
	} else {
		//    menuImage.src = menuImage.name + "/" + menuImage.name + "b.gif";
	}
}
// Mouse Click
////////////////////////////////////////////////
function MouseClickImg(menuImage) {
	menuImageCn = oObjIndexSetmenuImageCn(menuImage);
	if (menuImageCn > imgUsedCn) {
		return;
	}
	if (imgFocus = menuImageCn) {
		return;
	}
	// old folder
	imgFocusOld = imgFocus;
	//  menuImageOld = oObjIndexSetmenuImage(imgFocusOld);
	//  menuImageOld.src = menuImageOld.name + "/" + menuImageOld.name + "b.gif";
	// new front folder
	//  menuImageCn = oObjIndexSetmenuImageCn(menuImage);
	imgFocus = menuImageCn;
	//  menuImage.src = menuImage.name + "/" + menuImage.name + "f.gif";
	// load new page into frame
	//  imgframe.src = menuImage.name + "/" + menuImage.name + ".htm";
	//  document.frames.item.
	//  img0.src = menuImage.name + "lr.gif";
	//  img0text.src = menuImage.name + "text.txt";
	if (debugImages) {
		errorComment = "Getting " + menuImageCn + ": " +  menuImage.Name;
		if (debugDoAlert) { alert(errorComment); }
		MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
			errorComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	imgSelect = menuImageCn;
	//  document.parentWindow.parent.imgSelect = menuImageCn;
	//  alert(document.parentWindow.parent);
	//  document.parentWindow.tabframe.imgSelect = menuImageCn;
	//  alert(document.parentWindow.tabframe);
	//  alert("ready to go");
	//  cookies!!!!!
}
// ..................................................................................... _//
// Create all Elements used in Layout
// Section Element function (s)
// SectionBlock Element support function (s)
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
			if ((layoutSection.id).substr(0, 4) == 'DivS') {
				while (bodyMainCenterCenter.childNodes[layoutSectionCn].childNodes[layoutBlockCn]) {
					if (layoutSection.childNodes[layoutBlockCn].id) {
						if ((layoutSection.childNodes[layoutBlockCn].id).substr(0, 4) == 'DivB') {
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
	// layoutBodylayoutBodyColumnType1 = ElementGetRef(layoutBodylayoutBodyColumnType1,'layoutBodyColumnType1','layoutBodyColumnType1');
}
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
	consoleBoxToggles = ElementGetRef(consoleBoxToggles, 'BodyConsoleBoxToggles', 'BodyConsoleBoxToggles');
	consoleLogToggles = ElementGetRef(consoleLogToggles, 'BodyConsoleLogToggles', 'BodyConsoleLogToggles');
	consoleAuxillaryToggles = ElementGetRef(consoleAuxillaryToggles, 'BodyConsoleAuxillaryToggles', 'BodyConsoleAuxillaryToggles');
	//
	consoleToggle = ElementGetRef(consoleToggle, 'BodyConsoleToggle', 'BodyConsoleToggle');
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
	if (consoleBox.style.display = '') { consoleBox.style.display = 'none' }
	if (consoleErrorBox.style.display = '') { consoleErrorBox.style.display = 'block'; }
	if (consoleEventBox.style.display = '') { consoleEventBox.style.display = 'block'; }
	if (consoleStateBox.style.display = '') { consoleStateBox.style.display = 'block'; }
	if (consoleTestBox.style.display = '') { consoleTestBox.style.display = 'block'; }
	//
	BodyConsoleShow(DoNotUseHide, DoNotUseDebug); // todo
	// if (consoleBoxToggles.style.display = '') { consoleBoxToggles.style.display = 'block'; }
	// BodyConsoleShow(DoNotUseHide, DoUseDebug);
	// if (consoleDebugToggles.style.display = '') { consoleDebugToggles.style.display = 'block'; }
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
	// if (false == true) {
	bodyMainLeftOuter = ElementGetRefFromElement(bodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', bodyMainLeftCopy)
	// bodyMainLeftOuter = ElementGetRef(bodyMainLeftOuter,'BodyMainLeftOuter','BodyMainLeftOuter');
	bodyMainLeftInner = ElementGetRefFromElement(bodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', bodyMainLeftCopy)
	// bodyMainLeftInner = ElementGetRef(bodyMainLeftInner,'BodyMainLeftInner','BodyMainLeftInner');
	//
	bodyLayoutMenu1 = ElementGetRefFromElement(bodyLayoutMenu1, 'BodyMenuLayout1', 'BodyMenuLayout1', bodyMainLeftCopy)
	// bodyLayoutMenu1 = ElementGetRef(bodyLayoutMenu1,'BodyMenuLayout1','BodyMenuLayout1');
	bodyMenuContainer[bodyMenuLeft][1] = ElementGetRefFromElement(bodyMenuContainer[bodyMenuLeft][1], 'MenuContainerLeft1', 'MenuContainerLeft1', bodyMainLeftCopy)
	// bodyMenuContainer[bodyMenuLeft][1] = ElementGetRef(bodyMenuContainer[bodyMenuLeft][1],'MenuContainerLeft1','MenuContainerLeft1');
	// Left 1 todo
	bodyMenuGroup1 = ElementGetRefFromElement(bodyMenuGroup1, 'MenuGroup1', 'MenuGroup1', bodyMainLeftCopy)
	// bodyMenuGroup1 = ElementGetRef(bodyMenuGroup1,'MenuGroup1','MenuGroup1');
	// bodyMenuGroup1 = ElementGetRefFromElement(bodyMenuGroup1, bodyMenuGroup1.id, bodyMenuGroup1.name, bodyMainLeft)
	// var bodyMenuGroupSave[1] = ElementGetRef(bodyMenuGroupSave[1],'MenuGroup1Save','MenuGroup1Save');
	// Left 2
	bodyMenuContainer[bodyMenuLeft][2] = ElementGetRefFromElement(bodyMenuContainer[bodyMenuLeft][2], 'MenuContainerLeft2', 'MenuContainerLeft2', bodyMainLeftCopy)
	// bodyMenuContainer[bodyMenuLeft][2] = ElementGetRef(bodyMenuContainer[bodyMenuLeft][2],'MenuContainerLeft2','MenuContainerLeft2');
	bodyMenuGroup[2] = ElementGetRefFromElement(bodyMenuGroup[2], 'MenuGroup2', 'MenuGroup2', bodyMainLeftCopy)
	// bodyMenuGroup[2] = ElementGetRef(bodyMenuGroup[2],'MenuGroup2','MenuGroup2');
	// var bodyMenuGroup[2]Save = ElementGetRef(bodyMenuGroup[2]Save,'MenuGroup2Save','MenuGroup2Save');
	// Left 3
	bodyMenuContainer[bodyMenuLeft][3] = ElementGetRefFromElement(bodyMenuContainer[bodyMenuLeft][3], 'MenuContainerLeft3', 'MenuContainerLeft3', bodyMainLeftCopy)
	// bodyMenuContainer[bodyMenuLeft][3] = ElementGetRef(bodyMenuContainer[bodyMenuLeft][3],'MenuContainerLeft3','MenuContainerLeft3');
	bodyMenuGroup[3] = ElementGetRefFromElement(bodyMenuGroup[3], 'MenuGroup3', 'MenuGroup3', bodyMainLeftCopy)
	// bodyMenuGroup[3] = ElementGetRef(bodyMenuGroup[3],'MenuGroup3','MenuGroup3');
	// var bodyMenuGroup[3]Save = ElementGetRef(bodyMenuGroup[3]Save,'MenuGroup3Save','MenuGroup3Save');
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
	bodyMenuGroup4 = ElementGetRefFromElement(bodyMenuGroup4, 'bodyMenuGroup4', 'bodyMenuGroup4', bodyMainRightCopy);
	// var bodyMenuGroup4Save = ElementGetRef(bodyMenuGroup4Save,'MenuGroup4Save','MenuGroup4Save');
	bodyMenuContainerRight2 = ElementGetRefFromElement(bodyMenuContainerRight2, 'MenuContainerRight2', 'MenuContainerRight2', bodyMainRightCopy);
	bodyMenuGroup5 = ElementGetRefFromElement(bodyMenuGroup5, 'MenuGroup5', 'MenuGroup5', bodyMainRightCopy);
	// var bodyMenuGroup5Save = ElementGetRef(bodyMenuGroup5Save,'MenuGroup5Save','MenuGroup5Save');
	bodyMenuContainerRight3 = ElementGetRefFromElement(bodyMenuContainerRight3, 'MenuContainerRight3', 'MenuContainerRight3', bodyMainRightCopy);
	bodyMenuGroup6 = ElementGetRefFromElement(bodyMenuGroup6, 'MenuGroup6', 'MenuGroup6', bodyMainRightCopy);
	// var bodyMenuGroup6Save = ElementGetRef(bodyMenuGroup6Save,'MenuGroup6Save','MenuGroup6Save');
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
	bodyMenuGroupColBreak[1] = ElementGetRef(bodyMenuGroupColBreak[1], 'MenuGroup1ColBreak', 'MenuGroup1ColBreak');
	bodyMenuGroupColBreak[2] = ElementGetRef(bodyMenuGroupColBreak[2], 'MenuGroup2ColBreak', 'MenuGroup2ColBreak');
	bodyMenuGroupColBreak[3] = ElementGetRef(bodyMenuGroupColBreak[3], 'MenuGroup3ColBreak', 'MenuGroup3ColBreak');
	bodyMenuGroupColBreak[4] = ElementGetRef(bodyMenuGroupColBreak[4], 'MenuGroup4ColBreak', 'MenuGroup4ColBreak');
	bodyMenuGroupColBreak[5] = ElementGetRef(bodyMenuGroupColBreak[5], 'MenuGroup5ColBreak', 'MenuGroup5ColBreak');
	bodyMenuGroupColBreak[6] = ElementGetRef(bodyMenuGroupColBreak[6], 'MenuGroup6ColBreak', 'MenuGroup6ColBreak');
	//
	//............................................................---//
	//............................................................---//
	//
	// document.recalc();
	//
	loadFirstJava = false;
	// bodyFirst = false;
}

script_state = "Mdm Standard Page functions loaded. (Body Elements, Element Object, MouseEvent)";
if (debugLoadIsOn) { debugger; }
