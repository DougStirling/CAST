var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Diagnostics for models with 2 explanatory variables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnosticsTwo1')\">1. Problem points</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Problems with the multiple regression model may relate to all data points, but sometimes only one or two data points cause problems.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnosticsTwo2')\">2. Leverage</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Data points have high leverage if their values for the explanatory variables are 'unusual'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnosticsTwo3')\">3. Problems with high leverage</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Because high leverage points pull the least squares plane strongly, their residuals are rarely large, even if they are outliers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnosticsTwo4')\">4. Standardised residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Standardising the residuals adjusts for the lower residual standard deviation of high leverage points.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnosticsTwo5')\">5. Externally studentised residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ordinary standardised residuals often fail to highlight outliers that are high leverage points. Standardising with a deleted estimate of the error variance is best for detecting outliers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnosticsTwo6')\">6. Influence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Leverage depends only on the explanatory variables and describes the potential of a point to influence the results. DFITS and Cook's D describe the actual influence of each point.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnosticsTwo7')\">7. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The externally studentised residuals, leverages and DFITS provide a good guide to problems with individual points. Several examples are given.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
