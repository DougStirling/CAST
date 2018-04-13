var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Split plot designs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('splitPlot1')\">1. Split plot design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a split plot design, one factor is varied at block level and a second factor is varied within blocks.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('splitPlot2')\">2. Anova for split plot design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of squares for the factor that is varied at block level should be compared to the sum of squares describing variation between blocks, but the sum of squares for the factor that is varied within blocks should be compared to the residual sum of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('splitPlot3')\">3. Interaction between factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of squares for interaction between the factors should be tested against the residual sum of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('splitPlot4')\">4. Summarising factor effects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the factor that is varied within blocks uses the same mixture of levels within each block, raw means for the factor levels summarise the factor effects.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('splitPlot5')\">5. Three levels of blocking</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The experimental units are sometimes structured in a hierarchy with more than two levels (e.g. blocks, plots and sub-plots). Factors may be varied at any level and should be tested against 'residual' variation at that level.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('splitPlot6')\">6. Another example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example is analysed involving experimental units in a four-level hierarchy.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('splitPlot7')\">7. Design issues</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The effect of any factor is more accurately estimated if it is varied at the lowest level of the hierarchy of experimental units.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
