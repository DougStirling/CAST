var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Method of moments</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('methodOfMoments1')\">1. The method of moments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For distributions with a single unknown parameter, a general estimation method chooses its value to make the distribution's mean equal to the mean of a random sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('methodOfMoments2')\">2. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The method of moments is illustrated using samples from binomial and geometric distributions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
