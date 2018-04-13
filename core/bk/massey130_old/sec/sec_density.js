var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Histograms and density</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>A histogram does not separately display the individual values. In large data sets it displays the major features of the distribution  better than dot plots or stem and leaf plots.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density1')\">1. Density of values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The heights of the stacks of crosses in a dot plot describe the density of values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density2')\">2. Histogram with equal class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a simple histogram, the height of the rectangle above each class on the axis equals the number of values in the class -- the class frequency.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density3')\">3. Choice of classes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Class width and start-point should be chosen to make the histogram as smooth as possible -- neither too blocky nor too jagged.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_b4')\">4. Histograms of small data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The shape of a histogram can be very dependent on the choice of classes if the data set is small; beware over-interpreting its shape. Stacked dot plots are a better display of small data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density5')\">5. Relative frequency and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a histogram, the proportion of the total area that is above any class equals the relative frequency of the class.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_b6')\">6. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The vertical axis should be relative frequency, not frequency, when comparing two groups with histograms. Population pyramids are often used to compare age distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_b7')\">7. Histograms with varying class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a histogram has varying class widths, the vertical axis must be 'density'. The histogram shape would be misleading if frequency or relative frequency was used for the vertical axis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density8')\">8. Understanding histograms</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The proportion of values in any classes always equals the proportion of the total histogram area that is above the classes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density9')\">9. Frequency polygons</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Frequency polygons are closely related to histograms but give a less 'blocky' display of density. Different groups can be compared more easily with them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density10')\">10. Kernel density estimates</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Kernel density estimates show density in a still smoother display.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
