Feature: upload the images

    As a user, I would like to upload the images on the Alurapic website

Background: User is Logged In
	Given that access the Alurapic website
    And enter the login and password
    And click on login button
    When login is successful

Scenario: Upload the images with success
    Given click the add button to load the image
    And enter whit image file to upload
    Then enter with a description
    When the user want allow comments in your photos, must be check permission if not "Yes"
    Then click on upload button
    And image must be loaded with success