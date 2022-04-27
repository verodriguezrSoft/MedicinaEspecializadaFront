export class Cita{
    id: string
    idUsuario: number
    fechaCita: Date
    idEspecialidad: number
    idMedico: number
    precioCita: number
    tipoMoneda: string

    static unRegistroCita(obj: Object){
        return new Cita(
            obj['id'],
            obj['idUsuario'],
            obj['fechaCita'],
            obj['idEspecialidad'],
            obj['idMedico'],
            obj['precioCita'],
            obj['tipoMoneda'],
        )
    }

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