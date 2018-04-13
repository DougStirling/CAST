var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Graphical displays</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>The first four exercises in this section are about drawing different displays of data. It can be argued that these are not  important skills since a computer can produce them for you. However the exercises check that you understand how they are formed.</p> 	<p>The last three exercises are about interpreting these graphical displays.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_valueDisplay1')\">1. Stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In the two exercises on this page, you will drag leaves to form stem and leaf plots from a list of values. The second exercise creates stem and leaf plots with split stems. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_valueDisplay2')\">2. Stacked dot plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to drag the final two crosses of a stacked dot plot into the correct places of the display.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot1')\">3. Box plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page involve drawing box plots from sorted lists of values. For the second exercise, 'outliers' must be separately identified.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_density1')\">4. Histograms</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this page, you will draw histograms of different data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot2')\">5. Shape of a box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page involve matching the shape of box plots to the corresponding dot plots.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_density2')\">6. Histogram areas and proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two exercises in this page ask you to use the shape of a histogram to find the proportion of values in a given range. The first exercise shows the number of values in each class, but the second requires the histogram area to be estimated 'by eye'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_displayInterp1')\">7. Information from distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will interpret what distributions with symmetry, skewness, clusters or outliers tell you about the data.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
