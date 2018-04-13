var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Predicting the response</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnPred1')\">1. Estimated response distn at X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that the estimated parameters provide an estimated response distribution at any x-value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnPred2')\">2. Variability of estimate at X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that the least squares line, and hence predictions from it, are more variable at x-values far from the mean of the 'training' data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnPred3')\">3. Variability of estimate at X (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram also uses a simulation to show that predictions are least variable near the mean x-value in the 'training' data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnPred4')\">4. Estimating the mean vs prediction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram is a simulation showing that the error in estimating the response mean at X is usually less than the error when predicting a new individual's response at the same X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnPred5')\">5. Confidence and prediction intervals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram contrasts the 95% confidence intervals and 95% prediction intervals for a real data set.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
