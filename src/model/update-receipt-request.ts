export default class UpdateReceiptRequest {
    retailerId: string;
    retailerName: string;
    retailerAddress: string;
    total: number;
    tax: number;
    date: string;
    items: Array<LineItem>;
}

export class LineItem {
    name: string;
    quantity: number;
    cost: number;
}
