var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Describing spread</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread5')\">1. Standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard deviation is the most commonly used numerical summary of the spread of values in a data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread6')\">2. Rules of thumb for st devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 70-95-100 rule-of-thumb is useful for understanding the numerical value of the standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread7')\">3. Understanding means and st devns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is possible to roughly guess the mean and standard deviation from a histogram and roughly sketch a symmetric histogram matching any given mean and standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread8')\">4. Warnings about mean &amp; st devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and standard deviation cannot give any indication of the existance of outliers, skewness or clusters. A dot plot or histogram should be examined before reporting these numerical summaries.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation1')\">5. Effect of outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a data set contains an outlier, the mean and especially the standard deviation can be badly affected. The values may be obviously wrong when the 70-95-100 rule is applied in the context of the data but examining a dot plot or box plot is best.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('counts_b4')\">6. Mean & sd for discrete data</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For discrete data, the mean and standard deviation can be easily evaluated from a frequency table.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
