var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Models for two groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupModel1')\">1. Interest in underlying population</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few real data sets where numerical samples are obtained from 2 groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupModel2')\">2. Model for two groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>3-dimensional diagram showing 2-group data with histograms describing the distributions. Another diagram shows normal pdfs for a possible model for these data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupModel3')\">3. Parameters of the normal model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing how the 4 parameters affect the model. Another diagram allows the model to be fitted 'by eye' to the data in the previous page.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupModel4')\">4. Parameter estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>3-dimensional diagrams showing the 'best' normal model for several real data sets. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupModel5')\">5. Difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulation showing variability of difference between sample means. Another static diagram shows a real data set and asks what this tells you about the underlying population means.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
