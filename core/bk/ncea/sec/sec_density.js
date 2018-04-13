var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Histograms and density</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density1')\">1. Density of values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The heights of the stacks of leaves in a stem and leaf plot or crosses in a dot plot describe the density of values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density2')\">2. Histogram with equal class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a simple histogram, the height of the rectangle above each class on the axis equals the number of values in the class -- the class frequency.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density3')\">3. Choice of classes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Class width and start-point should be chosen to make the histogram as smooth as possible -- neither too blocky nor too jagged.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density4')\">4. Histograms of small data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The shape of a histogram can be very dependent on the choice of classes if the data set is small; beware over-interpreting its shape. Stacked dot plots are a better display of small data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density6')\">5. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The vertical axis should be relative frequency, not frequency, when comparing two groups with histograms. Population pyramids are often used to compare age distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density9')\">6. Frequency polygons</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Frequency polygons are closely related to histograms but give a less 'blocky' display of density. Different groups can be compared more easily with them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density11')\">7. Drawing histograms by hand</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Histograms are based on frequency tables. Class boundaries should avoid possible data values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_density1')\">8. Exercise: Draw a histogram</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this page, you will draw histograms of different data sets.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
