var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution of sample proportion</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomPropn1')\">1. Distributions of counts and proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that a sample propn is random and builds up the sampling distribution of the sample count and the sample proportion. It also shows the effect of sample size.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomPropn2')\">2. Family of binomial distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how the sample size and probability of success affect the shape of the binomial distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomPropn_b3')\">3. Binomial probability examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page presents a few worked examples of finding the probability that a binomial variable is within a range.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomPropn4')\">4. Normal approximation to binomial</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing that a binomial distribution is approximately normal if the sample size is large.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomPropn_b5')\">5. Normal approximation examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page presents a few worked examples of finding probabilities using a normal approximation to the binomial distribution when the sample size is large.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
