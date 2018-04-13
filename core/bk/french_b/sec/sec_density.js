var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Histogrammes et la densit&eacute;</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Un histogramme ne pas s&eacute;par&eacute;ment afficher les valeurs individuelles. En grands ensembles de donn&eacute;es qu'il affiche les principales caract&eacute;ristiques de la distribution de parcelles mieux que point ou tiges et feuilles.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density1')\">1. Densité des valeurs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les hauteurs des piles de croix dans un dot plot d&eacute;crire la densit&eacute; des valeurs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density2')\">2. Histogramme avec des largeurs de classe égale</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans un simple histogramme, la hauteur du rectangle ci-dessus chaque classe sur l'axe est &eacute;gal au nombre de valeurs dans la classe -- la fr&eacute;quence de la classe.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density3')\">3. Choix des classes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Largeur de classe et les start-point devrait &ecirc;tre choisi pour faire l'histogramme aussi lisse que possible - ni trop, ni trop blocs irr&eacute;guliers.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_b4')\">4. Histograms of small data sets</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La forme d'un histogramme peuvent &ecirc;tre tr&egrave;s d&eacute;pendant du choix des classes, si l'ensemble des donn&eacute;es est petite, m&eacute;fiez-vous sur-interpr&eacute;tation de sa forme. Stacked parcelles points sont un meilleur affichage des petits ensembles de donn&eacute;es.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density5')\">5. Fréquence relative et de la zone</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans un histogramme, la proportion de la superficie totale qui est au-dessus de toute cat&eacute;gorie est &eacute;gale &agrave; la fr&eacute;quence relative de la classe.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_b6')\">6. Comparing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'axe vertical devrait &ecirc;tre la fr&eacute;quence relative, et non pas la fr&eacute;quence, quand on compare deux groupes avec des histogrammes. Pyramides des &acirc;ges sont souvent utilis&eacute;s pour comparer les r&eacute;partitions par &acirc;ge.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_b7')\">7. Histograms with varying class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si un histogramme a largeurs variables de classe, l'axe vertical doit &ecirc;tre la &laquo;densit&eacute;&raquo;. La forme d'histogramme serait trompeuse si la fr&eacute;quence ou la fr&eacute;quence relative a &eacute;t&eacute; utilis&eacute; pour l'axe vertical.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density8')\">8. Comprendre les histogrammes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La proportion de valeurs dans toutes les classes est toujours &eacute;gal &agrave; la proportion de la zone histogramme total qui est au-dessus des classes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density9')\">9. Polygones de fréquence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Polygones de fr&eacute;quence sont &eacute;troitement li&eacute;s aux histogrammes mais donnent une moins &laquo;blocs&raquo; d'affichage de densit&eacute;. Diff&eacute;rents groupes peuvent &ecirc;tre compar&eacute;s plus facilement avec eux.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density10')\">10. Estimations de la densité du noyau</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optionnel)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les estimations des noyaux de densit&eacute; montrent la densit&eacute; dans un affichage encore plus lisse.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('density_b11')\">11. Drawing histograms by hand</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optionnel)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les histogrammes sont bas&eacute;es sur les tables de fr&eacute;quence. Limites de classe devraient &eacute;viter d'&eacute;ventuelles valeurs de donn&eacute;es.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
