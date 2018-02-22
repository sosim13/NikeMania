// 2014/01/08 에 서버 페이지가 변경됨

﻿function hideElement(id)
{
	var element = document.getElementById(id);

	if (element)
  		element.style.display='none';
}

function hideElementByClass(className)
{
  	var tags=document.getElementsByClassName(className);
  	
	for (var i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}

function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
        	document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

hideElement('banner_left');
hideElement('t_left');
hideElement('mb_l');





css("body", "background-color", "rgba(255, 255, 255, 0.01)");
css("#listWrap.index h2 span", "background-color", "rgba(255, 255, 255, 0.01)");
css("body", "font-size", "24px");
css("a:link", "font-size", "24px");
css("a:visited", "font-size", "24px");
css("a:hover", "font-size", "24px");
css("tr, td, th", "font-size", "24px");
css("tr, td, th", "font-size", "24px");
css("table.bbslist td#tdate", "font-size", "1px");

css("table.bbslist", "width", "1000px");
css("#t_right", "margin", "0 0 0 0");
css("div#banner_box", "width", "1000px");
css("div#banner_box", "margin", "0 0 0 0");

// 읽기 게시판
css("table.bbslist", "width", "1000px");
css("#t_right", "margin", "0 0 0 0");
css("table.bbslist", "width", "1000px");
css("table.bbslist", "margin", "10px 0px 10px 0px");
css("table.reply_box", "width", "1000px");
css("table.reply_box", "margin", "10px 0px 10px 0px");
css("div#banner_box", "width", "1000px");
css("div#banner_box", "margin", "10px 0px 10px 0px");
css("table.rp_box", "width", "1000px");
css("table.rp_box", "margin", "10px 0px 10px 0px");
css("table.rp_box2", "width", "1000px");
css("table.rp_box2", "margin", "10px 0px 10px 0px");
css("div#con_text", "font-size", "50px");


//css("input", "background-color", "rgba(255, 255, 255, 0.01)");

window.setTimeout("agate.runScript('caller.showNow')", 500);

