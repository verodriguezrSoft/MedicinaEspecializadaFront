export class Cita{
    id: string
    idUsuario: number
    fechaCita: Date
    idEspecialidad: number
    idMedico: number
    precioCita: number
    tipoMoneda: string

    constructor( 
        id: string,
        idUsuario: number, 
        fechaCita: Date,
        idEspecialidad: number, 
        idMedico: number,
        precioCita: number,
        tipoMoneda: string
        )
        {
            this.id = id;
            this.idUsuario = idUsuario;
            this.fechaCita = fechaCita;
            this.idEspecialidad = idEspecialidad;
            this.idMedico = idMedico;
            this.precioCita = precioCita;
            this.tipoMoneda = tipoMoneda;
        }
    
    
}