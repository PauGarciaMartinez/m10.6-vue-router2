<!-- TEMPLATE -->
<template>
  <div id="nav">
    <button @click="goHome" class="dropbtn">Home</button>
    <button @click="goCustomers" class="dropbtn">Customers</button>
    <button @click="goSuppliers" class="dropbtn">Suppliers</button>
    <button @click="goWarehouse" class="dropbtn">Warehouse</button>
    <div class="dropdown">
      <button class="dropbtn">Store</button>
      <div class="dropdown-content">
        <button @click="goFood" class="dropbtn">Food</button>
        <button @click="goFrozenFood" class="dropbtn">Frozen Food</button>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/app.js"></script>

<!-- STYLE -->
<style src="./styles/css/app.css"></style>
