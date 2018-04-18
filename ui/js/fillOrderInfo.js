function setTextField(id, text)
{
	var element = document.getElementById(id);

	if (element) {
  		element.value=text;
  		return true;
  	}
  	return false;
}

function setTextFieldName(id, text)
{
	var element = document.loginform.nm_id.value = id;
	var element = document.loginform.passwd.value = text;

	if (element) {
  		element.value=text;
  		return true;
  	}
  	return false;
}

function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
        	document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

css("body","display","none");
setTextFieldName('sosim12','skskf2');
document.loginform.submit();
