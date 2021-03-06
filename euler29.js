//returns a flattened array
let flat = (a,b) => {return a.concat(b)}

//filters repeaded consecutive elements
let repeated = (x,i,a) => {return !(x===a[i-1])}

//returns array with all numbers in range
let range = (n,m) => {
    res =[]
    for (let i=n; i<=m; i++)
        res.push(i)
    return res
}
//Reverse String function
let reverseStr = s =>{
  let res = ""
  for(let i =s.length-1;i>=0;i--){
    res+=s.charAt(i)
  }
  return res
}

//adds numbers in terms of strings
let sum2 = (s1,s2) => {
  let excedent = 0
  let res = ""

  //Define the last character's index of each string
  let maxs1 = s1.length-1
  let maxs2 = s2.length-1

  for (i=maxs1, j=maxs2; i>=0 || j>=0 ; i--,j--){

    //default value of 0, in case the index is negative
    let num1, num2 = 0

    //control the length of the string. Only assign a character value if index is >= 0
    if (i>=0)
      num1 = parseInt(s1.charAt(i))
    if (j>=0)
      num2 = parseInt(s2.charAt(j))

    //The sum is the sum of the two numbers plus the excedent of the previous sum, if there was any
    let sum = num1 + num2 + excedent

    let thisDigit = 0
    if (sum==10){
      thisDigit = 0
      excedent = 1
    } else if(sum>10){
      thisDigit = sum%10
      excedent = 1
    }else{
      thisDigit = sum
      excedent = 0
    }
    res += thisDigit
  }

  //If the last excedent was 1, we need to add it manually
  if(excedent==1)
    res+="1"

  //Reverse String to display in the correct order
  res = reverseStr(res)

  return res
}

let multi = (x,y) => {
    let xs = String(x)
    let res = String(x)
    for (let i=1;i<y;i++){
        res = sum2(res,xs)
    }
    return res
}

let powString = (x,y) => {
    let xs = String(x)
    let res = String(x)
    for (let i=1;i<y;i++){
        res = multi(res,xs)
    }
    return res
}

let smallerThanString = (s1,s2) => {
    if (s1===s2) return 1
    else if (s1.length<s2.length)
        return -1
    else if (s1.length>s2.length)
        return 1
    else {
        for (let i = 0; i<s1.length; i++){
            if (Number(s1.charAt(i)<Number(s2.charAt(i))))
                return -1
            else if (Number(s1.charAt(i)>Number(s2.charAt(i))))
                return 1
        }
    }
    return 1
}

//Do all the calculations for a^b and then, flatten, sort it and filter the repeated ones.
let all = range(2,100).map(
            a => range(2,100).map(
                b => {
                    return powString(a,b)
                }
            )
        ).reduce(flat).sort(smallerThanString).filter(repeated)

console.log(all.length)
