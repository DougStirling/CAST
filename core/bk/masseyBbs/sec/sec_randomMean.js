var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution of sample mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean_c1')\">1. Parameters and statistics</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A summary value describing a population is called a parameter and the corresponding value in a sample is called a statistic. Sample statistics vary from sample to sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean2')\">2. Variability of sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A sample mean has a distribution that is centred round the population mean, &micro;, but has smaller spread than the population's spread.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean3')\">3. Standard devn of sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The spread of the sample mean decreases as sample size increases. A formula is given for the standard deviation of the sample mean in terms of the sample size, n, and population standard deviation, &sigma;.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean4')\">4. Means from normal populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sample means from normal populations also have normal distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean5')\">5. Large-sample normality of means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The shape of the sample mean's distribution is usually close to normal, even if the population distribution is skew or multimodal. The bigger the sample size, the closer the distribution to normal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sumDiff1')\">6. Distributions of sums and means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean of a random sample is approximately normal with s.d. equal to &sigma; divided by &radic;n. The sum of a random sample is also approximately normal, but its s.d. is &sigma; times &radic;n.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean_c6')\">7. Estimating variability from one sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is possible to estimate the distribution of a sample mean from a single sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean7')\">8. Requirement of independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the sample values are positively correlated, the standard deviation of the mean will be underestimated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean1')\">9. Exercise: Spread of distribution of mean and sum</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows the distribution of the mean or sum of values from samples of different sizes from a normal population. You must match the distributions with their sample sizes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean2')\">10. Exercise: Shape of distribution of mean and sum</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise examines understanding of the limiting normal distribution of the sample mean and sum as sample size increases, whatever the shape of the population distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean3')\">11. Exercise: Distribution of mean and sum (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, pop-up menus are used to specify the centre, spread and skewness of the distribution of a sample mean, sample sum or a single value, given the population distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean4')\">12. Exercise: Probabilities relating to means and sums</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for the probability that the mean, the sum or a single value from a sample lies within some interval. Templates are provided to help evaluate the parameters of the sampling distribution and the z-scores for the endpoints of the interval.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
