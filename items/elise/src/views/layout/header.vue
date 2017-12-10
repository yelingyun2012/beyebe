<template lang="pug">
  aside.header-con
    .logo-con
      router-link(to="/basic").logo-img-con
        img(src='../../assets/images/logo.png', :alt='imgAltInfo')
      span Welcome to elise
    .userInfo-con
      Dropdown
        span test
          Icon(type="arrow-down-b")
        DropdownMenu(slot="list")
          DropdownItem(name="logout") 退出登录
</template>
<script>
import Dropdown from 'iview/src/components/dropdown'
import Icon from 'iview/src/components/icon'
export default {
  name: 'Header',
  data() {
    return {
      imgAltInfo: '比一比大数据'
    }
  },
  components: {
    Dropdown,
    DropdownMenu: Dropdown.Menu,
    DropdownItem: Dropdown.Item,
    Icon
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/utils';
.header-con
  z-index 1000
  display flex
  padding 0 20px
  width inherit
.logo
  &-con
    flex 1 1 auto
    span
      vertical-align middle
      font-weight bold
      font-size 22px
  &-img-con
    display inline-block
    margin 0 70px 0 25px
    width 120px
    vertical-align baseline
    img
      Default_W_H()
      vertical-align middle
.userInfo
  &-con
    margin-right 30px
    span
      font-size 16px
      cursor pointer
.ivu-icon-arrow-down-b
  margin-left 5px
</style>
<style>
.ivu-select-dropdown {
  top: 45px !important;
}
</style>




