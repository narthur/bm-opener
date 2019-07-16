// ==UserScript==
// @name         Beeminder Open Tabs
// @namespace    http://www.nathanarthur.com/
// @version      0.1
// @description  Add links to Beeminder dashboard for opening goals in new tabs / windows
// @author       Nathan Arthur
// @match        *://*.beeminder.com/*
// @grant        none
// @license      MIT; https://mit-license.org/
// ==/UserScript==



(function() {
    'use strict';

    window.openLinks = function(selector) {
        console.log('openAll');

        var links = document.querySelectorAll(selector);
        links.forEach(function(link, index) {
            setTimeout(function() {
                var url = link.getAttribute('href');
                console.log(url);
                var tab = window.open(url);
                tab.blur();
                window.focus();
            }, 100 * index);
        })
    }

    var content = document.querySelector('.dashboard.content'),
        all = '<a href="#" onclick="openLinks(\'a.slug\'); return false;">Open All</a> ',
        red = '<a href="#" onclick="openLinks(\'.red a.slug\'); return false;">Red</a> ',
        orange = '<a href="#" onclick="openLinks(\'.orange a.slug\'); return false;">Orange</a> ',
        blue = '<a href="#" onclick="openLinks(\'.blue a.slug\'); return false;">Blue</a> ',
        green = '<a href="#" onclick="openLinks(\'.green a.slug\'); return false;">Green</a>';

    content.innerHTML = all + red + orange + blue + green + content.innerHTML
})();
