startExercise("exerciseCategProg.ContinDiscCatApplet", 550, 650);

addVariation("climate", "Monthly climate data was collected from weather stations in each of the 93 districts in a country over a period of 20 years. The resulting data set therefore has 33,480 records, one for each district and month. Each of these records contains various climatic and other measurements.\\nUse the pop-up menus to classify each of the following four measurements.", "continVars(Total_rainfall*Total_rainfall_in_the_month,_in_mm*Any_rainfall_of_zero_or_higher_is_possible. Max_temperature*Maximum_temperature_in_the_month*Although_the_temperature_is_probably_recorded_to_the_nearest_whole_number,_the_underlying_temperature_is_continuous. Sunshine*Percentage_of_daytime_hours_in_the_month_with_sunshine*The_percentage_can_be_any_value_between_0_and_100,_so_it_is_continuous.)#discreteVars(Frost_days*Number_of_days_with_frost_in_the_month*This_is_a_count_and_is_therefore_a_discrete_variable. Rain_days*Number_of_rainy_days_in_month*This_is_a_count_and_is_therefore_a_discrete_variable. Lightning_strikes*Number_of_lightning_strikes_in_the_month*This_is_a_count_and_is_therefore_a_discrete_variable.)#nominalVars(District*The_name_of_the_district_from_which_the_measurements_were_made*This_is_categorical_but_there_would_be_no_obvious_way_to_order_the_districts.)#ordinalVars(Month*One_of_the_months_January,_February,_...,_December*The_months_are_categorical_but_there_is_an_ordering_-_e.g._June_comes_between_May_and_July. Season*Either_Spring,_Summer,_Autumn_or_Winter*There_is_an_ordering_of_the_seasons_so_this_is_an_ordinal_categorical_variable.)", null, 0);
addVariation("questionnaire", "A survey was conducted of households in a region and a variety of information was collected from a questionnaire completed by each household.\\nUse the pop-up menus to classify each of the following four measurements that were recorded.", "continVars(Fast_food*Total_spent_by_the_household_on_fast_food_in_the_previous_month*The_amount_spent_is_numerical_but_not_restricted_to_a_whole_number_of_dollars. Oldest_age*Exact_age_of_the_oldest_household_member_in_years_with_2_decimals*Although_age_is_commonly_reported_as_a_whole_number,_underlying_ages_are_continuous. Time_in_house*Duration_of_the_household's_stay_in_the_same_house*Although_the_time_may_be_recorded_in_months,_the_duration_could_be_measured_in_days_or_hours_so_it_is_continuous.)#discreteVars(People*Number_of_members_of_the_household*This_is_a_count_and_is_therefore_a_discrete_variable. Number_of_children*Number_of_children_in_the_household*This_is_a_count_and_is_therefore_a_discrete_variable. Wage_earners*Number_of_household_members_in_employment*This_is_a_count_and_is_therefore_a_discrete_variable.)#nominalVars(Gender_of_oldest*Whether_the_eldest_household_member_is_male_or_female*There_is_no_ordering_of_male_and_female. Transport_to_work*Main_mode_of_transport_used_by_main_salary_earner_to_get_to_work_-_Car,_Bus,_Train,_Walk,_Taxi,_...*The_modes_of_transport_are_categories_but_are_not_ordered. House_construction*Material_used_for_the_walls_of_the_house_-_brick,_stone,_wood,_...*The_materials_are_categories_but_are_not_ordered.)#ordinalVars(School_level*The_type_of_school_attended_by_the_youngest_household_member_-_pre-school,_primary,_secondary_or_left-school*These_categorise_are_ordered_by_level_so_the_variable_is_ordinal. Household_income*Households_report_their_income_as_being_in_the_ranges_'under_$20,000',_$20,000-$50,000,_$50,000-$100,000_or_'over_$100,000'*Although_the_underlying_income_is_numerical,_it_is_reported_in_ordered_categories.)", null, 0);
addVariation("studentInfo", "Universities maintain databases containing information about students.\\nThe following four variables relate to students at the end of a particular year. Use the pop-up menus to classify each variable.", "continVars(Grade_point_average*Grade_point_average_of_student,_a_value_between_0.0_and_5.0*Any_value_between_0_and_5_is_possible,_so_the_GPA_is_continuous. Computer_use*Number_of_hours_during_which_the_student_was_logged_into_the_university_computer_network*The_number_of_hours_could_be_recorded_to_one_or_more_decimal_places_so_the_variable_is_continuous.)#discreteVars(Exams*Number_of_final_exams_that_the_student_sat_during_the_year*This_is_a_count_and_is_therefore_a_discrete_variable. Previous_study*Number_of_previous_years_in_which_the_student_was_enrolled_in_tertiary_education*We_are_not_distinguishing_part-years,_so_this_is_a_count_and_is_therefore_a_discrete_variable.)#nominalVars(Gender*Whether_male_or_female*These_categories_are_not_ordered. Marital_status*Whether_single,_married,_divorced_or_widowed.*There_is_no_obvious_way_to_order_these_categories.)#ordinalVars(Highest_grade*The_best_grade_that_the_student_received_in_the_year_-_A,_B,_C_or_Fail*These_categories_are_ordered.)", null, 0);

