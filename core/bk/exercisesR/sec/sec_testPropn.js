var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tests about probabilities and proportions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPropn1')\">1. Perform test using binomial distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise in this page asks you to use a binomial distribution to perform a hypothesis test about a population proportion and interpret the results.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPropn2')\">2. Perform test with a normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise in this page uses a normal approximation to find the p-value for the above test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPropn3')\">3. Test with continuity correction (advanced)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value is found more accurately if a continuity correction is used with a normal distribution. This exercise is similar to the previous one but requires use of a continuity correction.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
