var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tests about means</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testMean1')\">1. Tests based on statistical distance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram repeats an earlier simulation for testing a normal mean when &sigma; is known. The diagram can replace the simulation results with the theoretical normal distribution to find the p-value without a simulation. The diagram can also show the simulation results and theoretical distribution in terms of z-scores — 'statistical distance'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testMean2')\">2. Example (known sigma)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how the p-value is obtained for a particular data set. A slider can change the sample mean to show how this affects the p-value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testMean3')\">3. Test statistic (unknown sigma)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a simulation that builds up the distribution of the t statistic for different sample sizes. It compares this empirical distribution to a standard normal distribution and shows that it has higher spread, especially when the sample size is low.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testMean4')\">4. The t distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram superimposes a standard normal distribution on the t distribution. Changing the degrees of freedom with a slider shows its extra spread when the degrees of freedom are small.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testMean5')\">5. The t test for a mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how the p-value is obtained for a real data set when the population standard deviation is unknown. A slider can change the sample mean to show how this affects the p-value.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
