// Window Functions
////////////////////////////////////////////////
// Window Events (Load, Resize)
// Misc:
var boxClass;
var columnType;
// Window Load
////////////////////////////////////////////////
// // Document Window OnLoad:
// window.onload = function () { fnlayoutWindowOnload(); }
function fnlayoutWindowOnload() {
    // Error handling
    // window.onerror = function() { fnWindowError(); };
    // Initialize and Set Global Variables
    fnDocumentLoadInit();
    // Build Body Images Div
    if (!bodyImageLoadDelay) {
        elBodyImageContainer = fnBodyImagesHtmlBuild();
    }
    // Build Menu Images Div
    if (!menuImageLoadDelay) {
        elBodyMenuImageContainer = fnMenuImagesHtmlBuild();
    }
    // Docuement Element Initialize & Store Original Menu Columns.
    if (!javaLoadDelay) {
        // Initialize and save
        fnElementObjectCreate();
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
    // window.onload= "fnDocumentLoadInit();";
}
// Document Window Resize
// Adjustments:
var layoutWidthMargin = 60; // ??? really?
var layoutHeightMargin = 50;
var layoutMenuHeightMax = 0;
// Client Window Size
var layoutWidthPrev = 0;
var layoutHeightPrev = 0;
// Current Layout Strategy
var layoutIsWide = false;
var layoutIsStandard = true;
// //
// window.onresize = function () { fnlayoutWindowResize(); }
function fnlayoutWindowResize() {
    // Recalculate Screen Display
    //
    ////////////////////////////////////////////////
    // Recalculate Globals for Screen
    //
    fnWindowClientWidth();
    ////////////////////////////////////////////////
    // Load Containers if missing
    if (!elBodyMainLeft) { fnElementObjectContainerCreate(); }
    ////////////////////////////////////////////////
    // Recalculate Positions for Menu Images
    // if (BodyMainCenterCenter.offsetWidth > 900) {
    if (layoutDocumentWidth > layoutDocumentWidthMin) {
        // Are menus visible? todo
        if (layoutIndex = layoutStandard) {
            // Left
            // elBodyMainLeft.style.top = 0%
            // elBodyMainLeft.style.left = "0%";
            elBodyMainLeft.style.width = "12%";
            // elBodyMainLeft.style.width = "10%";
            // elBodyMainLeft.style.width = "15%";
            //
            // Center
            // elBodyMainCenter.style.top = 0%
            elBodyMainCenter.style.left = "12%";
            elBodyMainCenter.style.width = "76%";
            // elBodyMainCenter.style.left = "10%";
            // elBodyMainCenter.style.width = "80%";
            // elBodyMainCenter.style.left = "15%";
            // elBodyMainCenter.style.width = "70%";
            //
            // Right
            // elBodyMainRight.style.top = 0%
            elBodyMainRight.style.left = "88%";
            elBodyMainRight.style.width = "12%";
            // elBodyMainRight.style.left = "90%";
            // elBodyMainRight.style.width = "10%";
            // elBodyMainRight.style.left = "85%";
            // elBodyMainRight.style.width = "15%";
            //
        } else {
            // Center
            // elBodyMainCenter.style.top = 0%
            elBodyMainCenter.style.left = "0%";
            elBodyMainCenter.style.width = "100%";
        }
        var Cn = 0;
        var tmp;
        var tmpAdjust;
        // Document content (generally) is placed in BodyMainCenterCenter
        // This in term has a column abstraction (for large screens)
        // IE wide columns do not allow good reading mechanics or styling.
        // This is structured as:
        // Section, or maybe:
        // Grouping
        // (1 here),
        //   DivP(aragraphBoxes),
        //     DivC(alloutBoxes)
        // todo what about "Sections?", should "DivBoxX" be uses?
        while (BodyMainCenterCenter.childNodes[1].childNodes[Cn]) {
            // Blocks of content
            tmp = BodyMainCenterCenter.childNodes[1].childNodes[Cn];
            if (tmp && tmp.id) {
                if (tmp.id.substr(0, 4) == "DivP" || tmp.id.substr(0, 4) == "DivB" || tmp.id.substr(0, 6) == "DivBox") {
                    // a Content Box
                    tmpAdjust = 0;
                    if (tmp.style) {
                        if (tmp.style.marginLeft) { tmpAdjust += parseInt(tmp.style.marginLeft); }
                        if (tmp.style.marginRight) { tmpAdjust += parseInt(tmp.style.marginRight); }
                        if (tmp.style.paddingLeft) { tmpAdjust += parseInt(tmp.style.paddingLeft); }
                        if (tmp.style.paddingRight) { tmpAdjust += parseInt(tmp.style.paddingRight); }
                    }
                    if (tmpAdjust == 0) { tmpAdjust = 2; }
                    if (BodyMainCenterCenter.offsetWidth > 1000) {
                        // 3 columns
                        // tmp.style.maxWidth = "33%";
                        // tmp.style.posWidth = "33%";
                        // tmp.style.width = "33%";
                        BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (33 - tmpAdjust) + "%";
                        // tmp.style.maxWidth = 350;
                    } else {
                        // 2 columns
                        BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (50 - tmpAdjust) + "%";
                        // tmp.style.width = (50 - tmpAdjust) + "%";
                        // tmp.style.width = "50%";
                        // tmp.style.maxWidth = "50%";
                        // tmp.style.width = "50%";
                    }
                    // Callout Boxes
                    if (tmp.childNodes && tmp.childNodes[0] && tmp.childNodes[0].id) {
                        if (tmp.childNodes[0].id.substr(0, 4) = "DivC") {
                            tmp.childNodes[0].style.posWidth = "";
                            tmp.childNodes[0].style.width = "82%";
                        }
                    }
                }
            }
            Cn++;
        }
        //
        layoutIsWide = true;
        layoutIsStandard = false;
    } else {
        if (layoutIndex = layoutStandard) {
            // Left
            // elBodyMainLeft.style.top = 0%
            // elBodyMainLeft.style.left = "0%";
            elBodyMainLeft.style.width = "20%";
            // Center
            // elBodyMainCenter.style.top = 0%
            elBodyMainCenter.style.left = "20%";
            elBodyMainCenter.style.width = "60%";
            // Right
            // ? or maybe 80 - 2?
            // elBodyMainRight.style.top = 0%
            elBodyMainRight.style.left = "80%";
            elBodyMainRight.style.width = "20%";
        } else {
            // Center
            // elBodyMainCenter.style.top = 0%
            elBodyMainCenter.style.left = "0%";
            elBodyMainCenter.style.width = "100%";
        }
        //
        var Cn = 0;
        var tmp = BodyMainCenterCenter.childNodes[1].childNodes[Cn];
        while (BodyMainCenterCenter.childNodes[1].childNodes[Cn]) {
            tmp = BodyMainCenterCenter.childNodes[1].childNodes[Cn];
            if (tmp.id) {
                if (tmp.id.substr(0, 4) == "DivP" || tmp.id.substr(0, 4) == "DivB" || tmp.id.substr(0, 6) == "DivBox") {
                    BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = "98%";
                    // if (tmp.id.substr(0, 4) = "DivP") {
                    // tmp.style.maxWidth = "";
                    // tmp.style.width = "";
                    // tmp.style.posWidth = "";
                    // Callout Boxes
                    if (tmp.childNodes && tmp.childNodes[0] && tmp.childNodes[0].id) {
                        if (tmp.childNodes[0].id.substr(0, 4) = "DivC") {
                            tmp.childNodes[0].style.posWidth = "";
                            tmp.childNodes[0].style.width = "45%";
                        }
                    }
                }
            }
            Cn++;
        }
        //
        layoutIsWide = false;
        layoutIsStandard = true;
    }
    //
    layoutWidthPrev = layoutWidth;
    layoutHeightPrev = layoutHeight;
    ////////////////////////////////////////////////
    // Recalculate Positions for Menu Images
    //
}
// Document Window Client Width
var layoutWidth = 0;
var layoutHeight = 0;
//
var layoutClientWidth = 0;
var layoutClientHeight = 0;
var layoutAvailWidth = 0;
var layoutAvailHeight = 0;
var layoutDocumentWidth = 0;
var layoutDocumentHeight = 0;
//
function fnWindowClientWidth() {
    // Window Width
    layoutDocumentWidth = window.document.documentElement.offsetWidth;
    layoutAvailWidth = window.screen.availWidth;
    // layoutClientWidth = window.screen.availWidth - layoutWidthMargin;
    layoutClientWidth = window.document.offsetWidth - layoutWidthMargin;
    // if (layoutClientWidth LT 100) { layoutClientWidth = document.body.parentElement.clientWidth - layoutWidthMargin; }
    //
    layoutDocumentHeight = window.document.documentElement.offsetHeight;
    layoutAvailHeight = window.screen.availHeight;
    layoutClientHeightht = window.screen.availHeight - layoutHeightMargin;
    // if (layoutClientHeight < 100) { layoutClientHeight = document.body.parentElement.clientHeight - layoutHeightMargin; }
    //
    layoutWidth = layoutDocumentWidth;
    if (layoutWidth < 100) { layoutWidth = document.body.parentElement.clientWidth; }
    // layoutWidth -= layoutWidthMargin;
    layoutHeight = layoutDocumentHeight;
    if (layoutHeight < 100) { layoutHeight = document.body.parentElement.clientHeight; }
    // layoutHeight -= layoutHeightMargin;
    // layoutWidth -= 20;
    // layoutHeight -= 20;
    //
}
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
///////////////////////////////////////////////
// Window Session Functions
///////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Window Session Load
function fnWindowSessionLoad() {
    // Load Layout and Images Displayed
    // Get Cookie
    // Apply Cookie to Window
    // Apply Default to Window
}
// Window Session Save
function fnWindowSessionSave() {
    // Load Layout and Images Displayed
    // Build Oookie
    // Save Cookie
}
// Window Cookies Functions
///////////////////////////////////////////////
// Window Cookie Save
function fnWindowCookieSave() {
    // Load Layout and Images Displayed
    //
}
// Window Cookie Save
function fnWindowCookieSave() {
    // Load Layout and Images Displayed
    //
}
// Window Cookie Build
function fnWindowCookieBuild() {
    // Build the Cookie
    //
}
// Window Document Functions
///////////////////////////////////////////////
// fn Document Load Initinitialize Variablesm, Arrays and Default Data
function fnDocumentLoadInit() {
    //  for (imgCn = 1;imgCn < 1+imgUsedCn;imgCn++){
    //    menuImage = oObjIndexSetmenuImage(imgCn);
    //    intervalSet = imgCn * 100;
    //    intervalSet += intervalBase;
    //    intervalName = menuImage.name + "AnimationCycle()";
    //    setInterval (intervalName, intervalSet);
    //  }
    for (imgCn = imgUsedCn + 1; imgCn < 1 + imgMax; imgCn++) {
        imgAniToggle[imgCn] = 0;
        imgMouseHover[imgCn] = 0;
        //    menuImage = oObjIndexSetmenuImage(imgCn);
        //    menuImage.src = "imgnone.gif";
    }
    //
    // imgGroupMax
    // imgMax
    //
    // for (imgGroupCn = 0; imgGroupCn < 1 + imgGroupMax; imgGroupCn++) {
    //     imgMax = imgMaxByGroup[imgGroupCn];
    //     for (imgCn = 0; imgCn < 1 + imgMax; imgCn++) {
    //         // imgCnByGroup[imgGroupCn];
    //         // imgMaxByGroup[imgGroupCn];
    //         menuImage[imgGroupCn][imgCn] = null;
    //         menuImageLocked[imgGroupCn][imgCn] = false;
    //     }
    // }
    // Resize Window
    fnlayoutWindowResize();
    //
}
// SectionBlock Window Document function (s)
///////////////////////////////////////////////
// fn Document Load Initinitialize Variablesm, Arrays and Default Data
function fnDocumentLoadInit2() {
    //
    //  for (imgCn = 1;imgCn < imgUsedCn;imgCn++){
    //    menuImage = oObjIndexSetmenuImage(imgCn);
    //    intervalSet = imgCn * 100;
    //    intervalSet += intervalBase;
    //    intervalName = menuImage.name + 'AnimationCycle()';
    //    setInterval (intervalName, intervalSet);
    //  }
    for (imgCn = imgUsedCn + 1; imgCn < imgMax + 1; imgCn++) {
        imgAniToggle[imgCn] = 0;
        imgMouseHover[imgCn] = 0;
        //    menuImage = oObjIndexSetmenuImage(imgCn);
        //    menuImage.src = 'imgnone.gif';
    }
    //
    // imgGroupMax
    // imgMax
    //
    for (imgGroupCn = 0; imgGroupCn < imgGroupMax + 1; imgGroupCn++) {
        imgMax = imgMaxByGroup[imgGroupCn];
        for (imgCn = 0; imgCn < 1 + imgMax; imgCn++) {
            // imgCnByGroup[imgGroupCn];
            // imgMaxByGroup[imgGroupCn];
            menuImage[imgGroupCn][imgCn] = null;
            menuImageLocked[imgGroupCn][imgCn][IsSmall] = false;
            menuImageLocked[imgGroupCn][imgCn][IsLarge] = false;
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
// Diaglogs and Pop-ups
////////////////////////////////////////////////
// Create all Elements used in Layout
function fnWindowPopupOpen() {
    // Popup Window
    var sConfig = 'left= 100, top= 0, height= 500, width= 400, menubar= 0, scrollbars= 0, status= 0, toolbar= 0, location= 0';
    var myWindow = window.open("http://myPopupWindow.html", "MyWindowName", sConfig);
}
// Document Layout Size of Core Layout Boxes
function fnWindowContainerHeightGetAll() {
    //
    if (debugAlert) {
        fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
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
        fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
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
    // if (layoutResizeCn == 0) { elBodyMenuLayout1Height = fnElementHeightMaxGet(UseScroll, UseBase, elBodyMainLeft); }
    //
    if (debugAlert) {
        fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
            ' Height of elBodyMenuLayout1Height: ' + elBodyMenuLayout1Height
            + '.',
            'fnWindowContainerHeightGetAll', 6769, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    // Check the accumaltion of Left1, Left2, Left3
    if (layoutIndex == layoutStandard) {
        fnWindowContainerHeightGetMenu(elBodyMainLeft);
    } else { fnWindowContainerHeightGetMenu(elBodyMainCenterTopLeft); }
    //
    if (debugAlert) {
        fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
            ' Height of elBodyMenuLayout1Height: ' + elBodyMenuLayout1Height
            + '.',
            'fnWindowContainerHeightGetAll', 6769, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    tempLayoutBodyHeightVertMax += elBodyMenuLayout1Height;
    if (layoutIndex == layoutStandard) {
        if (tempLayoutBodyHeightHorzMax < elBodyMenuLayout1Height) { tempLayoutBodyHeightHorzMax = elBodyMenuLayout1Height; }
    }
    // Right
    elBodyMenuLayout2Height = fnElementHeightMaxGet(UseScroll, UseBase, elBodyMainRight);
    // if (layoutResizeCn == 0) { elBodyMenuLayout2Height = fnElementHeightMaxGet(UseScroll, UseBase, elBodyMainRight); }
    //
    if (debugAlert) {
        fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
            ' Height of BodyMenuLayout2Height: ' + elBodyMenuLayout2Height
            + '.',
            'fnWindowContainerHeightGetAll', 6769, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    // Check the accumaltion of Right1, Right2, Right3
    if (layoutIndex == layoutStandard) {
        fnWindowContainerHeightGetMenu(elBodyMainRight);
    } else { fnWindowContainerHeightGetMenu(elBodyMainCenterTopRight); }
    //
    if (debugAlert) {
        fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
            ' Height of BodyMenuLayout2Height: ' + elBodyMenuLayout2Height
            + '.',
            'fnWindowContainerHeightGetAll', 6769, null, null,
            errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    tempLayoutBodyHeightVertMax += elBodyMenuLayout2Height;
    if (layoutIndex == layoutStandard) {
        // if (elBodyMenuLayout1Height < layoutMenuHeightVertMax) { elBodyMenuLayout1Height = layoutMenuHeightVertMax; }
        if (tempLayoutBodyHeightHorzMax < elBodyMenuLayout2Height) { tempLayoutBodyHeightHorzMax = elBodyMenuLayout2Height; }
    } else if (layoutIndex == layoutWindowed) {
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
// Document Layout Size of Core Layout Boxes
function fnWindowContainerHeightGetMenu(elementPassed) {
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
        if (elementPassed) {
            menuGroup1 = fnElementGetRefFromElement(menuGroup1, 'MenuGroup1', 'MenuGroup1', elementPassed);
            menuGroup2 = fnElementGetRefFromElement(menuGroup2, 'MenuGroup2', 'MenuGroup2', elementPassed);
            menuGroup3 = fnElementGetRefFromElement(menuGroup3, 'MenuGroup3', 'MenuGroup3', elementPassed);
        }
    }
    //
    elMenuGroup1Height = fnElementHeightMaxGet(true, true, menuGroup1);
    elMenuGroup2Height = fnElementHeightMaxGet(true, true, menuGroup2);
    elMenuGroup3Height = fnElementHeightMaxGet(true, true, menuGroup3);
    //
    layoutMenuHeightVertMax = elMenuGroup1Height + elMenuGroup2Height + elMenuGroup3Height;
    //
    layoutMenuHeightHorzMax = 0;
    if (layoutMenuHeightHorzMax < elMenuGroup1Height) { layoutMenuHeightHorzMax = elMenuGroup1Height; }
    if (layoutMenuHeightHorzMax < elMenuGroup2Height) { layoutMenuHeightHorzMax = elMenuGroup2Height; }
    if (layoutMenuHeightHorzMax < elMenuGroup3Height) { layoutMenuHeightHorzMax = elMenuGroup3Height; }
    //
}
// Recalculate Screen Display
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
    if (layoutResizeCn == 0) { fnWindowContainerHeightGetAll(); }
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
    } else if (elBodyMainCenterCenter.offsetWidth > (layoutBlockCol2Min * layoutEmRation) && columnMax > 1) {
        layoutBlockWidth = layoutBlockWidthStandard;
    } else {
        layoutBlockWidth = layoutBlockWidthNarrow;
    }
    // ...................................... //
    // Width over layoutMenuDocWidthWide
    // ...................................... //
    // if (BodyMainCenterCenter.offsetWidth > layoutMenuDocWidthWide) {
    if (layoutDocumentWidth > layoutMenuDocWidthWide) {
        // ...................................... //
        // Standard Layout
        if (layoutIndex == layoutStandard && (elBodyMainLeftVisible || elBodyMainRightVisible)) {
            // Left
            // elBodyMainLeft.style.width = '10%';
            // elBodyMainLeft.style.width = '15%';
            if (elBodyMainLeftVisible) {
                elBodyMainLeft.style.width = '12%';
            } else {
                elBodyMainLeft.style.width = '0%';
                elBodyMainCenterLeftAdj = 12;
                elBodyMainCenterWidthAdj += 10;
            }
            // Right
            // elBodyMainRight.style.top = 0%
            if (elBodyMainRightVisible) {
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
        if (layoutIndex == layoutStandard && (elBodyMainLeftVisible || elBodyMainRightVisible)) {
            // Left
            // elBodyMainLeft.style.top = 0%
            // if (layoutUseAbsolute) { elBodyMainLeft.style.left = '0%'; }
            if (elBodyMainLeftVisible) {
                elBodyMainLeft.style.width = '20%';
            } else {
                if (layoutUseAbsolute) { elBodyMainLeft.style.width = '0%'; }
                elBodyMainCenterLeftAdj = 20;
                elBodyMainCenterWidthAdj += 20;
            }
            //
            // Right
            // elBodyMainRight.style.top = 0%
            if (elBodyMainRightVisible) {
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
            if ((layoutSection.id).substr(0, 4) == 'DivS') {
                layoutBlockCn = 0;
                while (layoutSection.childNodes[layoutBlockCn]) {
                    // ...................................... //
                    // Block
                    layoutBlock = layoutSection.childNodes[layoutBlockCn];
                    if (layoutBlock.id) {
                        if ((layoutBlock.id).substr(0, 4) == 'DivB') {
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
                                calloutBlock = layoutBlock.childNodes[calloutBlockCn];
                                if (calloutBlock) {
                                    if (calloutBlock.id) {
                                        if ((calloutBlock.id).substr(0, 4) == 'DivC') {
                                            // Get Column Type from Box class
                                            boxClass = calloutBlock.className;
                                            columnType = fnStringGetTokenByPrefix(boxClass, 'ColumnType');
                                            // Set Callout Width and Layout
                                            if (columnType != 'ColumnTypeFixed') {
                                                if (elBodyBlockWidth > calloutBlockLayoutWidthWide) {
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
        fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
            'Window Resize Excessive Usage (Possible Error)',
            'fnWindowResize', 0, null, null,
            errorSevere, errorDoNotDisplayTag, errorDoAlert);
        layoutResizeCn = 0;
        // layoutMenuHeightHorzMax = 2000;
    }
    //
    // if (layoutResizeCn == 1) {
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
        fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
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
    if (layoutWidth < 100) {
        if (browserIsIE) { layoutWidth = document.body.parentNode.clientWidth; }
    }
    // layoutWidth -= layoutWidthMargin;
    layoutHeight = layoutDocumentHeight;
    if (layoutHeight < 100) {
        if (browserIsIE) { layoutHeight = document.body.parentNode.clientHeight; }
    }
    // layoutHeight -= layoutHeightMargin;
    // layoutWidth -= 20;
    // layoutHeight -= 20;
    //
}
// ..................................................................................... _//
script_state = "MdmWindow loaded";
