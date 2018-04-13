var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Displaying individual marks</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Dot plots and stem and leaf plots show each value in a data set graphically.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay1')\">1. Dot plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A dot plot displays each value as a cross along a numerical axis. Dot plots can be jittered or stacked to help distinguish individual crosses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay2')\">2. Stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stem and leaf plots are similar to stacked dot plots, but hold more information.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay3')\">3. Splitting the stems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For some data sets, a basic stem and leaf plot gives too coarse a grouping of values. This page describes a simple modification that gives more flexibility in the display.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay4')\">4. Creating the plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dot plots can be drawn (with a little effort) in Excel. Stem and leaf plots cannot be produced in Excel but are easy to draw by hand.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
