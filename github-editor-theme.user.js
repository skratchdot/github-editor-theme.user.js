// ==UserScript==
// @name           GitHub: Editor Theme
// @namespace      https://github.com/skratchdot/github-editor-theme.user.js
// @description    Add a "theme" dropdown when editing files in the Github UI.
// @include        https://github.com/*
// @match          https://github.com/*
// @require        https://gist.github.com/skratchdot/5604120/raw/_init.js
// @require        https://gist.github.com/skratchdot/5604120/raw/editor-theme.js
// @run-at         document-end
// @grant          none
// @icon           http://skratchdot.com/favicon.ico
// @downloadURL    https://github.com/skratchdot/github-editor-theme.user.js/raw/master/github-editor-theme.user.js
// @updateURL      https://github.com/skratchdot/github-editor-theme.user.js/raw/master/github-editor-theme.user.js
// @version        1.2
// ==/UserScript==
/*global SKRATCHDOT, document */

// This code is only going to run for browsers that don't support
// the @require annotation when executing userscripts.
if ('undefined' === typeof SKRATCHDOT) {
	var addScript = function (src) {
		'use strict';
		var script = document.createElement('script');
		script.src = src;
		document.body.appendChild(script);
		document.body.removeChild(script);
	};

	// Required by: repo-filter-info
	addScript('https://gist.github.com/skratchdot/5604120/raw/editor-theme.js');
}