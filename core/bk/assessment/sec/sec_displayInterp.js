var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>What does a distribution show?</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp1')\">1. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An extreme mark should be carefully examined. Was there an error?</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp2')\">2. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sometimes the marks are clustered into groups. Do these clusters correspond to any other characteristics of the students?</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp3')\">3. Centre, spread and shape</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Graphical displays show a 'typical' mark (centre of the distribution) and the variability of the marks (the spread of the distribution). A long tail to the distribution may also be visible (skewness).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp4')\">4. Displaying extra information</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Statistical software can dynamically show student names or other information. Annotating a printed display is an alternative.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp5')\">5. Danger of overinterpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Class marks are usually small data sets (around 30 values). Features may appear by chance without any meaningful underlying cause.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
