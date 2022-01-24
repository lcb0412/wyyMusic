export default function (num){
    let res=0
    if(num>=100000000){
      res=(num/100000000).toFixed(1)+'亿'
    }else if(num>=10000){
      res=(num/10000).toFixed(1)+'万'
    }else{
      res=num
    }
    return res
  }
 