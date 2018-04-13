var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Experiments with three factors</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('threeFactor1')\">1. Model without interactions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A factorial design uses the same number of runs for all possible combinations of factor levels. A simple model adds terms for the separate factors to a normally distributed error.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('threeFactor2')\">2. Least squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The model parameters are estimated to minimise the sum of squared residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('threeFactor3')\">3. Interactions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many experiments, the effect of altering one factor depends on the values of the others. Interactions can exist between the effects of pairs of factors. A three-factor interaction involves all factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('threeFactor4')\">4. Analysis of variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Adding main effects and interaction terms to the model reduces the residual sum of squares. The reductions are explained sums of squares and can be used to test the significance of the terms.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('threeFactor5')\">5. Summarising the model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The main effects and interactions can be displayed in 2-dimensional plots of the mean response against each explanatory variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('threeFactor6')\">6. Experiments with a single replicate</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there is only one replicate, the full model with all interactions fits the data perfectly with no residual degrees of freedom. The main effects and interactions cannot be tested in this model. High-order interactions must be negligible (and actually assumed to be zero) in order to perform tests.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
