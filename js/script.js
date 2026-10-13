/* =========================================
   G3BKeys — JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MENÚ RESPONSIVE
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu    = document.getElementById("navMenu");
    const navLinks   = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            });
        });
    }

    /* =========================================
       NAVEGACIÓN ACTIVA (SEGÚN PÁGINA ACTUAL)
    ========================================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        link.classList.remove("active");

        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    /* =========================================
       AÑO AUTOMÁTICO
    ========================================= */

    const currentYear = document.getElementById("currentYear");
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* =========================================
       BOTÓN VOLVER ARRIBA
    ========================================= */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* =========================================
       ANIMACIONES AL HACER SCROLL
    ========================================= */

    const animatedElements = document.querySelectorAll(
        ".problem-card, .feature-card, .solution-item, " +
        ".tech-card, .database-box, .team-card, .stat-item"
    );

    animatedElements.forEach(el => el.classList.add("fade-in"));

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    animatedElements.forEach(el => observer.observe(el));

    /* =========================================
       EFECTO DEL HEADER AL HACER SCROLL
    ========================================= */

    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.style.background = "rgba(8, 6, 10, 0.96)";
            } else {
                header.style.background = "rgba(11, 8, 16, 0.82)";
            }
        });
    }

    /* =========================================
       EFECTO DE PARPADEO EN TERMINAL
    ========================================= */

    const terminalCursor = document.querySelector(".terminal-cursor");

    if (terminalCursor) {
        setInterval(() => {
            terminalCursor.style.opacity =
                terminalCursor.style.opacity === "0" ? "1" : "0";
        }, 500);
    }

});

    /* =========================================
       MODAL DE DETALLE DE FUNCIONES
    ========================================= */

    const featureData = {
        "Gestión de Keys": {
            icon: "fa-key",
            color: "purple",
            desc: "Registra y administra cada código digital de videojuego dentro de un inventario centralizado, evitando duplicados y manteniendo el control total del stock.",
            features: [
                "Alta, edición y baja de códigos digitales.",
                "Clasificación por plataforma (Steam, Epic, PSN, Xbox).",
                "Estado por key: disponible, reservada o vendida.",
                "Búsqueda avanzada por nombre, plataforma o proveedor."
            ]
        },
        "Clientes": {
            icon: "fa-users",
            color: "green",
            desc: "Administra la información de cada cliente que compra keys, manteniendo un historial de compras que facilita la atención personalizada.",
            features: [
                "Registro completo: nombre, correo, teléfono.",
                "Historial de compras por cliente.",
                "Consulta, edición y eliminación de registros.",
                "Validación de datos para evitar duplicados."
            ]
        },
        "Proveedores": {
            icon: "fa-building",
            color: "purple",
            desc: "Gestiona las personas o empresas que suministran las keys al negocio, permitiendo rastrear el origen de cada producto.",
            features: [
                "Datos de contacto del proveedor.",
                "Asociación de productos por proveedor.",
                "Historial de suministros recibidos.",
                "Control de precios de compra."
            ]
        },
        "Categorías": {
            icon: "fa-layer-group",
            color: "green",
            desc: "Clasifica los productos según la plataforma del videojuego para agilizar búsquedas y reportes.",
            features: [
                "Categorías por plataforma (Steam, Epic, PSN...).",
                "Asignación rápida desde el módulo de productos.",
                "Filtros por categoría en inventario y ventas.",
                "Estadísticas de ventas por categoría."
            ]
        },
        "Ventas": {
            icon: "fa-cart-shopping",
            color: "purple",
            desc: "Registra cada transacción realizada, asociando cliente, usuario, productos y montos en un solo movimiento.",
            features: [
                "Registro de venta con múltiples productos.",
                "Cálculo automático de totales.",
                "Actualización automática del stock.",
                "Historial de ventas con filtros por fecha."
            ]
        },
        "Reportes": {
            icon: "fa-chart-pie",
            color: "green",
            desc: "Genera reportes de ventas e inventario que facilitan el seguimiento y la toma de decisiones del negocio.",
            features: [
                "Reportes de ventas por período.",
                "Reportes de inventario actual.",
                "Exportación en PDF y Excel.",
                "Estadísticas visuales del negocio."
            ]
        },
        "Usuarios y roles": {
            icon: "fa-user-shield",
            color: "purple",
            desc: "Controla el acceso al sistema mediante un login seguro y roles diferenciados para cada tipo de usuario.",
            features: [
                "Inicio de sesión con credenciales.",
                "Roles: administrador y vendedor.",
                "Permisos diferenciados por módulo.",
                "Registro de actividad por usuario."
            ]
        },
        "Control de stock": {
            icon: "fa-arrows-rotate",
            color: "green",
            desc: "Mantiene actualizado el estado de cada key conforme se realizan las ventas, evitando vender productos agotados.",
            features: [
                "Estado en tiempo real de cada key.",
                "Alertas de stock bajo.",
                "Bloqueo de venta si no hay disponibilidad.",
                "Sincronización automática con el inventario."
            ]
        }
    };

    /* Crear el modal una sola vez */
    const featureModal = document.createElement("div");
    featureModal.className = "feature-modal";
    featureModal.innerHTML = `
        <div class="feature-modal-content">
            <button class="feature-modal-close" aria-label="Cerrar">
                <i class="fas fa-xmark"></i>
            </button>
            <div class="fm-icon" id="fmIcon"></div>
            <h3 id="fmTitle"></h3>
            <p id="fmDesc"></p>
            <span class="fm-subtitle">¿QUÉ INCLUYE?</span>
            <ul class="fm-list" id="fmList"></ul>
            <div class="fm-cta">
                <a href="contacto.html" class="btn btn-primary">
                    <i class="fas fa-headset"></i> Solicitar información
                </a>
                <a href="precios.html" class="btn btn-secondary">
                    <i class="fas fa-tag"></i> Ver precios
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(featureModal);

    const fmIcon  = featureModal.querySelector("#fmIcon");
    const fmTitle = featureModal.querySelector("#fmTitle");
    const fmDesc  = featureModal.querySelector("#fmDesc");
    const fmList  = featureModal.querySelector("#fmList");
    const fmClose = featureModal.querySelector(".feature-modal-close");

    const openFeatureModal = (key) => {
        const data = featureData[key];
        if (!data) return;

        fmIcon.className = `fm-icon ${data.color}`;
        fmIcon.innerHTML = `<i class="fas ${data.icon}"></i>`;
        fmTitle.textContent = key;
        fmDesc.textContent  = data.desc;
        fmList.innerHTML = data.features
            .map(f => `<li><i class="fas fa-check"></i> ${f}</li>`)
            .join("");

        featureModal.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    const closeFeatureModal = () => {
        featureModal.classList.remove("active");
        document.body.style.overflow = "";
    };

    /* Asignar el clic a cada tarjeta de función */
    document.querySelectorAll(".feature-card").forEach(card => {
        const title = card.querySelector("h3")?.textContent.trim();
        if (title && featureData[title]) {
            card.style.cursor = "pointer";
            card.addEventListener("click", (e) => {
                /* Evita que se dispare si hacen clic sobre una imagen ampliable */
                if (e.target.closest(".feature-image")) return;
                openFeatureModal(title);
            });
        }
    });

    fmClose.addEventListener("click", closeFeatureModal);

    featureModal.addEventListener("click", (e) => {
        if (e.target === featureModal) closeFeatureModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && featureModal.classList.contains("active")) {
            closeFeatureModal();
        }
    });

    /* =========================================
       BOTÓN FLOTANTE WHATSAPP
       (Se inyecta automáticamente en todas las páginas)
    ========================================= */

    const phoneNumber = "50368385299"; // ← CAMBIA por tu número real
    const waMessage   = encodeURIComponent("Hola G3BKeys, estoy interesado en sus servicios de gestión y venta de keys. ¿Me pueden dar más información?");

    const whatsappBtn = document.createElement("a");
    whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${waMessage}`;
    whatsappBtn.target = "_blank";
    whatsappBtn.rel = "noopener";
    whatsappBtn.className = "whatsapp-float";
    whatsappBtn.setAttribute("aria-label", "Contactar por WhatsApp");
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);

    /* ========================================
   CARRUSEL DE VIDEOJUEGOS
======================================== */

