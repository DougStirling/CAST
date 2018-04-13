var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Variation and groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation2')\">1. Standard deviation of grouped data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In data sets that consist of different groups, the overall standard deviation is often much higher than the standard deviations within groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation3')\">2. Explained and unexplained variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Overall variation is partly explained by differences between groups, but some variation (within groups) remains unexplained. Because some variation is explained by the groups (and unexplained variation is reduced), the grouping allows you to predict a new value more accurately.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup_a4')\">3. Variation between and within groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The relative size of within- and between-group variation indicates whether the groups really differ.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup5')\">4. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variability within groups and between groups are described by sums of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup_a6')\">5. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The coefficient of determination (R-squared) is the ratio of the between-groups and total sums of squares. It is the proportion of variation that can be explained by differences between the groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup_a7')\">6. Analysis of variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean total and within-group sums of squares are closely related to the overall standard deviation and the standard deviations within the groups. They are often arranged in an analysis of variance table.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
