var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Sampling schemes</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>In many practical situations, there are better sampling schemes than simple random samples.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice_b1')\">1. Stratified sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>More accurate estimates can sometimes be obtained by taking separate random samples within different parts of the population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice2')\">2. Cluster sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When individuals are grouped in clusters, it is often cheaper to sample complete clusters rather than separate individuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice3')\">3. Two-stage sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the target population is spread over a wide area, it may be cheaper to take a sample of regions (groups of individuals), than to sample from all the regions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
