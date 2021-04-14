import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, map, take } from "rxjs/operators";
import { Constants } from "./constants";
import { CreateSessionResponse } from "./create-session.response";
declare var OneInc: any;
@Component({
  selector: "instant-payment",
  template: `
    <div class="card">
      <div class="card-header">
        <i class="fa fa-credit-card" aria-hidden="true"></i> Instant Payment
      </div>
      <div class="card-body">
        <p>To pay your amount due any time click the following button:</p>
        <div class="text-center">
          <button
            id="see-in-action"
            class="btn btn-lg btn-primary"
            (click)="pay()"
          >
            Pay now
          </button>
        </div>
      </div>
    </div>
  `
})
export class InstantPaymentComponent implements OnInit {
  private portalOne: any;
  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {}
  public pay(): void {
    /* 1. create instance of library. Constructor has optional parameters:
    constructor(container: HTMLElement, subscriptionCallback: (container: HTMLElement) => void, customStyles?: Partial<CSSStyleDeclaration>)
    if container is not provided, html body is used
       2. subscribe to events sent by library. Can be ommitted if subscriptionCallback is provided to constructor
    */
    this.portalOne = new OneInc.PortalOne(null, this.subscribeToEvents);
    // 3. run necessary operation
    this.createSessionAndOpenModalWindow();
  }

  /*
      .../SessionKey/Create should be called from the server side.
      In order to protect your security, do not expose your PortalOne Authentication key to anyone.
      Ths function and authentication key are provided for demonstrational purposes only.
  */
  private createSessionAndOpenModalWindow(): void {
    const container: HTMLElement = document.body;
    this.httpClient
      .get(
        Constants.baseApiUrl +
          "Session/Create?portalOneAuthenticationKey=" +
          Constants.portalOneAuthKey,

        { responseType: "json" }
      )
      .pipe(
        take(1),
        map((result: CreateSessionResponse) => {
          if (result.ResponseCode === "Success") {
            this.openModalWindow(result.PortalOneSessionKey);
          } else {
            container.dispatchEvent(
              new CustomEvent("portalOne.error", {
                detail: {
                  description:
                    "The payment portal loading failed: Can't create session key"
                }
              })
            );
          }
        }),
        catchError((err: Error) => {
          container.dispatchEvent(
            new CustomEvent("portalOne.error", {
              detail: {
                description: "The payment portal loading failed: " + err.message
              }
            })
          );
          return throwError(err);
        })
      )
      .subscribe();
  }

  /* PortalOne library dispatches events from modal. Here is  a sample for subscribing to these events and executing necessary actions (here we just write these events to console.) */
  private subscribeToEvents(container: HTMLElement): void {
    if (!container) {
      return;
    }

    container.addEventListener("portalOne.load", function() {
      console.info("load");
    });
    container.addEventListener("portalOne.unload", function() {
      console.info("unload");
    });
    container.addEventListener("portalOne.error", function(e: CustomEvent) {
      console.error("error", e.detail);
    });
    container.addEventListener("portalOne.paymentComplete", function(
      e: CustomEvent
    ) {
      console.info("paymentComplete", e.detail);
    });
    container.addEventListener("portalOne.paymentCanceled", function() {
      console.warn("paymentCanceled");
    });
    container.addEventListener("portalOne.saveComplete", function(
      e: CustomEvent
    ) {
      console.warn("saveComplete", e.detail);
    });
    container.addEventListener("portalOne.saveCanceled", function() {
      console.warn("saveCanceled");
    });
  }

  private openModalWindow(sessionKey: string): void {
    // call MakePayment operation with sample data
    this.portalOne.makePayment({
      paymentCategory: OneInc.PaymentCategory.CreditCard,
      feeContext: "PaymentWithFee",
      minAmountDue: "107.98",
      accountBalance: "431.92",
      billingZip: "95630",
      billingAddressStreet: "602 Coolidge Dr., Folsom, CA",
      policyHolderName: "John Smith",
      referenceNumber: "4450354958",
      sessionId: sessionKey
    });
  }
}
