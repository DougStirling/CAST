var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probability and applications</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Relationships between categorical variables (or other events) are described by probabilities.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob_c1')\">1. Joint probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bivariate categorical data are modelled as a sample from a population that consists of pairs of categorical values. The joint probability for any pair of categories is their population proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob_c2')\">2. Marginal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The marginal probabilities for a variable are the population proportions for its possible values. They can be found by summing joint probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob3')\">3. Conditional probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Conditional probabilites for a variable are proportions in a sub-population containing a specific value for the other variable. They are found by scaling the joint probabilities in that sub-population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob4')\">4. Graphical display of probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Joint, marginal and conditional probabilities can be displayed graphically.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob_c5')\">5. Calculations with probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The model can be equivalently described by (a) joint probabilities, (b) marginal probabilites for X and conditional probabilities for Y, or (c) marginal probabilites for Y and conditional probabilities for X. Any of these sets of probabilities can be found any other set.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
