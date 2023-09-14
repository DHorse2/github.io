// Body Layout Selection - Menus
////////////////////////////////////////////////
// GLOBAL / COMMON
var menuImageBorderWidth = 6;
////////////////////////////////////////////////
// Range variables (used by images)
var oObjIndexStart = 0;
var oObjIndexEnd = 0;
// Heading Menu Group (boxes across)
////////////////////////////////////////////////
var headingGroupPointer = 6;
var headingGroupMax = 1;
var headingGroupCnStart = 6;
var headingGroupCnEnd = 6;
var headingGroupCnCurr = 6;
// Menu Groups
////////////////////////////////////////////////
// Menu Current Image Object By Group (Image Group)
// set the number of groups and the images per group
var imgGroupMax = 4;
var imgGroupCnStart = 1;
var imgGroupCnEnd = 4;
// Image Group
var imgGroupCount = 5;
var imgGroupBoxCount = 20
////////////////////////////////////////////////
var imgGroupArraySize = imgGroupCount;
var imgGroupImageArraySize = imgGroupBoxCount + 1;
// Current Image Position
var oObjNextTop;
var oObjNextLeft;
// Current Image Position Offset
var oObjNextOffsetTop;
var oObjNextOffsetLeft;
// Menu Images (by Groups) - Image Object Array
// Current Image Index By Group
var imgCnByGroup = new Array(imgGroupArraySize);
// Maximum # of Images By Group
var imgMaxByGroup = new Array(imgGroupArraySize);
// Maximum # of Images Per Cascading Row By Group
var oObjectRowMax = new Array(imgGroupArraySize);
// Image Display (Visible) Locked Array
var menuImageLocked = new Array(imgGroupArraySize);// By, imgGroupImageArraySize);
// First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
var menuImageRootPosition = new Array(imgGroupArraySize);// By Top, Left, Right/Width, Bottom/Height
// Images per Group
////////////////////////////////////////////////
// Images per Group
imgCnByGroup[1] = 1;
imgCnByGroup[2] = 1;
imgCnByGroup[3] = 1;
imgCnByGroup[4] = 1;
// todo: clarify these two variables:
// Menu Maximum Images per each Group
imgMaxByGroup[1] = 7;
imgMaxByGroup[2] = 4;
imgMaxByGroup[3] = 3;
imgMaxByGroup[4] = 8;
// Menu Maximum Images per each Group
oObjectRowMax[1] = 4;
oObjectRowMax[2] = 9;
oObjectRowMax[3] = 9;
oObjectRowMax[4] = 6;
// First Image Offset By Group, Top, Left, Right, Bottom
menuImageRootPosition[1] = 0;
menuImageRootPosition[2] = 0;
menuImageRootPosition[3] = 0;
menuImageRootPosition[4] = 0;
////////////////////////////////////////////////
// Heading Image Group
////////////////////////////////////////////////
imgMaxByGroup[headingGroupCnCurr] = imgGroupBoxCount;
// Image Position
////////////////////////////////////////////////
// Menu Images (by Groups) - Image Object Array
var menuImage = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// Position of Parent Image (Parent of First only stored at this time)
var menuImagePositionLeft = new Array(imgGroupArraySize);// By, imgGroupImageArraySize);
var menuImagePositionTop = new Array(imgGroupArraySize);// By, imgGroupImageArraySize);
var menuImagePositionWidth = new Array(imgGroupArraySize);// By, imgGroupImageArraySize);
var menuImagePositionHeight = new Array(imgGroupArraySize);// By, imgGroupImageArraySize);
// Animation Timer by Group by Image
var menuImageTimerCn = new Array(imgGroupArraySize);// By, imgGroupImageArraySize);
////////////////////////////////////////////////
// First Image Offset By Group, By Top, Left
// First Image
var menuImageOffsetFirstAll = new Array(imgGroupArraySize);// By Top, Left (2)
// These are layout postion patterns to be applied
var menuImageOffsetLeftAll = new Array(imgGroupArraySize);// By, imgGroupImageArraySize);
var menuImageOffsetTopAll = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
// Add Second Dimention (imgGroupImageArraySize)
////////////////////////////////////////////////
for (oObjGroupIndex = 0; oObjGroupIndex < 1 + imgGroupArraySize; oObjGroupIndex++) {
    //
    ////////////////////////////////////////////////
    // First Image Offset By Group, By Top, Left
    menuImageOffsetFirstAll[oObjGroupIndex] = new Array(2);// By Top, Left (2)
    // First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
    menuImageRootPosition[oObjGroupIndex] = new Array(4);// By Top, Left, Right/Width, Bottom/Height
    //
    ////////////////////////////////////////////////
    // Image Object Array
    menuImage[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    // Image Display (Visible) Locked Array
    menuImageLocked[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    // Image Position
    // Position of Parent Image (Parent of First only stored at this time)
    menuImagePositionLeft[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    menuImagePositionTop[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    menuImagePositionWidth[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    menuImagePositionHeight[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    // Animation Timer by Group by Image
    menuImageTimerCn[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    ////////////////////////////////////////////////
    // Image Postioning Offsets
    // These are layout postion patterns to be applied
    menuImageOffsetLeftAll[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    menuImageOffsetTopAll[oObjGroupIndex] = new Array(imgGroupImageArraySize);
    //
}
////////////////////////////////////////////////
oObjGroupIndex = 1;
// Image Postioning Offsets
////////////////////////////////////////////////
// Default (All) Groups
menuImageOffsetTopAll[indexGroup][indexGroup] = 25;
menuImageOffsetLeftAll[indexGroup][indexGroup] = 25;
// Menu Group 1
// Default (All)
menuImageOffsetTopAll[1][indexGroup] = 25;
menuImageOffsetLeftAll[1][indexGroup] = 25;
// Boxes
menuImageOffsetTopAll[1][1] = 0; menuImageOffsetLeftAll[1][1] = 0;
menuImageOffsetTopAll[1][2] = 0; menuImageOffsetLeftAll[1][2] = 0;
menuImageOffsetTopAll[1][3] = 0; menuImageOffsetLeftAll[1][3] = 0;
menuImageOffsetTopAll[1][4] = 0; menuImageOffsetLeftAll[1][4] = 0;
menuImageOffsetTopAll[1][5] = 0; menuImageOffsetLeftAll[1][5] = 0;
menuImageOffsetTopAll[1][6] = 0; menuImageOffsetLeftAll[1][6] = 0;
menuImageOffsetTopAll[1][7] = 0; menuImageOffsetLeftAll[1][7] = 0;
// Menu Group 2
// Default (All)
menuImageOffsetTopAll[2][indexGroup] = -60;
menuImageOffsetLeftAll[2][indexGroup] = 50;
// Boxes
menuImageOffsetTopAll[2][1] = 0; menuImageOffsetLeftAll[2][1] = 0;
menuImageOffsetTopAll[2][2] = 0; menuImageOffsetLeftAll[2][2] = 0;
menuImageOffsetTopAll[2][3] = 0; menuImageOffsetLeftAll[2][3] = 0;
menuImageOffsetTopAll[2][4] = 0; menuImageOffsetLeftAll[2][4] = 0;
// Menu Group 3
// Default (All)
menuImageOffsetTopAll[3][indexGroup] = -20;
menuImageOffsetLeftAll[3][indexGroup] = 75;
// Boxes
menuImageOffsetTopAll[3][1] = 0; menuImageOffsetLeftAll[3][1] = 0;
menuImageOffsetTopAll[3][2] = 0; menuImageOffsetLeftAll[3][2] = 0;
menuImageOffsetTopAll[3][3] = 0; menuImageOffsetLeftAll[3][3] = 0;
// Menu Group 4
// Default (All)
menuImageOffsetTopAll[4][indexGroup] = 75;
menuImageOffsetLeftAll[4][indexGroup] = -15;
// Boxes
menuImageOffsetTopAll[4][1] = 0; menuImageOffsetLeftAll[4][1] = 0;
menuImageOffsetTopAll[4][2] = 0; menuImageOffsetLeftAll[4][2] = 0;
menuImageOffsetTopAll[4][3] = 0; menuImageOffsetLeftAll[4][3] = 0;
menuImageOffsetTopAll[4][4] = 0; menuImageOffsetLeftAll[4][4] = 0;
menuImageOffsetTopAll[4][5] = 0; menuImageOffsetLeftAll[4][5] = 0;
menuImageOffsetTopAll[4][6] = 0; menuImageOffsetLeftAll[4][6] = 0;
menuImageOffsetTopAll[4][7] = -250; menuImageOffsetLeftAll[4][7] = 0;
menuImageOffsetTopAll[4][8] = 0; menuImageOffsetLeftAll[4][8] = 0;
// Offsets to adjust First Image Top Left
// Default (All)
menuImageOffsetFirstAll[indexGroup][indexTop] = 0;
menuImageOffsetFirstAll[indexGroup][indexLeft] = 35;
// Menu Groups
// Menu Group 1
menuImageOffsetFirstAll[1][indexTop] = 0;
menuImageOffsetFirstAll[1][indexLeft] = 15;
// Menu Group 2
menuImageOffsetFirstAll[2][indexTop] = 0;
menuImageOffsetFirstAll[2][indexLeft] = 15;
// Menu Group 3
menuImageOffsetFirstAll[3][indexTop] = 0;
menuImageOffsetFirstAll[3][indexLeft] = 15;
// Menu Group 4
menuImageOffsetFirstAll[4][indexTop] = 0;
menuImageOffsetFirstAll[4][indexLeft] = -15;

var script_state = "Mdm Menu Image settings completed";
