var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimating proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estPropn1')\">1. Estimating a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulation generating random samples and sample proportions. A checkbox allows you to peek at the underlying population distribution and display the estimation error. The empirical distn of the error can be built up.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estPropn_b2')\">2. Error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the distributions of the number of successes, proportion of successes and estimation error -- the same binomial distns with different scaling. The standard devn of the error distn (standard error) is also shown.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estPropn3')\">3. Normal approximation to error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the error distribution (scaled binomial) and its normal approximation. A slider changes the sample size and shows that the error distribution becomes closer to normal when the sample size increases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estPropn_b4')\">4. Standard error examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few examples are given where the normal approximation to the error distn for estimating a proportion is displayed and the standard error is given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estPropn_b5')\">5. Confidence interval for proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Static diagrams show how 95% bounds for the error are found from the error distn. The resulting 95% confidence interval is obtained from these bounds.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estPropn6')\">6. Properties of 95% CI for proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation demonstrates that about 95% of the 95% CIs include the parameter that is being estimated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estPropn_b7')\">7. Confidence interval examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page presents some examples of 95% confidence intervals and their interpretation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
