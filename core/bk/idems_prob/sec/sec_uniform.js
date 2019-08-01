var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Uniform distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('uniform1')\">1. Family of uniform distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A random variable with equal probabilities for all integer values within some range, has a discrete uniform distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('uniform2')\">2. Mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formulae are given for the mean and variance of the discrete uniform distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('uniform3')\">3. Sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The distribution of the sample mean from a uniform distribution is found and shown to be close to a normal distribution when the sample size is large. </dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
