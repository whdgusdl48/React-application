const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");
const cheerio = require("cheerio");
const multer = require('multer');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/Seoul2',(req,res) => {
  const getHtml = async () => {
    try {
      const a = await axios.get("http://www.seoul.go.kr/coronaV/coronaStatus.do"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };

  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#tab-cont1 > div > div.status > div.status-seoul");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          확진자 : $(this).find('div.cell.cell1 > div > p.counter').text(),
          검사중 : $(this).find('div.cell.cell2 > div.num.num3 > p.counter').text(),
          자가격리자 : $(this).find('div.cell.cell3 > div.num.num6 > p.counter').text(),
      };
    });

    const data = ulList.filter(n => n.확진자);
    res.send(data)
  })

});
app.get('/api/Gwangjoo',(req,res) => {
  const getHtml = async () => {
    try {
      const a = await axios.get("https://www.gwangju.go.kr/"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("body > table > tbody > tr");
  
    $bodyList.each(function(i, elem) {
      if(i % 2 == 1){
      
    }else{
      ulList[i] = {
        확진자번호 : $(this).find(`td:nth-child(1)`).text(),
        인적사항 : $(this).find('th').text(),
        확진경위 : $(this).find('td:nth-child(3)').text(),
        확진일 : $(this).find('td:nth-child(4)').text(),
        접촉 : $(this).find('td:nth-child(5)').text(),
        격리시설 : $(this).find('td:nth-child()').text(),
    };
    }
    
    });

    const data = ulList.filter(n => n.확진자번호);
    res.send(data)
  })

});

app.get('/api/Ulsan3',(req,res) => {
  const getHtml = async () => {
    try {
      const a = await axios.get("http://www.ulsan.go.kr/corona.jsp#con"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };
  
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#patients2 > tbody > tr");
   
    $bodyList.each(function(i, elem) {
         ulList[i] = {
           확진자 : $(this).find('td:nth-child(1)').text(),
           격리중 : $(this).find('td:nth-child(2)').text(),
           격리해제 : $(this).find('td:nth-child(3)').text(),
           감시해제 : $(this).find('td:nth-child(5)').text(),
           검사중 : $(this).find('td:nth-child(6)').text(),
         }
    });
    const data = ulList.filter(n => n.확진자);  
    res.send(data)
  })
});

app.get('/api/Ulsan2',(req,res) => {
  const getHtml = async () => {
    try {
      const a = await axios.get("http://www.ulsan.go.kr/corona.jsp#con"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };

  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#patients > tbody > tr");
   
    $bodyList.each(function(i, elem) {
        if($(this).find('td > ul > li').text() !== ''){
          ulList[i] = {
            경로 : $(this).find('td > ul > li').text(),
          }
        }
        else if($(this).find('td > h4').text() !== ''){
          ulList[i] = {
            경로 : '확인중'
          }
        }
        else{
          ulList[i] = {
            경로 : $(this).find('td > ul > li').text(),
          }
        }
         
    });
    const data = ulList.filter(n => n.경로);  
    res.send(data)
})
});

app.get('/api/Ulsan',(req,res) => {
  const getHtml = async () => {
    try {
      const a = await axios.get("http://www.ulsan.go.kr/corona.jsp#con"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };
  
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#patient4");

    $bodyList.each(function(i, elem) {
        ulList[i] = {
          인적사항 : $(this).find('td:nth-child(1)').text(),
          감염경로 : $(this).find('td.name').text(),
          접촉 : $(this).find('td:nth-child(3)').text(),
          격리시설 : $(this).find('td:nth-child(4)').text(),
          번호 : i,
        }   
    });

    const data = ulList.filter(n => n.인적사항)  
    res.send(data)
  })

});

app.get('/api/Busan1',(req,res) => {
  const getHtml = async () => {
    try {
      const a = await axios.get("http://www.busan.go.kr/corona/index.jsp"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#contents > div:nth-child(1) > div > div.list_body > ul");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          인적사항 : $(this).find('li:nth-child(1) > span').text(),
          감염경로 : $(this).find('li:nth-child(2) > span').text(),
          접촉 : $(this).find('li:nth-child(3) > span').text(),
          격리시설 : $(this).find('li:nth-child(4) > span').text(),
      };
    });

    const data = ulList.filter(n => n.인적사항);
    res.send(data)
  })

});

