var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>最小二乘法</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs1')\">1. 从X预测Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>要从已知的X的值预测Y的值，一条直线或曲线是有用的。</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs2')\">2. 线性模型</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>一条直线(一种线性关系)经常被用来从一个变量预测另一个变量。</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs3')\">3. 拟合值和残差</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Y的真实值与由线性关系得到的预测值的差被称为残差。很明显小的残差更 合我们的意。</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs4')\">4. 最小二乘</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>残差平方和描述线性预测的精确性。最小二乘法是通过最小化残差平方和 从而获得所要的直线</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs5')\">5. 弯曲和异常点</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>当从数据的散点图可以观察到曲线关系或异常点时，线性模型不再适用。 异常点应当被仔细地检查。</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs6')\">6. 残差图</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>在残差图中异常点和曲线关系会被更明显地显示。</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('leastSqrs7')\">7. 预测Y和X(高级部分)</a>&nbsp;&nbsp;&nbsp;<span class='note'>( 高级部分)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>在最小二乘法里，Y和X不是被同样地对待。通过X预测Y得到的最佳线性关 系和通过Y预测X得到的最佳线性关系是不同的。</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
