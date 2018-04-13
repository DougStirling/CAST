var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bivariate normal distribution</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>The bivariate normal distribution is very important. You will need to know how to use it, but the proofs in this section will not be examined.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarNormal1')\">1. Standard bivariate normal distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard bivariate normal distribution has a single parameter, that affects the strength of the relationship between the variables. The joint pdf is given and the distribution's shape is described.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarNormal2')\">2. General bivariate normal distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The general bivariate normal distribution is a generalisation with five parameters. Linear transformations of standard bivariate normal variables have this distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarNormal3')\">3. Marginal distributions</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proof not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The marginal distributions are univariate normal distributions and their means and variances are four of the distribution's five parameters.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarNormal4')\">4. Conditional distributions</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proof not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The conditional distribution of Y, given that X=x, is also a univariate normal distribution. Its shape is that of a slice through the joint pdf at x.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarNormal5')\">5. Covariance and correlation</a>&nbsp;&nbsp;&nbsp;<span class='note'>Covariance proof not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A formula is derived for the covariance of the two variables and their correlation is shown to be the fifth parameter of the bivariate normal distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarNormal6')\">6. Example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows how the bivariate normal distribution can be used to find marginal and conditional probabilities.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
