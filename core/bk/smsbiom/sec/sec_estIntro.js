var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction to estimation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro_b1')\">1. Interest in populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When data are collected, we are usually more interested in the unknown population distribution from which we assume that the data were generated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('estIntro_b2')\">2. Interest in parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few numerical summaries of a population distribution (parameters) often capture its most interesting characteristics. The corresponding sample statistics provide estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean_b4')\">3. Standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In most practical applications, the population standard deviation is unknown. The standard error of the sample mean can be approximated by replacing the population standard deviation by the sample standard deviation, s.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean5')\">4. Standard error vs standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is important to distinguish between the interpretation (and value) of the standard error (SE) and standard deviation (SD).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
