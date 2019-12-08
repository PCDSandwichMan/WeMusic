import { mount } from "@vue/test-utils";
import Home from "../../src/views/Home"; 

describe("All views render", () => {

  it("home view renders", () => {
    const wrapper = mount(Home);
    expect(wrapper.find('[data-test="homeView"]').text()).toMatch("WeMusic");
  });
});
