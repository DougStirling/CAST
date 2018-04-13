var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Least squares</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs1')\">1. Explanatory variable and response</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For several scenarios, you must identify the explanatory variable and response, then state whether the data are observational or experimental and whether the relationship is causal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs2')\">2. Drawing a straight line</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows the equation of a straight line and asks you to sketch it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs3')\">3. Slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page do the inverse of the previous exercise -- you are shown a straight line and asked to find its equation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs4')\">4. Interpreting the slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are asked to select one of four statements that correctly describes the slope or intercept of a least squares line in the context of the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs5')\">5. Residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise requests the least squares residual for a cross on a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs6')\">6. Residual plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you must identify which of four scatterplots is the correct residual plot when a linear model is fitted to a data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs7')\">7. Predictions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page gives a least squares line and asks for a prediction of the response, given the value of the explanatory variable.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
