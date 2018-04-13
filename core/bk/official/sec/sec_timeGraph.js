var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Changes over time</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timeGraph0')\">1. Overview</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page is an overview of the section.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timeGraph1')\">2. Time series charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Changes to a single numerical measurement over time can be displayed in a scatterplot of the measurement against time with successive values joined by lines.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timeGraph2')\">3. Time series for quantities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the measurement is a quantity, an alternative display is a bar chart with a bar for each successive value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timeGraph3')\">4. Time series with categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the values at each time point form a partition of some total, such as a frequency table, a series of stacked bar charts of the values or proportions provides an effective display.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timeGraph4')\">5. Chartjunk</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simple time series are sometimes drawn in 3 dimensions as a ribbon chart. This may look more artistic, but makes the information in the data harder to see.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timeGraph5')\">6. Dynamic pie and bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When presented on a computer, simple diagrams such as pie and bar charts can be animated to show how they change over time. However when the individual diagrams are simple, it is often possible to display all data in a static diagram more effectively. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timeGraph6')\">7. Dynamic histograms</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Frequency tables of numerical measurements such as ages are usually displayed in histograms. They too can be animated to show changes over time.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timeGraph7')\">8. Dynamic scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A particularly useful type of display to animate is a scatterplot, either of crosses or circles of varying sizes. When the crosses represent countries or regions, it is often possible to pick out ones that behave differently from the rest. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timeGraph8')\">9. Dynamic maps</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Maps can also be animated to show changes over time. The measurement of interest can be displayed with either the shading of countries on the map or of circles that are superimposed on it.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
