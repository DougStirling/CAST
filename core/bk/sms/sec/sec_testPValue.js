var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Properties of p-values</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Understanding the properties of p-values allows you to interpret the results of a wide range of hypothesis tests, even if you do not know the details of how the p-values were obtained.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue_c1')\">1. Null and alternative hypotheses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Hypothesis tests ask whether the sample data are consistent with a statement about the parameters called the null hypothesis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue_c2')\">2. Consistency with null hypothesis</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A p-value is a numerical measure of whether the sample data are consistent with the null hypothesis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue4')\">3. Interpretation of a p-value</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A p-value is the probability of getting such 'extreme' data when the null hypothesis holds.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
