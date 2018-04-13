var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimating two parameters</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimateTwoParam1')\">1. Method of moments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The method of moments can be generalised to estimate two parameters by setting the distribution's mean and variance equal to those of a random sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimateTwoParam2')\">2. Maximum likelihood</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Maximum likelihood can be used to estimate any number of unknown parameters. The estimates are usually where the partial derivatives of the log-likelihood are zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimateTwoParam3')\">3. Example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Maximum likelihood estimates of the normal distribution's two parameters are derived.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estimateTwoParam4')\">4. Grid search for MLEs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the maximum likelihood estimators cannot be found algebraically, a grid search can be used to maximise the log-likelihood.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
