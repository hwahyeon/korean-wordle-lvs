from decompose import hangul_decompose
import pandas as pd
import os
import json


## 우리말샘 data 추출
# os.chdir()
lst_xls = os.listdir()
'''
lst_xls = ['1210230_100000.xls', '1210230_1000000.xls', '1210230_1050000.xls', '1210230_1100000.xls', '1210230_1150000.xls', '1210230_1170752.xls', '1210230_150000.xls', '1210230_200000.xls', '1210230_250000.xls', 
'1210230_300000.xls', '1210230_350000.xls', '1210230_400000.xls', '1210230_450000.xls', '1210230_50000.xls', '1210230_500000.xls', '1210230_550000.xls', '1210230_600000.xls', '1210230_650000.xls', '1210230_700000.xls', '1210230_750000.xls', '1210230_800000.xls', '1210230_850000.xls', '1210230_900000.xls', '1210230_950000.xls']
'''
def add_to_json(new_set, file_path='hard_mode.json'):
    try:
        # 기존 데이터 불러오기
        with open(file_path, 'r', encoding='utf-8') as json_file:
            existing_data = json.load(json_file)
    except FileNotFoundError:
        # 파일이 없으면 새로운 리스트 생성
        existing_data = []

    # 새 데이터 추가
    existing_data.extend(list(new_set))

    # 데이터를 JSON 파일로 다시 저장
    with open(file_path, 'w', encoding='utf-8') as json_file:
        json.dump(existing_data, json_file, ensure_ascii=False, indent=4)



for i in lst_xls:
    result_set = set()

    data = pd.read_excel(i)
    condition_pos = data['품사'].isin(['명사', '감·명', '관·명', '명·부', '의존 명사'])
    condition_unit = data['구성 단위'] == '단어'
    condition_category = data['범주'].isna()

    filtered_data = data[condition_pos & condition_unit & condition_category]

    # 첫 번째 열만 선택합니다
    first_column = filtered_data.iloc[:, 0].str.replace('-', '')
    short_words = first_column[first_column.str.len() <= 3]
    result_set.update(short_words)

    wordle_list = []

    for j in result_set:
        word = hangul_decompose(j)
        if len(word) == 5:
            wordle_list.append(word)
    
    add_to_json(wordle_list)
