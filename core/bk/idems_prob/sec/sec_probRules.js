var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probability calculations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probRules1')\">1. Core rules of probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All definitions of probability satisfy three main properties called axioms. Basing probability on these axioms means that we rarely need to distinguish between the different definitions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probRules2')\">2. A few properties of probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows a few important results about probability that can be derived from the three axioms.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probRules3')\">3. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two examples show how probabilities can be calculated from the axioms.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
