var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Understanding relationships</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship1')\">1. Strength of a relationship</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The main feature of interest in a scatterplot is the strength of the relationship between the two variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship2')\">2. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An extreme value of one or both of the variables is an outlier. An unusual combination of values is also called an outlier.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship3')\">3. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the crosses on a scatterplot separate into clusters, different groups of individuals are suggested.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship4')\">4. Dangers of over-interpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In small data sets, there may be considerable variability, so patterns should be strongly evident before they are reported.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship5')\">5. Explanatory and response variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>One variable can often be classified as an explanatory variable that either causally affects the reponse variable, or is useful for predicting its value.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
