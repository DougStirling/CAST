startExercise("exerciseBivarProg.LsProblemsApplet", 550, 720);

addVariation("pigWeight", "The scatterplot below shows the weight gains in one week of #count[](40,80)# pigs of different ages that were fed a similar diet. A least squares line was fitted to the data and will be used to predict the weight gain of a pig aged #predictionType(2:8,18:25)#. What, if any, are the problems with making this prediction?", "curvature(0:1)#forceExtendedAxes(0:1)#xVarName(Age)#xAxis(0 10 0 2)#xPlusAxis(0 25 0 5)#yVarName(Weight gain)#yAxis(0 2 0 0.5)#yPlusAxis(0 4.3 0 1)#yOutlierAxis(0 3.2 0 0.5)#linearParams[](0.3 0.15 0.1*0.3 0.15 0.2)#quadParams[](0.3 0.3 -0.015 0.06*0.3 0.3 -0.015 0.1*0.3 0 0.015 0.06)#nonlinStatement(Weekly weight gain seems to increase nonlinearly with age.)#extrapolationStatement(There is no information about the shape of the relationship between weight gain and age when age is this high.)#outlierStatement(One pig's weight gain may have been incorrectly recorded.)#leverageStatement(There is one pig that is older than the rest and whose weight gain strongly affects the least squares line.)", null, 770);
addVariation("generic", "A least squares line was fitted to the #count[](40,80)# crosses in the scatterplot below. What, if any, are the problems with using the least squares line to predict Y when X = #predictionType(2:8,18:25)#?", "curvature(0:1)#forceExtendedAxes(0:1)#xVarName(X)#xAxis(0 10 0 2)#xPlusAxis(0 25 0 5)#yVarName(Y)#yAxis(0 2 0 0.5)#yPlusAxis(0 4.3 0 1)#yOutlierAxis(0 3 0 0.5)#linearParams[](0.3 0.15 0.1*0.3 0.15 0.2)#quadParams[](0.3 0.3 -0.015 0.06*0.3 0.3 -0.015 0.1*0.3 0 0.015 0.06)#nonlinStatement(The relationship seems nonlinear.)#extrapolationStatement(This is extrapolation.)#outlierStatement(There is an outlier.)#leverageStatement(There is a high leverage point.)", null, 0);

//----------------------------------------------

startExercise("exerciseBivarProg.LsProblemsExternalApplet", 550, 720);

addVariation("pigWeight", "Weight gains in one week were recorded from #count[](40,80)# immature pigs of different ages that were fed a similar diet.\\nIf a least squares line is fitted to the data and used to predict the weight gain of a pig aged #predictionType(2:8,18:25)#, what, if any, are the problems with making this prediction?", "curvature(0:1)#forceExtendedAxes(0:1)#dataName(pigWeightGains)#xVarName(Age)#xAxis(0 10 0 2)#xPlusAxis(0 25 0 5)#yVarName(Weight gain)#yAxis(0 2 0 0.5)#yPlusAxis(0 4.3 0 1)#yOutlierAxis(0 3 0 0.5)#linearParams[](0.3 0.15 0.1*0.3 0.15 0.2)#quadParams[](0.3 0.3 -0.015 0.06*0.3 0.3 -0.015 0.1*0.3 0 0.015 0.06)#nonlinStatement(Weekly weight gain seems to increase nonlinearly with age.)#extrapolationStatement(There is no information about the shape of the relationship between weight gain and age when age is this high.)#outlierStatement(One pig's weight gain may have been incorrectly recorded.)#leverageStatement(There is one pig that is older than the rest and whose weight gain strongly affects the least squares line.)#xDecimals(1)#yDecimals(2)", null, 770);
addVariation("generic", "Export the data and examine a scatterplot of its #count[](40,80)# crosses. What, if any, are the problems with using the least squares line to predict Y when X = #predictionType(2:8,18:25)#?", "curvature(0:1)#forceExtendedAxes(0:1)#xVarName(X)#xAxis(0 10 0 2)#xPlusAxis(0 25 0 5)#yVarName(Y)#yAxis(0 2 0 0.5)#yPlusAxis(0 4.3 0 1)#yOutlierAxis(0 3 0 0.5)#linearParams[](0.3 0.15 0.1*0.3 0.15 0.2)#quadParams[](0.3 0.3 -0.015 0.06*0.3 0.3 -0.015 0.1*0.3 0 0.015 0.06)#nonlinStatement(The relationship seems nonlinear.)#extrapolationStatement(This is extrapolation.)#outlierStatement(There is an outlier.)#leverageStatement(There is a high leverage point.)#dataName(data)#xDecimals(1)#yDecimals(2)", null, 0);

//----------------------------------------------

startExercise("exerciseBivarProg.LineariseTransformApplet", 450, 650);

