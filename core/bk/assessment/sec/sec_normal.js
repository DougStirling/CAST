var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normal1')\">1. Smoothing a histogram</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The histograms of large data sets tend to be fairly smooth. A smooth curve called a probability density function may be used to summarise it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normal2')\">2. Normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>One particular class of curves called the family of normal distributions is often used as a 'model' for mark data. Two 'parameters' can be adjusted to match the curve to actual data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normal3')\">3. Normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Normal distribution curves have similar properties to histograms. In particular, the proportion of values in any range equals the area under the curve.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
