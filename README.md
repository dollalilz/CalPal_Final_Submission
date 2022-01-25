# CalPal_working

## How To Run

In the repo, please run the following commands:

1. `npm install`
2. `expo start`

Once that's done, run `expo start` to run the application. It is recommended to run via your phone vs.  browser.

### Problems encountered during coding implementation: 
1. Implementation of Google fonts without installing dependencies was a challenge. Therefore, the typeface implemented does not reflect our intentions.
2. The time picker has a known bug where the picker is executed/ shown twice. More info [here](https://github.com/mmazzarolo/react-native-modal-datetime-picker/issues/355). If the timepicker does not work entirely, then run `expo install @react-native-community/datetimepicker`. If datetime picker errors persist, please refer to the screenshots directory for proof it works on Android. More info [here](https://github.com/react-native-datetimepicker/datetimepicker).