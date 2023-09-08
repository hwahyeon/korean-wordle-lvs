from decompose import hangul_decompose
import pandas as pd
import os
import json

os.chdir('dataset/xls')
lst_xls = os.listdir()


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
        if len(hangul_decompose(j)) == 5:
            wordle_list.append(j)

    # list를 JSON 파일로 저장
    with open(f'my_data{i}.json', 'w', encoding='utf-8') as json_file:
        json.dump(wordle_list, json_file, ensure_ascii=False, indent=4)