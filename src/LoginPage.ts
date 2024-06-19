import { Page } from "@playwright/test";

export class LoginPage{
    readonly userName;
    readonly passWord;
    readonly loginButton;

    constructor (page:Page){
        this.userName = page.locator('//*[@id="email"]');
        this.passWord = page.locator('//*[@id="password"]')
        this.loginButton = page.getByRole('button', { name: 'Sign Up' })
    }

    async login(email: string, password: string) {
        await this.userName.fill(email);
        await this.passWord.fill(password);
        await this.loginButton.click();
    }
}