//----------------------------------------------

startExercise("exerciseCategProg.FindPropnApplet", 500, 500);

addVariation("kestrels", "The Monks Wood Research Station collected information about deaths of kestrels in Britain, based on carcasses sent to them from to adverts in birdwatching magazines between 1963 and 1997. The frequency table below shows the cause of death of the birds received in the month of #?:string[index](January*February*March*April*May*June*July*August*September*October*November*December)# during this period.\\n", "index(0:11)#varName(cause of death)#itemName(kestrel)#categories(Window_collision Road_accident Trauma Being_shot Being_poisoned Disease Starvation An_unknown_cause)#counts[index](1 7 23 8 27 20 49 19*0 17 29 2 17 7 37 10*1 35 41 1 6 4 54 4*1 30 22 0 2 4 44 4*0 10 14 0 0 2 25 4*0 10 12 1 0 1 13 2*3 25 14 2 11 11 38 11*0 25 23 2 39 12 54 18*0 14 21 3 2 5 43 3*1 42 34 2 7 3 76 4*0 24 28 0 0 1 89 6*0 23 23 5 7 7 63 29)", "questionType(0)#criticalIndex(0:7)#What #percentPropn[](percentage*proportion)# of the birds died from #categories[criticalIndex]#?|||questionType(1)#criticalIndex(0:6)#What #percentPropn[](percentage*proportion)# of the birds did not die from #categories[criticalIndex]#?", 600);
addVariation("nurseWorkplaces", "The frequency table below shows the work settings of all #?:string[index](registered*enrolled)# nurses in Australia in 1999.\\n", "index(0:1)#varName(work setting)#itemName(nurse)#categories(Hospitals Aged_accommodation Community_health Other_settings)#counts[index](104108 16785 16277 12825*19847 10376 2315 3159)", "questionType(0)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of them worked in #categories[criticalIndex]#?|||questionType(1)#criticalIndex(0:2)#What #percentPropn[](percentage*proportion)# of them did not work in #categories[criticalIndex]#?", 0);
addVariation("hospitalStaff", "The frequency table below describes the types of staff employed in Australian hospitals in 2000.\\n", "varName(work group)#itemName(employee)#categories(Doctors_etc Nurses Admin_or_clerical_workers Domestic_or_other_workers)#counts(41269 104735 32540 41363)", "questionType(0)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of the staff were #categories[criticalIndex]#?|||questionType(1)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of the staff were not #categories[criticalIndex]#?", 0);
addVariation("yoghurt", "Market researchers collected data on purchases of five different flavours of Dannon yoghurt. The frequency table below describes the number of tubs of each flavour purchased in shopping trips where #?:string[index](only one flavour was purchased*there was a mixture of flavours purchased simultaneously)#.\\n", "index(0:1)#varName(flavour)#itemName(purchase)#categories(Strawberry Blueberry Pina_Colada Plain Mixed_Berry)#counts[index](208 129 99 108 140*128 78 84 9 58)", "questionType(0)#criticalIndex(0:4)#What #percentPropn[](percentage*proportion)# of the purchases were for #categories[criticalIndex]# yoghurt?|||questionType(1)#criticalIndex(0:4)#What #percentPropn[](percentage*proportion)# of the purchases were not for #categories[criticalIndex]# yoghurt?", 550);
addVariation("drugScreening", "Urine drug screenings were performed on 2537 applicants for career craft positions in the US Postal Service's Boston Management Sectional Center. The following frequency table describes how many of the#?:string[index]( male * female * )#applicants had negative test results or tested positive to various drugs. (There were no positive results for multiple drugs.)\\n", "index(0:2)#varName(drug result)#itemName(applicant)#categories(Negative Marijuana Cocaine Other_drugs)#counts[index](1465 146 33 28*764 52 22 27*2229 198 55 55)", "questionType(0)#criticalIndex(0)#What #percentPropn[](percentage*proportion)# of the applicants returned a Negative test result?|||questionType(0)#criticalIndex(1:3)#What #percentPropn[](percentage*proportion)# of the applicants returned a positive test result for #categories[criticalIndex]#?|||questionType(1)#criticalIndex(0)#What #percentPropn[](percentage*proportion)# of the applicants returned a Positive test result for any drug?|||questionType(1)#criticalIndex(1:2)#What #percentPropn[](percentage*proportion)# of the applicants did not test positive for #categories[criticalIndex]#?", 550);
addVariation("caterpillars", "The table below shows the number of caterpillars on each of 50 unsprayed cabbages.\\n", "varName(caterpillars)#itemName(cabbage)#categories(0 1 2 3 4 5 6_or_more)#counts[](21 13 8 5 2 1 0*18 11 10 6 2 2 1)", "questionType(0)#criticalIndex(0:6)#What #percentPropn[](percentage*proportion)# of the cabbages have #categories[criticalIndex]# caterpillars?|||questionType(1)#criticalIndex(0:5)#In what #percentPropn[](percentage*proportion)# of the cabbages was the number of caterpillars not equal to #categories[criticalIndex]#?|||questionType(2)#criticalIndex(1:5)#What #percentPropn[](percentage*proportion)# of the cabbages have fewer than #categories[criticalIndex]# caterpillars?|||questionType(3)#criticalIndex(0:5)#What #percentPropn[](percentage*proportion)# of the cabbages have less than or equal to #categories[criticalIndex]# caterpillars?|||questionType(4)#criticalIndex(0:5)#What #percentPropn[](percentage*proportion)# of the cabbages have more than #categories[criticalIndex]# caterpillars?|||questionType(5)#criticalIndex(1:5)#What #percentPropn[](percentage*proportion)# of the cabbages have at least #categories[criticalIndex]# caterpillars?", 0);
addVariation("childWeights", "Two thousand sixth-grade children were classified according to their weights. The frequency table below shows the data#?:string[index](.* for the children whose performance at school was poor.* for the children whose performance at school was satisfactory.* for the children whose performance at school was above average.)#\\n", "index(0:3)#varName(weight)#itemName(child)#categories(Underweight Normal Overweight Obese)#counts[index](250 1100 400 250*36 160 65 50*180 840 300 185*34 100 35 15)", "questionType(0)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of the children are #categories[criticalIndex]#?|||questionType(1)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of the children are not #categories[criticalIndex]#?|||questionType(2)#criticalIndex(1:3)#What #percentPropn[](percentage*proportion)# of the chldren are lighter than #categories[criticalIndex]#?|||questionType(3)#criticalIndex(0:2)#What #percentPropn[](percentage*proportion)# of the children are #categories[criticalIndex]# or lighter?|||questionType(4)#criticalIndex(0:2)#What #percentPropn[](percentage*proportion)# of the children are heavier than #categories[criticalIndex]#?|||questionType(5)#criticalIndex(1:2)#What #percentPropn[](percentage*proportion)# of the children are #categories[criticalIndex]# or heavier?", 0);
addVariation("cuckooEggs", "Cuckoos are birds that lay eggs in the nests of other birds. Researchers observed 193 nests of Great Reed Warblers in central Hungary in 1998 and 1999 and the frequency table below describes the number of cuckoo eggs in each nest.\\n", "varName(cuckoo eggs)#itemName(nest)#categories(0 1 2 3 4)#counts(70 79 28 12 4)", "questionType(0)#criticalIndex(0:4)#What #percentPropn[](percentage*proportion)# of nests had #categories[criticalIndex]# cuckoo eggs?|||questionType(1)#criticalIndex(0:4)#What #percentPropn[](percentage*proportion)# of nests did not have #categories[criticalIndex]# cuckoo eggs?|||questionType(2)#criticalIndex(1:4)#What #percentPropn[](percentage*proportion)# of nests had fewer than #categories[criticalIndex]# cuckoo eggs?|||questionType(3)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of nests had #categories[criticalIndex]# or fewer cuckoo eggs?|||questionType(4)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of nests had more than #categories[criticalIndex]# cuckoo eggs?|||questionType(5)#criticalIndex(1:3)#What #percentPropn[](percentage*proportion)# of nests had #categories[criticalIndex]# or more cuckoo eggs?", 0);

