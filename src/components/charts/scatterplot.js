import React from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
import '../../one-page-wonder.css'


var LineChart = require( 'react-chartjs').Line;


    function normalizeData(beginDate, endDate, fieldsTracked, dailyLog) {
      console.log('normalizeData ran', fieldsTracked)
      const withinDate = (date) => (new Date(date) >= new Date (beginDate) && new Date (date) <=  new Date (endDate));
      
      const filterHabits = 
        (log, names) => log.reduce((acc, next) => {
             (next.complete && names.includes(next.habit)) ?
               acc.push(next.habit) :
               acc.push(" ");
             return acc;
          }, []);

      const habitsOfInterest = dailyLog.reduce((acc, next) => {
        if (withinDate(next.date)) {
           acc.push(filterHabits(next.log, fieldsTracked));
        } 
        else {}
        return acc;
      }, []);

     
      const zipp = rows=>rows[0].map((_,c)=>rows.map(row=>row[c]));

      console.log(habitsOfInterest, "habits of habitsOfInterest")
      const lineChartData = zipp(habitsOfInterest);
      console.log(lineChartData, 'lineChartData');
      let modLineChartData = lineChartData.map(function(item){
        item.map(function(item){
             if(item===undefined){
                return ""
              }
              else {return item}
        }) 
        return item
        }
      ) 
      console.log('modLineChartData', modLineChartData)
      const datasets = modLineChartData.map(function(item,index){return(
         {
          data: item,
            fill: false,
            showLine: false,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)',
           pointRadius: 15,
           pointStyle: 'rectRounded'
}
      )}
      )
      return datasets
    }
    

    




export class Scatterplot extends React.Component{
  constructor(props){
    super(props);
    this.state={
          datasets: [],
            xAxes: [{
              gridLines:{
                offsetGridLines:true,
                drawBorder:false
              },
              type:'category',
              labels:[],
              display: true,
              scaleLabel: {
                display: true,
                labelString: ''
              }
            }]
            ,
            yAxes: [{
              gridLines:{
                offsetGridLines:true,
                drawBorder:false
              },
              type: 'category',
              position: 'left',
              labels: [],
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'yaxis'
              },
              ticks: {}
              
            }]
    }
  }
    
  
  setBigState(startDate, stopDate, habits, ){
      this.setState({
        datasets: []
      })
      console.log(this.props.dailyLog)
      const habitLabels = [];
      (habits ||this.props.habits).map(function(el){
        habitLabels.push(el.title)})

        var dateArray = [];
        console.log(this.props.startDate, 'start', this.props.stopDate, 'stop')
        var currentDate = moment(startDate || this.props.startDate);
        console.log(currentDate, 'current date')
        var stopDate = moment(stopDate || this.props.stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('MMMM D Y') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        const datasets = normalizeData(startDate || this.props.startDate, stopDate || this.props.stopDate, habitLabels, this.props.dailyLog)
        console.log("setBigState ran", dateArray, habitLabels, "these are the datasets", datasets)
        this.setState({ 
          datasets:datasets,
          labels: dateArray,
          yAxes:
            [{
              type:'category',
              ticks: {fontSize: 16, reverse:true},
              labels: habitLabels,
              display: true,
              scaleLabel: {
                padding:10,
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
                 padding:10,
                display: true,
                labelString: 'Dates',
                fontSize:24
              }
            }]})
      }
       
    
  


 componentWillMount(nextProps, nextState){

        // this.setBigState();

  }
  componentWillUpdate(nextProps, nextState){
    if (this.props.startDate !== nextProps.startDate || this.props.stopDate !==nextProps.stopDate || this.props.habits !== nextProps.habits || this.props.dailyLog !==nextProps.dailyLog){
    this.setBigState(nextProps.startDate, nextProps.stopDate, nextProps.habits, nextProps.dailyLog);}
  }
  
  render(){
    console.log(this.state)

    return (
      <div className='col-sm-10'>
        <Line  responsive='true' data={{labels: [this.state.labels],
            datasets:this.state.datasets}} 
          options={{
          tooltips: {enabled: false},
      hover: {mode: null},
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
