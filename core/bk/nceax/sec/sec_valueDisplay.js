var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Graphical display of values</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_valueDisplay1')\">1. The basic dot plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example where sorting the data highlights a pattern that is not evident in the raw data. A basic dot plot is dynamically linked to the sorted list of values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_valueDisplay2')\">2. Jittered and stacked dot plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram animates random jittering of crosses. It also animates the stacking of crosses of various sizes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_valueDisplay3')\">3. Crosses or digits</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram introduces the idea of replacing crosses in a stacked dot plot with digits (leaves).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_valueDisplay4')\">4. Basic stem and leaf plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example of a stem and leaf plot. Clicking any leaf displays the value associated with it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_valueDisplay7')\">5. More about stems and leaves</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing how data values are split into stems and leaves, with further less significant digits possibly deleted.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_valueDisplay8')\">6. Drawing a stem and leaf plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing how a stem and leaf plot is built by hand.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
