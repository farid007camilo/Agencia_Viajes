import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const PaginaInicio = async (req, res) => {
  // req -lo que enviamos : res -lo que express nos responde

  // consutal tres viajes del modelo viajes y haciendo multiples consultas

   const PromiseDB = [];
   PromiseDB.push(Viaje.findAll({limit: 3})) 
   PromiseDB.push(Testimonial.findAll()) 

  try {

    const resultado = await Promise.all(PromiseDB);

    res.render("inicio", {
      pagina: "inicio",
      clase: 'home',
      viajes: resultado[0],
      testimoniales: resultado[1]
    });
  } catch (error) {
    console.log(error);
  }

};

const PaginaNosotros = (req, res) => {
  // req -lo que enviamos : res -lo que express nos responde
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const PaginaViajes = async (req, res) => {
  // req -lo que enviamos : res -lo que express nos responde
  //consultando a la base de datos, para traer la informacion de la tabla viajes
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Proximos Viajes",
    viajes: viajes,
  });
};

const PaginaTestimoniales = async (req, res) => {
  // req -lo que enviamos : res -lo que express nos responde

    try {

      const testimoniales = await Testimonial.findAll();
      res.render("testimoniales", {
        pagina: "Testimoniales",
        testimoniales: testimoniales
      });

    } catch (error) {
      console.log(error);
    }


};

//muestra un viaje por su slug
const PaginaDetelleViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug: slug } });

    res.render("viaje", {
      pagina: "Informacion del viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  PaginaInicio,
  PaginaNosotros,
  PaginaViajes,
  PaginaTestimoniales,
  PaginaDetelleViaje,
};
