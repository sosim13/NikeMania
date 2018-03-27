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

function insertAdBefore(html)
{
	  	document.getElementById("banner_box").innerHTML = html;
}

function getMomlAd()
{
	var sc = document.getElementById("banner_box");
	if (sc.length == 0)
		return;

	var momlAd = '<script type="text/javascript"> google_ad_client = "ca-pub-7252630941302629"; google_ad_slot = "4292477114"; google_ad_width = 728; google_ad_height = 90;</script><!-- 나매읽기광고 --><script type="text/javascript"src="//pagead2.googlesyndication.com/pagead/show_ads.js"></script>';
	return momlAd; 
}

function goFind(){
	var sc = document.getElementById("tid");

	if (sc.length == 0)
		return;
	alert(sc);	
}

function goZoom()
{
  	document.body.style.zoom='100%';
}

hideElement('banner_left');
hideElement('t_left');
hideElement('mb_l');
hideElement('head');






