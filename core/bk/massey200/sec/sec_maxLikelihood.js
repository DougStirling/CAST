var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Maximum likelihood</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maxLikelihood1')\">1. Likelihood function</a>&nbsp;&nbsp;&nbsp;<span class='note'>Important</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The likelihood function for a parameter expresses the probability of getting the observed data for different values of the parameter. It is a function of the parameter and treats the observed data as constants.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maxLikelihood2')\">2. Maximising the likelihood</a>&nbsp;&nbsp;&nbsp;<span class='note'>Important</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The parameter value that maximises the likelihood is called its maximum likelihood estimate. It is usually where the derivative of the likelihood function is zero. The value is usually easiest to find by solving the equation that sets the derivative of the log-likelihood to zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maxLikelihood3')\">3. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Maximum likelihood is illustrated using samples from binomial and geometric distributions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
