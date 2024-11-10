<template>
   <main class="form-signin">
        <form>
          <img class="mb-4" src="https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-symbol.png" alt="" width="180" height="100">
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
      
          <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
</template>
<script>
export default {
  data() {
    return {
      isLoggedIn: false, // ตัวแปรสำหรับตรวจสอบสถานะการเข้าสู่ระบบ
    };
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn; // สลับสถานะการเข้าสู่ระบบ
    },
  },
};
</script>

<style>
        .form-signin{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            margin: auto;
            padding: 150px;
        }

        .form-control {
            width: 100%; /* ให้ช่อง input กว้างเต็มที่ของฟอร์ม */
            max-width: 600px; /* กำหนดขนาดสูงสุดที่ต้องการ */
        }

        form {
            width: 60%; /* ให้ฟอร์มกว้างเต็มพื้นที่ */
            max-width: 300px; /* ขนาดสูงสุดของฟอร์ม */
        }

        .h3{
          text-align: center;
          padding: 10px;
        }

        .mb-4{
          display: block;
          margin-left: auto;
          margin-right: auto;

          
        }
    </style>