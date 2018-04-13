var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Total quality management</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tqm1')\">1. Introduction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The quality of any process is critically important to its success. It is important to monitor quality and continually try to maintain or improve it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context3')\">2. The statistical process</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A cycle of data collection and analysis is a central part of the quest for improvement to systems and processes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart9')\">3. Finding the cause of problems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a problem is detected in a process, brainstorming and cause-and-effect diagrams can help to determine the cause of the problem.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
