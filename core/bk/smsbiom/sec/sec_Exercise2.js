var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>The first four exercises in this topic are about drawing and interpreting different displays of data.</p> <p>The last three exercises are about the mean and standard deviation.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_valueDisplay2')\">1. Stacked dot plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You just have to drag the final two crosses of a stacked dot plot into the correct places of the display.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot1')\">2. Box plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page involve drawing box plots from sorted lists of values. For the second exercise, 'outliers' must be separately identified.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot2')\">3. Shape of a box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Can you match the shape of box plots to the corresponding dot plots?</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_displayInterp1')\">4. Information from distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You interpret what distributions with symmetry, skewness, clusters or outliers tell you about the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread1')\">5. Ideas of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You summarise the difference between two distributions in terms of their centres and spreads.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread2')\">6. Mean and median</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You practice estimating the mean and median from different skew and symmetric stacked dot plots?</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread3')\">7. Standard deviation from graph</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You 'guess' the standard deviation of data sets from a stacked dot plot. The second exercise is similar but displays the data as a histogram or box plot.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
