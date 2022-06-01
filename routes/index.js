import express from "express";
import {
  PaginaInicio,
  PaginaNosotros,
  PaginaViajes,
  PaginaTestimoniales,
  PaginaDetelleViaje
} from "../controllers/paginasController.js";
import {guardarTestimonial} from "../controllers/testimonialController.js";

guardarTestimonial


const router = express.Router();

router.get("/", PaginaInicio);

router.get("/nosotros", PaginaNosotros);

router.get("/viajes", PaginaViajes);

router.get("/viajes/:slug", PaginaDetelleViaje);

router.get("/testimoniales", PaginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);

export default router;
