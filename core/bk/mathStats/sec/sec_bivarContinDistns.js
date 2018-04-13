var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Continuous bivariate distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarContinDistns1')\">1. Joint probability density function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Joint probability density functions describe the distributions of pairs of continuous random variables. Probabilities are defined as volumes under it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarContinDistns2')\">2. Probabilities as integrals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Probabilities can be found as double integrals of the joint probability density function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarContinDistns3')\">3. Marginal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The marginal distribution of one of the two variables is a univariate distribution whose pdf can be found by integrating the joint pdf over the other variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarContinDistns4')\">4. Conditional distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The conditional probability density function of one variable given the value of the other is the joint pdf divided by the marginal pdf of the other variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarContinDistns5')\">5. Independence and random samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>As with discrete variables, continuous variables are independent if their joint pdf is the product of the two marginal pdfs. A random sample is a collection of n independent variables with the same distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
