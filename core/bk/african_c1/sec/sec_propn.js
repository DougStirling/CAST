var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile1')\">1. Illustrative data set</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A data set containing annual rainfalls in Samaru, Nigeria, will be used for illustrative purposes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile2')\">2. Cumulative proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Half the data are lower than the median. A quarter and three quarters are lower than the lower and upper quartiles. At any other value, x, the proportion of data values that are x or lower is called its cumulative proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile3')\">3. Graph of cumulative proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A graph of the cumulative proportion below x against x is a step function that increases from zero (at small x) to one (at high x).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile_m9')\">4. Other ways to express proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Any cumulative proportion, p, can be equivalently expressed as a rate per n values, np, or as a percentage, 100p. If the proportion of values that are x or lower is p, the average number of values until one such value is obtained is 1/p; this is called the 'return period' for values less than or equal to x.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('percentile_m10')\">5. Other data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows how cumulative proportions are used and interpreted for a few different data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_percentile_m4')\">6. Exercises based on real data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some exercises give practice at finding different ways to express proportions, based on real data sets.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
