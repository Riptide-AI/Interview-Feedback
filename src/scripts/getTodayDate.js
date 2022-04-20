// return date format for input [type="date"]
function getTodayDate() {
  function formatDate(num) {
    if (num.toString().length < 2) {
      return `0${num}`;
    }
    return num;
  }
  const date = new Date();
  return [
    date.getFullYear(),
    formatDate(date.getMonth() + 1),
    formatDate(date.getDate())
  ].join("-");
}

export default getTodayDate;
