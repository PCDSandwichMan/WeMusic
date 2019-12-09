import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
// Views
import ArtistsAlbums from "../../src/views/ArtistsAlbums";
import albums from "../../src/store/modules/albums";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ArtistsAlbums.vue", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        albums
      }
    });
  });

  it("artists albums view renders", () => {
    const wrapper = shallowMount(ArtistsAlbums, {
      store,
      localVue,
      mocks: {
        $route: {
          params: {
            artistId: 1
          }
        }
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
