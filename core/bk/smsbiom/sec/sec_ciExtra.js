var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Sample size (Optional)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra2')\">1. Sample size for estimating mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Given a target width for a 95% confidence interval, it is possible to determine the necessary sample size to achieve this accuracy.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra_b3')\">2. Sample size for estimating proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a similar way, given a target width for a 95% confidence interval for a proportion, it is possible to determine the necessary sample size.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
