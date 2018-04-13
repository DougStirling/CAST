var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bivariate categorical distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_bivarCat1')\">1. 3-dimensional bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a rotating 3-dimensional bar chart for two variables that cannot be classified as a response and explanatory variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_bivarCat2')\">2. Chartjunk</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a static example showing bad perspective display of 3-dimensional bar chart.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_bivarCat3')\">3. 3-dimensional bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates clustering of bars in a 2-dimensional bar chart of the joint proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_bivarCat4')\">4. Marginal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram uses dynamic stacking of the bars in clustered bar charts to show the marginal proportions for X and Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_bivarCat5')\">5. Conditional distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a table of joint frequencies that can be changed into a table of conditional proportions. Clicking rows or columns shows the calculations underlying these conditional proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_bivarCat6')\">6. More about conditional distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram is based on a clustered bar chart of the joint frequencies. It can be dynamically changed into a bar chart of the conditional distributions of X given Y (or Y given X) by rescaling clusters of bars to make their total height equal one. It can also be used to discuss the difference between P(X given Y) and P(Y given X).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_bivarCat7')\">7. Conditional vs marginal distns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a kind of Venn diagram in which the areas equal the joint proportions. The rectangles can be changed in shape to show (the marginal propns for X and conditional propns for Y) or (the marginal propns for Y and conditional propns for X).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
