<!-- TEMPLATE -->
<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Customers' }">Customers</router-link>
    <router-link :to="{ name: 'Suppliers' }">Suppliers</router-link>
    <router-link :to="{ name: 'Warehouse' }">Warehouse</router-link>
    <div class="dropdown">
      <button class="dropbtn">Store</button>
      <div class="dropdown-content">
        <router-link :to="{ name: 'Food' }">Food</router-link>
        <router-link :to="{ name: 'FrozenFood' }">Frozen Food</router-link>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<!-- STYLE -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.dropdown {
  display: flex;
}

.dropbtn {
  font-weight: bold;
  color: #2c3e50;
  border: none;
  outline: none;
  background-color: rgb(255, 255, 255);
  font-size: 1rem;
  font-weight: bold;
  margin: 8px;
  padding: 11.2px;
  font-family: inherit;
}

.dropbtn:hover {
  color: #42b983;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-left: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0.7rem;
  text-decoration: none;
  margin: 0.5rem;
  border-radius: 0.2rem;
}

#nav a:hover {
  color: #42b983;
}

#nav a.router-link-exact-active {
  background-color: rgb(103, 177, 150);
  color: white;
}
</style>
