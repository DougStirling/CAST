var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Frequency tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable1')\">1. Types of variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will classify various measurements as numerical (continuous or discrete) or categorical (ordinal or nominal).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable2')\">2. Proportions from frequency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise displays frequency tables and asks you to find the proportion or percentage of values equal to, or not equal to, a particular categorical value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable3')\">3. Proportions for ordered categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise in this page is similar to the previous exercise but asks questions about values greater than, greater than or equal to, etc. a value.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
