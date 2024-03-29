// ==UserScript==
// @name Beeminder Open Tabs
// @namespace https://www.nathanarthur.com/
// @version 0.2
// @description Add links to Beeminder dashboard for opening goals in new tabs / windows. (Icon by icons8.com)
// @match https://*.beeminder.com/*
// @include https://*.beeminder.com/*
// @grant none
// @copyright 2019, Nathan Arthur (https://www.nathanarthur.com/)
// @license MIT; https://mit-license.org/
// @icon https://raw.githubusercontent.com/narthur/bm-opener/master/icons8-bee-48.png
// @homepage https://github.com/narthur/bm-opener
// @updateURL https://raw.githubusercontent.com/narthur/bm-opener/master/bm-opener.user.js
// @downloadURL https://raw.githubusercontent.com/narthur/bm-opener/master/bm-opener.user.js
// @supportURL https://github.com/narthur/bm-opener/issues
// @run-at document-end
// ==/UserScript==

// ==OpenUserJS==
// @author narthur
// ==/OpenUserJS==

(function() {
    'use strict';

    if (window.self != window.top || document.querySelector('.dashboard') === null) {
        return;
    }

    window.naOpenLinks = function(selector) {
        var links = document.querySelectorAll(selector);
        links.forEach(function(link, index) {
            setTimeout(function() {
                var url = link.getAttribute('href');
                console.log(url);
                var tab = window.open(url);
                tab.blur();
                window.focus();
            }, 100 * index);
        });
    };

    var body = document.querySelector('body'),
        content = document.querySelector('.dashboard.content'),
        wrapper = document.createElement('div'),
        all = '<a href="#" onclick="naOpenLinks(\'a.slug\'); return false;">Open All</a> ',
        red = '<a href="#" onclick="naOpenLinks(\'.red a.slug\'); return false;">Red</a> ',
        orange = '<a href="#" onclick="naOpenLinks(\'.orange a.slug\'); return false;">Orange</a> ',
        blue = '<a href="#" onclick="naOpenLinks(\'.blue a.slug\'); return false;">Blue</a> ',
        green = '<a href="#" onclick="naOpenLinks(\'.green a.slug\'); return false;">Green</a>';

    wrapper.innerHTML = all + red + orange + blue + green;

    var node = body.insertBefore(wrapper, content);

    node.style.textAlign = "center";
})();
