var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal probabilities</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation2')\">1. Units-free variables (z-scores)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Standardising a variable gives z-scores that do not depend on the units of the original variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn5')\">2. Z-scores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Any value, x, can be translated into a z-score that gives the number of standard deviations above the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn6')\">3. Finding normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Z-scores have a standard normal distribution (mean 0 and s.d. 1). The probability of a value less than x can be translated into a probability about a z-score.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn7')\">4. Other probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The probability that X is greater than a specified value or is between two values can also be translated into a probability about a z-score.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn8')\">5. Normal tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a computer is not available, tables of probabilities for the standard normal distribution are used to find normal probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalDistn9')\">6. Finding normal quantiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The inverse problem of finding the x-value corresponding to a given probability is also solved using z-scores. If normal tables are used, they must be looked up differently.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn2')\">7. Exercise: Probability and area under pdf</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Exercise asks for a normal probability by reading an area under a normal histogram (pdf).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn3')\">8. Exercise: Probabilities from z-scores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page is similar to the previous exercise, but the question must be first translated into one involving a z-score. The required probability is read off a standard normal histogram (pdf).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn4')\">9. Exercise: Expected count in sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Instead of the probability of getting a value within some range, the questions in this exercise ask for the expected number out of n items. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn5')\">10. Exercise: Find X from probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page asks the inverse problem; given a probability, it ask for the corresponding range of values using a standard normal histogram (pdf). </dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
