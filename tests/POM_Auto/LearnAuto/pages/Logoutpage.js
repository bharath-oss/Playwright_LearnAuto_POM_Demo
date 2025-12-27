export class LogoutPage{
    constructor(page){
        this.page=page;
        this.menu="//img[@alt='menu']"
        this.signout="Sign out"
    }

    async Logout()
    {
        await this.page.click(this.menu);
        await this.page.getByText(this.signout).click();        
    }
}