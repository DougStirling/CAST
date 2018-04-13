var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Geometric distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('geometric1')\">1. Geometric random variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The number of Bernoulli trials until the first success has a geometric distribution. Its probabilitiy function is found.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('geometric2')\">2. Cumulative distribution function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The probability of a value less than or equal to x has a particularly simple formula.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('geometric3')\">3. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example is described that relates to the number of times a six-sided die must be rolled until the first six is observed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('geometric4')\">4. Mean and variance</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proofs not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formulae for the mean and variance of the geometric distribution are derived.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
