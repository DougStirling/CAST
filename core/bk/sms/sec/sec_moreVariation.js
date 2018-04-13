var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>More about variation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_c7')\">1. Understanding means and st devns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is possible to roughly guess the mean and standard deviation from a histogram and roughly sketch a symmetric histogram matching any given mean and standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation1')\">2. Effect of outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a data set contains an outlier, the mean and especially the standard deviation can be badly affected. The values may be obviously wrong when the 70-95-100 rule is applied in the context of the data but examining a dot plot or box plot is best.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation2')\">3. Standard deviation of grouped data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard deviation within groups is usually lower than the overall standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation3')\">4. Explained and unexplained variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Splitting a data set into groups of 'similar' values results in more accurate predictions of future values if the group membership is known. The grouping is said to explain some of the overall variation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreVariation4')\">5. Variance and degrees of freedom</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The square of the standard deviation is called the variance; its value is harder to understand but it is the basis of important advanced statistical methods. The degrees of freedom are the number of pieces of information contributing to the standard deviation (or variance).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
