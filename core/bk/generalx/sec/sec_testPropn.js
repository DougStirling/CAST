var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tests about proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPropn1')\">1. P-value for testing proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram performs a simulation to find the p-value for testing a proportion, then evaluates the exact p-value using a binomial distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPropn2')\">2. Another example of testing a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the binomial distn for the number of successes (under H<sub>0</sub>). A slider adjusts the observed number of successes and shows the resulting p-value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPropn3')\">3. Two-tailed tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram also shows the binomial distn for the number of successes (under H<sub>0</sub>). The slider for the number of successes highlights the smaller tail area and doubles this to give the p-value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testPropn4')\">4. Tests based on normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram uses a simulation to find the p-value for testing a proportion. The simulated distribution can be replaced by a normal approximation to the theoretical binomial distribution and can be used to obtain the p-value for a test.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
