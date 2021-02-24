export default {
  name: 'App',
  methods: {
    goHome () {
      this.$router.push({ name: 'Home' })
    },
    goCustomers () {
      this.$router.push({ name: 'Customers' })
    },
    goSuppliers () {
      this.$router.push({ name: 'Suppliers' })
    },
    goWarehouse () {
      this.$router.push({ name: 'Warehouse' })
    },
    goFood () {
      this.$router.push({ name: 'Food' })
    },
    goFrozenFood () {
      this.$router.push({ name: 'FrozenFood' })
    }
  }
}
