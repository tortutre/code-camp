function showCategory(category) {
    alert("Affichage des articles de la catégorie : " + category);
}

function showArticle(articleId) {
    alert("Vous avez cliqué sur l'article : " + articleId);
}


document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".article-image");

    images.forEach(function(image) {
        image.style.transition = "transform 0.3s ease";

        image.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });

        image.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