//----------------------------------------------

startExercise("exerciseCategProg.BuildBarChartApplet", 550, 600);

addVariation("caterpillarCount", "The table below shows the number of caterpillars on each of #nValues[index](50,80,100)# unsprayed cabbages.\\nDraw a bar chart of the data from the frequency table.", "index(0:2)#varName(Caterpillars)#categories(0 1 2 3 4 5 6+)#probs[](0.35 0.25 0.15 0.1 0.05 0.05 0.05*0.1 0.2 0.3 0.2 0.1 0.05 0.05)#countAxis[index](0 25 0 5*0 40 0 5*0 50 0 5)#countLabel[](Count*Frequency)", null, 0);
addVariation("votingIntentions", "An opinion poll asked #nValues[index](500,800,1200)# people about the political party for which they intended to vote at the next election. The frequency table below shows the results of the poll.\\nDraw a bar chart of the data.", "index(0:2)#varName(Party)#categories(Labour National NZ_First Greens Maori_Party ACT Undecided)#probs[](0.35 0.40 0.050 0.050 0.050 0.030 0.070*0.45 0.33 0.04 0.07 0.04 0.02 0.07)#countAxis[index](0 300 0 50*0 430 0 50*0 650 0 100)#countLabel[](Count*Frequency)", null, 0);
addVariation("supervisorAttitudes", "A sample of #nValues[index](50,100,150)# supervisors in a large manufacturing company were asked about their attitude towards self-managed work teams. The frequency table below describes the results from the survey.\\nDraw a bar chart of the data.", "index(0:2)#varName(Attitude)#categories(Strongly_in_favour In_favour Neutral Opposed Strongly_opposed)#probs[](0.1 0.2 0.3 0.3 0.1*0.3 0.3 0.2 0.1 0.1*0.1 0.2 0.2 0.3 0.2)#countAxis[index](0 25 0 5*0 40 0 5*0 70 0 10)#countLabel[](Count*Frequency)", null, 0);

