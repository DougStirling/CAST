startExercise("exerciseTimeProg.TimeComponentsApplet", 600, 630);

addVariation("quarterly", "Use the pop-up menus to specify the TWO most prominent components of the following quarterly time series.", "index(0:2)#count[index](36,48,64)#year0[index](2001,1998,1994)#autoCorrel(0.9)#yAxis[](0 10 0 1*3 5 3 0.5*12 20 12 1*-5 5 -5 1)#seasonEffects(5 2 1 4)", null, 0);
addVariation("monthly", "Use the pop-up menus to specify the TWO most prominent components of the following monthly time series.", "index(0:2)#count[index](48,56,120)#year0[index](2006,2005,2000)#autoCorrel(0.9)#yAxis[](0 10 0 1*3 5 3 0.5*12 20 12 1*-5 5 -5 1)#seasonEffects(9 8 7 6.5 5 3 2 1 3 6 8 9)", null, 0);
addVariation("monthly", "Use the pop-up menus to specify the TWO most prominent components of the following annual time series.", "index(0:1)#count[index](50,100)#year0[index](1960,1910)#autoCorrel(0.9)#yAxis[](0 10 0 1*3 5 3 0.5*12 20 12 1*-5 5 -5 1)#seasonEffects(0)", null, 0);

//----------------------------------------------

startExercise("exerciseTimeProg.FindSmoothedApplet", 500, 650);

addVariation("profit", "The table below shows the annual profit of a company ($milliion) over several years. The last two columns show the exponentially smoothed data (with smoothing constant #esConst[](0.4,0.5,0.6,0.7,0.8)#) and moving averages of #maRunLength(2:4)#. Find the missing values near the bottom of these columns.", "varName(Profit)#values(12 14 13 14 15 17 16 16 19 20)#firstYear(2000)#maMissingIndex(5:7)#esMissingIndex(6:8)#extraDecimals(3)", null, 0);
addVariation("sales", "The table below shows annual sales in a retail store ($000). The last two columns show the exponentially smoothed data (with smoothing constant #esConst[](0.4,0.5,0.6,0.7,0.8)#) and moving averages of #maRunLength(4:8)#. Find the missing values near the bottom of these columns.", "varName(Sales)#values(245 358 262 340 451 653 577 662 684 794 620 822 851 902)#firstYear(1994)#maMissingIndex(7:9)#esMissingIndex(9:13)#extraDecimals(2)", null, 0);

//----------------------------------------------

startExercise("exerciseTimeProg.FindForecastApplet", 550, 750);
addCoreParam("customText", "param=param#se=se");

addVariation("profit", "The time series below gives the annual profit ($million) of a company from #firstYear[index2](1970,1970,1990,1990)# to #lastYear(2010)#.\\nLinear regression output is given (with year #baseYear[index2](1970,1990,1990,2000)# coded as zero) and exponentially smoothed values with (smoothing constant #esConst[](0.3,0.4,0.5)#) are also listed.\nForecast the profit in #forecastYear(2011)# (to #forecastDecimals(3)# decimal places) with exponential smoothing and regression.", "index(0:3)#index2(0:3)#varName(Profit)#yDecimals(2)#paramDecimals(3 4)#lowMean[index](30,50,40,40)#highMean[index](50,30,40,40)#errorSd[index](3,3,7,7)#yAxis(20 60 20 10)#autoCorrel[](0.2,0.8)#yearLabelInfo[index2](0 10 1970 10*0 10 1970 10*0 5 1990 5*0 5 1990 5)#maxEstSe(99.9999 99.9999)", null, 0);
addVariation("cpi", "The consumer price index (CPI) of a country from #firstYear[index2](1970,1970,1990,1990)# to #lastYear(2010)# is shown below.\\nLinear regression output is given (with year #baseYear[index2](1970,1990,1990,2000)# coded as zero) and exponentially smoothed values with (smoothing constant #esConst[](0.3,0.4,0.5)#) are also listed.\nForecast the CPI in #forecastYear(2011)# (to #forecastDecimals(2)# decimal places) with exponential smoothing and regression.", "index(0:1)#index2(0:3)#varName(CPI)#yDecimals(1)#paramDecimals(2 3)#lowMean[index](100,120)#highMean[index](200,160)#errorSd[index](10,10)#yAxis(80 220 80 20)#autoCorrel[](0.6,0.8)#yearLabelInfo[index2](0 10 1970 10*0 10 1970 10*0 5 1990 5*0 5 1990 5)#maxEstSe(99.9999 99.9999)", null, 0);

//----------------------------------------------

