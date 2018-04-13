var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Proportions and percentiles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_percentile1')\">1. Cumulative proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing jittered dot plot and box plot where you can drag to highlight lower values and display the corresponding cumulative proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_percentile2')\">2. Graph of cumulative proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A diagram similar to the previous one but also displaying the cumulative distribution function and showing how the cumulative proportions correspond to the height of this.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_percentile3')\">3. Percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram that also shows the cumulative distribution function but where you drag the percentage arrow and read off the corresponding percentile.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_percentile4')\">4. Displaying percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how the 25th, 50th and 75th percentiles correspond to the central box of a box plot. These percentages can be changed (by dragging) and also displayed with the extremes in display that is related to a box plot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_percentile5')\">5. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, quantiles are used to compare several groups graphically.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_percentile6')\">6. Better definition of percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram explains that the percentiles reported by computer software correspond to reading off quantiles from a smoothed version of the cumulative distribution function.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
