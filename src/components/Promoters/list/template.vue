<template>
    <div id="app">
        <div class="pag-info">
            <div class="page-titles">
                <!-- <p class='page-title'>Eventos</p> -->
                <p class='page-title active'>Promoters</p>
            </div>
            <div class="page-description">
                <p>Lista de promoters</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-end">
                <router-link to="/promoters/adicionar" role="button" class="btn btn-dark">Adicionar promoter</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='promoter in promotersList' v-bind:key='promoter.pro_codigo'>
                            <td class='align-middle' scope="row">{{promoter.pro_codigo}}</td>
                            <td class='align-middle'>{{promoter.pro_nome}}</td>
                            <td class='align-middle'>{{promoter.pro_telefone}}</td>
                            <td class='align-middle text-end'>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-white" v-bind:id="'btnEditar_'+[promoter.pro_codigo]" v-on:click="edit(promoter)"><i class="fas fa-pen"></i></button>
                                    <button type="button" class="btn btn-white" v-bind:id="'btnExcluir_'+[promoter.pro_codigo]" v-on:click="excluir(promoter)"><i class="fas fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
</template>

<script src='./vue_script.js'>