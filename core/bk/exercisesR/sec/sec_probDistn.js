var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probability and distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim1')\">1. Equally likely outcomes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for probabilities about a card drawn at random from a standard pack of playing cards or when two dice are rolled.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim2')\">2. Value from finite categorical population</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A finite categorical population is shown as a bar chart and the probability of a randomly sampled value being in a range of categories must be found.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim3')\">3. Value from finite numerical population</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is simlar to the one on the previous page but relates to a numerical population that is summarised by a histogram. The probability must be estimated roughly 'by eye' from the area under the histogram.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim4')\">4. Random value from infinite population</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, probabilities are obtained from the areas under a probability density function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim5')\">5. Equally likely outcomes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise relates to pairs of numbers drawn with or without replacement from a small finite population. The question asks for a probability about either the sum or difference of the two numbers.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
