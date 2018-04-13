var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Binomial distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn_c2')\">1. Properties of counts and proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sample proportion is a statistic that varies from sample to sample. The sample count in a category is also random with a discrete distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn_c3')\">2. Binomial distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sample count in a category has a standard distribution called a binomial distribution with parameters n and &pi;.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('binomial3')\">3. Binomial probability examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The binomial distribution can be used to find probabilities relating to sample counts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('binomial4')\">4. Mean and standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>There are simple formulae for calculating the mean (or expected value) and standard deviation for a variable with a binomial distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('binomial5')\">5. Binomial assumptions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few assumptions must be satisfied by a sample count for it to have a binomial distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn1')\">6. Exercise: Are variables binomial?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise describes four random variables and asks which have binomial distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn2')\">7. Exercise: Match bar charts to parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are given information about the parameters of a binomial distribution in these two exercises and are asked to pick which of four alternative bar charts describes it. In the first exercise, the parameters are directly provided but the second exercise requires careful reading of the wording of the question.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn3')\">8. Exercise: Find binomial probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will use the information in the question to set the parameters of a binomial distribution then read off the probability by dragging over the bar chart of the binomial probabilities. (The computer does the calculations.)</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
