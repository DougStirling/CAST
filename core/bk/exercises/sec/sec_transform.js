var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Transformations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_transform1')\">1. Linear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, a data set is shown and a question is asked about the proportion of values that are less than a cutoff which is expressed in different units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_transform2')\">2. Mean and st devn after linear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page asks for the mean and standard deviation of a data set after linear transformation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_transform3')\">3. Nonlinear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are asked to identify which of three nonlinearly transformed dot plots correspond to square, log and square root transformations of a data set. </dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
