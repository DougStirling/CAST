var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Multinomial distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multinomial1')\">1. Joint probability function</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proof not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The multinomial distribution is a generalisation of the binomial distribution. It describes situations where each independent trial may have more than two possible outcomes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multinomial2')\">2. Marginal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The marginal distributions of single variables are all binomial if their joint distribution distribution is multinomial.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multinomial3')\">3. Conditional distributions</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proof not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The conditional distribution of any subset of variables that have a multinomial distribution is also multinomial.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multinomial4')\">4. Means, variances and correlations</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proofs not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The means and variances of individual variables that have a joint multinomial distribution can be found from their marginal binomial distributions. Formulae for the covariance and correlation of two of the variables are derived.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multinomial5')\">5. Parameter estimation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The maximum likelihood estimates of the multinomial probabilities are the corresponding sample proportions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
