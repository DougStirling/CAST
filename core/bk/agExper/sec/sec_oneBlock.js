var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Randomised blocks</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlock1')\">1. Randomised block design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the experimental units have been grouped into similar blocks, a randomised block design randomly allocates treatments separately within each block.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlock2')\">2. Randomised block examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows a few data sets from randomised block experiments.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlock3')\">3. Comparison of designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Randomised block designs result in more accurate estimates of the effects of the factors of interest than in a completely randomised experiment with the same experimental units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlock4')\">4. Confidence intervals for differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there is a control treatment and a single replicate in each block, treatments can be compared to the control with CIs of the form described in the previous section. They are narrower than the corresponding CIs that take no account of the blocks.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlock5')\">5. Removing block effects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The variation between blocks can be removed by adding/subtracting a value to each block to make all block means equal. This reduces the residual (unexplained) sum of squares in a simple anova table.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
