var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Interaction</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('interact1')\">1. Additivity of effects of X and Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In the models in previous sections, the effect of X on Y was the same for all values of Z and similarly the effect of Z on Y was the same, whatever the value of X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('interact2')\">2. Interaction between X and Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Interaction between X and Z occurs when the effect on Y of increasing X is different for different values of Z. Adding a term in XZ to the model may explain the interaction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('interact3')\">3. Inference for models with interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A t-test for whether the coefficient of XZ is zero provides a simple test for interaction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('interact4')\">4. Tranformations and interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The existence and amount of interaction is affected by nonlinear transformations of the response. Sometimes analysing the log response can remove interaction, making the results easier to interpret.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('interact5')\">5. Example (nonlinearity and interaction)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this page, a data set that has both curvature and interaction is analysed.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
