var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Designs for two factors</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorialTwo_i1')\">1. Factorial design for two factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In an experiment for two factors, treatments are combinations of levels for the factors. A factorial experiment uses the same number of replicates for all possible treatments and randomly allocates them to the experimental units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorialTwo_i2')\">2. Examples of factorial experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows examples of factorial experiments for two factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorialTwo3')\">3. Interaction between factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sometimes the effect of changing one factor depends on the level of the other factor. A factorial experiment is needed to assess this interaction between factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorialTwo4')\">4. Efficiency</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In an experiment for one factor, a second factor can be varied without reducing the accuracy of the estimate for the first factor. It is far more efficient to assess two factors in a single factorial experiment than in separate experiments for the two factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('factorialTwo_i5')\">5. Practical problems</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sometimes two factors are thought to affect a response but in an experiment they cannot be independently adjusted. In other experiments, it is impossible to set the value of the 'controlled' factor precisely so the factor level varies randomly.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
