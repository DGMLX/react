import {Navigate, Route, Routes} from "react-router-dom"
import { ContactoPage, HomePage, NosotrosPage, ProyectosPage, ServiciosPage } from "../pages"


export const AppRouter = () =>{

    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/nosotros" element={<NosotrosPage/>}/>
                <Route path="/servicios" element={<ServiciosPage/>}/>
                <Route path="/proyectos" element={<ProyectosPage/>}/>
                <Route path="/contacto" element={<ContactoPage/>}/>
                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}