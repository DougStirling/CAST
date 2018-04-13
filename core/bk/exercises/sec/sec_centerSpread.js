var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Describing centre and spread</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread1')\">1. Ideas of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you should summarise the difference between two distributions in terms of their different centres and spreads.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread2')\">2. Mean and median</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An exercise requests estimates of the mean and median from different skew and symmetric stacked dot plots.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread3')\">3. Standard deviation from graph</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The first exercise asks for a rough 'guess' at the standard deviation of data sets from a stacked dot plot. The second exercise is similar but displays the data as a histogram or box plot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread4')\">4. Standard deviation from general knowledge</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, general knowledge about the type of measurement is enough to roughly guess the value of the standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread5')\">5. Rough graph from mean and st devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and standard deviation of a data set should give you a good idea of the likely distribution of values. The first exercise in this page asks you to sketch a stacked dot plot to match a given mean and standard deviation. In the second, a histogram should be drawn.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread6')\">6. Clusters and outliers (advanced)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two exercises on this page ask the effect of combining different groups of values or adding an outlier on the mean and standard deviation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
