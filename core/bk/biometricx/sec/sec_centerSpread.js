var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Describing centre &amp; spread</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread_b1')\">1. Ideas of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example in which the differences between the centre and spread of two groups can be interpreted meaningfully. (The centre and spread of the second group can be changed with sliders.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread_b2')\">2. Simple measures of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram similar to the previous one but showing that differences between the centres and spreads of the groups can be summarised by the median and either the range or inter-quartile range.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread_b3')\">3. Sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing that median splits data set in half and mean is point of balance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread4')\">4. Properties of median and mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing how mean is affected by an outlier and how it is further into the tail of a skew distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread5')\">5. Standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing how the standard deviation reflects the spread of values in a data set. (The spread can be changed with a slider.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread6')\">6. Rules of thumb for standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Examples illustrating the 70-95-100 rule of thumb for four data sets that are reasonably symmetric and also for another skew data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread7')\">7. Understanding means and st devns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A published table of means and sds for several variables in two groups is displayed. A diagram shows how sketched histograms can be drawn from the means and sds, showing the degree of overlap between the distributions in the two groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread8')\">8. Warnings about mean and standard devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing four data sets with the same mean and sd but differently shaped distributions (symmetric, a single outlier, two clusters, and skew). It shows that you must examine a graphical display, not just the mean and sd.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
