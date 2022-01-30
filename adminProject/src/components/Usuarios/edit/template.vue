<template>
    <div id="app">
        <div class="pag-info">
            <div class="page-titles">
                <p class='page-title'>Usuário</p>
                <p class='page-title active'>Editar</p>
            </div>
            <div class="page-description">
                <p>Edite os dados sobre o usuário</p>
            </div>
        </div>
        <form v-on:submit.prevent='saveForm()'>
            <div class="row">
                <div class="col-md-12 pb-3">
                    <div class="form-check form-check-inline">
                        <input type="checkbox" class="form-check-input" v-model='usuarioForm.usu_admin' name="usu_admin" id="usu_admin" value="true">
                        <label class="form-check-label" for="usu_admin">
                            Usuário administrativo
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="checkbox" class="form-check-input" v-model='usuarioForm.usu_bloquearlogin' name="usu_bloquearlogin" id="usu_bloquearlogin" value="true">
                        <label class="form-check-label" for="usu_bloquearlogin">
                            Deslogar e bloquear login
                        </label>
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="usu_username" class="form-label">Nome de usuário</label>
                    <input type="text" name="usu_username" id="usu_username" v-model="usuarioForm.usu_username" class="form-control" placeholder="" aria-describedby="helpId" :class="{'is-invalid': $v.usuarioForm.usu_username.$error}">
                    <p class='error-message' v-if='!$v.usuarioForm.usu_username.required'>Campo obrigatório</p>
                    <p class='error-message' v-if='!$v.usuarioForm.usu_username.minLength'>Necessário no minimo {{$v.usuarioForm.usu_username.$params.minLength.min}} caracteres</p>


                </div>
                <div class="col-md-3">
                    <label for="usu_password" class="form-label">Senha</label>
                    <input type="password" name="usu_password" id="usu_password" v-model="usuarioForm.usu_password" class="form-control" placeholder="Altere a senha deste usuário">
                    <p class='error-message' v-if='!$v.usuarioForm.usu_password.minLength'>Necessário no minimo {{$v.usuarioForm.usu_password.$params.minLength.min}} caracteres</p>

                </div>
                <div class="col-md-3">
                    <div class="mb-3">
                        <label for="" class="form-label">Vincular Promoter</label>
                        <select class="form-control" v-model="usuarioForm.Promoter" name="pro_codigo" id="pro_codigo">
                            <option selected value="null">Nenhum</option>
                            <option v-for="promoter in promotersList" :key="promoter.pro_codigo" v-bind:value="promoter">{{promoter.pro_nome}}</option>
                        </select>
                    </div>
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
</template>

<script src='./vue_script.js'>