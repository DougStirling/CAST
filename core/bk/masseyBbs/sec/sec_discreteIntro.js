var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Discrete distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discreteIntro1')\">1. Introduction and examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A discrete probability distribution describes a variable that can take on discrete values, each with its probability. The variable can be categorical or discrete. Categorical variable were dealt with in Chapter 4. Here we are concerned with discrete numerical variables. For example, the variable X might be the number of cars sold by a dealer in a day.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discreteIntro2')\">2. Bar charts and probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Probabilities for a discrete variable can be displayed with a bar chart. The height of each bar is the probability of that outcome.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discreteIntro3')\">3. Expected value</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean of a numerical variable describes a typical or average value.  The expected value of a distribution has a similar interpretation and is also called the distribution’s mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discreteIntro4')\">4. Standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Whereas the expected value of a  variable is its average, the standard deviation is a measure of the variation or spread. In finance, expected value can be interpreted as average, and standard deviation is associated with risk.  If two returns have the same expected value, the one with the greater standard deviation carries greater risk.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
