var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Scatterplot matrices & brushing</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>To explore four or more variables, other graphical methods can be used.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate3')\">1. Scatterplot matrix and brushing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An array of scatterplots of all pairs of variables is often informative, especially if the scatterplots are dynamically linked.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multivariate5')\">2. Slicing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Slicing is another dynamic technique. Only observations within a range of values of one variable (a slice) are displayed in linked displays.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnGroups7')\">3. Scatterplot matrix with groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the individuals belong to different groups, this information can be displayed with different symbols or colours.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
