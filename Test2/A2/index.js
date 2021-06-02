let data=[{
    name: 'Arsenal',
    points: 99,
    GD: 45
  },
  {
    name: 'Chelsea',
    points: 75,
    GD: 39
  },
  {
    name: 'Manchester United',
    points: 60,
    GD: 29
  },
  {
    name: 'Liverpool',
    points: 88,
    GD: 39
  },
  {
      name:'B',
      points: 99,
      GD:45
  }
];




for(let i  = 0 ; i< data.length; i++){
    for(let j = i+1 ; j < data.length;j++){
        if(data[i].points<data[j].points){
            let temp = data[i];
            data[i]=data[j];
            data[j]=temp;
        }
        else 
        if(data[i].points==data[j].point && data[i].GD < data[j].GD){
            let temp = data[i];
            data[i]=data[j];
            data[j]=temp;
        }
        else
        if(data[i].points==data[j].point && data[i].GD == data[j].GD && data[i].name < data[j].name){
            let temp = data[i];
            data[i]=data[j];
            data[j]=temp;
        }
    }
}


data[0].pos

let newData = data.map(function(item, index) {
    return {
        name: item.name,
        points: item.points,
        GD: item.GD,
        position: index + 1
    }
})
console.log(data);
console.log(newData);