# Calculate the angle between hands of an analog clock

## Overview
Consider a standard analog clock. The clock has three hands -- an hour hand, a minute hand, and a second hand. Given the time of day, represent it on an analog clock and write a function to calculate the smallest (acute) angle between any of the two hands on the clock.
Since this is an analog clock, each hand moves smoothly around the face of the clock. In other words, the hands do not necessarily point directly at a numbered position on the clock's face.
## Input
timeOfDay {String} - This argument should always be a string with eight characters, formatted as "hh:mm:ss" . The hour value should always be between 1 and 12 . The minute and second values should always be
between 0 and 59 .

## Output
degrees {Number} - A non-negative number, rounded to two decimal places, that represents degrees of the smallest possible angle between any two of the clock's hands.

## Example
If the timeOfDay is "12:00:00" , the result should be 00.00
                  
