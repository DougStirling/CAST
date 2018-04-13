var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Scatterplots</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_scatterplot1')\">1. More than one variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example of a multivariate data set where the stacked dot plot of one variable can be better understood by looking at the values of the other values (in a linked table).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_scatterplot2')\">2. Scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A diagram explains the position of crosses on a scatterplot using arrows from selected crosses to the two axes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_scatterplot3')\">3. Limitations of univariate displays</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Demonstration that different types of relationship can correspond to the same univariate marginal displays.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_scatterplot4')\">4. Marginal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example in which box plots and histograms can be added to the margins of a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_scatterplot5')\">5. Time series</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Display of a time series as a scatterplot of the variable against time. (Clicking crosses displays arrows to the two axes.)</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
