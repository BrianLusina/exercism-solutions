from datetime import datetime
import math

"""
datetime(year,mth,day,hour,min,sec,micro)
A gigasecond is one billion (10**9) seconds

1year = 3.154e+7 seconds
1mth = 2.628e+6 seconds
1wk = 604800 secs
1day = 86400 seconds
1hour= 3600
1min = 60
"""


def add_gigasecond(birthdate):
    gigasec = 10**9
    yrsinsec, mthsinsec, dysinsec, hrsinsec, minsinsec = 3.154e+7, 2.628e+6, 86400, 3600, 60

    # get month, day and year from the datetime object
    year, month, day = birthdate.year, birthdate.month, birthdate.day

    # dictionary with days as keys and lists with month numbers for given number of days
    numOfDays = {31: [1, 3, 5, 7, 8, 10, 12], 30: [4, 6, 9, 11], 28: 2, 29: 2}

    yrsToAdd = int((gigasec // yrsinsec))  # years to add
    gigasec -= yrsToAdd * yrsinsec
    print("Yrs", yrsToAdd)

    mthstoAdd = int(gigasec // mthsinsec)  # months to add
    gigasec -= mthstoAdd * mthsinsec
    print("Mths", mthstoAdd)

    dystoadd = int(gigasec // dysinsec)  # days to add
    gigasec -= dystoadd * dysinsec
    print("Dys", dystoadd)

    hrstoadd = int(gigasec // hrsinsec)  # Hours to add
    gigasec -= hrstoadd * hrsinsec
    print("Hours", hrstoadd)

    minstoadd = int(gigasec // minsinsec)  # mins to add
    gigasec -= minstoadd * minsinsec
    print("Mins", minstoadd)

    gigasec = int(gigasec)
    print("Sec", gigasec)

    # check the day, and subtract from the month to get actual day
    actualday = 0
    newday = (day + dystoadd)
    if newday > 31 and month in numOfDays[31]:
        actualday = newday - 31
        month += 1
    elif newday > 30 and month in numOfDays[30]:
        actualday = newday - 30
        month += 1
    elif newday > 29 and month in numOfDays[29]:
        actualday = newday - 29
        month += 1
    elif newday >28 and month in numOfDays[28]:
        actualday = newday - 28
        month += 1

    # evaluating for month
    newmonth = month + mthstoAdd
    if newmonth >= 12:
        year += yrsToAdd + 1
        newmonth = 1
    else:
        year += yrsToAdd
    return datetime(year, newmonth, actualday, hrstoadd, minstoadd, gigasec)