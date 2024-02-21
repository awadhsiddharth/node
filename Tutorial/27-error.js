// 4 types of error in node
// 1. Standard js errors ie. <EvalError>, <SyntaxError>, <RangeError>,<Reference Error>
//   TypeError>, <URIError> etc
// 2. System Errors
// 3. User-specified Errors
// 4. Assertion Errors
// Throws a ReferenceError because b is undefined  
try {  
  const a = 1;  
  const c = a + b;  
} catch (err) {  
  console.log(err);  
}  
