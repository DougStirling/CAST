var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing several means</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiGroup1')\">1. Model with common standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a 3-dimensional diagram of normal distributions in 3 groups. The normal parameters can be changed (with sliders) and their standard deviations can be constrained to be equal. Samples from the model can be selected and displayed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiGroup2')\">2. Estimate of common standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates the formula for the pooled estimate of the common variance. The group sizes can be the same or can be different.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiGroup_c3')\">3. Inference about two groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows a few examples of 95% CIs for the difference between two group means. The calculations are done both with a pooled estimate of the sd and with separate estimates from the two groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiGroup4')\">4. Assessing differences between groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The diagram on this page allows variation between and within groups to be altered with sliders. It is used to explain that the strongest evidence of a difference is when between-group variation is large and within-group variation is small.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiGroup5')\">5. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram explains the total, between-groups and within-groups sums of squares by drawing lines on the scatterplot for each whose sum of squares gives the ssq. The proportion of explained variation can be altered with a slider.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiGroup_c6')\">6. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few examples show how R-squared is calculated from the analysis of variance table and give its interpretation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiGroup7')\">7. Test for differences between groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows data from several groups and the corresponding analysis of variance table. The proportion of explained variation can be adjusted with a slider, showing how the F-ratio and p-value change.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiGroup_c8')\">8. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this page, the F-test is applied to a few data sets and the resulting p-value is interpreted.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
