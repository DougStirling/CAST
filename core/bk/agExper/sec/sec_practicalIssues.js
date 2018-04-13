var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Practical issues in design</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('practicalIssues1')\">1. Problem and objectives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The problem being addressed by a project and its specific objectives should be clearly stated before data are collected. The researcher should also consider how the project results will be used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('practicalIssues2')\">2. Experiment or survey?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Depending on the objectives of a project, it may be appropriate to conduct an experiment, a survey or both.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('practicalIssues3')\">3. Measurements</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In experiments and surveys, data are collected from discrete units. Decisions about which measurements should be made from each unit must be guided by the objectives of the study.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('practicalIssues4')\">4. Difficulties with human subjects</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When experiments and surveys are conducted with people rather than other types of unit, various practical issues complicate the design.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
