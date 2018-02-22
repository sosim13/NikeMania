
window.setTimeout("makeImageData()", 5000);


function escapeFunctionScript(text)
{
	text = text.replace("\\", "\\\\");
	text = text.replace(/\n/gm, "\\n");
	text = text.replace(/\r/gm, "\\r");
	
	
	return text;	
}

function escapeXmlAttr(text)
{
	text = text.replace(/&/g, "&amp;");
	
	return text;	
}

function getElementsByTagNameAndClass(tag, className)
{
    var ret = new Array();
    var elems = document.getElementsByTagName(tag);
    for (i in elems) {
    	if (elems[i].className == className)
    		ret.push(elems[i]);
    }
    return ret;
 }

var imageDataCalled = false;
function makeImageData()
{
	if (imageDataCalled)
		return;

	//setStatusText('loading.');
  	var imgs=document.getElementsByTagName("img");
  	var imgSrcs = new Array();
	for (i = 0; i < imgs.length; ++i) {
  		var img = imgs[i];
  		if (img.src.indexOf("/shopimages/") >= 0 && img.src.indexOf("/event") < 0 )
  			imgSrcs.push(img.src);
  		htmlLog(img.src);
  	}
  	
  	var anchors=document.getElementsByTagName("a");
  	var anchorSrcs = new Array();
	for (i = 0; i < anchors.length; ++i) {
  		var anchor = anchors[i];
  		if (anchor.href.indexOf("product.html") >= 0)
  			anchorSrcs.push(anchor.href);
  		htmlLog(anchor.href);
  	}

  	var pnames=getElementsByTagNameAndClass("dd", "pname");
  	var pnameTexts = new Array();
	for (i = 0; i < pnames.length; ++i) {
  		var pname = pnames[i];
  		var orgText = pname.getAttribute("orgText");
  		if (orgText)
	  		pnameTexts.push(orgText);
  		else
	  		pnameTexts.push(pname.innerHTML);
  		htmlLog(pnameTexts[i]);
  	}

  	var prices=getElementsByTagNameAndClass("dd", "price");
  	var priceTexts = new Array();
	for (i = 0; i < prices.length; ++i) {
  		var price = prices[i];
  		priceTexts.push(price.textContent.trim());
  		htmlLog(priceTexts[i]);
  	}

	//setStatusText('loading..');
  	
  	
  	var count =Math.min(imgSrcs.length, anchorSrcs.length);
  	
  	if (count == 0)
  		return;
  		
  	imageDataCalled = true;
  	
  	
  	var dataXML = '<?xml version="1.0" encoding="utf-8"?>\r\n<DATA>\r\n';
	for (i = 0; i < count; ++i) {
		dataXML = dataXML + '<ITEM img="' + escapeXmlAttr(imgSrcs[i])
		 + '" link="' + escapeXmlAttr(anchorSrcs[i])
		 + '" pname="' + escapeXmlAttr(pnameTexts[i])
		 + '" price="' + escapeXmlAttr(priceTexts[i])
		 + '" />\r\n';
	}
  	
  	dataXML= dataXML + '</DATA>';
  	
  	dataXML = escapeFunctionScript(dataXML);
  	//setStatusText('loading...');
  	agate.runScript("userVariable.galleryData = '" + dataXML + "'");
  	
  	htmlLog("img:" + imgSrcs.length
  	 + ", anchor:" + anchorSrcs.length
  	 + ", pname:" + pnameTexts.length
  	 + ", price:" + priceTexts.length); 
}

function htmlLog(msg)
{
	//agate_device.log("MOMLWebView", msg);
	return;
	var logMsg = document.getElementById("logMsg");
	logMsg.innerHTML = logMsg.innerHTML + "\r\n<br/>" + msg; 
}

function setStatusText(msg)
{
	agate.runScript("function.setStatusText('" + msg + "')");
}

makeImageData();



// 2014/01/08 에 서버 페이지가 변경됨

?function hideElement(id)
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

hideElement('intro');
hideElement('gads');
hideElement('movepage');
hideElement('banner1');
hideElement('footer');

css("div", "display", "none");


window.setTimeout("agate.runScript('caller.showNow')", 500);