//----------------------------------------------

startExercise("exerciseCategProg.FindPropnGraphApplet", 500, 700);

addVariation("caterpillarCount", "The bar chart below shows the number of caterpillars on each of 50 unsprayed cabbages.\\n", "index(0:1)#showCount(:)#varName(caterpillars)#itemName(cabbage)#categories(0 1 2 3 4 5 6_or_more)#counts[index](21 13 8 5 2 1 0*18 11 10 6 2 2 1)#countAxis[index](0 25 0 5*0 22 0 10)#cumAxis(0 52 0 5)", "questionType(0)#criticalIndex(0:6)#What #percentPropn[](percentage*proportion)# of the cabbages have #categories[criticalIndex]# caterpillars?|||questionType(1)#criticalIndex(0:5)#In what #percentPropn[](percentage*proportion)# of the cabbages was the number of caterpillars not equal to #categories[criticalIndex]#?|||questionType(2)#criticalIndex(1:5)#What #percentPropn[](percentage*proportion)# of the cabbages have fewer than #categories[criticalIndex]# caterpillars?|||questionType(3)#criticalIndex(0:5)#What #percentPropn[](percentage*proportion)# of the cabbages have less than or equal to #categories[criticalIndex]# caterpillars?|||questionType(4)#criticalIndex(0:5)#What #percentPropn[](percentage*proportion)# of the cabbages have more than #categories[criticalIndex]# caterpillars?|||questionType(5)#criticalIndex(1:5)#What #percentPropn[](percentage*proportion)# of the cabbages have at least #categories[criticalIndex]# caterpillars?", 0);
addVariation("childWeight", "A group of sixth-grade children were classified according to their weights. The bar chart below shows the distribution of weights#?:string[index](.* for the children whose performance at school was poor.* for the children whose performance at school was satisfactory.* for the children whose performance at school was above average.)#\\n", "index(0:3)#varName(weight)#itemName(child)#categories(Underweight Normal Overweight Obese)#counts[index](250 1100 400 250*36 160 65 50*180 840 300 185*34 100 35 15)#countAxis[index](0 1200 0 200*0 180 0 20*0 900 0 100*0 110 0 10)#cumAxis[index](0 2100 0 200*0 330 0 50*0 1550 0 200*0 195 0 20)#showCount(:)", "questionType(0)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of the children are #categories[criticalIndex]#?|||questionType(1)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of the children are not #categories[criticalIndex]#?|||questionType(2)#criticalIndex(1:3)#What #percentPropn[](percentage*proportion)# of the chldren are lighter than #categories[criticalIndex]#?|||questionType(3)#criticalIndex(0:2)#What #percentPropn[](percentage*proportion)# of the children are #categories[criticalIndex]# or lighter?|||questionType(4)#criticalIndex(0:2)#What #percentPropn[](percentage*proportion)# of the children are heavier than #categories[criticalIndex]#?|||questionType(5)#criticalIndex(1:2)#What #percentPropn[](percentage*proportion)# of the children are #categories[criticalIndex]# or heavier?", 0);
addVariation("cuckooEggs", "Cuckoos are birds that lay eggs in the nests of other birds. Researchers observed 193 nests of Great Reed Warblers in central Hungary in 1998 and 1999 and the bar chart below describes the number of cuckoo eggs in each nest.\\n", "showCount(:)#varName(cuckoo eggs)#itemName(nest)#categories(0 1 2 3 4)#counts(70 79 28 12 4)#countAxis(0 85 0 10)#cumAxis(0 200 0 20)", "questionType(0)#criticalIndex(0:4)#What #percentPropn[](percentage*proportion)# of nests had #categories[criticalIndex]# cuckoo eggs?|||questionType(1)#criticalIndex(0:4)#What #percentPropn[](percentage*proportion)# of nests did not have #categories[criticalIndex]# cuckoo eggs?|||questionType(2)#criticalIndex(1:4)#What #percentPropn[](percentage*proportion)# of nests had fewer than #categories[criticalIndex]# cuckoo eggs?|||questionType(3)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of nests had #categories[criticalIndex]# or fewer cuckoo eggs?|||questionType(4)#criticalIndex(0:3)#What #percentPropn[](percentage*proportion)# of nests had more than #categories[criticalIndex]# cuckoo eggs?|||questionType(5)#criticalIndex(1:3)#What #percentPropn[](percentage*proportion)# of nests had #categories[criticalIndex]# or more cuckoo eggs?", 0);

