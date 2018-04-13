var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Interaction between blocks and factor</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockInteract1')\">1. Varying factor effect</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the blocks are very different from each other, the factor may have a different effect within different blocks. This is called interaction between the block and factor.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockInteract2')\">2. Interaction sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Interaction between the effect of blocks and the factor is modeled with an interaction term in the same way as the interaction between two factors. It reduces the residual sum of squares by an amount equal to the sum of squared differences between the fitted values for the models with and without the term.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockInteract3')\">3. Anova test for interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The explained and residual sums of squares can be presented in an analysis of variance table. The interaction sum of squares is used to test for whether the effect of the factor is the same in all blocks.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
