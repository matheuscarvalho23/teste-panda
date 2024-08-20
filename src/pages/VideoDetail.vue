<template>
  <div class="video">
    <Header />

    <div class="video__container">
      <div class="video__content">
        <h2>{{ videoDetail.title }}</h2>
        <video-player :iframe-src="videoDetail.video_player"/>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
import pandaApi from '@/services/pandaApi.js'
import Header from '@/components/Header.vue'

export default {
  name: 'video-page',
  components: { Header, VideoPlayer },

  data () {
    return {
      videoDetail: {},
      videoId: ''
    }
  },

  mounted () {
    const { id } = this.$route.params
    this.getVideoDetail(id)
  },

  methods: {
    async getVideoDetail (id) {
      try {
        const response = await pandaApi.getVideoDetail(id)
        this.videoDetail = response.data
      } catch (error) {
        console.log(error);
        this.$toat.error('Ocorreu um erro ao encontrar o vídeo.')
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.video {
  &__container {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  &__content {
    width: 960px;
  }
}
</style>