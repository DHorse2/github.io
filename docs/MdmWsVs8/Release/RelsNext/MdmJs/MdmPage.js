//
// SectionBlock Body Layout Element Objects:
// ...................................... //
// Body Container
var body;
var bodyFirst = true;
// Body Container
var bodyMainContainer;
var bodyMainContainerFirst = true;
//
// Banner (Top Menu, Logo and Graphics
var bodyBanner;
var bodyBannerFirst = true;
var bodyBannerTop;
var bodyBannerBottom;
//
var bodyViewToggleContainerFirst = true;
// View, Console and Debug Toggle Buttons
var bodyViewToggleContainer;
var bodyViewToggleContainerFirst = true;
var bodyViewToggleContainerCenter;
var bodyViewToggleContainerLeft;
//
var consoleMouseOverToggle;
var consoleMainToggle;
//
// Body Center Area
var bodyMainCenter;
var bodyMainCenterFirst = true;
var bodyMainCenterTop;
var bodyMainCenterTopLeft;
var bodyMainCenterTopRight;
var bodyMainCenterCenter;
var bodyMainCenterBottom;
var bodyMainCenterTopColBreak;
//
// Body Left Area
var bodyMainLeft;
var bodyMainLeftFirst = true;
var bodyMainLeftCopy;
var bodyMainLeftCurr; // Current
var bodyMainLeftOrig; // Original
var bodyLayoutMenu1;
var bodyMainLeftOuter;
var bodyMainLeftInner;

// Body Right Area
var bodyMainRight;
var bodyMainRightFirst = true;
var bodyMainRightCopy;
var bodyMainRightCurr; // Current
var bodyMainRightOrig; // Original
var bodyLayoutMenu2;
var bodyMainRightOuter;
var bodyMainRightInner;
var bodyMenuContainerRight1;
// Body Far Right Area
var bodyMainRightFar;
var bodyMainRightFarFirst = true;
//
var layoutBodyColumnType1First = true;

// var bodyMenuContainer;
// var bodyMenuGroup;
// var bodyMenuGroupSave;

//
// Other...
var elMenuLeft1ColBreak;
var elMenuLeft2ColBreak;
var elMenuLeft3ColBreak;
var elMenuRight1ColBreak;
var elMenuRight2ColBreak;
var elMenuRight3ColBreak;
//
var bodyImageContainer;
var bodyMenuImageContainer;

