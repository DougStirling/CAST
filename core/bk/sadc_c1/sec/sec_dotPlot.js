var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Dot plots</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Dot plots show each value in a data set as a cross.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b1')\">1. Analysing variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Meaningful information can be obtained from variation in the values of a variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b2')\">2. Basic dot plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A dot plot displays each value as a cross along a numerical axis</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_m3')\">3. Jittered dot plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Jittering is a modification to the basic dot plot that avoids some problems associated with overlapping crosses</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_m4')\">4. Stacked dot plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stacking of the crosses is an alternative to jittering that highlights ranges of high or low density.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
