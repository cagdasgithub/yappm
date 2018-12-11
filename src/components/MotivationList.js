import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Motivation from "../components/Motivation";
import MotivationApi from "../api/MotivationMock";

class MotivationList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const motivations = MotivationApi.getAllMotivations();
    return (
      <div>
        {motivations ? (
          <div>
            <Grid container spacing={24} style={{ padding: 24 }}>
              {motivations.map(currentMotivation => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Motivation motivation={currentMotivation} />
                </Grid>
                
              ))}
            </Grid>
          </div>
        ) : (
          "No courses found"
        )}
      </div>
    );
  }
}
export default MotivationList;
