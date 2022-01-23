<template>
  <div id="app">
   <body class="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header bg-dark text-center">
                                      <img src="https://agproducoespf.com.br/assets/img/ag_logo_branca.png" width="100px" class="img-fluid" alt="ag producoes logotipo">
                                    </div>
                                    <div class="card-body">
                                        <form v-on:submit.prevent='login()'>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="loginForm.usuario" id="inputUsuario" type="text" />
                                                <label for="inputUsuario">Usuário</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputPassword" v-model="loginForm.senha" type="password" />
                                                <label for="inputPassword">Senha</label>
                                            </div>
                                            <div class="align-items-center text-center">
                                              <button type="submit" ng-click='test()' class="btn btn-primary">Acessar</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <!-- <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div> -->
        </div>
    </body>
  </div>
</template>

<script src="./login-controller.js"></script>