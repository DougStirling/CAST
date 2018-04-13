var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Samples from distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_infPopn_b1')\">1. Data as representatives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Several data sets are shown where we are not interested in the specific 'individuals' but want to generalise to something wider.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_infPopn_b2')\">2. Randomness of data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram takes samples of different sizes to illustrate the randomness of most data sets. It can be used to explain that we are not interested in the details of a particular data set but are trying to understand something more general about what underlies the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_infPopn3')\">3. Infinite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram takes samples of locations (of 6 cows in a field) from a grid of locations (a finite population). The grid can be made finer with the limit being samples from an infinite population of all possible positions in the field.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_infPopn4')\">4. Information from a single sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A static example shows a sample bar chart. It provides an estimate of an underlying population proportion that is of more interest.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
