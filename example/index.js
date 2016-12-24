// @flow

import Magus from '../src/Magus';

const area = [ '渋谷', '新宿' ];
const timeZone = [ '夜' ];
const leisure = [ 'カラオケ', 'ボーリング', 'ダーツ' ];

const data = {
  text: '今日の$timeZoneは、$areaのあたりへ、$leisureしに行こう！'
};

const magus = new Magus({ area, timeZone, leisure }, JSON.stringify(data));

magus.produce((product, combi) => {
  console.info(product, combi);
});
