var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Discrete data (counts)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_counts1')\">1. Dot plots for counts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The diagram shows that crosses are superimposed in a basic dot plot of small counts. Jittering helps to show the distribution but stacking of the crosses is best.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_counts2')\">2. Histograms for counts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a histrogram of a data set containing moderately large counts. Class width can be adjusted. It can be used to explain that all class boundaries must end in '.5'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_counts3')\">3. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, a slider transforms a histogram of a data set with small counts (class width 1) into a bar chart -- a better display of the data.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
