from decompose import hangul_decompose
import pandas as pd
import json
import re

# 파일 불러오기
data = pd.read_excel('dataset.xls')

# 숫자 제거 함수
def remove_numbers(text):
    return re.sub(r'\d+', '', text)

# 첫 번째 행을 리스트로 변환
first_column = data.iloc[:, 0].tolist()

decomposed_list = []

for i in first_column:
    s = hangul_decompose(remove_numbers(i))
    if len(s) == 5:
        decomposed_list.append(s)

# 결과를 JSON 형식으로 저장
with open('easy_mode.json', 'w', encoding='utf-8') as json_file:
    json.dump(decomposed_list, json_file, ensure_ascii=False, indent=4)
