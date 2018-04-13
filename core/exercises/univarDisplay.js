startExercise("exerciseNumGraphProg.BuildStemLeafApplet", 500, 570);

addVariation("fruitWeight", "A consumer group weighed #count[](12,20)# #?:string[index](oranges from a carton*apples in a supermarket)#.\\nDraw a stem and leaf plot of the weights.", "index(0:1)#mean[index](300,240)#sd(30)#axis[index](240 360 1 1*180 300 1 1)#decimals(1)#maxLeaves(8)#varName(Weight, gm)", null, 0);
addVariation("milkFat", "The list on the left shows measurements of milk fat content from #count[](10,20)# cows in a herd.\\nDraw a stem and leaf plot of the milk fat content.", "axis(2.2 3.6 -1 1)#mean(3.0)#sd(0.3)#decimals(3)#maxLeaves(8)#varName(Milk fat %)", null, 0);
addVariation("fruitWeight2", "A consumer group weighed #count[](12,20)# #?:string[](oranges*apples*pears)# that were sampled from a supermarket.\\nDraw a stacked dot plot of the weights.", "index(0:1)#mean[index](325,270)#sd(12)#axis[index](300 350 1 2*245 295 1 2)#decimals(1)#maxLeaves(8)#varName(Weight, gm)", null, 0);
addVariation("milkFat2", "The list on the left shows measurements of milk fat content from #count[](10,20)# cows in a herd.\\nDraw a stacked dot plot of the milk fat content.", "index(0:1)#axis[index](2.8 3.1 -1 5*2.84 3.14 -1 5)#mean[index](2.95,2.99)#sd(0.075)#decimals(3)#maxLeaves(8)#varName(Milk fat %)", null, 0);

//----------------------------------------------

startExercise("exerciseNumGraphProg.FinishDotPlotApplet", 550, 470);

addVariation("orangeWeight", "A consumer group weighed #count[](20,40,50)# oranges from a carton.\\nComplete the stacked dot plot of the weights.", "index(0:1)#mean[index](300,325)#sd[index](30,12)#axis[index](240 360 5 0 4 0*300 350 2 0 5 0)#decimals(1)#varName(Weight, gm)#dragCount(2)", null, 0);
addVariation("milkFat", "The list on the left shows measurements of milk fat content from #count[](20,40,50)# cows in a herd.\\nDraw a stacked dot plot of the milk fat content.", "axis(2.2 3.6 0.05 0 4 1)#mean(3.0)#sd(0.3)#decimals(3)#varName(Milk fat %)#dragCount(2)", null, 0);

//----------------------------------------------

startExercise("exerciseNumGraphProg.BuildBoxPlotApplet", 500, 570);

addVariation("fruitWeight", "A consumer group weighed #count[](20,40,60)# #?:string[index](oranges*apples)# from a carton.\\nDraw a box plot of the weights.", "index(0:1)#shape[](4,8,-4)#axis[index](240 360 240 20*180 300 180 20)#decimals(1)#varName(Weight, gm)", null, 0);
addVariation("milkFat", "The list on the left shows measurements of milk fat content from #count[](20,40,60)# cows in a herd.\\nDraw a box plot of the milk fat content.", "axis(2.2 3.6001 2.2 0.2)#shape[](4,8,-4)#decimals(3)#varName(Milk fat %)", null, 0);
addVariation("fruitWeight2", "A consumer group weighed #count[](20,40)# #?:string[index](oranges*apples)# from a carton.\\nDraw a box plot of the weights.", "index(0:1)#shape[](1,2,8,-2,-1)#axis[index](240 360 240 20*180 300 180 20)#decimals(1)#varName(Weight, gm)", null, 0);
addVariation("milkFat2", "The list on the left shows measurements of milk fat content from #count[](20,40)# cows in a herd.\\nDraw a box plot of the milk fat content.", "axis(2.2 3.6001 2.2 0.2)#shape[](1,2,8,-2,-1)#decimals(3)#varName(Milk fat %)", null, 0);

//----------------------------------------------

