export class Cita{
    id: number
    idUsuario: number
    idEspecialidad: number
    fechaCita: Date 
    idMedico: number
    valorTRM: number
    tipoMoneda: string

    constructor( 
        id: number,
        idUsuario: number,
        idEspecialidad: number,
        fechaCita: Date,
        idMedico: number,
        valorTRM: number,
        tipoMoneda: string
        )
        {
            this.id = id;
            this.idUsuario = idUsuario;
            this.fechaCita = fechaCita;
            this.idEspecialidad = idEspecialidad;
            this.valorTRM = valorTRM;
            this.tipoMoneda = tipoMoneda;
            this.idMedico = idMedico;
        }
    
    
}