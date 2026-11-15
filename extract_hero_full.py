with open(r'C:\Users\saiph\corevilt-technologies\public\assets\index-CrvfYiHn.js', 'r', encoding='utf-8') as f:
    s = f.read()

idx = s.find('wn=[{id:"signage"')
print("Found wn at", idx)
print(s[idx:idx+4000])
