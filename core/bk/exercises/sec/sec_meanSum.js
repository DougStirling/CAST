var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution of sample means and sums</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean1')\">1. Spread of distribution of mean and sum</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows the distribution of the mean or sum of values from samples of different sizes from a normal population. You must match the distributions with their sample sizes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean2')\">2. Shape of distribution of mean and sum</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise examines understanding of the limiting normal distribution of the sample mean and sum as sample size increases, whatever the shape of the population distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean3')\">3. Distribution of mean and sum (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, pop-up menus are used to specify the centre, spread and skewness of the distribution of a sample mean, sample sum or a single value, given the population distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomMean4')\">4. Probabilities relating to means and sums</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for the probability that the mean, the sum or a single value from a sample lies within some interval. Templates are provided to help evaluate the parameters of the sampling distribution and the z-scores for the endpoints of the interval.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
