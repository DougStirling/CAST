var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Histogrammes et de la densité</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Un histogramme ne pas afficher séparément les valeurs individuelles. Dans les grands ensembles de données, il affiche les principales caractéristiques de la distribution mieux que tracés de points ou la potence et parcelles de feuilles.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density1')\">1. Densité des valeurs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les hauteurs des piles de croix dans un terrain dot décrivent la densité des valeurs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density2')\">2. Histogramme avec des largeurs de classe égale</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans un histogramme simple, la hauteur du rectangle au-dessus de chaque classe sur l'axe égal au nombre de valeurs dans la classe - la fréquence de la classe.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_m3')\">3. Choice of classes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Largeur de classe et de point de lancement devraient être choisis pour faire l'histogramme aussi lisse que possible - ni trop, ni trop blocs irréguliers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_m4')\">4. Histograms of small data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La forme d'un histogramme peut être très dépendante sur le choix des classes si l'ensemble de données est petit; méfiez-vous sur-interpréter sa forme. Tracés de points empilés sont un meilleur affichage des petits ensembles de données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density5')\">5. Fréquence relative et de la zone</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans un histogramme, la proportion de la surface totale qui est supérieure à toute classe est égale à la fréquence relative de la classe.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_b6')\">6. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'axe vertical devrait être la fréquence relative, pas de fréquence, lorsque l'on compare deux groupes avec des histogrammes. Les pyramides de population sont souvent utilisés pour comparer les distributions d'âge.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_m7')\">7. Histograms with varying class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un histogramme comporte différentes largeurs de classe, l'axe vertical doit être «densité». La forme de l'histogramme serait trompeuse si la fréquence ou la fréquence relative a été utilisé pour l'axe vertical.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density8')\">8. Comprendre les histogrammes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La proportion des valeurs dans une des classes est toujours égale à la proportion de la surface totale de l'histogramme qui est au-dessus des classes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density9')\">9. Polygones de fréquence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Polygones de fréquence sont étroitement liés à des histogrammes mais donnent une moins display 'blocs' de la densité. Différents groupes peuvent être comparés plus facilement avec eux.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density10')\">10. Estimations de la densité du noyau</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Estimations de la densité du noyau montrent la densité dans un affichage encore plus lisse.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_m11')\">11. Drawing histograms by hand</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les histogrammes sont basées sur des tableaux de fréquence. Limites de classe devraient éviter de valeurs de données possibles.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
