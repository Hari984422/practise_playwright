class HomeProducts{
    constructor(page){
        this.product = page.locator('//div[@class="inventory_item_name "]')
        this.add_to_cart = page.locator('//button[@name="add-to-cart"]')
        this.goBack = page.locator('//button[@id="back-to-products"]')
        this.checkoutLink = page.locator('//a[@class="shopping_cart_link"]')
    }
    // enter the page
    async validateItem(){
        let products = await this.product.all()
       for (const item of products) {
         await item.click();
        await this.add_to_cart.click();
        await this.goBack.click();
       }
        await this.checkoutLink.click();
    }
}
export default HomeProducts
