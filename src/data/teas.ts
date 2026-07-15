 export interface TeaData {
   id: string;
   name: string;
   nameEn: string;
   category: string;
   origin: string;
   description: string;
   history: string;
   culturalNotes: string;
   brewing: {
     temperature: string;
     time: string;
     amount: string;
     vessel: string;
     steps: string[];
   };
   tasting: {
     appearance: string;
     aroma: string;
     flavor: string;
     liquor: string;
     infused: string;
   };
   translation: Record<string, string>;
   imagePrompt: string;
 }
 
 export const teas: Record<string, TeaData> = {
   tieguanyin: {
     id: "tieguanyin",
     name: "铁观音",
     nameEn: "Tieguanyin",
     category: "乌龙茶（青茶）",
     origin: "福建安溪",
     description:
       "铁观音是中国十大名茶之一，属于乌龙茶类，产于福建省安溪县。铁观音兼具红茶的甘醇和绿茶的清香，独有的「观音韵」让人回味无穷。传统工艺铁观音为浓香型，色泽乌润，汤色金黄；清香型铁观音色泽砂绿，汤色蜜绿清澈。",
     history:
       "铁观音的传说可追溯至清代乾隆年间（1725-1735年）。相传安溪有位名叫魏荫的茶农，笃信佛教，每日以清茶供奉观音菩萨。一夜梦见山崖上有一株散发着兰花香气的茶树，醒后循梦寻得此树，移栽培育，制成的茶叶沉重如铁、形美似观音，故得名「铁观音」。另有一说为乾隆皇帝观看此茶叶形似观音、重量如铁而御赐其名。铁观音在18世纪便远销东南亚和欧美，是中国乌龙茶走向世界的标志性茶品。",
     culturalNotes:
       "铁观音的「观音韵」是品茶人追求的最高境界。安溪当地有「春水秋香」之说——春茶汤感醇厚，秋茶香气高扬。铁观音也是功夫茶艺的代表，一泡好铁观音可冲泡七次以上，每一泡都有不同的风味变化，这正是中国茶文化的「一泡一世界」哲学。",
     brewing: {
       temperature: "100°C（沸水）",
       time: "第一泡15秒，每泡递增5-10秒",
       amount: "7-8克（约盖碗容量的1/3）",
       vessel: "白瓷盖碗或紫砂壶",
       steps: [
         "温杯烫盏：用沸水温热盖碗和茶杯",
         "投入茶叶：将茶叶投入温热的盖碗中，盖盖轻摇闻香（此为「摇香」）",
         "润茶：注入少量沸水，即刻倒出，唤醒茶叶",
         "冲泡：沿碗壁定点注水，避免直冲茶叶",
         "出汤：按时间要求将茶汤倒入公道杯，务求沥干",
         "品饮：先闻香，再观色，最后品味",
       ],
     },
     tasting: {
       appearance: "条索卷曲紧结，色泽砂绿油润，蜻蜓头、青蛙腿为典型特征",
       aroma: "兰花香清雅悠长，带淡淡奶香或桂花香，香气馥郁持久",
       flavor: "入口醇厚回甘，滋味鲜爽，喉韵悠长，七泡有余香",
       liquor: "金黄偏蜜绿，清澈透亮",
       infused: "叶底肥厚软亮，绿叶红镶边，叶片完整有弹性",
     },
     translation: {
       en: "Tieguanyin is a premium Chinese oolong tea from Anxi, Fujian. Named after the Buddhist deity Guanyin, it is known for its distinctive orchid fragrance and lingering sweetness.",
       ja: "鉄観音は福建省安渓県産の高級烏龍茶で、蘭のような香りと長く続く甘みが特徴です。",
       ko: "철관음은 복건성 안계현에서 생산되는 고급 우롱차로, 난초 향기와 오래가는 단맛이 특징입니다.",
     },
     imagePrompt: "",
   },
   longjing: {
     id: "longjing",
     name: "西湖龙井",
     nameEn: "Longjing (Dragon Well)",
     category: "绿茶",
     origin: "浙江杭州西湖",
     description:
       "西湖龙井是中国十大名茶之首，属于绿茶类，产于浙江省杭州市西湖风景区的群山中。龙井茶以「色绿、香郁、味甘、形美」四绝著称。干茶扁平光滑，色泽翠绿；冲泡后汤色嫩绿明亮，豆花香或栗香清幽，滋味鲜爽甘醇。",
     history:
       "龙井茶的历史可追溯至唐代，但真正闻名天下是在清代。传说乾隆皇帝下江南时，在杭州狮峰山下品尝龙井茶，赞不绝口，并将十八棵茶树封为「御茶」。这十八棵御茶树至今仍在西湖畔生长。龙井茶也是中国第一批国家级非物质文化遗产，其手工炒制技艺是茶文化的活化石。",
     culturalNotes:
       "龙井茶的采摘极为讲究，以「明前茶」（清明前采摘）为最上品，此时芽叶细嫩，氨基酸含量最高，茶汤鲜甜无比。「雨前茶」（谷雨前采摘）次之，但香气更浓。真正的西湖龙井产量有限，核心产区仅包括狮峰、龙井、云栖、虎跑、梅家坞五大产区。",
     brewing: {
       temperature: "80-85°C",
       time: "1-2分钟",
       amount: "3-5克",
       vessel: "透明玻璃杯或白瓷杯",
       steps: [
         "温杯：用热水温热玻璃杯",
         "投茶：将茶叶投入杯中（上投法：先倒水后放茶）",
         "注水：沿杯壁注入80°C热水至七分满",
         "观舞：欣赏茶叶在杯中缓缓舒展、上下沉浮的「茶舞」",
         "闻香：凑近杯口轻嗅清新的豆花香",
         "品饮：小口慢品，感受鲜爽回甘",
       ],
     },
     tasting: {
       appearance: "扁平光滑，挺直匀整，色泽翠绿或糙米色",
       aroma: "清雅的豆花香或板栗香，幽而不俗",
       flavor: "鲜爽甘醇，入口柔和，回甘迅速而持久",
       liquor: "嫩绿清澈，明亮如春水",
       infused: "一芽一叶或一芽两叶，叶底幼嫩成朵，匀齐鲜活",
     },
     translation: {
       en: "Longjing is China's most famous green tea, from Hangzhou's West Lake region. It's prized for its flat jade-green leaves, chestnut aroma, and sweet, mellow taste.",
       ja: "龍井茶は中国で最も有名な緑茶で、杭州の西湖周辺で産出されます。平たく美しい形と栗のような香りが特徴です。",
       ko: "용정차는 중국에서 가장 유명한 녹차로, 항저우 서호 지역에서 생산됩니다. 납작하고 아름다운 잎과 밤향이 특징입니다.",
     },
     imagePrompt: "",
   },
   puer: {
     id: "puer",
     name: "普洱茶（熟普）",
     nameEn: "Pu'er (Shou / Ripe)",
     category: "黑茶",
     origin: "云南西双版纳",
     description:
       "普洱茶是中国历史最悠久的茶之一，产自云南，以普洱府命名。熟普经过人工渥堆发酵，茶性温和，汤色红浓明亮如琥珀，陈香独特，滋味醇厚顺滑。普洱茶具有「越陈越香」的特性，被誉为「可以喝的古董」。",
     history:
       "普洱茶的历史可追溯至东汉时期，在唐代已成为重要的贸易商品。明清时期，普洱茶通过「茶马古道」远销西藏、东南亚乃至欧洲。马帮将茶叶压制成饼、砖、沱等形状以方便运输，这一传统延续至今。1973年，人工渥堆发酵技术研制成功，熟普诞生，大大缩短了普洱茶的陈化时间。",
     culturalNotes:
       "普洱茶是有生命的茶——它在存放过程中持续发酵转化，从新茶的青涩到老茶的醇厚，可能跨越数十年。普洱茶投资和收藏在中国已形成独特文化。八马茶业的普洱茶系列注重原料品质和仓储条件，每一饼茶都有可追溯的「身份证」。",
     brewing: {
       temperature: "100°C（沸水）",
       time: "第一泡5-10秒（润茶），第二泡15秒，每泡递增",
       amount: "6-8克",
       vessel: "紫砂壶或白瓷盖碗",
       steps: [
         "撬茶：用茶针从茶饼侧面撬取适量茶叶",
         "温壶：沸水温热茶壶",
         "投茶与醒茶：投入茶叶，盖盖轻摇闻干香",
         "润茶：沸水快速冲泡后即刻倒出（熟普建议润两次）",
         "冲泡：沸水高冲，激发茶香",
         "出汤：按时间出汤，茶汤倒入公道杯",
         "品饮：感受陈香在口腔中的变化",
       ],
     },
     tasting: {
       appearance: "条索肥壮紧实，色泽褐红或红褐，金毫显露",
       aroma: "陈香浓郁，带枣香、参香或木质香，无堆味杂味为佳",
       flavor: "醇厚顺滑，入口绵柔，甜润饱满，喉韵深长",
       liquor: "红浓明亮，如琥珀色，老茶更显透亮",
       infused: "叶底红褐油润，有弹性，老茶叶底更显韧性",
     },
     translation: {
       en: "Pu'er is a aged fermented tea from Yunnan province. Known for its earthy richness and smooth texture, it improves with age like fine wine.",
       ja: "プーアル茶は雲南省産の後発酵茶で、独特の深い味わいと滑らかな口当たりが特徴。長期熟成により風味が向上します。",
       ko: "보이차는 윈난성에서 생산되는 후발효차로, 깊은 맛과 부드러운 질감이 특징이며 오래 보관할수록 품질이 좋아집니다.",
     },
     imagePrompt: "",
   },
   jinjunmei: {
     id: "jinjunmei",
     name: "金骏眉",
     nameEn: "Jin Jun Mei",
     category: "红茶",
     origin: "福建武夷山桐木关",
     description:
       "金骏眉是正山小种红茶中的顶级品种，2005年创制于福建武夷山。选用茶树嫩芽为原料，一斤金骏眉约需6-8万颗芽头，弥足珍贵。干茶金黄黑相间，金毫显露；茶汤金黄透亮，蜜香与花果香交织，滋味甘甜柔滑，被誉为「红茶中的茅台」。",
     history:
       "金骏眉的诞生是中国红茶史上的传奇。2005年，正山茶业在传统正山小种工艺基础上，首次尝试用全芽头制作高端红茶。研发过程中经历了无数次失败，最终成功创制出金骏眉。「骏」字取自研发团队核心成员的共同期望——「骏马奔腾」，「眉」则指茶叶形状如眉。金骏眉的诞生带动了中国高端红茶的市场崛起。",
     culturalNotes:
       "金骏眉产自武夷山国家级自然保护区内的桐木关，海拔1200米以上，生态环境极佳。真正的桐木关金骏眉产量极为有限，市场上绝大多数「金骏眉」并非核心产区产品。八马茶业与桐木关茶农建立了长期稳定的合作关系，确保每一批金骏眉的正宗品质。",
     brewing: {
       temperature: "85-90°C",
       time: "第一泡15-20秒，每泡递增5-10秒",
       amount: "3-5克",
       vessel: "白瓷盖碗或玻璃杯",
       steps: [
         "温杯：温热盖碗或玻璃杯",
         "投茶：投入茶叶，轻摇闻香",
         "注水：沿杯壁注入85-90°C热水，避免直冲芽头",
         "出汤：按时间要求出汤至公道杯",
         "品饮：先观汤色，再闻蜜香，最后小口品味",
       ],
     },
     tasting: {
       appearance: "条索紧秀，金黑相间，金毫满披，细嫩匀整",
       aroma: "蜜香浓郁，花果香交织，香型丰富优雅持久",
       flavor: "甘甜柔滑，滋味醇厚鲜爽，无苦涩，回甘明显",
       liquor: "金黄透亮，光圈明显，有「金圈」之称",
       infused: "芽头肥壮，金黄明亮，柔软有弹性",
     },
     translation: {
       en: "Jin Jun Mei is a premium black tea (hongcha) from Wuyi Mountain, Fujian. Made from tender leaf buds, it offers a honey-like sweetness and smooth, mellow taste.",
       ja: "金駿眉は福建省武夷山産の最高級紅茶で、柔らかな茶芽のみを使用。蜂蜜のような甘さと滑らかな味わいが特徴です。",
       ko: "진쥔메이는 복건성 무이산에서 생산되는 최고급 홍차로, 부드러운 찻순만을 사용하여 꿀 같은 단맛과 매끄러운 맛이 특징입니다.",
     },
     imagePrompt: "",
   },
   dahongpao: {
     id: "dahongpao",
     name: "大红袍",
     nameEn: "Da Hong Pao",
     category: "乌龙茶（青茶）",
     origin: "福建武夷山",
     description:
       "大红袍是武夷岩茶之王，属于乌龙茶类，产自福建武夷山。以其独特的「岩骨花香」被誉为「茶中之王」。大红袍的母树仅存六株，生长在武夷山九龙窠的悬崖峭壁上，树龄已逾三百余年。商品大红袍为母树无性繁殖的后代，继承了母树的品质特征。",
     history:
       "大红袍的名字来源于一个动人的传说。明代有一考生在途径武夷山时突发重病，天心寺僧人取寺旁茶树之叶为其煎服，病即痊愈。后该考生高中状元，将自身所穿大红袍披于茶树上以谢恩，「大红袍」之名由此而来。20世纪70年代，大红袍母树被列为国家一级保护植物，2006年起停止采摘。如今市面上的大红袍均为母树的无性繁殖后代。",
     culturalNotes:
       "大红袍讲究「岩韵」，这是武夷岩茶独有的风味特征——岩石赋予茶汤的矿物质感和独特香气。品大红袍时要关注「活、甘、清、香」四字诀，即汤色活、滋味甘、入口清、香气幽。大红袍也是八马茶业的明星产品线之一，其「赛珍珠」系列在岩茶爱好者中享有盛誉。",
     brewing: {
       temperature: "100°C（沸水）",
       time: "第一泡10-15秒，每泡递增5-10秒，可冲泡8次以上",
       amount: "8克（约盖碗容量的1/3）",
       vessel: "紫砂壶或白瓷盖碗（建议用紫砂壶激扬茶气）",
       steps: [
         "温壶烫盏：用沸水充分温热茶具",
         "投茶：投入茶叶，盖上盖子轻摇闻香——岩茶的「摇香」极为讲究",
         "润茶：沸水高冲，快速倒出",
         "冲泡：沿器壁定点低斟注水，避免翻动茶叶",
         "出汤：前几泡快速出汤，后几泡适当延长",
         "品饮：啜饮入口，让茶汤在口腔中打转，感受「岩韵」",
       ],
     },
     tasting: {
       appearance: "条索紧结壮实，色泽绿褐鲜润，部分带红边",
       aroma: "岩骨花香——兰花香、桂花香、蜜桃香等复合香气，幽远持久",
       flavor: "醇厚甘润，岩韵明显，有独特的「岩石味」，回甘强烈持久",
       liquor: "橙黄或深橙红色，清澈艳丽",
       infused: "叶底软亮，绿叶红镶边，三分红七分绿，叶片完整",
     },
     translation: {
       en: "Da Hong Pao is the king of Wuyi Rock Tea (Yancha), a famous oolong from Wuyi Mountain. It is revered for its 'rock rhyme' - a mineral richness and lasting fragrance.",
       ja: "大红袍は武夷岩茶の王様で、武夷山産の有名な烏龍茶。岩韵と呼ばれるミネラル感と長く続く香りが特徴です。",
       ko: "대홍포는 무이암차의 왕으로, 무이산에서 생산되는 유명한 우롱차입니다. 암운이라고 불리는 미네랄 감과 오래가는 향이 특징입니다.",
     },
     imagePrompt: "",
   },
 };
 
 export type TeaId = keyof typeof teas;
 
 export function getTeaById(id: string): TeaData | undefined {
   return teas[id as TeaId];
 }
 
 export function getAllTeas(): [string, TeaData][] {
   return Object.entries(teas);
 }
