import moment from "moment";
import { ModelTimeZone } from "./layer-domain/commons/model/ModelTimeZone";

export default class UtilDate {

    public static TIME_ZONES = {
        "UTC-12:00": {
            hours: -12,
            minutes: 0,
            cities: ['']
        },
        "UTC-11:00": {
            hours: -11,
            minutes: 0,
            cities: ["Samoa"]
        },
        "UTC-10:00": {
            hours: -10,
            minutes: 0,
            cities: ["Honolulu", "Adak", "Papeete"]
        },
        "UTC-9:00": {
            hours: -9,
            minutes: 0,
            cities: ["Anchorage", "Juneau", "Fairbanks"]
        },
        "UTC-8:00": {
            hours: -8,
            minutes: 0,
            cities: ["Los Ángeles", "San Francisco", "Vancouver"]
        },
        "UTC-7:00": {
            hours: -7,
            minutes: 0,
            cities: ["Denver", "Calgary", "Ciudad de México"]
        },
        "UTC-6:00": {
            hours: -6,
            minutes: 0,
            cities: ["Chicago", "Ciudad de Guatemala", "San José"]
        },
        "UTC-5:00": {
            hours: -5,
            minutes: 0,
            cities: ["Nueva York", "Toronto", "Bogotá", "Lima"]
        },
        "UTC-4:00": {
            hours: -4,
            minutes: 0,
            cities: ["Caracas", "La Paz", "Santo Domingo"]
        },
        "UTC-3:30": {
            hours: -3,
            minutes: 30,
            cities: ["San Juan de Terranova"]
        },
        "UTC-3:00": {
            hours: -3,
            minutes: 0,
            cities: ["Brasilia", "Río de Janeiro", "Sao Paulo"]
        },
        "UTC-2:00": {
            hours: -2,
            minutes: 0,
            cities: ["Grytviken"]
        },
        "UTC-1:00": {
            hours: -1,
            minutes: 0,
            cities: ["Ponta Delgada", "Angra do Heroísmo"]
        },
        "UTC+0:00": {
            hours: 0,
            minutes: 0,
            cities: ["Londres", "Dublín", "Lisboa"]
        },
        "UTC+1:00": {
            hours: 1,
            minutes: 0,
            cities: ["Berlín", "París", "Roma"]
        },
        "UTC+2:00": {
            hours: 2,
            minutes: 0,
            cities: ["Atenas", "Estambul", "El Cairo"]
        },
        "UTC+3:00": {
            hours: 3,
            minutes: 0,
            cities: ["Moscú", "San Petersburgo", "Kiev"]
        },
        "UTC+3:30": {
            hours: 3,
            minutes: 30,
            cities: ["Teherán"]
        },
        "UTC+4:00": {
            hours: 4,
            minutes: 0,
            cities: ["Samara", "Volgogrado", "Bakú"]
        },
        "UTC+4:30": {
            hours: 4,
            minutes: 30,
            cities: ["Kabul"]
        },
        "UTC+5:00": {
            hours: 5,
            minutes: 0,
            cities: ["Ekaterimburgo", "Islamabad", "Taskent"]
        },
        "UTC+5:30": {
            hours: 5,
            minutes: 30,
            cities: ["Mumbai", "Delhi", "Kolkata"]
        },
        "UTC+5:45": {
            hours: 5,
            minutes: 45,
            cities: ["Katmandú"]
        },
        "UTC+6:00": {
            hours: 6,
            minutes: 0,
            cities: ["Almaty", "Astana", "Dhaka"]
        },
        "UTC+6:30": {
            hours: 6,
            minutes: 30,
            cities: ["Islas Cocos"]
        },
        "UTC+7:00": {
            hours: 7,
            minutes: 0,
            cities: ["Novosibirsk", "Bangkok", "Jakarta"]
        },
        "UTC+8:00": {
            hours: 8,
            minutes: 0,
            cities: ["Pekín", "Singapur", "Manila"]
        },
        "UTC+8:45": {
            hours: 8,
            minutes: 45,
            cities: ["Eucla"]
        },
        "UTC+9:00": {
            hours: 9,
            minutes: 0,
            cities: ["Tokio", "Seúl", "Yakarta"]
        },
        "UTC+9:30": {
            hours: 9,
            minutes: 30,
            cities: ["Adelaida", "Darwin"]
        },
        "UTC+10:00": {
            hours: 10,
            minutes: 0,
            cities: ["Sídney", "Melbourne", "Brisbane"]
        },
        "UTC+10:30": {
            hours: 10,
            minutes: 30,
            cities: ["Isla Lord Howe"]
        },
        "UTC+11:00": {
            hours: 11,
            minutes: 0,
            cities: ["Honiara", "Nouméa"]
        },
        "UTC+11:30": {
            hours: 11,
            minutes: 30,
            cities: ["Isla Norfolk"]
        },
        "UTC+12:00": {
            hours: 12,
            minutes: 0,
            cities: ["Auckland", "Wellington", "Christchurch"]
        },
        "UTC+12:40": {
            hours: 12,
            minutes: 45,
            cities: ["Islas Chatham"]
        },
        "UTC+13:00": {
            hours: 13,
            minutes: 0,
            cities: ["Nuku'alofa"]
        },
        "UTC+14:00": {
            hours: 14,
            minutes: 0,
            cities: ["Kiritimati"]
        }
    }

