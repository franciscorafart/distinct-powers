let range = (n,m) => {
    res =[]
    for (let i=n; i<=m; i++)
        res.push(i)
    return res
}
let flat = (a,b) => {return a.concat(b)}
let smallerThan = (a,b) => {return a<b? -1:1}
let repeated = (x,i,a) => {return !(x===a[i-1])}

let all = range(2,100).map(
            a => range(2,100).map(
                b => {
                    return Math.pow(a,b)
                }
            )
        ).reduce(flat).sort(smallerThan).filter(repeated)

//TODO: implement power as a string multiplication
