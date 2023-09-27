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
function ElementGetRef(elementObject, elementObjectId, elementObjectName) {
    elementObject = ElementGetFromId(elementObjectId);
    if (!elementObject) {
        if (!elementObjectName.length) { elementObjectName = elementObjectId; }
        elementObject = ElementGetFromId(elementObjectName);
    }
    return elementObject;
}
function ElementGetFromElement(
    elementPassed, elementIdPassed, elementNamePassed,
    elementSourcePassed,
    elDoFindSetPassed, elementValuePassed
) {
    // Dest = ElementGetRefFromElement(Dest, 'DestId', 'DestName', Source);
    //
    var elementChildObject;
    var elementTempFirst = true;
    elementFound = false;
    //
    elementPassed = ElementCreate(elementPassed, elementTempFirst);
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
                        if (elDoFindSetPassed == elDoFindSet) {
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
                        // elementObject = ElementGetFromId(elementObjectId);
                        return elementPassed;
                    }
                } // end of length and id match
                //
                if (elementChildObject.childNodes) {
                    if (elementChildObject.childNodes.length) {
                        elementPassed = ElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementChildObject, elDoFindSetPassed, elementValuePassed);
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
function ElementGetRefFromElement(elementObject, elementObjectId, elementObjectName, elementSourcePassed) {
    // DOES THIS NEED TO BE COPIES.
    // As written it results in pointers into the Source Document
    // Dest = ElementGetRefFromElement(Dest, "DestId", "DestName", Source);
    var elementObjectResult;
    if (!elementObjectName.length && elementObjectId.length) { elementObjectName = elementObjectId; }
    elementObjectResult = ElementGetFromId(elementObjectName)
    if (elementObjectResult) {
        return elementObjectResult;
    } else {
        return elementObject;
    }
} // ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
function ElementCopy(elementPassed, elementLayoutFirstPassed, elementSourcePassed, elementStyleDisplayPassed) {
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
                ElementEventsCopy(elementPassed, elementSourcePassed, elementPassed.id, elementSourcePassed.id)
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
function ElementFindInElement(elementObject, elementObjectId, elementObjectName, elementSourcePassed) {
    // Dest = ElementGetRefFromElement(Dest, "DestId", "DestName", Source);
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
                    // elementObject = ElementGetFromId(elementObjectId);
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
function ElementEventsCopy(elementObject, elementSourceObject, elementObjectId, elementSourceObjectId) {
    var elementChildObject;
    var elementSourceChildObject;
    //
    if (!elementObjectId.length) { elementObjectId = elementSourceObjectId; }
    //
    if (elementObjectId.length && elementSourceObjectId.length) {
        //
        if (!elementObject) { return; }
        // if (!elementObject)  {
        // elementObject = ElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        // if (elementObject.id != elementObjectId) {
        // elementObject = ElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        //
        if (!elementSourceObject) {
            elementSourceObject = ElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
        }
        if (elementSourceObject.id != elementSourceObjectId) {
            elementSourceObject = ElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
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
                    elementSourceChildObject = ElementGetFromId(elementChildObject.id);
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
function tElementBreakSet(elementPassed, elementIdPassed, elementLayoutFirstPassed, elementStyleDisplayPassed, elementStyleVisibilityPassed, elsementStyleClearPassed) {
    if (!elementPassed) {
        elementPassed = ElementGetRef(elementPassed, elementIdPassed, elementIdPassed);
        // var elementPassed = elementPassed.childNodes[elementIdPassed];
        // var elementPassed = ElementGetFromId(elementIdPassed);
    }
    // Get Break Element from Parent
    var elementTarget;
    if (elementPassed && elementIdPassed.tagName) {
        elementTarget = document.createElement(elementPassed.tagName);
    } else { elementTarget = document.createElement("div"); }
    elementTarget = ElementGetRefFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed);
    //
    // if (elementPassed.childNodes.length) {
    if (elementTarget) {
        if ("style" in elementTarget) {
            if ("display" in elementTarget.style) {
                if (elementStyleDisplayPassed.length) { elementTarget.style.display = elementStyleDisplayPassed; }
            } else { ErrorOccured(eventCurr, elementTarget, elementPassed, "Element Break Set, Style missing", MessageElementWarn, true, false); }
            //
            if ("visibility" in elementTarget.style) {
                if (elementStyleVisibilityPassed.length) { elementTarget.style.visibility = elementStyleVisibilityPassed; }
            } else { ErrorOccured(eventCurr, elementTarget, elementPassed, "Element Break Set, Visibility missing", MessageElementWarn, true, false); }
            //
            if ("clear" in elementTarget.style) {
                if (elsementStyleClearPassed.length) { elementTarget.style.clear = elsementStyleClearPassed; }
            } else { ErrorOccured(eventCurr, elementTarget, elementPassed, "Element Break Set, Clear missing", MessageElementWarn, true, false); }
        }
    }
    elementLayoutFirstPassed = false;
    // }
    return elementPassed;
}
// Element Position Get
////////////////////////////////////////////////
function ElementPosGet(oObjPassed) {
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
function ElementGetFromId(IdPassed) {
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
function ElementGetRef(elementObject, elementObjectId, elementNamePassed) {
    elementObject = ElementGetFromId(elementObjectId);
    if (!elementObject) {
        if (!elementNamePassed.length) {
            elementObjectId = elementNamePassed;
        }
        elementObject = ElementGetFromId(elementObjectId);
    }
    return elementObject;
}
// Layout Menu Area Element Common Fields Set
function ElementGetRefFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed) {
    // DOES THIS NEED TO BE COPIES.
    // As written it results in pointers into the Source Document
    if (!elementNamePassed.length) { elementNamePassed = elementIdPassed; }
    // elementPassed = ElementGetFromId(elementNamePassed);
    // if (!elementPassed) {
    elementPassed = ElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed, elDoFindReturn, null)
    // }
    // Dest = ElementGetRefFromElement(Dest, 'DestId', 'DestName', Source);
    // NOT browserIE or browserIsFF
    // var DoSet = false;
    // elementPassed = ElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementSourcePassed, DoSet, null);
    return elementPassed;
}
// Layout Menu Area Element Common Fields Set
function ElementCreate(elementPassed, elementLayoutFirstPassed) {
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
function ElementCopy(elementPassed, elementLayoutFirstPassed, elementSourcePassed, elementStyleDisplayPassed) {
    var elementIdCurr;
    var elementSourceIdCurr;
    if (elementSourcePassed.id) {
        elementSourceIdCurr = elementSourcePassed.id;
    } else { elementSourceIdCurr = ''; }
    //
    elementPassed = ElementCreate(elementPassed, elementLayoutFirstPassed);
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
                // ElementEventsCopy(elementPassed, elementSourcePassed, elementPassed.id, elementSourcePassed.id)
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
function ElementEventsCopy(elementObject, elementSourceObject, elementObjectId, elementSourceObjectId) {
    var elementChildObject;
    var elementSourceChildObject;
    //
    if (!elementObjectId.length) { elementObjectId = elementSourceObjectId; }
    //
    if (elementObjectId.length && elementSourceObjectId.length) {
        //
        if (!elementObject) { return; }
        // if (!elementObject)  {
        // elementObject = ElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        // if (elementObject.id != elementObjectId) {
        // elementObject = ElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        //
        if (!elementSourceObject) {
            elementSourceObject = ElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
        }
        if (elementSourceObject.id != elementSourceObjectId) {
            elementSourceObject = ElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
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
function ElementBreakSet(elementPassed, elementIdPassed, elementLayoutFirstPassed, elementStyleDisplayPassed, elementStyleVisibilityPassed, elsementStyleClearPassed) {
    if (!elementPassed) {
        elementPassed = ElementGetRef(elementPassed, elementIdPassed, elementIdPassed);
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
    elementTarget = ElementGetFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed, elDoFindReturn, null);
    // elementTarget = ElementGetRefFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed);
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
                MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingeLine,
                    'Element Break Set, Style missing',
                    'ElementBreakSet', 7742, elementTarget, elementPassed,
                    MessageElementWarn, errorDoDisplayTag, errorDoNotAlert);
            }
            // set Visibilty.
            if (elementStyleVisibilityPassed.length) {
                if (elementTarget.style.visibility) {
                    elementTarget.style.visibility = elementStyleVisibilityPassed;
                } else if (debugTimerDetail) {
                    MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingeLine,
                        'Element Break Set, Visibility missing',
                        'ElementBreakSet', 7751, elementTarget, elementPassed,
                        MessageElementWarn, errorDoDisplayTag, errorDoNotAlert);
                    elementTarget.style.visibility = elementStyleVisibilityPassed;
                }
            }
            // set the Clear attribute.
            if (elsementStyleClearPassed.length) {
                // note: the redundant syntax, different logic than above
                if (elementTarget.style.clear) {
                    if (elsementStyleClearPassed.length) { elementTarget.style.clear = elsementStyleClearPassed; }
                } else if (debugTimerDetail) {
                    MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingeLine,
                        'Element Break Set, Clear missing',
                        'ElementBreakSet', 7760, elementTarget, elementPassed,
                        MessageElementWarn, errorDoDisplayTag, errorDoNotAlert);
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
function ElementPosGet(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault, elHeightDefault) {
    oObjTop = ElementTopMaxGet(DoScroll, DoBase, elementPassed);
    oObjLeft = ElementLeftMaxGet(DoScroll, DoBase, elementPassed);
    if (!oObjTop || !oObjLeft) { ElementPosCalculate(elementPassed) } else {
        oObjWidth = ElementWidthMaxGet(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault);
        oObjHeight = ElementHeightMaxGet(DoScroll, DoBase, elementPassed, elHeightDefault);
    }
    //
    return [oObjTop, oObjLeft, oObjWidth, oObjHeight];
}
// Element Position Calculate
// ...................................... //
function ElementPosCalculate(elementPassed) {
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
function ElementTopMaxGet(DoScroll, DoBase, elementPassed) {
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
function ElementLeftMaxGet(DoScroll, DoBase, elementPassed) {
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
function ElementWidthMaxGet(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault) {
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
    if (thisWidth = 0) { thisWidth = layoutBlockWidthDefault; }
    if (thisWidth > 3000) {
        // ERROR
        thisWidth = 3000;
    }
    return thisWidth;
}
// Layout Height Get
function ElementHeightMaxGet(DoScroll, DoBase, elementPassed, elHeightDefault) {
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
        var bodyTempContainer = document.getElementById('BodyTempContainer');
        bodyTempContainer.appendChild(elementPassed.cloneNode(true));
        heightNode = bodyTempContainer.childNodes[0].offsetHeight;
        bodyTempContainer.removeChild(bodyTempContainer.childNodes[0]);
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
    // if (thisHeight = 0) { thisHeight = elHeightDefault; }
    // Maximum
    if (thisHeight > 10000) {
        // ERROR
        thisHeight = 10000;
    }
    return thisHeight;
}
// Layout Height Note
function ElementLayoutHeightNote(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault) {
    // From: http://stackoverflow.com/questions/526347/css-javascript-how-do-you-get-the-rendered-height-of-an-element
    //
    // If you need to calculate something but not show it, set the element to visibility:hidden and position:absolute,
    // 		add it to the DOM tree, get the offsetHeight, and remove it.
    // 		(That's what the prototype library does behind the lines last time I checked).
}
function ElementContainerAdjustGet(element, elementContainer, UsePercent) {
    var elementAdjust, elementAdjustPercentage, ContainerWidth;
    if (element && element.style) {
        // a Content Box
        elementRaw = 0;
        elementAdjust = 0;
        if (elementContainer && elementContainer.offsetWidth) {
            ContainerWidth = elementContainer.offsetWidth;
        } else {
            ContainerWidth = element.style.width + 0;
        }
        if (!ContainerWidth) {
            // some sort of problem
            return 0;
        }
        if (element.style) {
            if (element.style.marginLeft) { elementRaw += parseInt(element.style.marginLeft); }
            if (element.style.marginRight) { elementRaw += parseInt(element.style.marginRight); }
            if (element.style.paddingLeft) { elementRaw += parseInt(element.style.paddingLeft); }
            if (element.style.paddingRight) { elementRaw += parseInt(element.style.paddingRight); }
        }
        // ? is em ?
        elementAdjust = elementRaw;
        if (layoutStyleUnits != layoutSytleUnitsPercent) {
            if (layoutStyleUnits == layoutStyleUnitsEm) { elementAdjust *= 16; }
            elementAdjust = elementAdjust / ContainerWidth;
            if (UsePercent) elementAdjust *= 100;
        }
        return elementAdjust;
    } else {
        // no element todo
        return 0;
    }
}
script_state = "Mdm Standard Element functions loaded.";
if (debugLoadIsOn) { debugger; }
