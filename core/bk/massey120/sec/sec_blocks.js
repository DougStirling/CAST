var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Experiments with blocks</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockIntro1')\">1. Variability of experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In most experiments, the experimental units that are available differ from each other and this variability results in less accurate estimates of the effect of the treatment.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockIntro2')\">2. Blocks of similar experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>There is often enough information about differences between the experimental units before the experiment begins to allow them to be grouped into similar blocks of units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlock1')\">3. Randomised block design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the experimental units have been grouped into similar blocks, a randomised block design randomly allocates treatments separately within each block.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlock2')\">4. Randomised block examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows a few data sets from randomised block experiments.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlock3')\">5. Comparison of designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Randomised block designs result in more accurate estimates of the effects of the factors of interest than in a completely randomised experiment with the same experimental units.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
