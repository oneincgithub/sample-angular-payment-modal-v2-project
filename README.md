# Sample Angular Project with One Inc Payment Modal 2.0
This sample project will invoke the payment modal when the user clicks the Pay Now button. This project is for demonstration purposes only. For explicit contracts please refer to official documentation.

*NOTE:* Pay special attention to the constants file and the instant-payment-component file. Replace the following placeholders with actual values qcuired from One Inc.
- 'one-inc-api' - api endpoint provided by One Inc. See [src/constants.ts](https://github.com/oneincgithub/sample-angular-payment-modal-v2-project/blob/main/src/app/constants.ts#L3)
- 'one-inc-authentication-key' - key required to authenticate to the application.See [src/constants.ts](https://github.com/oneincgithub/sample-angular-payment-modal-v2-project/blob/main/src/app/constants.ts#L2)
- 'one-inc-js' - cdn endpoint which serves One Inc js library. See [index.html](https://github.com/oneincgithub/sample-angular-payment-modal-v2-project/blob/137a5e005cfd57f0a8047417046704b3ad37aefc/src/index.html#L4)

The constants file is where we set the authentication key and API base URL.
The instant-payment-component contains the Angular component for the Instant Payment card.  This is where the payment modal integration takes place.
index.html shows how to include the PortalOne library to the app.
