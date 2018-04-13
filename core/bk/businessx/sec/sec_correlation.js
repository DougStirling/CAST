var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Correlation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_correlation_c1')\">1. Relationship strength and units of X and Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a scatterplot, the units of the two variables can be changed, showing that the strength of the relationship should be invariant to linear scaling.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_correlation2')\">2. Units-free variables (z-scores)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates how z-scores are found and interpreted.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_correlation3')\">3. Correlation coefficient and its properties</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a 3-dimensional diagram with z-scores for X and Y on two axes and a surface representing their product and crosses for the data points are shown on the surface. The correlation coefficient is a kind of average of these products. A slider can change the correlation between X and Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_correlation4')\">4. Scatterplots and the value of r</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this scatterplot, you can adjust the sample size and the correlation between X and Y and can generate multiple samples. It can be used to give a feel for what r = 0.5, r = -0.9, etc, tell you about the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_correlation5')\">5. Nonlinear relationships</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram is a scatterplot where Y is an exact quadratic function of X. The curvature can be altered with a slider to show that r can be much less than 1.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_correlation6')\">6. R does not tell the whole story</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows four data sets with same summary statistics (including r). One has a moderately strong linear relationship, the second has curvature, the third has an outlier, and the fourth has a single high-leverage point.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
