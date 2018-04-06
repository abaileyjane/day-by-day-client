import React from 'react';
import {connect} from 'react-redux';
import {ScatterplotChart} from 'react-easy-chart';
import moment from 'moment';

import '../../one-page-wonder.css'

export class Scatterplot extends React.Component{
  constructor(props){
     var firstDateArray = [];
      var currentDate =moment().subtract(30, 'days').format("D-MMM-YY");
      var stopDate = moment().format("D-MMM-YY");
      while (currentDate <= stopDate) {
          firstDateArray.push( moment(currentDate).format('MMMM D Y') )
          currentDate = moment(currentDate).add(1, 'days');
      }
    super(props);
    this.state={ 
      showToolTip:false,
      top:'20px',
      left:'20px',
      type:'',
      x:'',
      y:'',
      height:0,
      width:0,
      data:[],
      dateRange:firstDateArray
    }
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  this.mouseOverHandler = this.mouseOverHandler.bind(this);
  this.mouseOutHandler = this.mouseOutHandler.bind(this);
  this.mouseMoveHandler = this.mouseMoveHandler.bind(this)

  }

updateWindowDimensions() {
  this.setState({ width: (window.innerWidth*0.5), height: (window.innerHeight*0.5) });
}
generateData(startDate, stopDate, dailyLog) {
  console.log('generateData ran')
  var data=[]
  var dateArray = [];
  console.log(this.props.startDate, 'start', this.props.stopDate, 'stop')
  var currentDate = moment(startDate || this.props.startDate);
  console.log(currentDate, 'current date')
  stopDate = moment(stopDate || this.props.stopDate);
  while (currentDate <= stopDate) {
      dateArray.push( moment(currentDate).format('MMMM D Y') )
      currentDate = moment(currentDate).add(1, 'days');
  }
  for(let i=0; i<dateArray.length; i++){
    let today=this.props.dailyLog.filter(function(item){
      return (item.date=== dateArray[i])

    })
    if(today[0].log.length===0){
       data.push({
          type: 'three',
          x: today[0].date,
          y:'No Log Saved'
        })
    }
    if(today[0].log.length>0){
      today[0].log.forEach(function(element){
        if(element.complete===true){
          data.push({
            type: 'one',
            x: today[0].date,
            y:element.habit
          }
        )}
        else if(!element.complete===true){
          data.push({
            type: 'two',
            x: today[0].date,
            y:element.habit
          }
        )}
      })
    }
  }
  this.setState({data: data,
                  dateRange: dateArray})
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}
mouseOverHandler(d, e) {
  console.log('mouse over', this.state.showToolTip)
    this.setState({
      displayPlot:false,
      showToolTip: true,
      top: `${e.screenY - 10}px`,
      left: `${e.screenX + 10}px`,
      y: d.y,
      x: d.x,
      type:d.type});
  }

  mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({top: `${e.y - 10}px`, left: `${e.x + 10}px`});
    }
  }

  mouseOutHandler() {
    console.log('mouse out', this.state.showToolTip, this.state.x, this.state.y)
    this.setState({showToolTip: false});
  }

  
  componentWillUpdate(nextProps, nextState){
    if (this.props.startDate !== nextProps.startDate || this.props.stopDate !==nextProps.stopDate || this.props.dailyLog !==nextProps.dailyLog){
    this.generateData(nextProps.startDate, nextProps.stopDate,  nextProps.dailyLog);
  }}




  render(){
  
    const config=[
     {
      type: 'one',
      color: '#ee0979',
      stroke: 'blue'
    },
    {
      type: 'two',
      color: 'white',
      stroke: 'white'
    },
    {
      type: 'three',
      color: 'black',
      stroke: 'pink'
    }]

      if(moment(this.props.startDate).isAfter(moment(this.props.stopDate))){
        return(
          <div><h2>Whoops! That Start Date is AFTER your End Date!</h2></div>
        )
      }
      if(this.state.showToolTip&&this.state.type==="one"){
        return(
          <div>
            <div className='container dataInfo'>
              <h5>On {this.state.x} you completed your goal to {this.state.y}.</h5>
            </div>
            <div className='col-sm-10'>
             <ScatterplotChart 
              axes 
              margin={{left: 90, right: 10, top:10, bottom:-15}} 
              width={this.state.width} 
              height={this.state.height} 
              data={this.state.data} 
              yType='text' 
              config={config} 
              xType='text'
              mouseOverHandler={this.mouseOverHandler} 
              mouseOutHandler={this.mouseOutHandler}
              mouseMoveHandler={this.mouseMoveHandler}
              />
          </div>  
          </div>)
      }
       if(this.state.showToolTip&&this.state.type==="three"){
        return(
          <div>
            <div className='container dataInfo'>
              <h5>You did not log your day on {this.state.x}.</h5>
            </div>
            <div className='col-sm-10'>
             <ScatterplotChart 
              axes 
              margin={{left: 90, right: 10, top:10, bottom:-15}} 
              width={this.state.width} 
              height={this.state.height} 
              data={this.state.data} 
              yType='text' 
              config={config} 
              xType='text'
              mouseOverHandler={this.mouseOverHandler} 
              mouseOutHandler={this.mouseOutHandler}
              mouseMoveHandler={this.mouseMoveHandler}
              />
          </div>  
          </div>)
      }
        return (
          <div>
           <div className='container dataInfo'>
              <h5>Hover over a DataDot to show details</h5>
            </div>
          <div className='col-sm-10'>
             <ScatterplotChart 
              axes 
              margin={{left: 90, right: 10, top:10, bottom:-15}} 
              width={this.state.width} 
              height={this.state.height} 
              data={this.state.data} 
              yType='text' 
              config={config} 
              xType='text'
              mouseOverHandler={this.mouseOverHandler} 
              mouseOutHandler={this.mouseOutHandler}
              mouseMoveHandler={this.mouseMoveHandler}
              />
          </div>  
          </div>
          )
      }
    }
      




const mapStateToProps = (state,props) => (  
  {
  
  habits: state.habits,
  dailyLog: state.dailyLog,
  startDate: state.startDate,
  stopDate: state.stopDate}
  )

export default connect(mapStateToProps)(Scatterplot)
