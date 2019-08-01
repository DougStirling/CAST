var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Logistic regression</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Least squares is used to predict a numerical response from a numerical explanatory variable. When the response variable is categorical, the goal is to predict the <span style='font-weight:bold;'>proportion</span> in each response category, and a different analysis is required.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic1')\">1. Categorical responses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>With a categorical response and numerical explanatory variable, stacked bar charts at each X are an effective display.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic2')\">2. Fitted values and predictions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Using a straight line to describe how the proportion in a category depends on X is not appropriate. A curve is required.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic3')\">3. Logistic curve</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 'logistic' curve can be used to model how a proportion depends on X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('logistic4')\">4. Obtaining a good fit</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A logistic curve is fitted to an example data set.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
