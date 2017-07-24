import * as firebase from "firebase";
import Database = firebase.database.Database;
import DatabaseReceiptUpdate from "../model/database-receipt-update";
import {db} from "../util/database";
import {Receipt} from "../model/db/receipt";

export default class DatabaseService {

    database: Database;

    constructor() {
        this.database = db;
    }

    updateReceipt = (userId: string, receiptId: string, request: DatabaseReceiptUpdate): firebase.Promise<any> => {
        return this.database.ref(`receipts/${userId}/${receiptId}`).update(request);
    };

    getNextUnverifiedReceipt = (): firebase.Promise<Receipt> => {
        return this.database.ref("receipts")
            .once("value")
            .then(snap => snap.val())
            .then(mapOfUsers => Object.values(mapOfUsers))
            .then(mapOfReceipts => Object.values(mapOfReceipts))
            .then(receipts => receipts.filter((r: Receipt) => !r.reviewed))
            .then(reviewedReceipts => reviewedReceipts[0]);
    }
}