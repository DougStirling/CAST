var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Frequency tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable1')\">1. Frequency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A frequency table holds all information about the distribution of a categorical variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable_a2')\">2. Proportions and percentages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The proportions or percentages of values are usually easier to interpret than the raw frequencies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay_a1')\">3. Gridlines and white space</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The meaningful information in most frequency tables is contained in the first 2 or 3 significant digits of the counts and proportions. When including frequency tables in reports, only show the most significant digits.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay3')\">4. Significant digits and data noise</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When including frequency tables in reports, never draw grid lines that box every value. Use white space to separate different parts of the table in preference to lines.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable3')\">5. Recognising frequency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a frequency table, each 'individual' contributes 1 to exactly one table entry. Many published tables are not frequency tables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable4')\">6. Changes to the categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The information in a frequency table may be clearer if the categories are re-ordered, associated categories are combined, or if the table only describes a subset of the categories.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
