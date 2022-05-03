export class Cita{
    id: number;
    idUsuario: number;
    idEspecialidad: number;
    fechaCita: string;
    idMedico: number;
    valorTRM: number;
    tipoMoneda: string;

    constructor(id: number, idUsu: number, idEspec: number, fecha: string, idMedico: number, valorTRM: number, tMoneda: string)
        {
            this.id = id;
            this.idUsuario = idUsu;
            this.fechaCita = fecha;
            this.idEspecialidad = idEspec;
            this.valorTRM = valorTRM;
            this.tipoMoneda = tMoneda;
            this.idMedico = idMedico;
        }
}
