var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simple linear models</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>This section describes the distributions of the explained and residual sums of squares in simple regression and demonstrates that the F ratio in an anova table has an F distribution if the true regression slope is zero.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnAnovaDist1')\">1. Distributions of sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The residual sum of squares has a chi-squared distribution with (n - 2) d.f. The explained sum of squares only has a chi-squared distribution (1 d.f.) if Y is unrelated to X -- its distribution has a higher mean otherwise.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnAnovaDist2')\">2. F ratio</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The ratio of the mean explained and mean residual sums of squares has an F distribution with (1, n-2) d.f. if Y is unrelated to X. The F ratio is expected to be higher if the variables are related.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnAnovaDist3')\">3. Analysis of variance test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The F ratio can be used to test whether the variables are related (i.e. to test whether the model slope is zero).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
