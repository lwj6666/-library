let date = new Date()

// 这个库自己处理时间使用
class Datehandle {
    constructor(date) {
        if (typeof date === 'number') {
            console.log(11);
            date = new Date(date)
        }
        this.year = date.getFullYear()
        this.month = date.getMonth() + 1
        this.day = date.getDate()
        this.hour = date.getHours()
        this.minute = date.getMinutes()
        this.second = date.getSeconds()
    }
    // 处理成 "YYYY-MM-DD"格式 
    getYMD() {
        let MM = this.month < 10 ? `0${this.month}` : this.month
        let DD = this.day < 10 ? `0${this.day}` : this.day
        return `${this.year}-${MM}-${DD}`
    }
    // 处理成 "YYYY-MM-DD hh:mm:ss"格式2022-10-10 16:51:00
    getYMDHMS() {
        let MM = this.month < 10 ? `0${this.month}` : this.month
        let DD = this.day < 10 ? `0${this.day}` : this.day
        let hh = this.hour < 10 ? `0${this.hour}` : this.hour
        let mm = this.minute < 10 ? `0${this.minute}` : this.minute
        let ss = this.second < 10 ? `0${this.second}` : this.second
        return `${this.year}-${MM}-${DD} ${hh}:${mm}:${ss}`
    }
}

export default Datehandle
