var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Gamma distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('gamma1')\">1. Distribution for positive variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The Gamma distribution is another two-parameter distribution that can be used for variables whose values cannot be negative. Its parameters give it similar flexibility in shape to the Weibull distribution but its upper tail is longer.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('gamma2')\">2. Gamma probabilities and quantiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>There are no formulae for cumulative probabilities or quantiles of Gamma distributions, but they can be easily evaluated with computer software such as Excel.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('gamma3')\">3. Some Gamma distribution properties</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The Gamma distribution's mean and variance are derived. Adding two Gamma variables whose second parameters are equal also has a Gamma distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
