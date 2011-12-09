
function removeFuckingTriangle() {
	$('img.inlineimg').hide();
}

function pageload()
{
	if (location.href.indexOf('toolnavy.com') > -1) {
		//chrome.pageAction.show(tabId);
		removeFuckingTriangle();
	}
	//else chrome.pageAction.hide(tabId);  
}

pageload();