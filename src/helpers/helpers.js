export function percentageDifference(value1, value2) {
    return Math.floor( ( Math.abs(value1 - value2) / ((value1 + value2) / 2) ) * 100) ;
}