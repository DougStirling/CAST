var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Analysis of variance</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorAnova1')\">1. Variation between and within treatments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The evidence for a difference between the response mean for different levels of the factor depends on both variation between the treatment means and also variation within each treatment.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorAnova2')\">2. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Explained variation is summarised by a sum of squares involving only the treatment and overall means. Unexplained variation is summarised by the residual sum of squares and is found from differences between values and their treatment means. Their sum is the total sum of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorAnova_b3')\">3. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The coefficient of determination is the ratio of the explained sum of squares to the total sum of squares. It is a proportion between 0 and 1 and summarises the strength of the relationship between the factor and the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorAnova4')\">4. Test for differences between levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sums of squares and their degrees of freedom can be arranged in an analysis of variance table from which a p-value can be calculated to test whether the factor affects the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorAnova_b5')\">5. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows analysis of variance tables for a few data sets and describes the conclusions that should be reached.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
