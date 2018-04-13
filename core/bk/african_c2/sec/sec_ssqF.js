var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Sums of squares and F test</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup_b3')\">1. Revisiting two groups</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Earlier CIs and tests for equality of two group means can be improved when the group standard deviations are known to be the same. However this refinement is not recommended for general use.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup4')\">2. Variation between and within groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Both variability between group means and variability within groups must be used to assess whether the groups differ.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup5')\">3. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variability within groups and between groups are described by sums of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup_b6')\">4. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The coefficient of determination (R-squared) is the ratio of the between-groups and total sums of squares. It is the proportion of variation that can be explained by differences between the groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup7')\">5. Test for differences between groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The F-ratio is a test statistic that is based on the between- and within-groups sums of squares. The associated p-value tests whether all groups have the same mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup_b8')\">6. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The F-test is applied to a few data sets.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