app.get('/api/Busan2',(req,res) => {
  const getHtml = async () => {
    try {
      const a = await axios.get("http://www.busan.go.kr/corona/index.jsp"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };
    
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#header > div > div.main_banner > div > div");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          확진자 : $(this).find('span.item2').text(),
          추가확진자 : $(this).find('span.item3').text(),
          격리해제 : $(this).find('span.item4').text(),
      };
    });

    const data = ulList.filter(n => n.확진자);
    res.send(data)
  })

});

app.get('/api/Incheon',(req,res) => {
  res.send([{
    'id': 1,
    '환자번호': '#2641',
    '성별나이': '남/44세',
    'date': '확인중',
    '주요증상' : '',
    '퇴원' : '',
    '비고': '대구방문'
    },
    {
      'id': 2,
      '환자번호': '#2592',
      '성별나이': '남/64세',
      'date': '확인중',
      '주요증상' : '',
      '퇴원' : '',
      '비고': '서울에서 확진자 접촉'
      },
    {
      'id': 3,
      '환자번호': '#2021',
      '성별나이': '여/28세',
      'date': '20.02.21(금)',
      '주요증상' : '발열',
      '퇴원' : '',
      '비고': '서울 중구 의류회사 근무'
    },
    {
    'id': 4,
    '환자번호': '#1129',
    '성별나이': '남/57세',
    'date': '20.01.31(금)',
    '주요증상' : '인후통 가래 기침',
    '퇴원' : '',
    '비고': ''
    },
    {
      'id': 6,
      '환자번호': '#398',
      '성별나이': '여/60세',
      'date': '20.02.21(금)',
      '주요증상' : '미열',
      '퇴원' : '',
      '비고': '신천지 대구교회 방문'
    },
    {
      'id': 6,
      '환자번호': '#1',
      '성별나이': '여/35세',
      'date': '20.01.18(토)',
      '주요증상' : '발열,오한,근육통',
      '퇴원' : '20.02.06',
      '비고': '중국인,우한시 거주 인천공항 환승객'
    },
    
])
});

