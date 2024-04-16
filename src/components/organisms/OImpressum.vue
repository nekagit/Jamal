<script setup lang="ts">
import GlassMorphism from '../molekules/GlassMorphism.vue';
</script>

<template>

  <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src="https://64.media.tumblr.com/c52608d4313c3f351d158f6ae496fa21/tumblr_o604ztZgoC1twq7rlo1_500.jpg">
      </div>
      <div class="content">
        <div class="contentBx">
          <h3>Someone Famous<br><span>Creative Designer</span></h3>
        </div>

        <ul class="sci">
          <li style="--i:1"><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li style="--i:2"><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li style="--i:3"><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>

      </div>
    </div>

    <div class="card">
      <div class="imgBx">
        <img src="https://64.media.tumblr.com/395eb0a4fbfd1c0479840301c945b865/1a3901cd78bc2cd8-d9/s500x750/66a46fcb7046257acfc2c40fc7c4910de8e5f60a.png">
      </div>
      <div class="content">
        <div class="contentBx">
          <h3>Someone Famous<br><span>Creative Designer</span></h3>
        </div>

        <ul class="sci">
          <li style="--i:1"><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li style="--i:2"><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li style="--i:3"><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>

      </div>
    </div>

    <div class="card">
      <div class="imgBx">
        <img src="https://64.media.tumblr.com/a2b2b4321a08908a42af3a8956f03852/7130d0e12213d6ab-25/s500x750/fee178077b277f7a77a76a42d0929110fe2be1de.jpg">
      </div>
      <div class="content">
        <div class="contentBx">
          <h3>Someone Famous<br><span>Creative Designer</span></h3>
        </div>

        <ul class="sci">
          <li style="--i:1"><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li style="--i:2"><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li style="--i:3"><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>

      </div>
    </div>

  </div>
  <div>
    <GlassMorphism />
  </div>

</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200,300,400,500,600,700,800,900&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #e0f7fa;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;
}
.container .card {
  position: relative;
  width: 200px;
  height: 300px;
  margin: 20px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .card .content{
  position: absolute;
  bottom: -160px;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  flex-direction: column;
  backdrop-filter: blur(15px);
  box-shadow: 0 -10px 10px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  transition: bottom 0.5s;
  transition-delay: 0.8s;
}
.container .card:hover .content{
  bottom: 0px;
  transition-delay: 0s;
}
.container .card .content .contentBx h3{
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.1em;
  text-align: center;
  margin: 5px 0 15px;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(-20px);
  transition-delay: 0.6s;
}
.container .card:hover .content .contentBx h3{
  opacity: 1;
  transform: translateY(0px);
}
.container .card .content .contentBx h3 span{
  font-size: 9px;
  font-weight: 300;
  text-transform: initial;
}
.container .card .content .sci{
  position: relative;
  bottom: 10px;
  display: flex;
}
.container .card .content .sci li{
  list-style: none;
  margin:  10px;
  transform: translateY(40px);
  transition: 0.5s;
  opacity: 0;
  transition-delay: calc(0.2s * var(--i));
}
.container .card:hover .content .sci li{
  transform: translateY(0px);
  opacity: 1;
}

.container .card .content .sci li a{
  color: #fff;
}
</style>