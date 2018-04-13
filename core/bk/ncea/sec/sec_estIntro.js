var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction to estimation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro1')\">1. Interest in populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When data are collected, we are usually more interested in the unknown population distribution from which we assume that the data were generated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro2')\">2. Interest in parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few numerical summaries of a population distribution (parameters) often capture its most interesting characteristics. The corresponding sample statistics provide estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro3')\">3. Applications of estimation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives a few examples where sample statistics are used to estimate important population parameters.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro4')\">4. Estimation error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between the population parameter and a sample estimate is called the error in the estimate.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro5')\">5. Distribution of errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Estimation errors vary from sample to sample and have distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro6')\">6. Standard error and bias</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A good estimator has errors that are close to zero. The error distribution should ideally be centred on zero (unbiased) and have low standard deviation (standard error). The standard error is the standard deviation of both the estimator and the estimation error.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro7')\">7. Interval estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An interval estimate is a range of values within which we are 'confident' that the unknown population parameter lies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_popSamp2')\">8. Exercise: Distinguish between parameters and estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks whether three statements describe parameters or estimates.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
