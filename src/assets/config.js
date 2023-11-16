(function(window) {
  window['env'] = window['env'] || {};

  // Environment variables
  window['env']['swaggerUri'] = '/v3/api-docs';
  window['env']['mockApiUri'] = '/mock-api/';
  window['env']['apiUri'] = '/api/';
  window['env']['keycloakUrl'] = 'https://keycloak-nonprod.tnfm3jthqkv1.valtimo.cloud';
  window['env']['keycloakRealm'] = 'valtimo-test';
  window['env']['keycloakClientId'] = 'valtimo-console';
  window['env']['keycloakRedirectUri'] = 'https://4200-danielstroe-valtimofron-auh0odb5kr6.ws-eu106.gitpod.io/keycloak/callback';
  window['env']['keycloakLogoutRedirectUri'] = 'https://4200-danielstroe-valtimofron-auh0odb5kr6.ws-eu106.gitpod.io';
  window['env']['whiteListedDomain'] = 'https://4200-danielstroe-valtimofron-auh0odb5kr6.ws-eu106.gitpod.io';
  window['env']['openZaakCatalogusId'] = 'b23f4498-eb47-44ea-892d-ed97aff73f92';
})(this);
