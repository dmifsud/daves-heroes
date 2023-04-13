import { RouteRecordRaw, RouterHistory, createRouter } from 'vue-router';
import HomePage from './homepage/HomePage.vue';
import CharactersPage from './characters/CharactersPage.vue';
import CharacterPage from './character/CharacterPage.vue';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: HomePage,
  },
  { path: '/characters/', component: CharactersPage },
  { path: '/characters/:id', component: CharacterPage },
  //   { path: '/favorites/', component: FavoritesPage },
];

export default function (history: RouterHistory) {
  return createRouter({
    history,
    routes,
  });
}
