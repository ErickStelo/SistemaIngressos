(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f8672dc"],{1861:function(t,e,a){"use strict";var s=a("3f4a");e["a"]={async index(t){return await Object(s["a"])().get("/indexEventos",t).then(t=>t.data).catch(t=>t.response)},async delete(t){return await Object(s["a"])().get("/deleteEvento/"+t).then(t=>t.data).catch(t=>t.response)},async edit(t){return await Object(s["a"])().get("/editEvento/"+t).then(t=>t.data).catch(t=>t.response)},async update(t){return await Object(s["a"])().post("/updateEvento",t).then(t=>t.data).catch(t=>t.response)},async save(t){return await Object(s["a"])().post("/saveEvento",t).then(t=>t.data).catch(t=>t.response)},async getPromotersForAdd(t){return await Object(s["a"])().post("/getPromotersForAdd",t).then(t=>t.data).catch(t=>t.response)},async getPromotersList(t){return await Object(s["a"])().get("/getPromotersList/"+t).then(t=>t.data).catch(t=>t.response)},async addPromoter(t){return await Object(s["a"])().post("/addPromoter",t).then(t=>t.data).catch(t=>t.response)},async excluirPromoter(t){return await Object(s["a"])().post("/excluirPromoter",t).then(t=>t.data).catch(t=>t.response)},async adicionarProduto(t){return await Object(s["a"])().post("/adicionarProduto",t).then(t=>t.data).catch(t=>t.response)},async getProdutosLotes(t){return await Object(s["a"])().get("/getProdutosLotes/"+t).then(t=>t.data).catch(t=>t.response)},async removerProduto(t){return await Object(s["a"])().get("/removerProduto/"+t.eve_codigo+"/"+t.epr_codigo).then(t=>t.data).catch(t=>t.response)},async addLoteToProduto(t){return await Object(s["a"])().get("/addLoteToProduto/"+t).then(t=>t.data).catch(t=>t.response)},async removerLoteFromProduto(t){return await Object(s["a"])().post("/removerLoteFromProduto",t).then(t=>t.data).catch(t=>t.response)},async addCategoriaPrecoToLote(t){return await Object(s["a"])().post("/addCategoriaPrecoToLote",t).then(t=>t.data).catch(t=>t.response)},async removeCategoriaPrecoFromLote(t){return await Object(s["a"])().post("/removeCategoriaPrecoFromLote",t).then(t=>t.data).catch(t=>t.response)},async saveCategoriaPreco(t){return await Object(s["a"])().post("/saveCategoriaPreco",t).then(t=>t.data).catch(t=>t.response)}}},5240:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-end"},[a("router-link",{staticClass:"btn btn-dark",staticStyle:{color:"#fff"},attrs:{to:"/eventos/adicionar",role:"button"}},[t._v("Adicionar evento")])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.eventosList,(function(e){return a("tr",{key:e.eve_codigo},[a("td",{staticClass:"align-middle",attrs:{scope:"row"}},[t._v(t._s(e.eve_codigo))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.eve_nome))]),a("td",{staticClass:"align-middle"},[t._v(t._s(t._f("formatDate")(e.eve_data)))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.eve_local))]),a("td",{staticClass:"align-middle text-end"},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn btn-white",attrs:{type:"button",id:"btnEditar_"+[e.eve_codigo]},on:{click:function(a){return t.edit(e)}}},[a("i",{staticClass:"fas fa-pen"})]),a("button",{staticClass:"btn btn-white",attrs:{type:"button",id:"btnExcluir_"+[e.eve_codigo]},on:{click:function(a){return t.excluir(e)}}},[a("i",{staticClass:"fas fa-trash"})])])])])})),0)])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pag-info"},[a("div",{staticClass:"page-titles"},[a("p",{staticClass:"page-title active"},[t._v("Eventos")])]),a("div",{staticClass:"page-description"},[a("p",[t._v("Lista de eventos")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("ID")]),a("th",[t._v("Nome evento")]),a("th",[t._v("Data")]),a("th",[t._v("Local")]),a("th")])])}],n=a("1861"),r=a("c1df"),c=a.n(r),i={data:function(){return{eventosList:[]}},filters:{formatDate:function(t){return null!=t?c()(t).format("DD/MM/YYYY"):null}},methods:{index:function(){n["a"].index().then(t=>{this.eventosList=t}).catch(t=>{})},edit:function(t){this.$router.push({name:"EventosEdit",params:{eve_codigo:t.eve_codigo}})},excluir:function(t){n["a"].delete(t.eve_codigo).then(t=>{this.index()})}},mounted:function(){this.index()},head:{title:{inner:"Painel",separator:"-",complement:"Sistema de Ingressos AG"},meta:[],link:[],script:[]}},d=i,l=a("2877"),u=Object(l["a"])(d,s,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-9f8672dc.c5f071ab.js.map