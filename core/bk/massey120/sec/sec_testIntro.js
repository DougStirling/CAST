var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction to hypothesis tests</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Hypothesis testing is based on a model that describes how we think that the data arose, and is done by asking whether the data that were observed are consistent with this model.</p> <p>In this section, we introduce the methodology by using simulations to perform a few hypothesis tests. These are intended only to provide relatively easy-to-understand examples and <span style='color:red'>will not be examined</span>.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro1')\">1. Inference</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Estimation asks which values for an unknown parameter are consistent with data that have been collected. Hypothesis testing usually asks whether the data are consistent with some parameter values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro2')\">2. Soccer league simulation</a>&nbsp;&nbsp;&nbsp;<span class='note'>(not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Are some teams in a soccer league better than others, or is the end-of-season league table consistent with random results from equally-matched teams? A simulation can help to answer this question.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro3')\">3. Simulation to test a proportion</a>&nbsp;&nbsp;&nbsp;<span class='note'>(not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page presents a simulation to test whether the number of observations observed in one category is consistent with a specified probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro4')\">4. Test for a mean</a>&nbsp;&nbsp;&nbsp;<span class='note'>(not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page uses a simulation to test whether a sample is consistent with a particular population mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro5')\">5. Randomisation tests</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A method is presented to assess whether the population means in two groups are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro6')\">6. Soccer league randomisation</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The correlation between teams' final points in two successive seasons will be relatively high if some teams are better than others. Randomising points in the second season gives an indication of whether the actual correlation is unusually high.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro7')\">7. Common patterns in tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All hypothesis tests involve a null hypothesis, a summary statistic for testing, an alternative hypothesis and a p-value.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
