<template>
    <div id="app">
        <div class="pag-info">
            <div class="page-titles">
                <!-- <p class='page-title'>Eventos</p> -->
                <p class='page-title active'>Eventos</p>
            </div>
            <div class="page-description">
                <p>Lista de eventos</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-end">
                <router-link to="/eventos/adicionar" role="button" class="btn btn-dark" style="color: #fff">Adicionar evento</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome evento</th>
                            <th>Data</th>
                            <th>Local</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='evento in eventosList' v-bind:key='evento.eve_codigo'>
                            <td class='align-middle' scope="row">{{evento.eve_codigo}}</td>
                            <td class='align-middle'>{{evento.eve_nome}}</td>
                            <td class='align-middle'>{{evento.eve_data | formatDate}}</td>
                            <td class='align-middle'>{{evento.eve_local}}</td>
                            <td class='align-middle text-end'>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-white" v-bind:id="'btnEditar_'+[evento.eve_codigo]" v-on:click="edit(evento)"><i class="fas fa-pen"></i></button>
                                    <button type="button" class="btn btn-white" v-bind:id="'btnExcluir_'+[evento.eve_codigo]" v-on:click="excluir(evento)"><i class="fas fa-trash"></i></button>
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