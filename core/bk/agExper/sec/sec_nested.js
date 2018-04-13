var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Nested experiments</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nested1')\">1. Nested design: a factor at block level</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In some experiments, a factor is varied at block level so all experimental units in a block get the same factor level. The factor is then confounded with blocks so a conventional analysis of variance cannot be used to test its effect.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nested2')\">2. Sums of squares for nested design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In analysis of variance for a nested design, the factor effect must be removed before the block effect instead of after it. The relative sizes of the factor and block sums of squares give evidence for whether the factor affects the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nested3')\">3. Anova for nested design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A test for the factor effect involves the ratio of the mean sum of squares explained by the factor and the mean sum of squares between blocks (within the factor levels). This F-ratio and its p-value can be interpreted in the usual way.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nested4')\">4. More levels of nesting</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The experimental units may be structured in a hierarchy of more than two levels. The effect of a factor should be assessed by comparing its explained sum of squares with the sum of squares between blocks at the level at which it is applied.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nested5')\">5. Analysis of block totals or means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value for the F-test described above is identical to the p-value that would be obtained from a simple analysis of the block means or the block totals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('nested6')\">6. More blocks or more measurements per block?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Both increasing the number of blocks and the number of measurements per block improve accuracy of estimating the factor effect. The relative variability of the blocks and the values within the blocks determine the best balance when designing an experiment.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
