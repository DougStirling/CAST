var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Properties of p-values</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPValue_c1')\">1. Null and alternative hypotheses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between a null and alternative hypothesis is discussed. A diagram shows how sample data affect the conclusions reached.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPValue_c2')\">2. P-value and consistency with null hypothesis</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing that a p-value is an 'index of credibility' for the null hypothesis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPValue3')\">3. Distribution of p-values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulation showing that all p-values between 0 and 1 are equally likely when the null hypothesis is true. When the alternative hypothesis is true, p-values near 0 are more likely.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPValue_c4')\">4. P-values for other tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulation showing distn of p-values for Shapiro-Wilkes test of normality.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
