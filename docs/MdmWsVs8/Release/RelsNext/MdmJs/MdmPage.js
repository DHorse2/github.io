//
// Body Layout Objects First Flags:
var elBodyFirst = true;
//
var elBodyMainContainerFirst = true;
//
var elBodyBannerFirst = true;
var elBodyBannerTopFirst = true;
var elBodyBannerBottomFirst = true;
//
var elBodyMainCenterTopFirst = true;
var elBodyMainCenterTopLeftFirst = true;
var elBodyMainCenterTopRightFirst = true;
//
var elBodyMainCenterFirst = true;
//
var elBodyMainLeftFirst = true;
var elBodyMainRightFirst = true;
//
var elBodyMainLeftOrigFirst = true;
var elBodyMainRightOrigFirst = true;
//
var elBodyMainLeftCurrFirst = true;
var elBodyMainRightCurrFirst = true;
//
var elBodyMainLeftCopyFirst = true;
var elBodyMainRightCopyFirst = true;
//
var elBodyMainRightFarFirst = true;
//
var elColumnType1First = true;
//
////////////////////////////////////////////////
// Body Layout Objects:
/*--
        createElement()	createElement(eTag)	IHTMLElement
--*/
// Body Container
var elBody;
// Body Container
var elBodyMainContainer;
//
// Banner (Top Menu, Logo and Graphics
var elBodyBanner;
var elBodyBannerTop;
var elBodyBannerBottom;
//
// Body Center Area
var elBodyMainCenter;
//
var elBodyMainCenterTop;
var elBodyMainCenterTopLeft;
var elBodyMainCenterTopRight;
//
var elBodyMainCenterTopColBreak;
//
var elBodyMainCenterCenter;
//
var elBodyMainCenterBottom;
//
// Body Left Area
var elBodyMainLeft;
var elBodyMainLeftCopy;
var elBodyMainLeftCurr; // Current
var elBodyMainLeftOrig; // Original
var elBodyMainLeftOuter;
var elBodyMainLeftInner;
var elBodyMenuLayout1;
var elMenuContainerLeft1;
var elMenuGroup1;
// var elMenuGroup1Save;
var elMenuContainerLeft2;
var elMenuGroup2;
// var elMenuGroup2Save;
var elMenuContainerLeft3;
var elMenuGroup3;
// var elMenuGroup3Save;
//
// Body Right Area
var elBodyMainRight;
var elBodyMainRightCopy;
var elBodyMainRightCurr; // Current
var elBodyMainRightOrig; // Original
var elBodyMenuLayout2;
var elBodyMainRightOuter;
var elBodyMainRightInner;
var elMenuContainerRight1;
var elMenuGroup4;
// var elMenuGroup4Save;
var elMenuContainerRight2;
var elMenuGroup5;
// var elMenuGroup5Save;
var elMenuContainerRight3;
var elMenuGroup6;
// var elMenuGroup6Save;
//
// Body Far Right Area
var elBodyMainRightFar;
//
// Other...
// elBodyMainCenterTopColBreak
var elBodyMainCenterTopColBreak;
//
var elMenuGroup1ColBreak;
var elMenuGroup2ColBreak;
var elMenuGroup3ColBreak;
var elMenuGroup4ColBreak;
var elMenuGroup5ColBreak;
var elMenuGroup6ColBreak;
//
var elBodyImageContainer;
//
var elBodyMenuImageContainer;
//
var elColumnType1 = true;
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
// function StdFontSizeIncrease() {
//     return;
// }
// // Base Font Size Decrease
// function StdFontSizeDecrease() {
//     return;
// }
// MOUSE
///////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Image Standard Mouse Events
// Mouse
// 		StdMouseOverImg
//		    StdMouseOutImg
//		    StdMouseClickImg
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Mouse Over
////////////////////////////////////////////////
function StdMouseOverImg(menuImage) {
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
function StdMouseOutImg(menuImage) {
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
function StdMouseClickImg(menuImage) {
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
    if (debugDoAlert) { alert("ready to go"); }
    if (debugDoAlert) { alert("menuImage.Name: " + menuImage.name);}
    imgSelect = menuImageCn;
    if (debugDoAlert) { alert("imgSelect: " + imgSelect); }
    if (debugDoAlert) { alert("ready to go"); }
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
function StdElementObjectBlockCount() {
	var elementBlockCn = 0;
	// Search Sections for Callouts
	layoutSectionCn = 0;
	while (elBodyMainCenterCenter.childNodes[layoutSectionCn]) {
		layoutSection = elBodyMainCenterCenter.childNodes[layoutSectionCn];
		// Section
		layoutBlockCn = 0;
		if (layoutSection.id) {
			if ((layoutSection.id).substr(0, 4) == 'DivS') {
				while (elBodyMainCenterCenter.childNodes[layoutSectionCn].childNodes[layoutBlockCn]) {
					if (layoutSection.childNodes[layoutBlockCn].id) {
						if ((layoutSection.childNodes[layoutBlockCn].id).substr(0, 4) == 'DivB') {
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
// Create all Elements used in Layout
function StdElementObjectContainerCreate() {
	//............................................................---//
	// Body Container References
	//............................................................---//
	elBody = StdElementGetRef(elBody, 'BodyBox', 'BodyBox');
	elBodyMainContainer = StdElementGetRef(elBodyMainContainer, 'BodyMainContainer', 'BodyMainContainer');
	// Body Center Area References
	elBodyMainCenter = StdElementGetRef(elBodyMainCenter, 'BodyMainCenter', 'BodyMainCenter');
	// Body Left Area Copy
	elBodyMainLeft = StdElementGetRef(elBodyMainLeft, 'BodyMainLeft', 'BodyMainLeft');
	// Body Right Area Copy
	elBodyMainRight = StdElementGetRef(elBodyMainRight, 'BodyMainRight', 'BodyMainRight');
	//
	elBodyMainCenterCenter = StdElementGetRef(elBodyMainCenterCenter, 'BodyMainCenterCenter', 'BodyMainCenterCenter');
	//
	// elColumnType1 = StdElementGetRef(elColumnType1,'ColumnType1','ColumnType1');
}
// Create all Elements used in Layout
function StdElementObjectCreate() {
	// State change at top to avoid duplicate calls.
	loadFirstJava = false;
	// elBodyFirst = false;
	//............................................................---//
	// Body Container References
	//............................................................---//
	StdElementObjectContainerCreate();
	//
	//............................................................---//
	// Banner References (Top Menu, Logo and Graphics)
	//............................................................---//
	elBodyBanner = StdElementGetRef(elBodyBanner, 'BodyBanner', 'BodyBanner');
	elBodyBannerTop = StdElementGetRef(elBodyBannerTop, 'BodyBannerTop', 'BodyBannerTop');
	elBodyBannerBottom = StdElementGetRef(elBodyBannerBottom, 'BodyBannerBottom', 'BodyBannerBottom');
	//
	//............................................................---//
	// Body View Toggle and Message Area Containers
	//............................................................---//
	// elBodyViewToggle View Toggle and Message Area
	elBodyViewToggleContainer = StdElementGetRef(elBodyViewToggleContainer, 'BodyViewToggleContainerLeft', 'BodyViewToggleContainerLeft');
	elBodyViewToggleContainerCenter = StdElementGetRef(elBodyViewToggleContainerCenter, 'BodyViewToggleContainerCenter', 'BodyViewToggleContainerCenter');
	elBodyViewToggleContainerLeft = StdElementGetRef(elBodyViewToggleContainerLeft, 'BodyViewToggleContainerLeft', 'BodyViewToggleContainerLeft');
	//
	elBodyConsoleMouseOverToggle = StdElementGetRef(elBodyConsoleMouseOverToggle, 'BodyConsoleMouseOverToggle', 'BodyConsoleMouseOverToggle');
	//
	//............................................................---//
	// Body Console Toggle and Message Area
	//............................................................---//
	// Toggle Buttons
	elBodyConsoleBoxButtons = StdElementGetRef(elBodyConsoleBoxButtons, 'BodyConsoleBoxButtons', 'BodyConsoleBoxButtons');
	elBodyConsoleBoxToggles = StdElementGetRef(elBodyConsoleBoxToggles, 'BodyConsoleBoxToggles', 'BodyConsoleBoxToggles');
	elBodyConsoleLogToggles = StdElementGetRef(elBodyConsoleLogToggles, 'BodyConsoleLogToggles', 'BodyConsoleLogToggles');
	elBodyConsoleAuxillaryToggles = StdElementGetRef(elBodyConsoleAuxillaryToggles, 'BodyConsoleAuxillaryToggles', 'BodyConsoleAuxillaryToggles');
	//
	elBodyConsoleToggle = StdElementGetRef(elBodyConsoleToggle, 'BodyConsoleToggle', 'BodyConsoleToggle');
	//
	elBodyConsoleErrorToggle = StdElementGetRef(elBodyConsoleErrorToggle, 'BodyConsoleErrorToggle', 'BodyConsoleErrorToggle');
	elBodyConsoleEventToggle = StdElementGetRef(elBodyConsoleEventToggle, 'BodyConsoleEventToggle', 'BodyConsoleEventToggle');
	elBodyConsoleStateToggle = StdElementGetRef(elBodyConsoleStateToggle, 'BodyConsoleStateToggle', 'BodyConsoleStateToggle');
	elBodyConsoleTestToggle = StdElementGetRef(elBodyConsoleTestToggle, 'BodyConsoleTestToggle', 'BodyConsoleTestToggle');
	elBodyConsoleClearToggle = StdElementGetRef(elBodyConsoleClearToggle, 'BodyConsoleClearToggle', 'BodyConsoleClearToggle');
	//
	elBodyConsoleDebugButtons = StdElementGetRef(elBodyConsoleDebugButtons, 'BodyConsoleDebugButtons', 'BodyConsoleDebugButtons');
	elBodyConsoleDebugToggles = StdElementGetRef(elBodyConsoleDebugToggles, 'BodyConsoleDebugToggles', 'BodyConsoleDebugToggles');
	elBodyConsoleDebugMainToggles = StdElementGetRef(elBodyConsoleDebugMainToggles, 'BodyConsoleDebugMainToggles', 'BodyConsoleDebugMainToggles');
	elBodyConsoleDebugTypesToggles = StdElementGetRef(elBodyConsoleDebugTypesToggles, 'BodyConsoleDebugTypesToggles', 'BodyConsoleDebugTypesToggles');
	//
	elBodyConsoleDebugToggle = StdElementGetRef(elBodyConsoleDebugToggle, 'BodyConsoleDebugToggle', 'BodyConsoleDebugToggle');
	//
	elBodyConsoleDebugMoveToggle = StdElementGetRef(elBodyConsoleDebugMoveToggle, 'BodyConsoleDebugMoveToggle', 'BodyConsoleDebugMoveToggle');
	elBodyConsoleDebugTransitionToggle = StdElementGetRef(elBodyConsoleDebugTransitionToggle, 'BodyConsoleDebugTransitionToggle', 'BodyConsoleDebugTransitionToggle');
	elBodyConsoleDebugDetailToggle = StdElementGetRef(elBodyConsoleDebugDetailToggle, 'BodyConsoleDebugDetailToggle', 'BodyConsoleDebugDetailToggle');
	elBodyConsoleDebugAllToggle = StdElementGetRef(elBodyConsoleDebugAllToggle, 'BodyConsoleDebugAllToggle', 'BodyConsoleDebugAllToggle');
	elBodyConsoleDebugOnErrorToggle = StdElementGetRef(elBodyConsoleDebugOnErrorToggle, 'BodyConsoleDebugOnErrorToggle', 'BodyConsoleDebugOnErrorToggle');
	elBodyConsoleDebugEventsToggle = StdElementGetRef(elBodyConsoleDebugEventsToggle, 'BodyConsoleDebugEventsToggle', 'BodyConsoleDebugEventsToggle');
	//
	// Body Console Toggle and Message Area
	elBodyConsoleContainer = StdElementGetRef(elBodyConsoleContainer, 'BodyConsoleContainer', 'BodyConsoleContainer');
	elBodyConsoleBox = StdElementGetRef(elBodyConsoleBox, 'BodyConsoleBox', 'BodyConsoleBox');
	elBodyConsoleErrorBox = StdElementGetRef(elBodyConsoleErrorBox, 'BodyConsoleErrorBox', 'BodyConsoleErrorBox');
	elBodyConsoleErrorTextBox = StdElementGetRef(elBodyConsoleErrorTextBox, 'BodyConsoleErrorTextBox', 'BodyConsoleErrorTextBox');
	elBodyConsoleEventBox = StdElementGetRef(elBodyConsoleEventBox, 'BodyConsoleEventBox', 'BodyConsoleEventBox');
	elBodyConsoleEventTextBox = StdElementGetRef(elBodyConsoleEventTextBox, 'BodyConsoleEventTextBox', 'BodyConsoleEventTextBox');
	elBodyConsoleStateBox = StdElementGetRef(elBodyConsoleStateBox, 'BodyConsoleStateBox', 'BodyConsoleStateBox');
	elBodyConsoleStateTextBox = StdElementGetRef(elBodyConsoleStateTextBox, 'BodyConsoleStateTextBox', 'BodyConsoleStateTextBox');
	elBodyConsoleTestBox = StdElementGetRef(elBodyConsoleTestBox, 'BodyConsoleTestBox', 'BodyConsoleTestBox');
	elBodyConsoleTestTextBox = StdElementGetRef(elBodyConsoleTestTextBox, 'BodyConsoleTestTextBox', 'BodyConsoleTestTextBox');
	//
	if (elBodyConsoleBox.style.display = '') { elBodyConsoleBox.style.display = 'none' }
	if (elBodyConsoleErrorBox.style.display = '') { elBodyConsoleErrorBox.style.display = 'block'; }
	if (elBodyConsoleEventBox.style.display = '') { elBodyConsoleEventBox.style.display = 'block'; }
	if (elBodyConsoleStateBox.style.display = '') { elBodyConsoleStateBox.style.display = 'block'; }
	if (elBodyConsoleTestBox.style.display = '') { elBodyConsoleTestBox.style.display = 'block'; }
	//
	StdBodyConsoleShow(DoNotUseHide, DoNotUseDebug);
	// if (elBodyConsoleBoxToggles.style.display = '') { elBodyConsoleBoxToggles.style.display = 'block'; }
	StdBodyConsoleShow(DoNotUseHide, DoUseDebug);
	// if (elBodyConsoleDebugToggles.style.display = '') { elBodyConsoleDebugToggles.style.display = 'block'; }
	//
	//............................................................---//
	// Body Center Area References
	//............................................................---//
	// elBodyMainCenter = StdElementGetRef(elBodyMainCenter,'BodyMainCenter','BodyMainCenter');
	//
	elBodyMainCenterTop = StdElementGetRef(elBodyMainCenterTop, 'BodyMainCenterTop', 'BodyMainCenterTop');
	elBodyMainCenterTopLeft = StdElementGetRef(elBodyMainCenterTopLeft, 'BodyMainCenterTopLeft', 'BodyMainCenterTopLeft');
	elBodyMainCenterTopRight = StdElementGetRef(elBodyMainCenterTopRight, 'BodyMainCenterTopRight', 'BodyMainCenterTopRight');
	//
	elBodyMainCenterTopColBreak = StdElementGetRef(elBodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak');
	//
	// elBodyMainCenterCenter = StdElementGetRef(elBodyMainCenterCenter,'BodyMainCenterCenter','BodyMainCenterCenter');
	//
	elBodyMainCenterBottom = StdElementGetRef(elBodyMainCenterBottom, 'BodyMainCenterBottom', 'BodyMainCenterBottom');
	//
	//............................................................---//
	// Body Left Area Copy
	//............................................................---//
	// elBodyMainLeft = StdElementGetRef(elBodyMainLeft,'BodyMainLeft','BodyMainLeft');// createElement
	// elBodyMainLeft = StdElementGetRef(elBodyMainLeft,'BodyMainLeft','BodyMainLeft');
	elBodyMainLeftCopy = StdElementCopy(elBodyMainLeftCopy, elBodyMainLeftCopyFirst, elBodyMainLeft, 'block');
	elBodyMainLeftCurr = StdElementCopy(elBodyMainLeftCurr, elBodyMainLeftCurrFirst, elBodyMainLeft, 'block');
	elBodyMainLeftOrig = StdElementCopy(elBodyMainLeftOrig, elBodyMainLeftOrigFirst, elBodyMainLeft, 'block');
	//
	// if (false == true) {
	elBodyMainLeftOuter = StdElementGetRefFromElement(elBodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', elBodyMainLeftCopy)
	// elBodyMainLeftOuter = StdElementGetRef(elBodyMainLeftOuter,'BodyMainLeftOuter','BodyMainLeftOuter');
	elBodyMainLeftInner = StdElementGetRefFromElement(elBodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', elBodyMainLeftCopy)
	// elBodyMainLeftInner = StdElementGetRef(elBodyMainLeftInner,'BodyMainLeftInner','BodyMainLeftInner');
	//
	elBodyMenuLayout1 = StdElementGetRefFromElement(elBodyMenuLayout1, 'BodyMenuLayout1', 'BodyMenuLayout1', elBodyMainLeftCopy)
	// elBodyMenuLayout1 = StdElementGetRef(elBodyMenuLayout1,'BodyMenuLayout1','BodyMenuLayout1');
	elMenuContainerLeft1 = StdElementGetRefFromElement(elMenuContainerLeft1, 'MenuContainerLeft1', 'MenuContainerLeft1', elBodyMainLeftCopy)
	// elMenuContainerLeft1 = StdElementGetRef(elMenuContainerLeft1,'MenuContainerLeft1','MenuContainerLeft1');
	// Left 1
	elMenuGroup1 = StdElementGetRefFromElement(elMenuGroup1, 'MenuGroup1', 'MenuGroup1', elBodyMainLeftCopy)
	// elMenuGroup1 = StdElementGetRef(elMenuGroup1,'MenuGroup1','MenuGroup1');
	// elMenuGroup1 = StdElementGetRefFromElement(elMenuGroup1, elMenuGroup1.id, elMenuGroup1.name, elBodyMainLeft)
	// var elMenuGroup1Save = StdElementGetRef(elMenuGroup1Save,'MenuGroup1Save','MenuGroup1Save');
	// Left 2
	elMenuContainerLeft2 = StdElementGetRefFromElement(elMenuContainerLeft2, 'MenuContainerLeft2', 'MenuContainerLeft2', elBodyMainLeftCopy)
	// elMenuContainerLeft2 = StdElementGetRef(elMenuContainerLeft2,'MenuContainerLeft2','MenuContainerLeft2');
	elMenuGroup2 = StdElementGetRefFromElement(elMenuGroup2, 'MenuGroup2', 'MenuGroup2', elBodyMainLeftCopy)
	// elMenuGroup2 = StdElementGetRef(elMenuGroup2,'MenuGroup2','MenuGroup2');
	// var elMenuGroup2Save = StdElementGetRef(elMenuGroup2Save,'MenuGroup2Save','MenuGroup2Save');
	// Left 3
	elMenuContainerLeft3 = StdElementGetRefFromElement(elMenuContainerLeft3, 'MenuContainerLeft3', 'MenuContainerLeft3', elBodyMainLeftCopy)
	// elMenuContainerLeft3 = StdElementGetRef(elMenuContainerLeft3,'MenuContainerLeft3','MenuContainerLeft3');
	elMenuGroup3 = StdElementGetRefFromElement(elMenuGroup3, 'MenuGroup3', 'MenuGroup3', elBodyMainLeftCopy)
	// elMenuGroup3 = StdElementGetRef(elMenuGroup3,'MenuGroup3','MenuGroup3');
	// var elMenuGroup3Save = StdElementGetRef(elMenuGroup3Save,'MenuGroup3Save','MenuGroup3Save');
	// }
	//
	//............................................................---//
	// Body Right Area Copy
	//............................................................---//
	// elBodyMainRight = StdElementGetRef(elBodyMainRight,'BodyMainRight','BodyMainRight');
	elBodyMainRightCopy = StdElementCopy(elBodyMainRightCopy, elBodyMainRightCopyFirst, elBody, 'block');
	elBodyMainRightCurr = StdElementCopy(elBodyMainRightCurr, elBodyMainRightCurrFirst, elBodyMainRight, 'block');
	elBodyMainRightOrig = StdElementCopy(elBodyMainRightOrig, elBodyMainRightOrigFirst, elBodyMainRight, 'block');
	//
	elBodyMainRightOuter = StdElementGetRefFromElement(elBodyMainRightOuter, 'BodyMainRightOuter', 'BodyMainRightOuter', elBodyMainRightCopy)
	// elBodyMainRightOuter = StdElementGetRef(elBodyMainRightOuter,'BodyMainRightOuter','BodyMainRightOuter');
	elBodyMainRightInner = StdElementGetRefFromElement(elBodyMainRightInner, 'BodyMainRightInner', 'BodyMainRightInner', elBodyMainRightCopy)
	// elBodyMainRightInner = StdElementGetRef(elBodyMainRightInner,'BodyMainRightInner','BodyMainRightInner');
	//
	elBodyMenuLayout2 = StdElementGetRef(elBodyMenuLayout2, 'BodyMenuLayout2', 'BodyMenuLayout2');
	//
	elMenuContainerRight1 = StdElementGetRefFromElement(elMenuContainerRight1, 'MenuContainerRight1', 'MenuContainerRight1', elBodyMainRightCopy);
	// elMenuContainerRight1 = StdElementGetRef(elMenuContainerRight1,'MenuContainerRight1','MenuContainerRight1');
	elMenuGroup4 = StdElementGetRefFromElement(elMenuGroup4, 'elMenuGroup4', 'elMenuGroup4', elBodyMainRightCopy);
	// var elMenuGroup4Save = StdElementGetRef(elMenuGroup4Save,'MenuGroup4Save','MenuGroup4Save');
	elMenuContainerRight2 = StdElementGetRefFromElement(elMenuContainerRight2, 'MenuContainerRight2', 'MenuContainerRight2', elBodyMainRightCopy);
	elMenuGroup5 = StdElementGetRefFromElement(elMenuGroup5, 'MenuGroup5', 'MenuGroup5', elBodyMainRightCopy);
	// var elMenuGroup5Save = StdElementGetRef(elMenuGroup5Save,'MenuGroup5Save','MenuGroup5Save');
	elMenuContainerRight3 = StdElementGetRefFromElement(elMenuContainerRight3, 'MenuContainerRight3', 'MenuContainerRight3', elBodyMainRightCopy);
	elMenuGroup6 = StdElementGetRefFromElement(elMenuGroup6, 'MenuGroup6', 'MenuGroup6', elBodyMainRightCopy);
	// var elMenuGroup6Save = StdElementGetRef(elMenuGroup6Save,'MenuGroup6Save','MenuGroup6Save');
	//
	//............................................................---//
	// Body Far Right Area
	//............................................................---//
	elBodyMainRightFar = StdElementGetRef(elBodyMainRightFar, 'BodyMainRightFar', 'BodyMainRightFar');
	//
	//............................................................---//
	// Other...
	//............................................................---//
	// elBodyMainCenterTopColBreak
	elBodyMainCenterTopColBreak = StdElementGetRef(elBodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak');
	//
	elMenuGroup1ColBreak = StdElementGetRef(elMenuGroup1ColBreak, 'MenuGroup1ColBreak', 'MenuGroup1ColBreak');
	elMenuGroup2ColBreak = StdElementGetRef(elMenuGroup2ColBreak, 'MenuGroup2ColBreak', 'MenuGroup2ColBreak');
	elMenuGroup3ColBreak = StdElementGetRef(elMenuGroup3ColBreak, 'MenuGroup3ColBreak', 'MenuGroup3ColBreak');
	elMenuGroup4ColBreak = StdElementGetRef(elMenuGroup4ColBreak, 'MenuGroup4ColBreak', 'MenuGroup4ColBreak');
	elMenuGroup5ColBreak = StdElementGetRef(elMenuGroup5ColBreak, 'MenuGroup5ColBreak', 'MenuGroup5ColBreak');
	elMenuGroup6ColBreak = StdElementGetRef(elMenuGroup6ColBreak, 'MenuGroup6ColBreak', 'MenuGroup6ColBreak');
	//
	//............................................................---//
	//............................................................---//
	//
	// document.recalc();
	//
	loadFirstJava = false;
	// elBodyFirst = false;
}

script_state = "Mdm Standard Page functions loaded. (Body Elements, Element Object, MouseEvent)";
if (debugLoadIsOn) { debugger; }
