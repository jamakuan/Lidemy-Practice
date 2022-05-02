n = 153
number = len(str(n))

a = n // 100
d = n%100

b = d//10

c = d%10

print(a**number,b**number , c**number, number)
print(a*a*a, b*b*b, c*c*c)

if n == a*a*a + b*b*b + c*c*c:
  print("Yes")
else:
  print("No")

