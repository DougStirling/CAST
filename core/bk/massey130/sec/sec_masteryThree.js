var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises for test 3</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>The following exercises give you practice with the ten questions that will be asked in the third mastery test.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_popSamp2')\">1. Identify parameters and estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks whether three statements describe parameters or estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim1')\">2. Find probability about cards or dice</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for probabilities about a card drawn at random from a standard pack of playing cards or when two dice are rolled.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim5')\">3. Probability when sampling with/without replacement</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise relates to pairs of numbers drawn with or without replacement from a small finite population. The question asks for a probability about either the sum or difference of the two numbers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn1')\">4. Identify binomial variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise describes four random variables and asks which have binomial distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn3')\">5. Find binomial prob from a barchart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will use the information in the question to set the parameters of a binomial distribution then read off the probability by dragging over the bar chart of the binomial probabilities. (The computer does the calculations.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn5')\">6. Find binomial prob using normal approx</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for probabilities relating to a binomial distribution but requires that you use a normal approximation to evaluate them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim4')\">7. Find probability for non-normal pdf</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, probabilities are obtained from the areas under a probability density function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn1')\">8. Guess SD from normal pdf</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows a normal distribution and asks you to guess its standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn3')\">9. Find normal probability using z-score</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for a normal probability. It must first be translated into a question involving a z-score.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn5')\">10. Find a normal quantile</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page ask the inverse question; given a probability, what is the corresponding range of values? The exercise uses a normal table to find the answer.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
