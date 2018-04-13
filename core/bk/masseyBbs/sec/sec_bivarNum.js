var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Two numerical variables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot_c1')\">1. Bivariate data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many data sets contain two or more measurements from each individual. Even when the main interest is in one variable, the others can help to understand its distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot_c2')\">2. Scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The main display that shows the relationship between two variables is a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot3')\">3. Limitations of univariate displays</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Univariate displays don't show relationships between variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot_c4')\">4. Marginal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A scatterplot of two variables can be enhanced with box plots or histograms on the margins of a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship_c1')\">5. Strength of a relationship</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The main feature of interest in a scatterplot is the strength of the relationship between the two variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship_c2')\">6. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An extreme value of one or both of the variables is an outlier. An unusual combination of values is also called an outlier.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship_c3')\">7. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the crosses on a scatterplot separate into clusters, different groups of individuals are suggested.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship_c4')\">8. Dangers of over-interpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In small data sets, there may be considerable variability, so patterns should be strongly evident before they are reported.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship_c5')\">9. Explanatory and response variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>One variable can often be classified as an explanatory variable that either causally affects the reponse variable, or is useful for predicting its value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_scatterplot1')\">10. Exercise: Draw a scatterplot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will complete a scatterplot by dragging the crosses for the last two observations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_scatterplot2')\">11. Exercise: Interpret a scatterplot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises in this page expect you to interpret scatterplots in terms of the relationship between the variables, clusters and outliers. In the first exercise, the interpretation is in an application context, whereas in the second the interpretation is in generic terms.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
