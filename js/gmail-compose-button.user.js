// ==UserScript==
// @name         Gmail, Move Compose Button
// @namespace    https://ko-fi.com/jamesorthii
// @version      0.2
// @description  Moves the compose button to the lower right.
// @author       JamesO2
// @match        *://mail.google.com/mail/*
// @icon         https://jameso2.neocities.org/img/icons/ico_me.gif
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Use TamperMonkey (or similar addon) to install this script.

    // NOTE: This script is likely to break any time Google recompiles Gmail with an update.
    // I'll try to keep this script up-to-date, but in case your COMPOSE button just disappears, you can simply disable this script.

    // Creates a parent div that will hold the COMPOSE button. This is mostly for possible expansion later.
    var bar1 = document.createElement("div");
    bar1.className="jamesBar";
    bar1.id="jamesID_001";

    // Create the COMPOSE button, and apply some styles that mimic Google's interface.
    var btn2=document.createElement("div");
    btn2.id="jamesID_002";
    btn2.className="jamesButton T-I T-I-KE L3";
    btn2.innerHTML="";
    btn2.setAttribute("style", `
    z-index: 5; /* This moves the button just above the Compose email screen, but under other message boxes */
    display: flex;
    padding: 0;
    margin: 0;
	height: 50px;
	width: 50px;
	overflow: hidden;
	align-items: center;
	user-select: none;
	cursor: pointer;
	border-radius: 50%;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    background: #617073 no-repeat center url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAG5JREFUOI2dk0EOwCAIBGf5/5/pyQZbbAFPmDDjhohoHHf3VUsSgCZwlJQE7u6SlEo6L2eST8Ep9ibtwE/JcQZfcJSkCTrwS9CFN8EEvgVTGMDWNCcwgK0Ep6Y/ua0ik1S+usVLlFT3JF+QIgxwAZa0UBmKCHvgAAAAAElFTkSuQmCC');
    background-color: #4285f4;
    user-select: none;
    position: absolute;
    bottom: 40px;
    right: 40px;
    content: "";
    `);
    // Also assigns the proper JS functions so that it opens the "new email" window on-click.
    btn2.setAttribute("role", "button");
    btn2.setAttribute("tabindex", "0");
    btn2.setAttribute("jscontroller", "eIu7Db");
    btn2.setAttribute("jsaction", "click:dlrqf; clickmod:dlrqf");
    btn2.setAttribute("jslog", "20510; u014N:cOuCgd,Kr2w4b;");
    btn2.setAttribute("gh", "cm");

    // Append the elements to the end of the document
    document.body.appendChild(bar1);
    bar1.appendChild(btn2);

    // Removes the default COMPOSE button in the upper left.
    // If you want to keep it, comment out these two lines.
    var elem = document.getElementsByClassName('aic');
    elem[0].remove();

})();
