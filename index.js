const puppeteer = require('puppeteer');
const fs = require('fs');


( async  ( )  =>  { 
   const browser = await puppeteer.launch()
   const page = await browser.newPage()
   await page.goto('https://instagram.com/rocketseat_oficial')
   //await page.screenshot({path: 'rocketseat.png'})

   const imgList = await page.evaluate(() =>{
       // Toda essa função será execultada no browser

       // Pegar todas as imagens que estão na part de posts
       const nodeList = document.querySelectorAll('article img')
       // Transformar o nodeList em Arry
       const imgArray = [...nodeList]

       // Transformar os nodes (elemento html) em objetos js
       const imgList = imgArray.map(({src})=>({
           src
       }))

       // Colocar os dados para fora da função (return)

       return imgList
   })
   fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
       if(err) throw new Error('something went wrong')

       console.log('well done! ')
   })

   await browser.close()
  } ) ( ) ;