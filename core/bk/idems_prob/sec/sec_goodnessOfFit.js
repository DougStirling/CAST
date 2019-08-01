var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Goodness of fit tests</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('goodnessOfFit1')\">1. Counts and chi-squared distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A sum of squared standardised Poisson variables has approximately a chi-squared distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('goodnessOfFit2')\">2. Test for Poisson distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The chi-squared distribution can be used to test whether a random sample comes from a Poisson distribution with some pre-specified value of the parameter, λ.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('goodnessOfFit3')\">3. Poisson test with constraints</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the value of the Poisson parameter, λ, is estimated from the data, the chi-squared test can still be conducted, but its degrees of freedom must be reduced by one.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('goodnessOfFit4')\">4. Test based on frequency table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the Poisson counts are small, the earlier chi-squared approximation for the test statistic does not hold well. If the data are first summarised in a frequency table, the test can be applied to the cell counts instead.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('goodnessOfFit5')\">5. Test for any discrete distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The chi-squared goodnes-of-fit test can be applied to frequency tables to assess whether data are random samples from other discrete distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('goodnessOfFit6')\">6. Test for continuous distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The chi-squared goodness-of-fit test can also be used for continuous data if the data are first summarised in a frequency table.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
