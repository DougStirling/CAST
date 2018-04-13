var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>T distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tDistn1')\">1. Definition of t distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The ratio of a standard normal variable and the square root of an independent chi-squared variable (divided by its degrees of freedom) has a t distribution. Its pdf is given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tDistn2')\">2. Mean, variance and shape</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formulae for the mean and variance of the t distribution are given. Its tails are longer than those of a standard normal distribution, but the two distributions' shapes are close when the degrees of freedom are large.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tDistn3')\">3. Pivot for normal mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A function of the sample mean, sample variance and μ is shown to have a t distribution if the sample comes from a normal distribution. It is a pivot for μ.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tDistn4')\">4. Confidence interval for normal mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The pivot on the previous page can be used to find a confidence interval for a normal distribution's mean, μ.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tDistn5')\">5. Two samples from normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between two sample means from normal distributions is normally distributed. The &quot;pooled&quot; estimator of the common variance has a chi-squared distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tDistn6')\">6. Estimating difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A pivot can be found from the difference between the sample means and pooled estimate of the variance. This can be used to find a confidence interval for the difference between the means.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
