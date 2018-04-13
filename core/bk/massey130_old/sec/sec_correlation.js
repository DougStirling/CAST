var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Correlation</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>This section describes a numerical summary of the strength of the relationship between two variables, X and Y.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation_b1')\">1. Units for X and Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A numerical description of the strength of a relationship should not be affected by rescaling the variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation2')\">2. Units-free variables (z-scores)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Standardising a variable gives z-scores that do not depend on the units of the original variable. (The correlation coefficient will be defined in terms of z-scores for X and Y.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation3')\">3. Correlation coefficient</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation coefficient summarises the strength of the relationship between X and Y. It is +1 when the scatterplot crosses are on a straight line with positive slope, -1 when on a line with negative slope, and zero when X and Y are unrelated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation4')\">4. Scatterplots and the value of r</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You should be able to estimate the value of r from looking at a scatterplot and imagine a scatter of crosses corresponding to any value of r.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation5')\">5. Nonlinear relationships</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation coefficient is only a good measure of the strength of a relationship if the points in a scatterplot are scattered round a straight line, not a curve.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation6')\">6. R does not tell the whole story</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation coefficient cannot identify curvature, outliers or clusters and can be misleading if these features are present. A scatterplot must always be examined too.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('curvature1')\">7. Transformations and correlation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation coefficient does not adequately describe the strength of a nonlinear relationship. Transforming the variables to linearise the relationship helps.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
