var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Describing centre and spread</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread1')\">1. Centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The centre of a distribution is a 'typical value'. The spread describes how far the values are from the centre.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_c3')\">2. Summaries of centre</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The median and mean are alternative measures of the centre of a distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread4')\">3. Properties of median and mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When a data set is not symmetric, the mean and median may differ substantially.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread5')\">4. Standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard deviation is the most commonly used numerical summary of the spread of values in a data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread6')\">5. Rules of thumb for st devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 70-95-100 rule-of-thumb is useful for understanding the numerical value of the standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_c7')\">6. Understanding means and st devns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is possible to roughly guess the mean and standard deviation from a histogram and roughly sketch a symmetric histogram matching any given mean and standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread8')\">7. Warnings about mean and standard devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and standard deviation cannot give any indication of the existance of outliers, skewness or clusters. A stem and leaf plot or histogram should be examined before reporting these numerical summaries.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread9')\">8. Population parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The above summaries of centre and spread are used to describe sample data. The corresponding population summaries are called parameters and different symbols are used to refer to them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread1')\">9. Exercise: Ideas of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you should summarise the difference between two distributions in terms of their different centres and spreads.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread2')\">10. Exercise: Mean and median</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An exercise requests estimates of the mean and median from different skew and symmetric stacked dot plots.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread3')\">11. Exercise: Standard deviation from graph</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The first exercise asks for a rough 'guess' at the standard deviation of data sets from a stacked dot plot. The second exercise is similar but displays the data as a histogram or box plot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread4')\">12. Exercise: Standard deviation from general knowledge</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, general knowledge about the type of measurement is enough to roughly guess the value of the standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread5')\">13. Exercise: Rough graph from mean and st devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and standard deviation of a data set should give you a good idea of the likely distribution of values. The first exercise in this page asks you to sketch a stacked dot plot to match a given mean and standard deviation. In the second, a histogram should be drawn.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
