<template>
    <div id="app">
        <div class="pag-info">
            <div class="page-titles">
                <p class='page-title'>Promoter</p>
                <p class='page-title active'>Editar</p>
            </div>
            <div class="page-description">
                <p>Edite os dados sobre o promoter</p>
            </div>
        </div>
        <form v-on:submit.prevent='saveForm()'>
            <div class="row">
                <div class="col-md-6">
                    <label for="pro_nome" class="form-label">Nome do promoter</label>
                    <input type="text" name="pro_nome" id="pro_nome" v-model="promoterForm.pro_nome" class="form-control" placeholder="" aria-describedby="helpId" :class="{'is-invalid': $v.promoterForm.pro_nome.$error}">
                </div>
                <div class="col-md-3">
                    <label for="pro_telefone" class="form-label">Telefone</label>
                    <input type="text" name="pro_telefone" id="pro_telefone" v-model="promoterForm.pro_telefone" class="form-control" placeholder="" aria-describedby="helpId">
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