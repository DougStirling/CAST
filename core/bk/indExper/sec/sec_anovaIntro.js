var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Inference</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('anovaIntro1')\">1. Variation between and within treatments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Assessing whether a categorical factor affects the response must take into account both variation between the treatment means and also variation within each factor level.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('anovaIntro2')\">2. Explained and unexplained variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For experiments with numerical factors, the ideas of between- and within-treatment variation must be generalised to explained and unexplained variation. Both types of variation affect our assessment of whether the factor affects the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('anovaIntro3')\">3. Sums of squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Explained and unexplained variation are summarised by quantities called explained and unexplained sums of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('anovaIntro4')\">4. Analysis of variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The explained and unexplained sums of squares form the basis of an analysis of variance table that can be used to test whether the factor really does affect the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('anovaIntro5')\">5. Hierarchy of models for numerical factor</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A linear model is the simplest one for a numerical factor but a quadratic model and one that treats the factor as categorical categorical allow increasing degrees of curvature in the relationship. Models that allow curvature have smaller residual sums of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('anovaIntro6')\">6. Testing linearity</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The explained sum of squares for changing from a quadratic to a categorical model is the basis of an anova test of goodness-of-fit of a quadratic model. The explained sum of squares for changing from a linear to a quadratic model can be used to test for curvature.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('anovaIntro7')\">7. Estimating the error variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean residual sum of squares estimates the variance of the 'errors' in the model. This is also the variance of replicate observations within any factor level.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('anovaIntro8')\">8. Confidence intervals for treatment means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Confidence intervals for the treatment means provide a good summary of the effect of a factor.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
