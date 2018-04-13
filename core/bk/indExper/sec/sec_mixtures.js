var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Mixtures of ingredients</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixtures1')\">1. Mixtures of three ingredients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If an experiment has 3 factors whose values are proportions that sum to 1, the possible combinations of factor values correspond to a triangle in 3 dimensions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixtures2')\">2. Experimental designs for mixtures</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Mixture designs try to spread design points evenly over the design space (a triangle for mixtures of 3 ingredients). The simplex-centroid and simplex-lattice designs are often used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixtures3')\">3. Representing designs in two dimensions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The design space for a mixture of 3 ingredients is an equilateral triangle. Each vertex represents 100% of one ingredient and the opposite face corresponds to none of that ingredient.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixtures4')\">4. Designs for mixtures of four ingredients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When mixtures contain four ingredients, the design space can be represented as a regular tetrahedron (pyramid with 4 equilateral triangles as faces) in 3 dimensions. The simplex-centroid design and simplex-lattice designs are points on the surface and interior of this tetrahedron.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixtures5')\">5. Modelling the response surface</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The response can be modelled as a linear or quadratic function of the constituent proportions. For mixtures of 3 ingredients, the mean response can be displayed as a surface above the design space (equilateral triangle).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixtures6')\">6. Hypothesis tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An anova table describes the reduction in residual sum of squares corresponding to adding linear and quadratic terms to the model. It can be used to test the significance of these terms. If there are more design points than model parameters, lack of fit can also be tested in an anova table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixtures7')\">7. Constrained mixtures</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the experiment must be conducted with mixtures in which the proportions of some components are fixed or have minimum values, a standard mixture design for the rest of the product can be used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixtures8')\">8. Constraints on maximum</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When there is a contraint on the maximum proportion of a component, the design region is no longer a triangle (or tetrahedron if there are 4 components).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('mixtures9')\">9. Designs for constrained mixtures</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In experiments for mixtures with 3 components where the maximum values of some components are specified, it is often possible to create a suitable design by hand. A computer should be used to generate the design if there are 4 or more components in the mixture.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
