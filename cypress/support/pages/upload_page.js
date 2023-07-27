import uploadElements from '../elements/upload_elements'
import 'cypress-file-upload'
import { faker } from '@faker-js/faker'

class UploadPage {
    clickAddImage(){
        cy.get(uploadElements.buttonAdd()).click();
    }

    enterImageFile(){
        cy.get(uploadElements.inputLoadFile())
        .attachFile('files/cachorrinho-empresario.jpg');
    }

    validatePhotoLoad(){
        cy.get(uploadElements.inputImageLoaded()).should('exist')
    }

    enterDescription(){
        cy.get(uploadElements.inputDescription()).type(faker.lorem.word(48))
    }

    checkPermissionComments(allow){
        if(allow.toLowerCase() == 'yes'){
            cy.get(uploadElements.checkAllowComments()).should('be.checked')
        }else if(allow.toLowerCase() == 'not'){
            cy.get(uploadElements.checkAllowComments()).click()
            cy.get(uploadElements.checkAllowComments()).should('not.be.checked')
        }
    }

    clickUploadButton(){
        cy.get(uploadElements.buttonUpload()).click({force: true})
    }

}
export default new UploadPage();