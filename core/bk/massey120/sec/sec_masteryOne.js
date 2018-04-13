var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises for test 1</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>The following exercises give you practice with the ten questions that will be asked in the first mastery test.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_density1')\">1. Draw a histogram</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives you a sorted list of values and asks you to draw a histogram of the data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_density2')\">2. Estimate proportion from histogram</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are shown the histogram of a data set and are asked to estimate 'by eye' the proportion of values within some range.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_displayInterp1')\">3. Interpret shape of stacked dot plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are asked to interpret what the shape of a dot plot tells you about the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread1')\">4. Concepts of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you should summarise the difference between two distributions in terms of their different centres and spreads.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread2')\">5. Guess mean and median</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are asked to estimate the mean and median from a stacked dot plot in this exercise.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread3')\">6. Guess SD from histogram</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for a rough 'guess' at the standard deviation of data sets from its histogram.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread4')\">7. Guess SD from general knowledge</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, general knowledge about the type of measurement is enough to roughly guess the value of the standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable1')\">8. Identify numerical and categorical variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will classify various measurements as numerical (continuous or discrete) or categorical (ordinal or nominal).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat6')\">9. Find percentage from a pie chart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise displays the pie chart for either an ordinal categorical variable or a categorical variable in which the categories have been arranged in decreasing order of their frequencies. You are asked to estimate the percentage in some adjacent categories 'by eye' from the pie chart.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat5')\">10. Match pie charts and bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar and pie charts display the same information in different ways. This exercise displays bar and pie charts for four data sets and asks you to match them.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
