/* ---------- Version without Promises ---------- */
// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }

// getTempCallback('Philadelphia', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

/* ---------- Version with Promises ---------- */
function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Philadelphia').then(function(temp) {
  console.log('Promise success', temp);
}, function(err) {
  console.log('Promise error', err);
});


/* ---------- Challenge Area ---------- */

//if a and b are numbers, sum
//if one of them is not a number, reject
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Both parameters should be numbers!');
    }
  });
}

addPromise(2,2).then(
  function(result) {
    console.log('a + b =', result);
  }, function(err) {
    console.log('Promise error:', err);
  }
);