app.get('/api/World1',(req,res) => {
  const getHtml = async () => {
    try {
      const a = await axios.get("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun="); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };
  
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#content > div > div.bv_content > div > div > div.data_table.mgt16 > table > tbody > tr");
    
    $bodyList.each(function(i, elem) {
      if($(this).find('td:nth-child(3)').text() != ""){
        ulList[i] = {
          name : $(this).find('td.w_bold').text(),
          number : $(this).find('td:nth-child(3)').text()
        }
      }
      else{
        ulList[i] = {
          name : $(this).find('td.w_bold').text(),
          number : $(this).find('td:nth-child(2)').text()
        }
      }
    });

    const data = ulList.filter(n => n.name);   
    res.send(data)
  })
})
app.get('/api/Daejeon',(req,res) => {
  const getHtml = async () => {
    try {
      const a = await axios.get("https://www.daejeon.go.kr/corona19/index.do?tab=2&subTab=2"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };
  
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#contBox > div.blog_borad > div.story_view > div > div:nth-child(1) > div > table > tbody > tr");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
        번호 : $(this).find('td:nth-child(1)').text(),
        질본번호 : $(this).find('td:nth-child(2)').text(),
        확진일자 : $(this).find('td:nth-child(3)').text(),
        성별 : $(this).find('td:nth-child(4)').text(),
        거주지 : $(this).find('td:nth-child(5)').text(),
        접촉력 : $(this).find('td:nth-child(6)').text(),
        조치사항 : $(this).find('td:nth-child(7)').text(),
      }
    });

    const data = ulList.filter(n => n.번호);   
    res.send(data)
  })
})
app.get('/api/Daejeon2',(req,res) => {

  const getHtml = async () => {
    try {
      const a = await axios.get("https://www.daejeon.go.kr/corona19/index.do"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#contBox > div:nth-child(2) > div > ul");
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          확진자: $(this).find('li.tab-1 > div.txt2 > span:nth-child(7) > strong').text(),
          검사중 : $(this).find('li:nth-child(2) > div.txt > span:nth-child(3) > strong').text(),
          격리중 : $(this).find('li:nth-child(3) > div.txt > span:nth-child(3) > strong').text(),
          격리해제 :  $(this).find('li.tab-1 > div.txt2 > span:nth-child(6) > strong').text(),
          사망자 : $(this).find('li.tab-1 > div.txt2 > span:nth-child(8) > strong').text(),
      };
    });

    const data = ulList.filter(n => n.확진자);
    res.send(data);
  })
});
app.get('/api/Seoul1', (req, res) => {
    const getHtml = async () => {
        try {
          const a = await axios.get("http://www.seoul.go.kr/coronaV/coronaStatus.do"); 
          return a;  
        } catch (error) {
          console.error(error);
        }
      };
      
      getHtml()
        .then(html => {
          let ulList = [];
          const $ = cheerio.load(html.data);
          const $bodyList = $("#move-cont1 > div:nth-child(2) > table > tbody > tr");
          
          $bodyList.each(function(i, elem) {
            ulList[i] = {
                number: $(this).find('th').text(),
                status : $(this).find('td:nth-child(2)').text(),
                date : $(this).find('td:nth-child(3)').text(),
                sex :  $(this).find('td:nth-child(4)').text(),
                living : $(this).find('td:nth-child(5)').text(),
                trip : $(this).find('td:nth-child(6)').text(),
                touch : $(this).find('td:nth-child(7)').text(),
                coping : $(this).find('td:nth-child(8)').text()
            };
          });
      
          const data = ulList.filter(n => n.number);
          res.send(data);
        })

        
})

app.get('/api/Kyungki',(req,res) => {

  const getHtml = async () => {
    try {
      const a = await axios.get("https://www.gg.go.kr/bbs/boardView.do?bsIdx=464&bIdx=2296956&menuId=1535"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };
  
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#quick3 > div > div:nth-child(3) > div > div > table > tbody > tr");
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          번호: $(this).find('td:nth-child(1)').text(),
          확진자 : $(this).find('td:nth-child(2)').text(),
          성별: $(this).find('td:nth-child(3)').text(),
          출생연도: $(this).find('td:nth-child(4)').text(),
          확진일자: $(this).find('td:nth-child(5)').text(),
          퇴원: $(this).find('td:nth-child(6)').text(),
          지역: $(this).find('td:nth-child(7)').text(),     
      };
    });

    const data = ulList.filter(n => n.확진자);
    res.send(data);
  })
});

app.get('/api/Kyungki2',(req,res) => {
   
  const getHtml = async () => {
    try {
      const a = await axios.get("https://www.gg.go.kr/bbs/boardView.do?bsIdx=464&bIdx=2296956&menuId=1535"); 
      return a;  
    } catch (error) {
      console.error(error);
    }
  };
  
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#quick3 > div > div.dashBoard > div.countWrap > ul:nth-child(2)");
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          입원환자: $(this).find('li:nth-child(1) > strong').text(),
          퇴원자 : $(this).find('li:nth-child(2) > strong').text(),
          사망자: $(this).find('li:nth-child(3) > strong').text(),
      };
    });

    const data = ulList.filter(n => n.입원환자);
    res.send(data);
  })
});
app.listen(port, () => console.log(`Listening on port ${port}`));