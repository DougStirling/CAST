var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exponential distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('exponential1')\">1. Time until first event</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The time until the first event of a homogeneous Poisson process has an exponential distribution. Its pdf is derived.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('exponential2')\">2. Other exponential probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exponential distribution has a 'memoryless' property — knowing that there were no events up to time t gives no information about when events will happen in the future.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('exponential3')\">3. Gamma functions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page describes some properties of gamma functions, a generalisation of factorials. Gamma functions will be used later in the e-book.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('exponential4')\">4. Mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exponential distribution's mean and variance are derived.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('exponential5')\">5. Maximum likelihood</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The maximum likelihood estimate of the exponential distribution's parameter, λ, is the inverse of the sample mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('exponential6')\">6. Confidence intervals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An approximate formula for the standard error of the MLE of λ is derived and used to find a confidence interval.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
