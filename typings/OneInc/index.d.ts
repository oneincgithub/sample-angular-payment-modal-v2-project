/*
This is just a sample for demonstration purposes only. For explicit contracts please refer to official documentation.

 */
declare namespace "OneInc" {
  export enum PaymentCategory {
    CreditCard = "CreditCard",
    ECheck = "ECheck",
    UserSelect = "UserSelect"
  }
  export enum OperationCategory {
    MakePayment = "makePayment",
    SavePaymentMethod = "savePaymentMethod",
    ManagePaymentMethods = "managePaymentMethods",
    EnrollAutoPay = "enrollAutoPay",
        QuickPay = "quickPay",
        ManageNotifications = "manageNotifications"
  }
  export enum PortalEventType {
    Error = "portalOne.error",
    Load = "portalOne.load",
    PaymentComplete = "portalOne.paymentComplete",
    Unload = "portalOne.unload",
    ApplePayCheckComplete = "portalOne.applePayCheckComplete",
    ApplePayMerchantValidateComplete = "portalOne.validateMerchantComplete",
    ApplePayPaymentAuthorized = "portalOne.applePayPaymentAuthorized",
    ApplePayPaymentCanceled = "portalOne.applePayPaymentCanceled"
  }
  export enum CommandType {
    ApplePayCheck = "ApplePayCheck",
    ApplePayStart = "ApplePayStart",
    ApplePayCompleteMerchantValidation = "ApplePayCompleteMerchantValidation",
    ApplePayComplete = "ApplePayComplete",
    ApplePayAbort = "ApplePayAbort"
  }
  export class PortalMessageDetails {
    Command: "Close" | "UpdateContentHeight" | string;
    Data: {
      acknowledge: Function;
      height?: number;
      merchantIdentifier?: string;
    };
    Message: PortalEventType;
  }
  export class PortalParams {
    sessionId?: string;
    accessTokenId?: string;
    displayMode?: 'inline' | string;
    allowClosing?: boolean;
    paymentCategory: PaymentCategory;
    operation?: OperationCategory;
    loadingIndication?: boolean;
    preventBackgroundScroll?: boolean;
    [propName: string]: any;
  }

  export class PortalOne {
    constructor(
      container?: HTMLElement,
      subscriptionCallback?: (container: HTMLElement) => void,
      customStyles?: Partial<CSSStyleDeclaration>
    );
    savePaymentMethod(params: PortalParams): void;
    makePayment(params: PortalParams): void;
    managePaymentMethods(params: PortalParams): void;
    enrollAutoPay(params: PortalParams): void;
    quickPay(params: PortalParams): void;
    manageNotifications(params: PortalParams): void;
    run(params: PortalParams): void;
    cleanup(): void;
  }
}
