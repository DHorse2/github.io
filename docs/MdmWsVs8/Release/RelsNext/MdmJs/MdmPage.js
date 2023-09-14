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
// function fnFontSizeIncrease() {
//     return;
// }
// // Base Font Size Decrease
// function fnFontSizeDecrease() {
//     return;
// }
// MOUSE
///////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Image Standard Mouse Events
// Mouse
// 		fnMouseOverImg
//		    fnMouseOutImg
//		    fnMouseClickImg
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Mouse Over
////////////////////////////////////////////////
function fnMouseOverImg(menuImage) {
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
function fnMouseOutImg(menuImage) {
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
function fnMouseClickImg(menuImage) {
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
function fnElementObjectContainerCreate() {
    //---------------------------------------------------------------//
    // Body Container References
    //---------------------------------------------------------------//
    elBody = fnElementGetRef(elBody, "BodyBox", "BodyBox");
    elBodyMainContainer = fnElementGetRef(elBodyMainContainer, "BodyMainContainer", "BodyMainContainer");
    // Body Center Area References
    elBodyMainCenter = fnElementGetRef(elBodyMainCenter, "BodyMainCenter", "BodyMainCenter");
    // Body Left Area Copy
    elBodyMainLeft = fnElementGetRef(elBodyMainLeft, "BodyMainLeft", "BodyMainLeft");
    // Body Right Area Copy
    elBodyMainRight = fnElementGetRef(elBodyMainRight, "BodyMainRight", "BodyMainRight");
    //
    elBodyMainCenterCenter = fnElementGetRef(elBodyMainCenterCenter, "BodyMainCenterCenter", "BodyMainCenterCenter");
    //
    // elColumnType1 = fnElementGetRef(elColumnType1,"ColumnType1","ColumnType1");
}
// Create all Elements used in Layout
function fnElementObjectCreateDepreciated() {
    // Body Container References
    //---------------------------------------------------------------//
    fnElementObjectContainerCreate();
    // Banner References (Top Menu, Logo and Graphics)
    //---------------------------------------------------------------//
    elBodyBanner = fnElementGetRef(elBodyBanner, "BodyBanner", "BodyBanner");
    elBodyBannerTop = fnElementGetRef(elBodyBannerTop, "BodyBannerTop", "BodyBannerTop");
    elBodyBannerBottom = fnElementGetRef(elBodyBannerBottom, "BodyBannerBottom", "BodyBannerBottom");
    // Body Center Area References
    //---------------------------------------------------------------//
    // elBodyMainCenter = fnElementGetRef(elBodyMainCenter,"BodyMainCenter","BodyMainCenter");
    //
    elBodyMainCenterTop = fnElementGetRef(elBodyMainCenterTop, "BodyMainCenterTop", "BodyMainCenterTop");
    elBodyMainCenterTopLeft = fnElementGetRef(elBodyMainCenterTopLeft, "BodyMainCenterTopLeft", "BodyMainCenterTopLeft");
    elBodyMainCenterTopRight = fnElementGetRef(elBodyMainCenterTopRight, "BodyMainCenterTopRight", "BodyMainCenterTopRight");
    //
    elBodyMainCenterTopColBreak = fnElementGetRef(elBodyMainCenterTopColBreak, "BodyMainCenterTopColBreak", "BodyMainCenterTopColBreak");
    //
    // elBodyMainCenterCenter = fnElementGetRef(elBodyMainCenterCenter,"BodyMainCenterCenter","BodyMainCenterCenter");
    //
    elBodyMainCenterBottom = fnElementGetRef(elBodyMainCenterBottom, "BodyMainCenterBottom", "BodyMainCenterBottom");
    // Body Left Area Copy
    //---------------------------------------------------------------//
    // elBodyMainLeft = fnElementGetRef(elBodyMainLeft,"BodyMainLeft","BodyMainLeft");// createElement
    // elBodyMainLeft = fnElementGetRef(elBodyMainLeft,"BodyMainLeft","BodyMainLeft");
    elBodyMainLeftCopy = fnElementCopy(elBodyMainLeftCopy, elBodyMainLeftCopyFirst, elBody, "block");
    elBodyMainLeftCurr = fnElementCopy(elBodyMainLeftCurr, elBodyMainLeftCurrFirst, elBodyMainLeft, "block");
    elBodyMainLeftOrig = fnElementCopy(elBodyMainLeftOrig, elBodyMainLeftOrigFirst, elBodyMainLeft, "block");
    //
    // if (false = true) {
    //     elBodyMainLeftOuter = fnElementGetRefFromElement(elBodyMainLeftOuter, "BodyMainLeftOuter", "BodyMainLeftOuter", elBodyMainLeftCopy)
    //     // elBodyMainLeftOuter = fnElementGetRef(elBodyMainLeftOuter,"BodyMainLeftOuter","BodyMainLeftOuter");
    //     elBodyMainLeftInner = fnElementGetRefFromElement(elBodyMainLeftInner, "BodyMainLeftInner", "BodyMainLeftInner", elBodyMainLeftCopy)
    //     // elBodyMainLeftInner = fnElementGetRef(elBodyMainLeftInner,"BodyMainLeftInner","BodyMainLeftInner");
    //     //
    //     elBodyMenuLayout1 = fnElementGetRefFromElement(elBodyMenuLayout1, "BodyMenuLayout1", "BodyMenuLayout1", elBodyMainLeftCopy)
    //    // elBodyMenuLayout1 = fnElementGetRef(elBodyMenuLayout1,"BodyMenuLayout1","BodyMenuLayout1");
    //     elMenuContainerLeft1 = fnElementGetRefFromElement(elMenuContainerLeft1, "MenuContainerLeft1", "MenuContainerLeft1", elBodyMainLeftCopy)
    //     // elMenuContainerLeft1 = fnElementGetRef(elMenuContainerLeft1,"MenuContainerLeft1","MenuContainerLeft1");
    //     // Left 1
    //     elMenuGroup1 = fnElementGetRefFromElement(elMenuGroup1, "MenuGroup1", "MenuGroup1", elBodyMainLeftCopy)
    //     // elMenuGroup1 = fnElementGetRef(elMenuGroup1,"MenuGroup1","MenuGroup1");
    //     // elMenuGroup1 = fnElementGetRefFromElement(elMenuGroup1, elMenuGroup1.id, elMenuGroup1.name, elBodyMainLeft)
    //     // var elMenuGroup1Save = fnElementGetRef(elMenuGroup1Save,"MenuGroup1Save","MenuGroup1Save");
    //     // Left 2
    //     elMenuContainerLeft2 = fnElementGetRefFromElement(elMenuContainerLeft2, "MenuContainerLeft2", "MenuContainerLeft2", elBodyMainLeftCopy)
    //     // elMenuContainerLeft2 = fnElementGetRef(elMenuContainerLeft2,"MenuContainerLeft2","MenuContainerLeft2");
    //     elMenuGroup2 = fnElementGetRefFromElement(elMenuGroup2, "MenuGroup2", "MenuGroup2", elBodyMainLeftCopy)
    //     // elMenuGroup2 = fnElementGetRef(elMenuGroup2,"MenuGroup2","MenuGroup2");
    //     // var elMenuGroup2Save = fnElementGetRef(elMenuGroup2Save,"MenuGroup2Save","MenuGroup2Save");
    //     // Left 3
    //     elMenuContainerLeft3 = fnElementGetRefFromElement(elMenuContainerLeft3, "MenuContainerLeft3", "MenuContainerLeft3", elBodyMainLeftCopy)
    //     // elMenuContainerLeft3 = fnElementGetRef(elMenuContainerLeft3,"MenuContainerLeft3","MenuContainerLeft3");
    //     elMenuGroup3 = fnElementGetRefFromElement(elMenuGroup3, "MenuGroup3", "MenuGroup3", elBodyMainLeftCopy)
    //     // elMenuGroup3 = fnElementGetRef(elMenuGroup3,"MenuGroup3","MenuGroup3");
    //     // var elMenuGroup3Save = fnElementGetRef(elMenuGroup3Save,"MenuGroup3Save","MenuGroup3Save");
    // }
    // Body Right Area Copy
    //---------------------------------------------------------------//
    // elBodyMainRight = fnElementGetRef(elBodyMainRight,"BodyMainRight","BodyMainRight");
    elBodyMainRightCopy = fnElementCopy(elBodyMainRightCopy, elBodyMainRightCopyFirst, elBody, "block");
    elBodyMainRightCurr = fnElementCopy(elBodyMainRightCurr, elBodyMainRightCurrFirst, elBodyMainRight, "block");
    elBodyMainRightOrig = fnElementCopy(elBodyMainRightOrig, elBodyMainRightOrigFirst, elBodyMainRight, "block");
    //
    // if (false = true) {
    //     elBodyMainRightOuter = fnElementGetRefFromElement(elBodyMainRightOuter, "BodyMainRightOuter", "BodyMainRightOuter", elBodyMainRightCopy)
    //     // elBodyMainRightOuter = fnElementGetRef(elBodyMainRightOuter,"BodyMainRightOuter","BodyMainRightOuter");
    //     elBodyMainRightInner = fnElementGetRefFromElement(elBodyMainRightInner, "BodyMainRightInner", "BodyMainRightInner", elBodyMainRightCopy)
    //     // elBodyMainRightInner = fnElementGetRef(elBodyMainRightInner,"BodyMainRightInner","BodyMainRightInner");
    //     //
    //     elBodyMenuLayout2 = fnElementGetRef(elBodyMenuLayout2, "BodyMenuLayout2", "BodyMenuLayout2");
    //     //
    //     elMenuContainerRight1 = fnElementGetRefFromElement(elMenuContainerRight1, "MenuContainerRight1", "MenuContainerRight1", elBodyMainRightCopy);
    //     // elMenuContainerRight1 = fnElementGetRef(elMenuContainerRight1,"MenuContainerRight1","MenuContainerRight1");
    //     elMenuGroup4 = fnElementGetRefFromElement(elMenuGroup4, "elMenuGroup4", "elMenuGroup4", elBodyMainRightCopy);
    //     // var elMenuGroup4Save = fnElementGetRef(elMenuGroup4Save,"MenuGroup4Save","MenuGroup4Save");
    //     elMenuContainerRight2 = fnElementGetRefFromElement(elMenuContainerRight2, "MenuContainerRight2", "MenuContainerRight2", elBodyMainRightCopy);
    //     elMenuGroup5 = fnElementGetRefFromElement(elMenuGroup5, "MenuGroup5", "MenuGroup5", elBodyMainRightCopy);
    //     // var elMenuGroup5Save = fnElementGetRef(elMenuGroup5Save,"MenuGroup5Save","MenuGroup5Save");
    //     elMenuContainerRight3 = fnElementGetRefFromElement(elMenuContainerRight3, "MenuContainerRight3", "MenuContainerRight3", elBodyMainRightCopy);
    //     elMenuGroup6 = fnElementGetRefFromElement(elMenuGroup6, "MenuGroup6", "MenuGroup6", elBodyMainRightCopy);
    //     // var elMenuGroup6Save = fnElementGetRef(elMenuGroup6Save,"MenuGroup6Save","MenuGroup6Save");
    // }//
    // Body Far Right Area
    //---------------------------------------------------------------//
    elBodyMainRightFar = fnElementGetRef(elBodyMainRightFar, "BodyMainRightFar", "BodyMainRightFar");
    // Other...
    //---------------------------------------------------------------//
    // if (false = true) {
    //     // elBodyMainCenterTopColBreak
    //     elBodyMainCenterTopColBreak = fnElementGetRef(elBodyMainCenterTopColBreak, "BodyMainCenterTopColBreak", "BodyMainCenterTopColBreak");
    //     //
    //     elMenuGroup1ColBreak = fnElementGetRef(elMenuGroup1ColBreak, "MenuGroup1ColBreak", "MenuGroup1ColBreak");
    //     elMenuGroup2ColBreak = fnElementGetRef(elMenuGroup2ColBreak, "MenuGroup2ColBreak", "MenuGroup2ColBreak");
    //     elMenuGroup3ColBreak = fnElementGetRef(elMenuGroup3ColBreak, "MenuGroup3ColBreak", "MenuGroup3ColBreak");
    //     elMenuGroup4ColBreak = fnElementGetRef(elMenuGroup4ColBreak, "MenuGroup4ColBreak", "MenuGroup4ColBreak");
    //     elMenuGroup5ColBreak = fnElementGetRef(elMenuGroup5ColBreak, "MenuGroup5ColBreak", "MenuGroup5ColBreak");
    //     elMenuGroup6ColBreak = fnElementGetRef(elMenuGroup6ColBreak, "MenuGroup6ColBreak", "MenuGroup6ColBreak");
    // }
    //
    //---------------------------------------------------------------//
    //---------------------------------------------------------------//
    //
    javaLoadDelay = false;
    // elBodyFirst = false;
}
// Section Element function (s)
// SectionBlock Element support function (s)
// Count all Blocks in the Center Center Area
function fnElementObjectBlockCount() {
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
function fnElementObjectContainerCreate() {
	//............................................................---//
	// Body Container References
	//............................................................---//
	elBody = fnElementGetRef(elBody, 'BodyBox', 'BodyBox');
	elBodyMainContainer = fnElementGetRef(elBodyMainContainer, 'BodyMainContainer', 'BodyMainContainer');
	// Body Center Area References
	elBodyMainCenter = fnElementGetRef(elBodyMainCenter, 'BodyMainCenter', 'BodyMainCenter');
	// Body Left Area Copy
	elBodyMainLeft = fnElementGetRef(elBodyMainLeft, 'BodyMainLeft', 'BodyMainLeft');
	// Body Right Area Copy
	elBodyMainRight = fnElementGetRef(elBodyMainRight, 'BodyMainRight', 'BodyMainRight');
	//
	elBodyMainCenterCenter = fnElementGetRef(elBodyMainCenterCenter, 'BodyMainCenterCenter', 'BodyMainCenterCenter');
	//
	// elColumnType1 = fnElementGetRef(elColumnType1,'ColumnType1','ColumnType1');
}
// Create all Elements used in Layout
function fnElementObjectCreate() {
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
	fnBodyConsoleShow(DoNotUseHide, DoNotUseDebug);
	// if (elBodyConsoleBoxToggles.style.display = '') { elBodyConsoleBoxToggles.style.display = 'block'; }
	fnBodyConsoleShow(DoNotUseHide, DoUseDebug);
	// if (elBodyConsoleDebugToggles.style.display = '') { elBodyConsoleDebugToggles.style.display = 'block'; }
	//
	//............................................................---//
	// Body Center Area References
	//............................................................---//
	// elBodyMainCenter = fnElementGetRef(elBodyMainCenter,'BodyMainCenter','BodyMainCenter');
	//
	elBodyMainCenterTop = fnElementGetRef(elBodyMainCenterTop, 'BodyMainCenterTop', 'BodyMainCenterTop');
	elBodyMainCenterTopLeft = fnElementGetRef(elBodyMainCenterTopLeft, 'BodyMainCenterTopLeft', 'BodyMainCenterTopLeft');
	elBodyMainCenterTopRight = fnElementGetRef(elBodyMainCenterTopRight, 'BodyMainCenterTopRight', 'BodyMainCenterTopRight');
	//
	elBodyMainCenterTopColBreak = fnElementGetRef(elBodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak');
	//
	// elBodyMainCenterCenter = fnElementGetRef(elBodyMainCenterCenter,'BodyMainCenterCenter','BodyMainCenterCenter');
	//
	elBodyMainCenterBottom = fnElementGetRef(elBodyMainCenterBottom, 'BodyMainCenterBottom', 'BodyMainCenterBottom');
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
	// if (false == true) {
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
	elMenuGroup1 = fnElementGetRefFromElement(elMenuGroup1, 'MenuGroup1', 'MenuGroup1', elBodyMainLeftCopy)
	// elMenuGroup1 = fnElementGetRef(elMenuGroup1,'MenuGroup1','MenuGroup1');
	// elMenuGroup1 = fnElementGetRefFromElement(elMenuGroup1, elMenuGroup1.id, elMenuGroup1.name, elBodyMainLeft)
	// var elMenuGroup1Save = fnElementGetRef(elMenuGroup1Save,'MenuGroup1Save','MenuGroup1Save');
	// Left 2
	elMenuContainerLeft2 = fnElementGetRefFromElement(elMenuContainerLeft2, 'MenuContainerLeft2', 'MenuContainerLeft2', elBodyMainLeftCopy)
	// elMenuContainerLeft2 = fnElementGetRef(elMenuContainerLeft2,'MenuContainerLeft2','MenuContainerLeft2');
	elMenuGroup2 = fnElementGetRefFromElement(elMenuGroup2, 'MenuGroup2', 'MenuGroup2', elBodyMainLeftCopy)
	// elMenuGroup2 = fnElementGetRef(elMenuGroup2,'MenuGroup2','MenuGroup2');
	// var elMenuGroup2Save = fnElementGetRef(elMenuGroup2Save,'MenuGroup2Save','MenuGroup2Save');
	// Left 3
	elMenuContainerLeft3 = fnElementGetRefFromElement(elMenuContainerLeft3, 'MenuContainerLeft3', 'MenuContainerLeft3', elBodyMainLeftCopy)
	// elMenuContainerLeft3 = fnElementGetRef(elMenuContainerLeft3,'MenuContainerLeft3','MenuContainerLeft3');
	elMenuGroup3 = fnElementGetRefFromElement(elMenuGroup3, 'MenuGroup3', 'MenuGroup3', elBodyMainLeftCopy)
	// elMenuGroup3 = fnElementGetRef(elMenuGroup3,'MenuGroup3','MenuGroup3');
	// var elMenuGroup3Save = fnElementGetRef(elMenuGroup3Save,'MenuGroup3Save','MenuGroup3Save');
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
	elBodyMenuLayout2 = fnElementGetRef(elBodyMenuLayout2, 'BodyMenuLayout2', 'BodyMenuLayout2');
	//
	elMenuContainerRight1 = fnElementGetRefFromElement(elMenuContainerRight1, 'MenuContainerRight1', 'MenuContainerRight1', elBodyMainRightCopy);
	// elMenuContainerRight1 = fnElementGetRef(elMenuContainerRight1,'MenuContainerRight1','MenuContainerRight1');
	elMenuGroup4 = fnElementGetRefFromElement(elMenuGroup4, 'elMenuGroup4', 'elMenuGroup4', elBodyMainRightCopy);
	// var elMenuGroup4Save = fnElementGetRef(elMenuGroup4Save,'MenuGroup4Save','MenuGroup4Save');
	elMenuContainerRight2 = fnElementGetRefFromElement(elMenuContainerRight2, 'MenuContainerRight2', 'MenuContainerRight2', elBodyMainRightCopy);
	elMenuGroup5 = fnElementGetRefFromElement(elMenuGroup5, 'MenuGroup5', 'MenuGroup5', elBodyMainRightCopy);
	// var elMenuGroup5Save = fnElementGetRef(elMenuGroup5Save,'MenuGroup5Save','MenuGroup5Save');
	elMenuContainerRight3 = fnElementGetRefFromElement(elMenuContainerRight3, 'MenuContainerRight3', 'MenuContainerRight3', elBodyMainRightCopy);
	elMenuGroup6 = fnElementGetRefFromElement(elMenuGroup6, 'MenuGroup6', 'MenuGroup6', elBodyMainRightCopy);
	// var elMenuGroup6Save = fnElementGetRef(elMenuGroup6Save,'MenuGroup6Save','MenuGroup6Save');
	//
	//............................................................---//
	// Body Far Right Area
	//............................................................---//
	elBodyMainRightFar = fnElementGetRef(elBodyMainRightFar, 'BodyMainRightFar', 'BodyMainRightFar');
	//
	//............................................................---//
	// Other...
	//............................................................---//
	// elBodyMainCenterTopColBreak
	elBodyMainCenterTopColBreak = fnElementGetRef(elBodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak');
	//
	elMenuGroup1ColBreak = fnElementGetRef(elMenuGroup1ColBreak, 'MenuGroup1ColBreak', 'MenuGroup1ColBreak');
	elMenuGroup2ColBreak = fnElementGetRef(elMenuGroup2ColBreak, 'MenuGroup2ColBreak', 'MenuGroup2ColBreak');
	elMenuGroup3ColBreak = fnElementGetRef(elMenuGroup3ColBreak, 'MenuGroup3ColBreak', 'MenuGroup3ColBreak');
	elMenuGroup4ColBreak = fnElementGetRef(elMenuGroup4ColBreak, 'MenuGroup4ColBreak', 'MenuGroup4ColBreak');
	elMenuGroup5ColBreak = fnElementGetRef(elMenuGroup5ColBreak, 'MenuGroup5ColBreak', 'MenuGroup5ColBreak');
	elMenuGroup6ColBreak = fnElementGetRef(elMenuGroup6ColBreak, 'MenuGroup6ColBreak', 'MenuGroup6ColBreak');
	//
	//............................................................---//
	//............................................................---//
	//
	// document.recalc();
	//
	javaLoadFirst = false;
	// elBodyFirst = false;
}

var script_state = "MdmPage loaded";
