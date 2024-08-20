<template>
  <div class="card">
    <section class="card__body">
      <img :src="videoInfo.thumbnail" :alt="videoInfo.title" />
      <footer class="card__footer">
        <p>{{ videoInfo.title }}</p>
        <h6>{{ videoInfo.description.length ? videoInfo.description : 'Sem descrição' }}</h6>
        <router-link :to="`video/${videoInfo.id}`" class="link">
          Ver Detalhes
        </router-link>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: 'video-card',
  props: {
    videoInfo: {
      type: Object
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
	z-index: 1;
	cursor: pointer;
	display: inline-block;
	position: static;
	text-align: left;
	width: 100%;
	height: 300px;
	border-radius: 4px;
	background: $secondary-color;
	box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.10),
		0px 1px 20px 0px rgba(0, 0, 0, 0.10);
	transform-origin: center;
	transition: transform, width, height, border-radius, top, left;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select:none;
	user-select:none;
	-o-user-select:none;

  &__body {
    img {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      display: table-cell;
      width: 100%;
      background-repeat: no-repeat;
    }
  }

  &__footer {
    padding: 10px;

    .link {
      text-decoration: none;
      color: $primary-color-light;
    }

    p {
      width: 190px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

@media (max-width: 768px) {
  .card {
    max-width: 250px;
    height: 330px;
  }
}

@media (max-width: 480px) {
  .card {
    max-width: 100%;
    height: 430px;
  }
}
</style>