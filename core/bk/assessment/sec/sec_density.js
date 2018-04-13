var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Density and histograms</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density1')\">1. Histogram as a display of density</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Histograms show a distribution of marks without identifying individual values. They contain less visual 'noise', especially for large data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density2')\">2. Choice of classes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Histogram class widths should be adjusted to give the smoothest possible outline. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density3')\">3. Relative frequency and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a histogram, the area above any part of the axis is equal to the proportion of data values in that region.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density4')\">4. More about histogram bin width</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Histograms bins usually all have the same width. However the effect of combining two bins or splitting a bin helps explain the fundamental relationship between histogram area and proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density5')\">5. Frequency polygolons</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Joining the tops of adjacent histograms gives a frequency polygon.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density6')\">6. Drawing histograms</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A histogram is usually drawn from a frequency table. Histograms can be drawn in Excel, but not easily.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
