var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Understanding distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp_b1')\">1. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Does the data contain any outliers -- values that are atypically large or small? The extreme values in a skew distribution are often mistaken for outliers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp_b2')\">2. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Does the data split into separate clusters -- ranges of values with high density separated by ranges with low density? Clusters may correspond to different groups of individuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp3')\">3. Distribution of values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The distribution gives information about a typical value round which the data are spread (the distribution's location or centre) and the variability of the values (the spread of the distribution).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp_b4')\">4. Extra information about individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Additional information about the items from which measurements have been made can help us understand the distribution of values in the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp5')\">5. Distinguishing known groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If we know that the values come from 2 or more groups of individuals, dot plots can be modified to show this extra information.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp_b6')\">6. Dangers of overinterpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>There is a risk of over-interpreting patterns in small data sets.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
