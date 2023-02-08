@SetBlueFeature @Regression
Feature: Set SkyBlue background functionality validation


	@Scenario1
 Scenario Outline:  User Should see background change to Sky Blue when clicked
 Given "<color>" button exists 
 When I click on the "<button>" 
 Then the background color will change to "<bgColor>"
 

#@Scenario1
 #Scenario: User should see background change to White when clicked
  #Given "<color>" button exists
  #When I click on the "<button>" 
  #Then the background color will change to white
  
  Examples: 
 	 |color|button|bgColor|
 	 |skyblue|skyblue|skyblue|
 	 |white|white|white|