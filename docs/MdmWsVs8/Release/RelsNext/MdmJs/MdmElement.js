// ------------------------------------------------------------------------------------- _//
// Elements
// ------------------------------------------------------------------------------------- _//
// Layout Height Get
var heightBase = 0;
var heightOffset = 0;
var heightScroll = 0;
var heightClient = 0;
var heightNode = 0;
var heightRects = 0;
var clientRectsIndex = 0;
// Element Get Pointer
function fnElementGetRef(elementObject, elementObjectId, elementObjectName) {
    elementObject = fnElementGetFromId(elementObjectId);
    if (!elementObject) {
        if (!elementObjectName.length) { elementObjectName = elementObjectId; }
        elementObject = fnElementGetFromId(elementObjectName);
    }
    return elementObject;
}
function fnElementGetFromElement(
    elementPassed, elementIdPassed, elementNamePassed,
    elementSourcePassed,
    elementFindDoSetPassed, elementValuePassed
) {
    // Dest = fnElementGetRefFromElement(Dest, 'DestId', 'DestName', Source);
    //
    var elementChildObject;
    var elementTempFirst = true;
    elementFound = false;
    //
    elementPassed = fnElementCreate(elementPassed, elementTempFirst);
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    //
    for (var elmCn = 0; elmCn < 1 + elementSourcePassed.childNodes.length; elmCn++) {
        elementChildObject = elementSourcePassed.childNodes[elmCn];
        if (elementChildObject) {
            if (elementChildObject.id) {
                if (elementChildObject.id != null) {
                    if (elementChildObject.id != '' && elementChildObject.id == elementIdPassed) {
                        //
                        if (elementFindDoSetPassed == elementFindDoSet) {
                            if (elementFound) {
                                elementSourcePassed.childNodes[elmCn] = elementPassed;
                            } else {
                                elementSourcePassed.childNodes[elmCn] = elementValuePassed;
                                elementFound = true;
                            }
                            return elementSourcePassed.childNodes[elmCn];
                        }
                        if (!elementFound) {
                            elementPassed = elementChildObject;
                            elementFound = true;
                        }
                        //
                        // elementObject = fnElementGetFromId(elementObjectId);
                        return elementPassed;
                    }
                } // end of length and id match
                //
                if (elementChildObject.childNodes) {
                    if (elementChildObject.childNodes.length) {
                        elementPassed = fnElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementChildObject, elementFindDoSetPassed, elementValuePassed);
                        if (elementFound) { return elementPassed; }
                    }
                }
            } // end of id exists
        } // end of element exists
    } // end of for
    //
    elementFound = false;
    return;
}
// Layout Menu Area Element Common Fields Set
function fnElementGetRefFromElement(elementObject, elementObjectId, elementObjectName, elementSourcePassed) {
    // DOES THIS NEED TO BE COPIES.
    // As written it results in pointers into the Source Document
    // Dest = fnElementGetRefFromElement(Dest, "DestId", "DestName", Source);
    var elementObjectResult;
    if (!elementObjectName.length && elementObjectId.length) { elementObjectName = elementObjectId; }
    elementObjectResult = fnElementGetFromId(elementObjectName)
    if (elementObjectResult) {
        return elementObjectResult;
    } else {
        return elementObject;
    }
} // ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
function fnElementCopy(elementPassed, elementLayoutFirstPassed, elementSourcePassed, elementStyleDisplayPassed) {
    var elementIdCurr;
    var elementSourceIdCurr;
    if ("id" in elementSourcePassed) {
        elementSourceIdCurr = elementSourcePassed.id;
    } else { elementSourceIdCurr = ""; }
    //
    //---------------------------------------------------------------//
    if (!elementPassed) {
        if ("id" in elementSourcePassed) {
            elementIdCurr = elementSourcePassed.id;
        } else { elementIdCurr = ""; }
        //
        if (browserIsTEST) { elementPassed = document.createElement(elementIdCurr); }
        if (browserIsIE) { elementPassed = document.createElement(); }
        if (browserIsFF) { elementPassed = document.createElement(elementIdCurr); } // X32
        // elementPassed = null;
    } else {
        if ("id" in elementPassed) {
            elementIdCurr = elementPassed.id;
        } else { elementIdCurr = ""; }
    }
    // Copy Source to Destination Element (Inner HTML, Events)
    if (elementPassed != null && elementSourcePassed != null) {
        if (elementLayoutFirstPassed) {
            if ("innerHTML" in elementPassed && "innerHTML" in elementSourcePassed) {
                // Copy HTML
                // elementPassed.outerHTML = elementSourcePassed.outerHTML;
                elementPassed.innerHTML = elementSourcePassed.innerHTML;
                // elementPassed = elementSourcePassed;
                // elementPassed = elementSourcePassed.cloneNode(true);
                //
                elementLayoutFirstPassed = false;
                // Element Events
                fnElementEventsCopy(elementPassed, elementSourcePassed, elementPassed.id, elementSourcePassed.id)
            }
        }
        // if (elementPassed.innerHTML = null || elementPassed.innerHTML.length = 0) {
        // elementPassed.innerHTML = elementSourcePassed.innerHTML;
        // }
        elementPassed.style.display = elementStyleDisplayPassed;
    }
    return elementPassed;
} // ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
////////////////////////////////////////////////
function fnElementFindInElement(elementObject, elementObjectId, elementObjectName, elementSourcePassed) {
    // Dest = fnElementGetRefFromElement(Dest, "DestId", "DestName", Source);
    //
    var elementChildObject;
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    //
    for (elmCn = 1; elmCn < 1 + elementSourcePassed.childNodes.length; elmCn++) {
        elementChildObject = elementSourcePassed.childNodes[elmCn];
        if (elementChildObject) {
            if ("id" in elementChildObject) {
                if (elementChildObject.id.length && elementChildObject.id == elementObjectId.id) {
                    elementObject = elementChildObject;
                    // elementObject = fnElementGetFromId(elementObjectId);
                    return elementObject;
                    //
                }
            }
        }
    }
    //
    return elementObject;
}
// Layout Menu Area Element Common Fields Set
////////////////////////////////////////////////
function fnElementEventsCopy(elementObject, elementSourceObject, elementObjectId, elementSourceObjectId) {
    var elementChildObject;
    var elementSourceChildObject;
    //
    if (!elementObjectId.length) { elementObjectId = elementSourceObjectId; }
    //
    if (elementObjectId.length && elementSourceObjectId.length) {
        //
        if (!elementObject) { return; }
        // if (!elementObject)  {
        // elementObject = fnElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        // if (elementObject.id != elementObjectId) {
        // elementObject = fnElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        //
        if (!elementSourceObject) {
            elementSourceObject = fnElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
        }
        if (elementSourceObject.id != elementSourceObjectId) {
            elementSourceObject = fnElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
        }
    } else {
        if (!elementObject) { return; }
        if (!elementSourceObject) { return; }
        //
        if (typeof (elementObject) != "element") { return; }
        if (typeof (elementSourceObject) != "element") {
            elementObject = document.createElement();// X32
            // return;
        }
    }
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    // Copy mouse down, over and out events to elementObject.
    // Currently, SourceObject is not used.
    //
    // if (elementPassed.childNodes.length)
    for (elmCn = 1; elmCn < 1 + elementObject.childNodes.length; elmCn++) {
        elementChildObject = elementObject.childNodes[elmCn];
        if (elementChildObject) {
            if ("id" in elementChildObject) {
                if (elementChildObject.id.length) {
                    elementSourceChildObject = fnElementGetFromId(elementChildObject.id);
                    if (elementSourceChildObject) {
                        if (elementSourceChildObject.onmousedown) {
                            // elementChildObject.setAttribute("onmousedown", elementSourceChildObject.onmousedown , 0)
                            elementChildObject.onmousedown = elementSourceChildObject.onmousedown;
                        }
                        if (elementSourceChildObject.onmouseover) {
                            // elementChildObject.setAttribute("onmouseover", elementSourceChildObject.onmouseover , 0)
                            elementChildObject.onmouseover = elementSourceChildObject.onmouseover;
                        }
                        if (elementSourceChildObject.onmouseout) {
                            // elementChildObject.setAttribute("onmouseout", elementSourceChildObject.onmouseout , 0)
                            elementChildObject.onmouseout = elementSourceChildObject.onmouseout;
                        }
                    }
                }
            }
        }
    }
    /*--
     // if (elementPassed.childNodes.length)
     for (elmCn = 1;elementSourceObject.childNodes.length;elmCn++){
    var elementSourceChildObject = elementSourceObject.childNodes[elmCn];
    elementChildObject = elementObject.getElementById(elementSourceChildObject.id);
    elementChildObject.Events["onmousedown"] = elementSourceChildObject.Events["onmousedown"];
    }
    // }
    --*/
    // }
    return elementObject;
}
// Layout Menu Area Element Common Fields Set
////////////////////////////////////////////////
function fntElementBreakSet(elementPassed, elementIdPassed, elementLayoutFirstPassed, elementStyleDisplayPassed, elementStyleVisibilityPassed, elsementStyleClearPassed) {
    if (!elementPassed) {
        elementPassed = fnElementGetRef(elementPassed, elementIdPassed, elementIdPassed);
        // var elementPassed = elementPassed.childNodes[elementIdPassed];
        // var elementPassed = fnElementGetFromId(elementIdPassed);
    }
    // Get Break Element from Parent
    var elementTarget;
    if (elementPassed && elementIdPassed.tagName) {
        elementTarget = document.createElement(elementPassed.tagName);
    } else { elementTarget = document.createElement("div"); }
    elementTarget = fnElementGetRefFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed);
    //
    // if (elementPassed.childNodes.length) {
    if (elementTarget) {
        if ("style" in elementTarget) {
            if ("display" in elementTarget.style) {
                if (elementStyleDisplayPassed.length) { elementTarget.style.display = elementStyleDisplayPassed; }
            } else { ErrorOccured(eventCurr, elementTarget, elementPassed, "Element Break Set, Style missing", errorElementWarn, true, false); }
            //
            if ("visibility" in elementTarget.style) {
                if (elementStyleVisibilityPassed.length) { elementTarget.style.visibility = elementStyleVisibilityPassed; }
            } else { ErrorOccured(eventCurr, elementTarget, elementPassed, "Element Break Set, Visibility missing", errorElementWarn, true, false); }
            //
            if ("clear" in elementTarget.style) {
                if (elsementStyleClearPassed.length) { elementTarget.style.clear = elsementStyleClearPassed; }
            } else { ErrorOccured(eventCurr, elementTarget, elementPassed, "Element Break Set, Clear missing", errorElementWarn, true, false); }
        }
    }
    elementLayoutFirstPassed = false;
    // }
    return elementPassed;
}
// Element Position Get
////////////////////////////////////////////////
function fnElementPosGet(oObjPassed) {
    oObjTop = 0;
    oObjLeft = 0;
    oObjWidth = 0;
    oObjHeight = 0;
    var currLeft = currTop = 0;
    //
    if (oObjPassed.offsetParent) {
        var oObjCurr = oObjPassed;
        do {
            // while (oObjPassed = oObjPassed.offsetParent) {
            currLeft += oObjCurr.offsetLeft;
            currTop += oObjCurr.offsetTop;
            // }
        } while (oObjCurr = oObjCurr.offsetParent);
        oObjTop = currTop;
        oObjLeft = currLeft;
        oObjWidth = oObjPassed.offsetWidth;
        oObjHeight = oObjPassed.offsetHeight;
    }
    return [currTop, currLeft];
}
// SectionBlock Element Get function (s)
// ...................................... //
// ..................................................................................... _//
function fnElementGetFromId(IdPassed) {
    if (browserIsTEST) {
        // browserIsTEST
        if (!elementNamePassed.length) { elementNamePassed = IdPassed; }
        elementObject = window.document.querySelector(elementNamePassed);
        if (!elementObject) { elementObject = document.getElementById(IdPassed); }
    } else if (browserIsIE || browserIsFF) {
        // browserIE or browserIsFF
        // elementObjectResult = window.document.querySelector(IdPassed)
        elementObject = document.getElementById(IdPassed);
    } else {
        // elementObject = document.getElementById(IdPassed);
        elementObjectResult = window.document.querySelector(IdPassed)
    }
    return elementObject;
}
// Element Get Pointer
function fnElementGetRef(elementObject, elementObjectId, elementNamePassed) {
    elementObject = fnElementGetFromId(elementObjectId);
    if (!elementObject) {
        if (!elementNamePassed.length) {
            elementObjectId = elementNamePassed;
        }
        elementObject = fnElementGetFromId(elementObjectId);
    }
    return elementObject;
}
// Layout Menu Area Element Common Fields Set
function fnElementGetRefFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed) {
    // DOES THIS NEED TO BE COPIES.
    // As written it results in pointers into the Source Document
    if (!elementNamePassed.length) { elementNamePassed = elementIdPassed; }
    // elementPassed = fnElementGetFromId(elementNamePassed);
    // if (!elementPassed) {
    elementPassed = fnElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed, elementFindDoReturn, null)
    // }
    // Dest = fnElementGetRefFromElement(Dest, 'DestId', 'DestName', Source);
    // NOT browserIE or browserIsFF
    // var DoSet = false;
    // elementPassed = fnElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed, DoSet, null);
    return elementPassed;
}
// Layout Menu Area Element Common Fields Set
function fnElementCreate(elementPassed, elementLayoutFirstPassed) {
    var elementCreate = false;
    if (!elementPassed) {
        elementCreate = true;
    } else if (!elementPassed.style) { elementCreate = true; }
    //
    if (elementCreate) {
        if (browserIsTEST) {
            elementPassed = document.createElement('div');
        } else if (browserIsIE) {
            elementPassed = document.createElement('div');
        } else if (browserIsFF) {
            elementPassed = document.createElement('div');
        } else {
            elementPassed = document.createElement('div');
        }
    }
    return elementPassed;
}
// Layout Menu Area Element Common Fields Set
function fnElementCopy(elementPassed, elementLayoutFirstPassed, elementSourcePassed, elementStyleDisplayPassed) {
    var elementIdCurr;
    var elementSourceIdCurr;
    if (elementSourcePassed.id) {
        elementSourceIdCurr = elementSourcePassed.id;
    } else { elementSourceIdCurr = ''; }
    //
    elementPassed = fnElementCreate(elementPassed, elementLayoutFirstPassed);
    //
    //............................................................---//
    if (elementPassed.id) { elementIdCurr = elementSourcePassed.id; } else { elementIdCurr = ''; }
    //............................................................---//
    // Copy Source to Destination Element (Inner HTML, Events)
    if (elementSourcePassed != null) {
        if (elementLayoutFirstPassed) {
            if (elementSourcePassed.innerHTML) {
                //
                //............................................................---//
                // Copy HTML
                // elementPassed.outerHTML = elementSourcePassed.outerHTML;
                elementPassed.innerHTML = elementSourcePassed.innerHTML;
                // elementPassed = elementSourcePassed;
                // elementPassed = elementSourcePassed.cloneNode(true);
                //
                elementLayoutFirstPassed = false;
                //
                //............................................................---//
                // Element Events
                // fnElementEventsCopy(elementPassed, elementSourcePassed, elementPassed.id, elementSourcePassed.id)
            }
        }
        // if (elementPassed.innerHTML = null || elementPassed.innerHTML.length = 0) {
        // elementPassed.innerHTML = elementSourcePassed.innerHTML;
        // }
        if (!elementPassed.style) {
            elementPassed.setAttribute('style', '');
        }
        elementPassed.style.display = elementStyleDisplayPassed;
    }
    return elementPassed;
}
// Layout Menu Area Element Common Fields Set
// ...................................... //
function fnElementEventsCopy(elementObject, elementSourceObject, elementObjectId, elementSourceObjectId) {
    var elementChildObject;
    var elementSourceChildObject;
    //
    if (!elementObjectId.length) { elementObjectId = elementSourceObjectId; }
    //
    if (elementObjectId.length && elementSourceObjectId.length) {
        //
        if (!elementObject) { return; }
        // if (!elementObject)  {
        // elementObject = fnElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        // if (elementObject.id != elementObjectId) {
        // elementObject = fnElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        //
        if (!elementSourceObject) {
            elementSourceObject = fnElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
        }
        if (elementSourceObject.id != elementSourceObjectId) {
            elementSourceObject = fnElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
        }
    } else {
        if (!elementObject) { return; }
        if (!elementSourceObject) { return; }
        //
        if (typeof (elementObject) != 'element') { return; }
        if (typeof (elementSourceObject) != 'element') {
            elementObject = document.createElement();// X32
            // return;
        }
    }
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    // Copy mouse down, over and out events to elementObject.
    // Currently, SourceObject is not used.
    //
    // if (elementPassed.childNodes.length)
    for (elmCn = 1; elmCn < 1 + elementObject.childNodes.length; elmCn++) {
        elementChildObject = elementObject.childNodes[elmCn];
        if (elementChildObject) {
            if (elementChildObject.id) {
                if (elementChildObject.id.length) {
                    elementSourceChildObject = document.getElementById(elementChildObject.id);
                    if (elementSourceChildObject) {
                        if (elementSourceChildObject.onmousedown) {
                            // elementChildObject.setAttribute('onmousedown', elementSourceChildObject.onmousedown , 0)
                            elementChildObject.onmousedown = elementSourceChildObject.onmousedown;
                        }
                        if (elementSourceChildObject.onmouseover) {
                            // elementChildObject.setAttribute('onmouseover', elementSourceChildObject.onmouseover , 0)
                            elementChildObject.onmouseover = elementSourceChildObject.onmouseover;
                        }
                        if (elementSourceChildObject.onmouseout) {
                            // elementChildObject.setAttribute('onmouseout', elementSourceChildObject.onmouseout , 0)
                            elementChildObject.onmouseout = elementSourceChildObject.onmouseout;
                        }
                    }
                }
            }
        }
    }
    /* --
     // if (elementPassed.childNodes.length)
     for (elmCn = 1;elementSourceObject.childNodes.length;elmCn++){
    var elementSourceChildObject = elementSourceObject.childNodes[elmCn];
    elementChildObject = elementObject.getElementById(elementSourceChildObject.id);
    elementChildObject.Events['onmousedown'] = elementSourceChildObject.Events['onmousedown'];
    }
    // }
    -- */
    // }
    return elementObject;
}
// Layout Menu Area Element Common Fields Set
// ...................................... //
function fnElementBreakSet(elementPassed, elementIdPassed, elementLayoutFirstPassed, elementStyleDisplayPassed, elementStyleVisibilityPassed, elsementStyleClearPassed) {
    if (!elementPassed) {
        elementPassed = fnElementGetRef(elementPassed, elementIdPassed, elementIdPassed);
        // var elementPassed = elementPassed.childNodes[elementIdPassed];
        // var elementPassed = document.getElementById(elementIdPassed);
    }
    //
    var elementTarget;
    // Get Break Element from Parent
    if (browserIsIE) {
        elementTarget = document.createElement('br');
    } else {
        elementTarget = document.createElement('br');
    }
    elementTarget = fnElementGetFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed, elementFindDoReturn, null);
    // elementTarget = fnElementGetRefFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed);
    //
    // note: Switched from 'in' element operator to If(element.property)
    // It is more standard and less error prone.
    // TODO using the 'in' operator here, change to null:
    //
    // if (elementPassed.childNodes.length) {
    if (elementTarget) {
        if (elementTarget.style) {
            // set Display property.
            if ('display' in elementTarget.style) {
                if (elementStyleDisplayPassed.length) { elementTarget.style.display = elementStyleDisplayPassed; }
            } else if (debugTimerDetail) {
                fnErrorOccured(eventCurr, DoNotUseDebug, DoNotUseSingeLine,
                    'Element Break Set, Style missing',
                    'fnElementBreakSet', 7742, elementTarget, elementPassed,
                    errorElementWarn, errorDoDisplayTag, errorDoNotAlert);
            }
            // set Visibilty.
            if (elementStyleVisibilityPassed.length) {
                if (elementTarget.style.visibility) {
                    elementTarget.style.visibility = elementStyleVisibilityPassed;
                } else if (debugTimerDetail) {
                    fnErrorOccured(eventCurr, DoNotUseDebug, DoNotUseSingeLine,
                        'Element Break Set, Visibility missing',
                        'fnElementBreakSet', 7751, elementTarget, elementPassed,
                        errorElementWarn, errorDoDisplayTag, errorDoNotAlert);
                    elementTarget.style.visibility = elementStyleVisibilityPassed;
                }
            }
            // set the Clear attribute.
            if (elsementStyleClearPassed.length) {
                // note: the redundant syntax, different logic than above
                if (elementTarget.style.clear) {
                    if (elsementStyleClearPassed.length) { elementTarget.style.clear = elsementStyleClearPassed; }
                } else if (debugTimerDetail) {
                    fnErrorOccured(eventCurr, DoNotUseDebug, DoNotUseSingeLine,
                        'Element Break Set, Clear missing',
                        'fnElementBreakSet', 7760, elementTarget, elementPassed,
                        errorElementWarn, errorDoDisplayTag, errorDoNotAlert);
                    elementTarget.style.clear = elsementStyleClearPassed;
                }
            }
        }
    }
    elementLayoutFirstPassed = false;
    // }
    return elementPassed;
}
// SectionBlock Element Position & Dimension function (s)
// ..................................................................................... _//
// Element Position Get
// ...................................... //
function fnElementPosGet(DoScroll, DoBase, elementPassed, elementWidthDefault, elementHeightDefault) {
    oObjTop = fnElementTopMaxGet(DoScroll, DoBase, elementPassed);
    oObjLeft = fnElementLeftMaxGet(DoScroll, DoBase, elementPassed);
    if (!oObjTop || !oObjLeft) { fnElementPosCalculate(elementPassed) } else {
        oObjWidth = fnElementWidthMaxGet(DoScroll, DoBase, elementPassed, elementWidthDefault);
        oObjHeight = fnElementHeightMaxGet(DoScroll, DoBase, elementPassed, elementHeightDefault);
    }
    //
    return [oObjTop, oObjLeft, oObjWidth, oObjHeight];
}
// Element Position Calculate
// ...................................... //
function fnElementPosCalculate(elementPassed) {
    oObjTop = 0;
    oObjLeft = 0;
    oObjWidth = 0;
    oObjHeight = 0;
    var currLeft = currTop = 0;
    //
    if (elementPassed.offsetParent) {
        var oObjCurr = elementPassed;
        do {
            // while (oObjPassed = oObjPassed.offsetParent) {
            currLeft += oObjCurr.offsetLeft;
            currTop += oObjCurr.offsetTop;
            // }
        } while ((oObjCurr = oObjCurr.offsetParent));
        oObjTop = currTop;
        oObjLeft = currLeft;
        oObjWidth = elementPassed.offsetWidth;
        oObjHeight = elementPassed.offsetHeight;
    }
    return [oObjTop, oObjLeft, oObjWidth, oObjHeight];
}
// Layout Top Get
function fnElementTopMaxGet(DoScroll, DoBase, elementPassed) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisTop = 0;
    var topBase = parseInt(elementPassed.style.top);
    var topOffset = parseInt(elementPassed.offsetTop);
    var topScroll = parseInt(elementPassed.scrollTop);
    //
    if (DoBase) {
        if (topBase > thisTop) { thisTop = topBase; }
    }
    if (DoOffset) {
        if (topOffset > thisTop) { thisTop = topOffset; }
    }
    if (DoScroll) {
        if (topScroll > thisTop) { thisTop = topScroll; }
    }
    if (thisTop > 3000) {
        // ERROR
        thisTop = 3000;
    }
    return thisTop;
}
// Layout Left Get
function fnElementLeftMaxGet(DoScroll, DoBase, elementPassed) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisLeft = 0;
    var leftBase = parseInt(elementPassed.style.left);
    var leftOffset = parseInt(elementPassed.offsetLeft);
    var leftScroll = parseInt(elementPassed.scrollLeft);
    //
    if (DoBase) {
        if (leftBase > thisLeft) { thisLeft = leftBase; }
    }
    if (DoOffset) {
        if (leftOffset > thisLeft) { thisLeft = leftOffset; }
    }
    if (DoScroll) {
        if (leftScroll > thisLeft) { thisLeft = leftScroll; }
    }
    if (thisLeft > 3000) {
        // ERROR
        thisLeft = 3000;
    }
    return thisLeft;
}
// Layout Width Get
function fnElementWidthMaxGet(DoScroll, DoBase, elementPassed, elementWidthDefault) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisWidth = 0;
    var widthBase = parseInt(elementPassed.style.width);
    var widthOffset = parseInt(elementPassed.offsetWidth);
    var widthScroll = parseInt(elementPassed.scrollWidth);
    //
    if (DoBase) {
        if (widthBase > thisWidth) { thisWidth = widthBase; }
    }
    if (DoOffset) {
        if (widthOffset > thisWidth) { thisWidth = widthOffset; }
    }
    if (DoScroll) {
        if (widthScroll > thisWidth) { thisWidth = widthScroll; }
    }
    if (thisWidth = 0) { thisWidth = elementWidthDefault; }
    if (thisWidth > 3000) {
        // ERROR
        thisWidth = 3000;
    }
    return thisWidth;
}
// Layout Height Get
function fnElementHeightMaxGet(DoScroll, DoBase, elementPassed, elementHeightDefault) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisHeight = 0;
    heightBase = parseInt(elementPassed.style.height);
    heightOffset = parseInt(elementPassed.offsetHeight);
    heightScroll = parseInt(elementPassed.scrollHeight);
    heightClient = parseInt(elementPassed.clientHeight);
    heightNode = 0;
    heightRects = 0;
    clientRectsIndex = 0;
    //
    if (DoBase) {
        if (heightBase > thisHeight) { thisHeight = heightBase; }
    }
    if (DoOffset) {
        if (heightOffset > thisHeight) { thisHeight = heightOffset; }
    }
    if (DoScroll) {
        if (heightScroll > thisHeight) { thisHeight = heightScroll; }
    }
    //
    if (thisHeight = 0) { thisHeight = heightClient; }
    //
    if (thisHeight = 0) {
        // Dom Add:
        // all else failed so use the protype approach...
        var elBodyTempContainer = document.getElementById('BodyTempContainer');
        elBodyTempContainer.appendChild(elementPassed.cloneNode(true));
        heightNode = elBodyTempContainer.childNodes[0].offsetHeight;
        elBodyTempContainer.removeChild(elBodyTempContainer.childNodes[0]);
        if (heightNode > thisHeight) { thisHeight = heightNode; }
        //
        // Bounding Rect:
        // Or this approach...
        if (!browserIsIE) {
            // if (elementPassed.getClientRects) {
            var clientRects = elementPassed.getClientRects();
            if (clientRects != null) {
                while (clientRectsIndex < clientRects.length) {
                    heightRects = clientRects[clientRectsIndex].top - clientRects[clientRectsIndex].bottom;
                    clientRectsIndex++;
                }
                if (heightRects > thisHeight) { thisHeight = heightRects; }
            }
            // }
        }
    }
    //
    // Minimum or default
    // Default height not appropriate here
    // if (thisHeight = 0) { thisHeight = elementHeightDefault; }
    // Maximum
    if (thisHeight > 10000) {
        // ERROR
        thisHeight = 10000;
    }
    return thisHeight;
}
// Layout Height Note
function fnElementLayoutHeightNote(DoScroll, DoBase, elementPassed, elementWidthDefault) {
    // From: http://stackoverflow.com/questions/526347/css-javascript-how-do-you-get-the-rendered-height-of-an-element
    //
    // If you need to calculate something but not show it, set the element to visibility:hidden and position:absolute,
    // 		add it to the DOM tree, get the offsetHeight, and remove it.
    // 		(That's what the prototype library does behind the lines last time I checked).
}
script_state = "MdmElement loaded";
