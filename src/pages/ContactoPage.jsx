
export const ContactoPage = () =>{

    return(
        <>
           <main className="main-contacto">
        <section classNames=" mt-5 section-contacto">
            <div className="container">
                <h1 className="text-center pt-5 mb-5 text-white">No dudes en consultar</h1>
                  <div className="row d-flex justify-content-center justify-content-lg-around">
                    
                      <div className="col-12 col-lg-5 mb-5">
                        <form className="form" action="conexion.php" method="post">
                          <div className="mb-3">
                              <label for="exampleFormControlInput1" className="form-label text-white fs-5">Nombre</label>
                              <input type="text" className="form-control" name="name" placeholder="Ingresa tu nombre"/>
                          </div>
                          <div className="mb-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label text-white fs-5">Correo electrónico</label>
                              <input type="email" className="form-control"
                              name="email"
                              placeholder="correo@correo.com"/>
                          </div>
                          <div className="mb-3">
                              <label  className="form-label text-white fs-5">Mensaje</label>
                              <textarea className="form-control" name="message" rows="3" ></textarea>
                          </div>
                          <div className="w-100 d-flex justify-content-center mt-5">
                            <button className=" btn-section1 enlace fs-5" type="submit" name="submit" >Enviar</button>
                        </div>
                        </form>
                      </div>
                  </div>
                  
                </div>
            
        </section>
        



    </main>
        </>

    )
}