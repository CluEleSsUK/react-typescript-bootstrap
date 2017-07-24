export class Refund {
    tripId: string;
    totalPurchaseAmount: number;
    totalTax: number;
    fee: number;
    saving: number;
    refundAmount: number;
    discountApplied: number;
    currency: string;
    paid: boolean;
    premium: boolean;
}
