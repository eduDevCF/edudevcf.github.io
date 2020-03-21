var data = {};

function addActivity(name){
  var k = Date.now().toString();
  var act = new Activity(name);
  data[act.id] = act;
  console.log("ACTIVITY ADDED: " + act);
  console.log(data)
  return act;
}

class Activity {
  constructor(actName) {
    this.name = actName;
    this.id = Date.now().toString();
    this.dates = [];
    this.color = this.setRandomColor();
    this.lastUpdated = this.id;
  }
  setRandomColor() {
    var accessibleColors = ["#3333cc", "#3333ff", "#0099cc", "#009999","#0066ff", "#6666ff", "#6600cc", "#9900cc"];
    return accessibleColors[Math.floor(Math.random() * accessibleColors.length)];
  }
}

//addDate(activityID, ts=0)