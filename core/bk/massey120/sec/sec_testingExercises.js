var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testIntro1')\">1. Simulation to test a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to perform a simulation to test a hypothesis about a population proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testIntro2')\">2. Simulation to test a mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is similar but the simulation is from a normal population and tests the value of its mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPropn1')\">3. Test proportion using binomial distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise in this page asks you to use a binomial distribution to perform a hypothesis test about a population proportion and interpret the results.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPropn2')\">4. Test proportion with normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise in this page uses a normal approximation to find the p-value for the above test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPropn3')\">5. Test with continuity correction (advanced)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value is found more accurately if a continuity correction is used with a normal distribution. This exercise is similar to the previous one but requires use of a continuity correction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testMean1')\">6. Test mean, assuming known sigma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to perform a hypothesis test about the mean of a normal population whose standard deviation is known. The hypotheses must be specified, a z-score evaluated, the p-value found and the conclusion given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testMean2')\">7. T test (unknown sigma)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, the population standard deviation is unknown, so the test statistic must use the sample standard deviation and the p-value must be looked up from a t distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPValue1')\">8. Generic interpretation of a p-values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two exercises on this page give p-values for hypothesis tests and ask you to pick the correct conclusion from the test. The first exercise has options in terms of the strength of evidence against the null hypothesis; the second is harder with options referring to the alternative hypothesis also.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPValue2')\">9. Interpretation of p-values (in context)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives the p-value for a test and asks you to pick the correct conclusion, worded in terms of the problem context.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPValue3')\">10. Interpretation of p-values (harder)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is similar to the previous one but the wordings of the conclusions are harder.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
