var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>M&eacute;diane, quartiles et trac&eacute;s en bo&icirc;te</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Parcelles fortement encadr&eacute; r&eacute;sume la r&eacute;partition des valeurs dans un ensemble de donn&eacute;es. Ils sont utiles pour comparer les diff&eacute;rents lots de valeurs.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot1')\">1. La nécessité de résumer</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Parcelles Dot, tiges et feuilles et les histogrammes contiennent des informations d&eacute;taill&eacute;es qui est g&ecirc;nant lorsque deux ou plusieurs ensembles de donn&eacute;es sont compar&eacute;es.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot2')\">2. Médian, quartiles et boîte à moustaches</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La m&eacute;diane et les quartiles diviser un lot de valeurs en quatre dimensions &eacute;gales ensembles de valeurs. Une bo&icirc;te &agrave; moustaches est une repr&eacute;sentation graphique de la m&eacute;diane, les quartiles et des extr&ecirc;mes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot3')\">3. Interpréter une forme de boîte parcelles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une bo&icirc;te &agrave; moustaches montre clairement le centre, la propagation et l'asym&eacute;trie d'un ensemble de donn&eacute;es. Il divise l'histogramme correspondant en 4 zones approximativement &eacute;gales.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot4')\">4. Afficher les valeurs aberrantes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La bo&icirc;te &agrave; moustaches de base est souvent modifi&eacute; pour afficher les valeurs aberrantes comme des croix s&eacute;par&eacute;s.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot5')\">5. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bo&icirc;te parcelles ne peut pas montrer les clusters, donc ne doit jamais &ecirc;tre utilis&eacute; pour les donn&eacute;es avec des clusters.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot6')\">6. Comparaison des groupes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les bo&icirc;tes &agrave; moustaches sont particuli&egrave;rement efficaces pour l'affichage des diff&eacute;rences entre plusieurs groupes de valeurs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot_b7')\">7. Dangers of over-interpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bo&icirc;te parcelles sont relativement stables, et contiennent moins de &laquo;bruit&raquo; que les autres &eacute;crans. Ils peuvent d&eacute;crire les diff&eacute;rences entre concise, m&ecirc;me les petits groupes.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
