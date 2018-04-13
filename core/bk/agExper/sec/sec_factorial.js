var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Experiments for many factors</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorial_b1')\">1. Factorial design for three factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A factorial design has the same number of replicates for all possible treatments (combinations of factor levels). The treatments should be randomly applied to experimental units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorial_b2')\">2. Model without interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simple model for the response is the sum of terms for the separate factors and a normally distributed error that represents unexplained variation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorial_b3')\">3. Interactions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many experiments, the effect of altering one factor depends on the values of the others. Interactions can exist between the effects of pairs of factors. A three-factor interaction involves all factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorial_b4')\">4. Sums of squares and degrees of freedom</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Adding main effects and interaction terms to the model reduces the residual sum of squares. The reductions are explained sums of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorial_b5')\">5. Analysis of variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The explained and residual sums of squares can be arranged in an analysis of variance table and can be used to test the significance of the terms.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorial6')\">6. Summarising the model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The main effects and interactions can be displayed in 2-dimensional plots of the mean response against each explanatory variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorial7')\">7. Experiments with a single replicate</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there is only one replicate, the full model with all interactions fits the data perfectly with no residual degrees of freedom. The main effects and interactions cannot be tested in this model. High-order interactions must be negligible (and actually assumed to be zero) in order to perform tests.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorial8')\">8. Four or more factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many experimental units are required for complete factorial experiments with four or more factors so it is rare to have more than one replicate. Analysis is however the same as for experiments with three factors.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
