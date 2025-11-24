const products = [
  {
    id: "1",
    name: "Cinta de correr Runner 3000",
    category: "cintas-de-correr",
    price: 1200,
    stock: 8,
    img: "../src/assets/images/products/Cinta1.png",
    description:
      "Cinta de correr con múltiples niveles de inclinación y velocidad ajustable.",
  },
  {
    id: "2",
    name: "Bicicleta fija SpinPro",
    category: "bicicletas-fijas",
    price: 800,
    stock: 9,
    img: "../src/assets/images/products/Bici1.png",
    description:
      "Bicicleta fija con resistencia magnética y monitor de ritmo cardíaco.",
  },
  {
    id: "3",
    name: "Set de pesas IronMax",
    category: "equipamientos",
    price: 300,
    stock: 10,
    img: "../src/assets/images/products/setmancuernas1.png",
    description:
      "Set de pesas ajustables para entrenamiento de fuerza en casa.",
  },
  {
    id: "4",
    name: "Colchoneta YogaFlex",
    category: "accesorios",
    price: 10,
    stock: 30,
    img: "../src/assets/images/products/Colchoneta1.png",
    description: "Colchoneta antideslizante ideal para yoga y pilates.",
  },
  {
    id: "5",
    name: "Elíptica CardioPlus",
    category: "bicicletas-fijas",
    price: 950,
    stock: 3,
    img: "../src/assets/images/products/Eliptica1.png",
    description:
      "Elíptica con múltiples programas de entrenamiento y monitor digital.",
  },
  {
    id: "6",
    name: "Banco Press Plano Olimpico",
    category: "equipamientos",
    price: 450,
    stock: 4,
    img: "../src/assets/images/products/pressplano.png",
    description: "Banco para Press Plano Olimpico.",
  },
  {
    id: "7",
    name: "Sillon de Isquiotibiales",
    category: "equipamientos",
    price: 650,
    stock: 3,
    img: "../src/assets/images/products/sillonisquio1.png",
    description:
      "El sillon de isquiotibiales es una maquina especializada para el desarrollo de los musculos femorales, con ejercicios de curl sentado con trayectoria ergonómico. Su diseño es seguro y robusto, ofreciendo un movimiento natural y altamente efectivo.",
  },
  {
    id: "8",
    name: "Piso de goma eva encastrable",
    category: "equipamientos",
    price: 25,
    stock: 80,
    img: "../src/assets/images/products/pisogomaeva1.png",
    description:
      "Medidas: 60 x 60 cm x 10 mm. Comodidad y protección para entrenamientos livianos o zonas de descanso. Ideal para espacios con bajo tránsito o sin peso excesivo.",
  },
  {
    id: "9",
    name: "Polea Doble Enfrentada",
    category: "equipamientos",
    price: 950,
    stock: 2,
    img: "../src/assets/images/products/poleadoble1.png",
    description:
      "Polea doble enfrentada con ajuste individual con peso regulable por lingotes",
  },
  {
    id: "10",
    name: "Ladrillo de Yoga y Pilates",
    category: "accesorios",
    price: 15,
    stock: 2,
    img: "../src/assets/images/products/ladrillo1.png",
    description:
      "Un complemento esencial para tus entrenamientos y sesiones de estiramiento. Ideal para mejorar la estabilidad, el equilibrio y la alineación en posturas de yoga o pilates.",
  },
  {
    id: "11",
    name: "Combo Tiraband Plana 3 Tensiones",
    category: "accesorios",
    price: 30,
    stock: 2,
    img: "../src/assets/images/products/tiras3.png",
    description:
      "Combo x3 Bandas Elásticas Abiertas Medidas de cada banda: 122 cm x 12 cm | Niveles incluidos: Leve (fucsia) – Media (naranja) – Alta (negra)",
  },
];

let error = false;
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve(products);
      } else {
        reject("Error: No se pueden cargar los productos.");
      }
    }, 2500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("Error: Producto no encontrado.");
      }
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productsByCategory = products.filter(
        (prod) => prod.category === category
      );
      if (productsByCategory.length > 0) {
        resolve(productsByCategory);
      } else {
        reject("Error: No se encontraron productos en esta categoría.");
      }
    }, 1500);
  });
};
