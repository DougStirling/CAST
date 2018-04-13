var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Estimating parameters</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>A normal linear model can be used for many bivariate data sets, but its three parameters are unknown values in most practical situations.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst1')\">1. Estimating the slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A least squares line provides estimates of the linear model's slope and intercept. These estimates are random values -- they vary from sample to sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnEst2')\">2. Estimating the error standard devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The third parameter of the normal linear model is the error standard deviation. It can be estimated using the residuals from the least squares line.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
