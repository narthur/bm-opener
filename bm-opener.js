// ==UserScript==
// @name Beeminder Open Tabs
// @namespace http://www.nathanarthur.com/
// @version 0.1
// @description Add links to Beeminder dashboard for opening goals in new tabs / windows. (Icon by icons8.com)
// @author Nathan Arthur
// @match *://*.beeminder.com/*
// @include *
// @grant none
// @copyright 2019, Nathan Arthur (http://www.nathanarthur.com/)
// @license MIT; https://mit-license.org/
// @icon https://raw.githubusercontent.com/narthur/bm-opener/master/icons8-bee-48.png
// @homepage https://github.com/narthur/bm-opener
// @updateURL https://raw.githubusercontent.com/narthur/bm-opener/master/bm-opener.js
// @downloadURL https://raw.githubusercontent.com/narthur/bm-opener/master/bm-opener.js
// @supportURL https://github.com/narthur/bm-opener/issues
// @contributionURL http://www.nathanarthur.com/
// @run-at document-end
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
