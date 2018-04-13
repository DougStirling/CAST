var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standard data structures</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Click on any heading to display the page.)</span></p> <p>The same toolbox of statistical methods can be applied to data from a wide range of contexts.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_b1')\">1. Variables and individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Most data sets contain one or more measurements from each of a collection of 'individuals' (also called 'cases' or 'units').</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_b2')\">2. Types of variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variables are classified into numerical and categorical variables. A finer classification is also sketched.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures3')\">3. Categorical variables and groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A categorical variable can be used to split the 'individuals' into groups. Equivalently, grouped data can be represented in a data matrix with a categorical variable.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
