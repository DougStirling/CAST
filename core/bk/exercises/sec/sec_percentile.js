var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Proportions and percentiles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_percentile1')\">1. Cumulative distribution functions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this page, you will draw cumulative distribution functions based for various data sets. In the first exercise, the cdf is drawn from the individual data values (displayed as a dot plot); in the second, the values are grouped into classes (as a histogram).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_percentile2')\">2. Shape of the cumulative distribution function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In the two exercises on this page, you should identify which of a set of cumulative distribution functions matches each of a set of dot plots or histograms.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_percentile3')\">3. Percentages, rates and return periods</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, a proportion should be expressed as a percentage, a rate per x values, or a rate of once per y values (return period)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_percentile4')\">4. Percentages from cumulative distn function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An exercise gives practice at finding proportions from the cumulative distribution function of real climatic data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_percentile5')\">5. Rates and return periods from c.d.f.</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is similar to the exercise on the previous page but asks for a mixture of percentages, rates and return periods.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_percentile6')\">6. Percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this page, two exercises give practice at finding percentiles, again based on the cumulative distribution function of climatic data.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
