// ==UserScript==
// @name         Attack Renamer p0p
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script that helps you identify incoming attacks by renaming them
// @author       p0p
// @match        https://esp4.guerrastribales.es/game.php?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let input;
    var x = document.cookie;
    for(var i = 0; i< document.getElementsByClassName("command-row no_ignored_command").length;i++) {
        const td = document.getElementsByClassName("quickedit-label")[i].parentNode; // Button comes after this element
        const btn = document.createElement("a"); // Create button called btn as a link because any button causes the attack to launch
        var id = document.getElementsByClassName("quickedit")[0].getAttribute("data-id");
        btn.setAttribute("id", id); // Set ID of btn
        btn.setAttribute("class", "btn"); // Set ID of btn
        btn.setAttribute("style", "cursor:pointer;"); // Set cursor to pointer
        td.parentNode.insertBefore(btn, td.nextElementSibling); // Place btn after pEle
        btn.onclick = function btnf() {
            input = prompt("Rename the action");
            for(var j = 0; j<document.getElementsByClassName("command-row no_ignored_command").length;j++) {
                if(btn.getAttribute("id")==document.getElementsByClassName("quickedit")[j].getAttribute("data-id")) {
                    x=input;
                    document.getElementsByClassName("command-row no_ignored_command")[j].getElementsByClassName("quickedit-label")[j].innerHTML = input;
                }
            }
        }
    }

})();
