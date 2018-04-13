var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Stem and leaf plots</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_m5')\">1. Stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stem and leaf plots are similar to stacked dot plots, but a digit is used instead of a cross to retain information about the position of each value within its cross.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_m6')\">2. Splitting the stems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>To increase the flexibility of the display, each stem may be repeated either 2 or 5 times, increasing the number of classes in the basic stem and leaf plot by a factor of 2 or 5.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_m7')\">3. Drawing stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For data analysis, stem and leaf plots are rarely more informative than stacked dot plots, but they are easy to draw by hand.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
