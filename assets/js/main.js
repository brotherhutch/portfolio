"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // gather all nav links
  const nav = document.getElementById('main-nav');
  const links = nav.getElementsByTagName('a');

  function retile(ev) {
    const link = ev.currentTarget;
    const tag = link.id;

    console.log(tag);

  }

  // interate nav to add behaviours
  for (let link of links) {
    link.addEventListener('click', ev => {
      ev.preventDefault();
      retile(ev);
    });
  }
});