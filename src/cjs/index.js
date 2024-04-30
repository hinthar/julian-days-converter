class JulianDay {
  #f2hms(d) {
    if (d < 1 && d >= 0) {
      const totalSeconds = d * 86400;
      const hour = Math.floor(totalSeconds / 3600);
      const minute = Math.floor((totalSeconds % 3600) / 60);
      const second = Math.floor(totalSeconds % 60);

      return {
        hour,
        minute,
        second,
      };
    } else {
      const hour = NaN;
      const minute = NaN;
      const second = NaN;
      return {
        hour,
        minute,
        second,
      };
    }
  }
  #ifnav(jdd) {
    const j = -1 * jdd;
    const jdn = Math.floor(j);
    const fjdn = j - jdn; // ****** //
    const moarray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //-----------------------
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
      month = 1,
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
      year,
      month,
      day,
      hour,
      minute,
      second,
    };
  }
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

    // Fraction of jd to hour, minute, second
    const hour = this.#f2hms(fjdn).hour;
    const minute = this.#f2hms(fjdn).minute;
    const second = this.#f2hms(fjdn).second;
    return {
      year,
      month,
      day,
      hour,
      minute,
      second,
    };
  }
  toGregorian(jd) {
    const jj = this.#ifpos(jd);
    const kk = this.#ifnav(jd);
    let year, month, day, hour, minute, second;
    if (jd > 0) {
      year = jj.year;
      month = jj.month;
      day = jj.day;
      hour = jj.hour;
      minute = jj.minute;
      second = jj.second;
    } else {
      year = kk.year;
      month = kk.month;
      day = kk.day;
      hour = kk.hour;
      minute = kk.minute;
      second = kk.second;
    }
    return {
      year,
      month,
      day,
      hour,
      minute,
      second,
    };
  }
  toJD(year, month, day) {
    const isInt = (n) => {
      return n % 1 === 0;
    };
    const a = isInt(year);
    const b = isInt(month);
    const c = isInt(day);
    const d = Math.abs(month) < 13;
    const e = Math.abs(day) < 32;
    if (a && b && c && d && e) {
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
      return NaN;
    }
  }
}

function julianDay() {
  return new JulianDay();
}

module.exports = julianDay;
