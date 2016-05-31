var peeps =[];

var addPeep = function(){
  var fName = document.getElementById('firstName').value;
  var lName = document.getElementById('lastName').value;
  console.log( 'in addPeep - fName: ' + fName + ' lName: ' + lName );

  var thisPeep={
    'firstName': fName,
    'lastName': lName
  };

  peeps.push( thisPeep );

  console.log( 'added: ' + thisPeep.firstName);
  console.log( peeps );

  var newPeepOutput = document.createElement('p');
  newPeepOutput.textContent = fName + ' ' + lName;
  document.getElementById('outputDiv').appendChild(newPeepOutput);

  var newPeepListItem = document.createElement('li');
  newPeepListItem.textContent = fName + ' ' + lName;
  document.getElementById('outputList').appendChild(newPeepListItem);

  var newPeepOption = document.createElement( 'option' );
  newPeepOption.textContent = fName;
  newPeepOption.value = lName;
  document.getElementById( 'outputSelect' ).appendChild( newPeepOption );
}
