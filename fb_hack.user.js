// ==UserScript==
// @name Facebook Cleanser
// @namespace amsqr
// @description Removes unnecesary Facebook divs
// @author Alejandro Mosquera
// @match http://*.facebook.com/*
// @match https://*.facebook.com/*
// ==/UserScript==


var divList = ['appsNav', 'pagesNav', 'groupsNav', 'listsNav','pagelet_ego_pane_w','pagelet_rhc_ticker','home_right_column adsOnTop', 'right_col', 'ego_column'];

for (var i = 0; i < divList.length; i++) {
  var div = divList[i];
  var elem = document.getElementById(div);
  elem.className = elem.className + " belowThreshold hidden_elem";
  
};


