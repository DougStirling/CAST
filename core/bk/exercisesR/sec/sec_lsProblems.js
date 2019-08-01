var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Curvature, outliers and leverage</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature_e1')\">1. Regression problems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to identify the difficulties with using the least squares line to predict Y at a given X from the data in a scatterplot (an outlier, curvature, a high-leverage point or extrapolation).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature_e2')\">2. Log transformations of X and Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are asked whether a logarithmic transformation of X or Y might linearise the data in a scatterplot (and also give constant variability).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature_e3')\">3. Prediction from nonlinear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, a least squares line is fitted to a model that involves log(X) and/or log(Y). You are asked to use the equation of the line to predict Y from X.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
