var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Sequential sums of squares (Optional)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seqRegnSsq1')\">1. Sequentially adding variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>As explanatory variables are added to the model, the regression model gets closer to the data points.
 
This section also shows how the ANOVA table extends to the more complex situations discussed in the previous topics.  It is taken from a different book in CAST and therefore does not have the associated videos. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seqRegnSsq2')\">2. Splitting the explained sum of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Each additional variable reduces the residual sum of squares by an amount that is the sum of squares of differences between the least squares fits of the two models.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seqRegnSsq3')\">3. Order of adding X and Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The explained sum of squares for X can be different, depending on whether Z is already in the model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seqRegnSsq4')\">4. Anova tests for individual variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>There are two ways to split the total sum of squares in an anova table. The F-test for the final variable added to the model gives identical results to the t-test for the coefficient in the full model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seqRegnSsq5')\">5. Orthogonal variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the two explanatory variables are uncorrelated (orthogonal), the results are easier to interpret. The slope coefficients for X are the same, whether or not Z is in the model, and the two anova tables are identical.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seqRegnSsq6')\">6. Orthogonal variables and experimental design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Orthogonal variables usually only arise from designed experiments. They result in the most accurate parameter estimates and results that are relatively easy to interpret.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seqRegnSsq7')\">7. Other sequences of models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For any sequence of models with increasing complexity, component sums of squares can be defined that compare successive models in the sequence.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
