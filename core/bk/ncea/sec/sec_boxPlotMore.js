var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>More about box plots</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot4')\">1. Displaying outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The basic box plot is often modified to display outliers as separate crosses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot5')\">2. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots cannot show clusters, so must never be used for data with clusters.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot6')\">3. Comparison of groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots are particularly effective for displaying differences between several groups of values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot7')\">4. Dangers of over-interpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots are relatively stable, and contain less 'noise' than other displays. They can concisely describe differences between even small groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlotMore1')\">5. Exercise: Draw a box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page involves drawing a box plots from a sorted lists of values; 'outliers' must be separately identified.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
