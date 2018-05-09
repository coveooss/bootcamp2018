

class CustomFilter {

  constructor(searchInterfaceElement) {
    this.searchInterface = searchInterfaceElement;
    Coveo.load('Datepicker').then(() => this.createDatePicker());
    Coveo.$$(this.searchInterface).on('buildingQuery', (e, args) => this.handleBuildingQuery(args));
  }

  createDatePicker() {
    // Create the new DatePicker(s). 
    // The first parameter of the constructor function is the callback function we wish to execute every time a new value is selected in the calendar.

    // We need two date picker : one for the start date, a second one for the end date.
    const startDatePicker = new Coveo.DatePicker(picker => this.handleStartDateChange(picker.getValue()));
    // Append each date picker element to the correct HTMLElement
    Coveo.$$(this.searchInterface).find('.from').appendChild(startDatePicker.build());

    const endDatePicker = new Coveo.DatePicker(picker => this.handleEndDateChange(picker.getValue()));
    Coveo.$$(this.searchInterface).find('.to').appendChild(endDatePicker.build());
  }

  handleStartDateChange(date) {
    // Everytime the user select a new value in the date picker, this function will execute.
    // For now, we simply low the selected date in the console. 
    // We might want to do something more useful with it.

    this.startDate = date;
    Coveo.executeQuery(this.searchInterface);
  }

  handleEndDateChange(date) {

    this.endDate = date;
    Coveo.executeQuery(this.searchInterface);
  }

  handleBuildingQuery(args) {
    // Everytime a new query is fired, this function will execute.
    // We can use the query builder to send a valid query expression to the index.
    // Use this page to see examples of possible valid query expression : http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=357
    if(this.startDate) {
      args.queryBuilder.advancedExpression.add(`@date>=${this.startDate}`);
    }

    if(this.endDate) {
      args.queryBuilder.advancedExpression.add(`@date<=${this.endDate}`);
    }

  }

}