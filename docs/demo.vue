<template>
<div>
    <div><img src="./assets/vue.png"  alt="vue"><h2>demos</h2><span>{{ emoji }}</span></div>
    <h5>verticle scroll(with top fresh ui)</h5>
    <v-scroll :isx="false" :top="true" :step="50" width="100%" :height="300">
        <div class="classForCollape">
<pre>
长恨歌

【作者】白居易
汉皇重色思倾国，御宇多年求不得。
杨家有女初长成，养在深闺人未识。
天生丽质难自弃，一朝选在君王侧。
回眸一笑百媚生，六宫粉黛无颜色。
春寒赐浴华清池，温泉水滑洗凝脂。
侍儿扶起娇无力，始是新承恩泽时。
云鬓花颜金步摇，芙蓉帐暖度春宵。
春宵苦短日高起，从此君王不早朝。
承欢侍宴无闲暇，春从春游夜专夜。
后宫佳丽三千人，三千宠爱在一身。
金屋妆成娇侍夜，玉楼宴罢醉和春。
姊妹弟兄皆列土，可怜光彩生门户。
遂令天下父母心，不重生男重生女。
骊宫高处入青云，仙乐风飘处处闻。
缓歌慢舞凝丝竹，尽日君王看不足。
渔阳鼙鼓动地来，惊破霓裳羽衣曲。
九重城阙烟尘生，千乘万骑西南行。
翠华摇摇行复止，西出都门百余里。
六军不发无奈何，宛转蛾眉马前死。
花钿委地无人收，翠翘金雀玉搔头。
君王掩面救不得，回看血泪相和流。
黄埃散漫风萧索，云栈萦纡登剑阁。
峨嵋山下少人行，旌旗无光日色薄。
蜀江水碧蜀山青，圣主朝朝暮暮情。
行宫见月伤心色，夜雨闻铃肠断声。
天旋地转回龙驭，到此踌躇不能去。
马嵬坡下泥土中，不见玉颜空死处。
君臣相顾尽沾衣，东望都门信马归。
归来池苑皆依旧，太液芙蓉未央柳。
芙蓉如面柳如眉，对此如何不泪垂。
春风桃李花开日，秋雨梧桐叶落时。
西宫南内多秋草，落叶满阶红不扫。
梨园弟子白发新，椒房阿监青娥老。
夕殿萤飞思悄然，孤灯挑尽未成眠。
迟迟钟鼓初长夜，耿耿星河欲曙天。
鸳鸯瓦冷霜华重，翡翠衾寒谁与共。
悠悠生死别经年，魂魄不曾来入梦。
临邛道士鸿都客，能以精诚致魂魄。
为感君王辗转思，遂教方士殷勤觅。
排空驭气奔如电，升天入地求之遍。
上穷碧落下黄泉，两处茫茫皆不见。
忽闻海上有仙山，山在虚无缥渺间。
楼阁玲珑五云起，其中绰约多仙子。
中有一人字太真，雪肤花貌参差是。
金阙西厢叩玉扃，转教小玉报双成。
闻道汉家天子使，九华帐里梦魂惊。
揽衣推枕起徘徊，珠箔银屏迤逦开。
云鬓半偏新睡觉，花冠不整下堂来。
风吹仙袂飘飖举，犹似霓裳羽衣舞。
玉容寂寞泪阑干，梨花一枝春带雨。
含情凝睇谢君王，一别音容两渺茫。
昭阳殿里恩爱绝，蓬莱宫中日月长。
回头下望人寰处，不见长安见尘雾。
惟将旧物表深情，钿合金钗寄将去。
钗留一股合一扇，钗擘黄金合分钿。
但教心似金钿坚，天上人间会相见。
临别殷勤重寄词，词中有誓两心知。
七月七日长生殿，夜半无人私语时。
在天愿作比翼鸟，在地愿为连理枝。
天长地久有时尽，此恨绵绵无绝期。
</pre>
        </div>
    </v-scroll>

    <h5>horizonal scroll</h5>
    <v-scroll :isx="true" :top="false" :range="0">
        <div class="classForCollape" style="width:600px">
            somethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomething
            somethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomething
        </div>
    </v-scroll>

    <h5>verticle scroll(step = 1*item)</h5>
    <v-scroll :isx="false" :height="300" :width='300' :range="50" :step="300">
        <ul class="xstep xstep3 clearfix">
            <li><span>1 item (up or down)</span></li>
            <li><span>2 item</span></li>
            <li><span>3 item</span></li>
            <li><span>4 item</span></li>
            <li><span>5 item</span></li>
            <li><span>6 item</span></li>
            <li><span>7 item</span></li>
            <li><span>8 item</span></li>
            <li><span>9 item</span></li>
            <li><span>10 item</span></li>
        </ul>
    </v-scroll>
    <h5>horizonal scroll(step = 3*item)</h5>
    <v-scroll :isx="true" :width="300" :range="0" :step="300">
        <ul class="xstep xstep1 clearfix">
            <li><span>1 item (left)</span></li>
            <li><span>2 item (Or)</span></li>
            <li><span>3 item (right)</span></li>
            <li><span>4 item</span></li>
            <li><span>5 item</span></li>
            <li><span>6 item</span></li>
            <li><span>7 item</span></li>
            <li><span>8 item</span></li>
            <li><span>9 item</span></li>
            <li><span>10 item</span></li>
        </ul>
    </v-scroll>
     <h5>horizonal scroll(step = 1*item)</h5>
    <v-scroll :isx="true" :width="300" :range="50" :step="300">
        <ul class="xstep xstep2 clearfix">
            <li><span>1 item (left or right)</span></li>
            <li><span>2 item</span></li>
            <li><span>3 item</span></li>
            <li><span>4 item</span></li>
            <li><span>5 item</span></li>
            <li><span>6 item</span></li>
            <li><span>7 item</span></li>
            <li><span>8 item</span></li>
            <li><span>9 item</span></li>
            <li><span>10 item</span></li>
        </ul>
    </v-scroll>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: ['emoji'],
  mounted() {
    var colors = [
      '#ef9a9a',
      '#f48fb1',
      '#ce93d8',
      '#b39ddb',
      '#9fa8da',
      '#90caf9',
      '#81d4fa',
      '#80deea',
      '#80cbc4',
      '#a5d6a7',
      '#c5e1a5',
      '#e6ee9c',
      '#fff59d',
      '#ffe082',
      '#ffcc80',
      '#ffab91',
      '#bcaaa4',
      '#eeeeee',
      '#b0bec5'
    ]
    var elems = document.querySelectorAll('ul.xstep li')
    var elemArr = Array.prototype.slice.call(elems)
    elemArr.map((item, index) => (item.style.backgroundColor = colors[index % colors.length]))
  }
}
</script>

<style lang="scss" scoped>
.ui-scroll {
  // margin: 20px;
  font-size: 13px;
}
ul,
li {
  list-style: none outside none;
  padding: 0;
  margin: 0;
}
.xstep li {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  vertical-align: middle;
  color: #666;
}

.xstep li span {
  margin-top: 50px;
  display: inline-block;
}

.xstep1 {
  width: 5000px;
  li {
    width: 100px;
    height: 200px;
    float: left;
  }
}

.xstep2 {
  width: 3600px;
  li {
    width: 300px;
    height: 200px;
    float: left;
  }
}
.xstep3 {
  width: 3600px;
  li {
    width: 300px;
    height: 300px;
  }
}
</style>
