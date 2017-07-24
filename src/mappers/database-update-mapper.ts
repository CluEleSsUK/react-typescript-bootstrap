import UpdateReceiptRequest from "../model/update-receipt-request";
import DatabaseReceiptUpdate from "../model/database-receipt-update";
import {stringToEpochSecond} from "../util/date";

export default class DatabaseUpdateMapper {

    public mapUpdate = (request: UpdateReceiptRequest): DatabaseReceiptUpdate => {
        const update = new DatabaseReceiptUpdate();

        update.retailerName = request.retailerName;
        update.retailerId = request.retailerId;
        update.retailerAddress = request.retailerAddress;

        update.amount = request.total;
        update.totalTax = request.tax;
        update.items = request.items;
        update.dateOfReceipt = stringToEpochSecond(request.date);

        return update;
    }


}