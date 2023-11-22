// Window Functions
////////////////////////////////////////////////
// Window Layout - Section, Block, Callout
var layoutBodyColumnType;
var layoutBlockWidth
var layoutBlockDivisor
var layoutBlockExact;
var layoutBlock, layoutBlockCn;

var calloutBlock
var calloutBlockCn;
var calloutBlockColumnType;
var calloutBoxWidth = 0;
var calloutBodyColumnFloat;
var calloutBlockSize;
var calloutBlockSmall;
// Misc:
var boxClass;
var tmpAdjust;

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

// Menu Size
var layoutMenuSizeVertMax = 0;
var layoutMenuSizeHorzMax = 0;
var layoutMenuSizeSideVertMax = 0;
var layoutMenuSizeSideHorzMax = 0;
var layoutMenuSizeSideHorzTallest = 0;

// Window Load
////////////////////////////////////////////////
// // Document Window OnLoad:
// window.onload = function () { WindowOnload(); }
function WindowOnload() {
    // Get browser type
    BrowserVsGet();

    // document.styleSheets[1].disabled=false;
    // Initialize and Set Global Variables
    WindowLoadInit();

    // Includes
    if (!loadDelayIncludes && loadIncludes && !loadIncludesDone) {
        IncludeHtmlFileAll();
    }

    // Docuement Element Initialize & Store Original Menu Columns.
    if (!loadDelayJava) {
        // BodyMenuInit();
        // Choose Standard Layout
        // Keeps the passed layout. Detects duplicate requests.
        // LayoutRefresh(layoutStandard);
        // LayoutSelectNext will validate the layout
        LayoutSelectNext(layoutStandard);
        // Forces the layout calculations.
        // LayoutSelectByIndex(layoutStandard);
    }

    // Build Body Images Div - depreciated
    // if (!loadDelayBodyImage) {
    //     bodyImageContainer = BodyImagesHtmlBuild();
    // }

    // Build Menu Images Div
    if (!loadDelayMenuImage) {
        MdmMenuImageInit();
        // bodyMenuImageContainer =
        MenuImagesHtmlBuild();
    }

    // Sync Form
    if (!loadDelayDebugState) { ConsoleStateInit(); }

    // Timers
    TimerCreate();
    TimerFunctionSet();
    // Intervals and Duration
    TimerDurationSet();
    // document.styleSheets[1].disabled=true;
    LayoutFontCssTagHoverDisable();

    // Resize Window
    WindowResizeLayout();
}
// Window Session Functions
///////////////////////////////////////////////
// Window Session Load
function WindowSessionLoad() {
    const cat = localStorage.getItem("myCat");
    // Load Layout and Images Displayed
    // Load Cookie
    // Apply Cookie to Window
    // Apply Default to Window
}
// Window Session Save
function WindowSessionSave() {
    localStorage.setItem("myCat", "Tom");
    // Load Layout and Images Displayed
    // Build Oookie
    // Save Cookie
}
// Window Cookies Functions
///////////////////////////////////////////////
// Window Cookie Save
function WindowCookieLoad() {
    // Load Cookie
    //
}
// Window Cookie Save
function WindowCookieSave() {
    // Save Cookie
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
    // ElementObjectContainerCreate();    // Synchorize Confole Settings Form
    // Resize Window
    // WindowResizeLayout();
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
    if (UseLogWindow) {
        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
            ' Height of left and right menu containers vs the center menu container'
            + ': ',
            'MdmWindow:WindowContainerSizeGetAll', 151, 0, null, null,
            errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
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
    if (UseLogWindow) {
        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
            ' Height of bodyLayout: (' + layoutMenuSizeSideHorzMax + ', '
            + layoutMenuSizeSideVertMax + ', ' + layoutMenuSizeSideHorzTallest
            + ').',
            'MdmWindow:WindowContainerSizeGetAll', 168, 0, null, null,
            errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
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
    if (UseLogWindow) {
        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
            ' Height of BodyMainCenterHeight: ' + bodyMainCenterHeight
            + '.',
            'MdmWindow:WindowContainerSizeGetAll', 188, 0, null, null,
            errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
    }
    // Left
    bodyLayoutMenuLeftHeight = ElementHeightMaxGet(UseScroll, UseBase, bodyMainLeft);
    // if (layoutResizeCn == 0) { bodyLayoutMenu1Height = ElementHeightMaxGet(UseScroll, UseBase, bodyMainLeft); }
    //
    if (UseLogWindow) {
        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
            ' Height of bodyMainLeft: ' + bodyLayoutMenuLeftHeight
            + '.',
            'MdmWindow:WindowContainerSizeGetAll', 199, 0, null, null,
            errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
    }
    // Right
    bodyLayoutMenuRightHeight = ElementHeightMaxGet(UseScroll, UseBase, bodyMainRight);
    // if (layoutResizeCn == 0) { bodyLayoutMenuRightHeight = ElementHeightMaxGet(UseScroll, UseBase, bodyMainRight); }
    //
    if (UseLogWindow) {
        MessageLog(null, DoNotUseDebug, DoUseSingleLine,
            ' Height of bodyMainRight: ' + bodyLayoutMenuRightHeight
            + '.',
            'MdmWindow:WindowContainerSizeGetAll', 210, 0, null, null,
            errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
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
            //         bodyMenuContainer[bodyContainerSideIndex][bodyMenuGroupIndex] = ElementGetFromElement(null, ('MenuGroup' + (SideIndexAdjust + bodyMenuGroupIndex)), ('MenuGroup' + (SideIndexAdjust + bodyMenuGroupIndex)), elementPassed);
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

// Document Window Client Width
// ..................................................................................... _//
function WindowClientWidth() {
    // Window Width
    layoutDocumentWidth = window.document.documentElement.offsetWidth;
    layoutAvailWidth = window.screen.availWidth;
    // layoutClientWidth = window.screen.availWidth - layoutWidthMargin;
    layoutClientWidth = window.document.documentElement.offsetWidth - layoutWidthMargin;
    // if (layoutClientWidth < 100) { layoutClientWidth = document.body.parentNode.clientWidth - layoutWidthMargin; }
    //
    layoutDocumentHeight = window.document.documentElement.offsetHeight;
    layoutAvailHeight = window.screen.availHeight;
    layoutClientHeighth = window.screen.availHeight - layoutHeightMargin;
    // if (layoutClientHeight < 100) { layoutClientHeight = document.body.parentNode.clientHeight - layoutHeightMargin; }
    //
    layoutWidth = layoutDocumentWidth;
    // if (layoutWidth < 100) {
    //     if (browserIsIE) { layoutWidth = document.body.parentNode.clientWidth; }
    // }
    // layoutWidth -= layoutWidthMargin;
    layoutHeight = layoutDocumentHeight;
    // if (layoutHeight < 100) {
    //     if (browserIsIE) { layoutHeight = document.body.parentNode.clientHeight; }
    // }
    // todo not adjusted properly
    // layoutHeight -= layoutHeightMargin;
    // layoutWidth -= 20;
    // layoutHeight -= 20;
    //
}
// Viewport
function WindowViewportInit() {
    var width = layoutWindowViewportWidth;
    var height = layoutWindowViewportHeight;

    //Remove the window from fullscreen (optional), if it s in fullscreen the outerHeight is not accurate
    browser.manage().window().setSize(new Dimension(width, height));

    var js = window.browser; // (JavascriptExecutor)browser;
    var windowSize = js.executeScript("return (window.outerWidth - window.innerWidth + " + width + ") + ',' + (window.outerHeight - window.innerHeight + " + height + "); ").toString();
    //Get the values
    width = Integer.parseInt(windowSize.split(",")[0]);
    height = Integer.parseInt(windowSize.split(",")[1]);

    //Set the window
    WindowViewportSet(width, height);
    // browser.manage().window().setSize(new Dimension(width, height));
}
function WindowViewQuarter() {
    window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}

function WindowViewportSet(passedWidth, passedHeight) {
    // Store the meta element
    var viewport_meta = document.getElementById('MdmViewport');
    // Define our viewport meta values
    var viewports = {
        default: viewport_meta.getAttribute('content'),
        landscape: 'width=' + passedWidth + ', height=' + passedHeight
    };
    // Change the viewport value based on screen.width
    // layoutDocumentWidthMax changes on mobile to 768px (Apple)
    var viewport_set = function () {
        if (screen.width > layoutDocumentWidthMax)
            viewport_meta.setAttribute('content', viewports.landscape);
        else
            viewport_meta.setAttribute('content', viewports.default);
    }
    // Set the correct viewport value on page load
    viewport_set();
}
// Recalculate Screen Display
// ...................................... //
function WindowResizeLayout() {

    // Recalculate Screen Display
    calloutBoxWidth = 0;
    var bodyMainCenterLeftAdj = 0;
    var bodyMainCenterWidthAdj = 0;
    var bodyMainCenterWidth = 0;
    script_state = "WindowResizeLayout: Started";
    //
    try {
        //
        // Initialization (catches variations in use)
        if (loadFirstJava) { ElementObjectCreate(); }
        // Load Containers if missing
        // ...................................... //
        script_state = "WindowResizeLayout: Started";
        if (!bodyMainLeft) {
            script_state += ", ElementObjectContainerCreate";
            ElementObjectContainerCreate();
        }

        // Recalculate Globals for Screen
        // ...................................... //
        script_state += ", WindowClientWidth";
        WindowClientWidth();
        // Recalculate Positions for Menu Images
        // ...................................... //
        if (layoutResizeCn == 0) {
            script_state += ", WindowContainerSizeGetAll";
            WindowContainerSizeGetAll();
        }

        // Process DivBox and Callout layout
        // ...................................... //
        // Count Display Blocks (s/b DivBox containers)
        script_state += ", ElementObjectBlockCount";
        bodyBlockCn = ElementObjectBlockCount();

        // Determine DivBox (Body Content) column and callout sizes
        // Note that fewer text block is detected.
        script_state += ", LayoutBlockWidthGet";
        layoutBlockWidth = LayoutBlockWidthGet(); // todo bug
        if (layoutDocumentWidth / 2.5 < layoutParaWidthMin && layoutIndex == layoutStandard) {
            if (layoutIndexCurrLast == layoutStandard) {
                script_state += ", LayoutRefresh for narrow window";
                // layoutIndex = layoutReadingMode;
                LayoutSelectNext(layoutWindowed);
            }
        }
        // Width over layoutMenuDocWidthWide
        // ...................................... //
        // if (BodyMainCenterCenter.offsetWidth > layoutMenuDocWidthWide) {
        if (layoutDocumentWidth > layoutMenuDocWidthWide) {
            // Wide Layout
            // ...................................... //
            script_state += ", Wide Layout";
            if (layoutIndex == layoutStandard && (bodyMainLeftVisible || bodyMainRightVisible)) {
                // Standard Layout
                layoutIsStandard = true;
                if (layoutDocumentWidth > 2.5 * layoutMenuDocWidthWide) {
                    // Very Wide Layout
                    script_state += " (Huge)";
                    // Left
                    if (bodyMainLeftVisible) {
                        bodyMainLeft.style.width = '5%';
                        bodyMainLeft.style.display = 'block';
                    } else {
                        bodyMainLeft.style.width = '0%';
                        bodyMainCenterLeftAdj = 5;
                        bodyMainCenterWidthAdj += 5;
                        bodyMainLeft.style.display = 'none';
                    }
                    // Right
                    // bodyMainRight.style.top = 0%
                    if (bodyMainRightVisible) {
                        if (layoutUseAbsolute) { bodyMainRight.style.left = '95%'; }
                        bodyMainRight.style.width = '5%';
                        bodyMainRight.style.display = 'block';
                    } else {
                        if (layoutUseAbsolute) { bodyMainRight.style.left = '100%'; }
                        bodyMainRight.style.width = '0%';
                        bodyMainCenterWidthAdj += 5;
                        bodyMainRight.style.display = 'none';
                    }
                    //
                    // Center
                    // bodyMainCenter.style.top = 0%
                    if (layoutUseAbsolute) { bodyMainCenter.style.left = (12 - bodyMainCenterLeftAdj) + '%'; }
                    bodyMainCenterWidth = 90;
                } else {
                    // Wide Layout            // Left
                    // bodyMainLeft.style.width = '10%';
                    // bodyMainLeft.style.width = '15%';
                    if (bodyMainLeftVisible) {
                        bodyMainLeft.style.width = '12%';
                        bodyMainLeft.style.display = 'block';
                    } else {
                        bodyMainLeft.style.width = '0%';
                        bodyMainCenterLeftAdj = 12;
                        bodyMainCenterWidthAdj += 12;
                        bodyMainLeft.style.display = 'none';
                    }
                    // Right
                    // bodyMainRight.style.top = 0%
                    if (bodyMainRightVisible) {
                        if (layoutUseAbsolute) { bodyMainRight.style.left = '88%'; }
                        bodyMainRight.style.width = '12%';
                        bodyMainRight.style.display = 'block';
                    } else {
                        if (layoutUseAbsolute) { bodyMainRight.style.left = '100%'; }
                        bodyMainRight.style.width = '0%';
                        bodyMainCenterWidthAdj += 12;
                        bodyMainRight.style.display = 'none';
                    }
                    //
                    // Center
                    // bodyMainCenter.style.top = 0%
                    if (layoutUseAbsolute) { bodyMainCenter.style.left = (12 - bodyMainCenterLeftAdj) + '%'; }
                    bodyMainCenterWidth = 76;
                }
                // bodyMainCenter.style.width = (80 + bodyMainCenterWidthAdj) + '%';
                //
            } else {
                layoutIsStandard = false;
                script_state += " (no menus)";
                // Wide Layout Options (no side menus)
                // Center
                // bodyMainCenter.style.top = 0%
                if (layoutUseAbsolute) { bodyMainCenter.style.left = '0%'; }
                // bodyMainCenter.style.left = '0%';
                bodyMainCenterWidth = 100;
                // bodyMainCenter.style.width = '100%';
                bodyMainLeft.style.display = 'none';
                bodyMainRight.style.display = 'none';
            }
            //
            layoutIsWide = true;
            //
        } else {
            // Narrow Width: under layoutMenuDocWidthWide
            // ...................................... //
            script_state += ", Narrow Layout";
            if (layoutIndex == layoutStandard && (bodyMainLeftVisible || bodyMainRightVisible)) {
                layoutIsStandard = true;
            } else {
                layoutIsStandard = false;
            }
            // if (layoutIsStandard) {
            // Left
            // bodyMainLeft.style.top = 0%
            // if (layoutUseAbsolute) { bodyMainLeft.style.left = '0%'; }
            if (bodyMainLeftVisible && layoutIsStandard) {
                if (layoutUseAbsolute) { bodyMainCenter.style.left = '20%'; }
                bodyMainLeft.style.width = '20%';
                bodyMainLeft.style.display = 'block';
            } else {
                if (layoutUseAbsolute) { bodyMainLeft.style.width = '0%'; }
                bodyMainCenterLeftAdj = 20;
                bodyMainCenterWidthAdj += 20;
                bodyMainLeft.style.display = 'none';
            }
            //
            // Right
            // bodyMainRight.style.top = 0%
            if (bodyMainRightVisible && layoutIsStandard) {
                if (layoutUseAbsolute) { bodyMainRight.style.left = '80%'; }
                bodyMainRight.style.width = '20%';
                bodyMainRight.style.display = 'block';
            } else {
                if (layoutUseAbsolute) { bodyMainRight.style.left = '100%'; }
                bodyMainRight.style.width = '0%';
                bodyMainCenterWidthAdj += 20;
                bodyMainRight.style.display = 'none';
            }
            //
            // Center
            // bodyMainCenter.style.top = 0%
            bodyMainCenterWidth = 60;
            // bodyMainCenter.style.width = (60 + bodyMainCenterWidthAdj) + '%';
            // bodyMainCenter.style.width = '60%';
            // } else {
            //     layoutIsStandard = false;
            //     // Center
            //     // bodyMainCenter.style.top = 0%
            //     if (layoutUseAbsolute) { bodyMainCenter.style.left = '0%'; }
            //     bodyMainCenterWidth = 100;
            //     // bodyMainCenter.style.width = '100%';
            // }
            //
            layoutIsWide = false;
            layoutIsStandard = true;
            //
        }

        // Adjust for margin, padding & border custom styling
        // ...................................... //
        script_state += ", Columns";
        // tmpAdjust = ElementContainerAdjustGet(bodyMainCenterCenter, bodyMainCenter, true, true, true, true);
        tmpAdjust = 0;

        // Set width of content area BodyMainCenter
        bodyMainCenter.style.width = (bodyMainCenterWidth + bodyMainCenterWidthAdj - tmpAdjust) + '%';
        // bodyMainCenter.style.display = 'block';

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
        script_state += " :: Content";
        layoutSectionCn = 0;
        while (bodyMainCenterCenter.childNodes[layoutSectionCn]) {
            // Section
            // ...................................... //
            layoutSection = bodyMainCenterCenter.childNodes[layoutSectionCn];
            if (layoutSection.id) {
                if ((layoutSection.id).substring(0, 4) == 'DivS') {
                    script_state += ", " + layoutSection.id;
                    // Layout Blocks
                    layoutBlockCn = 0;
                    while (layoutSection.childNodes[layoutBlockCn]) {
                        // Block
                        // ...................................... //
                        layoutBlock = layoutSection.childNodes[layoutBlockCn];
                        if (layoutBlock.id) {
                            if (layoutBlock.id.substring(0, 4) == "DivP" || layoutBlock.id.substring(0, 4) == "DivB" || layoutBlock.id.substring(0, 6) == "DivBox") {
                                // Process this block
                                script_state += ", " + layoutBlock.id;
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
                                            if ((calloutBlock.id).substring(0, 4) == 'DivC') {
                                                // Process this callout block
                                                script_state += ", " + calloutBlock.id;
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
            MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                'Window Resize Excessive Usage (Possible Error)',
                'MdmWindow:WindowResizeLayout', 779, 0, null, null,
                errorIsSevere, errorDoNotDisplayTag, DoUseAlert);
            layoutResizeCn = 0;
            // layoutMenuSizeHorzMax = 2000;
        }
        //
        // Container
        script_state += " ::, Container";
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
        script_state += ". WindowResizeLayout Completed without error for " + layoutIndex;
    } catch (bodyLayoutErr) {
        // Errors:
        // ...................................... //
        script_state = "Error in " + script_state;
        ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
    } finally {
        // ...................................... //
        try {
            script_state += ". Finishing layout for " + layoutIndex + ".";
            layoutWidthPrev = layoutWidth;
            layoutHeightPrev = layoutHeight;
            layoutResizeDo = false;
            // ...................................... //
            // Recalculate Positions for Menu Images
            //
            if (UseLogWindow) {
                MessageLog(null, DoNotUseDebug, DoUseSingleLine,
                    script_state +
                    ' Main Container layoutHeight: ' + layoutHeight
                    + '.',
                    'MdmWindow: WindowResizeLayout', 878, 0, null, null,
                    errorIsComment, errorDoNotDisplayTag, DoNotUseAlert);
            }
            //
        } catch (bodyLayoutErr) {
            script_state += " Error finishing layout for " + layoutIndex;;
            ErrorCaught(consoleStateFormErr, script_state, errorIsSevere);
            script_state += "WindowResizeLayout: Aborted with an error";
        }
    }
    // return;
}
// ..................................................................................... _//

// Copy controls to Top panel for 3 Windowed
function LayoutBuildTop() {
    // (elementLeftPassed, elementRightPassed)
    if (!bodyMainCenterTopLeft || !bodyMainCenterTopRight) { return; } // error
    // bodyMenuContainer[bodyMenuLeft][1]
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
    var elementCurr;

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
            //         bodyMenuContainer[bodyContainerSideIndex][bodyMenuGroupIndex] = ElementGetFromElement(null, ('MenuGroup' + (SideIndexAdjust + bodyMenuGroupIndex)), ('MenuGroup' + (SideIndexAdjust + bodyMenuGroupIndex)), elementPassed);
            //     }
            // }
            if (bodyMenuContainer[bodyContainerSideIndex][bodyMenuGroupIndex]) {
                //
                // elementCurr = bodyMenuContainer[bodyContainerSideIndex][bodyMenuGroupIndex];
                elementCurr = bodyMenuGroup[AdjustedIndex];
                //
                // Get the height
                layoutMenuSizeVert = ElementHeightMaxGet(true, true, elementCurr);
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
                // Process the element
                //............................................................---//
                // bodyMenuGroup1
                elementCurr.style.float = 'left';
                elementCurr.style.position = 'relative';
                elementCurr.style.top = '0%';
                // elementCurr.style.left = Math.abs((bodyMenuGroupIndex - 1) * 33.5) + '%';
                //
                // bodyMenuGroup[1].style.position = 'absolute';
                // bodyMenuGroup[1].style.top = ' 0em';
                // bodyMenuGroup[1].style.left = '3%';
                elementCurr.style.maxWidth = '30%';
                // bodyMenuGroup[2].style.left = '35%';
                // bodyMenuGroup[2].style.marginLeft = '3%';
                // bodyMenuGroup[3].style.top = '1.0em';
                // bodyMenuGroup[3].style.left = '67%';

                if (bodyContainerSideIndex) {
                    bodyMainCenterTopRight.appendChild(elementCurr);
                    // bodyMainCenterTopRight.outerHTML += elementCurr.outerHTML;
                    // bodyMainCenterTopRight.innerHTML += elementCurr.outerHTML;
                    // bodyMainCenterTopRight.innerHTML += elementCurr.innerHTML;
                } else {
                    bodyMainCenterTopLeft.appendChild(elementCurr);
                    // bodyMainCenterTopLeft.outerHTML += elementCurr.outerHTML;
                    // bodyMainCenterTopLeft.innerHTML += elementCurr.outerHTML;
                    // bodyMainCenterTopLeft.innerHTML += elementCurr.innerHTML;
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
    // elementPassed.style.minWidth = layoutMenuSizeHorzMax;
    bodyMainCenterTopLeft.style.minHeight = layoutMenuSizeVertMax;
    bodyMainCenterTopRight.style.minHeight = layoutMenuSizeVertMax;
    // bodyMainCenterTopLeft.style.width = '50%';
    // bodyMainCenterTopRight.style.width = '50%';
    // bodyMainCenterTopLeft.style.display = 'inherit';
    // bodyMainCenterTopRight.style.width = 'inherit';
}

// Copy controls to Top panel for 3 Windowed
function LayoutBuildTopOld() {
    //
    if (layoutWindowedFirst) {
        //
        var TopLeftWidth = 0;
        var TopLeftWidthInner = 0;
        // BodyMenuLayout
        //............................................................---//
        // bodyLayoutMenu1 BodyMenuLayout
        if (false == true) {
            if (!elbodyLayoutMenu1 && bodyMainCenterTopLeft) {
                bodyLayoutMenu1 = ElementGetFromElement(bodyLayoutMenu1, 'BodyMenuLayout1', 'BodyMenuLayout1', bodyMainCenterTopLeft);
            }
            //
            TopLeftWidth = bodyLayoutMenu1.style.posWidth;
            if (TopLeftWidth = 0) { TopLeftWidth = layoutWidth / 2; }
            TopLeftWidthInner = TopLeftWidth;
        }
        //
        // Process Left Column
        //
        // bodyMainLeft.innerHTML = bodyMainLeftOrig.innerHTML
        bodyMainLeftCopy = ElementCopy(false, "", bodyMainLeftCopy, bodyMainLeftFirst, bodyMainLeftOrig, 'block');
        // bodyMainLeftCopy = ElementCopy(false, "", bodyMainLeft, bodyMainLeftFirst, bodyMainLeftOrig, 'block');
        bodyMainLeftFirst = false;
        //
        // bodyMainRight.innerHTML = bodyMainLeftOrig.innerHTML
        bodyMainRightCopy = ElementCopy(false, "", bodyMainRightCopy, bodyMainRightFirst, bodyMainRightOrig, 'block');
        // bodyMainRightCopy = ElementCopy(false, "", bodyMainRight, bodyMainRightFirst, bodyMainRightOrig, 'block');
        bodyMainRightFirst = false;
        // end of layoutWindowFirst
    }
    //
    //............................................................---//
    // Left Menu Column
    // Center Top Left Area Columns
    //
    //............................................................---//
    // Enclose Box
    if (!bodyMainCenterTopClass.length) {
        bodyMainCenterTopClass = bodyMainCenterTop.className;
        bodyMainCenterTop.className = bodyMainCenterTopClass + ' CalloutBoxBg CalloutBorderFull';
    }
    bodyMainCenterTop.width = '98%';
    //
    // if (true == true) {
    if (layoutWindowedFirst) {
        //............................................................---//
        // Set Center Top Left Element
        // MainCenterTopLeft is a Reference pointer into the page
        // that has MainLeft HTML copied into it.
        bodyMainCenterTopLeft = ElementGetRef(bodyMainCenterTopLeft, 'BodyMainCenterTopLeft', 'BodyMainCenterTopLeft');
        bodyMainCenterTopLeft = ElementCopy(false, "", bodyMainCenterTopLeft, bodyMainCenterFirst, bodyMainLeftOrig, 'block');
        bodyMainCenterFirst = false;
        //............................................................---//
        // Enclose Box
        bodyMainCenterTopLeft.className = bodyMainCenterTopLeft.className + ' CalloutBorderFull';
        //............................................................---//
        // Left Menu Container
        //............................................................---//
        // Left Body Column (BodyMainLeft)
        //............................................................---//
        // bodyLayoutMenu1 BodyMenuLayout
        bodyLayoutMenu1 = ElementGetFromElement(bodyLayoutMenu1, 'BodyMenuLayout1', 'BodyMenuLayout1', bodyMainCenterTopLeft);
        // bodyLayoutMenu1 = ElementGetFromElement(bodyLayoutMenu1, 'BodyMenuLayout1', 'BodyMenuLayout1', bodyMainCenterTopLeft);
        //............................................................---//
        // Width of Layout area (previous?)
        //............................................................---//
        // Left Outer and Inner Decorative Divs
        bodyMainLeftOuter = ElementGetFromElement(bodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', bodyMainCenterTopLeft);
        // bodyMainLeftOuter = ElementGetFromElement(bodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', bodyMainCenterTopLeft);
        bodyMainLeftOuter.style.paddingLeft = '3%';
        bodyMainLeftOuter.style.width = '97%';
        //
        bodyMainLeftInner = ElementGetFromElement(bodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', bodyMainCenterTopLeft);
        // bodyMainLeftInner = ElementGetFromElement(bodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', bodyMainCenterTopLeft);
        bodyMainLeftInner.style.paddingRight = '3%';
        bodyMainLeftInner.style.width = '97%';
        bodyMainLeftInner.style.paddingTop = '1.0em';

        WindowContainerSizeGetMenu(bodyMainCenterTopLeft);
        if (layoutMenuSizeSideHorzTallest) {
            bodyMainCenterTopLeft.style.minHeight = layoutMenuSizeSideHorzTallest;
            bodyMainLeftOuter.style.minHeight = layoutMenuSizeSideHorzTallest;
            bodyMainLeftInner.style.minHeight = layoutMenuSizeSideHorzTallest;
        }
        //
        //............................................................---//
        // ElementGetFromElementExt(bodyMenuGroup1, 'MenuGroup1', 'MenuGroup1',
        // 		bodyMainCenterTopLeft, DoFindSet, bodyMenuGroup1)
        // ElementGetFromElementExt(bodyMenuGroup[2], 'MenuGroup2', 'MenuGroup2',
        // 		bodyMainCenterTopLeft, DoFindSet, bodyMenuGroup[2])
        // ElementGetFromElementExt(bodyMenuGroup[3], 'MenuGroup3', 'MenuGroup3',
        // 		bodyMainCenterTopLeft, DoFindSet, bodyMenuGroup[3])
        //............................................................---//
        // Left bodyMenuGroup1, 2, 3
        bodyMenuGroup[1] = ElementGetFromElement(bodyMenuGroup[1], 'MenuGroup1', 'MenuGroup1', bodyMainCenterTopLeft);
        bodyMenuGroup[2] = ElementGetFromElement(bodyMenuGroup[2], 'MenuGroup2', 'MenuGroup2', bodyMainCenterTopLeft);
        bodyMenuGroup[3] = ElementGetFromElement(bodyMenuGroup[3], 'MenuGroup3', 'MenuGroup3', bodyMainCenterTopLeft);
        //
        //............................................................---//
        // bodyMenuGroup1
        bodyMenuGroup[1].style.float = 'left';
        // bodyMenuGroup[1].style.position = 'absolute';
        // bodyMenuGroup[1].style.top = ' 0em';
        // bodyMenuGroup[1].style.left = '3%';
        bodyMenuGroup[1].style.maxWidth = '30%';
        // bodyMenuGroup[1].style.styleFloat = 'left';
        //
        //............................................................---//
        // bodyMenuGroup[2]
        bodyMenuGroup[2].style.float = 'left';
        // bodyMenuGroup[2].style.position = 'absolute';
        // bodyMenuGroup[2].style.top = '1.0em';
        // bodyMenuGroup[2].style.left = '35%';
        bodyMenuGroup[2].style.maxWidth = '30%';
        // bodyMenuGroup[2].style.marginLeft = '3%';
        // bodyMenuGroup[2].style.styleFloat = 'left';
        //............................................................---//
        // bodyMenuGroup[3]
        bodyMenuGroup[3].style.float = 'left';
        // bodyMenuGroup[3].style.position = 'absolute';
        // bodyMenuGroup[3].style.top = '1.0em';
        // bodyMenuGroup[3].style.left = '67%';
        bodyMenuGroup[3].style.maxWidth = '30%';
        // bodyMenuGroup[3].style.marginLeft = '3%';
        // bodyMenuGroup[3].style.styleFloat = 'left';
        //............................................................---//
        // Left Body Text Alignment Breaks
        // bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterTopLeft, 'MenuGroup1ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
        // bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterTopLeft, 'MenuGroup2ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
        // bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterTopLeft, 'MenuGroup3ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
        // end of layoutWindowFirst
    }
    //
    //............................................................---//
    //			 Menu2 at Center Top Right
    // Right Menu Column
    // Center Top Right Area Columns
    // if (true == true) {
    if (layoutWindowedFirst) {
        // Right Body Text Alignment Breaks
        // Set (Copy To) Top Left Element
        bodyMainCenterTopRight = ElementGetRef(bodyMainCenterTopRight, 'BodyMainCenterTopRight', 'BodyMainCenterTopRight');
        bodyMainCenterTopRight = ElementCopy(false, "", bodyMainCenterTopRight, bodyMainCenterFirst, bodyMainRightOrig, 'block');
        //............................................................---//
        // Enclose Box
        bodyMainCenterTopRight.className = bodyMainCenterTopRight.className + ' CalloutBorderFull';
        //............................................................---//
        // bodyLayoutMenu2 BodyMenuLayout
        bodyLayoutMenu2 = ElementGetFromElement(bodyLayoutMenu2, 'BodyMenuLayout2', 'BodyMenuLayout2', bodyMainCenterTopRight);
        //............................................................---//
        // Right Outer and Inner Decorative Divs
        bodyMainRightOuter = ElementGetFromElement(bodyMainLeftOuter, 'BodyMainRightOuter', 'BodyMainRightOuter', bodyMainCenterTopRight);
        bodyMainLeftOuter.style.paddingLeft = '3%';
        bodyMainLeftOuter.style.width = '97%';
        //
        bodyMainRightInner = ElementGetFromElement(bodyMainRightInner, 'BodyMainRightInner', 'BodyMainRightInner', bodyMainCenterTopRight);
        bodyMainRightInner.style.paddingRight = '3%';
        bodyMainRightInner.style.width = '97%';
        bodyMainRightInner.style.paddingTop = '1.0em';
        //............................................................---//
        var elementHeight = 0;
        layoutMenuSizeHorzMax = 0;
        // Right bodyMenuGroup 4(1), 5(2), 6(3)
        bodyMenuGroup[4] = ElementGetFromElement(bodyMenuGroup[4], 'MenuGroup4', 'MenuGroup4', bodyMainCenterTopRight);
        bodyMenuGroup[5] = ElementGetFromElement(bodyMenuGroup[5], 'MenuGroup5', 'MenuGroup5', bodyMainCenterTopRight);
        bodyMenuGroup[6] = ElementGetFromElement(bodyMenuGroup[6], 'MenuGroup6', 'MenuGroup6', bodyMainCenterTopRight);
        //............................................................---//
        // bodyMenuGroup4
        bodyMenuGroup[4].style.position = 'absolute';
        bodyMenuGroup[4].style.top = '1.0em';
        bodyMenuGroup[4].style.left = '3%';
        bodyMenuGroup[4].style.maxWidth = '30%';
        // bodyMenuGroup[4].style.styleFloat = 'left';
        elementHeight = ElementHeightMaxGet(true, true, bodyMenuGroup[4]);
        if (layoutMenuSizeHorzMax < elementHeight) { layoutMenuSizeHorzMax = elementHeight; }
        //............................................................---//
        // bodyMenuGroup5
        bodyMenuGroup[5].style.position = 'absolute';
        bodyMenuGroup[5].style.top = '1.0em';
        bodyMenuGroup[5].style.left = '35%';
        bodyMenuGroup[5].style.maxWidth = '30%';
        // bodyMenuGroup[5].style.marginLeft = '3%';
        // bodyMenuGroup[5].style.styleFloat = 'left';
        elementHeight = ElementHeightMaxGet(true, true, bodyMenuGroup[5]);
        if (layoutMenuSizeHorzMax < elementHeight) { layoutMenuSizeHorzMax = elementHeight; }
        //............................................................---//
        // bodyMenuGroup[3]
        bodyMenuGroup[6].style.position = 'absolute';
        bodyMenuGroup[6].style.top = '1.0em';
        bodyMenuGroup[6].style.left = '67%';
        bodyMenuGroup[6].style.maxWidth = '30%';
        // bodyMenuGroup[6].style.marginLeft = '3%';
        // bodyMenuGroup[6].style.styleFloat = 'left';
        elementHeight = ElementHeightMaxGet(true, true, bodyMenuGroup[6]);
        if (layoutMenuSizeHorzMax < elementHeight) { layoutMenuSizeHorzMax = elementHeight; }
        //............................................................---//
        // Column and Float Breaks and Clear
        bodyMainCenterTopRight = ElementBreakSet(bodyMainCenterTopRight, 'MenuGroup4ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
        bodyMainCenterTopRight = ElementBreakSet(bodyMainCenterTopRight, 'MenuGroup5ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
        bodyMainCenterTopRight = ElementBreakSet(bodyMainCenterTopRight, 'MenuGroup6ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
        // end of layoutWindowFirst
    }
}

script_state = "Mdm Standard Window functions loaded. (Window, Client, Resize, Cookie, Session, Popup)";
if (debugLoadIsOn) { debugger; }
