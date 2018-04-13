var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Balken- und Kreisdiagramme</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b1')\">1. Balkendiagramme</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Ein Balkendiagramm stellt die Häufigkeiten einer Häufigkeitstabelle grafisch dar.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat2')\">2. Paretodiagramme</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Unterliegen die Kategorien keiner sinnvollen, natürlichen Reihenfolge, so ist es oft sinnvoll die Kategorien in einem Balkendiagramm absteigend nach Häufigkeit zu sortieren.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b3')\">3. Chartjunk und irref&uuml;hrende Balkendiagramme</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Man sollte der Versuchung widerstehen ein Balkendiagramm auszuschmücken, da dies die Interpretation der eigentlichen Informationen erschwert.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b4')\">4. Gestapelte Balkendiagramme und Kreisdiagramme</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Statt einfachen Balkendiagrammen können kategorielle Daten auch mit Kreisdiagrammen und gestapelten Balkendiagrammen dargestellt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b5')\">5. Vergleich von Balken- und Kreisdiagrammen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Proportionen von zwei Kategorien können besser mit einfachen Balkendiagrammen verglichen werden. Die Proportionen aller Kategorien insgesamt können besser mit Kreisdiagrammen verglichen werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b6')\">6. Chartjunk in Kreisdiagrammen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three-dimensional pie charts are often drawn. If a pie chart holds little information, it is better to draw it small than to enhance it in this way.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat_b7')\">7. Balken- und Kreisdiagramme</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar and pie charts can be used to display any data where a total quantity is split into parts.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