// bodyMainCenterTopColBreak
var bodyMainCenterTopColBreak;
//
var layoutBodyColumnType1 = true;
// Global Objects - GLOBAL / COMMON
// ------------------------------------------------------------------------------------- _//
// // MENUS - Menu Image Objects, Menu Image Pointers
// var oObjIndex = 1;
// var oObjGroupIndex = 1;
// var oObjParentIndex = 1;
// var oObjRootIndex = 0;
// // Menu Image Objects
// var oObj;
// var oObjImage;
// var oObjParent;
// var oObjLarge;
// var oObjImageLarge;
// var oObjText = "";
// // Menu Image Size
// var oObjImageSizeSmall = 150;
// var oObjImageSizeLarge = 600;
// var oObjImageSizeRatio = 0.7;
// var oObjImageSize = 0;
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
	if (imgFocus == menuImageCn) {
		//    menuImage.src = menuImage.name + "/" + menuImage.name + "fh.gif";
	}
	else {
		//    menuImage.src = menuImage.name + "/" + menuImage.name + "bh.gif";
	}
	var tempTop = menuImage.parentNode.top;
	var tempLeft = menuImage.parentNode.left;
}
// Mouse Out
////////////////////////////////////////////////
function MouseOutImg(menuImage) {
	menuImageCn = oObjIndexSetmenuImageCn(menuImage);
	if (menuImageCn > imgUsedCn) {
		return;
	}
	imgMouseHover[menuImageCn] = 0;
	if (imgFocus == menuImageCn) {
		//    menuImage.src = menuImage.name + "/" + menuImage.name + "f.gif";
	} else {
		//    menuImage.src = menuImage.name + "/" + menuImage.name + "b.gif";
	}
}
// Mouse Click
////////////////////////////////////////////////
function MouseClickImg(menuImage) {
	menuImageGroup = 0;
	menuImageItem = 0;
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
	if ((UseLog || UseDebug)
		&& UseLogEvents) {
		MessageLog(null, DoNotUseDebug, DoUseSingleLine,
			"Getting " + menuImageCn + ": " + menuImage.Name,
			'MdmPage:MouseClickImg', 209, 0, null, null,
			errorIsComment, errorDoNotDisplayTag, UseAlert);
	}
	imgSelect = menuImageCn;
	//  document.parentWindow.parent.imgSelect = menuImageCn;
	//  alert(document.parentWindow.parent);
	//  document.parentWindow.tabframe.imgSelect = menuImageCn;
	//  alert(document.parentWindow.tabframe);
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
// Create all Elements used in Layout
function ElementObjectContainerCreate() {
	script_state = "MdmPage:ElementObjectContainerCreate.";
	//............................................................---//
	// Body Container References
	//............................................................---//
	try {
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
		//............................................................---//
		script_state = "MdmPage:ElementObjectContainerCreate completed.";

	} catch (elementObjectCreateErr) {
		// Errors:
		// ...................................... //
		ErrorCaught(elementObjectCreateErr, script_state, errorIsSevere);
		// script_state = "Form sync: aborted with an error";
	} finally {
		// ...................................... //
		try {
			if ((UseLog || UseDebug)
				&& UseLogConsole) {
				MessageLog(null, DoNotUseDebug, DoUseSingleLine,
					'Page Main Element Object creation completed.',
					script_state, 1211, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
			}
			//
		} catch (elementObjectCreateErr) {
			script_state = "Logging is offline";
			ErrorCaught(elementObjectCreateErr, script_state, errorIsSevere);
			script_state = "'Page Main Element Object creation aborted with an error";
		}
	}
}

// Create all Elements used in Layout
function ElementObjectCreate() {
	// State change at top to avoid duplicate calls.
	loadFirstJava = false;
	// bodyFirst = false;
	script_state = "ElementObjectCreate in progress.";
	//............................................................---//
	// Body Container References
	//............................................................---//
	try {
		ElementObjectContainerCreate();
		//
		if (!loadDelayMenuImage) {
			MdmMenuImageInit();
			// bodyMenuImageContainer =
			MenuImagesHtmlBuild();
		}
		//............................................................---//
		// Banner References (Top Menu, Logo and Graphics)
		//............................................................---//
		bodyBanner = ElementGetRef(bodyBanner, 'BodyBanner', 'BodyBanner');
		bodyBannerTop = ElementGetRef(bodyBannerTop, 'BodyBannerTop', 'BodyBannerTop');
		bodyBannerBottom = ElementGetRef(bodyBannerBottom, 'BodyBannerBottom', 'BodyBannerBottom');
		bodyBannerBottomFirst = false;
		//
		//............................................................---//
		// Body View Toggle and Message Area Containers
		//............................................................---//
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
		// ConsoleStateInit();
		consoleTestBox = ElementGetRef(consoleTestBox, 'BodyConsoleTestBox', 'BodyConsoleTestBox');
		consoleTestTextBox = ElementGetRef(consoleTestTextBox, 'BodyConsoleTestTextBox', 'BodyConsoleTestTextBox');
		//
		// if (consoleBox.style.display == '') { consoleBox.style.display = 'none' }
		// if (consoleErrorBox.style.display == '') { consoleErrorBox.style.display = 'block'; }
		// if (consoleEventBox.style.display == '') { consoleEventBox.style.display = 'block'; }
		// if (consoleStateBox.style.display == '') { consoleStateBox.style.display = 'block'; }
		// if (consoleTestBox.style.display == '') { consoleTestBox.style.display = 'block'; }
		// //
		// ConsoleShow(DoNotUseHide, DoNotUseDebug); // todo
		// if (consoleToggle.style.display = '') { consoleToggle.style.display = 'block'; }
		// ConsoleShow(DoNotUseHide, DoUseDebug);
		// if (consoleDebugToggle.style.display == '') { consoleDebugToggle.style.display = 'block'; }

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
		bodyMainCenterCenter = ElementGetRef(bodyMainCenterCenter, 'BodyMainCenterCenter', 'BodyMainCenterCenter');
		//
		bodyMainCenterBottom = ElementGetRef(bodyMainCenterBottom, 'BodyMainCenterBottom', 'BodyMainCenterBottom');

		// Toggle buttons
		//............................................................---//
		bodyViewToggleContainerLeft = ElementGetRef(bodyViewToggleContainer, 'BodyViewToggleContainerLeft', 'BodyViewToggleContainerLeft');
		bodyViewToggleContainer = ElementCopy(false, "", null, bodyViewToggleContainer, bodyViewToggleContainerLeft, 'block');
		ElementObjectToggleCreate(false, "", bodyViewToggleContainerLeft);

		// Body Left Area Copy
		//............................................................---//
		// bodyMainLeft = ElementGetRef(bodyMainLeft,'BodyMainLeft','BodyMainLeft');// createElement
		bodyMainLeft = ElementGetRef(bodyMainLeft, 'BodyMainLeft', 'BodyMainLeft');
		bodyMainLeftCopy = ElementCopy(false, "", bodyMainLeftCopy, bodyMainLeftFirst, bodyMainLeft, 'block');
		bodyMainLeftCurr = ElementCopy(false, "", bodyMainLeftCurr, bodyMainLeftFirst, bodyMainLeft, 'block');
		bodyMainLeftOrig = ElementCopy(false, "", bodyMainLeftOrig, bodyMainLeftFirst, bodyMainLeft, 'block');
		//
		// if (false == true) {
		bodyMainLeftOuter = ElementGetFromElementExt(bodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', bodyMainLeftCopy, DoFindReturn, null)
		// bodyMainLeftOuter = ElementGetRef(bodyMainLeftOuter,'BodyMainLeftOuter','BodyMainLeftOuter');
		bodyMainLeftInner = ElementGetFromElementExt(bodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', bodyMainLeftCopy, DoFindReturn, null)
		// bodyMainLeftInner = ElementGetRef(bodyMainLeftInner,'BodyMainLeftInner','BodyMainLeftInner');
		bodyMainLeftFirst = false;
		//
		bodyLayoutMenu1 = ElementGetFromElementExt(bodyLayoutMenu1, 'BodyMenuLayout1', 'BodyMenuLayout1', bodyMainLeftCopy, DoFindReturn, null)
		// bodyLayoutMenu1 = ElementGetRef(bodyLayoutMenu1,'BodyMenuLayout1','BodyMenuLayout1');

		// for (bodyMenuGroupIndex=0; bodyMenuGroupIndex =< bodyMenuGroupUsedCn; bodyMenuGroupIndex++) {
		// 	//
		// }
		// Left 1 todo can this be abstracted? or additional script in Page?
		bodyMenuContainer[bodyMenuLeft][1] = ElementGetFromElementExt(bodyMenuContainer[bodyMenuLeft][1], 'MenuContainerLeft1', 'MenuContainerLeft1', bodyMainLeftCopy, DoFindReturn, null)
		// bodyMenuContainer[bodyMenuLeft][1] = ElementGetRef(bodyMenuContainer[bodyMenuLeft][1],'MenuContainerLeft1','MenuContainerLeft1');
		bodyMenuGroup[1] = ElementGetFromElementExt(bodyMenuGroup[1], 'MenuGroup1', 'MenuGroup1', bodyMainLeftCopy, DoFindReturn, null)
		// bodyMenuGroup1 = ElementGetRef(bodyMenuGroup1,'MenuGroup1','MenuGroup1');
		// bodyMenuGroup1 = ElementGetFromElement(bodyMenuGroup1, bodyMenuGroup1.id, bodyMenuGroup1.name, bodyMainLeft)
		// var bodyMenuGroupSave[1] = ElementGetRef(bodyMenuGroupSave[1],'MenuGroup1Save','MenuGroup1Save');
		// Left 2
		bodyMenuContainer[bodyMenuLeft][2] = ElementGetFromElementExt(bodyMenuContainer[bodyMenuLeft][2], 'MenuContainerLeft2', 'MenuContainerLeft2', bodyMainLeftCopy)
		// bodyMenuContainer[bodyMenuLeft][2] = ElementGetRef(bodyMenuContainer[bodyMenuLeft][2],'MenuContainerLeft2','MenuContainerLeft2');
		bodyMenuGroup[2] = ElementGetFromElementExt(bodyMenuGroup[2], 'MenuGroup2', 'MenuGroup2', bodyMainLeftCopy, DoFindReturn, null)
		// bodyMenuGroup[2] = ElementGetRef(bodyMenuGroup[2],'MenuGroup2','MenuGroup2');
		// var bodyMenuGroup[2]Save = ElementGetRef(bodyMenuGroup[2]Save,'MenuGroup2Save','MenuGroup2Save');
		// Left 3
		bodyMenuContainer[bodyMenuLeft][3] = ElementGetFromElementExt(bodyMenuContainer[bodyMenuLeft][3], 'MenuContainerLeft3', 'MenuContainerLeft3', bodyMainLeftCopy, DoFindReturn, null)
		// bodyMenuContainer[bodyMenuLeft][3] = ElementGetRef(bodyMenuContainer[bodyMenuLeft][3],'MenuContainerLeft3','MenuContainerLeft3');
		bodyMenuGroup[3] = ElementGetFromElementExt(bodyMenuGroup[3], 'MenuGroup3', 'MenuGroup3', bodyMainLeftCopy, DoFindReturn, null)
		// bodyMenuGroup[3] = ElementGetRef(bodyMenuGroup[3],'MenuGroup3','MenuGroup3');
		// var bodyMenuGroup[3]Save = ElementGetRef(bodyMenuGroup[3]Save,'MenuGroup3Save','MenuGroup3Save');
		// }
		// Left N - you can have up Max on either side.
		// Here it's 3 Left & 1 Right
		//............................................................---//
		// Body Right Area Copy
		//............................................................---//
		bodyMainRight = ElementGetRef(bodyMainRight, 'BodyMainRight', 'BodyMainRight');
		bodyMainRightCopy = ElementCopy(false, "", bodyMainRightCopy, bodyMainRightFirst, bodyMainRight, 'block');
		bodyMainRightCurr = ElementCopy(false, "", bodyMainRightCurr, bodyMainRightFirst, bodyMainRight, 'block');
		bodyMainRightOrig = ElementCopy(false, "", bodyMainRightOrig, bodyMainRightFirst, bodyMainRight, 'block');
		//
		bodyMainRightOuter = ElementGetFromElementExt(bodyMainRightOuter, 'BodyMainRightOuter', 'BodyMainRightOuter', bodyMainRightCopy, DoFindReturn, null)
		// bodyMainRightOuter = ElementGetRef(bodyMainRightOuter,'BodyMainRightOuter','BodyMainRightOuter');
		bodyMainRightInner = ElementGetFromElementExt(bodyMainRightInner, 'BodyMainRightInner', 'BodyMainRightInner', bodyMainRightCopy, DoFindReturn, null)
		// bodyMainRightInner = ElementGetRef(bodyMainRightInner,'BodyMainRightInner','BodyMainRightInner');
		bodyMainRightFirst = false;
		//
		bodyLayoutMenu2 = ElementGetRef(bodyLayoutMenu2, 'BodyMenuLayout2', 'BodyMenuLayout2');
		//
		// Right (4)
		bodyMenuContainer[bodyMenuRight][1] = ElementGetFromElementExt(bodyMenuContainer[bodyMenuRight][1], 'MenuContainerRight1', 'MenuContainerRight1', bodyMainRightCopy);
		bodyMenuGroup[4] = ElementGetFromElementExt(bodyMenuGroup[4], 'MenuGroup4', 'MenuGroup4', bodyMainRightCopy);
		// var bodyMenuGroup4Save = ElementGetRef(bodyMenuGroup4Save,'MenuGroup4Save','MenuGroup4Save');
		// Right (5)
		bodyMenuContainer[bodyMenuRight][2] = ElementGetFromElementExt(bodyMenuContainer[bodyMenuRight][2], 'MenuContainerRight2', 'MenuContainerRight2', bodyMainRightCopy);
		bodyMenuGroup[5] = ElementGetFromElementExt(bodyMenuGroup[5], 'MenuGroup5', 'MenuGroup5', bodyMainRightCopy);
		// var bodyMenuGroup5Save = ElementGetRef(bodyMenuGroup5Save,'MenuGroup5Save','MenuGroup5Save');
		// Right (6)
		bodyMenuContainer[bodyMenuRight][3] = ElementGetFromElementExt(bodyMenuContainer[bodyMenuRight][3], 'MenuContainerRight3', 'MenuContainerRight3', bodyMainRightCopy);
		bodyMenuGroup[6] = ElementGetFromElementExt(bodyMenuGroup[6], 'MenuGroup6', 'MenuGroup6', bodyMainRightCopy);
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
		// bodyMenuGroupColBreak[1] = ElementGetRef(bodyMenuGroupColBreak[1], 'MenuGroup1ColBreak', 'MenuGroup1ColBreak');
		// bodyMenuGroupColBreak[2] = ElementGetRef(bodyMenuGroupColBreak[2], 'MenuGroup2ColBreak', 'MenuGroup2ColBreak');
		// bodyMenuGroupColBreak[3] = ElementGetRef(bodyMenuGroupColBreak[3], 'MenuGroup3ColBreak', 'MenuGroup3ColBreak');
		// bodyMenuGroupColBreak[4] = ElementGetRef(bodyMenuGroupColBreak[4], 'MenuGroup4ColBreak', 'MenuGroup4ColBreak');
		// bodyMenuGroupColBreak[5] = ElementGetRef(bodyMenuGroupColBreak[5], 'MenuGroup5ColBreak', 'MenuGroup5ColBreak');
		// bodyMenuGroupColBreak[6] = ElementGetRef(bodyMenuGroupColBreak[6], 'MenuGroup6ColBreak', 'MenuGroup6ColBreak');
		//
		//............................................................---//
		script_state = "ElementObjectCreate completed.";

	} catch (elementObjectCreateErr) {
		// Errors:
		// ...................................... //
		ErrorCaught(elementObjectCreateErr, script_state, errorIsSevere);
		// script_state = "Form sync: aborted with an error";
	} finally {
		// ...................................... //
		try {
			if ((UseLog || UseDebug)
				&& UseLogConsole) {
				MessageLog(null, DoNotUseDebug, DoUseSingleLine,
					'Form Element Object creation completed.',
					script_state, 1211, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
			}
			//
		} catch (elementObjectCreateErr) {
			script_state = "Logging is offline";
			ErrorCaught(elementObjectCreateErr, script_state, errorIsSevere);
			script_state = "'Form Element Object creation aborted with an error";
		}
	}
	//............................................................---//
	//
	// document.recalc();
	//
	loadFirstJava = false;
	// bodyFirst = false;
}

// Create toggle objects
function ElementObjectToggleCreate(UsePrefixPassed, prefixPassed, bodyViewToggleContainerPassed) {
	//
	if (!prefixPassed || !UsePrefixPassed) { prefixPassed = ''; }
	//
	consoleMouseOverToggle = ElementGetFromElement(consoleMouseOverToggle, 'BodyConsoleMouseOverToggle' + prefixPassed, 'BodyConsoleMouseOverToggle', bodyViewToggleContainerPassed)
	// consoleMouseOverToggle = ElementGetRef(consoleMouseOverToggle, 'BodyConsoleMouseOverToggle', 'BodyConsoleMouseOverToggle');
	//
	//............................................................---//
	// Body Console Toggle and Message Area
	//............................................................---//
	// Toggle Buttons
	consoleBoxButtons = ElementGetFromElement(consoleBoxButtons, 'BodyConsoleBoxButtons' + prefixPassed, 'BodyConsoleBoxButtons', bodyViewToggleContainerPassed)
	// consoleBoxButtons = ElementGetRef(consoleBoxButtons, 'BodyConsoleBoxButtons', 'BodyConsoleBoxButtons');
	//
	consoleToggles = ElementGetFromElement(consoleToggles, 'BodyConsoleBoxToggles' + prefixPassed, 'BodyConsoleBoxToggles', bodyViewToggleContainerPassed)
	// consoleToggles = ElementGetRef(consoleToggles, 'BodyConsoleBoxToggles', 'BodyConsoleBoxToggles');

	// consoleBox = ElementGetFromElement(bodyMainLeftOuter, 'BodyUseLogToggles' + prefixPassed, 'BodyUseLogToggles', bodyViewToggleContainerPassed)
	// // UseLogToggles = ElementGetRef(UseLogToggles, 'BodyUseLogToggles', 'BodyUseLogToggles');
	// consoleBox = ElementGetFromElement(bodyMainLeftOuter, 'BodyConsoleAuxillaryToggles' + prefixPassed, 'BodyConsoleAuxillaryToggles', bodyViewToggleContainerPassed)
	// // consoleAuxillaryToggles = ElementGetRef(consoleAuxillaryToggles, 'BodyConsoleAuxillaryToggles', 'BodyConsoleAuxillaryToggles');

	// Console Toggle
	consoleToggle = ElementGetFromElement(consoleToggle, 'BodyConsoleToggle' + prefixPassed, 'BodyConsoleToggle', bodyViewToggleContainerPassed)
	// consoleToggle = ElementGetRef(consoleToggle, 'BodyConsoleToggle', 'BodyConsoleToggle');
	consoleErrorToggle = ElementGetFromElement(consoleErrorToggle, 'BodyConsoleErrorToggle' + prefixPassed, 'BodyConsoleErrorToggle', bodyViewToggleContainerPassed)
	// consoleErrorToggle = ElementGetRef(consoleErrorToggle, 'BodyConsoleErrorToggle', 'BodyConsoleErrorToggle');
	consoleEventToggle = ElementGetFromElement(consoleEventToggle, 'BodyConsoleEventToggle' + prefixPassed, 'BodyConsoleEventToggle', bodyViewToggleContainerPassed)
	// consoleEventToggle = ElementGetRef(consoleEventToggle, 'BodyConsoleEventToggle', 'BodyConsoleEventToggle');
	consoleStateToggle = ElementGetFromElement(consoleStateToggle, 'BodyConsoleStateToggle' + prefixPassed, 'BodyConsoleStateToggle', bodyViewToggleContainerPassed)
	// consoleStateToggle = ElementGetRef(consoleStateToggle, 'BodyConsoleStateToggle', 'BodyConsoleStateToggle');
	consoleTestToggle = ElementGetFromElement(consoleTestToggle, 'BodyConsoleTestToggle' + prefixPassed, 'BodyConsoleTestToggle', bodyViewToggleContainerPassed)
	// consoleTestToggle = ElementGetRef(consoleTestToggle, 'BodyConsoleTestToggle', 'BodyConsoleTestToggle');
	consoleClearToggle = ElementGetFromElement(consoleClearToggle, 'BodyConsoleClearToggle' + prefixPassed, 'BodyConsoleClearToggle', bodyViewToggleContainerPassed)
	// consoleClearToggle = ElementGetRef(consoleClearToggle, 'BodyConsoleClearToggle', 'BodyConsoleClearToggle');

	// Debug
	consoleDebugButtons = ElementGetFromElement(consoleDebugButtons, 'BodyConsoleDebugButtons' + prefixPassed, 'BodyConsoleDebugButtons', bodyViewToggleContainerPassed)
	// consoleDebugButtons = ElementGetRef(consoleDebugButtons, 'BodyConsoleDebugButtons', 'BodyConsoleDebugButtons');
	//
	consoleDebugToggles = ElementGetFromElement(consoleDebugToggles, 'BodyConsoleDebugToggles' + prefixPassed, 'BodyConsoleDebugToggles', bodyViewToggleContainerPassed)
	// consoleDebugToggles = ElementGetRef(consoleDebugToggles, 'BodyConsoleDebugToggles', 'BodyConsoleDebugToggles');
	consoleDebugMainToggles = ElementGetFromElement(consoleDebugMainToggles, 'BodyConsoleDebugMainToggles' + prefixPassed, 'BodyConsoleDebugMainToggles', bodyViewToggleContainerPassed)
	// consoleDebugMainToggles = ElementGetRef(consoleDebugMainToggles, 'BodyConsoleDebugMainToggles', 'BodyConsoleDebugMainToggles');
	consoleDebugTypesToggles = ElementGetFromElement(consoleDebugTypesToggles, 'BodyConsoleDebugTypesToggles' + prefixPassed, 'BodyConsoleDebugTypesToggles', bodyViewToggleContainerPassed)
	// consoleDebugTypesToggles = ElementGetRef(consoleDebugTypesToggles, 'BodyConsoleDebugTypesToggles', 'BodyConsoleDebugTypesToggles');
	//
	consoleDebugToggle = ElementGetFromElement(consoleDebugToggle, 'BodyConsoleDebugToggle' + prefixPassed, 'BodyConsoleDebugToggle', bodyViewToggleContainerPassed)
	// consoleDebugToggle = ElementGetRef(consoleDebugToggle, 'BodyConsoleDebugToggle', 'BodyConsoleDebugToggle');

	// Animation
	consoleDebugAnimationToggle = ElementGetFromElement(consoleDebugAnimationToggle, 'BodyConsoleDebugAnimationToggle' + prefixPassed, 'BodyConsoleDebugAnimationToggle', bodyViewToggleContainerPassed)
	// consoleDebugAnimationToggle = ElementGetRef(consoleDebugAnimationToggle, 'BodyConsoleDebugAnimationToggle', 'BodyConsoleDebugAnimationToggle');

	consoleDebugMoveToggle = ElementGetFromElement(consoleDebugMoveToggle, 'BodyConsoleDebugMoveToggle' + prefixPassed, 'BodyConsoleDebugMoveToggle', bodyViewToggleContainerPassed)
	// consoleDebugMoveToggle = ElementGetRef(consoleDebugMoveToggle, 'BodyConsoleDebugMoveToggle', 'BodyConsoleDebugMoveToggle');
	consoleDebugTransitionToggle = ElementGetFromElement(consoleDebugTransitionToggle, 'BodyConsoleDebugTransitionToggle' + prefixPassed, 'BodyConsoleDebugTransitionToggle', bodyViewToggleContainerPassed)
	// consoleDebugTransitionToggle = ElementGetRef(consoleDebugTransitionToggle, 'BodyConsoleDebugTransitionToggle', 'BodyConsoleDebugTransitionToggle');
	consoleDebugDetailToggle = ElementGetFromElement(consoleDebugDetailToggle, 'BodyConsoleDebugDetailToggle' + prefixPassed, 'BodyConsoleDebugDetailToggle', bodyViewToggleContainerPassed)
	// consoleDebugDetailToggle = ElementGetRef(consoleDebugDetailToggle, 'BodyConsoleDebugDetailToggle', 'BodyConsoleDebugDetailToggle');

	consoleDebugAllToggle = ElementGetFromElement(consoleDebugAllToggle, 'BodyConsoleDebugAllToggle' + prefixPassed, 'BodyConsoleDebugAllToggle', bodyViewToggleContainerPassed)
	// consoleDebugAllToggle = ElementGetRef(consoleDebugAllToggle, 'BodyConsoleDebugAllToggle', 'BodyConsoleDebugAllToggle');
	consoleDebugOnErrorToggle = ElementGetFromElement(consoleDebugOnErrorToggle, 'BodyConsoleDebugOnErrorToggle' + prefixPassed, 'BodyConsoleDebugOnErrorToggle', bodyViewToggleContainerPassed)
	// consoleDebugOnErrorToggle = ElementGetRef(consoleDebugOnErrorToggle, 'BodyConsoleDebugOnErrorToggle', 'BodyConsoleDebugOnErrorToggle');
	consoleDebugAllDetailToggle = ElementGetFromElement(consoleDebugAllDetailToggle, 'BodyConsoleDebugAllDetailToggle' + prefixPassed, 'BodyConsoleDebugAllDetailToggle', bodyViewToggleContainerPassed)
	// consoleDebugAllDetailToggle = ElementGetRef(consoleDebugAllDetailToggle, 'BodyConsoleDebugAllDetailToggle', 'BodyConsoleDebugAllDetailToggle');

	consoleDebugEventsToggle = ElementGetFromElement(consoleDebugEventsToggle, 'BodyConsoleDebugEventsToggle' + prefixPassed, 'BodyConsoleDebugEventsToggle', bodyViewToggleContainerPassed)
	// consoleDebugEventsToggle = ElementGetRef(consoleDebugEventsToggle, 'BodyConsoleDebugEventsToggle', 'BodyConsoleDebugEventsToggle');

	consoleDebugHoverToggle = ElementGetFromElement(consoleDebugHoverToggle, 'BodyConsoleDebugHoverToggle' + prefixPassed, 'BodyConsoleDebugHoverToggle', bodyViewToggleContainerPassed)
	// consoleDebugHoverToggle = ElementGetRef(consoleDebugHoverToggle, 'BodyConsoleDebugHoverToggle', 'BodyConsoleDebugHoverToggle');

	// Layout & framework
	consoleDebugConsoleToggle = ElementGetFromElement(consoleDebugConsoleToggle, 'BodyConsoleDebugConsoleToggle' + prefixPassed, 'BodyConsoleDebugConsoleToggle', bodyViewToggleContainerPassed)
	// consoleDebugConsoleToggle = ElementGetRef(consoleDebugConsoleToggle, 'BodyConsoleDebugConsoleToggle', 'BodyConsoleDebugConsoleToggle');
	consoleDebugLayoutToggle = ElementGetFromElement(consoleDebugLayoutToggle, 'BodyConsoleDebugLayoutToggle' + prefixPassed, 'BodyConsoleDebugLayoutToggle', bodyViewToggleContainerPassed)
	// consoleDebugLayoutToggle = ElementGetRef(consoleDebugLayoutToggle, 'BodyConsoleDebugLayoutToggle', 'BodyConsoleDebugLayoutToggle');
	consoleDebugWindowToggle = ElementGetFromElement(consoleDebugWindowToggle, 'BodyConsoleDebugWindowToggle' + prefixPassed, 'BodyConsoleDebugWindowToggle', bodyViewToggleContainerPassed)
	// consoleDebugWindowToggle = ElementGetRef(consoleDebugWindowToggle, 'BodyConsoleDebugWindowToggle', 'BodyConsoleDebugWindowToggle');

	ConsoleToggleButtonSet();
	consoleDebugHoverToggle = ElementGetFromElement(consoleDebugHoverToggle, 'BodyConsoleDebugHoverToggle' + prefixPassed, 'BodyConsoleDebugHoverToggle', bodyViewToggleContainerPassed)
	// consoleDebugHoverToggle = ElementGetRef(consoleDebugHoverToggle, 'BodyConsoleDebugHoverToggle', 'BodyConsoleDebugHoverToggle');
}
script_state = "Mdm Standard Page functions loaded. (Body Elements, Element Object, MouseEvent)";
if (debugLoadIsOn) { debugger; }
