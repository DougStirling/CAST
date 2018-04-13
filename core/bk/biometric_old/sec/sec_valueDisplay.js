var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.gif' width='31' height='31'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.gif' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Graphical display of values</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Dot plots and stem and leaf plots show each value in a data set graphically.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b1')\">1. Analysing variation</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Meaningful information can be obtained from variation in the values of a variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b2')\">2. Basic dot plot</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>A dot plot displays each value as a cross along a numerical axis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b3')\">3. Jittered dot plot</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Jittering is a modification to the basic dot plot that avoids some problems associated with overlapping crosses</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b4')\">4. Stacked dot plots</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Stacking of the crosses is an alternative to jittering that highlights ranges of high or low density.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_b5')\">5. Stem and leaf plots</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Stem and leaf plots are similar to stacked dot plots, but a digit is used instead of a cross to retain extra information.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay6')\">6. Splitting the stems</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>To increase the flexibility of the display, each stem may be repeated either 2 or 5 times, increasing the number of classes in the basic stem and leaf plot by a factor of 2 or 5.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay7')\">7. Drawing stem and leaf plots</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>For data analysis, stem and leaf plots are rarely more informative than stacked dot plots, but they are easy to draw by hand.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
