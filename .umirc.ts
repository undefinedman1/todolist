import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
      { path:"/", component:"@/components/Container.tsx"}  

  ],
  fastRefresh: {},
  dva:{
    immer:true
  }
});
