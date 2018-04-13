var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tests about means</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean_c1')\">1. Introduction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For numerical populations, the null and alternative hypotheses usually specify values for the population mean. Tests are based on the sample mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean_c2')\">2. Test for mean (known σ)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the population standard deviation is known, the distribution of the sample mean can be found when the null hypothesis is true. The p-value for the test is a tail area of this distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean3')\">3. P-value from statistical distance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value is most easily found from the 'statistical distance' between the sample and hypothesised means. The p-value can be found as a tail area of the standard normal distribution and is approximately correct even when the population distribution is not normal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean_c4')\">4. The t distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the population standard deviation is unknown, a different test statistic must be used. It has a standard distribution known as a t distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean_c5')\">5. The t test for a mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The t distribution is used to obtain a p-value for tests about a population mean when the standard deviation is unknown.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean6')\">6. Testing with non-normal populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The t-test is based on an assumption that the population distribution is normally distributed. It can also be used with non-normal populations provided the sample size is large but should not be used to test the mean of a small sample if the distribution is skew.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testMean1')\">7. Exercise:   Test mean, with &sigma; known</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to perform a hypothesis test about the mean of a normal population whose standard deviation, σ, is known. The hypotheses must be specified, a z-score evaluated, the p-value found and the conclusion given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testMean2')\">8. Exercise:   Test mean, unknown &sigma;</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, the population standard deviation is unknown, so the test statistic must use the sample standard deviation and the p-value must be looked up from a t distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
