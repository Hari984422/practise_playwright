class CheckOut{
    constructor(page){
        this.checkoutBtn = page.locator('//button[@id="checkout"]')
        this.checkout_firstName = page.getByPlaceholder('First Name');
        this.checkout_lastName = page.getByPlaceholder('Last Name') ;
        this.checkout_zipCode = page.getByPlaceholder('Zip/Postal Code');
        this.continue_btn = page.locator('//input[@id="continue"]')
        this.finish_btn = page.locator('//button[@id="finish"]');
        this.back_to = page.locator('//button[@name="back-to-products"]')
    }
    async checkOutPro(){
        await this.checkoutBtn.click();
        await this.checkout_firstName.fill("abc")
        await this.checkout_lastName.fill("xyz")
        await this.checkout_zipCode.fill("567890")
        await this.continue_btn.click()
        await this.finish_btn.click()
        await this.back_to.click()
    }
}
export default CheckOut