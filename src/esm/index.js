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


class JulianDay {
  /**
   * Converts a decimal fraction of a day to hours, minutes, and seconds.
   *
   * @param {number} d - The decimal fraction of a day.
   * @returns {{ hour: number, minute: number, second: number }} - An object containing the converted hours, minutes, and seconds.
   * @throws {Error} - If the input is not a valid decimal fraction of a day.
   */
  #f2hms(d) {
    if (d < 1 && d >= 0) {
      const totalSeconds = d * 86400;
      const hour = Math.floor(totalSeconds / 3600);
      const minute = Math.floor((totalSeconds % 3600) / 60);
      const second = Math.floor(totalSeconds % 60);
      return { hour: hour, minute: minute, second: second };
    } else {
      const hour = NaN;
      const minute = NaN;
      const second = NaN;
      return { hour: hour, minute: minute, second: second };
    }
  }
  /**
   * This code snippet represents a private method called #ifnav in the JulianDay class.
   * It takes a Julian Day Number (jdd) as input and calculates the corresponding date and time components.
   * The method first checks if the input jdd is greater than or equal to 36500, and if so, it performs calculations based on a 100-year cycle.
   * If the input jdd is between 1461 and 36500, it performs calculations based on a 4-year cycle.
   * Otherwise, it performs calculations based on a 1-year cycle.
   * The method returns an object containing the year, month, day, hour, minute, and second components of the corresponding date and time.
   *
   * @param {number} jdd
   * @returns {{year: number, month: number, day:number, hour: number, minute: number, second: number}}
   */
  #ifnav(jdd) {
    const j = -1 * jdd;
    const jdn = Math.floor(j);
    const fjdn = j - jdn;
    const moarray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let y,
      zz,
      year,
      aa,
      bb,
      cc,
      dd,
      ee,
      ff,
      gg,
      hh,
      month = 0,
      day,
      df,
      hour,
      minute,
      second;
    if (jdn >= 36500) {
      aa = jdn / 36500;
      bb = Math.floor(aa);
      y = 4712 + bb * 100;
      cc = (aa - bb) * 100;
      dd = Math.floor(cc);
      zz = cc - dd;
      year = (y + dd) * -1;
      ee = zz * 365;
      ff = Math.floor(ee);
      gg = ee - ff;
      hh = Math.floor(fjdn + gg);
      df = fjdn + gg - hh;
      hour = this.#f2hms(df).hour;
      minute = this.#f2hms(df).minute;
      second = this.#f2hms(df).second;
      if ((y + dd) % 4 === 0) {
        moarray[1] = 29;
      }
      if (ff >= 31) {
        for (let i = 0; i < 11; i++) {
          if (ff > moarray[i]) {
            ff -= moarray[i];
          } else {
            break;
          }
          month = i + 2;
          if (ff + hh === 0) {
            day = ff + hh + 1;
          } else {
            day = ff + hh;
          }
        }
      } else {
        month = 1;
        if (ff + hh === 0) {
          day = ff + hh + 1;
        } else {
          day = ff + hh;
        }
      }
    } else {
      if (jdn >= 1461) {
        aa = jdn / 1461;
        bb = Math.floor(aa);
        y = 4712 + bb * 4;
        cc = (aa - bb) * 4;
        dd = Math.floor(cc);
        zz = cc - dd;
        year = (y + dd) * -1;
        ee = zz * 365;
        ff = Math.floor(ee);
        gg = ee - ff;
        hh = Math.floor(fjdn + gg);
        df = fjdn + gg - hh;
        hour = this.#f2hms(df).hour;
        minute = this.#f2hms(df).minute;
        second = this.#f2hms(df).second;
        if ((y + dd) % 4 === 0) {
          moarray[1] = 29;
        }
        if (ff >= 31) {
          for (let i = 0; i < 11; i++) {
            if (ff > moarray[i]) {
              ff -= moarray[i];
            } else {
              break;
            }
            month = i + 2;
            if (ff + hh === 0) {
              day = ff + hh + 1;
            } else {
              day = ff + hh;
            }
          }
        } else {
          month = 1;
          if (ff + hh === 0) {
            day = ff + hh + 1;
          } else {
            day = ff + hh;
          }
        }
      } else {
        aa = jdn / 365;
        bb = Math.floor(aa);
        y = 4712 + bb;
        cc = aa - bb;
        dd = Math.floor(cc);
        if (cc > 0) {
          zz = cc - dd;
        } else {
          zz = cc;
        }
        year = (y + dd) * -1;
        ee = zz * 365;
        ff = Math.floor(ee);
        gg = ee - ff;
        hh = Math.floor(fjdn + gg);
        df = fjdn + gg - hh;
        hour = this.#f2hms(df).hour;
        minute = this.#f2hms(df).minute;
        second = this.#f2hms(df).second;
        if ((y + dd) % 4 === 0) {
          moarray[1] = 29;
        }
        if (ff >= 31) {
          for (let i = 0; i < 11; i++) {
            if (ff > moarray[i]) {
              ff -= moarray[i];
            } else {
              break;
            }
            month = i + 2;
            if (ff + hh === 0) {
              day = ff + hh + 1;
            } else {
              day = ff + hh;
            }
          }
        } else {
          month = 1;
          if (ff + hh === 0) {
            day = ff + hh + 1;
          } else {
            day = ff + hh;
          }
        }
      }
    }
    return {
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
    };
  }
  /**
   * Calculates the Gregorian date and time from a positive Julian Day number.
   *
   * @param {number} jdd - The positive Julian Day number.
   * @returns {{year: number, month: number, day:number, hour: number, minute: number, second: number}} - An object containing the year, month, day, hour, minute, and second of the Gregorian date and time.
   */
  #ifpos(jdd) {
    const j = Math.floor(jdd);
    const jdn = Math.round(jdd);
    const fjdn = jdd - j;
    const a = 4 * jdn - 6884477;
    const x3 = Math.floor(a / 146097);
    const r3 = a % 146097;
    const b = 100 * Math.floor(r3 / 4) + 99;
    const x2 = Math.floor(b / 36525);
    const r2 = b % 36525;
    const c = 5 * Math.floor(r2 / 100) + 2;
    const x1 = Math.floor(c / 153);
    const r1 = c % 153;
    const cc = Math.floor((x1 + 2) / 12);
    const year = 100 * x3 + x2 + cc;
    const month = x1 - 12 * cc + 3;
    const day = Math.floor(r1 / 5) + 1;
    const hour = this.#f2hms(fjdn).hour;
    const minute = this.#f2hms(fjdn).minute;
    const second = this.#f2hms(fjdn).second;
    return {
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
    };
  }
  /**
   * Converts a Julian Day to Gregorian date and time.
   *
   * @param {number} jd - The Julian Day to convert.
   *
   * @returns {{year: number, month: number, day: number , hour:number,minute: number, second: number }} An object containing the year, month, day, hour, minute, and second of the Gregorian date and time.
   *
   * @remarks
   * If the Julian Day is positive, the Gregorian date and time are calculated using the positive Julian
   * Day and the corresponding gregorian date and time. If the Julian Day is negative, the Gregorian date
   * and time are calculated using the negative Julian Day and the corresponding negative gregorian date
   * and time.
   *
   * If the Julian Day is exactly zero, the Gregorian date and time returned are 0001-01-01 00:00:00.
   */
  toGregorian(jd) {
    // If the Julian Day is positive, calculate the Gregorian date and time using the positive Julian Day
    const jj = this.#ifpos(jd);
    // If the Julian Day is negative, calculate the Gregorian date and time using the negative Julian Day
    const kk = this.#ifnav(jd);
    // If the Julian Day is positive:
    let year, month, day, hour, minute, second;
    if (jd > 0) {
      // Set year, month, day, hour, minute, and second to the corresponding values from the positive Julian Day
      year = jj.year;
      month = jj.month;
      day = jj.day;
      hour = jj.hour;
      minute = jj.minute;
      second = jj.second;
    } else {
      // If the Julian Day is negative:
      // Set year, month, day, hour, minute, and second to the corresponding values from the negative Julian Day
      year = kk.year;
      month = kk.month;
      day = kk.day;
      hour = kk.hour;
      minute = kk.minute;
      second = kk.second;
    }
    // Return an object containing the year, month, day, hour, minute, and second of the Gregorian date and time
    return {
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
    };
  }

  /**
   * Calculates the Julian Day from a Gregorian date and time.
   *
   * @param {number} year - The year of the Gregorian date.
   * @param {number} month - The month of the Gregorian date, where January is 1 and December is 12.
   * @param {number} day - The day of the Gregorian date.
   *
   * @returns {number} The Julian Day if the input is valid, otherwise NaN.
   *
   * @remarks
   * The input must be valid, meaning that the year, month, and day must all be integers.
   * The month must be between 1 and 12, inclusive.
   * The day must be between 1 and 31, inclusive.
   *
   * The algorithm is based on the formula provided by Fliegel and Van Flandern (1968).
   * It is slightly modified to avoid rounding errors in the integer calculations.
   *
   * The Julian Day is defined as the number of days since noon on January 1, 4713 BCE (proleptic Julian calendar).
   * The algorithm calculates the Julian Day from the Gregorian year, month, and day.
   *
   */
  toJD(year, month, day) {
    // Define a function to determine if a value is an integer
    const isInt = (n) => {
      return n % 1 === 0;
    };
    // Check if the input is valid: all values must be integers and the month must be between 1 and 12, inclusive, and the day must be between 1 and 31, inclusive
    const a = isInt(year);
    const b = isInt(month);
    const c = isInt(day);
    const d = Math.abs(month) < 13;
    const e = Math.abs(day) < 32;
    if (a && b && c && d && e) {
      // If the input is valid, calculate the Julian Day using the formula provided by Fliegel and Van Flandern (1968)
      // The formula is slightly modified to avoid rounding errors in the integer calculations
      const a = Math.floor((month - 3) / 12);
      const x4 = year + a;
      const x3 = Math.floor(x4 / 100);
      const x2 = x4 % 100;
      const x1 = month - 12 * a - 3;
      const jd =
        Math.floor((146097 * x3) / 4) +
        Math.floor((36525 * x2) / 100) +
        Math.floor((153 * x1 + 2) / 5) +
        day +
        1721119 -
        0.5;
      return jd;
    } else {
      // If the input is not valid, return NaN
      return NaN;
    }
  }
}
/**
 * Creates a new instance of the JulianDay class.
 *
 * @return {JulianDay} A new instance of the JulianDay class.
 */
export default function julianDay() {
  return new JulianDay();
}
