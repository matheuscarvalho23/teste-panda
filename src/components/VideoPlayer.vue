<template>
  <div class="player">
    <iframe
      :id="iframeId"
      :src="iframeSrc"
      class="player__video"
    ></iframe>

    <p>{{ description.length ? description : 'Sem descrição' }}</p>
  </div>
</template>

<script>
export default {
  name: 'video-player',
  props: {
    iframeSrc: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: true,
    }
  },
  data() {
    return {
      iframeId: 'panda-player',
      player: null,
      playerReady: false,
      currentTime: 0,
      status: 'paused'
    };
  },
  mounted() {
    this.loadPandaPlayer();
  },
  methods: {
    loadPandaPlayer() {
      const script = document.createElement('script');
      script.src = 'https://player.pandavideo.com.br/api.v2.js';
      script.async = true;
      script.onload = () => {
        window.pandascripttag = window.pandascripttag || [];
        window.pandascripttag.push(() => {
          this.player = new window.PandaPlayer(this.iframeId, {
            onReady: () => {
              console.log('Player is ready');
              this.playerReady = true;
              this.updateCurrentTime();
              this.setupEventListeners();
            },
            onError: (event) => {
              console.error('Player onError', event);
            }
          });
        });
      };
      document.body.appendChild(script);
    },
    setupEventListeners() {
      setInterval(() => {
        if (this.player) {
          this.currentTime = this.player.getCurrentTime().toFixed(2);
        }
      }, 1000);

      if (this.player) {
        this.player.onEvent(({ message }) => {
          if (message === 'panda_pause') {
            this.status = 'paused';
          } else if (message === 'panda_play') {
            this.status = 'playing';
          }
        });
      }
    },
    play() {
      if (this.player) this.player.play();
    },
    pause() {
      if (this.player) this.player.pause();
    },
    forward() {
      if (this.player) this.player.seek(this.player.getCurrentTime() + 5);
    },
    updateCurrentTime() {
      if (this.player) {
        this.currentTime = this.player.getCurrentTime().toFixed(2);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.player {
  &__video {
    width: 100%;
    height: 480px;
    border: 0;
  }
}
</style>
