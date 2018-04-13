var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Variables and data</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Click on any heading to display the page.)</span></p> <p>The same toolbox of statistical methods can be applied to data from a wide      range of contexts.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_c1')\">1. Variables and individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Most data sets contain one or more measurements from each of a collection of 'individuals' (also called 'cases' or 'units').</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_c2')\">2. Types of variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variables are classified into numerical and categorical variables. A finer classification is also sketched.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_c3')\">3. Groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A categorical variable can be used to split the 'individuals' into groups. Equivalently, grouped data can be represented in a data matrix with a categorical variable. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_c4')\">4. Meaningful variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sometimes a ratio or difference of two variables in a data matrix is easier to interpret than the original variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal_c1')\">5. Relationships</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For most data sets, we are interested in understanding the relationships between the variables. However interpreting relationships must be done with care since some relationships are not causal ones.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('causal4')\">6. Sources of data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In an observational study, values are passively recorded from individuals. Experiments are characterised by the experimenter's control over the values of one or more variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable1')\">7. Exercise: Types of variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will classify various measurements as numerical (continuous or discrete) or categorical (ordinal or nominal).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
