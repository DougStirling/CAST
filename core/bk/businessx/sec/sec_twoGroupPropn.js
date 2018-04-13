var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing two proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupPropn_c1')\">1. Estimating difference between proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Description of popn/sample model for 2-group success/failure data, and a fewdata sets in which we are interested in comparing the propn of 'success'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupPropn2')\">2. Distribution of difference in proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formulae for distn of difference in propns, and a simulation illustrating that the theory does describe sample-to-sample variability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupPropn_c3')\">3. CI for difference in proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formula for 95% CI and diagram showing how it is evaluated and interpreted for some real data sets. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupPropn_c4')\">4. Testing for difference in probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Description of 1- and 2-tailed test. P-values are calculated and interpreted for several real data sets.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
