var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Design and estimates</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactor1')\">1. Completely randomised experiment</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a completely randomised experiment for a single factor, the different levels of the factor are randomly allocated to the pool of experimental units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactor_b2')\">2. Treatment means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean responses at the different factor levels give a summary of the response variation that has been explained by the factor.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactor3')\">3. Normal model for variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>To fully interpret differences between the treatment means, unexplained variation must also be taken into account. Both explained and unexplained variation can be modelled using a normal model with separate terms for these two types of variation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactor4')\">4. Describing unexplained variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The amount of unexplained variation is given by the standard deviation of the error term in a normal model. A pooled estimate can be found by combining the observed standard deviations within the separate factor levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactor5')\">5. Confidence intervals for treatment means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>95% confidence intervals for the treatment means take unexplained variation into account and make it easier to compare the factor levels.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
