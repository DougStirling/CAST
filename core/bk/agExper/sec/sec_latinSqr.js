var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Latin square designs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('latinSqr1')\">1. Pairwise orthogonality</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two factors are orthogonal if all combinations of their factor levels are used in the same number of experimental units. If all pairs of factors are orthogonal, their main effects can be reordered in an analysis of variance table without affecting their sums of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('latinSqr2')\">2. Latin squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A Latin squares design is a pairwise orthogonal design for 3 factors, 2 factors and blocks or 1 factor and two blocking variables. The three variables (factors or blocks) must all have the same number of levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('latinSqr3')\">3. Treatment structure in Latin squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the levels of a factor in a Latin square experiment have internal structure, the explained sum of squares can be split into components to test hypotheses about this structure.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('latinSqr4')\">4. Randomisation for Latin squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Randomisation consists of randomly permuting the levels of the factors and order of the blocks in a patterned design.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('latinSqr5')\">5. Designs based on Latin squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Latin squares can be used as the basis of a few designs for situations where the numbers of blocks and factor levels are not equal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('latinSqr6')\">6. Graeco-Latin squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pairwise orthogonal designs for four blocking variables or factors can be generated from two superimposed Latin squares.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
