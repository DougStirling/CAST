var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Binomial distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('binomial1')\">1. Binomial random variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a sequence of n independent Bernoulli trials that all have the same probability of success, the number of successes has a binomial distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('binomial2')\">2. Binomial probability function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The probability function for the binomial distribution is derived.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('binomial3')\">3. Mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formulae for the mean and variance of the binomial distribution are derived. The mean and variance of the proportion of successes can be found from them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('binomial4')\">4. Shape of the binomial distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar charts show the shape of the binomial distribution for different values of n and π. The distribution's shape approaches a normal distribution when n increases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('binomial5')\">5. Binomial examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page explains how to evaluate probabilities for binomial random variables and gives some practical examples.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('binomial6')\">6. Cumulative probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The cumulative distribution function of the binomial distribution is graphed for different values of n and π.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
