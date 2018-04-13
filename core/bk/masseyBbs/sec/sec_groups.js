var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp5')\">1. Comparing dot and stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the values come from 2 or more groups of individuals, dot plots and stem and leaf plots can be modified to show this extra information.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_c6')\">2. Comparing histograms</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The vertical axis should be relative frequency, not frequency, when comparing two groups with histograms. Population pyramids are often used to compare age distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_c9')\">3. Frequency polygons</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Frequency polygons are closely related to histograms but give a less 'blocky' display of density. Different groups can be compared more easily with them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot1')\">4. The need to summarise</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dot plots, stem and leaf plots and histograms contain detailed information that is distracting when two or more data sets are being compared.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot2')\">5. Median, quartiles and box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The median and quartiles split a batch of values into four equal-sized sets of values. A box plot is a graphical display of the median, quartiles and extremes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot3')\">6. Interpreting a box plot's shape</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A box plot clearly shows the centre, spread and skewness of a data set. It splits the corresponding histogram into 4 approximately equal areas.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot4')\">7. Displaying outliers</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The basic box plot is often modified to display outliers as separate crosses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot5')\">8. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots cannot show clusters, so should not be used to summarise data with clusters.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot_c6')\">9. Comparison of groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots are particularly effective for displaying differences between several groups of values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot7')\">10. Dangers of over-interpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots are relatively stable, and contain less 'noise' than other displays. They can concisely describe differences between even small groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot1')\">11. Exercise: Draw a box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page involve drawing box plots from sorted lists of values. For the second (optional) exercise, 'outliers' must be separately identified.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot2')\">12. Exercise: Shape of a box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page involve matching the shape of box plots to the corresponding dot plots.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
