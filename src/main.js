import { createApp } from "vue";
import "./styles/style.scss";
import App from "./App.vue";

// ROUTER
import { router } from "./router.js";

// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faSearch);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
