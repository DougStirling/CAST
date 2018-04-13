
addBook('bk/presentation', 'book_splash', "About this CAST module");

addChapter('bk/presentation', 'ch_preface', "Preface");
addSection('en/aboutCast', 'aboutCast1', "What is CAST?");
addSection('en/aboutCast', 'aboutCast3', "Copyright and licence");
addSection('en/aboutCast', 'aboutCast4', "Acknowledgements");
addSection('en/aboutCast', 'aboutCast5', "About the author");
addSection('en/otherInfo', 'otherInfo2', "Printing");

addChapter('bk/presentation', 'ch_simpleTable', "Simple Tables");
addSection('en/simpleTable', 'simpleTable1', "Frequency tables");
addSection('en/simpleTable', 'simpleTable2', "Tables for other partitions");
addSection('en/simpleTable', 'simpleTable3', "Proportions and percentages");
addSection('en/simpleTable', 'simpleTable4', "Other simple tables");
addSection('en/simpleTable', 'simpleTable5', "Variations");
addSection('en/simpleTable', 'simpleTable6', "Tables within tables");

addChapter('bk/presentation', 'ch_tableDisplay', "Presenting Data in Tables");
addSection('en/tableDisplay', 'tableDisplay1', "Gridlines and white space");
addSection('en/tableDisplay', 'tableDisplay2', "Layout and annotation");
addSection('en/tableDisplay', 'tableDisplay3', "Significant digits and data noise");
addSection('en/tableDisplay', 'tableDisplay4', "Meaningful variables");
addSection('en/tableDisplay', 'tableDisplay5', "Swapping rows and columns");
addSection('en/tableDisplay', 'tableDisplay6', "Reordering rows");
addSection('en/tableDisplay', 'tableDisplay7', "Example");

addChapter('bk/presentation', 'ch_simpleBar', "Bar Charts");
addSection('en/simpleBar', 'simpleBar1', "Bar charts");
addSection('en/simpleBar', 'simpleBar2', "Ordering of categories");
addSection('en/simpleBar', 'simpleBar3', "Importance of zero and -ve values");
addSection('en/simpleBar', 'simpleBar4', "Chartjunk");
addSection('en/simpleBar', 'simpleBar5', "Misleading bar charts");
addSection('en/simpleBar', 'simpleBar6', "Histograms");

addChapter('bk/presentation', 'ch_simplePie', "Pie Charts");
addSection('en/simplePie', 'simplePie1', "Stacked bar charts and pie charts");
addSection('en/simplePie', 'simplePie2', "Comparison of bar and pie charts");
addSection('en/simplePie', 'simplePie3', "Chartjunk for pie charts");
addSection('en/simplePie', 'simplePie4', "Misleading stacked bar charts");
addSection('en/simplePie', 'simplePie5', "Colour");

addChapter('bk/presentation', 'ch_groupGraph', "Comparing Groups");
addSection('en/groupGraph', 'groupGraph1', "Two-way tables");
addSection('en/groupGraph', 'groupGraph2', "Proportions within groups");
addSection('en/groupGraph', 'groupGraph3', "Clustered bar charts");
addSection('en/groupGraph', 'groupGraph4', "Stacked bar charts");
addSection('en/groupGraph', 'groupGraph5', "Two categories");
addSection('en/groupGraph', 'groupGraph6', "Chartjunk");

addChapter('bk/presentation', 'ch_scatterGraph', "Relationships");
addSection('en/scatterGraph', 'scatterGraph1', "Scatterplots");
addSection('en/scatterGraph', 'scatterGraph2', "Information from scatterplots");
addSection('en/scatterGraph', 'scatterGraph3', "Distinguishing groups");
addSection('en/scatterGraph', 'scatterGraph4', "Showing size");
addSection('en/scatterGraph', 'scatterGraph5', "Nonlinear scales");

addChapter('bk/presentation', 'ch_maps', "Maps");
addSection('en/maps', 'maps1', "Colouring regions");
addSection('en/maps', 'maps2', "Choice of colours");
addSection('en/maps', 'maps3', "Adding information with circles");
addSection('en/maps', 'maps4', "Maps with pie and bar charts");
addSection('en/maps', 'maps5', "Distorted population maps");
addSection('en/maps', 'maps6', "Other distorted maps");

addChapter('bk/presentation', 'ch_timeGraph', "Changes over Time");
addSection('en/timeGraph', 'timeGraph1', "Time series charts");
addSection('en/timeGraph', 'timeGraph2', "Time series for quantities");
addSection('en/timeGraph', 'timeGraph3', "Time series with categories");
addSection('en/timeGraph', 'timeGraph4', "Chartjunk");
addSection('en/timeGraph', 'timeGraph5', "Dynamic pie and bar charts");
addSection('en/timeGraph', 'timeGraph6', "Dynamic histograms");
addSection('en/timeGraph', 'timeGraph7', "Dynamic scatterplots");
addSection('en/timeGraph', 'timeGraph8', "Dynamic maps");

addChapter('bk/presentation', 'ch_graphs', "Data Presentation Principles");
addSection('en/graphs', 'graphs1', "Types of publication");
addSection('en/graphs', 'graphs2', "From data to information");
addSection('en/graphs', 'graphs3', "Tables, graphs and text");
addSection('en/graphs', 'graphs4', "Combining simple graphs");
addSection('en/graphs', 'graphs5', "Advanced graphs");
addSection('en/graphs', 'graphs6', "Innovative graphics");

var language = "en";
var logoGif = null;
var homeDir = "bk/presentation";
var versionGif = "images/castPresentation";
var isLecturingVersion = false;
var isModule = true;
var hasSummaries = false;
var hasVideos = false;
var summaryPdfUrl = null;
var castWebServerUrl = "http://castBeta.massey.ac.nz";
var noOfChapters = "10";

var localVideos = true;

var fullTextString = 'Text';
var summaryTextString = 'In brief';
var videoTextString = 'Video';
var appletTextString = 'Text';
fullTabTooltip = 'Text version of page';
summaryTabTooltip = 'Summarised version of page';
videoTabTooltip = 'Version of page with videos';
appletTabTooltip = 'Text version of page with interaction';
var chapterString = 'Chapter';

var versionName = {};
var versions = {};

bookLoaded = true;
