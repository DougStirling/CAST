var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing many groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_multiGroup1')\">1. Anova table formulae</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page shows four formulae relating to an Anova table and ask you to match them with textual descriptions of how they are interpreted.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_multiGroup2')\">2. Anova table values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives an analysis of variance table and asks you to find a few values from it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_multiGroup3')\">3. Conclusion from Anova table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows an analysis of variable table and asks for the conclusion, described in the context of the problem.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
