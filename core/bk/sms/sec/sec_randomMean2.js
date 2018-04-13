var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution of sample mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity_c5')\">1. Normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Normal distributions are infinite continuous populations. A normal distribution is symmetric and its two parameters, µ and σ, can be adjusted to alter the distribution's location and spread.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean4')\">2. Means from normal populations</a>&nbsp;&nbsp;&nbsp;<span class='note'>(page also in Chapter/Topic 3)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sample means from normal populations also have normal distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean5')\">3. Large-sample normality of means</a>&nbsp;&nbsp;&nbsp;<span class='note'>(page also in Chapter/Topic 3)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The shape of the sample mean's distribution is usually close to normal, even if the population distribution is skew or multimodal. The bigger the sample size, the closer the distribution to normal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean_c6')\">4. Distribution of mean from a sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is possible to estimate the distribution of a sample mean from a single sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean7')\">5. Requirement of independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the sample values are positively correlated, the standard deviation of the mean will be underestimated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn10')\">6. Normal probability plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A normal probability plot is an informal graphical method to help assess whether a data set comes from a normal distribution. Curvature in the probability plot suggests that the data may not be normal.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
