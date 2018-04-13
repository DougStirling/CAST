var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Conditional probability</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('conditProb1')\">1. Contingency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For data with two categorical variables we summarise frequencies for each combination of categories in a contingency table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('conditProb2')\">2. Joint probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bivariate categorical data are modelled as a sample from a population that consists of pairs of categorical values. The joint probability for any pair of categories is their population proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('conditProb3')\">3. Marginal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The marginal probabilities for a variable are the population proportions for its possible values. They can be found by summing joint probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('conditProb4')\">4. Conditional probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Conditional probabilites for a variable are proportions in a sub-population containing a specific value for the other variable. They are found by scaling the joint probabilities in that sub-population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('conditProb5')\">5. Displaying probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Joint, marginal and conditional probabilities can be displayed graphically.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('conditProb6')\">6. Tree diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A tree diagram is another device useful for displaying and calculating conditional and joint probabilities. A situation summarised in a table of joint probabilities can be represented in tree diagram form, and vice versa.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('conditProb7')\">7. More about tree diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>We can use a tree diagram for any situation that involves a sequence of events.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_groupedCat2')\">8. Exercise: Find contingency table proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise you are shown contingency tables and asked to find a joint, marginal or conditional proportion.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
