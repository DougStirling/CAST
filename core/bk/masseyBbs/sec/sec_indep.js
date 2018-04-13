var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Independence</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep_c1')\">1. Association and conditional probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The row and column categories in a table of joint probabilities are said to be associated if the conditional probabilities are different in different rows. If there is association, knowing the row tells you something about the likely column. The concept is similar to correlation for numerical variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep_c2')\">2. Definition of independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the conditional distributions of the different rows of a contingency table are the same for all rows, the rows and columns are said to be independent. The definition of independence can be used for any pair of events.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
