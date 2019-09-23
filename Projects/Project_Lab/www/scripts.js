/*  Project 01_11_02

    Author: Brenden Riley
    Date:   9.18.19

    Filename: script.js
*/

"use strict";
var httpRequest = false;
var entry = "^IXIC";

function getRequestObject(){
    try {
        httpRequest = new XMLHttpRequest();
    }
    catch (requestError) {
        return false;
    }
    alert(httpRequest);
    return httpRequest;
}

if (window.addEventListener) {
    window.addEventListener("load", getRequestObject, false);
} 
else if (window.attachEvent) {
    window.attachEvent("onload", getRequestObject);
}