var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupInf1')\">1. Probabilities about differences</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page asks for a probability about either the difference between two single variables or two group means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupInf2')\">2. CI for difference between two means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two exercises on this page ask confidence intervals about the difference between two group means based on sample means and standard deviations; the second is a little harder than the first.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupInf3')\">3. Testing two group means for equality</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives an exercise in which you will find p-values for hypothesis tests about equality of two means and interpreting them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPaired1')\">4. 2-sample or paired t-test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise presents 3 different scenarios and asks whether the two means in each scenario should be compared with a 2-sample or a paired t-test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPaired2')\">5. Conduct paired t-test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are presented with a set of paired data and asked to perform a test about whether the two means are equal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_multiGroup1')\">6. Anova table formulae</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page shows four formulae relating to an Anova table and ask you to match them with textual descriptions of how they are interpreted.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_multiGroup2')\">7. Anova table values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives an analysis of variance table and asks you to find a few values from it.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_multiGroup3')\">8. Conclusion from Anova table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows an analysis of variable table and asks for the conclusion, described in the context of the problem.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
