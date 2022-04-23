"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // gather all nav links
  const nav = document.getElementById('main-nav');
  const links = nav.getElementsByTagName('a');
  const activeArticlesContainer = document.getElementById('articles-active');
  const inactiveArticlesContainer = document.getElementById('articles-inactive');
  const activeArticles = activeArticlesContainer.getElementsByTagName('article');
  const inactiveArticles = inactiveArticlesContainer.getElementsByTagName('article');

  function retile(ev) {
    const link = ev.currentTarget;
    const tag = link.id;
    
    // move all active articles to inactive to clear the board
    // ... operator expands the nodes into a list of singles to satisfy the append signature
    inactiveArticlesContainer.append(...activeArticlesContainer.childNodes);

    // now move into active only those with active nav tag
    let inactiveArticlesList = Array.from(inactiveArticles); // avoid errors due to live collection
    for (let article of inactiveArticlesList) {
      if (article.dataset.tag === tag || article.dataset.tag === "masonry" ) {
        // if the article does match the click nav item
        // append to active
        // masonry is a bit of a hack to get two cols to appear correct in the 3 col css masonry layout
        activeArticlesContainer.append(article);
      }
    }
  }

  // interate nav to add behaviours
  for (let link of links) {
    if (link.id !== "home") {
      link.addEventListener('click', ev => {
        ev.preventDefault();
        retile(ev);
      });
    }
  }
});