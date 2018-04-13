var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Goodness-of-fit and pure error</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lackOfFit1')\">1. Modelling nonlinearity with g groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When there are several response values at each x, the most general model for curvature allows for an arbitrary response mean at each x. This model places no constraint on the shape of the curvature.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lackOfFit2')\">2. Understanding the sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The nonlinearity sum of squares describes the distances of the group means from a straight line.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lackOfFit3')\">3. Test for linearity</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An F ratio comparing the nonlinear and residual sums of squares provides a test for linearity.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lackOfFit4')\">4. Contrasts for testing linearity</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The g-group model that allows for arbitrary response means at each x can be parameterised in a way that makes the test for linearity equivalent to testing whether the coefficients of (g-2) indicator variables are zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lackOfFit5')\">5. Comparison of tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The quadratic test is more likely to detect 'smooth' nonlinearity. The test based on the factor model is better at detecting more irregular types of nonlinearity, including those that can arise from badly randomised experiments.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lackOfFit6')\">6. Goodness-of-fit for other models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In experiments where there are repeated response measurements at different x-z combinations it is possible to perform a more general anova test about the fit of a model. This can detect both curvature and interaction.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
