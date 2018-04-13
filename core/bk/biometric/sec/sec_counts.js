var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Discrete data (counts)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b1')\">1. Discrete and continuous data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Discrete data sets contain counts whereas continuous data sets could potentially contain any values within an interval. Stacked dot plots are good displays of small discrete data sets containing small counts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b2')\">2. Histograms for counts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the range of possible counts is moderate or large, a histogram is an effective display of the distribution. Class width should be a whole number and class boundaries should end in '.5'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts3')\">3. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the range of possible counts is small, a bar chart is a better representation of the data than a histogram.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b4')\">4. Mean and st devn</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A frequency table is often used to summarise discrete data. The mean and standard deviation can be evaluated easily from the frequency table.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
