<template>
    <div>
        <home></home>
        <introduce></introduce>
        <about></about>
        <office></office>
    </div>
</template>
<script>

// components
import Home from "./components/Home";
import About from "./components/About";
import Introduce from "./components/Introduce";
import Office from "./components/Office";

export default {
  name: "components",
  components: {
    Home,
    About,
    Introduce,
    Office
  }
};
</script>
