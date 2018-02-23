
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

function cssAddFont(name, url) {

	var rule = "@font-face{font-family: '" + name + "'; src: url('" + url+ "')}";
    for (var i=0; i < document.styleSheets.length; ++i) {
	    try { 
			document.styleSheets[i].insertRule(rule, 0);
		} catch(err) {
		}
	}
}

function getFileName(path)
{
	var i = path.lastIndexOf('/');
	if (i >= 0)
		path = path.substring(i + 1);
	
	i = path.lastIndexOf('.');

	if (i >= 0)
		path = path.substring(0, i);
	
	return path;
}

function addMomlFont(url) {
	var fontUrl = agate.runScript("file.pathToUrl('" + url + "')");
	var fontName = getFileName(url); // 전체 파일 path 중에 파일명만 글꼴 이름으로 사용하도록 한다.
	
	cssAddFont(fontName, fontUrl);
}


// 한글은 word-wrap:break-word 가 동작하지 않는다. 각 단어를 div 태그로 묶어서 break-word 처럼 보이도록 한다.
function makeKorWordWrapInnerHTML(element)
{
	var nonHTMLText = element.innerHTML;
	if (nonHTMLText.indexOf("<div") < 0) { // <div 를 포함하고 있으면 이미 작업한 것으로 간주한다.
		element.setAttribute("orgText", nonHTMLText);
  		var words = nonHTMLText.split(" ");
  		var text = "";
  		for (var i = 0; i < words.length; ++i) {
  			if (i != 0)
  				text = text + " ";
  			text = text + "<div style='display:inline-block'>" + words[i] + "</div>";
  		}
  		element.innerHTML = text;
	}
}

function adjustTextAlign()
{
  	var tags=document.getElementsByClassName("pname");
  	
	for (i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.height="auto";
  		element.style.whiteSpace="normal";
  		element.style.paddingTop="0px"
  		element.style.fontSize="9pt"
  		makeKorWordWrapInnerHTML(element);
  		
  	}		
}

// enlarge image
function 
{
  	var imgs=document.getElementsByTagName("img");
  	var totalWidth = document.getElementById("container").offsetWidth;
  	
    var width = (totalWidth) / 3 - 10;
    
    width = Math.min(width, 115);
    width = Math.max(width, 90);
    
	for (i = 0; i < imgs.length; ++i) {
  		var img = imgs[i];
  		var dd = img.parentNode;
  		
  		if (dd && dd.nodeName.toLowerCase() == "dd") {
  			var dl = dd.parentNode;
  			if (dl && dl.nodeName.toLowerCase() == "dl") {
  				var li = dl.parentNode;
	  			if (li && li.nodeName.toLowerCase() == "li") {
	  				var ul = li.parentNode;			
			  		li.style.width = (width + 5) + "px";
			  		//li.style.height="auto";
			  		li.style.marginBottom="20px"
  					
                    //alert(img.style.width);
  			 		img.style.width = width + "px";
 		 			img.style.height = width + "px";
                    //++ 2014-02-19 서버 페이지 변경이후  Android에서는 둥근 모서리 효과가 동작하지 않음.
 		 			img.style["border-radius"] =  (width / 10) + "px";
 		 			img.style["box-shadow"] = "2px 2px 5px rgba(110,110,135,0.5)";
 	  			}
  			}
  		}
  	}
}
// 2014/01/08 에 서버 페이지가 변경됨

hideElementByClass('ads-layout_bottom');
hideElement('masthead');

   
  
hideElementByClass('GoogleActiveViewClass');
hideElementByClass('rh');
changeEmbed('html-embed-medium');

enlargeImage();

