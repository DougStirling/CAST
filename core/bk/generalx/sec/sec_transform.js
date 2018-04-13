var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Transformations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_transform1')\">1. Linear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that the shape of a distribution is unaltered by linear transformation by displaying a dot plot against dual axes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_transform2')\">2. Log transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram contains a slider that applies a log transformation to a skew data set to give a relatively symmetric distribution. It illustrates how the log transformation expands the lower values and moves the higher values closer together.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_transform3')\">3. When to use log transform?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example is a data set that covers less than 1 order of magnitude. A log transformation has relatively little effect on the skewness of the distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_transform4')\">4. Power transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, you can apply a general power transformation to a data set by dragging a marker on the axis (visually compressing the values at one side of the axis). The axes can display the transformed values (evenly spaced on the axis) or the raw values (unevenly spaced).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_transform5')\">5. Effect of transformations on displays</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the effect of power transformations on the appearance of a box plot and a stacked dot plot of a data set.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
