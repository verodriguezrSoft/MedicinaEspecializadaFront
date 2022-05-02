import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CitasPage } from '../page/citas/citas.po';


describe('workspace-project Alquiler', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let cita: CitasPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        cita = new CitasPage();
    });

    it('Deberia crear cita', () => {
        const ID_USUARIO = 123145;
        const FECHA_CITA = '06/06/2020T15:28A';
        const ESPECIALIDAD = 'Cardiología clinica';
        const TIPO_MONEDA = 'DOLARES';
        const MEDICO = 'Harold Moreno';

        browser.driver.manage().window().maximize();
        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonCrearCitas();
        cita.ingresarIdUsaurio(ID_USUARIO);
        cita.ingresarFechaCita(FECHA_CITA);
        cita.ingresarEspecialidad(ESPECIALIDAD);
        cita.ingresarTipoMoneda(TIPO_MONEDA);
        cita.ingresarMedico(MEDICO);
        cita.clickBotonGuardarCita();

        // Adicionamos las validaciones despues de la creación
        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonListarCitas();

        expect(8).toBe(cita.contarCitas());
    });

    it('Deberia listar citas', () => {
        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonListarCitas();
        expect(8).toBe(cita.contarCitas());
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });
});
