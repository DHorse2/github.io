// Window Functions
////////////////////////////////////////////////
// Window Events (Load, Resize)
// Misc:
var boxClass;
var layoutBodyColumnType;
var calloutBlockColumnType;
var calloutBodyColumnFloat;
// Window Load
////////////////////////////////////////////////
// // Document Window OnLoad:
// window.onload = function () { WindowOnload(); }
function WindowOnload() {
    // Get browser type
    BrowserVsGet();

    // Initialize and Set Global Variables
    WindowLoadInit();

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
// var layoutMenuSizeMax = 0;
// Client Window Size
var layoutWidthPrev = 0;
var layoutHeightPrev = 0;
// Current Layout Strategy
// var layoutIsWide = false;
// var layoutIsStandard = true;
// //
// window.onresize = function () { WindowResizeLayout(); }

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

// Window Session Functions
///////////////////////////////////////////////

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
// SectionBlock Window Document function (s)
// Window Document Functions
///////////////////////////////////////////////
//  Document Load Initinitialize Variablesm, Arrays and Default Data
function WindowLoadInit() {
    BodyMenuInit();
    MdmMenuImageInit();
    ElementObjectCreate();
    ElementObjectContainerCreate();    // Synchorize Confole Settings Form
    ConsoleFormInit();
    // Resize Window
    WindowResizeLayout();
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
function WindowContainerSizeGetAll() {
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of left and right menu containers vs the center menu container'
            + ': ',
            'WindowContainerSizeGetAll', 444, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    // Check height a different way using the array:
    // Sets layoutMenuSizeVertMax, layoutMenuSizeHorzMax
    // Check the accumaltion of Left1, Left2, Left3...
    // Check the accumaltion of Right1, Right2, Right3...
    if (layoutIndex == layoutStandard) {
        WindowContainerSizeGetMenu(BodyMainContainer);
    } else { WindowContainerSizeGetMenu(bodyMainCenter); }
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of bodyLayout: (' + layoutMenuSizeSideHorzMax + ', ' 
            + layoutMenuSizeSideVertMax + ', ' + layoutMenuSizeSideHorzTallest
            + ').',
            'WindowContainerSizeGetAll', 6769, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    // Height of left and right menu containers vs the center menu container
    var tempLayoutBodySizeHorzMax = 0;
    var tempLayoutBodySizeVertMax = 0;
    var bodyLayoutMenuLeftHeight = 0;
    var bodyLayoutMenuRightHeight = 0;
    layoutBodySizeHorzMax = 0;
    layoutBodySizeVertMax = 0;
    layoutMenuWidthMax = 0;
    //
    bodyMainCenterHeight = ElementHeightMaxGet(UseScroll, UseBase, bodyMainCenter);
    // tempLayoutBodySizeVertMax = bodyMainCenterHeight;
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of BodyMainCenterHeight: ' + bodyMainCenterHeight
            + '.',
            'WindowContainerSizeGetAll', 6769, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    // Left
    bodyLayoutMenuLeftHeight = ElementHeightMaxGet(UseScroll, UseBase, bodyMainLeft);
    // if (layoutResizeCn == 0) { bodyLayoutMenu1Height = ElementHeightMaxGet(UseScroll, UseBase, bodyMainLeft); }
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of bodyMainLeft: ' + bodyLayoutMenuLeftHeight
            + '.',
            'WindowContainerSizeGetAll', 6769, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    // Right
    bodyLayoutMenuRightHeight = ElementHeightMaxGet(UseScroll, UseBase, bodyMainRight);
    // if (layoutResizeCn == 0) { bodyLayoutMenuRightHeight = ElementHeightMaxGet(UseScroll, UseBase, bodyMainRight); }
    //
    if (debugAlert) {
        MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
            ' Height of BodyMenuLayout2Height: ' + bodyLayoutMenuRightHeight
            + '.',
            'WindowContainerSizeGetAll', 6769, null, null,
            errorComment, errorDoNotDisplayTag, errorDoNotAlert);
    }
    //
    if (bodyMainCenterHeight && tempLayoutBodySizeVertMax < bodyMainCenterHeight) {
        tempLayoutBodySizeVertMax = bodyMainCenterHeight;
    }
    if (layoutIndex == layoutStandard) {
        if (bodyLayoutMenuLeftHeight && tempLayoutBodySizeVertMax < bodyLayoutMenuLeftHeight) {
            tempLayoutBodySizeVertMax = bodyLayoutMenuLeftHeight;
        }
        if (bodyLayoutMenuRightHeight && tempLayoutBodySizeVertMax < bodyLayoutMenuRightHeight) {
            tempLayoutBodySizeVertMax = bodyLayoutMenuRightHeight;
        }
    }
    layoutHeight = tempLayoutBodySizeVertMax;
    // Cross check.
    // if (tempLayoutBodySizeVertMax > layoutMenuSizeVertMax) {
    // layoutMenuSizeVertMax = tempLayoutBodySizeVertMax;
    // }
    // layoutHeight = layoutMenuSizeVertMax;
}
// Document Layout Size of Core Layout Boxes
function WindowContainerSizeGetMenuDepreciated(elementPassed) {
    // Height of left and right menu containers:
    // Greatest height when layed out side by side
    layoutBodySizeHorzMax = 0;
    // Greatest height when layed out vertically
    layoutBodySizeVertMax = 0;
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
    layoutMenuSizeVertMax = 0
    layoutMenuSizeHorzMax = 0;
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
            layoutMenuSizeVertMax += bodyMenuGroupHeight[bodyMenuGroupIndex];
            // layoutMenuSizeVertMax = bodyMenuGroupHeight[1] + bodyMenuGroupHeight[2] + bodyMenuGroupHeight[3];
            //
            // You want to know the widest group
            // layoutMenuSizeHorzMax = 0;
            if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[bodyMenuGroupIndex]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[bodyMenuGroupIndex]; }
            // if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[1]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[1]; }
            // if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[2]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[2]; }
            // if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[3]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[3]; }
            //
        }
    }
}

