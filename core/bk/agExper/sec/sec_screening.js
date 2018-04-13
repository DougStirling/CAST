var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>2**n designs with one replicate</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('screening1')\">1. Two-level factors and one replicate</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A preliminary experiment may be conducted to assess which of many factors are most important. To limit the number of experimental units, each factor is often allowed only 2 levels and a single replicate is used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('screening2')\">2. Factors with two levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Factors with two levels may be treated as numerical with values +1 and -1. The main effects of two factors are orthogonal if the sum of the products of these values is zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('screening3')\">3. Interactions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The interaction between two factors can be modelled by a numerical variable whose values are the product of the coded factor values. The variables for main effects and interactions in a complete factorial design are orthogonal. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('screening4')\">4. Hypothesis tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there are no replicates, the significance of factor effects and interactions can only be tested if it can be assumed that there are no high-order interactions. Hypothesis tests are however less important in screening experiments.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
