# https://www.hackerrank.com/challenges/day-of-the-programmer/problem

def dayOfProgrammer(year):
    if year > 1918:
        return f"{'12' if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0) else '13'}.09.{year}"
    elif year < 1918:
        return f"{'12' if year % 4 == 0 else '13'}.09.{year}"
    else:
        return f"26.09.{year}"
    
print(dayOfProgrammer(2017))
print(dayOfProgrammer(2016))
print(dayOfProgrammer(1800))