//----------------------------------------------

startExercise("exerciseCategProg.ParetoReorderApplet", 500, 700);

addVariation("creditCard", "The bar chart below shows the reasons for delays to the processing of #sampleSize(100)# applications for credit cards.\\nDrag the bars to form a Pareto diagram then use it to", "varName(Reason for delay)#itemName(payments)#categories(No_signature No_address Cannot_read Current_customer Other)#probs(0.6 0.15 0.15 0.05 0.05)#propnAxis(0 0.7 0 0.1)", "questionType(3)#criticalIndex(1:3)#rangeText(the_most_important_single_cause the_most_important_two_causes the_most_important_three_causes the_most_important_four_causes)# find the #percentPropn[](percentage*proportion)# of applications failing by #rangeText[criticalIndex]#.|||questionType(4)#criticalIndex(0:2)#rangeText(the_rarest_four_causes the_rarest_three_causes the_rarest_two_causes)# find the #percentPropn[](percentage*proportion)# of applications failing by #rangeText[criticalIndex]#.", 0);
addVariation("plasticToys", "The bar chart below describes the reasons for rejecting #sampleSize(200)# plastic toys produced by a factory.\\nDrag the bars to form a Pareto diagram then use it to", "varName(Reason for failure)#itemName(toys)#categories(Wrong_size Bad_parts Insufficient_glue Misaligned_weld Bad_paint)#probs(0.45 0.3 0.15 0.05 0.05)#propnAxis(0 0.5 0 0.1)", "questionType(3)#criticalIndex(1:3)#rangeText(the_most_important_single_cause the_most_important_two_causes the_most_important_three_causes the_most_important_four_causes)# find the #percentPropn[](percentage*proportion)# of toys failing by #rangeText[criticalIndex]#.|||questionType(4)#criticalIndex(0:2)#rangeText(the_rarest_four_causes the_rarest_three_causes the_rarest_two_causes)# find the #percentPropn[](percentage*proportion)# of toys failing by #rangeText[criticalIndex]#.", 0);
addVariation("medicineErrors", "There were #sampleSize(156)# reported cases of mistakes giving medicine to patients in a hospital. The bar chart below shows the types of mistake.\\nDrag the bars to form a Pareto diagram then use it to", "varName(Type of mistake)#itemName(incidents)#categories(Wrong_dose Wrong_time Wrong_medicine Wrong_patient Medicine_dc'd Missed_dose)#probs(0.5 0.3 0.05 0.05 0.05 0.05)#propnAxis(0 0.6 0 0.1)", "questionType(3)#criticalIndex(1:4)#rangeText(the_most_important_single_type_of_mistake the_most_important_two_types_of_mistake the_most_important_three_types_of_mistake the_most_important_four_types_of_mistake the_most_important_five_types_of_mistake)# find the #percentPropn[](percentage*proportion)# of incidents that were caused by #rangeText[criticalIndex]#.|||questionType(4)#criticalIndex(0:3)#rangeText(the_least_common_five_types_of_mistake the_least_common_four_types_of_mistake the_least_common_three_types_of_mistake the_least_common_two_types_of_mistake)# find the #percentPropn[](percentage*proportion)# of incidents that were caused by #rangeText[criticalIndex]#.", 0);
addVariation("staffLateness", "An office recorded the reasons that staff gave for being late to work for a year. The bar chart below shows the #sampleSize(50:150)# incidents.\\nDrag the bars to form a Pareto diagram then use it to", "varName(Reason for being late)#itemName(late arrivals)#categories(Traffic Child_care Bus/train Weather Overslept Emergency)#probs(0.35 0.3 0.1 0.1 0.1 0.05)#propnAxis(0 0.45 0 0.05)", "questionType(3)#criticalIndex(1:4)#rangeText(the_most_common_single_reason_is the_most_common_two_types_of_reason_are the_most_common_three_types_of_reason_are the_most_common_four_types_of_reason_are the_most_common_five_types_of_reason_are)# find the #percentPropn[](percentage*proportion)# of late arrivals for which #rangeText[criticalIndex]# given.|||questionType(4)#criticalIndex(0:3)#rangeText(the_most_rarely_used_five_types_of_reason the_most_rarely_used_four_types_of_reason the_most_rarely_used_three_types_of_reason the_most_rarely_used_two_types_of_reason)# find the #percentPropn[](percentage*proportion)# of late arrivals for which #rangeText[criticalIndex]# are given.", 0);
addVariation("defectives", "A factory produces 10,000 items each day but some are rejected as defective before shipment. The bar chart below shows the types of defect in #sampleSize(450)# rejected items.\\nDrag the bars to form a Pareto diagram then use it to", "varName(Reason for rejection)#itemName(items)#categories(Caulking Connecting Gapping Fitting Torque)#probs(0.5 0.25 0.15 0.05 0.05)#propnAxis(0 0.6 0 0.1)", "questionType(3)#criticalIndex(1:3)#rangeText(the_most_common_single_type_of_defect the_most_common_two_types_of_defect the_most_common_three_types_of_defect the_most_common_four_types_of_defect)# find the #percentPropn[](percentage*proportion)# of items rejected because of #rangeText[criticalIndex]#.|||questionType(4)#criticalIndex(0:2)#rangeText(the_rarest_four_types_of_defect the_rarest_three_types_of_defect the_rarest_two_types_of_defect)# find the #percentPropn[](percentage*proportion)# of items rejected because #rangeText[criticalIndex]#.", 0);

