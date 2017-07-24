export class Receipt {
    receiptId: string;
    tripId: string;
    userId: string;
    retailerId: string;
    retailerName: string;
    imageUrls: Array<string>;
    amount: number;
    currency: string;
    taxRate: number;
    totalTax: number;
    dateOfReceipt: number;
    dateAdded: number;
    comments: string;
    reviewed: boolean;
    items: Array<any>
};