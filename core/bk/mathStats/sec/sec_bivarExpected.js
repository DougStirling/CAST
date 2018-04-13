var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Expected values</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarExpected1')\">1. Discrete expected values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The expected value of a function, g(X,Y), of two discrete random variables, X and Y, is the sum of the possible values of the function with each weighted by its probability — the sum of g(x,y)p(x,y) over all pairs (x,y).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarExpected2')\">2. Continuous expected values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When X and Y are continuous, the expected value of g(X,Y) is similarly defined but with a double integral of g(x,y)f(x,y) replacing the double summation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarExpected3')\">3. Properties of expected values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some properties of expected values are described. Conditional expected values are also defined here, and the page explains how to obtain unconditional expected values from conditional ones.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarExpected4')\">4. Means and variances</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The means and variances of individual variables can be found as expected values from their marginal distributions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
