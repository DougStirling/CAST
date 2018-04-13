var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Infinite populations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn_c1')\">1. Data as representatives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>We often have little interest in the specific individuals from whom data are collected. The data are representative of some wider situation and we want to generalise from the data to describe features of this more general situation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn_c2')\">2. Randomness of data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If data collection was repeated, perhaps from different individuals, the values would be different. All such data sets should give similar but not identical information. Interpretation of a data set should take into account this randomness.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn_c3')\">3. Model to explain randomness</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many data sets are not generated as random samples from real finite populations. However it is often useful to treat the data as a random sample from some abstract population containing the measurements that might have been recorded.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn4')\">4. Infinite populations (distributions)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The populations that are imagined to underly data often contain an infinite number of values and are called distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('infPopn_c5')\">5. Information from a sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mechanism of sampling from a population explains randomness. Although the population is unknown and we only have a single sample, the sample provides information about the population.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
