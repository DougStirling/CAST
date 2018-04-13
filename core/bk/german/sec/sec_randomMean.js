var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Verteilung von Stichprobenmittelwerten</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean1')\">1. Parameters and statistics</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein Wert, der bestimmte Eigenschaften einer Grundgesamtheit zusammenfasst wird als Parameter bezeichnet. Der entsprechende Wert wird Statistik genannt, wenn er sich auf eine Stichprobe bezieht. Stichprobenstatistiken schwanken von Stichprobe zu Stichprobe.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean2')\">2. Variabilit&auml;t des Stichprbenmittelwerts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein Stichprobenmittelwert folgt einer Verteilung, die um den Mittelwert der schwankt. Die Streuung der Stichprobenmittelwerte ist kleiner als die Streuung der Einzelwerte in der Grundgesamtheit.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean3')\">3. Standardabweichung der Stichprobe</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Streuung der Stichprobenmittelwerte wird kleiner, wenn der Stichprobenumfang größer wird. Durch eine Formel, welche die Standardabweichung der Grundgesamtheit und den Stichprobenumfang einbezieht, kann die Standardabweichung der Stichprobenmittelwerte berechnet werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean4')\">4. Mittelwerte von normalverteilten Grundgesamtheiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Stichprobenmittelwerte von normalverteilten Grundgesamtheiten sind normalverteilt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean5')\">5. Zentraler Grenzwertsatz</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Verteilung der Stichprobenmittelwerte ist meist annähernd normal, selbst wenn die Verteilung der Grundgesamtheit schief oder multimodal ist. Je größer der Stichprobenumfang, desto ähnlicher ist die Verteilung einer Normalverteilung.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean6')\">6. Verteilung des Stichprobenmittelwerts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Man kann die Verteilung der Stichprobenmittelwerte mit einer einzelnen Stichprobe schätzen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean7')\">7. Unabh&auml;ngigkeit</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sind die Stichprobenwerte nicht unabhängig, wird die Standardabweichung der Stichprobenmittelwerte zu niedrig geschätzt.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('randomMean8')\">8. Stichproben aus endlichen Grundgesamtheiten</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Wird die Zufallstichprobe ohne Zurücklegen gezogen, dann muss die Formel modifiziert werden.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
