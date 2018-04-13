var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Numerical methods for MLEs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('newtonRaphson1')\">1. Newton-Raphson algorithm</a>&nbsp;&nbsp;&nbsp;<span class='note'>Explanation of algorithm will not be examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Maximum likelihood requires the solution to an equation involving the derivative of the log-likelihood. The Newton-Raphson algorithm is an iterative algorithm to solve an equation such as this.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('newtonRaphson2')\">2. Log-series distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A new type of discrete distribution called the log-series distribution is described. The Newton-Raphson algorithm is used to find the maximum likelihood estimate of the distribution's unknown parameter.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('newtonRaphson3')\">3. Standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard error of the maximum likelihood estimator can be easily found from the iterations of the Newton-Raphson algorithm.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
