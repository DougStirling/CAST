var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bar charts</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>The distribution of values of a single categorical variable can be described  		in various ways.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_a1')\">1. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A bar chart displays the values in a frequency table graphically.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat2')\">2. Pareto diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For barcharts of categorical data whose categories have no natural ordering, it is often helpful to sort the categories into decreasing frequencies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_a3')\">3. Chartjunk and misleading bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The temptation to embellish simple barcharts should be resisted. Some such 'artistic' embellishments are misleading.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
