var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution of sample proportion</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn1')\">1. Recognising a binomial distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise describes four random variables and asks which have binomial distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn2')\">2. Shape of binomial distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are given information about the parameters of a binomial distribution in these two exercises and are asked to pick which of four alternative bar charts describes it. In the first exercise, the parameters are directly provided but the second exercise requires careful reading of the wording of the question.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn3')\">3. Finding binomial probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will use the information in the question to set the parameters of a binomial distribution then read off the probability by dragging over the bar chart of the binomial probabilities. (The computer does the calculations.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn4')\">4. Normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are asked to find the parameters of a normal approximation to a binomial distribution in this exercise.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn5')\">5. Probabilities from normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for probabilities relating to a binomial distribution but requires that you use a normal approximation to evaluate them.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
