var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Association &amp; causal relationships</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_causal1')\">1. Causal and non-causal relationships</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a static scatterplot of a 'ridiculous' relationship caused by a lurking variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_causal2')\">2. Observational and experimental data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this page, observational and experimental data can be simulated, showing that the x-values for the experimental data are fixed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_causal3')\">3. Data collection and causality</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows two data sets collected for the same purpose, one observational and one experimental. In the observational data, a lurking variable gives a misleading impression of the relationship.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
