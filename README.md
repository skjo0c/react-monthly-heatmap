# react-monthly-heatmap

A calendar heatmap component built with date-fns, inspired by github's [repo](https://github.com/patientslikeme/react-calendar-heatmap). The component expands to size of container and is super configurable. Try it out on [CodeSandbox](https://codesandbox.io/s/r49xv17zzm).

Based on following tutorials:

[Publish Your Own React Component as Npm Package Under 5 Minutes](https://medium.com/quick-code/publish-your-own-react-component-as-npm-package-under-5-minutes-8a47f0cb92b9)

[Create a custom calendar in React](https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728)

## Setup

Install the npm module with npm:

```
npm i react-monthly-heatmap
```

## Usage

Import the component:

```
import HeatMapCalendar from 'react-monthly-heatmap';
```

To use the component, simply use like following:

```
<HeatMapCalendar
  values={[
    { date: '2019-03-31', count: 1, color: '#8cc665' },
    { date: '2019-04-01', count: 2, color: '#44a340' },
    { date: '2019-04-06', count: 3, color: '#1e6823' },
  ]}
/>
```

## Props

| Name | Type | Description |
| ---- | ---- | ----------- |
| `values` | **Required**, Array of Object | Required array of objects which each have a date property, count and color code. Example: `[{ date: '2019-03-31', count: 1, color: '#8cc665' }]` |
| `onClick` | Function | Callback to invoke when a square is clicked, e.g. `(value) => alert(value)` |
| `onMouseOver` | Function | Callback to invoke when mouse pointer is over a date, e.g. `(event, value) => console.log(event, value)` |

