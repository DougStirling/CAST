var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Click on any heading to display the page.)</span></p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context_c1')\">1. Why Statistics for Business?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In business settings, data are collected to throw light on some question of importance to the business manager. Typically statistics will help you make decisions based on evidence. Statistical methods for analysis of data are a core part of statistics, but the context of the data is most important.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context2')\">2. The statistical process</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Statistical analysis is a process that involves identifying the questions of interest, data collection and analysis and producing a report. In real-life problems, the data collection and analysis steps may be repeated more than once.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation4')\">3. Variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When data are collected from a sample of individuals, there is natural variability that makes it hard to interpret results.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
