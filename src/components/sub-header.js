import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import DatetimeRangePicker from "react-datetime-range-picker";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [currency, setCurrency] = useState('EUR');
  return (
    <FormGroup row>
      <Grid container>
        <Grid item xs={12} sm={12} lg={4} md={12}>
          <FormControlLabel
            control={
              <Paper component="form" className={classes.root}>
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Search Google Maps"
                  inputProps={{
                    "aria-label": "Search your destination here...",
                  }}
                />
              </Paper>
            }
            label=""
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={6} className="date-sec">
          <FormControlLabel
            control={
              <DatetimeRangePicker
                dateFormat="DD-MMM-YYYY"
                closeOnSelect={true}
                timeFormat={false}
              />
            }
            label=""
          />
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </Grid>
        <Grid item xs={12} sm={6} lg={5} md={6} className="room-count">
          <FormControlLabel
            classes={{ root: "second" }}
            control={
              <TextField
                //label="Size"
                id="outlined-size-small"
                defaultValue="10 guests"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">-</InputAdornment>
                  ),
                }}
              />
            }
            label=""
          />
          <FormControlLabel
            control={
              <TextField
                //label="Size"
                id="outlined-size-small"
                defaultValue="10 rooms"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">-</InputAdornment>
                  ),
                }}
              />
            }
            label=""
          />
          <FormControlLabel
            control={
              <TextField
                id="outlined-select-currency-native"
                label="Filter"
                size="small"
                select
                value={currency}
                SelectProps={{
                  native: true,
                }}
                onChange={(e) => setCurrency(e.target.value)}
                variant="outlined"
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            }
            label=""
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
}
