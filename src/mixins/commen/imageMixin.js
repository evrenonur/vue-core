
const imageMixin = {
  methods: {
      getImgUrl(path) {
        return require('@/assets/images/'+path);
      },
  },
    
}
  
  export default imageMixin