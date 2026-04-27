function imageZoom(imgId, resultId, resultIdBox, zoomRatio ) {
    var img, lens, result, cx, cy, parX, parY;
    //
    img = document.getElementById(imgId);
    result = document.getElementById(resultId);
    resultBox = document.getElementById(resultIdBox);
    //
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens img-zoom-result-container");
    //
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    //
    // The parent's height and width.
    parX = img.parentElement.offsetWidth;
    parY = img.parentElement.offsetHeight;
    //
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth / zoomRatio;
    cy = result.offsetHeight / lens.offsetHeight / zoomRatio;
    //
    /* Set background properties for the result DIV */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    //
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    //
    // Redisplay the lens and zoom result window
    function moveLens(e) {
        var pos, x, y, xBox, yBox;
        // Prevent any other actions that may occur when moving over the image
        e.preventDefault();
        // Get the cursor's x and y positions:
        pos = getCursorPos(e);
        //
        // Calculate the position of the lens:
        // A box relative to the mouse.
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        //
        // Set the position of the lens:
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        //
        // Calculate the position of the zoom window:
        xBox = e.pageX + (img.width / 2);
        yBox = e.pageY - 200;
        //
        // Prevent the lens from being positioned outside the image:
        if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
        if (x < 0) {x = 0;}
        if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
        if (y < 0) {y = 0;}
        //
        /* Display what the lens "sees": */
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        // result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        //
        result.style.left = xBox + "px";
        result.style.top = yBox + "px";
        //
        resultBox.style.left = xBox + "px";
        resultBox.style.top = yBox + "px";
    }
        //
        function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}