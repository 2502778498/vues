<template>
  <div>
    <!-- <lpp-test-header :isLogin="true"></lpp-test-header> -->
    <div>
	    <div class="app-wrapper" 
             :class="{hideSidebar:!sidebar.opened}">
		    <!-- <okkong-sidebar class="sidebar-container" style='width:220px;'></okkong-sidebar> -->
		    <div class="main-container">                  
			    <!-- <okkong-navbar :isOkkong="true" :phoneActivation="needPhoneActivation" :emailActivation="false" class="navbar-style"></okkong-navbar> -->
			    <!-- <app-main></app-main> -->
          <!-- <okkong-app-main ></okkong-app-main> -->
		    </div>
	    </div>
    </div>
  </div>
</template>


<script>
// import { okkongNavbar, okkongSidebar, okkongAppMain } from 'views/layout';
// import LppTestHeader from 'components/LppTestHeader/okkongHeader'
// const logoSrc = require('gifs/okni.png');
export default {
  name: 'layout',
  components: {
    // okkongNavbar,
    // Sidebar,
    // okkongSidebar,
    // okkongAppMain,
    // LppTestHeader
  },
  
  computed: {
    needPhoneActivation(){
      let state = this.$store.state.user.activation;
      state = +state;
      if(!Number.isNaN(state)){
        //
        const phoneState = !!(state & 2);
        return !phoneState;
      }else{
        return true;
      }
    },
    needEmailActivation(){
      let state = this.$store.state.user.activation;
      state = +state;
      if(!Number.isNaN(state)){
        //
        const emailState = !!(state & 1);
        return !emailState;
      }else{
        return true;
      }
    },
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/styles/mixin.scss";
	.app-wrapper {
		@include clearfix;
		position: relative;
		height: 100%;
		width: 100%;
		&.hideSidebar {
			.sidebar-container{
				width:36px;
        overflow: inherit;
        background: #2d3342;
			}
			.main-container {
				margin-left: 36px;
			}
    }
		.sidebar-container {
      transition: width 0.28s ease-out;
      background: #343a49;
			width: 180px;
			height: 100%;
      position: fixed;
      border-radius: 0px;
      padding-top: 40px;
      // top: 83px;
      top:70px;
			bottom: 0;
			left: 0;
			z-index: 1001;
			overflow-y: auto;
 			&::-webkit-scrollbar {display:none}
		}
		.main-container {
			min-height: 100%;
			transition: margin-left 0.28s ease-out;
			margin-left: 180px;
			padding-top: 70px;
		}
	}
// .sidebar-bottom {
//   // margin-top: 174%;
//   color: #bfcbd9;
//   font-size: 14px;
//   line-height: 20px;
//   padding: 0 20px;
//   background: red;
// }
// .sidebar-bottom p {
//   margin-top: -10px;
// }
</style>
