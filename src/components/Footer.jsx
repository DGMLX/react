import {NavLink} from "react-router-dom"

export const Footer = () =>{

        const goingUp = () =>{
            window.scrollTo(0,0)
        }

    return(
        <>
            <footer>
            <div className="d-flex justify-content-around text-white align-items-center">
                <div>
                    {/*<h6 className="pt-2"><i className="bi bi-instagram me-2"></i>Soluciones web</h6>*/}
                    <p><i className="bi bi-envelope text-black me-2 text-white"></i>soporte@tucodigoweb.cl</p>
                    <p><i className="bi bi-whatsapp me-2"></i>+56954714609</p>
                </div>
                <div>
                    <p><span className="span-footer">-</span> <NavLink to="/nosotros" onClick={goingUp} className="enlace text-white" >Sobre nosotros</NavLink></p>
                    <p><span className="span-footer">-</span> <NavLink to="/servicios" 
                    onClick={goingUp} className="enlace text-white" >Conoce nuestros servicios</NavLink></p>
                    <p><span className="span-footer">-</span> <NavLink to="/proyectos" 
                    onClick={goingUp} className="enlace text-white" >Proyectos realizados</NavLink></p>
                    <p><span className="span-footer">-</span> <NavLink to="/contacto" 
                    onClick={goingUp} className="enlace text-white" >Contáctanos</NavLink></p>
                </div>
            </div>
        </footer>
        </>
    )
}