export default class DatabaseReceiptUpdate {
    retailerId: string;
    retailerName: string;
    retailerAddress: string;
    amount: number;
    totalTax: number;
    dateOfReceipt: number;
    items: Array<any>;

    // defaults
    currency = "GBP";
    reviewed = true;
}