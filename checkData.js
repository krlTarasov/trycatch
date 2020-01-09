export default function checkData(num) {
  if (!isNaN(Number(num))) {
    return Number(num);
  }
  throw new Error('Argument is not a number');
}
