var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction to hypothesis tests</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro_b1')\">1. Inference</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Estimation asks which values for an unknown parameter are consistent with data that have been collected. Hypothesis testing usually asks whether the data are consistent with some parameter values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro4')\">2. Test for a mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page uses a simulation to test whether a sample is consistent with a particular population mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testIntro_b7')\">3. Common patterns in tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All hypothesis tests involve a null hypothesis, a summary statistic for testing, an alternative hypothesis and a p-value.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
