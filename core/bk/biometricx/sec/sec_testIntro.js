var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction to hypothesis tests</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testIntro1')\">1. Soccer league simulation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that the spread of points in the English Premier League is higher than would be consistent with equally-matched teams.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testIntro_b2')\">2. Simulation to test a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page presents a simulation that can be used to assess whether the observed number of 'successes' is consistent with a pre-specified probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testIntro3')\">3. Simulation to test a mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation is used to assess whether a sample mean is consistent with a hypothesised population mean.	(The population standard deviation is assumed to be known).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testIntro_b4')\">4. Randomisation tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A randomisation test for whether the means of two groups are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_testIntro5')\">5. Soccer league randomisation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Randomisation test, based on the correlation between the points at the end of two successive seasons.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
