<template>
    <div id="app">
        <div class="pag-info">
            <div class="page-titles">
                <!-- <p class='page-title'>Eventos</p> -->
                <p class='page-title active'>Usuários</p>
            </div>
            <div class="page-description">
                <p>Lista de usuários da plataforma</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-end">
                <router-link to="/usuarios/adicionar" role="button" class="btn btn-dark" style="color: #fff">Adicionar usuário</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Usuario</th>
                            <th>Promoter</th>
                            <th class="text-center">Administrativo</th>
                            <th>Data criação</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='usuario in usuarioList' v-bind:key='usuario.usu_codigo'>
                            <td class='align-middle' scope="row">{{usuario.usu_codigo}}</td>
                            <td class='align-middle'>{{usuario.usu_username}}</td>
                            <td class='align-middle'><span v-if='usuario.Promoter != null'>{{usuario.Promoter.pro_nome}}</span></td>
                            <td class='align-middle text-center'><span v-if="usuario.usu_admin === true"><i style='color:#17830a;' class="fas fa-check-circle"></i></span></td>
                            <td class='align-middle'>{{usuario.usu_dtcriacao | formatDate}}</td>
                            <td class='align-middle text-end'>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-white" v-bind:id="'btnEditar_'+[usuario.usu_codigo]" v-on:click="edit(usuario)"><i class="fas fa-pen"></i></button>
                                    <button type="button" class="btn btn-white" v-bind:id="'btnExcluir_'+[usuario.usu_codigo]" v-on:click="excluir(usuario)"><i class="fas fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
</template>

<script src='./vue_script.js'>