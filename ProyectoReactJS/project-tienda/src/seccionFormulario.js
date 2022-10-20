//esta componente va a tener los elementos necesarios para hacer un formulario

export function FormularioBienvenida() {
    return (
        <>
            <center>
            <div id="formPersonas">
                <h2> Formulario de Bienvenida </h2>
                <p>Nombre </p>
                <input type="text"></input>
                <p>Apellidos </p>
                <input type="text"></input>
                <p>correo </p>
                <input type="text"></input>
                <p>Telefono </p>
                <input type="text"></input>
                <br></br>
                <br></br>
                <input type="submit"></input>

            </div>
            </center>
        </>


    );


}