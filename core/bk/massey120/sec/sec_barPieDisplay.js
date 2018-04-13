var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Presenting bar and pie charts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleBar1')\">1. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The simplest graphical display of a table of values is a bar chart. The bars can be drawn either vertically or horizontally. If the values are partitions of a total, a second axis with percentages can be added.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleBar2')\">2. Ordering of categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there is no natural ordering of the categories in a bar chart, it is often informative to arrange them in decreasing order of the values. If the values are partitions of a total, cumulative percentages can be added.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleBar3')\">3. Importance of zero and -ve values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If possible, all bars should start at zero, so bar length is proportional to the values. If the axis does not include zero, this should be clearly indicated with zig-zags on the bars or axis. Negative values can be represented with bars hanging below the axis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleBar4')\">4. Chartjunk</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three-dimensional representations of bar charts should be avoided.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleBar5')\">5. Misleading bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is misleading to replace simple bars with 2- or 3-dimensional objects whose height represents the values since the visual impression depends on the area or volume of the objects.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simplePie3')\">6. Chartjunk for pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three-dimensional pie charts should be avoided.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simplePie4')\">7. Misleading stacked bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Avoid splitting a picture into segments to form a stacked bar chart. The resulting picture often misrepresents the values for the different categories.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
