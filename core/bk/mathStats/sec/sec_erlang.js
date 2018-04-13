var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Time until k'th event</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('erlang1')\">1. Erlang distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The time until the k'th event in a homogeneous Poisson process has an Erlang distribution; its probability density function is derived.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('erlang2')\">2. Mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of k independent exponential random variables has an Erlang distribution. This is used to derive the distribution's mean and variance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('erlang3')\">3. Probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The Erlang distribution is a special case of the Gamma distribution. The way to find probabilities for it will be described for the Gamma distribution in the next chapter.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
