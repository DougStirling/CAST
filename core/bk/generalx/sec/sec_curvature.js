var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Nonlinear relationships</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_curvature1')\">1. Transformations and correlation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two example are shown with nonlinear relationships. In both cases, transformation of X and/or Y (by dragging) linearises the relationship and the resulting correlation coefficient is a better description of the strength of the relationship.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_curvature2')\">2. Transformations and models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that a linear model fitted to transformed variables is equivalent to a fitted curve on a scatterplot of the original variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_curvature3')\">3. Quadratic models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the flexibility of a quadratic model -- three points can be dragged to position the curve. It also shows how least squares can be used to estimate the parameters.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_curvature4')\">4. Quadratic models (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example shows how fitting a quadratic model can result in smaller residuals than a linear model if there is curvature.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_curvature5')\">5. Dangers of extrapolation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, two alternative nonlinear models are fitted to a scatterplot. Although they are hardly distinguishable within the range of the data, a slider expands the axis showing very different behaviours. This is a warning not to extrapolate beyond the data.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
