var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Fractional factorial designs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fractional1')\">1. Orthogonal main effects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Designs for k factors in half or quarter of the experimental units required for a complete design should be such that the main effects are orthogonal -- each combination of levels for any two of the factors is used the same number of times.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fractional2')\">2. Confounded main effects and interactions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In fractional factorial designs, main effects are confounded with interactions between other factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fractional3')\">3. Design principles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A complete factorial design can be augmented with an extra factor whose levels are defined by an interaction between the initial factors. Each original main effect or interaction is confounded with a term involving the added factor.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fractional4')\">4. Another fractional factorial design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Another example is given in which a complete design is augmented with two additional factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('fractional5')\">5. Factors with more than two levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Similar designs can be constructed for factors with more than two levels, but they are beyond the scope of this e-book.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
