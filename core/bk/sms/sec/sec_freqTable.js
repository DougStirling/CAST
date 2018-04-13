var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Frequency tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable_c1')\">1. Frequency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A frequency table holds all information about the distribution of a categorical variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable2')\">2. Proportions and percentages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The proportions or percentages of values are usually easier to interpret than the raw frequencies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable4')\">3. Changes to the categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The information in a frequency table may be clearer if the categories are re-ordered, associated categories are combined, or if the table only describes a subset of the categories.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
