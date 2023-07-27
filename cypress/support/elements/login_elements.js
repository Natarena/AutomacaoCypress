class LoginElements {
    inputName       = () => {return '[data-test="loginUserName"]'}
    inputPassword   = () => {return '[data-test="loginPassword"]'}
    buttonLogin     = () => {return '[data-test="loginBtn"]'}
    userNameLogin   = () => {return 'a.mr-1'}
}
export default new LoginElements();