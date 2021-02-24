<!-- TEMPLATE -->
<template>
  <h1>Customers</h1>

  <div class="customers-wrapper">
    <div class="customers-container" v-for="customer in customersList" :key="customer.id">
      <p class="customer-name">{{ customer.name }}</p>
      <p class="customer-description">{{ customer.description }}</p>
      <router-link :to="{ name: 'CustomerDetails', params: { name: customer.name }}" class="router-link">
        <button class="customer-btn">More</button>
      </router-link>
    </div>
  </div>

</template>

<!-- TEMPLATE -->
<script type="text/javascript" src="./../scripts/customers.js"></script>

<!-- TEMPLATE -->
<style src="./../styles/css/customers.css"></style>
