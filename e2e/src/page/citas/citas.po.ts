import { by, element } from 'protractor';

export class CitasPage {
    private linkCrearCita = element(by.id('linkCrearCita'));
    private linkListarCitas = element(by.id('linkListaCita'));
    private inputCitaIdUsuario = element(by.id('idUsuario'));
    private inputIngresarfechaCita = element(by.id('fechaCita'));
    private inputIngresarIdEspecialidad = element(by.id('idEspecialidad'));
    private inputIngresarTipoMoneda = element(by.id('tipoMoneda'));
    private inputIdMedico = element(by.id('idMedico'));
    private listarCitas = element.all(by.id('listaCitas'));
    private guardarCita = element(by.id('guarda_cita'));

    async clickBotonCrearCitas() {
        await this.linkCrearCita.click();
    }

    async clickBotonListarCitas() {
        await this.linkListarCitas.click();
    }

    async ingresarIdUsaurio(idUsuario) {
        await this.inputCitaIdUsuario.sendKeys(idUsuario);
    }

    async ingresarFechaCita(fechaCita) {
        await this.inputIngresarfechaCita.sendKeys(fechaCita);
    }

    async ingresarEspecialidad(idEspecialida) {
        await this.inputIngresarIdEspecialidad.sendKeys(idEspecialida);
    }

    async ingresarTipoMoneda(tipoMoneda) {
        await this.inputIngresarTipoMoneda.sendKeys(tipoMoneda);
    }

    async ingresarMedico(idMedico) {
        await this.inputIdMedico.sendKeys(idMedico);
    }


    async contarCitas() {
        return this.listarCitas.count();
    }

    async clickBotonGuardarCita() {
        await this.guardarCita.click();
    }
}