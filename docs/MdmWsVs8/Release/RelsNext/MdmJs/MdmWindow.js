// Window Functions
////////////////////////////////////////////////
// Window Events (Load, Resize)
// Misc:
var boxClass;
var layoutBodyColumnType;
// Window Load
////////////////////////////////////////////////
// // Document Window OnLoad:
// window.onload = function () { WindowOnload(); }
function WindowOnload() {
    // Get browser type
    BrowserVsGet();

    // Initialize and Set Global Variables
    DocumentLoadInit();

    // Includes
    if (!loadDelayIncludes && loadIncludes && !loadIncludesDone) {
        IncludeHtmlFileAll();
    }

    // Build Body Images Div - depreciated
    // if (!loadDelayBodyImage) {
    //     bodyImageContainer = BodyImagesHtmlBuild();
    // }

    // Build Menu Images Div
    if (!loadDelayMenuImage) {
        MdmMenuImageInit();
        bodyMenuImageContainer = MenuImagesHtmlBuild();
    }

    // Docuement Element Initialize & Store Original Menu Columns.
    if (!loadDelayJava) {
        // BodyMenuInit();
        // Initialize and save
        ElementObjectCreate();
        // Choose Standard Layout
        LayoutNext(layoutStandard)
        // LayoutSelectByIndex(layoutStandard);
    }

    // Sync Form
    if (!loadDelayDebugState) {
        if (serverIsOn) {
            FormElementSync();
        } else {
            FormElementSyncLocal();
        }
    }

    // Timers
    TimerCreate();
    TimerFunctionSet();
    // Intervals and Duration
    TimerDurationSet();
}
// Document Window Resize
// Adjustments:
// var layoutWidthMargin = 60; // ??? really?
// var layoutHeightMargin = 50;
// var layoutMenuHeightMax = 0;
// Client Window Size
var layoutWidthPrev = 0;
var layoutHeightPrev = 0;
// Current Layout Strategy
// var layoutIsWide = false;
// var layoutIsStandard = true;
// //
// window.onresize = function () { WindowResizeLayout(); }

