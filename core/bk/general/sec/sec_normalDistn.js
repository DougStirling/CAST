var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn1')\">1. Importance of normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Normal distributions are sometimes useful as models for data, but the main reason for their importance is that sample means and many other summary statistics have approximately normal distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn2')\">2. Shape of normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All normal distributions look the same on a scale of standard deviations from the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn3')\">3. Sketching a normal distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Normal distributions are centred on their mean, &micro;, and have hardly any area beyond 3&sigma;  on each side. A small area (about 5%) is over 2 standard deviations away from the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn4')\">4. Some normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The probabilities of being within (&sigma;, 2&sigma;, and 3&sigma;) of the mean are (0.68, 0.95 and 0.997) for all normal distributions. This is a close match to the 70-95-100 rule-of-thumb for numerical data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn5')\">5. Z-scores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Any value, x, can be translated into a z-score that gives the number of standard deviations above the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn6')\">6. Finding normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Z-scores have a standard normal distribution (&micro; = 0 and &sigma; = 1). The probability of a value less than x can be translated into a probability about a z-score.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn7')\">7. Other probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The probability that X is greater than a specified value or is between two values can also be translated into a probability about a z-score.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn8')\">8. Normal tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a computer is not available, tables of probabilities for the standard normal distribution are used to find normal probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn9')\">9. Finding normal quantiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The inverse problem of finding the x-value corresponding to a given probability is also solved using z-scores. If normal tables are used, they must be looked up differently.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn10')\">10. Normal probability plots</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A normal probability plot is an informal graphical method to help assess whether a data set comes from a normal distribution. Curvature in the probability plot suggests that the data may not be normal.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
