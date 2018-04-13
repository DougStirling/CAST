var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Continuous distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continIntro1')\">1. Introduction and examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Whereas a discrete variable can only take separate (discrete) values, a continuous numerical variable can take on any value on a continuous scale. For continuous variables, it is meaningful to consider the probability of a value within an interval such as P(0.8&nbsp;&lt;&nbsp;X&nbsp;&lt;&nbsp;1.2) but  probabilities for specific values such as P(X&nbsp;=&nbsp;1.0) are zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity4')\">2. Probability density functions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the vertical scale on a histogram is such that the total area under the histogram equals 1 and the class interval becomes very small the histogram takes on the appearance of a smooth curve, called a probability density curve (pdf).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity6')\">3. Probability and area under pdf</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For a continuous variable, P(a < X < b) is the area under a probability density curve between&nbsp; X = a&nbsp; and&nbsp; X = b. This is how we should visualise the probability, even though in practice we use standard tables or Excel formulae and templates to actually calculate the area (probability).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim3')\">4. Exercise: Probabilities and numerical populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is simlar to the one on the previous page but relates to a numerical population that is summarised by a histogram. The probability must be estimated roughly 'by eye' from the area under the histogram.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_probSim4')\">5. Exercise: Probabilities from continuous distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, probabilities are obtained from the areas under a probability density function.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
