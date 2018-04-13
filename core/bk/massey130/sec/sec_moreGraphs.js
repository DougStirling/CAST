var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Improved simple graphs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay6')\">1. Splitting the stems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For some data sets, a basic stem and leaf plot groups the leaves into too many or too few classes (rows). To improve the presentation, each stem may be repeated either 2 or 5 times.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density7')\">2. Histograms with varying class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a histogram has varying class widths, the vertical axis must be 'density'. The histogram shape would be misleading if frequency or relative frequency was used for the vertical axis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density8')\">3. Histogram areas and proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The proportion of values in any classes always equals the proportion of the total histogram area that is above the classes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot4')\">4. Displaying outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The basic box plot is often modified to display outliers as separate crosses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot5')\">5. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots cannot show clusters, so must never be used for data with clusters.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat2')\">6. Pareto diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the categories in a bar chart have no natural ordering, it is often helpful to sort the categories into decreasing frequencies. If cumulative frequencies are also shown, the bar chart is called a Pareto diagram.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
