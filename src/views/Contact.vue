<template >
   <div id="menu-container"></div>
      <!-- form -->
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Un estadio de leyenda</h1>
            <p class="col-lg-10 fs-4">Since 1947, this stadium has witnessed the dreams and aspirations of all Real Madrid fans come true.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0044412699003!2d-3.6909086239871822!3d40.45303867143374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2z4Liq4LiZ4Liy4Lih4LiB4Li14Lis4Liy4LiL4Liy4LiZ4LmA4LiV4Li14Lii4LmC4LiBIOC5gOC4muC4o-C5jOC4meC4suC5gOC4muC4pw!5e0!3m2!1sth!2sth!4v1726384347283!5m2!1sth!2sth" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="col-md-10 mx-auto col-lg-5 mx-auto">
            <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary d-flex flex-column align-items-center">
                <div class="form-floating mb-3 w-100 text-center">
                    <h1>Feedback</h1>
                    <select class="form-select form-select-lg py-2" aria-label="Default select example">
                      <option selected>Please send feedback</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  
              <div class="form-floating mb-3 w-100">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3 w-100">
                <textarea class="form-control" id="floatingInput" mt-5></textarea>
                <label for="floatingPassword">More details</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div id="footer-container"></div> 
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>