const gamesTrack = document.getElementById("gamesTrack");
const prevGame = document.getElementById("prevGame");
const nextGame = document.getElementById("nextGame");
const carouselDots = document.getElementById("carouselDots");

if (gamesTrack && prevGame && nextGame) {

    const games = gamesTrack.querySelectorAll(".game-card");

    let currentGame = 0;

    function getVisibleGames() {

        if (window.innerWidth <= 500) {
            return 1;
        }

        if (window.innerWidth <= 800) {
            return 2;
        }

        if (window.innerWidth <= 1100) {
            return 4;
        }

        return 5;
    }

    function getMaxPosition() {
        return Math.max(
            0,
            games.length - getVisibleGames()
        );
    }

    function updateCarousel() {

        const visibleGames = getVisibleGames();

        const cardWidth =
            games[0].offsetWidth + 20;

        gamesTrack.style.transform =
            `translateX(-${currentGame * cardWidth}px)`;

        updateDots();
    }


    function nextSlide() {

        const maxPosition = getMaxPosition();

        if (currentGame < maxPosition) {
            currentGame++;
        } else {
            currentGame = 0;
        }

        updateCarousel();
    }


    function previousSlide() {

        const maxPosition = getMaxPosition();

        if (currentGame > 0) {
            currentGame--;
        } else {
            currentGame = maxPosition;
        }

        updateCarousel();
    }


    function createDots() {

        carouselDots.innerHTML = "";

        const total =
            getMaxPosition() + 1;

        for (let i = 0; i < total; i++) {

            const dot =
                document.createElement("span");

            dot.classList.add("carousel-dot");

            if (i === currentGame) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {

                currentGame = i;

                updateCarousel();

            });

            carouselDots.appendChild(dot);
        }
    }


    function updateDots() {

        const dots =
            carouselDots.querySelectorAll(
                ".carousel-dot"
            );

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentGame
            );

        });
    }


    nextGame.addEventListener(
        "click",
        nextSlide
    );

    prevGame.addEventListener(
        "click",
        previousSlide
    );


    window.addEventListener(
        "resize",
        () => {

            const maxPosition =
                getMaxPosition();

            if (currentGame > maxPosition) {
                currentGame = maxPosition;
            }

            createDots();
            updateCarousel();

        }
    );


    createDots();
    updateCarousel();


    /* Cambio automático */

    setInterval(() => {

        nextSlide();

    }, 4000);

}

