import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import loginPage from '../pages/login_page';


Given(/^that access the Alurapic website$/, () => {
	loginPage.openAlurapic();
});

When(/^enter the login and password$/, () => {
	loginPage.enterInputLogin();
	loginPage.enterInputPassword();
});

When(/^click on login button$/, () => {
	loginPage.clickButtonLogin();
});

Then(/^login is successful$/, () => {
	loginPage.validateLoginSuccess();
});
