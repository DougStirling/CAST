var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction to hypothesis testing</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro1')\">1. Inference</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Estimation asks which values for an unknown parameter are consistent with data that have been collected. Hypothesis testing usually asks whether the data are consistent with some parameter values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro2')\">2. Soccer league simulation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Are some teams in a soccer league better than others, or is the end-of-season league table consistent with random results from equally-matched teams? A simulation can help to answer this question.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro_c3')\">3. Test for a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page presents a simulation to test whether the number of observations observed in one category is consistent with a specified probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro4')\">4. Test for a mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation is used to test whether a sample mean is consistent with a specified population mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro_c7')\">5. Common patterns in tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All hypothesis tests involve a null hypothesis, a test statistic, an alternative hypothesis and a p-value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn6')\">6. Statistical distance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The statistical distance between an estimate and hypothesised parameter value is the difference divided by the standard error of the estimate. It should have approximately a standard normal distribution if the null hypothesis is true.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPropn7')\">7. Tests based on statistical distance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When testing a single parameter, we often use a test statistic that 'standardises' an estimate of the parameter — subtracting the hypothesised value and dividing by its standard error. This test statistic describes the statistical distance of the estimate from the null hypothesis value and has a distribution that is close to a standard normal distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testIntro1')\">8. Exercise: Simulation to test a propn</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to perform a simulation to test a hypothesis about a population proportion, &pi;.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testIntro2')\">9. Exercise: Simulation to test a mean</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is similar but the simulation is from a normal population and tests the value of its mean, &micro;.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
