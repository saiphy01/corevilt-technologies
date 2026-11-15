with open(r'C:\Users\saiph\corevilt-technologies\public\assets\index-CrvfYiHn.js', 'r', encoding='utf-8') as f:
    s = f.read()

idx = s.find('function kl(')
if idx == -1:
    idx = s.find('wn.map')
print("Found hero component at", idx)
print(s[idx-300:idx+2500])
