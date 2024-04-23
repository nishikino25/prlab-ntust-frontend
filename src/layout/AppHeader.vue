<template>
  <header id="header" class="header-global">      
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <base-nav class="navbar-main shadow" type="" effect="dark" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/twisc_logo.png" />
        <a href="/">
            <span class="nav-link-inner--text text-default">TWISC@NTUST</span>
          </a>
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="/">
            <span class="nav-link-inner--text text-default">TWISC@NTUST</span>
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-default" href="#About-TWISC">About TWISC</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-default" aria-current="page" href="#About-Team">Team member</a>
          </li>
          
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-default" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li class="nav-item dropend">
                <a class="nav-link dropdown-toggle text-default" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item text-default" href="#">Action</a></li>
                  <li><a class="dropdown-item text-default" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li class="nav-item dropend">
                    <a class="nav-link dropdown-toggle text-default" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item text-default" href="#">Action</a></li>
                      <li><a class="dropdown-item text-default" href="#">Another action</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li class="nav-item dropend">
                        <a class="nav-link dropdown-toggle text-default" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item text-default" href="#">Action</a></li>
                          <li><a class="dropdown-item text-default" href="#">Another action</a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a class="dropdown-item text-default" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-default">Link</a>
          </li> -->
        </ul>
        <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form> -->
        <select
          v-model="currentLang"
          class="nav-link ml-lg-auto"
          @change="changeLang"
          style="color: rgba(0, 0, 0, 0.5); text-transform: uppercase">
          <option value="" disabled hidden>Language</option>
          <option value="tw">zh-tw</option>
          <option value="en">en</option>
        </select>
    </div>

      
      

    </base-nav>
  </header>
</template>

<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
  },
  data() {
    return {
    currentLang: window.localStorage.getItem("locale") || "zh-tw",
    };
  },
  created() {
    // 在組件創建時，每次都將 currentLang 設置為空字串
    this.currentLang = "";
    window.localStorage.setItem("locale", ""); // 確保 localStorage 中也是空字串
  },
  methods: {
    changeLang() {
    const newLang = this.currentLang;

    if (window.localStorage.getItem("locale") !== newLang) {
      window.localStorage.setItem("locale", newLang);
      window.location.reload();
    }
    },    
  },
};
</script>
<style>
</style>
