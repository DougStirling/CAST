startExercise("exerciseBivarProg.FinishScatterApplet", 550, 600);

addVariation("leaves", "A botanist measured the length and width of #count[](20,40,60)# leaves from mature plants of a single species.\\nDraw a scatterplot of the data by dragging the crosses for the last two values.", "index(0:2)#xVarName(Length, mm)#xMean[index](20,80,150)#xSd[index](3,8,20)#xDecimals(1)#xAxis[index](10 30 10 2*60 100 60 5*100 200 100 10)#yVarName(Width, mm)#yMean[index](10,40,80)#ySd[index](1.5,4,10)#yDecimals(1)#yAxis[index](5 15 5 1*30 52 30 2*50 120 50 10)#corr[](-0.9,-0.8,-0.7,0.0,0.7,0.8,0.9)#dragCount(2)", null, 0);

//----------------------------------------------

startExercise("exerciseBivarProg.InterpretScatterApplet", 580, 750);

addVariation("leaves", "Samples of #count(100)# leaves were collected from four types of tree. Scatterplots of leaf width (vertical axis, mm) against leaf length (horizontal axis, mm) for the four tree types are shown below.\\nDrag each of the four statements onto the scatterplot that it best describes.", "xVarName(Length, mm)#xAxis(10_30_10_5 60_100_60_10 100_200_100_20)#yVarName(Width, mm)#yAxis(5_15_6_2 30_50_30_5 50_100_50_10)#uncorrel(leafUncorrel)#posCorrel(leafPosCorr)#negCorrel(leafNegCorr)#outlierBoth(leafOutlierBoth)#outlierXY(leafOutlierXY)#twoGroupPos(leafTwoClusterPos)#twoGroupNeg(leafTwoClusterNeg)", null, 800);
addVariation("tempRain", "The scatterplots below show the maximum daily temperature (horiz axis, Celsius) and total rainfall (vertical axis, mm) in each of #count(120)# months in four cities.\\nDrag each of the four statements onto the scatterplot whose climate it best describes.", "xVarName(Temperature, Celsius)#xAxis(20_30_20_2 15_25_16_2 5_25_5_5)#yVarName(Rainfall, mm)#yAxis(50_200_50_50 100_200_100_20 0_150_0_20)#uncorrel(climateUncorrel)#posCorrel(climatePosCorr)#negCorrel(climateNegCorr)#outlierBoth(climateOutlierBoth)#outlierXY(climateOutlierXY)#twoGroupPos(climateTwoClusterPos)#twoGroupNeg(climateTwoClusterNeg)", null, 800);
addVariation("generic", "Match the following four statements to the scatterplots that they describe.", "count(100)#xVarName(X)#xAxis(20_30_20_2 15_25_16_2 5_25_5_5 10_30_10_5 60_100_60_10 100_200_100_20)#yVarName(Y)#yAxis(50_200_50_50 100_200_100_20 0_150_0_20 5_15_6_2 30_50_30_5 50_100_50_10)#uncorrel(genericUncorrel)#posCorrel(genericPosCorr)#negCorrel(genericNegCorr)#outlierBoth(genericOutlierBoth)#outlierXY(genericOutlierXY)#twoGroupPos(genericTwoClusterPos)#twoGroupNeg(genericTwoClusterNeg)", null, 0);

//----------------------------------------------

startExercise("exerciseBivarProg.GuessCorrApplet", 500, 600);

addVariation("leaves", "A sample of #count[](20,50,100)# leaves was collected from a bush. A scatterplot of leaf length and width is shown below. What is the correlation coefficient?", "xVarName(Length, mm)#xAxis[](10 30 10 5*60 100 60 10*100 200 100 20)#yVarName(Width, mm)#yAxis[](5 15 6 2*30 50 30 5*50 100 50 10)#yMeanSD(0.8:1:2.5)#corr[](-0.99,-0.97,-0.95,-0.93,-0.9,-0.8,-0.6,-0.4,0,0.4,0.6,0.8,0.9,0.93,0.95,0.97,0.99)", null, 0);
addVariation("tomatoes", "Researchers measured the weight and sugar content of a sample of #count[](20,50,100)# tomatoes of one variety. A scatterplot of these two measurements is shown below. What is the correlation coefficient?", "xVarName(Weight, gm)#xAxis[](150 250 160 20*100 200 100 20)#yVarName(Sugar, %)#yAxis(2.5 3.5 2.6 0.2)#yMeanSD(0.8:1:2.5)#corr[](-0.99,-0.97,-0.95,-0.93,-0.9,-0.8,-0.6,-0.4,0,0.4,0.6,0.8,0.9,0.93,0.95,0.97,0.99)", null, 0);

//----------------------------------------------

startExercise("exerciseBivarProg.MatchOddCorrApplet", 580, 800);

addVariation("generic", "Four scatterplots are displayed below.\\nDrag the four correlation coefficients onto the scatterplots that they describe.", null, null, 0);

//----------------------------------------------

