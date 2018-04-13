var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Control charts in practice</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlPractice1')\">1. Control charts based on samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In practice, regular small samples are selected from a process rather than individual values. Control charts can be based on the mean and range of these samples to separately target the mean level of the process and its variability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlPractice2')\">2. Control charts for means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If individual values have a skew distribution, the &plusmn;&nbsp;3s limits may be exceeded in 2% or more of values. Sample means are closer to normal, so a control chart for means rarely exceeds its control limits when the process is under control.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlPractice3')\">3. Control charts for ranges</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A control chart for the range of successive samples can indicate increases in process variability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlPractice4')\">4. Control charts for proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many processes we want to monitor a proportion. A control chart for sample proportions can be used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlPractice5')\">5. Final comments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Managers should act only when a process becomes out of control. It is counter-productive to act on common-cause variation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
