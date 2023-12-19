// Body Layout Selection - Menus
////////////////////////////////////////////////
// GLOBAL / COMMON
// var menuImageBorderWidth = 6;
////////////////////////////////////////////////
// Range variables (used by images)
var oObjIndexStart = 0;
var oObjIndexEnd = 0;
// Heading Menu Group (boxes across)
////////////////////////////////////////////////
var headingGroupPointer;
var headingGroupMax;
var headingGroupCnStart;
var headingGroupCnEnd;
var headingGroupCnCurr;
// Menu Groups
////////////////////////////////////////////////
// Menu Current Image Object By Group (Image Group)
// set the number of groups and the images per group
// var bodyMenuGroupMax;
// var imgGroupCount;
// var imgGroupArraySize;
var imgGroupBoxCount;
// var imgGroupImageArraySize;
var imgGroupCnStart = 0;
var imgGroupCnEnd = 0;


// Image Object Array
// ...................................... //
var menuImage = null;
// var menuImage = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// Current Image Position
var oObjNextTop = 0;
var oObjNextLeft = 0;
// Current Image Position Offset
var oObjNextOffsetTop = 0;
var oObjNextOffsetLeft = 0;
// Image Postioning Offsets
// These are layout postion patterns to be applied
// Menu Images (by Groups) - Image Object Array
////////////////////////////////////////////////
var menuImageTimerCn = 0;

// SectionBlock Heading Image Group
// ...................................... //
var headingGroupPointer;
var headingGroupMax;
var headingGroupCnStart;
var headingGroupCnEnd;
var headingGroupCnCurr;

var imgAniToggle;
var imgMouseHover;

// SectionBlock Appearance //
// ...................................... //
var menuImageBorderWidth = 6;

// SectionBlock Group and Item Image Array Initialization
// ...................................... //
// Current Image and Position
// Maximum # of Images By Group
var imgMaxByGroup;
// Maximum # of Images Per Cascading Row By Group
var oObjectRowMax;
// Image Display (Visible) Locked Array
var menuImageLocked;

// First Image
// ...................................... //
// First Image Offset By Group, By Top, Left
var menuImageOffsetFirst;

// Image Position
// ...................................... //
// Position of Parent Image (Parent of First only stored at this time)
var menuImagePositionLeft;
var menuImagePositionTop;
var menuImagePositionWidth;
var menuImagePositionHeight;

// Animation Timer by Group by Image
// ...................................... //
// Not currently in use
var menuImageTimerCn;

// // Image Postioning Offsets - Large
// // ...................................... //
// var menuImageOffsetLeftLarge;
// var menuImageOffsetTopLarge;

// Image Postioning Offsets - Small / Large
// ...................................... //
// These are layout postion patterns to be applied
var menuImageOffsetLeft;
var menuImageOffsetTop;

