var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Three simple exercises are provided.  Their inclusion here is largely to introduce you to the way of taking them.</p> <p>If you are unclear what to do, then choose &quot;Tell me&quot; and CAST will do the exercise for you.  Then you can try further examples of the same exercise for yourself.</p> <p>Each exercise can be taken as many times as you like, until you understand the concept.  The answers also try to help you, particularly if you get it wrong.  You should find taking these exercises is a fun way to learn.  </p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable1')\">1. Types of variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You classify various measurements as numerical (continuous or discrete) or categorical (ordinal or nominal). (This exercise is repeated in Topic 6.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread1')\">2. Ideas of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You summarise the difference between two distributions in terms of their different centres and spreads. (This exercise is repeated in Topic 2.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread4')\">3. Standard deviation from general knowledge</a>&nbsp;&nbsp;&nbsp;<span class='note'>(Optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>General knowledge about the type of measurement should be enough for you to roughly guess the value of the standard deviation. (This exercise is repeated in Topic 7, when it is no longer optional!)</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
