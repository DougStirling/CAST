var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distn of sums and differences</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sumDiff1')\">1. Means and sums of samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean of a random sample is approximately normal with s.d. equal to &sigma; divided by &radic;n. The sum of a random sample is also approximately normal, but its s.d. is &sigma; times &radic;n.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sumDiff2')\">2. Sum and difference</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum and difference of two independent normal variables is also normally distributed. If they have the same standard deviation, &sigma;, the  sum and difference  both have standard deviation 1.414&sigma;. (Their variance is 2&sigma;.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sumDiff3')\">3. Sum and difference (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page generalises the results to the sum and difference of variables whose standard deviations may be different.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sumDiff4')\">4. Probabilities for sums and differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If two variables are independent and have normal distributions, probabilities relating to their sum and difference can be found using the formulae for the mean and standard deviation of sums and differences.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
