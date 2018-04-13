var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probability density functions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('densityCopy5')\">1. Relative frequency and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a histogram, the proportion of the total area that is above any class equals the relative frequency of the class.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity4')\">2. Probability density functions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Infinite continuous numerical populations are described with a type of histogram called a probability density function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity5')\">3. Normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Normal distributions are infinite continuous populations. A normal distribution is symmetric and its two parameters, &micro; and &sigma;, can be adjusted to alter the distribution's location and spread.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity6')\">4. Probability and area under the pdf</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When a value is sampled from an infinite continuous population, the probability that it is between a and b equals the area under the p.d.f. between these two values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim4')\">5. Exercise: Estimate probability from pdf</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, probabilities are obtained from the areas under a probability density function.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
