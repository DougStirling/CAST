var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normal1')\">1. Standard normal distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The normal distribution's pdf is given and the standard normal distribution is defined.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normal2')\">2. Mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and variance of the standard normal distribution are derived and used to find the mean and variance of other normal distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normal3')\">3. Z-scores</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All normal distributions have the same shape when expressed in terms of standard deviations from the mean; these are called z-scores and have standard normal distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normal4')\">4. Probabilities for normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Excel can be used to find probabilities about normal distributions. Translating questions into ones about z-scores gives a method to find probabilities using tables of probabilities for the standard normal distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normal5')\">5. Normal quantiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>We usually want to find a cumulative probability corresponding to a given x-value. Occasionally the x-value corresponding to a given cumulative probability is needed — a quantile of the distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normal6')\">6. Linear combinations, sums and means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A linear combination of two independent normal variables also has a normal distribution. So do the mean and sum of the values in a random sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normal7')\">7. Independence of sample mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and variance of a random sample from a normal distribution are independent.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
