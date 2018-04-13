var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Sampling in practice</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_sampPractice1')\">1. Stratified sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that stratified sampling gives a more accurate estimate than simple random sampling when the strata have different means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_sampPractice2')\">2. Strata with different variability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulation showing that a more accurate estimate can be found by over-sampling strata with high variability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_sampPractice3')\">3. Cluster sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates taking a cluster sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_sampPractice4')\">4. Loss of accuracy with cluster sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulation showing that cluster sampling has the same accuracy as simple random sampling if values within clusters. are not correlated; otherwise, cluster sampling is worse.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_sampPractice5')\">5. Two-stage sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how two-stage samples are selected.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_sampPractice6')\">6. Cost and accuracy of two-stage sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulation showing the trade-off between cost and accuracy when the primary units have different characteristics.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
