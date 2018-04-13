var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Independence</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Relationships between categorical variables can be described in similar terms to these used for numerical variables.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep_b1')\">1. Association</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two categorical variables, X and Y, are associated (related) when the conditional distribution of Y given X=x is different for different values of x. Knowing the value of X therefore tells you something about Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep2')\">2. Independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the conditional distribution of Y is the same for all values of X, the variables are called independent. This special case is of practical importance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep3')\">3. Independence from samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Independence is a population property. To assess independence from a sample contingency table, the observed cell counts are compared to those estimated from a model with independence.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep4')\">4. Testing for independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The raw sum of squared differences between observed and estimated cell counts is not a good test statistic.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep5')\">5. Chi-squared test statistic</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 'chi-squared' statistic is a modified sum of squared differences that has a standard distribution (a chi-squared distribution) when there is independence.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep6')\">6. P-value for chi-squared test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The chi-squared statistic can be used to find a p-value for testing independence. The p-value has similar interpretation and properties to p-values for all other hypothesis tests.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep7')\">7. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The chi-squared test is applied to a few real data sets. When the variables are found to be associated, the nature of the relationship is described from a comparison of observed and estimated cell counts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep8')\">8. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The chi-squared test assesses independence of two categorical variables. It is also used to test whether a single categorical variable has the same distribution in several groups.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
