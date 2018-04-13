var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Percentiles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile4')\">1. Percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Given any target proportion, p, it is possible to find a corresponding value, x, for which approximately this proportion of values is x or lower. For example, the percentile for p = 50% is the median.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile5')\">2. Displaying percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 0, 25, 50, 75 and 100'th percentiles are displayed as a box plot. Other percentiles can be displayed in a similar shaded rectangle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_percentile6')\">3. Percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some exercises give practice at finding percentiles for a data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile6')\">4. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots are useful for comparing groups. If the groups are in order (e.g. the months of a year), the median, quartiles and extremes can be joined and shaded as bands. This effectively describe how the distribution of values varies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile7')\">5. Comparing groups with other percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In some applications, different percentiles are important. They can also be joined and shaded as bands to compare ordered groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile8')\">6. Better definition of percentiles</a>&nbsp;&nbsp;&nbsp;<span class='note'>Advanced</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The graph of cumulative probabilities is a step function. Most software reports percentiles that are equivalent to reading values off a smoothed version of this step function.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
