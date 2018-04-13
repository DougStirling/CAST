var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simulation and bootstrap</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther1')\">1. Simulationen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formulae exist for the standard errors of many common estimators. If such a formula is not available, a different approach is needed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther2')\">2. Fehlerverteilung durch Simulation</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a formula for the standard error cannot be found, a simulation can often be used to find the error distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther3')\">3. Simulation mit Normalverteilung</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example is shown where a simulation provides the error distribution and standard error for an upper quartile.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther4')\">4. Bootstrap der Fehlerverteilung</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the population distribution does not seem to be normal, simulations can be based on samples with replacement from the actual data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther5')\">5. Standard error of correlation from bootstrap</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bootstrap samples can also be used to generate an approximate error distribution (and standard error) for many types of estimator. Their use to find the standard error of a correlation coefficient is described.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estOther6')\">6. KIs durch Simulation</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a simple formula does not exist for the standard error, a simulation can sometimes provide an approximate 95% confidence interval.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
