var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>A few more exercises!</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs4')\">1. Interpreting the slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are asked to select one of four statements that correctly describes the slope or intercept of a least squares line in the context of the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_regnEst1')\">2. Standard error of slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives practice in evaluating a 95% confidence interval for a regression model's slope, based on its least squares estimate and standard error.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature1')\">3. Regression problems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to identify the difficulties with using the least squares line to predict Y at a given X from the data in a displayed scatterplot (an outlier, curvature, a high-leverage point or extrapolation).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread6')\">4. Clusters and outliers (advanced)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two exercises on this page ask the effect of combining different groups of values or adding an outlier on the mean and standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean2')\">5. Shape of distribution of mean and sum</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise examines understanding of the limiting normal distribution of the sample mean and sum as sample size increases, whatever the shape of the population distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean3')\">6. Distribution of mean and sum (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, pop-up menus are used to specify the centre, spread and skewness of the distribution of a sample mean, sample sum or a single value, given the population distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn4')\">7. Factors affecting width of confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, confidence level and population probability affect the width of a CI for the probability.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
