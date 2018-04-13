var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnModel1')\">1. Normal distribution of response at fixed X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page gives a normal linear regression model and asks for the distribution of the response at a fixed value of the explanatory variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnEst1')\">2. Standard error of slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Any estimator's standard error gives information about its accuracy. The exercise on this page gives the standard error of a least squares line's slope and asks for a roughly calculated interval that is likely to include the underlying model's slope. (T values are not required in this exercise.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnEst2')\">3. Confidence interval for slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In the two exercises on this page, confidence intervals for a regression model's slope should be calculated from the least squares slope and its standard error. The second exercise is a little harder -- it asks for various confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnEst3')\">4. Influences on accuracy</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for the characteristics of a data set that will result in more accurate estimation of the linear model's slope.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnTest1')\">5. Test for zero slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives the least squares slope and its standard error. The p-value for testing whether the regression slope is zero should be calculated and interpreted.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
