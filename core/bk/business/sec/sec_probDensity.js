var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probability &amp; probability density</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity1')\">1. Finite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When randomly selecting one value from a population of N different values, the probability of getting any individual value is 1/N. More generally, the probability of sampling a value in any range is the proportion of population values in the range.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity_c2')\">2. Probabilities with infinite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The probability of any type of value is again the proportion of such values in the population. It can also be interpreted as the limiting proportion from a sample of values if the sample size is increased indefinitely.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity3')\">3. Bar charts of discrete probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Infinite categorical or discrete populations can be described by bar charts of the probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity4')\">4. Probability density functions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Infinite continuous numerical populations are described with a type of histogram called a probability density function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity_c5')\">5. Normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Normal distributions are infinite continuous populations. A normal distribution is symmetric and its two parameters, &micro; and &sigma;, can be adjusted to alter the distribution's location and spread.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity6')\">6. Probability and area under the pdf</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When a value is sampled from an infinite continuous population, the probability that it is between a and b equals the area under the p.d.f. between these two values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity_c7')\">7. Properties of probability</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page describes some rules that are obeyed by probabilities.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
