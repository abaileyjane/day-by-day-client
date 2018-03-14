import React from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
import '../../one-page-wonder.css'


var LineChart = require( 'react-chartjs').Line;



export class Scatterplot extends React.Component{
  constructor(props){
    super(props);
    this.state={
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
        console.log(this.props.startDate, 'start', this.props.stopDate, 'stop')
        var currentDate = moment(this.props.startDate);
        console.log(currentDate, 'current date')
        var stopDate = moment(this.props.stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('MMMM D Y') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        console.log("serBigState ran", dateArray, habitLabels)
        this.setState({ 
          datasets:[],
          labels: dateArray,
          yAxes:
            [{
              type:'category',
              ticks: {fontSize: 16, reverse:true},
              labels: habitLabels,
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Habits',
                fontSize:24
              }
            }], 
            xAxes:
            [{
              type:'category',
              ticks:{reverse:true, fontSize: 16},
              labels:dateArray,
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Dates',
                fontSize:24
              }
            }]})
    }  

  // 
generateDataPoints(){
  console.log('generateDataPoints ran')
      let dataSetArray=[];
      let habitLabels=this.props.habits;
      let dateArray=this.state.labels;
      let dataSet={};
      for(let i=0; i<habitLabels.length; i++){
          console.log('dataset', dataSet);
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
          
        dataSetArray.push(dataSet);
}
      }
      return this.setState({datasets:dataSetArray})
    }

 componentWillMount(nextProps, nextState){

        this.setBigState();
        this.generateDataPoints();

  }
  
  render(){

    console.log(this.props)
    return (
      <div className='col-sm-10'>
        <Line  responsive='true' data={{labels: [this.state.labels],
            datasets:this.state.datasets}} 
          options={{
            height:200,
            width: 200,
            responsive: true,
            title:{
              display: false,
              text: 'Habit Tracker',
              fontSize:24
            },
            legend: {
              display: false
            },
            scales: {xAxes:this.state.xAxes,yAxes:this.state.yAxes}
        }}  />
      </div>  
    
  
  )}
}


const mapStateToProps = (state,props) => (  
  {
  
  habits: state.habits,
  dailyLog: state.dailyLog,
  startDate: state.startDate,
  stopDate: state.stopDate}
  )

export default connect(mapStateToProps)(Scatterplot)
