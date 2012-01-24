
function removeUploadImageLink() {
	$("div#brotable3").hide();
	
}

//function removeFuckingTriangle() {
//	$('img.inlineimg[alt="Go Back"]').hide();
//}

// changes all of those pesky Toolshed references to a real website
function addFourtheye() {
	$('a[href="http://toolshed.down.net/"]').attr('href', 'http://fourtheye.net').html("Fourtheye");
}

function restoreGays() {
	html = $("#brotablebeta").html();
	rep = html.replace(/\[no\]/g, "gay");
	$("#brotablebeta").html(rep);
}


//[TASTY] L1quid: id=f147
//[TASTY] L1quid: try { document.getElementById("f147").style.display = "none"; } catch (e) {}

function hidePolischtick() {
	$("#f147").hide(); // Polischtick
	$("#f100").hide(); // S & P
	
}

function pageload()
{
	if (location.href.indexOf('toolnavy.com') > -1) {
		//removeFuckingTriangle();
		removeUploadImageLink();
		hidePolischtick();
		
		addFourtheye();
		
		restoreGays();
	}
}

pageload();