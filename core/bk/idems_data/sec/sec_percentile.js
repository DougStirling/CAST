var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Proportions and percentiles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile1')\">1. Illustrative data set</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A data set containing annual rainfalls in Samaru, Nigeria, will be used for illustrative purposes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile2')\">2. Cumulative proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Half the data are lower than the median. A quarter and three quarters are lower than the lower and upper quartiles. At any other value, x, the proportion of data values that are x or lower is called its cumulative proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile3')\">3. Graph of cumulative proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A graph of the cumulative proportion below x against x is a step function that increases from zero (at small x) to one (at high x).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile4')\">4. Percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Given any target proportion, p, it is possible to find a corresponding value, x, for which approximately this proportion of values is x or lower. For example, the percentile for p = 50% is the median.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile5')\">5. Displaying percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 0, 25, 50, 75 and 100'th percentiles are displayed as a box plot. Other percentiles can be displayed in a similar shaded rectangle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile6')\">6. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots are useful for comparing groups. If the groups are in order (e.g. the months of a year), the median, quartiles and extremes can be joined and shaded as bands. This effectively describes how the distribution of values varies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile7')\">7. Comparing groups with other percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In some applications, different percentiles are important. They can also be joined and shaded as bands to compare ordered groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile8')\">8. Better definition of percentiles</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The graph of cumulative probabilities is a step function. Most software reports percentiles that are equivalent to reading values off a smoothed version of this step function.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
