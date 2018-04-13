var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Linear model assumptions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem1')\">1. Assumptions in a normal linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The normal linear model involves assumptions of linearity, constant variance, normal error distribution and independence of different observations. Residuals can be examined to assess whether these assumptions are appropriate for a particular data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs6')\">2. Residual plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Outliers and curvature in the relationship are often displayed more clearly in a plot of residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem6')\">3. Probability plot of residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Curvature in a probability plot of residuals can indicate problems with the model. Curvature can be caused by a non-normal error distribution but may also result from other problems with the model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs5')\">4. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An outlier is a response value that is unusually large or small.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem5')\">5. Standardised residuals</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An extreme residual suggests an outlier and standardised residuals can be used to assess it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnLeverage')\">6. Outliers and leverage</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If an outlier corresponds to an extreme x-value (a high leverage point) it may not show up as a large residual.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs6')\">7. Exercise: Pick the correct residual plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you must identify which of four scatterplots is the correct residual plot when a linear model is fitted to a data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature1')\">8. Exercise: Identify regression problems</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to identify the difficulties with using the least squares line to predict Y at a given X from the data in a displayed scatterplot (an outlier, curvature, a high-leverage point or extrapolation).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
