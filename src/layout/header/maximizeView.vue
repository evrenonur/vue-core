<template>
  <a class="text-dark" href="javascript:void(0)" @click="toggle_fullscreen()">
      <i data-feather="maximize-2">
          <vue-feather type="maximize-2"></vue-feather>
          </i>
  </a>
</template>
<script>
export default {
     methods: {
      toggle_fullscreen() {
        if (
          (document.fullScreenElement && document.fullScreenElement !== null) ||
          (!document.mozFullScreen && !document.webkitIsFullScreen)
        ) {
          if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(
              Element.ALLOW_KEYBOARD_INPUT
            );
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }
      },
    },
}
</script>