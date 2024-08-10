<template>
    <article class="product-card">
        <router-link>
            <div class="product-card-thumbnail">
                <figure class="card-img">
                    <img alt="#" :src="thumbnail">
                </figure>
            </div>

            <div class="product-card-content">
                <h4 class="card-title">{{ title }}</h4>
                <span class="card-subtitle">{{ subtitle }}</span>
                <span class="card-subtitle"> تومان </span>
            </div>
        </router-link>
    </article>
</template>


<script>


export default {
    name: 'DiscountedProductsCard',

    props: {
        link: {
            type: String,
            default: 'homePageRoute'
        },
        thumbnail: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        subtitle: {
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
.product-card {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    border-radius: 20px;
    padding: 15px;
    margin-left: 15px;
    height: 100%;

    a {
        text-decoration: none;
    }
}

.card-title {
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    letter-spacing: -0.3px;
    margin-bottom: 0;
    font-weight: 500;
    color: #666;
    line-height: 1.75;
    margin-bottom: 15px;

    &:is(:hover, :focus) {
        color: #CA1B1B;
    }
}

.card-subtitle {
    margin-top: 5px;
    font-size: 15px;
    font-weight: 600;
    color: #666;
    transition: 0.2s;
    white-space: nowrap;
    color: #CA1B1B;
}

.card-img {
    display: block;
    border-radius: 20px;
    border: none;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;


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