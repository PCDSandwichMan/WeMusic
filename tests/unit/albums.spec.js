import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
// Views
import Albums from "../../src/views/Albums";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Albums.vue", () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      getAllAlbums: jest.fn()
    };
    getters = {
      allAlbums() {
        return [];
      }
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it("albums view renders", () => {
    const wrapper = shallowMount(Albums, {
      store,
      localVue
    });
    expect(wrapper.exists()).toBe(true);
  });
});
