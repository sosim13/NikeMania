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


setTextFieldName('sosim12','skskf2');
document.loginform.submit();
