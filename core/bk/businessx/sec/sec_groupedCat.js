var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_groupedCat_c1')\">1. Contingency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how contingency tables are formed from raw data -- either from lists of categories in several groups or two categorical variables in a data matrix.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_groupedCat_c2')\">2. Contingency table examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Examples show contingency tables from experiments and surveys.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_groupedCat_c3')\">3. Proportions within groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows an example in which the groups have different sizes. It shows that changing the counts into proportions (or percentages) makes it easier to compare groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_groupedCat_c4')\">4. Bar charts using proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows clustered bar charts for counts and proportions, clustered by either of the two variables. It dynamically changes from one to the other.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_groupedCat_c5')\">5. Stacked bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram dynamically stacks the bars in a clustered bar chart for an ordinal data set. It shows that comparisons of the groups are easier with the stacked bar chart.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_groupedCat_c6')\">6. Time series of categorical distns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example is similar to the one on the previous page but 'year' is the 'group' variable and the variable of interest is binary. Again, counts or proportions can be used and the bars can be clustered or stacked.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_groupedCat_c7')\">7. Binary variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The diagram on this page shows an example where p(success) is small for each group. It dynamically changes a stacked bar chart into a simple bar chart of p(success) to show differences better.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
