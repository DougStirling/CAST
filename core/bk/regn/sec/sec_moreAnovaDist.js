var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Sums of squares for other models</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>The pages in this section demonstrate the distributions of the sums of squaresin analysis of variance tables for a few more complex models.</p> <div style=\"border: 1px solid gray; font-weight:bold; width:75%; padding: 4px 12px 4px 12px; margin:15px auto;\"><p><span style=\"color:#FF0000;\">Warning:</span> The pages in this section relate to models that were described in earlier chapters. In a previous version of CAST, they were interspersed with earlier practical material so they only provide some 'support'	for the earlier anova material.</p>	</div> 	<br>\n</div>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreAnovaDist1')\">1. Sums of squares and degrees of freedom</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives general results about sums of squares, their degrees of freedom and their distributions, for any sequence of models.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreAnovaDist2')\">2. Distributions of sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a linear model with 2 numerical explanatory variables, the residual sums of squares has a chi-squared distribution with (n-3) degrees of freedom. The explained regression sum of squares has a chi-squared distribution with 2 degrees of freedom if the response is unrelated to the explanatory variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreAnovaDist3')\">3. Distribution of quadratic ssq</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a quadratic model, the quadratic sum of squares has a chi-squared distribution if the true model is linear, but its distribution has a larger mean if there is curvature.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreAnovaDist4')\">4. Theory behind anova test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The between-group and within-group sums of squares have chi-squared distributions and the anova F ratio has an F distribution if both group means are equal. The p-value for the anova test is the tail area of this distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('moreAnovaDist5')\">5. Theory behind anova test (advanced)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sums of squares again have chi-squared distributions but with different degrees of freedom.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
