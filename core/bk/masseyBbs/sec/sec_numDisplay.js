var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tables and graphs for numbers</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Stem and leaf plots and dot plots show each value in a data set graphically; histograms summarise the shape of the overall distribution.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_c1')\">1. Analysing variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Meaningful information can be obtained from variation in the values of a variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_c5')\">2. Stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stem and leaf plots shows each value as a digit in a display whose shape gives an overall impression of the distribution of values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_c6')\">3. Splitting the stems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>To increase the flexibility of the display, each stem may be repeated either 2 or 5 times, increasing the number of classes in the basic stem and leaf plot by a factor of 2 or 5.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_c7')\">4. Drawing stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stem and leaf plots are very easy to draw by hand.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('valueDisplay_c3')\">5. Dot plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stacked dot plots are closely related to stem and leaf plots but use crosses rather then leaf digits. Jittered dot plots draw crosses at their exact position along an axis but randomly move them perpendicularly to separate them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density1')\">6. Density of values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The heights of the stacks of leaves in a stem and leaf plot or crosses in a dot plot describe the density of values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density2')\">7. Histogram with equal class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a simple histogram, the height of the rectangle above each class on the axis equals the number of values in the class — the class frequency.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_c3')\">8. Choice of classes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Class width and start-point should be chosen to make the histogram as smooth as possible — neither too blocky nor too jagged.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_c4')\">9. Histograms of small data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The shape of a histogram can be very dependent on the choice of classes if the data set is small; beware over-interpreting its shape. Stacked dot plots are a better display of small data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density5')\">10. Relative frequency and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a histogram, the proportion of the total area that is above any class equals the relative frequency of the class.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density11')\">11. Drawing histograms by hand</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Histograms are based on frequency tables. Class boundaries should avoid possible data values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density7')\">12. Histograms with varying class widths</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a histogram has varying class widths, the vertical axis must be 'density'. The histogram shape would be misleading if frequency or relative frequency was used for the vertical axis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_valueDisplay1')\">13. Exercise: Draw a stem and leaf plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In the two exercises on this page, you will drag leaves to form stem and leaf plots from a list of values. The second exercise creates stem and leaf plots with split stems. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_density1')\">14. Exercise: Draw a histogram</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this page, you will draw histograms of different data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_density2')\">15. Exercise: Histogram areas and proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two exercises in this page ask you to use the shape of a histogram to find the proportion of values in a given range. The first exercise shows the number of values in each class, but the second requires the histogram area to be estimated 'by eye'.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
