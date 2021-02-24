<template>
  <div>
    <div class="flex justify-center mt-16">
      <Logo />
    </div>
    <div class="flex justify-center mt-16">
      <Pep />
    </div>
    <div class="flex justify-center mt-16">
      <div class="hover:opacity-50">
        <Start  @click.native="reload"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '../components/images/Logo'
import Pep from '../components/images/Pep'
import Start from '../components/images/Start'

export default {
  name: 'Home',
  components: {
    Logo,
    Pep,
    Start
  },
  methods: {
    reload() {
      this.$router.go({path: this.$router.push('/question'), force: true});
    },
  }
}
</script>
