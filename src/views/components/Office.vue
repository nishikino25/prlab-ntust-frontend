<template>
    <section class="section bg-secondary ">
        <div class="container">
                <div class="row row-grid">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14462.452537425585!2d121.5405609!3d25.0132583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90db5e44ee29f455!2z5ZyL56uL6Ie654Gj56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1635754857538!5m2!1szh-TW!2stw" 
                             height="350" style="border:0;" allowfullscreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5 pt-3">
                            <div class="">
                              <icon name="ni ni-pin-3" class="mb-3" size="lg" type="warning" shadow rounded></icon>

                              <h3> {{ $t('FooterInfo')}}</h3>                             
                            </div>
                            <p class="lead">                          
                                {{ $t('Location')}}
                            </p>                         
                            <p class="lead">
                                {{ $t('Tel')}} : {{ $t('TelNo')}}
                            </p>
                            <!-- <p class="lead">
                                {{ $t('Fax')}} : {{ $t('FaxNo')}}
                            </p> -->
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
  },
  data() {
    return {
      checkboxes: {
        unchecked: false,
        checked: true,
        uncheckedDisabled: false,
        checkedDisabled: true
      },
      radio: {
        radio1: "radio1",
        radio2: "radio3"
      },
      switches: {
        off: false,
        on: true
      },
      sliders: {
        slider1: 0,
        slider2: [150, 400]
      }
    };
  }
};
</script>
<style>
</style>
