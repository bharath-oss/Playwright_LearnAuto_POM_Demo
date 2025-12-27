export class Cartpage{
    constructor(page,expect){
        this.page=page;
        this.expect=expect;
        this.addToCart="(//button[text()='Add to Cart'])[1]";
        this.count=".count"
        this.cart="Cart"
    }

    async addCourseToCart(){
        await this.page.click(this.addToCart);
        let cartCount=await this.page.textContent(this.count);
        await this.expect(cartCount).toEqual("1");
        await this.page.getByText(this.cart).first().click();
    }
}