var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Relations marginaux</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Vous pouvez rejoindre les mauvaises conclusions en analysant deux variables sur leur propre. La relation apparente peut être due à un ou plusieurs autres grandeurs.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking1')\">1. Misleading marginal correlation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variables Y et X peuvent être corrélés positivement dans l'ensemble, mais ont zéro ou même corrélation négative à chaque valeur d'une variable catégorique, Z. La variable Z est appelé (ou caché) variable de cache.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking2')\">2. Misleading marginal difference in means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une variable qui se cache peut aussi fausser la différence entre les moyens de Y en deux groupes (ie pour deux valeurs d'une variable catégorique, X).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking3')\">3. Simpsons paradox</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si X, Y et Z sont tous catégorique, un renversement de la relation marginale entre X et Y et de leurs relations avec sursis pour les différentes valeurs de Z est appelé le paradoxe de Simpson.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking4')\">4. Other examples with lurking variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Quelques exemples supplémentaires sont présentés où une variable cachée, Z, peut conduire à une conclusion trompeuse de la relation marginal. Une analyse complète en utilisant Z est toujours plus complexe mais il est essentiel de comprendre la relation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
