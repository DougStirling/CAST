var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>More about histograms</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Many teachers at NCEA level 1 only cover histograms in which all classes have equal widths and class height can therefore be equal to frequency. Some teachers explain how to draw histograms with unequal class widths to their better students. All students should however understand the relationship between the proportion of values in the histogram classes and histogram area.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density5')\">1. Relative frequency and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a histogram, the proportion of the total area that is above any class equals the relative frequency of the class.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density7')\">2. Histograms with varying class widths</a>&nbsp;&nbsp;&nbsp;<span class='note'>Advanced</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a histogram has varying class widths, the vertical axis must be 'density'. The histogram shape would be misleading if frequency or relative frequency was used for the vertical axis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density8')\">3. Understanding histograms</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Whether or not class widths are equal, the proportion of values in any classes always equals the proportion of the total histogram area that is above the classes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_densityMore1')\">4. Exercise: Draw histogram with mixed class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this page, you will draw histograms of different data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_density2')\">5. Exercise: Histogram areas and proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two exercises in this page ask you to use the shape of a histogram to find the proportion of values in a given range. The first exercise shows the number of values in each class, but the second requires the histogram area to be estimated 'by eye'.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
