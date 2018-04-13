var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution des sommes et des différences</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Comparaison des groupes implique généralement différences entre les moyennes. Cette section développe des résultats généraux au sujet des sommes et des différences de quantités aléatoires qui seront la base pour la comparaison de deux moyens.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sumDiff1')\">1. Means and sums of random samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La moyenne d'un échantillon aléatoire est approximativement normale avec sd égale à σ divisé par √n. La somme d'un échantillon aléatoire est également à peu près normale, mais son sd est √nσ.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sumDiff2')\">2. Sum and differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La somme et la différence de deux variables normales indépendantes sont également distribuées normalement. Si elles ont le même écart-type, σ, la somme et de la différence les deux ont 1.414σ de déviation standard. (Leur écart est 2σ².)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sumDiff3')\">3. Sums and differences (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Cette page généralise les résultats à la somme et la différence des variables dont les déviations standard peut être différent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sumDiff4')\">4. Probabilities for sums and differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si deux variables sont indépendants et ont des distributions normales, les probabilités relatives à leur somme et la différence peuvent être trouvés en utilisant les formules pour la moyenne et l'écart type des sommes et des différences.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
