<script setup>
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">&#x5C0F;&#x5154;&#x9C9C;</RouterLink>
      </h1>
     <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/" active-class="active">首页</RouterLink>
        </li>
        <li v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink to="/">{{ item.name }}</RouterLink>
        </li>
      </ul>

      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="&#x641C;&#x4E00;&#x641C;" />
      </div>
      <!-- header cart -->
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    flex-shrink: 0;

    a {
      display: block;
      width: 100%;
      height: 132px;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 40px;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      flex: none;
      text-align: center;
      white-space: nowrap;

      a {
        display: inline-block;
        height: 32px;
        font-size: 16px;
        line-height: 32px;
        white-space: nowrap;

        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }

      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }

  .search {
    width: 170px;
    height: 32px;
    flex-shrink: 0;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      margin-left: 5px;
      font-size: 18px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      display: block;
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;

      .icon-cart {
        font-size: 22px;
      }

      em {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1px 6px;
        font-family: Arial;
        font-size: 12px;
        font-style: normal;
        line-height: 1;
        color: #fff;
        background: $helpColor;
        border-radius: 10px;
      }
    }
  }
}
</style>