startExercise("exerciseNumGraphProg.BuildHistoApplet", 500, 550);

addVariation("appleWeights", "The weights of #count[index](20,40)# apples are shown on the left. Drag the tops of the histogram rectangles on the right to draw a histogram of the weights.", "index(0:1)#decimals(1)#axis(240 360 240 20)#shape(6.0)#classInfo[index](240 20*240 10)#varName(Weight, gm)", null, 0);
addVariation("milkFat", "The milk fat content from a herd of #count[index](20,40)# cows is shown in the list on the left. Drag the tops of the histogram rectangles on the right to draw a histogram of the weights.", "index(0:1)#decimals(3)#axis(2.2 3.6001 2.2 0.2)#shape(6.0)#classInfo[index](2.2 0.2*2.2 0.1)#varName(Milk fat %)", null, 0);
addVariation("appleWeights2", "The weights of #count[](40,50)# apples are shown on the left. Drag the tops of the histogram rectangles on the right to draw a histogram of the weights.", "index(0:1)#decimals(1)#axis(240 360 240 20)#shape[index](1,-1)#classInfo[index](240 10 2 1 1 2 2 2 4*240 10 2 4 2 2 2 1 1)#varName(Weight, gm)", null, 0);
addVariation("milkFat2", "The milk fat content from a herd of #count[](40,50)# cows is shown in the list on the left. Drag the tops of the histogram rectangles on the right to draw a histogram of the weights.", "index(0:1)#decimals(3)#axis(2.2 3.6001 2.2 0.2)#shape[index](1,-1)#classInfo[index](2.2 0.1 2 1 1 2 2 4 4*2.2 0.1 2 4 4 2 2 1 1)#varName(Milk fat %)", null, 0);

//----------------------------------------------

startExercise("exerciseNumGraphProg.MatchDistnApplet", 600, 700);

addVariation("fruitWeight", "The four graphical summaries on the left show the distributions of weights of #count[](30,50)# #?:string[](apples*pears)# that an exporter sampled from each of four farms. Which of the grahpical summaries on the right describes each farm's apples?\\nDrag the displays up or down to align the matching distributions.", "index[](0,1)#axis[index](240 360 240 20*180 300 180 20)#classLimits[index](240 20*180 20)#varName(Weight, gm)", null, 0);
addVariation("milkFat", "The four graphical summaries on the left describe measurements of milk fat content from four herds of #count[](50,100)# cows. Which of the graphical summaries on the right describes each herd?\\nDrag the displays up or down to align the matching distributions.", "axis(2.2 3.6001 2.2 0.2)#classLimits(2.2 0.2)#varName(Milk fat %)", null, 0);

//----------------------------------------------

startExercise("exerciseNumGraphProg.HistoAreaApplet", 550, 550);

addVariation("appleWeights", "The weights of #count[](50,100)# apples are summarised in the histogram below. What proportion of apples have weights #cut-offs(:)# grams?", "shape[](2,8,-2)#axis(240 360 240 20)#classInfo(240 10)#intervalType(0:3)#varName(Weight, gm)", null, 0);
addVariation("milkFat", "The milk fat content from a herd of #count[](50,100)# cows is summarised in the histogram below. What proportion of the cows have milk fat percentages #cut-offs(:)#?", "shape[](2,8,-2)#axis(2.2 3.6001 2.2 0.2)#classInfo(2.2 0.1)#intervalType(0:3)#varName(Milk fat %)", null, 0);
addVariation("birthWeight", "The birth weights of #count(40:80)# full-term babies born in a hospital in a 3-month period are summarised in the histogram below. What proportion of weights are #cut-offs(:)# kg?", "shape[](2,8,-2)#axis(2.0 4.5001 2.0 0.2)#classInfo(2.0 0.2)#intervalType(0:3)#varName(Birth weight, kg)", null, 0);

//----------------------------------------------

startExercise("exerciseNumGraphProg.InterpretShapeApplet", 550, 600);

