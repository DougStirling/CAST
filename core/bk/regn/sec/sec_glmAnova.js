var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Several explanatory variables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glmAnova1')\">1. Marginal sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The marginal sums of squares in a general linear model describe the effect on the residual sum of squares of deleting single variables from the full model. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glmAnova2')\">2. Variable selection</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The variable with smallest marginal sum of squares is least important and its p-value indicates whether it can be dropped from the model. The marginal sums of squares can be recalculated and further variables dropped in an iterative procedure.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glmAnova3')\">3. Multicollinearity</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the explanatory variables are uncorrelated, parameter estimates and marginal sums of squares are unaffected by removing other variables. Variance inflation factors indicate the degree of multicollinearity.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glmAnova4')\">4. Sequential sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sequential sums of squares describe changes to the residual sum of squares when the explanatory variables are added sequentially. The sums of squares depend on the order of adding the variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glmAnova5')\">5. Sequential sums of squares and fitted values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sequential sums of squares are also the sum of squared differences between the fitted values of consecutive models. In some applications, these differences can be shown graphically to illustrate the sequential sum of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glmAnova6')\">6. Order of variables in ssq table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sequential sums of squares depend on the order of adding the variables except with the explanatory variables are uncorrelated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glmAnova7')\">7. Sums of squares for groups of variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Individual explanatory variables can be grouped together by adding their sums of squares and degrees of freedom.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('glmAnova8')\">8. Hypothesis tests in anova tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sum of squares table can be extended with mean sums of squares and F ratios. P-values can be found for the F ratios to indicate whether each variable can be dropped from the model, but these should only be interpreted when subsequent p-values are not significant.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
