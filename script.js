// Function to show content based on category selection
function showCategory(category) {
    const contentElement = document.getElementById("content");

    if (category === "prochaines sorties") {  // Category for upcoming game releases
        fetchUpcomingGames();
    }
    else if (category === "esport") {  // Category for e-sport news
        fetchEsportNews();
    }
    else if (category === "tech") {  // Category for new technology
        fetchNewTech();
    }
    else if (category === "creations") {  // Category for user creations (fan art, indie games)
        fetchUserCreations();
    }
    else {
        contentElement.innerHTML = `<p>Contenu pour ${category}</p>`;
    }
}

// Fetch the upcoming games
function fetchUpcomingGames() {
    const apiUrl = 'https://api.rawg.io/api/games?ordering=-released&page_size=5';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de récupération des données");
            }
            return response.json();
        })
        .then(data => {
            const games = data.results;
            let gamesHtml = '';

            games.forEach(game => {
                gamesHtml += `
                    <div class="game-item">
                        <h3><a href="https://rawg.io/games/${game.slug}" target="_blank">${game.name}</a></h3>
                        <p>Sortie prévue: ${game.released}</p>
                        <p>${game.description_raw ? game.description_raw.slice(0, 200) + "..." : "Pas de description"}</p>
                        <img src="${game.background_image}" alt="${game.name}">
                    </div>
                `;
            });

            document.getElementById("content").innerHTML = gamesHtml;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des jeux à venir:', error);
            document.getElementById("content").innerHTML = `<p>Erreur de récupération des données.</p>`;
        });
}

// Fetch e-sport news
function fetchEsportNews() {
    const apiUrl = 'https://newsapi.org/v2/everything?q=esports&apiKey=your_newsapi_key'; // Replace with your own NewsAPI key

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de récupération des données");
            }
            return response.json();
        })
        .then(data => {
            const news = data.articles;
            let newsHtml = '';

            news.forEach(article => {
                newsHtml += `
                    <div class="news-item">
                        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                        <p>${article.description}</p>
                        <img src="${article.urlToImage}" alt="${article.title}">
                    </div>
                `;
            });

            document.getElementById("content").innerHTML = newsHtml;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des actualités e-sport:', error);
            document.getElementById("content").innerHTML = `<p>Erreur de récupération des données.</p>`;
        });
}

// Fetch new technology news
function fetchNewTech() {
    const apiUrl = 'https://newsapi.org/v2/everything?q=technology&apiKey=your_newsapi_key'; // Replace with your own NewsAPI key

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de récupération des données");
            }
            return response.json();
        })
        .then(data => {
            const news = data.articles;
            let newsHtml = '';

            news.forEach(article => {
                newsHtml += `
                    <div class="news-item">
                        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                        <p>${article.description}</p>
                        <img src="${article.urlToImage}" alt="${article.title}">
                    </div>
                `;
            });

            document.getElementById("content").innerHTML = newsHtml;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des actualités tech:', error);
            document.getElementById("content").innerHTML = `<p>Erreur de récupération des données.</p>`;
        });
}

// Fetch user creations (fan art, indie games, etc.)
function fetchUserCreations() {
    // For the sake of this example, let's simulate fetching user creations from a placeholder API
    const exampleCreations = [
        { name: "Fan Art 1", description: "Un incroyable artwork basé sur un jeu populaire.", imageUrl: "https://via.placeholder.com/150" },
        { name: "Indie Game Concept", description: "Un jeu indépendant qui mélange aventure et stratégie.", imageUrl: "https://via.placeholder.com/150" },
        { name: "Cosplay 1", description: "Un cosplay magnifique d'un personnage de jeu vidéo.", imageUrl: "https://via.placeholder.com/150" }
    ];

    let creationsHtml = '';
    exampleCreations.forEach(creation => {
        creationsHtml += `
            <div class="creation-item">
                <h3>${creation.name}</h3>
                <p>${creation.description}</p>
                <img src="${creation.imageUrl}" alt="${creation.name}">
            </div>
        `;
    });

    document.getElementById("content").innerHTML = creationsHtml;
}

// Function to handle when an article is clicked
function showArticle(articleId) {
    alert('Article ' + articleId + ' cliqué');
}