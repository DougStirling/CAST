var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Linear model for weight</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug1')\">1. The data set</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The slug data are introduced and a scatterplot of the raw data is shown</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug2')\">2. Linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A least squares line is fitted to the original measurements and the curvature in the original plot is highlighted in a plot of residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug3')\">3. Lowess line</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A lowess curve is fitted through the data, again highlighting the curvature. (Fitting lowess curves is explained in a linked page.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug4')\">4. Weight vs length cubed</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Weight, being related to volume, might be expected to be proportional to the cube of length. A transformation of length is therefore tried to linearise the relationship.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug5')\">5. Variability of coefficients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page simply demonstrates that the least squares coefficients are random -- they would be different if a different sample of slugs was collected.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug6')\">6. Inference</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Confidence intervals and hypothesis tests for the parameters are described and interpreted.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug7')\">7. Problem with non-constant variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The assumption of constant error variance is violated in the linear model of weight against length-cubed. It is shown that the model results in prediction intervals that are too narrow at some lengths and too wide at others.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
