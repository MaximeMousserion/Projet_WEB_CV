document.addEventListener("DOMContentLoaded",()=>{
    const description = {
        "robot.jpg":"Ce projet consistait à créer un robot autonome capable de naviguer dans un environnement donné et d'effectuer des tâches spécifiques. Nous avons utilisé des capteurs pour percevoir l'environnement, et un système de contrôle pour prendre les décisions et commander les mouvements du robot. Le projet a permis de mettre en pratique les concepts de base de l'intelligence artificielle et de la robotique.",
        "html.png":"Ce projet consistait à créer une page web en utilisant HTML,CSS et JavaScript. Nous avons utilisé des balises HTML pour structurer le contenu de la page, et du CSS pour styliser les éléments, et du JavaScript pour ajouter de l'interactivité. Le projet a permis de mettre en pratique les concepts de base du développement web, tels que la mise en page, les couleurs, les polices, et les images.",
        "sql.png":"Ce projet consistait à créer une base de données pour une application de gestion de bibliothèque. Nous avons utilisé SQL pour créer les tables, définir les relations entre elles, et insérer des données. Le projet a permis de mettre en pratique les concepts de base de la gestion de bases de données, tels que les clés primaires, les clés étrangères, et les requêtes SQL.",
        "gi.jpg":"Ce projet consistait à créer un système de gestion de production pour une entreprise de fabrication. Nous avons utilisé des outils de génie industriel pour analyser les processus de production, et proposer des solutions pour améliorer l'efficacité. Le projet a permis de mettre en pratique les concepts de base du génie industriel, tels que l'analyse des processus, la gestion des stocks, et la planification de la production."
    };
    const zone = document.getElementById("description-text");
    document.addEventListener("click",(e)=>{
        const nom =e.target.getAttribute("src");
        zone.textContent=description[nom]||"Aucune descrition.";
    });
});