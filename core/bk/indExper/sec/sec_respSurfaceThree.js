var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Quadratic model for three factors</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('respSurfaceThree1')\">1. Design of experiment</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A factorial experiment using 2 levels for each factor must be augmented by star points to allow a quadratic model to be fitted. An alternative is to use a Box-Behnken design in which each factor only takes 3 different levels. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('respSurfaceThree2')\">2. Displaying the model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A quadratic model for three factors defines a surface in 4 dimensions. It can be displayed as 'slices' through this 4-dimensional surface at fixed values of one factor.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('respSurfaceThree3')\">3. Choosing the best model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The significance of the quadratic model's terms can be tested in an analysis of variance table. Care must be taken when a response surface is interpreted since deletion of insignificant terms may changes its shape.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
