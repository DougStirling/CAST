var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn_c1')\">1. Importance of normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram allows the normal parameters to be changed with sliders to get the pdf to match the histogram of a data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn2')\">2. Shape of normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows a normal distribution and has sliders to change its parameters. It shows that the normal pdf can look identical for all parameter values if the scale on the axis is changed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn3')\">3. Sketching a normal distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>These examples show how normal distributions tail off at 2 and 3 standard deviations from the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn4')\">4. Some normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A diagram shows the normal probabilities of being within 1, 2 and 3 standard deviations from the mean. This is related to the 70-95-100 rule of thumb for data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn5')\">5. Z-scores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how a probability about X can be translated into one about a z-score.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn6')\">6. Probabilities from z-scores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how to translate a question into one involving a z-score.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn_c7')\">7. Finding other normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows templates that can be used to find probabilities that X is less than or greater than a constant, and between two constants.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn8')\">8. Finding normal quantiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows a diagram using a 'trial and error' method based on x &rarr; z &rarr; prob. An alternative diagram shows how to find prob &rarr; z &rarr; x directly.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_normalDistn9')\">9. Normal probability plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows normal probability plots for data that have normal and non-normal distributions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
