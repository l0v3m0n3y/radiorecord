# radiorecord
JavaScript library for radiorecord.ru
# main
```js
async function main(){
    const {radiorecord} = require('./radiorecord');
    const record= new radiorecord();
    let req=await record.club_chart()
    console.log(req)
}
main()
```
