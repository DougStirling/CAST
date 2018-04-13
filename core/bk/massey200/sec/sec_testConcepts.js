var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Hypothesis test concepts</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>This section summarises the general methodology about hypothesis tests that should already be understood from 100-level statistics.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testConcepts1')\">1. Inference</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Estimation and hypothesis testing are different branches of inference about the parameters in statistical models.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testConcepts2')\">2. Null and alternative hypotheses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Hypothesis tests compare two claims about the model parameters, the null and alternative hypotheses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testConcepts3')\">3. Test statistic</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A test statistic is a function of the data whose value is likely to be more &quot;extreme&quot; in some sense when the alternative hypothesis is true than when the null hypothesis is true. Its distribution should also be fully known when the null hypothesis holds.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testConcepts4')\">4. P-value and its interpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value for a test is the probability of as &quot;extreme&quot; a test statistic as the one that was observed, when the null hypothesis holds.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testConcepts5')\">5. Two-tailed tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When values of the test statistic at both ends of its distribution favour the alternative hypothesis, the test is called two-tailed. The p-value is double the smaller tail probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testConcepts6')\">6. Distribution of p-values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the null hypothesis holds, the p-value has a rectangular distribution between 0 and 1. When the alternative hypothesis is true, the p-value's distribution has greater probability of being near 0.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
