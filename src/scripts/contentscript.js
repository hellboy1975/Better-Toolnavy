
function removeUploadImageLink() {
	$('#brotable3').html('');
}

function removeFuckingTriangle() {
	$('img.inlineimg[alt="Go Back"]').hide();
}

// changes all of those pesky Toolshed references to a real website
function addFourtheye() {
	$('a[href="http://toolshed.down.net/"]').attr('href', 'http://fourtheye.net').html("Fourtheye");
}

function restoreGays() {
	html = $("#brotablebeta").html();
	rep = html.replace(/\[no\]/g, "gay");
	$("#brotablebeta").html(rep);
}

function pageload()
{
	if (location.href.indexOf('toolnavy.com') > -1) {
		//chrome.pageAction.show(tabId);
		removeFuckingTriangle();
		removeUploadImageLink();
		
		addFourtheye();
		
		restoreGays();
	}
	//else chrome.pageAction.hide(tabId);  
}

pageload();