## This is a vue starter template for slate, it is based on Shopify's starter template


Thanks to [@dan-gamble](https://github.com/dan-gamble) for helping with the slate configurations

This project is based off [shopify/skeleton-theme](https://github.com/shopify/skeleton-theme), checkout Slate for more information.

get started
```
$ yarn create slate-theme my-new-theme liron-navon/slate-vue-starter
```


### How to work with slate for Shopify:

- rename .env-sample to .env and setup your development store config.

- run: npm start 
- slate will open your localhost, just ignore that, and go to your development store. 
- In the development store you should have your theme loaded
- Changes will hot reload in the dev store.

### Using vue in shopify

- Do notice that this is not meant to be an SPA, for that you can use storefront, vue here is purely to replace JQuery for logic operations and animations. 

#### How to pass store data to my vue components?

Look at this snippet, this div element is going to be where out vue component will be rendered,
You can pass `prop-<propName>` to it and fill in the data, in this example we will have a prop named `shopName` and it will receive the name of the shop

```html
<div 
     prop-shopName='{{shop.name}}' 
     id="vue-theme-component"> 
     a vue component is rendered here 
</div>
```

#### How to mount my components

please use the helper function I made for it, it allows you to pass parameters from the liquid template to vue:

```js
import ThemeComponent from '../../vue/layout/theme.vue';
import {mountVue} from '../../vue/mountVue';

// the component is rendered to replace the selected html element
mountVue(ThemeComponent, '#vue-theme-component');
```

#### changes from the shopify barebone theme

Do notice I tried to change as little as possible to allow this to be updated when shopify will change the starter template,
The only files changed are:
1. scripts/layout/theme.js : added a function to load the vue component
2. layout/theme.liquid : added an anchor for vue to load on to
4. created /vue directory which contain all of the vue logic.
