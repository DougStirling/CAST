var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probability</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity1')\">1. Finite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When randomly selecting one value from a population of N different values, the probability of getting any individual value is 1/N. More generally, the probability of sampling a value in any range is the proportion of population values in the range.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity2')\">2. Probabilities with infinite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The probability of any type of value is again the proportion of such values in the population. It can also be interpreted as the limiting proportion from a sample of values if the sample size is increased indefinitely.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity3')\">3. Bar charts of discrete probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Infinite categorical or discrete populations can be described by bar charts of the probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density5')\">4. Relative frequency and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a histogram, the proportion of the total area that is above any class equals the relative frequency of the class.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim2')\">5. Exercise: Probabilities and finite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A finite categorical population is shown as a bar chart and the probability of a randomly sampled value being in a range of categories must be found.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim3')\">6. Exercise: Probabilities and numerical population</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is simlar to the one on the previous page but relates to a numerical population that is summarised by a histogram. The probability must be estimated roughly 'by eye' from the area under the histogram.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
