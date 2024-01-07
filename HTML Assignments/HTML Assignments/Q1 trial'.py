str1=input("String : ")
str2=' '
for i in str1:
    if i==str2[-1]:
        str2+='*'
    else:
        str2+=i
str2=str2.strip()
print(str2)