var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>More about variation (optional)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_moreVariation1')\">1. Effect of outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram allows an outlier to be added to a data set and shows its influence on the mean and, especially, the standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_moreVariation2')\">2. Standard deviation of grouped data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A diagram shows that the standard deviation within groups is usually lower than the overall standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_moreVariation3')\">3. Explained variation and predictions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows that if a forecast of rainfall (low, average or high) is a good one, the standard deviation of actual rainfalls within each forecast grouping is lower than the overall standard deviation of rainfalls. (The quality of the forecast can be adjusted with a slider.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_moreVariation4')\">4. Root mean squared error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A diagram displays the differences between values and a target, k, as squares. The root mean squared error is the side length of a square whose area is the average of these. (Crosses can be dragged.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_moreVariation5')\">5. Graphical interpretation of st devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram is similar to that in the previous page but the squared distances are to the sample mean. The standard deviation can be interpreted in terms of the average area of these squares. (Crosses can be dragged so the diagram can also be used to explain the influence of an outlier.)</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
