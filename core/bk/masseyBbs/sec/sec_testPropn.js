var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tests about probabilities &amp; propns</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn_c1')\">1. Inference about categorical populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the data are a random sample, the null and alternative hypotheses are usually expressed in terms of population parameters. For categorical samples, the hypotheses refer to the probabilities of the categories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn_c2')\">2. P-value for testing proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value for testing a proportion is the probability of getting such an 'extreme' number of successes when the null hypothesis holds. It can be found from the binomial distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn_c3')\">3. Another example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows how to use a binomial distribution to find the p-value for a test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn_c4')\">4. One- and two-tailed tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If values in both tails of the binomial distribution support the alternative hypothesis, the tail probability must be doubled to give the p-value for the test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn5')\">5. Tests based on normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the sample size is large, a normal approximation to the binomial distribution can be used to find the p-value for a hypothesis test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPropn1')\">6. Exercise: Test using binomial distribution</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise in this page asks you to use a binomial distribution to perform a hypothesis test about a population proportion and interpret the results.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPropn2')\">7. Exercise: Test with normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise in this page uses a normal approximation to find the p-value for the above test.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
