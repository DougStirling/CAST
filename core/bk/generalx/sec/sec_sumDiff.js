var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distn of sums and differences</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_sumDiff1')\">1. Means and sums of random samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulation demonstrating the formulae for the standard deviation of a sample mean and of the sum of sample values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_sumDiff2')\">2. Sums and differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formula for mean and s.d. for sum of 2 independent variables with same s.d. A simulation illustrates this.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_sumDiff3')\">3. Sums and differences (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Another simulation shows the distribution of difference in heights of a husband and wife.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_sumDiff4')\">4. Probabilities for sums and differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives a few examples of probabilities about sums and differences.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
