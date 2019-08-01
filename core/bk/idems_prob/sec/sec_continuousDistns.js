var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Continuous random variables</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>This section introduces methods to describe the distribution of a continuous random variable. Continuous distributions will be examined in more detail in a later chapter.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousDistns1')\">1. Probability density functions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A continuous random variable's distribution is described by a type of histogram with infinitely narrow classes, called the variable's probability density function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousDistns2')\">2. Probability and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The probability of a value within any range equals the probability density function's area above these values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousDistns3')\">3. Mean and variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and variance of a continuous random variable are interpreted in a similar way to those of continuous variables, but are defined using integrals instead of summations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousDistns4')\">4. Normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A particularly important type of continuous distribution is the family of normal distributions. These are symmetric distributions whose centre and spread are described by two parameters, μ and σ.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousDistns5')\">5. Important normal quantiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A normal random variable has 90% probability of being within 1.645σ of μ, 95% probability of being within 1.96σ of μ, and 99% probability of being within 2.576σ of μ.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
