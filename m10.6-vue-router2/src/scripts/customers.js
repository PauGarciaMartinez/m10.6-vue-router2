export default {
  name: 'Customers',
  props: ['name'],
  data () {
    return {
      customersList: [
        { id: 1, name: 'Lorem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iste quam accusantium ratione voluptatem quas eos quo aliquam eaque deleniti!' },
        { id: 2, name: 'Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iste quam accusantium ratione voluptatem quas eos quo aliquam eaque deleniti!' },
        { id: 3, name: 'Dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iste quam accusantium ratione voluptatem quas eos quo aliquam eaque deleniti!' }
      ]
    }
  },
  methods: {
    goCustomerDetails (customerName) {
      this.$router.push(
        {
          name: 'CustomerDetails',
          params: { name: customerName }
        })
    }
  }
}
