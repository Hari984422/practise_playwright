class QspiderSignUp{
    constructor(page){
         this.uname = page.locator('//input[@id="name"]')
        this.email = page.locator('//input[@id="email"]')
        this.pwd = page.locator('//input[@id="password"]')
    }
    async Register(emailStr,pwdStr) {
        await this.email.fill(emailStr)
        await this.uname.fill("shfgdh")
        await this.pwd.fill(pwdStr)
        
    }
}
export default QspiderSignUp