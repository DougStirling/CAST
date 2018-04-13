var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Groups and regression</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups1')\">1. Additional variables in regression</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Correlation and least squares are used to describe the relationship between two numerical variables. Additional measurements from each individual can potentially help to refine our understanding of the relationship.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups2')\">2. Displaying groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Different symbols or colours can be used to represent a third categorical variable in a scatterplot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups3')\">3. Regression with grouped data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The relationship between Y and X can be separately described by a least squares line within each group. This should lead to improved prediction of the response if the relationship is different in different groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups4')\">4. Parallel regression lines</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If regression lines for the different groups are parallel, it is easy to summarise the group differences numerically and interpret these differences.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups5')\">5. Transformed variables and groups</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transformations may linearise the relationship between the response and explanatory variables in each group and also give parallel regression lines.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups6')\">6. Grouping with a numerical variable</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A numerical variable can be used to split the individuals into groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups_c7')\">7. Displaying groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Groups can also be represented with different symbols or colours on a scatterplot matrix that describes the relationships between 3 or more other variables.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
