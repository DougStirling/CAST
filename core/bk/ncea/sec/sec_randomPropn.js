var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Binomial distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn1')\">1. Proportion and probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The population proportion in a category is called its probability. Proportions and probabilities can be obtained from categorical and numerical variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn2')\">2. Properties of counts and proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sample proportion is a statistic that varies from sample to sample. The sample count in a category is also random with a discrete distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn3')\">3. Binomial distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sample count in a category has a standard distribution called a binomial distribution with parameters n and &pi;.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn4')\">4. Binomial probability examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The binomial distribution can be used to find probabilities relating to sample counts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn5')\">5. Normal approximation to binomial</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the sample size is large, the distribution of the sample count in a category becomes close to a normal distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomPropn6')\">6. Normal approximation examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the sample size is large, a normal approximation to the binomial distribution can be used to find binomial probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn1')\">7. Exercise: Are variables binomial?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise describes four random variables and asks which have binomial distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn2')\">8. Exercise: Match bar charts to parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are given information about the parameters of a binomial distribution in these two exercises and are asked to pick which of four alternative bar charts describes it. In the first exercise, the parameters are directly provided but the second exercise requires careful reading of the wording of the question.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn3')\">9. Exercise: Find binomial probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will use the information in the question to set the parameters of a binomial distribution then read off the probability by dragging over the bar chart of the binomial probabilities. (The computer does the calculations.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn4')\">10. Exercise: Find a normal approximation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You are asked to find the parameters of a normal approximation to a binomial distribution in this exercise.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_randomPropn5')\">11. Exercise: Probabilities from normal approx</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for probabilities relating to a binomial distribution but requires that you use a normal approximation to evaluate them.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
