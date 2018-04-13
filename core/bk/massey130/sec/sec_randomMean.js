var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution of sample mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean_b1')\">1. Variability of sample statistics</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A summary value describing a population is called a parameter and the corresponding value in a sample is called a statistic. Sample statistics vary from sample to sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean2')\">2. Variability of sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A sample mean has a distribution that is centred round the population mean but has smaller spread than the population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean3')\">3. Standard devn of sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The spread of the sample mean decreases as sample size increases. A formula is given for the standard deviation of the sample mean in terms of the sample size and population standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean4')\">4. Means from normal populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sample means from normal populations also have normal distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean5')\">5. Large-sample normality of means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The shape of the sample mean's distribution is usually close to normal, even if the population distribution is skew or multimodal. The bigger the sample size, the closer the distribution to normal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean_b6')\">6. Distribution of mean from a sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is possible to estimate the distribution of a sample mean from a single sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean_b7')\">7. Requirement of independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the sample values are positively correlated, the standard deviation of the mean will be underestimated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean8')\">8. Sampling from finite popns</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a random sample is selected without replacement, the formula for the standard deviation of the sample mean must be modified.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
