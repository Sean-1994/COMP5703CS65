(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e450e"],{9067:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"panel"},[s("panel-title",{attrs:{title:t.$lang.titles.editTask}},[s("router-link",{attrs:{to:{name:"taskStatus",params:{id:t.routeId}},tag:"span"}},[s("el-button",{attrs:{type:"success",size:"mini"}},[s("i",{staticClass:"fa fa-sitemap"}),t._v("\n        "+t._s(t.$lang.buttons.status)+"\n      ")])],1)],1),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadData,expression:"loadData"}],staticClass:"panel-body",attrs:{"element-loading-text":t.$lang.messages.loading}},[s("el-row",[s("el-col",{attrs:{span:10}},[s("substance",{ref:"substance",attrs:{id:t.routeId}},[s("template",{slot:"submit"},[s("el-button",{attrs:{type:"primary",size:"small",loading:t.onSubmitLoading},on:{click:t.onSubmitForm}},[s("i",{staticClass:"fa fa-check"}),t._v("\n              "+t._s(t.$lang.buttons.update)+"\n            ")])],1)],2)],1)],1)],1)],1)},n=[],i=s("eee4"),o=s("80bd"),r={data:function(){return{onSubmitLoading:!1,loadData:!1,routeId:this.$route.params.id}},methods:{onSubmitForm:function(){var t=this;this.$refs.substance.$refs.form.validate((function(a){if(!a)return!1;t.onSubmitLoading=!0;var s=t.$refs.substance.formData;t.$http.post(t.formatString(t.$store.state.url.task.update,{id:t.routeId}),s).then((function(){t.$message.success(t.$store.getters.$lang.messages.successSave),t.onSubmitLoading=!1})).catch((function(){t.onSubmitLoading=!1}))}))}},components:{PanelTitle:i["a"],Substance:o["a"]}},l=r,u=s("2877"),c=Object(u["a"])(l,e,n,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e450e.5f942846.js.map