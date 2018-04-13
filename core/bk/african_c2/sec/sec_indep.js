var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Independence</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Relationships between categorical variables can be described in similar terms to these used for numerical variables.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep_b1')\">1. Association</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two categorical variables, X and Y, are associated (related) when the conditional distribution of Y given X=x is different for different values of x. Knowing the value of X therefore tells you something about Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep2')\">2. Independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the conditional distribution of Y is the same for all values of X, the variables are called independent. This special case is of practical importance.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
