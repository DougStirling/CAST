var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Finite populations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_popSamp1')\">1. Sampling from a population</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates sampling from a population of objects.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_popSamp2')\">2. Variability in a sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows the randomness of dot plots, histograms and bar charts of random samples of different sizes from a population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_popSamp3')\">3. Sampling error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows variability of sample proportions and sample means, and the difference between the sample and population values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_popSamp4')\">4. Sampling error and sample size</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that a sample proportion becomes less variable when the sample size increases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_popSamp5')\">5. Sampling with and without replacement</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates sampling with and without replacement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_popSamp6')\">6. Generating random numbers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams show generation of a random digit and how they can be put together to generate larger random numbers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_popSamp7')\">7. Selecting a random sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how random numbers can be used to select a random sample from a population.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
