var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Logistic regression</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_logistic1')\">1. Categorical responses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example of bar charts for data with categorical response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_logistic_c2')\">2. Fitted values and predictions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example of use of linear and logistic model for predicting a proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_logistic3')\">3. Logistic curve</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Demonstration of how the logistic parameters affect the shape of the curve.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_logistic_c4')\">4. Obtaining a good fit</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example of fitting a logistic curve.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
