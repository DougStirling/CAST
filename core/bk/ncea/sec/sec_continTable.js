var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Contingency tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat1')\">1. Contingency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Categorical data collected from different groups can be shown in a contingency table. It contains a simple frequency table for each group.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat2')\">2. Contingency table examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Contingency tables sometimes arise from experiments. Data collected from surveys are often presented in contingency tables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continTable3')\">3. Proportions within groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is easier to compare groups if bar charts are drawn from the proportions within each group rather than the frequencies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures3')\">4. Categorical variables and groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A categorical variable can be used to split the 'individuals' into groups. Equivalently, grouped data can be represented in a data matrix with a categorical variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_groupedCat1')\">5. Exercise: Create a contingency table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise presents a list of values of two categorical variables; you must generate a contingency table summarising the data.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
