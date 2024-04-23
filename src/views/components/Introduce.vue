<template>
    <!-- 內容 -->
    <section class="section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container shape-container d-flex bg" id="About-TWISC">
        <div class="order-lg-1">
          <!-- 中心簡介 -->
          <div class="row d-flex px-3" >
            <div class="col-md-3 col-sm-12" data-aos="fade-left">
              <img src="img/office/cloud-computing.png" class="floating" style="width:10.25rem;" data-aos="zoom-in"/>
            </div>
            <div class="col-md-9 col-sm-12" data-aos="fade-right">
              <h4 class="display-3 text-white pt-3">{{ $t('TWISCIntro') }}</h4>
              <div class="text-white text-justify" style="white-space: pre-line;">
                {{ $t('TWISCIntroContext') }}
              </div>
            </div>
          </div>

          <!-- 設立目標 -->
          <card hover shadow class="shadow-lg--hover mt-lg" data-aos="fade-right">
            <div class="d-flex px-3">
              <div>
                <icon
                  name="ni ni-hat-3"
                  gradient="success"
                  color="white"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h5 class="title text-success">{{ $t('TWISCGoal') }}</h5>
                <li>{{ $t('TWISCGoal_1') }}</li>
                <li>{{ $t('TWISCGoal_2') }}</li>
                <li>{{ $t('TWISCGoal_3') }}</li>
                <li>{{ $t('TWISCGoal_4') }}</li>
                <li>{{ $t('TWISCGoal_5') }}</li>
                <li>{{ $t('TWISCGoal_6') }}</li>
                <li>{{ $t('TWISCGoal_7') }}</li>
                <li>{{ $t('TWISCGoal_8') }}</li>
              </div>
            </div>
          </card>
          <card hover shadow class="shadow-lg--hover mt-5" data-aos="fade-left">
            <div class="d-flex px-3">
              <div>
                <icon
                  name="ni ni-tv-2"
                  gradient="warning"
                  color="white"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h5 class="title text-warning">
                    {{ $t('CoreValue') }}
                </h5>
                <p>
                    {{ $t('CoreValueContext') }}
                </p>
                <li>{{ $t('CoreValueContext_1') }}</li>
                <li>{{ $t('CoreValueContext_2') }}</li>
                <li>{{ $t('CoreValueContext_3') }}</li>
                <li>{{ $t('CoreValueContext_4') }}</li>
                <!-- <a href="#" class="text-warning">Learn more</a> -->
              </div>
            </div>
          </card>
          <card hover shadow class="shadow-lg--hover mt-5" data-aos="fade-left">
            <div class="d-flex px-3">
              <div>
                <icon
                  name="ni ni-atom"
                  gradient="info"
                  color="white"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h5 class="title text-info">
                    {{ $t('ResearchTopic') }}
                </h5>
                <li>{{ $t('ResearchTopic_1') }}</li>
                <li>{{ $t('ResearchTopic_2') }}</li>
                <li>{{ $t('ResearchTopic_3') }}</li>
                <li>{{ $t('ResearchTopic_4') }}</li>
                <li>{{ $t('ResearchTopic_5') }}</li>
                <li>{{ $t('ResearchTopic_6') }}</li>
                <li>{{ $t('ResearchTopic_7') }}</li>
                <li>{{ $t('ResearchTopic_8') }}</li>
                <li>{{ $t('ResearchTopic_9') }}</li>
                <li>{{ $t('ResearchTopic_10') }}</li>
                <!-- <a href="#" class="text-warning">Learn more</a> -->
              </div>
            </div>
          </card>
        </div>
      </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
