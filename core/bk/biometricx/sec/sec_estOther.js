var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simulation and bootstrap</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estOther1')\">1. Error distribution by simulation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation from an approximate categorical population is used to build up the distribution of the error when a population proportion is estimated. (In this example, a formula is also available.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estOther2')\">2. Simulation from normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation is based on a normal approximation to the actual data. It is used to build up the distribution of the error in estimating a quartile and therefore provide an approximate standard error.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estOther3')\">3. Bootstrap error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example is shown where the population distribution is not normal. A bootstrap simulation gives the error distribution of a quartile.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estOther_b4')\">4. Standard error of correlation from bootstrap</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram performs a bootstrap simulation to find the approximate error distribution (and standard error) of a correlation coefficient.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estOther5')\">5. Confidence interval from error distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this page, simulation from a normal approximation provides the error distribution for a quartile and this is used to find an approximate 95% confidence interval.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
