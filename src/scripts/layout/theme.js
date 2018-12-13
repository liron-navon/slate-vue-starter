import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";
import {mountVue} from "../../vue/mountVue";
import ExampleComponent from "../../vue/components/ExampleComponent.vue";

mountVue('#theme-vue-wrapper', ExampleComponent);
