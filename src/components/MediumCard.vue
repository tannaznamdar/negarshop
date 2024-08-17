<template>
    <article class="card-thumbnail">
        <figure class="card-img">
            <img alt="#" :src="thumbnail">
        </figure>
    </article>
</template>


<script>

export default {
    name: 'MediumCard',

    props: {
        thumbnail: {
            type: String,
            default: ''
        }
    },

    data() {
        return {

        }
    }
}
</script>


<style scoped lang="scss">
.card-thumbnail {
    height: 230px;
    width: 100%;

    @media (min-width:450px) and (max-width:820px) {
        height: 135px;
    }
}

.card-img {
    display: block;
    border-radius: 20px;
    width: auto;
    height: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;

    img {
        display: block;
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
    }
}
</style>