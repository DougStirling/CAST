var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>General methods for continuous variables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transformWithCdf1')\">1. Differentiating the CDF</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a formula can be found for the cumulative distribution function, F(x), of a continuous random variable, its probability density function can be obtained as its derivative.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transformWithCdf2')\">2. Maximum of a rectangular distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The maximum likelihood estimator of the upper limit of a rectangular distribution from a random sample is the maximum of the sample values. Its cumulative distribution function can be found and differentiated to get the estimator's pdf. Its bias and standard error are determined from this.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transformWithCdf3')\">3. Monotonic transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The pdf of a monotonic function of X can be found directly from the pdf of X. The log-normal and Weibull distributions are given as examples.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transformWithCdf4')\">4. Relationship with rectangular distribution</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proofs not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Any continuous distribution can be expressed in terms of a Rectangular(0, 1) distribution (and vice versa) using the CDF and its inverse as transformations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transformWithCdf5')\">5. Generating random numbers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Random values from any distribution can be obtained from randomly generated Rectangular(0, 1) values using the inverse of the CDF as a transformation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
