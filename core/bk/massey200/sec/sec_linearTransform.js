var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Linear transformations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('linearTransform1')\">1. Mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and variance of Y = a + bX can be simply expressed in terms of those of X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('linearTransform2')\">2. Distribution of transformed variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If X has a normal distribution, Y = a + bX is also normally distributed. In particular, Z = (X - μ) / σ has a standard normal distribution and this can be used to help find probabilities about X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('linearTransform3')\">3. Scale and location parameters</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In some families of distributions, linear transformations result in other distributions from the same family.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('linearTransform4')\">4. Scale and location examples</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Examples are given in which scale and location parameters are identified.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
