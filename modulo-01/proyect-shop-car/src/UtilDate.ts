import moment from "moment";

export default class UtilDate {

    public static datetimeFormat(): string {
        let dateTime = moment().utc()
        return dateTime.format('YYYY-MM-DD HH:mm:ss')
    }

}