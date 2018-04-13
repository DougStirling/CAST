var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Likelihood ratio test</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>The likelihood ratio test is a general method of performing a hypothesis test that can be applied to many different problems.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('likelihoodRatio1')\">1. Big model vs small model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>We often want to compare two models for data where one model (the small model) is a special case of the other (the big model).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('likelihoodRatio2')\">2. Likelihood ratio</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The ratio of the maximum possible likelihoods under the big and small models gives information about whether the small model fits adequately.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('likelihoodRatio3')\">3. Likelihood ratio test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The likelihood ratio test is based on twice the log of the likelihood ratio. An approximate p-vaue can be found from a chi-squared distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('likelihoodRatio4')\">4. Another example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example uses the likelihood ratio test to assess whether the rate parameters of two exponential distributions are equal.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
