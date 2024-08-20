<template>
  <div class="dashboard">
    <Header />

    <div class="dashboard__search">
      <form-input
        v-model="searchVideo"
        placeholder="Buscar vídeos"
      />
    </div>

    <div class="dashboard__container">
      <div class="dashboard__content">
        <video-card
          v-for="(item, index) in filteredVideos"
          :key="index"
          :video-info="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard.vue'
import FormInput from '@/components/FormInput.vue'
import pandaApi from '@/services/pandaApi.js'
import Header from '@/components/Header.vue'

export default {
  name: 'dashboard-page',
  components: { Header, VideoCard, FormInput },

  computed: {
    filteredVideos () {
      if (!this.searchVideo.length) {
        return this.videos
      }

      return this.videos.filter(item => {
        return (
          item.title.toLowerCase().includes(this.searchVideo) ||
          item.description.toLowerCase().includes(this.searchVideo)
        );
      });
    }
  },

  data () {
    return {
      videos: [],
      searchVideo: ''
    }
  },

  mounted () {
    this.getVideos()
  },

  methods: {
    async getVideos () {
      try {
        const response = await pandaApi.getVideos()
        this.videos = response.data.videos
      } catch (error) {
        console.log(error);
        this.$toast.error('Ocorreu um erro ao buscar os vídeos.')
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &__search {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__container {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  &__content {
    width: 960px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .dashboard {
    &__content {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}

@media (max-width: 480px) {
  .dashboard {
    &__content {
      grid-template-columns: repeat(1, minmax(200px, 1fr));
    }
  }
}

</style>