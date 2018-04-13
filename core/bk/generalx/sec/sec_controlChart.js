var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Control charts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_controlChart1')\">1. Run charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example run chart plots regular measurements from a process against time with control limits that were externally specified.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_controlChart2')\">2. Control limits</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A diagram shows that almost all values are within 3 standard deviations of the mean for normal distributions. Control limits 3s on each side of the sample mean would therefore rarely be exceeded for data that are in control, provided they are not very skew.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_controlChart3')\">3. Other signals of being out-of-control</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams show other types of trigger for 'exceptional' points. An example is shown that includes several types of 'exceptional' point.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_controlChart4')\">4. False alarms</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that false alarms occasionally happen even when the process is in control.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_controlChart5')\">5. Examples of run charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows training data and further observations that occasionally go out of control.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_controlChart6')\">6. Control charts for means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A diagram shows a control chart for individual measurements from samples and also a control chart for the sample means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_controlChart7')\">7. Control charts for ranges</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A control chart for sample ranges is shown.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_controlChart8')\">8. Cause-and-effect (fishbone) diagram</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A diagram shows how a cause-and-effect diagram is drawn.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
