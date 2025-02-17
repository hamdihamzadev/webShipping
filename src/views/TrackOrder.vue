<template>
    <div class="container mx-auto p-6">
      <h2 class="text-2xl font-bold mb-4">Commandes en cours de livraison</h2>
      
      <div v-if="orders.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="order in filteredOrders" :key="order.id" class="bg-white shadow-lg rounded-lg p-4 border">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-semibold">Commande #{{ order.id }}</h3>
            <span class="bg-black -100 text-yellow-700 px-3 py-1 rounded text-sm">{{ order.status }}</span>
          </div>
          <p class="text-gray-500">Passée le : {{ formatDate(order.date) }}</p>
          
          <div class="mt-2">
            <p class="font-medium">Total : <span class="text-blue-600">{{ order.total }} €</span></p>
            <p class="text-sm text-gray-500">Mode de paiement : {{ order.paymentMethod }}</p>
          </div>
          
          <button class="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" @click="viewDetails(order.id)">
            Voir les détails
          </button>
        </div>
      </div>
      
      <div v-else class="text-center text-gray-500">Aucune commande en livraison.</div>
    </div>
  </template>
  
  <script>
  export default {
    name:'TrackOrder',
    data() {
      return {
        orders: [
          {
            id: "12345",
            date: "2024-02-05",
            status: "En cours de livraison",
            total: 49.99,
            paymentMethod: "Carte Bancaire"
          },
          {
            id: "67890",
            date: "2024-02-06",
            status: "Livrée",
            total: 29.99,
            paymentMethod: "PayPal"
          }
        ]
      };
    },
    computed: {
      filteredOrders() {
        return this.orders.filter(order => order.status === "En cours de livraison");
      }
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
      viewDetails(orderId) {
        console.log("Voir les détails de la commande", orderId);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  