var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn1')\">1. Shape of normal distribution </a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>One exercise asks you to guess the standard deviation of a normal distribution. Another requests a sketch of a normal distribution given its mean and standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_normalDistn7')\">2. Guessing normal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 70-95-100 rule of thumb gives the approximate probability of a value within 1, 2 and 3 standard deviations of the mean. Te exercise uses this rule of thumb to find some normal probabilities without formal calculations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_popSamp1')\">3. Distinction between populations and samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page asks whether three statements describe populations or samples.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_popSamp2')\">4. Distinction between parameters and estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks whether three statements describe parameters or estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean1')\">5. Standard error of mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page shows a data set with the sample mean and st devn. The standard error of the mean must be calculated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean2')\">6. Standard error vs standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise states the value of either the standard deviation or the standard error or the mean. The question asks for an interval containing about 95% of the values or an interval with 95% confidence of including the popn mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean3')\">7. Factors affecting the standard deviation and standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks 3 questions about the effect of sample size and spread of sample values on the sd and se, and about the interpretation of the se and sd.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean3')\">8. 95% confidence interval, unknown sigma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is similar to the previous one but requires use of a t distribution since the population standard deviation is unknown.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean6')\">9. Factors affecting width of CI</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, sample standard deviation and confidence level affect the width of a CI for the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean7')\">10. Interpreting a 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you must choose which of four statements correctly interprets the meaning of a 95% confidence interval.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
