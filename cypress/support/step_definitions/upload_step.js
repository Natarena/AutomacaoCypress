import {Then} from "cypress-cucumber-preprocessor/steps";
import uploadPage from '../pages/upload_page';

Then(/^click the add button to load the image$/, () => {
	uploadPage.clickAddImage()
});

Then(/^enter whit image file to upload$/, () => {
	uploadPage.enterImageFile()
    uploadPage.validatePhotoLoad()
});


Then(/^enter with a description$/, () => {
	uploadPage.enterDescription()
});

When(/^the user want allow comments in your photos, must be check permission if not "([^"]*)"$/, (allow) => {
	uploadPage.checkPermissionComments(allow)
});


Then(/^click on upload button$/, () => {
	uploadPage.clickUploadButton()
});

Then(/^image must be loaded with success$/, () => {
	return true
});


