var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution of sample proportion</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn_e1')\">1. Finding binomial probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will use the information in the question to find a binomial probability. An external statistics program should be used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn_e2')\">2. Probabilities from normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for probabilities relating to a binomial distribution but requires that you use a normal approximation to evaluate them.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
