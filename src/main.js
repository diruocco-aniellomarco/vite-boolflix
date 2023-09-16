// importo il css di boostrap in versione mini
import "bootstrap/dist/css/bootstrap.min.css";
// importo il js di boostrap
import * as bootstrap from "bootstrap";

import { createApp } from "vue";

import App from "./App.vue";

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
library.add(starSolid, starRegular);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
