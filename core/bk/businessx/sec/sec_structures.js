var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standard data structures</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures_c1')\">1. Data structures</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Examples showing that the same 'data structure' can apply to many contexts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures_c2')\">2. Variables and individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Illustration of variables and individuals in a data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures_c3')\">3. Types of variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Definitions of numerical and categorical variables. Example representing numerical variables and a categorical variable on a map.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures_c4')\">4. Categorical variables and groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing how groups can be represented by a categorical variable and a categorical variable can split data into groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures_c5')\">5. Meaningful variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Examples where a function of the original variables is more meaningful or highlights a different aspect of the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures_c6')\">6. Time-ordered data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Static example of time series data and the use of a 'time' variable to capture the ordering.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures7')\">7. Multi-level data (advanced)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example showing linkage between household-level and individual-level data matrices.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures8')\">8. Analysing data at different levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example showing data copied down from household to individual level and summarised up from individual to household level.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
