import { useEffect } from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () =>{
    
    const [navState,setNavState] = useState(false)

    const menuResponsive = () =>{
        setNavState(!navState)
    }
    /*setTimeout(() => {
        nav.style.display="none"
    }, 900);
    */
   const linkMenuOff=()=>{
    setNavState(false)
   }

    return( 
        <>
                <header>
                <i 
                    className={`bi bi-list ms-2 logo-menu ${navState ? "active" : ""}`}
                    onClick={menuResponsive}
                ></i>
                <div className={`contenedor-nav w-100 ${navState ? "navActivo" : ""}`}>
                    <div className="icono-logo">
                        <img src="" alt=""/>
                    </div>
                    <nav  className={`${navState ? "navAnimation" : ""}`}>
                        <li onClick={linkMenuOff} className="enlace-nav d-flex align-items-center"><i className="d-lg-none text-white bi bi-house-door-fill me-5 fs-2 ms-5"></i><NavLink to="/" className="text-white ms-5 ms-lg-0">Inicio</NavLink></li>
                        <li onClick={linkMenuOff} className="enlace-nav d-flex align-items-center"><i className="d-lg-none bi bi-people-fill me-5 text-white fs-2 ms-5"></i><NavLink to="/nosotros" className="text-white ms-5 ms-lg-0">Nosotros</NavLink></li>
                        {/*<li className="enlace-nav d-flex align-items-center"><i className="d-lg-none bi bi-chat-right-text-fill me-5 text-white  fs-2 ms-5"></i><a href="blog.html" className="text-white ms-5  ms-lg-0">Blog</a></li>*/}
                        <li onClick={linkMenuOff} className="enlace-nav d-flex align-items-center"><i className="d-lg-none bi bi-gear-fill me-5 text-white fs-2 ms-5"></i><NavLink to="/servicios" className="text-white  ms-5  ms-lg-0">Servicios</NavLink></li>
                        <li onClick={linkMenuOff} className="enlace-nav d-flex align-items-center"><i className="d-lg-none bi bi-globe me-5 text-white  fs-2 ms-5"></i><NavLink to="/proyectos" className="text-white  ms-5  ms-lg-0">Proyectos</NavLink></li>
                        <li onClick={linkMenuOff} className="enlace-nav d-flex align-items-center"><i className="d-lg-none bi bi-envelope-paper-fill me-5 text-white  fs-2 ms-5"></i><NavLink to="/contacto" className="text-white  ms-5  ms-lg-0">Contacto</NavLink></li>
                    </nav>
                    {/*
                    <div className="d-flex justify-content-center mt-4 pb-4">
                        <a href="" className="instagram"><i className="bi bi-instagram fs-2 me-3"></i></a>
                        <a href="" className="facebook"><i className="bi bi-facebook fs-2 ms-3"></i></a>
                    </div>*/}
                </div>
                
            </header>

        </>
    )
}