var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Leverage, outliers and influence</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnostics1')\">1. Leverage</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The most effective x-value at which to take a new response observation is one where predictions are most variable. The variance of predictions at x, divided by sigma-squared is called the leverage at x.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnostics2')\">2. Outliers and leverage</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If an outlier is also a high-leverage point, it can badly 'pull' the least squares line and the resulting residual often does not indicate that it is an outlier.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnostics3')\">3. Variances of the residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Even when all data points come from a normal linear model, all residuals do not have the same standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnostics4')\">4. Standardised residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dividing the residuals by an estimate of their standard deviation gives values that can be compared to &plusmn;2 and &plusmn;3 to look for outlliers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnostics5')\">5. Deleted residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Standardised residuals still do not show up outliers that are high leverage points. Deleted residuals are based on the difference between the response and the prediction from the data without that observation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnostics6')\">6. Externally studentised residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Rather than standardising each residual by dividing by its standard deviation based on the mean squared residual for the whole data set, it is better to standardise with the mean squared residual from the data set without that value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnostics7')\">7. Influence on fitted values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Leverage describes the potential of each point to influence the results. DFITS describes its actual influence on the fitted values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnostics8')\">8. Influence on regression coefficients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An alternative measure of influence describes the influence of each point on the least squares coefficients.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('diagnostics9')\">9. Summary and examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page summarises the various measures of residual and influence and gives a few examples where residuals, leverage and influence are interpreted.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
