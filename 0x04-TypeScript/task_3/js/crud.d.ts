import { RowID, RowElement } from "./interface";

export declare function insertRow(row: RowElement): RowID;

export declare function deleteRow(rowId: RowID): null;

export declare function updateRow(rowId: RowID, row: RowElement): RowID;
