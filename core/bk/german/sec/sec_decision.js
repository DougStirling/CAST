var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Decisions and significance</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('decision1')\">1. Hypothesentests und Entscheidungen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many applications, a different action is taken if the null hypothesis is 'accepted' or 'rejected'. Two different types of error are possible from such a decision &mdash; accepting the null hypothesis when it is false, or rejecting it when it is true.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('decision2')\">2. Entscheidungsregeln</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The decision rule is based on a sample statistic. For tests about some parameters, the probabilities of Type I and Type II errors can be calculated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('decision3')\">3. Significanzlevel und p-Werte</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many tests are conducted with a pre-specified probability of a Type I error &mdash; the significance level. The null hypothesis is rejected if the p-value for the test is lower than the significance level.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('decision4')\">4. Stichprobenumfang und Power</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The power of a hypothesis test is one minus the probability of a Type II error. At a fixed significance level, increasing the sample size improves the power of the test.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
