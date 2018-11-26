// ==UserScript==
// @name         Auto Scavening
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script that calculates the proportions of each type of scavenge option to optimize the production in tribal wars
// @author       p0p
// @match        https://*/game.php?village=*&screen=place&mode=scavenge*
// @grant        none
// @include https://*/game.php?village=*&screen=place&mode=scavenge*
// ==/UserScript==

(function() {
    //javascript:
    const llTr = document.createElement("tr"); // Create button called btn as a link because any button causes the attack to launch
    const llTd = document.createElement("td");
    const LL = document.getElementById("content_value"); // Button comes after this element
    const btnll = document.createElement("a"); // Create button called btn as a link because any button causes the attack to launch
    btnll.setAttribute("id", "btnLL"); // Set ID of btn
    btnll.setAttribute("class", "btn"); // Set ID of btn
    btnll.setAttribute("style", "cursor:pointer;"); // Set cursor to pointer
    LL.parentNode.insertBefore(btnll, LL.nextElementSibling); // Place btn after LL
    const tll = document.createTextNode("Recoleccion Perezosa"); // btn has this text
    btnll.appendChild(tll); // Append text to btn

    var a ,
        sw ,
        ax ,
        lc ;
    a=document.getElementsByClassName("units-entry-all")[0].innerText;
    a = a.replace('(','');
    a = a.replace(')','');
    sw=document.getElementsByClassName("units-entry-all")[1].innerText;
    sw = sw.replace('(','');
    sw = sw.replace(')','');
    ax=document.getElementsByClassName("units-entry-all")[2].innerText;
    ax = ax.replace('(','');
    ax = ax.replace(')','');
    lc=document.getElementsByClassName("units-entry-all")[3].innerText;
    lc = lc.replace('(','');
    lc = lc.replace(')','');


    btnll.onclick = function() {  
        document.getElementsByClassName("unitsInput")[3].value = Math.round(lc*0.2);
        document.getElementsByClassName("unitsInput")[0].value = Math.round(a*0.2);
        document.getElementsByClassName("unitsInput")[1].value = Math.round(sw*0.2);
        document.getElementsByClassName("unitsInput")[2].value = Math.round(ax*0.2);
        return false;
    };

    const hhTr = document.createElement("tr"); // Create button called btn as a link because any button causes the attack to launch
    const hhTd = document.createElement("td");
    const HH = document.getElementById("btnLL"); // Button comes after this element
    const btnhh = document.createElement("a"); // Create button called btn as a link because any button causes the attack to launch
    btnhh.setAttribute("id", "btnHH"); // Set ID of btn
    btnhh.setAttribute("class", "btn"); // Set ID of btn
    btnhh.setAttribute("style", "cursor:pointer;"); // Set cursor to pointer
    HH.parentNode.insertBefore(btnhh, HH.nextElementSibling); // Place btn after HH
    const thh = document.createTextNode("Recoleccion Humilde"); // btn has this text
    btnhh.appendChild(thh); // Append text to btn

    btnhh.onclick = function() {
        document.getElementsByClassName("unitsInput")[3].value = Math.round(lc*0.35);
        document.getElementsByClassName("unitsInput")[0].value = Math.round(a*0.35);
        document.getElementsByClassName("unitsInput")[1].value = Math.round(sw*0.35);
        document.getElementsByClassName("unitsInput")[2].value = Math.round(ax*0.35);
    }

    const ccTr = document.createElement("tr"); // Create button called btn as a link because any button causes the attack to launch
    const ccTd = document.createElement("td");
    const CC = document.getElementById("btnHH"); // Button comes after this element
    const btncc = document.createElement("a"); // Create button called btn as a link because any button causes the attack to launch
    btncc.setAttribute("id", "btnCC"); // Set ID of btn
    btncc.setAttribute("class", "btn"); // Set ID of btn
    btncc.setAttribute("style", "cursor:pointer;"); // Set cursor to pointer
    CC.parentNode.insertBefore(btncc, CC.nextElementSibling); // Place btn after CC
    const tcc = document.createTextNode("Recoleccion Aguda"); // btn has this text
    btncc.appendChild(tcc); // Append text to btn

    btncc.onclick = function() {
        document.getElementsByClassName("unitsInput")[3].value = Math.round(lc*0.45);
        document.getElementsByClassName("unitsInput")[0].value = Math.round(a*0.45);
        document.getElementsByClassName("unitsInput")[1].value = Math.round(sw*0.45);
        document.getElementsByClassName("unitsInput")[2].value = Math.round(ax*0.45);
    }
})();
