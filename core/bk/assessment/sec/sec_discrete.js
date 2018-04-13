var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Discrete and categorical data</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discrete1')\">1. Discrete and continuous data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Mark data are usually counts and are therefore discrete.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discrete2')\">2. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If discrete data cover a large range of counts, a histogram can be used. If there are only a small number of possible values, a bar chart is better.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discrete3')\">3. Categorical data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some assessment information is categorical rather than numerical. Bar charts can also be used to display categorical data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discrete4')\">4. Stacked bar charts and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>These are alternative displays of discrete and categorical data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discrete5')\">5. Drawing bar and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Information is given about drawing bar and pie charts in Excel.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
