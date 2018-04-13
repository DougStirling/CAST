var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Decisions and significance</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_decision1')\">1. Decisions and significance level</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A diagram allows the critical value for a decision rule to be adjusted and shows how the probabilities of Type I and Type II errors are affected -- increasing one decreases the other. The significance level is explained as the probability of a Type I error for the decision rule.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_decision2')\">2. P-values and decision rules</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that the cut-off for a decision rule can be based on the p-value for the corresponding test of the hypotheses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_decision3')\">3. Sample size and power</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, the sample size can be increased with a slider. The resulting increase in the power is shown if the significance level is kept constant.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
