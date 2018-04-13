var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Analysis of variance</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorAnova_b1')\">1. Do the factors affect the response?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Confidence intervals for the parameter estimates help to understand the data but a formal test is needed to test whether each factor affects the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorAnova_b2')\">2. Sequence of models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When terms are added to a model for the response, the residual sum of squares usually decreases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorAnova_b3')\">3. Explained sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The reductions in the residual sum of squares are called explained sums of squares. The explained sums of squares also summarise how the fitted values change when terms are added to the model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorAnova_b4')\">4. Sum of squares table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If each treament is used with the same number of experimental units (so the factors are orthogonal), all explained sums of squares can be shown in a single table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorAnova_b5')\">5. Analyisis of variance tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The explained sums of squares form the basis of an analysis of variance table that can be used to test the significance of the two factors in the model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorAnova6')\">6. Formulae</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simple formulae for the explained sums of squares in an orthogonal design help to explain their interpretation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