function WindowResizeLayoutDepreciated() {
    // Recalculate Screen Display
    //
    ////////////////////////////////////////////////
    // Recalculate Globals for Screen
    //
    WindowClientWidth();
    ////////////////////////////////////////////////
    // Load Containers if missing
    if (!bodyMainLeft) { ElementObjectContainerCreate(); }
    ////////////////////////////////////////////////
    // Recalculate Positions for Menu Images
    // if (BodyMainCenterCenter.offsetWidth > 900) {
    // Layout handling - Set Left, Center, Right
    var calloutBoxWidth = 0;
    if (layoutDocumentWidth > layoutDocumentWidthMin) {
        // Standard Layout handling - Set Left, Center, Right
        // Are menus visible? todo
        if (layoutIndex == layoutStandard) {
            // Left
            // bodyMainLeft.style.top = 0%
            // bodyMainLeft.style.left = "0%";
            bodyMainLeft.style.width = "12%";
            // bodyMainLeft.style.width = "10%";
            // bodyMainLeft.style.width = "15%";
            //
            // Center
            // bodyMainCenter.style.top = 0%
            bodyMainCenter.style.left = "12%";
            bodyMainCenter.style.width = "76%";
            // bodyMainCenter.style.left = "10%";
            // bodyMainCenter.style.width = "80%";
            // bodyMainCenter.style.left = "15%";
            // bodyMainCenter.style.width = "70%";
            //
            // Right
            // bodyMainRight.style.top = 0%
            bodyMainRight.style.left = "88%";
            bodyMainRight.style.width = "12%";
            // bodyMainRight.style.left = "90%";
            // bodyMainRight.style.width = "10%";
            // bodyMainRight.style.left = "85%";
            // bodyMainRight.style.width = "15%";
            //
        } else {
            // Center
            // bodyMainCenter.style.top = 0%
            bodyMainCenter.style.left = "0%";
            bodyMainCenter.style.width = "100%";
        }
        //
        calloutBoxWidth = 82;
        layoutIsWide = true;
        layoutIsStandard = false;
    } else {
        // Narrow Layout Mode
        if (layoutIndex == layoutStandard) {
            // Left
            // bodyMainLeft.style.top = 0%
            // bodyMainLeft.style.left = "0%";
            bodyMainLeft.style.width = "20%";
            // Center
            // bodyMainCenter.style.top = 0%
            bodyMainCenter.style.left = "20%";
            bodyMainCenter.style.width = "60%";
            // Right
            // ? or maybe 80 - 2?
            // bodyMainRight.style.top = 0%
            bodyMainRight.style.left = "80%";
            bodyMainRight.style.width = "20%";
        } else {
            // Center
            // bodyMainCenter.style.top = 0%
            bodyMainCenter.style.left = "0%";
            bodyMainCenter.style.width = "100%";
        }
        layoutIsWide = false;
        layoutIsStandard = true;
        calloutBoxWidth = 45;
    }
    //
    var Cn = 0;
    var tmp;
    var tmpAdjust;

    // Document content (generally) is placed in BodyMainCenterCenter
    // This in turn has a column abstraction (for large screens)
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
                // Adjust for margin, padding & border custom styling
                tmpAdjust = ElementContainerAdjustGet(tmp, BodyMainCenterCenter, true);
                // See MdmMain to adjust these settings.
                if (BodyMainCenterCenter.offsetWidth > layoutBlockCol4Min) {
                    // 4 columns - layoutBlockWidthBig
                    BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthBig - tmpAdjust) + "%";
                    //
                } else if (BodyMainCenterCenter.offsetWidth > layoutBlockCol3Min) {
                    // 3 columns - layoutBlockWidthWide
                    BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthWide - tmpAdjust) + "%";
                    // tmp.style.maxWidth = "33%";
                    // tmp.style.posWidth = "33%";
                    // tmp.style.width = "33%";
                    // tmp.style.maxWidth = 350;
                } else if (BodyMainCenterCenter.offsetWidth > layoutBlockCol2Min) {
                    // 2 columns
                    BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthStandard - tmpAdjust) + "%";
                    // tmp.style.width = (50 - tmpAdjust) + "%";
                    // tmp.style.width = "50%";
                    // tmp.style.maxWidth = "50%";
                    // tmp.style.width = "50%";
                } else {
                    // 1 columns
                    BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthNarrow - tmpAdjust) + "%";
                    // tmp.style.width = (100 - tmpAdjust) + "%";
                    // tmp.style.width = "100%";
                    // tmp.style.maxWidth = "100%";
                    // tmp.style.width = "100%";
                }
                // Callout Boxes
                if (tmp.childNodes && tmp.childNodes[0] && tmp.childNodes[0].id) {
                    if (tmp.childNodes[0].id.substr(0, 4) = "DivC") {
                        tmp.childNodes[0].style.posWidth = "";
                        // Get tmpAdjust for Callout?
                        tmp.childNodes[0].style.width = calloutBoxWidth + "%";
                    }
                }
            }
        }
        Cn++;
    }
    // //
    // layoutIsWide = true;
    // layoutIsStandard = false;
    // } else {
    //     if (layoutIndex == layoutStandard) {
    //         // Left
    //         // bodyMainLeft.style.top = 0%
    //         // bodyMainLeft.style.left = "0%";
    //         bodyMainLeft.style.width = "20%";
    //         // Center
    //         // bodyMainCenter.style.top = 0%
    //         bodyMainCenter.style.left = "20%";
    //         bodyMainCenter.style.width = "60%";
    //         // Right
    //         // ? or maybe 80 - 2?
    //         // bodyMainRight.style.top = 0%
    //         bodyMainRight.style.left = "80%";
    //         bodyMainRight.style.width = "20%";
    //     } else {
    //         // Center
    //         // bodyMainCenter.style.top = 0%
    //         bodyMainCenter.style.left = "0%";
    //         bodyMainCenter.style.width = "100%";
    //     }
    //     //
    //     var Cn = 0;
    //     var tmp = BodyMainCenterCenter.childNodes[1].childNodes[Cn];
    //     while (BodyMainCenterCenter.childNodes[1].childNodes[Cn]) {
    //         tmp = BodyMainCenterCenter.childNodes[1].childNodes[Cn];
    //         if (tmp.id) {
    //             if (tmp.id.substr(0, 4) == "DivP" || tmp.id.substr(0, 4) == "DivB" || tmp.id.substr(0, 6) == "DivBox") {
    //                 BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = "98%";
    //                 // if (tmp.id.substr(0, 4) = "DivP") {
    //                 // tmp.style.maxWidth = "";
    //                 // tmp.style.width = "";
    //                 // tmp.style.posWidth = "";
    //                 // Callout Boxes
    //                 if (tmp.childNodes && tmp.childNodes[0] && tmp.childNodes[0].id) {
    //                     if (tmp.childNodes[0].id.substr(0, 4) = "DivC") {
    //                         tmp.childNodes[0].style.posWidth = "";
    //                         tmp.childNodes[0].style.width = "45%";
    //                     }
    //                 }
    //             }
    //         }
    //         Cn++;
    //     }
    //     //
    //     layoutIsWide = false;
    //     layoutIsStandard = true;
    // }
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
// function WindowClientWidth() {
//     // Window Width
//     layoutDocumentWidth = window.document.documentElement.offsetWidth;
//     layoutAvailWidth = window.screen.availWidth;
//     // layoutClientWidth = window.screen.availWidth - layoutWidthMargin;
//     layoutClientWidth = window.document.offsetWidth - layoutWidthMargin;
//     // if (layoutClientWidth LT 100) { layoutClientWidth = document.body.parentElement.clientWidth - layoutWidthMargin; }
//     //
//     layoutDocumentHeight = window.document.documentElement.offsetHeight;
//     layoutAvailHeight = window.screen.availHeight;
//     layoutClientHeighth = window.screen.availHeight - layoutHeightMargin;
//     // if (layoutClientHeight < 100) { layoutClientHeight = document.body.parentElement.clientHeight - layoutHeightMargin; }
//     //
//     layoutWidth = layoutDocumentWidth;
//     if (layoutWidth < 100) { layoutWidth = document.body.parentElement.clientWidth; }
//     // layoutWidth -= layoutWidthMargin;
//     layoutHeight = layoutDocumentHeight;
//     if (layoutHeight < 100) { layoutHeight = document.body.parentElement.clientHeight; }
//     // layoutHeight -= layoutHeightMargin;
//     // layoutWidth -= 20;
//     // layoutHeight -= 20;
//     //
// }
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
function WindowSessionLoad() {
    // Load Layout and Images Displayed
    // Get Cookie
    // Apply Cookie to Window
    // Apply Default to Window
}
// Window Session Save
function WindowSessionSave() {
    // Load Layout and Images Displayed
    // Build Oookie
    // Save Cookie
}
// Window Cookies Functions
///////////////////////////////////////////////
// Window Cookie Save
function WindowCookieSave() {
    // Load Layout and Images Displayed
    //
}
// Window Cookie Save
function WindowCookieSave() {
    // Load Layout and Images Displayed
    //
}
// Window Cookie Build
function WindowCookieBuild() {
    // Build the Cookie
    //
}
// Window Document Functions
///////////////////////////////////////////////
//  Document Load Initinitialize Variablesm, Arrays and Default Data
function DocumentLoadInit() {

    BodyMenuInit();
    MdmMenuImageInit();
    // ConsoleFormInit();
    ElementObjectCreate();

    //  for (imgCn = 1;imgCn < 1+imgUsedCn;imgCn++){
    //    menuImage = oObjIndexSetmenuImage(imgCn);
    //    intervalSet = imgCn * 100;
    //    intervalSet += intervalBase;
    //    intervalName = menuImage.name + "AnimationCycle()";
    //    setInterval (intervalName, intervalSet);
    //  }
    // for (imgCn = imgUsedCn + 1; imgCn < 1 + imgMax; imgCn++) {
    //     imgAniToggle[imgCn] = 0;
    //     imgMouseHover[imgCn] = 0;
    //     //    menuImage = oObjIndexSetmenuImage(imgCn);
    //     //    menuImage.src = "imgnone.gif";
    // }

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
    //
    ConsoleFormInit();
    // Resize Window
    WindowResizeLayout();
}
// SectionBlock Window Document function (s)
///////////////////////////////////////////////
//  Document Load Initinitialize Variablesm, Arrays and Default Data
function DocumentLoadInitDepreciated() {
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
    if (!bodyMainLeftVisible) { bodyMainLeft.style.display = 'none'; }
    if (!bodyMainRightVisible) { bodyMainRight.style.display = 'none'; }
    //
    // Resize Window
    WindowResizeLayout();
    //
}
// Diaglogs and Pop-ups
////////////////////////////////////////////////
// Create all Elements used in Layout
function WindowPopupOpen() {
    // Popup Window
    var sConfig = 'left= 100, top= 0, height= 500, width= 400, menubar= 0, scrollbars= 0, status= 0, toolbar= 0, location= 0';
    var myWindow = window.open("http://myPopupWindow.html", "MyWindowName", sConfig);
}
// Document Layout Size of Core Layout Boxes
function WindowContainerHeightGetAll() {
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of left and right menu containers vs the center menu container'
            + ': ',
            'WindowContainerHeightGetAll', 444, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    // Height of left and right menu containers vs the center menu container
    var tempLayoutBodyHeightHorzMax = 0;
    var tempLayoutBodyHeightVertMax = 0;
    layoutBodyHeightHorzMax = 0;
    layoutBodyHeightVertMax = 0;
    layoutMenuWidthMax = 0;
    //
    bodyMainCenterHeight = ElementHeightMaxGet(UseScroll, UseBase, bodyMainCenter);
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of BodyMainCenterHeight: ' + bodyMainCenterHeight
            + '.',
            'WindowContainerHeightGetAll', 6769, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    tempLayoutBodyHeightVertMax += bodyMainCenterHeight;
    if (tempLayoutBodyHeightHorzMax < bodyMainCenterHeight) { tempLayoutBodyHeightHorzMax = bodyMainCenterHeight; }
    //
    // Left
    bodyLayoutMenu1Height = ElementHeightMaxGet(UseScroll, UseBase, bodyMainLeft);
    // if (layoutResizeCn == 0) { bodyLayoutMenu1Height = ElementHeightMaxGet(UseScroll, UseBase, bodyMainLeft); }
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of bodyLayoutMenu1Height: ' + bodyLayoutMenu1Height
            + '.',
            'WindowContainerHeightGetAll', 6769, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    // Check the accumaltion of Left1, Left2, Left3
    if (layoutIndex == layoutStandard) {
        WindowContainerHeightGetMenu(bodyMainLeft);
    } else { WindowContainerHeightGetMenu(bodyMainCenterTopLeft); }
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of bodyLayoutMenu1Height: ' + bodyLayoutMenu1Height
            + '.',
            'WindowContainerHeightGetAll', 6769, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    tempLayoutBodyHeightVertMax += bodyLayoutMenu1Height;
    if (layoutIndex == layoutStandard) {
        if (tempLayoutBodyHeightHorzMax < bodyLayoutMenu1Height) { tempLayoutBodyHeightHorzMax = bodyLayoutMenu1Height; }
    }
    // Right
    bodyLayoutMenu2Height = ElementHeightMaxGet(UseScroll, UseBase, bodyMainRight);
    // if (layoutResizeCn == 0) { bodyLayoutMenu2Height = ElementHeightMaxGet(UseScroll, UseBase, bodyMainRight); }
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of BodyMenuLayout2Height: ' + bodyLayoutMenu2Height
            + '.',
            'WindowContainerHeightGetAll', 6769, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    // Check the accumaltion of Right1, Right2, Right3
    if (layoutIndex == layoutStandard) {
        WindowContainerHeightGetMenu(bodyMainRight);
    } else { WindowContainerHeightGetMenu(bodyMainCenterTopRight); }
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of BodyMenuLayout2Height: ' + bodyLayoutMenu2Height
            + '.',
            'WindowContainerHeightGetAll', 6769, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    tempLayoutBodyHeightVertMax += bodyLayoutMenu2Height;
    if (layoutIndex == layoutStandard) {
        // if (bodyLayoutMenu1Height < layoutMenuHeightVertMax) { bodyLayoutMenu1Height = layoutMenuHeightVertMax; }
        if (tempLayoutBodyHeightHorzMax < bodyLayoutMenu2Height) { tempLayoutBodyHeightHorzMax = bodyLayoutMenu2Height; }
    } else if (layoutIndex == layoutWindowed) {
        tempLayoutBodyHeightHorzMax = bodyMainCenterHeight;
        if (bodyLayoutMenu1Height > bodyLayoutMenu2Height) {
            tempLayoutBodyHeightHorzMax += bodyLayoutMenu1Height;
        } else {
            tempLayoutBodyHeightHorzMax += bodyLayoutMenu2Height;
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
function WindowContainerHeightGetMenu(elementPassed) {
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
    // 		bodyMainCenterTopLeft
    //		bodyLayoutMenu1
    //............................................................---//
    layoutMenuHeightVertMax = 0
    layoutMenuHeightHorzMax = 0;
    for (bodyMenuGroupIndex = 0; bodyMenuGroupIndex < 1 + bodyMenuGroupUsedCn; bodyMenuGroupIndex++) {
        // var menuGroup1;
        // var menuGroup2;
        // var menuGroup3;
        // Left menuGroup1, 2, 3
        // Load the Menu Group element
        // todo not really correct.
        if (bodyMenuGroup[bodyMenuGroupIndex]) {
            // todo this fails call:
            if (!bodyMenuGroup[bodyMenuGroupIndex]) {
                if (elementPassed) {
                    bodyMenuGroup[bodyMenuGroupIndex] = ElementGetRefFromElement(null, 'MenuGroup' + bodyMenuGroupIndex, 'MenuGroup' + bodyMenuGroupIndex, elementPassed);
                    // bodyMenuGroup[bodyMenuGroupIndex] = ElementGetRefFromElement(bodyMenuGroup[bodyMenuGroupIndex], 'MenuGroup' + bodyMenuGroupIndex, 'MenuGroup' + bodyMenuGroupIndex, elementPassed);
                    // menuGroup1 = ElementGetRefFromElement(menuGroup1, 'MenuGroup1', 'MenuGroup1', elementPassed);
                    // menuGroup2 = ElementGetRefFromElement(menuGroup2, 'MenuGroup2', 'MenuGroup2', elementPassed);
                    // menuGroup3 = ElementGetRefFromElement(menuGroup3, 'MenuGroup3', 'MenuGroup3', elementPassed);
                }
            }
            // Get the height
            bodyMenuGroupHeight[bodyMenuGroupIndex] = ElementHeightMaxGet(true, true, bodyMenuGroup[bodyMenuGroupIndex]);
            // bodyMenuGroupHeight[1] = ElementHeightMaxGet(true, true, menuGroup1);
            // bodyMenuGroupHeight[2] = ElementHeightMaxGet(true, true, menuGroup2);
            // bodyMenuGroupHeight[3] = ElementHeightMaxGet(true, true, menuGroup3);
            //
            // You add up the height
            layoutMenuHeightVertMax += bodyMenuGroupHeight[bodyMenuGroupIndex];
            // layoutMenuHeightVertMax = bodyMenuGroupHeight[1] + bodyMenuGroupHeight[2] + bodyMenuGroupHeight[3];
            //
            // You want to know the widest group
            // layoutMenuHeightHorzMax = 0;
            if (layoutMenuHeightHorzMax < bodyMenuGroupHeight[bodyMenuGroupIndex]) { layoutMenuHeightHorzMax = bodyMenuGroupHeight[bodyMenuGroupIndex]; }
            // if (layoutMenuHeightHorzMax < bodyMenuGroupHeight[1]) { layoutMenuHeightHorzMax = bodyMenuGroupHeight[1]; }
            // if (layoutMenuHeightHorzMax < bodyMenuGroupHeight[2]) { layoutMenuHeightHorzMax = bodyMenuGroupHeight[2]; }
            // if (layoutMenuHeightHorzMax < bodyMenuGroupHeight[3]) { layoutMenuHeightHorzMax = bodyMenuGroupHeight[3]; }
            //
        }
    }
}
// Document Layout Size of Core Layout Boxes
function WindowContainerHeightGetMenuDepreciated(elementPassed) {
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
    // 		bodyMainCenterTopLeft
    //		bodyLayoutMenu1
    //............................................................---//
    var menuGroup1;
    var menuGroup2;
    var menuGroup3;
    // Left menuGroup1, 2, 3
    if (!menuGroup1) {
        if (elementPassed) {
            menuGroup1 = ElementGetRefFromElement(menuGroup1, 'MenuGroup1', 'MenuGroup1', elementPassed);
            menuGroup2 = ElementGetRefFromElement(menuGroup2, 'MenuGroup2', 'MenuGroup2', elementPassed);
            menuGroup3 = ElementGetRefFromElement(menuGroup3, 'MenuGroup3', 'MenuGroup3', elementPassed);
        }
    }
    //
    bodyMenuGroupHeight[1] = ElementHeightMaxGet(true, true, menuGroup1);
    bodyMenuGroupHeight[2] = ElementHeightMaxGet(true, true, menuGroup2);
    bodyMenuGroupHeight[3] = ElementHeightMaxGet(true, true, menuGroup3);
    //
    layoutMenuHeightVertMax = bodyMenuGroupHeight[1] + bodyMenuGroupHeight[2] + bodyMenuGroupHeight[3];
    //
    layoutMenuHeightHorzMax = 0;
    if (layoutMenuHeightHorzMax < bodyMenuGroupHeight[1]) { layoutMenuHeightHorzMax = bodyMenuGroupHeight[1]; }
    if (layoutMenuHeightHorzMax < bodyMenuGroupHeight[2]) { layoutMenuHeightHorzMax = bodyMenuGroupHeight[2]; }
    if (layoutMenuHeightHorzMax < bodyMenuGroupHeight[3]) { layoutMenuHeightHorzMax = bodyMenuGroupHeight[3]; }
    //
}
// Recalculate Screen Display
function WindowResizeLayout() {
    // Recalculate Screen Display
    var calloutBoxWidth = 0;
    var bodyMainCenterLeftAdj = 0;
    var bodyMainCenterWidthAdj = 0;

    if (loadFirstJava) { ElementObjectCreate(); }

    // ...................................... //
    // Recalculate Globals for Screen

    WindowClientWidth();

    // Load Containers if missing
    // ...................................... //
    if (!bodyMainLeft) { ElementObjectContainerCreate(); }
    // ...................................... //
    // Recalculate Positions for Menu Images
    if (layoutResizeCn == 0) { WindowContainerHeightGetAll(); }

    // Process DivBox and Callout layout
    // ...................................... //
    // Count Display Blocks (s/b DivBox containers)
    bodyBlockCn = ElementObjectBlockCount();

    // Determine DivBox (Body Content) column and callout sizes
    // Note that fewer text block is detected.
    layoutBlockWidth = LayoutBlockWidthGet();

    // Width over layoutMenuDocWidthWide
    // ...................................... //
    // if (BodyMainCenterCenter.offsetWidth > layoutMenuDocWidthWide) {
    if (layoutDocumentWidth > layoutMenuDocWidthWide) {

        // Standard Layout
        // ...................................... //
        if (layoutIndex == layoutStandard && (bodyMainLeftVisible || bodyMainRightVisible)) {
            // Left
            // bodyMainLeft.style.width = '10%';
            // bodyMainLeft.style.width = '15%';
            if (bodyMainLeftVisible) {
                bodyMainLeft.style.width = '12%';
            } else {
                bodyMainLeft.style.width = '0%';
                bodyMainCenterLeftAdj = 12;
                bodyMainCenterWidthAdj += 10;
            }
            // Right
            // bodyMainRight.style.top = 0%
            if (bodyMainRightVisible) {
                if (layoutUseAbsolute) { bodyMainRight.style.left = '88%'; }
                bodyMainRight.style.width = '12%';
            } else {
                if (layoutUseAbsolute) { bodyMainRight.style.left = '100%'; }
                bodyMainRight.style.width = '0%';
                bodyMainCenterWidthAdj += 9;
            }
            //
            // Center
            // bodyMainCenter.style.top = 0%
            if (layoutUseAbsolute) { bodyMainCenter.style.left = (12 - bodyMainCenterLeftAdj) + '%'; }
            bodyMainCenter.style.width = (76 + bodyMainCenterWidthAdj) + '%';
            //
        } else {

            // Wide Layout Options (no side menus)
            // ...................................... //
            // Center
            // bodyMainCenter.style.top = 0%
            if (layoutUseAbsolute) { bodyMainCenter.style.left = '0%'; }
            bodyMainCenter.style.width = '100%';
        }
        //
        layoutIsWide = true;
        layoutIsStandard = false;
        //
    } else {

        // Width under layoutMenuDocWidthWide
        // ...................................... //
        if (layoutIndex == layoutStandard && (bodyMainLeftVisible || bodyMainRightVisible)) {
            // Left
            // bodyMainLeft.style.top = 0%
            // if (layoutUseAbsolute) { bodyMainLeft.style.left = '0%'; }
            if (bodyMainLeftVisible) {
                bodyMainLeft.style.width = '20%';
            } else {
                if (layoutUseAbsolute) { bodyMainLeft.style.width = '0%'; }
                bodyMainCenterLeftAdj = 20;
                bodyMainCenterWidthAdj += 20;
            }
            //
            // Right
            // bodyMainRight.style.top = 0%
            if (bodyMainRightVisible) {
                if (layoutUseAbsolute) { bodyMainRight.style.left = '80%'; }
                bodyMainRight.style.width = '20%';
            } else {
                if (layoutUseAbsolute) { bodyMainRight.style.left = '100%'; }
                bodyMainRight.style.width = '0%';
                bodyMainCenterWidthAdj += 20;
            }
            //
            // Center
            // bodyMainCenter.style.top = 0%
            if (layoutUseAbsolute) { bodyMainCenter.style.left = '20%'; }
            bodyMainCenter.style.width = '60%';
        } else {
            // Center
            // bodyMainCenter.style.top = 0%
            if (layoutUseAbsolute) { bodyMainCenter.style.left = '0%'; }
            bodyMainCenter.style.width = '100%';
        }
        //
        layoutIsWide = false;
        layoutIsStandard = true;
        //
    }

    // Adjust for margin, padding & border custom styling
    // ...................................... //
    tmpAdjust = ElementContainerAdjustGet(BodyMainCenterCenter, BodyMainCenter, true);

    // Number of Columns - See MdmMain to adjust these settings.
    if (BodyMainCenterCenter.offsetWidth > layoutBlockCol4Min) {
        // 4 columns - layoutBlockWidthBig
        layoutBlockWidth = (layoutBlockWidthBig - tmpAdjust) + "%";
        // BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthBig - tmpAdjust) + "%";
        calloutBoxWidth = calloutLayoutBlockWidthBig;
        //
    } else if (BodyMainCenterCenter.offsetWidth > layoutBlockCol3Min) {
        // 3 columns - layoutBlockWidthWide
        layoutBlockWidth = (layoutBlockWidthWide - tmpAdjust) + "%";
        // BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthWide - tmpAdjust) + "%";
        calloutBoxWidth = calloutLayoutBlockWidthWide;
    } else if (BodyMainCenterCenter.offsetWidth > layoutBlockCol2Min) {
        // 2 columns
        layoutBlockWidth = (layoutBlockWidthStandard - tmpAdjust) + "%";
        // BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthStandard - tmpAdjust) + "%";
        calloutBoxWidth = calloutLayoutBlockWidthStandard;
    } else {
        // 1 columns
        layoutBlockWidth = (layoutBlockWidthNarrow - tmpAdjust) + "%";
        // BodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthNarrow - tmpAdjust) + "%";
        calloutBoxWidth = calloutLayoutBlockWidthNarrow;
    }

    // Search Sections and adjust layout
    // ...................................... //
    layoutSectionCn = 0;
    while (bodyMainCenterCenter.childNodes[layoutSectionCn]) {

        // Section
        // ...................................... //
        layoutSection = bodyMainCenterCenter.childNodes[layoutSectionCn];
        if (layoutSection.id) {
            if ((layoutSection.id).substr(0, 4) == 'DivS') {
                layoutBlockCn = 0;
                while (layoutSection.childNodes[layoutBlockCn]) {

                    // Block
                    // ...................................... //
                    layoutBlock = layoutSection.childNodes[layoutBlockCn];
                    if (layoutBlock.id) {
                        if (layoutBlock.id.substr(0, 4) == "DivP" || layoutBlock.id.substr(0, 4) == "DivB" || layoutBlock.id.substr(0, 6) == "DivBox") {
                            boxClass = layoutBlock.className;
                            layoutBodyColumnType = StringGetTokenByPrefix(boxClass, 'layoutBodyColumnType');
                            if (layoutBodyColumnType != 'layoutBodyColumnTypeFixed') {
                                layoutBlock.style.width = layoutBlockWidth;
                            }
                            // bodyBlockWidth = parseInt(layoutBlock.style.width);
                            bodyBlockWidthMax = ElementWidthMaxGet(DoNotUseScroll, DoUseBase, layoutBlock, layoutBlockWidthDefault);
                            // Callout
                            calloutBlockCn = 0;
                            while (layoutBlock.childNodes[calloutBlockCn]) {
                                calloutBlock = layoutBlock.childNodes[calloutBlockCn];
                                if (calloutBlock) {
                                    if (calloutBlock.id) {
                                        if ((calloutBlock.id).substr(0, 4) == 'DivC') {
                                            // Get Column Type from Box class
                                            boxClass = calloutBlock.className;
                                            layoutBodyColumnType = StringGetTokenByPrefix(boxClass, 'layoutBodyColumnType');
                                            // Set Callout Width and Layout
                                            if (layoutBodyColumnType != 'layoutBodyColumnTypeFixed') {
                                                calloutBlock.style.width = calloutBoxWidth;
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
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            'Window Resize Excessive Usage (Possible Error)',
            'WindowResizeLayout', 0, null, null,
            errorSevere, errorDoNotDisplayTag, errorDoAlert);
        layoutResizeCn = 0;
        // layoutMenuHeightHorzMax = 2000;
    }
    //
    // if (layoutResizeCn == 1) {
    //
    // bodyMainContainer.style.height = '100%';
    // Height of left and right menu containers
    /* -- */
    //
    WindowContainerHeightGetAll();
    /* -- */
    //
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Main Container layoutHeight (body +5em): ' + layoutHeight
            + '.',
            'WindowResizeLayout', 7189, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    body.style.height = (layoutHeight + 50) + 'px';
    bodyMainContainer.style.height = (layoutHeight) + 'px';
    //
    // Experiments:
    // // bodyMainCenterCenter.style.height = '0' + 'px';;// '';// 'auto';// '100%';// '50.0em';// (layoutMenuHeightHorzMax) + 'px';
    // // bodyMainCenter.style.height = 'auto';// '100%';// layoutMenuHeightHorzMax + 'px';
    // // bodyMainContainer.style.height = '100%';// (layoutMenuHeightHorzMax) + 'px';// 'auto';// (layoutMenuHeightHorzMax + 100) + 'px';
    // body.style.height = '';// (layoutMenuHeightHorzMax + 100) + 'px';
    //
    //
    // bodyMainLeft.style.height = layoutHeight + 'px';;
    // bodyMainRight.style.height = layoutHeight + 'px';;
    // bodyLayoutMenu1.style.height = layoutHeight + 'px';;
    // bodyLayoutMenu2.style.height = layoutHeight + 'px';;
    //
    // bodyLayoutMenu1.style.height = '100%';
    // bodyLayoutMenu2.style.height = '100%';
    // // BodyMainLeft.style.height = 'auto;
    // // BodyMainRight.style.height = 'auto';
    // }
    //
    layoutWidthPrev = layoutWidth;
    layoutHeightPrev = layoutHeight;
    layoutResizeDo = false;
    // ...................................... //
    // Recalculate Positions for Menu Images
    //
}
// Document Window Client Width
function WindowClientWidth() {
    // Window Width
    layoutDocumentWidth = window.document.documentElement.offsetWidth;
    layoutAvailWidth = window.screen.availWidth;
    // layoutClientWidth = window.screen.availWidth - layoutWidthMargin;
    layoutClientWidth = window.document.offsetWidth - layoutWidthMargin;
    // if (layoutClientWidth < 100) { layoutClientWidth = document.body.parentNode.clientWidth - layoutWidthMargin; }
    //
    layoutDocumentHeight = window.document.documentElement.offsetHeight;
    layoutAvailHeight = window.screen.availHeight;
    layoutClientHeighth = window.screen.availHeight - layoutHeightMargin;
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

script_state = "Mdm Standard Window functions loaded. (Window, Client, Resize, Cookie, Session, Popup)";
if (debugLoadIsOn) { debugger; }
