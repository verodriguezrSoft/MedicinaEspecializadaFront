import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkCitas = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    
    async clickBotonCitas() {
        await this.linkCitas.click();
    }
}
