var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Frequency tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable1')\">1. Frequency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A frequency table holds all information about the distribution of a categorical variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable2')\">2. Proportions and percentages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The proportions or percentages of values are usually easier to interpret than the raw frequencies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable3')\">3. Recognising frequency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a frequency table, each 'individual' contributes 1 to exactly one table entry. Many published tables are not frequency tables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable2')\">4. Exercise: Propns from tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise displays frequency tables and asks you to find the proportion or percentage of values equal to, or not equal to, a particular categorical value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable3')\">5. Exercise: Propns from ordered categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise in this page is similar to the previous exercise but asks questions about values greater than, greater than or equal to, etc. a value.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
