var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Présentation des données dans tableaux</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Cette section décrit les principes pour l'affichage efficace des tableaux de fréquence, des tableaux de contingence et d'autres affichages de tableau de données dans les rapports.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay1')\">1. Quadrillage et l'espace blanc</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ne jamais utiliser un quadrillage à la boîte de toutes les valeurs dans un tableau. Dans les grandes tables multi-colonnes, la lecture à travers les rangées est plus facile avec des déliés occasionnels de léger ombrage, mais sinon, envisager d'utiliser l'espace blanc pour séparer les groupes associés de lignes ou colonnes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay2')\">2. Mise en page et d'annotation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Utilisez l'espace blanc de lignes et de colonnes de groupes liés. Réorganisation des lignes ou des colonnes peuvent apporter des valeurs qui devraient être comparés plus proche. Résumer et interpréter dans le corps d'un rapport mais ne répètent pas les valeurs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay3')\">3. Chiffres significatifs et le bruit des données</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'information utile est «signal». L'information qui ne contribue pas à la compréhension des données est «bruit». Bruit comprend bruit de données et les embellissements inutiles à la table. Diminuer les chiffres significatifs affichés diminue souvent le bruit de données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay4')\">4. Variables significatives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Affichage proportions dans une table au lieu des fréquences multi-colonne rend plus facile de comparer les groupes. Ratios de variables peuvent être plus faciles à interpréter que leurs valeurs premières.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay5')\">5. Permutation des lignes et des colonnes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> Il est plus facile de comparer les valeurs bas de lignes que sur plusieurs colonnes. Permutation des lignes et des colonnes d'une table, il peut être plus facile de faire des comparaisons.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay6')\">6. Réorganisation des lignes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Réorganisant les lignes (ou colonnes) peut rendre l'information dans les grands tableaux ressortent mieux.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tableDisplay7')\">7. Exemple</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un exemple montre un tableau publié dont la présentation peut être améliorée de plusieurs façons.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
