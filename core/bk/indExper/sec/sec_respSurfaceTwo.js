var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Quadratic model for two factors</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('respSurfaceTwo1')\">1. Quadratic model for two factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Nonlinear relationships between a response and two numerical factors can be modelled by adding quadratic terms and an interaction to the linear model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('respSurfaceTwo2')\">2. Shape of quadratic response surface</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The quadratic model defines a surface that can take various different shapes, and may have a maximum, minimum or saddle point, depending on the values of the model parameters.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('respSurfaceTwo3')\">3. Central composite designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The quadratic model cannot be fitted using data from a factorial experiment in which both factors take two levels, even if augmented with centre points. A central composite design adds 'star points' to the factorial model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('respSurfaceTwo4')\">4. Display of surface with contours</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The quadratic model corresponds to a surface in 3 dimensions. Contours on this surface can be used to represent the surface on paper.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('respSurfaceTwo5')\">5. Choosing best model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An analysis of variance table can be used to test the significance of the model terms.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
