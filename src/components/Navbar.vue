<template>
  <nav>
    <router-link class="logo" to="/">
        <h1>Store</h1>
    </router-link>
    <div class="search">
        <input type="text" placeholder="Найти на Store">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#fff"><path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z"/></svg>
    </div>
    <router-link class="account" to="/Account">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>
        <p>Аккаунт</p>
    </router-link>
    <router-link class="favourites" to="/Favourites">
        <svg class="margin-svg-heart" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
        <p>Избранное</p>
    </router-link>
    <router-link class="cart" to="/Cart">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z"/></svg>
        <p>Корзина</p>
    </router-link> 
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    width: 100%;
    height: 70px;
    background-color: #25BA7B;
    padding: 10px;
    box-shadow: 0 1px 20px #0000007e;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    z-index: 1000;
}

nav p {
    font-weight: 600;
    font-size: 14px;
}

h1 {
    color: #ddd;
    text-shadow: 20px 0 #000, 0 1px #000;
    font-family: "Permanent Marker", serif;
    font-size: 9rem;
}

.search {
    display: flex;
    border: 1px solid #00000056;
    border-radius: 4px;
}

.search input {
    width: 400px;
    height: 40px;
    border: 0;
    outline: none;
    border-radius: 4px;
    padding: 0 10px;
}

.search svg {
    align-self: center;
    padding-inline: 15px;
    background-color: #22AAA0;
    border-radius: 0 4px 4px 0;
}

.search svg:hover {
    cursor: pointer;
    background-color: #0e4642;
}

a {
    text-decoration: none;
    color: #000f38;
    transition: transform 500ms ease;
}

a:hover:not(.logo) {
    transform: scale(1.1) translateY(5px);
}

a svg {
    margin-inline: 12px;
}

.favourites svg {
    margin-inline: 20px;
}
</style>