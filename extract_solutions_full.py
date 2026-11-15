with open(r'C:\Users\saiph\corevilt-technologies\public\assets\index-CrvfYiHn.js', 'r', encoding='utf-8') as f:
    s = f.read()

idx = s.find('id:"solutions"')
print("Found id:solutions at", idx)
print(s[idx:idx+3500])
