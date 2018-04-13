var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Anova in simple settings (optional)</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>This section takes an anova approach to testing whether the mean of a normal population equals a specified value and shows that this is equivalent to the standard t-test. It also shows an anova table for testing whether two group variances are equal.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleAnova1')\">1. Different approach to testing mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two component sums of squares can be used to test the value of the population mean. The ratio of the mean sums of squares has an F distribution if the null hypothesis holds.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleAnova2')\">2. P-value for F test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value for the test is the upper tail area of the F distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleAnova3')\">3. Equivalence of F and t tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The F test based on the anova table results in the same p-value and conclusion as a t test for the hypotheses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleAnova4')\">4. Components sums of squares for two groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Components can be defined whose sums of squares hold information about the difference between the group means, the variability within group 1 and the variability within group 2.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleAnova5')\">5. Testing for equal  group variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sums of squares of the two within-group components lead to the same F test that was described in an earlier section for whether the group variances are equal.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
