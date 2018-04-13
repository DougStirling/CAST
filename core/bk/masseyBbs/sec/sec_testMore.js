var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>More about testing</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('decision1')\">1. Hypothesis tests and decisions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many applications, a different action is taken if the null hypothesis is 'accepted' or 'rejected'. Two different types of error are possible from such a decision — accepting the null hypothesis when it is false, or rejecting it when it is true.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('decision3')\">2. Decisions and p-values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many tests are conducted with a pre-specified probability of a Type I error — the significance level. The null hypothesis is rejected if the p-value for the test is lower than the significance level.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue5')\">3. P-values for other tests</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>P-values have the same properties and interpretation for all tests. A test for whether a population has a normal distribution is used as an example.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPValue1')\">4. Exercise: Interpret a p-value</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value for any hypothesis test can be interpreted in terms of the strength of evidence against the null hypothesis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPValue2')\">5. Exercise: Interpret p-value in context</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives the p-value for a test and asks you to pick the correct conclusion, worded in terms of the problem context.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPValue3')\">6. Exercise: Interpret p-value (harder)</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is similar to the previous one but the wordings of the options makes it harder to pick the correct conclusion.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
