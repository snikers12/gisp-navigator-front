// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  runtimeEnvironment: {
    // for local development with `ng serve`
    // GISP_API_URL: 'http://localhost:8000/', // change it after staging backend creating
    GISP_API_URL: 'https://api.gisp.delion.ru/', // change it after staging backend creating
    // VTR_GTM_ID: 'GTM-12321',  // it's a prod GTM
    GISP_IS_DEV: 'true',
  },
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
