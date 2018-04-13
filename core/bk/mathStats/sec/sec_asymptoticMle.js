var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Asymptotic properties of MLEs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('asymptoticMle1')\">1. Bias, variance and normality</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Maximum likelihood estimators cannot be beaten in large samples. They are asymptotically unbiased and normally distributed, and there is an approximate formula for their variance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('asymptoticMle2')\">2. Standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A numerical approximation to the standard error of a maximum likelihood estimator can be found from the second derivative of the log-likelihood.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('asymptoticMle3')\">3. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard error is found for the probability of success, firstly when estimated from a single binomial proportion, and then when estimated from a random sample from a geometric distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
