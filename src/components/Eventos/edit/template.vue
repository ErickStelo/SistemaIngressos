<template>
    <div id="app">
        <div class="pag-info">
            <div class="page-titles">
                <p class='page-title'>Eventos</p>
                <p class='page-title active'>Editar</p>
            </div>
            <div class="page-description">
                <p>Edite os dados sobre o evento</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="true">Informações Básicas</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="promoters-tab" data-bs-toggle="tab" data-bs-target="#promoters" type="button" role="tab" aria-controls="promoters" aria-selected="false">Promoters</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="produtoslotes-tab" data-bs-toggle="tab" data-bs-target="#produtoslotes" type="button" role="tab" aria-controls="produtoslotes" aria-selected="false" v-on:click='getProdutosLotes()'>Produtos e lotes</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active pt-3" id="info" role="tabpanel" aria-labelledby="info-tab">
                        <form v-on:submit.prevent='saveForm()'>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="eve_nome" class="form-label">Nome do evento</label>
                                    <input type="text" name="eve_nome" id="eve_nome" v-model="eventoForm.eve_nome" class="form-control" placeholder="" aria-describedby="helpId" :class="{'is-invalid': $v.eventoForm.eve_nome.$error}">
                                </div>
                                <div class="col-md-3">
                                    <label for="eve_local" class="form-label">Local</label>
                                    <input type="text" name="eve_local" id="eve_local" v-model="eventoForm.eve_local" class="form-control" placeholder="" aria-describedby="helpId">
                                </div>
                                <div class="col-md-3">
                                    <label for="eve_data" class="form-label">Data do evento</label>
                                    <input type="date" name="eve_data" id="eve_data" v-model="eventoForm.eve_data" class="form-control" placeholder="" aria-describedby="helpId">
                                </div>
                                <div class="col-md-12 pt-4">
                                    <label for="eve_descricao" class="form-label">Descrição</label>
                                    <textarea v-model="eventoForm.eve_descricao" class="form-control" name="" id="" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="fixed-action">
                                <div class="clearfix">
                                    <div class="pull-right">
                                        <button type="submit" class="btn btn-lg btn-success">Salvar alterações</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="promoters" role="tabpanel" aria-labelledby="promoters-tab">
                        <div class="row pt-3">
                            <div class="col-md-10">
                                <label for="form-label">Adicionar promoter</label>
                                <select v-model="promoterOption" class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                    <option selected>Selecione um promoter</option>
                                    <option v-for='promoter in promotersOptions' :key='promoter.pro_codigo' v-bind:value="promoter.pro_codigo">{{promoter.pro_nome}}</option>
                                </select>
                            </div>
                            <div class="col-md-2 pt-4 text-center">
                                <button type="button" v-on:click='addPromoter()' class="btn btn-dark">Adicionar Promoter</button>
                            </div>
                        </div>
                        <hr class="mt-3 mb-3">
                        <div class="row">
                            <div class="col-md-12">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Promoter</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for='promoter in promotersList' :key='promoter.evp_codigo'>
                                            <td scope="row">{{promoter.evp_codigo}}</td>
                                            <td>{{promoter.Promoter.pro_nome}}</td>
                                            <td class="text-end">
                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" class="btn btn-white" v-bind:id="'btnExcluir_'+[promoter.evp_codigo]" v-on:click="excluirPromoter(promoter)"><i class="fas fa-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade pb-5" id="produtoslotes" role="tabpanel" aria-labelledby="produtoslotes-tab">
                        <div class="row pt-4">
                            <form v-on:submit.prevent='adicionarProduto()'>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="evp_nome">Adicionar produto</label>
                                            <input type="text" class="form-control" :class="{'is-invalid': $v.newProdutoForm.evp_nome.$error}" v-model="newProdutoForm.evp_nome" name="evp_nome" id="evp_nome" aria-describedby="helpId" placeholder="Camarote, VIP, Pista">
                                        </div>
                                    </div>
                                    <div class="col-md-3 text-center pt-4" style="padding: 0">
                                        <button type="submit" class="btn btn-dark">Adicionar Produto</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="row pt-4">
                            <div class="col-md-12 p-0 m-0">
                                <div class="col-md-12" style="padding: 10px 10px 10px 10px;" v-for="(produto, idx) in produtosLotes" :key='produto.epr_codigo'>
                                    <!-- <div class="col-md-12 mb-3" style="border: 1px solid #dbdbdb; border-radius: 0px 0px 9px 9px; padding: 10px 10px 10px 10px;" v-for="(produto, idx) in produtosLotes" :key='produto.epr_codigo'> -->
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">

                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapseProduct_'+ produto.epr_codigo" aria-expanded="false" v-bind:aria-controls="'collapseProduct_'+ produto.epr_codigo">
                                                <h3 class="m-0">{{produto.epr_nome}}</h3>
                                            </button>
                                        </h2>
                                        <div v-bind:id="'collapseProduct_'+ produto.epr_codigo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body px-0 py-2">
                                                <!-- Lotes do produto -->
                                                <div class="row" style="margin: 0 auto; padding: 0;">
                                                    <div class="col-md-12 p-0 m-0">
                                                        <div class="row p-0 m-0">
                                                            <div class="col-md-12 pb-2" v-for='(lote, idx) in produto.ProdutoLotes' :key='lote.epl_codigo'>
                                                                <div class="card ">
                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="col">
                                                                                <h6 class="py-2 px-0 m-0">Lote {{lote.epl_lote_numero}}</h6>
                                                                            </div>
                                                                            <div class="col text-end">
                                                                                <div class="btn-group" role="group">
                                                                                    <button type="button" v-on:click='removerLoteFromProduto(produto, lote, idx)' class="btn btn-dark btn-sm"><i class="far fa-trash-alt"></i></button>
                                                                                    <button type="button" v-if="lote.epl_ativo === true" class="btn btn-secondary btn-sm">Encerrar lote</button>
                                                                                    <button type="button" v-if="lote.epl_ativo === false" class="btn btn-success btn-sm">Ativar lote</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row mt-4">
                                                                            <div class="col-md-12 mb-3">
                                                                                <div class="row" v-for='(categoriaValor, idx) in lote.LoteCategoriaPrecoValor' :key='categoriaValor.lpv_codigo'>
                                                                                    <div class="col-md-12 p-0 pb-3">
                                                                                        <p class="m-0 fw-bold">{{categoriaValor.CategoriaPrecos.cap_nome}}</p>
                                                                                        <form>
                                                                                            <table class="table align-middle m-0 p-0">
                                                                                                <tr>
                                                                                                    <td class='pe-2'>
                                                                                                        <!-- <input type="text" v-model='categoriaValor.lpv_valoringresso' class="form-control form-control-sm" name="lpv_valoringresso" id="lpv_valoringresso" aria-describedby="helpId" placeholder="Valor do ingresso"> -->
                                                                                                        <money class="form-control form-control-sm" v-model="categoriaValor.lpv_valoringresso" name="lpv_valoringresso" id="lpv_valoringresso" aria-describedby="helpId" placeholder="Valor do ingresso" v-bind="money"></money>
                                                                                                    </td>
                                                                                                    <td class='pe-2'>
                                                                                                        <input type="text" v-model='categoriaValor.lpv_limiteingressos' class="form-control form-control-sm" name="lpv_limiteingressos" id="lpv_limiteingressos" aria-describedby="helpId" placeholder="Limite de ingressos">
                                                                                                    </td>
                                                                                                    <td class="text-center">
                                                                                                        <div class="btn-group">
                                                                                                            <button type="button" v-on:click='saveCategoriaPreco(categoriaValor)' class="btn btn-dark btn-sm"><i class="far fa-save"></i></button>
                                                                                                            <button type="button" class="btn btn-secondary dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                                Ações
                                                                                                            </button>
                                                                                                            <ul class="dropdown-menu">
                                                                                                                <li><a class="dropdown-item" v-on:click='removeCategoriaPrecoFromLote(lote, categoriaValor, idx)'>Excluir</a></li>
                                                                                                                <li><a class="dropdown-item" href="#">Encerrar venda</a></li>
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </form>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-12 text-center" style="padding: 0">
                                                                                <button type="button" class="btn btn-primary btn-sm" v-on:click='loteSelectedToAddCatValor = lote' data-bs-toggle="modal" data-bs-target="#modalAddCategoriaValor"><i class="fas fa-plus-circle"></i>&ensp;Categoria de preço</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Ações do produto -->
                                                <div class="col-md-12 text-center" style="padding: 20px">
                                                    <div class="btn-group" role="group" aria-label="Basic example">
                                                        <button type="button" v-on:click='addLoteToProduto(produto)' class="btn btn-dark btn-sm"><i class="fas fa-plus-circle"></i>&ensp;Adicionar lote</button>
                                                        <button type="button" v-on:click='removerProduto(produto, idx)' class="btn btn-secondary btn-sm" title="Remover este produto"><i class="far fa-trash-alt"></i>&ensp;Remover produto</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal add Categoria valor -->
        <div class="modal fade" id="modalAddCategoriaValor" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Adicionar nova categoria de valor ao lote</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <select v-model='catValorSelectedToAdd' class="form-control" name="catValorSelectedToAdd" id="catValorSelectedToAdd">
                                <option selected>Selecione uma opção</option>
                                <option v-for='categoriaValor in categoriaValores' :key="categoriaValor.cap_codigo" v-bind:value="categoriaValor.cap_codigo">{{categoriaValor.cap_nome}}</option>
                            </select>
                        </div>
                        <div class="col-md-12 text-center">
                            <button type="button" v-on:click='addCategoriaPrecoToLote()' class="btn btn-primary me-2">Adicionar</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script src='./vue_script.js'>