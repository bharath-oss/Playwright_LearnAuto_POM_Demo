export class Loginpage{
    constructor(page){
        this.page=page;
        this.username="Enter Email";
        this.password="Enter Password";
        this.loginButton="Sign in";
    }
    async loginToApplication(username,password){
        await this.page.getByPlaceholder(this.username).fill(username);
        await this.page.getByPlaceholder(this.password).fill(password);
        await this.page.getByText(this.loginButton).last().click();
    }

}