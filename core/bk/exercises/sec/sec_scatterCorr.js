var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Scatterplots and correlation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_scatterplot1')\">1. Scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will complete a scatterplot by dragging the crosses for the last two observations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_scatterplot2')\">2. Information from scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises in this page expect you to interpret scatterplots in terms of the relationship between the variables, clusters and outliers. In the first exercise, the interpretation is in an application context, whereas in the second the interpretation is in generic terms.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_correlation1')\">3. Correlation coefficient, r</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will make a rough estimate of correlation coefficient by eye from a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_correlation2')\">4. Clusters, outliers and curvature</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise presents four scatterplots (one elliptical, one with an outlier, one with two clusters and one with curvature) and asks for these to be matched with the corresponding values of r.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
