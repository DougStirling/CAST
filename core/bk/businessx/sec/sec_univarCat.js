var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bar and pie charts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_univarCat1')\">1. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that the heights of the bars in a bar chart are defined equivalently by the category frequencies or proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_univarCat2')\">2. Sorting categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram dynamically sorts the categories in a bar chart of nominal categorical data from alphabetical order to decreasing frequencies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_univarCat3')\">3. Pareto diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Clicking on any bar of the Pareto diagram stacks the bars to the left to show the cumulative proportion. An option dynamically uncouples the axes for the single bars heights (left) and the cumulative proportions (right).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_univarCat_c4')\">4. Stacked bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram dynamically stacks the bars of a regular bar chart.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_univarCat_c5')\">5. Pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The bars of a stacked bar chart are dynamically transformed to the slices of a pie chart in this diagram.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_univarCat_c6')\">6. Comparison of bar and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this example, some information is more readily read from a bar chart and other information is clearer in a pie chart.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_univarCat7')\">7. Bar charts for quantities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows annual values of quantities as a bar chart. The data can also be displayed as a regular time series plot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_univarCat8')\">8. Pie charts for quantities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example shows a pie charts for quantity data -- i.e. how a continuous total quantity is partitioned into categories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_univarCat_c9')\">9. Chartjunk and misleading diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Five examples show bar and pie charts with either 3-dimensional 'enhancements' or misleading features.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
