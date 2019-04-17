import {on} from "delegated-events";

export default {
  toggleNav: () => {
    const activeClass = "active";

    on("click", ".js-navToggle", (evt) => {
      const tgt = document.getElementById(evt.currentTarget.dataset["target"].replace("#", ""));

      if (!tgt.classList.contains(activeClass)) {
        tgt.classList.add(activeClass);
      } else {
        tgt.classList.remove(activeClass);
      }
    });
  }
};
