var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_valueDisplay1')\">1. Stem and leaf plots with split stems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In the two exercises on this page, you will drag leaves to form stem and leaf plots from a list of values. The second exercise creates stem and leaf plots with split stems. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot1')\">2. Box plots with outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to drag the final two crosses of a stacked dot plot into the correct places of the display.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_density1b')\">3. Histograms with mixed class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page involve drawing box plots from sorted lists of values. For the second exercise, 'outliers' must be separately identified.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat3')\">4. Pareto diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will produce a Pareto diagram by reordering the bars of a bar chart, then find a proportion or percentage relating to the most important or least important categories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_transform1')\">5. Linear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, a data set is shown and a question is asked about the proportion of values that are less than a cutoff which is expressed in different units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_transform2')\">6. Mean and st devn after linear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page asks for the mean and standard deviation of a data set after linear transformation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_transform3')\">7. Nonlinear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are asked to identify which of three nonlinearly transformed dot plots correspond to square, log and square root transformations of a data set. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature2')\">8. Transformations for regression</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are asked whether a logarithmic transformation of X or Y might linearise the data in a scatterplot (and also give constant variability).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature3')\">9. Prediction from nonlinear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, a least squares line is fitted to a model that involves log(X) and/or log(Y). You are asked to use the equation of the line to predict Y from X.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_curvature4')\">10. Power transformations (advanced)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows a scatterplot of Y vs X, followed by three scatterplots involving transformations of Y and X (log, square and square root transformations). You are asked to match the scatterplots to the transformations.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
