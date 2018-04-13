var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Variation</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Cliquez sur une rubrique pour afficher la page.)</span></p> <p>Lorsque les donn&eacute;es sont collect&eacute;es, toutes les valeurs sont rarement les m&ecirc;mes. Un r&ocirc;le important de statistiques est de d&eacute;crire et d'analyser cette variation.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation1')\">1. Signal et le bruit</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans de nombreuses situations, l'information (signal) peut &ecirc;tre masqu&eacute;e par des variations al&eacute;atoires (bruit).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation2')\">2. La variabilité naturelle</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque les donn&eacute;es sont collect&eacute;es &agrave; partir des &laquo;individus&raquo;, ils varient souvent consid&eacute;rablement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation3')\">3. Variabilité causée par des expériences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diff&eacute;rences intentionnelle &agrave; des conditions exp&eacute;rimentales peuvent aussi causer des diff&eacute;rences syst&eacute;matiques dans les variables. La variabilit&eacute; naturelle rend plus difficile d'interpr&eacute;ter les r&eacute;sultats exp&eacute;rimentaux.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation4')\">4. La variabilité des données d'enquête</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La variabilit&eacute; naturelle des individus rend &eacute;galement plus difficile &agrave; interpr&eacute;ter l'information &agrave; partir d'enqu&ecirc;tes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation_b5')\">5. Explained and unexplained variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une certaine variation dans une variable peut &ecirc;tre expliqu&eacute;e en termes d'autres variables enregistr&eacute;es. Autre variation est le r&eacute;sultat de la variabilit&eacute; naturelle dans les individus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation6')\">6. Prédire les valeurs futures</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variation dans un ensemble de donn&eacute;es peuvent nous aider &agrave; pr&eacute;dire les valeurs qui pourraient se produire si d'autres donn&eacute;es du m&ecirc;me genre sont collect&eacute;es &agrave; l'avenir.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