// Position All
function menuImageInit() {
    // Image Group
    // imgGroupCount = imgGroupCount;
    // imgGroupArraySize = imgGroupCount;
    // imgGroupBoxCount = 20;
    // imgGroupImageArraySize = imgGroupBoxCount + 1;

    // Image Object Array
    if (menuImage == null) { menuImageCreate(); }
    // menuImageGroupInitAll(bodyMenuGroupMax);

    //  imgGroupCnStart = 1;
    imgGroupCnEnd = bodyMenuGroupMax;
    imgGroupCount = bodyMenuGroupMax + 1;

    // Image Group Arrays
    // imgGroupArraySize = imgGroupCount;
    // imgGroupImageArraySize = imgGroupBoxCount + 1;

    // ...................................... //
    // SectionBlock Heading Image Group
    // ...................................... //
    headingGroupPointer = imgGroupArraySize;
    headingGroupMax = imgGroupArraySize;
    headingGroupCnStart = 0;
    headingGroupCnEnd = imgGroupArraySize;
    headingGroupCnCurr = 0;
    // imgMaxByGroup[headingGroupCnCurr] = imgGroupBoxCount;

    // Images per Group
    ////////////////////////////////////////////////

    // Menu Maximum Images per each Group
    imgMaxByGroup[0] = 0;
    imgMaxByGroup[1] = 8;
    imgMaxByGroup[2] = 4;
    imgMaxByGroup[3] = 5;
    imgMaxByGroup[4] = 8;
    imgMaxByGroup[5] = 0;
    imgMaxByGroup[6] = 0;

    // Menu Maximum Images per each Group
    oObjectRowMax[0] = 0;
    oObjectRowMax[1] = 8;
    oObjectRowMax[2] = 9;
    oObjectRowMax[3] = 9;
    oObjectRowMax[4] = 8;
    oObjectRowMax[5] = 0;
    oObjectRowMax[6] = 0;

    // First Image Offset By Group, Top, Left, Right, Bottom
    menuImageRootPosition[0] = 0;
    menuImageRootPosition[1] = 0;
    menuImageRootPosition[2] = 0;
    menuImageRootPosition[3] = 0;
    menuImageRootPosition[4] = 0;
    menuImageRootPosition[5] = 0;
    menuImageRootPosition[6] = 0;
}
//
function menuImageSet() {
    // Heading Image Group
    ////////////////////////////////////////////////
    // imgMaxByGroup[headingGroupCnCurr] = imgGroupBoxCount;
    oObjGroupIndex = 1;
    //
    for (var SizeIndex = 0; SizeIndex < 2; SizeIndex++) {
        // Image Postioning Offsets
        ////////////////////////////////////////////////
        // Menu Group Root Index
        // Default (All)
        menuImageOffsetTop[0] [indexGroup] [SizeIndex] = 0;
        menuImageOffsetLeft[0] [indexGroup] [SizeIndex] = 0;

        // Menu Group 1
        // Default (All)
        menuImageOffsetTop[1] [indexGroup] [SizeIndex] = 25;
        menuImageOffsetLeft[1] [indexGroup] [SizeIndex] = 25;
        // Boxes
        menuImageOffsetTop[1] [1] [SizeIndex] = 0; menuImageOffsetLeft[1] [1] [SizeIndex] = 0;
        menuImageOffsetTop[1] [2] [SizeIndex] = 0; menuImageOffsetLeft[1] [2] [SizeIndex] = 0;
        menuImageOffsetTop[1] [3] [SizeIndex] = 0; menuImageOffsetLeft[1] [3] [SizeIndex] = 0;
        menuImageOffsetTop[1] [4] [SizeIndex] = 0; menuImageOffsetLeft[1] [4] [SizeIndex] = 0;
        menuImageOffsetTop[1] [5] [SizeIndex] = 0; menuImageOffsetLeft[1] [5] [SizeIndex] = 0;
        menuImageOffsetTop[1] [6] [SizeIndex] = 0; menuImageOffsetLeft[1] [6] [SizeIndex] = 0;
        menuImageOffsetTop[1] [7] [SizeIndex] = 0; menuImageOffsetLeft[1] [7] [SizeIndex] = 0;
        menuImageOffsetTop[1] [8] [SizeIndex] = 0; menuImageOffsetLeft[1] [8] [SizeIndex] = 0;

        // Menu Group 2
        // Default (All)
        menuImageOffsetTop[2] [indexGroup] [SizeIndex] = -60;
        menuImageOffsetLeft[2] [indexGroup] [SizeIndex] = 50;
        // Boxes
        menuImageOffsetTop[2] [1] [SizeIndex] = 0; menuImageOffsetLeft[2] [1] [SizeIndex] = 0;
        menuImageOffsetTop[2] [2] [SizeIndex] = 0; menuImageOffsetLeft[2] [2] [SizeIndex] = 0;
        menuImageOffsetTop[2] [3] [SizeIndex] = 0; menuImageOffsetLeft[2] [3] [SizeIndex] = 0;
        menuImageOffsetTop[2] [4] [SizeIndex] = 0; menuImageOffsetLeft[2] [4] [SizeIndex] = 0;

        // Menu Group 3
        // Default (All)
        menuImageOffsetTop[3] [indexGroup] [SizeIndex] = -20;
        menuImageOffsetLeft[3] [indexGroup] [SizeIndex] = 75;
        // Boxes
        menuImageOffsetTop[3] [1] [SizeIndex] = 0; menuImageOffsetLeft[3] [1] [SizeIndex] = 0;
        menuImageOffsetTop[3] [2] [SizeIndex] = 0; menuImageOffsetLeft[3] [2] [SizeIndex] = 0;
        menuImageOffsetTop[3] [3] [SizeIndex] = 0; menuImageOffsetLeft[3] [3] [SizeIndex] = 0;

        // Menu Group 4
        // Default (All)
        menuImageOffsetTop[4] [indexGroup] [SizeIndex] = 75;
        menuImageOffsetLeft[4] [indexGroup] [SizeIndex] = -15;
        // Boxes
        menuImageOffsetTop[4] [1] [SizeIndex] = 0; menuImageOffsetLeft[4] [1] [SizeIndex] = 0;
        menuImageOffsetTop[4] [2] [SizeIndex] = 0; menuImageOffsetLeft[4] [2] [SizeIndex] = 0;
        menuImageOffsetTop[4] [3] [SizeIndex] = 0; menuImageOffsetLeft[4] [3] [SizeIndex] = 0;
        menuImageOffsetTop[4] [4] [SizeIndex] = 0; menuImageOffsetLeft[4] [4] [SizeIndex] = 0;
        menuImageOffsetTop[4] [5] [SizeIndex] = 0; menuImageOffsetLeft[4] [5] [SizeIndex] = 0;
        menuImageOffsetTop[4] [6] [SizeIndex] = 0; menuImageOffsetLeft[4] [6] [SizeIndex] = 0;
        menuImageOffsetTop[4] [7] [SizeIndex] = -250; menuImageOffsetLeft[4] [7] [SizeIndex] = 0;
        menuImageOffsetTop[4] [8] [SizeIndex] = 0; menuImageOffsetLeft[4] [8] [SizeIndex] = 0;

        // Menu Group 5
        // Default (All)
        menuImageOffsetTop[5] [indexGroup] [SizeIndex] = 75;
        menuImageOffsetLeft[5] [indexGroup] [SizeIndex] = -15;
        // Boxes
        // todo

        // Menu Group 6
        // Default (All)
        menuImageOffsetTop[6] [indexGroup] [SizeIndex] = 75;
        menuImageOffsetLeft[6] [indexGroup] [SizeIndex] = -15;
        // Boxes
        // todo

        // Offsets to adjust First Image Top Left
        // Default (All)
        menuImageOffsetFirst[indexGroup] [indexTop] [SizeIndex] = 0;
        menuImageOffsetFirst[indexGroup] [indexLeft] [SizeIndex] = 35;
        // menuImageOffsetFirst[indexGroup] [indexBottom] [SizeIndex] = 0;
        // menuImageOffsetFirst[indexGroup] [indexRight] [SizeIndex] = 0;
        // Menu Groups
        // Menu Group 1
        menuImageOffsetFirst[1] [indexTop] [SizeIndex] = 0;
        menuImageOffsetFirst[1] [indexLeft] [SizeIndex] = 15;
        // menuImageOffsetFirst[1] [indexBottom] [SizeIndex] = 0;
        // menuImageOffsetFirst[1] [indexRight] [SizeIndex] = 0;
        // Menu Group 2
        menuImageOffsetFirst[2] [indexTop] [SizeIndex] = 0;
        menuImageOffsetFirst[2] [indexLeft] [SizeIndex] = 15;
        // menuImageOffsetFirst[2] [indexBottom] [SizeIndex] = 0;
        // menuImageOffsetFirst[2] [indexRight] [SizeIndex] = 0;
        // Menu Group 3
        menuImageOffsetFirst[3] [indexTop] [SizeIndex] = 0;
        menuImageOffsetFirst[3] [indexLeft] [SizeIndex] = 15;
        // menuImageOffsetFirst[3] [indexBottom] [SizeIndex] = 0;
        // menuImageOffsetFirst[3] [indexRight] [SizeIndex] = 0;
        // Menu Group 4
        menuImageOffsetFirst[4] [indexTop] [SizeIndex] = 0;
        menuImageOffsetFirst[4] [indexLeft] [SizeIndex] = -15;
        // menuImageOffsetFirst[4] [indexBottom] [SizeIndex] = 0;
        // menuImageOffsetFirst[4] [indexRight] [SizeIndex] = 0;
        // Menu Group 5
        menuImageOffsetFirst[5] [indexTop] [SizeIndex] = 0;
        menuImageOffsetFirst[5] [indexLeft] [SizeIndex] = -15;
        // menuImageOffsetFirst[5] [indexBottom] [SizeIndex] = 0;
        // menuImageOffsetFirst[5] [indexRight] [SizeIndex] = 0;
        // Menu Group 6
        menuImageOffsetFirst[6] [indexTop] [SizeIndex] = 0;
        menuImageOffsetFirst[6] [indexLeft] [SizeIndex] = -15;
        // menuImageOffsetFirst[6] [indexBottom] [SizeIndex] = 0;
        // menuImageOffsetFirst[6] [indexRight] [SizeIndex] = 0;
    }
}
var script_state = "Mdm Website Menu (custom) Image settings initialized";
if (debugLoadIsOn) { debugger; }
