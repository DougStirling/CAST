var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat_c1')\">1. Contingency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Categorical data collected from different groups can be shown in a contingency table. It contains a simple frequency table for each group.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat_c2')\">2. Contingency table examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Contingency tables sometimes arise from experiments. Data collected from surveys are often presented in contingency tables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat_c3')\">3. Bar charts using proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is easier to compare groups if bar charts are drawn from the proportions within each group rather than the frequencies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat_c4')\">4. Stacked bar charts</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stacking the bars in each bar chart makes it easier to compare groups. Stacked bar charts are particularly effective for ordinal categorical data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat_c5')\">5. Two special cases</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the variable has only two categories, stacked bar charts can be simplified. An example is also given where the grouping forms a time series.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat6')\">6. Bivariate categorical data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Contingency tables are also used to summarise data sets in which two different categorical measuements are made from each individual. The data can be presented graphically by using one variable to split the individuals into groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_groupedCat1')\">7. Exercise: Create a contingency table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise presents a list of values of two categorical variables; you must generate a contingency table summarising the data.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
