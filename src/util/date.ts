import * as joda from "js-joda";
const ZonedDateTime = joda.ZonedDateTime;

export const stringToEpochSecond = (isoString: string): number => {
    if (!isoString) {
        throw new Error("isoString cannot be undefined");
    }
    return ZonedDateTime.parse(isoString).toEpochSecond();
};