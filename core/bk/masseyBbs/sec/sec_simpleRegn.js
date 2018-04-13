var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simple linear regression</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>We have already explored the idea of a relationship between two numerical variables using  <a href=&quot;javascript:nav.gotoshowNamedPage('scatterplot2')&quot;>scatterplots</a>. We have also met the <a href=&quot;javascript:showNamedPage('correlation3')&quot;>correlation coefficient</a>, a numerical summary of the strength of a linear relationship. This section explores bivariate linear relationships further.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs2')\">1. Linear models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A line or curve is useful for predicting the value of Y from a known value of X. A straight line can often be used to predict one variable from another.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs3')\">2. Predictions and residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between the actual value of Y and the value predicted by a line is called a residual. Small residuals are clearly desirable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs4')\">3. Least squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of squared residuals describes the accuracy of predictions from a line. The method of least squares positions the line to minimise the sum of squared residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel_c1')\">4. Interest in generalising from data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some bivariate data sets describe complete populations. Others are 'representative' of an underlying population or process.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel_c2')\">5. Normal linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bivariate data can be modelled with a response distribution for each possible X. In a normal linear model, we use a normal distribution whose mean is a linear function of X and whose standard deviation is constant.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel4')\">6. Another way to describe the model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A normal linar model can be described in terms of 'errors'. In samples from the model, approximately 95% of errors are within 2 standard deviations of zero, so about 95% of the points in a scatterplot are within this distance of the regression line.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel_c5')\">7. Model parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The normal linear model has 3 unknown parameters. For many data sets, these parameters have meaningful interpretations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs1')\">8. Exercise: Pick the explanatory variable and response</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For several scenarios, you must identify the explanatory variable and response, then state whether the data are observational or experimental and whether the relationship is causal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs2')\">9. Exercise: Draw a straight line</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows the equation of a straight line and asks you to sketch it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs3')\">10. Exercise: Find the slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page do the inverse of the previous exercise — you are shown a straight line and asked to find its equation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs4')\">11. Exercise: Interpret the slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are asked to select one of four statements that correctly describes the slope or intercept of a least squares line in the context of the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs5')\">12. Exercise: Find a residual</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise requests the least squares residual for a cross on a scatterplot.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
