var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Histograms and density</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density1')\">1. Density of values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing stacked dot plot changing into histogram. A smooth 'density' curve can be superimposed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density2')\">2. Histogram with equal class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing how rectangle height equals class frequency.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density3')\">3. Choice of classes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing how choice of classes affects histogram shape. It shows jagged shape when classes are too narrow and blocky shape when they are too wide.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density_b4')\">4. Histograms of small data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing that histogram shape can depend greatly on choice of classes for small data sets. Be careful not to over-interpret shape.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density5')\">5. Relative frequency and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing that area = relative frequency.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density_b6')\">6. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing that histograms of two groups of different sizes can be better compared if relative frequency is used instead of frequency.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density_b7')\">7. Histograms with varying class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing that the area for each value and the total area should stay the same when classes are combined.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density8')\">8. Mixed class widths (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing when mixed class widths might be desirable. It also shows that the proportion of the histogram area above any classes equals the proportion of values, even when there are varying classed widths.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density9')\">9. Frequency polygons</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing how frequency polygons are related to histograms and demonstrating that they are better for comparing groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density10')\">10. Kernel density estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram explaining and using kernel density estimates.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
