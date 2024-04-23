<template>
  <section class="section section-components bg-white" id="section-components">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <h2 class="display-3 mb-3" data-aos="fade-right" id="About-Team">
            {{ $t("About") }}
          </h2>
          <p class="lead" data-aos="fade-right">
            {{ $t("AboutContext") }}
          </p>

          <div class="col-lg-12 mt-md mb-lg" data-aos="zoom-in">
            <div class="row row-grid">
              <div class="col-sm-12">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Shi-Cho-Cha.jpg'"
                    class="rounded-circle img-center p-2"
                    alt="Shi-Cho-Cha"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault text-uppercase mt-3">Shi-Cho Cha</h4>
                  <p class="mt-3">查士朝</p>
                  <p class="description mt-3">Director of TWISC@NTUST</p>
                  <div>
                    <badge type="primary" rounded>CKA</badge>
                    <badge type="primary" rounded>CKAD</badge>
                    <badge type="primary" rounded>CKS</badge>
                    <badge type="success" rounded>ISO 27001</badge>
                  </div>
                  <hr />
                  <a
                    href="https://www.cs.ntust.edu.tw/p/405-1102-105978,c11238.php?Lang=zh-tw"
                    >{{ $t("ShowMore") }}</a
                  >
                </card>
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Sih-Cing-Syu.jpg'"
                    alt="Sih-Cing-Syu"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault text-uppercase mt-3">Sih-Cing Syu</h4>
                  <p class="mt-3">許絲晴</p>
                  <p class="description mt-3">Associate Researcher of TWISC@NTUST</p>
                  <div>
                    <badge type="success" rounded>CKA</badge>
                  </div>
                </card>
              </div>
              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Zhuo-Xun-Li.jpg'"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault text-uppercase mt-3">Zhuo Xun Li</h4>
                  <p class="mt-3">李卓勳</p>
                  <p class="description mt-3">Assistant Researcher of TWISC@NTUST</p>
                  <div>
                    <badge type="success" rounded>CKA</badge>
                  </div>
                </card>
              </div>
              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Chun-Yung-Chang.jpg'"
                    alt="Chun-Yung-Chang"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Chun-Yung Chang</h4>
                  <p class="mt-3">張詠淳</p>
                  <p class="description mt-3">Assistant Researcher of TWISC@NTUST</p>
                   <div>
                        <badge type="success" rounded>CKA</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/CHEN-XUAN-XU.png'"
                    alt="CHEN-XUAN-XU"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">CHEN-XUAN XU</h4>
                  <p class="mt-3">許宸瑄</p>
                  <p class="description mt-3">Back-end development of TWISC@NTUST</p>
                   <div>
                        <badge type="primary" rounded>Back-end</badge>
                        <badge type="success" rounded>Java</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/simple.jpg'"
                    alt=""
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Cara Chuang</h4>
                  <p class="mt-3">莊依庭</p>
                  <p class="description mt-3">Back-end development of TWISC@NTUST</p>
                   <div>
                        <badge type="success" rounded>CI/CD</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Andrew-Li.jpg'"
                    alt="Andrew-Li"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Andrew Li</h4>
                  <p class="mt-3">利文韡</p>
                  <p class="description mt-3">Ph.D. candidates at PRLab@NTUST</p>
                  <div>
                        <badge type="success" rounded>CKA</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Zhang-Yi-Zhen.jpg'"
                    alt="Zhang-Yi-Zhen"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Yi-Zhang Zhang</h4>
                  <p class="mt-3">張宜楨</p>
                  <p class="description mt-3">Master's students at PRLab@NTUST</p>
                   <div>
                      <badge type="primary" rounded>Front-end</badge>
                      <badge type="success" rounded>Vue</badge>
                      <badge type="success" rounded>ISO 27001</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Shannon-Hung.jpg'"
                    alt="Shannon-Hung"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Shannon Hung</h4>
                  <p class="mt-3">洪薏璇</p>
                  <p class="description mt-3">Master's students at PRLab@NTUST</p>
                   <div>
                      <badge type="primary" rounded>DevSecOps</badge>
                      <badge type="success" rounded>CKA</badge>
                      <badge type="success" rounded>ISO 27001</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Josh-Ji.jpg'"
                    alt="Josh-Ji"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Josh Ji</h4>
                  <p class="mt-3">紀彥興</p>
                  <p class="description mt-3">Master's students at PRLab@NTUST</p>
                   <div>
                      <badge type="primary" rounded>DevSecOps</badge>
                      <badge type="success" rounded>ISO 27001</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Shuhan-Liu.jpg'"
                    alt="Shuhan-Liu"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Shuhan Liu</h4>
                  <p class="mt-3">劉紓涵</p>
                  <p class="description mt-3">Master's students at PRLab@NTUST</p>
                   <div>
                        <badge type="success" rounded>ISG</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Jason-Chen.jpg'"
                    alt="Jason-Chen"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Jason Chen</h4>
                  <p class="mt-3">陳冠瑜</p>
                  <p class="description mt-3">Master's students at PRLab@NTUST</p>
                   <div>
                        <badge type="success" rounded>IoT</badge>
                        <badge type="success" rounded>IoV</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Eric.jpg'"
                    alt="Eric"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Eric</h4>
                  <p class="mt-3">鄭亦宸</p>
                  <p class="description mt-3">Master's students at PRLab@NTUST</p>
                   <div>
                        <badge type="success" rounded>IoV</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Leo-Tsai.jpg'"
                    alt="Leo-Tsai"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Leo Tsai</h4>
                  <p class="mt-3">蔡博彥</p>
                  <p class="description mt-3">Master's students at PRLab@NTUST</p>
                   <div>
                    <!-- <badge type="primary" rounded>196</badge> -->
                    <badge type="success" rounded>OT Security</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Serene-Lian.jpg'"
                    alt="Serene-Lian"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Serene Lian</h4>
                  <p class="mt-3">蓮宜靜</p>
                  <p class="description mt-3">Master's students at PRLab@NTUST</p>
                   <div>
                        <badge type="success" rounded>ISG</badge>
                        <badge type="success" rounded>ISO27001</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/Wen-Che-Wu.jpg'"
                    alt="Wen-Che-Wu"
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Wen-Che Wu</h4>
                  <p class="mt-3">吳汶哲</p>
                  <p class="description mt-3">Master's students at PRLab@NTUST</p>
                   <div>
                        <badge type="success" rounded>ISO27001</badge>
                    </div>
                </card>  
              </div>
              
              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/simple1.jpg'"
                    alt=""
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">Togather</h4>
                  <p class="mt-3">期待</p>
                  <p class="description mt-3">Front-end development of PRLab@NTUST</p>
                   <div>
                        <badge type="success" rounded>/ᐠ｡ꞈ｡ᐟ\</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/simple2.jpg'"
                    alt=""
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">at</h4>
                  <p class="mt-3">你的</p>
                  <p class="description mt-3">Front-end development of PRLab@NTUST</p>
                   <div>
                        <badge type="success" rounded>/ᐠ｡ꞈ｡ᐟ\</badge>
                    </div>
                </card>  
              </div>

              <div class="col-sm-12 col-lg-4">
                <card
                  class="border-0 text-center mt-4"
                  shadow
                  body-classes="py-5"
                >
                  <img
                    v-lazy="'img/office/simple3.jpg'"
                    alt=""
                    class="rounded-circle img-center p-2"
                    style="
                      width: 200px;
                      height: 200px;
                      object-fit: cover !important;
                    "
                  />
                  <h4 class="text-fefault font-size-sm text-uppercase mt-3">PRLab@NTUST</h4>
                  <p class="mt-3">加入</p>
                  <p class="description mt-3">Front-end development of PRLab@NTUST</p>
                   <div>
                        <badge type="success" rounded>/ᐠ｡ꞈ｡ᐟ\</badge>
                    </div>
                </card>  
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
</style>
