var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn1')\">1. Shape of normal distribution </a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>One exercise asks you to guess the standard deviation of a normal distribution. Another requests a sketch of a normal distribution given its mean and standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn2')\">2. Probability and area under normal curve</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Exercise asks for a normal probability by reading an area under a normal histogram (pdf).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn3')\">3. Normal probabilities from z-scores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two exercises on this page are similar to the previous exercise, but the question must be first translated into one involving a z-score. In the first exercise, the required probability is read off a standard normal histogram (pdf); in the second, a normal table must be used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn4')\">4. Expected numbers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Instead of the probability of getting a value within some range, the questions in this exercise ask for the expected number out of n items. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn5')\">5. Finding X from probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two exercises on this page ask the inverse problem; given a probability, they ask for the corresponding range of values. The first exercise uses a standard normal histogram (pdf) to find the answer, whereas the second uses a normal table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn6')\">6. Mixture of questions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page asks a variety of different questions of the types above about normal distributions. The reader must pick the type of question before using the templates and normal table to answer.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn7')\">7. Guessing normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 70-95-100 rule of thumb gives the approximate probability of a value within 1, 2 and 3 standard deviations of the mean. Te exercise uses this rule of thumb to find some normal probabilities without formal calculations.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
