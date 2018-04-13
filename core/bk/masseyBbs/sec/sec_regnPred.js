var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Predicting the response</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnPred0')\">1. Point estimates of the response</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The least squares intercept and slope allow us to predict the response corresponding to any x-value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnPred1')\">2. Estimated response distn at X</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The regression model means that the response has a normal distribution at any x-value. The estimates of the 3 linear model parameters provide an estimated response distribution corresponding to any x.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnPred2')\">3. Variability of estimate at X</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The predicted response at any X varies from sample to sample. The prediction is more variable at x-values far from the mean of the 'training' data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnPred_c3')\">4. Estimating the mean vs prediction</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A distinction is made between estimating the mean response at X and predicting a new individual's response at X. Errors are larger (on average) when predicting a new individual's response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnPred4')\">5. Confidence & prediction intervals</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 95% confidence interval is used to estimate the mean response at X. A 95% prediction interval is similar, but gives a range of likely values for a new response value. The prediction interval is wider than the confidence interval. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs7')\">6. Exercise: Predict the response</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page gives a least squares line and asks for a prediction of the response, given the value of the explanatory variable.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
