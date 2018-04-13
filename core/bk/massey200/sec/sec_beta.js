var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Beta distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('beta1')\">1. Values between zero and one</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sometimes the value of a random variable must lie between zero and one. The family of Beta distributions is flexible enough to model many such variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('beta2')\">2. Mean and variance</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proofs not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and variance of the Beta distribution are derived.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