addVariation("appleWeight", "The stacked dot plot below shows the weights of #count(80:140)# apples. What would you conclude from the shape of the distribution?", "index(0:7)#shapeValue[index](0,0,1,2,3,4,5,6)#axis(240 360 240 20)#varName(Weight, gm)#optionText(There_is_a_reasonably_large_spread_of_weights_for_the_apples,_but_nothing_else_stands_out_in_their_distribution. Most_apples_have_fairly_low_weights_but_there_are_a_few_that_are_heavier. It_looks_as_though_one_apple's_weight_may_have_been_recorded_wrongly. There_may_be_two_different_types_of_apple_in_the_batch,_or_they_could_have_come_from_two_different_trees_or_suppliers. Most_apples_have_fairly_high_weights_but_there_are_a_few_that_are_lighter.)", null, 0);
addVariation("milkFat", "The milk fat content from a herd of #count(80:140)# cows is shown in the stacked dot plot below. What would you conclude from the shape of the distribution?", "index(0:7)#shapeValue[index](0,0,1,2,3,4,5,6)#axis(2.2 3.6001 2.2 0.2)#varName(Milk fat %)#optionText(There_is_a_reasonably_large_spread_of_milk_fat_content,_but_nothing_else_stands_out_in_their_distribution. Most_cows_have_fairly_low_milk_fat_contents_but_there_are_a_few_whose_milk_fat_content_is_a_fair_bit_higher. It_looks_as_though_one_cow's_milk_fat_content_may_have_been_recorded_wrongly. The_cows_seem_to_split_into_two_groups_with_different_milk_fat_contents._The_cows_may_be_of_two_different_ages_or_breeds_or_come_from_two_different_herds. Most_cows_have_fairly_high_milk_fat_contents_but_there_are_a_few_whose_milk_fat_content_is_a_fair_bit_lower.)", null, 0);
addVariation("childHeight", "The heights of #count(80:140)# children were recorded and are shown in the stacked dot plot below. What would you conclude from the shape of the distribution?", "index(0:7)#shapeValue[index](0,0,1,2,3,4,5,6)#axis(120 160 120 5)#varName(Height, cm)#optionText(The_heights_of_the_children_are_fairly_variable,_but_nothing_else_stands_out_in_their_distribution. Most_children_in_the_group_are_fairly_short,_but_a_smaller_number_are_taller. One_child's_height_may_have_been_incorrectly_recorded. There_seem_to_be_two_distinct_groups_of_children_with_different_heights._The_groups_could_be_boys_and_girls_or_different_ages. The_majority_of_the_children_are_reasonably_tall,_but_there_are_a_few_who_are_much_shorter.)", null, 0);

//----------------------------------------------

startExercise("exercisePercentProg.DrawCumulativeApplet", 500, 620);

addVariation("fruitWeight", "The dot plot below shows the distributions of weights of #count[](10,20)# #?:string[](apples*pears)# that an exporter sampled from a farm. Drag the blue dots to draw the cumulative distribution function for the values.", "axis(235 365 240 20)#classLimits()#varName(Weight, gm)#distnType(0:3)", null, 0);
addVariation("milkFat", "The dot plot below shows measurements of milk fat content from four herds of #count[](10,20)# cows. Drag the blue dots to draw the cumulative distribution function for the values.", "axis(2.15 3.65 2.2 0.2)#classLimits()#varName(Milk fat %)#distnType(0:3)", null, 0);
addVariation("fruitWeight2", "The histogram below shows the distributions of weights of #count[](30,50)# #?:string[](apples*pears)# that an exporter sampled from a farm. Drag the blue dots to draw the cumulative distribution function for the values.", "axis(235 365 240 20)#classLimits(240 20)#varName(Weight, gm)#distnType(0:3)", null, 0);
addVariation("milkFat2", "The histogram below shows measurements of milk fat content from four herds of #count[](50,100)# cows. Drag the blue dots to draw the cumulative distribution function for the values.", "axis(2.15 3.65 2.2 0.2)#classLimits(2.2 0.2)#varName(Milk fat %)#distnType(0:3)", null, 0);

//----------------------------------------------