const games = [{"id": 1, "compania": "Nintendo", "nombre": "The Legend of Zelda: Tears of the Kingdom", "precio_usd_referencial": 69.99, "descripcion": "Aventura de mundo abierto donde Link explora Hyrule y resuelve desafíos.", "imagen": "img/the_legend_of_zelda_tears_of_the_kingdom.jpg"}, 
    {"id": 2, "compania": "Nintendo", "nombre": "Super Mario Bros. Wonder", "precio_usd_referencial": 59.99, "descripcion": "Plataformas 2D con transformaciones sorprendentes y niveles creativos.", "imagen": "img/Super_Mario_Bros_Wonder.jpg"}, 
    {"id": 3, "compania": "Nintendo", "nombre": "Mario Kart 8 Deluxe", "precio_usd_referencial": 59.99, "descripcion": "Carreras arcade con personajes de Nintendo, circuitos y multijugador.", "imagen": "img/Mario_Kart_8_Deluxe.jpg"}, 
    {"id": 4, "compania": "Nintendo", "nombre": "Super Smash Bros. Ultimate", "precio_usd_referencial": 59.99, "descripcion": "Juego de lucha con personajes de distintas franquicias de Nintendo y otras sagas.", "imagen": "img/Super_Smash_Bros_Ultimate.jpg"}, 
    {"id": 5, "compania": "Nintendo", "nombre": "Animal Crossing: New Horizons", "precio_usd_referencial": 59.99, "descripcion": "Simulación de vida en una isla personalizable con actividades y vecinos.", "imagen": "img/Animal_Crossing_New_Horizons.jpg"}, 
    {"id": 6, "compania": "Nintendo", "nombre": "Pokémon Scarlet", "precio_usd_referencial": 59.99, "descripcion": "RPG de captura y entrenamiento de Pokémon en una región de mundo abierto.", "imagen": "img/Pokemon_Scarlet.jpg"}, 
    {"id": 7, "compania": "Nintendo", "nombre": "Metroid Dread", "precio_usd_referencial": 59.99, "descripcion": "Aventura de acción y exploración con Samus en un planeta peligroso.", "imagen": "img/Metroid_Dread.jpg"}, 
    {"id": 8, "compania": "Nintendo", "nombre": "Luigi's Mansion 3", "precio_usd_referencial": 59.99, "descripcion": "Aventura de puzles donde Luigi explora un hotel embrujado.", "imagen": "img/Luigi_Mansion_3.jpg"}, 
    {"id": 9, "compania": "Nintendo", "nombre": "Pikmin 4", "precio_usd_referencial": 59.99, "descripcion": "Estrategia y exploración guiada por pequeñas criaturas llamadas Pikmin.", "imagen": "img/Pikmin_4.jpg"}, 
    {"id": 10, "compania": "PlayStation", "nombre": "Marvel's Spider-Man 2", "precio_usd_referencial": 69.99, "descripcion": "Aventura de acción en mundo abierto protagonizada por Peter Parker y Miles Morales.", "imagen": "img/Marvel_Spider-man_2.jpg"}, 
    {"id": 11, "compania": "PlayStation", "nombre": "God of War Ragnarök", "precio_usd_referencial": 59.99, "descripcion": "Aventura de acción mitológica centrada en Kratos y Atreus.", "imagen": "img/God_of_War_Ragnarok.png"}, 
    {"id": 12, "compania": "PlayStation", "nombre": "The Last of Us Part I", "precio_usd_referencial": 69.99, "descripcion": "Aventura narrativa de supervivencia en un mundo devastado.", "imagen": "img/The_Last_of_Us_Part_1.jpg"}, 
    {"id": 13, "compania": "PlayStation", "nombre": "Gran Turismo 7", "precio_usd_referencial": 69.99, "descripcion": "Simulador de conducción con coches, circuitos y opciones de competición.", "imagen": "img/Gran_Turismo_7.jpg"}, 
    {"id": 14, "compania": "PlayStation", "nombre": "Horizon Forbidden West", "precio_usd_referencial": 59.99, "descripcion": "Aventura de acción en un mundo posapocalíptico lleno de máquinas.", "imagen": "img/Horizon_Forbidden_West.jpg"}, 
    {"id": 15, "compania": "PlayStation", "nombre": "Ghost of Tsushima Director's Cut", "precio_usd_referencial": 59.99, "descripcion": "Aventura de mundo abierto ambientada en el Japón feudal.", "imagen": "img/Ghost_of_Tsushima_Director's_Cut.jpg"}, 
    {"id": 16, "compania": "PlayStation", "nombre": "Ratchet & Clank: Rift Apart", "precio_usd_referencial": 69.99, "descripcion": "Plataformas y acción con viajes entre dimensiones y combates futuristas.", "imagen": "img/Ratchet_&_Clank_Rift_Apart.jpg"}, 
    {"id": 17, "compania": "PlayStation", "nombre": "Returnal", "precio_usd_referencial": 59.99, "descripcion": "Shooter roguelike de ciencia ficción con ciclos de combate y exploración.", "imagen": "img/Returnal.jpg"}, 
    {"id": 18, "compania": "PlayStation", "nombre": "Demon's Souls", "precio_usd_referencial": 69.99, "descripcion": "RPG de acción desafiante ambientado en un reino de fantasía oscura.", "imagen": "img/Demon's Souls.jpg"}, 
    {"id": 19, "compania": "Xbox", "nombre": "Forza Horizon 5", "precio_usd_referencial": 59.99, "descripcion": "Carreras de mundo abierto ambientadas en paisajes variados de México.", "imagen": "img/Forza_Horizon_5.jpg"}, 
    {"id": 20, "compania": "Xbox", "nombre": "Halo Infinite", "precio_usd_referencial": 59.99, "descripcion": "Shooter de ciencia ficción con campaña y modos multijugador.", "imagen": "img/Halo_Infinite.jpg"}, 
    {"id": 21, "compania": "Xbox", "nombre": "Starfield", "precio_usd_referencial": 69.99, "descripcion": "RPG espacial para explorar planetas, construir naves y completar misiones.", "imagen": "img/Starfield.jpg"}, 
    {"id": 22, "compania": "Xbox", "nombre": "Microsoft Flight Simulator", "precio_usd_referencial": 69.99, "descripcion": "Simulador de vuelo con aeronaves y recreaciones detalladas del planeta.", "imagen": "img/Microsoft Flight Simulator.jpg"}, 
    {"id": 23, "compania": "Xbox", "nombre": "Gears 5", "precio_usd_referencial": 39.99, "descripcion": "Shooter de acción en tercera persona con campaña cooperativa y multijugador.", "imagen": "img/Gears_5.jpg"}, 
    {"id": 24, "compania": "Xbox", "nombre": "Sea of Thieves", "precio_usd_referencial": 39.99, "descripcion": "Aventura multijugador de piratas, exploración y búsqueda de tesoros.", "imagen": "img/Sea_of_Thieves.jpg"}, 
    {"id": 25, "compania": "Xbox", "nombre": "Ori and the Will of the Wisps", "precio_usd_referencial": 29.99, "descripcion": "Plataformas y aventura con exploración, habilidades y arte colorido.", "imagen": "img/Ori_and_the_Will_of_the_Wisps.jpg"}, 
    {"id": 26, "compania": "Xbox", "nombre": "Psychonauts 2", "precio_usd_referencial": 59.99, "descripcion": "Plataformas de aventura con poderes psíquicos y mundos imaginativos.", "imagen": "img/Psychonauts_2.jpg"}, 
    {"id": 27, "compania": "Epic Games Store", "nombre": "Fortnite Pase Club", "precio_usd_referencial": 20.00, "descripcion": "Battle royale gratuito con modos creativos y contenido cosmético opcional.", "imagen": "img/Fortnite_Pase_Club.jpg"}, 
    {"id": 28, "compania": "Epic Games Store", "nombre": "Alan Wake 2", "precio_usd_referencial": 49.99, "descripcion": "Survival horror narrativo que combina misterio, investigación y terror.", "imagen": "img/Alan_Wake_2.jpg"}, 
    {"id": 29, "compania": "Epic Games Store", "nombre": "Dead Island 2", "precio_usd_referencial": 49.99, "descripcion": "Acción de supervivencia contra zombis en una versión ficticia de Los Ángeles.", "imagen": "img/Dead_Island_2.jpg"}, 
    {"id": 30, "compania": "Epic Games Store", "nombre": "The Lord of the Rings: Return to Moria", "precio_usd_referencial": 24.99, "descripcion": "Supervivencia y construcción cooperativa en las minas de Moria.", "imagen": "img/The_Lord_of_the_Rings_Return_to_Moria.jpg"}, 
    {"id": 31, "compania": "Epic Games Store", "nombre": "Sifu", "precio_usd_referencial": 39.99, "descripcion": "Juego de combate cuerpo a cuerpo con progresión basada en la edad del protagonista.", "imagen": "img/Sifu.jpg"}, 
    {"id": 32, "compania": "Epic Games Store", "nombre": "Kingdom Hearts III", "precio_usd_referencial": 59.99, "descripcion": "RPG de acción que reúne personajes de Disney y Kingdom Hearts.", "imagen": "img/Kingdom_Hearts_III.jpg"}, 
    {"id": 33, "compania": "Epic Games Store", "nombre": "Borderlands 3", "precio_usd_referencial": 59.99, "descripcion": "Shooter looter con humor, habilidades y una gran variedad de armas.", "imagen": "img/Borderlands_3.jpg"}, 
    {"id": 34, "compania": "Epic Games Store", "nombre": "Rogue Legacy 2", "precio_usd_referencial": 24.99, "descripcion": "Plataformas roguelite donde cada heredero tiene características distintas.", "imagen": "img/Rogue_Legacy_2.jpg"}, 
    {"id": 35, "compania": "Ubisoft Connect", "nombre": "Assassin's Creed Mirage", "precio_usd_referencial": 49.99, "descripcion": "Aventura de sigilo ambientada en Bagdad durante la Edad de Oro islámica.", "imagen": "img/Assassin's_Creed_Mirage.jpg"}, 
    {"id": 36, "compania": "Ubisoft Connect", "nombre": "Assassin's Creed Valhalla", "precio_usd_referencial": 59.99, "descripcion": "RPG de acción sobre incursiones vikingas y exploración de Inglaterra.", "imagen": "img/Assassin's_Creed_Valhalla.jpg"}, 
    {"id": 37, "compania": "Ubisoft Connect", "nombre": "Far Cry 6", "precio_usd_referencial": 59.99, "descripcion": "Shooter de mundo abierto ambientado en una isla bajo un régimen autoritario.", "imagen": "img/Far_Cry_6.jpg"}, 
    {"id": 38, "compania": "Ubisoft Connect", "nombre": "Tom Clancy's Rainbow Six Siege", "precio_usd_referencial": 19.99, "descripcion": "Shooter táctico por equipos centrado en operadores y destrucción de escenarios.", "imagen": "img/Tom_Clancy's_Rainbow_Six_Siege.jpg"}, 
    {"id": 39, "compania": "Ubisoft Connect", "nombre": "The Division 2", "precio_usd_referencial": 29.99, "descripcion": "Shooter RPG cooperativo ambientado en una Washington devastada.", "imagen": "img/The_Division_2.jpg"}, 
    {"id": 40, "compania": "Ubisoft Connect", "nombre": "Watch Dogs: Legion", "precio_usd_referencial": 59.99, "descripcion": "Acción de mundo abierto donde puedes reclutar personajes en una Londres futurista.", "imagen": "img/Watch_Dogs_Legion.jpg"}, 
    {"id": 41, "compania": "Ubisoft Connect", "nombre": "The Crew Motorfest", "precio_usd_referencial": 69.99, "descripcion": "Juego de conducción de mundo abierto con eventos y vehículos variados.", "imagen": "img/The_Crew_Motorfest.jpg"}, 
    {"id": 42, "compania": "Ubisoft Connect", "nombre": "Prince of Persia: The Lost Crown", "precio_usd_referencial": 49.99, "descripcion": "Aventura de acción y plataformas con combate y exploración estilo metroidvania.", "imagen": "img/Prince_of_Persia_The_Lost_Crown.jpg"}, 
    {"id": 43, "compania": "Steam", "nombre": "Baldur's Gate 3", "precio_usd_referencial": 59.99, "descripcion": "RPG por turnos con decisiones narrativas, exploración y juego cooperativo.", "imagen": "img/Baldur's_Gate_3.jpg"}, 
    {"id": 44, "compania": "Steam", "nombre": "Elden Ring", "precio_usd_referencial": 59.99, "descripcion": "RPG de acción de mundo abierto con exploración y combates exigentes.", "imagen": "img/Elden_Ring.jpg"}, 
    {"id": 45, "compania": "Steam", "nombre": "Cyberpunk 2077", "precio_usd_referencial": 59.99, "descripcion": "RPG de acción ambientado en una ciudad futurista y llena de conflictos.", "imagen": "img/Cyberpunk_2077.jpg"}, 
    {"id": 46, "compania": "Steam", "nombre": "Stardew Valley", "precio_usd_referencial": 14.99, "descripcion": "Simulador de granja con cultivo, pesca, minería y relaciones con habitantes.", "imagen": "img/Stardew_Valley.jpg"}, 
    {"id": 47, "compania": "Steam", "nombre": "Hades", "precio_usd_referencial": 24.99, "descripcion": "Acción roguelike donde Zagreus intenta escapar del inframundo griego.", "imagen": "img/Hades.jpg"}, 
    {"id": 48, "compania": "Steam", "nombre": "Hogwarts Legacy", "precio_usd_referencial": 59.99, "descripcion": "RPG de acción ambientado en el mundo mágico de Harry Potter.", "imagen": "img/Hogwarts_Legacy.jpg"}, 
    {"id": 49, "compania": "Steam", "nombre": "Portal 2", "precio_usd_referencial": 9.99, "descripcion": "Juego de puzles en primera persona basado en portales y física.", "imagen": "img/Portal_2.jpg"}, 
    {"id": 50, "compania": "Steam", "nombre": "Red Dead Redemption 2", "precio_usd_referencial": 59.99, "descripcion": "Aventura de mundo abierto sobre una banda de forajidos en el oeste.", "imagen": "img/Red_Dead_Redemption_2.jpg"}];
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('gameSearch');
const platformFilter = document.getElementById('platformFilter');
const sortSelect = document.getElementById('sortPrice');
const resultsCount = document.getElementById('resultsCount');
const fallbackCover = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420"><rect width="640" height="420" fill="#19152b"/><circle cx="320" cy="170" r="76" fill="#8c5cff" opacity=".25"/><path d="M267 165h106a30 30 0 0 1 29 36l-10 42a17 17 0 0 1-28 8l-28-23h-32l-28 23a17 17 0 0 1-28-8l-10-42a30 30 0 0 1 29-36z" fill="none" stroke="#b7ff54" stroke-width="8"/><path d="M285 184v28m-14-14h28m55-8h1m15 16h1" stroke="#b7ff54" stroke-width="8" stroke-linecap="round"/><text x="320" y="315" fill="#d8caff" font-family="Arial,sans-serif" font-size="22" text-anchor="middle">G3BKeys</text><text x="320" y="345" fill="#9d96b2" font-family="Arial,sans-serif" font-size="15" text-anchor="middle">Imagen no disponible</text></svg>');
function renderGames() {
  const query = searchInput.value.trim().toLocaleLowerCase('es');
  const platform = platformFilter.value;
  let filtered = games.filter(game => {
    const matchesName = game.nombre.toLocaleLowerCase('es').includes(query) || game.descripcion.toLocaleLowerCase('es').includes(query);
    const matchesPlatform = platform === 'all' || game.compania === platform;
    return matchesName && matchesPlatform;
  });
  if (sortSelect.value === 'low') filtered.sort((a,b) => a.precio_usd_referencial - b.precio_usd_referencial);
  if (sortSelect.value === 'high') filtered.sort((a,b) => b.precio_usd_referencial - a.precio_usd_referencial);
  if (sortSelect.value === 'az') filtered.sort((a,b) => a.nombre.localeCompare(b.nombre, 'es'));
  resultsCount.innerHTML = 'Mostrando <strong>' + filtered.length + '</strong> de <strong>' + games.length + '</strong> videojuegos';
  if (!filtered.length) {
    grid.innerHTML = '<div class="catalog-empty"><i class="fas fa-gamepad fa-2x"></i><h3>No encontramos videojuegos</h3><p>Prueba con otro nombre o cambia los filtros.</p></div>';
    return;
  }
  grid.innerHTML = filtered.map(game => `
    <article class="product-card">
      <div class="product-cover"><img src="${game.imagen}" alt="Portada de ${escapeHTML(game.nombre)}" loading="lazy" onerror="this.onerror=null;this.src=fallbackCover"><span class="product-platform">${escapeHTML(game.compania)}</span></div>
      <div class="product-info"><h3>${escapeHTML(game.nombre)}</h3><p>${escapeHTML(game.descripcion)}</p>
        <div class="product-bottom"><div class="product-price">$${Number(game.precio_usd_referencial).toFixed(2)}<small>Precio referencial</small></div><a class="product-detail" href="contacto.html" aria-label="Consultar por ${escapeHTML(game.nombre)}">Consultar <i class="fas fa-arrow-right"></i></a></div>
      </div>
    </article>`).join('');
}
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
searchInput.addEventListener('input', renderGames);
platformFilter.addEventListener('change', renderGames);
sortSelect.addEventListener('change', renderGames);
document.getElementById('clearFilters').addEventListener('click', () => { searchInput.value=''; platformFilter.value='all'; sortSelect.value='default'; renderGames(); });
renderGames();