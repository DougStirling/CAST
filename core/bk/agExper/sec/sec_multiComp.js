var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Multiple comparisons</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiComp1')\">1. Problems with multiple tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If several hypothesis tests are conducted with the same significance level, the probability of at least one being significant can be much higher. A modification allows the overall significance level to be fixed.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiComp2')\">2. Which means are different?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If it is concluded that the reponse mean depends on the factor level, it is natural to ask which levels differ. If the experiment involves several factor levels, t-tests to compare pairs of means should be avoided -- with many such tests, there is an increased probability of a low p-value for at least one pair of means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiComp3')\">3. Multiple comparisons</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A wider difference than that suggested by a pairwise comparison should be used when there are several group means to compare.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiComp4')\">4. Comparisons in randomised block designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A similar adjustment can be made for comparison of treatments in a randomised block design.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiComp5')\">5. Warning: Are multiple comparisons necessary?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there is any structure to the factor levels, it is often best to use contrasts to make more meaningful comparisons between the levels.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
