var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probability</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity1')\">1. Finite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a bar chart of a finite categorical population. Clicking any bar labels it with the probability that a single sampled value is that category -- i.e. the bar height.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity2')\">2. Probabilities and population proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates that the population proportion of values in a range equals the probability for a single value. A range of values on the population dot plot can be highlighted and is labeled both as a proportion and probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity3')\">3. Law of large numbers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, the sample size can be increased, showing that a sample proportion tends to a limit (the probability) as the sample size increases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity4')\">4. Bar charts of discrete probabilities &mdash; discrete</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows how a bar chart becomes more stable when the sample size increases. The limiting bar chart gives the population probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density5')\">5. Relative frequency and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing that area = relative frequency.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
