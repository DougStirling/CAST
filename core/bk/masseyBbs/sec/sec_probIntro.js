var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probIntro1')\">1. Introduction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Probability underlies methods of estimating population characteristics from samples. The concept of probability is closely related to that of proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probIntro2')\">2. Classical definition of probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When sampling a item from a population of values, the probability of any particular value is the proportion of population items with that value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probIntro3')\">3. Probability and proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In other random situations, probability can be defined as a long-term proportion if more and more data was similarly collected.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probIntro4')\">4. Empirical and subjective probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Numerical values for probabilities can be obtained from sample proportions or subjectively.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probIntro5')\">5. Probability and numerical populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For numerical measurements, we are usually interested in the probability of getting a value within a particular range.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probIntro6')\">6. Properties and rules of probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page describes some rules that are obeyed by probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim1')\">7. Exercise: Probabilities for cards and dice</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for probabilities about a card drawn at random from a standard pack of playing cards or when two dice are rolled.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim2')\">8. Exercise: Probabilities and finite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A finite categorical population is shown as a bar chart and the probability of a randomly sampled value being in a range of categories must be found.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
