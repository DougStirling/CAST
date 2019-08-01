var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Randomised blocks</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock1')\">1. Generalising the idea of paired data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In some data sets, the values arise in blocks of 3 or more related measurements. Randomised block and repeated measure data are of this form.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock2')\">2. Example with baseline treatment</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ignoring the blocking of values loses important information about the difference between treatments. Comparing treatments separately against a baseline treatment using paired differences may be possible.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock3')\">3. Use of blocking information</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there is no baseline treatment against which to compare the other measurements in each block, it is possible to simultaneously test whether all treatment means are equal. Again, ignoring the blocks loses important information.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock4')\">4. Randomised block designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Data of this form often arises from a randomised block experiment in which the experimental units occur in related blocks and treatments are randomly allocated within each block.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock5')\">5. Model for randomised blocks</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Although blocks and treatments arise in different ways, they are modelled similarly. A 3-dimensional display of the data represents both blocks and treatments in the same way.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock6')\">6. Removing block effects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The variation between blocks can be removed by adding/subtracting a value to each block to make all block means equal. This reduces the residual (unexplained) sum of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock7')\">7. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The total sum of squares can be split into sums of squares for blocks and treatments, and a residual sum of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randBlock8')\">8. Anova table and examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An anova table shows these sums of squares and associated degrees of freedom. The F-ratio for treatments in the table is the basis of a test for equal treatment means. Several examples are given.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
