var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>More about variation (optional)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation4')\">1. Variance and degrees of freedom</a>&nbsp;&nbsp;&nbsp;<span class='note'>Advanced</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The square of the standard deviation is called the variance; its value is harder to understand but it is the basis of important advanced statistical methods. The degrees of freedom are the number of pieces of information contributing to the standard deviation (or variance).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation5')\">2. Root mean squared error</a>&nbsp;&nbsp;&nbsp;<span class='note'>Advanced</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The root mean squared error summarises how close the values in a data set are to a target, k.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation6')\">3. Distances from the mean</a>&nbsp;&nbsp;&nbsp;<span class='note'>Advanced</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard deviation is similar to the root mean squared error, but summarises distances to the mean of the data. Its value can be interpreted in terms of the average area of squares on a graph.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
