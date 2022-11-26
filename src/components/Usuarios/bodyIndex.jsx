import Table from "../Table/Table";
import { useState } from "react";
import { getRequest } from "../../js/getData";
import MainPage from "../Table/MainPage";
import CreateButton from "../Table/CreateBotton";
import SearchBar from "../Table/SearchBar";
let objCss = {
    border: "6px solid red",
};
function BodyIndex(props) {
    return (
        <div>
            <h3>Usuarios</h3>
            <p style={objCss}>
                Bienvenidos a la pagina de administracion de usuarios
            </p>
            <MainPage
                data={props.datosTabla}
                path={"/Usuarios"}
                name={"Tabla de Usuarios"}
                columns={["_id", "firstName", "email", "username", "password"]}
                columnsAlias={[
                    "ID",
                    "Nombre",
                    "Correo",
                    "Usuario",
                    "Contrasena",
                ]}
                tools={["update", "delete"]}
            />
            {/* <div className="d-flex">
                <div className="col-6">
                    <Table />
                </div>
                <div className="col-6">
                    <Table />
                </div>
            </div> */}
        </div>
    );
}
export default BodyIndex;