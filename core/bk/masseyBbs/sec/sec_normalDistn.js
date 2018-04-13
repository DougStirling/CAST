var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probDensity_c5')\">1. Importance of normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Normal distributions are sometimes useful as models for data, but the main reason for their importance is that sample means and many other summary statistics have approximately normal distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn2')\">2. Shape of normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All normal distributions look the same on a scale of standard deviations from the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn_c3')\">3. Sketching a normal distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Normal distributions are centred on their mean and have hardly any area beyond 3&sigma;  on each side. A small area (about 5%) is over 2&sigma; away from the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn4')\">4. Some normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The probabilities of being within (&sigma;, 2&sigma;, and 3&sigma;) of the mean are (0.68, 0.95 and 0.997) for all normal distributions. This is a close match to the 70-95-100 rule-of-thumb for numerical data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn10')\">5. Normal probability plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A normal probability plot is an informal graphical method to help assess whether a data set comes from a normal distribution. Curvature in the probability plot suggests that the data may not be normal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn1')\">6. Exercise: Normal distribution parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>One exercise asks you to guess the standard deviation of a normal distribution. Another requests a sketch of a normal distribution given its mean and standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn7')\">7. Exercise: Probabilities without calculations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 70-95-100 rule of thumb gives the approximate probability of a value within 1, 2 and 3 standard deviations of the mean. Te exercise uses this rule of thumb to find some normal probabilities without formal calculations.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
