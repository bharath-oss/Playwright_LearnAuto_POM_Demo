export class Helper{
    constructor(page)
    {
        this.page=page;
    }

    async screenshot(pagename)
    {
         await this.page.screenshot({path:`C:\\Users\\Manoj M\\OneDrive\\Documents\\Bharath\\Automation\\Playwright\\tests\\POM_Auto\\LearnAuto\\Screenshots\\${pagename}.png`});   
    }
}