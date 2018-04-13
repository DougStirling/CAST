var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Mean and variance</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousMeanVar1')\">1. Expected values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The expected value of any function of a continuous random variable is defined by an integral.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousMeanVar2')\">2. Mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The expected value of X is called its mean. The variable's variance is the expected value of the squared difference between X and its mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousMeanVar3')\">3. Example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and variance of a rectangular distribution are derived.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
