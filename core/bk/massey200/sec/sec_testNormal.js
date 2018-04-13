var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tests about normal distns</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testNormal1')\">1. Test for mean, known σ</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When a normal distribution's variance is a known value, the sample mean (or a standardised version) can be used as a test statistic since it has a normal distribution whose parameters are known when the null hypothesis is true.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testNormal2')\">2. Test about mean, unknown σ</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If σ must be estimated from the data, the corresponding test statistic should be referred to a t distribution to get the p-value for tests about μ.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testNormal3')\">3. Test about variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tests about σ² are based on the sample variance and a chi-squared distribution is used to get the p-value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testNormal4')\">4. Equal means in two distributions</a>&nbsp;&nbsp;&nbsp;<span class='note'>Not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If two samples come from normal distributions with equal variances, the test for comparing their means is based on a pooled estimate of the variance. The test statistic has a t distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testNormal5')\">5. Equal variances in two distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The ratio of two sample variances has an F distribution when the sample distributions' variances are equal. A test for equal variances can be based on this.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
