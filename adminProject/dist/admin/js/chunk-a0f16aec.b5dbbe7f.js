(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0f16aec"],{cced:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-end"},[a("router-link",{staticClass:"btn btn-dark",attrs:{to:"/promoters/adicionar",role:"button"}},[t._v("Adicionar promoter")])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.promotersList,(function(e){return a("tr",{key:e.pro_codigo},[a("td",{staticClass:"align-middle",attrs:{scope:"row"}},[t._v(t._s(e.pro_codigo))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.pro_nome))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.pro_telefone))]),a("td",{staticClass:"align-middle text-end"},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn btn-white",attrs:{type:"button",id:"btnEditar_"+[e.pro_codigo]},on:{click:function(a){return t.edit(e)}}},[a("i",{staticClass:"fas fa-pen"})]),a("button",{staticClass:"btn btn-white",attrs:{type:"button",id:"btnExcluir_"+[e.pro_codigo]},on:{click:function(a){return t.excluir(e)}}},[a("i",{staticClass:"fas fa-trash"})])])])])})),0)])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pag-info"},[a("div",{staticClass:"page-titles"},[a("p",{staticClass:"page-title active"},[t._v("Promoters")])]),a("div",{staticClass:"page-description"},[a("p",[t._v("Lista de promoters")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("ID")]),a("th",[t._v("Nome")]),a("th",[t._v("Telefone")]),a("th")])])}],n=a("e85b"),r=a("c1df"),o=a.n(r),c={data:function(){return{promotersList:[]}},filters:{formatDate:function(t){return null!=t?o()(t).format("DD/MM/YYYY"):null}},methods:{index:function(){n["a"].index().then(t=>{console.log(t),this.promotersList=t}).catch(t=>{})},edit:function(t){this.$router.push({name:"PromotersEdit",params:{pro_codigo:t.pro_codigo}})},excluir:function(t){n["a"].delete(t.pro_codigo).then(t=>{this.index()})}},mounted:function(){this.index()},head:{title:{inner:"Painel",separator:"-",complement:"Sistema de Ingressos AG"},meta:[],link:[],script:[]}},l=c,d=a("2877"),u=Object(d["a"])(l,s,i,!1,null,null,null);e["default"]=u.exports},e85b:function(t,e,a){"use strict";var s=a("3f4a");e["a"]={async index(t){return await Object(s["a"])().get("/indexPromoters",t).then(t=>t.data).catch(t=>t.response)},async delete(t){return await Object(s["a"])().get("/deletePromoter/"+t).then(t=>t.data).catch(t=>t.response)},async edit(t){return await Object(s["a"])().get("/editPromoter/"+t).then(t=>t.data).catch(t=>t.response)},async update(t){return await Object(s["a"])().post("/updatePromoter",t).then(t=>t.data).catch(t=>t.response)},async save(t){return await Object(s["a"])().post("/savePromoter",t).then(t=>t.data).catch(t=>t.response)}}}}]);
//# sourceMappingURL=chunk-a0f16aec.b5dbbe7f.js.map