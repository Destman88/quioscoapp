import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    // Obtener Ordenes
    const ordenes = await prisma.orden.findMany({
      where: {
        estado: {
          equals: false,
        },
      },
    });
    res.status(200).json(ordenes);
  } else if (req.method === "POST") {
    // Crear Ordenes
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        pedido: req.body.pedido,
        fecha: req.body.fecha,
      },
    });
    res.status(200).json(orden);
  }
}
