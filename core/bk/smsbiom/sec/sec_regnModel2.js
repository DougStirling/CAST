var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Linear regression models</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>A normal linear model explains how the distribution of a response variable, Y, depends on an explanatory variable, X.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel_b1')\">1. Interest in generalising from data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some bivariate data sets describe complete populations. Others are 'representative' of an underlying population or process.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel3')\">2. Normal linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The response is often modelled with a normal distribution whose mean is a linear function of X and whose standard deviation is constant.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel_b5')\">3. Model parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The normal linear model has 3 unknown parameters. For many data sets, these parameters have meaningful interpretations.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
