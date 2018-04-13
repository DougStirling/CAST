var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Paired t test</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPaired_b1')\">1. Analysis of differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tables of differences for the examples above, and translation of hypotheses about equal means into hypotheses about the mean difference.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPaired_b2')\">2. Benefits of pairing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing that the distributions of X and Y can overlap considerably, but there can be strong evidence from the differences that the means are not the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPaired3')\">3. Paired t-test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Examples of a one-tailed and a two-tailed test for paired data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPaired4')\">4. Pairing and experimental design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that more accurate comparison of two group means is possible if matched pairs of individuals are sampled as rather than independent samples from the two groups.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
