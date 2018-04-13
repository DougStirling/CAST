var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probability &amp; probability density</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity1')\">1. Finite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a bar chart of a finite categorical population. Clicking any bar labels it with the probability that a single sampled value is that category -- i.e. the bar height.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity_b2')\">2. Probabilities and population proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates that the population proportion of values in a range equals the probability for a single value. A range of values on the population dot plot can be highlighted and is labeled both as a proportion and probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity_b3')\">3. Law of large numbers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, the sample size can be increased, showing that a sample proportion tends to a limit (the probability) as the sample size increases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity4')\">4. Bar charts of discrete probabilities &mdash; discrete</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows how a bar chart becomes more stable when the sample size increases. The limiting bar chart gives the population probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity5')\">5. Probability density functions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows how a histogram becomes more stable and smoother when the sample size increases and classes are made narrower. The limiting histogram is called a probability density function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity6')\">6. Normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram show a normal pdf with sliders to adjust the mean and sd. (The area remains constant.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity7')\">7. Fitting a normal distribution to data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the histogram of a real data set for which a normal distribution is a reasonable model. The parameters of the superimposed normal pdf can be adjusted to match the histogram shape.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity8')\">8. Probability and area under the pdf</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram allows you to drag over the classes in a histogram or the possible values in a pdf. It illustrates that area equals probability.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
