var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Häufigkeitstabellen</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable1')\">1. Häufigkeitstabellen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine Häufigkeitstabelle beinhaltet alle Information über die Verteilung einer kategoriellen Variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable_b2')\">2. Proportionen und Prozentwerte</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Proportionen und Prozentwerte sind meist leichter zu interpretieren, als die absoluten Häufigkeiten.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable3')\">3. Häufigkeitstabellen erkennen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In einer Häufigkeitstabelle trägt jedes Individuum (jede Beobachtungseinheit) mit genau 1 zu der den gezählten Werten der absoluten Häufigkeit bei.  Oft werden Tabellen mit Häufigkeiten oder Prozenten veröffentlicht, die keine echten Häufigkeitstabellen darstellen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('freqTable4')\">4. Veränderung der Kategorien</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Information, die durch eine Häufigkeitstabelle dargestellt wird, kann manchmal deutlicher hervortreten, wenn die Kategorien anders geordnet werden, nur ein Teil der Kategorien dargestellt wird oder ähnliche Kategorien zusammengefasst werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