//----------------------------------------------

startExercise("exerciseCategProg.BuildPieChartApplet", 600, 650);

addVariation("caterpillars", "The table below shows the number of caterpillars on each of #nValues[](50,80,100)# unsprayed cabbages.\\nDraw a pie chart of the data from the frequency table.", "oneOrCum(0:1)#varName(Caterpillars)#categories(0 1 2 3 4 5 6+)#probs[](0.35 0.25 0.15 0.1 0.05 0.05 0.05*0.1 0.2 0.3 0.2 0.1 0.05 0.05)", null, 0);
addVariation("votingIntentions", "An opinion poll asked #nValues[](500,800)# people about the political party for which they intended to vote at the next election. The frequency table below shows the results of the poll.\\nDraw a pie chart of the data.", "oneOrCum(0:1)#varName(Party)#categories(Labour National NZ_First Greens Maori_Party ACT Undecided)#probs[](0.35 0.40 0.050 0.050 0.050 0.030 0.070*0.45 0.33 0.04 0.07 0.04 0.02 0.07)", null, 0);
addVariation("supervisorAttitudes", "A sample of #nValues[](50,100,150)# supervisors in a large manufacturing company were asked about their attitude towards self-managed work teams. The frequency table below describes the results from the survey.\\nDraw a pie chart of the data.", "oneOrCum(0:1)#varName(Attitude)#categories(Strongly_in_favour In_favour Neutral Opposed Strongly_opposed)#probs[](0.1 0.2 0.3 0.3 0.1*0.3 0.3 0.2 0.1 0.1*0.1 0.2 0.2 0.3 0.2)", null, 0);

