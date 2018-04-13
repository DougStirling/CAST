var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>More about box plots</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_boxPlot4')\">1. Displaying outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>One diagram shows that a basic box plot cannot distinguish between a skew distribution and a symmetric distribution with an outlier. A second diagram explains which values in an improved box plot are separately displayed as crosses; in it, values can be dragged to become outliers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_boxPlot5')\">2. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>One diagram transforms a regular distribution into one with clusters and shows that box plots cannot display clusters. A real example with clusters is also displayed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_boxPlot6')\">3. Comparison of groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A real example shows how box plots effectively summarise the differences between 12 groups.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
