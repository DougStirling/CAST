var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Information at two levels</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bibInter1')\">1. Information at block and unit levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If treatments are varied at block level, all information about treatment differences is contained in the block means. If treatments are orthogonal to blocks, all information about treatment differences is held by differences within blocks. Other experimental designs have information at both levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bibInter2')\">2. Intra- and inter-block estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The usual estimates of treatment effects from differences within blocks are called intra-block estimates. A second set of estimates called inter-block estimates can be found by least squares from the block means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bibInter3')\">3. Combining estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The inter- and intra-block estimates can be combined to give a more accurate set of parameter estimates but the improvement over the intra-block estimates is usually small.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bibInter4')\">4. Another example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page combines the inter- and intra-block estimates for a balanced lattice design.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bibInter5')\">5. Analysis of variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In an analysis of variance table, treatment sums of squares can be separated from the sums of squares at both block and unit level and these provide two independent tests of the effect of the treatments. The unit-level test is usually more powerful.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
