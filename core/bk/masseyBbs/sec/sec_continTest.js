var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Contingency table tests</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep_c3')\">1. Independence from samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Independence is a population property. To assess independence from a sample contingency table, the observed cell counts are compared to those estimated from a model with independence.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep_c4')\">2. Testing for independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 'chi-squared' test statistic is used for testing whether the rows and columns are independent. It is defined as the sum over all contingency table cells of the squared difference between the observed and estimated cell count divided by the estimated count.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep5')\">3. Chi-squared distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 'chi-squared' statistic has a standard distribution (a chi-squared distribution) when there is independence. Its shape depends only on the number of rows and columns of the contingency table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep6')\">4. P-value for chi-squared test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The chi-squared statistic can be used to find a p-value for testing independence. The p-value has similar interpretation and properties to p-values for all other hypothesis tests.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep_c7')\">5. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The chi-squared test is applied to a few real data sets. When the variables are found to be associated, the nature of the relationship is described from a comparison of observed and estimated cell counts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep_c8')\">6. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The chi-squared test assesses independence of two categorical variables. It is also used to test whether a single categorical variable has the same distribution in several groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_indep1')\">7. Exercise:  Expected cell counts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows a contingency table and asks for the expected cell count in one of the table cells, assuming the row and column variables are independent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_indep2')\">8. Exercise:  Chi-squared test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, the test statistic and p-value are provided for a chi-squared test applied to a contingency table. You are asked to interprete the result of the test.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
