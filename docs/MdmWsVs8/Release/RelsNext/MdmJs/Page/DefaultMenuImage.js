// Body Layout Selection - Menus
// ------------------------------------------------------------------------------------- _//
// BODY IMAGES
// ------------------------------------------------------------------------------------- _//
// GLOBAL / COMMON
////////////////////////////////////////////////
// Image range variables
var oObjIndexStart = 0;
var oObjIndexEnd = 0;
// Image Group
////////////////////////////////////////////////
// ./css/Page/{ThisPageCustom || Defauts}.js
//
var loadDelayMenuImage = false;
var loadFirstMenuImage = true;
// Image Group
////////////////////////////////////////////////
var imgGroupCount = 5;
var imgGroupBoxCount = 20
// Heading Image Group
////////////////////////////////////////////////
var headingGroupPointer = 6;
var headingGroupMax = 1;
var headingGroupCnStart = 6;
var headingGroupCnEnd = 6;
var headingGroupCnCurr = 6;
// Menu Groups
////////////////////////////////////////////////
// set the number of groups and the images per group
// Menu Current Image Object By Group
var imgGroupMax = 4;
var imgGroupCnStart = 1;
var imgGroupCnEnd = 4;
////////////////////////////////////////////////
imgCnByGroup[1] = 1;
imgCnByGroup[2] = 1;
imgCnByGroup[3] = 1;
imgCnByGroup[4] = 1;
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
// menuImageRootPosition[1] = 0;
// menuImageRootPosition[2] = 0;
// menuImageRootPosition[3] = 0;
// menuImageRootPosition[4] = 0;
////////////////////////////////////////////////
// Heading Image Group
////////////////////////////////////////////////
imgMaxByGroup[headingGroupCnCurr] = imgGroupBoxCount;
// Menu Groups
////////////////////////////////////////////////
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
////////////////////////////////////////////////
// Offsets for cascading diaply
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

script_state = "MdmStandard Default Menu Image definitions";
if (debugLoadIsOn) { debugger; }
