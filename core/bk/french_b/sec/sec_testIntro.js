var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction to hypothesis tests</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro_b1')\">1. Inference</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Estimation asks which values for an unknown parameter are consistent with data that have been collected. Hypothesis testing usually asks whether the data are consistent with some parameter values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro2')\">2. Soccer league simulation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Are some teams in a soccer league better than others, or is the end-of-season league table consistent with random results from equally-matched teams? A simulation can help to answer this question.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro_b3')\">3. Simulation to test a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page presents a simulation to test whether the number of observations observed in one category is consistent with a specified probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro4')\">4. Test for a mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page uses a simulation to test whether a sample is consistent with a particular population mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro_b5')\">5. Randomisation tests</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A method is presented to assess whether the population means in two groups are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro6')\">6. Soccer league randomisation</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation between teams' final points in two successive seasons will be relatively high if some teams are better than others. Randomising points in the second season gives an indication of whether the actual correlation is unusually high.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro_b7')\">7. Common patterns in hypothesis testing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All hypothesis tests involve a null hypothesis, a summary statistic for testing, an alternative hypothesis and a p-value.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
