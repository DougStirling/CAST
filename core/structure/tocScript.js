var selectedTocCh = -999;
var selectedTocSec = -1;


function doTocHighlight(chapter, section) {
	if (selectedTocCh != chapter || selectedTocSec != section) {
		if (selectedTocSec >= 0) {
			var old_sec_li = document.getElementById("sec" + selectedTocCh + "." + selectedTocSec);
			old_sec_li.className = "";
			var old_sec_link = document.getElementById("a_sec" + selectedTocCh + "." + selectedTocSec);
			old_sec_link.className = "whiteLink";
			selectedTocSec = -1;
		}
		
		if (chapter != selectedTocCh) {
			if (selectedTocCh >= 0) {
				var old_ch = document.getElementById("ch" + selectedTocCh);
				old_ch.className = "whiteLink";
				var old_list = document.getElementById("list" + selectedTocCh);
				if (old_list)
					old_list.style.display = "none";
			}
			else if (selectedTocCh == -1) {
				var old_ch = document.getElementById("about");
				old_ch.className = "whiteLink";
			}
			
			if (chapter >= 0) {
				var new_ch = document.getElementById("ch" + chapter);
				new_ch.className = "yellowLink";
				var new_list = document.getElementById("list" + chapter);
				if (new_list)
					new_list.style.display = "block";
			}
			else if (chapter == -1) {
				var old_ch = document.getElementById("about");
				old_ch.className = "yellowLink";
			}
			selectedTocCh = chapter;
		}
		
		if (section >= 0) {
			var new_sec_li = document.getElementById("sec" + selectedTocCh + "." + section);
			new_sec_li.className = "selected";
			var new_sec_link = document.getElementById("a_sec" + selectedTocCh + "." + section);
			new_sec_link.className = "yellowLink";
		}
		selectedTocSec = section;
	}
}


function insertTocList() {
	var tocDiv = document.getElementById("toc");
	
	var theHtml = '<div style="margin:0; padding-left:10px; padding-top:5px">\n';
	
	theHtml += getTocHtml();
	theHtml += '<p class="index"><a class="greenLink" href="javascript:showIndex()">Index</a></p>\n';
	theHtml += '<p class="datasets"><a class="greenLink" href="javascript:showDatasets()">Datasets</a></p>\n';
	
	if (logoGif != null)
		theHtml += '<p class="logo"><img src="' + homeDir + '/images/' + logoGif + '" border="0"></p>';
	theHtml += '</div>';
	tocDiv.innerHTML = theHtml;
}