var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Understanding distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_displayInterp1')\">1. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram distinguishing between an 'outlier' that is probably an error (or different type of individual) and one that is simply a value in the tail of a skew distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_displayInterp2')\">2. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows two data sets about eruptions of the Old Faithful geyser that have distinct clusters of values and a further two data sets where the clusters are less pronounced.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_displayInterp3')\">3. Names of individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows stacked dot plots for two examples. The name of the 'individual' associated with each cross can be displayed by clicking on it and these names help understanding of the distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_displayInterp4')\">4. Distinguishing known groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, the crosses in a dot plot can be coloured to show their group. The groups can be separated out into different bands above a common axis to better distinguish and compare them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_displayInterp5')\">5. Back-to-back stem and leaf plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A back-to-back stem and leaf plot is shown for two of the groups in the previous page.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_displayInterp6')\">6. Danger of overinterpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram is a simulation showing variability in stem and leaf plot of small data sets. Outliers, clusters or skewness occasionally appear even when there are no such features in the underlying process.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
