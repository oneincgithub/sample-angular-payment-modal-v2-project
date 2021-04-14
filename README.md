# Sample Angular Project with One Inc Payment Modal 2.0
This sample project will invoke the payment modal when the user clicks the Pay Now button. This project is for demonstration purposes only. For explicit contracts please refer to official documentation.

*NOTE:* Pay special attention to the constants file and the instant-payment-component file. Replace the following placeholders with actual values qcuired from One Inc.
- 'one-inc-api' - api endpoint provided by One Inc. See [src/constants.ts](https://github.com/oneincgithub/sample-angular-payment-modal-v2-project/blob/main/src/app/constants.ts#L3)
- 'one-inc-authentication-key' - key required to authenticate to the application.See [src/constants.ts](https://github.com/oneincgithub/sample-angular-payment-modal-v2-project/blob/main/src/app/constants.ts#L2)
- 'one-inc-js' - cdn endp0int which serves One Inc js library. See [angular.json](https://github.com/oneincgithub/sample-angular-payment-modal-v2-project/blob/bd20b8b0cb1db2243adc3f58195b778eb5cfc4f4/angular.json#L29)

The constants file is where we set the authentication key and API base URL.
The instant-payment-component contains the Angular component for the Instant Payment card.  This is where the payment modal integration takes place.
index.html shows how to include the PortalOne library to the app.