//----------------------------------------------

startExercise("exerciseCategProg.MatchBarPieApplet", 450, 700);

addVariation("2categories", "The bar charts of four data sets are shown on the left below. The four pie charts on the right describe the same data sets but are in a different order. Reorder them by dragging so that each pie chart describes the same data set as the bar chart on its left.", "categories[](Correct Wrong*Group_A Group_B*Male Female)#counts(10_10 9_11 8_12 5_15 11_9 12_8 15_5)", null, 0);
addVariation("3categories", "The bar charts of four data sets are shown on the left below. The four pie charts on the right describe the same data sets but are in a different order. Reorder them by dragging so that each pie chart describes the same data set as the bar chart on its left.", "categories[](A B C*Group_1 Group_2 Group_3*Good Bad Ugly)#counts(10_10_5 5_10_10 10_5_10 5_5_10 5_10_5 10_5_5 15_10_5 15_5_10 10_15_5 10_5_15 5_10_15 5_15_10)", null, 0);
addVariation("4categories", "The bar charts of four data sets are shown on the left below. The four pie charts on the right describe the same data sets but are in a different order. Reorder them by dragging so that each pie chart describes the same data set as the bar chart on its left.", "categories[](A B C D*Agree Neutral Disagree Dont_know)#counts(12_8_3_5 10_4_10_6 8_12_5_3 8_10_8_4 12_5_3_8 8_6_12_6)", null, 0);

//----------------------------------------------

startExercise("exerciseCategProg.FindPiePercentApplet", 450, 700);

