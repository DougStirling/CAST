var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bar and pie charts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b1')\">1. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A bar chart displays the frequencies in a frequency table graphically.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b3')\">2. Chartjunk and misleading bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The temptation to embellish simple barcharts should be resisted. Some such 'artistic' embellishments are misleading.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b4')\">3. Stacked bar charts and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>These are alternatives to a bar chart for categorical data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b5')\">4. Comparison of bar and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar charts distinguish better the proportions in single categories. Pie charts are better for showing the proportion in a group of categories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b6')\">5. Chartjunk for pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three-dimensional pie charts are often drawn. If a pie chart holds little information, it is better to draw it small than to enhance it in this way.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b7')\">6. Bar and pie charts for quantities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar and pie charts can be used to display any data where a total quantity is split into parts.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
