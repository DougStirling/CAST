var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises for test 2</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>The following exercises give you practice with the ten questions that will be asked in the second mastery test.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_scatterplot2')\">1. Interpret scatterplot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise in this page expects you to interpret scatterplots in terms of the relationship between the variables, clusters and outliers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_correlation1')\">2. Guess correlation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will make a rough estimate of correlation coefficient by eye from a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs3')\">3. Find equation of line</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page shows you a straight line and asks for its equation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs5')\">4. Find a residual</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise requests the least squares residual for a cross on a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs4')\">5. Interpret slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are asked to select one of four statements that correctly describes the slope or intercept of a least squares line in the context of the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs7')\">6. Make prediction from LS line</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page gives a least squares line and asks for a prediction of the response, given the value of the explanatory variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature1')\">7. Identify problems with LS line</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to identify the difficulties with using the least squares line to predict Y at a given X from the data in a displayed scatterplot (an outlier, curvature, a high-leverage point or extrapolation).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_timePlot1')\">8. Identify patterns in a time series</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page asks you to identify whether a time series has trend, a seasonal pattern, a cyclic pattern or irregular variation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_smoothing1')\">9. Find smoothed time series values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to evaluate an exponentially smoothed value and a moving average.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_groupedCat2')\">10. Find proportion from contingency table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise you are shown contingency tables and asked to find a joint, marginal or conditional proportion.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
