var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Variation</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Click on any heading to display the page.)</span></p> 	<p>en data are collected, all values are rarely the same.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation1')\">1. Signal and noise</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many situations, information (signal) can be obscured by random variation (noise).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation2')\">2. Natural variability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When data are collected from 'individuals', they often vary considerably.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation3')\">3. Variability caused by experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Intentional differences to experimental conditions may also cause systematic differences in variables. Natural variability makes it harder to interpret experimental results.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