    public static datetimeFormat(time_zone: ModelTimeZone = this.getTimeZoneDefault()): string {
        let dateTime = moment().utc()
        if (time_zone.hours > 0) {
            dateTime.add(time_zone.hours, 'hours')
        } else if (time_zone.hours < 0) {
            dateTime.subtract(time_zone.hours, 'hours')
        }

        if (time_zone.minutes > 0) {
            dateTime.add(time_zone.minutes, 'minutes')
        }
        return dateTime.format('YYYY-MM-DD HH:mm:ss')
    }

    public static datetimeFormatHours(time_zone: ModelTimeZone = this.getTimeZoneDefault()): string {
        let dateTime = moment().utc()
        if (time_zone.hours > 0) {
            dateTime.add(time_zone.hours, 'hours')
        } else if (time_zone.hours < 0) {
            dateTime.subtract(time_zone.hours, 'hours')
        }

        if (time_zone.minutes > 0) {
            dateTime.add(time_zone.minutes, 'minutes')
        }
        return dateTime.format('YYYY-MM-DD HH')
    }

    public static dateEpoch(time_zone: ModelTimeZone = this.getTimeZoneDefault()): number {
        let dateTime = moment().utc()
        if (time_zone.hours > 0) {
            dateTime.add(time_zone.hours, 'hours')
        } else if (time_zone.hours < 0) {
            dateTime.subtract(time_zone.hours, 'hours')
        }

        if (time_zone.minutes > 0) {
            dateTime.add(time_zone.minutes, 'minutes')
        }
        return dateTime.valueOf()
    }

    public static dateFormat(time_zone: ModelTimeZone = this.getTimeZoneDefault()): string { 
        let dateTime = moment().utc()
        if (time_zone.hours > 0) {
            dateTime.add(time_zone.hours, 'hours')
        } else if (time_zone.hours < 0) {
            dateTime.subtract(time_zone.hours, 'hours')
        }

        if (time_zone.minutes > 0) {
            dateTime.add(time_zone.minutes, 'minutes')
        }

        return dateTime.format('YYYY-MM-DD')
    }

    public static datetimeAddHours(hours: number, time_zone: ModelTimeZone = this.getTimeZoneDefault()): string {
        let dateTime = moment().utc()
        if (time_zone.hours > 0) {
            dateTime.add(time_zone.hours, 'hours')
        } else if (time_zone.hours < 0) {
            dateTime.subtract(time_zone.hours, 'hours')
        }

        if (time_zone.minutes > 0) {
            dateTime.add(time_zone.minutes, 'minutes')
        }

        dateTime.add(hours, 'hours')

        return dateTime.format('YYYY-MM-DD HH:mm:ss')
    }

    public static datetimeAddHoursFormatHours(hours: number, time_zone: ModelTimeZone = this.getTimeZoneDefault()): string {
        let dateTime = moment().utc()
        if (time_zone.hours > 0) {
            dateTime.add(time_zone.hours, 'hours')
        } else if (time_zone.hours < 0) {
            dateTime.subtract(time_zone.hours, 'hours')
        }

        if (time_zone.minutes > 0) {
            dateTime.add(time_zone.minutes, 'minutes')
        }

        dateTime.add(hours, 'hours')

        return dateTime.format('YYYY-MM-DD HH')
    }

    public static datetimeSubtractMinutes(minutes: number, time_zone: ModelTimeZone = this.getTimeZoneDefault()): string {
        let dateTime = moment().utc()
        if (time_zone.hours > 0) {
            dateTime.add(time_zone.hours, 'hours')
        } else if (time_zone.hours < 0) {
            dateTime.subtract(time_zone.hours, 'hours')
        }

        if (time_zone.minutes > 0) {
            dateTime.add(time_zone.minutes, 'minutes')
        }

        dateTime.subtract(minutes, 'minutes')

        return dateTime.format('YYYY-MM-DD HH:mm:ss')
    }

    public static datetimeAddMinutes(date: string, minutes: number): string {
        return moment(date)
            .add(minutes, "minutes").format('YYYY-MM-DD HH:mm:ss');
    }

    public static convertDatetimeFormat(date: string, time_zone: ModelTimeZone): string { 
        let dateTime = moment(date).utcOffset(time_zone.hours)
        return dateTime.format('YYYY-MM-DD HH:mm:ss')
    }
    

    public static getTimeZonePeru(): ModelTimeZone {
        return this.TIME_ZONES["UTC-5:00"]
    }

    public static getTimeZoneDefault(): ModelTimeZone {
        return this.TIME_ZONES["UTC+0:00"]
    }

}