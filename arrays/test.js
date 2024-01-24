function findWordsContaining(words, x) {
  for (let i = 0; i < words.length; i++) {
    // const arr1 = words[i].find((el) => el === x)
    // console.log(arr1);
  }
}

findWordsContaining(["leet", "code"], "e");
console.log('leet'.includes('e'));
console.log([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]].sort());
console.log(Math.max(0,45));

let ans=0;

for(let i=1;i<points.length;i++) {
    ans=Math.max(ans, points[i][0]-points[i-1][0])
}

return ans