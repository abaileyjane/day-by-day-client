import React from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
var LineChart = require( 'react-chartjs').Line;


export class Scatterplot extends React.Component{
  constructor(props){
    super(props);
    this.state={
        
      
        data:{datasets: [] },
        options: {responsive: true,
          title:{
            display: true,
            text: 'Habit Tracker'
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              type:'category',
              labels:['alanna','bailey','was','here'],
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date'
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
    }
  }
    
  
  setBigState(startDate, stopDate){
      const habitLabels = []
      this.props.habits.map(function(el){
        habitLabels.push(el.title)})
        var dateArray = new Array();
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('MMMM D Y') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        this.setState({ options:{...this.state.options, scales:{yAxes:
            [{
              type:'category',
              labels:habitLabels,
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'habits'
              }
            }], xAxes:
            [{
              type:'category',
              labels:dateArray,
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'dates'
              }
            }]}}})
    }  

  // 

  componentDidMount(){
    this.setBigState(this.props.startDate, this.props.stopDate);
    }
    //   // this.generateDataPoints();
  
  render(){
    const {data, options} = this.state
    console.log(this.state)
    return (
      <div>
        <Line  data={data} options={options} />
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
