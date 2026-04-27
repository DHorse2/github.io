
// includeHTML:
// w3-include-html-file: html formatted file name to include
var includeHtmlFile;
// w3-include-release: conditional upon specific release
var includeRelease;
// w3-include-attributes: additional file specific attributes
var includeAttributes;
// w3-include-mode: Page Mode. Dev, Pub, Any
var includeMode;
var includeValid;

var xhttpWorker;

// Load html content from file
function IncludeHtmlFileAll() {
  var elArray, eiIndex, element, xhttp;
  if (loadIncludesDone) { return; }
  loadIncludesDone = true;
  //
  /* Loop through a collection of all HTML elements: */
  elArray = document.getElementsByClassName("w3-include")
  // elArray = document.getElementsByTagName("*");
  // 7) todo console elArray element tag of interest
  for (eiIndex = 0; eiIndex < elArray.length; eiIndex++) {
    element = elArray[eiIndex];
    element.classList.remove("w3-include");
    element.classList.add("w3-include-processed");
    /*search for elements with a certain atrribute:*/
    includeHtmlFile = element.getAttribute("w3-include-html-file");
    // File = src???
    includeValid = false;
    //
    if (includeHtmlFile) {
      includeValid = true;
      includeMode = element.getAttribute("w3-include-mode");
      includeRelease = element.getAttribute("w3-include-release");
      includeHtmlAttributes = element.getAttribute("w3-include-attributes");
      //
      if (!includeMode) { includeMode = "Any"; }
      if (includeMode == "Any" || includeMode == PageMode) {
        // The Mode is Valid
      } else {
        // Invalid Mode
        includeValid = false;
      }
      if (!includeRelease) { includeRelease = "Any"; }
      if (includeRelease == "Any" || includeRelease == PageBuild) {
        // Valid Release
      } else {
        // Invalid Release
        includeValid = false;
        // 7) todo console invalid release skipped
      }
      if (includeHtmlAttributes) {
        // 7) todo console
        // 7) todo you could evaluate the expressions or do something with attributes
        // includeValid = false;
      }
      // Remove the attributes
      // not needed because class is used
      // element.removeAttribute("w3-include-html-file");
      // element.removeAttribute("w3-include-mode");
      // element.removeAttribute("w3-include-release");
      // element.removeAttribute("w3-include-attributes");
      if (includeValid) {
        /* Make an HTTP request using the attribute value as the file name: */
        // result = makeRequest("GET", includeHtmlFile, false);
        makeRequest = makeRequestAsync("GET", includeHtmlFile).then(
          result => element.innerHTML = result,
          error => alert(error)
        );
        // element.innerHTML = result;
      }
    }
  }
}

function junk() {
  xhttpWorker = new XMLHttpRequest();
  // xhttpWorker.onload = (e) => {
    xhttpWorker.onreadystatechange = function () {
    // State  Description
    // 0      The request is not initialized
    // 1      The request has been set up
    // 2      The request has been sent
    // 3      The request is in process
    // 4      The request is complete
    if (this.readyState == 4) {
      if (this.status == 200) {
        // Add content
        element.innerHTML = this.responseText;
      } else if (xhttpWorker.status == 404) {
        // file not found
        includeValid = false;
        element.innerHTML = "Page not found.";
        // 7) todo console
      } else {
        includeValid = false;
        messageTemp = "Unknown Status:" + this.status;
        // 7) todo console
      }
      // recursively call this function once more:
      // note: DHorse2/dgh: I don't think this is needed.
      // This doesn't appear to be async, it's top down and adding below.
      // That should capture nested includes, elArray.length increases.

      // IncludeHtmlFileAll();
    } else {
      // 7) todo console some other readyState reporting;
      messageTemp = "Request Ready State:" + this.readyState;
    }
    /* Exit the function: */
    // return;
  }
  xhttpWorker.open("GET", includeHtmlFile, true);
  xhttpWorker.send();
}
// Async requests 7) todo
// ..................................................................................... _//
async function makeRequestAsync(method, url) {
  // await code here
  let result = await makeRequestNew("GET", url);
  // code below here will only execute when await makeRequest() finished loading
  // console.log(result);
  return result;
}
// Request Code
// ..................................................................................... _//
function makeRequestNew(method, url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: this.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: this.statusText
      });
    };
    xhr.send();
  });
}
// XML Http Request handling
// ..................................................................................... _//
function xhttpRequestNew(method, url) {
  const req = new XMLHttpRequest();
  req.addEventListener("progress", xhttpUpdateProgress);
  req.addEventListener("load", xhttpTransferComplete);
  req.addEventListener("error", xhttpTransferFailed);
  req.addEventListener("abort", xhttpTransferCanceled);
  req.open(method, url, true);
}
// progress on transfers from the server to the client (downloads)
function xhttpUpdateProgress(evt) {
  if (evt.lengthComputable) {
    const percentComplete = (evt.loaded / evt.total) * 100;
    // ...
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}
function xhttpTransferComplete(evt) {
  console.log("The transfer is complete.");
}
function xhttpTransferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}
function xhttpTransferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}

function MdmIncludeFileAll() {
  var elArray, eiIndex, element, xhttp;
  if (loadIncludesDone) { return; }
  loadIncludesDone = true;
  //
  /* Loop through a collection of all HTML elements: */
  elArray = document.getElementsByClassName("mdm-include")
  // elArray = document.getElementsByTagName("*");
  // 7) todo console elArray element tag of interest
  for (eiIndex = 0; eiIndex < elArray.length; eiIndex++) {
    element = elArray[eiIndex];
    element.classList.remove("mdm-include");
    element.classList.add("mdm-include-processed");
    /*search for elements with a certain atrribute:*/
    includeHtmlFile = element.getAttribute("mdm-include-html-file");
    // File = src???
    includeValid = false;
    //
    if (includeHtmlFile) {
      includeValid = true;
      includeMode = element.getAttribute("mdm-include-mode");
      includeRelease = element.getAttribute("mdm-include-release");
      includeHtmlAttributes = element.getAttribute("mdm-include-attributes");
      //
      if (!includeMode) { includeMode = "Any"; }
      if (includeMode == "Any" || includeMode == PageMode) {
        // The Mode is Valid
      } else {
        // Invalid Mode
        includeValid = false;
      }
      if (!includeRelease) { includeRelease = "Any"; }
      if (includeRelease == "Any" || includeRelease == PageBuild) {
        // Valid Release
      } else {
        // Invalid Release
        includeValid = false;
        // 7) todo console invalid release skipped
      }
      if (includeHtmlAttributes) {
        // 7) todo console
        // 7) todo you could evaluate the expressions or do something with attributes
        // includeValid = false;
      }
      // Remove the attributes
      // not needed because class is used
      // element.removeAttribute("mdm-include-html-file");
      // element.removeAttribute("mdm-include-mode");
      // element.removeAttribute("mdm-include-release");
      // element.removeAttribute("mdm-include-attributes");
      if (includeValid) {
        /* Make an HTTP request using the attribute value as the file name: */
        // result = makeRequest("GET", includeHtmlFile, false);
        makeRequest = makeRequestAsync("GET", includeHtmlFile).then(
          result => element.innerHTML = result,
          error => alert(error)
        );
        // element.innerHTML = result;
      }
    }
  }
}

if (debugLoadIsOn) { debugger; }
script_state = "MdmIncludeHTML loaded";
