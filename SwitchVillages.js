// ==UserScript==
// @name         Switch villages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script that switches between villages in tribal wars
// @author       p0p
// @match        https://esp4.guerrastribales.es/game.php?village=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var villages = [4481,3635];
    var nVillages = villages.length;


    const llTr = document.createElement("tr"); // Create button called btn as a link 
    const llTd = document.createElement("td");
    const LL = document.getElementById("menu_row2_village"); // Button comes after this element
    const btnll = document.createElement("a"); // Create button called btn as a link 
    btnll.setAttribute("id", "btnLL"); // Set ID of btn
    btnll.setAttribute("class", "btn"); // Set ID of btn
    btnll.setAttribute("style", "cursor:pointer;"); // Set cursor to pointer
    LL.parentNode.insertBefore(btnll, LL.nextElementSibling); // Place btn after menu_row2_village
    const tll = document.createTextNode("<-"); // btn has this text
    btnll.appendChild(tll); // Append text to btn

    const showArrTimeTr = document.createElement("tr"); // Create button called btn as a link 
    const showArrTimeTd = document.createElement("td");
    const pEle = document.getElementById("btnLL"); // Button comes after this element
    const btn = document.createElement("a"); // Create button called btn as a link 
    btn.setAttribute("id", "swv"); // Set ID of btn
    btn.setAttribute("class", "btn"); // Set ID of btn
    btn.setAttribute("style", "cursor:pointer;"); // Set cursor to pointer
    pEle.parentNode.insertBefore(btn, pEle.nextElementSibling); // Place btn after btnLL
    const t = document.createTextNode("->"); // btn has this text
    btn.appendChild(t); // Append text to btn

    btnll.onclick = function() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        var exit = false;
        var i = 0;
        /*var URL = document.URL;
        URL = URL.replace('https://esp4.guerrastribales.es/game.php?village=','');
        URL = URL[0] + URL[1] + URL[2] + URL[3];
        if(URL != '4481') {
            var url = window.location.toString();
            top.location = url.replace(3635, 4481);
        }
        if(URL != '3635') {
            var url2 = window.location.toString();
            top.location = url2.replace(4481, 3635);
        }*/
        while(!exit) {
            if(vars["village"]== villages[i%nVillages]) {
                var url = window.location.toString();
                var a = vars["village"];
                top.location = url.replace(a,(villages[(i+1)%nVillages]));
                exit = true;
            }
            i++;
        }
    }
    btn.onclick = function() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        var exit = false;
        var i = 0;
        /*var URL = document.URL;
        URL = URL.replace('https://esp4.guerrastribales.es/game.php?village=','');
        URL = URL[0] + URL[1] + URL[2] + URL[3];
        if(URL != '4481') {
            var url = window.location.toString();
            top.location = url.replace(3635, 4481);
        }
        if(URL != '3635') {
            var url2 = window.location.toString();
            top.location = url2.replace(4481, 3635);
        }*/
        while(!exit) {
            if(vars["village"]== villages[i%nVillages]) {
                var url = window.location.toString();
                var a = vars["village"];
                top.location = url.replace(a,(villages[(i+1)%nVillages]));
                exit = true;
            }
            i++;
        }
    }
})();