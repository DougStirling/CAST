var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Presenting data in tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_tableDisplay1')\">1. Gridlines and white space</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows a published table with all values boxed. An improved version of the table can be displayed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_tableDisplay2')\">2. Layout and annotation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows a complex published table whose structure can be clarified by rearranging rows, use of white space and a few other improvements.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_tableDisplay3')\">3. Significant digits and data noise</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, the number of displayed digits can be altered, making the point that it is rarely informative to use more then 3 significant digits.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_tableDisplay_c4')\">4. Meaningful variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this example, the ratio of two variables displays different meaningful information. (The number of displayed digits can also be adjusted.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_tableDisplay5')\">5. Reordering rows</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram allows the rows of a table to be ordered in different ways, highlighting different information from the table. (Any way is better than alphabetically.)</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
