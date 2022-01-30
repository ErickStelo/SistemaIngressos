<template>
    <div id="app">
        <div class="pag-info">
            <div class="page-titles">
                <p class='page-title'>Eventos</p>
                <p class='page-title active'>Adicionar</p>
            </div>
            <div class="page-description">
                <p>Adicione os dados sobre o evento</p>
            </div>
        </div>
        <form v-on:submit.prevent='saveForm()'>
            <div class="row">
                <div class="col-md-6">
                    <label for="eve_nome" class="form-label">Nome do evento</label>
                    <input type="text" name="eve_nome" id="eve_nome"  v-model="eventoForm.eve_nome" class="form-control" placeholder="" aria-describedby="helpId" :class="{'is-invalid': $v.eventoForm.eve_nome.$error}">
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
</template>

<script src='./vue_script.js'>