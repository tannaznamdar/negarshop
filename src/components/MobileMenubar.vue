<template>
    <div class="responsive-footer-bar">
        <nav>
            <router-link class="nav-item" :to='{ name: "homePageRoute" }'>
                <font-awesome-icon class="icon" icon="home" />
            </router-link>

            <router-link class="nav-item" :to='{ name: "" }'>
                <font-awesome-icon class="icon" icon="magnifying-glass" />
            </router-link>

            <router-link class="nav-item" :to='{ name: "" }'>
                <font-awesome-icon class="icon" icon="bars" />
            </router-link>

            <router-link class="nav-item" :to='{ name: "cartPageRoute" }'>
                <font-awesome-icon icon="cart-shopping" size="l" />
            </router-link>

            <router-link class="nav-item" :to='{ name: "myAccountPageRoute" }'>
                <font-awesome-icon icon="user" />
            </router-link>
        </nav>
    </div>
</template>


<script>


export default {
    name: 'MobileMenubar',

    data() {
        return {

        }
    }
}
</script>


<style scoped lang="scss">

.responsive-footer-bar{
    display: none;
    
    @media (max-width:449px) {
        display: block;
    }
}

nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
    width: 95%;
    height: 60px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px;
}

.nav-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #757575;
    padding: 10px 25px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 100;
}

.nav-item:focus {
    text-decoration: none;
    color: #fff;
    background-color: #651fff;
    transition: .2s;
    height: 40px;
    border: none;
    outline: none;
}
</style>
