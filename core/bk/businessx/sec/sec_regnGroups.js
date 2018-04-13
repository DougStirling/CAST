var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Groups and regression</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnGroups1')\">1. Additional variables in regression</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A scatterplot of Y vs X with LS line is dynamically linked to a data matrix that also contains further variables. It is used to explain that the extra variables may help to predict Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnGroups2')\">2. Displaying groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this scatterplot of Y vs X, the crosses can be coloured to represent a categorical variable, Z.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnGroups3')\">3. Regression with grouped data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a scatterplot of Y vs X and can display either a single common least squares line or separate least squares lines for the different groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnGroups4')\">4. Parallel regression lines</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram can be used to explain why interpretation of the parameters is easier when the least squares lines for different groups are constrained to be parallel.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnGroups5')\">5. Transformed variables and groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, least squares lines for two groups have different slopes, but if the response is replaced by its logarithm, parallel lines are reasonable. The parallel lines can be interpreted as the expected response in one group being a constant multiple of the other (on average).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnGroups6')\">6. Grouping with a numerical variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simple diagram shows an example in which groups are defined from values of an ancillary numerical variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnGroups_c7')\">7. Scatterplot matrix with groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this example, different symbols are used to distinguish groups in a scatterplot matrix.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
