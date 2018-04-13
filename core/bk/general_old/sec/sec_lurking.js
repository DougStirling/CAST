var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.gif' width='31' height='31'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.gif' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Marginal relationships</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>You can reach the wrong conclusions by analysing two variables on their own. The apparent relationship may be caused by one or more further variables.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking1')\">1. Misleading marginal correlation</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Variables Y and X may be positively correlated overall, but have zero or even negative correlation at each value of a categorical variable, Z. The variable Z is called a lurking (or hidden) variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking2')\">2. Misleading marginal difference in means</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>A lurking variable can also distort the difference between the means of Y in two groups (i.e. for two values of a categorical variable, X).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking3')\">3. Simpsons paradox</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>If X, Y and Z are all categorical, a reversal of the marginal relationship between X and Y and their conditional relationships for different values of Z is called Simpson's paradox.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking4')\">4. Other examples with lurking variables</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>A few extra examples are shown where a hidden variable, Z, can result in a misleading conclusion from the marginal relationship. A full analysis using Z is always more complex but is essential to understand the relationship.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
