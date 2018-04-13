var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Randomised blocks</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randBlock1')\">1. Importance of using block information</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The examples on this page initially show 95% CIs for differences between the control level and other treatments ignoring the blocks. The diagram shows that by analysing differences within blocks, the 95% CIs are narrower giving clear evidence of differences between the treatments.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randBlock2')\">2. Randomised block examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three data sets are shown where there is no baseline treatment against which to compare the others. The anova table for equality of treatment means ignoring blocks is shown and contrasted with the corresponding p-value when block information is used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randBlock3')\">3. Model for randomised blocks</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 3-dimensional display of randomised block data shows the symmetry between the way that blocks and treatments are modelled.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randBlock4')\">4. Removing block effects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that adjustment of all blocks to have the same mean reduces the residual (unexplained) sum of squares. (It gives an approximate anova table with the correct sums of squares but wrong residual degrees of freedom.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randBlock5')\">5. Explained sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the components whose sums of squares are the sums of squares explained by blocks and treatments.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randBlock6')\">6. Residual sum of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, it is possible to subtract block and treatment effects from the data values, resulting in the residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randBlock7')\">7. Anova table and examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The anova table is shown for several randomised block data sets. The p-values are interpreted for each.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
