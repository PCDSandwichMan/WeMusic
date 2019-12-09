import { shallowMount } from "@vue/test-utils";
import Home from "../../src/views/Home";

describe("Home.vue", () => {
  it("home view renders", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.exists()).toBe(true);
  });

  it("home redirects on call to action click", async () => {
    const $router = {
      push: jest.fn()
    }
    const wrapper = shallowMount(Home, {
      mocks: {
        $router
      }
    });
    wrapper.find("a").trigger("click");
    await wrapper.vm.$nextTick();
    expect($router.push).toHaveBeenCalled();
  });
});
