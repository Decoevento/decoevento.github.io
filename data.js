// Menú Decoevento — fuente única de items y precios (ES / EN).
// unit: "piece" = precio por pieza (cantidad editable)
//       "person" = precio por persona (se multiplica por invitados)
//       "plate" = plato servido (cantidad editable, por defecto = invitados)

window.MENU = [
  {
    id: "frios",
    title: { es: ["Canapés", "fríos"], en: ["Cold", "canapés"] },
    unit: "piece",
    items: [
      { id: "pate", name: { es: "Paté Decoevento", en: "Decoevento Pâté" }, desc: { es: "servido con toque de higo sobre tostadita de pan", en: "served with a touch of fig on a toasted crostini" }, price: 1.75 },
      { id: "bombones-cabra", name: { es: "Bombones de queso cabra", en: "Goat cheese bonbons" }, desc: { es: "con tomates secos, pesto y almendras caramelizadas", en: "with sun-dried tomatoes, pesto and caramelized almonds" }, price: 2.5 },
      { id: "caprese", name: { es: "Caprese con pesto", en: "Caprese with pesto" }, desc: { es: "presentado en mini pinchos", en: "presented on mini skewers" }, price: 2 },
      { id: "pollo-curry", name: { es: "Ensalada de pollo al curry", en: "Curry chicken salad" }, desc: { es: "pollo deshebrado con mango chutney, celery, pasas y salsa al curry", en: "shredded chicken with mango chutney, celery, raisins and curry sauce" }, price: 4 },
      { id: "pasta-caprese", name: { es: "Ensalada de pasta fría caprese", en: "Cold caprese pasta salad" }, desc: { es: "pasta de lacitos con pesto, bocconcini, tomates cherry y nueces", en: "bow-tie pasta with pesto, bocconcini, cherry tomatoes and walnuts" }, price: 3 },
      { id: "tabule", name: { es: "Ensalada tabule", en: "Tabbouleh salad" }, desc: { es: "tabule con lentejas, humus y pita", en: "tabbouleh with lentils, hummus and pita" }, price: 3.5 },
      { id: "ceviche-platano", name: { es: "Ceviche de plátano macho pintón", en: "Green plantain ceviche" }, desc: { es: "rallado con tomate, cebolla, ají picante y cilantro", en: "grated with tomato, onion, hot pepper and cilantro" }, price: 2.5 },
      { id: "serrano-burrata", name: { es: "Jamón serrano con burrata", en: "Serrano ham with burrata" }, desc: { es: "con durazno y arugula", en: "with peach and arugula" }, price: 3.5 },
      { id: "enrollado-salmon", name: { es: "Enrollado de salmón", en: "Salmon roll" }, desc: { es: "servido con wakame y pancito tostado", en: "served with wakame and toasted bread" }, price: 2.75 },
      { id: "tuna-tartar", name: { es: "Tuna tartar", en: "Tuna tartare" }, desc: { es: "servido con aguacate, cebollitas crispy y salsa especial", en: "served with avocado, crispy onions and special sauce" }, price: 3.99 },
      { id: "salmon-tartar", name: { es: "Salmón tartar", en: "Salmon tartare" }, desc: { es: "salmón fresco con eneldo, alcaparras y aderezo", en: "fresh salmon with dill, capers and dressing" }, price: 4.5 },
      { id: "ceviche-curvina", name: { es: "Ceviche de curvina o camarones", en: "Sea bass or shrimp ceviche" }, desc: { es: "servido en cestita de tostón crujiente", en: "served in a crispy plantain cup" }, price: 3.99 },
      { id: "neptuno", name: { es: "Ensalada Neptuno", en: "Neptune salad" }, desc: { es: "kani, mango, wakame, cilantro y sriracha aioli", en: "kani, mango, wakame, cilantro and sriracha aioli" }, price: 3.99 }
    ]
  },
  {
    id: "brusquetas",
    title: { es: ["Brusquetas"], en: ["Bruschettas"] },
    unit: "piece",
    items: [
      { id: "brusquetas-1", name: { es: "Brusquetas I", en: "Bruschettas I" }, desc: { es: "tomate rostizado con ajo sobre cama de aguacate · vegetales grillados sobre burrata · mix de hongos al ajillo", en: "roasted tomato with garlic over avocado · grilled vegetables over burrata · garlic mushroom medley" }, price: 2.5 },
      { id: "brusquetas-2", name: { es: "Brusquetas II", en: "Bruschettas II" }, desc: { es: "brie con higos caramelizados · camarones con curry y alcachofas · roquefort con nueces", en: "brie with caramelized figs · shrimp with curry and artichokes · roquefort with walnuts" }, price: 3.5 }
    ]
  },
  {
    id: "carpaccios",
    title: { es: ["Carpaccios"], en: ["Carpaccios"] },
    note: { es: "Servidos en mini platito", en: "Served on a mini plate" },
    unit: "piece",
    items: [
      { id: "calabacin", name: { es: "Calabacín y alcachofas", en: "Zucchini & artichoke" }, desc: { es: "calabacín, alcachofas, lonjas de parmesano, rúgula y cebollas crocantes", en: "zucchini, artichokes, shaved parmesan, arugula and crispy onions" }, price: 4.5 },
      { id: "betabel", name: { es: "Betabel y cabra", en: "Beet & goat cheese" }, desc: { es: "betabel, queso cabra y almendras caramelizadas", en: "beet, goat cheese and caramelized almonds" }, price: 3.5 },
      { id: "higos-burrata", name: { es: "Higos, burrata y jamón serrano", en: "Fig, burrata & serrano ham" }, desc: { es: "higos, burrata, jamón serrano y pistachos", en: "figs, burrata, serrano ham and pistachios" }, price: 4.5 },
      { id: "carpaccio-res", name: { es: "Carpaccio de res", en: "Beef carpaccio" }, desc: { es: "cebollitas, alcaparras, rúgula y lonjas de parmesano con mayonesa trufada", en: "onions, capers, arugula and shaved parmesan with truffle mayo" }, price: 4.5 },
      { id: "carpaccio-atun", name: { es: "Carpaccio de atún", en: "Tuna carpaccio" }, desc: { es: "cebolla morada, mango, aguacate, cilantro y poro crocante", en: "red onion, mango, avocado, cilantro and crispy leek" }, price: 4.5 },
      { id: "carpaccio-salmon", name: { es: "Carpaccio de salmón", en: "Salmon carpaccio" }, desc: { es: "cebolla morada, chile jalapeño, aguacate y cilantro con vinagreta de maracuyá", en: "red onion, jalapeño, avocado and cilantro with passion-fruit vinaigrette" }, price: 4.5 }
    ]
  },
  {
    id: "calientes",
    title: { es: ["Canapés", "calientes"], en: ["Hot", "canapés"] },
    unit: "piece",
    items: [
      { id: "croquetas", name: { es: "Croquetas de ibérico", en: "Iberian croquettes" }, price: 2 },
      { id: "datiles", name: { es: "Dátiles rellenos de queso cabra", en: "Goat cheese stuffed dates" }, desc: { es: "envueltos en tocineta", en: "wrapped in bacon" }, price: 2 },
      { id: "bombones-platano", name: { es: "Bombones de plátano con queso", en: "Plantain & cheese bonbons" }, price: 2 },
      { id: "langostinos", name: { es: "Langostinos tempurizados", en: "Tempura prawns" }, desc: { es: "acompañados con salsa al curry", en: "served with curry sauce" }, price: 3 },
      { id: "arancinis", name: { es: "Arancinis", en: "Arancini" }, desc: { es: "de hongos porcini o cuatro quesos", en: "porcini mushroom or four-cheese" }, price: 2.5 },
      { id: "tempura-veg", name: { es: "Tempura de vegetales", en: "Vegetable tempura" }, desc: { es: "calabacín, berenjena y pimentón con reducción de soya · servido en shot", en: "zucchini, eggplant and bell pepper with soy reduction · served in a shot" }, price: 3.5 },
      { id: "taquito", name: { es: "Taquito de camarones", en: "Shrimp taquito" }, desc: { es: "salteados con queso", en: "sautéed with cheese" }, price: 4.5 },
      { id: "graten", name: { es: "Gratén de cebolla, alcachofa u hongos y espinaca", en: "Onion, artichoke or mushroom & spinach gratin" }, desc: { es: "servidos en canastita de hojaldre", en: "served in a puff-pastry cup" }, price: 3.8 },
      { id: "tequenos", name: { es: "Tequeños", en: "Tequeños" }, desc: { es: "con mermelada de ají dulce con toque de picante", en: "with sweet chili jam with a touch of heat" }, price: 1.75 },
      { id: "cachapa", name: { es: "Deditos de cachapa con nata", en: "Cachapa fingers with cream" }, price: 2 },
      { id: "empanadita", name: { es: "Mini empanadita de carne mechada", en: "Mini shredded beef empanada" }, desc: { es: "con salsa de ajo y cilantro", en: "with garlic and cilantro sauce" }, price: 2 },
      {
        id: "lomito", name: { es: "Filet mignon o pincho de lomito", en: "Filet mignon or beef skewer" },
        desc: { es: "con papas fritas y salsa entrecot", en: "with fries and entrecôte sauce" },
        variants: [
          { id: "filet", label: { es: "Filet mignon", en: "Filet mignon" }, price: 3.5 },
          { id: "pincho", label: { es: "Pincho de lomito", en: "Beef skewer" }, price: 4.75 }
        ]
      },
      { id: "deditos-pollo", name: { es: "Deditos de pollo", en: "Chicken fingers" }, desc: { es: "con ajonjolí y salsa estilo thai", en: "with sesame and Thai-style sauce" }, price: 2 }
    ]
  },
  {
    id: "estaciones",
    title: { es: ["Estaciones"], en: ["Stations"] },
    note: { es: "Precio por persona, calculado según el número de invitados", en: "Priced per person, based on your guest count" },
    unit: "person",
    items: [
      {
        id: "quesos", name: { es: "Quesos y fiambres", en: "Cheese & charcuterie" },
        desc: { es: "Se presenta en diferentes tablas, cestas y bases con alturas.", en: "Presented on assorted boards, baskets and tiered bases." },
        price: 22, min: 20, setup: 210,
        includes: [
          { es: "Quesos importados: parmesano, brie, camembert, emmental, manchego, queso azul, truffled cheddar y queso cabra", en: "Imported cheeses: parmesan, brie, camembert, emmental, manchego, blue cheese, truffled cheddar and goat cheese" },
          { es: "Embutidos: jamón ibérico, lomo, chorizo, salchichón, salami y mortadela", en: "Charcuterie: Iberian ham, lomo, chorizo, salchichón, salami and mortadella" },
          { es: "Frutas, frutos secos, aceitunas, mermeladas, miel, pan, galletas y tostadas", en: "Fruit, nuts, olives, jams, honey, bread, crackers and toasts" }
        ]
      },
      {
        id: "trattoria", name: { es: "Trattoria", en: "Trattoria" },
        desc: { es: "Quesos y embutidos con frutas, aceitunas y frutos secos; vegetales grillados, tomates con burrata y pesto, hongos al ajillo.", en: "Cheeses and charcuterie with fruit, olives and nuts; grilled vegetables, tomatoes with burrata and pesto, garlic mushrooms." },
        min: 20, setup: 220,
        variants: [
          { id: "3", label: { es: "Con 3 ensaladas", en: "With 3 salads" }, price: 35 },
          { id: "4", label: { es: "Con 4 ensaladas", en: "With 4 salads" }, price: 45 }
        ],
        choices: [
          { id: "ensaladas", label: { es: "Ensaladas", en: "Salads" }, max: { "3": 3, "4": 4 }, options: [
            { es: "Lentejas en vinagreta", en: "Lentils in vinaigrette" },
            { es: "Garbanzos con vegetales y feta", en: "Chickpeas with vegetables & feta" },
            { es: "Tabule con lentejas y humus", en: "Tabbouleh with lentils & hummus" },
            { es: "Pasta fría caprese", en: "Cold caprese pasta" },
            { es: "Pollo al curry con mango chutney", en: "Curry chicken with mango chutney" },
            { es: "Pasta fría con quesos y fiambres", en: "Cold pasta with cheeses & charcuterie" },
            { es: "Ceviche de plátano macho dulzón", en: "Sweet plantain ceviche" }
          ] }
        ]
      },
      {
        id: "poke", name: { es: "Sushi poke", en: "Sushi poke" },
        desc: { es: "Barra de poke bowls con toppings y salsas. Se monta en diferentes bases y alturas.", en: "Poke bowl bar with toppings and sauces. Arranged on assorted bases and tiers." },
        price: 37.5, min: 20, setup: 230,
        choices: [
          { id: "proteinas", label: { es: "Proteínas", en: "Proteins" }, max: 4, options: [
            { es: "Tuna tartar", en: "Tuna tartare" }, { es: "Salmón tartar", en: "Salmon tartare" }, { es: "Camarones", en: "Shrimp" }, { es: "Kani", en: "Kani" }, { es: "Pollo estilo thai", en: "Thai-style chicken" }
          ] },
          { id: "bases", label: { es: "Bases", en: "Bases" }, max: 3, options: [
            { es: "Arroz de sushi", en: "Sushi rice" }, { es: "Arroz basmati", en: "Basmati rice" }, { es: "Quinoa", en: "Quinoa" }, { es: "Mezcla de lechugas", en: "Mixed greens" }
          ] }
        ]
      },
      {
        id: "italiana", name: { es: "Italiana", en: "Italian" },
        price: 44, setup: 230,
        choices: [
          { id: "ensaladas", label: { es: "Ensaladas", en: "Salads" }, max: 2, options: [
            { es: "César", en: "Caesar" }, { es: "Decoevento", en: "Decoevento" }, { es: "Griega", en: "Greek" }
          ] },
          { id: "rellena", label: { es: "Pasta rellena, risotto o lasagna", en: "Filled pasta, risotto or lasagna" }, max: 2, options: [
            { es: "Fiochetti de pera y gorgonzola", en: "Pear & gorgonzola fiocchetti" }, { es: "Raviolis de ricotta y espinacas", en: "Ricotta & spinach ravioli" }, { es: "Risotto (cuatro quesos, espárragos o camarones)", en: "Risotto (four-cheese, asparagus or shrimp)" }, { es: "Lasagna de carne", en: "Beef lasagna" }
          ] },
          { id: "pasta", label: { es: "Pasta", en: "Pasta" }, max: 2, options: [
            { es: "Plumita", en: "Penne" }, { es: "Farfalle", en: "Farfalle" }, { es: "Fusilli", en: "Fusilli" }, { es: "Linguini", en: "Linguine" }, { es: "Fettuccini", en: "Fettuccine" }
          ] },
          { id: "salsas", label: { es: "Salsas", en: "Sauces" }, max: 3, options: [
            { es: "Boloñesa", en: "Bolognese" }, { es: "Putanesca", en: "Puttanesca" }, { es: "Napolitana", en: "Napolitana" }, { es: "Carbonara", en: "Carbonara" }, { es: "Tomate", en: "Tomato" }, { es: "Tomate a la vodka", en: "Vodka tomato" }, { es: "Champiñones", en: "Mushroom" }, { es: "Cuatro quesos", en: "Four-cheese" }, { es: "Pesto", en: "Pesto" }
          ] }
        ]
      },
      {
        id: "thai", name: { es: "Thai", en: "Thai" },
        variants: [
          { id: "2", label: { es: "Con 2 proteínas", en: "With 2 proteins" }, price: 42 },
          { id: "3", label: { es: "Con 3 proteínas", en: "With 3 proteins" }, price: 48.5 }
        ],
        choices: [
          { id: "proteinas", label: { es: "Proteínas", en: "Proteins" }, max: { "2": 2, "3": 3 }, options: [
            { es: "Pollo estilo thai o al curry", en: "Thai-style or curry chicken" }, { es: "Lomo de cerdo agridulce", en: "Sweet & sour pork loin" }, { es: "Camarones al curry con coco", en: "Coconut curry shrimp" }, { es: "Mongolian beef", en: "Mongolian beef" }
          ] },
          { id: "ensalada", label: { es: "Ensalada", en: "Salad" }, max: 1, options: [
            { es: "Asiática de fideos crujientes", en: "Asian crispy noodle salad" }, { es: "Ensalada o ceviche de mango", en: "Mango salad or ceviche" }
          ] },
          { id: "acompanante", label: { es: "Acompañante", en: "Side" }, max: 1, options: [
            { es: "Arroz basmati o jazmín", en: "Basmati or jasmine rice" }, { es: "Arroz salvaje", en: "Wild rice" }, { es: "Vegetales asiáticos", en: "Asian vegetables" }
          ] }
        ]
      },
      {
        id: "hamburguesas", name: { es: "Hamburguesas artesanales", en: "Artisan burgers" },
        desc: { es: "Preparadas al momento: quesos, tocineta, cebolla caramelizada, champiñones, aguacate, salsas artesanales y papas fritas o wedges.", en: "Made to order: cheeses, bacon, caramelized onion, mushrooms, avocado, artisan sauces and fries or wedges." },
        price: 29.5
      },
      {
        id: "mexicana", name: { es: "Mexicana gourmet", en: "Mexican gourmet" },
        desc: { es: "Tortillas y tostadas; carne molida, pollo desmechado y camarones al ajillo; guacamole, pico de gallo, salsas, nata, quesos y chips.", en: "Tortillas and tostadas; seasoned beef, shredded chicken and garlic shrimp; guacamole, pico de gallo, salsas, crema, cheeses and chips." },
        price: 29.5
      },
      {
        id: "prime", name: { es: "Prime", en: "Prime" },
        variants: [
          { id: "1", label: { es: "Una proteína", en: "One protein" }, price: 46 },
          { id: "2", label: { es: "Dos proteínas", en: "Two proteins" }, price: 54 }
        ],
        choices: [
          { id: "proteinas", label: { es: "Proteínas", en: "Proteins" }, max: { "1": 1, "2": 2 }, options: [
            { es: "Lomito al grill", en: "Grilled tenderloin" }, { es: "Stroganoff de lomito o de pollo", en: "Beef or chicken stroganoff" }, { es: "Lomo de cerdo en salsa especial", en: "Pork loin in special sauce" }, { es: "Salmón o róbalo al limón", en: "Lemon salmon or sea bass" }
          ] },
          { id: "acompanantes", label: { es: "Acompañantes", en: "Sides" }, max: 2, options: [
            { es: "Papas al romero", en: "Rosemary potatoes" }, { es: "Puré de papas", en: "Mashed potatoes" }, { es: "Gratén de papas", en: "Potato gratin" }, { es: "Papas fritas", en: "Fries" }, { es: "Arroz salvaje", en: "Wild rice" }, { es: "Risotto cuatro quesos", en: "Four-cheese risotto" }, { es: "Gratén de cebollas o vegetales", en: "Onion or vegetable gratin" }, { es: "Zanahorias glaseadas", en: "Glazed carrots" }, { es: "Espárragos salteados", en: "Sautéed asparagus" }
          ] },
          { id: "ensaladas", label: { es: "Ensaladas", en: "Salads" }, max: 2, options: [
            { es: "Mix de lechugas y queso cabra", en: "Mixed greens & goat cheese" }, { es: "César", en: "Caesar" }, { es: "Griega", en: "Greek" }, { es: "Wedge", en: "Wedge" }, { es: "Espinacas y tocino", en: "Spinach & bacon" }
          ] }
        ]
      },
      {
        id: "arepas", name: { es: "Arepas", en: "Arepas" },
        desc: { es: "Incluye 3 arepas por persona. Carne mechada, reina pepeada, pernil, frijoles negros, perico, quesos, nata, mantequilla y guasacaca.", en: "Includes 3 arepas per person. Shredded beef, reina pepiada, pernil, black beans, perico, cheeses, cream, butter and guasacaca." },
        price: 22, setup: 220
      },
      {
        id: "brunch", name: { es: "Brunch", en: "Brunch" },
        setup: 230,
        variants: [
          { id: "clasico", label: { es: "Brunch clásico", en: "Classic brunch" }, price: 39 },
          { id: "signature", label: { es: "Brunch signature", en: "Signature brunch" }, price: 47 }
        ],
        choices: [
          { id: "items", label: { es: "Items", en: "Items" }, max: 6, options: [
            { es: "Parfait de frutos rojos", en: "Red berry parfait" }, { es: "Mini bagels con salmón", en: "Mini bagels with salmon" }, { es: "Mini pancakes", en: "Mini pancakes" }, { es: "Quiches", en: "Quiches" }, { es: "Estación omelette", en: "Omelette station" }, { es: "Mini croissants", en: "Mini croissants" }, { es: "Avocado toast", en: "Avocado toast" }, { es: "Paninis", en: "Paninis" }, { es: "Tabla de quesos y embutidos", en: "Cheese & charcuterie board" }
          ] }
        ]
      }
    ]
  },
  {
    id: "servidos",
    title: { es: ["Platos", "servidos"], en: ["Plated", "dishes"] },
    note: { es: "Servicio en plato a la mesa", en: "Served plated to the table" },
    unit: "plate",
    items: [
      { id: "risotto", name: { es: "Risotto de champiñones, espárrago o cuatro quesos", en: "Mushroom, asparagus or four-cheese risotto" }, desc: { es: "con queso parmesano y decorado de remolacha", en: "with parmesan and a beet garnish" }, price: 26.5 },
      { id: "risotto-langosta", name: { es: "Risotto de langosta o camarones", en: "Lobster or shrimp risotto" }, price: 35.5 },
      { id: "risotto-tinta", name: { es: "Risotto en tinta de calamar con mariscos", en: "Squid-ink risotto with seafood" }, desc: { es: "camarones, vieiras, calamares y pulpo", en: "shrimp, scallops, calamari and octopus" }, price: 38.5 },
      { id: "ravioli", name: { es: "Ravioli de ricotta y espinacas", en: "Ricotta & spinach ravioli" }, desc: { es: "salsa a base de crema, vino blanco, gorgonzola, albahaca y tomates cherry", en: "cream, white wine, gorgonzola, basil and cherry-tomato sauce" }, price: 26.5 },
      { id: "fiochetti", name: { es: "Fiochetti de pera y gorgonzola", en: "Pear & gorgonzola fiocchetti" }, desc: { es: "con salsa cuatro quesos y parmesano", en: "with four-cheese sauce and parmesan" }, price: 26.5 },
      { id: "pollo-curry-plato", name: { es: "Tiritas de pollo al curry", en: "Curry chicken strips" }, desc: { es: "con arroz basmati y pincho de plátano dulce", en: "with basmati rice and a sweet plantain skewer" }, price: 28.5 },
      { id: "polvorosa", name: { es: "Polvorosa de pollo", en: "Chicken polvorosa" }, desc: { es: "con ensalada verde", en: "with a green salad" }, price: 29.5 },
      { id: "stroganoff", name: { es: "Lomito stroganoff", en: "Beef stroganoff" }, desc: { es: "con hongos silvestres, arroz salvaje y espárragos", en: "with wild mushrooms, wild rice and asparagus" }, price: 35.5 },
      { id: "lomito-grill", name: { es: "Lomito al grill", en: "Grilled tenderloin" }, desc: { es: "con salsa de champiñones y risotto cuatro quesos", en: "with mushroom sauce and four-cheese risotto" }, price: 35.5 },
      { id: "lomo-cerdo", name: { es: "Lomo de cerdo en salsa especial", en: "Pork loin in special sauce" }, desc: { es: "acompañado de papas rostizadas y espárragos", en: "with roasted potatoes and asparagus" }, price: 31.5 },
      { id: "marinera", name: { es: "Arroz a la marinera", en: "Seafood rice" }, price: 32.5 },
      { id: "chupe", name: { es: "Chupe de pollo", en: "Chicken chowder (chupe)" }, desc: { es: "con queso y aguacate", en: "with cheese and avocado" }, price: 18 }
    ]
  }
];

// Fotos de eventos reales (carpeta img/). Se muestran debajo del encabezado; si la lista está vacía, la sección no aparece.
// Ejemplo: { src: "img/boda-01.jpg", alt: { es: "Mesa de quesos en boda", en: "Cheese table at a wedding" } }
window.GALLERY = [];

// Testimonios de clientes (con su permiso). Se muestran junto al botón final.
// Ejemplo: { name: "María L.", event: { es: "Boda, 120 invitados", en: "Wedding, 120 guests" }, text: { es: "…", en: "…" } }
window.TESTIMONIALS = [];
