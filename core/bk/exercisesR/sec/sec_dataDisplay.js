var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Graphical displays</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>The exercises here involve using an external program to produce graphical displays of data sets then interpret what these displays tell you about the data.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot_e1')\">1. Shape of a distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page involves exporting four data sets and producing graphical displays of them. You must then matching the data sets to box plots, histograms or dot plots in the exercise.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_displayInterp_e1')\">2. Information from distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will export a data set that may exhibit symmetry, skewness, clusters or outliers and produce a graphical display of it. You must then interpret what the distribution tells you about the data.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
