var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Testing regression parameters</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnTest1')\">1. Importance of zero slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Demonstration that zero slope means that X does not affect Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnTest2')\">2. Uncertainty about whether slope is zero</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that the least squares slope is usually not zero even if the underlying model slope is zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnTest3')\">3. T-test examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The diagram shows how the p-value for testing zero slope is found for a few data sets and it gives an interpretation of the test results.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnTest4')\">4. Strength of evidence and relationship</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a static diagram that can be used to help discuss the different interpretations of the correlation coefficient and the p-value for testing for zero slope.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnTest5')\">5. Properties of p-values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation illustrates that the p-value for testing zero slope is rectangularly distributed between 0 and 1 if the model slope is zero, but is usually closer to 0 if the model slope is nonzero.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
