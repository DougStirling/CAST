var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Interaction between factors</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorInteract_i1')\">1. Model without interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If two factors do not interact in their effect on the response, the effects of each can be separately described.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorInteract_i2')\">2. Interaction between factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A model in which two factors interact in their effect on the response has a separately adjustable mean for each combination of factor levels. The model can be written using 'main effect' parameters for the two factors and an interaction term.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorInteract_i4')\">3. Test for interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Comparing the mean interaction sum of squares against the mean residual sum of squares gives a test for whether there is interaction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorInteract5')\">4. Reporting results</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If it is concluded that there is no interaction, the results can be summarised in separate plots of the mean response against X and Z. If there is interaction, the model means for all treatment combinations must be shown in profile plots. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorInteract_i6')\">5. Experiments with a single replicate</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there is only a single replicate for each treatment in a factorial experiment for two categorical factors, the effects of the factors can be tested if it is assumed that there is no interaction, but the existence of interaction cannot be tested.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorInteract7')\">6. Tranformations and interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The existence and amount of interaction is affected by nonlinear transformations of the response. Sometimes analysing logarithms of the response values can remove interaction, making the results easier to interpret.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
