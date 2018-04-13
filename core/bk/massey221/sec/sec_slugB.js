var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Linear model for log(weight)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug8')\">1. Log transform for const variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformation of the response is needed to fix non-constant variance. If weight is proportional to length-cubed, the logs of the two variables will be linearly related. An outlier is evident when this model is fitted.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug9')\">2. Interpreting model for log data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page explaines how the parameters of the log-log model can be used to predict weight from length.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug10')\">3. Predictions from log data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Prediction intervals are described. On the original axes, these intervals are much wider for long slugs than for short ones and match reasonably what would be expected from the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug11')\">4. Confidence interval for slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Based on Minitab output, a confidence interval for the slope is given and interpreted. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug12')\">5. Testing for same slug shape</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A test is made for whether the 'power' parameter is 3, and this is interpreted in terms of the shapes of the slugs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug13')\">6. Normal linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The normal linear model assumptions are briefly mentioned.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('slug14')\">7. Diagnostic residual plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The main four diagnostic plots are described. The diagnostic plots for the slug data are compared to those from simulated data to help assess them.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
