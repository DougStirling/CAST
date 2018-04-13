var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Model and analysis of variance</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorModel1')\">1. Normal model for two factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The response is modelled using a normal distribution whose mean depends on the factor levels and whose standard deviation is the same for all treatments.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactor2')\">2. Transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the response does not have a similar spread of values for all treatments, a nonlinear transformation of the response such as a logarithmic transform may help.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorModel_i2')\">3. Additive model for treatment means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean response can be modelled as the sum of two terms, each depending on one of the two factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactor4')\">4. Model for categorical factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The no-interaction model for two categorical factors uses parameters for each factor level of each except for the factor's 'baseline' level.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorAnova_i2')\">5. Sequence of models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When terms are added to a model for the response, the residual sum of squares usually decreases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorAnova_i3')\">6. Explained sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The reductions in the residual sum of squares are called explained sums of squares. The explained sums of squares also summarise how the fitted values change when terms are added to the model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorAnova4')\">7. Sum of squares table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the experimental design is balanced, all explained sums of squares can be shown in a single table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorAnova_i5')\">8. Analyisis of variance tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The explained sums of squares form the basis of an analysis of variance table that can be used to test the significance of the two factors in the model.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
