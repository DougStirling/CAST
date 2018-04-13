var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Correlation</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>This section describes a numerical summary of the strength of the relationship between two variables, X and Y.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship1')\">1. Strength of a relationship</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The main feature of interest in a scatterplot is the strength of the relationship between the two variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation1')\">2. Units for X and Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A numerical description of the strength of a relationship should not be affected by rescaling the variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation2')\">3. Units-free variables (z-scores)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Standardising a variable gives z-scores that do not depend on the units of the original variable. (The correlation coefficient will be defined in terms of z-scores for X and Y.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation3')\">4. Correlation coefficient</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation coefficient summarises the strength of the relationship between X and Y. It is +1 when the scatterplot crosses are on a straight line with positive slope, -1 when on a line with negative slope, and zero when X and Y are unrelated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation4')\">5. Scatterplots and the value of r</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You should be able to estimate the value of r from looking at a scatterplot and imagine a scatter of crosses corresponding to any value of r.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation5')\">6. Nonlinear relationships</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation coefficient is only a good measure of the strength of a relationship if the points in a scatterplot are scattered round a straight line, not a curve.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation6')\">7. R does not tell the whole story</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation coefficient cannot identify curvature, outliers or clusters and can be misleading if these features are present. A scatterplot must always be examined too.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship2')\">8. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An extreme value of one or both of the variables is an outlier. An unusual combination of values is also called an outlier.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship3')\">9. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the crosses on a scatterplot separate into clusters, different groups of individuals are suggested.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship4')\">10. Dangers of over-interpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In small data sets, there may be considerable variability, so patterns should be strongly evident before they are reported.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
