// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://e.mail.ru/inbox/
// @grant        none
// ==/UserScript==

function removeAdv() {
    var head = document.getElementsByTagName('head')[0];
    var stub = head.lastChild.innerText;
    var num = stub.indexOf("{");
    var dum = stub.substring(1,num);
    var x = document.getElementsByClassName(dum)[0];

    if(typeof(x) != "undefined"){
        //x.remove();
        x.hidden = true;
    }
}

//проверяем раз в 100 миллисекунд наличие рекламных блоков
var t=setInterval(removeAdv,100);
