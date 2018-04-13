var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Negative binomial distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('negBinomial1')\">1. Probability function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The number of independent success/failure trials until the k'th success has a negative binomial distribution. This is a generalisation of the geometric distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('negBinomial2')\">2. Alternative definition</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The number of failures until the k'th success equals the number of trials, minus k. It is also sometimes said to have a negative binomial distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('negBinomial3')\">3. Finding negative binomial probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example is given to show how negative binomial probabilities can be calculated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('negBinomial4')\">4. Cumulative distribution function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cumulative probabilities can either be evaluated by summing probabilities from this distribution, or by summing binomial probabilities, which is usually a simpler calculation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('negBinomial5')\">5. Mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and variance of the negative binomial distribution are derived.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
