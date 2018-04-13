var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Presenting data in tables</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>This section describes principles for effective display of frequency tables, contingency tables and other tabular displays of data in reports.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay0')\">1. Overview</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page is an overview of the section.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay1')\">2. Gridlines and white space</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Never use gridlines to box all values in a table. In large multi-column tables, reading across rows is easier with occasional hairlines of light shading, but otherwise consider using white space to separate associated groups of rows or columns.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay2')\">3. Layout and annotation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Use white space to group related rows and columns. Rearranging rows or columns may bring values that should be compared closer. Summarise and interpret in the body of a report but do not simply repeat values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay3')\">4. Significant digits and data noise</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The meaningful information is 'signal'. Information that does not help understanding of the data is 'noise'. Noise includes data noise and unnecessary embellishments to the table. Decreasing the significant digits displayed often decreases data noise.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay4')\">5. Meaningful variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Showing proportions in a multi-column table instead of frequencies makes it easier to compare groups. Ratios of variables can be easier to interpret than their raw values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay5')\">6. Swapping rows and columns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is easier to compare values down rows than across columns. Interchanging the rows and columns of a table can make it easier to make comparisons.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay6')\">7. Reordering rows</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Rearranging the rows (or columns) may make the information in large tables stand out better.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay7')\">8. Example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows a published table whose presentation can be improved in many ways.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
