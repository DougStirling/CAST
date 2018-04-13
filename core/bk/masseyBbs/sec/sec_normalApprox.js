var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Normal approximation to binomial</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn5')\">1. Normal approximation to binomial</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the sample size is large, the distribution of the sample count in a category becomes close to a normal distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn_c6')\">2. Normal approximation examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the sample size is large, a normal approximation to the binomial distribution can be used to find binomial probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn4')\">3. Exercise: Find normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are asked to find the parameters of a normal approximation to a binomial distribution in this exercise.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn5')\">4. Exercise: Probabilities from normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for probabilities relating to a binomial distribution but requires that you use a normal approximation to evaluate them.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
