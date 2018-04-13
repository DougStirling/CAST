var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing means in two groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupInf1')\">1. Distn of difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that sample-to-sample variation in the difference between two means matches the theoretical distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupInf2')\">2. Distribution of estimation error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The calculations for the standard error and approximate error distribution are shown for a few real data sets.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
