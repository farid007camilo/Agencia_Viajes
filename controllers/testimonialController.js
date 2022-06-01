import { Testimonial } from "../models/Testimoniales.js";
const guardarTestimonial = async (req, res) => {

    // validando el formulario 
    const {nombre, correo, mensaje} = req.body 

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({mensaje: "El NOMBRE esta vacio"});
    }
    if (correo.trim() === '') {
        errores.push({mensaje: "El CORREO esta vacio"});
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje: "El MENSAJE esta vacio"});
    }

    if (errores.length > 0 ){

        //consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //mostrar vista con errores
        res.render('testimoniales',{
            pagina: "Testimoniales",
            errores: errores,
            nombre: nombre,
            correo: correo,
            mensaje: mensaje,
            testimoniales: testimoniales
        })
    }
    else{
        //almacenar en la base de datos 
        try {
            await Testimonial.create({
                nombre: nombre,
                correo: correo,
                mensaje: mensaje
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonial
} 