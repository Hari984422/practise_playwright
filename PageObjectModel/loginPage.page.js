class LoginPage{
    constructor(page){
        this.loginUname = page.getByPlaceholder(`Username`)
        this.loginPassword = page.getByPlaceholder(`Password`)
        this.loginBtn = page.locator('//input[@id="login-button"]');   
    }
    async setLogIn(uname,pwd){
            await this.loginUname.fill(uname)
            await this.loginPassword.fill(pwd)
            await this.loginBtn.click();
        }
}

export default LoginPage