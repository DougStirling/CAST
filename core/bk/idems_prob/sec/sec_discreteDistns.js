var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Discrete random variables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discreteDistns1')\">1. Discrete distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A discrete random variable is usually one that can only take integer values — counts of something. Its distribution is fully described by the probabilities for these values, the variable's probability function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discreteDistns2')\">2. Cumulative distribution function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The cumulative distribution function of a random variable, F(x), is the probability of getting a value less than or equal to x. For a discrete random variable, this is a step function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discreteDistns3')\">3. Mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A discrete random variable's mean is defined in a similar way to that of a discrete data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discreteDistns4')\">4. Expected values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The concept and definition of a variable's mean can be generalised to give the expected value of any function of its value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('discreteDistns5')\">5. Variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A random variable's variance is the expected value of the squared distance to its mean. This summarises the spread of values in the distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
