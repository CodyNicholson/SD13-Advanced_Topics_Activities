enum Days {
    Monday = 1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
  }
  
  function myDay(scheduled: Days): void {
    scheduled <= 5 ? console.log("weekday") : console.log("weekend")
  }
  
  myDay(Days.Saturday);
  
  
  
  // Same functionality using a switch statement and higher order function.
  function myDay1(day: string): string {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (days.includes(day)) {
      return day
    } else {
      return 'Error'
    }
  }
  
  // higher order function, takes function as an argument
  function myDay2(myDay1: string): void {
    switch (myDay1) {
      case 'Saturday':
        console.log("weekend")
        break
      case 'Sunday':
        console.log("weekend")
        break
      case 'Error':
        throw Error(`did not enter a day of the week`)
      default:
        console.log("weekday")
    }
  }
  
  myDay2(myDay1('Monday'))