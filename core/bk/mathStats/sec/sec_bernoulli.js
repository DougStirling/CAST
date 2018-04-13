var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bernoulli distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bernoulli1')\">1. Bernoulli trials</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A Bernoulli random variable arises from a simple random experiment with two possible outcomes that are generically called success and failure. It has value 1 for a success and 0 for a failure.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bernoulli2')\">2. Mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formulae for the Bernoulli distribution's mean and variance are derived.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
