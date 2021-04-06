import React, { useEffect } from "react"
import {
  Grid,
  makeStyles,
  Paper,
  Box,
  ButtonBase,
  Typography,
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { fetchGasInfoAsync, selectGasInfo } from "./gasTrackerSlice"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: theme.palette.background.default,
  },
  control: {
    padding: theme.spacing(2),
  },
  emoji: {
    width: "100%",
    height: "100%",
    fontSize: 60,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}))

export default function GasTrackers() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const gasInfo = useSelector(selectGasInfo)
  useEffect(() => {
    dispatch(fetchGasInfoAsync())
  }, [])
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[
            {
              emoji: "🐢",
              title: "Slow",
              time: "under 30 minutes",
              gasInfoNaming: "safeLow",
            },
            {
              emoji: "🐰",
              title: "Normal",
              time: "under 5 minutes",
              gasInfoNaming: "average",
            },
            {
              emoji: "🚀",
              title: "Fast",
              time: "under 2 minute",
              gasInfoNaming: "fast",
            },
            {
              emoji: "⚡",
              title: "Ultra Fast",
              time: "under 30 seconds",
              gasInfoNaming: "fastest",
            },
          ].map((value, idx) => (
            <Grid key={idx} item md={3} xs={12}>
              <Paper elevation={4} color="default" className={classes.paper}>
                <Grid container spacing={2}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    width={1}
                  >
                    <ButtonBase className={classes.emoji}>
                      <Box p={3}>{value.emoji}</Box>
                    </ButtonBase>
                  </Box>
                  <Grid item xs={12} sm container>
                    <Grid item container spacing={2} justify="center">
                      <Box
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                      >
                        <Typography align="center" variant="h6">
                          {value.title}
                        </Typography>
                        <Typography align="center" variant="h2">
                          {Number(gasInfo[value.gasInfoNaming] || 0) / 10}
                        </Typography>
                        <Typography
                          align="center"
                          variant="body2"
                          color="textSecondary"
                        >
                          Time: {value.time}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
