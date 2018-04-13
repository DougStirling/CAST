var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Sampling in practice</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>In many practical situations, there are better sampling schemes than simple  random samples. Whatever the sampling scheme, non-sampling errors can badly affect  results.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice1')\">1. Other sampling schemes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few alternatives to simple random samples are described.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice4')\">2. Sampling and non-sampling errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Samples are usually collected to estimate population characteristics. The ordinary variation caused by the sampling scheme is called sampling error. Practical difficulties with conducting the survey can cause biased estimates (non-sampling errors).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice5')\">3. Coverage and non-response errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Coverage error and non-response error prevent some individuals being included in the sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice6')\">4. Interviewer and instrument errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Interviewer error and instrument error can result in 'incorrect' measurements from the sampled individuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice7')\">5. Survey design issues</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Survey information is collected by a variety of mechanisms, from mailed questionnaires to telephone. Each has its own advantages and disadvantages.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
