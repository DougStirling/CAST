var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Some review exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot2')\">1. Shape of a box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page involve matching the shape of box plots to the corresponding dot plots.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_displayInterp1')\">2. Information from distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will interpret what distributions with symmetry, skewness, clusters or outliers tell you about the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread1')\">3. Ideas of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you should summarise the difference between two distributions in terms of their different centres and spreads.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread3')\">4. Standard deviation from graph</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The first exercise asks for a rough 'guess' at the standard deviation of data sets from a stacked dot plot. The second exercise is similar but displays the data as a histogram or box plot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean3')\">5. Factors affecting the standard deviation and standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks 3 questions about the effect of sample size and spread of sample values on the sd and se, and about the interpretation of the se and sd.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean7')\">6. Interpreting a 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you must choose which of four statements correctly interprets the meaning of a 95% confidence interval.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPValue3')\">7. Interpretation of p-values (harder)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is similar to the previous one but the wordings of the conclusions are harder.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
