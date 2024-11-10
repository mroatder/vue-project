<template>
    <div class="container vh-100 col-md-4">
      <br>
      <h2>เพิ่มข้อมูลสินค้า</h2>
      <form @submit.prevent="addProduct">
        <div class="text-start">
          <label for="name">ชื่อสินค้า:</label>
          <input v-model="newProduct.name" id="name" ref="nameInput" class="form-control" required />
        </div>
        <div class="text-start">
          <label for="detail">รายละเอียดสินค้า:</label>
          <input v-model="newProduct.detail" id="detail" ref="nameInput" class="form-control" required />
        </div>
        <div class="text-start">
          <label for="price">ราคา:</label>
          <input type="number" v-model="newProduct.price" id="price" class="form-control"  required />
        </div>
        <div class="text-start">
          <label for="amount">จำนวน:</label>
          <input type="number" v-model="newProduct.amount" id="amount" class="form-control"  required />
        </div>
        <button type="submit" class="btn btn-primary my-4">เพิ่มสินค้า</button>
      </form>
  
      <!-- ใช้ v-if เพื่อตรวจสอบว่ามีสินค้าใน products หรือไม่ -->
      <h2 v-if="products.length > 0">รายการสินค้า</h2>
      <table v-if="products.length > 0">
        <thead>
          <tr>
            <th>ชื่อสินค้า</th>
            <th>รายละเอียดสินค้า</th> 
            <th>ราคา</th>            
            <th>จำนวน</th>                     
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.detail }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const products = ref([]); // ตัวแปรเก็บรายการสินค้า
      const newProduct = ref({ name: '',detail: '', price: 0, amount:0 }); // ตัวแปรเก็บข้อมูลสินค้าใหม่
      const nameInput = ref(null); // ใช้สำหรับอ้างถึงช่องกรอกชื่อสินค้าเพื่อจัดการโฟกัส
  
      const addProduct = () => {
        if (newProduct.value.name && newProduct.value.detail && newProduct.value.price && newProduct.value.amount) {
          products.value.push({ ...newProduct.value }); // เพิ่มสินค้าใหม่ในรายการสินค้า
          newProduct.value = { name: '', detail: '', price: 0, amount: 0}; // ล้างข้อมูลฟอร์มหลังเพิ่มเสร็จ
          nameInput.value.focus(); // โฟกัสที่ช่องกรอกชื่อสินค้า
        }
      };
  
      // จัดการโฟกัสที่ช่องกรอกชื่อสินค้าเมื่อติดตั้งองค์ประกอบ
      onMounted(() => {
        nameInput.value.focus();
      });
  
      return {
        products,
        newProduct,
        addProduct,
        nameInput,
      };
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  </style>
  