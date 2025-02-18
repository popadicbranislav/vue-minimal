import { expect, it } from 'vitest';
import { render } from 'vitest-browser-vue';
import HomePage from '../../src/pages/index.vue';

it('renders home page', async () => {
  const wrapper = render(HomePage);

  await expect.element(wrapper.getByRole('heading')).toHaveTextContent('Welcome to the minimal Vue 3 Vite starter');
});
