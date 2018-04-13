var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn7')\">1. Guessing normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 70-95-100 rule of thumb gives the approximate probability of a value within 1, 2 and 3 standard deviations of the mean. This exercise uses this rule of thumb to find some normal probabilities without formal calculations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean1')\">2. Spread of distribution of mean and sum</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows the distribution of the mean or sum of values from samples of different sizes from a normal population. You must match the distributions with their sample sizes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean2')\">3. Shape of distribution of mean and sum</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise examines understanding of the limiting normal distribution of the sample mean and sum as sample size increases, whatever the shape of the population distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean3')\">4. Distribution of mean and sum (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, pop-up menus are used to specify the centre, spread and skewness of the distribution of a sample mean, sample sum or a single value, given the population distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn1')\">5. Standard error of proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A template is provided in this exercise to help evaluate the standard error of a sample proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn2')\">6. 95% confidence interval for probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives practice at evaluating an approximate 95% confidence interval for a probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn3')\">7. Other confidence levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise requests a mixture of 90%, 95% and 99% confidence intervals for a probability. A normal density can be used to find the relevant z-score and a template helps evaluate the 'plus-minus' value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn4')\">8. Factors affecting width of confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, confidence level and population probability affect the width of a CI for the probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_estPropn5')\">9. Interpreting a 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise presents 3 different statements about a 95% confidence interval and asks which is correct.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
