var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Fractional designs in blocks</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fractionalBlock1')\">1. Factorial experiments in two blocks</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The treatments in a complete factorial design for factors with 2-levels can be split into two blocks by confounding the blocks with a high-order interaction between the factors. All factor main effects and other interactions can still be estimated if it is assumed that the blocks do not interact with the factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fractionalBlock2')\">2. Partial confounding</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>By repeating the design on the previous page with blocks that are defined by a different interaction between the factors, all main effects and interactions can be estimated. However the interactions used to define the blocks are estimated with lower accuracy than the main effects or interactions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fractionalBlock3')\">3. Factorial experiments in four blocks</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The blocks can be defined by picking two high-order interactions to be aliased with the blocks. However the interaction between these 2-level blocking factors is also confounded with factors so care must be taken that the main effects of all factors can still be estimated.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
