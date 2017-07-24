export class Trip {
    tripId: string;
    userId: string;
    email: string;
    details: boolean;
    form: string;
    paid: boolean;
    complete: boolean;
    startDate: number;
    endDate: number;
    receipts: Array<string>;
    departureAirport: string;
    referralCode: string;
    finishedAddingReceipts: boolean;
    formDeliveryMethod: string;
    formPhoto: string;
    refundFormEmail: string;
}
