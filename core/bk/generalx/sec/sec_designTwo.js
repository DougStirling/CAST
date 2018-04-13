var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Two or more factors</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designTwo1')\">1. Experiments with two factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that it is possible to vary a second factor in an experiment with a single factor without affecting the accuracy of the estimated effects.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designTwo2')\">2. Simple model for two factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a 3-dimensional graphical display of the 2-factor model with no interaction. Rotating it helps to explain the additivity of the factor effects.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designTwo3')\">3. Interaction between factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates interaction for a 2x2 experiment and shows that a factorial design is needed to detect interaction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designTwo4')\">4. Example with interaction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example of factorial data with two factors and a 3-dimensional display with checkboxes to allow main effects and interaction to be added to the model. It helps to reinforce the idea of interaction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designTwo5')\">5. No-interaction model for three factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 3-dimensional diagram shows a data set with three factors; checkboxes allow the three main effects to be added to the model and it is displayed graphically in the diagram.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designTwo6')\">6. Interaction in 3-factor designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram presents an example in which there is interaction between two of the three factors.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
