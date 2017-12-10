<template lang="pug">
  section
    header.main-header-con
      HeaderView
    nav.sidebar-menu-con
      SidebarView(:menu-list='getMenuList', :open-names='openedSubmenuArr')
    main.main-subject-con
      router-view
</template>

<script>
import HeaderView from './layout/header'
import SidebarView from './layout/sidebar'
import { mapState, mapMutations } from 'vuex'
import { setCurrentPath } from '@/utils/utils'

export default {
  name: 'Main',
  components: {
    HeaderView,
    SidebarView
  },
  computed: {
    ...mapState({
      getMenuList: state => state.permission.menuList,
      openedSubmenuArr: state => state.permission.openedSubmenuArr
    })
  },
  methods: {
    ...mapMutations({
      addOpenSubmenu: 'permission/addOpenSubmenu'
    }),
    init() {
      let pathArr = setCurrentPath(this, this.$route.name)
      if (pathArr.length >= 2) {
        this.addOpenSubmenu(pathArr[0].name)
      }
    }
  },
  watch: {
    $route(to) {
      let pathArr = setCurrentPath(this, to.name)
      if (pathArr.length >= 2) {
        this.addOpenSubmenu(pathArr[0].name)
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="stylus">
@import '../assets/styles/utils'

.main
  &-header-con
    position fixed
    Default_W_H(,60px)
    background-color #404040
    color #ffffff
    line-height 60px
  &-subject-con
    margin-left 200px
    padding 85px 10px 0 20px
.sidebar-menu-con
  position fixed
  top 85px
  max-width 200px
  width 200px
  height 100%
  background-color #ffffff
  @media screen and (max-width: 1440px)
    max-width 160px
    width 160px
</style>

