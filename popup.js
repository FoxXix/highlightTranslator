
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function getTranslatedText() {
	var text = getSelectionText();
	
	if(text != ""){
		//Google translate API code will go here using the text variable as the
		//word(s) that need to be translated
		return text;
	}else{
		return null;
	}
    
}

document.onmouseup = document.onkeyup = document.onselectionchange = function() {
	document.getElementById("sel").value = getSelectionText();
}

document.onmouseup = document.onkeyup = function() {	
	document.getElementById("translated").value = getTranslatedText();
}

