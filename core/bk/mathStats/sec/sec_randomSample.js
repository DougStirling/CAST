var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Discrete random samples</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomSample1')\">1. Independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two discrete random variables, X and Y, are independent if all events relating to the value of X are independent of events about Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomSample2')\">2. Random samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A random sample from a distribution is a collection of independent random variables, each of which has this distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomSample3')\">3. Functions of two variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formulae are given for the mean and variance of a linear function of two independent random variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomSample4')\">4. Properties of sums and means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of values in a random sample is a random variable. Formulae for its mean and variance are given and similar formulae for the sample mean are also given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomSample5')\">5. Central limit theorem</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum and mean of a random sample from a normal distribution both have normal distributions. For random samples from other distributions, the sum and mean have distributions that become close to normal as the sample size increases.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
