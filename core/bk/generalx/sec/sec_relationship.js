var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Understanding relationships</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_relationship1')\">1. Strength of a relationship</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, the strength and direction of a relationship between two variables can be adjusted with a slider. Slices of the scatterplot can be highlighted to show how a strong relationship gives accurate predictions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_relationship2')\">2. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two examples of scatterplots with outliers. In one example, the outlier is not unusual in either of the marginal distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_relationship3')\">3. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a scatterplot of two variables from Fisher's iris data in which two clusters are evident. The three varieties can then be shown with different colours.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_relationship4')\">4. Dangers of over-interpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a simulation showing that outliers and clusters can appear 'by chance' in scatterplots of small samples, even if the population has no such features.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
