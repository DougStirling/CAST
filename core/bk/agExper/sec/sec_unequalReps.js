var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Unequal replicates</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('unequalReps1')\">1. Missing values with a single factor</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If some response measurements are missing, the ordinary analysis of variance table can still be used to test whether the level means are equal, provided the probability of a missing value is unrelated to the response that would have been obtained.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('unequalReps2')\">2. Unequal replicates by design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a factor has a control level, it is sometimes replicated more than the other factor levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('unequalReps3')\">3. Orthogonal designs for two factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If all treatments have the same replicates, the sums of squares for the two factors do not depend on the order of adding them to the model. The same holds provided the replicates for each level of X are in the same proportion for each level of Z.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('unequalReps4')\">4. Anova for non-orthogonal factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If two factors are not orthogonal, there are different analysis of variance tables for the two orders of adding the factors. Both must be examined to fully understand the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('unequalReps5')\">5. Orthogonal factor and blocks</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Provided the replicates of a factor in each block are in proportion, the blocks and factor are orthogonal. However this is less important since blocks are always added to the model before the factor so only a single anova table need be considered.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('unequalReps6')\">6. Missing treatments and confounding</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This section has only considered data with at least one replicate for every treatment. Missing treatments mean that some effects cannot be estimated. In extreme cases, it is impossible to distinguish the effects of different factors -- they are confounded.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
