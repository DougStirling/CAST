var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Designs with 16 runs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run16Design1')\">1. Four factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A complete factorial experiment for 4 factors can be designed with 16 runs. All main effects and interactions can be estimated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run16Design2')\">2. Five factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If factor E is confounded with the 4-factor interaction between A, B, C and D in a complete factorial experiment for these 4 factors, all main effects and 2-factor interactions can be independently estimated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run16Design3')\">3. Six to eight factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The additional factors E, F, G and H should be confounded with 3-factor interactions between A, B, C and D. The factors are orthogonal and are not confounded with 2-factor interactions, but some 2-factor interactions are confounded with others.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run16Design4')\">4. Nine to fifteen factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The factors E, F, ... can be confounded with any selection of the interactions between A, B, C and D. When there are 9 or more factors, it is impossible to avoid confounding main effects with 2-factor interactions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
