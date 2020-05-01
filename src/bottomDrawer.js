import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, IconButton, Drawer, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { VictoryChart, VictoryTheme, VictoryLine, VictoryLabel, VictoryAxis, VictoryBar} from 'victory';

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
}));

export default function BottomDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const displayData = props.data.length>10? props.data.splice(props.data.length-11, props.data.length-1):props.data
  let minSpeed, maxSpeed, unit;
  if (props.data.length>0) {
    maxSpeed = Math.max.apply(Math, props.data.map(function(o) { return o['averageSpeed']; }))
    minSpeed = Math.min.apply(Math, props.data.map(function(o) { return o['averageSpeed']; }))
    unit = (maxSpeed-minSpeed) / 5
  }
  

  const colorSwitcher = {
    fill: (data) => {
      let color = 'blue';
      if (data.datum['averageSpeed'] > 0 && data.datum['averageSpeed'] <= unit) {
        color = 'red';
      }
      if (data.datum['averageSpeed'] > unit && data.datum['averageSpeed'] <= 2*unit) {
        color = 'orange';
      }
      if (data.datum['averageSpeed'] > 2*unit && data.datum['averageSpeed']<= 3*unit) {
        color = 'yellow';
      }
      if (data.datum['averageSpeed'] > 3*unit && data.datum['averageSpeed'] <= 4*unit) {
        color = 'green';
      }
      return color;
    },
    strokeWidth: 0
  };


    return (
      <Grid 
      container
      direction="column"
      alignItems="center"
      style={{position: 'fixed', bottom: '0vh'}}
      >
        <Button 
        onClick={()=>setOpen(true)}
        color="primary">
          Show Graph
        </Button>
        <Drawer 
        anchor='bottom' 
        open={open} 
        onClose={()=> setOpen(false)}
        className={classes.drawer}>
          
          <Grid
          item 
          container
          direction="column"
          alignItems="center"
          >
            <IconButton 
            onClick={()=>setOpen(false)}
            color="primary">
              <ExpandMore /> 
            </IconButton>
            <div>

            {props.data.length>0 && props.data[0]['distance']>0 && 
            <VictoryChart
              width={800}
              padding={{ left: 250, bottom: 50, top: 50 }}
              domainPadding={{x:100}}
              theme={VictoryTheme.material}
            >
              <VictoryLabel 
              text={"Time spent between stops for line "+displayData[0]['LineRef']} 
              x={350} y={10} textAnchor="middle"/>
              <VictoryAxis
                dependentAxis
                style={{
                  tickLabels: {
                    letterSpacing: "1px",
                    fontSize: 9,
                    marginBlock: "20px"
                  }
                }}
              />
              <VictoryAxis
                tickFormat={(x) => (`${Math.ceil(x * 60)} min`)}
              />
              <VictoryLine
                data={displayData}
                x="duration"
                y="stopName"
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc"}
                }}
              />
            </VictoryChart>}

            {props.data.length>0 && props.data[0]['distance']>0 && 
            <VictoryChart
              width={800}
              padding={{ left: 250, right: 50, bottom: 50, top: 50  }}
              domainPadding={{x:100}}
              theme={VictoryTheme.material}
            >  
              <VictoryLabel 
              text={"Average Speed between Stops for line "+displayData[0]['LineRef']} 
              x={350} y={10} textAnchor="middle"/>
              
              <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x}mph`)}
                
              />
              <VictoryAxis
                style={{
                  tickLabels: {
                    letterSpacing: "1px",
                    fontSize: 9,
                    marginBlock: "20px"
                  }
                }}
              />

              <VictoryBar
                horizontal
                data={displayData}
                labels={({ datum }) => `${datum['averageSpeed']}`}
                style={{data: { ...colorSwitcher }}}
                y="averageSpeed"
                x="stopName"
              />
            </VictoryChart>}

            </div>
            {props.data.length>0 && props.data[0]['distance']===0 && 
              <Typography variant="h6">
                Not enough data to show graph.
              </Typography>
            }
            <br/>
          </Grid>

        </Drawer>
      </Grid>
    );
}

