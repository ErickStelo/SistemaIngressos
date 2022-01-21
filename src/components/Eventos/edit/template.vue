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
                        <button class="nav-link" id="promoters-tab" data-bs-toggle="tab" data-bs-target="#promoters" type="button" role="tab" aria-controls="promoters" aria-selected="false">Profile</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
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
                        <div class="row">
                            <div class="col-md-12">
<v-card
    color="red lighten-2"
    dark
  >
    <v-card-title class="text-h5 red lighten-3">
      Search for Public APIs
    </v-card-title>
    <v-card-text>
      Explore hundreds of free API's ready for consumption! For more information visit
      <a
        class="grey--text text--lighten-3"
        href="https://github.com/toddmotto/public-apis"
        target="_blank"
      >the GitHub repository</a>.
    </v-card-text>
    <v-card-text>
      <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        hide-no-data
        hide-selected
        item-text="Description"
        item-value="API"
        label="Public APIs"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-expand-transition>
      <v-list
        v-if="model"
        class="red lighten-3"
      >
        <v-list-item
          v-for="(field, i) in fields"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="field.value"></v-list-item-title>
            <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expand-transition>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!model"
        color="grey darken-3"
        @click="model = null"
      >
        Clear
        <v-icon right>
          mdi-close-circle
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script src='./vue_script.js'>