addVariation("busAttitudes", "The pie chart below describes the results from a questionnaire in which ratepayers were asked about the quality of their local bus service.\\n", "varName(Support)#categories(Very_good Good Adequate Poor Very_poor)#defaultProbs(.1 .25 .3 .25 .1)#ordinalPareto(0)", "#answer[](0,1,2,3)#cutoffType(0)#What percentage of respondents thought that the bus service was #cutoff(1)# or better?|||#answer[](0,1,2,3)#cutoffType(0)#What percentage of respondents thought that the bus service was at least as good as #cutoff(1)#?|||#answer[](1,2,3,4)#cutoffType(0)#What percentage of respondents thought that the bus service was #cutoff(2)# or better?|||#answer[](1,2,3,4)#cutoffType(0)#What percentage of respondents thought that the bus service was at least as good as #cutoff(2)#?|||#answer[](0,1,2,3)#cutoffType(1)#What percentage of respondents thought that the bus service was #cutoff(3)# or worse?|||#answer[](1,2,3,4)#cutoffType(1)#What percentage of respondents thought that the bus service was #cutoff(2)# or worse?", 0);
addVariation("incomes", "The pie chart below describes household incomes of respondents to a telephone survey.\\n", "varName(Income)#categories(Under_$20,000 $20,000_to_$40,000 $40,000_to_$70,000 $70,000_to_$100,000 $100,000_to_$150,000 Over_$150,000)#defaultProbs[](.1 .15 .3 .2 .15 .1*.2 .15 .3 .2 .1 .05*.1 .1 .2 .3 .15 .15)#ordinalPareto(0)", "#answer[](3,4)#cutoffType(1)#What percentage of respondents had incomes in the range '#cutoff(1)#' or higher?|||#answer[](2,3)#cutoffType(1)#What percentage of respondents had incomes in the range '#cutoff(2:3)#' or higher?|||#answer[](0,1)#cutoffType(1)#What percentage of respondents had incomes in the range '#cutoff(4)#' or higher?|||#answer[](0,1)#cutoffType(0)#What percentage of respondents had incomes in the range '#cutoff(1)#' or lower?|||#answer[](2,3)#cutoffType(0)#What percentage of respondents had incomes in the range '#cutoff(2:3)#' or lower?|||#answer[](3,4)#cutoffType(0)#What percentage of respondents had incomes in the range '#cutoff(4)#' or lower?", 0);
addVariation("staffLateness", "An office recorded the reasons that staff gave for being late to work for a year. The pie chart below describes these reasons, ordered by their frequency of occurrence.\\n", "varName(Reason for lateness)#categories(Traffic Child_care Bus/train Weather Overslept Emergency)#defaultProbs[](0.35 0.3 0.1 0.1 0.1 0.05*0.25 0.25 0.2 0.15 0.1 0.05)#ordinalPareto(1)", "answer(0:4)#cutoffType(0)#What percentage of late arrivals resulted from the most common #cutoff(1:3)# causes?|||answer(0:4)#cutoffType(1)#What percentage of late arrivals resulted from the least common #cutoff(2:4)# causes?", 0);
addVariation("medicineErrors", "There are occasionally mistakes when medicines are given to patients. The pie chart below describes the types of mistake that occurred in a hospital one year, ordered by their frequency of occurrence.\\n", "varName(Type of mistake)#categories(Wrong_dose Wrong_time Wrong_medicine Wrong_patient Old_medicine Missed_dose)#defaultProbs[](0.35 0.3 0.1 0.1 0.1 0.05*0.25 0.25 0.2 0.15 0.1 0.05)#ordinalPareto(1)", "answer(0:4)#cutoffType(0)#What percentage of mistakes was due to the most common #cutoff(1:3)# causes?|||answer(0:4)#cutoffType(1)#What percentage of mistakes was due to the least common #cutoff(2:4)# causes?", 0);
addVariation("defectives", "Quality control of parts produced by a factory results in some parts being rejected as defective. The pie chart below describes the types of defect, ordered by their frequency of occurrence.\\n", "varName(Type of defect)#categories(Size_outside_specs Bad_parts Insufficient_glue Misaligned_weld Paint_out_of_limits)#defaultProbs[](0.4 0.3 0.15 0.1 0.05*0.35 0.25 0.25 0.1 0.05)#ordinalPareto(1)", "answer(0:4)#cutoffType(0)#What percentage of defects was due to the most common #cutoff(1:2)# causes?|||answer(0:4)#cutoffType(1)#What percentage of defects was due to the least common #cutoff(2:3)# causes?", 0);

//----------------------------------------------