addVariation("generic", "Which transformation of the data in the scatterplot below would be most suitable for fitting a linear model by least squares?", "count(50:200)#corr[](0.9,0.95,0.99,-0.9,-0.95,-0.99)#transformType(0:2)#quadConcaveUp(:)#ordersOfMagnitude(2)", null, 0);

//----------------------------------------------

startExercise("exerciseBivarProg.LineariseTransformExternalApplet", 450, 650);

addVariation("generic", "Export the data and draw a scatterplot. Which transformation of the variables would be most suitable for fitting a linear model by least squares?", "count(50:200)#corr[](0.9,0.95,0.99,-0.9,-0.95,-0.99)#transformType(0:2)#quadConcaveUp(:)#ordersOfMagnitude(2)", null, 0);

//----------------------------------------------

startExercise("exerciseBivarProg.TransformPredictApplet", 450, 650);

addVariation("reactionYield", "The scatterplot on the left below shows the relationship between the yield of a chemical reaction and the concentration of a catalyst in a series of experiments. The scatterplot on the right uses natural logarithms (base e) to linearise the relationship.\\nPredict the yield when the concentration of catalyst is #xValue(0.1:9.9)#.", "xVarName(Conc)#xAxis(0 10 0 2)#lnxAxis(-2.5 2.5 -2 1)#yVarName(Yield)#yAxis(0 100 0 20)#lnyAxis(0 4.6 0 1)#count[](20,30,50,80,100)#corr[](0.95,0.8,-0.8,-0.95)#transformType(1:3)#maxIntercept(99.999)#maxSlope(-99.999)#maxExp(100.000)#accuracy(0.01)", null, 0);
addVariation("componentFailure", "The time to failure of a component (in days) is related to the temperature at which it is operated (in degrees Celsius). The scatterplot on the left below describes the lifetimes of #count[](20,30,50,80,100)# components and the scatterplot on the right uses natural logarithms (base e) to linearise the relationship.\\nPredict the lifetime of a component that is used at #xValue(1:19)##degrees#C.", "xVarName(Temperature)#xAxis(0 20 0 5)#lnxAxis(-1.6 3.1 -1 1)#yVarName(Lifetime)#yAxis(0 300 0 50)#lnyAxis(1 5.8 1 1)#corr[](0.95,0.8,-0.8,-0.95)#transformType(1:3)#maxIntercept(999.999)#maxSlope(-99.999)#maxExp(100.000)#accuracy(0.01)", null, 0);

//----------------------------------------------

startExercise("exerciseBivarProg.TransformPredictExternalApplet", 450, 650);

addVariation("reactionYield", "The scatterplot on the left below shows the relationship between the yield of a chemical reaction and the concentration of a catalyst in a series of experiments. The scatterplot on the right uses natural logarithms (base e) to linearise the relationship.\\nExport the data, fit a linear model to the transformed data, then use this to predict the yield (to #requiredDecimals(3)# decimals) when the concentration of catalyst is #xValue(0.1:9.9)#.", "xVarName(Conc)#xAxis(0 10 0 2)#lnxAxis(-2.5 2.5 -2 1)#yVarName(Yield)#yAxis(0 100 0 20)#lnyAxis(0 4.6 0 1)#count[](20,30,50,80,100)#corr[](0.95,0.8,-0.8,-0.95)#transformType(1:3)#maxIntercept(99.999)#maxSlope(-99.999)#maxExp(100.000)#dataName(YieldConc)#xDecimals(4)#yDecimals(3)", null, 0);
addVariation("componentFailure", "The time to failure of a component (in days) is related to the temperature at which it is operated (in degrees Celsius). The scatterplot on the left below describes the lifetimes of #count[](20,30,50,80,100)# components and the scatterplot on the right uses natural logarithms (base e) to linearise the relationship.\\nExport the data, fit a linear model to the transformed data, then use this to predict the time to failure (to #requiredDecimals(2)# decimals) of a component that is used at #xValue(1:19)##degrees#C.", "xVarName(Temperature)#xAxis(0 20 0 5)#lnxAxis(-1.6 3.1 -1 1)#yVarName(Lifetime)#yAxis(0 300 0 50)#lnyAxis(1 5.8 1 1)#corr[](0.95,0.8,-0.8,-0.95)#transformType(1:3)#maxIntercept(999.999)#maxSlope(-99.999)#maxExp(100.000)#accuracy(0.01)#dataName(FailureTime)#xDecimals(4)#yDecimals(3)", null, 0);

//----------------------------------------------

startExercise("exerciseBivarProg.MatchXYTransformApplet", 580, 700);

addVariation("generic", "The top scatterplot describes the relationship between two variables, X and Y. Which scatterplots would result from the three transformations underneath?\nDrag the lower three transformation names up or down to align with the corresponding scatterplots.", "index(0:4)#count(50)#baseXPower[index](2,2,1,1,0.5)#baseYPower[index](2,1,2,1,.5)#ordersOfMagnitude(2)#corr(0.9)", null, 0);

//----------------------------------------------

