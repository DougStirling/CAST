var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standard error of mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean1')\">1. Error distribution for mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When using a sample mean to estimate a population mean, the errors have a distribution with mean zero. The standard deviation of the errors (standard error) is the standard deviation of the sample mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean2')\">2. Standard error when σ is known</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the population standard deviation is known, the standard error can be evaluated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean3')\">3. Interpreting the standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The estimation error has about 95% probability of being within &plusmn;2 standard errors of zero and is almost certainly within &plusmn;3 standard errors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('seMean5')\">4. Standard error vs standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is important to distinguish between the interpretation (and value) of the standard error (SE) and standard deviation (SD).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean1')\">5. Exercise: Find standard error of mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will calculate the standard error of the mean from the sample mean and standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean2')\">6. Exercise: Standard error vs standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for an interval containing about 95% of the values or an interval with 95% confidence of including the popn mean. The question provides either the sample standard deviation or the standard error of the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean3')\">7. Exercise: What affects the standard devn and standard error?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks 3 questions about the effect of sample size and spread of sample values on the sd and se, and about the interpretation of the se and sd.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
