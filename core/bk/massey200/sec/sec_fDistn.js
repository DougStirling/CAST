var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>F distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fDistn1')\">1. Ratio of chi-squared variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The ratio of two independent chi-squared variables (divided by their degrees of freedom) has an F distribution. Its probability density function is shown.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fDistn2')\">2. Mean, variance and shape</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formulae are given for the F distribution's mean and variance. It is very skew unless both of its degrees of freedom are large.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fDistn3')\">3. Comparing sample variances</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The ratio of two sample variances from normal distributions has a distribution proportional to an F distribution. A confidence interval for the ratio of the normal variances can be found from it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fDistn4')\">4. Relationship between t and F distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The square of a random variable with a t distribution has an F distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
