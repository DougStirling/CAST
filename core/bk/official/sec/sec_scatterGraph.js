var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Relationships between measurements</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterGraph0')\">1. Overview</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page is an overview of the section.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterGraph1')\">2. Scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A scatterplot displays the values of two measurements from each region or other 'individual'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterGraph2')\">3. Information from scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Scatterplots show whether particular values of one measurement are associated with particular values of the second measurement. The strength of the relationship is important. Crosses that do not conform to the same relationship as the rest of the data are also important.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterGraph3')\">4. Distinguishing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The crosses on a scatterplot can be coloured to distinguish different groups, or differing symbols can be used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterGraph4')\">5. Showing size</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Scatterplots are often used when the crosses correspond to different geographical regions. If these differ in size, the crosses can be replaced by circles whose area is proportional to the size -- e.g. area, population or GDP.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterGraph5')\">6. Nonlinear scales</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Economic measurements from countries often contain many small values, but a few very large values (usually corresponding to rich countries). In order to distinguish the small values (often poor countries), a nonlinear scale can be used on a scatterplot.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
