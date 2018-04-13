var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Poisson distribution</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('poisson1')\">1. Poisson process</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The simplest model for events in time is a homogeneous Poisson process in which events occur singly at a constant rate over time, λ, with events in non-overlapping time periods independent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('poisson2')\">2. Events in fixed time</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proof not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The number of events in a Poisson process over a fixed period of time has a Poisson distribution. It can be found as a limit of binomial distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('poisson3')\">3. Poisson probability function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The Poisson distribution's probability function is given and some properties are described.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('poisson4')\">4. Mean and variance</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proof not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A Poisson distribution's mean and variance both equal λ. The distribution's shape is close to a normal distribution when λ is large.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('poisson5')\">5. Example</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few probabilities relating to Poisson distributions are calculated here.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('poisson6')\">6. Maximum likelihood</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The maximum likelihood estimate of the Poisson parameter, λ, is the sample mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('poisson7')\">7. Confidence interval for rate</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard error of the maximum likelihood estimator is derived and a confidence interval for the parameter, λ, is found from it.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
