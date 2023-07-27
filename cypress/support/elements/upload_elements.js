class UploadElements {
    buttonAdd           = () => {return ':nth-child(2) > a > .fa'}
    inputLoadFile       = () => {return 'input[type="file"]'}
    inputImageLoaded    = () => {return '.img-thumbnail'}
    inputDescription    = () => {return '.form-control'}
    checkAllowComments  = () => {return '.text-muted > .ng-untouched'}
    buttonUpload        = () => {return ':nth-child(3) > .btn-primary'}
    buttonCancel        = () => {return '.btn-secondary'}

}
export default new UploadElements();