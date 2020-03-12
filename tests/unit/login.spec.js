import { mount, shallowMount } from '@vue/test-utils';
import Login from '../../src/views/Login';


// Describe Login
describe('Login.vue', () => {
  const wrapper = shallowMount(Login);

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Existe campo email', () => {
    expect(wrapper.contains('#email')).toBe(true);
  })

  it('Existe campo password', () => {
    expect(wrapper.contains('#password')).toBe(true);
  })

  it('Existe el boton entrar', () => {
    expect(wrapper.contains('#submit')).toBe(true);    
  })

  it('click boton y loguear', () => {    
    wrapper.find('button').trigger("click");
    expect(wrapper.vm.loggedIn).toBe(true);
  })

});