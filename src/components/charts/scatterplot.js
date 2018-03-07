import React from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
var LineChart = require( 'react-chartjs').Line;


export class Scatterplot extends React.Component{
  constructor(props){
    super(props);
    this.state={
        
      
        data:{xLabels: [],
            yLabels: [],
            datasets: []},
        options: {responsive: true,
          title:{
            display: true,
            text: 'Habit Tracker'
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date'
              }}
            ,
            yAxes: {
              type: 'category',
              position: 'left',
              display: true,
              scaleLabel: {
                display: true,
                labelString: ''
              },
              ticks: {
                reverse: true
              }
            }
          }
      }
    }
  }
    
  
  getHabits(){
    console.log(this.props.habits);
      const habitLabels = []
      this.props.habits.map(function(el){
        console.log(el.title)
        habitLabels.push(el.title)})
      console.log(habitLabels)
      return this.setState({data: Object.assign({}, this.state.data,{yLabels: habitLabels})})
  }

 

  getDates(startDate, stopDate) {
        
        var dateArray = new Array();
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('MMMM D Y') )
            currentDate = moment(currentDate).add(1, 'days');
    }
    console.log(dateArray)
        return this.setState({data:{...this.state.data, xLabels: dateArray}});
    }  

  generateDataPoints(){
      let dataset=[];
      
      for(let i=0; i<this.props.habits.length; i++){
        let currentHabit=this.props.habits[i];
        let newDataSet={
          data: [],
          fill: false,
          showLine: false,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(75, 192, 192)'
        }
          for (let i=0; i<this.state.data.xLabels.length; i++){
            let currentDate=this.state.data.xLabels[i];
            let currentlog=this.props.dailyLog.filter({date: currentDate});
            if (currentlog.log.includes({habit:currentHabit, complete:true})){
              newDataSet.data.push(currentHabit)
            }
            else {
              newDataSet.data.push(null)
            }
          }
        dataset.push(newDataSet);

      }
      return this.setState({data:{datasets:dataset}})
    }

  componentWillMount(){
    this.getDates(this.props.startDate, this.props.stopDate);
    this.getHabits();
    this.generateDataPoints();
    console.log(this.state)}

  render(){
    
    return (
      <div>
        <Line  data={this.state.data} options={this.state.options} />
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
