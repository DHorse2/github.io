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
// Image Postioning Offsets
// These are layout postion patterns to be applied
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
// Position All
 // By Top, Left (2)
menuImageOffsetFirstAll = new Array(imgGroupImageArraySize);
// These are layout postion patterns to be applied
menuImageOffsetLeftAll = new Array(imgGroupImageArraySize);
menuImageOffsetTopAll = new Array(imgGroupImageArraySize);
// Images per Group
////////////////////////////////////////////////
// Images per Group
imgCnByGroup[0] = 0;
imgCnByGroup[1] = 1;
imgCnByGroup[2] = 1;
imgCnByGroup[3] = 1;
imgCnByGroup[4] = 1;
// todo: clarify these two variables:
// Menu Maximum Images per each Group
imgMaxByGroup[0] = 0;
imgMaxByGroup[1] = 7;
imgMaxByGroup[2] = 4;
imgMaxByGroup[3] = 5;
imgMaxByGroup[4] = 8;
// Menu Maximum Images per each Group
oObjectRowMax[0] = 0;
oObjectRowMax[1] = 4;
oObjectRowMax[2] = 9;
oObjectRowMax[3] = 9;
oObjectRowMax[4] = 6;
// First Image Offset By Group, Top, Left, Right, Bottom
menuImageRootPosition[0] = 0;
menuImageRootPosition[1] = 0;
menuImageRootPosition[2] = 0;
menuImageRootPosition[3] = 0;
menuImageRootPosition[4] = 0;
// Initialize menu structures
////////////////////////////////////////////////
menuImageGroupInitAll(menuImage, imgGroupMax);

// Heading Image Group
////////////////////////////////////////////////
imgMaxByGroup[headingGroupCnCurr] = imgGroupBoxCount;
oObjGroupIndex = 1;
// Image Postioning Offsets
////////////////////////////////////////////////
// Default (All) Groups
menuImageOffsetTopAll[indexGroup][indexGroup] = 25;
menuImageOffsetLeftAll[indexGroup][indexGroup] = 25;
// Menu Group 0
// Default (All)
menuImageOffsetTopAll[0][indexGroup] = 0;
menuImageOffsetLeftAll[0][indexGroup] = 0;
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