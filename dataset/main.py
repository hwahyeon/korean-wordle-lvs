from decompose import hangul_decompose
import pandas as pd
import os
import json

os.chdir('dataset/xls')
lst_xls = os.listdir()


def add_to_json(new_set, file_path='dataset.json'):
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
