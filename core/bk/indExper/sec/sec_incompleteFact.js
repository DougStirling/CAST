var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('incompleteFact1')\">1. Screening experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many studies with a high number of potential factors, an initial experiment is conducted to identify which factors are most important.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('incompleteFact2')\">2. Cost of complete factorial design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The number of runs for a complete factorial design increases exponentially with the number of factors. Even a single replicate can be prohibitively expensive if there are many factors. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('incompleteFact3')\">3. Designs with fewer runs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>There are experimental designs that for a subset of the runs needed for a complete factorial experiment. Such a design should ensure that all factors are orthogonal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('incompleteFact4')\">4. Problems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there are fewer runs than required for a complete factorial, it is impossible to independently estimate all possible interactions between factors -- some interactions get mixed up (confounded) with main effects and other interactions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
