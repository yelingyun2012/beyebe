<template lang="pug">
  MenuView(ref="sidebarMenu", :active-name="$route.name", :open-names="openNames", width='100%', theme="light", @on-select="changeMenu", accordion)
    template(v-for='item in menuList')
      MenuItemView(v-if='item.children.length<=1', :name='item.children[0].name', :key='item.path')
        Icon(v-if='item.icon', :type="item.icon")
        | {{item.title}}
      Submenu(v-if='item.children.length>1', :name='item.name', :key="item.path")
        template(slot='title')
          Icon(v-if='item.icon', :type='item.icon')
          | {{item.title}}
        template(v-for='child in item.children')
          MenuItemView(:name='child.name', :key='child.name')
            Icon(v-if='child.icon', :type='child.icon')
            | {{child.title}}
</template>
<script>
import Menu from 'iview/src/components/menu'
import Icon from 'iview/src/components/icon'
export default {
  name: 'Sidebar',
  props: {
    menuList: Array,
    openNames: Array
  },
  components: {
    MenuView: Menu,
    Submenu: Menu.Sub,
    MenuItemView: Menu.Item,
    Icon
  },
  methods: {
    changeMenu(name) {
      this.$router.push({ name })
    }
  },
  updated() {
    this.$nextTick(() => {
      if (this.$refs.sidebarMenu) {
        this.$refs.sidebarMenu.updateOpened()
      }
    })
  }
}
</script>

