import React from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
var LineChart = require( 'react-chartjs').Line;


export class Scatterplot extends React.Component{
  constructor(props){
    super(props);
    this.state={
        startDate: this.props.startDate,
          stopDate:this.props.stopDate,
          labels: [],
          datasets: [
            {label:'homework',
              data:['clean room', 'clean room', 'clean room', 'clean room'],
            fill: false,
            showLine: false,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)'},

            {label:'dished',
            data:['do homework', 'do homework', '', 'do homework'],
            fill: false,
            showLine: false,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)'}
      ] ,
            xAxes: [{
              type:'category',
              labels:['alanna','bailey','was','here'],
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'not updates'
              }
            }]
            ,
            yAxes: [{
              type: 'category',
              position: 'left',
              labels: ['please', 'god', 'work'],
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'yaxis'
              },
              ticks: {}
              
            }]
    }
  }
    
  
  setBigState(){
      const habitLabels = []
      this.props.habits.map(function(el){
        habitLabels.push(el.title)})
        var dateArray = new Array();
        var currentDate = moment(this.state.startDate);
        var stopDate = moment(this.state.stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('MMMM D Y') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        console.log("serBigState ran", dateArray)
        this.setState({ 
          datasets:[],
          labels: dateArray,
          yAxes:
            [{
              type:'category',
              labels: habitLabels,
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'habits'
              }
            }], 
            xAxes:
            [{
              type:'category',
              ticks:{reverse:true},
              labels: dateArray,
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'dates'
              }
            }]})
    }  

  // 
generateDataPoints(){
      let dataSetArray=[];
      let habitLabels=[];
      let dateArray=[];
      let dataSet={};
      
      for(let i=0; i<habitLabels.length; i++){
        let currentHabit=habitLabels[i];
        let dataSet={data:[],
          fill: false,
          showLine: false,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(75, 192, 192)'}
          for (let i=0; i<dateArray.length; i++){
            let currentLoopDate=dateArray[i];
            let currentlog=this.props.dailyLog.filter({date: currentLoopDate});
            if (currentlog.log.includes({habit:currentHabit, complete:true})){
              dataSet.data.push(currentHabit)
            }
            else {
              dataSet.data.push('')
            }
          }
        dataSetArray.push(dataSet);

      }
      return this.setState({datasets:dataSetArray})
    }

  componentWillMount(){
        this.setBigState();

  }
  
  render(){

    console.log(this.state)
    return (
      <div>
        <Line  data={{labels: [this.state.labels],
            datasets:this.state.datasets}} 
          options={{
            responsive: true,
            title:{
              display: true,
              text: 'Habit Tracker'
            },
            legend: {
              display: false
            },
            scales: {xAxes:this.state.xAxes,yAxes:this.state.yAxes}
        }} />
      </div>  
    
  
  )}
}


const mapStateToProps = (state) => {
  console.log('this ran', state.index.habits);

  return (
  
  {
  
  habits: state.index.habits,
        dailyLog: state.index.dailyLog}
  )}

export default connect(mapStateToProps)(Scatterplot)
