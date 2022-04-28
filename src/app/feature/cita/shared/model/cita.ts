export class Cita{
    id: string
    idUsuario: number
    idEspecialidad: number
    fechaCita: Date 
    idMedico: number
    valorTRM: number
    tipoMoneda: string

    // static unRegistroCita(obj: Object){
    //     return new Cita(
    //         obj['id'],
    //         obj['idUsuario'],
    //         obj['fechaCita'],
    //         obj['idEspecialidad'],
    //         obj['idMedico'],
    //         obj['precioCita'],
    //         obj['tipoMoneda'],
    //     )
    // }

    constructor( 
        id: string,
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