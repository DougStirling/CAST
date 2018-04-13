var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Displaying multivariate data</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multivariate1')\">1. Representing a third variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a scatterplot of two variables in which the symbol used for each individual represents a third numerical variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multivariate2')\">2. Rotating 3D scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a 3-dimensional scatterplot of three numerical variables that can be rotated by dragging with the mouse.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multivariate3')\">3. Scatterplot matrix and brushing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A scatterplot matrix contains scatterplots of every pair of variables in a data set. In this diagram, the scatterplots are dynamically linded so selecting crosses on one scatterplot by 'brushing' also selects the same individuals in all scatterplots.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multivariate4')\">4. Brushing example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a specialised example with 3 linked scatterplots -- one of temperature vs latitude, one of residuals vs latitude, and one of latitude vs longitude (i.e. a map of the locations of the cities). Brushing high residuals highlights the locations of cities that are unusually warm for their latitude.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multivariate5')\">5. Slicing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates how 'slices' of a data set can be selected with similar values of one variable. These slices can be dynamically displayed in a scatterplot of two other variables.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
