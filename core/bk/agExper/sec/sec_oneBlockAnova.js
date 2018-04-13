var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Anova for randomised blocks</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlockAnova1')\">1. Model for randomised blocks</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The simplest model for a single factor in a randomised block design is very similar to the model without interaction for designs with two factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlockAnova2')\">2. Explained sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Adding terms to the model for blocks and for the factor reduce the residual sum of squares. Each reduction is the sum of squared differences between the fitted values from two models.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlockAnova3')\">3. Removing the block effect</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The explained sums of squares for blocks is the sums of squared differences between the block means and overall mean. The treatment sum of squares is similarly the sum of squared differences between the treatment and overall means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlockAnova4')\">4. Removing block and factor effects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Adding a term for blocks to the model can be thought of as adjusting the values to make all block means equal. The residuals from the full model can be thought of as a further adjustment to make all treatment means equal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlockAnova5')\">5. Anova table and examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An anova table shows these sums of squares and associated degrees of freedom. The F-ratio for treatments in the table is the basis of a test for equal treatment means. Several examples are given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlockAnova6')\">6. Model assumptions and trandformation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The anova table test for equal treatment means is based on a model that makes assumptions about the data. When the unexplained response variation is not constant, a transformation of the response may fit the model better.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneBlockAnova7')\">7. Confidence intervals for treatment means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If it is concluded that all treatment means are not equal, confidence intervals can be used to report the differences.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
