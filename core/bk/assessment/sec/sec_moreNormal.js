var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Z-scores and stanines</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreNormal1')\">1. Normal parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The parameters of the normal distribution are its mean and standard deviation. The best fit for a set of marks is obtained by setting these to the mean and standard deviation of the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreNormal2')\">2. Standard normal distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All normal distributions have the same 'shape' but different centre and spread. Any normal distribution can therefore be translated into a standard normal distribution by a simple scaling.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreNormal3')\">3. 70-95-100 rule</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All normal distributions have the same proportions of values within 1, 2, and 3 standard deviations of the mean. This corresponds to standardised values between ±1, ±2, and ±3. This is a rule-of-thumb that also applies approximately to other distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreNormal4')\">4. Standardising data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Data can be standardised in the same way as a normal distribution -- subtract the mean and divide by the standard deviation. These are called z-scores.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreNormal5')\">5. Stanines</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stanines are z-scores, translated into an integer scale betweeen 1 and 9. </dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
