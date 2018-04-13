var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simple tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleTable0')\">1. Overview</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page is an overview of the section.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleTable1')\">2. Frequency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A frequency table counts the number of items in a population that are in different groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleTable2')\">3. Tables for other partitions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Other quantities such as money or production may be partitioned into several categories. The total of the values in the categories is meaningful in such tables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleTable3')\">4. Proportions and percentages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For frequency tables and other partitions, a column of percentages is often added.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleTable4')\">5. Other simple tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows a simple table whose values are not a partition of a meaningful total.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleTable5')\">6. Variations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In simple tables, the categories may be reordered, related categories can be combined and it may be informative to restrict attention to a subset of categories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('simpleTable6')\">7. Tables within tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Larger published tables often consist of a set of smaller simple tables in different columns. Two examples are presented.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
