var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bar charts to compare groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph1')\">1. Bar charts of frequencies and proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tables of grouped data are often displayed graphically with bar charts. Bar charts of proportions within groups are usually easier to compare than bar charts of the raw values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph3')\">2. Clustered bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The bars can be clustered together by group or by category.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph4')\">3. Stacked bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there are many groups, stacking the bars often makes it easier to compare the groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph5')\">4. Two categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there are only two categories in each group, there is no need to present both proportions. A simple bar chart of one proportion is sufficient and allows the scale to be expanded if the proportion is small for all groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph6')\">5. Chartjunk</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three-dimensional versions of clustered and stacked bar charts make it harder to understand the data and can be misleading.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
