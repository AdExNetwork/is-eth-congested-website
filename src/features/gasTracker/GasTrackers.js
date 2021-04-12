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
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  control: {
    padding: theme.spacing(2),
  },
  adPaper: {
    border: 0,
    borderRadius: 4,
    boxShadow: theme.shadows[1],
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
  const gasInfo = useSelector(selectGasInfo)
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Box py={2}>
          <Typography
            align="center"
            variant="h5"
            component="h2"
            color="textSecondary"
          >
            Current Gas Price
          </Typography>
        </Box>
        <Grid container justify="space-between" spacing={2}>
          {[
            {
              emoji: "🐢",
              title: "Slow",
              time: "under 30 minutes",
              gasInfoNaming: "slow",
            },
            {
              emoji: "🐇",
              title: "Normal",
              time: "under 5 minutes",
              gasInfoNaming: "normal",
            },
            {
              emoji: "🚀",
              title: "Fast",
              time: "under 2 minute",
              gasInfoNaming: "fast",
            },
            {
              emoji: "⚡",
              title: "Instant",
              time: "under 30 seconds",
              gasInfoNaming: "instant",
            },
          ].map((value, idx) => (
            <Grid key={idx} item xs>
              <Paper color="primary" className={classes.paper}>
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
                          {gasInfo?.[value.gasInfoNaming]?.gwei ?? 0}
                        </Typography>
                        <Typography
                          align="center"
                          variant="body2"
                          color="textSecondary"
                        >
                          ⏲ {value.time}
                        </Typography>
                        <Typography
                          align="center"
                          variant="body2"
                          color="textSecondary"
                        >
                          💸 {gasInfo?.[value.gasInfoNaming]?.usd ?? 0}$
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
          <Grid item xs>
            {/* <Paper elevation={4}> */}
            <Box display="flex" justifyContent="center" alignItems="center">
              <iframe
                src="https://viewm.moonicorn.network/#%7B%22options%22%3A%7B%22publisherAddr%22%3A%220xB7d3F81E857692d13e9D63b232A90F4A1793189E%22%2C%22whitelistedTokens%22%3A%5B%220x6B175474E89094C44Da98b954EedeAC495271d0F%22%5D%2C%22whitelistedType%22%3A%22legacy_300x250%22%2C%22randomize%22%3Atrue%2C%22targeting%22%3A%5B%5D%2C%22width%22%3A%22300%22%2C%22height%22%3A%22250%22%2C%22minPerImpression%22%3A%220%22%2C%22fallbackUnit%22%3Anull%2C%22marketSlot%22%3A%22QmbYBxNPKp2ujNVKsGSRWYMoPZ54vrqYRo1tTJ3nxvyLMX%22%7D%7D"
                width="300"
                height="250"
                scrolling="no"
                frameborder="0"
                className={classes.adPaper}
                onload="window.addEventListener('message', function(ev) { 
		if (ev.data.hasOwnProperty('adexHeight') && ('https://viewm.moonicorn.network' === ev.origin)) {
			for (let f of document.getElementsByTagName('iframe')) {	
				if (f.contentWindow === ev.source) {
					f.height = ev.data.adexHeight;
				}
			}	
		}
	}, false)"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
