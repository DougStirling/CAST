var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn_e1')\">1. Probability and area under normal curve</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for a normal probability, found using an external statistics program.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn_e2')\">2. Finding X from probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page asks the inverse problem; given a probability, it asks for the corresponding percentile.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
