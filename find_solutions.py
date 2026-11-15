with open(r'C:\Users\saiph\corevilt-technologies\public\assets\index-CrvfYiHn.js', 'r', encoding='utf-8') as f:
    s = f.read()

import re
pos = 0
while True:
    idx = s.find('id:"solutions"', pos)
    if idx == -1:
        break
    print("Found id:solutions at", idx)
    print(s[idx-200:idx+1500])
    pos = idx + 14
    break
