/**
 * Converting Julian and Gregorian dates to each other.
 * ---
 * 
 * **_This package assumes use of the Gregorian calendar and only works correctly for dates after 1858._**
 * 
 * @ 2024 Hin Thar
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * 
 * 
 * Checked with online converter of aavso, https://www.aavso.org/jd-calculator.
 * 
 */


declare namespace JulianDay {
    /**
   * Converts a Julian Day to Gregorian date and time.
   * ---
   *
   * @param jd - The Julian Day to convert.
   * @returns An object containing the year, month, day, hour, minute, and second of the Gregorian date and time.
   *
   * @example
   *
   * const jd = 2459345.5;
   * const result = toGregorian(jd);
   * console.log(result); // Output: { year: 2021, month: 1, day: 1, hour: 0, minute: 0, second: 0 }
   */

    function toGregorian(jd: number): {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
    };
    /**
   *
   * @param year - The year of the Gregorian date.
   * @param month - month - The month of the Gregorian date.
   * @param day - The day of the Gregorian date.
   * @returns  The Julian Day corresponding to the given Gregorian date.
   *
   * @example
   *
   * const year = 2021;
   * const month = 1;
   * const day = 1;
   * const result = toJD(year, month, day);
   *
   * console.log(result); // Output: 2459345.5
   */
    function toJD(year: number, month: number, day: number): number;
}
export default JulianDay;