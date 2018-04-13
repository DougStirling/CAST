var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Ways to define probability</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDefinitions1')\">1. Uncertainty and Probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many situations, we are uncertain about what will happen — the outcome is random. Probability describes this uncertainty on a scale of 0 to 1.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDefinitions2')\">2. Terminology</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The terminology used to describe randomness is closely related to set theory.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDefinitions3')\">3. Classical definition of probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If all outcomes from an experiment are equally likely, the probability of any event is the proportion of outcomes that are part of the event.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDefinitions4')\">4. Applications of classical definition</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many games of chance such as cards or dice, outcomes are equally likely, and finding probabilities involves counting them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDefinitions5')\">5. Probability from relative frequency</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In experiments without equally likely outcomes, we can often imagine repeating the experiment many times. The probability of an event can be defined as the limiting proportion of times it occurs with more and more repetitions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDefinitions6')\">6. Estimating probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Defining the probability of an event in terms of the proportion of times that it occurs in an infinite number of repetitions of the experiment does not provide a numerical value. The proportion of times it happens in a finite number of repetitions provides an estimate.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDefinitions7')\">7. Subjective probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is impossible to imagine some random experiments being repeated. A personal or subjective assessment of the probabiity of an event must be made, but different people often have different subjective probabilities.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
