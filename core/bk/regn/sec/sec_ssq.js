var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution of variance</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>This section describes a little theory that underlies analysis of variance.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ssq1')\">1. Distribution of Z-squared</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The square of a standard normal variable has a chi-squared distribution with 1 degree of freedom.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ssq2')\">2. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of n squared standard normal variables has a chi-squared distribution with n d.f.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ssq3')\">3. Sum of squares about sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Differences between values and the population mean can be written as the sum of two components and their sums of squares satisfy a similar relationship. This shows that the sum of squares about the sample mean is less than or equal to that about the population mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ssq4')\">4. Sums of squares tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of squares about the population mean can be split in different ways into component sums of squares with chi-squared distributions. The sum of squares about the sample mean has (n-1) degrees of freedom and its mean sum of squares is the sample variance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ssq5')\">5. Ratio of variances and F distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The ratio of two independent sample variances (or mean sums of squares) has an F distribution whose degrees of freedom are those of the two variances.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ssq6')\">6. Overview of analysis of variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of squares about the sample mean can often be further split into component sums of squares. Comparison of the corresponding mean sums of squares can be used to test whether the model underlying the data has certain characteristics. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ssq7')\">7. Summary of anova distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page summarises the most important results from the section. </dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
