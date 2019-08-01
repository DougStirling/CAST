var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Discrete bivariate distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarDiscreteDistns1')\">1. Joint probability function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The joint probability function of X and Y gives the probabilities for all possible combinations of the variables' values. Probabilities for events can be found by summing the joint probability function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarDiscreteDistns2')\">2. Three-dimensional bar chart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The joint probability function of X and Y can be displayed graphically in a 3-dimensional bar chart.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarDiscreteDistns3')\">3. Marginal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The marginal probability function for one variable gives probabilities for its possible values. It can be found by summing the joint probability function over the values of the other variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarDiscreteDistns4')\">4. Conditional distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The conditional probabilities for one variable, given the value of the other, form a univariate distribution. They are the ratio of the joint probability function to the second variable's marginal one.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarDiscreteDistns5')\">5. Independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two random variables are independent if their joint probability function equals the product of the two marginal ones.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarDiscreteDistns6')\">6. Random samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Independence can be generalised to n variables. If they all have the same distribution, they are a random sample.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
