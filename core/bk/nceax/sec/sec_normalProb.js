var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal probabilities</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_correlation2')\">1. Units-free variables (z-scores)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates how z-scores are found and interpreted.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn5')\">2. Z-scores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how a probability about X can be translated into one about a z-score.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn6')\">3. Probabilities from z-scores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how to translate a question into one involving a z-score.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn7')\">4. Finding other normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows templates that can be used to find probabilities that X is less than or greater than a constant, and between two constants.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn8')\">5. Finding normal quantiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows a diagram using a 'trial and error' method based on x &rarr; z &rarr; prob. An alternative diagram shows how to find prob &rarr; z &rarr; x directly.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