var layoutMenuSizeVertMax = 0;
var layoutMenuSizeHorzMax = 0;
var layoutMenuSizeSideVertMax = 0;
var layoutMenuSizeSideHorzMax = 0;
var layoutMenuSizeSideHorzTallest = 0;

// bodyMenuContainer[bodyMenuLeft][1]
function WindowContainerSizeGetMenu(elementPassed) {
    // Height of left and right menu containers:
    // Greatest height when layed out side by side
    layoutBodySizeHorzMax = 0;
    // Greatest height when layed out vertically
    layoutBodySizeVertMax = 0;
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
    var layoutMenuSizeVert = 0;
    var layoutMenuSizeHorz = 0;
    var SideIndexAdjust = 0;

    layoutMenuSizeVertMax = 0;
    layoutMenuSizeHorzMax = 0;
    layoutMenuSizeSideHorzTallest = 0;

    var bodyMenuGroupHeight = new Array(2);
    var AdjustedIndex = 0;

    for (bodyContainerSideIndex = 0; bodyContainerSideIndex < 2; bodyContainerSideIndex++) {
        // as set in MdmMain settings.
        if (bodyContainerSideIndex) {
            bodyMenuGroupUsedSideMax = bodyMenuGroupUsedRightCn;
            SideIndexAdjust = bodyMenuGroupUsedLeftCn;
        } else {
            bodyMenuGroupUsedSideMax = bodyMenuGroupUsedLeftCn;
            SideIndexAdjust = 0;
        }
        layoutMenuSizeSideVertMax = 0
        layoutMenuSizeSideHorzMax = 0;
        for (bodyMenuGroupIndex = 0; bodyMenuGroupIndex < 1 + bodyMenuGroupUsedSideMax; bodyMenuGroupIndex++) {
            AdjustedIndex = SideIndexAdjust + bodyMenuGroupIndex;
            // Load the Menu Group element
            // todo not really correct.
            // if (!bodyMenuContainer[bodyContainerSideIndex][bodyMenuGroupIndex]) {
            //     if (elementPassed) {
            //         bodyMenuContainer[bodyContainerSideIndex][bodyMenuGroupIndex] = ElementGetRefFromElement(null, ('MenuGroup' + (SideIndexAdjust + bodyMenuGroupIndex)), ('MenuGroup' + (SideIndexAdjust + bodyMenuGroupIndex)), elementPassed);
            //     }
            // }
            if (bodyMenuContainer[bodyContainerSideIndex][bodyMenuGroupIndex]) {
                // Get the height
                layoutMenuSizeVert = ElementHeightMaxGet(true, true, bodyMenuGroup[SideIndexAdjust + bodyMenuGroupIndex]);
                if (layoutMenuSizeVert) {
                    // bodyMenuContainer[bodyContainerSideIndex][bodyMenuGroupIndex] = layoutMenuSizeVert;
                    bodyMenuGroupHeight[SideIndexAdjust + bodyMenuGroupIndex] = layoutMenuSizeVert;
                    // bodyMenuGroupHeight[1] = ElementHeightMaxGet(true, true, menuGroup1);
                    // You add up the height
                    // layoutMenuSizeVertMax = bodyMenuGroupHeight[1] + bodyMenuGroupHeight[2] + bodyMenuGroupHeight[3];
                    layoutMenuSizeSideVertMax += layoutMenuSizeVert;
                    // Horizontially you want the tallest group height
                    if (layoutMenuSizeSideHorzTallest < layoutMenuSizeVert) {
                        layoutMenuSizeSideHorzTallest = layoutMenuSizeVert;
                    }
                }
                // Get the width
                // You want to know the potential width
                layoutMenuSizeHorz = ElementWidthMaxGet(true, true, bodyMenuGroup[SideIndexAdjust + bodyMenuGroupIndex]);
                if (layoutMenuSizeHorz) {
                    layoutMenuSizeSideHorzMax += layoutMenuSizeHorz;
                    // if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[1]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[1]; }
                }
            }
        }
        // Keep the larger of the two sides.
        if (layoutMenuSizeSideVertMax > layoutMenuSizeVertMax) {
            layoutMenuSizeVertMax = layoutMenuSizeSideVertMax;
        }
        if (layoutMenuSizeSideHorzMax > layoutMenuSizeHorzMax) {
            layoutMenuSizeHorzMax = layoutMenuSizeSideHorzMax;
        }
    }
}
// Document Layout Size of Core Layout Boxes
function WindowContainerSizeGetMenuDepreciated2(elementPassed) {
    // Height of left and right menu containers:
    // Greatest height when layed out side by side
    layoutBodySizeHorzMax = 0;
    // Greatest height when layed out vertically
    layoutBodySizeVertMax = 0;
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
    layoutMenuSizeVertMax = bodyMenuGroupHeight[1] + bodyMenuGroupHeight[2] + bodyMenuGroupHeight[3];
    //
    layoutMenuSizeHorzMax = 0;
    if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[1]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[1]; }
    if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[2]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[2]; }
    if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[3]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[3]; }
    //
}
// Document Window Client Width
// ..................................................................................... _//
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
var layoutBlock, layoutBlockCn;
var calloutBlock, calloutBlockCn, tmpAdjust;
// Recalculate Screen Display
// ...................................... //
function WindowResizeLayout() {
    var calloutBlockSize, calloutBlockSmall;
    var layoutBlockWidth, layoutBlockDivisor, layoutBlockExact;
    // Recalculate Screen Display
    var calloutBoxWidth = 0;
    var bodyMainCenterLeftAdj = 0;
    var bodyMainCenterWidthAdj = 0;
    var bodyMainCenterWidth = 0;

    // Initialization (catches variations in use)
    if (loadFirstJava) { ElementObjectCreate(); }
    // Load Containers if missing
    // ...................................... //
    if (!bodyMainLeft) { ElementObjectContainerCreate(); }

    // Recalculate Globals for Screen
    // ...................................... //
    WindowClientWidth();
    // Recalculate Positions for Menu Images
    // ...................................... //
    if (layoutResizeCn == 0) { WindowContainerSizeGetAll(); }

    // Process DivBox and Callout layout
    // ...................................... //
    // Count Display Blocks (s/b DivBox containers)
    bodyBlockCn = ElementObjectBlockCount();

    // Determine DivBox (Body Content) column and callout sizes
    // Note that fewer text block is detected.
    layoutBlockWidth = LayoutBlockWidthGet(); // todo bug

    // Width over layoutMenuDocWidthWide
    // ...................................... //
    // if (BodyMainCenterCenter.offsetWidth > layoutMenuDocWidthWide) {
    if (layoutDocumentWidth > layoutMenuDocWidthWide) {
        // Wide Layout
        // ...................................... //
        if (layoutIndex == layoutStandard && (bodyMainLeftVisible || bodyMainRightVisible)) {
            // Standard Layout
            layoutIsStandard = true;
            // Left
            // bodyMainLeft.style.width = '10%';
            // bodyMainLeft.style.width = '15%';
            if (bodyMainLeftVisible) {
                bodyMainLeft.style.width = '12%';
            } else {
                bodyMainLeft.style.width = '0%';
                bodyMainCenterLeftAdj = 12;
                bodyMainCenterWidthAdj += 12;
            }
            // Right
            // bodyMainRight.style.top = 0%
            if (bodyMainRightVisible) {
                if (layoutUseAbsolute) { bodyMainRight.style.left = '88%'; }
                bodyMainRight.style.width = '12%';
            } else {
                if (layoutUseAbsolute) { bodyMainRight.style.left = '100%'; }
                bodyMainRight.style.width = '0%';
                bodyMainCenterWidthAdj += 12;
            }
            //
            // Center
            // bodyMainCenter.style.top = 0%
            if (layoutUseAbsolute) { bodyMainCenter.style.left = (12 - bodyMainCenterLeftAdj) + '%'; }
            bodyMainCenterWidth = 76;
            // bodyMainCenter.style.width = (80 + bodyMainCenterWidthAdj) + '%';
            //
        } else {
            layoutIsStandard = false;
            // Wide Layout Options (no side menus)
            // Center
            // bodyMainCenter.style.top = 0%
            if (layoutUseAbsolute) { bodyMainCenter.style.left = '0%'; }
            // bodyMainCenter.style.left = '0%';
            bodyMainCenterWidth = 100;
            // bodyMainCenter.style.width = '100%';
        }
        //
        layoutIsWide = true;
        //
    } else {

        // Narrow Width: under layoutMenuDocWidthWide
        // ...................................... //
        if (layoutIndex == layoutStandard && (bodyMainLeftVisible || bodyMainRightVisible)) {
            layoutIsStandard = true;
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
            bodyMainCenterWidth = 60;
            // bodyMainCenter.style.width = (60 + bodyMainCenterWidthAdj) + '%';
            // bodyMainCenter.style.width = '60%';
        } else {
            layoutIsStandard = false;
            // Center
            // bodyMainCenter.style.top = 0%
            if (layoutUseAbsolute) { bodyMainCenter.style.left = '0%'; }
            bodyMainCenterWidth = 100;
            // bodyMainCenter.style.width = '100%';
        }
        //
        layoutIsWide = false;
        layoutIsStandard = true;
        //
    }

    // Adjust for margin, padding & border custom styling
    // ...................................... //
    // tmpAdjust = ElementContainerAdjustGet(bodyMainCenterCenter, bodyMainCenter, true, true, true, true);
    tmpAdjust = 0;

    // Set width of content area BodyMainCenter
    bodyMainCenter.style.width = (bodyMainCenterWidth + bodyMainCenterWidthAdj - tmpAdjust) + '%';

    // Number of Columns - See MdmMain to adjust these settings.
    // ...................................... //
    if (bodyMainCenterCenter.offsetWidth > layoutBlockCol4Min && bodyBlockCn > 3) {
        // 4 columns - layoutBlockWidthBig
        layoutBlockDivisor = 4;
        layoutBlockWidth = (layoutBlockWidthBig);
        // bodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthBig - tmpAdjust) + "%";
        calloutBoxWidth = calloutLayoutBlockWidthBig;
        //
    } else if (bodyMainCenterCenter.offsetWidth > layoutBlockCol3Min && bodyBlockCn > 2) {
        // 3 columns - layoutBlockWidthWide
        layoutBlockDivisor = 3;
        layoutBlockWidth = (layoutBlockWidthWide);
        // bodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthWide - tmpAdjust) + "%";
        calloutBoxWidth = calloutLayoutBlockWidthWide;
    } else if (bodyMainCenterCenter.offsetWidth > layoutBlockCol2Min && bodyBlockCn > 1) {
        // 2 columns
        layoutBlockDivisor = 2;
        layoutBlockWidth = (layoutBlockWidthStandard);
        // bodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthStandard - tmpAdjust) + "%";
        calloutBoxWidth = calloutLayoutBlockWidthStandard;
    } else {
        // 1 columns
        layoutBlockDivisor = 1;
        layoutBlockWidth = (layoutBlockWidthNarrow);
        // bodyMainCenterCenter.childNodes[1].childNodes[Cn].style.width = (layoutBlockWidthNarrow - tmpAdjust) + "%";
        calloutBoxWidth = calloutLayoutBlockWidthNarrow;
    }

    layoutBlockExact = layoutDocumentWidth / layoutBlockDivisor;

    // Search Sections and adjust layout
    // ...................................... //
    layoutSectionCn = 0;
    while (bodyMainCenterCenter.childNodes[layoutSectionCn]) {
        // Section
        // ...................................... //
        layoutSection = bodyMainCenterCenter.childNodes[layoutSectionCn];
        if (layoutSection.id) {
            if ((layoutSection.id).substr(0, 4) == 'DivS') {
                // Layout Blocks
                layoutBlockCn = 0;
                while (layoutSection.childNodes[layoutBlockCn]) {
                    // Block
                    // ...................................... //
                    layoutBlock = layoutSection.childNodes[layoutBlockCn];
                    if (layoutBlock.id) {
                        if (layoutBlock.id.substr(0, 4) == "DivP" || layoutBlock.id.substr(0, 4) == "DivB" || layoutBlock.id.substr(0, 6) == "DivBox") {
                            // Process this block
                            // Adjust for margin, padding & border custom styling
                            tmpAdjust = ElementContainerAdjustGet(layoutBlock, layoutSection, true, true, true, true);
                            // Check Classes for fixed column types.
                            boxClass = layoutBlock.className;
                            layoutBodyColumnType = StringGetTokenByPrefix(false, boxClass, 'layoutBodyColumnType');
                            if (layoutBodyColumnType != 'Fixed') {
                                layoutBlock.style.width = (layoutBlockWidth - tmpAdjust - 0.25) + "%";
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
                                            tmpAdjust = ElementContainerAdjustGet(calloutBlock, layoutBlock, true, true, true, true);
                                            // Get Column Type from Box class
                                            boxClass = calloutBlock.className;
                                            calloutBlockColumnType = StringGetTokenByPrefix(false, boxClass, 'layoutBodyColumnType');
                                            // Set Callout Width and Layout
                                            if (calloutBlockColumnType != 'layoutBodyColumnTypeFixed') {
                                                // calloutBlock.style.width = (calloutBoxWidth  - 0.25) + "%";
                                            }
                                            // if (layoutBlock.offsetWidth > layoutParaWidthMin) {
                                            // if (calloutBlock.style.offsetWidth / layoutBlock.style.offsetWidth < 0.50) {
                                            // if (layoutBlock.style.offsetWidth - calloutBlock.style.offsetWidth < layoutParaWidthMin) {
                                            calloutBlockSmall = StringGetTokenByPrefix(true, boxClass, 'CalloutBoxSmall');
                                            if (calloutBlockSmall != 'CalloutBoxSmall') {
                                                calloutBlockSize = layoutBlock.clientWidth / 2;
                                            } else { calloutBlockSize = layoutBlock.clientWidth / 4; }

                                            if (layoutBlock.clientWidth - calloutBlockSize > layoutParaWidthMin) {
                                                if (calloutBlock.style.float == 'none') {
                                                    calloutBodyColumnFloat = StringGetTokenByPrefix(false, boxClass, 'BodyPara');
                                                    if (calloutBodyColumnFloat == 'Left') {
                                                        calloutBlock.style.float = 'left';
                                                    } else if (calloutBodyColumnFloat == 'Right') {
                                                        calloutBlock.style.float = 'right';
                                                    } else {
                                                        // tolerate missing class
                                                        calloutBlock.style.float = 'left';
                                                    }
                                                }
                                                calloutBlock.style.width = "";
                                            } else {
                                                calloutBlock.style.float = 'none';
                                                calloutBlock.style.width = 90 + "%";
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
        // layoutMenuSizeHorzMax = 2000;
    }
    //
    // if (layoutResizeCn == 1) {
    //
    // bodyMainContainer.style.height = '100%';
    // Height of left, centre and right menu containers
    /* -- */
    body.style.height = "";
    bodyMainContainer.style.height = "";
    // Sets layoutHeight
    WindowContainerSizeGetAll();
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
    // // bodyMainCenterCenter.style.height = '0' + 'px';;// '';// 'auto';// '100%';// '50.0em';// (layoutMenuSizeHorzMax) + 'px';
    // // bodyMainCenter.style.height = 'auto';// '100%';// layoutMenuSizeHorzMax + 'px';
    // // bodyMainContainer.style.height = '100%';// (layoutMenuSizeHorzMax) + 'px';// 'auto';// (layoutMenuSizeHorzMax + 100) + 'px';
    // body.style.height = '';// (layoutMenuSizeHorzMax + 100) + 'px';
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
// ..................................................................................... _//

script_state = "Mdm Standard Window functions loaded. (Window, Client, Resize, Cookie, Session, Popup)";
if (debugLoadIsOn) { debugger; }
