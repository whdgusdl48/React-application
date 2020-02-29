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
    let ulList2 = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("#patient4");
   
    $bodyList.each(function(i, elem) {
      ulList[i] = {
        인적사항 : $(this).find('td:nth-child(1)').text(),
        감염경로 : $(this).find('td.name').text(),
        접촉 : $(this).find('td:nth-child(3)').text(),
        격리시설 : $(this).find('td:nth-child(4)').text(),
    };
    });
    
    const $bodyList2 = $('#patients > tbody > tr');
    $bodyList2.each(function(i,elem){
      ulList2[i] = {
        경로 : $(this).find('td > h4').text(),
      }
    })
    const data = ulList.filter(n => n.인적사항);
    const data2 = ulList2.filter(n => n.경로);

    console.log(data2[1].경로);
    
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
    const $bodyList = $(" #contents > div > div.list_body > ul");

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

app.get('/api/Daejeon',(req,res) => {
  res.send([{
      'id': 1,
      'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
      'name': '1번확진자',
      'date': '2/21',
      '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 2,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '2번확진자',
        'date': '2/22',
        '조치사항': '동선 방역조치 완료'
        },
      {
        'id': 3,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '3번확진자',
        'date': '2/23',
        '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 4,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '4번확진자',
        'date': '2/26',
        '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 5,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '5번확진자',
        'date': '2/26',
        '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 6,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '6번확진자',
        'date': '2/26',
        '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 7,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '7번확진자',
        'date': '2/26',
        '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 8,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '8번확진자',
        'date': '2/26',
        '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 9,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '9번확진자',
        'date': '2/26',
        '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 10,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '10번확진자',
        'date': '2/27',
        '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 11,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '11번확진자',
        'date': '2/28',
        '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 12,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '6번확진자',
        'date': '2/28',
        '조치사항': '동선 방역조치 완료'
      },
      {
        'id': 13,
        'link': 'https://www.daejeon.go.kr/corona19/index.do?tab=2',
        'name': '6번확진자',
        'date': '2/28',
        '조치사항': '동선 방역조치 완료'
      },
  ])
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
          확진자: $(this).find('li.tab-1 > div.txt > strong').text(),
          검사중 : $(this).find('li:nth-child(2) > div.txt > span:nth-child(3) > strong').text(),
          격리중 : $(this).find('li:nth-child(3) > div.txt > span:nth-child(3) > strong').text(),
          격리해제 :  $(this).find('li:nth-child(3) > div.txt > span:nth-child(4) > strong').text(),
          사망자 : $(this).find('li.tab-3 > div.txt > strong').text(),
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

app.listen(port, () => console.log(`Listening on port ${port}`));