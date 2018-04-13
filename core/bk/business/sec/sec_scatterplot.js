var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Scatterplots</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot_c1')\">1. Bivariate data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many data sets contain two or more measurements from each individual. Even when the main interest is in one variable, the others can help to understand its distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot_c2')\">2. Scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The main display that shows the relationship between two variables is a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot3')\">3. Limitations of univariate displays</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Univariate displays don't show relationships between variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot_c4')\">4. Marginal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A scatterplot of two variables can be enhanced with box plots or histograms on the margins of a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterplot_c5')\">5. Time series</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When a single measurement is made at regular intervals, the data are called a time series. Time series data can be treated as bivariate, with time being the second variable.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
