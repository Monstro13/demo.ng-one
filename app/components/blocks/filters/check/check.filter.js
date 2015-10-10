check.$inject = [];

export default function check() {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
};