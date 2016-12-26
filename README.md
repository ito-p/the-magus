# The Magus

MECEなjsonオブジェクトを生成できるmoduleです。

## 1.組み合わせを準備
```js
const area = [ '渋谷', '新宿' ];
const timeZone = [ '夜' ];
const leisure = [ 'カラオケ', 'ボーリング', 'ダーツ' ];
const combinations = { area, timeZone, leisure };
```

## 2.書き換えたいオブジェクトを準備
```js
const templateData = {
  text: '今日の$timeZoneは、$areaのあたりへ、$leisureしに行こう！'
};
```

## 3.実行
```js
const magus = new Magus(combinations, templateData);

magus.produce((product) => {
  console.info(product);
});

/**
* CONSOLE

{ text: '今日の夜は、渋谷のあたりへ、カラオケしに行こう！' }
{ text: '今日の夜は、新宿のあたりへ、ボーリングしに行こう！' }
{ text: '今日の夜は、渋谷のあたりへ、ダーツしに行こう！' }
{ text: '今日の夜は、新宿のあたりへ、カラオケしに行こう！' }
{ text: '今日の夜は、渋谷のあたりへ、ボーリングしに行こう！' }
{ text: '今日の夜は、新宿のあたりへ、ダーツしに行こう！' }

*/

```
