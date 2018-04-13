var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Independence</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_indep_c1')\">1. Association and independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows two sets of joint probabilities; one has independent variables and the variables are associated in the other. (The context makes it easy to interpret both types of model.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_indep2')\">2. More about independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 3-dimensional bar chart shows that the conditional probabilities are equal if there is independence.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_indep_c3')\">3. Independence from samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a static example of a contingency table. Is it consistent with independence in the underlying model?</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_indep4')\">4. Chi-squared statistic</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that the raw sum of squared differences between observed and estimated cell counts has a distribution that depends on the sample size, but the chi-squared test statistic has a distribution that is (approx) the same whatever the sample size and table margins.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_indep5')\">5. Chi-squared distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the shape of the chi-squared distribution for different numbers of contingency table rows and columns.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_indep6')\">6. P-value for chi-squared test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how the p-value for testing independence is found from the tail aria of the chi-squared distribution. Samples can be generated from an independence model showing that the p-values are rectangularly distributed between 0 and 1.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_indep_c7')\">7. Examples of tests for independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The chi-squared test is applied to a few real data sets and the results are interpreted.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_indep_c8')\">8. Examples of tests comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives some examples where the chi-squared test is used to test whether the conditional probabilities are the same in several groups.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
