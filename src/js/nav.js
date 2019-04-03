export default {
  toggleNav: () => {
    const navToggles = document.querySelectorAll('.js-navToggle');

    window.addEventListener("click", (evt) => {

      if (!evt.target.matches('.js-navToggle')) return;

      console.log(evt);

      const tgt = evt.target.data("target");
      console.log(tgt);


      // const menu =

    });
  }
};
