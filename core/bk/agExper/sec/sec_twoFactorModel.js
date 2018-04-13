var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Model and parameters</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorModel1')\">1. Normal model for two factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The response is modelled using a normal distribution whose mean depends on the factor levels and whose standard deviation is the same for all treatments.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorModel_b2')\">2. Additive model for treatment means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean response can be modelled as the sum of two terms, each depending on one of the two factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorModel3')\">3. Parameterisations for model with one factor</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The response means for the factor levels can be expressed using the mean for a base factor level and differences for the other factor levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoFactorModel_b4')\">4. Parameters for two factor model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The response mean can be modelled as the sum of three terms, the mean at base levels of both factors and two terms reflecting the effect of changing the levels of the two factors.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
